"use client";

import { useState, useEffect, useCallback } from "react";
import { createClient } from "@/lib/supabase/client";
import { useAuth } from "@/components/providers/AuthProvider";

export interface QuizAttempt {
  id?: string;
  user_id: string;
  module_id: string;
  score: number;
  total_questions: number;
  correct_answers: number;
  completed_at: string;
}

export function useQuizAttempts(moduleId?: string) {
  const { user } = useAuth();
  const supabase = createClient();

  const [attempts, setAttempts] = useState<QuizAttempt[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchAttempts = useCallback(async () => {
    if (!user) {
      setAttempts([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    let query = supabase
      .from("quiz_attempts")
      .select("*")
      .eq("user_id", user.id)
      .order("completed_at", { ascending: false });

    if (moduleId) {
      query = query.eq("module_id", moduleId);
    }

    const { data, error } = await query;

    if (error) {
      console.error("Error fetching quiz attempts:", error);
    } else {
      setAttempts((data ?? []) as QuizAttempt[]);
    }
    setLoading(false);
  }, [user, supabase, moduleId]);

  useEffect(() => {
    fetchAttempts();
  }, [fetchAttempts]);

  /**
   * Inserts a new quiz attempt and upserts today's user_activity row
   * (incrementing quizzes_completed).
   */
  const saveQuizAttempt = useCallback(
    async (
      attemptModuleId: string,
      score: number,
      totalQuestions: number,
      correctAnswers: number
    ) => {
      if (!user) return;

      const { error: insertError } = await supabase
        .from("quiz_attempts")
        .insert({
          user_id: user.id,
          module_id: attemptModuleId,
          score,
          total_questions: totalQuestions,
          correct_answers: correctAnswers,
          completed_at: new Date().toISOString(),
        });

      if (insertError) {
        console.error("Error saving quiz attempt:", insertError);
        return;
      }

      // Upsert today's user_activity row, incrementing quizzes_completed
      const today = new Date().toISOString().split("T")[0];

      const { data: existing, error: selectError } = await supabase
        .from("user_activity")
        .select("*")
        .eq("user_id", user.id)
        .eq("activity_date", today)
        .maybeSingle();

      if (selectError) {
        console.error("Error checking user activity:", selectError);
      } else if (existing) {
        const { error: updateError } = await supabase
          .from("user_activity")
          .update({ quizzes_completed: existing.quizzes_completed + 1 })
          .eq("user_id", user.id)
          .eq("activity_date", today);

        if (updateError) {
          console.error("Error updating user activity:", updateError);
        }
      } else {
        const { error: activityInsertError } = await supabase
          .from("user_activity")
          .insert({
            user_id: user.id,
            activity_date: today,
            modules_studied: 0,
            quizzes_completed: 1,
          });

        if (activityInsertError) {
          console.error("Error inserting user activity:", activityInsertError);
        }
      }

      await fetchAttempts();
    },
    [user, supabase, fetchAttempts]
  );

  /**
   * Returns the highest score for a given module, or null if no attempts exist.
   */
  const getBestScore = useCallback(
    (targetModuleId: string): number | null => {
      const moduleAttempts = attempts.filter(
        (a) => a.module_id === targetModuleId
      );
      if (moduleAttempts.length === 0) return null;
      return Math.max(...moduleAttempts.map((a) => a.score));
    },
    [attempts]
  );

  /**
   * Returns the most recent N quiz attempts (already sorted desc by completed_at).
   */
  const getRecentAttempts = useCallback(
    (limit: number = 5): QuizAttempt[] => {
      return attempts.slice(0, limit);
    },
    [attempts]
  );

  return {
    attempts,
    loading,
    saveQuizAttempt,
    getBestScore,
    getRecentAttempts,
  };
}
