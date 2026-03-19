import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { questionBank } from "@/data/question-bank";

/*
GET /api/exam/[assignmentId]/submissions
Returns all submissions for an exam, with detailed answer data.
Teacher only.
*/
export async function GET(
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

  // Fetch assignment with classroom info
  const { data: assignment, error: assignError } = await supabase
    .from("assignments")
    .select("*, classrooms(teacher_id, name)")
    .eq("id", assignmentId)
    .single();

  if (assignError || !assignment) {
    return NextResponse.json({ error: "Assignment not found" }, { status: 404 });
  }

  const classroom = assignment.classrooms as { teacher_id: string; name: string } | null;
  if (!classroom || classroom.teacher_id !== user.id) {
    return NextResponse.json({ error: "Not authorized" }, { status: 403 });
  }

  // Fetch all exam sessions (no FK join - profiles queried separately)
  const { data: sessions } = await supabase
    .from("exam_sessions")
    .select("*")
    .eq("assignment_id", assignmentId)
    .in("status", ["submitted", "force_submitted", "expired"])
    .order("submitted_at", { ascending: false });

  // Fetch profiles separately
  const studentIds = (sessions || []).map((s) => s.student_id);
  const { data: profilesData } = studentIds.length > 0
    ? await supabase.from("profiles").select("id, display_name, email").in("id", studentIds)
    : { data: [] };
  const profileMap = new Map<string, { display_name: string; email: string }>();
  for (const p of profilesData || []) {
    profileMap.set(p.id, { display_name: p.display_name || "Unknown", email: p.email || "" });
  }

  const config = assignment.config || {};

  // Build questions list with correct answers for display
  const questions: Array<{
    id: string;
    question: string;
    options: string[];
    correct_index: number;
    source: "bank" | "custom";
  }> = [];

  // Bank questions
  const bankIds = (config.bank_question_ids as (number | string)[]) || [];
  for (const idx of bankIds) {
    const numIdx = typeof idx === "string" ? parseInt(String(idx).replace("bank-", "")) : idx;
    if (numIdx >= 0 && numIdx < questionBank.length) {
      const entry = questionBank[numIdx];
      questions.push({
        id: `bank-${numIdx}`,
        question: entry.question.question,
        options: entry.question.options,
        correct_index: entry.question.correctIndex,
        source: "bank",
      });
    }
  }

  // Custom questions
  const customIds = (config.custom_question_ids as string[]) || [];
  const legacyIds = (config.question_ids as string[]) || [];
  const allCustomIds = customIds.length > 0 ? customIds : legacyIds;

  if (allCustomIds.length > 0) {
    const { data: customQuestions } = await supabase
      .from("teacher_questions")
      .select("id, question, options, correct_index")
      .in("id", allCustomIds);

    for (const q of customQuestions || []) {
      questions.push({
        id: q.id,
        question: q.question,
        options: typeof q.options === "string" ? JSON.parse(q.options) : q.options,
        correct_index: q.correct_index,
        source: "custom",
      });
    }
  }

  // Build question map for easy lookup
  const questionMap = new Map(questions.map((q) => [q.id, q]));

  const submissions = (sessions || []).map((session) => {
    const profile = profileMap.get(session.student_id);
    const answers = Array.isArray(session.answers) ? session.answers : [];
    const startedAt = new Date(session.started_at);
    const submittedAt = session.submitted_at ? new Date(session.submitted_at) : null;
    const timeSpentSeconds = submittedAt
      ? Math.round((submittedAt.getTime() - startedAt.getTime()) / 1000)
      : null;

    return {
      student_id: session.student_id,
      name: profile?.display_name || "Unknown",
      email: profile?.email || "",
      status: session.status,
      score: session.score,
      tab_switches: session.tab_switches || 0,
      fullscreen_exits: session.fullscreen_exits || 0,
      time_spent_seconds: timeSpentSeconds,
      started_at: session.started_at,
      submitted_at: session.submitted_at,
      answers: answers.map((a: { question_id: string; selected_index: number; correct?: boolean }) => {
        const q = questionMap.get(a.question_id);
        return {
          question_id: a.question_id,
          question_text: q?.question || "Unknown question",
          options: q?.options || [],
          correct_index: q?.correct_index ?? -1,
          selected_index: a.selected_index,
          correct: a.correct ?? (q ? a.selected_index === q.correct_index : false),
        };
      }),
    };
  });

  return NextResponse.json({
    assignment: {
      id: assignment.id,
      title: assignment.title,
      classroom_name: classroom.name,
      config,
    },
    questions,
    submissions,
    total_questions: questions.length,
  });
}
