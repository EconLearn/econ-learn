"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/components/providers/AuthProvider";
import { createClient } from "@/lib/supabase/client";
import { microCourse, macroCourse } from "@/data/courses";

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlocked: boolean;
  unlockedAt?: string;
}

const TOTAL_MICRO = microCourse.modules.length;
const TOTAL_MACRO = macroCourse.modules.length;
const TOTAL_MODULES = TOTAL_MICRO + TOTAL_MACRO;

export function useAchievements() {
  const { user } = useAuth();
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      setAchievements(getDefaultAchievements());
      setLoading(false);
      return;
    }

    async function compute() {
      const supabase = createClient();

      const [quizRes, progressRes, activityRes, bookmarkRes] = await Promise.all([
        supabase
          .from("quiz_attempts")
          .select("module_id, score, completed_at")
          .eq("user_id", user!.id),
        supabase
          .from("module_progress")
          .select("module_id, completed, completed_at, course_id")
          .eq("user_id", user!.id),
        supabase
          .from("user_activity")
          .select("activity_date")
          .eq("user_id", user!.id)
          .order("activity_date", { ascending: false }),
        supabase
          .from("bookmarks")
          .select("module_id")
          .eq("user_id", user!.id),
      ]);

      const quizzes = quizRes.data || [];
      const progress = progressRes.data || [];
      const activity = activityRes.data || [];
      const bookmarks = bookmarkRes.data || [];

      const completedModules = new Set(
        progress.filter((p) => p.completed).map((p) => p.module_id)
      );

      const completedMicro = microCourse.modules.filter((m) =>
        completedModules.has(m.id)
      ).length;
      const completedMacro = macroCourse.modules.filter((m) =>
        completedModules.has(m.id)
      ).length;

      // Calculate streak
      let currentStreak = 0;
      if (activity.length > 0) {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const dates = activity.map((a) => {
          const d = new Date(a.activity_date);
          d.setHours(0, 0, 0, 0);
          return d.getTime();
        });

        const todayMs = today.getTime();
        const dayMs = 86400000;
        let checkDate = todayMs;

        // Allow today or yesterday as starting point
        if (!dates.includes(checkDate)) {
          checkDate = todayMs - dayMs;
        }

        while (dates.includes(checkDate)) {
          currentStreak++;
          checkDate -= dayMs;
        }
      }

      const hasPerfectScore = quizzes.some((q) => q.score === 100);

      const results: Achievement[] = [
        {
          id: "first-quiz",
          name: "First Steps",
          description: "Complete your first practice quiz",
          icon: "🎯",
          unlocked: quizzes.length > 0,
          unlockedAt: quizzes.length > 0 ? quizzes[0].completed_at : undefined,
        },
        {
          id: "perfect-score",
          name: "Perfect Score",
          description: "Score 100% on any practice quiz",
          icon: "💯",
          unlocked: hasPerfectScore,
          unlockedAt: quizzes.find((q) => q.score === 100)?.completed_at,
        },
        {
          id: "micro-master",
          name: "Micro Master",
          description: `Complete all ${TOTAL_MICRO} Microeconomics modules`,
          icon: "📊",
          unlocked: completedMicro === TOTAL_MICRO,
        },
        {
          id: "macro-master",
          name: "Macro Master",
          description: `Complete all ${TOTAL_MACRO} Macroeconomics modules`,
          icon: "🌍",
          unlocked: completedMacro === TOTAL_MACRO,
        },
        {
          id: "streak-3",
          name: "On a Roll",
          description: "Maintain a 3-day study streak",
          icon: "🔥",
          unlocked: currentStreak >= 3,
        },
        {
          id: "streak-7",
          name: "Streak Week",
          description: "Maintain a 7-day study streak",
          icon: "⚡",
          unlocked: currentStreak >= 7,
        },
        {
          id: "bookworm",
          name: "Bookworm",
          description: `Access all ${TOTAL_MODULES} modules`,
          icon: "📚",
          unlocked:
            progress.length >= TOTAL_MODULES,
        },
        {
          id: "collector",
          name: "Collector",
          description: "Bookmark 5 or more modules",
          icon: "⭐",
          unlocked: bookmarks.length >= 5,
        },
        {
          id: "quiz-machine",
          name: "Quiz Machine",
          description: "Complete 10 practice quizzes",
          icon: "🏆",
          unlocked: quizzes.length >= 10,
        },
        {
          id: "scholar",
          name: "AP Scholar",
          description: "Complete all modules and score 80%+ on every quiz",
          icon: "🎓",
          unlocked:
            completedModules.size >= TOTAL_MODULES &&
            quizzes.length > 0 &&
            quizzes.every((q) => q.score >= 80),
        },
      ];

      setAchievements(results);
      setLoading(false);
    }

    compute();
  }, [user]);

  return {
    achievements,
    loading,
    unlockedCount: achievements.filter((a) => a.unlocked).length,
    totalCount: achievements.length,
  };
}

function getDefaultAchievements(): Achievement[] {
  return [
    { id: "first-quiz", name: "First Steps", description: "Complete your first practice quiz", icon: "🎯", unlocked: false },
    { id: "perfect-score", name: "Perfect Score", description: "Score 100% on any practice quiz", icon: "💯", unlocked: false },
    { id: "micro-master", name: "Micro Master", description: `Complete all ${TOTAL_MICRO} Microeconomics modules`, icon: "📊", unlocked: false },
    { id: "macro-master", name: "Macro Master", description: `Complete all ${TOTAL_MACRO} Macroeconomics modules`, icon: "🌍", unlocked: false },
    { id: "streak-3", name: "On a Roll", description: "Maintain a 3-day study streak", icon: "🔥", unlocked: false },
    { id: "streak-7", name: "Streak Week", description: "Maintain a 7-day study streak", icon: "⚡", unlocked: false },
    { id: "bookworm", name: "Bookworm", description: `Access all ${TOTAL_MODULES} modules`, icon: "📚", unlocked: false },
    { id: "collector", name: "Collector", description: "Bookmark 5 or more modules", icon: "⭐", unlocked: false },
    { id: "quiz-machine", name: "Quiz Machine", description: "Complete 10 practice quizzes", icon: "🏆", unlocked: false },
    { id: "scholar", name: "AP Scholar", description: "Complete all modules and score 80%+ on every quiz", icon: "🎓", unlocked: false },
  ];
}
