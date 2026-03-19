"use client";

import { useState, useEffect } from "react";

// AP Exam dates for 2026 (from College Board official schedule)
// Micro: Monday May 4, 2026 at 12 PM local
// Macro: Friday May 8, 2026 at 12 PM local
const AP_MICRO_DATE = new Date("2026-05-04T12:00:00");
const AP_MACRO_DATE = new Date("2026-05-08T12:00:00");

function getDaysUntil(date: Date): number {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const target = new Date(date);
  target.setHours(0, 0, 0, 0);
  return Math.ceil((target.getTime() - now.getTime()) / 86400000);
}

function getMessage(days: number): string {
  if (days <= 0) return "Exam day is here — you've got this.";
  if (days <= 3) return "Final stretch. Trust your preparation.";
  if (days <= 7) return "One week out. Focus on weak areas.";
  if (days <= 14) return "Two weeks to go. Review, don't cram.";
  if (days <= 30) return "One month left. Consistency wins.";
  if (days <= 60) return "Plenty of time. Keep building momentum.";
  return "Start early, finish strong.";
}

interface APCountdownProps {
  compact?: boolean;
}

export default function APCountdown({ compact = false }: APCountdownProps) {
  const [microDays, setMicroDays] = useState(getDaysUntil(AP_MICRO_DATE));
  const [macroDays, setMacroDays] = useState(getDaysUntil(AP_MACRO_DATE));

  useEffect(() => {
    const interval = setInterval(() => {
      setMicroDays(getDaysUntil(AP_MICRO_DATE));
      setMacroDays(getDaysUntil(AP_MACRO_DATE));
    }, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  if (compact) {
    return (
      <div
        className="flex items-center gap-3 px-3 py-2 rounded-lg"
        style={{
          background: "var(--color-surface-sunken)",
          border: "1px solid var(--color-border-subtle)",
        }}
      >
        <div className="flex items-center gap-1.5">
          <span className="text-[10px] font-medium" style={{ color: "var(--color-ink-faint)" }}>
            Micro:
          </span>
          <span
            className="text-[13px] font-bold tabular-nums"
            style={{ color: microDays <= 7 ? "#ef4444" : "var(--graph-demand)" }}
          >
            {microDays > 0 ? `${microDays}d` : "Today"}
          </span>
        </div>
        <div
          className="w-px h-4"
          style={{ background: "var(--color-border-subtle)" }}
        />
        <div className="flex items-center gap-1.5">
          <span className="text-[10px] font-medium" style={{ color: "var(--color-ink-faint)" }}>
            Macro:
          </span>
          <span
            className="text-[13px] font-bold tabular-nums"
            style={{ color: macroDays <= 7 ? "#ef4444" : "#8b5cf6" }}
          >
            {macroDays > 0 ? `${macroDays}d` : "Today"}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div
      className="card p-5"
    >
      <h3
        className="text-[13px] font-semibold mb-3"
        style={{ color: "var(--color-ink)" }}
      >
        AP Exam Countdown
      </h3>

      <div className="grid grid-cols-2 gap-3 mb-3">
        <div
          className="text-center p-3 rounded-lg"
          style={{ background: "var(--color-surface-sunken)" }}
        >
          <p
            className="text-2xl font-bold tabular-nums"
            style={{ color: microDays <= 7 ? "#ef4444" : "var(--graph-demand)" }}
          >
            {microDays > 0 ? microDays : 0}
          </p>
          <p
            className="text-[11px] font-medium"
            style={{ color: "var(--color-ink-muted)" }}
          >
            days to Micro
          </p>
        </div>
        <div
          className="text-center p-3 rounded-lg"
          style={{ background: "var(--color-surface-sunken)" }}
        >
          <p
            className="text-2xl font-bold tabular-nums"
            style={{ color: macroDays <= 7 ? "#ef4444" : "#8b5cf6" }}
          >
            {macroDays > 0 ? macroDays : 0}
          </p>
          <p
            className="text-[11px] font-medium"
            style={{ color: "var(--color-ink-muted)" }}
          >
            days to Macro
          </p>
        </div>
      </div>

      <p
        className="text-[12px] text-center"
        style={{ color: "var(--color-ink-muted)" }}
      >
        {getMessage(Math.min(microDays, macroDays))}
      </p>
    </div>
  );
}
