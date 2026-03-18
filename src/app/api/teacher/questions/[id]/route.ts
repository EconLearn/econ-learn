import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

// GET /api/teacher/questions/[id] — fetch a single question
export async function GET(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const { data: question, error } = await supabase
    .from("teacher_questions")
    .select("*")
    .eq("id", params.id)
    .eq("teacher_id", user.id)
    .single();

  if (error || !question) {
    return NextResponse.json({ error: "Question not found" }, { status: 404 });
  }

  return NextResponse.json({ question });
}

// PATCH /api/teacher/questions/[id] — update a question
export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  // Verify ownership
  const { data: existing } = await supabase
    .from("teacher_questions")
    .select("id")
    .eq("id", params.id)
    .eq("teacher_id", user.id)
    .single();

  if (!existing) {
    return NextResponse.json({ error: "Question not found" }, { status: 404 });
  }

  const body = await req.json();
  const updates: Record<string, unknown> = {};

  if (body.question !== undefined) {
    if (typeof body.question !== "string" || body.question.trim().length === 0) {
      return NextResponse.json({ error: "Question text is required" }, { status: 400 });
    }
    if (body.question.trim().length > 500) {
      return NextResponse.json({ error: "Question must be 500 characters or fewer" }, { status: 400 });
    }
    updates.question = body.question.trim();
  }

  if (body.module_id !== undefined) {
    updates.module_id = body.module_id;
  }

  if (body.course !== undefined) {
    if (!["micro", "macro"].includes(body.course)) {
      return NextResponse.json({ error: "Course must be 'micro' or 'macro'" }, { status: 400 });
    }
    updates.course = body.course;
  }

  if (body.options !== undefined) {
    if (!Array.isArray(body.options) || body.options.length !== 4 || body.options.some((o: unknown) => typeof o !== "string" || (o as string).trim().length === 0)) {
      return NextResponse.json({ error: "Exactly 4 non-empty answer options are required" }, { status: 400 });
    }
    updates.options = body.options.map((o: string) => o.trim());
  }

  if (body.correct_index !== undefined) {
    if (typeof body.correct_index !== "number" || body.correct_index < 0 || body.correct_index > 3) {
      return NextResponse.json({ error: "Correct answer index must be 0-3" }, { status: 400 });
    }
    updates.correct_index = body.correct_index;
  }

  if (body.explanation !== undefined) {
    updates.explanation = body.explanation?.trim() || null;
  }

  if (body.difficulty !== undefined) {
    if (!["easy", "medium", "hard"].includes(body.difficulty)) {
      return NextResponse.json({ error: "Difficulty must be 'easy', 'medium', or 'hard'" }, { status: 400 });
    }
    updates.difficulty = body.difficulty;
  }

  updates.updated_at = new Date().toISOString();

  const { data: question, error } = await supabase
    .from("teacher_questions")
    .update(updates)
    .eq("id", params.id)
    .eq("teacher_id", user.id)
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ question });
}

// DELETE /api/teacher/questions/[id] — delete a question
export async function DELETE(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const { error } = await supabase
    .from("teacher_questions")
    .delete()
    .eq("id", params.id)
    .eq("teacher_id", user.id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
