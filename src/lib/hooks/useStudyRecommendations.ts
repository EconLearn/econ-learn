"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/components/providers/AuthProvider";
import { createClient } from "@/lib/supabase/client";
import { courses } from "@/data/courses";
import type { Module } from "@/data/courses";

interface Recommendation {
  module: Module;
  reason: string;
  priority: number; // lower = more important
}

export function useStudyRecommendations() {
  const { user } = useAuth();
  const [recommendations, setRecommendations] = useState<Recommendation[]>([]);
  const [weakAreas, setWeakAreas] = useState<{ module: Module; avgScore: number }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      setLoading(false);
      return;
    }

    async function analyze() {
      const supabase = createClient();

      const [progressRes, quizzesRes] = await Promise.all([
        supabase.from("module_progress").select("module_id, completed").eq("user_id", user!.id),
        supabase.from("quiz_attempts").select("module_id, score").eq("user_id", user!.id),
      ]);

      const completedSet = new Set(
        (progressRes.data || []).filter((p) => p.completed).map((p) => p.module_id)
      );

      const visitedSet = new Set(
        (progressRes.data || []).map((p) => p.module_id)
      );

      // Calculate average score per module
      const moduleScores: Record<string, number[]> = {};
      for (const q of quizzesRes.data || []) {
        if (!moduleScores[q.module_id]) moduleScores[q.module_id] = [];
        moduleScores[q.module_id].push(q.score);
      }

      const allModules = [...courses[0].modules, ...courses[1].modules];
      const recs: Recommendation[] = [];
      const weak: { module: Module; avgScore: number }[] = [];

      for (const mod of allModules) {
        // Find weak areas: modules with quizzes below 70%
        const scores = moduleScores[mod.id];
        if (scores && scores.length > 0) {
          const avg = scores.reduce((a, b) => a + b, 0) / scores.length;
          if (avg < 70) {
            weak.push({ module: mod, avgScore: Math.round(avg) });
            recs.push({
              module: mod,
              reason: `Average score: ${Math.round(avg)}% — review recommended`,
              priority: 1,
            });
          }
        }

        // Unvisited modules
        if (!visitedSet.has(mod.id)) {
          recs.push({
            module: mod,
            reason: "Not started yet",
            priority: 2,
          });
        }

        // Visited but not completed
        if (visitedSet.has(mod.id) && !completedSet.has(mod.id) && !scores) {
          recs.push({
            module: mod,
            reason: "Started but not completed",
            priority: 3,
          });
        }
      }

      // Sort by priority, take top 4
      recs.sort((a, b) => a.priority - b.priority);
      weak.sort((a, b) => a.avgScore - b.avgScore);

      setRecommendations(recs.slice(0, 4));
      setWeakAreas(weak.slice(0, 3));
      setLoading(false);
    }

    analyze();
  }, [user]);

  return { recommendations, weakAreas, loading };
}
