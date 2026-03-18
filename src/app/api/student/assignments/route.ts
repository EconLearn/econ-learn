import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

// GET /api/student/assignments — list all assignments for the current student's classrooms
export async function GET() {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  // Get classrooms the student belongs to
  const { data: memberships, error: memberError } = await supabase
    .from("classroom_members")
    .select("classroom_id")
    .eq("student_id", user.id);

  if (memberError) {
    return NextResponse.json({ error: memberError.message }, { status: 500 });
  }

  if (!memberships || memberships.length === 0) {
    return NextResponse.json({ assignments: [], classrooms: [] });
  }

  const classroomIds = memberships.map((m) => m.classroom_id);

  // Fetch classrooms with teacher info
  const { data: classrooms } = await supabase
    .from("classrooms")
    .select("id, name, school_name, teacher_id, profiles!classrooms_teacher_id_fkey(display_name)")
    .in("id", classroomIds);

  // Fetch assignments for those classrooms
  const { data: assignments, error: assignError } = await supabase
    .from("assignments")
    .select("*")
    .in("classroom_id", classroomIds)
    .order("due_date", { ascending: true, nullsFirst: false });

  if (assignError) {
    return NextResponse.json({ error: assignError.message }, { status: 500 });
  }

  // Fetch completions for this student
  const assignmentIds = (assignments || []).map((a) => a.id);
  let completions: Array<{ assignment_id: string; completed_at: string | null; score: number | null }> = [];

  if (assignmentIds.length > 0) {
    const { data: completionData } = await supabase
      .from("assignment_completions")
      .select("assignment_id, completed_at, score")
      .eq("student_id", user.id)
      .in("assignment_id", assignmentIds);

    completions = completionData || [];
  }

  // Build a completion map
  const completionMap: Record<string, { completed_at: string | null; score: number | null }> = {};
  for (const c of completions) {
    completionMap[c.assignment_id] = { completed_at: c.completed_at, score: c.score };
  }

  // Enrich assignments with completion status
  const enrichedAssignments = (assignments || []).map((a) => {
    const completion = completionMap[a.id];
    const now = new Date();
    const dueDate = a.due_date ? new Date(a.due_date) : null;

    let status: "completed" | "pending" | "overdue" = "pending";
    if (completion?.completed_at) {
      status = "completed";
    } else if (dueDate && dueDate < now) {
      status = "overdue";
    }

    return {
      ...a,
      status,
      completed_at: completion?.completed_at || null,
      score: completion?.score || null,
    };
  });

  return NextResponse.json({
    assignments: enrichedAssignments,
    classrooms: classrooms || [],
  });
}
