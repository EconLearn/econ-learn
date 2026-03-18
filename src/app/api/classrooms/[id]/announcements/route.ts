import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

// GET /api/classrooms/[id]/announcements — list announcements for a classroom
// Readable by any classroom member (student or teacher)
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

  // Check if user is either the teacher or a member of the classroom
  const [teacherCheck, memberCheck] = await Promise.all([
    supabase
      .from("classrooms")
      .select("id")
      .eq("id", classroomId)
      .eq("teacher_id", user.id)
      .single(),
    supabase
      .from("classroom_members")
      .select("classroom_id")
      .eq("classroom_id", classroomId)
      .eq("student_id", user.id)
      .single(),
  ]);

  if (!teacherCheck.data && !memberCheck.data) {
    return NextResponse.json(
      { error: "Not a member of this classroom" },
      { status: 403 }
    );
  }

  // Fetch announcements — pinned first, then chronological
  const { data: announcements, error } = await supabase
    .from("classroom_announcements")
    .select("id, content, pinned, created_at, teacher_id")
    .eq("classroom_id", classroomId)
    .order("pinned", { ascending: false })
    .order("created_at", { ascending: false });

  if (error) {
    // Table might not exist yet — return empty array gracefully
    return NextResponse.json({ announcements: [] });
  }

  // Fetch teacher names for announcements
  const teacherIds = Array.from(
    new Set((announcements || []).map((a) => a.teacher_id))
  );
  let teacherMap: Record<string, string> = {};

  if (teacherIds.length > 0) {
    const { data: teachers } = await supabase
      .from("profiles")
      .select("id, display_name")
      .in("id", teacherIds);

    for (const t of teachers || []) {
      teacherMap[t.id] = t.display_name || "Teacher";
    }
  }

  const enrichedAnnouncements = (announcements || []).map((a) => ({
    id: a.id,
    content: a.content,
    pinned: a.pinned ?? false,
    teacher_name: teacherMap[a.teacher_id] || "Teacher",
    created_at: a.created_at,
  }));

  return NextResponse.json({ announcements: enrichedAnnouncements });
}
