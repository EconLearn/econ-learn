"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/components/providers/AuthProvider";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";
import type { Classroom, Assignment } from "@/lib/types/teacher";

interface ActivityItem {
  id: string;
  type: "quiz_complete" | "student_joined" | "assignment_created";
  message: string;
  timestamp: string;
}

interface DashboardData {
  classrooms: (Classroom & { student_count: number })[];
  totalStudents: number;
  activeAssignments: number;
  averageScore: number;
  dueSoonCount: number;
  recentActivity: ActivityItem[];
  moduleScores: { module: string; score: number }[];
}

function SVGBarChart({ data }: { data: { module: string; score: number }[] }) {
  if (data.length === 0) return null;
  const barWidth = 40;
  const gap = 12;
  const chartHeight = 140;
  const chartWidth = data.length * (barWidth + gap);

  return (
    <svg
      viewBox={`0 0 ${Math.max(chartWidth, 200)} ${chartHeight + 40}`}
      className="w-full"
      style={{ maxHeight: 200 }}
    >
      {data.map((d, i) => {
        const barHeight = (d.score / 100) * chartHeight;
        const x = i * (barWidth + gap) + gap / 2;
        const y = chartHeight - barHeight;
        return (
          <g key={d.module}>
            <rect
              x={x}
              y={y}
              width={barWidth}
              height={barHeight}
              rx={4}
              fill={d.score >= 70 ? "#3B82F6" : d.score >= 50 ? "#F59E0B" : "#EF4444"}
              opacity={0.85}
            />
            <text
              x={x + barWidth / 2}
              y={y - 6}
              textAnchor="middle"
              fontSize={11}
              fontWeight={600}
              fill="var(--color-ink-muted)"
            >
              {d.score}%
            </text>
            <text
              x={x + barWidth / 2}
              y={chartHeight + 16}
              textAnchor="middle"
              fontSize={9}
              fill="var(--color-ink-faint)"
            >
              {d.module.length > 8 ? d.module.slice(0, 7) + "..." : d.module}
            </text>
          </g>
        );
      })}
      {/* baseline */}
      <line
        x1={0}
        y1={chartHeight}
        x2={chartWidth}
        y2={chartHeight}
        stroke="var(--color-border)"
        strokeWidth={1}
      />
    </svg>
  );
}

export default function TeacherDashboard() {
  const { user, loading } = useAuth();
  const supabase = createClient();
  const [data, setData] = useState<DashboardData | null>(null);
  const [loadingData, setLoadingData] = useState(true);
  const [displayName, setDisplayName] = useState("");

  useEffect(() => {
    if (!user) return;

    async function loadDashboard() {
      try {
        // Load profile
        const { data: profile } = await supabase
          .from("profiles")
          .select("display_name")
          .eq("id", user!.id)
          .single();

        setDisplayName(profile?.display_name || user!.email?.split("@")[0] || "Teacher");

        // Load classrooms
        const res = await fetch("/api/classrooms");
        const classroomsData = await res.json();
        const classrooms = (classroomsData.classrooms || []).map((c: any) => ({
          ...c,
          student_count: c.classroom_members?.[0]?.count || 0,
        }));

        const totalStudents = classrooms.reduce(
          (sum: number, c: any) => sum + c.student_count,
          0
        );

        // Load assignments across all classrooms
        const classroomIds = classrooms.map((c: any) => c.id);
        let allAssignments: Assignment[] = [];
        if (classroomIds.length > 0) {
          const { data: assignments } = await supabase
            .from("assignments")
            .select("*")
            .in("classroom_id", classroomIds);
          allAssignments = assignments || [];
        }

        const now = new Date();
        const weekFromNow = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
        const dueSoon = allAssignments.filter(
          (a) =>
            a.due_date &&
            new Date(a.due_date) > now &&
            new Date(a.due_date) <= weekFromNow
        );

        // Load recent activity: quiz completions and member joins
        const activity: ActivityItem[] = [];

        if (classroomIds.length > 0) {
          // Recent joins
          const { data: recentMembers } = await supabase
            .from("classroom_members")
            .select("student_id, joined_at, classroom_id, profiles(display_name)")
            .in("classroom_id", classroomIds)
            .order("joined_at", { ascending: false })
            .limit(10);

          if (recentMembers) {
            for (const m of recentMembers) {
              const classroom = classrooms.find((c: any) => c.id === m.classroom_id);
              const name = (m as any).profiles?.display_name || "A student";
              activity.push({
                id: `join-${m.student_id}-${m.classroom_id}`,
                type: "student_joined",
                message: `${name} joined ${classroom?.name || "a classroom"}`,
                timestamp: m.joined_at,
              });
            }
          }

          // Recent quiz scores
          const { data: recentCompletions } = await supabase
            .from("assignment_completions")
            .select("assignment_id, student_id, completed_at, score, profiles(display_name)")
            .in(
              "assignment_id",
              allAssignments.map((a) => a.id)
            )
            .not("completed_at", "is", null)
            .order("completed_at", { ascending: false })
            .limit(10);

          if (recentCompletions) {
            for (const c of recentCompletions) {
              const assignment = allAssignments.find((a) => a.id === c.assignment_id);
              const name = (c as any).profiles?.display_name || "A student";
              activity.push({
                id: `complete-${c.student_id}-${c.assignment_id}`,
                type: "quiz_complete",
                message: `${name} completed ${assignment?.title || "an assignment"}${c.score != null ? ` (${c.score}%)` : ""}`,
                timestamp: c.completed_at!,
              });
            }
          }
        }

        // Sort activity by timestamp descending
        activity.sort(
          (a, b) =>
            new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
        );

        // Compute average score from completions
        let averageScore = 0;
        if (classroomIds.length > 0 && allAssignments.length > 0) {
          const { data: allCompletions } = await supabase
            .from("assignment_completions")
            .select("score")
            .in(
              "assignment_id",
              allAssignments.map((a) => a.id)
            )
            .not("score", "is", null);

          if (allCompletions && allCompletions.length > 0) {
            const sum = allCompletions.reduce(
              (acc: number, c: any) => acc + (c.score || 0),
              0
            );
            averageScore = Math.round(sum / allCompletions.length);
          }
        }

        // Module scores: aggregate quiz scores by module
        const moduleScoreMap: Record<string, { total: number; count: number }> = {};
        if (classroomIds.length > 0) {
          const { data: quizResults } = await supabase
            .from("quiz_results")
            .select("module_id, score_percent")
            .in("classroom_id", classroomIds);

          if (quizResults) {
            for (const q of quizResults) {
              if (!moduleScoreMap[q.module_id]) {
                moduleScoreMap[q.module_id] = { total: 0, count: 0 };
              }
              moduleScoreMap[q.module_id].total += q.score_percent || 0;
              moduleScoreMap[q.module_id].count += 1;
            }
          }
        }

        const moduleScores = Object.entries(moduleScoreMap)
          .map(([module, { total, count }]) => ({
            module: module.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
            score: Math.round(total / count),
          }))
          .slice(0, 8);

        setData({
          classrooms,
          totalStudents,
          activeAssignments: allAssignments.length,
          averageScore,
          dueSoonCount: dueSoon.length,
          recentActivity: activity.slice(0, 8),
          moduleScores,
        });
      } catch (err) {
        console.error("Failed to load dashboard:", err);
      } finally {
        setLoadingData(false);
      }
    }

    loadDashboard();
  }, [user, supabase]);

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
        <h1
          className="text-xl font-bold mb-4"
          style={{ color: "var(--color-ink)" }}
        >
          Sign in to access the Teacher Dashboard
        </h1>
        <Link href="/login" className="btn-primary py-3 px-8">
          Sign In
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      {/* Welcome Header */}
      <div className="mb-8">
        <h1
          className="text-2xl font-bold"
          style={{ color: "var(--color-ink)" }}
        >
          Welcome back, {displayName}
        </h1>
        <p
          className="text-sm mt-1"
          style={{ color: "var(--color-ink-muted)" }}
        >
          Here is an overview of your classrooms and student activity.
        </p>
      </div>

      {loadingData ? (
        <div className="card p-12 text-center">
          <div className="w-6 h-6 border-2 border-gray-300 border-t-gray-900 rounded-full animate-spin mx-auto" />
        </div>
      ) : data ? (
        <>
          {/* At-a-glance Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="card p-5">
              <p
                className="text-xs font-medium uppercase tracking-wider"
                style={{ color: "var(--color-ink-faint)" }}
              >
                Total Students
              </p>
              <p
                className="text-3xl font-bold mt-1"
                style={{ color: "var(--color-ink)" }}
              >
                {data.totalStudents}
              </p>
            </div>
            <div className="card p-5">
              <p
                className="text-xs font-medium uppercase tracking-wider"
                style={{ color: "var(--color-ink-faint)" }}
              >
                Active Assignments
              </p>
              <p
                className="text-3xl font-bold mt-1"
                style={{ color: "var(--color-ink)" }}
              >
                {data.activeAssignments}
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
                style={{ color: data.averageScore >= 70 ? "#16A34A" : data.averageScore >= 50 ? "#D97706" : "var(--color-ink)" }}
              >
                {data.averageScore > 0 ? `${data.averageScore}%` : "--"}
              </p>
            </div>
            <div className="card p-5">
              <p
                className="text-xs font-medium uppercase tracking-wider"
                style={{ color: "var(--color-ink-faint)" }}
              >
                Due This Week
              </p>
              <p
                className="text-3xl font-bold mt-1"
                style={{ color: data.dueSoonCount > 0 ? "#3B82F6" : "var(--color-ink)" }}
              >
                {data.dueSoonCount}
              </p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            <Link
              href="/teacher/classrooms"
              className="card p-4 hover:shadow-md transition-shadow group text-center"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mx-auto mb-2">
                <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <p className="text-xs font-semibold group-hover:text-blue-600 transition-colors" style={{ color: "var(--color-ink)" }}>
                New Classroom
              </p>
            </Link>
            <Link
              href={data.classrooms.length > 0 ? `/teacher/assignments/new?classroom=${data.classrooms[0].id}` : "/teacher/classrooms"}
              className="card p-4 hover:shadow-md transition-shadow group text-center"
            >
              <div className="w-10 h-10 rounded-lg bg-violet-50 flex items-center justify-center mx-auto mb-2">
                <svg className="w-5 h-5 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <p className="text-xs font-semibold group-hover:text-violet-600 transition-colors" style={{ color: "var(--color-ink)" }}>
                New Assignment
              </p>
            </Link>
            <Link
              href="/teacher/reports"
              className="card p-4 hover:shadow-md transition-shadow group text-center"
            >
              <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center mx-auto mb-2">
                <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <p className="text-xs font-semibold group-hover:text-amber-600 transition-colors" style={{ color: "var(--color-ink)" }}>
                View Reports
              </p>
            </Link>
            <Link
              href="/sandbox"
              className="card p-4 hover:shadow-md transition-shadow group text-center"
            >
              <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center mx-auto mb-2">
                <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <p className="text-xs font-semibold group-hover:text-emerald-600 transition-colors" style={{ color: "var(--color-ink)" }}>
                Open Sandbox
              </p>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Recent Activity Feed */}
            <div className="card p-5">
              <h2
                className="text-sm font-semibold mb-4 uppercase tracking-wider"
                style={{ color: "var(--color-ink-faint)" }}
              >
                Recent Activity
              </h2>
              {data.recentActivity.length === 0 ? (
                <p className="text-sm" style={{ color: "var(--color-ink-muted)" }}>
                  No recent activity yet. Activity will appear here as students join classrooms and complete assignments.
                </p>
              ) : (
                <div className="space-y-3">
                  {data.recentActivity.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-start gap-3"
                    >
                      <div
                        className="w-2 h-2 rounded-full mt-1.5 shrink-0"
                        style={{
                          background:
                            item.type === "quiz_complete"
                              ? "#3B82F6"
                              : item.type === "student_joined"
                              ? "#16A34A"
                              : "#8B5CF6",
                        }}
                      />
                      <div className="flex-1 min-w-0">
                        <p
                          className="text-sm leading-snug"
                          style={{ color: "var(--color-ink)" }}
                        >
                          {item.message}
                        </p>
                        <p
                          className="text-xs mt-0.5"
                          style={{ color: "var(--color-ink-faint)" }}
                        >
                          {formatRelativeTime(item.timestamp)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Class Performance Chart */}
            <div className="card p-5">
              <h2
                className="text-sm font-semibold mb-4 uppercase tracking-wider"
                style={{ color: "var(--color-ink-faint)" }}
              >
                Average Score by Module
              </h2>
              {data.moduleScores.length === 0 ? (
                <div className="flex items-center justify-center h-32">
                  <p className="text-sm" style={{ color: "var(--color-ink-muted)" }}>
                    No quiz data available yet. Scores will appear here once students complete quizzes.
                  </p>
                </div>
              ) : (
                <SVGBarChart data={data.moduleScores} />
              )}
            </div>
          </div>

          {/* Classrooms List */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2
                className="text-lg font-semibold"
                style={{ color: "var(--color-ink)" }}
              >
                Your Classrooms
              </h2>
              <Link
                href="/teacher/classrooms"
                className="btn-primary py-2 px-4 text-xs"
              >
                + New Classroom
              </Link>
            </div>

            {data.classrooms.length === 0 ? (
              <div className="card p-8 text-center">
                <p
                  className="text-sm mb-4"
                  style={{ color: "var(--color-ink-muted)" }}
                >
                  No classrooms yet. Create one to get started.
                </p>
                <Link
                  href="/teacher/classrooms"
                  className="btn-primary py-2.5 px-6 text-sm"
                >
                  Create Your First Classroom
                </Link>
              </div>
            ) : (
              <div className="space-y-3">
                {data.classrooms.map((classroom) => (
                  <Link
                    key={classroom.id}
                    href={`/teacher/classrooms/${classroom.id}`}
                    className="card p-5 flex items-center justify-between hover:shadow-md transition-shadow group"
                  >
                    <div>
                      <h3
                        className="font-semibold group-hover:text-blue-600 transition-colors"
                        style={{ color: "var(--color-ink)" }}
                      >
                        {classroom.name}
                      </h3>
                      <div className="flex items-center gap-3 mt-1">
                        <span
                          className="text-xs"
                          style={{ color: "var(--color-ink-muted)" }}
                        >
                          {classroom.student_count} student
                          {classroom.student_count !== 1 ? "s" : ""}
                        </span>
                        {classroom.school_name && (
                          <span
                            className="text-xs"
                            style={{ color: "var(--color-ink-faint)" }}
                          >
                            {classroom.school_name}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p
                          className="text-xs font-medium"
                          style={{ color: "var(--color-ink-faint)" }}
                        >
                          Join Code
                        </p>
                        <p
                          className="font-mono font-bold text-sm"
                          style={{ color: "var(--color-ink)" }}
                        >
                          {classroom.join_code}
                        </p>
                      </div>
                      <svg
                        className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </>
      ) : (
        <div className="card p-8 text-center">
          <p className="text-sm" style={{ color: "var(--color-ink-muted)" }}>
            Failed to load dashboard data. Please try refreshing the page.
          </p>
        </div>
      )}
    </div>
  );
}

function formatRelativeTime(dateStr: string): string {
  const now = new Date();
  const date = new Date(dateStr);
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 1) return "Just now";
  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  if (diffDays < 7) return `${diffDays}d ago`;
  return date.toLocaleDateString();
}
