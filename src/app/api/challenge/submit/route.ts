/*
 * Required Supabase table for daily challenge:
 *
 * CREATE TABLE IF NOT EXISTS challenge_attempts (
 *   id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
 *   user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
 *   challenge_id INTEGER NOT NULL,
 *   selected_index INTEGER NOT NULL,
 *   correct BOOLEAN NOT NULL,
 *   score INTEGER NOT NULL DEFAULT 0,
 *   streak INTEGER NOT NULL DEFAULT 0,
 *   attempted_at DATE NOT NULL DEFAULT CURRENT_DATE,
 *   UNIQUE(user_id, attempted_at)
 * );
 *
 * CREATE INDEX idx_challenge_attempts_user ON challenge_attempts(user_id);
 * CREATE INDEX idx_challenge_attempts_date ON challenge_attempts(attempted_at);
 */

import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { dailyChallenges } from "@/data/daily-challenges";

function getTodaysChallengeIndex(): number {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - start.getTime();
  const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));
  return dayOfYear % dailyChallenges.length;
}

export async function POST(request: Request) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const body = await request.json();
  const { challengeId, selectedIndex } = body;

  if (selectedIndex === undefined || selectedIndex === null) {
    return NextResponse.json({ error: "Missing selectedIndex" }, { status: 400 });
  }

  const index = getTodaysChallengeIndex();
  const challenge = dailyChallenges[index];

  if (challenge.id !== challengeId) {
    return NextResponse.json({ error: "Invalid challenge ID for today" }, { status: 400 });
  }

  // Check if already answered today
  const today = new Date().toISOString().split("T")[0];
  const { data: existing } = await supabase
    .from("challenge_attempts")
    .select("id")
    .eq("user_id", user.id)
    .eq("attempted_at", today)
    .single();

  if (existing) {
    return NextResponse.json({ error: "Already answered today" }, { status: 409 });
  }

  const correct = selectedIndex === challenge.correctIndex;

  // Calculate streak
  const yesterday = new Date(Date.now() - 86400000).toISOString().split("T")[0];
  const { data: yesterdayAttempt } = await supabase
    .from("challenge_attempts")
    .select("streak, correct")
    .eq("user_id", user.id)
    .eq("attempted_at", yesterday)
    .single();

  let streak = 0;
  if (correct) {
    streak = yesterdayAttempt && yesterdayAttempt.correct ? (yesterdayAttempt.streak || 0) + 1 : 1;
  }

  // Score: 100 for correct, +10 per streak day bonus
  const score = correct ? 100 + Math.max(0, (streak - 1) * 10) : 0;

  // Insert attempt
  const { error: insertError } = await supabase.from("challenge_attempts").insert({
    user_id: user.id,
    challenge_id: challengeId,
    selected_index: selectedIndex,
    correct,
    score,
    streak,
    attempted_at: today,
  });

  if (insertError) {
    return NextResponse.json({ error: insertError.message }, { status: 500 });
  }

  // Log activity for today
  await supabase.from("user_activity").upsert(
    {
      user_id: user.id,
      activity_date: today,
      quizzes_completed: 1,
    },
    { onConflict: "user_id,activity_date" }
  );

  return NextResponse.json({
    correct,
    correctIndex: challenge.correctIndex,
    explanation: challenge.explanation,
    score,
    streak,
  });
}
