"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/layout/ScrollReveal";
import AnimatedCounter from "@/components/home/AnimatedCounter";
import FeatureCard from "@/components/home/FeatureCard";
import HeroGraph from "@/components/home/HeroGraph";
import TypingEffect from "@/components/home/TypingEffect";
import { microCourse, macroCourse } from "@/data/courses";
import EmailCapture from "@/components/home/EmailCapture";

/* ─── Stagger animation helpers ─── */
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

/* ─── Feature icons ─── */
function ChartIcon() {
  return (
    <svg width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  );
}

function QuizIcon() {
  return (
    <svg width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 11l3 3L22 4" />
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
    </svg>
  );
}

function ProgressIcon() {
  return (
    <svg width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  );
}

function FlashcardIcon() {
  return (
    <svg width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8" />
      <path d="M12 17v4" />
    </svg>
  );
}

/* ─── Arrow icon for links ─── */
function ArrowRight({ className = "" }: { className?: string }) {
  return (
    <svg className={`w-4 h-4 ${className}`} viewBox="0 0 16 16" fill="currentColor">
      <path fillRule="evenodd" d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8z" />
    </svg>
  );
}


export default function HomePage() {
  const microModulePreview = microCourse.modules.slice(0, 4);
  const macroModulePreview = macroCourse.modules.slice(0, 4);
  const totalModules = microCourse.modules.length + macroCourse.modules.length;

  return (
    <>
      {/* ══════════════════════════════════════════════════
          SECTION 1 — HERO
          ══════════════════════════════════════════════════ */}
      <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-hero-animated" />
        <div className="absolute inset-0 bg-dot-pattern opacity-30" />

        <div className="relative max-w-6xl mx-auto px-5 sm:px-6 w-full pt-28 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text column */}
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="show"
              className="max-w-xl"
            >
              <motion.h1
                variants={fadeUp}
                className="text-[2.75rem] sm:text-[3.5rem] lg:text-[4rem] font-bold leading-[1.04] tracking-tight mb-5"
              >
                Master{" "}
                <span className="text-gradient">AP Economics</span>
                <br />
                <span className="text-[0.6em] font-semibold" style={{ color: "var(--color-ink-muted)" }}>
                  by understanding{" "}
                  <TypingEffect />
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="text-lg sm:text-xl leading-relaxed mb-8 max-w-md"
                style={{ color: "var(--color-ink-muted)" }}
              >
                Drag the curves. See what happens to surplus. Then test
                yourself with real AP-style questions.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="flex flex-wrap items-center gap-3"
              >
                <Link
                  href="/micro/basic-concepts"
                  className="btn-primary px-7 py-3.5 text-base"
                >
                  Start Learning
                  <ArrowRight className="inline ml-2 -mt-0.5" />
                </Link>
                <a
                  href="#courses"
                  className="btn-secondary px-6 py-3.5 text-base"
                >
                  Browse Modules
                </a>
              </motion.div>
            </motion.div>

            {/* Graph column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="w-full max-w-[420px]">
                <HeroGraph />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 2 — SOCIAL PROOF / STATS BAR
          ══════════════════════════════════════════════════ */}
      <section style={{ background: "var(--color-surface-raised)", borderTop: "1px solid var(--color-border-subtle)", borderBottom: "1px solid var(--color-border-subtle)" }}>
        <div className="max-w-4xl mx-auto px-5 sm:px-6 py-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-2xl sm:text-3xl font-bold" style={{ color: "var(--color-ink)" }}>
                <AnimatedCounter target={totalModules} />
              </p>
              <p className="text-sm mt-1" style={{ color: "var(--color-ink-muted)" }}>
                modules
              </p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold" style={{ color: "var(--color-ink)" }}>
                <AnimatedCounter target={350} suffix="+" />
              </p>
              <p className="text-sm mt-1" style={{ color: "var(--color-ink-muted)" }}>
                questions
              </p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold" style={{ color: "var(--color-ink)" }}>
                <AnimatedCounter target={150} suffix="+" />
              </p>
              <p className="text-sm mt-1" style={{ color: "var(--color-ink-muted)" }}>
                flashcards
              </p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold" style={{ color: "var(--color-ink)" }}>
                <AnimatedCounter target={15} />
              </p>
              <p className="text-sm mt-1" style={{ color: "var(--color-ink-muted)" }}>
                graphs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 3 — FEATURE SHOWCASE
          ══════════════════════════════════════════════════ */}
      <section className="py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4" style={{ color: "var(--color-ink)" }}>
                Built around how AP Econ actually works
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--color-ink-muted)" }}>
                The tools AP Econ students actually use before the test.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
            <FeatureCard
              icon={<ChartIcon />}
              title="Interactive Graphs"
              description="Drag the demand curve and watch surplus change. 15 graphs across micro and macro topics."
              delay={0}
            />
            <FeatureCard
              icon={<QuizIcon />}
              title="AP-Style Quizzes"
              description="350+ questions modeled on actual AP exam format. Every answer has a full explanation."
              delay={0.08}
            />
            <FeatureCard
              icon={<FlashcardIcon />}
              title="Flashcard Decks"
              description="150+ cards covering key terms and concepts. Sorted by module so you can target weak spots."
              delay={0.16}
            />
            <FeatureCard
              icon={<ProgressIcon />}
              title="Track Progress"
              description="Quiz scores, study streaks, and module completion — all in one dashboard with an exam countdown."
              delay={0.24}
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 4 — COURSE PREVIEW CARDS
          ══════════════════════════════════════════════════ */}
      <section id="courses" className="py-24 sm:py-32 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4" style={{ color: "var(--color-ink)" }}>
                AP Micro &amp; AP Macro, start to finish
              </h2>
              <p className="text-lg max-w-xl mx-auto" style={{ color: "var(--color-ink-muted)" }}>
                {totalModules} modules covering every unit on both exams.
                Pick a topic and go.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Microeconomics card */}
            <ScrollReveal delay={0} from="left">
              <Link href="/micro/basic-concepts" className="block group">
                <div
                  className="relative rounded-2xl p-8
                             transition-all duration-300 hover:-translate-y-1
                             hover:shadow-[0_8px_30px_-4px_rgba(59,130,246,0.15)]
                             overflow-hidden h-full"
                  style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                      <span className="text-xl font-bold text-blue-600">&mu;</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold" style={{ color: "var(--color-ink)" }}>
                        AP Microeconomics
                      </h3>
                      <p className="text-sm mt-0.5" style={{ color: "var(--color-ink-muted)" }}>
                        {microCourse.modules.length} modules
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-2.5 mb-6">
                    {microModulePreview.map((mod) => (
                      <li key={mod.id} className="flex items-center gap-2.5 text-sm" style={{ color: "var(--color-ink-light)" }}>
                        <div className="w-1 h-1 rounded-full bg-blue-500 shrink-0" />
                        {mod.title}
                      </li>
                    ))}
                    <li className="text-sm pl-3.5" style={{ color: "var(--color-ink-faint)" }}>
                      + {microCourse.modules.length - 4} more modules
                    </li>
                  </ul>

                  <span className="inline-flex items-center text-sm font-semibold text-blue-600 group-hover:text-blue-700 transition-colors">
                    Explore Micro
                    <ArrowRight className="ml-1.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </Link>
            </ScrollReveal>

            {/* Macroeconomics card */}
            <ScrollReveal delay={0.1} from="right">
              <Link href="/macro/basic-macro-concepts" className="block group">
                <div
                  className="relative rounded-2xl p-8
                             transition-all duration-300 hover:-translate-y-1
                             hover:shadow-[0_8px_30px_-4px_rgba(139,92,246,0.15)]
                             overflow-hidden h-full"
                  style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-violet-50 flex items-center justify-center shrink-0">
                      <span className="text-xl font-bold text-violet-600">&Sigma;</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold" style={{ color: "var(--color-ink)" }}>
                        AP Macroeconomics
                      </h3>
                      <p className="text-sm mt-0.5" style={{ color: "var(--color-ink-muted)" }}>
                        {macroCourse.modules.length} modules
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-2.5 mb-6">
                    {macroModulePreview.map((mod) => (
                      <li key={mod.id} className="flex items-center gap-2.5 text-sm" style={{ color: "var(--color-ink-light)" }}>
                        <div className="w-1 h-1 rounded-full bg-violet-500 shrink-0" />
                        {mod.title}
                      </li>
                    ))}
                    <li className="text-sm pl-3.5" style={{ color: "var(--color-ink-faint)" }}>
                      + {macroCourse.modules.length - 4} more modules
                    </li>
                  </ul>

                  <span className="inline-flex items-center text-sm font-semibold text-violet-600 group-hover:text-violet-700 transition-colors">
                    Explore Macro
                    <ArrowRight className="ml-1.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 4.5 — FOR TEACHERS CALLOUT
          ══════════════════════════════════════════════════ */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <ScrollReveal>
            <div
              className="rounded-2xl p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
              style={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
              }}
            >
              <div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: "var(--color-ink)" }}>
                  For Teachers
                </h3>
                <p className="text-sm leading-relaxed max-w-lg" style={{ color: "var(--color-ink-muted)" }}>
                  Used by AP teachers to demo concepts in class. Fullscreen graphs, assignable quizzes, student progress tracking.
                </p>
              </div>
              <Link
                href="/pricing"
                className="btn-secondary inline-flex items-center px-6 py-2.5 text-sm shrink-0"
              >
                View Pricing
                <ArrowRight className="ml-1.5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 4.75 — EMAIL CAPTURE
          ══════════════════════════════════════════════════ */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <ScrollReveal>
            <div
              className="rounded-2xl p-8 sm:p-10"
              style={{
                background: "var(--color-surface-raised)",
                border: "1px solid var(--color-border-subtle)",
              }}
            >
              <EmailCapture />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION — BUILT FOR AP ECONOMICS
          ══════════════════════════════════════════════════ */}
      <section className="py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4" style={{ color: "var(--color-ink)" }}>
                Built for AP Economics
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--color-ink-muted)" }}>
                Content aligned to the College Board AP curriculum for both Microeconomics and Macroeconomics.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            <ScrollReveal delay={0} from="left">
              <div
                className="rounded-2xl p-8 h-full"
                style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                  <span className="text-lg font-bold text-blue-600">&mu;</span>
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: "var(--color-ink)" }}>
                  AP Microeconomics
                </h3>
                <ul className="space-y-2 text-sm" style={{ color: "var(--color-ink-muted)" }}>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-blue-500 shrink-0" />
                    Supply &amp; Demand, Elasticity, Consumer Choice
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-blue-500 shrink-0" />
                    Market Structures: Perfect Competition to Monopoly
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-blue-500 shrink-0" />
                    Factor Markets, Externalities, Public Goods
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-blue-500 shrink-0" />
                    Interactive graphs for every major model
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1} from="right">
              <div
                className="rounded-2xl p-8 h-full"
                style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}
              >
                <div className="w-10 h-10 rounded-xl bg-violet-50 flex items-center justify-center mb-4">
                  <span className="text-lg font-bold text-violet-600">&Sigma;</span>
                </div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: "var(--color-ink)" }}>
                  AP Macroeconomics
                </h3>
                <ul className="space-y-2 text-sm" style={{ color: "var(--color-ink-muted)" }}>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-violet-500 shrink-0" />
                    GDP, Unemployment, Inflation, Business Cycle
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-violet-500 shrink-0" />
                    AD/AS Model, Fiscal &amp; Monetary Policy
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-violet-500 shrink-0" />
                    Loanable Funds, Money Market, Exchange Rates
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-violet-500 shrink-0" />
                    International Trade and Economic Growth
                  </li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION — HOW IT WORKS
          ══════════════════════════════════════════════════ */}
      <section className="py-24 sm:py-32" style={{ background: "var(--color-surface-raised)", borderTop: "1px solid var(--color-border-subtle)", borderBottom: "1px solid var(--color-border-subtle)" }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4" style={{ color: "var(--color-ink)" }}>
                How It Works
              </h2>
              <p className="text-lg max-w-xl mx-auto" style={{ color: "var(--color-ink-muted)" }}>
                Three steps to exam-ready confidence.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-3 gap-8">
            <ScrollReveal delay={0}>
              <div className="text-center">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
                  style={{ background: "rgba(59, 130, 246, 0.08)" }}
                >
                  <span className="text-xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-base font-semibold mb-2" style={{ color: "var(--color-ink)" }}>
                  Pick a Topic
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-ink-muted)" }}>
                  Choose from {totalModules} modules across AP Micro and AP Macro. Each one covers a specific unit from the AP curriculum.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="text-center">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
                  style={{ background: "rgba(139, 92, 246, 0.08)" }}
                >
                  <span className="text-xl font-bold text-violet-600">2</span>
                </div>
                <h3 className="text-base font-semibold mb-2" style={{ color: "var(--color-ink)" }}>
                  Learn by Doing
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-ink-muted)" }}>
                  Read the lesson, drag curves on interactive graphs, and review flashcards. Understanding beats memorization.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="text-center">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
                  style={{ background: "rgba(22, 163, 74, 0.08)" }}
                >
                  <span className="text-xl font-bold text-green-600">3</span>
                </div>
                <h3 className="text-base font-semibold mb-2" style={{ color: "var(--color-ink)" }}>
                  Test Yourself
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-ink-muted)" }}>
                  Take AP-style quizzes with detailed explanations. Track your scores on the dashboard and focus on weak areas.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION — FOR TEACHERS (EXPANDED)
          ══════════════════════════════════════════════════ */}
      <section className="py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4" style={{ color: "var(--color-ink)" }}>
                Powerful Classroom Tools
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--color-ink-muted)" }}>
                Everything AP Economics teachers need to run their classroom, assign work, and monitor student progress.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {[
              {
                title: "Classroom Management",
                description: "Create classrooms, invite students with join codes, and manage rosters in one place.",
                icon: (
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                  </svg>
                ),
              },
              {
                title: "Exam Lockdown",
                description: "Fullscreen lockdown mode with tab-switch detection and violation tracking for exam integrity.",
                icon: (
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                ),
              },
              {
                title: "Performance Analytics",
                description: "See class averages by module, identify at-risk students, and export reports to CSV.",
                icon: (
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                  </svg>
                ),
              },
              {
                title: "Custom Question Bank",
                description: "Create your own questions or use the built-in bank. Mix and match for tailored exams.",
                icon: (
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                  </svg>
                ),
              },
              {
                title: "Assignable Content",
                description: "Assign lessons, quizzes, and exams to specific classrooms with due dates and auto-grading.",
                icon: (
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                  </svg>
                ),
              },
              {
                title: "Real-Time Monitoring",
                description: "Watch students take exams live. See who is online, their progress, and flag suspicious activity.",
                icon: (
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
              },
            ].map((feature, i) => (
              <ScrollReveal key={feature.title} delay={i * 0.06}>
                <div
                  className="rounded-2xl p-6 h-full"
                  style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}
                >
                  <div className="mb-3" style={{ color: "var(--color-ink-muted)" }}>
                    {feature.icon}
                  </div>
                  <h3 className="text-sm font-semibold mb-1.5" style={{ color: "var(--color-ink)" }}>
                    {feature.title}
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--color-ink-muted)" }}>
                    {feature.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <div className="text-center mt-10">
              <Link
                href="/pricing"
                className="btn-secondary inline-flex items-center px-6 py-2.5 text-sm"
              >
                View Teacher Plans
                <ArrowRight className="ml-1.5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 5 — CTA
          ══════════════════════════════════════════════════ */}
      <section className="py-24 sm:py-32" style={{ background: "var(--color-surface-raised)" }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <ScrollReveal>
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4" style={{ color: "var(--color-ink)" }}>
                The exam is in May.
              </h2>
              <p className="text-lg max-w-lg mx-auto mb-8" style={{ color: "var(--color-ink-muted)" }}>
                Everything you&apos;d actually want open the night before the test.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  href="/signup"
                  className="btn-primary inline-flex items-center px-8 py-3.5 text-base"
                >
                  Create Account
                  <ArrowRight className="ml-2" />
                </Link>
                <Link
                  href="#courses"
                  className="btn-secondary inline-flex items-center px-8 py-3.5 text-base"
                >
                  Browse Modules
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 6 — FOOTER
          ══════════════════════════════════════════════════ */}
      <footer className="footer-dark">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-12">
            <div>
              <h4>Quick Links</h4>
              <ul className="space-y-2.5">
                <li><Link href="/micro/basic-concepts" className="text-sm">Microeconomics</Link></li>
                <li><Link href="/macro/basic-macro-concepts" className="text-sm">Macroeconomics</Link></li>
                <li><Link href="/micro/supply-and-demand" className="text-sm">Interactive Graphs</Link></li>
              </ul>
            </div>
            <div>
              <h4>Resources</h4>
              <ul className="space-y-2.5">
                <li><Link href="/dashboard" className="text-sm">Dashboard</Link></li>
                <li><Link href="/login" className="text-sm">Sign In</Link></li>
                <li><Link href="/signup" className="text-sm">Create Account</Link></li>
                <li><Link href="/blog" className="text-sm">Blog</Link></li>
                <li><Link href="/pricing" className="text-sm">Pricing</Link></li>
                <li><Link href="/pricing" className="text-sm">For Teachers</Link></li>
              </ul>
            </div>
            <div>
              <h4>Company</h4>
              <ul className="space-y-2.5">
                <li><Link href="/about" className="text-sm">About</Link></li>
                <li><Link href="/privacy" className="text-sm">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-sm">Terms of Service</Link></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 rounded flex items-center justify-center" style={{ background: "rgba(255,255,255,0.1)" }}>
                <svg width="14" height="14" viewBox="0 0 22 22" fill="none">
                  <path d="M3 5 L19 17" stroke="#60A5FA" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M3 17 L19 5" stroke="#F87171" strokeWidth="2.5" strokeLinecap="round" />
                  <circle cx="11" cy="11" r="2.5" fill="#34D399" />
                </svg>
              </div>
              <span className="text-sm opacity-60">Built for AP Economics students</span>
            </div>
            <p className="text-sm opacity-60">&copy; 2024-2026 Jude Wallis. All rights reserved. EconLearn&trade;</p>
          </div>
        </div>
      </footer>
    </>
  );
}
