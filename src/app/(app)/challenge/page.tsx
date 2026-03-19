"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/components/providers/AuthProvider";
import Link from "next/link";

interface ChallengeData {
  id: number;
  question: string;
  options: string[];
  correctIndex?: number;
  explanation?: string;
  module: string;
  difficulty: "easy" | "medium" | "hard";
}

interface AttemptData {
  selectedIndex: number;
  correct: boolean;
  score: number;
  streak: number;
}

export default function DailyChallengePage() {
  const { user, loading: authLoading } = useAuth();
  const [challenge, setChallenge] = useState<ChallengeData | null>(null);
  const [answered, setAnswered] = useState(false);
  const [attempt, setAttempt] = useState<AttemptData | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [countdown, setCountdown] = useState("");
  const [copied, setCopied] = useState(false);

  // Fetch today's challenge
  useEffect(() => {
    async function fetchChallenge() {
      try {
        const res = await fetch("/api/challenge/today");
        if (res.ok) {
          const data = await res.json();
          setChallenge(data.challenge);
          setAnswered(data.answered);
          if (data.attempt) {
            setAttempt(data.attempt);
            setSelectedIndex(data.attempt.selectedIndex);
          }
        }
      } catch {
        // silently fail
      } finally {
        setLoading(false);
      }
    }
    fetchChallenge();
  }, []);

  // Countdown timer to next challenge
  useEffect(() => {
    function updateCountdown() {
      const now = new Date();
      const tomorrow = new Date(now);
      tomorrow.setDate(tomorrow.getDate() + 1);
      tomorrow.setHours(0, 0, 0, 0);
      const diff = tomorrow.getTime() - now.getTime();
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      setCountdown(
        `${hours.toString().padStart(2, "0")}:${minutes
          .toString()
          .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
      );
    }
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSelect = useCallback(
    async (index: number) => {
      if (answered || submitting || !challenge) return;
      setSelectedIndex(index);

      if (!user) {
        // Show answer locally for non-authenticated users
        // Import the full challenge data to get correctIndex
        const { dailyChallenges } = await import("@/data/daily-challenges");
        const fullChallenge = dailyChallenges.find((c) => c.id === challenge.id);
        if (fullChallenge) {
          const correct = index === fullChallenge.correctIndex;
          setChallenge({
            ...challenge,
            correctIndex: fullChallenge.correctIndex,
            explanation: fullChallenge.explanation,
          });
          setAttempt({
            selectedIndex: index,
            correct,
            score: correct ? 100 : 0,
            streak: 0,
          });
          setAnswered(true);
        }
        return;
      }

      setSubmitting(true);
      try {
        const res = await fetch("/api/challenge/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            challengeId: challenge.id,
            selectedIndex: index,
          }),
        });
        if (res.ok) {
          const data = await res.json();
          setChallenge({
            ...challenge,
            correctIndex: data.correctIndex,
            explanation: data.explanation,
          });
          setAttempt({
            selectedIndex: index,
            correct: data.correct,
            score: data.score,
            streak: data.streak,
          });
          setAnswered(true);
        }
      } catch {
        // silently fail
      } finally {
        setSubmitting(false);
      }
    },
    [answered, submitting, challenge, user]
  );

  const handleShare = useCallback(() => {
    if (!attempt) return;
    const text = `I scored ${attempt.score} on today's EconLearn Challenge! Can you beat me?`;
    const url = "https://www.econlearn.org/challenge";
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        text
      )}&url=${encodeURIComponent(url)}`,
      "_blank",
      "width=550,height=420"
    );
  }, [attempt]);

  const handleCopyLink = useCallback(() => {
    if (!attempt) return;
    const text = `I scored ${attempt.score} on today's EconLearn Challenge! Try it: https://www.econlearn.org/challenge`;
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [attempt]);

  const todayFormatted = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  if (loading || authLoading) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-10 lg:py-14">
        <div className="animate-pulse space-y-6">
          <div className="h-6 w-48 rounded bg-gray-200" />
          <div className="card p-8 space-y-4">
            <div className="h-4 w-full rounded bg-gray-200" />
            <div className="h-4 w-3/4 rounded bg-gray-200" />
            <div className="space-y-3 pt-4">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="h-14 rounded-xl bg-gray-100" />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!challenge) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-10 lg:py-14 text-center">
        <p style={{ color: "var(--color-ink-muted)" }}>
          Unable to load today&apos;s challenge. Please try again later.
        </p>
      </div>
    );
  }

  const difficultyColor =
    challenge.difficulty === "easy"
      ? "#22c55e"
      : challenge.difficulty === "medium"
      ? "#f59e0b"
      : "#ef4444";

  return (
    <div className="max-w-2xl mx-auto px-6 py-10 lg:py-14">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2.5">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #f59e0b, #ef4444)" }}
            >
              <svg
                className="w-4.5 h-4.5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
                />
              </svg>
            </div>
            <div>
              <h1
                className="text-lg font-bold tracking-tight"
                style={{ color: "var(--color-ink)" }}
              >
                Daily Challenge
              </h1>
            </div>
          </div>
          {attempt && attempt.streak > 0 && (
            <div
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full"
              style={{
                background: "rgba(245, 158, 11, 0.08)",
                border: "1px solid rgba(245, 158, 11, 0.15)",
              }}
            >
              <span className="text-sm">&#x1F525;</span>
              <span className="text-xs font-bold text-amber-700">
                {attempt.streak} day streak
              </span>
            </div>
          )}
        </div>

        <p className="text-sm mb-6" style={{ color: "var(--color-ink-faint)" }}>
          {todayFormatted}
        </p>

        {/* Question Card */}
        <div className="card p-6 sm:p-8 mb-4">
          {/* Meta badges */}
          <div className="flex items-center gap-2 mb-5">
            <span
              className="text-[11px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider"
              style={{
                color: difficultyColor,
                background: `${difficultyColor}12`,
                border: `1px solid ${difficultyColor}25`,
              }}
            >
              {challenge.difficulty}
            </span>
            <span
              className="text-[11px] font-medium px-2 py-0.5 rounded-full"
              style={{
                color: "var(--color-ink-faint)",
                background: "var(--color-surface-sunken)",
              }}
            >
              {challenge.module.replace(/-/g, " ")}
            </span>
          </div>

          {/* Question */}
          <h2
            className="text-[16px] sm:text-[17px] font-semibold leading-relaxed mb-6"
            style={{ color: "var(--color-ink)" }}
          >
            {challenge.question}
          </h2>

          {/* Options */}
          <div className="space-y-3">
            {challenge.options.map((option, i) => {
              const isSelected = selectedIndex === i;
              const isCorrect =
                answered && challenge.correctIndex !== undefined && i === challenge.correctIndex;
              const isWrong = answered && isSelected && !isCorrect;

              let cardStyle: React.CSSProperties = {
                border: "1.5px solid var(--color-border-subtle)",
                background: "var(--color-surface)",
                color: "var(--color-ink)",
                cursor: answered ? "default" : "pointer",
              };

              if (isCorrect) {
                cardStyle = {
                  ...cardStyle,
                  border: "1.5px solid #22c55e",
                  background: "rgba(34, 197, 94, 0.06)",
                  color: "#15803d",
                };
              } else if (isWrong) {
                cardStyle = {
                  ...cardStyle,
                  border: "1.5px solid #ef4444",
                  background: "rgba(239, 68, 68, 0.06)",
                  color: "#dc2626",
                };
              } else if (answered) {
                cardStyle = {
                  ...cardStyle,
                  opacity: 0.5,
                  cursor: "default",
                };
              }

              return (
                <motion.button
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.2 }}
                  onClick={() => handleSelect(i)}
                  disabled={answered || submitting}
                  className="w-full text-left px-5 py-4 rounded-xl transition-all duration-150 hover:shadow-sm"
                  style={cardStyle}
                  whileHover={!answered ? { scale: 1.01 } : {}}
                  whileTap={!answered ? { scale: 0.99 } : {}}
                >
                  <span className="flex items-center gap-3">
                    <span
                      className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0"
                      style={{
                        background: isCorrect
                          ? "#22c55e"
                          : isWrong
                          ? "#ef4444"
                          : "var(--color-surface-sunken)",
                        color: isCorrect || isWrong ? "white" : "var(--color-ink-faint)",
                      }}
                    >
                      {isCorrect ? (
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={3}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      ) : isWrong ? (
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={3}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      ) : (
                        String.fromCharCode(65 + i)
                      )}
                    </span>
                    <span className="text-sm font-medium flex-1">{option}</span>
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Explanation + Results (after answering) */}
        <AnimatePresence>
          {answered && attempt && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4"
            >
              {/* Score Card */}
              <div
                className="card p-6 text-center"
                style={{
                  background: attempt.correct
                    ? "rgba(34, 197, 94, 0.04)"
                    : "rgba(239, 68, 68, 0.04)",
                  border: attempt.correct
                    ? "1px solid rgba(34, 197, 94, 0.15)"
                    : "1px solid rgba(239, 68, 68, 0.15)",
                }}
              >
                <div className="mb-3">
                  <span className="text-3xl font-bold tabular-nums" style={{
                    color: attempt.correct ? "#15803d" : "#dc2626",
                  }}>
                    {attempt.correct ? "+" : ""}{attempt.score}
                  </span>
                  <span className="text-sm ml-1" style={{ color: "var(--color-ink-faint)" }}>
                    points
                  </span>
                </div>
                <p className="text-sm font-medium" style={{
                  color: attempt.correct ? "#15803d" : "#dc2626",
                }}>
                  {attempt.correct ? "Correct!" : "Not quite!"}
                </p>
                {attempt.correct && attempt.streak > 1 && (
                  <p className="text-xs mt-1" style={{ color: "var(--color-ink-faint)" }}>
                    +{(attempt.streak - 1) * 10} streak bonus
                  </p>
                )}
              </div>

              {/* Explanation */}
              {challenge.explanation && (
                <div className="card p-5">
                  <p
                    className="text-xs font-semibold uppercase tracking-wider mb-2"
                    style={{ color: "var(--color-ink-faint)" }}
                  >
                    Explanation
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--color-ink-muted)" }}
                  >
                    {challenge.explanation}
                  </p>
                </div>
              )}

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={handleShare}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-medium px-5 py-2.5 rounded-xl transition-colors"
                  style={{
                    border: "1px solid var(--color-border-subtle)",
                    color: "var(--color-ink-muted)",
                    background: "var(--color-surface)",
                  }}
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  Share Score
                </button>
                <button
                  onClick={handleCopyLink}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-medium px-5 py-2.5 rounded-xl transition-colors"
                  style={{
                    border: "1px solid var(--color-border-subtle)",
                    color: "var(--color-ink-muted)",
                    background: "var(--color-surface)",
                  }}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
                    />
                  </svg>
                  {copied ? "Copied!" : "Copy Link"}
                </button>
                <Link
                  href="/challenge/leaderboard"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors"
                  style={{
                    background: "var(--color-ink)",
                    color: "white",
                  }}
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
                      d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0016.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.003 6.003 0 01-5.54 0"
                    />
                  </svg>
                  See Leaderboard
                </Link>
              </div>

              {!user && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="card p-4 text-center"
                  style={{
                    background: "rgba(59, 130, 246, 0.04)",
                    border: "1px solid rgba(59, 130, 246, 0.12)",
                  }}
                >
                  <p className="text-sm" style={{ color: "var(--color-ink-muted)" }}>
                    <Link href="/login" className="text-blue-600 font-medium hover:text-blue-700">
                      Sign in
                    </Link>{" "}
                    to save your score, build streaks, and compete on the leaderboard.
                  </p>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Countdown to next challenge */}
        <div className="mt-8 text-center">
          <p className="text-[11px] font-medium uppercase tracking-wider mb-1" style={{ color: "var(--color-ink-faint)" }}>
            Next challenge in
          </p>
          <p className="text-2xl font-bold tabular-nums" style={{ color: "var(--color-ink-muted)" }}>
            {countdown}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
