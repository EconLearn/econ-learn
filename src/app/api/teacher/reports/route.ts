import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

// GET /api/teacher/reports — aggregated report data
export async function GET(req: NextRequest) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const classroomId = req.nextUrl.searchParams.get("classroom_id");

  // Get teacher's classrooms
  let classroomQuery = supabase
    .from("classrooms")
    .select("id, name")
    .eq("teacher_id", user.id);

  if (classroomId) {
    classroomQuery = classroomQuery.eq("id", classroomId);
  }

  const { data: classrooms } = await classroomQuery;

  if (!classrooms || classrooms.length === 0) {
    return NextResponse.json({
      module_scores: [],
      assignment_completions: [],
      at_risk_students: [],
    });
  }

  const classroomIds = classrooms.map((c) => c.id);

  // Module scores
  const { data: quizResults } = await supabase
    .from("quiz_results")
    .select("module_id, score_percent, user_id, created_at")
    .in("classroom_id", classroomIds);

  const moduleMap: Record<string, { total: number; count: number }> = {};
  const studentScoreMap: Record<
    string,
    { total: number; count: number; lastActive: string }
  > = {};

  if (quizResults) {
    for (const q of quizResults) {
      // Module aggregation
      if (!moduleMap[q.module_id]) {
        moduleMap[q.module_id] = { total: 0, count: 0 };
      }
      moduleMap[q.module_id].total += q.score_percent || 0;
      moduleMap[q.module_id].count += 1;

      // Student aggregation
      if (!studentScoreMap[q.user_id]) {
        studentScoreMap[q.user_id] = {
          total: 0,
          count: 0,
          lastActive: q.created_at,
        };
      }
      studentScoreMap[q.user_id].total += q.score_percent || 0;
      studentScoreMap[q.user_id].count += 1;
      if (q.created_at > studentScoreMap[q.user_id].lastActive) {
        studentScoreMap[q.user_id].lastActive = q.created_at;
      }
    }
  }

  const moduleScores = Object.entries(moduleMap).map(
    ([moduleId, { total, count }]) => ({
      module_id: moduleId,
      module_name: moduleId
        .replace(/-/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase()),
      avg_score: Math.round(total / count),
      attempts: count,
    })
  );

  // Assignment completion rates
  const { data: assignments } = await supabase
    .from("assignments")
    .select("id, title, type, classroom_id")
    .in("classroom_id", classroomIds);

  const assignmentCompletions = [];

  if (assignments && assignments.length > 0) {
    const assignmentIds = assignments.map((a) => a.id);
    const { data: completions } = await supabase
      .from("assignment_completions")
      .select("assignment_id, score, completed_at")
      .in("assignment_id", assignmentIds);

    // Get student counts per classroom
    const { data: memberCounts } = await supabase
      .from("classroom_members")
      .select("classroom_id")
      .in("classroom_id", classroomIds);

    const classroomStudentCounts: Record<string, number> = {};
    if (memberCounts) {
      for (const m of memberCounts) {
        classroomStudentCounts[m.classroom_id] =
          (classroomStudentCounts[m.classroom_id] || 0) + 1;
      }
    }

    for (const a of assignments) {
      const aCompletions = (completions || []).filter(
        (c) => c.assignment_id === a.id && c.completed_at
      );
      const totalStudents = classroomStudentCounts[a.classroom_id] || 0;
      const avgScore =
        aCompletions.length > 0
          ? Math.round(
              aCompletions.reduce((sum, c) => sum + (c.score || 0), 0) /
                aCompletions.length
            )
          : 0;

      assignmentCompletions.push({
        assignment_id: a.id,
        title: a.title,
        type: a.type,
        total_students: totalStudents,
        completed_count: aCompletions.length,
        completion_rate:
          totalStudents > 0
            ? Math.round((aCompletions.length / totalStudents) * 100)
            : 0,
        avg_score: avgScore,
      });
    }
  }

  // At-risk students
  const { data: members } = await supabase
    .from("classroom_members")
    .select("student_id, joined_at, profiles(display_name)")
    .in("classroom_id", classroomIds);

  const atRiskStudents = [];
  const sevenDaysAgo = new Date(
    Date.now() - 7 * 24 * 60 * 60 * 1000
  ).toISOString();

  if (members) {
    const seen = new Set<string>();
    for (const m of members) {
      const sid = (m as any).student_id;
      if (seen.has(sid)) continue;
      seen.add(sid);

      const scores = studentScoreMap[sid];
      const avgScore =
        scores && scores.count > 0
          ? Math.round(scores.total / scores.count)
          : 0;
      const lastActive = scores?.lastActive || (m as any).joined_at;

      const reasons: string[] = [];
      if (scores && scores.count > 0 && avgScore < 60) {
        reasons.push(`Average score: ${avgScore}%`);
      }
      if (!lastActive || lastActive < sevenDaysAgo) {
        reasons.push("Inactive for 7+ days");
      }
      if (!scores || scores.count === 0) {
        reasons.push("No quiz attempts");
      }

      if (reasons.length > 0) {
        atRiskStudents.push({
          student_id: sid,
          display_name: (m as any).profiles?.display_name || "Student",
          avg_score: avgScore,
          last_active: lastActive,
          reasons,
        });
      }
    }
  }

  return NextResponse.json({
    module_scores: moduleScores,
    assignment_completions: assignmentCompletions,
    at_risk_students: atRiskStudents,
  });
}
