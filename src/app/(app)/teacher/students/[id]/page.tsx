"use client";

import { useEffect, useState, useCallback } from "react";
import { useAuth } from "@/components/providers/AuthProvider";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";
import { useParams } from "next/navigation";

interface StudentProfile {
  id: string;
  display_name: string | null;
  email: string | null;
  created_at: string;
}

interface ModuleProgress {
  module_id: string;
  module_name: string;
  completed: boolean;
  quiz_score: number | null;
  completed_at: string | null;
}

interface AssignmentStatus {
  assignment_id: string;
  title: string;
  type: string;
  completed: boolean;
  score: number | null;
  time_spent_seconds: number | null;
  completed_at: string | null;
  due_date: string | null;
}

interface TimelineEvent {
  id: string;
  type: "joined" | "quiz" | "assignment" | "module";
  message: string;
  timestamp: string;
}

interface StudentData {
  profile: StudentProfile;
  classroomName: string;
  joinedAt: string;
  modules: ModuleProgress[];
  assignments: AssignmentStatus[];
  timeline: TimelineEvent[];
}

export default function StudentDetailPage() {
  const { user } = useAuth();
  const params = useParams();
  const studentId = params.id as string;
  const supabase = createClient();

  const [data, setData] = useState<StudentData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadStudent = useCallback(async () => {
    if (!user) return;

    try {
      // Find this student in one of the teacher's classrooms
      const { data: classrooms } = await supabase
        .from("classrooms")
        .select("id, name")
        .eq("teacher_id", user.id);

      if (!classrooms || classrooms.length === 0) {
        setError("No classrooms found.");
        return;
      }

      const classroomIds = classrooms.map((c) => c.id);

      // Find the membership
      const { data: membership } = await supabase
        .from("classroom_members")
        .select("classroom_id, joined_at")
        .eq("student_id", studentId)
        .in("classroom_id", classroomIds)
        .limit(1)
        .single();

      if (!membership) {
        setError("Student not found in your classrooms.");
        return;
      }

      const classroom = classrooms.find((c) => c.id === membership.classroom_id);

      // Load student profile
      const { data: profile } = await supabase
        .from("profiles")
        .select("id, display_name, email:id, created_at")
        .eq("id", studentId)
        .single();

      // Load user email from auth if possible (profile may not have it)
      const studentProfile: StudentProfile = {
        id: studentId,
        display_name: profile?.display_name || null,
        email: null,
        created_at: profile?.created_at || membership.joined_at,
      };

      // Load module progress (quiz_results table)
      const { data: quizResults } = await supabase
        .from("quiz_results")
        .select("module_id, score_percent, created_at")
        .eq("user_id", studentId);

      const moduleMap: Record<string, ModuleProgress> = {};
      if (quizResults) {
        for (const q of quizResults) {
          const moduleName = q.module_id
            .replace(/-/g, " ")
            .replace(/\b\w/g, (c: string) => c.toUpperCase());
          if (
            !moduleMap[q.module_id] ||
            (q.score_percent || 0) > (moduleMap[q.module_id].quiz_score || 0)
          ) {
            moduleMap[q.module_id] = {
              module_id: q.module_id,
              module_name: moduleName,
              completed: true,
              quiz_score: q.score_percent,
              completed_at: q.created_at,
            };
          }
        }
      }

      // Load assignments for this student
      const { data: teacherAssignments } = await supabase
        .from("assignments")
        .select("id, title, type, due_date, classroom_id")
        .in("classroom_id", classroomIds);

      const assignmentIds = (teacherAssignments || []).map((a) => a.id);

      let completions: any[] = [];
      if (assignmentIds.length > 0) {
        const { data: comp } = await supabase
          .from("assignment_completions")
          .select("assignment_id, completed_at, score, time_spent_seconds")
          .eq("student_id", studentId)
          .in("assignment_id", assignmentIds);
        completions = comp || [];
      }

      const assignmentStatuses: AssignmentStatus[] = (teacherAssignments || [])
        .filter((a) => a.classroom_id === membership.classroom_id)
        .map((a) => {
          const comp = completions.find((c) => c.assignment_id === a.id);
          return {
            assignment_id: a.id,
            title: a.title,
            type: a.type,
            completed: !!comp?.completed_at,
            score: comp?.score ?? null,
            time_spent_seconds: comp?.time_spent_seconds ?? null,
            completed_at: comp?.completed_at ?? null,
            due_date: a.due_date,
          };
        });

      // Build timeline
      const timeline: TimelineEvent[] = [];

      timeline.push({
        id: "joined",
        type: "joined",
        message: `Joined ${classroom?.name || "classroom"}`,
        timestamp: membership.joined_at,
      });

      if (quizResults) {
        for (const q of quizResults) {
          const moduleName = q.module_id
            .replace(/-/g, " ")
            .replace(/\b\w/g, (c: string) => c.toUpperCase());
          timeline.push({
            id: `quiz-${q.module_id}-${q.created_at}`,
            type: "quiz",
            message: `Scored ${q.score_percent}% on ${moduleName} quiz`,
            timestamp: q.created_at,
          });
        }
      }

      for (const comp of completions) {
        if (comp.completed_at) {
          const assignment = teacherAssignments?.find(
            (a) => a.id === comp.assignment_id
          );
          timeline.push({
            id: `assignment-${comp.assignment_id}`,
            type: "assignment",
            message: `Completed "${assignment?.title || "assignment"}"${comp.score != null ? ` with ${comp.score}%` : ""}`,
            timestamp: comp.completed_at,
          });
        }
      }

      timeline.sort(
        (a, b) =>
          new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
      );

      setData({
        profile: studentProfile,
        classroomName: classroom?.name || "",
        joinedAt: membership.joined_at,
        modules: Object.values(moduleMap),
        assignments: assignmentStatuses,
        timeline,
      });
    } catch (err) {
      console.error("Failed to load student data:", err);
      setError("Failed to load student data.");
    } finally {
      setLoading(false);
    }
  }, [user, studentId, supabase]);

  useEffect(() => {
    loadStudent();
  }, [loadStudent]);

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-gray-300 border-t-gray-900 rounded-full animate-spin" />
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="max-w-md mx-auto px-6 py-20 text-center">
        <h1
          className="text-xl font-bold mb-4"
          style={{ color: "var(--color-ink)" }}
        >
          {error || "Student not found"}
        </h1>
        <Link href="/teacher" className="btn-primary py-2.5 px-6 text-sm">
          Back to Dashboard
        </Link>
      </div>
    );
  }

  const avgScore =
    data.modules.filter((m) => m.quiz_score != null).length > 0
      ? Math.round(
          data.modules
            .filter((m) => m.quiz_score != null)
            .reduce((sum, m) => sum + (m.quiz_score || 0), 0) /
            data.modules.filter((m) => m.quiz_score != null).length
        )
      : null;

  const completedAssignments = data.assignments.filter((a) => a.completed).length;

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
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

      {/* Student Profile Header */}
      <div className="card p-6 mb-6">
        <div className="flex items-center gap-4">
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold text-white"
            style={{ background: "#3B82F6" }}
          >
            {(data.profile.display_name || "S")[0].toUpperCase()}
          </div>
          <div className="flex-1">
            <h1
              className="text-xl font-bold"
              style={{ color: "var(--color-ink)" }}
            >
              {data.profile.display_name || "Student"}
            </h1>
            <div className="flex items-center gap-4 mt-1">
              <span
                className="text-sm"
                style={{ color: "var(--color-ink-muted)" }}
              >
                {data.classroomName}
              </span>
              <span
                className="text-xs"
                style={{ color: "var(--color-ink-faint)" }}
              >
                Joined {new Date(data.joinedAt).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 mt-5 pt-5" style={{ borderTop: "1px solid var(--color-border-subtle)" }}>
          <div>
            <p className="text-xs font-medium" style={{ color: "var(--color-ink-faint)" }}>
              Modules Completed
            </p>
            <p className="text-2xl font-bold mt-0.5" style={{ color: "var(--color-ink)" }}>
              {data.modules.length}
            </p>
          </div>
          <div>
            <p className="text-xs font-medium" style={{ color: "var(--color-ink-faint)" }}>
              Average Quiz Score
            </p>
            <p
              className="text-2xl font-bold mt-0.5"
              style={{
                color: avgScore != null
                  ? avgScore >= 70
                    ? "#16A34A"
                    : avgScore >= 50
                    ? "#D97706"
                    : "#EF4444"
                  : "var(--color-ink)",
              }}
            >
              {avgScore != null ? `${avgScore}%` : "--"}
            </p>
          </div>
          <div>
            <p className="text-xs font-medium" style={{ color: "var(--color-ink-faint)" }}>
              Assignments Completed
            </p>
            <p className="text-2xl font-bold mt-0.5" style={{ color: "var(--color-ink)" }}>
              {completedAssignments}/{data.assignments.length}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Module Progress */}
        <div className="card p-5">
          <h2
            className="text-sm font-semibold mb-4 uppercase tracking-wider"
            style={{ color: "var(--color-ink-faint)" }}
          >
            Module Progress
          </h2>
          {data.modules.length === 0 ? (
            <p className="text-sm" style={{ color: "var(--color-ink-muted)" }}>
              No modules completed yet.
            </p>
          ) : (
            <div className="space-y-3">
              {data.modules.map((m) => (
                <div
                  key={m.module_id}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-2">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{
                        background: m.quiz_score != null && m.quiz_score >= 70
                          ? "#16A34A"
                          : m.quiz_score != null && m.quiz_score >= 50
                          ? "#D97706"
                          : "#EF4444",
                      }}
                    />
                    <span
                      className="text-sm font-medium"
                      style={{ color: "var(--color-ink)" }}
                    >
                      {m.module_name}
                    </span>
                  </div>
                  <span
                    className="text-sm font-semibold"
                    style={{
                      color:
                        m.quiz_score != null && m.quiz_score >= 70
                          ? "#16A34A"
                          : m.quiz_score != null && m.quiz_score >= 50
                          ? "#D97706"
                          : "#EF4444",
                    }}
                  >
                    {m.quiz_score != null ? `${m.quiz_score}%` : "--"}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Assignment Status */}
        <div className="card p-5">
          <h2
            className="text-sm font-semibold mb-4 uppercase tracking-wider"
            style={{ color: "var(--color-ink-faint)" }}
          >
            Assignments
          </h2>
          {data.assignments.length === 0 ? (
            <p className="text-sm" style={{ color: "var(--color-ink-muted)" }}>
              No assignments assigned yet.
            </p>
          ) : (
            <div className="space-y-3">
              {data.assignments.map((a) => (
                <div
                  key={a.assignment_id}
                  className="flex items-center justify-between"
                >
                  <div className="flex-1 min-w-0">
                    <p
                      className="text-sm font-medium truncate"
                      style={{ color: "var(--color-ink)" }}
                    >
                      {a.title}
                    </p>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span
                        className="text-xs"
                        style={{ color: "var(--color-ink-faint)" }}
                      >
                        {a.type === "lesson"
                          ? "Lesson"
                          : a.type === "quiz"
                          ? "Quiz"
                          : "Practice Test"}
                      </span>
                      {a.time_spent_seconds != null && (
                        <span
                          className="text-xs"
                          style={{ color: "var(--color-ink-faint)" }}
                        >
                          {Math.round(a.time_spent_seconds / 60)}m
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="text-right ml-3">
                    {a.completed ? (
                      <span
                        className="text-xs font-semibold px-2 py-1 rounded-full"
                        style={{
                          background:
                            a.score != null && a.score >= 70
                              ? "rgba(22, 163, 74, 0.1)"
                              : a.score != null
                              ? "rgba(217, 119, 6, 0.1)"
                              : "rgba(59, 130, 246, 0.08)",
                          color:
                            a.score != null && a.score >= 70
                              ? "#16A34A"
                              : a.score != null
                              ? "#D97706"
                              : "#3B82F6",
                        }}
                      >
                        {a.score != null ? `${a.score}%` : "Done"}
                      </span>
                    ) : (
                      <span
                        className="text-xs font-medium px-2 py-1 rounded-full"
                        style={{
                          background: "rgba(107, 114, 128, 0.08)",
                          color: "var(--color-ink-faint)",
                        }}
                      >
                        Pending
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Activity Timeline */}
      <div className="card p-5 mt-6">
        <h2
          className="text-sm font-semibold mb-4 uppercase tracking-wider"
          style={{ color: "var(--color-ink-faint)" }}
        >
          Activity Timeline
        </h2>
        {data.timeline.length === 0 ? (
          <p className="text-sm" style={{ color: "var(--color-ink-muted)" }}>
            No activity recorded yet.
          </p>
        ) : (
          <div className="space-y-4">
            {data.timeline.map((event, i) => (
              <div key={event.id} className="flex items-start gap-3">
                <div className="flex flex-col items-center">
                  <div
                    className="w-3 h-3 rounded-full shrink-0"
                    style={{
                      background:
                        event.type === "joined"
                          ? "#16A34A"
                          : event.type === "quiz"
                          ? "#3B82F6"
                          : event.type === "assignment"
                          ? "#8B5CF6"
                          : "#6B7280",
                    }}
                  />
                  {i < data.timeline.length - 1 && (
                    <div
                      className="w-px flex-1 mt-1"
                      style={{
                        background: "var(--color-border-subtle)",
                        minHeight: 20,
                      }}
                    />
                  )}
                </div>
                <div className="pb-2">
                  <p
                    className="text-sm"
                    style={{ color: "var(--color-ink)" }}
                  >
                    {event.message}
                  </p>
                  <p
                    className="text-xs mt-0.5"
                    style={{ color: "var(--color-ink-faint)" }}
                  >
                    {new Date(event.timestamp).toLocaleDateString()} at{" "}
                    {new Date(event.timestamp).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
