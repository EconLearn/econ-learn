"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/components/providers/AuthProvider";
import { useRouter } from "next/navigation";
import type { ExamQuestion, ExamAnswer } from "@/lib/types/teacher";

// ─── Types ───────────────────────────────────────────────────────────────────

interface ExamSession {
  id: string;
  started_at: string;
  ends_at: string;
  status: string;
  answers: ExamAnswer[] | null;
  tab_switches: number;
  fullscreen_exits: number;
}

interface ExamConfig {
  lockdown: boolean;
  shuffle_questions: boolean;
  shuffle_options: boolean;
  show_results: boolean;
  time_limit_minutes: number;
}

// ─── Seeded shuffle ──────────────────────────────────────────────────────────

function seededRandom(seed: string) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) {
    h = (Math.imul(31, h) + seed.charCodeAt(i)) | 0;
  }
  return function () {
    h = (h ^ (h >>> 16)) * 0x45d9f3b;
    h = (h ^ (h >>> 16)) * 0x45d9f3b;
    h = h ^ (h >>> 16);
    return (h >>> 0) / 4294967296;
  };
}

function seededShuffle<T>(arr: T[], seed: string): T[] {
  const shuffled = [...arr];
  const rng = seededRandom(seed);
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// ─── Main Page ───────────────────────────────────────────────────────────────

export default function ExamPage({ params }: { params: { assignmentId: string } }) {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const assignmentId = params.assignmentId;

  const [session, setSession] = useState<ExamSession | null>(null);
  const [questions, setQuestions] = useState<ExamQuestion[]>([]);
  const [config, setConfig] = useState<ExamConfig | null>(null);
  const [examTitle, setExamTitle] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Exam state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Map<string, number>>(new Map());
  const [flagged, setFlagged] = useState<Set<string>>(new Set());
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [showConfirm, setShowConfirm] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submittedScore, setSubmittedScore] = useState<number | null>(null);
  const [showResultsAfter, setShowResultsAfter] = useState(false);

  // Lockdown state
  const [tabSwitches, setTabSwitches] = useState(0);
  const [fullscreenExits, setFullscreenExits] = useState(0);
  const [showTabWarning, setShowTabWarning] = useState(false);
  const [showFullscreenWarning, setShowFullscreenWarning] = useState(false);
  const [showDevToolsWarning, setShowDevToolsWarning] = useState(false);
  const [showTimeUp, setShowTimeUp] = useState(false);

  const hasSubmittedRef = useRef(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const saveTimerRef = useRef<NodeJS.Timeout | null>(null);
  const tabSwitchesRef = useRef(0);
  const fullscreenExitsRef = useRef(0);
  const visibilityFiredRef = useRef(false);
  const blurFocusTimerRef = useRef<NodeJS.Timeout | null>(null);
  const focusLostAtRef = useRef<number | null>(null);

  // ── Shuffled questions (stable per session) ──
  const [orderedQuestions, setOrderedQuestions] = useState<ExamQuestion[]>([]);
  const [optionMaps, setOptionMaps] = useState<Map<string, number[]>>(new Map());

  // ── Start/resume exam session ──
  useEffect(() => {
    if (authLoading) return;
    if (!user) {
      router.push("/login");
      return;
    }

    async function startExam() {
      try {
        const res = await fetch(`/api/exam/${assignmentId}/start`, { method: "POST" });
        const data = await res.json();

        if (!res.ok) {
          setError(data.error || "Failed to start exam");
          setLoading(false);
          return;
        }

        setSession(data.session);
        setQuestions(data.questions);
        setConfig(data.config);
        setExamTitle(data.title);

        // Restore previous answers if resuming
        if (data.session.answers) {
          const restored = new Map<string, number>();
          for (const a of data.session.answers) {
            restored.set(a.question_id, a.selected_index);
          }
          setAnswers(restored);
        }

        // Calculate time remaining from server
        const endsAt = new Date(data.session.ends_at).getTime();
        const remaining = Math.max(0, Math.round((endsAt - Date.now()) / 1000));
        setTimeLeft(remaining);

        // Set up shuffled question order
        const seed = `${user!.id}-${assignmentId}`;
        let ordered = data.questions as ExamQuestion[];
        if (data.config.shuffle_questions) {
          ordered = seededShuffle(ordered, seed);
        }
        setOrderedQuestions(ordered);

        // Set up shuffled options
        if (data.config.shuffle_options) {
          const maps = new Map<string, number[]>();
          for (const q of ordered) {
            const indices = q.options.map((_, i) => i);
            maps.set(q.id, seededShuffle(indices, `${seed}-${q.id}`));
          }
          setOptionMaps(maps);
        }

        const restoredTabSwitches = data.session.tab_switches || 0;
        const restoredFullscreenExits = data.session.fullscreen_exits || 0;
        setTabSwitches(restoredTabSwitches);
        setFullscreenExits(restoredFullscreenExits);
        tabSwitchesRef.current = restoredTabSwitches;
        fullscreenExitsRef.current = restoredFullscreenExits;
      } catch {
        setError("Failed to start exam");
      }
      setLoading(false);
    }

    startExam();
  }, [user, authLoading, router, assignmentId]);

  // ── Timer countdown ──
  useEffect(() => {
    if (loading || !session || submitted) return;
    if (timeLeft <= 0) return;

    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          return 0;
        }
        return t - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [loading, session, submitted]); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Auto-submit on time expiry ──
  useEffect(() => {
    if (timeLeft === 0 && session && !submitted && !hasSubmittedRef.current) {
      setShowTimeUp(true);
      handleSubmit();
    }
  }, [timeLeft]); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Request fullscreen on load ──
  useEffect(() => {
    if (!loading && config?.lockdown && !submitted) {
      requestFullscreen();
    }
  }, [loading, config, submitted]); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Tab-switch detection ──
  useEffect(() => {
    if (!config?.lockdown || submitted) return;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Set flag so blur handler can debounce within 100ms
        visibilityFiredRef.current = true;
        setTimeout(() => { visibilityFiredRef.current = false; }, 150);
        setTabSwitches((prev) => {
          const next = prev + 1;
          tabSwitchesRef.current = next;
          setShowTabWarning(true);
          // Auto-hide after 5 seconds
          setTimeout(() => setShowTabWarning(false), 5000);
          // Immediately persist to server
          fetch(`/api/exam/${assignmentId}/save-progress`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ tab_switches: next }),
          }).catch(() => {});
          return next;
        });
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, [config?.lockdown, submitted]);

  // ── Fullscreen detection ──
  useEffect(() => {
    if (!config?.lockdown || submitted) return;

    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        setFullscreenExits((prev) => {
          const next = prev + 1;
          fullscreenExitsRef.current = next;
          setShowFullscreenWarning(true);
          setTimeout(() => {
            setShowFullscreenWarning(false);
            // Re-request fullscreen
            requestFullscreen();
          }, 3000);
          // Immediately persist to server
          fetch(`/api/exam/${assignmentId}/save-progress`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ fullscreen_exits: next }),
          }).catch(() => {});
          return next;
        });
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, [config?.lockdown, submitted]);

  // ── Save progress to server (answers + lockdown counters) ──
  const saveProgress = useCallback(async () => {
    if (hasSubmittedRef.current || !session) return;

    const answerArray: ExamAnswer[] = [];
    answers.forEach((selectedIndex, questionId) => {
      answerArray.push({ question_id: questionId, selected_index: selectedIndex });
    });

    try {
      await fetch(`/api/exam/${assignmentId}/save-progress`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          answers: answerArray,
          tab_switches: tabSwitchesRef.current,
          fullscreen_exits: fullscreenExitsRef.current,
        }),
      });
    } catch {
      // Silent fail — best-effort save
    }
  }, [session, answers, assignmentId]);

  // ── Periodic auto-save (every 15 seconds) ──
  useEffect(() => {
    if (loading || !session || submitted) return;

    saveTimerRef.current = setInterval(() => {
      saveProgress();
    }, 15_000);

    return () => {
      if (saveTimerRef.current) clearInterval(saveTimerRef.current);
    };
  }, [loading, session, submitted, saveProgress]);

  // ── Warn on beforeunload to prevent accidental navigation ──
  useEffect(() => {
    if (submitted) return;

    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (hasSubmittedRef.current) return;
      e.preventDefault();
      // Save progress on unload attempt
      saveProgress();
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [submitted, saveProgress]);

  // ── Anti-cheat: block copy, paste, right-click, keyboard shortcuts ──
  // ── Plus: blur detection, DevTools detection, PiP blocking, resize/monitor detection,
  // ──       drag prevention, iframe protection, focus monitoring ──
  useEffect(() => {
    if (!config?.lockdown || submitted) return;

    // --- Iframe / embed protection ---
    if (window.self !== window.top) {
      // Page is iframed — break out
      window.top!.location.href = window.location.href;
    }
    // Add CSP meta tag to block embedding by AI tools
    const cspMeta = document.createElement("meta");
    cspMeta.httpEquiv = "Content-Security-Policy";
    cspMeta.content = "frame-ancestors 'self'; frame-src 'none';";
    document.head.appendChild(cspMeta);

    // --- Block context menu ---
    const blockContextMenu = (e: MouseEvent) => { e.preventDefault(); };

    // --- Block keyboard shortcuts (extended) ---
    const blockKeyboard = (e: KeyboardEvent) => {
      // Block Ctrl/Cmd + C, V, F, U, P, S, A and F12
      if ((e.ctrlKey || e.metaKey) && ['c','v','f','u','p','s','a'].includes(e.key.toLowerCase())) {
        e.preventDefault();
      }
      if (e.key === 'F12') e.preventDefault();
      // Block Ctrl+Shift+I (DevTools), Ctrl+Shift+J (Console), Ctrl+Shift+C (inspector)
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && ['i','j','c','s'].includes(e.key.toLowerCase())) {
        e.preventDefault();
      }
      // Block Alt+Tab (where detectable)
      if (e.altKey && e.key === 'Tab') {
        e.preventDefault();
      }
      // Block Cmd+Space (Spotlight on Mac — can search AI)
      if (e.metaKey && e.key === ' ') {
        e.preventDefault();
      }
      // Block Cmd+Tab / Alt+Tab
      if ((e.metaKey || e.altKey) && e.key === 'Tab') {
        e.preventDefault();
      }
      // Block Windows/Meta key alone
      if (e.key === 'Meta' || e.key === 'OS') {
        e.preventDefault();
      }
      // Block Ctrl+Shift+S (screenshot tools)
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === 's') {
        e.preventDefault();
      }
    };

    // --- Block clipboard ---
    const blockCopy = (e: ClipboardEvent) => { e.preventDefault(); };

    // --- Block text selection ---
    const blockSelect = () => { window.getSelection()?.removeAllRanges(); };

    // --- Block drag ---
    const blockDrag = (e: DragEvent) => { e.preventDefault(); };

    // --- Window blur detection (catches AI overlays, sidebar popups, floating windows) ---
    const handleWindowBlur = () => {
      // Debounce: if visibilitychange already fired within 100ms, skip
      if (visibilityFiredRef.current) return;
      // Allow 100ms for visibilitychange to potentially fire first
      setTimeout(() => {
        if (visibilityFiredRef.current) return;
        setTabSwitches((prev) => {
          const next = prev + 1;
          tabSwitchesRef.current = next;
          setShowTabWarning(true);
          setTimeout(() => setShowTabWarning(false), 5000);
          fetch(`/api/exam/${assignmentId}/save-progress`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ tab_switches: next }),
          }).catch(() => {});
          return next;
        });
      }, 100);
    };

    // --- Focus monitoring (detect overlays that steal focus > 2s without hiding page) ---
    const handleFocusLost = () => {
      if (document.hidden) return; // Already counted via visibilitychange
      focusLostAtRef.current = Date.now();
      blurFocusTimerRef.current = setTimeout(() => {
        // If still not focused after 2s and page is visible, it's an overlay
        if (focusLostAtRef.current && !document.hasFocus() && !document.hidden) {
          setTabSwitches((prev) => {
            const next = prev + 1;
            tabSwitchesRef.current = next;
            setShowTabWarning(true);
            setTimeout(() => setShowTabWarning(false), 5000);
            fetch(`/api/exam/${assignmentId}/save-progress`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ tab_switches: next }),
            }).catch(() => {});
            return next;
          });
        }
        focusLostAtRef.current = null;
      }, 2000);
    };
    const handleFocusRegained = () => {
      focusLostAtRef.current = null;
      if (blurFocusTimerRef.current) {
        clearTimeout(blurFocusTimerRef.current);
        blurFocusTimerRef.current = null;
      }
    };

    // --- DevTools detection ---
    let devToolsDetected = false;
    const devToolsInterval = setInterval(() => {
      // Method 1: Check window size differential (DevTools docked)
      const widthDiff = window.outerWidth - window.innerWidth;
      const heightDiff = window.outerHeight - window.innerHeight;
      const sizeThreshold = 160;

      let detected = false;
      if (widthDiff > sizeThreshold || heightDiff > sizeThreshold) {
        detected = true;
      }

      // Method 2: debugger timing trick
      const before = performance.now();
      // eslint-disable-next-line no-debugger
      debugger;
      const after = performance.now();
      if (after - before > 100) {
        detected = true;
      }

      if (detected && !devToolsDetected) {
        devToolsDetected = true;
        setShowDevToolsWarning(true);
        setFullscreenExits((prev) => {
          const next = prev + 1;
          fullscreenExitsRef.current = next;
          fetch(`/api/exam/${assignmentId}/save-progress`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ fullscreen_exits: next }),
          }).catch(() => {});
          return next;
        });
      } else if (!detected && devToolsDetected) {
        devToolsDetected = false;
        setShowDevToolsWarning(false);
      }
    }, 2000);

    // --- Picture-in-Picture blocking ---
    const blockPiP = (e: Event) => {
      e.preventDefault();
      setTabSwitches((prev) => {
        const next = prev + 1;
        tabSwitchesRef.current = next;
        fetch(`/api/exam/${assignmentId}/save-progress`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ tab_switches: next }),
        }).catch(() => {});
        return next;
      });
    };
    // Block PiP on existing and future video elements
    const videoElements = document.querySelectorAll("video");
    videoElements.forEach((v) => v.addEventListener("enterpictureinpicture", blockPiP));
    // Also override requestPictureInPicture on the prototype
    if (HTMLVideoElement.prototype.requestPictureInPicture) {
      const origPiP = HTMLVideoElement.prototype.requestPictureInPicture;
      HTMLVideoElement.prototype.requestPictureInPicture = function () {
        blockPiP(new Event("enterpictureinpicture"));
        return origPiP.call(this).then(
          () => { document.exitPictureInPicture?.(); return null as unknown as PictureInPictureWindow; },
          () => null as unknown as PictureInPictureWindow
        );
      };
    }

    // --- Multi-monitor / window resize detection during fullscreen ---
    const handleResize = () => {
      if (!document.fullscreenElement) return;
      const screenW = window.screen.width;
      const innerW = window.innerWidth;
      // If inner width is significantly less than screen width in fullscreen, flag it
      if (screenW - innerW > 200) {
        setFullscreenExits((prev) => {
          const next = prev + 1;
          fullscreenExitsRef.current = next;
          setShowFullscreenWarning(true);
          setTimeout(() => setShowFullscreenWarning(false), 3000);
          fetch(`/api/exam/${assignmentId}/save-progress`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ fullscreen_exits: next }),
          }).catch(() => {});
          return next;
        });
      }
    };
    // Check for multi-monitor at setup
    const multiMonitorCheck = setInterval(() => {
      if (window.screen.availWidth > window.screen.width * 1.5) {
        // Likely multiple monitors — flag once
        setFullscreenExits((prev) => {
          const next = prev + 1;
          fullscreenExitsRef.current = next;
          fetch(`/api/exam/${assignmentId}/save-progress`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ fullscreen_exits: next }),
          }).catch(() => {});
          return next;
        });
        clearInterval(multiMonitorCheck);
      }
    }, 5000);

    // --- Register all event listeners ---
    document.addEventListener("contextmenu", blockContextMenu);
    document.addEventListener("keydown", blockKeyboard);
    document.addEventListener("copy", blockCopy);
    document.addEventListener("cut", blockCopy);
    document.addEventListener("paste", blockCopy);
    document.addEventListener("dragstart", blockDrag);
    window.addEventListener("blur", handleWindowBlur);
    document.addEventListener("focusout", handleFocusLost);
    document.addEventListener("focusin", handleFocusRegained);
    window.addEventListener("resize", handleResize);
    const selInterval = setInterval(blockSelect, 500);

    // --- Cleanup ---
    return () => {
      document.removeEventListener("contextmenu", blockContextMenu);
      document.removeEventListener("keydown", blockKeyboard);
      document.removeEventListener("copy", blockCopy);
      document.removeEventListener("cut", blockCopy);
      document.removeEventListener("paste", blockCopy);
      document.removeEventListener("dragstart", blockDrag);
      window.removeEventListener("blur", handleWindowBlur);
      document.removeEventListener("focusout", handleFocusLost);
      document.removeEventListener("focusin", handleFocusRegained);
      window.removeEventListener("resize", handleResize);
      clearInterval(selInterval);
      clearInterval(devToolsInterval);
      clearInterval(multiMonitorCheck);
      if (blurFocusTimerRef.current) clearTimeout(blurFocusTimerRef.current);
      // Remove CSP meta tag
      if (cspMeta.parentNode) cspMeta.parentNode.removeChild(cspMeta);
      videoElements.forEach((v) => v.removeEventListener("enterpictureinpicture", blockPiP));
    };
  }, [config?.lockdown, submitted, assignmentId]);

  // ── Helpers ──
  function requestFullscreen() {
    try {
      document.documentElement.requestFullscreen?.();
    } catch {
      // May fail if user gesture not present
    }
  }

  function formatTime(seconds: number): string {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  }

  const selectAnswer = useCallback((questionId: string, optionIndex: number) => {
    setAnswers((prev) => {
      const next = new Map(prev);
      next.set(questionId, optionIndex);
      return next;
    });
  }, []);

  const toggleFlag = useCallback((questionId: string) => {
    setFlagged((prev) => {
      const next = new Set(prev);
      if (next.has(questionId)) {
        next.delete(questionId);
      } else {
        next.add(questionId);
      }
      return next;
    });
  }, []);

  const handleSubmit = useCallback(async () => {
    if (submitting || hasSubmittedRef.current) return;
    hasSubmittedRef.current = true;
    setSubmitting(true);
    setShowConfirm(false);

    const answerArray: ExamAnswer[] = [];
    for (const q of orderedQuestions) {
      const selectedIndex = answers.get(q.id);
      answerArray.push({
        question_id: q.id,
        selected_index: selectedIndex ?? -1,
      });
    }

    try {
      const res = await fetch(`/api/exam/${assignmentId}/submit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          answers: answerArray,
          tab_switches: tabSwitches,
          fullscreen_exits: fullscreenExits,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setSubmitted(true);
        if (data.score !== undefined) {
          setSubmittedScore(data.score);
          setShowResultsAfter(true);
        }
        // Exit fullscreen
        try { document.exitFullscreen?.(); } catch {}

        // Redirect after 3 seconds if time's up
        if (timeLeft === 0) {
          setTimeout(() => router.push("/assignments"), 3000);
        }
      } else {
        alert(data.error || "Failed to submit exam.");
        hasSubmittedRef.current = false;
        setSubmitting(false);
      }
    } catch {
      alert("Failed to submit exam. Check your connection.");
      hasSubmittedRef.current = false;
      setSubmitting(false);
    }
  }, [submitting, orderedQuestions, answers, assignmentId, tabSwitches, fullscreenExits, timeLeft, router]);

  // ── Loading state ──
  if (authLoading || loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-[9999]">
        <div className="text-center">
          <div
            className="w-8 h-8 border-2 rounded-full animate-spin mx-auto mb-4"
            style={{ borderColor: "#e5e7eb", borderTopColor: "#1f2937" }}
          />
          <p className="text-sm font-medium text-gray-600">Loading exam...</p>
        </div>
      </div>
    );
  }

  // ── Error state ──
  if (error || !session || !config) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-[9999]">
        <div className="text-center max-w-sm px-6">
          <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
            </svg>
          </div>
          <p className="text-sm font-medium text-gray-900 mb-2">{error || "Something went wrong"}</p>
          <button
            onClick={() => router.push("/assignments")}
            className="text-sm font-medium px-5 py-2.5 rounded-lg bg-gray-900 text-white mt-4"
          >
            Back to Assignments
          </button>
        </div>
      </div>
    );
  }

  // ── Submitted state ──
  if (submitted) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-[9999]">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center max-w-sm px-6"
        >
          <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-lg font-bold text-gray-900 mb-2">
            {showTimeUp ? "Time's up! Exam submitted." : "Exam Submitted"}
          </h2>
          {showResultsAfter && submittedScore !== null ? (
            <p className="text-sm text-gray-600 mb-4">
              Your score: <span className="font-bold text-gray-900">{submittedScore}%</span>
            </p>
          ) : (
            <p className="text-sm text-gray-600 mb-4">
              Your exam has been submitted. Your teacher will release results.
            </p>
          )}
          <button
            onClick={() => router.push("/assignments")}
            className="text-sm font-medium px-5 py-2.5 rounded-lg bg-gray-900 text-white"
          >
            Back to Assignments
          </button>
        </motion.div>
      </div>
    );
  }

  // ── Active Exam UI ──
  const currentQuestion = orderedQuestions[currentIndex];
  if (!currentQuestion) return null;

  const answeredCount = answers.size;
  const isTimeWarning = timeLeft <= 300; // 5 minutes
  const isTimeCritical = timeLeft <= 120; // 2 minutes

  // Get potentially shuffled options
  const optionOrder = optionMaps.get(currentQuestion.id) || currentQuestion.options.map((_, i) => i);

  return (
    <div className="fixed inset-0 bg-white z-[9999] flex flex-col overflow-hidden">
      {/* ── Top Bar ── */}
      <div
        className="flex flex-wrap items-center justify-between gap-2 px-3 sm:px-6 py-3 flex-shrink-0"
        style={{ borderBottom: "1px solid #e5e7eb" }}
      >
        <div className="flex items-center gap-2 sm:gap-4 min-w-0">
          <h1 className="text-xs sm:text-sm font-bold text-gray-900 truncate max-w-[120px] sm:max-w-[200px]">{examTitle}</h1>
          <span className="text-xs font-medium text-gray-500 shrink-0">
            Q {currentIndex + 1}/{orderedQuestions.length}
          </span>
        </div>

        {/* Timer */}
        <div
          className="flex items-center gap-2 px-2 sm:px-3 py-1.5 rounded-lg"
          style={{
            background: isTimeCritical ? "rgba(239,68,68,0.08)" : isTimeWarning ? "rgba(245,158,11,0.08)" : "#f9fafb",
            border: isTimeCritical ? "1px solid rgba(239,68,68,0.2)" : "1px solid #e5e7eb",
          }}
        >
          <svg
            className="w-4 h-4"
            style={{ color: isTimeCritical ? "#ef4444" : isTimeWarning ? "#f59e0b" : "#6b7280" }}
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span
            className="text-sm font-bold tabular-nums"
            style={{ color: isTimeCritical ? "#ef4444" : isTimeWarning ? "#f59e0b" : "#1f2937" }}
          >
            {formatTime(timeLeft)}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-500 hidden sm:inline">
            {answeredCount}/{orderedQuestions.length} answered
          </span>
          <button
            onClick={() => setShowConfirm(true)}
            className="text-xs font-medium px-3 py-1.5 rounded-lg bg-gray-900 text-white hover:bg-gray-800 transition-colors"
          >
            Submit Exam
          </button>
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-2xl mx-auto px-3 sm:px-6 py-6 sm:py-8">
          {/* Question grid */}
          <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-6">
            {orderedQuestions.map((q, i) => {
              const isAnswered = answers.has(q.id);
              const isFlagged = flagged.has(q.id);
              const isCurrent = i === currentIndex;

              return (
                <button
                  key={q.id}
                  onClick={() => setCurrentIndex(i)}
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-md text-[10px] sm:text-xs font-medium transition-all relative"
                  style={{
                    background: isCurrent
                      ? "#1f2937"
                      : isAnswered
                        ? "rgba(59, 130, 246, 0.1)"
                        : "#f9fafb",
                    color: isCurrent
                      ? "white"
                      : isAnswered
                        ? "#3b82f6"
                        : "#9ca3af",
                    border: isCurrent
                      ? "none"
                      : isAnswered
                        ? "1px solid rgba(59, 130, 246, 0.2)"
                        : "1px solid #e5e7eb",
                  }}
                >
                  {i + 1}
                  {isFlagged && (
                    <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-amber-400" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Question card */}
          <div
            className="rounded-xl overflow-hidden"
            style={{ border: "1px solid #e5e7eb" }}
          >
            <div
              className="px-5 py-3 flex items-center justify-between"
              style={{ borderBottom: "1px solid #f3f4f6", background: "#fafafa" }}
            >
              <p className="text-[11px] font-medium text-gray-400">
                Question {currentIndex + 1} of {orderedQuestions.length}
              </p>
              <button
                onClick={() => toggleFlag(currentQuestion.id)}
                className="flex items-center gap-1 text-[11px] font-medium px-2 py-1 rounded transition-colors"
                style={{
                  color: flagged.has(currentQuestion.id) ? "#f59e0b" : "#9ca3af",
                  background: flagged.has(currentQuestion.id) ? "rgba(245,158,11,0.08)" : "transparent",
                }}
              >
                <svg className="w-3 h-3" fill={flagged.has(currentQuestion.id) ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
                </svg>
                {flagged.has(currentQuestion.id) ? "Flagged" : "Flag for Review"}
              </button>
            </div>

            <div className="p-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.15 }}
                >
                  <h3 className="text-[15px] font-medium leading-snug mb-5 text-gray-900">
                    {currentQuestion.question}
                  </h3>

                  <div className="space-y-2">
                    {optionOrder.map((originalIndex) => {
                      const option = currentQuestion.options[originalIndex];
                      const isSelected = answers.get(currentQuestion.id) === originalIndex;
                      const displayLetter = String.fromCharCode(65 + optionOrder.indexOf(originalIndex));

                      return (
                        <button
                          key={originalIndex}
                          onClick={() => selectAnswer(currentQuestion.id, originalIndex)}
                          className="w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all"
                          style={{
                            background: isSelected ? "rgba(59, 130, 246, 0.06)" : "white",
                            border: isSelected ? "1.5px solid #3b82f6" : "1px solid #e5e7eb",
                            color: isSelected ? "#3b82f6" : "#374151",
                          }}
                        >
                          <span className="flex items-center gap-3">
                            <span
                              className="w-5 h-5 rounded flex items-center justify-center text-[10px] font-bold flex-shrink-0"
                              style={{
                                background: isSelected ? "#3b82f6" : "#f3f4f6",
                                color: isSelected ? "white" : "#9ca3af",
                              }}
                            >
                              {displayLetter}
                            </span>
                            <span className="flex-1">{option}</span>
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-6">
            <button
              onClick={() => setCurrentIndex((i) => Math.max(0, i - 1))}
              disabled={currentIndex === 0}
              className="text-sm font-medium px-4 py-2.5 rounded-lg transition-all disabled:opacity-30"
              style={{ border: "1px solid #e5e7eb", color: "#6b7280" }}
            >
              Previous
            </button>

            {currentIndex < orderedQuestions.length - 1 ? (
              <button
                onClick={() => setCurrentIndex((i) => Math.min(orderedQuestions.length - 1, i + 1))}
                className="text-sm font-medium px-4 py-2.5 rounded-lg transition-all bg-gray-900 text-white hover:bg-gray-800"
              >
                Next
              </button>
            ) : (
              <button
                onClick={() => setShowConfirm(true)}
                className="text-sm font-medium px-4 py-2.5 rounded-lg transition-all bg-gray-900 text-white hover:bg-gray-800"
              >
                Review & Submit
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ── Confirmation Modal ── */}
      <AnimatePresence>
        {showConfirm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10000] flex items-center justify-center p-6"
            style={{ background: "rgba(0,0,0,0.5)" }}
            onClick={() => setShowConfirm(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-xl p-6 max-w-sm w-full shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-base font-bold text-gray-900 mb-2">Submit Exam?</h3>
              <p className="text-sm text-gray-600 mb-1">
                You answered {answeredCount} of {orderedQuestions.length} questions.
              </p>
              {answeredCount < orderedQuestions.length && (
                <p className="text-sm text-amber-600 font-medium mb-1">
                  {orderedQuestions.length - answeredCount} unanswered question
                  {orderedQuestions.length - answeredCount !== 1 ? "s" : ""} will be marked incorrect.
                </p>
              )}
              {flagged.size > 0 && (
                <p className="text-sm text-amber-600 font-medium mb-1">
                  {flagged.size} question{flagged.size !== 1 ? "s" : ""} flagged for review.
                </p>
              )}
              <p className="text-xs text-gray-400 mt-2">
                Time remaining: {formatTime(timeLeft)}
              </p>
              <div className="flex gap-3 mt-5">
                <button
                  onClick={() => setShowConfirm(false)}
                  className="flex-1 text-sm font-medium py-2.5 rounded-lg transition-all"
                  style={{ border: "1px solid #e5e7eb", color: "#6b7280" }}
                >
                  Go Back
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={submitting}
                  className="flex-1 text-sm font-medium py-2.5 rounded-lg transition-all bg-gray-900 text-white hover:bg-gray-800 disabled:opacity-50"
                >
                  {submitting ? "Submitting..." : "Confirm Submit"}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Tab Switch Warning ── */}
      <AnimatePresence>
        {showTabWarning && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-4 left-1/2 -translate-x-1/2 z-[10001] bg-red-600 text-white px-6 py-3 rounded-xl shadow-lg max-w-md"
          >
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
              <div>
                <p className="text-sm font-semibold">You left the exam window</p>
                <p className="text-xs opacity-90">
                  Your teacher has been notified. Tab switches: {tabSwitches}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Fullscreen Warning ── */}
      <AnimatePresence>
        {showFullscreenWarning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10001] flex items-center justify-center bg-black/70"
          >
            <div className="bg-white rounded-xl p-8 max-w-sm text-center shadow-xl">
              <svg className="w-12 h-12 text-amber-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
              <h3 className="text-base font-bold text-gray-900 mb-2">Fullscreen Required</h3>
              <p className="text-sm text-gray-600">
                This exam requires fullscreen mode. Returning to fullscreen...
              </p>
              <p className="text-xs text-red-500 font-medium mt-2">
                Fullscreen exits: {fullscreenExits}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── DevTools Warning (persistent) ── */}
      <AnimatePresence>
        {showDevToolsWarning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10001] flex items-center justify-center bg-black/80"
          >
            <div className="bg-white rounded-xl p-8 max-w-sm text-center shadow-xl">
              <svg className="w-12 h-12 text-red-600 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
              <h3 className="text-base font-bold text-red-700 mb-2">Developer Tools Detected</h3>
              <p className="text-sm text-gray-600">
                Close Developer Tools immediately. This violation has been recorded and your teacher has been notified.
              </p>
              <p className="text-xs text-red-500 font-medium mt-2">
                Violations: {fullscreenExits}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Time's Up Overlay ── */}
      <AnimatePresence>
        {showTimeUp && !submitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10001] flex items-center justify-center bg-black/70"
          >
            <div className="bg-white rounded-xl p-8 max-w-sm text-center shadow-xl">
              <svg className="w-12 h-12 text-red-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-base font-bold text-gray-900 mb-2">Time is Up!</h3>
              <p className="text-sm text-gray-600">
                Your exam is being submitted automatically...
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
