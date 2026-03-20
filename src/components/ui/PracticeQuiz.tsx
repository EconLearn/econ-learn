"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/components/providers/AuthProvider";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";
import Confetti from "@/components/ui/Confetti";
import { usePreferencesStore } from "@/lib/stores/preferences-store";
import type { PracticeQuestion } from "@/data/supply-demand-content";

const TIMER_SECONDS = 30;

interface PracticeQuizProps {
  questions: PracticeQuestion[];
  moduleId?: string;
}

function shuffleAndSlice<T>(arr: T[], count: number): T[] {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, count);
}

export default function PracticeQuiz({ questions: allQuestions, moduleId }: PracticeQuizProps) {
  const { user } = useAuth();
  const { preferences } = usePreferencesStore();
  const [mounted, setMounted] = useState(false);
  const [questions, setQuestions] = useState<PracticeQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  // Initialize questions on client only to avoid hydration mismatch
  useEffect(() => {
    setQuestions(
      allQuestions.length > preferences.quizLength
        ? shuffleAndSlice(allQuestions, preferences.quizLength)
        : [...allQuestions]
    );
    setMounted(true);
  }, []);
  const [personalBest, setPersonalBest] = useState<number | null>(null);
  const [saving, setSaving] = useState(false);
  const [timedMode, setTimedMode] = useState(preferences.timedModeDefault);
  const [timeLeft, setTimeLeft] = useState(TIMER_SECONDS);
  const [questionTimes, setQuestionTimes] = useState<number[]>([]);
  const [showConfetti, setShowConfetti] = useState(false);
  const [missedQuestions, setMissedQuestions] = useState<{ question: PracticeQuestion; selectedIndex: number }[]>([]);
  const [showReview, setShowReview] = useState(false);
  const questionStartRef = useRef(Date.now());

  // Fetch personal best on mount + mark module as accessed
  useEffect(() => {
    if (!user || !moduleId) return;

    const supabase = createClient();
    supabase
      .from("quiz_attempts")
      .select("score")
      .eq("user_id", user.id)
      .eq("module_id", moduleId)
      .order("score", { ascending: false })
      .limit(1)
      .then(({ data }) => {
        if (data && data.length > 0) {
          setPersonalBest(data[0].score);
        }
      });

    // Mark module as accessed (records last_accessed_at for "Continue Studying")
    const courseId = ["basic-concepts", "supply-and-demand", "elasticity", "consumer-choice",
      "production-costs", "perfect-competition", "monopoly", "monopolistic-competition",
      "oligopoly", "factor-markets", "market-failure", "public-goods-externalities"
    ].includes(moduleId) ? "micro" : "macro";

    supabase.from("module_progress").upsert(
      {
        user_id: user.id,
        module_id: moduleId,
        course_id: courseId,
        last_accessed_at: new Date().toISOString(),
      },
      { onConflict: "user_id,module_id" }
    );

    // Log activity for today
    const today = new Date().toISOString().split("T")[0];
    supabase.from("user_activity").upsert(
      {
        user_id: user.id,
        activity_date: today,
        modules_studied: 1,
      },
      { onConflict: "user_id,activity_date" }
    );
  }, [user, moduleId]);

  // Save quiz attempt when completed
  const saveAttempt = useCallback(async (finalScore: number) => {
    if (!user || !moduleId) return;
    setSaving(true);

    const supabase = createClient();
    const percentage = Math.round((finalScore / questions.length) * 100);

    // Save quiz attempt
    await supabase.from("quiz_attempts").insert({
      user_id: user.id,
      module_id: moduleId,
      score: percentage,
      total_questions: questions.length,
      correct_answers: finalScore,
    });

    // Log activity for today
    const today = new Date().toISOString().split("T")[0];
    await supabase.from("user_activity").upsert(
      {
        user_id: user.id,
        activity_date: today,
        quizzes_completed: 1,
      },
      { onConflict: "user_id,activity_date" }
    );

    // Mark module as accessed and completed in module_progress
    const courseId = ["basic-concepts", "supply-and-demand", "elasticity", "consumer-choice",
      "production-costs", "perfect-competition", "monopoly", "monopolistic-competition",
      "oligopoly", "factor-markets", "market-failure", "public-goods-externalities"
    ].includes(moduleId) ? "micro" : "macro";

    await supabase.from("module_progress").upsert(
      {
        user_id: user.id,
        module_id: moduleId,
        course_id: courseId,
        completed: true,
        completed_at: new Date().toISOString(),
        last_accessed_at: new Date().toISOString(),
      },
      { onConflict: "user_id,module_id" }
    );

    // Update personal best if higher
    if (personalBest === null || percentage > personalBest) {
      setPersonalBest(percentage);
    }

    setSaving(false);
  }, [user, moduleId, questions.length, personalBest]);

  const handleTimeout = useCallback(() => {
    if (selectedAnswer !== null) return;
    const elapsed = (Date.now() - questionStartRef.current) / 1000;
    setQuestionTimes((prev) => [...prev, elapsed]);
    setSelectedAnswer(-1); // -1 means timeout
    setShowExplanation(true);
    setMissedQuestions((prev) => [...prev, { question: questions[currentIndex], selectedIndex: -1 }]);
  }, [selectedAnswer, questions, currentIndex]);

  // Timer logic
  useEffect(() => {
    if (!timedMode || showExplanation || completed) return;
    setTimeLeft(TIMER_SECONDS);
    questionStartRef.current = Date.now();

    const interval = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(interval);
          // Auto-answer wrong on timeout
          handleTimeout();
          return 0;
        }
        return t - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [currentIndex, timedMode, showExplanation, completed, handleTimeout]);

  const current = questions[currentIndex];

  // Show skeleton until client-side mount to prevent hydration mismatch
  if (!mounted || questions.length === 0) {
    return (
      <div className="card overflow-hidden">
        <div className="p-6 space-y-4 animate-pulse">
          <div className="h-3 w-24 rounded bg-gray-200" />
          <div className="h-5 w-3/4 rounded bg-gray-200" />
          <div className="space-y-2">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="h-12 rounded-lg bg-gray-100" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  const handleSelect = (optionIndex: number) => {
    if (selectedAnswer !== null) return;
    const elapsed = (Date.now() - questionStartRef.current) / 1000;
    setQuestionTimes((prev) => [...prev, elapsed]);
    setSelectedAnswer(optionIndex);
    setShowExplanation(true);
    if (optionIndex === current.correctIndex) {
      setScore((s) => s + 1);
    } else {
      setMissedQuestions((prev) => [...prev, { question: current, selectedIndex: optionIndex }]);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((i) => i + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setCompleted(true);
      saveAttempt(score);
      // Trigger confetti on perfect score (no missed questions)
      if (missedQuestions.length === 0 && selectedAnswer === current.correctIndex) {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 3000);
      }
    }
  };

  const handleRestart = () => {
    setQuestions(
      allQuestions.length > preferences.quizLength
        ? shuffleAndSlice(allQuestions, preferences.quizLength)
        : allQuestions
    );
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setCompleted(false);
    setTimeLeft(TIMER_SECONDS);
    setQuestionTimes([]);
    setShowConfetti(false);
    setMissedQuestions([]);
    setShowReview(false);
    questionStartRef.current = Date.now();
  };

  if (completed) {
    const percentage = Math.round((score / questions.length) * 100);
    const isNewBest = personalBest !== null && percentage > personalBest;

    return (
      <>
      <Confetti trigger={showConfetti} />
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="card p-8 text-center"
      >
        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
          percentage >= 80 ? "bg-emerald-50" : "bg-gray-100"
        }`}>
          <p className={`text-2xl font-bold tabular-nums ${
            percentage >= 80 ? "text-emerald-700" : "text-slate-900"
          }`}>
            {percentage}%
          </p>
        </div>

        <p className="text-sm text-gray-500 mb-2">
          {score} of {questions.length} correct.
          {percentage === 100
            ? " Perfect score! You've mastered this material."
            : percentage >= 80
            ? " Strong understanding of the material."
            : percentage >= 50
            ? " Getting there — review the explanations above."
            : " Review the concepts and try again."}
        </p>

        {/* Personal best */}
        {user && personalBest !== null && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xs text-gray-400 mb-1"
          >
            {isNewBest ? (
              <span className="text-emerald-600 font-medium">New personal best!</span>
            ) : (
              <>Personal best: <span className="font-medium text-gray-500">{personalBest}%</span></>
            )}
          </motion.p>
        )}

        {/* Timed mode stats */}
        {timedMode && questionTimes.length > 0 && (
          <div className="flex justify-center gap-6 mb-3">
            <div className="text-center">
              <p className="text-sm font-bold tabular-nums" style={{ color: "var(--color-ink)" }}>
                {(questionTimes.reduce((a, b) => a + b, 0) / questionTimes.length).toFixed(1)}s
              </p>
              <p className="text-[10px]" style={{ color: "var(--color-ink-faint)" }}>avg/question</p>
            </div>
            <div className="text-center">
              <p className="text-sm font-bold tabular-nums" style={{ color: "var(--graph-equilibrium)" }}>
                {Math.min(...questionTimes).toFixed(1)}s
              </p>
              <p className="text-[10px]" style={{ color: "var(--color-ink-faint)" }}>fastest</p>
            </div>
            <div className="text-center">
              <p className="text-sm font-bold tabular-nums" style={{ color: "var(--graph-demand)" }}>
                {Math.max(...questionTimes).toFixed(1)}s
              </p>
              <p className="text-[10px]" style={{ color: "var(--color-ink-faint)" }}>slowest</p>
            </div>
          </div>
        )}

        {saving && (
          <p className="text-[11px] text-gray-400 mb-4">Saving score...</p>
        )}

        {/* Sign in prompt */}
        {!user && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-4"
          >
            <Link
              href="/login"
              className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-700 font-medium transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              Sign in to save your scores
            </Link>
          </motion.div>
        )}

        {/* Share buttons */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <button
            onClick={() => {
              const text = `I scored ${percentage}% on the ${moduleId?.replace(/-/g, " ") || "economics"} quiz on EconLearn!`;
              const url = `https://www.econlearn.org${window.location.pathname}`;
              window.open(
                `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
                "_blank",
                "width=550,height=420"
              );
            }}
            className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg transition-colors"
            style={{
              border: "1px solid var(--color-border-subtle)",
              color: "var(--color-ink-muted)",
            }}
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            Share
          </button>
          <button
            onClick={() => {
              const text = `I scored ${percentage}% on the ${moduleId?.replace(/-/g, " ") || "economics"} quiz on EconLearn! Try it: https://www.econlearn.org${window.location.pathname}`;
              navigator.clipboard.writeText(text).then(() => {
                // Brief visual feedback
                const el = document.activeElement as HTMLButtonElement;
                if (el) {
                  const orig = el.textContent;
                  el.textContent = "Copied!";
                  setTimeout(() => { el.textContent = orig; }, 1500);
                }
              });
            }}
            className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg transition-colors"
            style={{
              border: "1px solid var(--color-border-subtle)",
              color: "var(--color-ink-muted)",
            }}
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
            </svg>
            Copy Link
          </button>
        </div>

        <div className="flex items-center justify-center gap-3">
          <button onClick={handleRestart} className="btn-primary text-sm">
            Try Again
          </button>
          {missedQuestions.length > 0 && (
            <button
              onClick={() => setShowReview(!showReview)}
              className="btn-secondary text-sm"
            >
              {showReview ? "Hide Review" : `Review ${missedQuestions.length} Missed`}
            </button>
          )}
        </div>
      </motion.div>

      {/* Review Missed Questions */}
      <AnimatePresence>
        {showReview && missedQuestions.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.3 }}
            className="mt-4 space-y-3"
          >
            <p className="text-xs font-medium uppercase tracking-wider" style={{ color: "var(--color-ink-faint)" }}>
              Questions to review
            </p>
            {missedQuestions.map(({ question: q, selectedIndex }, idx) => (
              <div key={q.id} className="card p-5 text-left">
                <p className="text-[11px] font-medium mb-2" style={{ color: "var(--color-ink-faint)" }}>
                  {idx + 1} of {missedQuestions.length}
                </p>
                <p className="text-sm font-medium mb-3" style={{ color: "var(--color-ink)" }}>
                  {q.question}
                </p>
                <div className="space-y-1.5 mb-3">
                  {q.options.map((opt, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm"
                      style={{
                        background:
                          i === q.correctIndex
                            ? "rgba(16, 185, 129, 0.08)"
                            : i === selectedIndex
                            ? "rgba(239, 68, 68, 0.08)"
                            : "transparent",
                        border:
                          i === q.correctIndex
                            ? "1px solid rgba(16, 185, 129, 0.2)"
                            : i === selectedIndex
                            ? "1px solid rgba(239, 68, 68, 0.2)"
                            : "1px solid transparent",
                        color:
                          i === q.correctIndex
                            ? "#059669"
                            : i === selectedIndex
                            ? "#dc2626"
                            : "var(--color-ink-muted)",
                      }}
                    >
                      <span className="text-[11px] font-bold w-4">{String.fromCharCode(65 + i)}</span>
                      <span className="flex-1">{opt}</span>
                      {i === q.correctIndex && (
                        <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                      {i === selectedIndex && i !== q.correctIndex && (
                        <svg className="w-4 h-4 text-red-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      )}
                    </div>
                  ))}
                </div>
                <div className="p-3 rounded-lg" style={{ background: "var(--color-surface-sunken)", border: "1px solid var(--color-border-subtle)" }}>
                  <p className="text-xs font-semibold mb-1" style={{ color: "var(--color-ink-faint)" }}>Explanation</p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-ink-muted)" }}>{q.explanation}</p>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      </>
    );
  }

  return (
    <div className="card overflow-hidden">
      {/* Header with timer toggle and personal best */}
      <div className="flex items-center justify-between px-4 pt-3 pb-0">
        <button
          onClick={() => {
            setTimedMode((t) => !t);
            setTimeLeft(TIMER_SECONDS);
          }}
          className="flex items-center gap-1.5 text-[11px] font-medium px-2 py-1 rounded-md transition-all"
          style={{
            border: "1px solid var(--color-border-subtle)",
            color: timedMode ? "var(--graph-demand)" : "var(--color-ink-faint)",
            background: timedMode ? "rgba(59,130,246,0.06)" : "transparent",
          }}
        >
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {timedMode ? `${timeLeft}s` : "Timed"}
        </button>
        {user && personalBest !== null && (
          <span className="text-[11px] text-gray-400">
            Personal best: <span className="font-medium text-gray-500">{personalBest}%</span>
          </span>
        )}
      </div>

      {/* Timer bar */}
      {timedMode && !showExplanation && (
        <div className="h-1 mx-4 mt-2 rounded-full overflow-hidden" style={{ background: "var(--color-surface-sunken)" }}>
          <div
            className="h-full rounded-full transition-all duration-1000 linear"
            style={{
              width: `${(timeLeft / TIMER_SECONDS) * 100}%`,
              background: timeLeft <= 5 ? "#ef4444" : timeLeft <= 10 ? "#f59e0b" : "var(--graph-equilibrium)",
            }}
          />
        </div>
      )}

      {/* Progress bar */}
      <div className="h-0.5" style={{ background: 'var(--color-surface-sunken)' }}>
        <div
          className="h-full transition-all duration-500 ease-out"
          style={{ background: 'var(--graph-equilibrium)', width: `${((currentIndex + (showExplanation ? 1 : 0.5)) / questions.length) * 100}%` }}
        />
      </div>

      <div className="p-6">
        {/* Question counter */}
        <div className="flex items-center justify-between mb-4">
          <p className="text-[11px] font-medium" style={{ color: 'var(--color-ink-faint)' }}>
            Question {currentIndex + 1} of {questions.length}
          </p>
          <div className="flex items-center gap-1">
            {questions.map((_, i) => (
              <div
                key={i}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  i < currentIndex
                    ? "bg-emerald-500"
                    : i === currentIndex
                    ? "bg-emerald-300 w-3"
                    : "bg-gray-200"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Question */}
        <AnimatePresence mode="wait">
          <motion.h3
            key={currentIndex}
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -8 }}
            transition={{ duration: 0.2 }}
            className="text-[15px] font-medium leading-snug mb-5"
            style={{ color: 'var(--color-ink)' }}
          >
            {current.question}
          </motion.h3>
        </AnimatePresence>

        {/* Options */}
        <div className="space-y-2">
          {current.options.map((option, i) => {
            const isCorrect = i === current.correctIndex;
            const isSelected = i === selectedAnswer;
            const isAnswered = selectedAnswer !== null;

            let style =
              "bg-white border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300";

            if (isAnswered) {
              if (isCorrect) {
                style = "bg-emerald-50 border-emerald-200 text-emerald-800";
              } else if (isSelected) {
                style = "bg-red-50 border-red-200 text-red-700";
              } else {
                style = "bg-white border-gray-100 text-gray-400";
              }
            }

            return (
              <motion.button
                key={`${currentIndex}-${i}`}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.03, duration: 0.15 }}
                onClick={() => handleSelect(i)}
                disabled={isAnswered}
                className={`w-full text-left px-4 py-3 rounded-lg border text-sm font-medium
                           transition-colors ${style} ${
                             !isAnswered ? "cursor-pointer" : ""
                           }`}
              >
                <span className="flex items-center gap-3">
                  <span className={`w-5 h-5 rounded flex items-center justify-center text-[10px] font-bold
                    ${isAnswered && isCorrect
                      ? "bg-emerald-500 text-white"
                      : isAnswered && isSelected
                      ? "bg-red-400 text-white"
                      : "bg-gray-100 text-gray-500"
                    }`}>
                    {isAnswered && isCorrect ? (
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    ) : isAnswered && isSelected ? (
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    ) : (
                      String.fromCharCode(65 + i)
                    )}
                  </span>
                  <span className="flex-1">{option}</span>
                </span>
              </motion.button>
            );
          })}
        </div>

        {/* Explanation */}
        <AnimatePresence>
          {showExplanation && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="mt-5"
            >
              <div className={`p-4 rounded-lg border ${
                selectedAnswer === current.correctIndex
                  ? "bg-emerald-50 border-emerald-100"
                  : "bg-gray-50 border-gray-200"
              }`}>
                <p className={`text-xs font-semibold mb-1.5 ${
                  selectedAnswer === current.correctIndex ? "text-emerald-600" : "text-gray-500"
                }`}>
                  {selectedAnswer === current.correctIndex ? "Correct" : "Incorrect"}
                </p>
                <p className={`text-sm leading-relaxed ${
                  selectedAnswer === current.correctIndex ? "text-emerald-800" : "text-gray-700"
                }`}>
                  {current.explanation}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation buttons */}
        <AnimatePresence>
          {showExplanation && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
              className="mt-4 flex gap-2"
            >
              {currentIndex > 0 && (
                <button
                  onClick={() => { setCurrentIndex(currentIndex - 1); setSelectedAnswer(null); setShowExplanation(false); }}
                  className="btn-secondary flex-1 flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                  </svg>
                  Previous
                </button>
              )}
              <button
                onClick={handleNext}
                className="btn-primary flex-1 flex items-center justify-center gap-2"
              >
                {currentIndex < questions.length - 1 ? (
                  <>
                    Next Question
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </>
                ) : (
                  "See Results"
                )}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
