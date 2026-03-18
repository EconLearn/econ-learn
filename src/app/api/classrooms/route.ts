import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { generateJoinCode } from "@/lib/types/teacher";

// GET /api/classrooms — list teacher's classrooms
export async function GET() {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const { data: classrooms, error } = await supabase
    .from("classrooms")
    .select("*, classroom_members(count)")
    .eq("teacher_id", user.id)
    .order("created_at", { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ classrooms });
}

// POST /api/classrooms — create a new classroom
export async function POST(req: NextRequest) {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const { name, school_name } = await req.json();

  if (!name || typeof name !== "string" || name.trim().length === 0) {
    return NextResponse.json({ error: "Classroom name is required" }, { status: 400 });
  }

  // Generate unique join code
  let joinCode = generateJoinCode();
  let attempts = 0;
  while (attempts < 10) {
    const { data: existing } = await supabase
      .from("classrooms")
      .select("id")
      .eq("join_code", joinCode)
      .single();

    if (!existing) break;
    joinCode = generateJoinCode();
    attempts++;
  }

  const { data: classroom, error } = await supabase
    .from("classrooms")
    .insert({
      teacher_id: user.id,
      name: name.trim(),
      join_code: joinCode,
      school_name: school_name?.trim() || null,
    })
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ classroom }, { status: 201 });
}
