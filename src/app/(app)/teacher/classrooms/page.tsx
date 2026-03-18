"use client";

import { useState } from "react";
import { useAuth } from "@/components/providers/AuthProvider";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function CreateClassroomPage() {
  const { user } = useAuth();
  const router = useRouter();
  const [name, setName] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [error, setError] = useState("");

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || status === "loading") return;

    setStatus("loading");
    setError("");

    try {
      const res = await fetch("/api/classrooms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          school_name: schoolName.trim() || null,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setError(data.error || "Could not create classroom.");
        return;
      }

      router.push(`/teacher/classrooms/${data.classroom.id}`);
    } catch {
      setStatus("error");
      setError("Something went wrong. Try again.");
    }
  };

  return (
    <div className="max-w-lg mx-auto px-6 py-10">
      <div className="mb-6">
        <Link
          href="/teacher"
          className="text-sm font-medium hover:text-blue-600 transition-colors"
          style={{ color: "var(--color-ink-muted)" }}
        >
          &larr; Back to Teacher Dashboard
        </Link>
      </div>

      <h1 className="text-2xl font-bold mb-2" style={{ color: "var(--color-ink)" }}>
        Create a Classroom
      </h1>
      <p className="text-sm mb-8" style={{ color: "var(--color-ink-muted)" }}>
        Students will use a 6-character join code to enter your classroom. You can share
        it on the board or in a message.
      </p>

      <form onSubmit={handleCreate} className="space-y-5">
        <div>
          <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--color-ink)" }}>
            Classroom Name *
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. AP Econ Period 3"
            maxLength={60}
            className="w-full px-4 py-3 rounded-xl text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            style={{
              color: "var(--color-ink)",
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
            }}
            autoFocus
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--color-ink)" }}>
            School Name <span style={{ color: "var(--color-ink-faint)" }}>(optional)</span>
          </label>
          <input
            type="text"
            value={schoolName}
            onChange={(e) => setSchoolName(e.target.value)}
            placeholder="e.g. Lincoln High School"
            maxLength={100}
            className="w-full px-4 py-3 rounded-xl text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            style={{
              color: "var(--color-ink)",
              background: "var(--color-surface)",
              border: "1px solid var(--color-border)",
            }}
          />
        </div>

        {status === "error" && error && (
          <p className="text-sm text-red-600">{error}</p>
        )}

        <button
          type="submit"
          disabled={!name.trim() || status === "loading"}
          className="btn-primary w-full py-3.5 text-base disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "loading" ? (
            <span className="flex items-center justify-center gap-2">
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Creating...
            </span>
          ) : (
            "Create Classroom"
          )}
        </button>
      </form>
    </div>
  );
}
