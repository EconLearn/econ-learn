import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { questionBank } from "@/data/question-bank";

/*
GET /api/exam/[assignmentId]/status
For teachers: returns all student sessions (started, submitted, in-progress, time remaining)
For students: returns own session status

POST /api/exam/[assignmentId]/status
For teachers: special actions like force-submit-all, release-results
Body: { action: "force_submit_all" | "release_results" }
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

  // Fetch the assignment
  const { data: assignment, error: assignError } = await supabase
    .from("assignments")
    .select("*, classrooms(teacher_id, name)")
    .eq("id", assignmentId)
    .single();

  if (assignError || !assignment) {
    return NextResponse.json({ error: "Assignment not found" }, { status: 404 });
  }

  const classroom = assignment.classrooms as { teacher_id: string; name: string } | null;
  const isTeacher = classroom?.teacher_id === user.id;

  if (isTeacher) {
    // Teacher view: get all sessions with student info
    const { data: sessions } = await supabase
      .from("exam_sessions")
      .select("*, profiles!exam_sessions_student_id_fkey(display_name, email)")
      .eq("assignment_id", assignmentId)
      .order("started_at", { ascending: true });

    // Also get classroom members to show who hasn't started
    const { data: members } = await supabase
      .from("classroom_members")
      .select("student_id, profiles!classroom_members_student_id_fkey(display_name, email)")
      .eq("classroom_id", assignment.classroom_id);

    const sessionMap = new Map<string, (typeof sessions extends (infer T)[] | null ? T : never)>();
    for (const s of sessions || []) {
      sessionMap.set(s.student_id, s);
    }

    const now = new Date();
    const students = (members || []).map((m) => {
      const profileData = m.profiles as any;
      const profile = Array.isArray(profileData) ? profileData[0] : profileData;
      const session = sessionMap.get(m.student_id);

      if (!session) {
        return {
          student_id: m.student_id,
          name: profile?.display_name || "Unknown",
          email: profile?.email || "",
          status: "not_started" as const,
          questions_answered: 0,
          tab_switches: 0,
          fullscreen_exits: 0,
          time_remaining_seconds: null,
          score: null,
        };
      }

      const endsAt = new Date(session.ends_at);
      const timeRemaining = Math.max(0, Math.round((endsAt.getTime() - now.getTime()) / 1000));
      const answeredCount = Array.isArray(session.answers) ? session.answers.length : 0;
      const sessionProfile = session.profiles as { display_name: string; email: string } | null;

      return {
        student_id: session.student_id,
        name: sessionProfile?.display_name || profile?.display_name || "Unknown",
        email: sessionProfile?.email || profile?.email || "",
        status: session.status,
        questions_answered: answeredCount,
        tab_switches: session.tab_switches || 0,
        fullscreen_exits: session.fullscreen_exits || 0,
        time_remaining_seconds: session.status === "in_progress" ? timeRemaining : null,
        score: session.score,
        submitted_at: session.submitted_at,
      };
    });

    // Build questions list with correct answers for teacher view
    const config = assignment.config || {};
    const examQuestions: Array<{
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
        examQuestions.push({
          id: `bank-${numIdx}`,
          question: entry.question.question,
          options: entry.question.options,
          correct_index: entry.question.correctIndex,
          source: "bank",
        });
      }
    }

    // Custom questions
    const customQIds = (config.custom_question_ids as string[]) || [];
    const legacyQIds = (config.question_ids as string[]) || [];
    const allCustomQIds = customQIds.length > 0 ? customQIds : legacyQIds;

    if (allCustomQIds.length > 0) {
      const { data: customQuestions } = await supabase
        .from("teacher_questions")
        .select("id, question, options, correct_index")
        .in("id", allCustomQIds);

      for (const q of customQuestions || []) {
        examQuestions.push({
          id: q.id,
          question: q.question,
          options: typeof q.options === "string" ? JSON.parse(q.options) : q.options,
          correct_index: q.correct_index,
          source: "custom",
        });
      }
    }

    const totalQ = examQuestions.length || (config.question_ids as string[] || []).length;

    return NextResponse.json({
      role: "teacher",
      assignment: {
        id: assignment.id,
        title: assignment.title,
        config: assignment.config,
        classroom_name: classroom?.name || "",
      },
      students,
      total_questions: totalQ,
      questions: examQuestions,
    });
  }

  // Student view: own session
  const { data: session } = await supabase
    .from("exam_sessions")
    .select("*")
    .eq("assignment_id", assignmentId)
    .eq("student_id", user.id)
    .single();

  if (!session) {
    return NextResponse.json({
      role: "student",
      status: "not_started",
    });
  }

  const endsAt = new Date(session.ends_at);
  const now = new Date();
  const timeRemaining = Math.max(0, Math.round((endsAt.getTime() - now.getTime()) / 1000));

  return NextResponse.json({
    role: "student",
    status: session.status,
    time_remaining_seconds: session.status === "in_progress" ? timeRemaining : null,
    submitted_at: session.submitted_at,
    score: assignment.config?.show_results ? session.score : undefined,
  });
}

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
  const body = await req.json();
  const { action } = body;

  // Fetch the assignment and verify teacher
  const { data: assignment } = await supabase
    .from("assignments")
    .select("*, classrooms(teacher_id)")
    .eq("id", assignmentId)
    .single();

  if (!assignment) {
    return NextResponse.json({ error: "Assignment not found" }, { status: 404 });
  }

  const classroom = assignment.classrooms as { teacher_id: string } | null;
  if (!classroom || classroom.teacher_id !== user.id) {
    return NextResponse.json({ error: "Not authorized" }, { status: 403 });
  }

  if (action === "force_submit_all") {
    // Get all in-progress sessions
    const { data: sessions } = await supabase
      .from("exam_sessions")
      .select("id, student_id, started_at, answers")
      .eq("assignment_id", assignmentId)
      .eq("status", "in_progress");

    const config = assignment.config || {};

    // Build correct answer map from all sources (bank + custom + legacy)
    const correctMap = new Map<string, number>();

    // Bank questions
    const bankIds = (config.bank_question_ids as (number | string)[]) || [];
    for (const idx of bankIds) {
      const numIdx = typeof idx === "string" ? parseInt(String(idx).replace("bank-", "")) : idx;
      if (numIdx >= 0 && numIdx < questionBank.length) {
        const entry = questionBank[numIdx];
        correctMap.set(`bank-${numIdx}`, entry.question.correctIndex);
      }
    }

    // Custom questions
    const customIds = (config.custom_question_ids as string[]) || [];
    const legacyIds = (config.question_ids as string[]) || [];
    const allCustomIds = customIds.length > 0 ? customIds : legacyIds;

    if (allCustomIds.length > 0) {
      const { data: customQuestions } = await supabase
        .from("teacher_questions")
        .select("id, correct_index")
        .in("id", allCustomIds);

      for (const q of customQuestions || []) {
        correctMap.set(q.id, q.correct_index);
      }
    }

    const totalQuestionCount = correctMap.size;
    const now = new Date().toISOString();

    for (const session of sessions || []) {
      const answers = Array.isArray(session.answers) ? session.answers : [];
      let correctCount = 0;
      const gradedAnswers = answers.map((a: { question_id: string; selected_index: number }) => {
        const correctIndex = correctMap.get(a.question_id);
        const isCorrect = correctIndex !== undefined && a.selected_index === correctIndex;
        if (isCorrect) correctCount++;
        return { ...a, correct: isCorrect };
      });
      const score = totalQuestionCount > 0 ? Math.round((correctCount / totalQuestionCount) * 100) : 0;
      const timeSpent = Math.round((new Date(now).getTime() - new Date(session.started_at).getTime()) / 1000);

      await supabase
        .from("exam_sessions")
        .update({
          status: "force_submitted",
          submitted_at: now,
          answers: gradedAnswers,
          score,
        })
        .eq("id", session.id);

      // Record in assignment_completions
      await supabase
        .from("assignment_completions")
        .insert({
          assignment_id: assignmentId,
          student_id: session.student_id,
          score,
          time_spent_seconds: timeSpent,
          completed_at: now,
          answers: gradedAnswers,
        });
    }

    return NextResponse.json({
      success: true,
      force_submitted_count: (sessions || []).length,
    });
  }

  if (action === "release_results") {
    // Update assignment config to show_results = true
    const updatedConfig = { ...(assignment.config || {}), show_results: true };
    await supabase
      .from("assignments")
      .update({ config: updatedConfig })
      .eq("id", assignmentId);

    return NextResponse.json({ success: true, show_results: true });
  }

  return NextResponse.json({ error: "Unknown action" }, { status: 400 });
}
