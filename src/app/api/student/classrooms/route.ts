import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

// GET /api/student/classrooms — list classrooms the current student belongs to
export async function GET() {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  // Get classroom memberships
  const { data: memberships, error: memberError } = await supabase
    .from("classroom_members")
    .select("classroom_id, joined_at")
    .eq("student_id", user.id);

  if (memberError) {
    return NextResponse.json({ error: memberError.message }, { status: 500 });
  }

  if (!memberships || memberships.length === 0) {
    return NextResponse.json({ classrooms: [] });
  }

  const classroomIds = memberships.map((m) => m.classroom_id);

  // Fetch classroom details with teacher name
  const { data: classrooms, error: classError } = await supabase
    .from("classrooms")
    .select("id, name, school_name, teacher_id, active")
    .in("id", classroomIds)
    .eq("active", true);

  if (classError) {
    return NextResponse.json({ error: classError.message }, { status: 500 });
  }

  // Fetch teacher names
  const teacherIds = Array.from(new Set((classrooms || []).map((c) => c.teacher_id)));
  let teacherMap: Record<string, string> = {};

  if (teacherIds.length > 0) {
    const { data: teachers } = await supabase
      .from("profiles")
      .select("id, display_name")
      .in("id", teacherIds);

    for (const t of teachers || []) {
      teacherMap[t.id] = t.display_name || "Unknown Teacher";
    }
  }

  // Build joined_at map
  const joinedMap: Record<string, string> = {};
  for (const m of memberships) {
    joinedMap[m.classroom_id] = m.joined_at;
  }

  // Enrich classrooms
  const enrichedClassrooms = (classrooms || []).map((c) => ({
    ...c,
    teacher_name: teacherMap[c.teacher_id] || "Unknown Teacher",
    joined_at: joinedMap[c.id] || null,
  }));

  return NextResponse.json({ classrooms: enrichedClassrooms });
}
