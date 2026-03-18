import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { generateJoinCode } from "@/lib/types/teacher";

// GET /api/classrooms/[id] — get classroom details with student count
export async function GET(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const { data: classroom, error } = await supabase
    .from("classrooms")
    .select("*, classroom_members(count)")
    .eq("id", params.id)
    .eq("teacher_id", user.id)
    .single();

  if (error || !classroom) {
    return NextResponse.json(
      { error: "Classroom not found" },
      { status: 404 }
    );
  }

  return NextResponse.json({
    classroom: {
      ...classroom,
      student_count: classroom.classroom_members?.[0]?.count || 0,
    },
  });
}

// PATCH /api/classrooms/[id] — update classroom
export async function PATCH(
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

  // Verify ownership
  const { data: existing } = await supabase
    .from("classrooms")
    .select("id")
    .eq("id", params.id)
    .eq("teacher_id", user.id)
    .single();

  if (!existing) {
    return NextResponse.json(
      { error: "Classroom not found" },
      { status: 404 }
    );
  }

  const body = await req.json();
  const updates: Record<string, any> = {};

  if (body.name !== undefined) {
    const name = String(body.name).trim();
    if (name.length === 0) {
      return NextResponse.json(
        { error: "Name cannot be empty" },
        { status: 400 }
      );
    }
    updates.name = name;
  }

  if (body.school_name !== undefined) {
    updates.school_name = body.school_name
      ? String(body.school_name).trim()
      : null;
  }

  if (body.active !== undefined) {
    updates.active = Boolean(body.active);
  }

  if (body.regenerate_code) {
    let newCode = generateJoinCode();
    let attempts = 0;
    while (attempts < 10) {
      const { data: codeExists } = await supabase
        .from("classrooms")
        .select("id")
        .eq("join_code", newCode)
        .single();

      if (!codeExists) break;
      newCode = generateJoinCode();
      attempts++;
    }
    updates.join_code = newCode;
  }

  if (Object.keys(updates).length === 0) {
    return NextResponse.json(
      { error: "No valid fields to update" },
      { status: 400 }
    );
  }

  const { data: classroom, error } = await supabase
    .from("classrooms")
    .update(updates)
    .eq("id", params.id)
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ classroom });
}

// DELETE /api/classrooms/[id] — deactivate classroom
export async function DELETE(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const { data: classroom, error } = await supabase
    .from("classrooms")
    .update({ active: false })
    .eq("id", params.id)
    .eq("teacher_id", user.id)
    .select()
    .single();

  if (error || !classroom) {
    return NextResponse.json(
      { error: "Classroom not found" },
      { status: 404 }
    );
  }

  return NextResponse.json({ classroom });
}
