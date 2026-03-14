"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useAuth } from "@/components/providers/AuthProvider";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { useThemeStore } from "@/lib/stores/theme-store";
import { usePreferencesStore, initializePreferences } from "@/lib/stores/preferences-store";
import { useAchievements } from "@/lib/hooks/useAchievements";
import AchievementBadge from "@/components/ui/AchievementBadge";
import { courses } from "@/data/courses";

interface ProfileData {
  display_name: string;
  avatar_url: string | null;
  created_at: string;
}

interface Stats {
  modulesCompleted: number;
  quizzesTaken: number;
  averageScore: number;
  currentStreak: number;
  longestStreak: number;
}

export default function ProfilePage() {
  const { user, loading: authLoading, signOut } = useAuth();
  const router = useRouter();
  const supabase = createClient();

  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [stats, setStats] = useState<Stats>({
    modulesCompleted: 0,
    quizzesTaken: 0,
    averageScore: 0,
    currentStreak: 0,
    longestStreak: 0,
  });
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [editName, setEditName] = useState("");
  const [saving, setSaving] = useState(false);
  const { theme, setTheme } = useThemeStore();
  const { preferences, setPreference, loaded: prefsLoaded } = usePreferencesStore();
  const { achievements, unlockedCount, totalCount } = useAchievements();
  const totalModules = courses[0].modules.length + courses[1].modules.length;

  useEffect(() => {
    initializePreferences();
  }, []);

  useEffect(() => {
    if (authLoading) return;
    if (!user) {
      router.push("/login");
      return;
    }

    async function fetchProfile() {
      const [profileRes, progressRes, quizzesRes, activityRes] = await Promise.all([
        supabase.from("profiles").select("*").eq("id", user!.id).single(),
        supabase.from("module_progress").select("completed").eq("user_id", user!.id),
        supabase.from("quiz_attempts").select("score").eq("user_id", user!.id),
        supabase.from("user_activity").select("activity_date").eq("user_id", user!.id).order("activity_date", { ascending: false }),
      ]);

      if (profileRes.data) {
        setProfile(profileRes.data);
        setEditName(profileRes.data.display_name || "");
      }

      const completedCount = progressRes.data?.filter((p) => p.completed).length || 0;
      const quizCount = quizzesRes.data?.length || 0;
      const avgScore = quizCount > 0
        ? Math.round(quizzesRes.data!.reduce((sum, q) => sum + q.score, 0) / quizCount)
        : 0;

      const days = activityRes.data?.map((a) => a.activity_date) || [];
      const currentStrk = calculateCurrentStreak(days);
      const longestStrk = calculateLongestStreak(days);

      setStats({
        modulesCompleted: completedCount,
        quizzesTaken: quizCount,
        averageScore: avgScore,
        currentStreak: currentStrk,
        longestStreak: longestStrk,
      });

      setLoading(false);
    }

    fetchProfile();
  }, [user, authLoading, router, supabase]);

  const handleSaveName = async () => {
    if (!user || !editName.trim()) return;
    setSaving(true);
    await supabase
      .from("profiles")
      .update({ display_name: editName.trim(), updated_at: new Date().toISOString() })
      .eq("id", user.id);
    setProfile((p) => (p ? { ...p, display_name: editName.trim() } : p));
    setEditing(false);
    setSaving(false);
  };

  if (authLoading || loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="w-6 h-6 border-2 rounded-full animate-spin" style={{ borderColor: 'var(--color-border)', borderTopColor: 'var(--color-ink)' }} />
      </div>
    );
  }

  if (!user || !profile) return null;

  const initials = (profile.display_name || user.email || "U")
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const memberSince = new Date(profile.created_at).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <div className="max-w-2xl mx-auto px-6 py-10 lg:py-14">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-2xl font-bold tracking-tight mb-8" style={{ color: 'var(--color-ink)' }}>
          Profile
        </h1>

        {/* Profile Card */}
        <div className="card p-6 mb-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: 'var(--color-ink)' }}>
              <span className="text-white font-bold text-lg">{initials}</span>
            </div>
            <div className="flex-1">
              {editing ? (
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                    className="auth-input text-lg font-semibold"
                    style={{ color: 'var(--color-ink)', maxWidth: '16rem' }}
                    autoFocus
                  />
                  <button
                    onClick={handleSaveName}
                    disabled={saving}
                    className="text-xs font-medium" style={{ color: 'var(--accent)' }}
                  >
                    {saving ? "Saving..." : "Save"}
                  </button>
                  <button
                    onClick={() => {
                      setEditing(false);
                      setEditName(profile.display_name || "");
                    }}
                    className="text-xs transition-colors"
                    style={{ color: 'var(--color-ink-faint)' }}
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <h2 className="text-lg font-semibold" style={{ color: 'var(--color-ink)' }}>
                    {profile.display_name}
                  </h2>
                  <button
                    onClick={() => setEditing(true)}
                    className="text-xs transition-colors"
                    style={{ color: 'var(--color-ink-faint)' }}
                  >
                    Edit
                  </button>
                </div>
              )}
              <p className="text-sm" style={{ color: 'var(--color-ink-muted)' }}>{user.email}</p>
              <p className="text-xs mt-0.5" style={{ color: 'var(--color-ink-faint)' }}>Member since {memberSince}</p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
          <StatCard label="Modules completed" value={stats.modulesCompleted} suffix={`/${totalModules}`} />
          <StatCard label="Quizzes taken" value={stats.quizzesTaken} />
          <StatCard label="Average score" value={stats.averageScore} suffix="%" />
          <StatCard label="Current streak" value={stats.currentStreak} suffix=" days" />
          <StatCard label="Longest streak" value={stats.longestStreak} suffix=" days" />
        </div>

        {/* Achievements */}
        <div className="card p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold" style={{ color: 'var(--color-ink)' }}>Achievements</h3>
            <span className="text-[11px] font-medium tabular-nums" style={{ color: 'var(--color-ink-faint)' }}>
              {unlockedCount}/{totalCount}
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
            {achievements.map((achievement) => (
              <AchievementBadge key={achievement.id} achievement={achievement} />
            ))}
          </div>
        </div>

        {/* Appearance */}
        <div className="card p-6 mb-6">
          <h3 className="text-sm font-semibold mb-4" style={{ color: 'var(--color-ink)' }}>Appearance</h3>
          <div className="flex gap-2">
            {(["light", "dark", "system"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTheme(t)}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-[13px] font-medium transition-all"
                style={{
                  border: theme === t ? '2px solid var(--accent)' : '1px solid var(--color-border)',
                  background: theme === t ? 'var(--accent-light)' : 'var(--color-surface)',
                  color: theme === t ? 'var(--accent)' : 'var(--color-ink-muted)',
                }}
              >
                {t === 'light' && (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                )}
                {t === 'dark' && (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
                {t === 'system' && (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                )}
                <span className="capitalize">{t}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Study Preferences */}
        {prefsLoaded && (
          <div className="card p-6 mb-6">
            <h3 className="text-sm font-semibold mb-4" style={{ color: 'var(--color-ink)' }}>Study Preferences</h3>
            <div className="space-y-5">
              {/* Quiz Length */}
              <div>
                <label className="text-xs font-medium block mb-2" style={{ color: 'var(--color-ink-muted)' }}>
                  Default quiz length
                </label>
                <div className="flex gap-2">
                  {([5, 8, 10, 15] as const).map((n) => (
                    <button
                      key={n}
                      onClick={() => setPreference("quizLength", n)}
                      className="flex-1 py-2 rounded-lg text-[13px] font-medium transition-all"
                      style={{
                        border: preferences.quizLength === n ? '2px solid var(--accent)' : '1px solid var(--color-border)',
                        background: preferences.quizLength === n ? 'var(--accent-light)' : 'var(--color-surface)',
                        color: preferences.quizLength === n ? 'var(--accent)' : 'var(--color-ink-muted)',
                      }}
                    >
                      {n} Q
                    </button>
                  ))}
                </div>
              </div>

              {/* Timed Mode Default */}
              <div className="flex items-center justify-between">
                <div>
                  <label className="text-xs font-medium block" style={{ color: 'var(--color-ink-muted)' }}>
                    Timed mode by default
                  </label>
                  <p className="text-[11px]" style={{ color: 'var(--color-ink-faint)' }}>
                    30 seconds per question
                  </p>
                </div>
                <button
                  onClick={() => setPreference("timedModeDefault", !preferences.timedModeDefault)}
                  className="relative w-11 h-6 rounded-full transition-colors duration-200"
                  style={{
                    background: preferences.timedModeDefault ? 'var(--accent)' : 'var(--color-border)',
                  }}
                >
                  <span
                    className="absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow-sm transition-transform duration-200"
                    style={{
                      transform: preferences.timedModeDefault ? 'translateX(20px)' : 'translateX(0)',
                    }}
                  />
                </button>
              </div>

              {/* Daily Study Goal */}
              <div>
                <label className="text-xs font-medium block mb-2" style={{ color: 'var(--color-ink-muted)' }}>
                  Daily study goal
                </label>
                <div className="flex gap-2">
                  {[15, 30, 45, 60].map((mins) => (
                    <button
                      key={mins}
                      onClick={() => setPreference("dailyGoalMinutes", mins)}
                      className="flex-1 py-2 rounded-lg text-[13px] font-medium transition-all"
                      style={{
                        border: preferences.dailyGoalMinutes === mins ? '2px solid var(--accent)' : '1px solid var(--color-border)',
                        background: preferences.dailyGoalMinutes === mins ? 'var(--accent-light)' : 'var(--color-surface)',
                        color: preferences.dailyGoalMinutes === mins ? 'var(--accent)' : 'var(--color-ink-muted)',
                      }}
                    >
                      {mins}m
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="card p-6">
          <h3 className="text-sm font-semibold mb-4" style={{ color: 'var(--color-ink)' }}>Account</h3>
          <div className="space-y-3">
            <button
              onClick={signOut}
              className="btn-secondary w-full text-left"
            >
              Sign out
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function StatCard({
  label,
  value,
  suffix = "",
}: {
  label: string;
  value: number;
  suffix?: string;
}) {
  return (
    <div className="card p-4">
      <p className="text-2xl font-bold tabular-nums" style={{ color: 'var(--color-ink)' }}>
        {value}
        <span className="text-sm font-normal" style={{ color: 'var(--color-ink-faint)' }}>{suffix}</span>
      </p>
      <p className="text-xs mt-1" style={{ color: 'var(--color-ink-faint)' }}>{label}</p>
    </div>
  );
}

function calculateCurrentStreak(sortedDays: string[]): number {
  if (sortedDays.length === 0) return 0;
  const today = new Date().toISOString().split("T")[0];
  const yesterday = new Date(Date.now() - 86400000).toISOString().split("T")[0];
  if (sortedDays[0] !== today && sortedDays[0] !== yesterday) return 0;
  let streak = 1;
  for (let i = 1; i < sortedDays.length; i++) {
    const prev = new Date(sortedDays[i - 1]);
    const curr = new Date(sortedDays[i]);
    const diff = (prev.getTime() - curr.getTime()) / 86400000;
    if (Math.round(diff) === 1) streak++;
    else break;
  }
  return streak;
}

function calculateLongestStreak(sortedDays: string[]): number {
  if (sortedDays.length === 0) return 0;
  let longest = 1;
  let current = 1;
  // Sort ascending for this calculation
  const asc = [...sortedDays].sort();
  for (let i = 1; i < asc.length; i++) {
    const prev = new Date(asc[i - 1]);
    const curr = new Date(asc[i]);
    const diff = (curr.getTime() - prev.getTime()) / 86400000;
    if (Math.round(diff) === 1) {
      current++;
      longest = Math.max(longest, current);
    } else if (Math.round(diff) > 1) {
      current = 1;
    }
  }
  return longest;
}
