"use client";

import { useState, useEffect, useMemo } from "react";
import { useAuth } from "@/components/providers/AuthProvider";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { microCourse, macroCourse } from "@/data/courses";
import type { TeacherQuestion } from "@/lib/types/teacher";

type CourseFilter = "all" | "micro" | "macro";
type DifficultyFilter = "all" | "easy" | "medium" | "hard";

const allModules = [...microCourse.modules, ...macroCourse.modules];

function getModuleName(moduleId: string): string {
  return allModules.find((m) => m.id === moduleId)?.title || moduleId;
}

export default function TeacherQuestionsPage() {
  const { user } = useAuth();

  const [questions, setQuestions] = useState<TeacherQuestion[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Filters
  const [courseFilter, setCourseFilter] = useState<CourseFilter>("all");
  const [moduleFilter, setModuleFilter] = useState("all");
  const [difficultyFilter, setDifficultyFilter] = useState<DifficultyFilter>("all");
  const [search, setSearch] = useState("");

  // Bulk selection
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [deleting, setDeleting] = useState(false);

  // Fetch questions
  useEffect(() => {
    async function fetchQuestions() {
      try {
        const params = new URLSearchParams();
        if (courseFilter !== "all") params.set("course", courseFilter);
        if (moduleFilter !== "all") params.set("module", moduleFilter);
        if (difficultyFilter !== "all") params.set("difficulty", difficultyFilter);
        if (search.trim()) params.set("search", search.trim());

        const res = await fetch(`/api/teacher/questions?${params.toString()}`);
        if (!res.ok) throw new Error("Failed to load questions");
        const data = await res.json();
        setQuestions(data.questions || []);
      } catch (err) {
        setError("Could not load questions. Please try again.");
      } finally {
        setLoading(false);
      }
    }
    fetchQuestions();
  }, [courseFilter, moduleFilter, difficultyFilter, search]);

  // Available modules based on course filter
  const filteredModules = useMemo(() => {
    if (courseFilter === "micro") return microCourse.modules;
    if (courseFilter === "macro") return macroCourse.modules;
    return allModules;
  }, [courseFilter]);

  // Reset module filter when course changes
  useEffect(() => {
    setModuleFilter("all");
  }, [courseFilter]);

  // Toggle selection
  const toggleSelect = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const toggleSelectAll = () => {
    if (selected.size === questions.length) {
      setSelected(new Set());
    } else {
      setSelected(new Set(questions.map((q) => q.id)));
    }
  };

  // Delete single question
  const handleDelete = async (id: string) => {
    if (!confirm("Delete this question? This cannot be undone.")) return;
    try {
      const res = await fetch(`/api/teacher/questions/${id}`, { method: "DELETE" });
      if (res.ok) {
        setQuestions((prev) => prev.filter((q) => q.id !== id));
        setSelected((prev) => {
          const next = new Set(prev);
          next.delete(id);
          return next;
        });
      }
    } catch {}
  };

  // Bulk delete
  const handleBulkDelete = async () => {
    if (selected.size === 0) return;
    if (!confirm(`Delete ${selected.size} question${selected.size > 1 ? "s" : ""}? This cannot be undone.`)) return;
    setDeleting(true);
    try {
      await Promise.all(
        Array.from(selected).map((id) =>
          fetch(`/api/teacher/questions/${id}`, { method: "DELETE" })
        )
      );
      setQuestions((prev) => prev.filter((q) => !selected.has(q.id)));
      setSelected(new Set());
    } catch {} finally {
      setDeleting(false);
    }
  };

  const difficultyColor = (d: string) => {
    if (d === "easy") return { bg: "#ecfdf5", color: "#059669" };
    if (d === "hard") return { bg: "#fef2f2", color: "#dc2626" };
    return { bg: "#fffbeb", color: "#d97706" };
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
      {/* Breadcrumb */}
      <div className="mb-6">
        <Link
          href="/teacher"
          className="text-sm font-medium hover:text-blue-600 transition-colors"
          style={{ color: "var(--color-ink-muted)" }}
        >
          &larr; Teacher Dashboard
        </Link>
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8"
      >
        <div>
          <h1 className="text-2xl font-bold" style={{ color: "var(--color-ink)" }}>
            Question Bank
          </h1>
          <p className="text-sm mt-1" style={{ color: "var(--color-ink-muted)" }}>
            {loading ? "Loading..." : `${questions.length} question${questions.length !== 1 ? "s" : ""}`}
          </p>
        </div>
        <Link
          href="/teacher/questions/new"
          className="btn-primary inline-flex items-center gap-2 text-sm shrink-0"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          Create Question
        </Link>
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        className="card p-4 mb-6"
      >
        <div className="flex flex-col sm:flex-row flex-wrap gap-3">
          {/* Course filter */}
          <div className="flex gap-1 p-0.5 rounded-lg" style={{ background: "var(--color-surface-sunken)" }}>
            {(["all", "micro", "macro"] as CourseFilter[]).map((c) => (
              <button
                key={c}
                onClick={() => setCourseFilter(c)}
                className="px-3 py-1.5 rounded-md text-xs font-medium transition-all"
                style={{
                  background: courseFilter === c ? "var(--color-surface)" : "transparent",
                  color: courseFilter === c ? "var(--color-ink)" : "var(--color-ink-muted)",
                  boxShadow: courseFilter === c ? "0 1px 2px rgb(0 0 0 / 0.06)" : "none",
                }}
              >
                {c === "all" ? "All" : c === "micro" ? "Micro" : "Macro"}
              </button>
            ))}
          </div>

          {/* Module filter */}
          <select
            value={moduleFilter}
            onChange={(e) => setModuleFilter(e.target.value)}
            className="px-3 py-1.5 rounded-lg text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
            style={{
              color: "var(--color-ink)",
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
            }}
          >
            <option value="all">All Modules</option>
            {courseFilter !== "macro" && (
              <optgroup label="Microeconomics">
                {microCourse.modules.map((m) => (
                  <option key={m.id} value={m.id}>{m.title}</option>
                ))}
              </optgroup>
            )}
            {courseFilter !== "micro" && (
              <optgroup label="Macroeconomics">
                {macroCourse.modules.map((m) => (
                  <option key={m.id} value={m.id}>{m.title}</option>
                ))}
              </optgroup>
            )}
          </select>

          {/* Difficulty filter */}
          <div className="flex gap-1 p-0.5 rounded-lg" style={{ background: "var(--color-surface-sunken)" }}>
            {(["all", "easy", "medium", "hard"] as DifficultyFilter[]).map((d) => (
              <button
                key={d}
                onClick={() => setDifficultyFilter(d)}
                className="px-3 py-1.5 rounded-md text-xs font-medium transition-all capitalize"
                style={{
                  background: difficultyFilter === d ? "var(--color-surface)" : "transparent",
                  color: difficultyFilter === d ? "var(--color-ink)" : "var(--color-ink-muted)",
                  boxShadow: difficultyFilter === d ? "0 1px 2px rgb(0 0 0 / 0.06)" : "none",
                }}
              >
                {d === "all" ? "All" : d}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="flex-1 min-w-[200px]">
            <div className="relative">
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                style={{ color: "var(--color-ink-faint)" }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search questions..."
                className="w-full pl-9 pr-3 py-1.5 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{
                  color: "var(--color-ink)",
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                }}
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bulk actions */}
      <AnimatePresence>
        {selected.size > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="card p-3 mb-4 flex items-center justify-between"
            style={{ background: "var(--color-surface-sunken)" }}
          >
            <div className="flex items-center gap-3">
              <button
                onClick={toggleSelectAll}
                className="text-xs font-medium px-2 py-1 rounded-md transition-colors"
                style={{ color: "var(--color-ink-muted)" }}
              >
                {selected.size === questions.length ? "Deselect All" : "Select All"}
              </button>
              <span className="text-xs" style={{ color: "var(--color-ink-muted)" }}>
                {selected.size} selected
              </span>
            </div>
            <button
              onClick={handleBulkDelete}
              disabled={deleting}
              className="text-xs font-medium px-3 py-1.5 rounded-lg transition-colors"
              style={{ background: "#fef2f2", color: "#dc2626" }}
            >
              {deleting ? "Deleting..." : `Delete Selected (${selected.size})`}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content */}
      {loading ? (
        <div className="space-y-4">
          {[0, 1, 2].map((i) => (
            <div key={i} className="card p-6 animate-pulse">
              <div className="h-4 w-3/4 rounded bg-gray-200 mb-3" />
              <div className="h-3 w-1/2 rounded bg-gray-100 mb-4" />
              <div className="space-y-2">
                {[0, 1, 2, 3].map((j) => (
                  <div key={j} className="h-8 rounded-lg bg-gray-50" />
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : error ? (
        <div className="card p-8 text-center">
          <p className="text-sm" style={{ color: "#dc2626" }}>{error}</p>
        </div>
      ) : questions.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          className="card p-12 text-center"
        >
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
            style={{ background: "var(--color-surface-sunken)" }}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
              style={{ color: "var(--color-ink-faint)" }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
          </div>
          <h3 className="text-base font-semibold mb-1" style={{ color: "var(--color-ink)" }}>
            Create your first exam question
          </h3>
          <p className="text-sm mb-5" style={{ color: "var(--color-ink-muted)" }}>
            Build a private question bank for your formal exams and assessments.
          </p>
          <Link href="/teacher/questions/new" className="btn-primary inline-flex items-center gap-2 text-sm">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            Create Question
          </Link>
        </motion.div>
      ) : (
        <div className="space-y-4">
          {questions.map((q, idx) => {
            const diff = difficultyColor(q.difficulty);
            const courseLabel = q.course === "micro" ? "Micro" : "Macro";
            const courseBadgeClass = q.course === "micro" ? "badge-micro" : "badge-macro";

            return (
              <motion.div
                key={q.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.03, duration: 0.25 }}
                className="card p-5 group"
              >
                <div className="flex items-start gap-3">
                  {/* Checkbox */}
                  <button
                    onClick={() => toggleSelect(q.id)}
                    className="mt-0.5 flex-shrink-0 w-4 h-4 rounded flex items-center justify-center transition-all"
                    style={{
                      background: selected.has(q.id) ? "var(--color-ink)" : "transparent",
                      border: selected.has(q.id) ? "none" : "1.5px solid var(--color-ink-faint)",
                    }}
                  >
                    {selected.has(q.id) && (
                      <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </button>

                  <div className="flex-1 min-w-0">
                    {/* Question text */}
                    <p
                      className="text-sm font-medium leading-snug mb-2"
                      style={{
                        color: "var(--color-ink)",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {q.question}
                    </p>

                    {/* Badges */}
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className={`badge ${courseBadgeClass}`}>{courseLabel}</span>
                      <span
                        className="badge"
                        style={{ background: "var(--color-surface-sunken)", color: "var(--color-ink-muted)" }}
                      >
                        {getModuleName(q.module_id)}
                      </span>
                      <span
                        className="badge"
                        style={{ background: diff.bg, color: diff.color }}
                      >
                        {q.difficulty}
                      </span>
                    </div>

                    {/* Options */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mb-3">
                      {(q.options as string[]).map((opt, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs"
                          style={{
                            background: i === q.correct_index ? "rgba(16, 185, 129, 0.08)" : "var(--color-surface-sunken)",
                            border: i === q.correct_index ? "1px solid rgba(16, 185, 129, 0.2)" : "1px solid transparent",
                            color: i === q.correct_index ? "#059669" : "var(--color-ink-muted)",
                          }}
                        >
                          <span className="font-bold w-4 text-[10px]">{String.fromCharCode(65 + i)}</span>
                          <span className="flex-1 truncate">{opt}</span>
                          {i === q.correct_index && (
                            <svg className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Footer: date + actions */}
                    <div className="flex items-center justify-between">
                      <span className="text-[11px]" style={{ color: "var(--color-ink-faint)" }}>
                        {new Date(q.created_at).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                      <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Link
                          href={`/teacher/questions/${q.id}/edit`}
                          className="text-xs font-medium px-2.5 py-1 rounded-md transition-colors hover:bg-blue-50"
                          style={{ color: "#3B82F6" }}
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => handleDelete(q.id)}
                          className="text-xs font-medium px-2.5 py-1 rounded-md transition-colors hover:bg-red-50"
                          style={{ color: "#dc2626" }}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
}
