"use client";

import { useEffect, useState, useCallback } from "react";
import { useAuth } from "@/components/providers/AuthProvider";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Classroom, Assignment } from "@/lib/types/teacher";
import { microCourse, macroCourse } from "@/data/courses";

/* ─── Types ─── */

interface ActivityItem {
  id: string;
  type: "quiz_complete" | "student_joined" | "assignment_submitted" | "high_score";
  studentName: string;
  message: string;
  score?: number;
  timestamp: string;
}

interface ClassroomCard extends Classroom {
  student_count: number;
  avg_score: number;
  modules_progress: number; // percentage 0-100
}

interface DashboardData {
  classrooms: ClassroomCard[];
  totalStudents: number;
  activeClassrooms: number;
  dueSoonCount: number;
  averageScore: number;
  recentActivity: ActivityItem[];
  moduleScores: { module: string; moduleId: string; score: number }[];
}

/* ─── Constants ─── */

const totalModules = microCourse.modules.length + macroCourse.modules.length;

const allModulesMap: Record<string, string> = {};
for (const m of [...microCourse.modules, ...macroCourse.modules]) {
  allModulesMap[m.id] = m.title;
}

/* ─── Animation variants ─── */

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
};

/* ─── Stat card configuration ─── */

const statCards = [
  {
    key: "students",
    label: "Total Students",
    color: "#3B82F6",
    bg: "rgba(59,130,246,0.06)",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    key: "classrooms",
    label: "Active Classrooms",
    color: "#8B5CF6",
    bg: "rgba(139,92,246,0.06)",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    key: "dueSoon",
    label: "Due This Week",
    color: "#16A34A",
    bg: "rgba(22,163,74,0.06)",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    key: "avgScore",
    label: "Average Class Score",
    color: "#D97706",
    bg: "rgba(217,119,6,0.06)",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

/* ─── Activity feed colors ─── */

const activityColors: Record<string, string> = {
  student_joined: "#3B82F6",
  quiz_complete: "#16A34A",
  assignment_submitted: "#8B5CF6",
  high_score: "#D97706",
};

const activityLabels: Record<string, string> = {
  student_joined: "Joined",
  quiz_complete: "Completed quiz",
  assignment_submitted: "Submitted",
  high_score: "New high score",
};

/* ─── Quick actions config ─── */

const quickActions = [
  {
    href: "/teacher/assignments/quick-exam",
    title: "Quick Exam",
    desc: "Create an exam in 3 clicks",
    color: "#DC2626",
    bg: "rgba(220,38,38,0.08)",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    href: "/teacher/assignments/new",
    title: "Assign Module",
    desc: "Send lessons or quizzes to students",
    color: "#3B82F6",
    bg: "rgba(59,130,246,0.08)",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    href: "/teacher/reports",
    title: "View Reports",
    desc: "Student progress and analytics",
    color: "#D97706",
    bg: "rgba(217,119,6,0.08)",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    href: "/sandbox",
    title: "Graph Sandbox",
    desc: "Project on classroom screen",
    color: "#16A34A",
    bg: "rgba(22,163,74,0.08)",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
      </svg>
    ),
  },
  {
    href: "/teacher/assignments/new?type=quiz",
    title: "Create Quiz",
    desc: "Quick quiz from any module",
    color: "#8B5CF6",
    bg: "rgba(139,92,246,0.08)",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
];

/* ─── Bar chart component ─── */

function ModulePerformanceChart({ data }: { data: { module: string; moduleId: string; score: number }[] }) {
  if (data.length === 0) return null;

  const sorted = [...data].sort((a, b) => a.score - b.score);
  const maxScore = 100;

  return (
    <div className="space-y-3">
      {sorted.map((d) => {
        const pct = Math.max((d.score / maxScore) * 100, 2);
        const barColor =
          d.score >= 80 ? "#16A34A" : d.score >= 60 ? "#3B82F6" : d.score >= 40 ? "#D97706" : "#EF4444";
        return (
          <div key={d.moduleId} className="group">
            <div className="flex items-center justify-between mb-1">
              <span
                className="text-xs font-medium truncate max-w-[70%]"
                style={{ color: "var(--color-ink)" }}
              >
                {d.module}
              </span>
              <span
                className="text-xs font-bold tabular-nums"
                style={{ color: barColor }}
              >
                {d.score}%
              </span>
            </div>
            <div
              className="h-2 rounded-full overflow-hidden"
              style={{ background: "var(--color-border-subtle)" }}
            >
              <motion.div
                className="h-full rounded-full"
                style={{ background: barColor }}
                initial={{ width: 0 }}
                animate={{ width: `${pct}%` }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              />
            </div>
          </div>
        );
      })}
      <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-4 pt-3" style={{ borderTop: "1px solid var(--color-border-subtle)" }}>
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#16A34A" }} />
          <span className="text-[10px]" style={{ color: "var(--color-ink-faint)" }}>80%+</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#3B82F6" }} />
          <span className="text-[10px]" style={{ color: "var(--color-ink-faint)" }}>60-79%</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#D97706" }} />
          <span className="text-[10px]" style={{ color: "var(--color-ink-faint)" }}>40-59%</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#EF4444" }} />
          <span className="text-[10px]" style={{ color: "var(--color-ink-faint)" }}>&lt;40%</span>
        </div>
      </div>
    </div>
  );
}

/* ─── Empty state illustration ─── */

function EmptyClassroomsIllustration() {
  return (
    <svg width="200" height="160" viewBox="0 0 200 160" fill="none" className="mx-auto mb-6">
      {/* desk */}
      <rect x="30" y="90" width="140" height="8" rx="4" fill="var(--color-border)" />
      <rect x="48" y="98" width="8" height="36" rx="2" fill="var(--color-border)" />
      <rect x="144" y="98" width="8" height="36" rx="2" fill="var(--color-border)" />
      {/* book stack */}
      <rect x="65" y="66" width="50" height="8" rx="3" fill="#93C5FD" />
      <rect x="60" y="54" width="60" height="8" rx="3" fill="#60A5FA" />
      <rect x="68" y="42" width="44" height="8" rx="3" fill="#3B82F6" />
      {/* sparkle */}
      <circle cx="138" cy="42" r="4" fill="#FBBF24" />
      <circle cx="152" cy="56" r="2.5" fill="#FBBF24" opacity="0.6" />
      <circle cx="48" cy="36" r="3" fill="#A78BFA" opacity="0.7" />
      <circle cx="36" cy="52" r="2" fill="#A78BFA" opacity="0.4" />
      {/* plus sign */}
      <rect x="118" y="24" width="18" height="3" rx="1.5" fill="#3B82F6" opacity="0.5" />
      <rect x="125.5" y="16.5" width="3" height="18" rx="1.5" fill="#3B82F6" opacity="0.5" />
    </svg>
  );
}

/* ─── Skeleton loader ─── */

function DashboardSkeleton() {
  return (
    <div className="min-h-screen">
      <div
        style={{
          background:
            "linear-gradient(135deg, rgba(59,130,246,0.06) 0%, rgba(139,92,246,0.05) 50%, rgba(22,163,74,0.04) 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 pb-10">
          <div className="h-4 w-32 rounded-md bg-gray-200 animate-pulse mb-3" />
          <div className="h-10 w-72 rounded-lg bg-gray-200 animate-pulse mb-2" />
          <div className="h-4 w-56 rounded-md bg-gray-200 animate-pulse" />
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-16 -mt-2">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-10 mt-6">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="card p-5">
              <div className="h-3 w-24 rounded bg-gray-200 animate-pulse mb-4" />
              <div className="h-10 w-16 rounded-lg bg-gray-200 animate-pulse" />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          <div className="card p-6">
            <div className="h-3 w-28 rounded bg-gray-200 animate-pulse mb-6" />
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-3 mb-4">
                <div className="w-2.5 h-2.5 rounded-full bg-gray-200 animate-pulse" />
                <div className="flex-1">
                  <div className="h-3 w-full rounded bg-gray-200 animate-pulse mb-1.5" />
                  <div className="h-2 w-16 rounded bg-gray-200 animate-pulse" />
                </div>
              </div>
            ))}
          </div>
          <div className="card p-6">
            <div className="h-3 w-40 rounded bg-gray-200 animate-pulse mb-6" />
            {[0, 1, 2, 3, 4].map((i) => (
              <div key={i} className="mb-3">
                <div className="h-2.5 w-full rounded bg-gray-200 animate-pulse mb-1.5" />
                <div className="h-2 w-full rounded-full bg-gray-200 animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Copy button utility ─── */

function CopyCodeButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-mono font-bold tracking-wider transition-all hover:scale-105"
      style={{
        background: copied ? "rgba(22,163,74,0.1)" : "rgba(59,130,246,0.08)",
        color: copied ? "#16A34A" : "#3B82F6",
        border: `1px solid ${copied ? "rgba(22,163,74,0.2)" : "rgba(59,130,246,0.15)"}`,
      }}
      title="Click to copy join code"
    >
      {copied ? (
        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      ) : (
        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )}
      {code}
    </button>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function TeacherDashboard() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const supabase = createClient();
  const [data, setData] = useState<DashboardData | null>(null);
  const [loadingData, setLoadingData] = useState(true);
  const [error, setError] = useState(false);
  const [displayName, setDisplayName] = useState("");
  const [schoolName, setSchoolName] = useState("");

  const loadDashboard = useCallback(async () => {
    if (!user) return;

    try {
      // ── Load profile ──
      const { data: profile } = await supabase
        .from("profiles")
        .select("display_name")
        .eq("id", user.id)
        .single();

      setDisplayName(profile?.display_name || user.email?.split("@")[0] || "Teacher");

      // ── Load classrooms ──
      const res = await fetch("/api/classrooms");
      const classroomsData = await res.json();
      const rawClassrooms = (classroomsData.classrooms || []).map((c: any) => ({
        ...c,
        student_count: c.classroom_members?.[0]?.count || 0,
      }));

      // Derive school name from first classroom that has one
      const firstSchool = rawClassrooms.find((c: any) => c.school_name)?.school_name;
      setSchoolName(firstSchool || "");

      const totalStudents = rawClassrooms.reduce(
        (sum: number, c: any) => sum + c.student_count,
        0
      );

      const activeClassrooms = rawClassrooms.filter((c: any) => c.active).length;

      // ── Load assignments across all classrooms ──
      const classroomIds = rawClassrooms.map((c: any) => c.id);
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

      // ── Build activity feed ──
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
            const classroom = rawClassrooms.find((c: any) => c.id === m.classroom_id);
            const name = (m as any).profiles?.display_name || "A student";
            activity.push({
              id: `join-${m.student_id}-${m.classroom_id}`,
              type: "student_joined",
              studentName: name,
              message: `joined ${classroom?.name || "a classroom"}`,
              timestamp: m.joined_at,
            });
          }
        }

        // Recent quiz/assignment completions
        if (allAssignments.length > 0) {
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
              const isHighScore = c.score != null && c.score >= 90;

              activity.push({
                id: `complete-${c.student_id}-${c.assignment_id}`,
                type: isHighScore ? "high_score" : assignment?.type === "quiz" || assignment?.type === "practice_test" ? "quiz_complete" : "assignment_submitted",
                studentName: name,
                message: `completed ${assignment?.title || "an assignment"}`,
                score: c.score ?? undefined,
                timestamp: c.completed_at!,
              });
            }
          }
        }
      }

      // Sort activity by timestamp descending
      activity.sort(
        (a, b) =>
          new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
      );

      // ── Compute average score ──
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

      // ── Module scores (aggregate from assignment_completions + exam_sessions) ──
      const moduleScoreMap: Record<string, { total: number; count: number }> = {};
      if (allAssignments.length > 0) {
        // Map assignment IDs to their module_ids
        const assignmentModuleMap: Record<string, string[]> = {};
        for (const a of allAssignments) {
          assignmentModuleMap[a.id] = a.module_ids || [];
        }

        // Get completions
        const { data: completions } = await supabase
          .from("assignment_completions")
          .select("assignment_id, score")
          .in("assignment_id", allAssignments.map((a) => a.id))
          .not("score", "is", null);

        if (completions) {
          for (const c of completions) {
            const moduleIds = assignmentModuleMap[c.assignment_id] || [];
            for (const moduleId of moduleIds) {
              if (!moduleScoreMap[moduleId]) moduleScoreMap[moduleId] = { total: 0, count: 0 };
              moduleScoreMap[moduleId].total += c.score || 0;
              moduleScoreMap[moduleId].count += 1;
            }
          }
        }

        // Also get exam session scores
        const { data: examSessions } = await supabase
          .from("exam_sessions")
          .select("assignment_id, score")
          .in("assignment_id", allAssignments.map((a) => a.id))
          .in("status", ["submitted", "force_submitted"])
          .not("score", "is", null);

        if (examSessions) {
          for (const es of examSessions) {
            const moduleIds = assignmentModuleMap[es.assignment_id] || [];
            for (const moduleId of moduleIds) {
              if (!moduleScoreMap[moduleId]) moduleScoreMap[moduleId] = { total: 0, count: 0 };
              moduleScoreMap[moduleId].total += es.score || 0;
              moduleScoreMap[moduleId].count += 1;
            }
          }
        }
      }

      const moduleScores = Object.entries(moduleScoreMap)
        .map(([moduleId, { total, count }]) => ({
          moduleId,
          module: allModulesMap[moduleId] || moduleId.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
          score: Math.round(total / count),
        }))
        .sort((a, b) => a.score - b.score)
        .slice(0, 10);

      // ── Compute per-classroom stats ──
      const classroomCards: ClassroomCard[] = [];
      for (const c of rawClassrooms) {
        let avgScore = 0;
        let modulesProgress = 0;

        if (c.student_count > 0) {
          // Get scores from assignment_completions for this classroom
          const classAssignmentIds = allAssignments
            .filter((a) => a.classroom_id === c.id)
            .map((a) => a.id);

          const scores: number[] = [];
          if (classAssignmentIds.length > 0) {
            const { data: completions } = await supabase
              .from("assignment_completions")
              .select("score, student_id")
              .in("assignment_id", classAssignmentIds)
              .not("score", "is", null);
            if (completions) {
              for (const comp of completions) {
                if (comp.score != null) scores.push(comp.score);
              }
            }

            // Also include exam_sessions scores
            const { data: examSessions } = await supabase
              .from("exam_sessions")
              .select("score, student_id")
              .in("assignment_id", classAssignmentIds)
              .in("status", ["submitted", "force_submitted"])
              .not("score", "is", null);
            if (examSessions) {
              for (const es of examSessions) {
                if (es.score != null) scores.push(es.score);
              }
            }
          }

          if (scores.length > 0) {
            avgScore = Math.round(scores.reduce((acc, s) => acc + s, 0) / scores.length);
          }

          // Compute module progress from module_progress table
          const { data: memberIds } = await supabase
            .from("classroom_members")
            .select("student_id")
            .eq("classroom_id", c.id);
          if (memberIds && memberIds.length > 0) {
            const { data: moduleProgressData } = await supabase
              .from("module_progress")
              .select("module_id, user_id")
              .in("user_id", memberIds.map((m) => m.student_id))
              .eq("completed", true);
            if (moduleProgressData && moduleProgressData.length > 0) {
              const studentModuleMap: Record<string, Set<string>> = {};
              for (const mp of moduleProgressData) {
                if (!studentModuleMap[mp.user_id]) studentModuleMap[mp.user_id] = new Set();
                studentModuleMap[mp.user_id].add(mp.module_id);
              }
              const avgModulesPerStudent =
                Object.values(studentModuleMap).reduce((s, set) => s + set.size, 0) /
                Object.keys(studentModuleMap).length;
              modulesProgress = Math.round((avgModulesPerStudent / totalModules) * 100);
            }
          }
        }

        classroomCards.push({
          ...c,
          avg_score: avgScore,
          modules_progress: modulesProgress,
        });
      }

      setData({
        classrooms: classroomCards,
        totalStudents,
        activeClassrooms,
        dueSoonCount: dueSoon.length,
        averageScore,
        recentActivity: activity.slice(0, 10),
        moduleScores,
      });
    } catch (err) {
      console.error("Failed to load dashboard:", err);
      setError(true);
    } finally {
      setLoadingData(false);
    }
  }, [user, supabase]);

  useEffect(() => {
    if (!user) return;
    loadDashboard();
  }, [user, loadDashboard]);

  /* ─── Redirect to onboarding if no classrooms ─── */
  useEffect(() => {
    if (!loading && !loadingData && user && data && data.classrooms.length === 0) {
      router.push("/teacher/onboarding");
    }
  }, [loading, loadingData, user, data, router]);

  /* ─── Loading state ─── */
  if (loading || (loadingData && user)) {
    return <DashboardSkeleton />;
  }

  /* ─── Unauthenticated ─── */
  if (!user) {
    return (
      <div className="max-w-md mx-auto px-6 py-20 text-center">
        <h1 className="text-xl font-bold mb-4" style={{ color: "var(--color-ink)" }}>
          Sign in to access the Teacher Dashboard
        </h1>
        <Link href="/login" className="btn-primary py-3 px-8">
          Sign In
        </Link>
      </div>
    );
  }

  /* ─── Error state ─── */
  if (error || !data) {
    return (
      <div className="min-h-screen">
        <div
          style={{
            background:
              "linear-gradient(135deg, rgba(59,130,246,0.06) 0%, rgba(139,92,246,0.05) 50%, rgba(22,163,74,0.04) 100%)",
          }}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 pb-10">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight" style={{ color: "var(--color-ink)" }}>
              Teacher Dashboard
            </h1>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
          <div className="card p-12 text-center mt-6">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ background: "rgba(239,68,68,0.08)" }}
            >
              <svg className="w-6 h-6" style={{ color: "#EF4444" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <p className="text-sm font-medium mb-1" style={{ color: "var(--color-ink)" }}>
              Something went wrong
            </p>
            <p className="text-sm mb-6" style={{ color: "var(--color-ink-muted)" }}>
              We could not load your dashboard data. Please try refreshing.
            </p>
            <button
              onClick={() => { setError(false); setLoadingData(true); loadDashboard(); }}
              className="btn-primary py-2.5 px-6 text-sm"
            >
              Retry
            </button>
          </div>
        </div>
      </div>
    );
  }

  /* ─── Stat values ─── */
  const statValues: Record<string, string> = {
    students: String(data.totalStudents),
    classrooms: String(data.activeClassrooms),
    dueSoon: String(data.dueSoonCount),
    avgScore: data.averageScore > 0 ? `${data.averageScore}%` : "--",
  };

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen">
      {/* ── Hero header ── */}
      <div
        style={{
          background:
            "linear-gradient(135deg, rgba(59,130,246,0.07) 0%, rgba(139,92,246,0.06) 50%, rgba(22,163,74,0.04) 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 pb-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-medium mb-1" style={{ color: "var(--color-ink-muted)" }}>
              Teacher Dashboard
            </p>
            <h1
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight"
              style={{ color: "var(--color-ink)" }}
            >
              Welcome back, {displayName}
            </h1>
            <p className="text-sm mt-2" style={{ color: "var(--color-ink-muted)" }}>
              {schoolName ? `${schoolName} \u00B7 ` : ""}{today}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-16 -mt-2">

        {/* ═══ Stat Cards ═══ */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-10 mt-6"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {statCards.map((stat, i) => (
            <motion.div
              key={stat.key}
              custom={i}
              variants={fadeUp}
              className="card overflow-hidden transition-shadow duration-200 hover:shadow-md"
              style={{
                borderLeft: `4px solid ${stat.color}`,
                background: stat.bg,
              }}
            >
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <p
                    className="text-[11px] font-semibold uppercase tracking-wider"
                    style={{ color: "var(--color-ink-faint)" }}
                  >
                    {stat.label}
                  </p>
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center"
                    style={{ background: `${stat.color}12`, color: stat.color }}
                  >
                    {stat.icon}
                  </div>
                </div>
                <p
                  className="text-3xl md:text-4xl font-extrabold tracking-tight"
                  style={{ color: stat.color }}
                >
                  {statValues[stat.key]}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ═══ Classrooms Section ═══ */}
        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-10"
        >
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg font-bold" style={{ color: "var(--color-ink)" }}>
              Your Classrooms
            </h2>
            <Link href="/teacher/classrooms" className="btn-primary py-2 px-5 text-xs">
              + New Classroom
            </Link>
          </div>

          {(() => {
            const activeClassrooms = data.classrooms.filter((c) => c.active !== false);
            const archivedClassrooms = data.classrooms.filter((c) => c.active === false);

            if (activeClassrooms.length === 0 && archivedClassrooms.length === 0) {
              return (
                <div
                  className="card py-14 px-8 text-center"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(59,130,246,0.04) 0%, transparent 100%)",
                  }}
                >
                  <EmptyClassroomsIllustration />
                  <h3 className="text-lg font-bold mb-2" style={{ color: "var(--color-ink)" }}>
                    No classrooms yet
                  </h3>
                  <p
                    className="text-sm mb-6 max-w-md mx-auto leading-relaxed"
                    style={{ color: "var(--color-ink-muted)" }}
                  >
                    Create your first classroom to start inviting students, assigning lessons, and tracking progress.
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
              );
            }

            return (
              <>
                {activeClassrooms.length === 0 && archivedClassrooms.length > 0 ? (
                  <div className="card p-8 text-center mb-4">
                    <p className="text-sm" style={{ color: "var(--color-ink-muted)" }}>
                      All classrooms are archived. Create a new one or unarchive an existing classroom below.
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {activeClassrooms.map((classroom, idx) => (
                <motion.div
                  key={classroom.id}
                  custom={5 + idx}
                  initial="hidden"
                  animate="visible"
                  variants={fadeUp}
                >
                  <Link
                    href={`/teacher/classrooms/${classroom.id}`}
                    className="card block p-5 group transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                    style={{ position: "relative", overflow: "hidden" }}
                  >
                    {/* Colored top accent */}
                    <div
                      className="absolute top-0 left-0 right-0 h-1"
                      style={{
                        background: `hsl(${(idx * 55 + 210) % 360}, 65%, 55%)`,
                      }}
                    />

                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1 min-w-0">
                        <h3
                          className="font-semibold text-base truncate group-hover:text-blue-600 transition-colors"
                          style={{ color: "var(--color-ink)" }}
                        >
                          {classroom.name}
                        </h3>
                        {classroom.school_name && (
                          <p className="text-xs mt-0.5 truncate" style={{ color: "var(--color-ink-faint)" }}>
                            {classroom.school_name}
                          </p>
                        )}
                      </div>
                      <svg
                        className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors shrink-0 mt-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>

                    {/* Stats row */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5" style={{ color: "var(--color-ink-faint)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <span className="text-xs font-medium" style={{ color: "var(--color-ink-muted)" }}>
                          {classroom.student_count} student{classroom.student_count !== 1 ? "s" : ""}
                        </span>
                      </div>
                      {classroom.avg_score > 0 && (
                        <span
                          className="text-xs font-bold"
                          style={{
                            color:
                              classroom.avg_score >= 70 ? "#16A34A" : classroom.avg_score >= 50 ? "#D97706" : "#EF4444",
                          }}
                        >
                          Avg: {classroom.avg_score}%
                        </span>
                      )}
                    </div>

                    {/* Progress bar */}
                    <div className="mb-3">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] font-medium" style={{ color: "var(--color-ink-faint)" }}>
                          Module Progress
                        </span>
                        <span className="text-[10px] font-bold" style={{ color: "var(--color-ink-muted)" }}>
                          {classroom.modules_progress}%
                        </span>
                      </div>
                      <div
                        className="h-1.5 rounded-full overflow-hidden"
                        style={{ background: "var(--color-border-subtle)" }}
                      >
                        <div
                          className="h-full rounded-full transition-all duration-500"
                          style={{
                            width: `${Math.max(classroom.modules_progress, 1)}%`,
                            background: `hsl(${(idx * 55 + 210) % 360}, 65%, 55%)`,
                          }}
                        />
                      </div>
                    </div>

                    {/* Join code */}
                    <div className="flex items-center justify-between">
                      <CopyCodeButton code={classroom.join_code} />
                      <span
                        className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{ color: "#3B82F6" }}
                      >
                        View Class
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}

                      {/* Create new classroom card */}
                      <motion.div
                        custom={5 + activeClassrooms.length}
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                      >
                        <Link
                          href="/teacher/classrooms"
                          className="card flex flex-col items-center justify-center p-8 group transition-all duration-200 hover:-translate-y-1 hover:shadow-lg h-full min-h-[200px]"
                          style={{
                            border: "2px dashed var(--color-border)",
                            background: "transparent",
                          }}
                        >
                          <div
                            className="w-12 h-12 rounded-full flex items-center justify-center mb-3 transition-transform duration-200 group-hover:scale-110"
                            style={{
                              background: "rgba(59,130,246,0.08)",
                              color: "#3B82F6",
                            }}
                          >
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                          </div>
                          <p className="text-sm font-semibold" style={{ color: "var(--color-ink-muted)" }}>
                            Create New Classroom
                          </p>
                        </Link>
                      </motion.div>
                    </div>
                )}

                {/* Archived classrooms */}
                {archivedClassrooms.length > 0 && (
                  <details className="mt-4">
                    <summary
                      className="cursor-pointer text-sm font-medium py-2 select-none"
                      style={{ color: "var(--color-ink-muted)" }}
                    >
                      Archived Classrooms ({archivedClassrooms.length})
                    </summary>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-3">
                      {archivedClassrooms.map((classroom, idx) => (
                        <Link
                          key={classroom.id}
                          href={`/teacher/classrooms/${classroom.id}`}
                          className="card block p-5 group transition-all duration-200 hover:-translate-y-1 hover:shadow-lg opacity-60 hover:opacity-100"
                          style={{ position: "relative", overflow: "hidden" }}
                        >
                          <div
                            className="absolute top-0 left-0 right-0 h-1"
                            style={{ background: "var(--color-ink-faint)" }}
                          />
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex-1 min-w-0">
                              <h3
                                className="font-semibold text-base truncate"
                                style={{ color: "var(--color-ink-muted)" }}
                              >
                                {classroom.name}
                              </h3>
                              <span className="text-[10px] uppercase tracking-wider font-semibold" style={{ color: "var(--color-ink-faint)" }}>
                                Archived
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <span className="text-xs" style={{ color: "var(--color-ink-faint)" }}>
                              {classroom.student_count} student{classroom.student_count !== 1 ? "s" : ""}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </details>
                )}
              </>
            );
          })()}
        </motion.div>

        {/* ═══ Recent Activity + Performance Chart ═══ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          {/* Activity Feed */}
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
              <div className="py-10 text-center">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center mx-auto mb-3"
                  style={{ background: "rgba(59,130,246,0.08)" }}
                >
                  <svg className="w-5 h-5" style={{ color: "#3B82F6" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p className="text-sm font-medium" style={{ color: "var(--color-ink-muted)" }}>
                  No recent activity yet
                </p>
                <p className="text-xs mt-1" style={{ color: "var(--color-ink-faint)" }}>
                  Activity will appear here as students join and complete work.
                </p>
              </div>
            ) : (
              <div className="space-y-0.5">
                {data.recentActivity.map((item, idx) => (
                  <div
                    key={item.id}
                    className="flex items-start gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-black/[0.02]"
                  >
                    {/* Timeline dot + line */}
                    <div className="relative mt-1.5 shrink-0">
                      <div
                        className="w-2.5 h-2.5 rounded-full"
                        style={{
                          background: activityColors[item.type] || "#6B7280",
                          boxShadow: `0 0 0 3px ${activityColors[item.type] || "#6B7280"}18`,
                        }}
                      />
                      {idx < data.recentActivity.length - 1 && (
                        <div
                          className="absolute left-1/2 top-4 -translate-x-1/2 w-px"
                          style={{
                            height: 20,
                            background: "var(--color-border-subtle)",
                          }}
                        />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm leading-snug" style={{ color: "var(--color-ink)" }}>
                        <span className="font-semibold">{item.studentName}</span>
                        {" "}{item.message}
                        {item.score != null && (
                          <span
                            className="ml-1.5 inline-flex items-center px-1.5 py-0.5 rounded text-[11px] font-bold"
                            style={{
                              background:
                                item.score >= 80
                                  ? "rgba(22,163,74,0.1)"
                                  : item.score >= 60
                                  ? "rgba(59,130,246,0.08)"
                                  : "rgba(217,119,6,0.1)",
                              color:
                                item.score >= 80
                                  ? "#16A34A"
                                  : item.score >= 60
                                  ? "#3B82F6"
                                  : "#D97706",
                            }}
                          >
                            {item.score}%
                          </span>
                        )}
                      </p>
                      <p className="text-[11px] mt-0.5" style={{ color: "var(--color-ink-faint)" }}>
                        {formatRelativeTime(item.timestamp)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Class Performance Overview */}
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
              Class Performance by Module
            </h2>
            {data.moduleScores.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-10">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center mb-3"
                  style={{ background: "rgba(22,163,74,0.08)" }}
                >
                  <svg className="w-5 h-5" style={{ color: "#16A34A" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <p className="text-sm font-medium" style={{ color: "var(--color-ink-muted)" }}>
                  No quiz data available yet
                </p>
                <p className="text-xs mt-1 text-center max-w-xs" style={{ color: "var(--color-ink-faint)" }}>
                  Performance data will appear here once students start completing quizzes.
                </p>
              </div>
            ) : (
              <ModulePerformanceChart data={data.moduleScores} />
            )}
          </motion.div>
        </div>

        {/* ═══ Quick Actions Bar ═══ */}
        <motion.div
          custom={10}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-10"
        >
          <h2 className="text-xs font-bold mb-4 uppercase tracking-widest" style={{ color: "var(--color-ink-faint)" }}>
            Quick Actions
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {quickActions.map((action, i) => {
              // If "Assign Module" and we have classrooms, link to first classroom
              let href = action.href;
              if (action.href === "/teacher/assignments/new" && data.classrooms.length > 0) {
                href = `/teacher/assignments/new?classroom=${data.classrooms[0].id}`;
              }
              if (action.href.includes("type=quiz") && data.classrooms.length > 0) {
                href = `/teacher/assignments/new?classroom=${data.classrooms[0].id}&type=quiz`;
              }

              return (
                <Link
                  key={action.title}
                  href={href}
                  className="card block p-5 group transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-3 transition-transform duration-200 group-hover:scale-110"
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
                  <p className="text-xs leading-relaxed" style={{ color: "var(--color-ink-muted)" }}>
                    {action.desc}
                  </p>
                </Link>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* ─── Utilities ─── */

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
  if (diffDays === 1) return "Yesterday";
  if (diffDays < 7) return `${diffDays}d ago`;
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}
