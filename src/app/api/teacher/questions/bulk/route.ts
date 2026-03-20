import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

// POST /api/teacher/questions/bulk — bulk-create questions
export async function POST(req: NextRequest) {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const body = await req.json();
  const { questions } = body;

  if (!Array.isArray(questions) || questions.length === 0) {
    return NextResponse.json({ error: "An array of questions is required" }, { status: 400 });
  }

  if (questions.length > 200) {
    return NextResponse.json({ error: "Maximum 200 questions per batch" }, { status: 400 });
  }

  // Validate and build rows
  const rows: Array<{
    teacher_id: string;
    question: string;
    module_id: string;
    course: string;
    options: string[];
    correct_index: number;
    explanation: string | null;
    difficulty: string;
  }> = [];

  for (let i = 0; i < questions.length; i++) {
    const q = questions[i];

    if (!q.question || typeof q.question !== "string" || q.question.trim().length === 0) {
      return NextResponse.json({ error: `Question ${i + 1}: question text is required` }, { status: 400 });
    }

    if (q.question.trim().length > 500) {
      return NextResponse.json({ error: `Question ${i + 1}: question must be 500 characters or fewer` }, { status: 400 });
    }

    if (!q.module_id || typeof q.module_id !== "string") {
      return NextResponse.json({ error: `Question ${i + 1}: module_id is required` }, { status: 400 });
    }

    if (!q.course || !["micro", "macro"].includes(q.course)) {
      return NextResponse.json({ error: `Question ${i + 1}: course must be 'micro' or 'macro'` }, { status: 400 });
    }

    if (
      !Array.isArray(q.options) ||
      q.options.length < 2 ||
      q.options.length > 4 ||
      q.options.some((o: unknown) => typeof o !== "string" || (o as string).trim().length === 0)
    ) {
      return NextResponse.json({ error: `Question ${i + 1}: 2-4 non-empty answer options are required` }, { status: 400 });
    }

    // Pad to 4 options if needed
    const options = [...q.options.map((o: string) => o.trim())];
    while (options.length < 4) options.push(`Option ${String.fromCharCode(65 + options.length)}`);

    if (typeof q.correct_index !== "number" || q.correct_index < 0 || q.correct_index > 3) {
      return NextResponse.json({ error: `Question ${i + 1}: correct_index must be 0-3` }, { status: 400 });
    }

    const difficulty = q.difficulty && ["easy", "medium", "hard"].includes(q.difficulty)
      ? q.difficulty
      : "medium";

    rows.push({
      teacher_id: user.id,
      question: q.question.trim(),
      module_id: q.module_id,
      course: q.course,
      options,
      correct_index: q.correct_index,
      explanation: q.explanation?.trim() || null,
      difficulty,
    });
  }

  const { data: inserted, error } = await supabase
    .from("teacher_questions")
    .insert(rows)
    .select("id");

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ count: inserted?.length ?? 0, ids: inserted?.map((r) => r.id) ?? [] }, { status: 201 });
}
