"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/components/providers/AuthProvider";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Classroom, Assignment } from "@/lib/types/teacher";

interface ActivityItem {
  id: string;
  type: "quiz_complete" | "student_joined" | "assignment_created";
  message: string;
  timestamp: string;
}

interface DashboardData {
  classrooms: (Classroom & { student_count: number })[];
  totalStudents: number;
  activeAssignments: number;
  averageScore: number;
  dueSoonCount: number;
  recentActivity: ActivityItem[];
  moduleScores: { module: string; score: number }[];
}

/* ─── Animated wrapper ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.45, ease: "easeOut" },
  }),
};

/* ─── Stat card config ─── */
const statConfig = [
  {
    label: "Total Students",
    border: "#3B82F6",
    bg: "rgba(59,130,246,0.06)",
    icon: (
      <svg className="w-5 h-5" style={{ color: "#3B82F6" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    format: (v: number) => String(v),
  },
  {
    label: "Active Assignments",
    border: "#8B5CF6",
    bg: "rgba(139,92,246,0.06)",
    icon: (
      <svg className="w-5 h-5" style={{ color: "#8B5CF6" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    format: (v: number) => String(v),
  },
  {
    label: "Average Score",
    border: "#16A34A",
    bg: "rgba(22,163,74,0.06)",
    icon: (
      <svg className="w-5 h-5" style={{ color: "#16A34A" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    format: (v: number) => (v > 0 ? `${v}%` : "--"),
  },
  {
    label: "Due This Week",
    border: "#D97706",
    bg: "rgba(217,119,6,0.06)",
    icon: (
      <svg className="w-5 h-5" style={{ color: "#D97706" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    format: (v: number) => String(v),
  },
];

/* ─── Quick action config ─── */
const quickActions = (firstClassroomId?: string) => [
  {
    href: "/teacher/classrooms",
    color: "#3B82F6",
    bg: "rgba(59,130,246,0.08)",
    title: "New Classroom",
    desc: "Create a class and invite students",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
    ),
  },
  {
    href: firstClassroomId
      ? `/teacher/assignments/new?classroom=${firstClassroomId}`
      : "/teacher/classrooms",
    color: "#8B5CF6",
    bg: "rgba(139,92,246,0.08)",
    title: "New Assignment",
    desc: "Set a quiz or worksheet",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
  {
    href: "/teacher/reports",
    color: "#D97706",
    bg: "rgba(217,119,6,0.08)",
    title: "View Reports",
    desc: "Student progress and analytics",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    href: "/sandbox",
    color: "#16A34A",
    bg: "rgba(22,163,74,0.08)",
    title: "Open Sandbox",
    desc: "Experiment with economic models",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
      </svg>
    ),
  },
];

/* ─── Bar chart with gradient fills and rounded bars ─── */
function SVGBarChart({ data }: { data: { module: string; score: number }[] }) {
  if (data.length === 0) return null;
  const barWidth = 40;
  const gap = 16;
  const chartHeight = 150;
  const chartWidth = data.length * (barWidth + gap);

  return (
    <svg
      viewBox={`0 0 ${Math.max(chartWidth, 200)} ${chartHeight + 44}`}
      className="w-full"
      style={{ maxHeight: 220 }}
    >
      <defs>
        <linearGradient id="barGreen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#22C55E" />
          <stop offset="100%" stopColor="#16A34A" />
        </linearGradient>
        <linearGradient id="barAmber" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FBBF24" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
        <linearGradient id="barRed" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F87171" />
          <stop offset="100%" stopColor="#DC2626" />
        </linearGradient>
        <linearGradient id="barBlue" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>
      </defs>
      {data.map((d, i) => {
        const barHeight = (d.score / 100) * chartHeight;
        const x = i * (barWidth + gap) + gap / 2;
        const y = chartHeight - barHeight;
        const fill =
          d.score >= 70
            ? "url(#barBlue)"
            : d.score >= 50
            ? "url(#barAmber)"
            : "url(#barRed)";
        return (
          <g key={d.module}>
            <rect
              x={x}
              y={y}
              width={barWidth}
              height={barHeight}
              rx={8}
              ry={8}
              fill={fill}
              opacity={0.9}
            />
            <text
              x={x + barWidth / 2}
              y={y - 8}
              textAnchor="middle"
              fontSize={12}
              fontWeight={700}
              fill="var(--color-ink-muted)"
            >
              {d.score}%
            </text>
            <text
              x={x + barWidth / 2}
              y={chartHeight + 18}
              textAnchor="middle"
              fontSize={10}
              fill="var(--color-ink-faint)"
            >
              {d.module.length > 8 ? d.module.slice(0, 7) + "\u2026" : d.module}
            </text>
          </g>
        );
      })}
      <line
        x1={0}
        y1={chartHeight}
        x2={chartWidth}
        y2={chartHeight}
        stroke="var(--color-border)"
        strokeWidth={1}
        strokeDasharray="4 4"
      />
    </svg>
  );
}

/* ─── Activity dot color map ─── */
const activityDot: Record<string, string> = {
  quiz_complete: "#16A34A",
  student_joined: "#3B82F6",
  assignment_created: "#8B5CF6",
};

/* ─── Empty state illustration (inline SVG) ─── */
function EmptyClassroomsIllustration() {
  return (
    <svg width="180" height="140" viewBox="0 0 180 140" fill="none" className="mx-auto mb-6">
      {/* desk */}
      <rect x="30" y="80" width="120" height="8" rx="4" fill="var(--color-border)" />
      <rect x="44" y="88" width="8" height="32" rx="2" fill="var(--color-border)" />
      <rect x="128" y="88" width="8" height="32" rx="2" fill="var(--color-border)" />
      {/* book stack */}
      <rect x="60" y="58" width="40" height="8" rx="2" fill="#93C5FD" />
      <rect x="56" y="48" width="48" height="8" rx="2" fill="#60A5FA" />
      <rect x="62" y="38" width="36" height="8" rx="2" fill="#3B82F6" />
      {/* sparkle */}
      <circle cx="120" cy="40" r="3" fill="#FBBF24" />
      <circle cx="132" cy="52" r="2" fill="#FBBF24" opacity="0.6" />
      <circle cx="46" cy="34" r="2.5" fill="#A78BFA" opacity="0.7" />
      {/* plus sign */}
      <rect x="103" y="22" width="14" height="3" rx="1.5" fill="#3B82F6" opacity="0.5" />
      <rect x="108.5" y="16.5" width="3" height="14" rx="1.5" fill="#3B82F6" opacity="0.5" />
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function TeacherDashboard() {
  const { user, loading } = useAuth();
  const supabase = createClient();
  const [data, setData] = useState<DashboardData | null>(null);
  const [loadingData, setLoadingData] = useState(true);
  const [displayName, setDisplayName] = useState("");

  useEffect(() => {
    if (!user) return;

    async function loadDashboard() {
      try {
        // Load profile
        const { data: profile } = await supabase
          .from("profiles")
          .select("display_name")
          .eq("id", user!.id)
          .single();

        setDisplayName(profile?.display_name || user!.email?.split("@")[0] || "Teacher");

        // Load classrooms
        const res = await fetch("/api/classrooms");
        const classroomsData = await res.json();
        const classrooms = (classroomsData.classrooms || []).map((c: any) => ({
          ...c,
          student_count: c.classroom_members?.[0]?.count || 0,
        }));

        const totalStudents = classrooms.reduce(
          (sum: number, c: any) => sum + c.student_count,
          0
        );

        // Load assignments across all classrooms
        const classroomIds = classrooms.map((c: any) => c.id);
        let allAssignments: Assignment[] = [];
        if (classroomIds.length > 0) {
          const { data: assignments } = await supabase
            .from("assignments")
            .select("*")
            .in("classroom_id", classroomIds);
          allAssignments = assignments || [];
        }

        const now = new Date();
        const weekFromNow = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
        const dueSoon = allAssignments.filter(
          (a) =>
            a.due_date &&
            new Date(a.due_date) > now &&
            new Date(a.due_date) <= weekFromNow
        );

        // Load recent activity: quiz completions and member joins
        const activity: ActivityItem[] = [];

        if (classroomIds.length > 0) {
          // Recent joins
          const { data: recentMembers } = await supabase
            .from("classroom_members")
            .select("student_id, joined_at, classroom_id, profiles(display_name)")
            .in("classroom_id", classroomIds)
            .order("joined_at", { ascending: false })
            .limit(10);

          if (recentMembers) {
            for (const m of recentMembers) {
              const classroom = classrooms.find((c: any) => c.id === m.classroom_id);
              const name = (m as any).profiles?.display_name || "A student";
              activity.push({
                id: `join-${m.student_id}-${m.classroom_id}`,
                type: "student_joined",
                message: `${name} joined ${classroom?.name || "a classroom"}`,
                timestamp: m.joined_at,
              });
            }
          }

          // Recent quiz scores
          const { data: recentCompletions } = await supabase
            .from("assignment_completions")
            .select("assignment_id, student_id, completed_at, score, profiles(display_name)")
            .in(
              "assignment_id",
              allAssignments.map((a) => a.id)
            )
            .not("completed_at", "is", null)
            .order("completed_at", { ascending: false })
            .limit(10);

          if (recentCompletions) {
            for (const c of recentCompletions) {
              const assignment = allAssignments.find((a) => a.id === c.assignment_id);
              const name = (c as any).profiles?.display_name || "A student";
              activity.push({
                id: `complete-${c.student_id}-${c.assignment_id}`,
                type: "quiz_complete",
                message: `${name} completed ${assignment?.title || "an assignment"}${c.score != null ? ` (${c.score}%)` : ""}`,
                timestamp: c.completed_at!,
              });
            }
          }
        }

        // Sort activity by timestamp descending
        activity.sort(
          (a, b) =>
            new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
        );

        // Compute average score from completions
        let averageScore = 0;
        if (classroomIds.length > 0 && allAssignments.length > 0) {
          const { data: allCompletions } = await supabase
            .from("assignment_completions")
            .select("score")
            .in(
              "assignment_id",
              allAssignments.map((a) => a.id)
            )
            .not("score", "is", null);

          if (allCompletions && allCompletions.length > 0) {
            const sum = allCompletions.reduce(
              (acc: number, c: any) => acc + (c.score || 0),
              0
            );
            averageScore = Math.round(sum / allCompletions.length);
          }
        }

        // Module scores: aggregate quiz scores by module
        const moduleScoreMap: Record<string, { total: number; count: number }> = {};
        if (classroomIds.length > 0) {
          const { data: quizResults } = await supabase
            .from("quiz_results")
            .select("module_id, score_percent")
            .in("classroom_id", classroomIds);

          if (quizResults) {
            for (const q of quizResults) {
              if (!moduleScoreMap[q.module_id]) {
                moduleScoreMap[q.module_id] = { total: 0, count: 0 };
              }
              moduleScoreMap[q.module_id].total += q.score_percent || 0;
              moduleScoreMap[q.module_id].count += 1;
            }
          }
        }

        const moduleScores = Object.entries(moduleScoreMap)
          .map(([module, { total, count }]) => ({
            module: module.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
            score: Math.round(total / count),
          }))
          .slice(0, 8);

        setData({
          classrooms,
          totalStudents,
          activeAssignments: allAssignments.length,
          averageScore,
          dueSoonCount: dueSoon.length,
          recentActivity: activity.slice(0, 8),
          moduleScores,
        });
      } catch (err) {
        console.error("Failed to load dashboard:", err);
      } finally {
        setLoadingData(false);
      }
    }

    loadDashboard();
  }, [user, supabase]);

  /* ─── Loading state ─── */
  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-gray-300 border-t-gray-900 rounded-full animate-spin" />
      </div>
    );
  }

  /* ─── Unauthenticated ─── */
  if (!user) {
    return (
      <div className="max-w-md mx-auto px-6 py-20 text-center">
        <h1
          className="text-xl font-bold mb-4"
          style={{ color: "var(--color-ink)" }}
        >
          Sign in to access the Teacher Dashboard
        </h1>
        <Link href="/login" className="btn-primary py-3 px-8">
          Sign In
        </Link>
      </div>
    );
  }

  /* ─── Stat values in order matching statConfig ─── */
  const statValues = data
    ? [data.totalStudents, data.activeAssignments, data.averageScore, data.dueSoonCount]
    : [0, 0, 0, 0];

  return (
    <div className="min-h-screen">
      {/* ── Gradient hero strip ── */}
      <div
        style={{
          background:
            "linear-gradient(135deg, rgba(59,130,246,0.07) 0%, rgba(139,92,246,0.06) 50%, rgba(22,163,74,0.05) 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 pt-12 pb-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p
              className="text-sm font-medium mb-1"
              style={{ color: "var(--color-ink-muted)" }}
            >
              Teacher Dashboard
            </p>
            <h1
              className="text-3xl md:text-4xl font-extrabold tracking-tight"
              style={{ color: "var(--color-ink)" }}
            >
              Welcome back, {displayName}
            </h1>
            <p
              className="text-base mt-2 max-w-lg"
              style={{ color: "var(--color-ink-muted)" }}
            >
              Here is an overview of your classrooms and student activity.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-16 -mt-2">
        {loadingData ? (
          <div className="card p-16 text-center mt-6">
            <div className="w-7 h-7 border-2 border-gray-300 border-t-gray-900 rounded-full animate-spin mx-auto" />
            <p className="text-sm mt-4" style={{ color: "var(--color-ink-muted)" }}>
              Loading your dashboard...
            </p>
          </div>
        ) : data ? (
          <>
            {/* ── Stat cards ── */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-10 mt-6">
              {statConfig.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={fadeUp}
                  className="card overflow-hidden"
                  style={{
                    borderLeft: `4px solid ${stat.border}`,
                    background: stat.bg,
                  }}
                >
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-3">
                      <p
                        className="text-xs font-semibold uppercase tracking-wider"
                        style={{ color: "var(--color-ink-faint)" }}
                      >
                        {stat.label}
                      </p>
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center"
                        style={{ background: `${stat.border}15` }}
                      >
                        {stat.icon}
                      </div>
                    </div>
                    <p
                      className="text-4xl font-extrabold tracking-tight"
                      style={{ color: stat.border }}
                    >
                      {stat.format(statValues[i])}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* ── Quick Actions ── */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
              {quickActions(data.classrooms[0]?.id).map((action, i) => (
                <motion.div
                  key={action.title}
                  custom={i + 4}
                  initial="hidden"
                  animate="visible"
                  variants={fadeUp}
                >
                  <Link
                    href={action.href}
                    className="card block p-5 group transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-transform duration-200 group-hover:scale-110"
                      style={{ background: action.bg, color: action.color }}
                    >
                      {action.icon}
                    </div>
                    <p
                      className="text-sm font-bold mb-0.5 transition-colors"
                      style={{ color: "var(--color-ink)" }}
                    >
                      {action.title}
                    </p>
                    <p
                      className="text-xs leading-relaxed"
                      style={{ color: "var(--color-ink-muted)" }}
                    >
                      {action.desc}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* ── Activity + Chart row ── */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
              {/* Recent Activity Feed */}
              <motion.div
                custom={8}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="card p-6"
              >
                <h2
                  className="text-xs font-bold mb-5 uppercase tracking-widest"
                  style={{ color: "var(--color-ink-faint)" }}
                >
                  Recent Activity
                </h2>
                {data.recentActivity.length === 0 ? (
                  <div className="py-8 text-center">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3"
                      style={{ background: "rgba(59,130,246,0.08)" }}
                    >
                      <svg className="w-5 h-5" style={{ color: "#3B82F6" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <p className="text-sm" style={{ color: "var(--color-ink-muted)" }}>
                      No recent activity yet.
                    </p>
                    <p className="text-xs mt-1" style={{ color: "var(--color-ink-faint)" }}>
                      Activity will appear here as students join and complete work.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-1">
                    {data.recentActivity.map((item, idx) => (
                      <div
                        key={item.id}
                        className="flex items-start gap-3 rounded-lg px-3 py-2.5 transition-colors"
                        style={{
                          background: idx % 2 === 0 ? "transparent" : "var(--color-surface, rgba(0,0,0,0.015))",
                        }}
                      >
                        <div className="relative mt-1.5 shrink-0">
                          <div
                            className="w-2.5 h-2.5 rounded-full"
                            style={{
                              background: activityDot[item.type] || "#6B7280",
                              boxShadow: `0 0 0 3px ${activityDot[item.type] || "#6B7280"}20`,
                            }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p
                            className="text-sm leading-snug"
                            style={{ color: "var(--color-ink)" }}
                          >
                            {item.message}
                          </p>
                          <p
                            className="text-xs mt-0.5"
                            style={{ color: "var(--color-ink-faint)" }}
                          >
                            {formatRelativeTime(item.timestamp)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>

              {/* Class Performance Chart */}
              <motion.div
                custom={9}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="card p-6"
              >
                <h2
                  className="text-xs font-bold mb-5 uppercase tracking-widest"
                  style={{ color: "var(--color-ink-faint)" }}
                >
                  Average Score by Module
                </h2>
                {data.moduleScores.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-40">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center mb-3"
                      style={{ background: "rgba(22,163,74,0.08)" }}
                    >
                      <svg className="w-5 h-5" style={{ color: "#16A34A" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <p className="text-sm" style={{ color: "var(--color-ink-muted)" }}>
                      No quiz data available yet.
                    </p>
                    <p className="text-xs mt-1" style={{ color: "var(--color-ink-faint)" }}>
                      Scores will appear once students complete quizzes.
                    </p>
                  </div>
                ) : (
                  <SVGBarChart data={data.moduleScores} />
                )}
              </motion.div>
            </div>

            {/* ── Classrooms List ── */}
            <motion.div
              custom={10}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <div className="flex items-center justify-between mb-5">
                <h2
                  className="text-lg font-bold"
                  style={{ color: "var(--color-ink)" }}
                >
                  Your Classrooms
                </h2>
                <Link
                  href="/teacher/classrooms"
                  className="btn-primary py-2 px-5 text-xs"
                >
                  + New Classroom
                </Link>
              </div>

              {data.classrooms.length === 0 ? (
                <div
                  className="card py-14 px-8 text-center"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(59,130,246,0.04) 0%, transparent 100%)",
                  }}
                >
                  <EmptyClassroomsIllustration />
                  <h3
                    className="text-lg font-bold mb-2"
                    style={{ color: "var(--color-ink)" }}
                  >
                    No classrooms yet
                  </h3>
                  <p
                    className="text-sm mb-6 max-w-sm mx-auto"
                    style={{ color: "var(--color-ink-muted)" }}
                  >
                    Create your first classroom to start inviting students and assigning work.
                  </p>
                  <Link
                    href="/teacher/classrooms"
                    className="btn-primary py-3 px-8 text-sm inline-flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Create Your First Classroom
                  </Link>
                </div>
              ) : (
                <div className="space-y-3">
                  {data.classrooms.map((classroom, idx) => (
                    <motion.div
                      key={classroom.id}
                      custom={11 + idx}
                      initial="hidden"
                      animate="visible"
                      variants={fadeUp}
                    >
                      <Link
                        href={`/teacher/classrooms/${classroom.id}`}
                        className="card p-5 flex items-center justify-between hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group"
                      >
                        <div className="flex items-center gap-4">
                          <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold shrink-0"
                            style={{
                              background: `hsl(${(idx * 60 + 210) % 360}, 70%, 95%)`,
                              color: `hsl(${(idx * 60 + 210) % 360}, 60%, 45%)`,
                            }}
                          >
                            {classroom.name.charAt(0).toUpperCase()}
                          </div>
                          <div>
                            <h3
                              className="font-semibold group-hover:text-blue-600 transition-colors"
                              style={{ color: "var(--color-ink)" }}
                            >
                              {classroom.name}
                            </h3>
                            <div className="flex items-center gap-3 mt-0.5">
                              <span
                                className="text-xs"
                                style={{ color: "var(--color-ink-muted)" }}
                              >
                                {classroom.student_count} student
                                {classroom.student_count !== 1 ? "s" : ""}
                              </span>
                              {classroom.school_name && (
                                <span
                                  className="text-xs"
                                  style={{ color: "var(--color-ink-faint)" }}
                                >
                                  {classroom.school_name}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <p
                              className="text-xs font-medium"
                              style={{ color: "var(--color-ink-faint)" }}
                            >
                              Join Code
                            </p>
                            <p
                              className="font-mono font-bold text-sm"
                              style={{ color: "var(--color-ink)" }}
                            >
                              {classroom.join_code}
                            </p>
                          </div>
                          <svg
                            className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </>
        ) : (
          <div className="card p-10 text-center mt-6">
            <p className="text-sm" style={{ color: "var(--color-ink-muted)" }}>
              Failed to load dashboard data. Please try refreshing the page.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function formatRelativeTime(dateStr: string): string {
  const now = new Date();
  const date = new Date(dateStr);
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 1) return "Just now";
  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  if (diffDays < 7) return `${diffDays}d ago`;
  return date.toLocaleDateString();
}
