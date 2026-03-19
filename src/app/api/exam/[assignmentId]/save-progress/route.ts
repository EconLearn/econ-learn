import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

/*
POST /api/exam/[assignmentId]/save-progress
Body: { answers: [{question_id, selected_index}], tab_switches?: number, fullscreen_exits?: number }
Persists current answers and lockdown counters mid-exam so they survive a page refresh.
Does NOT grade — only stores raw answer selections.
*/
export async function POST(
  req: NextRequest,
  { params }: { params: { assignmentId: string } }
) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const assignmentId = params.assignmentId;

  // Fetch the active exam session
  const { data: session } = await supabase
    .from("exam_sessions")
    .select("id, status, ends_at")
    .eq("assignment_id", assignmentId)
    .eq("student_id", user.id)
    .single();

  if (!session) {
    return NextResponse.json({ error: "No exam session found" }, { status: 404 });
  }

  if (session.status !== "in_progress") {
    return NextResponse.json({ error: "Exam is not in progress" }, { status: 409 });
  }

  // Check time hasn't expired (with a small grace)
  const endsAt = new Date(session.ends_at);
  const now = new Date();
  if (now.getTime() > endsAt.getTime() + 60_000) {
    return NextResponse.json({ error: "Exam time expired" }, { status: 410 });
  }

  const body = await req.json();
  const { answers, tab_switches, fullscreen_exits } = body;

  const updatePayload: Record<string, unknown> = {};

  if (Array.isArray(answers)) {
    // Store raw answer selections (no grading — just question_id + selected_index)
    updatePayload.answers = answers.map((a: { question_id: string; selected_index: number }) => ({
      question_id: a.question_id,
      selected_index: a.selected_index,
    }));
  }

  if (typeof tab_switches === "number" && tab_switches >= 0) {
    updatePayload.tab_switches = tab_switches;
  }

  if (typeof fullscreen_exits === "number" && fullscreen_exits >= 0) {
    updatePayload.fullscreen_exits = fullscreen_exits;
  }

  if (Object.keys(updatePayload).length === 0) {
    return NextResponse.json({ saved: true });
  }

  const { error: updateError } = await supabase
    .from("exam_sessions")
    .update(updatePayload)
    .eq("id", session.id);

  if (updateError) {
    return NextResponse.json({ error: "Failed to save progress" }, { status: 500 });
  }

  return NextResponse.json({ saved: true });
}
