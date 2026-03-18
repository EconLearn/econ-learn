"use client";

import { useEffect, useState, useCallback } from "react";
import { useAuth } from "@/components/providers/AuthProvider";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";
import { useParams } from "next/navigation";
import type { Classroom, Assignment } from "@/lib/types/teacher";

type TabKey = "overview" | "students" | "assignments" | "settings";

interface StudentRow {
  student_id: string;
  display_name: string | null;
  email: string | null;
  joined_at: string;
  modules_completed: number;
  avg_score: number;
  last_active: string | null;
}

interface AssignmentWithStats extends Assignment {
  completed_count: number;
  total_students: number;
  avg_score: number;
}

interface ActivityItem {
  id: string;
  message: string;
  timestamp: string;
  type: "join" | "quiz" | "assignment";
}

type SortField = "name" | "score" | "activity";
type SortDir = "asc" | "desc";

export default function ClassroomDetailPage() {
  const { user } = useAuth();
  const params = useParams();
  const classroomId = params.id as string;
  const supabase = createClient();

  const [classroom, setClassroom] = useState<Classroom | null>(null);
  const [students, setStudents] = useState<StudentRow[]>([]);
  const [assignments, setAssignments] = useState<AssignmentWithStats[]>([]);
  const [recentActivity, setRecentActivity] = useState<ActivityItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<TabKey>("overview");
  const [codeCopied, setCodeCopied] = useState(false);

  // Settings state
  const [editName, setEditName] = useState("");
  const [editSchool, setEditSchool] = useState("");
  const [saving, setSaving] = useState(false);
  const [saveMsg, setSaveMsg] = useState("");

  // Sort state
  const [sortField, setSortField] = useState<SortField>("name");
  const [sortDir, setSortDir] = useState<SortDir>("asc");

  const loadData = useCallback(async () => {
    if (!user) return;

    try {
      // Load classroom
      const { data: classroomData } = await supabase
        .from("classrooms")
        .select("*")
        .eq("id", classroomId)
        .eq("teacher_id", user.id)
        .single();

      if (!classroomData) return;
      setClassroom(classroomData);
      setEditName(classroomData.name);
      setEditSchool(classroomData.school_name || "");

      // Load members with profiles
      const { data: members } = await supabase
        .from("classroom_members")
        .select("student_id, joined_at, profiles(display_name)")
        .eq("classroom_id", classroomId);

      // Get quiz results for these students
      const studentIds = (members || []).map((m: any) => m.student_id);
      let quizScoresMap: Record<string, { total: number; count: number }> = {};

      if (studentIds.length > 0) {
        const { data: quizResults } = await supabase
          .from("quiz_results")
          .select("user_id, score_percent, created_at")
          .in("user_id", studentIds);

        if (quizResults) {
          for (const q of quizResults) {
            if (!quizScoresMap[q.user_id]) {
              quizScoresMap[q.user_id] = { total: 0, count: 0 };
            }
            quizScoresMap[q.user_id].total += q.score_percent || 0;
            quizScoresMap[q.user_id].count += 1;
          }
        }
      }

      const studentRows: StudentRow[] = (members || []).map((m: any) => {
        const scores = quizScoresMap[m.student_id];
        return {
          student_id: m.student_id,
          display_name: m.profiles?.display_name || null,
          email: null,
          joined_at: m.joined_at,
          modules_completed: scores?.count || 0,
          avg_score: scores ? Math.round(scores.total / scores.count) : 0,
          last_active: m.joined_at,
        };
      });
      setStudents(studentRows);

      // Load assignments with completion stats
      const res = await fetch(`/api/assignments?classroom_id=${classroomId}`);
      const assignData = await res.json();
      const rawAssignments: Assignment[] = assignData.assignments || [];

      const assignmentsWithStats: AssignmentWithStats[] = [];
      for (const a of rawAssignments) {
        const { data: completions } = await supabase
          .from("assignment_completions")
          .select("score, completed_at")
          .eq("assignment_id", a.id)
          .not("completed_at", "is", null);

        const completedCount = completions?.length || 0;
        const avgScore =
          completedCount > 0
            ? Math.round(
                (completions || []).reduce((sum, c) => sum + (c.score || 0), 0) /
                  completedCount
              )
            : 0;

        assignmentsWithStats.push({
          ...a,
          completed_count: completedCount,
          total_students: studentRows.length,
          avg_score: avgScore,
        });
      }
      setAssignments(assignmentsWithStats);

      // Build recent activity
      const activity: ActivityItem[] = [];
      for (const m of members || []) {
        const name = (m as any).profiles?.display_name || "A student";
        activity.push({
          id: `join-${(m as any).student_id}`,
          message: `${name} joined the classroom`,
          timestamp: (m as any).joined_at,
          type: "join",
        });
      }
      activity.sort(
        (a, b) =>
          new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
      );
      setRecentActivity(activity.slice(0, 10));
    } catch (err) {
      console.error("Failed to load classroom data:", err);
    } finally {
      setLoading(false);
    }
  }, [user, classroomId, supabase]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const copyJoinCode = () => {
    if (!classroom) return;
    navigator.clipboard.writeText(classroom.join_code);
    setCodeCopied(true);
    setTimeout(() => setCodeCopied(false), 2000);
  };

  const handleSaveSettings = async () => {
    if (!classroom || saving) return;
    setSaving(true);
    setSaveMsg("");

    try {
      const res = await fetch(`/api/classrooms/${classroomId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: editName.trim(),
          school_name: editSchool.trim() || null,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        setClassroom(data.classroom);
        setSaveMsg("Settings saved successfully.");
      } else {
        setSaveMsg("Failed to save settings.");
      }
    } catch {
      setSaveMsg("Failed to save settings.");
    } finally {
      setSaving(false);
    }
  };

  const handleDeactivate = async () => {
    if (!classroom) return;
    if (!confirm("Are you sure you want to deactivate this classroom? Students will no longer be able to access it.")) return;

    try {
      const res = await fetch(`/api/classrooms/${classroomId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ active: false }),
      });

      if (res.ok) {
        const data = await res.json();
        setClassroom(data.classroom);
      }
    } catch (err) {
      console.error("Failed to deactivate:", err);
    }
  };

  const handleRegenerateCode = async () => {
    if (!classroom) return;
    if (!confirm("Regenerate join code? The current code will stop working.")) return;

    try {
      const res = await fetch(`/api/classrooms/${classroomId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ regenerate_code: true }),
      });

      if (res.ok) {
        const data = await res.json();
        setClassroom(data.classroom);
      }
    } catch (err) {
      console.error("Failed to regenerate code:", err);
    }
  };

  const sortedStudents = [...students].sort((a, b) => {
    const dir = sortDir === "asc" ? 1 : -1;
    switch (sortField) {
      case "name":
        return (
          dir *
          (a.display_name || "").localeCompare(b.display_name || "")
        );
      case "score":
        return dir * (a.avg_score - b.avg_score);
      case "activity":
        return (
          dir *
          (new Date(a.joined_at).getTime() -
            new Date(b.joined_at).getTime())
        );
      default:
        return 0;
    }
  });

  const toggleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDir(sortDir === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDir("asc");
    }
  };

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-gray-300 border-t-gray-900 rounded-full animate-spin" />
      </div>
    );
  }

  if (!classroom) {
    return (
      <div className="max-w-md mx-auto px-6 py-20 text-center">
        <h1
          className="text-xl font-bold mb-4"
          style={{ color: "var(--color-ink)" }}
        >
          Classroom not found
        </h1>
        <Link href="/teacher" className="btn-primary py-2.5 px-6 text-sm">
          Back to Dashboard
        </Link>
      </div>
    );
  }

  const avgClassScore =
    students.length > 0
      ? Math.round(
          students.reduce((sum, s) => sum + s.avg_score, 0) / students.length
        )
      : 0;

  const tabs: { key: TabKey; label: string }[] = [
    { key: "overview", label: "Overview" },
    { key: "students", label: `Students (${students.length})` },
    { key: "assignments", label: `Assignments (${assignments.length})` },
    { key: "settings", label: "Settings" },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
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
      <div className="flex items-start justify-between mb-6">
        <div>
          <div className="flex items-center gap-3">
            <h1
              className="text-2xl font-bold"
              style={{ color: "var(--color-ink)" }}
            >
              {classroom.name}
            </h1>
            {!classroom.active && (
              <span
                className="text-xs font-medium px-2 py-0.5 rounded-full"
                style={{
                  background: "rgba(239, 68, 68, 0.08)",
                  color: "#EF4444",
                }}
              >
                Inactive
              </span>
            )}
          </div>
          {classroom.school_name && (
            <p
              className="text-sm mt-0.5"
              style={{ color: "var(--color-ink-muted)" }}
            >
              {classroom.school_name}
            </p>
          )}
        </div>
        <Link
          href={`/teacher/assignments/new?classroom=${classroomId}`}
          className="btn-primary py-2.5 px-5 text-sm"
        >
          + New Assignment
        </Link>
      </div>

      {/* Share Join Code Card */}
      <div
        className="card p-6 mb-6"
        style={{
          background: "rgba(59, 130, 246, 0.04)",
          border: "1px solid rgba(59, 130, 246, 0.12)",
        }}
      >
        <div className="flex items-center justify-between">
          <div>
            <p
              className="text-xs font-medium uppercase tracking-wider mb-2"
              style={{ color: "var(--color-ink-faint)" }}
            >
              Share Join Code
            </p>
            <p
              className="text-4xl font-mono font-bold tracking-[0.2em]"
              style={{ color: "var(--color-ink)" }}
            >
              {classroom.join_code}
            </p>
            <p
              className="text-xs mt-2"
              style={{ color: "var(--color-ink-muted)" }}
            >
              Students visit econlearn.org/join and enter this code.
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <button
              onClick={copyJoinCode}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all hover:shadow-md"
              style={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                color: "var(--color-ink)",
              }}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              {codeCopied ? "Copied!" : "Copy Code"}
            </button>
            {/* QR Code placeholder */}
            <div
              className="w-20 h-20 rounded-lg flex items-center justify-center"
              style={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
              }}
            >
              <svg
                className="w-10 h-10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--color-ink-faint)"
                strokeWidth={1.5}
              >
                <rect x="3" y="3" width="7" height="7" rx="1" />
                <rect x="14" y="3" width="7" height="7" rx="1" />
                <rect x="3" y="14" width="7" height="7" rx="1" />
                <rect x="14" y="14" width="3" height="3" rx="0.5" />
                <rect x="18" y="14" width="3" height="3" rx="0.5" />
                <rect x="14" y="18" width="3" height="3" rx="0.5" />
                <rect x="18" y="18" width="3" height="3" rx="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div
        className="flex gap-1 mb-6 p-1 rounded-xl"
        style={{ background: "var(--color-surface)", border: "1px solid var(--color-border-subtle)" }}
      >
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className="px-4 py-2 rounded-lg text-sm font-medium transition-all flex-1"
            style={{
              background: activeTab === tab.key ? "var(--color-ink)" : "transparent",
              color: activeTab === tab.key ? "white" : "var(--color-ink-muted)",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === "overview" && (
        <div>
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="card p-5">
              <p
                className="text-xs font-medium uppercase tracking-wider"
                style={{ color: "var(--color-ink-faint)" }}
              >
                Students
              </p>
              <p
                className="text-3xl font-bold mt-1"
                style={{ color: "var(--color-ink)" }}
              >
                {students.length}
              </p>
            </div>
            <div className="card p-5">
              <p
                className="text-xs font-medium uppercase tracking-wider"
                style={{ color: "var(--color-ink-faint)" }}
              >
                Assignments
              </p>
              <p
                className="text-3xl font-bold mt-1"
                style={{ color: "var(--color-ink)" }}
              >
                {assignments.length}
              </p>
            </div>
            <div className="card p-5">
              <p
                className="text-xs font-medium uppercase tracking-wider"
                style={{ color: "var(--color-ink-faint)" }}
              >
                Average Score
              </p>
              <p
                className="text-3xl font-bold mt-1"
                style={{
                  color: avgClassScore >= 70 ? "#16A34A" : avgClassScore >= 50 ? "#D97706" : "var(--color-ink)",
                }}
              >
                {avgClassScore > 0 ? `${avgClassScore}%` : "--"}
              </p>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="card p-5">
            <h3
              className="text-sm font-semibold mb-4 uppercase tracking-wider"
              style={{ color: "var(--color-ink-faint)" }}
            >
              Recent Activity
            </h3>
            {recentActivity.length === 0 ? (
              <p
                className="text-sm"
                style={{ color: "var(--color-ink-muted)" }}
              >
                No activity yet.
              </p>
            ) : (
              <div className="space-y-3">
                {recentActivity.map((item) => (
                  <div key={item.id} className="flex items-start gap-3">
                    <div
                      className="w-2 h-2 rounded-full mt-1.5 shrink-0"
                      style={{
                        background:
                          item.type === "join"
                            ? "#16A34A"
                            : item.type === "quiz"
                            ? "#3B82F6"
                            : "#8B5CF6",
                      }}
                    />
                    <div className="flex-1">
                      <p
                        className="text-sm"
                        style={{ color: "var(--color-ink)" }}
                      >
                        {item.message}
                      </p>
                      <p
                        className="text-xs mt-0.5"
                        style={{ color: "var(--color-ink-faint)" }}
                      >
                        {new Date(item.timestamp).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {activeTab === "students" && (
        <div>
          {students.length === 0 ? (
            <div className="card p-8 text-center">
              <p
                className="text-sm"
                style={{ color: "var(--color-ink-muted)" }}
              >
                No students have joined yet. Share the join code{" "}
                <strong className="font-mono">{classroom.join_code}</strong>{" "}
                with your class.
              </p>
            </div>
          ) : (
            <div className="card overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr
                    style={{
                      borderBottom: "1px solid var(--color-border-subtle)",
                    }}
                  >
                    <th
                      className="text-left px-4 py-3 font-medium text-xs uppercase tracking-wider cursor-pointer hover:text-blue-600 transition-colors select-none"
                      style={{ color: "var(--color-ink-faint)" }}
                      onClick={() => toggleSort("name")}
                    >
                      Student{" "}
                      {sortField === "name" && (sortDir === "asc" ? "^" : "v")}
                    </th>
                    <th
                      className="text-center px-4 py-3 font-medium text-xs uppercase tracking-wider"
                      style={{ color: "var(--color-ink-faint)" }}
                    >
                      Modules
                    </th>
                    <th
                      className="text-center px-4 py-3 font-medium text-xs uppercase tracking-wider cursor-pointer hover:text-blue-600 transition-colors select-none"
                      style={{ color: "var(--color-ink-faint)" }}
                      onClick={() => toggleSort("score")}
                    >
                      Avg Score{" "}
                      {sortField === "score" &&
                        (sortDir === "asc" ? "^" : "v")}
                    </th>
                    <th
                      className="text-right px-4 py-3 font-medium text-xs uppercase tracking-wider cursor-pointer hover:text-blue-600 transition-colors select-none"
                      style={{ color: "var(--color-ink-faint)" }}
                      onClick={() => toggleSort("activity")}
                    >
                      Joined{" "}
                      {sortField === "activity" &&
                        (sortDir === "asc" ? "^" : "v")}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {sortedStudents.map((s) => (
                    <tr
                      key={s.student_id}
                      className="hover:bg-gray-50/50 transition-colors"
                      style={{
                        borderBottom:
                          "1px solid var(--color-border-subtle)",
                      }}
                    >
                      <td className="px-4 py-3">
                        <Link
                          href={`/teacher/students/${s.student_id}`}
                          className="font-medium hover:text-blue-600 transition-colors"
                          style={{ color: "var(--color-ink)" }}
                        >
                          {s.display_name || "Student"}
                        </Link>
                      </td>
                      <td
                        className="px-4 py-3 text-center"
                        style={{ color: "var(--color-ink-muted)" }}
                      >
                        {s.modules_completed}
                      </td>
                      <td
                        className="px-4 py-3 text-center font-semibold"
                        style={{
                          color:
                            s.avg_score >= 70
                              ? "#16A34A"
                              : s.avg_score >= 50
                              ? "#D97706"
                              : s.avg_score > 0
                              ? "#EF4444"
                              : "var(--color-ink-muted)",
                        }}
                      >
                        {s.avg_score > 0 ? `${s.avg_score}%` : "--"}
                      </td>
                      <td
                        className="px-4 py-3 text-right text-xs"
                        style={{ color: "var(--color-ink-faint)" }}
                      >
                        {new Date(s.joined_at).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {activeTab === "assignments" && (
        <div>
          <div className="flex items-center justify-between mb-4">
            <p
              className="text-sm"
              style={{ color: "var(--color-ink-muted)" }}
            >
              {assignments.length} assignment
              {assignments.length !== 1 ? "s" : ""}
            </p>
            <Link
              href={`/teacher/assignments/new?classroom=${classroomId}`}
              className="btn-primary py-2 px-4 text-xs"
            >
              + New Assignment
            </Link>
          </div>

          {assignments.length === 0 ? (
            <div className="card p-8 text-center">
              <p
                className="text-sm mb-4"
                style={{ color: "var(--color-ink-muted)" }}
              >
                No assignments yet. Create one to assign modules, quizzes, or
                practice tests to your students.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {assignments.map((a) => {
                const pct =
                  a.total_students > 0
                    ? Math.round(
                        (a.completed_count / a.total_students) * 100
                      )
                    : 0;
                return (
                  <div
                    key={a.id}
                    className="card p-5"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <p
                          className="font-medium text-sm"
                          style={{ color: "var(--color-ink)" }}
                        >
                          {a.title}
                        </p>
                        <span
                          className="text-xs px-2 py-0.5 rounded-full"
                          style={{
                            background: "rgba(59, 130, 246, 0.08)",
                            color: "#3B82F6",
                          }}
                        >
                          {a.type === "lesson"
                            ? "Lesson"
                            : a.type === "quiz"
                            ? "Quiz"
                            : "Practice Test"}
                        </span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span
                          className="text-xs"
                          style={{ color: "var(--color-ink-faint)" }}
                        >
                          {a.completed_count}/{a.total_students} completed
                        </span>
                        {a.avg_score > 0 && (
                          <span
                            className="text-xs font-semibold"
                            style={{
                              color:
                                a.avg_score >= 70
                                  ? "#16A34A"
                                  : a.avg_score >= 50
                                  ? "#D97706"
                                  : "#EF4444",
                            }}
                          >
                            Avg: {a.avg_score}%
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div
                        className="flex-1 h-2 rounded-full overflow-hidden"
                        style={{ background: "var(--color-border-subtle)" }}
                      >
                        <div
                          className="h-full rounded-full transition-all"
                          style={{
                            width: `${pct}%`,
                            background:
                              pct >= 80
                                ? "#16A34A"
                                : pct >= 50
                                ? "#F59E0B"
                                : "#EF4444",
                          }}
                        />
                      </div>
                      <span
                        className="text-xs font-medium"
                        style={{ color: "var(--color-ink-faint)" }}
                      >
                        {pct}%
                      </span>
                    </div>
                    <div className="flex items-center gap-3 mt-2">
                      <span
                        className="text-xs"
                        style={{ color: "var(--color-ink-faint)" }}
                      >
                        {a.module_ids.length} module
                        {a.module_ids.length !== 1 ? "s" : ""}
                      </span>
                      {a.due_date && (
                        <span
                          className="text-xs"
                          style={{ color: "var(--color-ink-faint)" }}
                        >
                          Due{" "}
                          {new Date(a.due_date).toLocaleDateString()}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {activeTab === "settings" && (
        <div className="space-y-6">
          {/* Edit Classroom */}
          <div className="card p-6">
            <h3
              className="text-sm font-semibold mb-4 uppercase tracking-wider"
              style={{ color: "var(--color-ink-faint)" }}
            >
              Classroom Details
            </h3>
            <div className="space-y-4">
              <div>
                <label
                  className="block text-sm font-medium mb-1.5"
                  style={{ color: "var(--color-ink)" }}
                >
                  Classroom Name
                </label>
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  style={{
                    color: "var(--color-ink)",
                    background: "var(--color-surface)",
                    border: "1px solid var(--color-border)",
                  }}
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-1.5"
                  style={{ color: "var(--color-ink)" }}
                >
                  School Name (optional)
                </label>
                <input
                  type="text"
                  value={editSchool}
                  onChange={(e) => setEditSchool(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  style={{
                    color: "var(--color-ink)",
                    background: "var(--color-surface)",
                    border: "1px solid var(--color-border)",
                  }}
                />
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={handleSaveSettings}
                  disabled={saving || !editName.trim()}
                  className="btn-primary py-2.5 px-5 text-sm disabled:opacity-50"
                >
                  {saving ? "Saving..." : "Save Changes"}
                </button>
                {saveMsg && (
                  <span
                    className="text-sm"
                    style={{
                      color: saveMsg.includes("success")
                        ? "#16A34A"
                        : "#EF4444",
                    }}
                  >
                    {saveMsg}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Join Code Management */}
          <div className="card p-6">
            <h3
              className="text-sm font-semibold mb-4 uppercase tracking-wider"
              style={{ color: "var(--color-ink-faint)" }}
            >
              Join Code
            </h3>
            <div className="flex items-center justify-between">
              <div>
                <p
                  className="font-mono font-bold text-lg"
                  style={{ color: "var(--color-ink)" }}
                >
                  {classroom.join_code}
                </p>
                <p
                  className="text-xs mt-1"
                  style={{ color: "var(--color-ink-muted)" }}
                >
                  Regenerating will invalidate the current code.
                </p>
              </div>
              <button
                onClick={handleRegenerateCode}
                className="btn-secondary py-2 px-4 text-xs"
              >
                Regenerate Code
              </button>
            </div>
          </div>

          {/* Danger Zone */}
          <div
            className="card p-6"
            style={{ border: "1px solid rgba(239, 68, 68, 0.2)" }}
          >
            <h3
              className="text-sm font-semibold mb-2 uppercase tracking-wider"
              style={{ color: "#EF4444" }}
            >
              Danger Zone
            </h3>
            <p
              className="text-sm mb-4"
              style={{ color: "var(--color-ink-muted)" }}
            >
              Deactivating this classroom will prevent students from accessing it. This action can be reversed.
            </p>
            <button
              onClick={handleDeactivate}
              disabled={!classroom.active}
              className="px-4 py-2 rounded-xl text-sm font-medium transition-all disabled:opacity-50"
              style={{
                background: "rgba(239, 68, 68, 0.08)",
                color: "#EF4444",
                border: "1px solid rgba(239, 68, 68, 0.2)",
              }}
            >
              {classroom.active ? "Deactivate Classroom" : "Classroom is Inactive"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
