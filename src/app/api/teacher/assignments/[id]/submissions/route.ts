import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

// GET /api/teacher/assignments/[id]/submissions — fetch all submissions for an assignment
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

  // Fetch the assignment and verify teacher owns it
  const { data: assignment, error: assignError } = await supabase
    .from("assignments")
    .select("*, classrooms(teacher_id)")
    .eq("id", assignmentId)
    .single();

  if (assignError || !assignment) {
    return NextResponse.json(
      { error: "Assignment not found" },
      { status: 404 }
    );
  }

  // Check the user is the teacher of this classroom
  const classroom = assignment.classrooms as { teacher_id: string } | null;
  if (!classroom || classroom.teacher_id !== user.id) {
    return NextResponse.json(
      { error: "Not authorized" },
      { status: 403 }
    );
  }

  // Fetch all completions with student profile data
  const { data: completions, error: compError } = await supabase
    .from("assignment_completions")
    .select("*, profiles!assignment_completions_student_id_fkey(display_name, email)")
    .eq("assignment_id", assignmentId)
    .order("completed_at", { ascending: false });

  if (compError) {
    return NextResponse.json(
      { error: compError.message },
      { status: 500 }
    );
  }

  const submissions = (completions || []).map((c) => {
    const profile = c.profiles as { display_name: string; email: string } | null;
    return {
      id: c.id,
      student_id: c.student_id,
      student_name: profile?.display_name || "Unknown",
      student_email: profile?.email || "",
      score: c.score,
      time_spent_seconds: c.time_spent_seconds,
      submitted_at: c.completed_at,
      answers: c.answers,
      sections_read: c.sections_read,
    };
  });

  return NextResponse.json({ submissions });
}
