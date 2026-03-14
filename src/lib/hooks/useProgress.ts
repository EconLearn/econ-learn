"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { createClient } from "@/lib/supabase/client";
import { useAuth } from "@/components/providers/AuthProvider";

export interface ModuleProgress {
  id?: string;
  user_id: string;
  module_id: string;
  course_id: "micro" | "macro";
  completed: boolean;
  completed_at: string | null;
  last_accessed_at: string | null;
}

export function useProgress() {
  const { user } = useAuth();
  const supabase = createClient();

  const [progress, setProgress] = useState<ModuleProgress[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchProgress = useCallback(async () => {
    if (!user) {
      setProgress([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    const { data, error } = await supabase
      .from("module_progress")
      .select("*")
      .eq("user_id", user.id);

    if (error) {
      console.error("Error fetching module progress:", error);
    } else {
      setProgress((data ?? []) as ModuleProgress[]);
    }
    setLoading(false);
  }, [user, supabase]);

  useEffect(() => {
    fetchProgress();
  }, [fetchProgress]);

  const completedModules = useMemo(() => {
    return new Set(
      progress.filter((p) => p.completed).map((p) => p.module_id)
    );
  }, [progress]);

  const completedCount = useMemo(() => {
    const counts = { micro: 0, macro: 0 };
    for (const p of progress) {
      if (p.completed) {
        counts[p.course_id]++;
      }
    }
    return counts;
  }, [progress]);

  /**
   * Upserts today's user_activity row and increments modules_studied.
   */
  const logModuleActivity = useCallback(async () => {
    if (!user) return;

    const today = new Date().toISOString().split("T")[0];

    const { data: existing, error: selectError } = await supabase
      .from("user_activity")
      .select("*")
      .eq("user_id", user.id)
      .eq("activity_date", today)
      .maybeSingle();

    if (selectError) {
      console.error("Error checking user activity:", selectError);
      return;
    }

    if (existing) {
      const { error: updateError } = await supabase
        .from("user_activity")
        .update({ modules_studied: existing.modules_studied + 1 })
        .eq("user_id", user.id)
        .eq("activity_date", today);

      if (updateError) {
        console.error("Error updating user activity:", updateError);
      }
    } else {
      const { error: insertError } = await supabase
        .from("user_activity")
        .insert({
          user_id: user.id,
          activity_date: today,
          modules_studied: 1,
          quizzes_completed: 0,
        });

      if (insertError) {
        console.error("Error inserting user activity:", insertError);
      }
    }
  }, [user, supabase]);

  /**
   * Upserts a module_progress row with last_accessed_at = now.
   * Also logs to user_activity (increments modules_studied for today).
   */
  const markModuleAccessed = useCallback(
    async (moduleId: string, courseId: "micro" | "macro") => {
      if (!user) return;

      const { error } = await supabase.from("module_progress").upsert(
        {
          user_id: user.id,
          module_id: moduleId,
          course_id: courseId,
          last_accessed_at: new Date().toISOString(),
        },
        { onConflict: "user_id,module_id" }
      );

      if (error) {
        console.error("Error marking module accessed:", error);
        return;
      }

      await logModuleActivity();
      await fetchProgress();
    },
    [user, supabase, logModuleActivity, fetchProgress]
  );

  /**
   * Upserts a module_progress row with completed = true and completed_at = now.
   * Also logs to user_activity (increments modules_studied for today).
   */
  const markModuleComplete = useCallback(
    async (moduleId: string, courseId: "micro" | "macro") => {
      if (!user) return;

      const { error } = await supabase.from("module_progress").upsert(
        {
          user_id: user.id,
          module_id: moduleId,
          course_id: courseId,
          completed: true,
          completed_at: new Date().toISOString(),
          last_accessed_at: new Date().toISOString(),
        },
        { onConflict: "user_id,module_id" }
      );

      if (error) {
        console.error("Error marking module complete:", error);
        return;
      }

      await logModuleActivity();
      await fetchProgress();
    },
    [user, supabase, logModuleActivity, fetchProgress]
  );

  const getLastAccessed = useCallback((): ModuleProgress | null => {
    if (progress.length === 0) return null;

    const accessed = progress.filter((p) => p.last_accessed_at !== null);
    if (accessed.length === 0) return null;

    return accessed.reduce((latest, current) => {
      if (!latest.last_accessed_at) return current;
      if (!current.last_accessed_at) return latest;
      return current.last_accessed_at > latest.last_accessed_at
        ? current
        : latest;
    });
  }, [progress]);

  return {
    progress,
    loading,
    completedModules,
    completedCount,
    markModuleAccessed,
    markModuleComplete,
    getLastAccessed,
  };
}
