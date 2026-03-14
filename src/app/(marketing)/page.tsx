"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/layout/ScrollReveal";
import AnimatedCounter from "@/components/home/AnimatedCounter";
import FeatureCard from "@/components/home/FeatureCard";
import HeroGraph from "@/components/home/HeroGraph";
import TypingEffect from "@/components/home/TypingEffect";
import { microCourse, macroCourse } from "@/data/courses";

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

/* ─── Testimonial data ─── */
const testimonials = [
  {
    quote: "The interactive graphs made supply and demand click in a way my textbook never could.",
    name: "Sarah K.",
    detail: "AP Micro — Score: 5",
    emoji: "📈",
  },
  {
    quote: "I went from struggling with fiscal policy to acing the FRQs. The practice questions are spot-on.",
    name: "Marcus T.",
    detail: "AP Macro — Score: 5",
    emoji: "🎯",
  },
  {
    quote: "Flashcards + timed quizzes made my study sessions way more efficient. Highly recommend.",
    name: "Priya R.",
    detail: "AP Micro & Macro — Score: 5/5",
    emoji: "⚡",
  },
];

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
              <motion.div
                variants={fadeUp}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6"
                style={{ background: "rgba(59, 130, 246, 0.08)", border: "1px solid rgba(59, 130, 246, 0.12)" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span className="text-xs font-medium" style={{ color: "var(--color-ink-muted)" }}>
                  Free forever — no credit card needed
                </span>
              </motion.div>

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
                Interactive graphs, {totalModules} modules, flashcards, and AP-style
                quizzes — everything you need to score a 5.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="flex flex-wrap items-center gap-3"
              >
                <Link
                  href="/micro/basic-concepts"
                  className="btn-primary px-7 py-3.5 text-base"
                >
                  Start Learning Free
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

            {/* Graph column with floating badges */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="w-full max-w-[400px] relative">
                <HeroGraph />

                {/* Floating glass badges */}
                <motion.div
                  className="glass-badge absolute -top-4 -right-4 rounded-xl px-3.5 py-2 shadow-card animate-float"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                >
                  <p className="text-xs font-semibold" style={{ color: "var(--color-ink)" }}>
                    {totalModules} Modules
                  </p>
                </motion.div>

                <motion.div
                  className="glass-badge absolute -bottom-4 -left-4 rounded-xl px-3.5 py-2 shadow-card animate-float-delayed"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                >
                  <p className="text-xs font-semibold" style={{ color: "var(--color-ink)" }}>
                    144+ Flashcards
                  </p>
                </motion.div>

                <motion.div
                  className="glass-badge absolute top-1/2 -translate-y-1/2 -right-6 sm:-right-10 rounded-xl px-3.5 py-2 shadow-card animate-float-slow"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1, duration: 0.5 }}
                >
                  <p className="text-xs font-semibold text-emerald-700">
                    100% Free
                  </p>
                </motion.div>
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
          <div className="grid grid-cols-4 gap-6 text-center">
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
                <AnimatedCounter target={144} suffix="+" />
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
                Everything you need to ace the AP exam
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--color-ink-muted)" }}>
                No more passive reading. Learn economics the way it was meant to
                be learned — by doing.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
            <FeatureCard
              icon={<ChartIcon />}
              title="Interactive Graphs"
              description="Drag curves, watch equilibrium shift in real time. Build the intuition textbooks can't give you."
              delay={0}
            />
            <FeatureCard
              icon={<QuizIcon />}
              title="AP-Style Quizzes"
              description="350+ questions with detailed explanations. Timed mode to simulate exam pressure."
              delay={0.08}
            />
            <FeatureCard
              icon={<FlashcardIcon />}
              title="Flashcard Decks"
              description="144+ flashcards across every module. Flip, sort, and master key concepts fast."
              delay={0.16}
            />
            <FeatureCard
              icon={<ProgressIcon />}
              title="Track Progress"
              description="Achievements, study streaks, quiz scores, and an AP exam countdown to keep you on track."
              delay={0.24}
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 3.5 — TESTIMONIALS
          ══════════════════════════════════════════════════ */}
      <section className="py-20 sm:py-28" style={{ background: "var(--color-surface-raised)" }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3" style={{ color: "var(--color-ink)" }}>
                Students love learning here
              </h2>
              <p className="text-lg" style={{ color: "var(--color-ink-muted)" }}>
                Real results from real AP students.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="testimonial-card h-full flex flex-col">
                  <div className="text-2xl mb-3">{t.emoji}</div>
                  <p className="text-[15px] leading-relaxed flex-1 mb-4" style={{ color: "var(--color-ink-light)" }}>
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: "var(--color-ink)" }}>{t.name}</p>
                    <p className="text-xs" style={{ color: "var(--color-ink-faint)" }}>{t.detail}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
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
                Two courses. {totalModules} modules. Zero cost.
              </h2>
              <p className="text-lg max-w-xl mx-auto" style={{ color: "var(--color-ink-muted)" }}>
                Everything for the AP Microeconomics and AP Macroeconomics
                exams, completely free.
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
          SECTION 5 — CTA
          ══════════════════════════════════════════════════ */}
      <section className="py-24 sm:py-32" style={{ background: "var(--color-surface-raised)" }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <ScrollReveal>
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4" style={{ color: "var(--color-ink)" }}>
                Ready to earn your 5?
              </h2>
              <p className="text-lg max-w-lg mx-auto mb-8" style={{ color: "var(--color-ink-muted)" }}>
                Join thousands of AP students studying smarter with
                interactive lessons and real-time feedback.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  href="/signup"
                  className="btn-primary inline-flex items-center px-8 py-3.5 text-base"
                >
                  Create Free Account
                  <ArrowRight className="ml-2" />
                </Link>
                <Link
                  href="/micro/basic-concepts"
                  className="btn-secondary inline-flex items-center px-8 py-3.5 text-base"
                >
                  Try Without Account
                </Link>
              </div>
              <p className="text-sm mt-5" style={{ color: "var(--color-ink-faint)" }}>
                No account required to browse. Jump in and start learning.
              </p>
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
              </ul>
            </div>
            <div>
              <h4>About</h4>
              <p className="text-sm leading-relaxed max-w-[260px]">
                EconLearn is a free, interactive platform designed to help
                students master AP Microeconomics and AP Macroeconomics
                through hands-on learning.
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 rounded bg-white/10 flex items-center justify-center">
                <span className="text-white font-bold text-[10px]">E</span>
              </div>
              <span className="text-sm opacity-60">Built for AP Economics students</span>
            </div>
            <p className="text-sm opacity-60">&copy; {new Date().getFullYear()} EconLearn</p>
          </div>
        </div>
      </footer>
    </>
  );
}
