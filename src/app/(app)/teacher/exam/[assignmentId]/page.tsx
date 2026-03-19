"use client";

import { useEffect, useState, useCallback, useRef } from "react";
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

interface ExamQuestion {
  id: string;
  question: string;
  options: string[];
  correct_index: number;
  source: "bank" | "custom";
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
  const [questions, setQuestions] = useState<ExamQuestion[]>([]);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [actionLoading, setActionLoading] = useState<string | null>(null);

  // View Questions state
  const [showQuestions, setShowQuestions] = useState(false);

  // Violation alert state
  const [violationAlert, setViolationAlert] = useState<string | null>(null);
  const prevViolationsRef = useRef<Map<string, number>>(new Map());

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
      if (data.questions) {
        setQuestions(data.questions);
      }

      // Check for new violations since last refresh
      const prevMap = prevViolationsRef.current;
      const newAlerts: string[] = [];
      const isFirstLoad = prevMap.size === 0;
      for (const s of data.students as StudentStatus[]) {
        const total = s.tab_switches + s.fullscreen_exits;
        const prev = prevMap.get(s.student_id) || 0;
        // Alert on ANY increase in violations (not just when prev > 0)
        if (total > prev && !isFirstLoad) {
          newAlerts.push(`${s.name} (${total - prev} new)`);
        }
      }

      // Update previous violations map
      const newMap = new Map<string, number>();
      for (const s of data.students as StudentStatus[]) {
        newMap.set(s.student_id, s.tab_switches + s.fullscreen_exits);
      }
      prevViolationsRef.current = newMap;

      if (newAlerts.length > 0) {
        const alertMsg = `Violation${newAlerts.length > 1 ? "s" : ""}: ${newAlerts.join(", ")}`;
        setViolationAlert(alertMsg);
        // Keep alert visible for 15 seconds (was 6)
        setTimeout(() => setViolationAlert(null), 15000);
        // Browser notification (works even if teacher is on another tab)
        if (typeof Notification !== "undefined" && Notification.permission === "granted") {
          new Notification("EconLearn Exam Alert", { body: alertMsg, icon: "/favicon-512.png" });
        }
        // Also play a sound
        try { new Audio("data:audio/wav;base64,UklGRl9vT19teleXF2ZlBmbXQgAAAA").play(); } catch {}
      }
    } catch {
      setError("Failed to load exam status");
    }
    setLoading(false);
  }, [assignmentId]);

  // Request notification permission on mount
  useEffect(() => {
    if (typeof Notification !== "undefined" && Notification.permission === "default") {
      Notification.requestPermission();
    }
  }, []);

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
      {/* ── Violation Alert Banner ── */}
      <AnimatePresence>
        {violationAlert && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="mb-4 px-4 py-3 rounded-xl text-sm font-medium"
            style={{
              background: "rgba(239, 68, 68, 0.08)",
              color: "#dc2626",
              border: "1px solid rgba(239, 68, 68, 0.2)",
            }}
          >
            <span className="font-bold mr-1">Alert:</span> {violationAlert}
          </motion.div>
        )}
      </AnimatePresence>

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
              <Link
                href={`/assignments/${assignmentId}?preview=true`}
                className="text-xs font-medium px-3 py-2 rounded-lg transition-all"
                style={{
                  background: "rgba(59, 130, 246, 0.08)",
                  color: "#3b82f6",
                  border: "1px solid rgba(59, 130, 246, 0.15)",
                }}
              >
                Preview Exam
              </Link>
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
                href={`/teacher/exam/${assignmentId}/submissions`}
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

      {/* ── View Questions (Collapsible) ── */}
      {questions.length > 0 && (
        <div className="mb-8">
          <button
            onClick={() => setShowQuestions(!showQuestions)}
            className="flex items-center gap-2 text-sm font-semibold mb-3 transition-colors"
            style={{ color: "var(--color-ink-muted)" }}
          >
            <svg
              className={`w-4 h-4 transition-transform ${showQuestions ? "rotate-90" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            View Questions ({questions.length})
          </button>
          <AnimatePresence>
            {showQuestions && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden"
              >
                <div className="space-y-3">
                  {questions.map((q, i) => (
                    <div
                      key={q.id}
                      className="rounded-xl p-4"
                      style={{
                        background: "var(--color-surface)",
                        border: "1px solid var(--color-border-subtle)",
                      }}
                    >
                      <div className="flex items-start gap-2 mb-2">
                        <span
                          className="text-xs font-bold flex-shrink-0 mt-0.5 w-6 h-6 rounded-full flex items-center justify-center"
                          style={{
                            background: "var(--color-surface-sunken)",
                            color: "var(--color-ink-muted)",
                          }}
                        >
                          {i + 1}
                        </span>
                        <p className="text-sm font-medium" style={{ color: "var(--color-ink)" }}>
                          {q.question}
                        </p>
                      </div>
                      <div className="ml-8 space-y-1">
                        {q.options.map((opt, optIdx) => (
                          <p
                            key={optIdx}
                            className="text-xs py-0.5 px-2 rounded"
                            style={{
                              color: optIdx === q.correct_index ? "#059669" : "var(--color-ink-faint)",
                              fontWeight: optIdx === q.correct_index ? 600 : 400,
                              background: optIdx === q.correct_index ? "rgba(16, 185, 129, 0.06)" : "transparent",
                            }}
                          >
                            {String.fromCharCode(65 + optIdx)}. {opt}
                            {optIdx === q.correct_index && " (correct)"}
                          </p>
                        ))}
                      </div>
                      <div className="ml-8 mt-1">
                        <span
                          className="text-[10px] font-medium px-1.5 py-0.5 rounded"
                          style={{
                            background: q.source === "bank" ? "rgba(59,130,246,0.08)" : "rgba(168,85,247,0.08)",
                            color: q.source === "bank" ? "#3b82f6" : "#a855f7",
                          }}
                        >
                          {q.source === "bank" ? "Question Bank" : "Custom"}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

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
  const violations = student.tab_switches + student.fullscreen_exits;
  const hasHighViolations = violations >= 3;

  return (
    <div
      className="rounded-xl p-4"
      style={{
        background: hasHighViolations ? "rgba(239, 68, 68, 0.03)" : "var(--color-surface)",
        border: hasHighViolations
          ? "1px solid rgba(239, 68, 68, 0.3)"
          : "1px solid var(--color-border-subtle)",
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

        {/* Violations (combined tab_switches + fullscreen_exits) */}
        {student.status !== "not_started" && (
          <div className="flex items-center justify-between text-xs">
            <span style={{ color: "var(--color-ink-faint)" }}>Violations</span>
            {violations > 0 ? (
              <span
                className="font-semibold tabular-nums px-1.5 py-0.5 rounded"
                style={{
                  color: hasHighViolations ? "#dc2626" : "#d97706",
                  background: hasHighViolations
                    ? "rgba(239, 68, 68, 0.08)"
                    : "rgba(245, 158, 11, 0.08)",
                }}
              >
                {violations}
                <span className="font-normal ml-1" style={{ color: "var(--color-ink-faint)" }}>
                  ({student.tab_switches} tab, {student.fullscreen_exits} fs)
                </span>
              </span>
            ) : (
              <span className="font-medium" style={{ color: "var(--color-ink-faint)" }}>
                0
              </span>
            )}
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
