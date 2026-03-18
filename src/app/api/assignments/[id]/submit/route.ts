import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

// POST /api/assignments/[id]/submit — submit an assignment completion
export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const assignmentId = params.id;

  // Fetch the assignment
  const { data: assignment, error: assignError } = await supabase
    .from("assignments")
    .select("*")
    .eq("id", assignmentId)
    .single();

  if (assignError || !assignment) {
    return NextResponse.json(
      { error: "Assignment not found" },
      { status: 404 }
    );
  }

  // Check the student is a member of the assignment's classroom
  const { data: membership } = await supabase
    .from("classroom_members")
    .select("classroom_id")
    .eq("student_id", user.id)
    .eq("classroom_id", assignment.classroom_id)
    .single();

  if (!membership) {
    return NextResponse.json(
      { error: "Not a member of this classroom" },
      { status: 403 }
    );
  }

  // Check if already submitted (unless retakes allowed)
  const { data: existing } = await supabase
    .from("assignment_completions")
    .select("id")
    .eq("assignment_id", assignmentId)
    .eq("student_id", user.id);

  const config = assignment.config || {};
  if (existing && existing.length > 0 && !config.retakes_allowed) {
    return NextResponse.json(
      { error: "Already submitted. Retakes are not allowed for this assignment." },
      { status: 409 }
    );
  }

  const body = await req.json();
  const { answers, sections_read, score, time_spent_seconds } = body;

  // Insert completion
  const { data: completion, error: insertError } = await supabase
    .from("assignment_completions")
    .insert({
      assignment_id: assignmentId,
      student_id: user.id,
      score: score ?? null,
      time_spent_seconds: time_spent_seconds ?? null,
      completed_at: new Date().toISOString(),
      answers: answers ?? null,
      sections_read: sections_read ?? null,
    })
    .select()
    .single();

  if (insertError) {
    return NextResponse.json(
      { error: insertError.message },
      { status: 500 }
    );
  }

  // Log activity for today
  const today = new Date().toISOString().split("T")[0];
  await supabase.from("user_activity").upsert(
    {
      user_id: user.id,
      activity_date: today,
      quizzes_completed: 1,
    },
    { onConflict: "user_id,activity_date" }
  );

  return NextResponse.json({
    success: true,
    score: completion.score,
    submission_id: completion.id,
  });
}
