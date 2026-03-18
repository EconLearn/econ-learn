import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

const ADMIN_EMAIL = "judewallis@gmail.com";

// PATCH /api/admin/teachers/[id]/subscription — upsert subscription
export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user || user.email !== ADMIN_EMAIL) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const teacherId = params.id;
  const body = await req.json();

  // Validate allowed fields
  const allowedFields = ["plan", "status", "trial_ends_at", "student_limit"];
  const updates: Record<string, any> = {};

  for (const key of allowedFields) {
    if (body[key] !== undefined) {
      updates[key] = body[key];
    }
  }

  if (Object.keys(updates).length === 0) {
    return NextResponse.json(
      { error: "No valid fields to update" },
      { status: 400 }
    );
  }

  // Validate plan value
  if (updates.plan && !["free", "classroom", "school"].includes(updates.plan)) {
    return NextResponse.json(
      { error: "Invalid plan value" },
      { status: 400 }
    );
  }

  // Validate status value
  if (
    updates.status &&
    !["active", "trial", "canceled", "past_due"].includes(updates.status)
  ) {
    return NextResponse.json(
      { error: "Invalid status value" },
      { status: 400 }
    );
  }

  // Use service role to bypass RLS for upsert
  const { createClient: createServiceClient } = await import(
    "@supabase/supabase-js"
  );
  const serviceSupabase = createServiceClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  // Check if subscription exists
  const { data: existing } = await serviceSupabase
    .from("subscriptions")
    .select("id")
    .eq("teacher_id", teacherId)
    .single();

  let result;

  if (existing) {
    // Update existing
    result = await serviceSupabase
      .from("subscriptions")
      .update(updates)
      .eq("teacher_id", teacherId)
      .select()
      .single();
  } else {
    // Insert new
    result = await serviceSupabase
      .from("subscriptions")
      .insert({
        teacher_id: teacherId,
        plan: "free",
        student_limit: 35,
        status: "active",
        ...updates,
      })
      .select()
      .single();
  }

  if (result.error) {
    return NextResponse.json({ error: result.error.message }, { status: 500 });
  }

  return NextResponse.json({ subscription: result.data });
}
