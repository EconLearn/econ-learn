"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import { useAuth } from "@/components/providers/AuthProvider";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { microCourse, macroCourse } from "@/data/courses";
import { questionBank, type QuestionBankEntry } from "@/data/question-bank";

/* ─── Types ─── */

interface Classroom {
  id: string;
  name: string;
  school_name?: string;
  classroom_members?: { count: number }[];
}

type Step = 1 | 2 | 3;

/* ─── Constants ─── */

const STEP_LABELS = ["Select Questions", "Settings", "Review & Create"] as const;

const TIME_OPTIONS = [15, 30, 45, 60] as const;

const DATE_PRESETS = [
  { label: "Tomorrow", key: "tomorrow" },
  { label: "Friday", key: "friday" },
  { label: "Next Week", key: "next_week" },
] as const;

/* ─── Helpers ─── */

function getDatePreset(preset: string): string {
  const today = new Date();
  let target: Date;

  if (preset === "tomorrow") {
    target = new Date(today);
    target.setDate(today.getDate() + 1);
  } else if (preset === "friday") {
    target = new Date(today);
    const day = today.getDay();
    const daysUntilFriday = day <= 5 ? 5 - day : 7 - day + 5;
    target.setDate(today.getDate() + (daysUntilFriday === 0 ? 7 : daysUntilFriday));
  } else {
    target = new Date(today);
    const day = today.getDay();
    const daysUntilMonday = day === 0 ? 1 : 8 - day;
    target.setDate(today.getDate() + daysUntilMonday);
  }

  return target.toISOString().split("T")[0];
}

function formatDate(dateStr: string): string {
  if (!dateStr) return "";
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
}

/* ─── Animation variants ─── */

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 80 : -80,
    opacity: 0,
  }),
};

/* ═══════════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════════ */

export default function QuickExamPage() {
  const { user } = useAuth();
  const router = useRouter();

  /* ── Step state ── */
  const [step, setStep] = useState<Step>(1);
  const [direction, setDirection] = useState(0);

  /* ── Step 1: Questions ── */
  const [selectedBankQuestionIds, setSelectedBankQuestionIds] = useState<number[]>([]);
  const [expandedModule, setExpandedModule] = useState<string | null>(null);

  /* ── Step 2: Settings ── */
  const [classrooms, setClassrooms] = useState<Classroom[]>([]);
  const [classroomsLoading, setClassroomsLoading] = useState(true);
  const [selectedClassroom, setSelectedClassroom] = useState("");
  const [title, setTitle] = useState("");
  const [titleTouched, setTitleTouched] = useState(false);
  const [examTimeLimit, setExamTimeLimit] = useState<number>(45);
  const [lockdown, setLockdown] = useState(true);
  const [dueDate, setDueDate] = useState("");

  /* ── Step 3: Submit ── */
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");
  const [createdAssignmentId, setCreatedAssignmentId] = useState<string | null>(null);
  const [joinCode, setJoinCode] = useState<string | null>(null);

  /* ── Derived data ── */
  const allModules = useMemo(
    () => [...microCourse.modules, ...macroCourse.modules],
    []
  );

  const bankQuestionsByModule = useMemo(() => {
    const map: Record<string, Array<QuestionBankEntry & { bankIdx: number }>> = {};
    for (let i = 0; i < questionBank.length; i++) {
      const entry = questionBank[i];
      if (!map[entry.moduleId]) map[entry.moduleId] = [];
      map[entry.moduleId].push({ ...entry, bankIdx: i });
    }
    return map;
  }, []);

  const selectedModuleIds = useMemo(() => {
    const ids = new Set<string>();
    for (const idx of selectedBankQuestionIds) {
      if (idx >= 0 && idx < questionBank.length) {
        ids.add(questionBank[idx].moduleId);
      }
    }
    return Array.from(ids);
  }, [selectedBankQuestionIds]);

  const selectedModuleNames = useMemo(
    () =>
      selectedModuleIds
        .map((id) => allModules.find((m) => m.id === id)?.title)
        .filter(Boolean),
    [selectedModuleIds, allModules]
  );

  /* ── Auto-generate title ── */
  useEffect(() => {
    if (titleTouched) return;
    if (selectedModuleNames.length === 0) {
      setTitle("");
      return;
    }
    const today = new Date().toLocaleDateString("en-US", { month: "short", day: "numeric" });
    if (selectedModuleNames.length === 1) {
      setTitle(`${selectedModuleNames[0]} Exam - ${today}`);
    } else if (selectedModuleNames.length <= 3) {
      setTitle(`${selectedModuleNames.join(", ")} Exam - ${today}`);
    } else {
      setTitle(`${selectedModuleNames.length} Module Exam - ${today}`);
    }
  }, [selectedModuleNames, titleTouched]);

  /* ── Fetch classrooms ── */
  useEffect(() => {
    async function fetchClassrooms() {
      try {
        const res = await fetch("/api/classrooms");
        if (res.ok) {
          const data = await res.json();
          setClassrooms(data.classrooms || []);
          if (data.classrooms?.length === 1) {
            setSelectedClassroom(data.classrooms[0].id);
          }
        }
      } catch {
        /* silent */
      } finally {
        setClassroomsLoading(false);
      }
    }
    fetchClassrooms();
  }, []);

  /* ── Question toggles ── */
  const toggleBankQuestion = useCallback((idx: number) => {
    setSelectedBankQuestionIds((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  }, []);

  const toggleAllBankForModule = useCallback(
    (moduleId: string) => {
      const moduleQs = bankQuestionsByModule[moduleId] || [];
      const moduleIdxs = moduleQs.map((e) => e.bankIdx);
      const allSelected = moduleIdxs.every((idx) => selectedBankQuestionIds.includes(idx));
      if (allSelected) {
        setSelectedBankQuestionIds((prev) => prev.filter((idx) => !moduleIdxs.includes(idx)));
      } else {
        setSelectedBankQuestionIds((prev) => Array.from(new Set([...prev, ...moduleIdxs])));
      }
    },
    [bankQuestionsByModule, selectedBankQuestionIds]
  );

  /* ── Navigation ── */
  const goTo = (target: Step) => {
    setDirection(target > step ? 1 : -1);
    setStep(target);
  };

  const canProceedToStep2 = selectedBankQuestionIds.length > 0;
  const canProceedToStep3 = canProceedToStep2 && selectedClassroom && title.trim().length > 0;

  /* ── Submit ── */
  const handleCreate = async () => {
    if (!canProceedToStep3) return;
    setStatus("loading");
    setError("");

    try {
      const body = {
        classroom_id: selectedClassroom,
        title: title.trim(),
        type: "exam",
        module_ids: selectedModuleIds,
        due_date: dueDate || null,
        config: {
          bank_question_ids: selectedBankQuestionIds,
          custom_question_ids: [],
          lockdown,
          time_limit_minutes: examTimeLimit,
          shuffle_questions: true,
          shuffle_options: true,
          show_results: false,
        },
        status: "published",
        publish_at: null,
      };

      const res = await fetch("/api/assignments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setError(data.error || "Could not create exam.");
        return;
      }

      setCreatedAssignmentId(data.assignment?.id || null);
      setJoinCode(data.assignment?.join_code || data.join_code || null);
      setStatus("success");
    } catch {
      setStatus("error");
      setError("Something went wrong. Try again.");
    }
  };

  /* ── Today string for min date ── */
  const today = new Date().toISOString().split("T")[0];

  /* ═══ RENDER ═══ */
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      {/* ── Header ── */}
      <div className="mb-6">
        <nav className="module-breadcrumb mb-4">
          <Link href="/teacher">Teacher Dashboard</Link>
          <span>/</span>
          <Link href="/teacher/assignments">Assignments</Link>
          <span>/</span>
          <span className="current">Quick Exam</span>
        </nav>
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold"
          style={{ color: "var(--color-ink)" }}
        >
          Quick Exam Creator
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="text-sm mt-1"
          style={{ color: "var(--color-ink-muted)" }}
        >
          Create a formal exam in 3 quick steps.
        </motion.p>
      </div>

      {/* ── Step Indicator ── */}
      <div className="flex items-center gap-1 mb-8">
        {STEP_LABELS.map((label, i) => {
          const stepNum = (i + 1) as Step;
          const isActive = step === stepNum;
          const isCompleted = step > stepNum;
          return (
            <div key={label} className="flex items-center flex-1">
              <button
                type="button"
                onClick={() => {
                  if (stepNum === 1) goTo(1);
                  else if (stepNum === 2 && canProceedToStep2) goTo(2);
                  else if (stepNum === 3 && canProceedToStep3) goTo(3);
                }}
                className="flex items-center gap-2 group"
                disabled={
                  (stepNum === 2 && !canProceedToStep2) ||
                  (stepNum === 3 && !canProceedToStep3)
                }
              >
                <span
                  className="flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold transition-all"
                  style={{
                    background: isActive
                      ? "var(--color-ink)"
                      : isCompleted
                        ? "#3B82F6"
                        : "var(--color-surface-sunken)",
                    color: isActive || isCompleted ? "white" : "var(--color-ink-faint)",
                  }}
                >
                  {isCompleted ? (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    stepNum
                  )}
                </span>
                <span
                  className="text-xs font-medium hidden sm:inline"
                  style={{
                    color: isActive ? "var(--color-ink)" : "var(--color-ink-faint)",
                  }}
                >
                  {label}
                </span>
              </button>
              {i < STEP_LABELS.length - 1 && (
                <div
                  className="flex-1 h-px mx-3"
                  style={{
                    background: step > stepNum ? "#3B82F6" : "var(--color-border)",
                  }}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* ── Running count (always visible) ── */}
      {step !== 3 && (
        <div
          className="flex items-center justify-between p-3 rounded-xl mb-6"
          style={{
            background: selectedBankQuestionIds.length > 0 ? "rgba(59,130,246,0.06)" : "var(--color-surface-sunken)",
            border: selectedBankQuestionIds.length > 0 ? "1px solid rgba(59,130,246,0.2)" : "1px solid var(--color-border-subtle)",
          }}
        >
          <span className="text-sm font-medium" style={{ color: "var(--color-ink)" }}>
            {selectedBankQuestionIds.length} question{selectedBankQuestionIds.length !== 1 ? "s" : ""} selected
            {selectedModuleIds.length > 0 && (
              <span className="text-xs ml-2" style={{ color: "var(--color-ink-faint)" }}>
                from {selectedModuleIds.length} module{selectedModuleIds.length !== 1 ? "s" : ""}
              </span>
            )}
          </span>
          {selectedBankQuestionIds.length > 0 && (
            <button
              type="button"
              onClick={() => setSelectedBankQuestionIds([])}
              className="text-xs font-medium text-red-500 hover:text-red-600"
            >
              Clear All
            </button>
          )}
        </div>
      )}

      {/* ── Step Content ── */}
      <AnimatePresence mode="wait" custom={direction}>
        {/* ═══ STEP 1: SELECT QUESTIONS ═══ */}
        {step === 1 && (
          <motion.div
            key="step1"
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Micro section */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#3B82F6" }} />
                <h3 className="text-sm font-semibold" style={{ color: "var(--color-ink)" }}>
                  Microeconomics
                </h3>
                <span className="text-xs" style={{ color: "var(--color-ink-faint)" }}>
                  {microCourse.modules.length} modules
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {microCourse.modules.map((mod) => {
                  const moduleQs = bankQuestionsByModule[mod.id] || [];
                  const selectedCount = moduleQs.filter((e) =>
                    selectedBankQuestionIds.includes(e.bankIdx)
                  ).length;
                  const isExpanded = expandedModule === mod.id;

                  return (
                    <ModuleCard
                      key={mod.id}
                      moduleId={mod.id}
                      title={mod.title}
                      questionCount={moduleQs.length}
                      selectedCount={selectedCount}
                      isExpanded={isExpanded}
                      accentColor="#3B82F6"
                      questions={moduleQs}
                      selectedBankQuestionIds={selectedBankQuestionIds}
                      onToggleExpand={() =>
                        setExpandedModule(isExpanded ? null : mod.id)
                      }
                      onToggleQuestion={toggleBankQuestion}
                      onToggleAll={() => toggleAllBankForModule(mod.id)}
                    />
                  );
                })}
              </div>
            </div>

            {/* Macro section */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#8B5CF6" }} />
                <h3 className="text-sm font-semibold" style={{ color: "var(--color-ink)" }}>
                  Macroeconomics
                </h3>
                <span className="text-xs" style={{ color: "var(--color-ink-faint)" }}>
                  {macroCourse.modules.length} modules
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {macroCourse.modules.map((mod) => {
                  const moduleQs = bankQuestionsByModule[mod.id] || [];
                  const selectedCount = moduleQs.filter((e) =>
                    selectedBankQuestionIds.includes(e.bankIdx)
                  ).length;
                  const isExpanded = expandedModule === mod.id;

                  return (
                    <ModuleCard
                      key={mod.id}
                      moduleId={mod.id}
                      title={mod.title}
                      questionCount={moduleQs.length}
                      selectedCount={selectedCount}
                      isExpanded={isExpanded}
                      accentColor="#8B5CF6"
                      questions={moduleQs}
                      selectedBankQuestionIds={selectedBankQuestionIds}
                      onToggleExpand={() =>
                        setExpandedModule(isExpanded ? null : mod.id)
                      }
                      onToggleQuestion={toggleBankQuestion}
                      onToggleAll={() => toggleAllBankForModule(mod.id)}
                    />
                  );
                })}
              </div>
            </div>

            {/* Next button */}
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => canProceedToStep2 && goTo(2)}
                disabled={!canProceedToStep2}
                className="btn-primary py-3 px-8 text-sm font-semibold disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Next: Settings
                <svg className="w-4 h-4 ml-2 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </motion.div>
        )}

        {/* ═══ STEP 2: SETTINGS ═══ */}
        {step === 2 && (
          <motion.div
            key="step2"
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div
              className="rounded-2xl p-6 space-y-6"
              style={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
              }}
            >
              {/* Classroom */}
              <div>
                <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--color-ink)" }}>
                  Classroom <span className="text-red-400">*</span>
                </label>
                {classroomsLoading ? (
                  <div
                    className="w-full px-4 py-3 rounded-xl text-sm"
                    style={{
                      background: "var(--color-surface-sunken)",
                      border: "1px solid var(--color-border)",
                      color: "var(--color-ink-faint)",
                    }}
                  >
                    Loading classrooms...
                  </div>
                ) : classrooms.length === 0 ? (
                  <div
                    className="w-full px-4 py-3 rounded-xl text-sm"
                    style={{
                      background: "var(--color-surface-sunken)",
                      border: "1px solid var(--color-border)",
                      color: "var(--color-ink-faint)",
                    }}
                  >
                    No classrooms found.{" "}
                    <Link href="/teacher/classrooms" className="text-blue-500 hover:underline">
                      Create one first
                    </Link>
                  </div>
                ) : (
                  <select
                    value={selectedClassroom}
                    onChange={(e) => setSelectedClassroom(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                    style={{
                      color: "var(--color-ink)",
                      background: "var(--color-surface-sunken)",
                      border: "1px solid var(--color-border)",
                    }}
                  >
                    <option value="">Select a classroom...</option>
                    {classrooms.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                )}
              </div>

              {/* Title */}
              <div>
                <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--color-ink)" }}>
                  Exam Title <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                    setTitleTouched(true);
                  }}
                  placeholder="e.g. Unit 1 Exam"
                  maxLength={100}
                  className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                  style={{
                    color: "var(--color-ink)",
                    background: "var(--color-surface-sunken)",
                    border: "1px solid var(--color-border)",
                  }}
                />
                {!titleTouched && title && (
                  <p className="text-[11px] mt-1" style={{ color: "var(--color-ink-faint)" }}>
                    Auto-generated. Edit to customize.
                  </p>
                )}
              </div>

              {/* Time Limit */}
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: "var(--color-ink)" }}>
                  Time Limit
                </label>
                <div className="flex flex-wrap gap-2">
                  {TIME_OPTIONS.map((mins) => (
                    <button
                      key={mins}
                      type="button"
                      onClick={() => setExamTimeLimit(mins)}
                      className="px-4 py-2 rounded-xl text-sm font-medium transition-all"
                      style={{
                        background: examTimeLimit === mins ? "var(--color-ink)" : "var(--color-surface-sunken)",
                        color: examTimeLimit === mins ? "white" : "var(--color-ink-muted)",
                        border: examTimeLimit === mins ? "1px solid var(--color-ink)" : "1px solid var(--color-border)",
                      }}
                    >
                      {mins} min
                    </button>
                  ))}
                </div>
              </div>

              {/* Lockdown Toggle */}
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-medium" style={{ color: "var(--color-ink)" }}>
                    Lockdown Browser
                  </p>
                  <p className="text-xs" style={{ color: "var(--color-ink-faint)" }}>
                    Enforces fullscreen and detects tab switches
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setLockdown(!lockdown)}
                  className="relative flex-shrink-0 w-11 h-6 rounded-full transition-colors"
                  style={{ background: lockdown ? "#3B82F6" : "var(--color-border)" }}
                >
                  <span
                    className="absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition-transform shadow-sm"
                    style={{ transform: lockdown ? "translateX(20px)" : "translateX(0)" }}
                  />
                </button>
              </div>

              {/* Due Date */}
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: "var(--color-ink)" }}>
                  Due Date
                </label>
                <div className="flex flex-wrap gap-2 mb-3">
                  {DATE_PRESETS.map((preset) => (
                    <button
                      key={preset.key}
                      type="button"
                      onClick={() => setDueDate(getDatePreset(preset.key))}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium transition-all"
                      style={{
                        background:
                          dueDate === getDatePreset(preset.key)
                            ? "var(--color-ink)"
                            : "var(--color-surface-sunken)",
                        color:
                          dueDate === getDatePreset(preset.key) ? "white" : "var(--color-ink-muted)",
                      }}
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
                <input
                  type="date"
                  value={dueDate}
                  min={today}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                  style={{
                    color: "var(--color-ink)",
                    background: "var(--color-surface-sunken)",
                    border: "1px solid var(--color-border)",
                  }}
                />
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between mt-6">
              <button
                type="button"
                onClick={() => goTo(1)}
                className="py-3 px-6 text-sm font-medium rounded-xl transition-all"
                style={{ color: "var(--color-ink-muted)", background: "var(--color-surface-sunken)" }}
              >
                <svg className="w-4 h-4 mr-2 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                </svg>
                Back
              </button>
              <button
                type="button"
                onClick={() => canProceedToStep3 && goTo(3)}
                disabled={!canProceedToStep3}
                className="btn-primary py-3 px-8 text-sm font-semibold disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Next: Review
                <svg className="w-4 h-4 ml-2 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </motion.div>
        )}

        {/* ═══ STEP 3: REVIEW & CREATE ═══ */}
        {step === 3 && (
          <motion.div
            key="step3"
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {status === "success" ? (
              /* ── Success State ── */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-2xl p-8 text-center"
                style={{
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                }}
              >
                <div
                  className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center"
                  style={{ background: "rgba(22,163,74,0.08)" }}
                >
                  <svg className="w-8 h-8" style={{ color: "#16A34A" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-1" style={{ color: "var(--color-ink)" }}>
                  Exam Created!
                </h3>
                <p className="text-sm mb-6" style={{ color: "var(--color-ink-muted)" }}>
                  Your exam has been published and is ready for students.
                </p>

                {joinCode && (
                  <div
                    className="inline-block px-6 py-3 rounded-xl mb-6"
                    style={{ background: "var(--color-surface-sunken)", border: "1px solid var(--color-border)" }}
                  >
                    <p className="text-[11px] uppercase tracking-wider font-semibold mb-1" style={{ color: "var(--color-ink-faint)" }}>
                      Join Code
                    </p>
                    <p className="text-2xl font-mono font-bold tracking-widest" style={{ color: "var(--color-ink)" }}>
                      {joinCode}
                    </p>
                  </div>
                )}

                <div className="flex items-center justify-center gap-3">
                  {createdAssignmentId && (
                    <Link
                      href={`/teacher/exam/${createdAssignmentId}`}
                      className="btn-primary py-2.5 px-6 text-sm"
                    >
                      Open Exam Monitor
                    </Link>
                  )}
                  <Link
                    href={`/teacher/classrooms/${selectedClassroom}`}
                    className="py-2.5 px-6 text-sm font-medium rounded-xl transition-all"
                    style={{ color: "var(--color-ink-muted)", background: "var(--color-surface-sunken)" }}
                  >
                    Go to Classroom
                  </Link>
                </div>
              </motion.div>
            ) : (
              /* ── Review State ── */
              <>
                <div
                  className="rounded-2xl p-6 space-y-5"
                  style={{
                    background: "var(--color-surface)",
                    border: "1px solid var(--color-border)",
                  }}
                >
                  <h3 className="text-lg font-bold" style={{ color: "var(--color-ink)" }}>
                    Review Your Exam
                  </h3>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <ReviewStat
                      label="Questions"
                      value={String(selectedBankQuestionIds.length)}
                      color="#3B82F6"
                    />
                    <ReviewStat
                      label="Modules"
                      value={String(selectedModuleIds.length)}
                      color="#8B5CF6"
                    />
                    <ReviewStat
                      label="Time Limit"
                      value={`${examTimeLimit} min`}
                      color="#D97706"
                    />
                    <ReviewStat
                      label="Lockdown"
                      value={lockdown ? "On" : "Off"}
                      color={lockdown ? "#16A34A" : "#6B7280"}
                    />
                  </div>

                  <div className="space-y-3">
                    <ReviewRow label="Title" value={title} />
                    <ReviewRow
                      label="Classroom"
                      value={classrooms.find((c) => c.id === selectedClassroom)?.name || "--"}
                    />
                    <ReviewRow
                      label="Due Date"
                      value={dueDate ? formatDate(dueDate) : "No due date"}
                    />
                    <ReviewRow
                      label="Modules"
                      value={selectedModuleNames.join(", ") || "--"}
                    />
                  </div>

                  {error && (
                    <div
                      className="p-3 rounded-xl text-xs"
                      style={{ background: "rgba(239,68,68,0.06)", color: "#dc2626", border: "1px solid rgba(239,68,68,0.2)" }}
                    >
                      {error}
                    </div>
                  )}
                </div>

                {/* Navigation */}
                <div className="flex justify-between mt-6">
                  <button
                    type="button"
                    onClick={() => goTo(2)}
                    className="py-3 px-6 text-sm font-medium rounded-xl transition-all"
                    style={{ color: "var(--color-ink-muted)", background: "var(--color-surface-sunken)" }}
                  >
                    <svg className="w-4 h-4 mr-2 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                    </svg>
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={handleCreate}
                    disabled={status === "loading"}
                    className="btn-primary py-3 px-8 text-sm font-bold disabled:opacity-60"
                  >
                    {status === "loading" ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Creating...
                      </span>
                    ) : (
                      <>
                        Create Exam
                        <svg className="w-4 h-4 ml-2 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   SUB-COMPONENTS
   ═══════════════════════════════════════════════ */

function ModuleCard({
  moduleId,
  title,
  questionCount,
  selectedCount,
  isExpanded,
  accentColor,
  questions,
  selectedBankQuestionIds,
  onToggleExpand,
  onToggleQuestion,
  onToggleAll,
}: {
  moduleId: string;
  title: string;
  questionCount: number;
  selectedCount: number;
  isExpanded: boolean;
  accentColor: string;
  questions: Array<QuestionBankEntry & { bankIdx: number }>;
  selectedBankQuestionIds: number[];
  onToggleExpand: () => void;
  onToggleQuestion: (idx: number) => void;
  onToggleAll: () => void;
}) {
  const allSelected = questionCount > 0 && selectedCount === questionCount;

  return (
    <div
      className="rounded-xl transition-all overflow-hidden"
      style={{
        background: selectedCount > 0 ? `${accentColor}08` : "var(--color-surface)",
        border: selectedCount > 0 ? `1.5px solid ${accentColor}40` : "1.5px solid var(--color-border-subtle)",
      }}
    >
      {/* Card header */}
      <button
        type="button"
        onClick={onToggleExpand}
        className="w-full text-left p-3 flex items-center justify-between"
      >
        <div className="min-w-0 flex-1">
          <p className="text-xs font-semibold truncate" style={{ color: "var(--color-ink)" }}>
            {title}
          </p>
          <p className="text-[11px]" style={{ color: "var(--color-ink-faint)" }}>
            {questionCount} question{questionCount !== 1 ? "s" : ""}
            {selectedCount > 0 && (
              <span style={{ color: accentColor }}> ({selectedCount} selected)</span>
            )}
          </p>
        </div>
        <svg
          className="w-4 h-4 transition-transform flex-shrink-0"
          style={{
            color: "var(--color-ink-faint)",
            transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
          }}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Expanded: question list */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <div className="px-3 pb-3 space-y-1.5">
              {/* Select All button */}
              <button
                type="button"
                onClick={onToggleAll}
                className="w-full text-left px-2 py-1.5 rounded-lg text-xs font-medium transition-colors hover:bg-blue-50"
                style={{ color: accentColor }}
              >
                {allSelected ? "Deselect All" : "Select All"}
              </button>

              {/* Questions */}
              <div className="max-h-64 overflow-y-auto space-y-1">
                {questions.map((entry) => {
                  const isSelected = selectedBankQuestionIds.includes(entry.bankIdx);
                  return (
                    <button
                      key={entry.bankIdx}
                      type="button"
                      onClick={() => onToggleQuestion(entry.bankIdx)}
                      className="w-full text-left p-2 rounded-lg transition-all"
                      style={{
                        background: isSelected ? `${accentColor}0A` : "transparent",
                      }}
                    >
                      <div className="flex items-start gap-2">
                        <div
                          className="mt-0.5 flex-shrink-0 w-4 h-4 rounded flex items-center justify-center transition-all"
                          style={{
                            background: isSelected ? accentColor : "transparent",
                            border: isSelected ? "none" : "1.5px solid var(--color-ink-faint)",
                          }}
                        >
                          {isSelected && (
                            <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                        <p
                          className="text-[11px] leading-snug line-clamp-2"
                          style={{ color: isSelected ? accentColor : "var(--color-ink-muted)" }}
                        >
                          {entry.question.question}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ReviewStat({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div
      className="p-3 rounded-xl text-center"
      style={{ background: `${color}08`, border: `1px solid ${color}20` }}
    >
      <p className="text-lg font-bold" style={{ color }}>{value}</p>
      <p className="text-[11px] font-medium" style={{ color: "var(--color-ink-faint)" }}>{label}</p>
    </div>
  );
}

function ReviewRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4 py-2" style={{ borderBottom: "1px solid var(--color-border-subtle)" }}>
      <span className="text-xs font-medium flex-shrink-0" style={{ color: "var(--color-ink-faint)" }}>{label}</span>
      <span className="text-xs text-right" style={{ color: "var(--color-ink)" }}>{value}</span>
    </div>
  );
}
