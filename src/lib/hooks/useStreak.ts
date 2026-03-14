"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { createClient } from "@/lib/supabase/client";
import { useAuth } from "@/components/providers/AuthProvider";

interface UserActivity {
  id?: string;
  user_id: string;
  activity_date: string;
  modules_studied: number;
  quizzes_completed: number;
}

/**
 * Formats a Date as a YYYY-MM-DD string.
 */
function toDateString(date: Date): string {
  return date.toISOString().split("T")[0];
}

/**
 * Adds (or subtracts) days from a YYYY-MM-DD string and returns a new YYYY-MM-DD string.
 */
function addDays(dateStr: string, days: number): string {
  const date = new Date(dateStr + "T00:00:00");
  date.setDate(date.getDate() + days);
  return toDateString(date);
}

/**
 * Given an array of date strings sorted descending and today's date string,
 * calculates the current streak (consecutive days ending today or yesterday)
 * and the longest streak ever.
 */
function calculateStreakFromDates(
  sortedDatesDesc: string[],
  today: string
): { current: number; longest: number } {
  if (sortedDatesDesc.length === 0) {
    return { current: 0, longest: 0 };
  }

  // Calculate current streak: consecutive days ending at today or yesterday
  let currentStreak = 0;
  const yesterday = addDays(today, -1);

  // The streak can start from today or yesterday
  const mostRecent = sortedDatesDesc[0];

  if (mostRecent !== today && mostRecent !== yesterday) {
    // Most recent activity is older than yesterday -- no active streak
    currentStreak = 0;
  } else {
    let expectedDate = mostRecent;
    for (const dateStr of sortedDatesDesc) {
      if (dateStr === expectedDate) {
        currentStreak++;
        expectedDate = addDays(expectedDate, -1);
      } else if (dateStr < expectedDate) {
        // Gap detected -- stop counting current streak
        break;
      }
      // If dateStr > expectedDate, skip (duplicate or future date)
    }
  }

  // Calculate longest streak using ascending order
  const sortedAsc = [...sortedDatesDesc].reverse();
  let longestStreak = 1;
  let streakCount = 1;

  for (let i = 1; i < sortedAsc.length; i++) {
    const prev = sortedAsc[i - 1];
    const curr = sortedAsc[i];
    const expectedNext = addDays(prev, 1);

    if (curr === expectedNext) {
      streakCount++;
    } else if (curr !== prev) {
      // Not consecutive and not a duplicate -- reset
      longestStreak = Math.max(longestStreak, streakCount);
      streakCount = 1;
    }
    // If curr === prev (duplicate date), skip
  }
  longestStreak = Math.max(longestStreak, streakCount);

  return { current: currentStreak, longest: longestStreak };
}

export function useStreak() {
  const { user } = useAuth();
  const supabase = createClient();

  const [activities, setActivities] = useState<UserActivity[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchActivities = useCallback(async () => {
    if (!user) {
      setActivities([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    const { data, error } = await supabase
      .from("user_activity")
      .select("*")
      .eq("user_id", user.id)
      .order("activity_date", { ascending: false });

    if (error) {
      console.error("Error fetching user activity:", error);
    } else {
      setActivities((data ?? []) as UserActivity[]);
    }
    setLoading(false);
  }, [user, supabase]);

  useEffect(() => {
    fetchActivities();
  }, [fetchActivities]);

  const sortedDatesDesc = useMemo(() => {
    return activities.map((a) => a.activity_date);
  }, [activities]);

  const { currentStreak, longestStreak } = useMemo(() => {
    const today = toDateString(new Date());
    const result = calculateStreakFromDates(sortedDatesDesc, today);
    return { currentStreak: result.current, longestStreak: result.longest };
  }, [sortedDatesDesc]);

  /**
   * Array of Date objects for every day the user had activity.
   * Useful for calendar display components.
   */
  const activityDays = useMemo(() => {
    return activities.map((a) => new Date(a.activity_date + "T00:00:00"));
  }, [activities]);

  /**
   * Upserts today's row in user_activity, ensuring the day is recorded.
   * If the row already exists, this is a no-op (the row already counts).
   * If it doesn't exist, creates a new row with zeroed counters.
   */
  const logActivity = useCallback(async () => {
    if (!user) return;

    const today = toDateString(new Date());

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

    // If a row already exists for today, the activity is already tracked
    if (!existing) {
      const { error: insertError } = await supabase
        .from("user_activity")
        .insert({
          user_id: user.id,
          activity_date: today,
          modules_studied: 0,
          quizzes_completed: 0,
        });

      if (insertError) {
        console.error("Error inserting user activity:", insertError);
      }
    }

    await fetchActivities();
  }, [user, supabase, fetchActivities]);

  return {
    currentStreak,
    longestStreak,
    activityDays,
    loading,
    logActivity,
  };
}
