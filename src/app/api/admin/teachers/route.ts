/*
  Required Supabase table:

  CREATE TABLE IF NOT EXISTS subscriptions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    teacher_id UUID REFERENCES auth.users(id) ON DELETE CASCADE UNIQUE,
    plan TEXT NOT NULL DEFAULT 'free' CHECK (plan IN ('free', 'classroom', 'school')),
    student_limit INTEGER NOT NULL DEFAULT 35,
    status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'trial', 'canceled', 'past_due')),
    trial_ends_at TIMESTAMPTZ,
    stripe_customer_id TEXT,
    stripe_subscription_id TEXT,
    current_period_end TIMESTAMPTZ,
    created_at TIMESTAMPTZ DEFAULT now()
  );

  ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;

  CREATE POLICY "Users read own subscription" ON subscriptions
    FOR SELECT USING (auth.uid() = teacher_id);

  CREATE POLICY "Service role manages all" ON subscriptions
    FOR ALL USING (true);
*/

import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

import { isAdmin } from "@/lib/auth/is-admin";

// GET /api/admin/teachers — list all teachers with subscription + student info
export async function GET() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user || !isAdmin({ id: user.id, email: user.email })) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Find all users who own at least one classroom (i.e. teachers)
  // Join with profiles for display_name, classrooms for counts, subscriptions for plan
  const { data: classrooms, error: classroomsError } = await supabase
    .from("classrooms")
    .select(
      "teacher_id, school_name, classroom_members(count)"
    );

  if (classroomsError) {
    return NextResponse.json(
      { error: classroomsError.message },
      { status: 500 }
    );
  }

  // Aggregate by teacher
  const teacherMap = new Map<
    string,
    { student_count: number; classroom_count: number; school_name: string | null }
  >();

  for (const c of classrooms || []) {
    const tid = c.teacher_id;
    const existing = teacherMap.get(tid) || {
      student_count: 0,
      classroom_count: 0,
      school_name: null,
    };
    existing.classroom_count += 1;
    existing.student_count +=
      (c.classroom_members as any)?.[0]?.count || 0;
    if (c.school_name && !existing.school_name) {
      existing.school_name = c.school_name;
    }
    teacherMap.set(tid, existing);
  }

  const teacherIds = Array.from(teacherMap.keys());

  if (teacherIds.length === 0) {
    return NextResponse.json({
      teachers: [],
      stats: {
        total_teachers: 0,
        total_students: 0,
        total_classrooms: 0,
        active_trials: 0,
      },
    });
  }

  // Fetch profiles
  const { data: profiles } = await supabase
    .from("profiles")
    .select("id, display_name")
    .in("id", teacherIds);

  // Fetch subscriptions
  const { data: subscriptions } = await supabase
    .from("subscriptions")
    .select("*")
    .in("teacher_id", teacherIds);

  // Fetch emails from auth — we use the admin's session which can see
  // user metadata via the profiles join. Since we can't list auth.users
  // with the anon key, we'll use the user's email from auth.users via RPC
  // or fall back to profiles. For now, we query auth.users if accessible.
  // With anon key we can't access auth.users, so we'll get emails from
  // the subscriptions or rely on profile display_name.
  // Actually, we can get user emails via supabase admin. Let's use
  // the service role approach similar to subscribe/route.ts.
  const { createClient: createServiceClient } = await import("@supabase/supabase-js");
  const serviceSupabase = createServiceClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  // Fetch user emails via service role
  const emailMap = new Map<string, string>();
  for (const tid of teacherIds) {
    const { data: authUser } = await serviceSupabase.auth.admin.getUserById(tid);
    if (authUser?.user?.email) {
      emailMap.set(tid, authUser.user.email);
    }
  }

  const profileMap = new Map<string, string>();
  for (const p of profiles || []) {
    profileMap.set(p.id, p.display_name || "");
  }

  const subMap = new Map<string, any>();
  for (const s of subscriptions || []) {
    subMap.set(s.teacher_id, s);
  }

  // Build teacher list
  const teachers = teacherIds.map((tid) => {
    const info = teacherMap.get(tid)!;
    const sub = subMap.get(tid);
    return {
      id: tid,
      display_name: profileMap.get(tid) || emailMap.get(tid)?.split("@")[0] || "Unknown",
      email: emailMap.get(tid) || "—",
      school_name: info.school_name,
      student_count: info.student_count,
      classroom_count: info.classroom_count,
      subscription: sub
        ? {
            id: sub.id,
            plan: sub.plan,
            status: sub.status,
            student_limit: sub.student_limit,
            trial_ends_at: sub.trial_ends_at,
            current_period_end: sub.current_period_end,
            created_at: sub.created_at,
          }
        : null,
    };
  });

  // Compute stats
  const now = new Date();
  const activeTrials = (subscriptions || []).filter(
    (s) =>
      s.status === "trial" &&
      s.trial_ends_at &&
      new Date(s.trial_ends_at) > now
  ).length;

  const stats = {
    total_teachers: teacherIds.length,
    total_students: teachers.reduce((sum, t) => sum + t.student_count, 0),
    total_classrooms: teachers.reduce((sum, t) => sum + t.classroom_count, 0),
    active_trials: activeTrials,
  };

  return NextResponse.json({ teachers, stats });
}
