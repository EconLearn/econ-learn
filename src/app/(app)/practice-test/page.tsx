"use client";

import { useState, useEffect, useCallback, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  questionBank,
  moduleInfo,
  getQuestionsByModules,
  type QuestionBankEntry,
  type PracticeQuestion,
} from "@/data/question-bank";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function shuffleOptions(q: PracticeQuestion): PracticeQuestion {
  const indices = q.options.map((_, i) => i);
  const shuffled = shuffle(indices);
  return {
    ...q,
    options: shuffled.map((i) => q.options[i]),
    correctIndex: shuffled.indexOf(q.correctIndex),
  };
}

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type Mode = "config" | "test" | "results";

interface TestQuestion {
  entry: QuestionBankEntry;
  shuffledQuestion: PracticeQuestion;
}

interface TestAnswer {
  selectedIndex: number | null;
  flagged: boolean;
}

const TIME_OPTIONS = [
  { label: "None", value: 0 },
  { label: "15 min", value: 15 },
  { label: "30 min", value: 30 },
  { label: "45 min", value: 45 },
  { label: "60 min", value: 60 },
  { label: "90 min", value: 90 },
];

const COUNT_OPTIONS = [10, 20, 30, 40, 50];

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function PracticeTestPage() {
  // --- Config state ---
  const [courseFilter, setCourseFilter] = useState<"micro" | "macro" | "both">("both");
  const [selectedModules, setSelectedModules] = useState<Set<string>>(
    () => new Set(moduleInfo.map((m) => m.moduleId))
  );
  const [questionCount, setQuestionCount] = useState(20);
  const [timeLimit, setTimeLimit] = useState(0); // minutes, 0 = none
  const [mode, setMode] = useState<Mode>("config");

  // --- Test state ---
  const [testQuestions, setTestQuestions] = useState<TestQuestion[]>([]);
  const [answers, setAnswers] = useState<TestAnswer[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(0); // seconds
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [direction, setDirection] = useState(0); // -1 = left, 1 = right

  // --- Derived config ---
  const microModules = useMemo(() => moduleInfo.filter((m) => m.course === "micro"), []);
  const macroModules = useMemo(() => moduleInfo.filter((m) => m.course === "macro"), []);

  const availableCount = useMemo(() => {
    return getQuestionsByModules(Array.from(selectedModules)).length;
  }, [selectedModules]);

  const effectiveCount = Math.min(questionCount, availableCount);

  // --- Timer ---
  useEffect(() => {
    if (mode !== "test" || timeLimit === 0) return;
    timerRef.current = setInterval(() => {
      setTimeRemaining((t) => {
        if (t <= 1) {
          clearInterval(timerRef.current!);
          handleSubmit();
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [mode, timeLimit]); // eslint-disable-line react-hooks/exhaustive-deps

  // --- Module toggle helpers ---
  const toggleModule = (id: string) => {
    setSelectedModules((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const selectAllCourse = (course: "micro" | "macro") => {
    const ids = (course === "micro" ? microModules : macroModules).map((m) => m.moduleId);
    setSelectedModules((prev) => {
      const next = new Set(prev);
      ids.forEach((id) => next.add(id));
      return next;
    });
  };

  const deselectAllCourse = (course: "micro" | "macro") => {
    const ids = new Set((course === "micro" ? microModules : macroModules).map((m) => m.moduleId));
    setSelectedModules((prev) => {
      const next = new Set(prev);
      ids.forEach((id) => next.delete(id));
      return next;
    });
  };

  const allMicroSelected = microModules.every((m) => selectedModules.has(m.moduleId));
  const allMacroSelected = macroModules.every((m) => selectedModules.has(m.moduleId));

  // --- Generate test ---
  const generateTest = () => {
    const pool = getQuestionsByModules(Array.from(selectedModules));
    const selected = shuffle(pool).slice(0, effectiveCount);
    const tqs: TestQuestion[] = selected.map((entry) => ({
      entry,
      shuffledQuestion: shuffleOptions(entry.question),
    }));
    setTestQuestions(tqs);
    setAnswers(tqs.map(() => ({ selectedIndex: null, flagged: false })));
    setCurrentIdx(0);
    setDirection(0);
    setStartTime(Date.now());
    if (timeLimit > 0) {
      setTimeRemaining(timeLimit * 60);
    }
    setMode("test");
    setShowNav(false);
  };

  // --- Test actions ---
  const selectAnswer = (optionIdx: number) => {
    setAnswers((prev) => {
      const next = [...prev];
      next[currentIdx] = { ...next[currentIdx], selectedIndex: optionIdx };
      return next;
    });
  };

  const toggleFlag = () => {
    setAnswers((prev) => {
      const next = [...prev];
      next[currentIdx] = { ...next[currentIdx], flagged: !next[currentIdx].flagged };
      return next;
    });
  };

  const goTo = (idx: number) => {
    setDirection(idx > currentIdx ? 1 : -1);
    setCurrentIdx(idx);
    setShowNav(false);
  };

  const goPrev = () => {
    if (currentIdx > 0) {
      setDirection(-1);
      setCurrentIdx((i) => i - 1);
    }
  };

  const goNext = () => {
    if (currentIdx < testQuestions.length - 1) {
      setDirection(1);
      setCurrentIdx((i) => i + 1);
    }
  };

  const handleSubmit = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    setEndTime(Date.now());
    setMode("results");
    setShowSubmitModal(false);
  }, []);

  // --- Results computation ---
  const results = useMemo(() => {
    if (mode !== "results") return null;

    let correct = 0;
    const missed: number[] = [];
    const moduleScores = new Map<string, { correct: number; total: number; moduleName: string }>();

    testQuestions.forEach((tq, i) => {
      const ans = answers[i];
      const isCorrect = ans.selectedIndex === tq.shuffledQuestion.correctIndex;
      if (isCorrect) correct++;
      else missed.push(i);

      const key = tq.entry.moduleId;
      const existing = moduleScores.get(key) || { correct: 0, total: 0, moduleName: tq.entry.moduleName };
      existing.total++;
      if (isCorrect) existing.correct++;
      moduleScores.set(key, existing);
    });

    const elapsed = endTime - startTime;
    const minutes = Math.floor(elapsed / 60000);
    const seconds = Math.floor((elapsed % 60000) / 1000);

    return {
      correct,
      total: testQuestions.length,
      percentage: Math.round((correct / testQuestions.length) * 100),
      missed,
      moduleScores: Array.from(moduleScores.entries()).map(([id, s]) => ({ moduleId: id, ...s })),
      timeString: `${minutes}m ${seconds}s`,
    };
  }, [mode, testQuestions, answers, startTime, endTime]);

  // --- Retake missed ---
  const retakeMissed = () => {
    if (!results) return;
    const missedEntries = results.missed.map((i) => testQuestions[i].entry);
    const tqs: TestQuestion[] = shuffle(missedEntries).map((entry) => ({
      entry,
      shuffledQuestion: shuffleOptions(entry.question),
    }));
    setTestQuestions(tqs);
    setAnswers(tqs.map(() => ({ selectedIndex: null, flagged: false })));
    setCurrentIdx(0);
    setDirection(0);
    setStartTime(Date.now());
    if (timeLimit > 0) {
      setTimeRemaining(timeLimit * 60);
    }
    setMode("test");
    setShowNav(false);
  };

  // --- Format timer ---
  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  // =========================================================================
  // CONFIGURATION MODE
  // =========================================================================
  if (mode === "config") {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-2" style={{ color: "var(--color-ink)" }}>
              Practice Test Generator
            </h1>
            <p className="text-sm" style={{ color: "var(--color-ink-muted)" }}>
              Build a custom practice test from {questionBank.length} questions across all AP Economics modules.
            </p>
          </div>

          {/* Course filter */}
          <div className="card p-5 mb-4">
            <label className="text-[11px] font-semibold uppercase tracking-wider mb-3 block" style={{ color: "var(--color-ink-faint)" }}>
              Course
            </label>
            <div className="flex gap-2">
              {(["micro", "macro", "both"] as const).map((c) => (
                <button
                  key={c}
                  onClick={() => {
                    setCourseFilter(c);
                    if (c === "micro") {
                      setSelectedModules(new Set(microModules.map((m) => m.moduleId)));
                    } else if (c === "macro") {
                      setSelectedModules(new Set(macroModules.map((m) => m.moduleId)));
                    } else {
                      setSelectedModules(new Set(moduleInfo.map((m) => m.moduleId)));
                    }
                  }}
                  className="px-4 py-2 rounded-lg text-sm font-medium transition-all"
                  style={{
                    background: courseFilter === c ? "var(--color-ink)" : "transparent",
                    color: courseFilter === c ? "white" : "var(--color-ink-muted)",
                    border: courseFilter === c ? "1px solid var(--color-ink)" : "1px solid var(--color-border-subtle)",
                  }}
                >
                  {c === "micro" ? "Micro" : c === "macro" ? "Macro" : "Both"}
                </button>
              ))}
            </div>
          </div>

          {/* Module selection */}
          <div className="card p-5 mb-4">
            <label className="text-[11px] font-semibold uppercase tracking-wider mb-3 block" style={{ color: "var(--color-ink-faint)" }}>
              Modules
            </label>

            {/* Micro section */}
            {(courseFilter === "micro" || courseFilter === "both") && (
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold" style={{ color: "var(--graph-demand)" }}>
                    AP Microeconomics
                  </span>
                  <button
                    onClick={() => (allMicroSelected ? deselectAllCourse("micro") : selectAllCourse("micro"))}
                    className="text-[11px] font-medium transition-colors"
                    style={{ color: "var(--color-ink-muted)" }}
                  >
                    {allMicroSelected ? "Deselect All" : "Select All"}
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {microModules.map((m) => (
                    <label
                      key={m.moduleId}
                      className="flex items-center gap-2.5 px-3 py-2 rounded-lg cursor-pointer transition-all text-sm"
                      style={{
                        background: selectedModules.has(m.moduleId) ? "rgba(59,130,246,0.06)" : "transparent",
                        border: selectedModules.has(m.moduleId)
                          ? "1px solid rgba(59,130,246,0.2)"
                          : "1px solid var(--color-border-subtle)",
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={selectedModules.has(m.moduleId)}
                        onChange={() => toggleModule(m.moduleId)}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="flex-1 truncate" style={{ color: "var(--color-ink-light)" }}>
                        {m.moduleName}
                      </span>
                      <span className="text-[10px] tabular-nums" style={{ color: "var(--color-ink-faint)" }}>
                        {m.questionCount}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Macro section */}
            {(courseFilter === "macro" || courseFilter === "both") && (
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold" style={{ color: "#6d28d9" }}>
                    AP Macroeconomics
                  </span>
                  <button
                    onClick={() => (allMacroSelected ? deselectAllCourse("macro") : selectAllCourse("macro"))}
                    className="text-[11px] font-medium transition-colors"
                    style={{ color: "var(--color-ink-muted)" }}
                  >
                    {allMacroSelected ? "Deselect All" : "Select All"}
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {macroModules.map((m) => (
                    <label
                      key={m.moduleId}
                      className="flex items-center gap-2.5 px-3 py-2 rounded-lg cursor-pointer transition-all text-sm"
                      style={{
                        background: selectedModules.has(m.moduleId) ? "rgba(139,92,246,0.06)" : "transparent",
                        border: selectedModules.has(m.moduleId)
                          ? "1px solid rgba(139,92,246,0.2)"
                          : "1px solid var(--color-border-subtle)",
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={selectedModules.has(m.moduleId)}
                        onChange={() => toggleModule(m.moduleId)}
                        className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                      />
                      <span className="flex-1 truncate" style={{ color: "var(--color-ink-light)" }}>
                        {m.moduleName}
                      </span>
                      <span className="text-[10px] tabular-nums" style={{ color: "var(--color-ink-faint)" }}>
                        {m.questionCount}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Question count */}
          <div className="card p-5 mb-4">
            <label className="text-[11px] font-semibold uppercase tracking-wider mb-3 block" style={{ color: "var(--color-ink-faint)" }}>
              Number of Questions
            </label>
            <div className="flex gap-2 flex-wrap">
              {COUNT_OPTIONS.map((n) => (
                <button
                  key={n}
                  onClick={() => setQuestionCount(n)}
                  disabled={n > availableCount}
                  className="px-4 py-2 rounded-lg text-sm font-medium transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                  style={{
                    background: questionCount === n ? "var(--color-ink)" : "transparent",
                    color: questionCount === n ? "white" : "var(--color-ink-muted)",
                    border: questionCount === n ? "1px solid var(--color-ink)" : "1px solid var(--color-border-subtle)",
                  }}
                >
                  {n}
                </button>
              ))}
            </div>
            <p className="mt-2 text-[11px]" style={{ color: "var(--color-ink-faint)" }}>
              {availableCount} questions available from selected modules
            </p>
          </div>

          {/* Time limit */}
          <div className="card p-5 mb-6">
            <label className="text-[11px] font-semibold uppercase tracking-wider mb-3 block" style={{ color: "var(--color-ink-faint)" }}>
              Time Limit
            </label>
            <div className="flex gap-2 flex-wrap">
              {TIME_OPTIONS.map((t) => (
                <button
                  key={t.value}
                  onClick={() => setTimeLimit(t.value)}
                  className="px-4 py-2 rounded-lg text-sm font-medium transition-all"
                  style={{
                    background: timeLimit === t.value ? "var(--color-ink)" : "transparent",
                    color: timeLimit === t.value ? "white" : "var(--color-ink-muted)",
                    border: timeLimit === t.value ? "1px solid var(--color-ink)" : "1px solid var(--color-border-subtle)",
                  }}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Generate button */}
          <button
            onClick={generateTest}
            disabled={selectedModules.size === 0 || availableCount === 0}
            className="btn-primary w-full py-3 text-base font-semibold disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Generate Test ({effectiveCount} questions)
          </button>
        </motion.div>
      </div>
    );
  }

  // =========================================================================
  // TEST MODE
  // =========================================================================
  if (mode === "test") {
    const tq = testQuestions[currentIdx];
    const q = tq.shuffledQuestion;
    const ans = answers[currentIdx];
    const answeredCount = answers.filter((a) => a.selectedIndex !== null).length;
    const flaggedCount = answers.filter((a) => a.flagged).length;

    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6">
        {/* Top bar: timer + progress */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-medium" style={{ color: "var(--color-ink-faint)" }}>
              Question {currentIdx + 1} of {testQuestions.length}
            </span>
            {timeLimit > 0 && (
              <span
                className="text-sm font-bold tabular-nums px-2 py-0.5 rounded"
                style={{
                  color: timeRemaining <= 300 ? "#dc2626" : "var(--color-ink)",
                  background: timeRemaining <= 300 ? "rgba(239,68,68,0.08)" : "transparent",
                }}
              >
                {formatTime(timeRemaining)}
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowNav(!showNav)}
              className="text-[11px] font-medium px-2 py-1 rounded-md transition-all"
              style={{
                border: "1px solid var(--color-border-subtle)",
                color: "var(--color-ink-muted)",
              }}
            >
              {answeredCount}/{testQuestions.length} answered{flaggedCount > 0 ? ` | ${flaggedCount} flagged` : ""}
            </button>
            <button
              onClick={() => setShowSubmitModal(true)}
              className="text-[11px] font-semibold px-3 py-1 rounded-md transition-all"
              style={{
                background: "var(--graph-equilibrium)",
                color: "white",
              }}
            >
              Submit
            </button>
          </div>
        </div>

        {/* Progress bar */}
        <div className="h-1 rounded-full overflow-hidden mb-6" style={{ background: "var(--color-surface-sunken)" }}>
          <div
            className="h-full rounded-full transition-all duration-500 ease-out"
            style={{
              width: `${(answeredCount / testQuestions.length) * 100}%`,
              background: "var(--graph-equilibrium)",
            }}
          />
        </div>

        {/* Question navigator panel */}
        <AnimatePresence>
          {showNav && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden mb-4"
            >
              <div className="card p-4">
                <div className="grid grid-cols-10 gap-1.5">
                  {testQuestions.map((_, i) => {
                    const a = answers[i];
                    const isCurrent = i === currentIdx;
                    let bg = "var(--color-surface-sunken)"; // unanswered
                    let textColor = "var(--color-ink-faint)";
                    let border = "2px solid transparent";
                    if (a.flagged && a.selectedIndex === null) {
                      bg = "rgba(245,158,11,0.15)";
                      textColor = "#d97706";
                    } else if (a.flagged && a.selectedIndex !== null) {
                      bg = "rgba(245,158,11,0.25)";
                      textColor = "#d97706";
                    } else if (a.selectedIndex !== null) {
                      bg = "rgba(59,130,246,0.12)";
                      textColor = "#2563eb";
                    }
                    if (isCurrent) {
                      border = "2px solid var(--color-ink)";
                    }
                    return (
                      <button
                        key={i}
                        onClick={() => goTo(i)}
                        className="w-full aspect-square rounded-md flex items-center justify-center text-[11px] font-bold tabular-nums transition-all"
                        style={{ background: bg, color: textColor, border }}
                      >
                        {i + 1}
                      </button>
                    );
                  })}
                </div>
                <div className="flex gap-4 mt-3 text-[10px]" style={{ color: "var(--color-ink-faint)" }}>
                  <span className="flex items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded-sm" style={{ background: "var(--color-surface-sunken)" }} />
                    Unanswered
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded-sm" style={{ background: "rgba(59,130,246,0.12)" }} />
                    Answered
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded-sm" style={{ background: "rgba(245,158,11,0.2)" }} />
                    Flagged
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Question card */}
        <div className="card overflow-hidden">
          {/* Module tag */}
          <div className="px-6 pt-5 pb-0">
            <span
              className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded"
              style={{
                background: tq.entry.course === "micro" ? "rgba(59,130,246,0.08)" : "rgba(139,92,246,0.08)",
                color: tq.entry.course === "micro" ? "#2563eb" : "#6d28d9",
              }}
            >
              {tq.entry.moduleName}
            </span>
          </div>

          <div className="p-6">
            {/* Question text */}
            <AnimatePresence mode="wait" initial={false}>
              <motion.h3
                key={currentIdx}
                initial={{ opacity: 0, x: direction * 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -30 }}
                transition={{ duration: 0.2 }}
                className="text-[15px] font-medium leading-snug mb-5"
                style={{ color: "var(--color-ink)" }}
              >
                {q.question}
              </motion.h3>
            </AnimatePresence>

            {/* Options */}
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={currentIdx}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="space-y-2"
              >
                {q.options.map((option, i) => {
                  const isSelected = ans.selectedIndex === i;
                  return (
                    <button
                      key={i}
                      onClick={() => selectAnswer(i)}
                      className="w-full text-left px-4 py-3 rounded-lg border text-sm font-medium transition-all cursor-pointer"
                      style={{
                        background: isSelected ? "rgba(59,130,246,0.08)" : "white",
                        borderColor: isSelected ? "rgba(59,130,246,0.3)" : "var(--color-border-subtle)",
                        color: isSelected ? "#1d4ed8" : "var(--color-ink-light)",
                      }}
                    >
                      <span className="flex items-center gap-3">
                        <span
                          className="w-5 h-5 rounded flex items-center justify-center text-[10px] font-bold"
                          style={{
                            background: isSelected ? "#3b82f6" : "var(--color-surface-sunken)",
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
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation footer */}
          <div
            className="flex items-center justify-between px-6 py-4"
            style={{ borderTop: "1px solid var(--color-border-subtle)" }}
          >
            <button
              onClick={goPrev}
              disabled={currentIdx === 0}
              className="flex items-center gap-1.5 text-sm font-medium transition-all disabled:opacity-30"
              style={{ color: "var(--color-ink-muted)" }}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Previous
            </button>

            <button
              onClick={toggleFlag}
              className="flex items-center gap-1.5 text-[11px] font-medium px-3 py-1.5 rounded-md transition-all"
              style={{
                background: ans.flagged ? "rgba(245,158,11,0.1)" : "transparent",
                color: ans.flagged ? "#d97706" : "var(--color-ink-faint)",
                border: ans.flagged ? "1px solid rgba(245,158,11,0.3)" : "1px solid var(--color-border-subtle)",
              }}
            >
              <svg className="w-3.5 h-3.5" fill={ans.flagged ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
              </svg>
              {ans.flagged ? "Flagged" : "Flag"}
            </button>

            <button
              onClick={goNext}
              disabled={currentIdx === testQuestions.length - 1}
              className="flex items-center gap-1.5 text-sm font-medium transition-all disabled:opacity-30"
              style={{ color: "var(--color-ink-muted)" }}
            >
              Next
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Submit confirmation modal */}
        <AnimatePresence>
          {showSubmitModal && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
                onClick={() => setShowSubmitModal(false)}
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-sm card p-6"
              >
                <h3 className="text-base font-semibold mb-2" style={{ color: "var(--color-ink)" }}>
                  Submit Test?
                </h3>
                <p className="text-sm mb-1" style={{ color: "var(--color-ink-muted)" }}>
                  You have answered {answeredCount} of {testQuestions.length} questions.
                </p>
                {answeredCount < testQuestions.length && (
                  <p className="text-sm mb-4" style={{ color: "#d97706" }}>
                    {testQuestions.length - answeredCount} question{testQuestions.length - answeredCount > 1 ? "s" : ""} unanswered.
                  </p>
                )}
                {flaggedCount > 0 && (
                  <p className="text-sm mb-4" style={{ color: "#d97706" }}>
                    {flaggedCount} question{flaggedCount > 1 ? "s" : ""} flagged for review.
                  </p>
                )}
                <div className="flex gap-3 mt-4">
                  <button
                    onClick={() => setShowSubmitModal(false)}
                    className="flex-1 py-2 rounded-lg text-sm font-medium transition-all"
                    style={{ border: "1px solid var(--color-border-subtle)", color: "var(--color-ink-muted)" }}
                  >
                    Go Back
                  </button>
                  <button onClick={handleSubmit} className="flex-1 btn-primary py-2 text-sm font-semibold">
                    Submit
                  </button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    );
  }

  // =========================================================================
  // RESULTS MODE
  // =========================================================================
  if (mode === "results" && results) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
          {/* Score header */}
          <div className="card p-8 text-center mb-6">
            <div
              className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-4"
              style={{
                background: results.percentage >= 80 ? "rgba(16,185,129,0.08)" : results.percentage >= 50 ? "rgba(245,158,11,0.08)" : "rgba(239,68,68,0.08)",
              }}
            >
              <p
                className="text-3xl font-bold tabular-nums"
                style={{
                  color: results.percentage >= 80 ? "#059669" : results.percentage >= 50 ? "#d97706" : "#dc2626",
                }}
              >
                {results.percentage}%
              </p>
            </div>
            <p className="text-lg font-semibold mb-1" style={{ color: "var(--color-ink)" }}>
              {results.correct} of {results.total} correct
            </p>
            <p className="text-sm mb-4" style={{ color: "var(--color-ink-muted)" }}>
              Time: {results.timeString}
            </p>
            <p className="text-sm" style={{ color: "var(--color-ink-muted)" }}>
              {results.percentage === 100
                ? "Perfect score! You have mastered this material."
                : results.percentage >= 80
                ? "Strong performance. Review the few you missed to lock in a perfect score."
                : results.percentage >= 50
                ? "Solid foundation. Focus on the modules where you lost points."
                : "Keep studying. Review the explanations below and try again."}
            </p>

            {/* Action buttons */}
            <div className="flex items-center justify-center gap-3 mt-6">
              <button onClick={() => setMode("config")} className="btn-primary text-sm">
                New Test
              </button>
              {results.missed.length > 0 && (
                <button onClick={retakeMissed} className="btn-secondary text-sm">
                  Retake {results.missed.length} Missed
                </button>
              )}
              <button
                onClick={() => {
                  const text = `I scored ${results.percentage}% on my AP Econ practice test!`;
                  navigator.clipboard.writeText(text);
                }}
                className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg transition-colors"
                style={{ border: "1px solid var(--color-border-subtle)", color: "var(--color-ink-muted)" }}
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                </svg>
                Share
              </button>
            </div>
          </div>

          {/* Score by module */}
          <div className="card p-5 mb-6">
            <h3 className="text-[11px] font-semibold uppercase tracking-wider mb-4" style={{ color: "var(--color-ink-faint)" }}>
              Score by Module
            </h3>
            <div className="space-y-3">
              {results.moduleScores.map((ms) => {
                const pct = Math.round((ms.correct / ms.total) * 100);
                return (
                  <div key={ms.moduleId}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium" style={{ color: "var(--color-ink-light)" }}>
                        {ms.moduleName}
                      </span>
                      <span className="text-xs tabular-nums font-semibold" style={{ color: pct >= 80 ? "#059669" : pct >= 50 ? "#d97706" : "#dc2626" }}>
                        {ms.correct}/{ms.total} ({pct}%)
                      </span>
                    </div>
                    <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "var(--color-surface-sunken)" }}>
                      <div
                        className="h-full rounded-full transition-all duration-700 ease-out"
                        style={{
                          width: `${pct}%`,
                          background: pct >= 80 ? "#10b981" : pct >= 50 ? "#f59e0b" : "#ef4444",
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Question review */}
          <div className="mb-4">
            <h3 className="text-[11px] font-semibold uppercase tracking-wider mb-3" style={{ color: "var(--color-ink-faint)" }}>
              Question Review
            </h3>
          </div>
          <div className="space-y-3">
            {testQuestions.map((tq, i) => {
              const a = answers[i];
              const q = tq.shuffledQuestion;
              const isCorrect = a.selectedIndex === q.correctIndex;
              const wasFlagged = a.flagged;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.02 }}
                  className="card p-5"
                  style={{
                    borderLeft: wasFlagged
                      ? "3px solid #f59e0b"
                      : isCorrect
                      ? "3px solid #10b981"
                      : "3px solid #ef4444",
                  }}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-bold tabular-nums" style={{ color: "var(--color-ink-faint)" }}>
                        Q{i + 1}
                      </span>
                      <span
                        className="text-[10px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded"
                        style={{
                          background: tq.entry.course === "micro" ? "rgba(59,130,246,0.08)" : "rgba(139,92,246,0.08)",
                          color: tq.entry.course === "micro" ? "#2563eb" : "#6d28d9",
                        }}
                      >
                        {tq.entry.moduleName}
                      </span>
                      {wasFlagged && (
                        <svg className="w-3.5 h-3.5" style={{ color: "#d97706" }} fill="currentColor" viewBox="0 0 24 24" stroke="none">
                          <path d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
                        </svg>
                      )}
                    </div>
                    {isCorrect ? (
                      <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                  </div>

                  <p className="text-sm font-medium mb-3" style={{ color: "var(--color-ink)" }}>
                    {q.question}
                  </p>

                  <div className="space-y-1.5 mb-3">
                    {q.options.map((opt, oi) => {
                      const isCorrectOpt = oi === q.correctIndex;
                      const isSelectedOpt = oi === a.selectedIndex;
                      return (
                        <div
                          key={oi}
                          className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm"
                          style={{
                            background: isCorrectOpt
                              ? "rgba(16,185,129,0.08)"
                              : isSelectedOpt
                              ? "rgba(239,68,68,0.08)"
                              : "transparent",
                            border: isCorrectOpt
                              ? "1px solid rgba(16,185,129,0.2)"
                              : isSelectedOpt
                              ? "1px solid rgba(239,68,68,0.2)"
                              : "1px solid transparent",
                            color: isCorrectOpt
                              ? "#059669"
                              : isSelectedOpt
                              ? "#dc2626"
                              : "var(--color-ink-muted)",
                          }}
                        >
                          <span className="text-[11px] font-bold w-4">{String.fromCharCode(65 + oi)}</span>
                          <span className="flex-1">{opt}</span>
                          {isCorrectOpt && (
                            <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                          {isSelectedOpt && !isCorrectOpt && (
                            <svg className="w-4 h-4 text-red-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  <div className="p-3 rounded-lg" style={{ background: "var(--color-surface-sunken)", border: "1px solid var(--color-border-subtle)" }}>
                    <p className="text-xs font-semibold mb-1" style={{ color: "var(--color-ink-faint)" }}>
                      Explanation
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--color-ink-muted)" }}>
                      {q.explanation}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom actions */}
          <div className="flex items-center justify-center gap-3 mt-8 mb-8">
            <button onClick={() => setMode("config")} className="btn-primary text-sm">
              New Test
            </button>
            {results.missed.length > 0 && (
              <button onClick={retakeMissed} className="btn-secondary text-sm">
                Retake {results.missed.length} Missed
              </button>
            )}
          </div>
        </motion.div>
      </div>
    );
  }

  return null;
}
