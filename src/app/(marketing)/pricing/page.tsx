import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing - AP Economics for Students, Teachers & Districts",
  description:
    "Free for students. $3/student for classrooms. $2/student for schools. Custom district pricing. Teacher dashboards, lockdown exams, interactive graphs, and analytics.",
  alternates: { canonical: "https://www.econlearn.org/pricing" },
};

const checkIcon = (color: string) => (
  <svg className={`w-4 h-4 ${color} mt-0.5 shrink-0`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const comparisonFeatures = [
  { feature: "Interactive modules (24)", student: true, classroom: true, school: true, district: true },
  { feature: "Practice questions (350+)", student: true, classroom: true, school: true, district: true },
  { feature: "Flashcards (150+)", student: true, classroom: true, school: true, district: true },
  { feature: "Interactive graphs (15)", student: true, classroom: true, school: true, district: true },
  { feature: "Progress dashboard", student: true, classroom: true, school: true, district: true },
  { feature: "Teacher dashboard", student: false, classroom: true, school: true, district: true },
  { feature: "Classroom join codes", student: false, classroom: true, school: true, district: true },
  { feature: "Assignable lessons & quizzes", student: false, classroom: true, school: true, district: true },
  { feature: "Lockdown exam mode", student: false, classroom: true, school: true, district: true },
  { feature: "Violation tracking", student: false, classroom: true, school: true, district: true },
  { feature: "CSV grade export", student: false, classroom: true, school: true, district: true },
  { feature: "Multiple teacher accounts", student: false, classroom: false, school: true, district: true },
  { feature: "Up to 150 students", student: false, classroom: false, school: true, district: true },
  { feature: "Priority support", student: false, classroom: false, school: true, district: true },
  { feature: "Cross-school analytics", student: false, classroom: false, school: false, district: true },
  { feature: "Dedicated onboarding", student: false, classroom: false, school: false, district: true },
  { feature: "PO / invoice billing", student: false, classroom: false, school: false, district: true },
  { feature: "FERPA documentation", student: false, classroom: false, school: false, district: true },
];

const faqs = [
  {
    q: "Is there a free trial?",
    a: "Yes. All teacher plans include a 30-day free trial with full access. No credit card required to start.",
  },
  {
    q: "How does billing work?",
    a: "Classroom and School plans are billed per semester via credit card. District plans are billed annually via purchase order or invoice.",
  },
  {
    q: "Can I switch plans?",
    a: "Yes. You can upgrade or downgrade at any time. If you upgrade mid-semester, you only pay the difference.",
  },
  {
    q: "Is student data private?",
    a: "Absolutely. We never sell student data or show ads. Student information is only visible to their teachers and school administrators.",
  },
  {
    q: "What if I need more than 150 students?",
    a: "The District plan supports unlimited students across your district. Contact us for volume pricing.",
  },
];

export default function PricingPage() {
  return (
    <div className="max-w-6xl mx-auto px-5 sm:px-6 py-20">
      <div className="text-center mb-14">
        <h1
          className="text-3xl sm:text-4xl font-bold tracking-tight mb-4"
          style={{ color: "var(--color-ink)" }}
        >
          Simple, transparent pricing
        </h1>
        <p
          className="text-lg max-w-xl mx-auto"
          style={{ color: "var(--color-ink-muted)" }}
        >
          Free for every student. Teacher tools add classroom management,
          assignments, and analytics on top.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto mb-20">
        {/* Student / Free */}
        <div
          className="rounded-2xl p-6"
          style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}
        >
          <p className="text-sm font-semibold uppercase tracking-wider mb-1" style={{ color: "var(--color-ink-faint)" }}>
            Student
          </p>
          <p className="text-3xl font-bold mb-1" style={{ color: "var(--color-ink)" }}>
            $0
          </p>
          <p className="text-sm mb-5" style={{ color: "var(--color-ink-muted)" }}>
            per student, forever
          </p>
          <ul className="space-y-2.5 mb-6">
            {[
              "24 interactive modules",
              "350+ practice questions",
              "150+ flashcards",
              "15 interactive graphs",
              "Progress tracking dashboard",
              "Join teacher classrooms",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "var(--color-ink-light)" }}>
                {checkIcon("text-emerald-500")}
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
          className="rounded-2xl p-6 relative"
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
          <p className="text-sm mb-5" style={{ color: "var(--color-ink-muted)" }}>
            per semester, up to 35 students
          </p>
          <ul className="space-y-2.5 mb-6">
            {[
              "Everything in Student, plus:",
              "Teacher dashboard",
              "Classroom join codes",
              "Assignable lessons & quizzes",
              "Lockdown exam mode",
              "Student progress tracking",
              "CSV grade export",
            ].map((item, i) => (
              <li key={item} className="flex items-start gap-2 text-sm" style={{ color: i === 0 ? "var(--color-ink)" : "var(--color-ink-light)", fontWeight: i === 0 ? 600 : 400 }}>
                {i > 0 && checkIcon("text-blue-500")}
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
          className="rounded-2xl p-6"
          style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}
        >
          <p className="text-sm font-semibold uppercase tracking-wider mb-1" style={{ color: "var(--color-ink-faint)" }}>
            School
          </p>
          <p className="text-3xl font-bold mb-1" style={{ color: "var(--color-ink)" }}>
            $2<span className="text-lg font-medium" style={{ color: "var(--color-ink-muted)" }}>/student</span>
          </p>
          <p className="text-sm mb-5" style={{ color: "var(--color-ink-muted)" }}>
            per semester, up to 150 students
          </p>
          <ul className="space-y-2.5 mb-6">
            {[
              "Everything in Classroom, plus:",
              "Multiple teacher accounts",
              "School admin dashboard",
              "Bulk student onboarding",
              "Priority support",
            ].map((item, i) => (
              <li key={item} className="flex items-start gap-2 text-sm" style={{ color: i === 0 ? "var(--color-ink)" : "var(--color-ink-light)", fontWeight: i === 0 ? 600 : 400 }}>
                {i > 0 && checkIcon("text-violet-500")}
                {item}
              </li>
            ))}
          </ul>
          <Link href="/schools" className="btn-secondary w-full py-3 text-center text-sm block">
            Learn More
          </Link>
        </div>

        {/* District */}
        <div
          className="rounded-2xl p-6"
          style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}
        >
          <p className="text-sm font-semibold uppercase tracking-wider mb-1" style={{ color: "var(--color-ink-faint)" }}>
            District
          </p>
          <p className="text-3xl font-bold mb-1" style={{ color: "var(--color-ink)" }}>
            Custom
          </p>
          <p className="text-sm mb-5" style={{ color: "var(--color-ink-muted)" }}>
            annual contract, district-wide
          </p>
          <ul className="space-y-2.5 mb-6">
            {[
              "Everything in School, plus:",
              "Cross-school analytics",
              "Dedicated onboarding",
              "PO / invoice billing",
              "FERPA documentation",
            ].map((item, i) => (
              <li key={item} className="flex items-start gap-2 text-sm" style={{ color: i === 0 ? "var(--color-ink)" : "var(--color-ink-light)", fontWeight: i === 0 ? 600 : 400 }}>
                {i > 0 && checkIcon("text-amber-500")}
                {item}
              </li>
            ))}
          </ul>
          <a
            href="mailto:hello@econlearn.org?subject=District%20Pricing%20Inquiry"
            className="btn-secondary w-full py-3 text-center text-sm block"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Feature Comparison Table */}
      <div className="max-w-5xl mx-auto mb-20">
        <h2 className="text-xl font-bold text-center mb-8" style={{ color: "var(--color-ink)" }}>
          Compare Plans
        </h2>
        <div className="rounded-xl overflow-x-auto" style={{ border: "1px solid var(--color-border)" }}>
          <table className="w-full text-sm min-w-[600px]">
            <thead>
              <tr style={{ background: "var(--color-surface)", borderBottom: "1px solid var(--color-border)" }}>
                <th className="text-left px-5 py-3 font-medium" style={{ color: "var(--color-ink-faint)" }}>Feature</th>
                <th className="text-center px-4 py-3 font-medium" style={{ color: "var(--color-ink-faint)" }}>Student</th>
                <th className="text-center px-4 py-3 font-medium" style={{ color: "#3B82F6" }}>Classroom</th>
                <th className="text-center px-4 py-3 font-medium" style={{ color: "var(--color-ink-faint)" }}>School</th>
                <th className="text-center px-4 py-3 font-medium" style={{ color: "var(--color-ink-faint)" }}>District</th>
              </tr>
            </thead>
            <tbody>
              {comparisonFeatures.map((row, i) => (
                <tr
                  key={row.feature}
                  style={{
                    background: i % 2 === 0 ? "var(--color-surface)" : "var(--color-surface-raised)",
                    borderBottom: "1px solid var(--color-border-subtle)",
                  }}
                >
                  <td className="px-5 py-2.5 font-medium" style={{ color: "var(--color-ink)" }}>{row.feature}</td>
                  {[row.student, row.classroom, row.school, row.district].map((val, j) => (
                    <td key={j} className="px-4 py-2.5 text-center">
                      {val ? (
                        <svg className="w-4 h-4 text-emerald-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <span style={{ color: "var(--color-ink-faint)" }}>&mdash;</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-2xl mx-auto mb-16">
        <h2 className="text-xl font-bold text-center mb-8" style={{ color: "var(--color-ink)" }}>
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.q}
              className="rounded-xl p-5"
              style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}
            >
              <h3 className="font-semibold mb-1.5 text-sm" style={{ color: "var(--color-ink)" }}>
                {faq.q}
              </h3>
              <p className="text-sm" style={{ color: "var(--color-ink-muted)" }}>
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <p className="text-sm" style={{ color: "var(--color-ink-muted)" }}>
          All plans include a 30-day free trial. No credit card required to start.
        </p>
        <p className="text-sm mt-2">
          <Link href="/districts" className="font-medium hover:text-blue-600 transition-colors" style={{ color: "#3B82F6" }}>
            Looking for district pricing? &rarr;
          </Link>
        </p>
      </div>
    </div>
  );
}
