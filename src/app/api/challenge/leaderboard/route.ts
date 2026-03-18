/*
 * Required Supabase tables:
 *
 * challenge_attempts (see today/route.ts for schema)
 *
 * This route also reads from:
 * - profiles (id, display_name, school)
 */

import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const period = searchParams.get("period") || "week";
  const school = searchParams.get("school");

  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Build date filter
  let dateFilter: string | undefined;
  if (period === "week") {
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    dateFilter = weekAgo.toISOString().split("T")[0];
  }

  // Fetch all attempts within the period
  let query = supabase
    .from("challenge_attempts")
    .select("user_id, score, streak, attempted_at");

  if (dateFilter) {
    query = query.gte("attempted_at", dateFilter);
  }

  const { data: attempts, error } = await query;

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // Aggregate scores by user
  const userScores: Record<string, { totalScore: number; maxStreak: number; attempts: number }> = {};
  for (const attempt of attempts || []) {
    if (!userScores[attempt.user_id]) {
      userScores[attempt.user_id] = { totalScore: 0, maxStreak: 0, attempts: 0 };
    }
    userScores[attempt.user_id].totalScore += attempt.score || 0;
    userScores[attempt.user_id].maxStreak = Math.max(
      userScores[attempt.user_id].maxStreak,
      attempt.streak || 0
    );
    userScores[attempt.user_id].attempts += 1;
  }

  const userIds = Object.keys(userScores);

  if (userIds.length === 0) {
    return NextResponse.json({ leaderboard: [], schoolRankings: [], currentUser: null });
  }

  // Fetch profiles
  const { data: profiles } = await supabase
    .from("profiles")
    .select("id, display_name, school")
    .in("id", userIds);

  const profileMap: Record<string, { display_name: string; school: string | null }> = {};
  for (const p of profiles || []) {
    profileMap[p.id] = { display_name: p.display_name, school: p.school };
  }

  // Build leaderboard
  let leaderboard = userIds
    .map((userId) => ({
      userId,
      name: profileMap[userId]?.display_name || "Anonymous",
      school: profileMap[userId]?.school || null,
      totalScore: userScores[userId].totalScore,
      streak: userScores[userId].maxStreak,
      attempts: userScores[userId].attempts,
    }))
    .sort((a, b) => b.totalScore - a.totalScore);

  // Filter by school if requested
  if (school) {
    leaderboard = leaderboard.filter((entry) => entry.school === school);
  }

  // Take top 50
  const top50 = leaderboard.slice(0, 50).map((entry, index) => ({
    ...entry,
    rank: index + 1,
  }));

  // Build school rankings
  const schoolScores: Record<string, { totalScore: number; studentCount: number }> = {};
  for (const entry of leaderboard) {
    const s = entry.school || "Unknown";
    if (!schoolScores[s]) {
      schoolScores[s] = { totalScore: 0, studentCount: 0 };
    }
    schoolScores[s].totalScore += entry.totalScore;
    schoolScores[s].studentCount += 1;
  }

  const schoolRankings = Object.entries(schoolScores)
    .filter(([name]) => name !== "Unknown")
    .map(([name, data]) => ({
      school: name,
      totalStudents: data.studentCount,
      averageScore: Math.round(data.totalScore / data.studentCount),
      totalScore: data.totalScore,
    }))
    .sort((a, b) => b.totalScore - a.totalScore)
    .slice(0, 20)
    .map((entry, index) => ({ ...entry, rank: index + 1 }));

  // Current user info
  let currentUser = null;
  if (user) {
    const userRank = leaderboard.findIndex((e) => e.userId === user.id);
    if (userRank !== -1) {
      currentUser = {
        ...leaderboard[userRank],
        rank: userRank + 1,
      };
    }
  }

  return NextResponse.json({
    leaderboard: top50,
    schoolRankings,
    currentUser,
  });
}
