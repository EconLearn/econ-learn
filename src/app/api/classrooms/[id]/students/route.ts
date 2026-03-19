import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

// GET /api/classrooms/[id]/students — list students with progress data
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

  // Verify teacher owns this classroom
  const { data: classroom } = await supabase
    .from("classrooms")
    .select("id")
    .eq("id", params.id)
    .eq("teacher_id", user.id)
    .single();

  if (!classroom) {
    return NextResponse.json(
      { error: "Classroom not found" },
      { status: 404 }
    );
  }

  // Load members with profiles
  const { data: members, error } = await supabase
    .from("classroom_members")
    .select("student_id, joined_at, profiles(display_name)")
    .eq("classroom_id", params.id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  if (!members || members.length === 0) {
    return NextResponse.json({ students: [] });
  }

  const studentIds = members.map((m: any) => m.student_id);

  // Get quiz results for progress
  const { data: quizResults } = await supabase
    .from("quiz_results")
    .select("user_id, module_id, score_percent, created_at")
    .in("user_id", studentIds);

  // Aggregate per student
  const studentScores: Record<
    string,
    {
      modules: Set<string>;
      totalScore: number;
      quizCount: number;
      lastActive: string;
    }
  > = {};

  if (quizResults) {
    for (const q of quizResults) {
      if (!studentScores[q.user_id]) {
        studentScores[q.user_id] = {
          modules: new Set(),
          totalScore: 0,
          quizCount: 0,
          lastActive: q.created_at,
        };
      }
      studentScores[q.user_id].modules.add(q.module_id);
      studentScores[q.user_id].totalScore += q.score_percent || 0;
      studentScores[q.user_id].quizCount += 1;
      if (q.created_at > studentScores[q.user_id].lastActive) {
        studentScores[q.user_id].lastActive = q.created_at;
      }
    }
  }

  const students = members.map((m: any) => {
    const scores = studentScores[m.student_id];
    return {
      student_id: m.student_id,
      display_name: m.profiles?.display_name || null,
      joined_at: m.joined_at,
      modules_completed: scores ? scores.modules.size : 0,
      avg_quiz_score:
        scores && scores.quizCount > 0
          ? Math.round(scores.totalScore / scores.quizCount)
          : 0,
      last_active: scores?.lastActive || m.joined_at,
    };
  });

  return NextResponse.json({ students });
}

// DELETE /api/classrooms/[id]/students?student_id=xxx — remove a student
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  // Verify teacher owns this classroom
  const { data: classroom } = await supabase
    .from("classrooms")
    .select("id")
    .eq("id", params.id)
    .eq("teacher_id", user.id)
    .single();

  if (!classroom) {
    return NextResponse.json({ error: "Not authorized" }, { status: 403 });
  }

  const studentId = req.nextUrl.searchParams.get("student_id");
  if (!studentId) {
    return NextResponse.json({ error: "student_id is required" }, { status: 400 });
  }

  const { error } = await supabase
    .from("classroom_members")
    .delete()
    .eq("classroom_id", params.id)
    .eq("student_id", studentId);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ removed: true });
}
