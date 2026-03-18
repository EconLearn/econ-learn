"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/components/providers/AuthProvider";
import { useRouter } from "next/navigation";
import Link from "next/link";

// ─── Types ───────────────────────────────────────────────────────────────────

interface StudentStatus {
  student_id: string;
  name: string;
  email: string;
  status: "not_started" | "in_progress" | "submitted" | "expired" | "force_submitted";
  questions_answered: number;
  tab_switches: number;
  fullscreen_exits: number;
  time_remaining_seconds: number | null;
  score: number | null;
  submitted_at?: string;
}

interface ExamInfo {
  id: string;
  title: string;
  config: {
    question_ids?: string[];
    lockdown?: boolean;
    time_limit_minutes?: number;
    show_results?: boolean;
  };
  classroom_name: string;
}

// ─── Main Page ───────────────────────────────────────────────────────────────

export default function TeacherExamMonitorPage({ params }: { params: { assignmentId: string } }) {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const assignmentId = params.assignmentId;

  const [exam, setExam] = useState<ExamInfo | null>(null);
  const [students, setStudents] = useState<StudentStatus[]>([]);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [actionLoading, setActionLoading] = useState<string | null>(null);

  // Confirmation modals
  const [showForceSubmit, setShowForceSubmit] = useState(false);
  const [showReleaseResults, setShowReleaseResults] = useState(false);

  const fetchStatus = useCallback(async () => {
    try {
      const res = await fetch(`/api/exam/${assignmentId}/status`);
      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Failed to load exam status");
        return;
      }

      if (data.role !== "teacher") {
        setError("Not authorized to view this page");
        return;
      }

      setExam(data.assignment);
      setStudents(data.students);
      setTotalQuestions(data.total_questions);
    } catch {
      setError("Failed to load exam status");
    }
    setLoading(false);
  }, [assignmentId]);

  // Initial fetch
  useEffect(() => {
    if (authLoading) return;
    if (!user) {
      router.push("/login");
      return;
    }
    fetchStatus();
  }, [user, authLoading, router, fetchStatus]);

  // Auto-refresh every 10 seconds
  useEffect(() => {
    if (loading || error) return;
    const interval = setInterval(fetchStatus, 10000);
    return () => clearInterval(interval);
  }, [loading, error, fetchStatus]);

  const handleForceSubmitAll = async () => {
    setActionLoading("force_submit");
    try {
      const res = await fetch(`/api/exam/${assignmentId}/status`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "force_submit_all" }),
      });
      const data = await res.json();
      if (res.ok) {
        setShowForceSubmit(false);
        fetchStatus();
      } else {
        alert(data.error || "Failed to force submit");
      }
    } catch {
      alert("Failed to force submit");
    }
    setActionLoading(null);
  };

  const handleReleaseResults = async () => {
    setActionLoading("release_results");
    try {
      const res = await fetch(`/api/exam/${assignmentId}/status`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "release_results" }),
      });
      const data = await res.json();
      if (res.ok) {
        setShowReleaseResults(false);
        fetchStatus();
      } else {
        alert(data.error || "Failed to release results");
      }
    } catch {
      alert("Failed to release results");
    }
    setActionLoading(null);
  };

  function formatTime(seconds: number): string {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  }

  // ── Loading ──
  if (authLoading || loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div
          className="w-6 h-6 border-2 rounded-full animate-spin"
          style={{ borderColor: "var(--color-border)", borderTopColor: "var(--color-ink)" }}
        />
      </div>
    );
  }

  // ── Error ──
  if (error || !exam) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-16 text-center">
        <p className="text-sm font-medium mb-4" style={{ color: "var(--color-ink-muted)" }}>
          {error || "Exam not found"}
        </p>
        <Link href="/teacher" className="btn-primary text-sm py-2 px-5 inline-block">
          Back to Dashboard
        </Link>
      </div>
    );
  }

  // ── Stats ──
  const inProgress = students.filter((s) => s.status === "in_progress").length;
  const submitted = students.filter((s) => s.status === "submitted" || s.status === "force_submitted").length;
  const notStarted = students.filter((s) => s.status === "not_started").length;
  const expired = students.filter((s) => s.status === "expired").length;
  const resultsReleased = exam.config?.show_results ?? false;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
      {/* ── Header ── */}
      <div className="mb-8">
        <nav className="module-breadcrumb mb-4">
          <Link href="/teacher">Teacher Dashboard</Link>
          <span>/</span>
          <span className="current">Exam Monitor</span>
        </nav>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <h1 className="text-2xl font-bold" style={{ color: "var(--color-ink)" }}>
                {exam.title}
              </h1>
              <p className="text-sm mt-1" style={{ color: "var(--color-ink-muted)" }}>
                {exam.classroom_name} &middot; {totalQuestions} questions &middot; {exam.config?.time_limit_minutes || 45} min
              </p>
            </div>
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => setShowForceSubmit(true)}
                disabled={inProgress === 0}
                className="text-xs font-medium px-3 py-2 rounded-lg transition-all disabled:opacity-40"
                style={{
                  background: "rgba(239, 68, 68, 0.08)",
                  color: "#dc2626",
                  border: "1px solid rgba(239, 68, 68, 0.15)",
                }}
              >
                End Exam for All ({inProgress})
              </button>
              {!resultsReleased && (
                <button
                  onClick={() => setShowReleaseResults(true)}
                  disabled={submitted === 0}
                  className="text-xs font-medium px-3 py-2 rounded-lg transition-all disabled:opacity-40"
                  style={{
                    background: "rgba(16, 185, 129, 0.08)",
                    color: "#059669",
                    border: "1px solid rgba(16, 185, 129, 0.15)",
                  }}
                >
                  Release Results
                </button>
              )}
              {resultsReleased && (
                <span
                  className="text-xs font-medium px-3 py-2 rounded-lg"
                  style={{ background: "rgba(16, 185, 129, 0.08)", color: "#059669" }}
                >
                  Results Released
                </span>
              )}
              <Link
                href={`/teacher/assignments/${assignmentId}/submissions`}
                className="text-xs font-medium px-3 py-2 rounded-lg transition-all"
                style={{
                  background: "var(--color-surface-sunken)",
                  color: "var(--color-ink-muted)",
                  border: "1px solid var(--color-border-subtle)",
                }}
              >
                View Submissions
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Status Summary ── */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
        <StatCard label="Not Started" value={notStarted} color="#9ca3af" />
        <StatCard label="In Progress" value={inProgress} color="#3b82f6" />
        <StatCard label="Submitted" value={submitted} color="#10b981" />
        <StatCard label="Expired" value={expired} color="#ef4444" />
      </div>

      {/* ── Student Grid ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {students.map((student) => (
          <StudentCard
            key={student.student_id}
            student={student}
            totalQuestions={totalQuestions}
            formatTime={formatTime}
          />
        ))}
      </div>

      {students.length === 0 && (
        <div className="text-center py-12">
          <p className="text-sm" style={{ color: "var(--color-ink-faint)" }}>
            No students in this classroom yet.
          </p>
        </div>
      )}

      {/* ── Force Submit Modal ── */}
      <AnimatePresence>
        {showForceSubmit && (
          <ConfirmModal
            title="End Exam for All?"
            description={`This will force-submit ${inProgress} in-progress exam${inProgress !== 1 ? "s" : ""}. Students will receive their current scores.`}
            confirmLabel={actionLoading === "force_submit" ? "Ending..." : "End Exam for All"}
            danger
            onConfirm={handleForceSubmitAll}
            onCancel={() => setShowForceSubmit(false)}
            disabled={actionLoading === "force_submit"}
          />
        )}
      </AnimatePresence>

      {/* ── Release Results Modal ── */}
      <AnimatePresence>
        {showReleaseResults && (
          <ConfirmModal
            title="Release Results?"
            description="Students will be able to see their scores and review their answers."
            confirmLabel={actionLoading === "release_results" ? "Releasing..." : "Release Results"}
            onConfirm={handleReleaseResults}
            onCancel={() => setShowReleaseResults(false)}
            disabled={actionLoading === "release_results"}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Sub-Components ──────────────────────────────────────────────────────────

function StatCard({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div
      className="rounded-xl p-4"
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border-subtle)",
      }}
    >
      <p className="text-2xl font-bold tabular-nums" style={{ color }}>
        {value}
      </p>
      <p className="text-xs font-medium mt-1" style={{ color: "var(--color-ink-faint)" }}>
        {label}
      </p>
    </div>
  );
}

function StudentCard({
  student,
  totalQuestions,
  formatTime,
}: {
  student: StudentStatus;
  totalQuestions: number;
  formatTime: (s: number) => string;
}) {
  const statusConfig = {
    not_started: { label: "Not Started", color: "#9ca3af", bg: "rgba(156,163,175,0.08)" },
    in_progress: { label: "In Progress", color: "#3b82f6", bg: "rgba(59,130,246,0.08)" },
    submitted: { label: "Submitted", color: "#10b981", bg: "rgba(16,185,129,0.08)" },
    force_submitted: { label: "Force Submitted", color: "#f59e0b", bg: "rgba(245,158,11,0.08)" },
    expired: { label: "Time Expired", color: "#ef4444", bg: "rgba(239,68,68,0.08)" },
  };

  const cfg = statusConfig[student.status] || statusConfig.not_started;

  return (
    <div
      className="rounded-xl p-4"
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border-subtle)",
      }}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="min-w-0">
          <p className="text-sm font-semibold truncate" style={{ color: "var(--color-ink)" }}>
            {student.name}
          </p>
          <p className="text-[11px] truncate" style={{ color: "var(--color-ink-faint)" }}>
            {student.email}
          </p>
        </div>
        <span
          className="text-[10px] font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ml-2"
          style={{ background: cfg.bg, color: cfg.color }}
        >
          {cfg.label}
        </span>
      </div>

      <div className="space-y-1.5">
        {/* Questions answered */}
        {student.status !== "not_started" && (
          <div className="flex items-center justify-between text-xs">
            <span style={{ color: "var(--color-ink-faint)" }}>Questions answered</span>
            <span className="font-medium tabular-nums" style={{ color: "var(--color-ink)" }}>
              {student.questions_answered}/{totalQuestions}
            </span>
          </div>
        )}

        {/* Time remaining */}
        {student.status === "in_progress" && student.time_remaining_seconds !== null && (
          <div className="flex items-center justify-between text-xs">
            <span style={{ color: "var(--color-ink-faint)" }}>Time remaining</span>
            <span
              className="font-medium tabular-nums"
              style={{
                color: student.time_remaining_seconds <= 300 ? "#ef4444" : "var(--color-ink)",
              }}
            >
              {formatTime(student.time_remaining_seconds)}
            </span>
          </div>
        )}

        {/* Score */}
        {student.score !== null && (
          <div className="flex items-center justify-between text-xs">
            <span style={{ color: "var(--color-ink-faint)" }}>Score</span>
            <span
              className="font-bold tabular-nums"
              style={{
                color: student.score >= 80 ? "#059669" : student.score >= 50 ? "#d97706" : "#dc2626",
              }}
            >
              {student.score}%
            </span>
          </div>
        )}

        {/* Tab switches */}
        {student.tab_switches > 0 && (
          <div className="flex items-center justify-between text-xs">
            <span style={{ color: "var(--color-ink-faint)" }}>Tab switches</span>
            <span className="font-medium text-red-500 tabular-nums">
              {student.tab_switches}
            </span>
          </div>
        )}

        {/* Fullscreen exits */}
        {student.fullscreen_exits > 0 && (
          <div className="flex items-center justify-between text-xs">
            <span style={{ color: "var(--color-ink-faint)" }}>Fullscreen exits</span>
            <span className="font-medium text-red-500 tabular-nums">
              {student.fullscreen_exits}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

function ConfirmModal({
  title,
  description,
  confirmLabel,
  danger,
  onConfirm,
  onCancel,
  disabled,
}: {
  title: string;
  description: string;
  confirmLabel: string;
  danger?: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  disabled?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-6"
      style={{ background: "rgba(0,0,0,0.4)" }}
      onClick={onCancel}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="card p-6 max-w-sm w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-base font-bold mb-2" style={{ color: "var(--color-ink)" }}>
          {title}
        </h3>
        <p className="text-sm mb-5" style={{ color: "var(--color-ink-muted)" }}>
          {description}
        </p>
        <div className="flex gap-3">
          <button
            onClick={onCancel}
            className="flex-1 text-sm font-medium py-2.5 rounded-lg transition-all"
            style={{ border: "1px solid var(--color-border-subtle)", color: "var(--color-ink-muted)" }}
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            disabled={disabled}
            className="flex-1 text-sm font-medium py-2.5 rounded-lg transition-all disabled:opacity-50"
            style={{
              background: danger ? "#ef4444" : "var(--accent, #3b82f6)",
              color: "white",
            }}
          >
            {confirmLabel}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
