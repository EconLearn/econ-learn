import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

// GET /api/teacher/export — CSV export of student data
export async function GET(req: NextRequest) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  // Support multiple classroom_id params
  const classroomIds = req.nextUrl.searchParams.getAll("classroom_id");

  if (classroomIds.length === 0) {
    return NextResponse.json(
      { error: "classroom_id parameter required" },
      { status: 400 }
    );
  }

  // Verify teacher owns all classrooms
  const { data: classrooms } = await supabase
    .from("classrooms")
    .select("id, name")
    .eq("teacher_id", user.id)
    .in("id", classroomIds);

  if (!classrooms || classrooms.length === 0) {
    return NextResponse.json(
      { error: "No valid classrooms found" },
      { status: 404 }
    );
  }

  const validIds = classrooms.map((c) => c.id);
  const classroomNameMap: Record<string, string> = {};
  for (const c of classrooms) {
    classroomNameMap[c.id] = c.name;
  }

  // Load members
  const { data: members } = await supabase
    .from("classroom_members")
    .select("student_id, joined_at, classroom_id, profiles(display_name)")
    .in("classroom_id", validIds);

  if (!members || members.length === 0) {
    const csv = "Name,Classroom,Modules Completed,Average Score,Assignments Completed,Joined\n";
    return new NextResponse(csv, {
      headers: {
        "Content-Type": "text/csv",
        "Content-Disposition": `attachment; filename="student-report.csv"`,
      },
    });
  }

  const studentIds = Array.from(new Set(members.map((m: any) => m.student_id)));

  // Get quiz results
  const { data: quizResults } = await supabase
    .from("quiz_results")
    .select("user_id, module_id, score_percent")
    .in("user_id", studentIds);

  const studentModules: Record<string, Set<string>> = {};
  const studentScores: Record<string, { total: number; count: number }> = {};

  if (quizResults) {
    for (const q of quizResults) {
      if (!studentModules[q.user_id]) {
        studentModules[q.user_id] = new Set();
      }
      studentModules[q.user_id].add(q.module_id);

      if (!studentScores[q.user_id]) {
        studentScores[q.user_id] = { total: 0, count: 0 };
      }
      studentScores[q.user_id].total += q.score_percent || 0;
      studentScores[q.user_id].count += 1;
    }
  }

  // Get assignment completions
  const { data: assignments } = await supabase
    .from("assignments")
    .select("id")
    .in("classroom_id", validIds);

  const assignmentIds = (assignments || []).map((a) => a.id);
  const studentAssignments: Record<string, number> = {};

  if (assignmentIds.length > 0) {
    const { data: completions } = await supabase
      .from("assignment_completions")
      .select("student_id, completed_at")
      .in("assignment_id", assignmentIds)
      .not("completed_at", "is", null);

    if (completions) {
      for (const c of completions) {
        studentAssignments[c.student_id] =
          (studentAssignments[c.student_id] || 0) + 1;
      }
    }
  }

  // Build CSV
  const rows: string[] = [
    "Name,Classroom,Modules Completed,Average Score,Assignments Completed,Joined",
  ];

  for (const m of members) {
    const member = m as any;
    const name = (member.profiles?.display_name || "Student").replace(
      /,/g,
      " "
    );
    const classroom = (
      classroomNameMap[member.classroom_id] || ""
    ).replace(/,/g, " ");
    const modulesCompleted = studentModules[member.student_id]?.size || 0;
    const scores = studentScores[member.student_id];
    const avgScore =
      scores && scores.count > 0
        ? Math.round(scores.total / scores.count)
        : 0;
    const assignmentsCompleted =
      studentAssignments[member.student_id] || 0;
    const joined = new Date(member.joined_at).toLocaleDateString();

    rows.push(
      `${name},${classroom},${modulesCompleted},${avgScore}%,${assignmentsCompleted},${joined}`
    );
  }

  const csv = rows.join("\n");

  return new NextResponse(csv, {
    headers: {
      "Content-Type": "text/csv",
      "Content-Disposition": `attachment; filename="student-report-${new Date().toISOString().split("T")[0]}.csv"`,
    },
  });
}
