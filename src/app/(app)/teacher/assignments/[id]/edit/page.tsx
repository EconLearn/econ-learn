"use client";

import { useEffect, useState, useMemo } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import { questionBank, moduleInfo, type QuestionBankEntry } from "@/data/question-bank";

interface AssignmentData {
  id: string;
  classroom_id: string;
  title: string;
  type: string;
  due_date: string | null;
  config: Record<string, unknown>;
  status: string;
  classroom_name?: string;
}

export default function EditAssignmentPage() {
  const router = useRouter();
  const params = useParams();
  const assignmentId = params.id as string;

  const [assignment, setAssignment] = useState<AssignmentData | null>(null);
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [selectedBankIds, setSelectedBankIds] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [filterModule, setFilterModule] = useState<string>("all");
  const [filterCourse, setFilterCourse] = useState<"all" | "micro" | "macro">("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch assignment data
  useEffect(() => {
    async function fetchAssignment() {
      try {
        const res = await fetch(`/api/assignments/${assignmentId}`);
        if (!res.ok) throw new Error("Assignment not found");
        const data = await res.json();
        const a = data.assignment;
        setAssignment(a);
        setTitle(a.title);
        setDueDate(a.due_date ? a.due_date.split("T")[0] : "");
        setSelectedBankIds((a.config?.bank_question_ids as number[]) || []);
      } catch {
        setError("Could not load assignment.");
      } finally {
        setLoading(false);
      }
    }
    fetchAssignment();
  }, [assignmentId]);

  // Filter question bank for exam type
  const filteredQuestions = useMemo(() => {
    let questions = questionBank;
    if (filterCourse !== "all") {
      questions = questions.filter((q) => q.course === filterCourse);
    }
    if (filterModule !== "all") {
      questions = questions.filter((q) => q.moduleId === filterModule);
    }
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      questions = questions.filter(
        (q) =>
          q.question.question.toLowerCase().includes(query) ||
          q.moduleName.toLowerCase().includes(query)
      );
    }
    return questions;
  }, [filterCourse, filterModule, searchQuery]);

  const filteredModuleInfo = useMemo(() => {
    if (filterCourse === "all") return moduleInfo;
    return moduleInfo.filter((m) => m.course === filterCourse);
  }, [filterCourse]);

  const toggleQuestion = (index: number) => {
    setSelectedBankIds((prev) =>
      prev.includes(index)
        ? prev.filter((id) => id !== index)
        : [...prev, index]
    );
  };

  const handleSave = async () => {
    if (!assignment) return;
    setSaving(true);
    setError("");
    setSuccess("");

    try {
      const updatedConfig = { ...assignment.config };
      if (assignment.type === "exam") {
        updatedConfig.bank_question_ids = selectedBankIds;
      }

      const res = await fetch(`/api/assignments/${assignmentId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: title.trim(),
          due_date: dueDate || null,
          config: updatedConfig,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        setError(data.error || "Failed to save changes.");
        setSaving(false);
        return;
      }

      setSuccess("Assignment updated successfully.");
      setTimeout(() => setSuccess(""), 3000);
    } catch {
      setError("Something went wrong. Try again.");
    }
    setSaving(false);
  };

  const handleDelete = async () => {
    if (!confirm("Delete this assignment? This cannot be undone.")) return;
    setDeleting(true);
    setError("");

    try {
      const res = await fetch(`/api/assignments/${assignmentId}`, {
        method: "DELETE",
      });
      if (res.ok) {
        router.push("/teacher/assignments");
      } else {
        const data = await res.json();
        setError(data.error || "Failed to delete assignment.");
        setDeleting(false);
      }
    } catch {
      setError("Failed to delete assignment.");
      setDeleting(false);
    }
  };

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-10">
        <div className="mb-6">
          <Link
            href="/teacher/assignments"
            className="text-sm font-medium hover:text-blue-600 transition-colors"
            style={{ color: "var(--color-ink-muted)" }}
          >
            &larr; All Assignments
          </Link>
        </div>
        <div className="animate-pulse space-y-4">
          <div className="h-8 w-48 rounded" style={{ background: "var(--color-surface-sunken)" }} />
          <div className="h-4 w-72 rounded" style={{ background: "var(--color-surface-sunken)" }} />
          <div className="card p-6 space-y-4">
            <div className="h-10 rounded" style={{ background: "var(--color-surface-sunken)" }} />
            <div className="h-10 rounded" style={{ background: "var(--color-surface-sunken)" }} />
          </div>
        </div>
      </div>
    );
  }

  if (error && !assignment) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-10">
        <div className="mb-6">
          <Link
            href="/teacher/assignments"
            className="text-sm font-medium hover:text-blue-600 transition-colors"
            style={{ color: "var(--color-ink-muted)" }}
          >
            &larr; All Assignments
          </Link>
        </div>
        <div className="card p-8 text-center">
          <p className="text-sm" style={{ color: "#dc2626" }}>{error}</p>
        </div>
      </div>
    );
  }

  if (!assignment) return null;

  const isExam = assignment.type === "exam";

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      {/* Breadcrumb */}
      <nav className="module-breadcrumb mb-6">
        <Link href="/teacher">Teacher Dashboard</Link>
        <span>/</span>
        <Link href="/teacher/assignments">Assignments</Link>
        <span>/</span>
        <span className="current">Edit</span>
      </nav>

      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold" style={{ color: "var(--color-ink)" }}>
            Edit Assignment
          </h1>
          <p className="text-sm mt-1" style={{ color: "var(--color-ink-muted)" }}>
            {assignment.classroom_name && `${assignment.classroom_name} \u2022 `}
            {assignment.type === "exam" ? "Exam" : assignment.type === "quiz" ? "Quiz" : assignment.type === "practice_test" ? "Practice Test" : "Lesson"}
          </p>
        </div>
        <button
          onClick={handleDelete}
          disabled={deleting}
          className="text-xs font-medium px-4 py-2 rounded-lg transition-colors hover:bg-red-50"
          style={{ color: "#EF4444", border: "1px solid rgba(239, 68, 68, 0.3)" }}
        >
          {deleting ? "Deleting..." : "Delete Assignment"}
        </button>
      </div>

      {/* Feedback messages */}
      {error && (
        <div
          className="mb-4 px-4 py-3 rounded-lg text-sm font-medium"
          style={{ background: "rgba(239, 68, 68, 0.08)", color: "#dc2626" }}
        >
          {error}
        </div>
      )}
      {success && (
        <div
          className="mb-4 px-4 py-3 rounded-lg text-sm font-medium"
          style={{ background: "rgba(34, 197, 94, 0.08)", color: "#15803d" }}
        >
          {success}
        </div>
      )}

      {/* Form */}
      <div className="space-y-6">
        {/* Title */}
        <div className="card p-5">
          <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--color-ink)" }}>
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
            style={{
              color: "var(--color-ink)",
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
            }}
          />
        </div>

        {/* Due Date */}
        <div className="card p-5">
          <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--color-ink)" }}>
            Due Date
          </label>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
            style={{
              color: "var(--color-ink)",
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
            }}
          />
          {dueDate && (
            <button
              onClick={() => setDueDate("")}
              className="text-[11px] mt-1.5 font-medium transition-colors hover:opacity-80"
              style={{ color: "var(--color-ink-faint)" }}
            >
              Clear due date
            </button>
          )}
        </div>

        {/* Question Selection for Exams */}
        {isExam && (
          <div className="card p-5">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-sm font-semibold" style={{ color: "var(--color-ink)" }}>
                  Exam Questions
                </h3>
                <p className="text-[11px] mt-0.5" style={{ color: "var(--color-ink-faint)" }}>
                  {selectedBankIds.length} question{selectedBankIds.length !== 1 ? "s" : ""} selected
                </p>
              </div>
              {selectedBankIds.length > 0 && (
                <button
                  onClick={() => setSelectedBankIds([])}
                  className="text-[11px] font-medium px-3 py-1 rounded-md transition-colors"
                  style={{ color: "var(--color-ink-faint)", background: "var(--color-surface-sunken)" }}
                >
                  Clear All
                </button>
              )}
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-2 mb-4">
              <select
                value={filterCourse}
                onChange={(e) => {
                  setFilterCourse(e.target.value as "all" | "micro" | "macro");
                  setFilterModule("all");
                }}
                className="px-3 py-1.5 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{
                  color: "var(--color-ink)",
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                }}
              >
                <option value="all">All Courses</option>
                <option value="micro">Microeconomics</option>
                <option value="macro">Macroeconomics</option>
              </select>
              <select
                value={filterModule}
                onChange={(e) => setFilterModule(e.target.value)}
                className="px-3 py-1.5 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{
                  color: "var(--color-ink)",
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                }}
              >
                <option value="all">All Modules</option>
                {filteredModuleInfo.map((m) => (
                  <option key={m.moduleId} value={m.moduleId}>
                    {m.moduleName} ({m.questionCount})
                  </option>
                ))}
              </select>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search questions..."
                className="flex-1 min-w-[160px] px-3 py-1.5 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{
                  color: "var(--color-ink)",
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                }}
              />
            </div>

            {/* Question List */}
            <div
              className="max-h-[400px] overflow-y-auto rounded-lg"
              style={{ border: "1px solid var(--color-border-subtle)" }}
            >
              {filteredQuestions.length === 0 ? (
                <div className="p-6 text-center">
                  <p className="text-xs" style={{ color: "var(--color-ink-faint)" }}>
                    No questions match your filters.
                  </p>
                </div>
              ) : (
                filteredQuestions.map((entry: QuestionBankEntry, globalIdx: number) => {
                  const bankIndex = questionBank.indexOf(entry);
                  const isSelected = selectedBankIds.includes(bankIndex);

                  return (
                    <label
                      key={bankIndex}
                      className="flex items-start gap-3 px-4 py-3 cursor-pointer transition-colors hover:opacity-90"
                      style={{
                        background: isSelected ? "rgba(59, 130, 246, 0.04)" : "transparent",
                        borderBottom:
                          globalIdx < filteredQuestions.length - 1
                            ? "1px solid var(--color-border-subtle)"
                            : undefined,
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => toggleQuestion(bankIndex)}
                        className="mt-0.5 w-4 h-4 rounded accent-blue-500 flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <p
                          className="text-xs font-medium leading-snug"
                          style={{ color: "var(--color-ink)" }}
                        >
                          {entry.question.question}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <span
                            className="text-[10px] font-medium px-1.5 py-0.5 rounded"
                            style={{
                              background: entry.course === "micro"
                                ? "rgba(59, 130, 246, 0.08)"
                                : "rgba(139, 92, 246, 0.08)",
                              color: entry.course === "micro" ? "#2563eb" : "#7c3aed",
                            }}
                          >
                            {entry.moduleName}
                          </span>
                        </div>
                      </div>
                    </label>
                  );
                })
              )}
            </div>
          </div>
        )}

        {/* Save Button */}
        <button
          onClick={handleSave}
          disabled={saving || !title.trim()}
          className="btn-primary w-full py-3 text-sm font-semibold rounded-xl disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {saving ? (
            <span className="flex items-center justify-center gap-2">
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Saving...
            </span>
          ) : (
            "Save Changes"
          )}
        </button>
      </div>
    </div>
  );
}
