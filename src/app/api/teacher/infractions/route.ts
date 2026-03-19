import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

/*
GET /api/teacher/infractions
Returns all exam sessions with violations (tab_switches > 0 OR fullscreen_exits > 0)
for the authenticated teacher's classrooms.
Profiles are queried separately — no FK joins on auth.users references.
*/
export async function GET(req: NextRequest) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  // Get teacher's classrooms
  const { data: classrooms, error: classroomError } = await supabase
    .from("classrooms")
    .select("id, name")
    .eq("teacher_id", user.id);

  if (classroomError || !classrooms || classrooms.length === 0) {
    return NextResponse.json({ infractions: [], classrooms: [], assignments: [] });
  }

  const classroomIds = classrooms.map((c) => c.id);

  // Get assignments for these classrooms
  const { data: assignments } = await supabase
    .from("assignments")
    .select("id, title, classroom_id, type")
    .in("classroom_id", classroomIds);

  if (!assignments || assignments.length === 0) {
    return NextResponse.json({ infractions: [], classrooms, assignments: [] });
  }

  const assignmentIds = assignments.map((a) => a.id);

  // Get exam sessions with violations — query tab_switches > 0 OR fullscreen_exits > 0
  const { data: sessions } = await supabase
    .from("exam_sessions")
    .select("id, assignment_id, student_id, tab_switches, fullscreen_exits, status, started_at, submitted_at")
    .in("assignment_id", assignmentIds)
    .or("tab_switches.gt.0,fullscreen_exits.gt.0")
    .order("started_at", { ascending: false });

  if (!sessions || sessions.length === 0) {
    return NextResponse.json({ infractions: [], classrooms, assignments });
  }

  // Query profiles separately (NEVER use FK joins on auth.users references)
  const studentIds = Array.from(new Set(sessions.map((s) => s.student_id)));
  const { data: profilesData } = studentIds.length > 0
    ? await supabase.from("profiles").select("id, display_name, email").in("id", studentIds)
    : { data: [] };

  const profileMap = new Map<string, { display_name: string; email: string }>();
  for (const p of profilesData || []) {
    profileMap.set(p.id, { display_name: p.display_name || "Unknown", email: p.email || "" });
  }

  // Build assignment lookup
  const assignmentMap = new Map(
    assignments.map((a) => [a.id, { title: a.title, classroom_id: a.classroom_id, type: a.type }])
  );

  // Build classroom lookup
  const classroomMap = new Map(classrooms.map((c) => [c.id, c.name]));

  // Build infractions response
  const infractions = sessions.map((session) => {
    const profile = profileMap.get(session.student_id);
    const assignment = assignmentMap.get(session.assignment_id);
    const classroomName = assignment ? classroomMap.get(assignment.classroom_id) : null;

    return {
      id: session.id,
      student_id: session.student_id,
      student_name: profile?.display_name || "Unknown",
      student_email: profile?.email || "",
      assignment_id: session.assignment_id,
      assignment_title: assignment?.title || "Unknown",
      classroom_id: assignment?.classroom_id || "",
      classroom_name: classroomName || "Unknown",
      tab_switches: session.tab_switches || 0,
      fullscreen_exits: session.fullscreen_exits || 0,
      status: session.status,
      date: session.submitted_at || session.started_at,
    };
  });

  return NextResponse.json({
    infractions,
    classrooms,
    assignments: assignments.map((a) => ({ id: a.id, title: a.title, classroom_id: a.classroom_id })),
  });
}
