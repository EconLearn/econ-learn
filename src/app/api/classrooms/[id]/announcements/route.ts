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

// POST /api/classrooms/[id]/announcements — create a new announcement (teacher only)
export async function POST(
  req: NextRequest,
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

  // Verify the user is the teacher of this classroom
  const { data: classroom } = await supabase
    .from("classrooms")
    .select("id")
    .eq("id", classroomId)
    .eq("teacher_id", user.id)
    .single();

  if (!classroom) {
    return NextResponse.json(
      { error: "Not authorized — only the classroom teacher can post announcements" },
      { status: 403 }
    );
  }

  const body = await req.json();
  const content = (body.content || "").trim();

  if (!content) {
    return NextResponse.json(
      { error: "Announcement content is required" },
      { status: 400 }
    );
  }

  const { data: announcement, error } = await supabase
    .from("classroom_announcements")
    .insert({
      classroom_id: classroomId,
      teacher_id: user.id,
      content,
      pinned: false,
    })
    .select("id, content, pinned, created_at, teacher_id")
    .single();

  if (error) {
    console.error("Failed to create announcement:", error);
    return NextResponse.json(
      { error: "Failed to create announcement" },
      { status: 500 }
    );
  }

  // Fetch teacher name
  const { data: profile } = await supabase
    .from("profiles")
    .select("display_name")
    .eq("id", user.id)
    .single();

  return NextResponse.json({
    announcement: {
      id: announcement.id,
      content: announcement.content,
      pinned: announcement.pinned ?? false,
      teacher_name: profile?.display_name || "Teacher",
      created_at: announcement.created_at,
    },
  });
}

// DELETE /api/classrooms/[id]/announcements — delete an announcement (teacher only)
export async function DELETE(
  req: NextRequest,
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

  // Verify the user is the teacher of this classroom
  const { data: classroom } = await supabase
    .from("classrooms")
    .select("id")
    .eq("id", classroomId)
    .eq("teacher_id", user.id)
    .single();

  if (!classroom) {
    return NextResponse.json(
      { error: "Not authorized" },
      { status: 403 }
    );
  }

  const { searchParams } = new URL(req.url);
  const announcementId = searchParams.get("announcement_id");

  if (!announcementId) {
    return NextResponse.json(
      { error: "announcement_id query parameter is required" },
      { status: 400 }
    );
  }

  const { error } = await supabase
    .from("classroom_announcements")
    .delete()
    .eq("id", announcementId)
    .eq("classroom_id", classroomId);

  if (error) {
    console.error("Failed to delete announcement:", error);
    return NextResponse.json(
      { error: "Failed to delete announcement" },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
