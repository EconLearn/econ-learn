import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AP Economics Teacher Pricing - Classroom Tools",
  description: "Free for students, $3/student for classroom tools. Teacher dashboards, assignable quizzes, student progress tracking, and interactive graph demos.",
  alternates: { canonical: "https://econlearn.org/pricing" },
};

export default function PricingPage() {
  return (
    <div className="max-w-5xl mx-auto px-5 sm:px-6 py-20">
      <div className="text-center mb-14">
        <h1
          className="text-3xl sm:text-4xl font-bold tracking-tight mb-4"
          style={{ color: "var(--color-ink)" }}
        >
          Simple pricing for classrooms
        </h1>
        <p
          className="text-lg max-w-xl mx-auto"
          style={{ color: "var(--color-ink-muted)" }}
        >
          All content is accessible to everyone. Teacher tools add classroom management,
          assignments, and progress tracking on top.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {/* Student / Free */}
        <div
          className="rounded-2xl p-7"
          style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}
        >
          <p className="text-sm font-semibold uppercase tracking-wider mb-1" style={{ color: "var(--color-ink-faint)" }}>
            Student
          </p>
          <p className="text-3xl font-bold mb-1" style={{ color: "var(--color-ink)" }}>
            $0
          </p>
          <p className="text-sm mb-6" style={{ color: "var(--color-ink-muted)" }}>
            per student, forever
          </p>

          <ul className="space-y-3 mb-8">
            {[
              "24 interactive modules",
              "350+ practice questions",
              "144+ flashcards",
              "15 interactive graphs",
              "Progress tracking dashboard",
              "Join teacher classrooms",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "var(--color-ink-light)" }}>
                <svg className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </li>
            ))}
          </ul>

          <Link href="/signup" className="btn-secondary w-full py-3 text-center text-sm block">
            Get Started
          </Link>
        </div>

        {/* Classroom */}
        <div
          className="rounded-2xl p-7 relative"
          style={{
            background: "var(--color-surface)",
            border: "2px solid #3B82F6",
            boxShadow: "0 4px 24px -4px rgba(59, 130, 246, 0.15)",
          }}
        >
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-xs font-semibold bg-blue-600 text-white">
            Most Popular
          </div>

          <p className="text-sm font-semibold uppercase tracking-wider mb-1" style={{ color: "var(--color-ink-faint)" }}>
            Classroom
          </p>
          <p className="text-3xl font-bold mb-1" style={{ color: "var(--color-ink)" }}>
            $3<span className="text-lg font-medium" style={{ color: "var(--color-ink-muted)" }}>/student</span>
          </p>
          <p className="text-sm mb-6" style={{ color: "var(--color-ink-muted)" }}>
            per semester, up to 35 students
          </p>

          <ul className="space-y-3 mb-8">
            {[
              "Everything in Student, plus:",
              "Teacher dashboard",
              "Classroom join codes",
              "Assignable lessons and quizzes",
              "Student progress tracking",
              "Exportable reports (CSV)",
              "Fullscreen graph mode for demos",
            ].map((item, i) => (
              <li key={item} className="flex items-start gap-2 text-sm" style={{ color: i === 0 ? "var(--color-ink)" : "var(--color-ink-light)", fontWeight: i === 0 ? 600 : 400 }}>
                {i > 0 && (
                  <svg className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
                {item}
              </li>
            ))}
          </ul>

          <Link href="/teacher" className="btn-primary w-full py-3 text-center text-sm block">
            Start 30-Day Trial
          </Link>
        </div>

        {/* School */}
        <div
          className="rounded-2xl p-7"
          style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}
        >
          <p className="text-sm font-semibold uppercase tracking-wider mb-1" style={{ color: "var(--color-ink-faint)" }}>
            School
          </p>
          <p className="text-3xl font-bold mb-1" style={{ color: "var(--color-ink)" }}>
            $2<span className="text-lg font-medium" style={{ color: "var(--color-ink-muted)" }}>/student</span>
          </p>
          <p className="text-sm mb-6" style={{ color: "var(--color-ink-muted)" }}>
            per semester, 100+ students
          </p>

          <ul className="space-y-3 mb-8">
            {[
              "Everything in Classroom, plus:",
              "Multiple teacher accounts",
              "School admin dashboard",
              "Bulk student onboarding",
              "Priority support",
              "Custom branding (coming soon)",
            ].map((item, i) => (
              <li key={item} className="flex items-start gap-2 text-sm" style={{ color: i === 0 ? "var(--color-ink)" : "var(--color-ink-light)", fontWeight: i === 0 ? 600 : 400 }}>
                {i > 0 && (
                  <svg className="w-4 h-4 text-violet-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
                {item}
              </li>
            ))}
          </ul>

          <a
            href="mailto:hello@econlearn.org?subject=School%20Plan%20Inquiry"
            className="btn-secondary w-full py-3 text-center text-sm block"
          >
            Contact Us
          </a>
        </div>
      </div>

      <div className="text-center mt-12">
        <p className="text-sm" style={{ color: "var(--color-ink-muted)" }}>
          All plans include a 30-day free trial. No credit card required to start.
        </p>
      </div>
    </div>
  );
}
