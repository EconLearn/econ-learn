"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useAuth } from "@/components/providers/AuthProvider";
import Link from "next/link";

interface LeaderboardEntry {
  userId: string;
  name: string;
  school: string | null;
  totalScore: number;
  streak: number;
  attempts: number;
  rank: number;
}

interface SchoolRanking {
  school: string;
  totalStudents: number;
  averageScore: number;
  totalScore: number;
  rank: number;
}

type Period = "week" | "alltime";

export default function LeaderboardPage() {
  const { user } = useAuth();
  const [period, setPeriod] = useState<Period>("week");
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [schoolRankings, setSchoolRankings] = useState<SchoolRanking[]>([]);
  const [currentUser, setCurrentUser] = useState<LeaderboardEntry | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLeaderboard() {
      setLoading(true);
      try {
        const res = await fetch(`/api/challenge/leaderboard?period=${period}`);
        if (res.ok) {
          const data = await res.json();
          setLeaderboard(data.leaderboard || []);
          setSchoolRankings(data.schoolRankings || []);
          setCurrentUser(data.currentUser || null);
        }
      } catch {
        // silently fail
      } finally {
        setLoading(false);
      }
    }
    fetchLeaderboard();
  }, [period]);

  const rankBadge = (rank: number) => {
    if (rank === 1)
      return (
        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold" style={{ background: "linear-gradient(135deg, #fbbf24, #f59e0b)", color: "white" }}>
          1
        </span>
      );
    if (rank === 2)
      return (
        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold" style={{ background: "linear-gradient(135deg, #d1d5db, #9ca3af)", color: "white" }}>
          2
        </span>
      );
    if (rank === 3)
      return (
        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold" style={{ background: "linear-gradient(135deg, #d97706, #92400e)", color: "white" }}>
          3
        </span>
      );
    return (
      <span className="inline-flex items-center justify-center w-7 h-7 text-xs font-semibold tabular-nums" style={{ color: "var(--color-ink-faint)" }}>
        {rank}
      </span>
    );
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-10 lg:py-14">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2.5">
            <Link
              href="/challenge"
              className="flex items-center gap-1.5 text-sm font-medium transition-colors mr-2"
              style={{ color: "var(--color-ink-muted)" }}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              style={{ color: "var(--color-ink)" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0016.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.003 6.003 0 01-5.54 0"
              />
            </svg>
            <h1 className="text-xl font-bold tracking-tight" style={{ color: "var(--color-ink)" }}>
              Leaderboard
            </h1>
          </div>
        </div>

        {/* Period Tabs */}
        <div className="flex gap-1 mb-6 p-1 rounded-xl" style={{ background: "var(--color-surface-sunken)" }}>
          {(["week", "alltime"] as Period[]).map((p) => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              className="flex-1 text-sm font-medium py-2 rounded-lg transition-all duration-200"
              style={{
                background: period === p ? "var(--color-surface)" : "transparent",
                color: period === p ? "var(--color-ink)" : "var(--color-ink-faint)",
                boxShadow: period === p ? "0 1px 3px rgba(0,0,0,0.08)" : "none",
              }}
            >
              {p === "week" ? "This Week" : "All Time"}
            </button>
          ))}
        </div>

        {/* Current User Banner */}
        {currentUser && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            className="card p-4 mb-6 flex items-center justify-between"
            style={{
              background: "rgba(59, 130, 246, 0.04)",
              border: "1px solid rgba(59, 130, 246, 0.12)",
            }}
          >
            <div className="flex items-center gap-3">
              {rankBadge(currentUser.rank)}
              <div>
                <p className="text-sm font-semibold" style={{ color: "var(--color-ink)" }}>
                  Your Rank: #{currentUser.rank}
                </p>
                <p className="text-xs" style={{ color: "var(--color-ink-faint)" }}>
                  {currentUser.totalScore} points
                  {currentUser.streak > 0 && ` \u00b7 ${currentUser.streak} day streak`}
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Leaderboard Table */}
        <div className="card overflow-hidden mb-8">
          {loading ? (
            <div className="p-8 text-center">
              <div
                className="w-6 h-6 border-2 rounded-full animate-spin mx-auto"
                style={{
                  borderColor: "var(--color-border)",
                  borderTopColor: "var(--color-ink)",
                }}
              />
            </div>
          ) : leaderboard.length === 0 ? (
            <div className="p-8 text-center">
              <p className="text-sm" style={{ color: "var(--color-ink-faint)" }}>
                No challenge attempts yet. Be the first to compete!
              </p>
            </div>
          ) : (
            <>
              {/* Table header */}
              <div
                className="grid grid-cols-12 gap-2 px-5 py-3 text-[11px] font-semibold uppercase tracking-wider"
                style={{
                  color: "var(--color-ink-faint)",
                  borderBottom: "1px solid var(--color-border-subtle)",
                }}
              >
                <div className="col-span-1">Rank</div>
                <div className="col-span-5">Name</div>
                <div className="col-span-3 hidden sm:block">School</div>
                <div className="col-span-2 text-right">Score</div>
                <div className="col-span-1 text-right">
                  <span title="Streak">&#x1F525;</span>
                </div>
              </div>

              {/* Rows */}
              {leaderboard.map((entry, index) => {
                const isCurrentUser = user && entry.userId === user.id;
                return (
                  <motion.div
                    key={entry.userId}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.02, duration: 0.2 }}
                    className="grid grid-cols-12 gap-2 items-center px-5 py-3"
                    style={{
                      borderBottom:
                        index < leaderboard.length - 1
                          ? "1px solid var(--color-border-subtle)"
                          : undefined,
                      background: isCurrentUser
                        ? "rgba(59, 130, 246, 0.04)"
                        : "transparent",
                    }}
                  >
                    <div className="col-span-1">{rankBadge(entry.rank)}</div>
                    <div className="col-span-5">
                      <p
                        className="text-sm font-medium truncate"
                        style={{
                          color: isCurrentUser ? "#2563eb" : "var(--color-ink)",
                        }}
                      >
                        {entry.name}
                        {isCurrentUser && (
                          <span className="text-[10px] ml-1 font-normal" style={{ color: "var(--color-ink-faint)" }}>
                            (you)
                          </span>
                        )}
                      </p>
                    </div>
                    <div className="col-span-3 hidden sm:block">
                      <p
                        className="text-xs truncate"
                        style={{ color: "var(--color-ink-faint)" }}
                      >
                        {entry.school || "\u2014"}
                      </p>
                    </div>
                    <div className="col-span-2 text-right">
                      <span
                        className="text-sm font-bold tabular-nums"
                        style={{ color: "var(--color-ink)" }}
                      >
                        {entry.totalScore.toLocaleString()}
                      </span>
                    </div>
                    <div className="col-span-1 text-right">
                      {entry.streak > 0 && (
                        <span className="text-xs font-semibold text-amber-600 tabular-nums">
                          {entry.streak}
                        </span>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </>
          )}
        </div>

        {/* School Rankings */}
        {schoolRankings.length > 0 && (
          <>
            <h2
              className="text-xs font-semibold uppercase tracking-wider mb-3"
              style={{ color: "var(--color-ink-faint)" }}
            >
              School Rankings
            </h2>
            <div className="card overflow-hidden mb-8">
              {/* Table header */}
              <div
                className="grid grid-cols-12 gap-2 px-5 py-3 text-[11px] font-semibold uppercase tracking-wider"
                style={{
                  color: "var(--color-ink-faint)",
                  borderBottom: "1px solid var(--color-border-subtle)",
                }}
              >
                <div className="col-span-1">Rank</div>
                <div className="col-span-5">School</div>
                <div className="col-span-2 text-right">Students</div>
                <div className="col-span-2 text-right">Avg Score</div>
                <div className="col-span-2 text-right">Total</div>
              </div>

              {schoolRankings.map((school, index) => (
                <motion.div
                  key={school.school}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.03, duration: 0.2 }}
                  className="grid grid-cols-12 gap-2 items-center px-5 py-3"
                  style={{
                    borderBottom:
                      index < schoolRankings.length - 1
                        ? "1px solid var(--color-border-subtle)"
                        : undefined,
                  }}
                >
                  <div className="col-span-1">{rankBadge(school.rank)}</div>
                  <div className="col-span-5">
                    <p
                      className="text-sm font-medium truncate"
                      style={{ color: "var(--color-ink)" }}
                    >
                      {school.school}
                    </p>
                  </div>
                  <div className="col-span-2 text-right">
                    <span className="text-xs tabular-nums" style={{ color: "var(--color-ink-faint)" }}>
                      {school.totalStudents}
                    </span>
                  </div>
                  <div className="col-span-2 text-right">
                    <span className="text-sm font-semibold tabular-nums" style={{ color: "var(--color-ink-muted)" }}>
                      {school.averageScore}
                    </span>
                  </div>
                  <div className="col-span-2 text-right">
                    <span className="text-sm font-bold tabular-nums" style={{ color: "var(--color-ink)" }}>
                      {school.totalScore.toLocaleString()}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="card p-5 text-center" style={{ background: "rgba(139, 92, 246, 0.04)", border: "1px solid rgba(139, 92, 246, 0.12)" }}>
              <p className="text-sm font-medium" style={{ color: "var(--color-ink)" }}>
                Want your school higher on the leaderboard?
              </p>
              <p className="text-xs mt-1" style={{ color: "var(--color-ink-faint)" }}>
                Invite your classmates to EconLearn and compete together!
              </p>
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
}
