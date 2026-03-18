"use client";

import { useState } from "react";
import { useAuth } from "@/components/providers/AuthProvider";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function JoinClassroomPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [code, setCode] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [classroomName, setClassroomName] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!code.trim() || status === "loading") return;

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/classrooms/join", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: code.trim() }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setMessage(data.error || "Could not join classroom.");
        if (data.classroom_name) setClassroomName(data.classroom_name);
        return;
      }

      setStatus("success");
      setClassroomName(data.classroom_name);
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Try again.");
    }
  };

  // Format code as user types: ABC-DEF
  const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/[^a-zA-Z0-9]/g, "").toUpperCase();
    if (val.length > 6) val = val.slice(0, 6);
    if (val.length > 3) val = val.slice(0, 3) + "-" + val.slice(3);
    setCode(val);
  };

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
        <h1 className="text-2xl font-bold mb-4" style={{ color: "var(--color-ink)" }}>
          Join a Classroom
        </h1>
        <p className="text-sm mb-6" style={{ color: "var(--color-ink-muted)" }}>
          You need an account to join a classroom. Create one first — it takes 30 seconds.
        </p>
        <div className="flex flex-col gap-3">
          <Link href="/signup" className="btn-primary py-3">
            Create Account
          </Link>
          <Link href="/login" className="btn-secondary py-3">
            Already have an account? Sign in
          </Link>
        </div>
      </div>
    );
  }

  if (status === "success") {
    return (
      <div className="max-w-md mx-auto px-6 py-20 text-center">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-emerald-50 flex items-center justify-center">
          <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold mb-2" style={{ color: "var(--color-ink)" }}>
          You&apos;re in!
        </h1>
        <p className="text-sm mb-6" style={{ color: "var(--color-ink-muted)" }}>
          You joined <strong>{classroomName}</strong>. Any assignments from your teacher will show up on your dashboard.
        </p>
        <Link href="/dashboard" className="btn-primary py-3 px-8">
          Go to Dashboard
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto px-6 py-20">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold mb-2" style={{ color: "var(--color-ink)" }}>
          Join a Classroom
        </h1>
        <p className="text-sm" style={{ color: "var(--color-ink-muted)" }}>
          Enter the 6-character code your teacher gave you.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            value={code}
            onChange={handleCodeChange}
            placeholder="ABC-DEF"
            maxLength={7}
            className="w-full text-center text-3xl font-mono font-bold tracking-[0.3em] py-4 px-6 rounded-xl border-2 transition-colors focus:outline-none focus:border-blue-500"
            style={{
              color: "var(--color-ink)",
              background: "var(--color-surface)",
              borderColor: status === "error" ? "#EF4444" : "var(--color-border)",
            }}
            autoFocus
            autoComplete="off"
          />
        </div>

        {status === "error" && message && (
          <p className="text-sm text-red-600 text-center">{message}</p>
        )}

        <button
          type="submit"
          disabled={code.replace(/-/g, "").length < 6 || status === "loading"}
          className="btn-primary w-full py-3.5 text-base disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "loading" ? (
            <span className="flex items-center justify-center gap-2">
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Joining...
            </span>
          ) : (
            "Join Classroom"
          )}
        </button>
      </form>

      <p className="text-xs text-center mt-6" style={{ color: "var(--color-ink-faint)" }}>
        Don&apos;t have a code? Ask your teacher for the classroom join code.
      </p>
    </div>
  );
}
