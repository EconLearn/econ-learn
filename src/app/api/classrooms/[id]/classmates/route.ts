import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

// GET /api/classrooms/[id]/classmates — list classmates with limited stats (student-facing)
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

  const classroomId = params.id;

  // Verify the requesting user is a member of this classroom
  const { data: membership } = await supabase
    .from("classroom_members")
    .select("student_id")
    .eq("classroom_id", classroomId)
    .eq("student_id", user.id)
    .single();

  // Also allow the teacher who owns the classroom
  const { data: classroom } = await supabase
    .from("classrooms")
    .select("teacher_id")
    .eq("id", classroomId)
    .single();

  if (!membership && (!classroom || classroom.teacher_id !== user.id)) {
    return NextResponse.json(
      { error: "Not a member of this classroom" },
      { status: 403 }
    );
  }

  // Load all members with display names
  const { data: members, error } = await supabase
    .from("classroom_members")
    .select("student_id, joined_at, profiles(display_name)")
    .eq("classroom_id", classroomId);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  if (!members || members.length === 0) {
    return NextResponse.json({ classmates: [] });
  }

  const studentIds = members.map((m: any) => m.student_id);

  // Get quiz results for progress stats
  const { data: quizResults } = await supabase
    .from("quiz_results")
    .select("user_id, module_id, score_percent")
    .in("user_id", studentIds);

  // Get streak data from user_activity
  const { data: activityData } = await supabase
    .from("user_activity")
    .select("user_id, activity_date")
    .in("user_id", studentIds)
    .order("activity_date", { ascending: false });

  // Aggregate quiz stats per student
  const studentStats: Record<
    string,
    {
      modules: Set<string>;
      totalScore: number;
      quizCount: number;
    }
  > = {};

  if (quizResults) {
    for (const q of quizResults) {
      if (!studentStats[q.user_id]) {
        studentStats[q.user_id] = {
          modules: new Set(),
          totalScore: 0,
          quizCount: 0,
        };
      }
      studentStats[q.user_id].modules.add(q.module_id);
      studentStats[q.user_id].totalScore += q.score_percent || 0;
      studentStats[q.user_id].quizCount += 1;
    }
  }

  // Calculate streaks per student
  const studentStreaks: Record<string, number> = {};

  if (activityData) {
    // Group activity dates by user
    const userDates: Record<string, string[]> = {};
    for (const a of activityData) {
      if (!userDates[a.user_id]) userDates[a.user_id] = [];
      userDates[a.user_id].push(a.activity_date);
    }

    const today = new Date().toISOString().split("T")[0];

    for (const [userId, dates] of Object.entries(userDates)) {
      // dates are already sorted descending
      if (dates.length === 0) {
        studentStreaks[userId] = 0;
        continue;
      }

      const mostRecent = dates[0];
      const yesterday = addDays(today, -1);

      if (mostRecent !== today && mostRecent !== yesterday) {
        studentStreaks[userId] = 0;
        continue;
      }

      let streak = 0;
      let expected = mostRecent;
      for (const d of dates) {
        if (d === expected) {
          streak++;
          expected = addDays(expected, -1);
        } else if (d < expected) {
          break;
        }
      }
      studentStreaks[userId] = streak;
    }
  }

  const classmates = members.map((m: any) => {
    const stats = studentStats[m.student_id];
    return {
      display_name: m.profiles?.display_name || "Anonymous",
      modules_completed: stats ? stats.modules.size : 0,
      avg_quiz_score:
        stats && stats.quizCount > 0
          ? Math.round(stats.totalScore / stats.quizCount)
          : 0,
      streak: studentStreaks[m.student_id] || 0,
    };
  });

  return NextResponse.json({ classmates });
}

function addDays(dateStr: string, days: number): string {
  const date = new Date(dateStr + "T00:00:00");
  date.setDate(date.getDate() + days);
  return date.toISOString().split("T")[0];
}
