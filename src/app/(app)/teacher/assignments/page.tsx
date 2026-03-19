"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/components/providers/AuthProvider";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Assignment {
  id: string;
  classroom_id: string;
  title: string;
  type: string;
  due_date: string | null;
  created_at: string;
  config: Record<string, unknown>;
  status: string;
  classroom_name?: string;
}

interface Classroom {
  id: string;
  name: string;
}

export default function TeacherAssignmentsPage() {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [classrooms, setClassrooms] = useState<Classroom[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<string | null>(null);

  useEffect(() => {
    if (authLoading || !user) return;

    async function fetchAll() {
      try {
        // Fetch classrooms
        const classRes = await fetch("/api/classrooms");
        const classData = classRes.ok ? await classRes.json() : { classrooms: [] };
        const cls = classData.classrooms || [];
        setClassrooms(cls);

        // Fetch assignments for each classroom
        const allAssignments: Assignment[] = [];
        for (const c of cls) {
          const res = await fetch(`/api/assignments?classroom_id=${c.id}`);
          if (res.ok) {
            const data = await res.json();
            for (const a of data.assignments || []) {
              allAssignments.push({ ...a, classroom_name: c.name });
            }
          }
        }
        allAssignments.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
        setAssignments(allAssignments);
      } catch {
        // fail silently
      }
      setLoading(false);
    }

    fetchAll();
  }, [user, authLoading]);

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this assignment? This cannot be undone.")) return;
    setDeleting(id);
    try {
      const res = await fetch(`/api/assignments/${id}`, { method: "DELETE" });
      if (res.ok) {
        setAssignments((prev) => prev.filter((a) => a.id !== id));
      } else {
        const data = await res.json();
        alert(data.error || "Failed to delete");
      }
    } catch {
      alert("Failed to delete assignment");
    }
    setDeleting(null);
  };

  const typeLabel = (type: string) => {
    switch (type) {
      case "exam": return "Exam";
      case "quiz": return "Quiz";
      case "lesson": return "Lesson";
      case "practice_test": return "Practice Test";
      default: return type;
    }
  };

  const typeColor = (type: string) => {
    switch (type) {
      case "exam": return { bg: "rgba(239, 68, 68, 0.1)", color: "#EF4444" };
      case "quiz": return { bg: "rgba(59, 130, 246, 0.1)", color: "#3B82F6" };
      case "lesson": return { bg: "rgba(34, 197, 94, 0.1)", color: "#22C55E" };
      default: return { bg: "rgba(107, 114, 128, 0.1)", color: "#6B7280" };
    }
  };

  if (authLoading || loading) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-10">
        <div className="animate-pulse space-y-4">
          <div className="h-8 w-48 rounded" style={{ background: "var(--color-surface-sunken)" }} />
          <div className="h-4 w-72 rounded" style={{ background: "var(--color-surface-sunken)" }} />
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-20 rounded-lg" style={{ background: "var(--color-surface-sunken)" }} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <div className="mb-6">
        <Link
          href="/teacher"
          className="text-sm font-medium hover:text-blue-600 transition-colors"
          style={{ color: "var(--color-ink-muted)" }}
        >
          &larr; Teacher Dashboard
        </Link>
      </div>

      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold" style={{ color: "var(--color-ink)" }}>
            All Assignments
          </h1>
          <p className="text-sm mt-1" style={{ color: "var(--color-ink-muted)" }}>
            {assignments.length} assignment{assignments.length !== 1 ? "s" : ""} across {classrooms.length} classroom{classrooms.length !== 1 ? "s" : ""}
          </p>
        </div>
        <Link href="/teacher/assignments/new" className="btn-primary py-2.5 px-5 text-sm">
          + New Assignment
        </Link>
      </div>

      {assignments.length === 0 ? (
        <div className="card p-12 text-center">
          <svg className="w-12 h-12 mx-auto mb-4" style={{ color: "var(--color-ink-faint)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
          </svg>
          <h3 className="text-base font-semibold mb-1" style={{ color: "var(--color-ink)" }}>No assignments yet</h3>
          <p className="text-sm mb-4" style={{ color: "var(--color-ink-muted)" }}>Create your first assignment to get started.</p>
          <Link href="/teacher/assignments/new" className="btn-primary py-2.5 px-6 text-sm inline-block">
            Create Assignment
          </Link>
        </div>
      ) : (
        <div className="space-y-3">
          {assignments.map((a) => {
            const tc = typeColor(a.type);
            const isOverdue = a.due_date && new Date(a.due_date) < new Date();
            const bankCount = (a.config?.bank_question_ids as number[])?.length || 0;
            const customCount = (a.config?.custom_question_ids as string[])?.length || 0;
            const questionCount = bankCount + customCount;

            return (
              <div
                key={a.id}
                className="card p-4 flex items-center justify-between gap-4 hover:shadow-md transition-shadow"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-sm font-semibold truncate" style={{ color: "var(--color-ink)" }}>
                      {a.title}
                    </h3>
                    <span
                      className="text-[10px] font-semibold px-2 py-0.5 rounded-full flex-shrink-0"
                      style={{ background: tc.bg, color: tc.color }}
                    >
                      {typeLabel(a.type)}
                    </span>
                    {a.type === "exam" && Boolean((a.config as Record<string, unknown>)?.lockdown) && (
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full flex-shrink-0" style={{ background: "rgba(239, 68, 68, 0.1)", color: "#EF4444" }}>
                        Lockdown
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-3 text-[11px]" style={{ color: "var(--color-ink-faint)" }}>
                    <span>{a.classroom_name}</span>
                    {a.due_date && (
                      <span style={{ color: isOverdue ? "#EF4444" : undefined }}>
                        Due {new Date(a.due_date).toLocaleDateString()}
                        {isOverdue && " (overdue)"}
                      </span>
                    )}
                    {a.type === "exam" && questionCount > 0 && (
                      <span>{questionCount} questions</span>
                    )}
                    <span>Created {new Date(a.created_at).toLocaleDateString()}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 flex-shrink-0">
                  <Link
                    href={`/assignments/${a.id}?preview=true`}
                    className="text-[11px] font-medium px-3 py-1.5 rounded-md transition-colors"
                    style={{ background: "rgba(59, 130, 246, 0.1)", color: "#3B82F6" }}
                  >
                    Preview
                  </Link>
                  {a.type === "exam" && (
                    <Link
                      href={`/teacher/exam/${a.id}`}
                      className="text-[11px] font-medium px-3 py-1.5 rounded-md transition-colors"
                      style={{ background: "rgba(139, 92, 246, 0.1)", color: "#8B5CF6" }}
                    >
                      Monitor
                    </Link>
                  )}
                  <button
                    onClick={() => handleDelete(a.id)}
                    disabled={deleting === a.id}
                    className="text-[11px] font-medium px-3 py-1.5 rounded-md transition-colors hover:bg-red-50"
                    style={{ color: "#EF4444" }}
                  >
                    {deleting === a.id ? "..." : "Delete"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
