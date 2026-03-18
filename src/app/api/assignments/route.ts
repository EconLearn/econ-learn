import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

// GET /api/assignments?classroom_id=xxx — list assignments for a classroom
export async function GET(req: NextRequest) {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const classroomId = req.nextUrl.searchParams.get("classroom_id");

  if (!classroomId) {
    return NextResponse.json({ error: "classroom_id is required" }, { status: 400 });
  }

  const { data: assignments, error } = await supabase
    .from("assignments")
    .select("*, assignment_completions(count)")
    .eq("classroom_id", classroomId)
    .order("created_at", { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ assignments });
}

// POST /api/assignments — create a new assignment
export async function POST(req: NextRequest) {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const { classroom_id, title, type, module_ids, due_date, config, publish_at, status } = await req.json();

  if (!classroom_id || !title || !type) {
    return NextResponse.json(
      { error: "classroom_id, title, and type are required" },
      { status: 400 }
    );
  }

  // Exam type uses question_ids from config instead of module_ids
  if (type !== "exam" && (!module_ids || module_ids.length === 0)) {
    return NextResponse.json(
      { error: "module_ids are required for this assignment type" },
      { status: 400 }
    );
  }

  if (type === "exam" && (!config?.question_ids || config.question_ids.length === 0)) {
    return NextResponse.json(
      { error: "question_ids are required for exam assignments" },
      { status: 400 }
    );
  }

  // Verify teacher owns the classroom
  const { data: classroom } = await supabase
    .from("classrooms")
    .select("teacher_id")
    .eq("id", classroom_id)
    .single();

  if (!classroom || classroom.teacher_id !== user.id) {
    return NextResponse.json({ error: "Not authorized" }, { status: 403 });
  }

  // Determine assignment status: draft, scheduled, or published (default)
  const assignmentStatus = status === "draft"
    ? "draft"
    : publish_at
      ? "scheduled"
      : "published";

  const { data: assignment, error } = await supabase
    .from("assignments")
    .insert({
      classroom_id,
      teacher_id: user.id,
      title: title.trim(),
      type,
      module_ids,
      due_date: due_date || null,
      config: config || {},
      status: assignmentStatus,
      publish_at: publish_at || null,
    })
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ assignment }, { status: 201 });
}
