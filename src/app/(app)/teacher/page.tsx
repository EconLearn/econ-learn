"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/components/providers/AuthProvider";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";
import type { Classroom } from "@/lib/types/teacher";

export default function TeacherDashboard() {
  const { user, loading } = useAuth();
  const [classrooms, setClassrooms] = useState<(Classroom & { student_count: number })[]>([]);
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    if (!user) return;

    async function loadClassrooms() {
      try {
        const res = await fetch("/api/classrooms");
        const data = await res.json();
        if (data.classrooms) {
          setClassrooms(
            data.classrooms.map((c: any) => ({
              ...c,
              student_count: c.classroom_members?.[0]?.count || 0,
            }))
          );
        }
      } catch (err) {
        console.error("Failed to load classrooms:", err);
      } finally {
        setLoadingData(false);
      }
    }

    loadClassrooms();
  }, [user]);

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-gray-300 border-t-gray-900 rounded-full animate-spin" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="max-w-md mx-auto px-6 py-20 text-center">
        <h1 className="text-xl font-bold mb-4" style={{ color: "var(--color-ink)" }}>
          Sign in to access the Teacher Dashboard
        </h1>
        <Link href="/login" className="btn-primary py-3 px-8">Sign In</Link>
      </div>
    );
  }

  const totalStudents = classrooms.reduce((sum, c) => sum + c.student_count, 0);

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold" style={{ color: "var(--color-ink)" }}>
            Teacher Dashboard
          </h1>
          <p className="text-sm mt-1" style={{ color: "var(--color-ink-muted)" }}>
            Manage your classrooms, assignments, and student progress.
          </p>
        </div>
        <Link
          href="/teacher/classrooms"
          className="btn-primary py-2.5 px-5 text-sm"
        >
          + New Classroom
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="card p-5">
          <p className="text-sm font-medium" style={{ color: "var(--color-ink-muted)" }}>Classrooms</p>
          <p className="text-3xl font-bold mt-1" style={{ color: "var(--color-ink)" }}>
            {classrooms.length}
          </p>
        </div>
        <div className="card p-5">
          <p className="text-sm font-medium" style={{ color: "var(--color-ink-muted)" }}>Total Students</p>
          <p className="text-3xl font-bold mt-1" style={{ color: "var(--color-ink)" }}>
            {totalStudents}
          </p>
        </div>
        <div className="card p-5">
          <p className="text-sm font-medium" style={{ color: "var(--color-ink-muted)" }}>Active Assignments</p>
          <p className="text-3xl font-bold mt-1" style={{ color: "var(--color-ink)" }}>
            --
          </p>
        </div>
      </div>

      {/* Classrooms List */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4" style={{ color: "var(--color-ink)" }}>
          Your Classrooms
        </h2>

        {loadingData ? (
          <div className="card p-8 text-center">
            <div className="w-5 h-5 border-2 border-gray-300 border-t-gray-900 rounded-full animate-spin mx-auto" />
          </div>
        ) : classrooms.length === 0 ? (
          <div className="card p-8 text-center">
            <p className="text-sm mb-4" style={{ color: "var(--color-ink-muted)" }}>
              No classrooms yet. Create one to get started.
            </p>
            <Link href="/teacher/classrooms" className="btn-primary py-2.5 px-6 text-sm">
              Create Your First Classroom
            </Link>
          </div>
        ) : (
          <div className="space-y-3">
            {classrooms.map((classroom) => (
              <Link
                key={classroom.id}
                href={`/teacher/classrooms/${classroom.id}`}
                className="card p-5 flex items-center justify-between hover:shadow-md transition-shadow group"
              >
                <div>
                  <h3 className="font-semibold group-hover:text-blue-600 transition-colors" style={{ color: "var(--color-ink)" }}>
                    {classroom.name}
                  </h3>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-xs" style={{ color: "var(--color-ink-muted)" }}>
                      {classroom.student_count} student{classroom.student_count !== 1 ? "s" : ""}
                    </span>
                    {classroom.school_name && (
                      <span className="text-xs" style={{ color: "var(--color-ink-faint)" }}>
                        {classroom.school_name}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-xs font-medium" style={{ color: "var(--color-ink-faint)" }}>Join Code</p>
                    <p className="font-mono font-bold text-sm" style={{ color: "var(--color-ink)" }}>
                      {classroom.join_code}
                    </p>
                  </div>
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-2 gap-4">
        <Link
          href="/teacher/assignments"
          className="card p-5 hover:shadow-md transition-shadow group"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-violet-50 flex items-center justify-center">
              <svg className="w-5 h-5 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-sm group-hover:text-violet-600 transition-colors" style={{ color: "var(--color-ink)" }}>
                Assignments
              </p>
              <p className="text-xs" style={{ color: "var(--color-ink-muted)" }}>
                Create and manage assignments
              </p>
            </div>
          </div>
        </Link>
        <Link
          href="/sandbox"
          className="card p-5 hover:shadow-md transition-shadow group"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center">
              <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-sm group-hover:text-emerald-600 transition-colors" style={{ color: "var(--color-ink)" }}>
                Graph Sandbox
              </p>
              <p className="text-xs" style={{ color: "var(--color-ink-muted)" }}>
                Demo graphs fullscreen in class
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
