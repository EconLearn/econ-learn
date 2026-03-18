import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

/*
CREATE TABLE IF NOT EXISTS teacher_questions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  teacher_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  module_id TEXT NOT NULL,
  course TEXT NOT NULL CHECK (course IN ('micro', 'macro')),
  question TEXT NOT NULL,
  options JSONB NOT NULL,
  correct_index INTEGER NOT NULL CHECK (correct_index >= 0 AND correct_index <= 3),
  explanation TEXT,
  difficulty TEXT DEFAULT 'medium' CHECK (difficulty IN ('easy', 'medium', 'hard')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
ALTER TABLE teacher_questions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Teachers manage own questions" ON teacher_questions FOR ALL USING (auth.uid() = teacher_id);
*/

// GET /api/teacher/questions — list all questions for the authenticated teacher
export async function GET(req: NextRequest) {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const course = searchParams.get("course");
  const module_id = searchParams.get("module");
  const difficulty = searchParams.get("difficulty");
  const search = searchParams.get("search");

  let query = supabase
    .from("teacher_questions")
    .select("*")
    .eq("teacher_id", user.id)
    .order("created_at", { ascending: false });

  if (course && course !== "all") {
    query = query.eq("course", course);
  }

  if (module_id && module_id !== "all") {
    query = query.eq("module_id", module_id);
  }

  if (difficulty && difficulty !== "all") {
    query = query.eq("difficulty", difficulty);
  }

  if (search && search.trim().length > 0) {
    query = query.ilike("question", `%${search.trim()}%`);
  }

  const { data: questions, error } = await query;

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ questions });
}

// POST /api/teacher/questions — create a new question
export async function POST(req: NextRequest) {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const body = await req.json();
  const { question, module_id, course, options, correct_index, explanation, difficulty } = body;

  // Validate required fields
  if (!question || typeof question !== "string" || question.trim().length === 0) {
    return NextResponse.json({ error: "Question text is required" }, { status: 400 });
  }

  if (question.trim().length > 500) {
    return NextResponse.json({ error: "Question must be 500 characters or fewer" }, { status: 400 });
  }

  if (!module_id || typeof module_id !== "string") {
    return NextResponse.json({ error: "Module is required" }, { status: 400 });
  }

  if (!course || !["micro", "macro"].includes(course)) {
    return NextResponse.json({ error: "Course must be 'micro' or 'macro'" }, { status: 400 });
  }

  if (!Array.isArray(options) || options.length !== 4 || options.some((o: unknown) => typeof o !== "string" || (o as string).trim().length === 0)) {
    return NextResponse.json({ error: "Exactly 4 non-empty answer options are required" }, { status: 400 });
  }

  if (typeof correct_index !== "number" || correct_index < 0 || correct_index > 3) {
    return NextResponse.json({ error: "Correct answer index must be 0-3" }, { status: 400 });
  }

  if (difficulty && !["easy", "medium", "hard"].includes(difficulty)) {
    return NextResponse.json({ error: "Difficulty must be 'easy', 'medium', or 'hard'" }, { status: 400 });
  }

  const { data: newQuestion, error } = await supabase
    .from("teacher_questions")
    .insert({
      teacher_id: user.id,
      question: question.trim(),
      module_id,
      course,
      options: options.map((o: string) => o.trim()),
      correct_index,
      explanation: explanation?.trim() || null,
      difficulty: difficulty || "medium",
    })
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ question: newQuestion }, { status: 201 });
}
