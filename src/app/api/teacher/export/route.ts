import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

// GET /api/teacher/export?classroom_id=X&format=csv
// Comprehensive CSV export: Student Name, Email, [assignment scores], Average Score, Modules Completed, Last Active
export async function GET(req: NextRequest) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

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

  // Load members with profile info
  const { data: members } = await supabase
    .from("classroom_members")
    .select("student_id, joined_at, classroom_id, profiles(display_name, email)")
    .in("classroom_id", validIds);

  if (!members || members.length === 0) {
    const csv =
      "Student Name,Email,Average Score,Modules Completed,Last Active\n";
    return new NextResponse(csv, {
      headers: {
        "Content-Type": "text/csv",
        "Content-Disposition": `attachment; filename="student-report.csv"`,
      },
    });
  }

  const studentIds = Array.from(
    new Set(members.map((m: any) => m.student_id))
  );

  // Load all assignments for these classrooms, sorted by creation date
  const { data: assignments } = await supabase
    .from("assignments")
    .select("id, title, classroom_id, created_at")
    .in("classroom_id", validIds)
    .order("created_at", { ascending: true });

  const allAssignments = assignments || [];
  const assignmentIds = allAssignments.map((a) => a.id);

  // Load all assignment completions
  let completionMap: Record<string, Record<string, number | null>> = {};
  if (assignmentIds.length > 0) {
    const { data: completions } = await supabase
      .from("assignment_completions")
      .select("assignment_id, student_id, score, completed_at")
      .in("assignment_id", assignmentIds)
      .in("student_id", studentIds);

    if (completions) {
      for (const c of completions) {
        if (!completionMap[c.student_id]) {
          completionMap[c.student_id] = {};
        }
        completionMap[c.student_id][c.assignment_id] = c.score;
      }
    }
  }

  // Load quiz results for module counts
  const { data: quizResults } = await supabase
    .from("quiz_results")
    .select("user_id, module_id, score_percent, created_at")
    .in("user_id", studentIds);

  const studentModules: Record<string, Set<string>> = {};
  const studentLastActive: Record<string, string> = {};

  if (quizResults) {
    for (const q of quizResults) {
      if (!studentModules[q.user_id]) {
        studentModules[q.user_id] = new Set();
      }
      studentModules[q.user_id].add(q.module_id);

      // Track last active from quiz results
      if (
        !studentLastActive[q.user_id] ||
        new Date(q.created_at) > new Date(studentLastActive[q.user_id])
      ) {
        studentLastActive[q.user_id] = q.created_at;
      }
    }
  }

  // Also track last active from assignment completions
  if (assignmentIds.length > 0) {
    const { data: recentCompletions } = await supabase
      .from("assignment_completions")
      .select("student_id, completed_at")
      .in("student_id", studentIds)
      .not("completed_at", "is", null);

    if (recentCompletions) {
      for (const c of recentCompletions) {
        if (
          c.completed_at &&
          (!studentLastActive[c.student_id] ||
            new Date(c.completed_at) >
              new Date(studentLastActive[c.student_id]))
        ) {
          studentLastActive[c.student_id] = c.completed_at;
        }
      }
    }
  }

  // Build sorted student list (by name)
  const studentRows = members
    .map((m: any) => ({
      studentId: m.student_id,
      name: m.profiles?.display_name || "Student",
      email: m.profiles?.email || "",
      classroomId: m.classroom_id,
    }))
    .sort((a, b) => a.name.localeCompare(b.name));

  // Escape CSV field
  const csvEscape = (val: string): string => {
    if (val.includes(",") || val.includes('"') || val.includes("\n")) {
      return `"${val.replace(/"/g, '""')}"`;
    }
    return val;
  };

  // Build CSV header
  const assignmentHeaders = allAssignments.map((a) => csvEscape(a.title));
  const headerRow = [
    "Student Name",
    "Email",
    ...assignmentHeaders,
    "Average Score",
    "Modules Completed",
    "Last Active",
  ].join(",");

  // Build data rows
  const dataRows: string[] = [];
  for (const student of studentRows) {
    const scores: (number | null)[] = allAssignments.map((a) => {
      const studentCompletions = completionMap[student.studentId];
      if (!studentCompletions) return null;
      return studentCompletions[a.id] ?? null;
    });

    // Average calculated from completed assignments only
    const completedScores = scores.filter((s): s is number => s !== null);
    const avgScore =
      completedScores.length > 0
        ? Math.round(
            completedScores.reduce((sum, s) => sum + s, 0) /
              completedScores.length
          )
        : null;

    const modulesCompleted =
      studentModules[student.studentId]?.size || 0;
    const lastActive = studentLastActive[student.studentId]
      ? new Date(studentLastActive[student.studentId]).toLocaleDateString()
      : "-";

    const row = [
      csvEscape(student.name),
      csvEscape(student.email),
      ...scores.map((s) => (s !== null ? `${s}%` : "-")),
      avgScore !== null ? `${avgScore}%` : "-",
      String(modulesCompleted),
      lastActive,
    ].join(",");

    dataRows.push(row);
  }

  const csv = [headerRow, ...dataRows].join("\n");

  return new NextResponse(csv, {
    headers: {
      "Content-Type": "text/csv",
      "Content-Disposition": `attachment; filename="student-report-${new Date().toISOString().split("T")[0]}.csv"`,
    },
  });
}
