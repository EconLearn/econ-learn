"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/components/providers/AuthProvider";
import Link from "next/link";

export default function TeacherAssignmentsPage() {
  const { user } = useAuth();

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
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
            Assignments
          </h1>
          <p className="text-sm mt-1" style={{ color: "var(--color-ink-muted)" }}>
            Create and manage assignments across all your classrooms.
          </p>
        </div>
      </div>

      <div className="card p-8 text-center">
        <p className="text-sm mb-2" style={{ color: "var(--color-ink-muted)" }}>
          To create an assignment, go to a specific classroom first.
        </p>
        <Link href="/teacher" className="btn-primary py-2.5 px-6 text-sm">
          View Classrooms
        </Link>
      </div>
    </div>
  );
}
