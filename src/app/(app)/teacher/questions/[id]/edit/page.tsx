"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { microCourse, macroCourse } from "@/data/courses";

type Difficulty = "easy" | "medium" | "hard";

const allModules = [...microCourse.modules, ...macroCourse.modules];

function getModuleCourse(moduleId: string): "micro" | "macro" | null {
  if (microCourse.modules.some((m) => m.id === moduleId)) return "micro";
  if (macroCourse.modules.some((m) => m.id === moduleId)) return "macro";
  return null;
}

export default function EditQuestionPage() {
  const router = useRouter();
  const params = useParams();
  const questionId = params.id as string;

  // Form state
  const [questionText, setQuestionText] = useState("");
  const [moduleId, setModuleId] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correctIndex, setCorrectIndex] = useState<number>(0);
  const [explanation, setExplanation] = useState("");
  const [difficulty, setDifficulty] = useState<Difficulty>("medium");

  // UI state
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  const course = getModuleCourse(moduleId);

  // Fetch existing question
  useEffect(() => {
    async function fetchQuestion() {
      try {
        const res = await fetch(`/api/teacher/questions/${questionId}`);
        if (!res.ok) throw new Error("Not found");
        const data = await res.json();
        const q = data.question;
        setQuestionText(q.question);
        setModuleId(q.module_id);
        setOptions(q.options);
        setCorrectIndex(q.correct_index);
        setExplanation(q.explanation || "");
        setDifficulty(q.difficulty);
      } catch {
        setError("Could not load question.");
      } finally {
        setLoading(false);
      }
    }
    fetchQuestion();
  }, [questionId]);

  const updateOption = (index: number, value: string) => {
    setOptions((prev) => prev.map((o, i) => (i === index ? value : o)));
  };

  const canSubmit =
    questionText.trim().length > 0 &&
    moduleId !== "" &&
    options.every((o) => o.trim().length > 0) &&
    !saving;

  const handleSubmit = async () => {
    if (!canSubmit || !course) return;

    setSaving(true);
    setError("");

    try {
      const res = await fetch(`/api/teacher/questions/${questionId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: questionText.trim(),
          module_id: moduleId,
          course,
          options: options.map((o) => o.trim()),
          correct_index: correctIndex,
          explanation: explanation.trim() || null,
          difficulty,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Could not update question.");
        setSaving(false);
        return;
      }

      router.push("/teacher/questions");
    } catch {
      setError("Something went wrong. Try again.");
      setSaving(false);
    }
  };

  const difficultyColor = (d: Difficulty) => {
    if (d === "easy") return { bg: "#ecfdf5", color: "#059669" };
    if (d === "hard") return { bg: "#fef2f2", color: "#dc2626" };
    return { bg: "#fffbeb", color: "#d97706" };
  };

  if (loading) {
    return (
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        <div className="mb-6">
          <Link
            href="/teacher/questions"
            className="text-sm font-medium hover:text-blue-600 transition-colors"
            style={{ color: "var(--color-ink-muted)" }}
          >
            &larr; Question Bank
          </Link>
        </div>
        <div className="space-y-4 animate-pulse">
          <div className="h-6 w-48 rounded bg-gray-200" />
          <div className="h-4 w-64 rounded bg-gray-100" />
          <div className="card p-6 space-y-4">
            <div className="h-20 rounded bg-gray-100" />
            <div className="h-10 rounded bg-gray-50" />
            <div className="space-y-2">
              {[0, 1, 2, 3].map((i) => <div key={i} className="h-10 rounded bg-gray-50" />)}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error && !questionText) {
    return (
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        <div className="mb-6">
          <Link
            href="/teacher/questions"
            className="text-sm font-medium hover:text-blue-600 transition-colors"
            style={{ color: "var(--color-ink-muted)" }}
          >
            &larr; Question Bank
          </Link>
        </div>
        <div className="card p-8 text-center">
          <p className="text-sm" style={{ color: "#dc2626" }}>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Header */}
      <div className="mb-8">
        <nav className="module-breadcrumb mb-4">
          <Link href="/teacher">Teacher Dashboard</Link>
          <span>/</span>
          <Link href="/teacher/questions">Question Bank</Link>
          <span>/</span>
          <span className="current">Edit Question</span>
        </nav>
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold"
          style={{ color: "var(--color-ink)" }}
        >
          Edit Question
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="text-sm mt-1"
          style={{ color: "var(--color-ink-muted)" }}
        >
          Update your exam question.
        </motion.p>
      </div>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Left: Form */}
        <div className="lg:col-span-3 space-y-6">
          {/* Question text */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
          >
            <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--color-ink)" }}>
              Question Text <span className="text-red-400">*</span>
            </label>
            <textarea
              value={questionText}
              onChange={(e) => setQuestionText(e.target.value)}
              placeholder="e.g. What happens to the equilibrium price when demand increases?"
              maxLength={500}
              rows={3}
              className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow resize-none"
              style={{
                color: "var(--color-ink)",
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
              }}
            />
            <p className="text-[11px] mt-1 text-right" style={{ color: "var(--color-ink-faint)" }}>
              {questionText.length}/500
            </p>
          </motion.div>

          {/* Module selector */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--color-ink)" }}>
              Module <span className="text-red-400">*</span>
            </label>
            <select
              value={moduleId}
              onChange={(e) => setModuleId(e.target.value)}
              className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
              style={{
                color: "var(--color-ink)",
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
              }}
            >
              <option value="">Select a module...</option>
              <optgroup label="Microeconomics">
                {microCourse.modules.map((m) => (
                  <option key={m.id} value={m.id}>{m.title}</option>
                ))}
              </optgroup>
              <optgroup label="Macroeconomics">
                {macroCourse.modules.map((m) => (
                  <option key={m.id} value={m.id}>{m.title}</option>
                ))}
              </optgroup>
            </select>
          </motion.div>

          {/* Answer options */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            <label className="block text-sm font-medium mb-3" style={{ color: "var(--color-ink)" }}>
              Answer Options <span className="text-red-400">*</span>
            </label>
            <div className="space-y-2.5">
              {options.map((opt, i) => (
                <div key={i} className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setCorrectIndex(i)}
                    className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center transition-all"
                    style={{
                      background: correctIndex === i ? "#10b981" : "transparent",
                      border: correctIndex === i ? "none" : "2px solid var(--color-ink-faint)",
                    }}
                    title={`Mark option ${String.fromCharCode(65 + i)} as correct`}
                  >
                    {correctIndex === i && (
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </button>
                  <span
                    className="flex-shrink-0 w-6 h-6 rounded flex items-center justify-center text-[11px] font-bold"
                    style={{
                      background: correctIndex === i ? "rgba(16, 185, 129, 0.1)" : "var(--color-surface-sunken)",
                      color: correctIndex === i ? "#059669" : "var(--color-ink-muted)",
                    }}
                  >
                    {String.fromCharCode(65 + i)}
                  </span>
                  <input
                    type="text"
                    value={opt}
                    onChange={(e) => updateOption(i, e.target.value)}
                    placeholder={`Option ${String.fromCharCode(65 + i)}`}
                    className="flex-1 px-4 py-2.5 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                    style={{
                      color: "var(--color-ink)",
                      background: "var(--color-surface)",
                      border: correctIndex === i
                        ? "1.5px solid rgba(16, 185, 129, 0.4)"
                        : "1px solid var(--color-border)",
                    }}
                  />
                </div>
              ))}
            </div>
            <p className="text-[11px] mt-2" style={{ color: "var(--color-ink-faint)" }}>
              Click the circle to mark the correct answer.
            </p>
          </motion.div>

          {/* Explanation */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--color-ink)" }}>
              Explanation{" "}
              <span className="font-normal" style={{ color: "var(--color-ink-faint)" }}>(optional)</span>
            </label>
            <textarea
              value={explanation}
              onChange={(e) => setExplanation(e.target.value)}
              placeholder="Explain why this is the correct answer..."
              rows={3}
              className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow resize-none"
              style={{
                color: "var(--color-ink)",
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
              }}
            />
          </motion.div>

          {/* Difficulty */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            <label className="block text-sm font-medium mb-3" style={{ color: "var(--color-ink)" }}>
              Difficulty
            </label>
            <div className="flex gap-2">
              {(["easy", "medium", "hard"] as Difficulty[]).map((d) => {
                const colors = difficultyColor(d);
                const isActive = difficulty === d;
                return (
                  <button
                    key={d}
                    type="button"
                    onClick={() => setDifficulty(d)}
                    className="px-4 py-2 rounded-lg text-xs font-semibold transition-all capitalize"
                    style={{
                      background: isActive ? colors.bg : "var(--color-surface)",
                      color: isActive ? colors.color : "var(--color-ink-muted)",
                      border: isActive
                        ? `1.5px solid ${colors.color}30`
                        : "1.5px solid var(--color-border)",
                    }}
                  >
                    {d}
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Error */}
          <AnimatePresence>
            {error && (
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

          {/* Submit */}
          <motion.button
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            whileHover={canSubmit ? { scale: 1.005 } : {}}
            whileTap={canSubmit ? { scale: 0.98 } : {}}
            onClick={handleSubmit}
            disabled={!canSubmit}
            className="btn-primary w-full py-4 text-base font-semibold rounded-xl disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {saving ? (
              <span className="flex items-center justify-center gap-2">
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Updating Question...
              </span>
            ) : (
              "Update Question"
            )}
          </motion.button>
        </div>

        {/* Right: Preview */}
        <div className="lg:col-span-2">
          <div className="lg:sticky lg:top-8">
            <EditPreview
              question={questionText}
              options={options}
              correctIndex={correctIndex}
              explanation={explanation}
              difficulty={difficulty}
              moduleName={allModules.find((m) => m.id === moduleId)?.title || ""}
              course={course}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────── */
/*  PREVIEW COMPONENT                              */
/* ────────────────────────────────────────────── */

function EditPreview({
  question,
  options,
  correctIndex,
  explanation,
  difficulty,
  moduleName,
  course,
}: {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  difficulty: Difficulty;
  moduleName: string;
  course: "micro" | "macro" | null;
}) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const showExplanation = selectedAnswer !== null;
  const hasContent = question.trim().length > 0 || options.some((o) => o.trim().length > 0);

  const diffColor = () => {
    if (difficulty === "easy") return { bg: "#ecfdf5", color: "#059669" };
    if (difficulty === "hard") return { bg: "#fef2f2", color: "#dc2626" };
    return { bg: "#fffbeb", color: "#d97706" };
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
          Live Preview
        </span>
        {selectedAnswer !== null && (
          <button
            onClick={() => setSelectedAnswer(null)}
            className="ml-auto text-[10px] font-medium px-2 py-0.5 rounded-md transition-colors"
            style={{ color: "var(--color-ink-faint)", background: "var(--color-surface-sunken)" }}
          >
            Reset
          </button>
        )}
      </div>

      <div className="p-5">
        {!hasContent ? (
          <div className="text-center py-8">
            <p className="text-sm" style={{ color: "var(--color-ink-faint)" }}>
              Start typing to see your question preview
            </p>
          </div>
        ) : (
          <div>
            <div className="flex flex-wrap gap-2 mb-3">
              {moduleName && (
                <span
                  className={`badge ${course === "micro" ? "badge-micro" : course === "macro" ? "badge-macro" : ""}`}
                >
                  {moduleName}
                </span>
              )}
              <span
                className="badge capitalize"
                style={{ background: diffColor().bg, color: diffColor().color }}
              >
                {difficulty}
              </span>
            </div>

            <h3
              className="text-[15px] font-medium leading-snug mb-4"
              style={{ color: "var(--color-ink)" }}
            >
              {question || "Your question will appear here..."}
            </h3>

            <div className="space-y-2">
              {options.map((opt, i) => {
                const isCorrect = i === correctIndex;
                const isSelected = i === selectedAnswer;
                const isAnswered = selectedAnswer !== null;

                let style: React.CSSProperties = {
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  color: "var(--color-ink-light)",
                  cursor: "pointer",
                };

                if (isAnswered) {
                  if (isCorrect) {
                    style = {
                      background: "rgba(16, 185, 129, 0.06)",
                      border: "1px solid rgba(16, 185, 129, 0.3)",
                      color: "#059669",
                    };
                  } else if (isSelected) {
                    style = {
                      background: "rgba(239, 68, 68, 0.06)",
                      border: "1px solid rgba(239, 68, 68, 0.3)",
                      color: "#dc2626",
                    };
                  } else {
                    style = {
                      background: "var(--color-surface)",
                      border: "1px solid var(--color-border-subtle)",
                      color: "var(--color-ink-faint)",
                    };
                  }
                }

                return (
                  <button
                    key={i}
                    onClick={() => !isAnswered && setSelectedAnswer(i)}
                    disabled={isAnswered}
                    className="w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors"
                    style={style}
                  >
                    <span className="flex items-center gap-3">
                      <span
                        className="w-5 h-5 rounded flex items-center justify-center text-[10px] font-bold"
                        style={{
                          background: isAnswered && isCorrect
                            ? "#10b981"
                            : isAnswered && isSelected
                            ? "#ef4444"
                            : "var(--color-surface-sunken)",
                          color: isAnswered && (isCorrect || isSelected)
                            ? "white"
                            : "var(--color-ink-muted)",
                        }}
                      >
                        {isAnswered && isCorrect ? (
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        ) : isAnswered && isSelected ? (
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        ) : (
                          String.fromCharCode(65 + i)
                        )}
                      </span>
                      <span className="flex-1">{opt || `Option ${String.fromCharCode(65 + i)}`}</span>
                    </span>
                  </button>
                );
              })}
            </div>

            <AnimatePresence>
              {showExplanation && explanation.trim() && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="mt-4"
                >
                  <div
                    className={`p-4 rounded-lg border ${
                      selectedAnswer === correctIndex
                        ? "bg-emerald-50 border-emerald-100"
                        : "bg-gray-50 border-gray-200"
                    }`}
                  >
                    <p
                      className={`text-xs font-semibold mb-1.5 ${
                        selectedAnswer === correctIndex ? "text-emerald-600" : "text-gray-500"
                      }`}
                    >
                      {selectedAnswer === correctIndex ? "Correct" : "Incorrect"}
                    </p>
                    <p
                      className={`text-sm leading-relaxed ${
                        selectedAnswer === correctIndex ? "text-emerald-800" : "text-gray-700"
                      }`}
                    >
                      {explanation}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
}
