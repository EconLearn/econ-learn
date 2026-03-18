"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useAuth } from "@/components/providers/AuthProvider";
import { useRouter } from "next/navigation";

interface Classroom {
  id: string;
  name: string;
  school_name: string | null;
  teacher_name: string;
  teacher_id: string;
  joined_at: string | null;
}

interface Assignment {
  id: string;
  classroom_id: string;
  status: "completed" | "pending" | "overdue";
}

export default function ClassroomsPage() {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const [classrooms, setClassrooms] = useState<Classroom[]>([]);
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (authLoading) return;
    if (!user) {
      router.push("/login");
      return;
    }

    async function fetchData() {
      try {
        const [classroomRes, assignmentRes] = await Promise.all([
          fetch("/api/student/classrooms"),
          fetch("/api/student/assignments"),
        ]);

        if (classroomRes.ok) {
          const data = await classroomRes.json();
          setClassrooms(data.classrooms || []);
        }
        if (assignmentRes.ok) {
          const data = await assignmentRes.json();
          setAssignments(data.assignments || []);
        }
      } catch {
        // Handle error silently
      }
      setLoading(false);
    }

    fetchData();
  }, [user, authLoading, router]);

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

  if (!user) return null;

  const getPendingCount = (classroomId: string) =>
    assignments.filter(
      (a) => a.classroom_id === classroomId && (a.status === "pending" || a.status === "overdue")
    ).length;

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 lg:py-14">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1
              className="text-2xl font-bold tracking-tight mb-1"
              style={{ color: "var(--color-ink)" }}
            >
              My Classrooms
            </h1>
            <p className="text-sm" style={{ color: "var(--color-ink-muted)" }}>
              {classrooms.length > 0
                ? `You're enrolled in ${classrooms.length} classroom${classrooms.length !== 1 ? "s" : ""}`
                : "Join a classroom to get started"}
            </p>
          </div>
          <Link
            href="/join"
            className="btn-primary flex items-center gap-2 text-sm"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            Join Classroom
          </Link>
        </div>

        {/* Classroom grid */}
        {classrooms.length > 0 ? (
          <div className="grid sm:grid-cols-2 gap-4">
            {classrooms.map((classroom, index) => {
              const pendingCount = getPendingCount(classroom.id);
              return (
                <motion.div
                  key={classroom.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                >
                  <div className="card p-5 h-full flex flex-col">
                    <div className="flex items-start gap-3 mb-4">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: "rgba(139, 92, 246, 0.08)" }}
                      >
                        <svg
                          className="w-5 h-5 text-violet-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={1.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
                          />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3
                          className="text-base font-semibold truncate"
                          style={{ color: "var(--color-ink)" }}
                        >
                          {classroom.name}
                        </h3>
                        <p
                          className="text-xs mt-0.5"
                          style={{ color: "var(--color-ink-faint)" }}
                        >
                          {classroom.teacher_name}
                          {classroom.school_name ? ` · ${classroom.school_name}` : ""}
                        </p>
                      </div>
                    </div>

                    <div className="flex-1" />

                    <div className="flex items-center justify-between mt-3 pt-3" style={{ borderTop: "1px solid var(--color-border-subtle)" }}>
                      {pendingCount > 0 ? (
                        <span
                          className="text-xs font-medium px-2 py-0.5 rounded-full"
                          style={{
                            background: "rgba(245, 158, 11, 0.08)",
                            color: "#d97706",
                          }}
                        >
                          {pendingCount} pending assignment{pendingCount !== 1 ? "s" : ""}
                        </span>
                      ) : (
                        <span className="text-xs" style={{ color: "var(--color-ink-faint)" }}>
                          All caught up
                        </span>
                      )}
                      <Link
                        href={`/classrooms/${classroom.id}`}
                        className="text-xs font-medium transition-colors hover:opacity-80"
                        style={{ color: "var(--accent)" }}
                      >
                        View
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        ) : (
          /* Empty state */
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className="card p-10 text-center"
              style={{ border: "2px dashed var(--color-border-subtle)" }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                style={{ background: "rgba(139, 92, 246, 0.08)" }}
              >
                <svg
                  className="w-7 h-7 text-violet-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
                  />
                </svg>
              </div>
              <h3
                className="text-lg font-semibold mb-1"
                style={{ color: "var(--color-ink)" }}
              >
                No classrooms yet
              </h3>
              <p
                className="text-sm mb-5"
                style={{ color: "var(--color-ink-muted)" }}
              >
                Ask your teacher for a join code to get started with classroom assignments.
              </p>
              <Link href="/join" className="btn-primary inline-flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                Join a Classroom
              </Link>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
