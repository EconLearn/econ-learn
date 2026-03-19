"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/components/providers/AuthProvider";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// ─── Types ───────────────────────────────────────────────────────────────────

interface AnswerDetail {
  question_id: string;
  question_text: string;
  options: string[];
  correct_index: number;
  selected_index: number;
  correct: boolean;
}

interface Submission {
  student_id: string;
  name: string;
  email: string;
  status: string;
  score: number | null;
  tab_switches: number;
  fullscreen_exits: number;
  time_spent_seconds: number | null;
  started_at: string;
  submitted_at: string | null;
  answers: AnswerDetail[];
}

interface AssignmentInfo {
  id: string;
  title: string;
  classroom_name: string;
}

// ─── Main Page ───────────────────────────────────────────────────────────────

export default function ExamSubmissionsPage({
  params,
}: {
  params: { assignmentId: string };
}) {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const assignmentId = params.assignmentId;

  const [assignment, setAssignment] = useState<AssignmentInfo | null>(null);
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [expandedStudent, setExpandedStudent] = useState<string | null>(null);

  useEffect(() => {
    if (authLoading) return;
    if (!user) {
      router.push("/login");
      return;
    }

    async function fetchSubmissions() {
      try {
        const res = await fetch(`/api/exam/${assignmentId}/submissions`);
        const data = await res.json();

        if (!res.ok) {
          setError(data.error || "Failed to load submissions");
          return;
        }

        setAssignment(data.assignment);
        setSubmissions(data.submissions);
        setTotalQuestions(data.total_questions);
      } catch {
        setError("Failed to load submissions");
      }
      setLoading(false);
    }

    fetchSubmissions();
  }, [user, authLoading, router, assignmentId]);

  function formatTime(seconds: number): string {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}m ${s}s`;
  }

  function formatDateTime(iso: string): string {
    return new Date(iso).toLocaleString(undefined, {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  // ── Loading ──
  if (authLoading || loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div
          className="w-6 h-6 border-2 rounded-full animate-spin"
          style={{
            borderColor: "var(--color-border)",
            borderTopColor: "var(--color-ink)",
          }}
        />
      </div>
    );
  }

  // ── Error ──
  if (error || !assignment) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-16 text-center">
        <p
          className="text-sm font-medium mb-4"
          style={{ color: "var(--color-ink-muted)" }}
        >
          {error || "Not found"}
        </p>
        <Link
          href="/teacher"
          className="btn-primary text-sm py-2 px-5 inline-block"
        >
          Back to Dashboard
        </Link>
      </div>
    );
  }

  // ── Stats ──
  const avgScore =
    submissions.length > 0
      ? Math.round(
          submissions.reduce((sum, s) => sum + (s.score ?? 0), 0) /
            submissions.length
        )
      : 0;
  const highestScore = Math.max(...submissions.map((s) => s.score ?? 0), 0);
  const lowestScore =
    submissions.length > 0
      ? Math.min(...submissions.map((s) => s.score ?? 100))
      : 0;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
      {/* ── Header ── */}
      <div className="mb-8">
        <nav className="module-breadcrumb mb-4">
          <Link href="/teacher">Teacher Dashboard</Link>
          <span>/</span>
          <Link href={`/teacher/exam/${assignmentId}`}>Exam Monitor</Link>
          <span>/</span>
          <span className="current">Submissions</span>
        </nav>
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
          <h1
            className="text-2xl font-bold"
            style={{ color: "var(--color-ink)" }}
          >
            {assignment.title} — Submissions
          </h1>
          <p
            className="text-sm mt-1"
            style={{ color: "var(--color-ink-muted)" }}
          >
            {assignment.classroom_name} &middot; {submissions.length} submissions
            &middot; {totalQuestions} questions
          </p>
        </motion.div>
      </div>

      {/* ── Summary Stats ── */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
        <StatCard label="Submissions" value={String(submissions.length)} color="var(--color-ink)" />
        <StatCard label="Average Score" value={`${avgScore}%`} color="#3b82f6" />
        <StatCard label="Highest" value={`${highestScore}%`} color="#10b981" />
        <StatCard label="Lowest" value={`${lowestScore}%`} color="#ef4444" />
      </div>

      {/* ── Submissions Table ── */}
      {submissions.length === 0 ? (
        <div className="text-center py-12">
          <p
            className="text-sm"
            style={{ color: "var(--color-ink-faint)" }}
          >
            No submissions yet.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {submissions.map((sub) => {
            const isExpanded = expandedStudent === sub.student_id;
            const violations = sub.tab_switches + sub.fullscreen_exits;

            return (
              <div
                key={sub.student_id}
                className="rounded-xl overflow-hidden"
                style={{
                  background: "var(--color-surface)",
                  border: violations >= 3
                    ? "1px solid rgba(239, 68, 68, 0.4)"
                    : "1px solid var(--color-border-subtle)",
                }}
              >
                {/* Summary row */}
                <button
                  onClick={() =>
                    setExpandedStudent(isExpanded ? null : sub.student_id)
                  }
                  className="w-full text-left px-4 py-3 flex items-center gap-4 hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors"
                >
                  {/* Name + email */}
                  <div className="flex-1 min-w-0">
                    <p
                      className="text-sm font-semibold truncate"
                      style={{ color: "var(--color-ink)" }}
                    >
                      {sub.name}
                    </p>
                    <p
                      className="text-[11px] truncate"
                      style={{ color: "var(--color-ink-faint)" }}
                    >
                      {sub.email}
                    </p>
                  </div>

                  {/* Score */}
                  <div className="text-right flex-shrink-0">
                    <p
                      className="text-lg font-bold tabular-nums"
                      style={{
                        color:
                          (sub.score ?? 0) >= 80
                            ? "#059669"
                            : (sub.score ?? 0) >= 50
                            ? "#d97706"
                            : "#dc2626",
                      }}
                    >
                      {sub.score ?? 0}%
                    </p>
                  </div>

                  {/* Time spent */}
                  <div className="text-right flex-shrink-0 w-16">
                    <p
                      className="text-xs font-medium tabular-nums"
                      style={{ color: "var(--color-ink-muted)" }}
                    >
                      {sub.time_spent_seconds
                        ? formatTime(sub.time_spent_seconds)
                        : "—"}
                    </p>
                  </div>

                  {/* Violations */}
                  <div className="text-right flex-shrink-0 w-20">
                    {violations > 0 ? (
                      <span
                        className="text-xs font-semibold px-2 py-0.5 rounded-full"
                        style={{
                          background:
                            violations >= 3
                              ? "rgba(239, 68, 68, 0.1)"
                              : "rgba(245, 158, 11, 0.1)",
                          color: violations >= 3 ? "#dc2626" : "#d97706",
                        }}
                      >
                        {violations} violation{violations !== 1 ? "s" : ""}
                      </span>
                    ) : (
                      <span
                        className="text-xs"
                        style={{ color: "var(--color-ink-faint)" }}
                      >
                        Clean
                      </span>
                    )}
                  </div>

                  {/* Status badge */}
                  <div className="flex-shrink-0">
                    <StatusBadge status={sub.status} />
                  </div>

                  {/* Expand chevron */}
                  <svg
                    className={`w-4 h-4 flex-shrink-0 transition-transform ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                    style={{ color: "var(--color-ink-faint)" }}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Expanded answers */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div
                        className="px-4 pb-4 pt-2 space-y-3"
                        style={{
                          borderTop: "1px solid var(--color-border-subtle)",
                        }}
                      >
                        {/* Meta row */}
                        <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs" style={{ color: "var(--color-ink-muted)" }}>
                          {sub.submitted_at && (
                            <span>Submitted: {formatDateTime(sub.submitted_at)}</span>
                          )}
                          <span>Tab switches: {sub.tab_switches}</span>
                          <span>Fullscreen exits: {sub.fullscreen_exits}</span>
                        </div>

                        {/* Answer list */}
                        {sub.answers.map((answer, i) => (
                          <div
                            key={answer.question_id}
                            className="rounded-lg p-3"
                            style={{
                              background: answer.correct
                                ? "rgba(16, 185, 129, 0.04)"
                                : "rgba(239, 68, 68, 0.04)",
                              border: `1px solid ${
                                answer.correct
                                  ? "rgba(16, 185, 129, 0.15)"
                                  : "rgba(239, 68, 68, 0.15)"
                              }`,
                            }}
                          >
                            <div className="flex items-start gap-2 mb-2">
                              <span
                                className="text-xs font-bold mt-0.5 flex-shrink-0"
                                style={{
                                  color: answer.correct ? "#059669" : "#dc2626",
                                }}
                              >
                                {answer.correct ? "✓" : "✗"}
                              </span>
                              <p
                                className="text-sm font-medium"
                                style={{ color: "var(--color-ink)" }}
                              >
                                Q{i + 1}. {answer.question_text}
                              </p>
                            </div>
                            <div className="ml-5 space-y-1">
                              {answer.options.map((opt, optIdx) => {
                                const isSelected = optIdx === answer.selected_index;
                                const isCorrect = optIdx === answer.correct_index;
                                let optColor = "var(--color-ink-faint)";
                                let optWeight = "normal";

                                if (isCorrect) {
                                  optColor = "#059669";
                                  optWeight = "600";
                                }
                                if (isSelected && !isCorrect) {
                                  optColor = "#dc2626";
                                  optWeight = "600";
                                }

                                return (
                                  <p
                                    key={optIdx}
                                    className="text-xs"
                                    style={{
                                      color: optColor,
                                      fontWeight: optWeight,
                                    }}
                                  >
                                    {String.fromCharCode(65 + optIdx)}. {opt}
                                    {isCorrect && " (correct)"}
                                    {isSelected && !isCorrect && " (selected)"}
                                    {isSelected && isCorrect && " (selected)"}
                                  </p>
                                );
                              })}
                            </div>
                          </div>
                        ))}

                        {sub.answers.length === 0 && (
                          <p
                            className="text-xs py-2"
                            style={{ color: "var(--color-ink-faint)" }}
                          >
                            No answers recorded.
                          </p>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ─── Sub-Components ──────────────────────────────────────────────────────────

function StatCard({
  label,
  value,
  color,
}: {
  label: string;
  value: string;
  color: string;
}) {
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
      <p
        className="text-xs font-medium mt-1"
        style={{ color: "var(--color-ink-faint)" }}
      >
        {label}
      </p>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const config: Record<string, { label: string; color: string; bg: string }> = {
    submitted: {
      label: "Submitted",
      color: "#10b981",
      bg: "rgba(16,185,129,0.08)",
    },
    force_submitted: {
      label: "Force Submitted",
      color: "#f59e0b",
      bg: "rgba(245,158,11,0.08)",
    },
    expired: {
      label: "Time Expired",
      color: "#ef4444",
      bg: "rgba(239,68,68,0.08)",
    },
  };

  const cfg = config[status] || {
    label: status,
    color: "#9ca3af",
    bg: "rgba(156,163,175,0.08)",
  };

  return (
    <span
      className="text-[10px] font-semibold px-2 py-0.5 rounded-full whitespace-nowrap"
      style={{ background: cfg.bg, color: cfg.color }}
    >
      {cfg.label}
    </span>
  );
}
