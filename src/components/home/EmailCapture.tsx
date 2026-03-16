"use client";

import { useState } from "react";
import { trackEmailSubscribe } from "@/lib/analytics";

export default function EmailCapture() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), source: "homepage" }),
      });

      if (res.ok) {
        setStatus("success");
        setMessage("You're in! We'll send AP study tips and updates.");
        setEmail("");
        trackEmailSubscribe("homepage");
      } else {
        const data = await res.json();
        setStatus("error");
        setMessage(data.error || "Something went wrong. Try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Couldn't connect. Check your internet and try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-6">
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
          style={{
            background: "rgba(16, 185, 129, 0.1)",
            color: "#059669",
          }}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          {message}
        </div>
      </div>
    );
  }

  return (
    <div className="text-center">
      <h3
        className="text-lg font-semibold mb-2"
        style={{ color: "var(--color-ink)" }}
      >
        Get AP study tips &amp; updates
      </h3>
      <p
        className="text-sm mb-4 max-w-md mx-auto"
        style={{ color: "var(--color-ink-muted)" }}
      >
        Join other AP Economics students. No spam, unsubscribe anytime.
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row items-center gap-2.5 max-w-md mx-auto"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") setStatus("idle");
          }}
          placeholder="your@email.com"
          required
          className="w-full sm:flex-1 px-4 py-2.5 rounded-lg text-sm transition-colors"
          style={{
            background: "var(--color-surface)",
            border: "1px solid var(--color-border)",
            color: "var(--color-ink)",
          }}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="btn-primary px-5 py-2.5 text-sm whitespace-nowrap w-full sm:w-auto"
        >
          {status === "loading" ? "Subscribing..." : "Subscribe"}
        </button>
      </form>

      {status === "error" && (
        <p className="text-xs text-red-500 mt-2">{message}</p>
      )}
    </div>
  );
}
