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

export async function GET() {
  const index = getTodaysChallengeIndex();
  const challenge = dailyChallenges[index];

  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  let attempt = null;

  if (user) {
    const today = new Date().toISOString().split("T")[0];
    const { data } = await supabase
      .from("challenge_attempts")
      .select("*")
      .eq("user_id", user.id)
      .eq("attempted_at", today)
      .single();

    attempt = data;
  }

  // Return question without the correct answer if not yet answered
  if (attempt) {
    return NextResponse.json({
      challenge: {
        id: challenge.id,
        question: challenge.question,
        options: challenge.options,
        correctIndex: challenge.correctIndex,
        explanation: challenge.explanation,
        module: challenge.module,
        difficulty: challenge.difficulty,
      },
      answered: true,
      attempt: {
        selectedIndex: attempt.selected_index,
        correct: attempt.correct,
        score: attempt.score,
        streak: attempt.streak,
      },
    });
  }

  return NextResponse.json({
    challenge: {
      id: challenge.id,
      question: challenge.question,
      options: challenge.options,
      module: challenge.module,
      difficulty: challenge.difficulty,
    },
    answered: false,
    attempt: null,
  });
}
