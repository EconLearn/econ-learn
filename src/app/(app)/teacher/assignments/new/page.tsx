"use client";

import { useState, Suspense } from "react";
import { useAuth } from "@/components/providers/AuthProvider";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { microCourse, macroCourse } from "@/data/courses";
import { lessonPlans } from "@/data/lesson-plans";

type AssignmentType = "lesson" | "quiz" | "practice_test";

export default function NewAssignmentPage() {
  return (
    <Suspense fallback={<div className="min-h-[60vh] flex items-center justify-center"><div className="w-6 h-6 border-2 border-gray-300 border-t-gray-900 rounded-full animate-spin" /></div>}>
      <NewAssignmentContent />
    </Suspense>
  );
}

function NewAssignmentContent() {
  const { user } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const classroomId = searchParams.get("classroom");

  const [title, setTitle] = useState("");
  const [type, setType] = useState<AssignmentType>("lesson");
  const [selectedModules, setSelectedModules] = useState<string[]>([]);
  const [dueDate, setDueDate] = useState("");
  const [quizLength, setQuizLength] = useState(10);
  const [timeLimit, setTimeLimit] = useState<number | null>(null);
  const [retakesAllowed, setRetakesAllowed] = useState(true);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [error, setError] = useState("");
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const allModules = [
    ...microCourse.modules.map((m) => ({ ...m, course: "micro" as const })),
    ...macroCourse.modules.map((m) => ({ ...m, course: "macro" as const })),
  ];

  const toggleModule = (moduleId: string) => {
    setSelectedModules((prev) =>
      prev.includes(moduleId) ? prev.filter((id) => id !== moduleId) : [...prev, moduleId]
    );
    setSelectedPlan(null);
  };

  const selectLessonPlan = (planId: string) => {
    const plan = lessonPlans.find((p) => p.id === planId);
    if (!plan) return;
    setSelectedPlan(planId);
    setSelectedModules(plan.module_ids);
    setTitle(plan.title);
    setType("lesson");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!classroomId || !title.trim() || selectedModules.length === 0 || status === "loading") return;

    setStatus("loading");
    setError("");

    try {
      const res = await fetch("/api/assignments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          classroom_id: classroomId,
          title: title.trim(),
          type,
          module_ids: selectedModules,
          due_date: dueDate || null,
          config: {
            quiz_length: type !== "lesson" ? quizLength : undefined,
            time_limit_minutes: type !== "lesson" ? timeLimit : undefined,
            retakes_allowed: type !== "lesson" ? retakesAllowed : undefined,
          },
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setError(data.error || "Could not create assignment.");
        return;
      }

      router.push(`/teacher/classrooms/${classroomId}`);
    } catch {
      setStatus("error");
      setError("Something went wrong. Try again.");
    }
  };

  if (!classroomId) {
    return (
      <div className="max-w-md mx-auto px-6 py-20 text-center">
        <p className="text-sm mb-4" style={{ color: "var(--color-ink-muted)" }}>
          Select a classroom first.
        </p>
        <Link href="/teacher" className="btn-primary py-2.5 px-6 text-sm">
          Go to Teacher Dashboard
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-10">
      <div className="mb-6">
        <Link
          href={`/teacher/classrooms/${classroomId}`}
          className="text-sm font-medium hover:text-blue-600 transition-colors"
          style={{ color: "var(--color-ink-muted)" }}
        >
          &larr; Back to Classroom
        </Link>
      </div>

      <h1 className="text-2xl font-bold mb-2" style={{ color: "var(--color-ink)" }}>
        Create Assignment
      </h1>
      <p className="text-sm mb-8" style={{ color: "var(--color-ink-muted)" }}>
        Assign lesson plans, quizzes, or practice tests to your students.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Quick Lesson Plans */}
        <div>
          <label className="block text-sm font-semibold mb-3" style={{ color: "var(--color-ink)" }}>
            Quick Start: Lesson Plans
          </label>
          <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto pr-1">
            {lessonPlans.filter((p) => !p.id.includes("full-course") && !p.id.includes("review")).slice(0, 12).map((plan) => (
              <button
                key={plan.id}
                type="button"
                onClick={() => selectLessonPlan(plan.id)}
                className="text-left p-3 rounded-lg text-xs transition-all"
                style={{
                  background: selectedPlan === plan.id ? "rgba(59, 130, 246, 0.08)" : "var(--color-surface)",
                  border: selectedPlan === plan.id ? "1px solid rgba(59, 130, 246, 0.3)" : "1px solid var(--color-border-subtle)",
                  color: "var(--color-ink)",
                }}
              >
                <p className="font-medium">{plan.title}</p>
                <p className="mt-0.5" style={{ color: "var(--color-ink-faint)" }}>
                  ~{plan.estimated_minutes} min
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Assignment Type */}
        <div>
          <label className="block text-sm font-semibold mb-2" style={{ color: "var(--color-ink)" }}>
            Assignment Type
          </label>
          <div className="flex gap-2">
            {(["lesson", "quiz", "practice_test"] as AssignmentType[]).map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setType(t)}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all"
                style={{
                  background: type === t ? "var(--color-ink)" : "var(--color-surface)",
                  color: type === t ? "white" : "var(--color-ink-muted)",
                  border: type === t ? "none" : "1px solid var(--color-border)",
                }}
              >
                {t === "lesson" ? "Lesson" : t === "quiz" ? "Quiz" : "Practice Test"}
              </button>
            ))}
          </div>
        </div>

        {/* Title */}
        <div>
          <label className="block text-sm font-semibold mb-1.5" style={{ color: "var(--color-ink)" }}>
            Title *
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. Unit 1 Quiz: Supply and Demand"
            maxLength={100}
            className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            style={{
              color: "var(--color-ink)",
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
            }}
          />
        </div>

        {/* Module Selection */}
        <div>
          <label className="block text-sm font-semibold mb-2" style={{ color: "var(--color-ink)" }}>
            Modules ({selectedModules.length} selected)
          </label>

          <div className="space-y-3">
            <div>
              <p className="text-xs font-medium mb-1.5 uppercase tracking-wider" style={{ color: "var(--color-ink-faint)" }}>
                Microeconomics
              </p>
              <div className="flex flex-wrap gap-1.5">
                {microCourse.modules.map((m) => (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => toggleModule(m.id)}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium transition-all"
                    style={{
                      background: selectedModules.includes(m.id) ? "rgba(59, 130, 246, 0.1)" : "var(--color-surface)",
                      color: selectedModules.includes(m.id) ? "#3B82F6" : "var(--color-ink-muted)",
                      border: selectedModules.includes(m.id) ? "1px solid rgba(59, 130, 246, 0.3)" : "1px solid var(--color-border-subtle)",
                    }}
                  >
                    {m.title}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-medium mb-1.5 uppercase tracking-wider" style={{ color: "var(--color-ink-faint)" }}>
                Macroeconomics
              </p>
              <div className="flex flex-wrap gap-1.5">
                {macroCourse.modules.map((m) => (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => toggleModule(m.id)}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium transition-all"
                    style={{
                      background: selectedModules.includes(m.id) ? "rgba(139, 92, 246, 0.1)" : "var(--color-surface)",
                      color: selectedModules.includes(m.id) ? "#8B5CF6" : "var(--color-ink-muted)",
                      border: selectedModules.includes(m.id) ? "1px solid rgba(139, 92, 246, 0.3)" : "1px solid var(--color-border-subtle)",
                    }}
                  >
                    {m.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quiz/Test Config */}
        {type !== "lesson" && (
          <div className="card p-5 space-y-4">
            <p className="text-sm font-semibold" style={{ color: "var(--color-ink)" }}>
              {type === "quiz" ? "Quiz" : "Practice Test"} Settings
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium mb-1" style={{ color: "var(--color-ink-muted)" }}>
                  Questions
                </label>
                <select
                  value={quizLength}
                  onChange={(e) => setQuizLength(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-lg text-sm"
                  style={{
                    color: "var(--color-ink)",
                    background: "var(--color-surface)",
                    border: "1px solid var(--color-border)",
                  }}
                >
                  <option value={5}>5 questions</option>
                  <option value={10}>10 questions</option>
                  <option value={15}>15 questions</option>
                  <option value={20}>20 questions</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium mb-1" style={{ color: "var(--color-ink-muted)" }}>
                  Time Limit
                </label>
                <select
                  value={timeLimit ?? "none"}
                  onChange={(e) => setTimeLimit(e.target.value === "none" ? null : Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-lg text-sm"
                  style={{
                    color: "var(--color-ink)",
                    background: "var(--color-surface)",
                    border: "1px solid var(--color-border)",
                  }}
                >
                  <option value="none">No limit</option>
                  <option value={15}>15 minutes</option>
                  <option value={30}>30 minutes</option>
                  <option value={45}>45 minutes</option>
                  <option value={60}>60 minutes</option>
                </select>
              </div>
            </div>

            <label className="flex items-center gap-2 text-sm cursor-pointer" style={{ color: "var(--color-ink-muted)" }}>
              <input
                type="checkbox"
                checked={retakesAllowed}
                onChange={(e) => setRetakesAllowed(e.target.checked)}
                className="rounded"
              />
              Allow retakes
            </label>
          </div>
        )}

        {/* Due Date */}
        <div>
          <label className="block text-sm font-semibold mb-1.5" style={{ color: "var(--color-ink)" }}>
            Due Date <span style={{ color: "var(--color-ink-faint)" }}>(optional)</span>
          </label>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            style={{
              color: "var(--color-ink)",
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
            }}
          />
        </div>

        {status === "error" && error && (
          <p className="text-sm text-red-600">{error}</p>
        )}

        <button
          type="submit"
          disabled={!title.trim() || selectedModules.length === 0 || status === "loading"}
          className="btn-primary w-full py-3.5 text-base disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "loading" ? (
            <span className="flex items-center justify-center gap-2">
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Creating...
            </span>
          ) : (
            "Create Assignment"
          )}
        </button>
      </form>
    </div>
  );
}
