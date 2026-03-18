import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

/*
POST /api/exam/[assignmentId]/start
Creates or resumes an exam session for the current student.
Returns: session data + questions (without correct answers).
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

  // Check the student is a member of the classroom
  const { data: membership } = await supabase
    .from("classroom_members")
    .select("classroom_id")
    .eq("student_id", user.id)
    .eq("classroom_id", assignment.classroom_id)
    .single();

  if (!membership) {
    return NextResponse.json({ error: "Not a member of this classroom" }, { status: 403 });
  }

  const config = assignment.config || {};
  const timeLimitMinutes = config.time_limit_minutes || 45;

  // Check for existing session
  const { data: existingSession } = await supabase
    .from("exam_sessions")
    .select("*")
    .eq("assignment_id", assignmentId)
    .eq("student_id", user.id)
    .single();

  if (existingSession) {
    // If already submitted or force_submitted, deny
    if (existingSession.status === "submitted" || existingSession.status === "force_submitted") {
      return NextResponse.json({ error: "Exam already submitted" }, { status: 409 });
    }

    // Check if expired
    const endsAt = new Date(existingSession.ends_at);
    const now = new Date();
    if (now > endsAt) {
      // Mark as expired
      await supabase
        .from("exam_sessions")
        .update({ status: "expired" })
        .eq("id", existingSession.id);
      return NextResponse.json({ error: "Exam time expired" }, { status: 410 });
    }

    // Resume existing session — fetch questions
    const questions = await fetchExamQuestions(supabase, config.question_ids || []);

    return NextResponse.json({
      session: {
        id: existingSession.id,
        started_at: existingSession.started_at,
        ends_at: existingSession.ends_at,
        status: existingSession.status,
        answers: existingSession.answers,
        tab_switches: existingSession.tab_switches,
        fullscreen_exits: existingSession.fullscreen_exits,
      },
      questions,
      config: {
        lockdown: config.lockdown ?? true,
        shuffle_questions: config.shuffle_questions ?? true,
        shuffle_options: config.shuffle_options ?? true,
        show_results: config.show_results ?? false,
        time_limit_minutes: timeLimitMinutes,
      },
      title: assignment.title,
    });
  }

  // Create new session
  const startedAt = new Date();
  const endsAt = new Date(startedAt.getTime() + timeLimitMinutes * 60 * 1000);

  const { data: newSession, error: sessionError } = await supabase
    .from("exam_sessions")
    .insert({
      assignment_id: assignmentId,
      student_id: user.id,
      started_at: startedAt.toISOString(),
      ends_at: endsAt.toISOString(),
      status: "in_progress",
      tab_switches: 0,
      fullscreen_exits: 0,
      answers: null,
    })
    .select()
    .single();

  if (sessionError) {
    return NextResponse.json({ error: sessionError.message }, { status: 500 });
  }

  // Fetch questions (without correct answers)
  const questions = await fetchExamQuestions(supabase, config.question_ids || []);

  return NextResponse.json({
    session: {
      id: newSession.id,
      started_at: newSession.started_at,
      ends_at: newSession.ends_at,
      status: newSession.status,
      answers: null,
      tab_switches: 0,
      fullscreen_exits: 0,
    },
    questions,
    config: {
      lockdown: config.lockdown ?? true,
      shuffle_questions: config.shuffle_questions ?? true,
      shuffle_options: config.shuffle_options ?? true,
      show_results: config.show_results ?? false,
      time_limit_minutes: timeLimitMinutes,
    },
    title: assignment.title,
  });
}

// Fetch questions without correct_index
async function fetchExamQuestions(
  supabase: ReturnType<typeof createClient>,
  questionIds: string[]
) {
  if (questionIds.length === 0) return [];

  const { data: questions } = await supabase
    .from("teacher_questions")
    .select("id, module_id, course, question, options, difficulty")
    .in("id", questionIds);

  // Return questions WITHOUT correct_index
  return (questions || []).map((q) => ({
    id: q.id,
    module_id: q.module_id,
    course: q.course,
    question: q.question,
    options: q.options,
    difficulty: q.difficulty,
  }));
}
