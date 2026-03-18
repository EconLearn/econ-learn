import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

// POST /api/classrooms/join — student joins a classroom with a code
export async function POST(req: NextRequest) {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  // Check if user is a teacher (owns any classrooms) — teachers cannot join as students
  const { data: ownedClassrooms } = await supabase
    .from("classrooms")
    .select("id")
    .eq("teacher_id", user.id)
    .limit(1);

  if (ownedClassrooms && ownedClassrooms.length > 0) {
    return NextResponse.json(
      { error: "Teachers cannot join classrooms as students. Create your own classroom instead." },
      { status: 403 }
    );
  }

  const { code } = await req.json();

  if (!code || typeof code !== "string") {
    return NextResponse.json({ error: "Join code is required" }, { status: 400 });
  }

  // Normalize code: remove dashes, uppercase
  const normalizedCode = code.replace(/-/g, "").toUpperCase();
  const formattedCode = normalizedCode.slice(0, 3) + "-" + normalizedCode.slice(3);

  // Find the classroom
  const { data: classroom, error: findError } = await supabase
    .from("classrooms")
    .select("id, name, teacher_id, active")
    .eq("join_code", formattedCode)
    .single();

  if (findError || !classroom) {
    return NextResponse.json({ error: "Invalid join code. Check with your teacher and try again." }, { status: 404 });
  }

  if (!classroom.active) {
    return NextResponse.json({ error: "This classroom is no longer active." }, { status: 400 });
  }

  // Check if already a member
  const { data: existing } = await supabase
    .from("classroom_members")
    .select("classroom_id")
    .eq("classroom_id", classroom.id)
    .eq("student_id", user.id)
    .single();

  if (existing) {
    return NextResponse.json({ error: "You are already in this classroom.", classroom_name: classroom.name }, { status: 409 });
  }

  // Join
  const { error: joinError } = await supabase
    .from("classroom_members")
    .insert({
      classroom_id: classroom.id,
      student_id: user.id,
    });

  if (joinError) {
    return NextResponse.json({ error: joinError.message }, { status: 500 });
  }

  return NextResponse.json({
    success: true,
    classroom_name: classroom.name,
  });
}
