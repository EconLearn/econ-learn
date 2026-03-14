"use client";

import { motion } from "framer-motion";
import type { Achievement } from "@/lib/hooks/useAchievements";

interface AchievementBadgeProps {
  achievement: Achievement;
  compact?: boolean;
}

export default function AchievementBadge({
  achievement,
  compact = false,
}: AchievementBadgeProps) {
  if (compact) {
    return (
      <div
        className="flex items-center gap-2 px-3 py-2 rounded-lg transition-all"
        style={{
          opacity: achievement.unlocked ? 1 : 0.4,
          border: "1px solid var(--color-border-subtle)",
          background: achievement.unlocked
            ? "var(--color-surface)"
            : "var(--color-surface-sunken)",
        }}
      >
        <span className="text-lg">{achievement.unlocked ? achievement.icon : "🔒"}</span>
        <div className="min-w-0">
          <p
            className="text-[12px] font-semibold truncate"
            style={{
              color: achievement.unlocked
                ? "var(--color-ink)"
                : "var(--color-ink-faint)",
            }}
          >
            {achievement.name}
          </p>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center text-center p-4 rounded-xl transition-all"
      style={{
        opacity: achievement.unlocked ? 1 : 0.4,
        border: "1px solid var(--color-border-subtle)",
        background: achievement.unlocked
          ? "var(--color-surface)"
          : "var(--color-surface-sunken)",
      }}
    >
      <span className="text-3xl mb-2">
        {achievement.unlocked ? achievement.icon : "🔒"}
      </span>
      <p
        className="text-[12px] font-semibold mb-0.5"
        style={{
          color: achievement.unlocked
            ? "var(--color-ink)"
            : "var(--color-ink-faint)",
        }}
      >
        {achievement.name}
      </p>
      <p
        className="text-[11px] leading-snug"
        style={{ color: "var(--color-ink-muted)" }}
      >
        {achievement.description}
      </p>
      {achievement.unlocked && achievement.unlockedAt && (
        <p
          className="text-[10px] mt-1.5"
          style={{ color: "var(--color-ink-faint)" }}
        >
          {new Date(achievement.unlockedAt).toLocaleDateString()}
        </p>
      )}
    </motion.div>
  );
}
