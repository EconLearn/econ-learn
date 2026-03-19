import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

// GET /api/assignments/[id] — fetch a single assignment with submission data
export async function GET(
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

  // Also allow the teacher who created it
  const isTeacher = assignment.teacher_id === user.id;

  if (!membership && !isTeacher) {
    return NextResponse.json(
      { error: "Not a member of this classroom" },
      { status: 403 }
    );
  }

  // Fetch classroom name
  const { data: classroom } = await supabase
    .from("classrooms")
    .select("name")
    .eq("id", assignment.classroom_id)
    .single();

  // Fetch student's submission(s)
  const { data: completions } = await supabase
    .from("assignment_completions")
    .select("*")
    .eq("assignment_id", assignmentId)
    .eq("student_id", user.id)
    .order("completed_at", { ascending: false });

  const latestCompletion =
    completions && completions.length > 0 ? completions[0] : null;

  return NextResponse.json({
    assignment: {
      ...assignment,
      classroom_name: classroom?.name || "",
    },
    submitted: !!latestCompletion,
    submission: latestCompletion,
    attempt_count: completions?.length || 0,
  });
}

// DELETE /api/assignments/[id] — delete an assignment (teacher only)
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const { data: assignment } = await supabase
    .from("assignments")
    .select("teacher_id")
    .eq("id", params.id)
    .single();

  if (!assignment || assignment.teacher_id !== user.id) {
    return NextResponse.json({ error: "Not authorized" }, { status: 403 });
  }

  // Delete completions first, then the assignment
  await supabase.from("assignment_completions").delete().eq("assignment_id", params.id);
  await supabase.from("exam_sessions").delete().eq("assignment_id", params.id);
  const { error } = await supabase.from("assignments").delete().eq("id", params.id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ deleted: true });
}

// PATCH /api/assignments/[id] — update assignment (teacher only)
export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const { data: assignment } = await supabase
    .from("assignments")
    .select("teacher_id")
    .eq("id", params.id)
    .single();

  if (!assignment || assignment.teacher_id !== user.id) {
    return NextResponse.json({ error: "Not authorized" }, { status: 403 });
  }

  const body = await req.json();
  const updates: Record<string, unknown> = {};

  if (body.title !== undefined) updates.title = body.title;
  if (body.due_date !== undefined) updates.due_date = body.due_date;
  if (body.config !== undefined) updates.config = body.config;
  if (body.status !== undefined) updates.status = body.status;

  const { data: updated, error } = await supabase
    .from("assignments")
    .update(updates)
    .eq("id", params.id)
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ assignment: updated });
}
