"use client";

import { useState, useEffect, Suspense, useMemo, useCallback } from "react";
import { useAuth } from "@/components/providers/AuthProvider";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { microCourse, macroCourse } from "@/data/courses";
import type { TeacherQuestion } from "@/lib/types/teacher";

type AssignmentType = "lesson" | "quiz" | "custom_quiz" | "exam";

interface Classroom {
  id: string;
  name: string;
  school_name?: string;
  classroom_members?: { count: number }[];
}

export default function NewAssignmentPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-gray-300 border-t-gray-900 rounded-full animate-spin" />
        </div>
      }
    >
      <NewAssignmentContent />
    </Suspense>
  );
}

/* ────────────────────────────────────────────── */
/*  MAIN CONTENT                                  */
/* ────────────────────────────────────────────── */

function NewAssignmentContent() {
  const { user } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const preselectedClassroom = searchParams.get("classroom");

  // ── Form state ──
  const [title, setTitle] = useState("");
  const [type, setType] = useState<AssignmentType | null>(null);
  const [selectedClassroom, setSelectedClassroom] = useState(preselectedClassroom || "");
  const [selectedModules, setSelectedModules] = useState<string[]>([]);
  const [quizLength, setQuizLength] = useState(10);
  const [timeLimit, setTimeLimit] = useState<number | null>(null);
  const [dueDate, setDueDate] = useState("");
  const [availableFrom, setAvailableFrom] = useState("");

  // ── Exam-specific state ──
  const [teacherQuestions, setTeacherQuestions] = useState<TeacherQuestion[]>([]);
  const [questionsLoading, setQuestionsLoading] = useState(false);
  const [selectedQuestionIds, setSelectedQuestionIds] = useState<string[]>([]);
  const [examTimeLimit, setExamTimeLimit] = useState<number>(45);
  const [lockdown, setLockdown] = useState(true);
  const [shuffleQuestions, setShuffleQuestions] = useState(true);
  const [shuffleOptions, setShuffleOptions] = useState(true);
  const [showResults, setShowResults] = useState(false);

  // ── UI state ──
  const [classrooms, setClassrooms] = useState<Classroom[]>([]);
  const [classroomsLoading, setClassroomsLoading] = useState(true);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [error, setError] = useState("");

  // ── Fetch classrooms ──
  useEffect(() => {
    async function fetchClassrooms() {
      try {
        const res = await fetch("/api/classrooms");
        if (res.ok) {
          const data = await res.json();
          setClassrooms(data.classrooms || []);
          // Auto-select if only one classroom exists
          if (!preselectedClassroom && data.classrooms?.length === 1) {
            setSelectedClassroom(data.classrooms[0].id);
          }
        }
      } catch {
        // Silently fail — the dropdown will just be empty
      } finally {
        setClassroomsLoading(false);
      }
    }
    fetchClassrooms();
  }, [preselectedClassroom]);

  // ── Fetch teacher questions when exam type is selected ──
  useEffect(() => {
    if (type !== "exam") return;
    setQuestionsLoading(true);
    async function fetchQuestions() {
      try {
        const res = await fetch("/api/teacher/questions");
        if (res.ok) {
          const data = await res.json();
          setTeacherQuestions(data.questions || []);
        }
      } catch {
        // fail silently
      } finally {
        setQuestionsLoading(false);
      }
    }
    fetchQuestions();
  }, [type]);

  // ── Module helpers ──
  const microModules = microCourse.modules;
  const macroModules = macroCourse.modules;

  const toggleModule = (moduleId: string) => {
    setSelectedModules((prev) =>
      prev.includes(moduleId) ? prev.filter((id) => id !== moduleId) : [...prev, moduleId]
    );
  };

  const selectAllMicro = () => {
    const microIds = microModules.map((m) => m.id);
    const allSelected = microIds.every((id) => selectedModules.includes(id));
    if (allSelected) {
      setSelectedModules((prev) => prev.filter((id) => !microIds.includes(id)));
    } else {
      setSelectedModules((prev) => Array.from(new Set([...prev, ...microIds])));
    }
  };

  const selectAllMacro = () => {
    const macroIds = macroModules.map((m) => m.id);
    const allSelected = macroIds.every((id) => selectedModules.includes(id));
    if (allSelected) {
      setSelectedModules((prev) => prev.filter((id) => !macroIds.includes(id)));
    } else {
      setSelectedModules((prev) => Array.from(new Set([...prev, ...macroIds])));
    }
  };

  // ── Group questions by module ──
  const questionsByModule = useMemo(() => {
    const map: Record<string, TeacherQuestion[]> = {};
    for (const q of teacherQuestions) {
      if (!map[q.module_id]) map[q.module_id] = [];
      map[q.module_id].push(q);
    }
    return map;
  }, [teacherQuestions]);

  const toggleQuestion = useCallback((id: string) => {
    setSelectedQuestionIds((prev) =>
      prev.includes(id) ? prev.filter((qid) => qid !== id) : [...prev, id]
    );
  }, []);

  const toggleAllForModule = useCallback((moduleId: string) => {
    const moduleQs = questionsByModule[moduleId] || [];
    const moduleQIds = moduleQs.map((q) => q.id);
    const allSelected = moduleQIds.every((id) => selectedQuestionIds.includes(id));
    if (allSelected) {
      setSelectedQuestionIds((prev) => prev.filter((id) => !moduleQIds.includes(id)));
    } else {
      setSelectedQuestionIds((prev) => Array.from(new Set([...prev, ...moduleQIds])));
    }
  }, [questionsByModule, selectedQuestionIds]);

  // ── Date presets ──
  const setDatePreset = (preset: "tomorrow" | "friday" | "next_week") => {
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

    setDueDate(target.toISOString().split("T")[0]);
  };

  // ── Validation ──
  const canSubmit =
    title.trim().length > 0 &&
    type !== null &&
    type !== "custom_quiz" &&
    selectedClassroom &&
    (type === "exam" ? selectedQuestionIds.length > 0 : selectedModules.length > 0) &&
    (type === "exam" ? examTimeLimit > 0 : true) &&
    status !== "loading";

  // ── Submit ──
  const handleSubmit = async () => {
    if (!canSubmit) return;

    setStatus("loading");
    setError("");

    try {
      let body: Record<string, unknown>;

      if (type === "exam") {
        // Gather unique module_ids from the selected questions
        const examModuleIds = Array.from(
          new Set(
            teacherQuestions
              .filter((q) => selectedQuestionIds.includes(q.id))
              .map((q) => q.module_id)
          )
        );

        body = {
          classroom_id: selectedClassroom,
          title: title.trim(),
          type: "exam",
          module_ids: examModuleIds,
          due_date: dueDate || null,
          config: {
            available_from: availableFrom || undefined,
            question_ids: selectedQuestionIds,
            lockdown,
            time_limit_minutes: examTimeLimit,
            shuffle_questions: shuffleQuestions,
            shuffle_options: shuffleOptions,
            show_results: showResults,
          },
        };
      } else {
        body = {
          classroom_id: selectedClassroom,
          title: title.trim(),
          type: type === "quiz" ? "quiz" : "lesson",
          module_ids: selectedModules,
          due_date: dueDate || null,
          config: {
            available_from: availableFrom || undefined,
            quiz_length: type === "quiz" ? quizLength : undefined,
            time_limit_minutes: type === "quiz" ? timeLimit : undefined,
          },
        };
      }

      const res = await fetch("/api/assignments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setError(data.error || "Could not create assignment.");
        return;
      }

      router.push(`/teacher/classrooms/${selectedClassroom}`);
    } catch {
      setStatus("error");
      setError("Something went wrong. Try again.");
    }
  };

  // ── Selected module names for preview ──
  const allModules = useMemo(
    () => [...microModules, ...macroModules],
    [microModules, macroModules]
  );

  const selectedModuleNames = useMemo(
    () => selectedModules.map((id) => allModules.find((m) => m.id === id)?.title).filter(Boolean),
    [selectedModules, allModules]
  );

  const selectedClassroomName = classrooms.find((c) => c.id === selectedClassroom)?.name;

  const typeLabel =
    type === "lesson"
      ? "Module Lesson"
      : type === "quiz"
        ? "Practice Quiz"
        : type === "custom_quiz"
          ? "Custom Quiz"
          : type === "exam"
            ? "Formal Exam"
            : null;

  // ── Minimum date (today) ──
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* ── HEADER ── */}
      <div className="mb-8">
        <nav className="module-breadcrumb mb-4">
          <Link href="/teacher">Teacher Dashboard</Link>
          <span>/</span>
          <span className="current">Create Assignment</span>
        </nav>
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold"
          style={{ color: "var(--color-ink)" }}
        >
          Create Assignment
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="text-sm mt-1"
          style={{ color: "var(--color-ink-muted)" }}
        >
          Build and assign lessons, quizzes, or formal exams for your students.
        </motion.p>
      </div>

      {/* ── TWO-COLUMN LAYOUT ── */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* ─── LEFT: FORM ─── */}
        <div className="lg:col-span-3 space-y-8">
          {/* STEP 1: BASIC INFO */}
          <FormSection number={1} title="Basic Info">
            {/* Title */}
            <div>
              <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--color-ink)" }}>
                Assignment Title <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Unit 1: Supply and Demand"
                maxLength={100}
                className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                style={{
                  color: "var(--color-ink)",
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                }}
              />
            </div>

            {/* Assignment Type Cards */}
            <div>
              <label className="block text-sm font-medium mb-3" style={{ color: "var(--color-ink)" }}>
                Assignment Type <span className="text-red-400">*</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                <TypeCard
                  selected={type === "lesson"}
                  onClick={() => setType("lesson")}
                  icon={
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                    </svg>
                  }
                  title="Module Lesson"
                  description="Assign students to read and complete a module"
                />
                <TypeCard
                  selected={type === "quiz"}
                  onClick={() => setType("quiz")}
                  icon={
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                    </svg>
                  }
                  title="Practice Quiz"
                  description="Timed quiz from selected modules"
                />
                <TypeCard
                  selected={type === "exam"}
                  onClick={() => setType("exam")}
                  icon={
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                  }
                  title="Formal Exam"
                  description="Lockdown browser, timed, from your question bank"
                />
                <TypeCard
                  selected={type === "custom_quiz"}
                  onClick={() => {}}
                  disabled
                  icon={
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  }
                  title="Custom Quiz"
                  description="Select specific questions"
                  badge="Coming Soon"
                />
              </div>
            </div>

            {/* Classroom Selector */}
            <div>
              <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--color-ink)" }}>
                Classroom <span className="text-red-400">*</span>
              </label>
              {classroomsLoading ? (
                <div
                  className="w-full px-4 py-3 rounded-xl text-sm"
                  style={{
                    background: "var(--color-surface)",
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
                    background: "var(--color-surface)",
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
                    background: "var(--color-surface)",
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
          </FormSection>

          {/* STEP 2: CONTENT SELECTION — differs for exam vs lesson/quiz */}
          {type === "exam" ? (
            <FormSection number={2} title="Exam Questions">
              {questionsLoading ? (
                <div className="flex items-center gap-2 py-8">
                  <div
                    className="w-4 h-4 border-2 rounded-full animate-spin"
                    style={{ borderColor: "var(--color-border)", borderTopColor: "var(--color-ink)" }}
                  />
                  <span className="text-sm" style={{ color: "var(--color-ink-muted)" }}>
                    Loading your question bank...
                  </span>
                </div>
              ) : teacherQuestions.length === 0 ? (
                <div
                  className="p-5 rounded-xl text-center"
                  style={{ background: "var(--color-surface-sunken)", border: "1px solid var(--color-border-subtle)" }}
                >
                  <p className="text-sm mb-2" style={{ color: "var(--color-ink-muted)" }}>
                    No questions in your question bank yet.
                  </p>
                  <Link href="/teacher/questions" className="text-sm text-blue-500 hover:underline font-medium">
                    Create questions first
                  </Link>
                </div>
              ) : (
                <>
                  {/* Selected count */}
                  <div
                    className="flex items-center justify-between p-3 rounded-lg"
                    style={{ background: "var(--color-surface-sunken)", border: "1px solid var(--color-border-subtle)" }}
                  >
                    <span className="text-sm font-medium" style={{ color: "var(--color-ink)" }}>
                      {selectedQuestionIds.length} question{selectedQuestionIds.length !== 1 ? "s" : ""} selected
                    </span>
                    {selectedQuestionIds.length > 0 && (
                      <button
                        type="button"
                        onClick={() => setSelectedQuestionIds([])}
                        className="text-xs font-medium text-red-500 hover:text-red-600"
                      >
                        Clear All
                      </button>
                    )}
                  </div>

                  {/* Questions grouped by module */}
                  {Object.entries(questionsByModule).map(([moduleId, questions]) => {
                    const moduleName = allModules.find((m) => m.id === moduleId)?.title || moduleId;
                    const moduleQIds = questions.map((q) => q.id);
                    const allModuleSelected = moduleQIds.every((id) => selectedQuestionIds.includes(id));

                    return (
                      <div key={moduleId}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--color-ink-faint)" }}>
                            {moduleName} ({questions.length})
                          </span>
                          <button
                            type="button"
                            onClick={() => toggleAllForModule(moduleId)}
                            className="text-xs font-medium px-2 py-0.5 rounded transition-colors hover:bg-blue-50"
                            style={{ color: "#3B82F6" }}
                          >
                            {allModuleSelected ? "Deselect All" : "Select All"}
                          </button>
                        </div>
                        <div className="space-y-1.5">
                          {questions.map((q) => {
                            const isSelected = selectedQuestionIds.includes(q.id);
                            return (
                              <button
                                key={q.id}
                                type="button"
                                onClick={() => toggleQuestion(q.id)}
                                className="w-full text-left p-3 rounded-lg transition-all"
                                style={{
                                  background: isSelected ? "rgba(59, 130, 246, 0.06)" : "var(--color-surface)",
                                  border: isSelected ? "1.5px solid rgba(59, 130, 246, 0.3)" : "1.5px solid var(--color-border-subtle)",
                                }}
                              >
                                <div className="flex items-start gap-2.5">
                                  <div
                                    className="mt-0.5 flex-shrink-0 w-4 h-4 rounded flex items-center justify-center transition-all"
                                    style={{
                                      background: isSelected ? "#3B82F6" : "transparent",
                                      border: isSelected ? "none" : "1.5px solid var(--color-ink-faint)",
                                    }}
                                  >
                                    {isSelected && (
                                      <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                      </svg>
                                    )}
                                  </div>
                                  <div className="min-w-0 flex-1">
                                    <p
                                      className="text-xs font-medium leading-snug"
                                      style={{ color: isSelected ? "#3B82F6" : "var(--color-ink)" }}
                                    >
                                      {q.question}
                                    </p>
                                    <div className="flex items-center gap-2 mt-1">
                                      <span
                                        className="text-[10px] px-1.5 py-0.5 rounded-full font-medium"
                                        style={{
                                          background: q.difficulty === "easy" ? "rgba(16,185,129,0.1)" : q.difficulty === "hard" ? "rgba(239,68,68,0.1)" : "rgba(245,158,11,0.1)",
                                          color: q.difficulty === "easy" ? "#059669" : q.difficulty === "hard" ? "#dc2626" : "#d97706",
                                        }}
                                      >
                                        {q.difficulty}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </>
              )}

              {/* Exam Settings */}
              <AnimatePresence>
                {selectedQuestionIds.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div
                      className="p-5 rounded-xl space-y-5"
                      style={{
                        background: "var(--color-surface)",
                        border: "1px solid var(--color-border)",
                      }}
                    >
                      <p className="text-sm font-semibold" style={{ color: "var(--color-ink)" }}>
                        Exam Settings
                      </p>

                      {/* Time Limit (required for exams) */}
                      <div>
                        <label className="block text-xs font-medium mb-2" style={{ color: "var(--color-ink-muted)" }}>
                          Time Limit <span className="text-red-400">*</span>
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {[15, 30, 45, 60, 90].map((mins) => (
                            <button
                              key={mins}
                              type="button"
                              onClick={() => setExamTimeLimit(mins)}
                              className="px-3 py-1.5 rounded-lg text-xs font-medium transition-all"
                              style={{
                                background: examTimeLimit === mins ? "var(--color-ink)" : "var(--color-surface-sunken)",
                                color: examTimeLimit === mins ? "white" : "var(--color-ink-muted)",
                              }}
                            >
                              {mins} min
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Lockdown toggle */}
                      <ToggleSetting
                        label="Lock student browser during exam"
                        description="Enforces fullscreen and detects tab switches"
                        enabled={lockdown}
                        onToggle={() => setLockdown(!lockdown)}
                      />

                      {/* Shuffle questions */}
                      <ToggleSetting
                        label="Shuffle questions"
                        description="Randomize question order for each student"
                        enabled={shuffleQuestions}
                        onToggle={() => setShuffleQuestions(!shuffleQuestions)}
                      />

                      {/* Shuffle options */}
                      <ToggleSetting
                        label="Shuffle options"
                        description="Randomize answer option order"
                        enabled={shuffleOptions}
                        onToggle={() => setShuffleOptions(!shuffleOptions)}
                      />

                      {/* Show results after submit */}
                      <ToggleSetting
                        label="Show results after submit"
                        description="Let students see their score immediately (otherwise you release manually)"
                        enabled={showResults}
                        onToggle={() => setShowResults(!showResults)}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </FormSection>
          ) : (
            <FormSection number={2} title="Content Selection">
              {/* Microeconomics */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span
                      className="inline-block w-2.5 h-2.5 rounded-full"
                      style={{ background: "#3B82F6" }}
                    />
                    <span className="text-sm font-semibold" style={{ color: "var(--color-ink)" }}>
                      Microeconomics
                    </span>
                    <span className="text-xs" style={{ color: "var(--color-ink-faint)" }}>
                      {microModules.filter((m) => selectedModules.includes(m.id)).length}/{microModules.length}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={selectAllMicro}
                    className="text-xs font-medium px-2.5 py-1 rounded-md transition-colors hover:bg-blue-50"
                    style={{ color: "#3B82F6" }}
                  >
                    {microModules.every((m) => selectedModules.includes(m.id)) ? "Deselect All" : "Select All Micro"}
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {microModules.map((m) => (
                    <ModuleCard
                      key={m.id}
                      title={m.title}
                      description={m.description}
                      selected={selectedModules.includes(m.id)}
                      onClick={() => toggleModule(m.id)}
                      accentColor="#3B82F6"
                    />
                  ))}
                </div>
              </div>

              {/* Macroeconomics */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span
                      className="inline-block w-2.5 h-2.5 rounded-full"
                      style={{ background: "#8B5CF6" }}
                    />
                    <span className="text-sm font-semibold" style={{ color: "var(--color-ink)" }}>
                      Macroeconomics
                    </span>
                    <span className="text-xs" style={{ color: "var(--color-ink-faint)" }}>
                      {macroModules.filter((m) => selectedModules.includes(m.id)).length}/{macroModules.length}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={selectAllMacro}
                    className="text-xs font-medium px-2.5 py-1 rounded-md transition-colors hover:bg-violet-50"
                    style={{ color: "#8B5CF6" }}
                  >
                    {macroModules.every((m) => selectedModules.includes(m.id)) ? "Deselect All" : "Select All Macro"}
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {macroModules.map((m) => (
                    <ModuleCard
                      key={m.id}
                      title={m.title}
                      description={m.description}
                      selected={selectedModules.includes(m.id)}
                      onClick={() => toggleModule(m.id)}
                      accentColor="#8B5CF6"
                    />
                  ))}
                </div>
              </div>

              {/* Quiz Settings */}
              <AnimatePresence>
                {type === "quiz" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div
                      className="p-5 rounded-xl space-y-5"
                      style={{
                        background: "var(--color-surface)",
                        border: "1px solid var(--color-border)",
                      }}
                    >
                      <p className="text-sm font-semibold" style={{ color: "var(--color-ink)" }}>
                        Quiz Settings
                      </p>

                      {/* Question Count Slider */}
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <label className="text-xs font-medium" style={{ color: "var(--color-ink-muted)" }}>
                            Number of Questions
                          </label>
                          <span
                            className="text-xs font-semibold px-2 py-0.5 rounded-md"
                            style={{
                              background: "var(--color-surface-sunken)",
                              color: "var(--color-ink)",
                            }}
                          >
                            {quizLength}
                          </span>
                        </div>
                        <input
                          type="range"
                          min={5}
                          max={20}
                          step={5}
                          value={quizLength}
                          onChange={(e) => setQuizLength(Number(e.target.value))}
                          className="w-full"
                        />
                        <div className="flex justify-between mt-1">
                          {[5, 10, 15, 20].map((n) => (
                            <span
                              key={n}
                              className="text-[10px]"
                              style={{ color: quizLength === n ? "var(--color-ink)" : "var(--color-ink-faint)" }}
                            >
                              {n}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Time Limit */}
                      <div>
                        <label className="block text-xs font-medium mb-2" style={{ color: "var(--color-ink-muted)" }}>
                          Time Limit
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {[
                            { value: null, label: "No Limit" },
                            { value: 15, label: "15 min" },
                            { value: 30, label: "30 min" },
                            { value: 45, label: "45 min" },
                            { value: 60, label: "60 min" },
                          ].map((opt) => (
                            <button
                              key={opt.label}
                              type="button"
                              onClick={() => setTimeLimit(opt.value)}
                              className="px-3 py-1.5 rounded-lg text-xs font-medium transition-all"
                              style={{
                                background:
                                  timeLimit === opt.value
                                    ? "var(--color-ink)"
                                    : "var(--color-surface-sunken)",
                                color:
                                  timeLimit === opt.value ? "white" : "var(--color-ink-muted)",
                              }}
                            >
                              {opt.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </FormSection>
          )}

          {/* STEP 3: SCHEDULE */}
          <FormSection number={3} title="Schedule">
            {/* Quick Presets */}
            <div>
              <label className="block text-xs font-medium mb-2" style={{ color: "var(--color-ink-muted)" }}>
                Quick Presets
              </label>
              <div className="flex flex-wrap gap-2">
                <PresetButton label="Due Tomorrow" onClick={() => setDatePreset("tomorrow")} />
                <PresetButton label="Due This Friday" onClick={() => setDatePreset("friday")} />
                <PresetButton label="Due Next Week" onClick={() => setDatePreset("next_week")} />
              </div>
            </div>

            {/* Due Date */}
            <div>
              <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--color-ink)" }}>
                Due Date
              </label>
              <input
                type="date"
                value={dueDate}
                min={today}
                onChange={(e) => setDueDate(e.target.value)}
                className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                style={{
                  color: "var(--color-ink)",
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                }}
              />
            </div>

            {/* Available From */}
            <div>
              <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--color-ink)" }}>
                Available From{" "}
                <span className="font-normal" style={{ color: "var(--color-ink-faint)" }}>
                  (optional)
                </span>
              </label>
              <input
                type="date"
                value={availableFrom}
                min={today}
                onChange={(e) => setAvailableFrom(e.target.value)}
                className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                style={{
                  color: "var(--color-ink)",
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                }}
              />
            </div>
          </FormSection>

          {/* ── ERROR ── */}
          <AnimatePresence>
            {status === "error" && error && (
              <motion.div
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                className="auth-error"
              >
                {error}
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── SUBMIT BUTTON ── */}
          <motion.button
            whileHover={canSubmit ? { scale: 1.005 } : {}}
            whileTap={canSubmit ? { scale: 0.98 } : {}}
            onClick={handleSubmit}
            disabled={!canSubmit}
            className="btn-primary w-full py-4 text-base font-semibold rounded-xl disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {status === "loading" ? (
              <span className="flex items-center justify-center gap-2">
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Creating Assignment...
              </span>
            ) : (
              "Create Assignment"
            )}
          </motion.button>
        </div>

        {/* ─── RIGHT: PREVIEW ─── */}
        <div className="lg:col-span-2">
          <div className="lg:sticky lg:top-8">
            <PreviewPanel
              title={title}
              type={typeLabel}
              classroomName={selectedClassroomName}
              moduleNames={selectedModuleNames as string[]}
              dueDate={dueDate}
              availableFrom={availableFrom}
              quizLength={type === "quiz" ? quizLength : undefined}
              timeLimit={type === "quiz" ? timeLimit : type === "exam" ? examTimeLimit : undefined}
              isExam={type === "exam"}
              examQuestionCount={type === "exam" ? selectedQuestionIds.length : undefined}
              lockdown={type === "exam" ? lockdown : undefined}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────── */
/*  SUB-COMPONENTS                                */
/* ────────────────────────────────────────────── */

function FormSection({
  number,
  title,
  children,
}: {
  number: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: number * 0.08, duration: 0.35 }}
    >
      <div className="flex items-center gap-3 mb-5">
        <span
          className="flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold"
          style={{
            background: "var(--color-ink)",
            color: "var(--color-surface)",
          }}
        >
          {number}
        </span>
        <h2 className="text-lg font-semibold" style={{ color: "var(--color-ink)" }}>
          {title}
        </h2>
      </div>
      <div
        className="space-y-5 pl-3 ml-3"
        style={{ borderLeft: "2px solid var(--color-border-subtle)" }}
      >
        {children}
      </div>
    </motion.div>
  );
}

function TypeCard({
  selected,
  onClick,
  icon,
  title,
  description,
  disabled,
  badge,
}: {
  selected: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  title: string;
  description: string;
  disabled?: boolean;
  badge?: string;
}) {
  return (
    <motion.button
      type="button"
      whileHover={!disabled ? { scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      onClick={disabled ? undefined : onClick}
      className="relative text-left p-4 rounded-xl transition-all"
      style={{
        background: selected ? "rgba(59, 130, 246, 0.06)" : "var(--color-surface)",
        border: selected
          ? "2px solid #3B82F6"
          : "2px solid var(--color-border)",
        opacity: disabled ? 0.5 : 1,
        cursor: disabled ? "not-allowed" : "pointer",
      }}
    >
      {badge && (
        <span
          className="absolute top-2 right-2 text-[10px] font-semibold px-1.5 py-0.5 rounded-full"
          style={{
            background: "var(--color-surface-sunken)",
            color: "var(--color-ink-faint)",
          }}
        >
          {badge}
        </span>
      )}
      <div
        className="mb-2"
        style={{ color: selected ? "#3B82F6" : "var(--color-ink-muted)" }}
      >
        {icon}
      </div>
      <p
        className="text-sm font-semibold mb-0.5"
        style={{ color: selected ? "#3B82F6" : "var(--color-ink)" }}
      >
        {title}
      </p>
      <p className="text-xs leading-relaxed" style={{ color: "var(--color-ink-faint)" }}>
        {description}
      </p>
    </motion.button>
  );
}

function ModuleCard({
  title,
  description,
  selected,
  onClick,
  accentColor,
}: {
  title: string;
  description: string;
  selected: boolean;
  onClick: () => void;
  accentColor: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="text-left p-3 rounded-xl transition-all group"
      style={{
        background: selected ? `${accentColor}0D` : "var(--color-surface)",
        border: selected
          ? `1.5px solid ${accentColor}50`
          : "1.5px solid var(--color-border-subtle)",
      }}
    >
      <div className="flex items-start gap-2.5">
        <div
          className="mt-0.5 flex-shrink-0 w-4 h-4 rounded flex items-center justify-center transition-all"
          style={{
            background: selected ? accentColor : "transparent",
            border: selected ? "none" : "1.5px solid var(--color-ink-faint)",
          }}
        >
          {selected && (
            <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          )}
        </div>
        <div className="min-w-0">
          <p
            className="text-xs font-semibold leading-tight"
            style={{ color: selected ? accentColor : "var(--color-ink)" }}
          >
            {title}
          </p>
          <p
            className="text-[11px] mt-0.5 leading-snug"
            style={{ color: "var(--color-ink-faint)" }}
          >
            {description}
          </p>
        </div>
      </div>
    </button>
  );
}

function ToggleSetting({
  label,
  description,
  enabled,
  onToggle,
}: {
  label: string;
  description: string;
  enabled: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div>
        <p className="text-xs font-medium" style={{ color: "var(--color-ink)" }}>{label}</p>
        <p className="text-[11px]" style={{ color: "var(--color-ink-faint)" }}>{description}</p>
      </div>
      <button
        type="button"
        onClick={onToggle}
        className="relative flex-shrink-0 w-9 h-5 rounded-full transition-colors"
        style={{ background: enabled ? "#3B82F6" : "var(--color-border)" }}
      >
        <span
          className="absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white transition-transform"
          style={{ transform: enabled ? "translateX(16px)" : "translateX(0)" }}
        />
      </button>
    </div>
  );
}

function PresetButton({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="px-3 py-1.5 rounded-lg text-xs font-medium transition-all hover:bg-blue-50"
      style={{
        background: "var(--color-surface)",
        color: "var(--color-ink-muted)",
        border: "1px solid var(--color-border-subtle)",
      }}
    >
      {label}
    </button>
  );
}

function PreviewPanel({
  title,
  type,
  classroomName,
  moduleNames,
  dueDate,
  availableFrom,
  quizLength,
  timeLimit,
  isExam,
  examQuestionCount,
  lockdown,
}: {
  title: string;
  type: string | null;
  classroomName?: string;
  moduleNames: string[];
  dueDate: string;
  availableFrom: string;
  quizLength?: number;
  timeLimit?: number | null;
  isExam?: boolean;
  examQuestionCount?: number;
  lockdown?: boolean;
}) {
  const hasContent = title || type || moduleNames.length > 0 || dueDate || (isExam && examQuestionCount);

  const formatDate = (dateStr: string) => {
    if (!dateStr) return "";
    const d = new Date(dateStr + "T00:00:00");
    return d.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
  };

  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.04), 0 4px 12px 0 rgb(0 0 0 / 0.02)",
      }}
    >
      {/* Preview header */}
      <div
        className="px-5 py-3 flex items-center gap-2"
        style={{
          borderBottom: "1px solid var(--color-border-subtle)",
          background: "var(--color-surface-raised)",
        }}
      >
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
          style={{ color: "var(--color-ink-faint)" }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <span className="text-xs font-semibold" style={{ color: "var(--color-ink-muted)" }}>
          Student Preview
        </span>
      </div>

      {/* Preview body */}
      <div className="p-5">
        {!hasContent ? (
          <div className="text-center py-8">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
              style={{ background: "var(--color-surface-sunken)" }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
                style={{ color: "var(--color-ink-faint)" }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
            </div>
            <p className="text-sm" style={{ color: "var(--color-ink-faint)" }}>
              Fill out the form to see a preview
            </p>
          </div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={`${title}-${type}-${moduleNames.length}-${dueDate}-${examQuestionCount}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="space-y-4"
            >
              {/* Title */}
              <div>
                <h3 className="text-base font-bold" style={{ color: "var(--color-ink)" }}>
                  {title || "Untitled Assignment"}
                </h3>
                {classroomName && (
                  <p className="text-xs mt-0.5" style={{ color: "var(--color-ink-faint)" }}>
                    {classroomName}
                  </p>
                )}
              </div>

              {/* Type badge */}
              {type && (
                <span
                  className="inline-block text-xs font-medium px-2.5 py-1 rounded-full"
                  style={{
                    background: isExam ? "#FEF2F2" : type === "Module Lesson" ? "#EFF6FF" : "#F3F0FF",
                    color: isExam ? "#DC2626" : type === "Module Lesson" ? "#2563EB" : "#7C3AED",
                  }}
                >
                  {type}
                  {isExam && lockdown && " (Lockdown)"}
                </span>
              )}

              {/* Exam config */}
              {isExam && examQuestionCount ? (
                <div className="flex gap-3 text-xs" style={{ color: "var(--color-ink-muted)" }}>
                  <span>{examQuestionCount} questions</span>
                  {timeLimit && <span>{timeLimit} min time limit</span>}
                </div>
              ) : null}

              {/* Quiz config */}
              {!isExam && quizLength && (
                <div className="flex gap-3 text-xs" style={{ color: "var(--color-ink-muted)" }}>
                  <span>{quizLength} questions</span>
                  {timeLimit ? (
                    <span>{timeLimit} min time limit</span>
                  ) : (
                    <span>No time limit</span>
                  )}
                </div>
              )}

              {/* Modules */}
              {moduleNames.length > 0 && (
                <div>
                  <p
                    className="text-xs font-semibold mb-2 uppercase tracking-wider"
                    style={{ color: "var(--color-ink-faint)" }}
                  >
                    Modules ({moduleNames.length})
                  </p>
                  <div className="space-y-1">
                    {moduleNames.slice(0, 6).map((name) => (
                      <div
                        key={name}
                        className="flex items-center gap-2 text-xs py-1"
                        style={{ color: "var(--color-ink-muted)" }}
                      >
                        <span
                          className="w-1 h-1 rounded-full flex-shrink-0"
                          style={{ background: "var(--color-ink-faint)" }}
                        />
                        {name}
                      </div>
                    ))}
                    {moduleNames.length > 6 && (
                      <p className="text-xs pl-3" style={{ color: "var(--color-ink-faint)" }}>
                        +{moduleNames.length - 6} more
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* Dates */}
              {(dueDate || availableFrom) && (
                <div
                  className="pt-3 space-y-1.5"
                  style={{ borderTop: "1px solid var(--color-border-subtle)" }}
                >
                  {availableFrom && (
                    <div className="flex items-center gap-2 text-xs" style={{ color: "var(--color-ink-muted)" }}>
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                      </svg>
                      Available {formatDate(availableFrom)}
                    </div>
                  )}
                  {dueDate && (
                    <div className="flex items-center gap-2 text-xs font-medium" style={{ color: "var(--color-ink)" }}>
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Due {formatDate(dueDate)}
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </div>
  );
}
