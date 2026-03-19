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

  // Load all members (NO FK JOIN on profiles — it breaks because student_id references auth.users not profiles)
  const { data: members, error } = await supabase
    .from("classroom_members")
    .select("student_id, joined_at")
    .eq("classroom_id", classroomId);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  if (!members || members.length === 0) {
    return NextResponse.json({ classmates: [] });
  }

  const studentIds = members.map((m: any) => m.student_id);

  // Query profiles SEPARATELY (critical pattern — FK joins on auth.users references don't work)
  const { data: profilesData } = await supabase
    .from("profiles")
    .select("id, display_name")
    .in("id", studentIds);

  const profileMap = new Map<string, string>();
  for (const p of profilesData || []) {
    profileMap.set(p.id, p.display_name || "Anonymous");
  }

  // Get assignment completions for progress stats (NOT quiz_results — that view is broken)
  const { data: completions } = await supabase
    .from("assignment_completions")
    .select("student_id, assignment_id, score_percent")
    .in("student_id", studentIds);

  // Also get exam sessions for exam scores
  const { data: examSessions } = await supabase
    .from("exam_sessions")
    .select("student_id, assignment_id, score, status")
    .in("student_id", studentIds)
    .eq("status", "submitted");

  // Get the assignments to know which module each belongs to
  const allAssignmentIds = new Set<string>();
  for (const c of completions || []) allAssignmentIds.add(c.assignment_id);
  for (const e of examSessions || []) allAssignmentIds.add(e.assignment_id);

  const { data: assignmentDetails } = allAssignmentIds.size > 0
    ? await supabase
        .from("assignments")
        .select("id, module_ids")
        .in("id", Array.from(allAssignmentIds))
    : { data: [] };

  const assignmentModuleMap = new Map<string, string[]>();
  for (const a of assignmentDetails || []) {
    assignmentModuleMap.set(a.id, a.module_ids || []);
  }

  // Get streak data from user_activity
  const { data: activityData } = await supabase
    .from("user_activity")
    .select("user_id, activity_date")
    .in("user_id", studentIds)
    .order("activity_date", { ascending: false });

  // Aggregate stats per student from completions + exam sessions
  const studentStats: Record<
    string,
    {
      modules: Set<string>;
      totalScore: number;
      scoreCount: number;
    }
  > = {};

  const ensureStats = (id: string) => {
    if (!studentStats[id]) {
      studentStats[id] = { modules: new Set(), totalScore: 0, scoreCount: 0 };
    }
  };

  for (const c of completions || []) {
    ensureStats(c.student_id);
    const mods = assignmentModuleMap.get(c.assignment_id) || [];
    for (const m of mods) studentStats[c.student_id].modules.add(m);
    if (c.score_percent != null) {
      studentStats[c.student_id].totalScore += c.score_percent;
      studentStats[c.student_id].scoreCount += 1;
    }
  }

  for (const e of examSessions || []) {
    ensureStats(e.student_id);
    const mods = assignmentModuleMap.get(e.assignment_id) || [];
    for (const m of mods) studentStats[e.student_id].modules.add(m);
    if (e.score != null) {
      studentStats[e.student_id].totalScore += e.score;
      studentStats[e.student_id].scoreCount += 1;
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
      student_id: m.student_id,
      display_name: profileMap.get(m.student_id) || "Anonymous",
      modules_completed: stats ? stats.modules.size : 0,
      avg_quiz_score:
        stats && stats.scoreCount > 0
          ? Math.round(stats.totalScore / stats.scoreCount)
          : 0,
      streak: studentStreaks[m.student_id] || 0,
    };
  });

  // Get join code for empty state
  const { data: classroomData } = await supabase
    .from("classrooms")
    .select("join_code")
    .eq("id", classroomId)
    .single();

  return NextResponse.json({ classmates, join_code: classroomData?.join_code || null });
}

function addDays(dateStr: string, days: number): string {
  const date = new Date(dateStr + "T00:00:00");
  date.setDate(date.getDate() + days);
  return date.toISOString().split("T")[0];
}
