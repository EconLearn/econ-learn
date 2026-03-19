import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { questionBank } from "@/data/question-bank";

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

  // Check for existing session for this student + assignment
  const { data: existingSession } = await supabase
    .from("exam_sessions")
    .select("*")
    .eq("assignment_id", assignmentId)
    .eq("student_id", user.id)
    .maybeSingle();

  if (existingSession) {
    // If already completed (submitted, force_submitted, or expired), deny
    if (
      existingSession.status === "submitted" ||
      existingSession.status === "force_submitted" ||
      existingSession.status === "expired"
    ) {
      return NextResponse.json(
        { error: "Exam already completed" },
        { status: 409 }
      );
    }

    // Session is in_progress — check if time has expired
    if (existingSession.status === "in_progress") {
      const endsAt = new Date(existingSession.ends_at);
      const now = new Date();
      if (now > endsAt) {
        // Mark as expired
        await supabase
          .from("exam_sessions")
          .update({ status: "expired" })
          .eq("id", existingSession.id);
        return NextResponse.json(
          { error: "Exam time expired" },
          { status: 410 }
        );
      }

      // Resume existing in-progress session
      const questions = await fetchExamQuestions(supabase, config);

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
  }

  // No existing session — create a new one
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
    // Handle race condition: if a concurrent request inserted a session between
    // our check and this insert, we get a unique constraint violation (code 23505).
    // Re-fetch and return the existing session instead of failing.
    if (sessionError.code === "23505") {
      const { data: raceSession } = await supabase
        .from("exam_sessions")
        .select("*")
        .eq("assignment_id", assignmentId)
        .eq("student_id", user.id)
        .maybeSingle();

      if (raceSession && raceSession.status === "in_progress") {
        const questions = await fetchExamQuestions(supabase, config);
        return NextResponse.json({
          session: {
            id: raceSession.id,
            started_at: raceSession.started_at,
            ends_at: raceSession.ends_at,
            status: raceSession.status,
            answers: raceSession.answers,
            tab_switches: raceSession.tab_switches,
            fullscreen_exits: raceSession.fullscreen_exits,
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

      return NextResponse.json(
        { error: "Exam already completed" },
        { status: 409 }
      );
    }

    return NextResponse.json({ error: sessionError.message }, { status: 500 });
  }

  // Fetch questions (without correct answers) from both sources
  const questions = await fetchExamQuestions(supabase, config);

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

// Fetch questions from both bank and custom sources, without correct answers
async function fetchExamQuestions(
  supabase: ReturnType<typeof createClient>,
  config: Record<string, unknown>
) {
  const allQuestions: Array<{
    id: string;
    module_id: string;
    course: string;
    question: string;
    options: string[];
    difficulty: string;
    source: "bank" | "custom";
  }> = [];

  // 1. Bank questions (from static question-bank.ts)
  const bankIds = (config.bank_question_ids as (number | string)[]) || [];
  if (bankIds.length > 0) {
    for (const idx of bankIds) {
      const numIdx = typeof idx === "string" ? parseInt(String(idx).replace("bank-", "")) : idx;
      if (numIdx >= 0 && numIdx < questionBank.length) {
        const entry = questionBank[numIdx];
        allQuestions.push({
          id: `bank-${numIdx}`,
          module_id: entry.moduleId,
          course: entry.course,
          question: entry.question.question,
          options: entry.question.options,
          difficulty: "medium",
          source: "bank",
        });
      }
    }
  }

  // 2. Custom teacher questions (from database)
  const customIds = (config.custom_question_ids as string[]) || [];
  if (customIds.length > 0) {
    const { data: customQuestions } = await supabase
      .from("teacher_questions")
      .select("id, module_id, course, question, options, difficulty")
      .in("id", customIds);

    for (const q of customQuestions || []) {
      allQuestions.push({
        id: q.id,
        module_id: q.module_id,
        course: q.course,
        question: q.question,
        options: typeof q.options === "string" ? JSON.parse(q.options) : q.options,
        difficulty: q.difficulty || "medium",
        source: "custom",
      });
    }
  }

  // 3. Legacy format (config.question_ids) — treat as custom
  const legacyIds = (config.question_ids as string[]) || [];
  if (legacyIds.length > 0 && customIds.length === 0 && bankIds.length === 0) {
    const { data: legacyQuestions } = await supabase
      .from("teacher_questions")
      .select("id, module_id, course, question, options, difficulty")
      .in("id", legacyIds);

    for (const q of legacyQuestions || []) {
      allQuestions.push({
        id: q.id,
        module_id: q.module_id,
        course: q.course,
        question: q.question,
        options: typeof q.options === "string" ? JSON.parse(q.options) : q.options,
        difficulty: q.difficulty || "medium",
        source: "custom",
      });
    }
  }

  return allQuestions;
}
