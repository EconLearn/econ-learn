"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useAuth } from "@/components/providers/AuthProvider";
import { useRouter, useParams } from "next/navigation";
import { courses } from "@/data/courses";

interface ClassroomDetail {
  id: string;
  name: string;
  school_name: string | null;
  teacher_name: string;
  teacher_id: string;
  joined_at: string | null;
}

interface Announcement {
  id: string;
  content: string;
  pinned: boolean;
  teacher_name: string;
  created_at: string;
}

interface Assignment {
  id: string;
  classroom_id: string;
  title: string;
  type: "lesson" | "quiz" | "practice_test" | "exam";
  module_ids: string[];
  due_date: string | null;
  status: "completed" | "pending" | "overdue";
  score: number | null;
  completed_at: string | null;
}

interface Classmate {
  student_id: string;
  display_name: string;
  modules_completed: number;
  avg_quiz_score: number;
  streak: number;
}

export default function ClassroomDetailPage() {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const params = useParams();
  const classroomId = params.id as string;

  const [classroom, setClassroom] = useState<ClassroomDetail | null>(null);
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [classmates, setClassmates] = useState<Classmate[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"announcements" | "assignments" | "classmates">("assignments");
  const [classmateSort, setClassmateSort] = useState<"streak" | "score" | "modules">("streak");
  const [joinCode, setJoinCode] = useState<string | null>(null);

  const allModules = [...courses[0].modules, ...courses[1].modules];

  useEffect(() => {
    if (authLoading) return;
    if (!user) {
      router.push("/login");
      return;
    }

    async function fetchData() {
      try {
        // Fetch classroom details, assignments, announcements, and classmates in parallel
        const [classroomRes, assignmentRes, announcementRes, classmatesRes] = await Promise.all([
          fetch("/api/student/classrooms"),
          fetch("/api/student/assignments"),
          fetch(`/api/classrooms/${classroomId}/announcements`),
          fetch(`/api/classrooms/${classroomId}/classmates`),
        ]);

        if (classroomRes.ok) {
          const data = await classroomRes.json();
          const found = (data.classrooms || []).find(
            (c: ClassroomDetail) => c.id === classroomId
          );
          if (found) {
            setClassroom(found);
          } else {
            // Student is not a member of this classroom
            router.push("/classrooms");
            return;
          }
        }

        if (assignmentRes.ok) {
          const data = await assignmentRes.json();
          const filtered = (data.assignments || []).filter(
            (a: Assignment) => a.classroom_id === classroomId
          );
          // Sort by due date, overdue first, then by date
          filtered.sort((a: Assignment, b: Assignment) => {
            // Overdue first
            if (a.status === "overdue" && b.status !== "overdue") return -1;
            if (a.status !== "overdue" && b.status === "overdue") return 1;
            // Completed last
            if (a.status === "completed" && b.status !== "completed") return 1;
            if (a.status !== "completed" && b.status === "completed") return -1;
            // Then by due date ascending
            if (a.due_date && b.due_date) return new Date(a.due_date).getTime() - new Date(b.due_date).getTime();
            if (a.due_date) return -1;
            if (b.due_date) return 1;
            return 0;
          });
          setAssignments(filtered);
        }

        if (announcementRes.ok) {
          const data = await announcementRes.json();
          setAnnouncements(data.announcements || []);
        }

        if (classmatesRes.ok) {
          const data = await classmatesRes.json();
          setClassmates(data.classmates || []);
          if (data.join_code) setJoinCode(data.join_code);
        }
      } catch {
        // Handle error silently
      }
      setLoading(false);
    }

    fetchData();
  }, [user, authLoading, router, classroomId]);

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

  if (!user || !classroom) return null;

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "completed":
        return { bg: "rgba(34, 197, 94, 0.08)", color: "#15803d", label: "Completed" };
      case "overdue":
        return { bg: "rgba(239, 68, 68, 0.08)", color: "#dc2626", label: "Overdue" };
      default:
        return { bg: "rgba(156, 163, 175, 0.08)", color: "#6b7280", label: "Not Started" };
    }
  };

  const getTypeBadge = (type: string) => {
    switch (type) {
      case "exam":
        return { bg: "rgba(239, 68, 68, 0.08)", color: "#dc2626", label: "Exam" };
      case "quiz":
        return { bg: "rgba(59, 130, 246, 0.08)", color: "#2563eb", label: "Quiz" };
      case "practice_test":
        return { bg: "rgba(139, 92, 246, 0.08)", color: "#7c3aed", label: "Test" };
      default:
        return { bg: "rgba(34, 197, 94, 0.08)", color: "#15803d", label: "Lesson" };
    }
  };

  const getAssignmentAction = (assignment: Assignment) => {
    if (assignment.status === "completed") {
      return { label: "View Results", variant: "secondary" as const };
    }
    // Check if the student has started (has completed_at = null but might have partial progress)
    return { label: "Start", variant: "primary" as const };
  };

  // Always link to the assignment page — it handles exam redirects, submission tracking, etc.
  const getAssignmentLink = (assignment: Assignment) => {
    return `/assignments/${assignment.id}`;
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 lg:py-14">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Back link */}
        <Link
          href="/classrooms"
          className="inline-flex items-center gap-1.5 text-xs font-medium mb-6 transition-colors hover:opacity-80"
          style={{ color: "var(--color-ink-muted)" }}
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          All Classrooms
        </Link>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-start gap-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(139, 92, 246, 0.08)" }}
            >
              <svg
                className="w-6 h-6 text-violet-500"
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
            <div>
              <h1
                className="text-2xl font-bold tracking-tight"
                style={{ color: "var(--color-ink)" }}
              >
                {classroom.name}
              </h1>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1">
                <span className="text-sm" style={{ color: "var(--color-ink-muted)" }}>
                  {classroom.teacher_name}
                </span>
                {classroom.school_name && (
                  <span className="text-sm" style={{ color: "var(--color-ink-faint)" }}>
                    {classroom.school_name}
                  </span>
                )}
                {classroom.joined_at && (
                  <span className="text-xs" style={{ color: "var(--color-ink-faint)" }}>
                    Joined{" "}
                    {new Date(classroom.joined_at).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div
          className="flex gap-1 mb-6 p-1 rounded-lg"
          style={{ background: "var(--color-surface-sunken)" }}
        >
          {(["assignments", "announcements", "classmates"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="flex-1 py-2 px-3 text-xs font-medium rounded-md transition-all duration-150 capitalize"
              style={
                activeTab === tab
                  ? { background: "var(--color-surface)", color: "var(--color-ink)", boxShadow: "0 1px 2px rgba(0,0,0,0.06)" }
                  : { color: "var(--color-ink-muted)" }
              }
            >
              {tab}
              {tab === "assignments" && assignments.length > 0 && (
                <span
                  className="ml-1.5 text-[10px] px-1.5 py-0.5 rounded-full"
                  style={{ background: "rgba(139, 92, 246, 0.08)", color: "#7c3aed" }}
                >
                  {assignments.filter((a) => a.status !== "completed").length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Announcements Tab */}
        {activeTab === "announcements" && (
          <div className="space-y-3">
            {announcements.length > 0 ? (
              announcements.map((announcement, index) => (
                <motion.div
                  key={announcement.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.03, duration: 0.2 }}
                >
                  <div
                    className="card p-5"
                    style={
                      announcement.pinned
                        ? { borderLeft: "3px solid var(--accent)" }
                        : undefined
                    }
                  >
                    <div className="flex items-center gap-2 mb-2">
                      {announcement.pinned && (
                        <svg
                          className="w-3.5 h-3.5"
                          style={{ color: "var(--accent)" }}
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M16 12V4h1V2H7v2h1v8l-2 2v2h5.2v6h1.6v-6H18v-2l-2-2z" />
                        </svg>
                      )}
                      <span
                        className="text-xs font-medium"
                        style={{ color: "var(--color-ink-muted)" }}
                      >
                        {announcement.teacher_name}
                      </span>
                      <span className="text-[10px]" style={{ color: "var(--color-ink-faint)" }}>
                        {new Date(announcement.created_at).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          hour: "numeric",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--color-ink)" }}
                    >
                      {announcement.content}
                    </p>
                  </div>
                </motion.div>
              ))
            ) : (
              <div
                className="card p-8 text-center"
                style={{ border: "2px dashed var(--color-border-subtle)" }}
              >
                <p className="text-sm" style={{ color: "var(--color-ink-muted)" }}>
                  No announcements yet.
                </p>
              </div>
            )}
          </div>
        )}

        {/* Assignments Tab */}
        {activeTab === "assignments" && (
          <div>
            {assignments.length > 0 ? (
              <div className="card overflow-hidden">
                {assignments.map((assignment, index) => {
                  const status = getStatusStyle(assignment.status);
                  const typeBadge = getTypeBadge(assignment.type);
                  const action = getAssignmentAction(assignment);
                  const link = getAssignmentLink(assignment);

                  return (
                    <motion.div
                      key={assignment.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.03, duration: 0.2 }}
                    >
                      <div
                        className="flex items-center justify-between px-5 py-4"
                        style={
                          index > 0
                            ? { borderTop: "1px solid var(--color-border-subtle)" }
                            : undefined
                        }
                      >
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                          <div
                            className="w-2 h-2 rounded-full flex-shrink-0"
                            style={{ background: status.color }}
                          />
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-2 mb-0.5">
                              <p
                                className="text-sm font-medium truncate"
                                style={{ color: "var(--color-ink)" }}
                              >
                                {assignment.title}
                              </p>
                              <span
                                className="text-[10px] font-medium px-1.5 py-0.5 rounded flex-shrink-0"
                                style={{ background: typeBadge.bg, color: typeBadge.color }}
                              >
                                {typeBadge.label}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              {assignment.due_date && (
                                <span
                                  className="text-[11px]"
                                  style={{ color: "var(--color-ink-faint)" }}
                                >
                                  Due{" "}
                                  {new Date(assignment.due_date).toLocaleDateString("en-US", {
                                    month: "short",
                                    day: "numeric",
                                  })}
                                </span>
                              )}
                              <span
                                className="text-[10px] font-medium px-1.5 py-0.5 rounded"
                                style={{ background: status.bg, color: status.color }}
                              >
                                {assignment.status === "completed" && assignment.score != null
                                  ? `${assignment.score}%`
                                  : status.label}
                              </span>
                            </div>
                          </div>
                        </div>
                        <Link
                          href={link}
                          className="text-xs font-medium ml-3 px-3 py-1.5 rounded-md transition-all duration-150 flex-shrink-0 hover:opacity-80"
                          style={
                            action.variant === "primary"
                              ? { background: "var(--accent)", color: "white" }
                              : { background: "var(--color-surface-sunken)", color: "var(--color-ink-muted)" }
                          }
                        >
                          {action.label}
                        </Link>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            ) : (
              <div
                className="card p-8 text-center"
                style={{ border: "2px dashed var(--color-border-subtle)" }}
              >
                <p className="text-sm" style={{ color: "var(--color-ink-muted)" }}>
                  No assignments yet. Check back later!
                </p>
              </div>
            )}
          </div>
        )}

        {/* Classmates Tab */}
        {activeTab === "classmates" && (
          <div>
            {classmates.length > 1 ? (
              <div className="card overflow-hidden">
                {/* Sort header */}
                <div
                  className="grid grid-cols-12 gap-2 px-5 py-3 text-[11px] font-semibold"
                  style={{
                    color: "var(--color-ink-faint)",
                    borderBottom: "1px solid var(--color-border-subtle)",
                    background: "var(--color-surface-raised, var(--color-surface-sunken))",
                  }}
                >
                  <div className="col-span-1 text-center">#</div>
                  <div className="col-span-4">Name</div>
                  <div
                    className="col-span-2 text-center cursor-pointer select-none transition-colors hover:opacity-80"
                    style={{ color: classmateSort === "streak" ? "var(--accent)" : undefined }}
                    onClick={() => setClassmateSort("streak")}
                  >
                    Streak {classmateSort === "streak" ? "\u25BC" : ""}
                  </div>
                  <div
                    className="col-span-3 text-center cursor-pointer select-none transition-colors hover:opacity-80"
                    style={{ color: classmateSort === "modules" ? "var(--accent)" : undefined }}
                    onClick={() => setClassmateSort("modules")}
                  >
                    Modules {classmateSort === "modules" ? "\u25BC" : ""}
                  </div>
                  <div
                    className="col-span-2 text-center cursor-pointer select-none transition-colors hover:opacity-80"
                    style={{ color: classmateSort === "score" ? "var(--accent)" : undefined }}
                    onClick={() => setClassmateSort("score")}
                  >
                    Avg Score {classmateSort === "score" ? "\u25BC" : ""}
                  </div>
                </div>

                {/* Sorted classmate rows */}
                {[...classmates]
                  .sort((a, b) => {
                    if (classmateSort === "streak") return b.streak - a.streak;
                    if (classmateSort === "score") return b.avg_quiz_score - a.avg_quiz_score;
                    return b.modules_completed - a.modules_completed;
                  })
                  .map((mate, index) => {
                    const isYou = mate.student_id === user?.id;
                    const rankIcon = index === 0 ? "\uD83E\uDD47" : index === 1 ? "\uD83E\uDD48" : index === 2 ? "\uD83E\uDD49" : null;
                    return (
                      <motion.div
                        key={mate.student_id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.03, duration: 0.2 }}
                      >
                        <div
                          className="grid grid-cols-12 gap-2 px-5 py-3.5 items-center"
                          style={{
                            ...(index > 0
                              ? { borderTop: "1px solid var(--color-border-subtle)" }
                              : {}),
                            ...(isYou
                              ? { background: "rgba(59, 130, 246, 0.04)" }
                              : {}),
                          }}
                        >
                          {/* Rank */}
                          <div className="col-span-1 text-center">
                            {rankIcon ? (
                              <span className="text-sm">{rankIcon}</span>
                            ) : (
                              <span
                                className="text-xs font-bold"
                                style={{ color: "var(--color-ink-faint)" }}
                              >
                                {index + 1}
                              </span>
                            )}
                          </div>

                          {/* Name */}
                          <div className="col-span-4 min-w-0 flex items-center gap-1.5">
                            <p
                              className="text-sm font-medium truncate"
                              style={{ color: isYou ? "#3B82F6" : "var(--color-ink)" }}
                            >
                              {mate.display_name}
                            </p>
                            {isYou && (
                              <span
                                className="text-[10px] font-semibold px-1.5 py-0.5 rounded-full shrink-0"
                                style={{ background: "rgba(59, 130, 246, 0.1)", color: "#3B82F6" }}
                              >
                                You
                              </span>
                            )}
                          </div>

                          {/* Streak */}
                          <div className="col-span-2 text-center">
                            {mate.streak > 0 ? (
                              <span className="text-xs font-semibold" style={{ color: "#F59E0B" }}>
                                {"\uD83D\uDD25"} {mate.streak}d
                              </span>
                            ) : (
                              <span className="text-xs" style={{ color: "var(--color-ink-faint)" }}>--</span>
                            )}
                          </div>

                          {/* Modules Completed */}
                          <div className="col-span-3 text-center">
                            <span
                              className="text-xs font-medium"
                              style={{ color: "var(--color-ink-muted)" }}
                            >
                              {mate.modules_completed} / 24
                            </span>
                          </div>

                          {/* Avg Score */}
                          <div className="col-span-2 text-center">
                            <span
                              className="text-[11px] font-semibold px-2 py-0.5 rounded-full"
                              style={{
                                background:
                                  mate.avg_quiz_score >= 80
                                    ? "rgba(34, 197, 94, 0.08)"
                                    : mate.avg_quiz_score >= 60
                                    ? "rgba(234, 179, 8, 0.08)"
                                    : mate.avg_quiz_score > 0
                                    ? "rgba(239, 68, 68, 0.08)"
                                    : "var(--color-surface-sunken)",
                                color:
                                  mate.avg_quiz_score >= 80
                                    ? "#15803d"
                                    : mate.avg_quiz_score >= 60
                                    ? "#A16207"
                                    : mate.avg_quiz_score > 0
                                    ? "#dc2626"
                                    : "var(--color-ink-faint)",
                              }}
                            >
                              {mate.avg_quiz_score > 0 ? `${mate.avg_quiz_score}%` : "--"}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
              </div>
            ) : (
              <div
                className="card p-10 text-center"
                style={{ border: "2px dashed var(--color-border-subtle)" }}
              >
                <div className="text-3xl mb-3">{"\uD83D\uDC65"}</div>
                <p className="text-sm font-medium mb-1" style={{ color: "var(--color-ink)" }}>
                  {classmates.length === 1 ? "You're the first one here!" : "No classmates yet"}
                </p>
                <p className="text-xs mb-4" style={{ color: "var(--color-ink-muted)" }}>
                  Share the join code with your classmates so they can join this classroom.
                </p>
                {joinCode && (
                  <div
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl"
                    style={{ background: "var(--color-surface-raised)", border: "1px solid var(--color-border)" }}
                  >
                    <span className="text-xs font-medium" style={{ color: "var(--color-ink-muted)" }}>Join Code:</span>
                    <span className="text-lg font-bold tracking-widest" style={{ color: "var(--color-ink)" }}>{joinCode}</span>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </motion.div>
    </div>
  );
}
