"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/providers/AuthProvider";
import { createClient } from "@/lib/supabase/client";
import { motion, AnimatePresence } from "framer-motion";

/* ─── Step transition variants ─── */

const stepVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -80 : 80,
    opacity: 0,
    transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

/* ─── Step indicator ─── */

function StepIndicator({ current, total }: { current: number; total: number }) {
  return (
    <div className="flex items-center justify-center gap-2 mb-8">
      {Array.from({ length: total }, (_, i) => (
        <div key={i} className="flex items-center gap-2">
          <div
            className="flex items-center justify-center w-7 h-7 rounded-full text-xs font-semibold transition-all duration-300"
            style={{
              background: i + 1 <= current ? "var(--color-ink)" : "var(--color-surface-sunken)",
              color: i + 1 <= current ? "white" : "var(--color-ink-faint)",
              border: i + 1 === current ? "none" : "1px solid var(--color-border)",
            }}
          >
            {i + 1 < current ? (
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              i + 1
            )}
          </div>
          {i < total - 1 && (
            <div
              className="w-12 h-0.5 rounded-full transition-all duration-300"
              style={{
                background: i + 1 < current ? "var(--color-ink)" : "var(--color-border)",
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function TeacherOnboarding() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const supabase = createClient();

  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [displayName, setDisplayName] = useState("");

  // Step 2 state
  const [classroomName, setClassroomName] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [creating, setCreating] = useState(false);
  const [createError, setCreateError] = useState("");

  // Step 3 state
  const [joinCode, setJoinCode] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!user) return;
    (async () => {
      const { data: profile } = await supabase
        .from("profiles")
        .select("display_name")
        .eq("id", user.id)
        .single();
      setDisplayName(profile?.display_name || user.email?.split("@")[0] || "Teacher");
    })();
  }, [user, supabase]);

  const goToStep = (next: number) => {
    setDirection(next > step ? 1 : -1);
    setStep(next);
  };

  const handleCreateClassroom = async () => {
    if (!classroomName.trim()) {
      setCreateError("Please enter a classroom name.");
      return;
    }

    setCreating(true);
    setCreateError("");

    try {
      const res = await fetch("/api/classrooms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: classroomName.trim(),
          school_name: schoolName.trim() || undefined,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setCreateError(data.error || "Failed to create classroom. Please try again.");
        return;
      }

      setJoinCode(data.classroom.join_code);
      goToStep(3);
    } catch {
      setCreateError("Something went wrong. Please try again.");
    } finally {
      setCreating(false);
    }
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(joinCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  /* ─── Loading / auth guard ─── */
  if (loading) {
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center"
        style={{ background: "var(--color-surface-raised)" }}
      >
        <div className="w-6 h-6 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin" />
      </div>
    );
  }

  if (!user) {
    router.push("/login");
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-auto"
      style={{
        background: "linear-gradient(135deg, rgba(59,130,246,0.04) 0%, var(--color-surface-raised) 40%, rgba(139,92,246,0.03) 100%)",
      }}
    >
      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none bg-dot-pattern"
        aria-hidden="true"
      />

      <div className="relative w-full max-w-lg mx-4 py-8">
        {/* Step indicator */}
        <StepIndicator current={step} total={3} />

        {/* Card */}
        <div
          className="card-elevated overflow-hidden"
          style={{ minHeight: 360 }}
        >
          <AnimatePresence mode="wait" custom={direction}>
            {/* ═══ Step 1: Welcome ═══ */}
            {step === 1 && (
              <motion.div
                key="step-1"
                custom={direction}
                variants={stepVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="p-8 md:p-10"
              >
                <div className="text-center">
                  {/* Icon */}
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                    style={{ background: "rgba(59,130,246,0.08)" }}
                  >
                    <svg className="w-8 h-8" style={{ color: "#3B82F6" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                    </svg>
                  </div>

                  <h1
                    className="text-2xl md:text-[1.7rem] font-extrabold tracking-tight mb-3"
                    style={{ color: "var(--color-ink)" }}
                  >
                    Welcome to EconLearn, {displayName}!
                  </h1>

                  <p
                    className="text-sm leading-relaxed mb-8 max-w-sm mx-auto"
                    style={{ color: "var(--color-ink-muted)" }}
                  >
                    Let&apos;s set up your first classroom in under 60 seconds.
                    Your students will be learning economics in no time.
                  </p>

                  <button
                    onClick={() => goToStep(2)}
                    className="btn-primary py-3 px-8 text-sm"
                  >
                    Get Started
                  </button>
                </div>
              </motion.div>
            )}

            {/* ═══ Step 2: Create Classroom ═══ */}
            {step === 2 && (
              <motion.div
                key="step-2"
                custom={direction}
                variants={stepVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="p-8 md:p-10"
              >
                <h2
                  className="text-xl font-bold tracking-tight mb-1"
                  style={{ color: "var(--color-ink)" }}
                >
                  Create Your First Classroom
                </h2>
                <p
                  className="text-sm mb-6"
                  style={{ color: "var(--color-ink-muted)" }}
                >
                  Give your classroom a name so students can find it.
                </p>

                <div className="space-y-4">
                  <div>
                    <label className="auth-label" htmlFor="classroom-name">
                      Classroom Name
                    </label>
                    <input
                      id="classroom-name"
                      type="text"
                      className="auth-input"
                      placeholder='e.g. "AP Micro Period 3"'
                      value={classroomName}
                      onChange={(e) => {
                        setClassroomName(e.target.value);
                        if (createError) setCreateError("");
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") handleCreateClassroom();
                      }}
                      autoFocus
                    />
                  </div>

                  <div>
                    <label className="auth-label" htmlFor="school-name">
                      School Name <span style={{ color: "var(--color-ink-faint)" }}>(optional)</span>
                    </label>
                    <input
                      id="school-name"
                      type="text"
                      className="auth-input"
                      placeholder="e.g. Lincoln High School"
                      value={schoolName}
                      onChange={(e) => setSchoolName(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") handleCreateClassroom();
                      }}
                    />
                  </div>

                  {createError && (
                    <div className="auth-error">{createError}</div>
                  )}

                  <button
                    onClick={handleCreateClassroom}
                    disabled={creating}
                    className="btn-primary w-full py-3 text-sm flex items-center justify-center gap-2 mt-2"
                    style={{ opacity: creating ? 0.7 : 1 }}
                  >
                    {creating ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Creating...
                      </>
                    ) : (
                      "Create Classroom"
                    )}
                  </button>
                </div>
              </motion.div>
            )}

            {/* ═══ Step 3: Share Join Code ═══ */}
            {step === 3 && (
              <motion.div
                key="step-3"
                custom={direction}
                variants={stepVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="p-8 md:p-10"
              >
                <div className="text-center">
                  {/* Success icon */}
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
                    style={{ background: "rgba(22,163,74,0.08)" }}
                  >
                    <svg className="w-7 h-7" style={{ color: "#16A34A" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>

                  <h2
                    className="text-xl font-bold tracking-tight mb-1"
                    style={{ color: "var(--color-ink)" }}
                  >
                    Share Your Join Code
                  </h2>
                  <p
                    className="text-sm mb-6"
                    style={{ color: "var(--color-ink-muted)" }}
                  >
                    Your classroom is ready! Share this code with your students.
                  </p>

                  {/* Join code display */}
                  <div
                    className="rounded-xl p-6 mb-4"
                    style={{
                      background: "var(--color-surface-sunken)",
                      border: "1px solid var(--color-border)",
                    }}
                  >
                    <p
                      className="text-xs font-medium uppercase tracking-wider mb-2"
                      style={{ color: "var(--color-ink-faint)" }}
                    >
                      Join Code
                    </p>
                    <p
                      className="text-3xl md:text-4xl font-mono font-bold tracking-[0.2em]"
                      style={{ color: "var(--color-ink)" }}
                    >
                      {joinCode}
                    </p>
                  </div>

                  {/* Copy button */}
                  <button
                    onClick={handleCopyCode}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 mb-6"
                    style={{
                      background: copied ? "rgba(22,163,74,0.08)" : "rgba(59,130,246,0.08)",
                      color: copied ? "#16A34A" : "#3B82F6",
                      border: `1px solid ${copied ? "rgba(22,163,74,0.2)" : "rgba(59,130,246,0.15)"}`,
                    }}
                  >
                    {copied ? (
                      <>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        Copied!
                      </>
                    ) : (
                      <>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        Copy Code
                      </>
                    )}
                  </button>

                  {/* Instructions */}
                  <p
                    className="text-xs leading-relaxed mb-8"
                    style={{ color: "var(--color-ink-faint)" }}
                  >
                    Share this code with your students. They can join at{" "}
                    <span className="font-medium" style={{ color: "var(--color-ink-muted)" }}>
                      econlearn.org/join
                    </span>
                  </p>

                  <button
                    onClick={() => router.push("/teacher")}
                    className="btn-primary py-3 px-8 text-sm"
                  >
                    Continue to Dashboard
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
