"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/components/providers/AuthProvider";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";
import type { Classroom } from "@/lib/types/teacher";

interface ModuleScore {
  module_id: string;
  module_name: string;
  avg_score: number;
  attempts: number;
}

interface AssignmentCompletion {
  assignment_id: string;
  title: string;
  type: string;
  total_students: number;
  completed_count: number;
  avg_score: number;
}

interface AtRiskStudent {
  student_id: string;
  display_name: string;
  avg_score: number;
  last_active: string | null;
  reason: string;
}

interface ReportData {
  moduleScores: ModuleScore[];
  assignmentCompletions: AssignmentCompletion[];
  atRiskStudents: AtRiskStudent[];
  totalStudents: number;
}

function SVGBarChart({
  data,
}: {
  data: { label: string; value: number; color?: string }[];
}) {
  if (data.length === 0) return null;
  const barWidth = 48;
  const gap = 14;
  const chartHeight = 160;
  const chartWidth = data.length * (barWidth + gap) + gap;

  return (
    <svg
      viewBox={`0 0 ${Math.max(chartWidth, 200)} ${chartHeight + 50}`}
      className="w-full"
      style={{ maxHeight: 240 }}
    >
      {data.map((d, i) => {
        const barHeight = (d.value / 100) * chartHeight;
        const x = i * (barWidth + gap) + gap;
        const y = chartHeight - barHeight;
        const color =
          d.color ||
          (d.value >= 70
            ? "#3B82F6"
            : d.value >= 50
            ? "#F59E0B"
            : "#EF4444");
        return (
          <g key={d.label + i}>
            <rect
              x={x}
              y={y}
              width={barWidth}
              height={Math.max(barHeight, 2)}
              rx={4}
              fill={color}
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
              {d.value}%
            </text>
            <text
              x={x + barWidth / 2}
              y={chartHeight + 16}
              textAnchor="middle"
              fontSize={9}
              fill="var(--color-ink-faint)"
            >
              {d.label.length > 10 ? d.label.slice(0, 9) + "..." : d.label}
            </text>
          </g>
        );
      })}
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

export default function ReportsPage() {
  const { user, loading: authLoading } = useAuth();
  const supabase = createClient();

  const [classrooms, setClassrooms] = useState<(Classroom & { student_count: number })[]>([]);
  const [selectedClassroom, setSelectedClassroom] = useState<string>("all");
  const [reportData, setReportData] = useState<ReportData | null>(null);
  const [loading, setLoading] = useState(true);
  const [exporting, setExporting] = useState(false);
  const [atRiskThreshold, setAtRiskThreshold] = useState(60);

  // Load classrooms
  useEffect(() => {
    if (!user) return;

    async function loadClassrooms() {
      const res = await fetch("/api/classrooms");
      const data = await res.json();
      if (data.classrooms) {
        const mapped = data.classrooms.map((c: any) => ({
          ...c,
          student_count: c.classroom_members?.[0]?.count || 0,
        }));
        setClassrooms(mapped);
      }
    }

    loadClassrooms();
  }, [user]);

  // Load report data when classroom selection changes
  useEffect(() => {
    if (!user || classrooms.length === 0) {
      setLoading(false);
      return;
    }

    async function loadReports() {
      setLoading(true);
      try {
        const targetClassrooms =
          selectedClassroom === "all"
            ? classrooms
            : classrooms.filter((c) => c.id === selectedClassroom);

        const classroomIds = targetClassrooms.map((c) => c.id);
        const totalStudents = targetClassrooms.reduce(
          (sum, c) => sum + c.student_count,
          0
        );

        // Module scores: gather from assignment_completions + exam_sessions
        const { data: allAssignments } = await supabase
          .from("assignments")
          .select("id, title, type, classroom_id, module_ids")
          .in("classroom_id", classroomIds);

        const allAssignmentIds = (allAssignments || []).map((a) => a.id);

        // Fetch assignment completions and exam sessions in parallel
        const [{ data: allCompletions }, { data: allExamSessions }] =
          await Promise.all([
            allAssignmentIds.length > 0
              ? supabase
                  .from("assignment_completions")
                  .select("assignment_id, student_id, score, completed_at")
                  .in("assignment_id", allAssignmentIds)
              : Promise.resolve({ data: [] as any[] }),
            allAssignmentIds.length > 0
              ? supabase
                  .from("exam_sessions")
                  .select("assignment_id, student_id, score, status")
                  .in("assignment_id", allAssignmentIds)
                  .in("status", ["submitted", "force_submitted"])
              : Promise.resolve({ data: [] as any[] }),
          ]);

        // Build a combined scores list with module mapping
        // Each entry: { student_id, score, module_ids }
        const combinedScores: { student_id: string; score: number; module_ids: string[] }[] = [];
        const assignmentMap = new Map(
          (allAssignments || []).map((a) => [a.id, a])
        );

        for (const c of allCompletions || []) {
          const assignment = assignmentMap.get(c.assignment_id);
          if (assignment && c.score != null) {
            combinedScores.push({
              student_id: c.student_id,
              score: c.score,
              module_ids: assignment.module_ids || [],
            });
          }
        }

        for (const e of allExamSessions || []) {
          const assignment = assignmentMap.get(e.assignment_id);
          if (assignment && e.score != null) {
            combinedScores.push({
              student_id: e.student_id,
              score: e.score,
              module_ids: assignment.module_ids || [],
            });
          }
        }

        // Aggregate scores by module
        const moduleMap: Record<
          string,
          { total: number; count: number }
        > = {};
        for (const entry of combinedScores) {
          for (const mid of entry.module_ids) {
            if (!moduleMap[mid]) {
              moduleMap[mid] = { total: 0, count: 0 };
            }
            moduleMap[mid].total += entry.score;
            moduleMap[mid].count += 1;
          }
        }

        const moduleScores: ModuleScore[] = Object.entries(moduleMap).map(
          ([id, { total, count }]) => ({
            module_id: id,
            module_name: id
              .replace(/-/g, " ")
              .replace(/\b\w/g, (c) => c.toUpperCase()),
            avg_score: Math.round(total / count),
            attempts: count,
          })
        );

        // Assignment completions (reuse allAssignments + allCompletions from above)
        const assignmentCompletions: AssignmentCompletion[] = [];
        if (allAssignments && allAssignments.length > 0) {
          for (const a of allAssignments) {
            const aClassroom = targetClassrooms.find(
              (c) => c.id === a.classroom_id
            );
            const aCompletions = (allCompletions || []).filter(
              (c) => c.assignment_id === a.id && c.completed_at
            );
            const avgScore =
              aCompletions.length > 0
                ? Math.round(
                    aCompletions.reduce(
                      (sum, c) => sum + (c.score || 0),
                      0
                    ) / aCompletions.length
                  )
                : 0;

            assignmentCompletions.push({
              assignment_id: a.id,
              title: a.title,
              type: a.type,
              total_students: aClassroom?.student_count || 0,
              completed_count: aCompletions.length,
              avg_score: avgScore,
            });
          }
        }

        // At-risk students: low score or inactive
        const atRiskStudents: AtRiskStudent[] = [];
        const sevenDaysAgo = new Date(
          Date.now() - 7 * 24 * 60 * 60 * 1000
        ).toISOString();

        const { data: members } = await supabase
          .from("classroom_members")
          .select("student_id, joined_at, classroom_id")
          .in("classroom_id", classroomIds);

        if (members) {
          const studentIds = Array.from(new Set(members.map((m: any) => m.student_id)));

          // Fetch profiles separately (cannot FK join on auth.users)
          const { data: profiles } = studentIds.length > 0
            ? await supabase
                .from("profiles")
                .select("id, display_name")
                .in("id", studentIds)
            : { data: [] as any[] };

          const profileMap = new Map(
            (profiles || []).map((p: any) => [p.id, p.display_name])
          );

          // Compute per-student scores from combinedScores
          const studentScores: Record<
            string,
            { total: number; count: number }
          > = {};

          for (const entry of combinedScores) {
            if (!studentScores[entry.student_id]) {
              studentScores[entry.student_id] = { total: 0, count: 0 };
            }
            studentScores[entry.student_id].total += entry.score;
            studentScores[entry.student_id].count += 1;
          }

          for (const sid of studentIds) {
            const member = members.find((m) => m.student_id === sid);
            const name = profileMap.get(sid) || "Student";
            const scores = studentScores[sid];
            const avgScore =
              scores && scores.count > 0
                ? Math.round(scores.total / scores.count)
                : 0;
            const lastActive = member?.joined_at || null;

            const reasons: string[] = [];
            if (scores && scores.count > 0 && avgScore < atRiskThreshold) {
              reasons.push(`Average score: ${avgScore}%`);
            }
            if (
              !lastActive ||
              new Date(lastActive) < new Date(sevenDaysAgo)
            ) {
              reasons.push("Inactive for 7+ days");
            }
            if (!scores || scores.count === 0) {
              reasons.push("No assignment attempts");
            }

            if (reasons.length > 0) {
              atRiskStudents.push({
                student_id: sid,
                display_name: name,
                avg_score: avgScore,
                last_active: lastActive,
                reason: reasons.join(" | "),
              });
            }
          }
        }

        setReportData({
          moduleScores,
          assignmentCompletions,
          atRiskStudents,
          totalStudents,
        });
      } catch (err) {
        console.error("Failed to load reports:", err);
      } finally {
        setLoading(false);
      }
    }

    loadReports();
  }, [user, classrooms, selectedClassroom, supabase, atRiskThreshold]);

  const handleExportCSV = async () => {
    setExporting(true);
    try {
      const classroomId =
        selectedClassroom === "all" ? classrooms[0]?.id : selectedClassroom;
      if (!classroomId) return;

      const queryParam =
        selectedClassroom === "all"
          ? classrooms.map((c) => `classroom_id=${c.id}`).join("&")
          : `classroom_id=${classroomId}`;

      const res = await fetch(`/api/teacher/export?${queryParam}`);
      if (!res.ok) throw new Error("Export failed");

      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `student-report-${new Date().toISOString().split("T")[0]}.csv`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Export failed:", err);
    } finally {
      setExporting(false);
    }
  };

  if (authLoading) {
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
          Sign in to view reports
        </h1>
        <Link href="/login" className="btn-primary py-3 px-8">
          Sign In
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      {/* Header */}
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
          <h1
            className="text-2xl font-bold"
            style={{ color: "var(--color-ink)" }}
          >
            Reports
          </h1>
          <p
            className="text-sm mt-1"
            style={{ color: "var(--color-ink-muted)" }}
          >
            View student performance, completion rates, and identify at-risk
            students.
          </p>
        </div>
        <button
          onClick={handleExportCSV}
          disabled={exporting || !reportData}
          className="btn-secondary py-2.5 px-5 text-sm flex items-center gap-2 disabled:opacity-50"
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
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          {exporting ? "Exporting..." : "Export CSV"}
        </button>
      </div>

      {/* Classroom Selector */}
      <div className="mb-8">
        <select
          value={selectedClassroom}
          onChange={(e) => setSelectedClassroom(e.target.value)}
          className="px-4 py-2.5 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
          style={{
            color: "var(--color-ink)",
            background: "var(--color-surface)",
            border: "1px solid var(--color-border)",
          }}
        >
          <option value="all">All Classrooms</option>
          {classrooms.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name} ({c.student_count} students)
            </option>
          ))}
        </select>
      </div>

      {loading ? (
        <div className="card p-12 text-center">
          <div className="w-6 h-6 border-2 border-gray-300 border-t-gray-900 rounded-full animate-spin mx-auto" />
        </div>
      ) : reportData ? (
        <>
          {/* Average Scores by Module */}
          <div className="card p-6 mb-6">
            <h2
              className="text-sm font-semibold mb-4 uppercase tracking-wider"
              style={{ color: "var(--color-ink-faint)" }}
            >
              Average Scores by Module
            </h2>
            {reportData.moduleScores.length === 0 ? (
              <p
                className="text-sm py-8 text-center"
                style={{ color: "var(--color-ink-muted)" }}
              >
                No quiz data available yet.
              </p>
            ) : (
              <SVGBarChart
                data={reportData.moduleScores.map((m) => ({
                  label: m.module_name,
                  value: m.avg_score,
                }))}
              />
            )}
          </div>

          {/* Assignment Completion Rates */}
          <div className="card p-6 mb-6">
            <h2
              className="text-sm font-semibold mb-4 uppercase tracking-wider"
              style={{ color: "var(--color-ink-faint)" }}
            >
              Assignment Completion Rates
            </h2>
            {reportData.assignmentCompletions.length === 0 ? (
              <p
                className="text-sm py-4 text-center"
                style={{ color: "var(--color-ink-muted)" }}
              >
                No assignments created yet.
              </p>
            ) : (
              <div className="space-y-3">
                {reportData.assignmentCompletions.map((a) => {
                  const pct =
                    a.total_students > 0
                      ? Math.round(
                          (a.completed_count / a.total_students) * 100
                        )
                      : 0;
                  return (
                    <div key={a.assignment_id}>
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-2">
                          <span
                            className="text-sm font-medium"
                            style={{ color: "var(--color-ink)" }}
                          >
                            {a.title}
                          </span>
                          <span
                            className="text-xs px-2 py-0.5 rounded-full"
                            style={{
                              background: "rgba(59, 130, 246, 0.08)",
                              color: "#3B82F6",
                            }}
                          >
                            {a.type}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
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
                      {/* Progress bar */}
                      <div
                        className="w-full h-2 rounded-full overflow-hidden"
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
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* At-Risk Students */}
          <div className="card p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <h2
                  className="text-sm font-semibold uppercase tracking-wider"
                  style={{ color: "var(--color-ink-faint)" }}
                >
                  At-Risk Students
                </h2>
                <label
                  className="flex items-center gap-1.5 text-xs"
                  style={{ color: "var(--color-ink-muted)" }}
                >
                  Threshold:
                  <input
                    type="number"
                    min={0}
                    max={100}
                    value={atRiskThreshold}
                    onChange={(e) =>
                      setAtRiskThreshold(
                        Math.max(0, Math.min(100, Number(e.target.value) || 0))
                      )
                    }
                    className="w-14 px-1.5 py-0.5 rounded text-xs text-center focus:outline-none focus:ring-1 focus:ring-blue-500"
                    style={{
                      color: "var(--color-ink)",
                      background: "var(--color-surface)",
                      border: "1px solid var(--color-border)",
                    }}
                  />
                  %
                </label>
              </div>
              <span
                className="text-xs px-2.5 py-1 rounded-full font-medium"
                style={{
                  background:
                    reportData.atRiskStudents.length > 0
                      ? "rgba(239, 68, 68, 0.08)"
                      : "rgba(22, 163, 74, 0.08)",
                  color:
                    reportData.atRiskStudents.length > 0
                      ? "#EF4444"
                      : "#16A34A",
                }}
              >
                {reportData.atRiskStudents.length} student
                {reportData.atRiskStudents.length !== 1 ? "s" : ""}
              </span>
            </div>

            {reportData.atRiskStudents.length === 0 ? (
              <p
                className="text-sm py-4 text-center"
                style={{ color: "var(--color-ink-muted)" }}
              >
                No at-risk students identified. All students are performing
                well.
              </p>
            ) : (
              <div className="card overflow-hidden" style={{ border: "none", boxShadow: "none" }}>
                <table className="w-full text-sm">
                  <thead>
                    <tr
                      style={{
                        borderBottom: "1px solid var(--color-border-subtle)",
                      }}
                    >
                      <th
                        className="text-left px-4 py-3 font-medium text-xs uppercase tracking-wider"
                        style={{ color: "var(--color-ink-faint)" }}
                      >
                        Student
                      </th>
                      <th
                        className="text-center px-4 py-3 font-medium text-xs uppercase tracking-wider"
                        style={{ color: "var(--color-ink-faint)" }}
                      >
                        Avg Score
                      </th>
                      <th
                        className="text-left px-4 py-3 font-medium text-xs uppercase tracking-wider"
                        style={{ color: "var(--color-ink-faint)" }}
                      >
                        Reason
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {reportData.atRiskStudents.map((s) => (
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
                            {s.display_name}
                          </Link>
                        </td>
                        <td
                          className="px-4 py-3 text-center font-semibold"
                          style={{
                            color:
                              s.avg_score >= 50
                                ? "#D97706"
                                : "#EF4444",
                          }}
                        >
                          {s.avg_score > 0 ? `${s.avg_score}%` : "--"}
                        </td>
                        <td
                          className="px-4 py-3 text-xs"
                          style={{ color: "var(--color-ink-muted)" }}
                        >
                          {s.reason}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </>
      ) : null}
    </div>
  );
}
