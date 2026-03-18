import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

/*
POST /api/exam/[assignmentId]/submit
Body: { answers: [{question_id, selected_index}], tab_switches?: number, fullscreen_exits?: number }
Validates session, grades answers, records in assignment_completions.
*/
export async function POST(
  req: NextRequest,
  { params }: { params: { assignmentId: string } }
) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const assignmentId = params.assignmentId;

  // Fetch the assignment
  const { data: assignment, error: assignError } = await supabase
    .from("assignments")
    .select("*")
    .eq("id", assignmentId)
    .single();

  if (assignError || !assignment) {
    return NextResponse.json({ error: "Assignment not found" }, { status: 404 });
  }

  if (assignment.type !== "exam") {
    return NextResponse.json({ error: "This assignment is not an exam" }, { status: 400 });
  }

  // Fetch the exam session
  const { data: session } = await supabase
    .from("exam_sessions")
    .select("*")
    .eq("assignment_id", assignmentId)
    .eq("student_id", user.id)
    .single();

  if (!session) {
    return NextResponse.json({ error: "No exam session found" }, { status: 404 });
  }

  if (session.status === "submitted" || session.status === "force_submitted") {
    return NextResponse.json({ error: "Exam already submitted" }, { status: 409 });
  }

  // Check time — allow 30s grace period
  const endsAt = new Date(session.ends_at);
  const gracePeriodMs = 30 * 1000;
  const now = new Date();

  if (now.getTime() > endsAt.getTime() + gracePeriodMs) {
    // Mark as expired
    await supabase
      .from("exam_sessions")
      .update({ status: "expired" })
      .eq("id", session.id);
    return NextResponse.json({ error: "Exam time expired" }, { status: 410 });
  }

  const body = await req.json();
  const { answers, tab_switches, fullscreen_exits } = body;

  if (!Array.isArray(answers)) {
    return NextResponse.json({ error: "answers array is required" }, { status: 400 });
  }

  const config = assignment.config || {};
  const questionIds = config.question_ids || [];

  // Fetch the actual questions (with correct_index) for grading
  const { data: questions } = await supabase
    .from("teacher_questions")
    .select("id, correct_index")
    .in("id", questionIds);

  const correctMap = new Map<string, number>();
  for (const q of questions || []) {
    correctMap.set(q.id, q.correct_index);
  }

  // Grade the answers
  let correctCount = 0;
  const gradedAnswers = answers.map((a: { question_id: string; selected_index: number }) => {
    const correctIndex = correctMap.get(a.question_id);
    const isCorrect = correctIndex !== undefined && a.selected_index === correctIndex;
    if (isCorrect) correctCount++;
    return {
      question_id: a.question_id,
      selected_index: a.selected_index,
      correct: isCorrect,
    };
  });

  const totalQuestions = questionIds.length;
  const score = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;

  const submittedAt = new Date().toISOString();
  const timeSpentSeconds = Math.round(
    (new Date(submittedAt).getTime() - new Date(session.started_at).getTime()) / 1000
  );

  // Update the exam session
  await supabase
    .from("exam_sessions")
    .update({
      status: "submitted",
      submitted_at: submittedAt,
      answers: gradedAnswers,
      score,
      tab_switches: tab_switches ?? session.tab_switches ?? 0,
      fullscreen_exits: fullscreen_exits ?? session.fullscreen_exits ?? 0,
    })
    .eq("id", session.id);

  // Also record in assignment_completions for consistency
  await supabase
    .from("assignment_completions")
    .insert({
      assignment_id: assignmentId,
      student_id: user.id,
      score,
      time_spent_seconds: timeSpentSeconds,
      completed_at: submittedAt,
      answers: gradedAnswers,
    });

  // Log activity
  const today = new Date().toISOString().split("T")[0];
  await supabase.from("user_activity").upsert(
    {
      user_id: user.id,
      activity_date: today,
      quizzes_completed: 1,
    },
    { onConflict: "user_id,activity_date" }
  );

  const showResults = config.show_results ?? false;

  return NextResponse.json({
    submitted: true,
    score: showResults ? score : undefined,
    correct_count: showResults ? correctCount : undefined,
    total_questions: showResults ? totalQuestions : undefined,
  });
}
