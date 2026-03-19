"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/components/providers/AuthProvider";
import Link from "next/link";

interface Infraction {
  id: string;
  student_id: string;
  student_name: string;
  student_email: string;
  assignment_id: string;
  assignment_title: string;
  classroom_id: string;
  classroom_name: string;
  tab_switches: number;
  fullscreen_exits: number;
  status: string;
  date: string;
}

interface ClassroomOption {
  id: string;
  name: string;
}

interface AssignmentOption {
  id: string;
  title: string;
  classroom_id: string;
}

export default function InfractionsPage() {
  const { user, loading: authLoading } = useAuth();

  const [infractions, setInfractions] = useState<Infraction[]>([]);
  const [classrooms, setClassrooms] = useState<ClassroomOption[]>([]);
  const [assignments, setAssignments] = useState<AssignmentOption[]>([]);
  const [selectedClassroom, setSelectedClassroom] = useState<string>("all");
  const [selectedAssignment, setSelectedAssignment] = useState<string>("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    async function loadInfractions() {
      setLoading(true);
      try {
        const res = await fetch("/api/teacher/infractions");
        const data = await res.json();
        if (data.infractions) setInfractions(data.infractions);
        if (data.classrooms) setClassrooms(data.classrooms);
        if (data.assignments) setAssignments(data.assignments);
      } catch (err) {
        console.error("Failed to load infractions:", err);
      } finally {
        setLoading(false);
      }
    }

    loadInfractions();
  }, [user]);

  // Filter infractions based on selected classroom and assignment
  const filteredInfractions = infractions.filter((inf) => {
    if (selectedClassroom !== "all" && inf.classroom_id !== selectedClassroom) return false;
    if (selectedAssignment !== "all" && inf.assignment_id !== selectedAssignment) return false;
    return true;
  });

  // Filter assignments based on selected classroom
  const filteredAssignments =
    selectedClassroom === "all"
      ? assignments
      : assignments.filter((a) => a.classroom_id === selectedClassroom);

  // Reset assignment filter when classroom changes
  const handleClassroomChange = (value: string) => {
    setSelectedClassroom(value);
    setSelectedAssignment("all");
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });
  };

  const getStatusBadge = (status: string) => {
    const styles: Record<string, { bg: string; color: string; label: string }> = {
      submitted: { bg: "rgba(22, 163, 74, 0.08)", color: "#16A34A", label: "Submitted" },
      force_submitted: { bg: "rgba(239, 68, 68, 0.08)", color: "#EF4444", label: "Force Submitted" },
      expired: { bg: "rgba(245, 158, 11, 0.08)", color: "#D97706", label: "Expired" },
      in_progress: { bg: "rgba(59, 130, 246, 0.08)", color: "#3B82F6", label: "In Progress" },
    };
    const s = styles[status] || styles.submitted;
    return (
      <span
        className="text-xs px-2 py-0.5 rounded-full font-medium"
        style={{ background: s.bg, color: s.color }}
      >
        {s.label}
      </span>
    );
  };

  const getSeverityColor = (tabSwitches: number, fullscreenExits: number) => {
    const total = tabSwitches + fullscreenExits;
    if (total >= 5) return "#EF4444";
    if (total >= 3) return "#D97706";
    return "#F59E0B";
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
        <h1 className="text-xl font-bold mb-4" style={{ color: "var(--color-ink)" }}>
          Sign in to view infractions
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
          <h1 className="text-2xl font-bold" style={{ color: "var(--color-ink)" }}>
            Exam Violations
          </h1>
          <p className="text-sm mt-1" style={{ color: "var(--color-ink-muted)" }}>
            Review tab switches, fullscreen exits, and other exam integrity violations across all exams.
          </p>
        </div>
        {infractions.length > 0 && (
          <span
            className="text-xs px-2.5 py-1 rounded-full font-medium"
            style={{
              background: "rgba(239, 68, 68, 0.08)",
              color: "#EF4444",
            }}
          >
            {infractions.length} violation{infractions.length !== 1 ? "s" : ""} total
          </span>
        )}
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-8">
        <select
          value={selectedClassroom}
          onChange={(e) => handleClassroomChange(e.target.value)}
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
              {c.name}
            </option>
          ))}
        </select>

        <select
          value={selectedAssignment}
          onChange={(e) => setSelectedAssignment(e.target.value)}
          className="px-4 py-2.5 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
          style={{
            color: "var(--color-ink)",
            background: "var(--color-surface)",
            border: "1px solid var(--color-border)",
          }}
        >
          <option value="all">All Assignments</option>
          {filteredAssignments.map((a) => (
            <option key={a.id} value={a.id}>
              {a.title}
            </option>
          ))}
        </select>
      </div>

      {/* Content */}
      {loading ? (
        <div className="card p-12 text-center">
          <div className="w-6 h-6 border-2 border-gray-300 border-t-gray-900 rounded-full animate-spin mx-auto" />
        </div>
      ) : filteredInfractions.length === 0 ? (
        <div className="card p-12 text-center">
          <svg
            className="w-12 h-12 mx-auto mb-4"
            style={{ color: "var(--color-ink-faint)" }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
            />
          </svg>
          <p className="text-sm font-medium" style={{ color: "var(--color-ink-muted)" }}>
            {infractions.length === 0
              ? "No exam violations recorded yet."
              : "No violations match the current filters."}
          </p>
          <p className="text-xs mt-1" style={{ color: "var(--color-ink-faint)" }}>
            Violations are recorded when students switch tabs or exit fullscreen during lockdown exams.
          </p>
        </div>
      ) : (
        <div className="card overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr style={{ borderBottom: "1px solid var(--color-border-subtle)" }}>
                <th
                  className="text-left px-4 py-3 font-medium text-xs uppercase tracking-wider"
                  style={{ color: "var(--color-ink-faint)" }}
                >
                  Student
                </th>
                <th
                  className="text-left px-4 py-3 font-medium text-xs uppercase tracking-wider"
                  style={{ color: "var(--color-ink-faint)" }}
                >
                  Assignment
                </th>
                <th
                  className="text-center px-4 py-3 font-medium text-xs uppercase tracking-wider"
                  style={{ color: "var(--color-ink-faint)" }}
                >
                  Tab Switches
                </th>
                <th
                  className="text-center px-4 py-3 font-medium text-xs uppercase tracking-wider"
                  style={{ color: "var(--color-ink-faint)" }}
                >
                  Fullscreen Exits
                </th>
                <th
                  className="text-center px-4 py-3 font-medium text-xs uppercase tracking-wider"
                  style={{ color: "var(--color-ink-faint)" }}
                >
                  Status
                </th>
                <th
                  className="text-right px-4 py-3 font-medium text-xs uppercase tracking-wider"
                  style={{ color: "var(--color-ink-faint)" }}
                >
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredInfractions.map((inf) => (
                <tr
                  key={inf.id}
                  className="hover:bg-gray-50/50 transition-colors"
                  style={{ borderBottom: "1px solid var(--color-border-subtle)" }}
                >
                  <td className="px-4 py-3">
                    <Link
                      href={`/teacher/students/${inf.student_id}`}
                      className="font-medium hover:text-blue-600 transition-colors"
                      style={{ color: "var(--color-ink)" }}
                    >
                      {inf.student_name}
                    </Link>
                    <p className="text-xs mt-0.5" style={{ color: "var(--color-ink-faint)" }}>
                      {inf.classroom_name}
                    </p>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-sm" style={{ color: "var(--color-ink-light)" }}>
                      {inf.assignment_title}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span
                      className="font-semibold"
                      style={{
                        color: inf.tab_switches > 0
                          ? getSeverityColor(inf.tab_switches, 0)
                          : "var(--color-ink-faint)",
                      }}
                    >
                      {inf.tab_switches}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span
                      className="font-semibold"
                      style={{
                        color: inf.fullscreen_exits > 0
                          ? getSeverityColor(0, inf.fullscreen_exits)
                          : "var(--color-ink-faint)",
                      }}
                    >
                      {inf.fullscreen_exits}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-center">
                    {getStatusBadge(inf.status)}
                  </td>
                  <td
                    className="px-4 py-3 text-right text-xs"
                    style={{ color: "var(--color-ink-muted)" }}
                  >
                    {formatDate(inf.date)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
