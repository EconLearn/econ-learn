"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useAuth } from "@/components/providers/AuthProvider";
import { useRouter } from "next/navigation";
import { getQuestionsByModules, type QuestionBankEntry } from "@/data/question-bank";
import { getContentForModules, type ModuleContent } from "@/data/content-map";
import { courses } from "@/data/courses";
import type { AssignmentConfig } from "@/lib/types/teacher";

// ─── Types ───────────────────────────────────────────────────────────────────

interface AssignmentData {
  id: string;
  classroom_id: string;
  classroom_name: string;
  teacher_id: string;
  title: string;
  type: "lesson" | "quiz" | "practice_test";
  module_ids: string[];
  due_date: string | null;
  created_at: string;
  config: AssignmentConfig;
}

interface SubmissionData {
  id: string;
  score: number | null;
  time_spent_seconds: number | null;
  completed_at: string;
  answers: AnswerRecord[] | null;
  sections_read: number | null;
}

interface AnswerRecord {
  questionIndex: number;
  selectedIndex: number;
  correct: boolean;
}

// ─── Seeded shuffle ──────────────────────────────────────────────────────────

function seededRandom(seed: string) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) {
    h = (Math.imul(31, h) + seed.charCodeAt(i)) | 0;
  }
  return function () {
    h = (h ^ (h >>> 16)) * 0x45d9f3b;
    h = (h ^ (h >>> 16)) * 0x45d9f3b;
    h = h ^ (h >>> 16);
    return (h >>> 0) / 4294967296;
  };
}

function seededShuffle<T>(arr: T[], seed: string): T[] {
  const shuffled = [...arr];
  const rng = seededRandom(seed);
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// ─── Main Page ───────────────────────────────────────────────────────────────

export default function AssignmentPage({ params }: { params: { id: string } }) {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const assignmentId = params.id;

  const [assignment, setAssignment] = useState<AssignmentData | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [submission, setSubmission] = useState<SubmissionData | null>(null);
  const [attemptCount, setAttemptCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (authLoading) return;
    if (!user) {
      router.push("/login");
      return;
    }

    async function fetchAssignment() {
      try {
        const res = await fetch(`/api/assignments/${assignmentId}`);
        if (!res.ok) {
          const data = await res.json();
          setError(data.error || "Failed to load assignment");
          setLoading(false);
          return;
        }
        const data = await res.json();
        setAssignment(data.assignment);
        setSubmitted(data.submitted);
        setSubmission(data.submission);
        setAttemptCount(data.attempt_count);
      } catch {
        setError("Failed to load assignment");
      }
      setLoading(false);
    }

    fetchAssignment();
  }, [user, authLoading, router, assignmentId]);

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

  if (error || !assignment || !user) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-16 text-center">
        <p className="text-sm font-medium mb-4" style={{ color: "var(--color-ink-muted)" }}>
          {error || "Assignment not found"}
        </p>
        <Link href="/assignments" className="btn-primary text-sm py-2 px-5 inline-block">
          Back to Assignments
        </Link>
      </div>
    );
  }

  const canRetake = assignment.config?.retakes_allowed && submitted;

  // If already submitted and not retaking, show results
  if (submitted && submission && !canRetake) {
    return (
      <SubmissionResults
        assignment={assignment}
        submission={submission}
        userId={user.id}
        onRetake={undefined}
      />
    );
  }

  // If submitted but retakes allowed, show results with retake option
  if (submitted && submission && canRetake) {
    return (
      <SubmissionResults
        assignment={assignment}
        submission={submission}
        userId={user.id}
        onRetake={() => {
          setSubmitted(false);
          setSubmission(null);
        }}
      />
    );
  }

  // Active assignment
  if (assignment.type === "quiz" || assignment.type === "practice_test") {
    return (
      <QuizAssignment
        assignment={assignment}
        userId={user.id}
        onSubmit={(sub) => {
          setSubmitted(true);
          setSubmission(sub);
          setAttemptCount((c) => c + 1);
        }}
      />
    );
  }

  return (
    <LessonAssignment
      assignment={assignment}
      userId={user.id}
      onSubmit={(sub) => {
        setSubmitted(true);
        setSubmission(sub);
        setAttemptCount((c) => c + 1);
      }}
    />
  );
}

// ─── Assignment Header ───────────────────────────────────────────────────────

function AssignmentHeader({ assignment }: { assignment: AssignmentData }) {
  const dueDate = assignment.due_date ? new Date(assignment.due_date) : null;
  const now = new Date();
  const diffMs = dueDate ? dueDate.getTime() - now.getTime() : Infinity;
  const diffHours = diffMs / (1000 * 60 * 60);
  const isUrgent = diffHours > 0 && diffHours < 48;
  const isOverdue = diffHours < 0;
  const typeLabel =
    assignment.type === "quiz"
      ? "Quiz"
      : assignment.type === "practice_test"
      ? "Practice Test"
      : "Lesson";

  return (
    <div className="mb-6">
      <Link
        href="/assignments"
        className="inline-flex items-center gap-1 text-xs font-medium mb-4 transition-colors"
        style={{ color: "var(--color-ink-faint)" }}
      >
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        Assignments
      </Link>
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h1 className="text-xl font-bold tracking-tight" style={{ color: "var(--color-ink)" }}>
              {assignment.title}
            </h1>
            <span
              className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
              style={{
                background:
                  assignment.type === "quiz" || assignment.type === "practice_test"
                    ? "rgba(59, 130, 246, 0.08)"
                    : "rgba(16, 185, 129, 0.08)",
                color:
                  assignment.type === "quiz" || assignment.type === "practice_test"
                    ? "#3b82f6"
                    : "#10b981",
              }}
            >
              {typeLabel}
            </span>
          </div>
          <p className="text-xs" style={{ color: "var(--color-ink-faint)" }}>
            {assignment.classroom_name}
            {dueDate && (
              <>
                {" "}&middot;{" "}
                <span
                  style={{
                    color: isOverdue
                      ? "#ef4444"
                      : isUrgent
                      ? "#f59e0b"
                      : "var(--color-ink-faint)",
                    fontWeight: isUrgent || isOverdue ? 600 : 400,
                  }}
                >
                  {isOverdue
                    ? "Overdue"
                    : `Due ${dueDate.toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                        hour: "numeric",
                        minute: "2-digit",
                      })}`}
                  {isUrgent && !isOverdue && " (due soon)"}
                </span>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── Quiz Assignment ─────────────────────────────────────────────────────────

function QuizAssignment({
  assignment,
  userId,
  onSubmit,
}: {
  assignment: AssignmentData;
  userId: string;
  onSubmit: (sub: SubmissionData) => void;
}) {
  const config = assignment.config || {};
  const quizLength = config.quiz_length || 10;
  const timeLimitMinutes = config.time_limit_minutes ?? null;

  // Load and shuffle questions deterministically
  const [questions] = useState<QuestionBankEntry[]>(() => {
    const pool = getQuestionsByModules(assignment.module_ids);
    const seed = `${userId}-${assignment.id}`;
    const shuffled = seededShuffle(pool, seed);
    return shuffled.slice(0, quizLength);
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(() =>
    new Array(questions.length).fill(null)
  );
  const [showConfirm, setShowConfirm] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [timeLeft, setTimeLeft] = useState<number | null>(
    timeLimitMinutes ? timeLimitMinutes * 60 : null
  );
  const startTimeRef = useRef(Date.now());

  // Timer countdown
  useEffect(() => {
    if (timeLeft === null) return;
    if (timeLeft <= 0) return;
    const interval = setInterval(() => {
      setTimeLeft((t) => {
        if (t === null) return null;
        if (t <= 1) {
          clearInterval(interval);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft !== null]); // eslint-disable-line react-hooks/exhaustive-deps

  // Auto-submit on time expiry
  useEffect(() => {
    if (timeLeft === 0) {
      handleSubmit();
    }
  }, [timeLeft]); // eslint-disable-line react-hooks/exhaustive-deps

  const answeredCount = answers.filter((a) => a !== null).length;
  const current = questions[currentIndex];

  function selectAnswer(optionIndex: number) {
    setAnswers((prev) => {
      const next = [...prev];
      next[currentIndex] = optionIndex;
      return next;
    });
  }

  async function handleSubmit() {
    if (submitting) return;
    setSubmitting(true);
    setShowConfirm(false);

    const timeSpent = Math.round((Date.now() - startTimeRef.current) / 1000);

    const answerRecords: AnswerRecord[] = questions.map((q, i) => ({
      questionIndex: i,
      selectedIndex: answers[i] ?? -1,
      correct: answers[i] === q.question.correctIndex,
    }));

    const correctCount = answerRecords.filter((a) => a.correct).length;
    const score = Math.round((correctCount / questions.length) * 100);

    try {
      const res = await fetch(`/api/assignments/${assignment.id}/submit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          answers: answerRecords,
          score,
          time_spent_seconds: timeSpent,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        onSubmit({
          id: data.submission_id,
          score,
          time_spent_seconds: timeSpent,
          completed_at: new Date().toISOString(),
          answers: answerRecords,
          sections_read: null,
        });
      } else {
        const data = await res.json();
        alert(data.error || "Failed to submit. Please try again.");
        setSubmitting(false);
      }
    } catch {
      alert("Failed to submit. Please try again.");
      setSubmitting(false);
    }
  }

  function formatTime(seconds: number): string {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  }

  if (!current) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-10 text-center">
        <p className="text-sm" style={{ color: "var(--color-ink-muted)" }}>
          No questions available for this assignment.
        </p>
        <Link href="/assignments" className="btn-primary text-sm py-2 px-5 mt-4 inline-block">
          Back to Assignments
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-10 lg:py-14">
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
        <AssignmentHeader assignment={assignment} />

        {/* Timer */}
        {timeLeft !== null && (
          <div
            className="flex items-center justify-center gap-2 py-2 px-4 rounded-lg mb-4"
            style={{
              background: timeLeft <= 120 ? "rgba(239, 68, 68, 0.06)" : "var(--color-surface-sunken)",
              border: timeLeft <= 120 ? "1px solid rgba(239, 68, 68, 0.15)" : "1px solid var(--color-border-subtle)",
            }}
          >
            <svg
              className="w-4 h-4"
              style={{ color: timeLeft <= 120 ? "#ef4444" : "var(--color-ink-faint)" }}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span
              className="text-sm font-bold tabular-nums"
              style={{ color: timeLeft <= 120 ? "#ef4444" : "var(--color-ink)" }}
            >
              {formatTime(timeLeft)}
            </span>
            <span className="text-xs" style={{ color: "var(--color-ink-faint)" }}>
              remaining
            </span>
          </div>
        )}

        {/* Progress bar */}
        <div className="h-1 rounded-full mb-6" style={{ background: "var(--color-surface-sunken)" }}>
          <div
            className="h-full rounded-full transition-all duration-300"
            style={{
              background: "var(--accent, #3b82f6)",
              width: `${(answeredCount / questions.length) * 100}%`,
            }}
          />
        </div>

        {/* Question navigation grid */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {questions.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className="w-8 h-8 rounded-md text-xs font-medium transition-all"
              style={{
                background:
                  i === currentIndex
                    ? "var(--accent, #3b82f6)"
                    : answers[i] !== null
                    ? "rgba(16, 185, 129, 0.1)"
                    : "var(--color-surface-sunken)",
                color:
                  i === currentIndex
                    ? "white"
                    : answers[i] !== null
                    ? "#10b981"
                    : "var(--color-ink-faint)",
                border:
                  i === currentIndex
                    ? "none"
                    : answers[i] !== null
                    ? "1px solid rgba(16, 185, 129, 0.2)"
                    : "1px solid var(--color-border-subtle)",
              }}
            >
              {i + 1}
            </button>
          ))}
        </div>

        {/* Question card */}
        <div className="card overflow-hidden">
          <div className="px-5 py-3 flex items-center justify-between" style={{ borderBottom: "1px solid var(--color-border-subtle)" }}>
            <p className="text-[11px] font-medium" style={{ color: "var(--color-ink-faint)" }}>
              Question {currentIndex + 1} of {questions.length}
            </p>
            <p className="text-[11px]" style={{ color: "var(--color-ink-faint)" }}>
              {current.moduleName}
            </p>
          </div>

          <div className="p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.2 }}
              >
                <h3
                  className="text-[15px] font-medium leading-snug mb-5"
                  style={{ color: "var(--color-ink)" }}
                >
                  {current.question.question}
                </h3>

                <div className="space-y-2">
                  {current.question.options.map((option, i) => {
                    const isSelected = answers[currentIndex] === i;

                    return (
                      <button
                        key={i}
                        onClick={() => selectAnswer(i)}
                        className="w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all"
                        style={{
                          background: isSelected ? "rgba(59, 130, 246, 0.06)" : "var(--color-surface)",
                          border: isSelected
                            ? "1.5px solid var(--accent, #3b82f6)"
                            : "1px solid var(--color-border-subtle)",
                          color: isSelected ? "var(--accent, #3b82f6)" : "var(--color-ink)",
                        }}
                      >
                        <span className="flex items-center gap-3">
                          <span
                            className="w-5 h-5 rounded flex items-center justify-center text-[10px] font-bold flex-shrink-0"
                            style={{
                              background: isSelected ? "var(--accent, #3b82f6)" : "var(--color-surface-sunken)",
                              color: isSelected ? "white" : "var(--color-ink-faint)",
                            }}
                          >
                            {String.fromCharCode(65 + i)}
                          </span>
                          <span className="flex-1">{option}</span>
                        </span>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation + Submit footer */}
        <div
          className="sticky bottom-0 flex items-center justify-between gap-3 mt-4 py-4 px-1"
          style={{ background: "var(--color-background, white)" }}
        >
          <button
            onClick={() => setCurrentIndex((i) => Math.max(0, i - 1))}
            disabled={currentIndex === 0}
            className="text-sm font-medium px-4 py-2.5 rounded-lg transition-all disabled:opacity-30"
            style={{
              border: "1px solid var(--color-border-subtle)",
              color: "var(--color-ink-muted)",
            }}
          >
            Previous
          </button>

          <p className="text-xs tabular-nums" style={{ color: "var(--color-ink-faint)" }}>
            {answeredCount}/{questions.length} answered
          </p>

          {currentIndex < questions.length - 1 ? (
            <button
              onClick={() => setCurrentIndex((i) => Math.min(questions.length - 1, i + 1))}
              className="text-sm font-medium px-4 py-2.5 rounded-lg transition-all"
              style={{ background: "var(--accent, #3b82f6)", color: "white" }}
            >
              Next
            </button>
          ) : (
            <button
              onClick={() => setShowConfirm(true)}
              disabled={submitting}
              className="text-sm font-medium px-4 py-2.5 rounded-lg transition-all"
              style={{ background: "var(--accent, #3b82f6)", color: "white" }}
            >
              {submitting ? "Submitting..." : "Submit Quiz"}
            </button>
          )}
        </div>

        {/* Confirmation modal */}
        <AnimatePresence>
          {showConfirm && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-6"
              style={{ background: "rgba(0,0,0,0.4)" }}
              onClick={() => setShowConfirm(false)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="card p-6 max-w-sm w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <h3 className="text-base font-bold mb-2" style={{ color: "var(--color-ink)" }}>
                  Submit quiz?
                </h3>
                <p className="text-sm mb-4" style={{ color: "var(--color-ink-muted)" }}>
                  You answered {answeredCount} of {questions.length} questions.
                  {answeredCount < questions.length && (
                    <span className="text-amber-600 font-medium">
                      {" "}
                      {questions.length - answeredCount} unanswered question
                      {questions.length - answeredCount !== 1 ? "s" : ""} will be marked incorrect.
                    </span>
                  )}
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={() => setShowConfirm(false)}
                    className="flex-1 text-sm font-medium py-2.5 rounded-lg transition-all"
                    style={{
                      border: "1px solid var(--color-border-subtle)",
                      color: "var(--color-ink-muted)",
                    }}
                  >
                    Go Back
                  </button>
                  <button
                    onClick={handleSubmit}
                    disabled={submitting}
                    className="flex-1 text-sm font-medium py-2.5 rounded-lg transition-all"
                    style={{ background: "var(--accent, #3b82f6)", color: "white" }}
                  >
                    {submitting ? "Submitting..." : "Confirm Submit"}
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

// ─── Lesson Assignment ───────────────────────────────────────────────────────

function LessonAssignment({
  assignment,
  userId,
  onSubmit,
}: {
  assignment: AssignmentData;
  userId: string;
  onSubmit: (sub: SubmissionData) => void;
}) {
  const moduleContents = getContentForModules(assignment.module_ids);
  const allSections = moduleContents.flatMap((mc) =>
    mc.content.sections.map((s, i) => ({
      ...s,
      moduleTitle: mc.content.title,
      sectionKey: `${mc.moduleId}-${i}`,
    }))
  );

  const [readSections, setReadSections] = useState<Set<string>>(new Set());
  const [submitting, setSubmitting] = useState(false);
  const sectionRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const startTimeRef = useRef(Date.now());

  const totalSections = allSections.length;
  const readCount = readSections.size;
  const threshold = Math.ceil(totalSections * 0.8);
  const canSubmit = readCount >= threshold;

  // Intersection observer to track reading
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            const key = entry.target.getAttribute("data-section-key");
            if (key) {
              setReadSections((prev) => {
                const next = new Set(prev);
                next.add(key);
                return next;
              });
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionRefs.current.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [allSections.length]);

  async function handleSubmit() {
    if (submitting) return;
    setSubmitting(true);

    const timeSpent = Math.round((Date.now() - startTimeRef.current) / 1000);

    try {
      const res = await fetch(`/api/assignments/${assignment.id}/submit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sections_read: readCount,
          time_spent_seconds: timeSpent,
          score: Math.round((readCount / totalSections) * 100),
        }),
      });

      if (res.ok) {
        const data = await res.json();
        onSubmit({
          id: data.submission_id,
          score: data.score,
          time_spent_seconds: timeSpent,
          completed_at: new Date().toISOString(),
          answers: null,
          sections_read: readCount,
        });
      } else {
        const data = await res.json();
        alert(data.error || "Failed to submit. Please try again.");
        setSubmitting(false);
      }
    } catch {
      alert("Failed to submit. Please try again.");
      setSubmitting(false);
    }
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-10 lg:py-14">
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
        <AssignmentHeader assignment={assignment} />

        {/* Reading progress */}
        <div
          className="flex items-center gap-3 p-3 rounded-lg mb-6"
          style={{ background: "var(--color-surface-sunken)", border: "1px solid var(--color-border-subtle)" }}
        >
          <div className="flex-1">
            <div className="flex items-center justify-between mb-1.5">
              <p className="text-xs font-medium" style={{ color: "var(--color-ink-muted)" }}>
                Reading progress
              </p>
              <p className="text-xs tabular-nums" style={{ color: "var(--color-ink-faint)" }}>
                {readCount} of {totalSections} sections
              </p>
            </div>
            <div className="h-1.5 rounded-full" style={{ background: "var(--color-border-subtle)" }}>
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                  background: canSubmit ? "#10b981" : "var(--accent, #3b82f6)",
                  width: `${(readCount / totalSections) * 100}%`,
                }}
              />
            </div>
          </div>
          {canSubmit && (
            <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          )}
        </div>

        {/* Lesson content */}
        <div className="space-y-8">
          {allSections.map((section, i) => {
            const isRead = readSections.has(section.sectionKey);
            return (
              <div
                key={section.sectionKey}
                ref={(el) => {
                  if (el) sectionRefs.current.set(section.sectionKey, el);
                }}
                data-section-key={section.sectionKey}
                className="card p-6 transition-all"
                style={{
                  borderLeft: isRead
                    ? "3px solid #10b981"
                    : "3px solid var(--color-border-subtle)",
                }}
              >
                {i === 0 ||
                allSections[i - 1]?.moduleTitle !== section.moduleTitle ? (
                  <p
                    className="text-[10px] font-semibold uppercase tracking-wider mb-2"
                    style={{ color: "var(--accent, #3b82f6)" }}
                  >
                    {section.moduleTitle}
                  </p>
                ) : null}
                <h3
                  className="text-base font-bold mb-3"
                  style={{ color: "var(--color-ink)" }}
                >
                  {section.heading}
                </h3>
                <div
                  className="text-sm leading-relaxed lesson-content"
                  style={{ color: "var(--color-ink-muted)" }}
                  dangerouslySetInnerHTML={{
                    __html: section.content
                      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                      .replace(/\*(.*?)\*/g, "<em>$1</em>")
                      .replace(/\n\n/g, "</p><p class='mt-3'>")
                      .replace(/\n- /g, "</p><li class='ml-4 mt-1'>")
                      .replace(/^/, "<p>")
                      .replace(/$/, "</p>"),
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* Sticky submit footer */}
        <div
          className="sticky bottom-0 mt-6 py-4 flex items-center justify-between"
          style={{ background: "var(--color-background, white)" }}
        >
          <p className="text-xs" style={{ color: "var(--color-ink-faint)" }}>
            {canSubmit
              ? "You've read enough to submit!"
              : `Read ${threshold - readCount} more section${threshold - readCount !== 1 ? "s" : ""} to submit`}
          </p>
          <button
            onClick={handleSubmit}
            disabled={!canSubmit || submitting}
            className="text-sm font-medium px-5 py-2.5 rounded-lg transition-all disabled:opacity-40"
            style={{
              background: canSubmit ? "var(--accent, #3b82f6)" : "var(--color-surface-sunken)",
              color: canSubmit ? "white" : "var(--color-ink-faint)",
            }}
          >
            {submitting ? "Submitting..." : "Submit Lesson"}
          </button>
        </div>
      </motion.div>
    </div>
  );
}

// ─── Submission Results ──────────────────────────────────────────────────────

function SubmissionResults({
  assignment,
  submission,
  userId,
  onRetake,
}: {
  assignment: AssignmentData;
  submission: SubmissionData;
  userId: string;
  onRetake: (() => void) | undefined;
}) {
  const isQuiz = assignment.type === "quiz" || assignment.type === "practice_test";
  const questions = isQuiz ? getQuestionsByModules(assignment.module_ids) : [];
  const seed = `${userId}-${assignment.id}`;
  const quizLength = assignment.config?.quiz_length || 10;
  const orderedQuestions = seededShuffle(questions, seed).slice(0, quizLength);

  const score = submission.score;
  const answers = submission.answers || [];
  const timeSpent = submission.time_spent_seconds || 0;
  const minutes = Math.floor(timeSpent / 60);
  const seconds = timeSpent % 60;

  const correctCount = answers.filter((a) => a.correct).length;
  const totalQ = answers.length || 1;

  return (
    <div className="max-w-2xl mx-auto px-6 py-10 lg:py-14">
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
        <AssignmentHeader assignment={assignment} />

        {/* Success banner */}
        <div className="card p-8 text-center mb-6">
          <div
            className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
            style={{
              background: (score ?? 0) >= 80 ? "rgba(16, 185, 129, 0.08)" : "rgba(59, 130, 246, 0.08)",
            }}
          >
            {isQuiz ? (
              <p
                className="text-2xl font-bold tabular-nums"
                style={{ color: (score ?? 0) >= 80 ? "#059669" : "var(--color-ink)" }}
              >
                {score}%
              </p>
            ) : (
              <svg className="w-8 h-8 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            )}
          </div>

          <h2 className="text-lg font-bold mb-1" style={{ color: "var(--color-ink)" }}>
            {isQuiz ? "Quiz Submitted!" : "Lesson Completed!"}
          </h2>

          {isQuiz && (
            <p className="text-sm mb-2" style={{ color: "var(--color-ink-muted)" }}>
              {correctCount} of {totalQ} correct
              {(score ?? 0) >= 80
                ? ". Strong understanding of the material."
                : (score ?? 0) >= 50
                ? ". Getting there - review the explanations below."
                : ". Review the concepts and try again."}
            </p>
          )}

          {!isQuiz && submission.sections_read != null && (
            <p className="text-sm mb-2" style={{ color: "var(--color-ink-muted)" }}>
              {submission.sections_read} sections read
            </p>
          )}

          <p className="text-xs" style={{ color: "var(--color-ink-faint)" }}>
            Time spent: {minutes}m {seconds}s
            {" "}&middot;{" "}
            Submitted {new Date(submission.completed_at).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              hour: "numeric",
              minute: "2-digit",
            })}
          </p>

          <div className="flex items-center justify-center gap-3 mt-5">
            <Link
              href="/assignments"
              className="text-sm font-medium px-5 py-2.5 rounded-lg transition-all"
              style={{
                border: "1px solid var(--color-border-subtle)",
                color: "var(--color-ink-muted)",
              }}
            >
              Back to Assignments
            </Link>
            {onRetake && (
              <button
                onClick={onRetake}
                className="text-sm font-medium px-5 py-2.5 rounded-lg transition-all"
                style={{ background: "var(--accent, #3b82f6)", color: "white" }}
              >
                Retake
              </button>
            )}
          </div>
        </div>

        {/* Quiz answer review */}
        {isQuiz && answers.length > 0 && orderedQuestions.length > 0 && (
          <div>
            <h3
              className="text-xs font-medium uppercase tracking-wider mb-3"
              style={{ color: "var(--color-ink-faint)" }}
            >
              Answer Review
            </h3>
            <div className="space-y-3">
              {answers.map((answer, idx) => {
                const q = orderedQuestions[idx]?.question;
                if (!q) return null;

                return (
                  <div key={idx} className="card p-5">
                    <div className="flex items-start gap-3 mb-3">
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{
                          background: answer.correct
                            ? "rgba(16, 185, 129, 0.1)"
                            : "rgba(239, 68, 68, 0.1)",
                        }}
                      >
                        {answer.correct ? (
                          <svg className="w-3.5 h-3.5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <svg className="w-3.5 h-3.5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        )}
                      </div>
                      <div className="flex-1">
                        <p className="text-[11px] font-medium mb-1" style={{ color: "var(--color-ink-faint)" }}>
                          Question {idx + 1}
                        </p>
                        <p className="text-sm font-medium" style={{ color: "var(--color-ink)" }}>
                          {q.question}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-1.5 mb-3 ml-9">
                      {q.options.map((opt, i) => {
                        const isCorrect = i === q.correctIndex;
                        const isSelected = i === answer.selectedIndex;
                        return (
                          <div
                            key={i}
                            className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm"
                            style={{
                              background: isCorrect
                                ? "rgba(16, 185, 129, 0.06)"
                                : isSelected && !isCorrect
                                ? "rgba(239, 68, 68, 0.06)"
                                : "transparent",
                              border: isCorrect
                                ? "1px solid rgba(16, 185, 129, 0.15)"
                                : isSelected && !isCorrect
                                ? "1px solid rgba(239, 68, 68, 0.15)"
                                : "1px solid transparent",
                              color: isCorrect
                                ? "#059669"
                                : isSelected && !isCorrect
                                ? "#dc2626"
                                : "var(--color-ink-muted)",
                            }}
                          >
                            <span className="text-[11px] font-bold w-4">
                              {String.fromCharCode(65 + i)}
                            </span>
                            <span className="flex-1">{opt}</span>
                            {isCorrect && (
                              <svg className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                          </div>
                        );
                      })}
                    </div>

                    <div
                      className="p-3 rounded-lg ml-9"
                      style={{
                        background: "var(--color-surface-sunken)",
                        border: "1px solid var(--color-border-subtle)",
                      }}
                    >
                      <p className="text-xs font-semibold mb-1" style={{ color: "var(--color-ink-faint)" }}>
                        Explanation
                      </p>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--color-ink-muted)" }}>
                        {q.explanation}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
