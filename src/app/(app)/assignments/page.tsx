"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useAuth } from "@/components/providers/AuthProvider";
import { useRouter } from "next/navigation";

interface StudentClassroom {
  id: string;
  name: string;
  school_name: string | null;
  teacher_name: string;
}

interface StudentAssignment {
  id: string;
  classroom_id: string;
  title: string;
  type: "lesson" | "quiz" | "practice_test";
  module_ids: string[];
  due_date: string | null;
  status: "completed" | "pending" | "overdue";
  completed_at: string | null;
  score: number | null;
  created_at: string;
}

type FilterTab = "all" | "pending" | "completed" | "overdue";

export default function StudentAssignmentsPage() {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();

  const [assignments, setAssignments] = useState<StudentAssignment[]>([]);
  const [classrooms, setClassrooms] = useState<StudentClassroom[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<FilterTab>("all");

  useEffect(() => {
    if (authLoading) return;
    if (!user) {
      router.push("/login");
      return;
    }

    async function fetchData() {
      try {
        const res = await fetch("/api/student/assignments");
        if (res.ok) {
          const data = await res.json();
          setAssignments(data.assignments || []);
          setClassrooms(data.classrooms || []);
        }
      } catch {
        // silently fail
      }
      setLoading(false);
    }

    fetchData();
  }, [user, authLoading, router]);

  if (authLoading || loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="w-6 h-6 border-2 rounded-full animate-spin" style={{ borderColor: 'var(--color-border)', borderTopColor: 'var(--color-ink)' }} />
      </div>
    );
  }

  if (!user) return null;

  const filtered = activeTab === "all"
    ? assignments
    : assignments.filter((a) => a.status === activeTab);

  const classroomMap: Record<string, string> = {};
  for (const c of classrooms) {
    classroomMap[c.id] = c.name;
  }

  const pendingCount = assignments.filter(a => a.status === "pending").length;
  const overdueCount = assignments.filter(a => a.status === "overdue").length;
  const completedCount = assignments.filter(a => a.status === "completed").length;

  const tabs: { key: FilterTab; label: string; count: number }[] = [
    { key: "all", label: "All", count: assignments.length },
    { key: "pending", label: "Pending", count: pendingCount },
    { key: "overdue", label: "Overdue", count: overdueCount },
    { key: "completed", label: "Completed", count: completedCount },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 lg:py-14">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold tracking-tight" style={{ color: 'var(--color-ink)' }}>
              Assignments
            </h1>
            <p className="text-sm mt-1" style={{ color: 'var(--color-ink-muted)' }}>
              {pendingCount > 0
                ? `You have ${pendingCount} pending assignment${pendingCount !== 1 ? "s" : ""}.`
                : "You're all caught up!"}
              {overdueCount > 0 && ` ${overdueCount} overdue.`}
            </p>
          </div>
          <Link href="/dashboard" className="text-sm font-medium transition-colors" style={{ color: 'var(--color-ink-muted)' }}>
            &larr; Dashboard
          </Link>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-1 mb-6 p-1 rounded-lg" style={{ background: 'var(--color-surface-sunken)' }}>
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-md text-[13px] font-medium transition-all"
              style={activeTab === tab.key
                ? { background: 'var(--color-surface)', color: 'var(--color-ink)', boxShadow: '0 1px 2px rgba(0,0,0,0.06)' }
                : { color: 'var(--color-ink-muted)' }
              }
            >
              {tab.label}
              {tab.count > 0 && (
                <span className="text-[11px] tabular-nums" style={{ color: 'var(--color-ink-faint)' }}>
                  {tab.count}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Assignments List */}
        {filtered.length === 0 ? (
          <div className="card p-12 text-center">
            {assignments.length === 0 ? (
              <>
                <svg className="w-10 h-10 mx-auto mb-3" style={{ color: 'var(--color-ink-faint)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
                </svg>
                <p className="text-sm font-medium mb-1" style={{ color: 'var(--color-ink)' }}>
                  No assignments yet
                </p>
                <p className="text-xs" style={{ color: 'var(--color-ink-faint)' }}>
                  When your teacher assigns work, it will appear here.
                </p>
                {classrooms.length === 0 && (
                  <Link href="/join" className="btn-primary mt-4 py-2 px-5 text-sm inline-block">
                    Join a Classroom
                  </Link>
                )}
              </>
            ) : (
              <p className="text-sm" style={{ color: 'var(--color-ink-muted)' }}>
                No {activeTab} assignments.
              </p>
            )}
          </div>
        ) : (
          <div className="card overflow-hidden">
            {filtered.map((assignment, i) => {
              const classroomName = classroomMap[assignment.classroom_id] || "";
              const urgencyColor = getUrgencyColor(assignment.due_date, assignment.status);
              const typeLabel = assignment.type === "quiz" ? "Quiz" : assignment.type === "practice_test" ? "Practice Test" : "Lesson";

              return (
                <Link
                  key={assignment.id}
                  href={`/assignments/${assignment.id}`}
                  className="flex items-center gap-4 px-5 py-4 transition-colors hover:bg-black/[0.02]"
                  style={i > 0 ? { borderTop: '1px solid var(--color-border-subtle)' } : undefined}
                >
                  {/* Status indicator */}
                  <div className="flex-shrink-0">
                    {assignment.status === "completed" ? (
                      <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "rgba(16, 185, 129, 0.08)" }}>
                        <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    ) : (
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center"
                        style={{ background: assignment.status === "overdue" ? "rgba(239, 68, 68, 0.08)" : "rgba(59, 130, 246, 0.08)" }}
                      >
                        <div className="w-2.5 h-2.5 rounded-full" style={{ background: urgencyColor }} />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-medium truncate" style={{ color: 'var(--color-ink)' }}>
                        {assignment.title}
                      </p>
                      <span
                        className="text-[10px] font-medium px-1.5 py-0.5 rounded flex-shrink-0"
                        style={{ background: 'var(--color-surface-sunken)', color: 'var(--color-ink-faint)' }}
                      >
                        {typeLabel}
                      </span>
                    </div>
                    <p className="text-[11px] mt-0.5" style={{ color: 'var(--color-ink-faint)' }}>
                      {classroomName}
                      {assignment.due_date
                        ? ` · Due ${new Date(assignment.due_date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}`
                        : " · No due date"}
                    </p>
                  </div>

                  {/* Right side */}
                  <div className="flex-shrink-0 text-right">
                    {assignment.status === "completed" ? (
                      <div>
                        <p className="text-sm font-bold tabular-nums text-emerald-600">
                          {assignment.score != null ? `${assignment.score}%` : "Done"}
                        </p>
                        <p className="text-[10px] font-medium text-emerald-500">
                          View Results
                        </p>
                      </div>
                    ) : assignment.status === "overdue" ? (
                      <div>
                        <p className="text-xs font-semibold text-red-500">Overdue</p>
                        <p className="text-[10px] font-medium text-blue-500">
                          Start now
                        </p>
                      </div>
                    ) : (
                      <span
                        className="text-xs font-medium px-3 py-1.5 rounded-md"
                        style={{ background: 'var(--accent)', color: 'white' }}
                      >
                        Start
                      </span>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </motion.div>
    </div>
  );
}

function getUrgencyColor(dueDate: string | null, status: string): string {
  if (status === "completed") return "#34d399";
  if (!dueDate) return "#9ca3af";
  const now = new Date();
  const due = new Date(dueDate);
  const diffMs = due.getTime() - now.getTime();
  const diffDays = diffMs / (1000 * 60 * 60 * 24);
  if (diffDays < 0) return "#ef4444";
  if (diffDays < 1) return "#ef4444";
  if (diffDays < 7) return "#f59e0b";
  return "#22c55e";
}
