"use client";

import { useEffect, useState, useCallback, useMemo } from "react";
import { useAuth } from "@/components/providers/AuthProvider";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import type { Classroom, Assignment } from "@/lib/types/teacher";
import { courses } from "@/data/courses";

/* ────────────────────────── Types ────────────────────────── */

type TabKey = "students" | "assignments" | "analytics" | "settings";

interface StudentRow {
  student_id: string;
  display_name: string | null;
  joined_at: string;
  modules_completed: number;
  avg_score: number;
  last_active: string | null;
  quiz_scores: number[];
  module_scores: Record<string, number[]>;
  weekly_completions: Record<string, number>;
}

interface AssignmentWithStats extends Assignment {
  completed_count: number;
  total_students: number;
  avg_score: number;
}

type SortField = "name" | "modules" | "score" | "last_active" | "status";
type SortDir = "asc" | "desc";

/* ────────────────────────── Helpers ────────────────────────── */

const allModules = courses.flatMap((c) => c.modules);

function getModuleTitle(id: string): string {
  return allModules.find((m) => m.id === id)?.title ?? id;
}

function daysSince(date: string | null): number {
  if (!date) return 999;
  return Math.floor(
    (Date.now() - new Date(date).getTime()) / (1000 * 60 * 60 * 24)
  );
}

function getStatus(lastActive: string | null): "active" | "idle" | "inactive" {
  const d = daysSince(lastActive);
  if (d <= 7) return "active";
  if (d <= 14) return "idle";
  return "inactive";
}

function statusLabel(s: "active" | "idle" | "inactive") {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function statusColor(s: "active" | "idle" | "inactive") {
  switch (s) {
    case "active":
      return { bg: "rgba(22,163,74,0.08)", text: "#16A34A" };
    case "idle":
      return { bg: "rgba(217,119,6,0.08)", text: "#D97706" };
    case "inactive":
      return { bg: "rgba(239,68,68,0.08)", text: "#EF4444" };
  }
}

function assignmentStatus(a: AssignmentWithStats): "upcoming" | "active" | "past_due" | "completed" {
  const now = Date.now();
  const pct = a.total_students > 0 ? a.completed_count / a.total_students : 0;
  if (pct >= 1) return "completed";
  if (!a.due_date) return "active";
  const due = new Date(a.due_date).getTime();
  if (due > now + 86400000 * 2) return "upcoming";
  if (due < now) return "past_due";
  return "active";
}

function assignmentStatusStyle(s: ReturnType<typeof assignmentStatus>) {
  switch (s) {
    case "upcoming":
      return { bg: "rgba(59,130,246,0.08)", text: "#3B82F6", label: "Upcoming" };
    case "active":
      return { bg: "rgba(22,163,74,0.08)", text: "#16A34A", label: "Active" };
    case "past_due":
      return { bg: "rgba(239,68,68,0.08)", text: "#EF4444", label: "Past Due" };
    case "completed":
      return { bg: "rgba(107,114,128,0.08)", text: "#6B7280", label: "Completed" };
  }
}

function gradeLabel(score: number): string {
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
}

function relativeTime(date: string | null): string {
  if (!date) return "Never";
  const d = daysSince(date);
  if (d === 0) return "Today";
  if (d === 1) return "Yesterday";
  if (d < 7) return `${d}d ago`;
  if (d < 30) return `${Math.floor(d / 7)}w ago`;
  return new Date(date).toLocaleDateString();
}

/* ────────────────────────── Animation ────────────────────────── */

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.4, ease: "easeOut" },
  }),
};

const tabVariants = {
  enter: { opacity: 0, x: 12 },
  center: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } },
  exit: { opacity: 0, x: -12, transition: { duration: 0.15 } },
};

/* ────────────────────────── Skeleton ────────────────────────── */

function Skeleton({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <div
      className={`animate-pulse rounded-lg ${className}`}
      style={{ background: "var(--color-border-subtle)", ...style }}
    />
  );
}

function HeaderSkeleton() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
      <Skeleton className="w-24 h-4 mb-8" />
      <div className="flex items-start justify-between mb-8">
        <div>
          <Skeleton className="w-64 h-8 mb-2" />
          <Skeleton className="w-40 h-4" />
        </div>
        <Skeleton className="w-36 h-10 rounded-xl" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        {[1, 2, 3, 4].map((i) => (
          <Skeleton key={i} className="h-24 rounded-2xl" />
        ))}
      </div>
      <Skeleton className="w-full h-12 rounded-xl mb-6" />
      <div className="space-y-3">
        {[1, 2, 3, 4, 5].map((i) => (
          <Skeleton key={i} className="h-16 rounded-xl" />
        ))}
      </div>
    </div>
  );
}

/* ────────────────────────── Bar Chart (SVG) ────────────────────────── */

function HorizontalBarChart({
  data,
}: {
  data: { label: string; value: number; max: number }[];
}) {
  if (data.length === 0)
    return (
      <p className="text-sm" style={{ color: "var(--color-ink-muted)" }}>
        No data yet.
      </p>
    );
  const barH = 28;
  const gap = 8;
  const labelW = 180;
  const totalH = data.length * (barH + gap);

  return (
    <svg width="100%" height={totalH} viewBox={`0 0 600 ${totalH}`} preserveAspectRatio="xMinYMin meet">
      {data.map((d, i) => {
        const y = i * (barH + gap);
        const pct = d.max > 0 ? d.value / d.max : 0;
        const barWidth = Math.max(2, pct * (600 - labelW - 60));
        const color =
          d.value >= 80 ? "#16A34A" : d.value >= 60 ? "#3B82F6" : d.value >= 40 ? "#F59E0B" : "#EF4444";
        return (
          <g key={i}>
            <text
              x={0}
              y={y + barH / 2 + 4}
              fontSize={11}
              fill="var(--color-ink-muted)"
              fontFamily="system-ui"
            >
              {d.label.length > 22 ? d.label.slice(0, 22) + "..." : d.label}
            </text>
            <rect
              x={labelW}
              y={y + 4}
              width={600 - labelW - 60}
              height={barH - 8}
              rx={4}
              fill="var(--color-border-subtle)"
            />
            <motion.rect
              x={labelW}
              y={y + 4}
              initial={{ width: 0 }}
              animate={{ width: barWidth }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              height={barH - 8}
              rx={4}
              fill={color}
            />
            <text
              x={600 - 50}
              y={y + barH / 2 + 4}
              fontSize={12}
              fontWeight={600}
              fill="var(--color-ink)"
              fontFamily="system-ui"
            >
              {d.value}%
            </text>
          </g>
        );
      })}
    </svg>
  );
}

/* ────────────────────────── Weekly Bar Chart ────────────────────────── */

function WeeklyBarChart({ data }: { data: { week: string; count: number }[] }) {
  if (data.length === 0 || data.every((d) => d.count === 0))
    return (
      <p className="text-sm" style={{ color: "var(--color-ink-muted)" }}>
        No quiz completions yet.
      </p>
    );

  const maxVal = Math.max(...data.map((d) => d.count), 1);
  const barW = Math.min(40, Math.floor(500 / data.length) - 4);
  const chartH = 120;
  const totalW = data.length * (barW + 6);

  return (
    <svg
      width="100%"
      height={chartH + 30}
      viewBox={`0 0 ${Math.max(totalW, 200)} ${chartH + 30}`}
      preserveAspectRatio="xMinYMin meet"
    >
      {data.map((d, i) => {
        const x = i * (barW + 6);
        const h = (d.count / maxVal) * chartH;
        return (
          <g key={i}>
            <motion.rect
              x={x}
              y={chartH - h}
              width={barW}
              initial={{ height: 0, y: chartH }}
              animate={{ height: h, y: chartH - h }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              rx={3}
              fill="#3B82F6"
              opacity={0.8}
            />
            {d.count > 0 && (
              <text
                x={x + barW / 2}
                y={chartH - h - 4}
                textAnchor="middle"
                fontSize={10}
                fontWeight={600}
                fill="var(--color-ink-muted)"
                fontFamily="system-ui"
              >
                {d.count}
              </text>
            )}
            <text
              x={x + barW / 2}
              y={chartH + 16}
              textAnchor="middle"
              fontSize={9}
              fill="var(--color-ink-faint)"
              fontFamily="system-ui"
            >
              {d.week}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

/* ────────────────────────── Grade Distribution ────────────────────────── */

function GradeDistribution({ distribution }: { distribution: Record<string, number> }) {
  const grades = ["A", "B", "C", "D", "F"];
  const colors: Record<string, string> = {
    A: "#16A34A",
    B: "#3B82F6",
    C: "#F59E0B",
    D: "#F97316",
    F: "#EF4444",
  };
  const total = Object.values(distribution).reduce((a, b) => a + b, 0);

  return (
    <div className="flex items-end gap-3 h-40">
      {grades.map((g) => {
        const count = distribution[g] || 0;
        const pct = total > 0 ? (count / total) * 100 : 0;
        return (
          <div key={g} className="flex flex-col items-center flex-1 h-full justify-end">
            <span
              className="text-xs font-semibold mb-1"
              style={{ color: "var(--color-ink)" }}
            >
              {count}
            </span>
            <motion.div
              className="w-full rounded-t-md"
              style={{ background: colors[g] }}
              initial={{ height: 0 }}
              animate={{ height: `${Math.max(pct, count > 0 ? 8 : 0)}%` }}
              transition={{ duration: 0.5 }}
            />
            <span
              className="text-xs font-bold mt-2"
              style={{ color: colors[g] }}
            >
              {g}
            </span>
            <span
              className="text-[10px]"
              style={{ color: "var(--color-ink-faint)" }}
            >
              {total > 0 ? Math.round(pct) : 0}%
            </span>
          </div>
        );
      })}
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════
   MAIN PAGE COMPONENT
   ════════════════════════════════════════════════════════════════ */

export default function ClassroomDetailPage() {
  const { user } = useAuth();
  const params = useParams();
  const router = useRouter();
  const classroomId = params.id as string;
  const supabase = createClient();

  /* ── Core state ── */
  const [classroom, setClassroom] = useState<Classroom | null>(null);
  const [students, setStudents] = useState<StudentRow[]>([]);
  const [assignments, setAssignments] = useState<AssignmentWithStats[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  /* ── Tab ── */
  const [activeTab, setActiveTab] = useState<TabKey>("students");

  /* ── Join code copy ── */
  const [codeCopied, setCodeCopied] = useState(false);

  /* ── Students tab ── */
  const [studentSearch, setStudentSearch] = useState("");
  const [sortField, setSortField] = useState<SortField>("name");
  const [sortDir, setSortDir] = useState<SortDir>("asc");

  /* ── Announcements ── */
  const [announcements, setAnnouncements] = useState<
    { id: string; content: string; pinned: boolean; teacher_name: string; created_at: string }[]
  >([]);
  const [announcementText, setAnnouncementText] = useState("");
  const [postingAnnouncement, setPostingAnnouncement] = useState(false);

  /* ── Settings ── */
  const [editName, setEditName] = useState("");
  const [editSchool, setEditSchool] = useState("");
  const [saving, setSaving] = useState(false);
  const [saveMsg, setSaveMsg] = useState("");
  const [showRegenerateConfirm, setShowRegenerateConfirm] = useState(false);
  const [showArchiveConfirm, setShowArchiveConfirm] = useState(false);

  /* ────────────────── DATA LOADING ────────────────── */

  const loadData = useCallback(async () => {
    if (!user) return;
    setError(null);

    try {
      // 1. Classroom
      const { data: classroomData } = await supabase
        .from("classrooms")
        .select("*")
        .eq("id", classroomId)
        .eq("teacher_id", user.id)
        .single();

      if (!classroomData) {
        setError("Classroom not found");
        setLoading(false);
        return;
      }
      setClassroom(classroomData);
      setEditName(classroomData.name);
      setEditSchool(classroomData.school_name || "");

      // 2. Members
      const { data: members } = await supabase
        .from("classroom_members")
        .select("student_id, joined_at, profiles(display_name)")
        .eq("classroom_id", classroomId);

      const studentIds = (members || []).map((m: any) => m.student_id);

      // 3. Quiz results for analytics
      let quizMap: Record<
        string,
        {
          total: number;
          count: number;
          scores: number[];
          modules: Set<string>;
          lastActive: string;
          moduleScores: Record<string, number[]>;
          weeklyCompletions: Record<string, number>;
        }
      > = {};

      if (studentIds.length > 0) {
        const { data: quizResults } = await supabase
          .from("quiz_results")
          .select("user_id, module_id, score_percent, created_at")
          .in("user_id", studentIds);

        if (quizResults) {
          for (const q of quizResults) {
            if (!quizMap[q.user_id]) {
              quizMap[q.user_id] = {
                total: 0,
                count: 0,
                scores: [],
                modules: new Set(),
                lastActive: q.created_at,
                moduleScores: {},
                weeklyCompletions: {},
              };
            }
            const s = quizMap[q.user_id];
            s.total += q.score_percent || 0;
            s.count += 1;
            s.scores.push(q.score_percent || 0);
            s.modules.add(q.module_id);
            if (q.created_at > s.lastActive) s.lastActive = q.created_at;

            // Module scores
            if (!s.moduleScores[q.module_id]) s.moduleScores[q.module_id] = [];
            s.moduleScores[q.module_id].push(q.score_percent || 0);

            // Weekly completions
            const weekStart = getWeekKey(q.created_at);
            s.weeklyCompletions[weekStart] = (s.weeklyCompletions[weekStart] || 0) + 1;
          }
        }

      }

      const studentRows: StudentRow[] = (members || []).map((m: any) => {
        const s = quizMap[m.student_id];
        return {
          student_id: m.student_id,
          display_name: m.profiles?.display_name || null,
          joined_at: m.joined_at,
          modules_completed: s ? s.modules.size : 0,
          avg_score: s && s.count > 0 ? Math.round(s.total / s.count) : 0,
          last_active: s?.lastActive || m.joined_at,
          quiz_scores: s?.scores || [],
          module_scores: s?.moduleScores || {},
          weekly_completions: s?.weeklyCompletions || {},
        };
      });
      setStudents(studentRows);

      // 4. Assignments
      const res = await fetch(`/api/assignments?classroom_id=${classroomId}`);
      const assignData = await res.json();
      const rawAssignments: Assignment[] = assignData.assignments || [];

      const assignmentsWithStats: AssignmentWithStats[] = [];
      for (const a of rawAssignments) {
        const { data: completions } = await supabase
          .from("assignment_completions")
          .select("score, completed_at")
          .eq("assignment_id", a.id)
          .not("completed_at", "is", null);

        const completedCount = completions?.length || 0;
        const avgScore =
          completedCount > 0
            ? Math.round(
                (completions || []).reduce(
                  (sum, c) => sum + (c.score || 0),
                  0
                ) / completedCount
              )
            : 0;

        assignmentsWithStats.push({
          ...a,
          completed_count: completedCount,
          total_students: studentRows.length,
          avg_score: avgScore,
        });
      }
      setAssignments(assignmentsWithStats);

      // 5. Announcements
      try {
        const annRes = await fetch(`/api/classrooms/${classroomId}/announcements`);
        if (annRes.ok) {
          const annData = await annRes.json();
          setAnnouncements(annData.announcements || []);
        }
      } catch {
        // Announcements are non-critical — silently fail
      }
    } catch (err) {
      console.error("Failed to load classroom data:", err);
      setError("Something went wrong loading classroom data.");
    } finally {
      setLoading(false);
    }
  }, [user, classroomId, supabase]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  /* ────────────────── ACTIONS ────────────────── */

  const copyJoinCode = () => {
    if (!classroom) return;
    navigator.clipboard.writeText(classroom.join_code);
    setCodeCopied(true);
    setTimeout(() => setCodeCopied(false), 2000);
  };

  const handleSaveSettings = async () => {
    if (!classroom || saving) return;
    setSaving(true);
    setSaveMsg("");

    try {
      const res = await fetch(`/api/classrooms/${classroomId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: editName.trim(),
          school_name: editSchool.trim() || null,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        setClassroom(data.classroom);
        setSaveMsg("Settings saved successfully.");
      } else {
        setSaveMsg("Failed to save settings.");
      }
    } catch {
      setSaveMsg("Failed to save settings.");
    } finally {
      setSaving(false);
    }
  };

  const handleRegenerateCode = async () => {
    if (!classroom) return;
    try {
      const res = await fetch(`/api/classrooms/${classroomId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ regenerate_code: true }),
      });
      if (res.ok) {
        const data = await res.json();
        setClassroom(data.classroom);
      }
    } catch (err) {
      console.error("Failed to regenerate code:", err);
    }
    setShowRegenerateConfirm(false);
  };

  const handleArchive = async () => {
    if (!classroom) return;
    try {
      const res = await fetch(`/api/classrooms/${classroomId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ active: false }),
      });
      if (res.ok) {
        const data = await res.json();
        setClassroom(data.classroom);
      }
    } catch (err) {
      console.error("Failed to archive:", err);
    }
    setShowArchiveConfirm(false);
  };

  const handlePostAnnouncement = async () => {
    if (!announcementText.trim() || postingAnnouncement) return;
    setPostingAnnouncement(true);
    try {
      const res = await fetch(`/api/classrooms/${classroomId}/announcements`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: announcementText.trim() }),
      });
      if (res.ok) {
        const data = await res.json();
        setAnnouncements((prev) => [data.announcement, ...prev]);
        setAnnouncementText("");
      }
    } catch (err) {
      console.error("Failed to post announcement:", err);
    } finally {
      setPostingAnnouncement(false);
    }
  };

  const handleDeleteAnnouncement = async (announcementId: string) => {
    try {
      const res = await fetch(
        `/api/classrooms/${classroomId}/announcements?announcement_id=${announcementId}`,
        { method: "DELETE" }
      );
      if (res.ok) {
        setAnnouncements((prev) => prev.filter((a) => a.id !== announcementId));
      }
    } catch (err) {
      console.error("Failed to delete announcement:", err);
    }
  };

  /* ────────────────── SORTING / FILTERING ────────────────── */

  const toggleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDir(sortDir === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDir("asc");
    }
  };

  const sortArrow = (field: SortField) => {
    if (sortField !== field) return "";
    return sortDir === "asc" ? " \u2191" : " \u2193";
  };

  const filteredStudents = useMemo(() => {
    let list = [...students];
    if (studentSearch.trim()) {
      const q = studentSearch.toLowerCase();
      list = list.filter(
        (s) =>
          (s.display_name || "").toLowerCase().includes(q) ||
          s.student_id.toLowerCase().includes(q)
      );
    }

    list.sort((a, b) => {
      const dir = sortDir === "asc" ? 1 : -1;
      switch (sortField) {
        case "name":
          return dir * (a.display_name || "").localeCompare(b.display_name || "");
        case "modules":
          return dir * (a.modules_completed - b.modules_completed);
        case "score":
          return dir * (a.avg_score - b.avg_score);
        case "last_active":
          return (
            dir *
            (new Date(a.last_active || 0).getTime() -
              new Date(b.last_active || 0).getTime())
          );
        case "status": {
          const order = { active: 0, idle: 1, inactive: 2 };
          return dir * (order[getStatus(a.last_active)] - order[getStatus(b.last_active)]);
        }
        default:
          return 0;
      }
    });

    return list;
  }, [students, studentSearch, sortField, sortDir]);

  /* ────────────────── ANALYTICS COMPUTATIONS ────────────────── */

  const analytics = useMemo(() => {
    // Module performance: average score per module across all students
    const moduleAgg: Record<string, { total: number; count: number }> = {};
    for (const s of students) {
      for (const [modId, scores] of Object.entries(s.module_scores)) {
        if (!moduleAgg[modId]) moduleAgg[modId] = { total: 0, count: 0 };
        for (const sc of scores) {
          moduleAgg[modId].total += sc;
          moduleAgg[modId].count += 1;
        }
      }
    }
    const modulePerformance = Object.entries(moduleAgg)
      .map(([id, agg]) => ({
        label: getModuleTitle(id),
        value: Math.round(agg.total / agg.count),
        max: 100,
      }))
      .sort((a, b) => b.value - a.value);

    // Hardest modules: lowest average scores with at least 2 attempts
    const hardestModules = Object.entries(moduleAgg)
      .filter(([, agg]) => agg.count >= 2)
      .map(([id, agg]) => ({
        title: getModuleTitle(id),
        avgScore: Math.round(agg.total / agg.count),
        attempts: agg.count,
      }))
      .sort((a, b) => a.avgScore - b.avgScore)
      .slice(0, 5);

    // Grade distribution
    const distribution: Record<string, number> = { A: 0, B: 0, C: 0, D: 0, F: 0 };
    for (const s of students) {
      if (s.avg_score > 0) {
        distribution[gradeLabel(s.avg_score)] += 1;
      }
    }

    // Weekly completions (last 8 weeks)
    const weeklyAgg: Record<string, number> = {};
    for (const s of students) {
      for (const [week, count] of Object.entries(s.weekly_completions)) {
        weeklyAgg[week] = (weeklyAgg[week] || 0) + count;
      }
    }
    const weeks = getLast8Weeks();
    const weeklyData = weeks.map((w) => ({
      week: w.label,
      count: weeklyAgg[w.key] || 0,
    }));

    // At-risk students: avg score < 60% OR no activity in 14+ days
    const atRiskStudents = students.filter((s) => {
      const lowScore = s.avg_score > 0 && s.avg_score < 60;
      const inactive = daysSince(s.last_active) >= 14;
      return lowScore || inactive;
    });

    return { modulePerformance, hardestModules, distribution, weeklyData, atRiskStudents };
  }, [students]);

  /* ────────────────── COMPUTED STATS ────────────────── */

  const avgClassScore = useMemo(() => {
    const withScores = students.filter((s) => s.avg_score > 0);
    if (withScores.length === 0) return 0;
    return Math.round(
      withScores.reduce((sum, s) => sum + s.avg_score, 0) / withScores.length
    );
  }, [students]);

  const activeAssignments = useMemo(
    () => assignments.filter((a) => assignmentStatus(a) === "active").length,
    [assignments]
  );

  const completionRate = useMemo(() => {
    if (assignments.length === 0 || students.length === 0) return 0;
    const totalPossible = assignments.length * students.length;
    const totalCompleted = assignments.reduce((s, a) => s + a.completed_count, 0);
    return Math.round((totalCompleted / totalPossible) * 100);
  }, [assignments, students]);

  /* ────────────────── RENDER ────────────────── */

  if (loading) return <HeaderSkeleton />;

  if (error || !classroom) {
    return (
      <div className="max-w-md mx-auto px-6 py-20 text-center">
        <div
          className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center"
          style={{ background: "rgba(239,68,68,0.08)" }}
        >
          <svg
            className="w-8 h-8"
            style={{ color: "#EF4444" }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"
            />
          </svg>
        </div>
        <h1
          className="text-xl font-bold mb-2"
          style={{ color: "var(--color-ink)" }}
        >
          {error || "Classroom not found"}
        </h1>
        <p className="text-sm mb-6" style={{ color: "var(--color-ink-muted)" }}>
          This classroom may have been removed or you may not have access.
        </p>
        <Link href="/teacher" className="btn-primary py-2.5 px-6 text-sm">
          Back to Dashboard
        </Link>
      </div>
    );
  }

  const tabs: { key: TabKey; label: string; count?: number }[] = [
    { key: "students", label: "Students", count: students.length },
    { key: "assignments", label: "Assignments", count: assignments.length },
    { key: "analytics", label: "Analytics" },
    { key: "settings", label: "Settings" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
      {/* ── Breadcrumb ── */}
      <motion.div
        className="mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Link
          href="/teacher"
          className="text-sm font-medium hover:text-blue-600 transition-colors inline-flex items-center gap-1.5"
          style={{ color: "var(--color-ink-muted)" }}
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Teacher Dashboard
        </Link>
      </motion.div>

      {/* ── Header ── */}
      <motion.div
        className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 flex-wrap">
            <h1
              className="text-2xl sm:text-3xl font-bold tracking-tight"
              style={{ color: "var(--color-ink)" }}
            >
              {classroom.name}
            </h1>
            {!classroom.active && (
              <span
                className="text-xs font-semibold px-2.5 py-1 rounded-full"
                style={{
                  background: "rgba(239, 68, 68, 0.08)",
                  color: "#EF4444",
                }}
              >
                Archived
              </span>
            )}
          </div>
          {classroom.school_name && (
            <p
              className="text-sm mt-1"
              style={{ color: "var(--color-ink-muted)" }}
            >
              {classroom.school_name}
            </p>
          )}

          {/* Join Code Badge */}
          <button
            onClick={copyJoinCode}
            className="mt-3 inline-flex items-center gap-2.5 px-4 py-2 rounded-xl text-sm font-medium transition-all hover:shadow-md group"
            style={{
              background: codeCopied ? "rgba(22,163,74,0.08)" : "rgba(59,130,246,0.06)",
              border: codeCopied
                ? "1px solid rgba(22,163,74,0.2)"
                : "1px solid rgba(59,130,246,0.15)",
              color: codeCopied ? "#16A34A" : "#3B82F6",
            }}
          >
            <span className="font-mono font-bold text-base tracking-widest">
              {classroom.join_code}
            </span>
            <span className="text-xs opacity-70">
              {codeCopied ? "Copied!" : "Click to copy"}
            </span>
            <svg
              className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
          </button>
        </div>

        <Link
          href={`/teacher/assignments/new?classroom=${classroomId}`}
          className="btn-primary py-2.5 px-5 text-sm shrink-0"
        >
          + New Assignment
        </Link>
      </motion.div>

      {/* ── Quick Stats ── */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8"
        initial="hidden"
        animate="visible"
      >
        {[
          {
            label: "Students",
            value: String(students.length),
            accent: "#3B82F6",
            bg: "rgba(59,130,246,0.06)",
          },
          {
            label: "Avg Score",
            value: avgClassScore > 0 ? `${avgClassScore}%` : "--",
            accent:
              avgClassScore >= 70
                ? "#16A34A"
                : avgClassScore >= 50
                ? "#D97706"
                : "#6B7280",
            bg:
              avgClassScore >= 70
                ? "rgba(22,163,74,0.06)"
                : avgClassScore >= 50
                ? "rgba(217,119,6,0.06)"
                : "rgba(107,114,128,0.06)",
          },
          {
            label: "Active Assignments",
            value: String(activeAssignments),
            accent: "#8B5CF6",
            bg: "rgba(139,92,246,0.06)",
          },
          {
            label: "Completion Rate",
            value: completionRate > 0 ? `${completionRate}%` : "--",
            accent: "#D97706",
            bg: "rgba(217,119,6,0.06)",
          },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            custom={i}
            variants={fadeUp}
            className="rounded-2xl p-4"
            style={{
              background: stat.bg,
              border: `1px solid ${stat.accent}15`,
            }}
          >
            <p
              className="text-[11px] font-semibold uppercase tracking-wider mb-1"
              style={{ color: "var(--color-ink-faint)" }}
            >
              {stat.label}
            </p>
            <p
              className="text-2xl font-bold"
              style={{ color: stat.accent }}
            >
              {stat.value}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* ── Announcements ── */}
      <motion.div
        className="card p-5 mb-8"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h3
          className="text-sm font-semibold uppercase tracking-wider mb-3"
          style={{ color: "var(--color-ink-faint)" }}
        >
          Announcements
        </h3>
        <div className="flex gap-3 mb-4">
          <input
            type="text"
            value={announcementText}
            onChange={(e) => setAnnouncementText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handlePostAnnouncement();
              }
            }}
            placeholder="Post an announcement to your class..."
            className="flex-1 px-4 py-2.5 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            style={{
              color: "var(--color-ink)",
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
            }}
          />
          <button
            onClick={handlePostAnnouncement}
            disabled={!announcementText.trim() || postingAnnouncement}
            className="btn-primary py-2.5 px-5 text-sm shrink-0 disabled:opacity-50"
          >
            {postingAnnouncement ? "Posting..." : "Post"}
          </button>
        </div>
        {announcements.length > 0 && (
          <div className="space-y-2 max-h-64 overflow-y-auto">
            {announcements.map((a) => (
              <div
                key={a.id}
                className="flex items-start gap-3 p-3 rounded-xl group"
                style={{ background: "var(--color-surface-raised)" }}
              >
                <div className="flex-1 min-w-0">
                  <p className="text-sm" style={{ color: "var(--color-ink)" }}>
                    {a.content}
                  </p>
                  <p className="text-xs mt-1" style={{ color: "var(--color-ink-faint)" }}>
                    {a.teacher_name} &middot;{" "}
                    {new Date(a.created_at).toLocaleDateString(undefined, {
                      month: "short",
                      day: "numeric",
                      hour: "numeric",
                      minute: "2-digit",
                    })}
                    {a.pinned && (
                      <span className="ml-2 text-[10px] font-semibold" style={{ color: "#3B82F6" }}>
                        Pinned
                      </span>
                    )}
                  </p>
                </div>
                <button
                  onClick={() => handleDeleteAnnouncement(a.id)}
                  className="text-[11px] font-medium px-2 py-1 rounded transition-colors opacity-0 group-hover:opacity-100 hover:bg-red-50 shrink-0"
                  style={{ color: "#EF4444" }}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
        {announcements.length === 0 && (
          <p className="text-xs" style={{ color: "var(--color-ink-faint)" }}>
            No announcements yet. Post one above to notify your students.
          </p>
        )}
      </motion.div>

      {/* ── Tabs ── */}
      <div
        className="flex gap-1 mb-8 p-1 rounded-xl overflow-x-auto"
        style={{
          background: "var(--color-surface-raised)",
          border: "1px solid var(--color-border-subtle)",
        }}
      >
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className="relative px-4 py-2.5 rounded-lg text-sm font-medium transition-all flex-1 whitespace-nowrap"
            style={{
              color:
                activeTab === tab.key
                  ? "white"
                  : "var(--color-ink-muted)",
            }}
          >
            {activeTab === tab.key && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 rounded-lg"
                style={{ background: "var(--color-ink)" }}
                transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
              />
            )}
            <span className="relative z-10">
              {tab.label}
              {tab.count !== undefined && (
                <span className="ml-1.5 opacity-60">{tab.count}</span>
              )}
            </span>
          </button>
        ))}
      </div>

      {/* ── Tab Content ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          variants={tabVariants}
          initial="enter"
          animate="center"
          exit="exit"
        >
          {/* ═══════════ STUDENTS TAB ═══════════ */}
          {activeTab === "students" && (
            <div>
              {/* Search */}
              <div className="mb-4">
                <div
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl"
                  style={{
                    background: "var(--color-surface)",
                    border: "1px solid var(--color-border)",
                  }}
                >
                  <svg
                    className="w-4 h-4 shrink-0"
                    style={{ color: "var(--color-ink-faint)" }}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <input
                    type="text"
                    value={studentSearch}
                    onChange={(e) => setStudentSearch(e.target.value)}
                    placeholder="Search students..."
                    className="flex-1 bg-transparent text-sm focus:outline-none"
                    style={{ color: "var(--color-ink)" }}
                  />
                  {studentSearch && (
                    <button
                      onClick={() => setStudentSearch("")}
                      className="text-xs"
                      style={{ color: "var(--color-ink-faint)" }}
                    >
                      Clear
                    </button>
                  )}
                </div>
              </div>

              {students.length === 0 ? (
                <motion.div
                  className="card p-12 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div
                    className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center"
                    style={{ background: "rgba(59,130,246,0.06)" }}
                  >
                    <svg
                      className="w-8 h-8"
                      style={{ color: "#3B82F6" }}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <h3
                    className="text-base font-semibold mb-1"
                    style={{ color: "var(--color-ink)" }}
                  >
                    No students yet
                  </h3>
                  <p
                    className="text-sm mb-4"
                    style={{ color: "var(--color-ink-muted)" }}
                  >
                    Share the join code{" "}
                    <button
                      onClick={copyJoinCode}
                      className="font-mono font-bold text-blue-600 hover:underline"
                    >
                      {classroom.join_code}
                    </button>{" "}
                    with your class to get started.
                  </p>
                </motion.div>
              ) : filteredStudents.length === 0 ? (
                <div className="card p-8 text-center">
                  <p
                    className="text-sm"
                    style={{ color: "var(--color-ink-muted)" }}
                  >
                    No students match &quot;{studentSearch}&quot;
                  </p>
                </div>
              ) : (
                <div className="card overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr
                          style={{
                            borderBottom: "1px solid var(--color-border-subtle)",
                            background: "var(--color-surface-raised)",
                          }}
                        >
                          {[
                            { key: "name" as SortField, label: "Name", align: "left" },
                            { key: "modules" as SortField, label: "Modules", align: "center" },
                            { key: "score" as SortField, label: "Avg Quiz Score", align: "center" },
                            { key: "last_active" as SortField, label: "Last Active", align: "center" },
                            { key: "status" as SortField, label: "Status", align: "center" },
                            { key: "actions" as SortField, label: "", align: "center" },
                          ].map((col) => (
                            <th
                              key={col.key}
                              onClick={() => toggleSort(col.key)}
                              className={`text-${col.align} px-4 py-3 font-semibold text-[11px] uppercase tracking-wider cursor-pointer hover:text-blue-600 transition-colors select-none`}
                              style={{ color: "var(--color-ink-faint)" }}
                            >
                              {col.label}
                              {sortArrow(col.key)}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {filteredStudents.map((s, idx) => {
                          const st = getStatus(s.last_active);
                          const sc = statusColor(st);
                          return (
                            <motion.tr
                              key={s.student_id}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: idx * 0.02 }}
                              onClick={() =>
                                router.push(
                                  `/teacher/students/${s.student_id}`
                                )
                              }
                              className="cursor-pointer transition-colors"
                              style={{
                                borderBottom:
                                  "1px solid var(--color-border-subtle)",
                              }}
                              onMouseEnter={(e) =>
                                (e.currentTarget.style.background =
                                  "var(--color-surface-raised)")
                              }
                              onMouseLeave={(e) =>
                                (e.currentTarget.style.background =
                                  "transparent")
                              }
                            >
                              <td className="px-4 py-3.5">
                                <div className="flex items-center gap-2">
                                  <span
                                    className="font-medium"
                                    style={{ color: "var(--color-ink)" }}
                                  >
                                    {s.display_name || "Student"}
                                  </span>
                                  {((s.avg_score > 0 && s.avg_score < 60) || daysSince(s.last_active) >= 14) && (
                                    <span
                                      className="text-[9px] font-bold px-1.5 py-0.5 rounded-full uppercase tracking-wider"
                                      style={{
                                        background: s.avg_score > 0 && s.avg_score < 60
                                          ? "rgba(239,68,68,0.08)"
                                          : "rgba(217,119,6,0.08)",
                                        color: s.avg_score > 0 && s.avg_score < 60
                                          ? "#EF4444"
                                          : "#D97706",
                                      }}
                                      title={
                                        (s.avg_score > 0 && s.avg_score < 60 ? `Low score: ${s.avg_score}%` : "") +
                                        (daysSince(s.last_active) >= 14 ? ` Inactive ${daysSince(s.last_active)}d` : "")
                                      }
                                    >
                                      At Risk
                                    </span>
                                  )}
                                </div>
                              </td>
                              <td
                                className="px-4 py-3.5 text-center"
                                style={{ color: "var(--color-ink-muted)" }}
                              >
                                {s.modules_completed}
                              </td>
                              <td className="px-4 py-3.5 text-center">
                                <span
                                  className="font-semibold"
                                  style={{
                                    color:
                                      s.avg_score >= 70
                                        ? "#16A34A"
                                        : s.avg_score >= 50
                                        ? "#D97706"
                                        : s.avg_score > 0
                                        ? "#EF4444"
                                        : "var(--color-ink-muted)",
                                  }}
                                >
                                  {s.avg_score > 0 ? `${s.avg_score}%` : "--"}
                                </span>
                              </td>
                              <td
                                className="px-4 py-3.5 text-center text-xs"
                                style={{ color: "var(--color-ink-faint)" }}
                              >
                                {relativeTime(s.last_active)}
                              </td>
                              <td className="px-4 py-3.5 text-center">
                                <span
                                  className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full"
                                  style={{
                                    background: sc.bg,
                                    color: sc.text,
                                  }}
                                >
                                  {statusLabel(st)}
                                </span>
                              </td>
                              <td className="px-4 py-3.5 text-center">
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    if (!confirm(`Remove ${s.display_name || "this student"} from the classroom?`)) return;
                                    fetch(`/api/classrooms/${classroomId}/students?student_id=${s.student_id}`, { method: "DELETE" })
                                      .then((res) => {
                                        if (res.ok) {
                                          setStudents((prev) => prev.filter((st) => st.student_id !== s.student_id));
                                        } else {
                                          alert("Failed to remove student");
                                        }
                                      });
                                  }}
                                  className="text-[11px] font-medium px-2 py-1 rounded transition-colors hover:bg-red-50"
                                  style={{ color: "#EF4444" }}
                                >
                                  Remove
                                </button>
                              </td>
                            </motion.tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ═══════════ ASSIGNMENTS TAB ═══════════ */}
          {activeTab === "assignments" && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <p
                  className="text-sm"
                  style={{ color: "var(--color-ink-muted)" }}
                >
                  {assignments.length} assignment
                  {assignments.length !== 1 ? "s" : ""}
                </p>
                <div className="flex items-center gap-2">
                  <Link
                    href={`/teacher/assignments/quick-exam`}
                    className="py-2 px-4 text-xs font-semibold rounded-xl transition-all flex items-center gap-1.5"
                    style={{ background: "rgba(220,38,38,0.08)", color: "#DC2626", border: "1px solid rgba(220,38,38,0.2)" }}
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                    Quick Exam
                  </Link>
                  <Link
                    href={`/teacher/assignments/new?classroom=${classroomId}`}
                    className="btn-primary py-2 px-4 text-xs"
                  >
                    + Create Assignment
                  </Link>
                </div>
              </div>

              {assignments.length === 0 ? (
                <motion.div
                  className="card p-12 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div
                    className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center"
                    style={{ background: "rgba(139,92,246,0.06)" }}
                  >
                    <svg
                      className="w-8 h-8"
                      style={{ color: "#8B5CF6" }}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                  </div>
                  <h3
                    className="text-base font-semibold mb-1"
                    style={{ color: "var(--color-ink)" }}
                  >
                    No assignments yet
                  </h3>
                  <p
                    className="text-sm mb-4"
                    style={{ color: "var(--color-ink-muted)" }}
                  >
                    Create your first assignment to give students modules,
                    quizzes, or practice tests.
                  </p>
                  <Link
                    href={`/teacher/assignments/new?classroom=${classroomId}`}
                    className="btn-primary py-2.5 px-6 text-sm"
                  >
                    Create Assignment
                  </Link>
                </motion.div>
              ) : (
                <div className="space-y-3">
                  {assignments.map((a, idx) => {
                    const pct =
                      a.total_students > 0
                        ? Math.round(
                            (a.completed_count / a.total_students) * 100
                          )
                        : 0;
                    const st = assignmentStatus(a);
                    const stStyle = assignmentStatusStyle(st);
                    return (
                      <motion.div
                        key={a.id}
                        className="card p-5 hover:shadow-md transition-shadow"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.04 }}
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-2 flex-wrap">
                            <p
                              className="font-semibold text-sm"
                              style={{ color: "var(--color-ink)" }}
                            >
                              {a.title}
                            </p>
                            <span
                              className="text-[11px] font-medium px-2 py-0.5 rounded-full"
                              style={{
                                background: "rgba(107,114,128,0.08)",
                                color: "var(--color-ink-muted)",
                              }}
                            >
                              {a.type === "lesson"
                                ? "Lesson"
                                : a.type === "quiz"
                                ? "Quiz"
                                : "Practice Test"}
                            </span>
                            <span
                              className="text-[11px] font-semibold px-2 py-0.5 rounded-full"
                              style={{
                                background: stStyle.bg,
                                color: stStyle.text,
                              }}
                            >
                              {stStyle.label}
                            </span>
                          </div>
                          {a.avg_score > 0 && (
                            <span
                              className="text-sm font-bold shrink-0"
                              style={{
                                color:
                                  a.avg_score >= 70
                                    ? "#16A34A"
                                    : a.avg_score >= 50
                                    ? "#D97706"
                                    : "#EF4444",
                              }}
                            >
                              {a.avg_score}% avg
                            </span>
                          )}
                        </div>

                        {/* Progress bar */}
                        <div className="flex items-center gap-3 mb-2">
                          <div
                            className="flex-1 h-2 rounded-full overflow-hidden"
                            style={{ background: "var(--color-border-subtle)" }}
                          >
                            <motion.div
                              className="h-full rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: `${pct}%` }}
                              transition={{ duration: 0.6, delay: idx * 0.04 }}
                              style={{
                                background:
                                  pct >= 80
                                    ? "#16A34A"
                                    : pct >= 50
                                    ? "#F59E0B"
                                    : pct > 0
                                    ? "#EF4444"
                                    : "var(--color-border)",
                              }}
                            />
                          </div>
                          <span
                            className="text-xs font-semibold w-12 text-right"
                            style={{ color: "var(--color-ink-muted)" }}
                          >
                            {pct}%
                          </span>
                        </div>

                        <div className="flex items-center gap-4">
                          <span
                            className="text-xs"
                            style={{ color: "var(--color-ink-faint)" }}
                          >
                            {a.completed_count}/{a.total_students} completed
                          </span>
                          {a.due_date && (
                            <span
                              className="text-xs"
                              style={{
                                color:
                                  st === "past_due"
                                    ? "#EF4444"
                                    : "var(--color-ink-faint)",
                              }}
                            >
                              Due{" "}
                              {new Date(a.due_date).toLocaleDateString()}
                            </span>
                          )}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {/* ═══════════ ANALYTICS TAB ═══════════ */}
          {activeTab === "analytics" && (
            <div className="space-y-6">
              {students.length === 0 ? (
                <div className="card p-12 text-center">
                  <p
                    className="text-sm"
                    style={{ color: "var(--color-ink-muted)" }}
                  >
                    Analytics will appear once students start completing quizzes.
                  </p>
                </div>
              ) : (
                <>
                  {/* Module Performance */}
                  <motion.div
                    className="card p-6"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0 }}
                  >
                    <h3
                      className="text-sm font-semibold uppercase tracking-wider mb-4"
                      style={{ color: "var(--color-ink-faint)" }}
                    >
                      Module Performance
                    </h3>
                    <p
                      className="text-xs mb-4"
                      style={{ color: "var(--color-ink-muted)" }}
                    >
                      Average score per module across all students in this classroom.
                    </p>
                    <HorizontalBarChart data={analytics.modulePerformance} />
                  </motion.div>

                  {/* Hardest Modules */}
                  <motion.div
                    className="card p-6"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <h3
                      className="text-sm font-semibold uppercase tracking-wider mb-4"
                      style={{ color: "var(--color-ink-faint)" }}
                    >
                      Hardest Modules
                    </h3>
                    <p
                      className="text-xs mb-4"
                      style={{ color: "var(--color-ink-muted)" }}
                    >
                      Top 5 modules with the lowest average score (minimum 2 quiz attempts).
                    </p>
                    {analytics.hardestModules.length === 0 ? (
                      <p
                        className="text-sm"
                        style={{ color: "var(--color-ink-muted)" }}
                      >
                        Not enough quiz data yet.
                      </p>
                    ) : (
                      <div className="space-y-3">
                        {analytics.hardestModules.map((m, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-3 p-3 rounded-xl"
                            style={{ background: "var(--color-surface-raised)" }}
                          >
                            <span
                              className="text-xs font-bold shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
                              style={{
                                background:
                                  m.avgScore < 50
                                    ? "rgba(239,68,68,0.08)"
                                    : "rgba(217,119,6,0.08)",
                                color:
                                  m.avgScore < 50 ? "#EF4444" : "#D97706",
                              }}
                            >
                              {i + 1}
                            </span>
                            <div className="flex-1 min-w-0">
                              <p
                                className="text-sm font-medium"
                                style={{ color: "var(--color-ink)" }}
                              >
                                {m.title}
                              </p>
                              <div className="flex items-center gap-3 mt-0.5">
                                <span
                                  className="text-xs font-semibold"
                                  style={{
                                    color:
                                      m.avgScore >= 70
                                        ? "#16A34A"
                                        : m.avgScore >= 50
                                        ? "#D97706"
                                        : "#EF4444",
                                  }}
                                >
                                  {m.avgScore}% avg
                                </span>
                                <span
                                  className="text-xs"
                                  style={{ color: "var(--color-ink-faint)" }}
                                >
                                  {m.attempts} quiz attempts
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </motion.div>

                  {/* Two-column row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Grade Distribution */}
                    <motion.div
                      className="card p-6"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h3
                        className="text-sm font-semibold uppercase tracking-wider mb-4"
                        style={{ color: "var(--color-ink-faint)" }}
                      >
                        Grade Distribution
                      </h3>
                      <p
                        className="text-xs mb-4"
                        style={{ color: "var(--color-ink-muted)" }}
                      >
                        Students grouped by their average quiz score.
                      </p>
                      <GradeDistribution distribution={analytics.distribution} />
                    </motion.div>

                    {/* Activity Over Time */}
                    <motion.div
                      className="card p-6"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <h3
                        className="text-sm font-semibold uppercase tracking-wider mb-4"
                        style={{ color: "var(--color-ink-faint)" }}
                      >
                        Quiz Completions Per Week
                      </h3>
                      <p
                        className="text-xs mb-4"
                        style={{ color: "var(--color-ink-muted)" }}
                      >
                        Last 8 weeks of quiz activity in this classroom.
                      </p>
                      <WeeklyBarChart data={analytics.weeklyData} />
                    </motion.div>
                  </div>

                  {/* At-Risk Students */}
                  <motion.div
                    className="card p-6"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h3
                      className="text-sm font-semibold uppercase tracking-wider mb-1"
                      style={{ color: "var(--color-ink-faint)" }}
                    >
                      At-Risk Students
                    </h3>
                    <p
                      className="text-xs mb-4"
                      style={{ color: "var(--color-ink-muted)" }}
                    >
                      Students with average score below 60% or inactive for 14+ days.
                    </p>
                    {analytics.atRiskStudents.length === 0 ? (
                      <div
                        className="flex items-center gap-3 p-4 rounded-xl"
                        style={{ background: "rgba(22,163,74,0.04)" }}
                      >
                        <svg className="w-5 h-5 shrink-0" style={{ color: "#16A34A" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p className="text-sm font-medium" style={{ color: "#16A34A" }}>
                          No at-risk students. All students are performing well!
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        {analytics.atRiskStudents.map((s) => {
                          const lowScore = s.avg_score > 0 && s.avg_score < 60;
                          const inactive = daysSince(s.last_active) >= 14;
                          return (
                            <div
                              key={s.student_id}
                              className="flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-colors hover:shadow-sm"
                              style={{
                                background: lowScore ? "rgba(239,68,68,0.04)" : "rgba(217,119,6,0.04)",
                                border: `1px solid ${lowScore ? "rgba(239,68,68,0.12)" : "rgba(217,119,6,0.12)"}`,
                              }}
                              onClick={() => router.push(`/teacher/students/${s.student_id}`)}
                            >
                              <div
                                className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                                style={{
                                  background: lowScore ? "rgba(239,68,68,0.08)" : "rgba(217,119,6,0.08)",
                                }}
                              >
                                <svg className="w-4 h-4" style={{ color: lowScore ? "#EF4444" : "#D97706" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                                </svg>
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium" style={{ color: "var(--color-ink)" }}>
                                  {s.display_name || "Student"}
                                </p>
                                <div className="flex items-center gap-3 mt-0.5 flex-wrap">
                                  {lowScore && (
                                    <span className="text-xs font-semibold" style={{ color: "#EF4444" }}>
                                      {s.avg_score}% avg score
                                    </span>
                                  )}
                                  {inactive && (
                                    <span className="text-xs font-semibold" style={{ color: "#D97706" }}>
                                      Inactive {daysSince(s.last_active)}d
                                    </span>
                                  )}
                                  {!lowScore && s.avg_score > 0 && (
                                    <span className="text-xs" style={{ color: "var(--color-ink-faint)" }}>
                                      {s.avg_score}% avg score
                                    </span>
                                  )}
                                </div>
                              </div>
                              <svg className="w-4 h-4 shrink-0" style={{ color: "var(--color-ink-faint)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </motion.div>
                </>
              )}
            </div>
          )}

          {/* ═══════════ SETTINGS TAB ═══════════ */}
          {activeTab === "settings" && (
            <div className="space-y-6">
              {/* Classroom Details */}
              <motion.div
                className="card p-6"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h3
                  className="text-sm font-semibold mb-5 uppercase tracking-wider"
                  style={{ color: "var(--color-ink-faint)" }}
                >
                  Classroom Details
                </h3>
                <div className="space-y-4 max-w-lg">
                  <div>
                    <label
                      className="block text-sm font-medium mb-1.5"
                      style={{ color: "var(--color-ink)" }}
                    >
                      Classroom Name
                    </label>
                    <input
                      type="text"
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      style={{
                        color: "var(--color-ink)",
                        background: "var(--color-surface)",
                        border: "1px solid var(--color-border)",
                      }}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-medium mb-1.5"
                      style={{ color: "var(--color-ink)" }}
                    >
                      School Name
                    </label>
                    <input
                      type="text"
                      value={editSchool}
                      onChange={(e) => setEditSchool(e.target.value)}
                      placeholder="Optional"
                      className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      style={{
                        color: "var(--color-ink)",
                        background: "var(--color-surface)",
                        border: "1px solid var(--color-border)",
                      }}
                    />
                  </div>
                  <div className="flex items-center gap-3 pt-1">
                    <button
                      onClick={handleSaveSettings}
                      disabled={saving || !editName.trim()}
                      className="btn-primary py-2.5 px-5 text-sm disabled:opacity-50"
                    >
                      {saving ? "Saving..." : "Save Changes"}
                    </button>
                    {saveMsg && (
                      <motion.span
                        className="text-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        style={{
                          color: saveMsg.includes("success")
                            ? "#16A34A"
                            : "#EF4444",
                        }}
                      >
                        {saveMsg}
                      </motion.span>
                    )}
                  </div>
                </div>
              </motion.div>

              {/* Join Code */}
              <motion.div
                className="card p-6"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <h3
                  className="text-sm font-semibold mb-5 uppercase tracking-wider"
                  style={{ color: "var(--color-ink-faint)" }}
                >
                  Join Code
                </h3>
                <div className="flex items-center justify-between max-w-lg">
                  <div>
                    <p
                      className="font-mono font-bold text-xl tracking-widest"
                      style={{ color: "var(--color-ink)" }}
                    >
                      {classroom.join_code}
                    </p>
                    <p
                      className="text-xs mt-1"
                      style={{ color: "var(--color-ink-muted)" }}
                    >
                      Regenerating will invalidate the current code.
                    </p>
                  </div>
                  {showRegenerateConfirm ? (
                    <div className="flex items-center gap-2">
                      <button
                        onClick={handleRegenerateCode}
                        className="px-3 py-2 rounded-lg text-xs font-semibold transition-colors"
                        style={{
                          background: "rgba(239,68,68,0.08)",
                          color: "#EF4444",
                        }}
                      >
                        Confirm
                      </button>
                      <button
                        onClick={() => setShowRegenerateConfirm(false)}
                        className="px-3 py-2 rounded-lg text-xs font-medium"
                        style={{ color: "var(--color-ink-muted)" }}
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => setShowRegenerateConfirm(true)}
                      className="btn-secondary py-2 px-4 text-xs"
                    >
                      Regenerate Code
                    </button>
                  )}
                </div>
              </motion.div>

              {/* Danger Zone */}
              <motion.div
                className="card p-6"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                style={{ border: "1px solid rgba(239, 68, 68, 0.2)" }}
              >
                <h3
                  className="text-sm font-semibold mb-2 uppercase tracking-wider"
                  style={{ color: "#EF4444" }}
                >
                  Danger Zone
                </h3>
                <p
                  className="text-sm mb-4"
                  style={{ color: "var(--color-ink-muted)" }}
                >
                  Archiving this classroom will prevent students from accessing it.
                  This action can be reversed from the dashboard.
                </p>

                {showArchiveConfirm ? (
                  <div
                    className="p-4 rounded-xl mb-3"
                    style={{ background: "rgba(239,68,68,0.04)" }}
                  >
                    <p
                      className="text-sm font-medium mb-3"
                      style={{ color: "#EF4444" }}
                    >
                      Are you sure? Students will lose access immediately.
                    </p>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={handleArchive}
                        className="px-4 py-2 rounded-xl text-sm font-semibold transition-all"
                        style={{
                          background: "#EF4444",
                          color: "white",
                        }}
                      >
                        Yes, Archive Classroom
                      </button>
                      <button
                        onClick={() => setShowArchiveConfirm(false)}
                        className="px-4 py-2 rounded-xl text-sm font-medium"
                        style={{ color: "var(--color-ink-muted)" }}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={() => setShowArchiveConfirm(true)}
                    disabled={!classroom.active}
                    className="px-4 py-2.5 rounded-xl text-sm font-medium transition-all disabled:opacity-40"
                    style={{
                      background: "rgba(239, 68, 68, 0.08)",
                      color: "#EF4444",
                      border: "1px solid rgba(239, 68, 68, 0.2)",
                    }}
                  >
                    {classroom.active
                      ? "Archive Classroom"
                      : "Classroom is Archived"}
                  </button>
                )}
              </motion.div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/* ────────────────── Week Helpers ────────────────── */

function getWeekKey(dateStr: string): string {
  const d = new Date(dateStr);
  const day = d.getDay();
  const monday = new Date(d);
  monday.setDate(d.getDate() - ((day + 6) % 7));
  return monday.toISOString().slice(0, 10);
}

function getLast8Weeks(): { key: string; label: string }[] {
  const weeks: { key: string; label: string }[] = [];
  const now = new Date();
  for (let i = 7; i >= 0; i--) {
    const d = new Date(now);
    d.setDate(now.getDate() - i * 7);
    const day = d.getDay();
    const monday = new Date(d);
    monday.setDate(d.getDate() - ((day + 6) % 7));
    const key = monday.toISOString().slice(0, 10);
    const label = `${monday.getMonth() + 1}/${monday.getDate()}`;
    weeks.push({ key, label });
  }
  return weeks;
}
