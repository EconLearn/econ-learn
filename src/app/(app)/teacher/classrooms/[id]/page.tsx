"use client";

import { useEffect, useState, useCallback } from "react";
import { useAuth } from "@/components/providers/AuthProvider";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";
import { useParams } from "next/navigation";
import type { Classroom, Assignment } from "@/lib/types/teacher";

interface StudentRow {
  student_id: string;
  display_name: string | null;
  email: string | null;
  joined_at: string;
  modules_completed: number;
  avg_score: number;
}

export default function ClassroomDetailPage() {
  const { user } = useAuth();
  const params = useParams();
  const classroomId = params.id as string;
  const supabase = createClient();

  const [classroom, setClassroom] = useState<Classroom | null>(null);
  const [students, setStudents] = useState<StudentRow[]>([]);
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [loading, setLoading] = useState(true);
  const [codeCopied, setCodeCopied] = useState(false);

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

      // Load members with profiles
      const { data: members } = await supabase
        .from("classroom_members")
        .select("student_id, joined_at, profiles(display_name, email:id)")
        .eq("classroom_id", classroomId);

      if (members) {
        const studentRows: StudentRow[] = members.map((m: any) => ({
          student_id: m.student_id,
          display_name: m.profiles?.display_name || null,
          email: null,
          joined_at: m.joined_at,
          modules_completed: 0,
          avg_score: 0,
        }));
        setStudents(studentRows);
      }

      // Load assignments
      const res = await fetch(`/api/assignments?classroom_id=${classroomId}`);
      const assignData = await res.json();
      if (assignData.assignments) {
        setAssignments(assignData.assignments);
      }
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
        <h1 className="text-xl font-bold mb-4" style={{ color: "var(--color-ink)" }}>
          Classroom not found
        </h1>
        <Link href="/teacher" className="btn-primary py-2.5 px-6 text-sm">
          Back to Dashboard
        </Link>
      </div>
    );
  }

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

      {/* Header */}
      <div className="flex items-start justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold" style={{ color: "var(--color-ink)" }}>
            {classroom.name}
          </h1>
          {classroom.school_name && (
            <p className="text-sm mt-0.5" style={{ color: "var(--color-ink-muted)" }}>
              {classroom.school_name}
            </p>
          )}
        </div>
        <button
          onClick={copyJoinCode}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all hover:shadow-md"
          style={{
            background: "var(--color-surface)",
            border: "1px solid var(--color-border)",
            color: "var(--color-ink)",
          }}
        >
          <span className="font-mono font-bold tracking-wider">{classroom.join_code}</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          {codeCopied && <span className="text-emerald-600 text-xs">Copied!</span>}
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="card p-5">
          <p className="text-sm font-medium" style={{ color: "var(--color-ink-muted)" }}>Students</p>
          <p className="text-3xl font-bold mt-1" style={{ color: "var(--color-ink)" }}>
            {students.length}
          </p>
        </div>
        <div className="card p-5">
          <p className="text-sm font-medium" style={{ color: "var(--color-ink-muted)" }}>Assignments</p>
          <p className="text-3xl font-bold mt-1" style={{ color: "var(--color-ink)" }}>
            {assignments.length}
          </p>
        </div>
        <div className="card p-5">
          <p className="text-sm font-medium" style={{ color: "var(--color-ink-muted)" }}>Avg Completion</p>
          <p className="text-3xl font-bold mt-1" style={{ color: "var(--color-ink)" }}>
            --
          </p>
        </div>
      </div>

      {/* Join Code Callout */}
      <div
        className="card p-5 mb-8 flex items-center gap-4"
        style={{ background: "rgba(59, 130, 246, 0.04)", border: "1px solid rgba(59, 130, 246, 0.12)" }}
      >
        <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
          <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium" style={{ color: "var(--color-ink)" }}>
            Share this join code with your students: <strong className="font-mono">{classroom.join_code}</strong>
          </p>
          <p className="text-xs mt-0.5" style={{ color: "var(--color-ink-muted)" }}>
            Students go to econlearn.org/join and enter the code to join your classroom.
          </p>
        </div>
      </div>

      {/* Assignments */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold" style={{ color: "var(--color-ink)" }}>Assignments</h2>
          <Link
            href={`/teacher/assignments/new?classroom=${classroomId}`}
            className="btn-primary py-2 px-4 text-xs"
          >
            + New Assignment
          </Link>
        </div>

        {assignments.length === 0 ? (
          <div className="card p-6 text-center">
            <p className="text-sm" style={{ color: "var(--color-ink-muted)" }}>
              No assignments yet. Create one to assign modules, quizzes, or practice tests to your students.
            </p>
          </div>
        ) : (
          <div className="space-y-2">
            {assignments.map((a) => (
              <div key={a.id} className="card p-4 flex items-center justify-between">
                <div>
                  <p className="font-medium text-sm" style={{ color: "var(--color-ink)" }}>{a.title}</p>
                  <p className="text-xs mt-0.5" style={{ color: "var(--color-ink-muted)" }}>
                    {a.type === "lesson" ? "Lesson" : a.type === "quiz" ? "Quiz" : "Practice Test"}
                    {" · "}{a.module_ids.length} module{a.module_ids.length !== 1 ? "s" : ""}
                    {a.due_date && ` · Due ${new Date(a.due_date).toLocaleDateString()}`}
                  </p>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-full" style={{
                  background: "rgba(59, 130, 246, 0.08)",
                  color: "#3B82F6",
                }}>
                  {a.type}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Student Roster */}
      <div>
        <h2 className="text-lg font-semibold mb-4" style={{ color: "var(--color-ink)" }}>
          Students ({students.length})
        </h2>

        {students.length === 0 ? (
          <div className="card p-6 text-center">
            <p className="text-sm" style={{ color: "var(--color-ink-muted)" }}>
              No students have joined yet. Share the join code <strong className="font-mono">{classroom.join_code}</strong> with your class.
            </p>
          </div>
        ) : (
          <div className="card overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ borderBottom: "1px solid var(--color-border-subtle)" }}>
                  <th className="text-left px-4 py-3 font-medium text-xs uppercase tracking-wider" style={{ color: "var(--color-ink-faint)" }}>Student</th>
                  <th className="text-center px-4 py-3 font-medium text-xs uppercase tracking-wider" style={{ color: "var(--color-ink-faint)" }}>Modules</th>
                  <th className="text-center px-4 py-3 font-medium text-xs uppercase tracking-wider" style={{ color: "var(--color-ink-faint)" }}>Avg Score</th>
                  <th className="text-right px-4 py-3 font-medium text-xs uppercase tracking-wider" style={{ color: "var(--color-ink-faint)" }}>Joined</th>
                </tr>
              </thead>
              <tbody>
                {students.map((s) => (
                  <tr key={s.student_id} style={{ borderBottom: "1px solid var(--color-border-subtle)" }}>
                    <td className="px-4 py-3 font-medium" style={{ color: "var(--color-ink)" }}>
                      {s.display_name || "Student"}
                    </td>
                    <td className="px-4 py-3 text-center" style={{ color: "var(--color-ink-muted)" }}>
                      {s.modules_completed}
                    </td>
                    <td className="px-4 py-3 text-center" style={{ color: "var(--color-ink-muted)" }}>
                      {s.avg_score > 0 ? `${s.avg_score}%` : "--"}
                    </td>
                    <td className="px-4 py-3 text-right text-xs" style={{ color: "var(--color-ink-faint)" }}>
                      {new Date(s.joined_at).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
