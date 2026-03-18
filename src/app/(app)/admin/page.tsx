"use client";

import { useEffect, useState, useMemo, useCallback } from "react";
import { useAuth } from "@/components/providers/AuthProvider";
import { useRouter } from "next/navigation";

/* ─── Config ─── */
const ADMIN_EMAIL = "judewallis@gmail.com";

/* ─── Types ─── */
interface TeacherSubscription {
  id: string;
  plan: "free" | "classroom" | "school";
  status: "active" | "trial" | "canceled" | "past_due";
  student_limit: number;
  trial_ends_at: string | null;
  current_period_end: string | null;
  created_at: string;
}

interface Teacher {
  id: string;
  display_name: string;
  email: string;
  school_name: string | null;
  student_count: number;
  classroom_count: number;
  subscription: TeacherSubscription | null;
}

interface Stats {
  total_teachers: number;
  total_students: number;
  total_classrooms: number;
  active_trials: number;
}

type SortKey =
  | "display_name"
  | "email"
  | "school_name"
  | "plan"
  | "student_count"
  | "status";
type SortDir = "asc" | "desc";

/* ─── Helpers ─── */
function daysRemaining(dateStr: string | null): number {
  if (!dateStr) return 0;
  const diff = new Date(dateStr).getTime() - Date.now();
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

function planLabel(plan: string): string {
  return plan.charAt(0).toUpperCase() + plan.slice(1);
}

/* ─── Component ─── */
export default function AdminPage() {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();

  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [stats, setStats] = useState<Stats>({
    total_teachers: 0,
    total_students: 0,
    total_classrooms: 0,
    active_trials: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [sortKey, setSortKey] = useState<SortKey>("display_name");
  const [sortDir, setSortDir] = useState<SortDir>("asc");
  const [actionLoading, setActionLoading] = useState<string | null>(null);

  // Trial modal state
  const [trialModal, setTrialModal] = useState<{
    teacherId: string;
    teacherName: string;
    mode: "grant" | "extend";
  } | null>(null);
  const [trialDays, setTrialDays] = useState(14);

  /* ─── Access check ─── */
  const isAdmin = user?.email === ADMIN_EMAIL;

  /* ─── Fetch teachers ─── */
  const fetchTeachers = useCallback(async () => {
    try {
      setError(null);
      const res = await fetch("/api/admin/teachers");
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to fetch teachers");
      }
      const data = await res.json();
      setTeachers(data.teachers);
      setStats(data.stats);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!authLoading && isAdmin) {
      fetchTeachers();
    } else if (!authLoading && !isAdmin) {
      setLoading(false);
    }
  }, [authLoading, isAdmin, fetchTeachers]);

  /* ─── Actions ─── */
  async function updateSubscription(
    teacherId: string,
    updates: Record<string, any>
  ) {
    setActionLoading(teacherId);
    try {
      const res = await fetch(`/api/admin/teachers/${teacherId}/subscription`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updates),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Update failed");
      }
      await fetchTeachers();
    } catch (err: any) {
      alert("Error: " + err.message);
    } finally {
      setActionLoading(null);
    }
  }

  function handleGrantTrial(teacherId: string, teacherName: string) {
    setTrialModal({ teacherId, teacherName, mode: "grant" });
    setTrialDays(14);
  }

  function handleExtendTrial(teacherId: string, teacherName: string) {
    setTrialModal({ teacherId, teacherName, mode: "extend" });
    setTrialDays(7);
  }

  async function confirmTrial() {
    if (!trialModal) return;
    const { teacherId, mode } = trialModal;
    const teacher = teachers.find((t) => t.id === teacherId);

    let trialEndsAt: string;
    if (mode === "extend" && teacher?.subscription?.trial_ends_at) {
      // Extend from current trial end
      const current = new Date(teacher.subscription.trial_ends_at);
      current.setDate(current.getDate() + trialDays);
      trialEndsAt = current.toISOString();
    } else {
      // Grant new trial from now
      const end = new Date();
      end.setDate(end.getDate() + trialDays);
      trialEndsAt = end.toISOString();
    }

    await updateSubscription(teacherId, {
      plan: "classroom",
      status: "trial",
      trial_ends_at: trialEndsAt,
      student_limit: 35,
    });
    setTrialModal(null);
  }

  async function handleUpgradeToSchool(teacherId: string) {
    await updateSubscription(teacherId, {
      plan: "school",
      status: "active",
      trial_ends_at: null,
      student_limit: 150,
    });
  }

  async function handleRevokeAccess(teacherId: string) {
    await updateSubscription(teacherId, {
      plan: "free",
      status: "active",
      trial_ends_at: null,
      student_limit: 35,
    });
  }

  /* ─── Sort + Filter ─── */
  const filteredTeachers = useMemo(() => {
    const q = search.toLowerCase().trim();
    let result = teachers;

    if (q) {
      result = result.filter(
        (t) =>
          t.display_name.toLowerCase().includes(q) ||
          t.email.toLowerCase().includes(q) ||
          (t.school_name && t.school_name.toLowerCase().includes(q))
      );
    }

    result.sort((a, b) => {
      let aVal: any;
      let bVal: any;

      switch (sortKey) {
        case "display_name":
          aVal = a.display_name.toLowerCase();
          bVal = b.display_name.toLowerCase();
          break;
        case "email":
          aVal = a.email.toLowerCase();
          bVal = b.email.toLowerCase();
          break;
        case "school_name":
          aVal = (a.school_name || "").toLowerCase();
          bVal = (b.school_name || "").toLowerCase();
          break;
        case "plan":
          aVal = a.subscription?.plan || "free";
          bVal = b.subscription?.plan || "free";
          break;
        case "student_count":
          aVal = a.student_count;
          bVal = b.student_count;
          break;
        case "status":
          aVal = a.subscription?.status || "active";
          bVal = b.subscription?.status || "active";
          break;
      }

      if (aVal < bVal) return sortDir === "asc" ? -1 : 1;
      if (aVal > bVal) return sortDir === "asc" ? 1 : -1;
      return 0;
    });

    return result;
  }, [teachers, search, sortKey, sortDir]);

  function toggleSort(key: SortKey) {
    if (sortKey === key) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDir("asc");
    }
  }

  function sortIndicator(key: SortKey) {
    if (sortKey !== key) return "";
    return sortDir === "asc" ? " \u2191" : " \u2193";
  }

  /* ─── Render ─── */
  if (authLoading || loading) {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "60vh" }}>
        <p style={{ color: "var(--color-ink-muted)", fontSize: "0.875rem" }}>Loading...</p>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "60vh",
          gap: "1rem",
        }}
      >
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: "50%",
            background: "#fef2f2",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.5rem",
          }}
        >
          &#128274;
        </div>
        <h1 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--color-ink)" }}>
          Access Denied
        </h1>
        <p style={{ color: "var(--color-ink-muted)", fontSize: "0.875rem" }}>
          You do not have permission to view this page.
        </p>
        <button
          className="btn-secondary"
          onClick={() => router.push("/dashboard")}
          style={{ marginTop: "0.5rem" }}
        >
          Go to Dashboard
        </button>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ padding: "2rem", maxWidth: 800, margin: "0 auto" }}>
        <div className="auth-error">{error}</div>
        <button className="btn-secondary" onClick={fetchTeachers} style={{ marginTop: "1rem" }}>
          Retry
        </button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "2rem 1.5rem" }}>
      {/* Header */}
      <div style={{ marginBottom: "2rem" }}>
        <h1
          style={{
            fontSize: "1.5rem",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: "var(--color-ink)",
            marginBottom: "0.25rem",
          }}
        >
          Admin Panel
        </h1>
        <p style={{ color: "var(--color-ink-muted)", fontSize: "0.875rem" }}>
          Manage teachers, trials, and subscriptions
        </p>
      </div>

      {/* Stats Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "1rem",
          marginBottom: "2rem",
        }}
      >
        <StatCard label="Total Teachers" value={stats.total_teachers} color="#3b82f6" />
        <StatCard label="Total Students" value={stats.total_students} color="#10b981" />
        <StatCard label="Classrooms" value={stats.total_classrooms} color="#8b5cf6" />
        <StatCard label="Active Trials" value={stats.active_trials} color="#f59e0b" />
        <StatCard label="Revenue (Month)" value="--" color="#6b7280" />
      </div>

      {/* Search */}
      <div style={{ marginBottom: "1rem" }}>
        <input
          type="text"
          placeholder="Search by name, email, or school..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="auth-input"
          style={{ maxWidth: 400 }}
        />
      </div>

      {/* Table */}
      <div
        className="card"
        style={{ overflowX: "auto" }}
      >
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            fontSize: "0.8125rem",
          }}
        >
          <thead>
            <tr
              style={{
                borderBottom: "1px solid var(--color-border)",
                background: "var(--color-surface-raised)",
              }}
            >
              <Th onClick={() => toggleSort("display_name")}>
                Name{sortIndicator("display_name")}
              </Th>
              <Th onClick={() => toggleSort("email")}>
                Email{sortIndicator("email")}
              </Th>
              <Th onClick={() => toggleSort("school_name")}>
                School{sortIndicator("school_name")}
              </Th>
              <Th onClick={() => toggleSort("plan")}>
                Plan{sortIndicator("plan")}
              </Th>
              <Th onClick={() => toggleSort("student_count")}>
                Students{sortIndicator("student_count")}
              </Th>
              <Th onClick={() => toggleSort("status")}>
                Status{sortIndicator("status")}
              </Th>
              <th
                style={{
                  padding: "0.75rem 1rem",
                  textAlign: "left",
                  fontWeight: 600,
                  color: "var(--color-ink-muted)",
                  fontSize: "0.75rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                }}
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredTeachers.length === 0 ? (
              <tr>
                <td
                  colSpan={7}
                  style={{
                    padding: "2rem",
                    textAlign: "center",
                    color: "var(--color-ink-muted)",
                  }}
                >
                  {search ? "No teachers match your search." : "No teachers found."}
                </td>
              </tr>
            ) : (
              filteredTeachers.map((t, i) => {
                const plan = t.subscription?.plan || "free";
                const status = t.subscription?.status || "active";
                const isTrialing =
                  status === "trial" && t.subscription?.trial_ends_at;
                const trialDaysLeft = isTrialing
                  ? daysRemaining(t.subscription!.trial_ends_at)
                  : 0;
                const isBusy = actionLoading === t.id;

                return (
                  <tr
                    key={t.id}
                    style={{
                      borderBottom: "1px solid var(--color-border-subtle)",
                      background:
                        i % 2 === 1
                          ? "var(--color-surface-raised)"
                          : "var(--color-surface)",
                      opacity: isBusy ? 0.6 : 1,
                      transition: "opacity 0.15s",
                    }}
                  >
                    <Td style={{ fontWeight: 500, color: "var(--color-ink)" }}>
                      {t.display_name}
                    </Td>
                    <Td>{t.email}</Td>
                    <Td>{t.school_name || "—"}</Td>
                    <Td>
                      <PlanBadge plan={plan} />
                    </Td>
                    <Td>{t.student_count}</Td>
                    <Td>
                      <StatusBadge
                        status={status}
                        trialDaysLeft={trialDaysLeft}
                      />
                    </Td>
                    <Td>
                      <div style={{ display: "flex", gap: "0.375rem", flexWrap: "wrap" }}>
                        {plan === "free" && (
                          <ActionBtn
                            label="Grant Trial"
                            color="#3b82f6"
                            disabled={isBusy}
                            onClick={() => handleGrantTrial(t.id, t.display_name)}
                          />
                        )}
                        {status === "trial" && (
                          <ActionBtn
                            label="Extend"
                            color="#6366f1"
                            disabled={isBusy}
                            onClick={() => handleExtendTrial(t.id, t.display_name)}
                          />
                        )}
                        {plan !== "school" && (
                          <ActionBtn
                            label="Upgrade"
                            color="#10b981"
                            disabled={isBusy}
                            onClick={() => handleUpgradeToSchool(t.id)}
                          />
                        )}
                        {plan !== "free" && (
                          <ActionBtn
                            label="Revoke"
                            color="#ef4444"
                            disabled={isBusy}
                            onClick={() => handleRevokeAccess(t.id)}
                          />
                        )}
                      </div>
                    </Td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Trial Modal */}
      {trialModal && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 50,
          }}
          onClick={() => setTrialModal(null)}
        >
          <div
            className="card-elevated"
            style={{
              padding: "1.5rem",
              width: "100%",
              maxWidth: 400,
              margin: "1rem",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2
              style={{
                fontSize: "1.125rem",
                fontWeight: 700,
                color: "var(--color-ink)",
                marginBottom: "0.25rem",
              }}
            >
              {trialModal.mode === "grant" ? "Grant Trial" : "Extend Trial"}
            </h2>
            <p
              style={{
                color: "var(--color-ink-muted)",
                fontSize: "0.8125rem",
                marginBottom: "1.25rem",
              }}
            >
              {trialModal.mode === "grant"
                ? `Set up a Classroom trial for ${trialModal.teacherName}.`
                : `Add more days to ${trialModal.teacherName}'s trial.`}
            </p>

            <label
              className="auth-label"
              htmlFor="trial-days"
            >
              {trialModal.mode === "grant" ? "Trial length" : "Days to add"}
            </label>
            <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.25rem" }}>
              {[7, 14, 30].map((d) => (
                <button
                  key={d}
                  onClick={() => setTrialDays(d)}
                  style={{
                    padding: "0.375rem 0.875rem",
                    borderRadius: 8,
                    border: "1px solid",
                    borderColor:
                      trialDays === d ? "var(--accent)" : "var(--color-border)",
                    background:
                      trialDays === d ? "var(--accent-light)" : "var(--color-surface)",
                    color:
                      trialDays === d ? "var(--accent)" : "var(--color-ink-muted)",
                    fontSize: "0.8125rem",
                    fontWeight: 500,
                    cursor: "pointer",
                    transition: "all 0.15s",
                  }}
                >
                  {d} days
                </button>
              ))}
            </div>

            <div style={{ display: "flex", gap: "0.5rem", justifyContent: "flex-end" }}>
              <button
                className="btn-secondary"
                onClick={() => setTrialModal(null)}
                style={{ padding: "0.5rem 1rem" }}
              >
                Cancel
              </button>
              <button
                className="btn-accent"
                onClick={confirmTrial}
                style={{ padding: "0.5rem 1rem" }}
              >
                {trialModal.mode === "grant" ? "Grant Trial" : "Extend Trial"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── Sub-components ─── */

function StatCard({
  label,
  value,
  color,
}: {
  label: string;
  value: number | string;
  color: string;
}) {
  return (
    <div
      className="card"
      style={{ padding: "1.25rem 1rem" }}
    >
      <p
        style={{
          fontSize: "0.75rem",
          fontWeight: 500,
          color: "var(--color-ink-muted)",
          textTransform: "uppercase",
          letterSpacing: "0.04em",
          marginBottom: "0.375rem",
        }}
      >
        {label}
      </p>
      <p
        style={{
          fontSize: "1.5rem",
          fontWeight: 700,
          color,
          letterSpacing: "-0.02em",
        }}
      >
        {value}
      </p>
    </div>
  );
}

function Th({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <th
      onClick={onClick}
      style={{
        padding: "0.75rem 1rem",
        textAlign: "left",
        fontWeight: 600,
        color: "var(--color-ink-muted)",
        fontSize: "0.75rem",
        textTransform: "uppercase",
        letterSpacing: "0.04em",
        cursor: "pointer",
        userSelect: "none",
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </th>
  );
}

function Td({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <td
      style={{
        padding: "0.625rem 1rem",
        color: "var(--color-ink-light)",
        whiteSpace: "nowrap",
        ...style,
      }}
    >
      {children}
    </td>
  );
}

function PlanBadge({ plan }: { plan: string }) {
  const colors: Record<string, { bg: string; fg: string }> = {
    free: { bg: "var(--color-surface-sunken)", fg: "var(--color-ink-muted)" },
    classroom: { bg: "#eff6ff", fg: "#2563eb" },
    school: { bg: "#f3f0ff", fg: "#7c3aed" },
  };
  const c = colors[plan] || colors.free;

  return (
    <span
      className="badge"
      style={{
        background: c.bg,
        color: c.fg,
      }}
    >
      {planLabel(plan)}
    </span>
  );
}

function StatusBadge({
  status,
  trialDaysLeft,
}: {
  status: string;
  trialDaysLeft: number;
}) {
  let bg: string;
  let fg: string;
  let label: string;

  switch (status) {
    case "active":
      bg = "#ecfdf5";
      fg = "#059669";
      label = "Active";
      break;
    case "trial":
      if (trialDaysLeft > 0) {
        bg = "#eff6ff";
        fg = "#2563eb";
        label = `Trial (${trialDaysLeft}d)`;
      } else {
        bg = "#fef2f2";
        fg = "#dc2626";
        label = "Expired";
      }
      break;
    case "canceled":
      bg = "#fef2f2";
      fg = "#dc2626";
      label = "Canceled";
      break;
    case "past_due":
      bg = "#fffbeb";
      fg = "#d97706";
      label = "Past Due";
      break;
    default:
      bg = "var(--color-surface-sunken)";
      fg = "var(--color-ink-muted)";
      label = status;
  }

  return (
    <span
      className="badge"
      style={{ background: bg, color: fg }}
    >
      {label}
    </span>
  );
}

function ActionBtn({
  label,
  color,
  disabled,
  onClick,
}: {
  label: string;
  color: string;
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        padding: "0.25rem 0.625rem",
        borderRadius: 6,
        border: `1px solid ${color}20`,
        background: `${color}10`,
        color,
        fontSize: "0.75rem",
        fontWeight: 500,
        cursor: disabled ? "wait" : "pointer",
        transition: "all 0.15s",
        whiteSpace: "nowrap",
      }}
      onMouseEnter={(e) => {
        if (!disabled) {
          (e.target as HTMLElement).style.background = `${color}20`;
        }
      }}
      onMouseLeave={(e) => {
        (e.target as HTMLElement).style.background = `${color}10`;
      }}
    >
      {label}
    </button>
  );
}
