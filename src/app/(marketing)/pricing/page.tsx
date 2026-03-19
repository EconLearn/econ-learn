import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing - AP Economics for Students, Teachers & Districts",
  description:
    "Free for individual learners. Classroom plans from $3/student. School plans from $2/student. District volume pricing at $1.50/student. Teacher dashboards, lockdown exams, and analytics.",
  alternates: { canonical: "https://www.econlearn.org/pricing" },
};

const checkIcon = (color: string) => (
  <svg className={`w-4 h-4 ${color} mt-0.5 shrink-0`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const comparisonFeatures = [
  { feature: "Interactive modules (24)", individual: true, classroom: true, school: true, district: true },
  { feature: "Practice questions (350+)", individual: true, classroom: true, school: true, district: true },
  { feature: "Flashcards (150+)", individual: true, classroom: true, school: true, district: true },
  { feature: "Interactive graphs (15)", individual: true, classroom: true, school: true, district: true },
  { feature: "Progress dashboard", individual: true, classroom: true, school: true, district: true },
  { feature: "Daily challenge & streaks", individual: true, classroom: true, school: true, district: true },
  { feature: "Teacher dashboard", individual: false, classroom: true, school: true, district: true },
  { feature: "Classroom join codes", individual: false, classroom: true, school: true, district: true },
  { feature: "Assignable lessons & quizzes", individual: false, classroom: true, school: true, district: true },
  { feature: "Lockdown exam mode", individual: false, classroom: true, school: true, district: true },
  { feature: "Violation tracking", individual: false, classroom: true, school: true, district: true },
  { feature: "CSV grade export", individual: false, classroom: true, school: true, district: true },
  { feature: "Student analytics", individual: false, classroom: true, school: true, district: true },
  { feature: "Multiple teacher accounts", individual: false, classroom: false, school: true, district: true },
  { feature: "School admin dashboard", individual: false, classroom: false, school: true, district: true },
  { feature: "Bulk student onboarding", individual: false, classroom: false, school: true, district: true },
  { feature: "Priority support", individual: false, classroom: false, school: true, district: true },
  { feature: "Cross-school analytics", individual: false, classroom: false, school: false, district: true },
  { feature: "Dedicated onboarding", individual: false, classroom: false, school: false, district: true },
  { feature: "PO / invoice billing", individual: false, classroom: false, school: false, district: true },
  { feature: "FERPA documentation", individual: false, classroom: false, school: false, district: true },
  { feature: "Free pilot semester", individual: false, classroom: false, school: false, district: true },
];

const faqs = [
  {
    q: "Can students still use EconLearn for free?",
    a: "Yes. Any student can sign up individually and access all 24 modules, 350+ practice questions, flashcards, and interactive graphs at no cost. The paid plans are for teachers and schools who want classroom management, assignments, lockdown exams, and analytics.",
  },
  {
    q: "Is there a free trial for teacher plans?",
    a: "Yes. Classroom and School plans include a 30-day free trial with full access to every feature. No credit card required to start. District plans include a free pilot semester.",
  },
  {
    q: "Why is there a minimum student requirement?",
    a: "Our per-student pricing is designed for classroom and institutional use. Minimums ensure the platform is cost-effective for everyone. If you have fewer than 10 students, contact us — we offer flexible arrangements for small classes.",
  },
  {
    q: "How does billing work?",
    a: "Classroom plans are billed per semester via credit card. School plans support credit card or purchase order. District plans are billed annually via purchase order or invoice — we work with your procurement office.",
  },
  {
    q: "Can I switch plans?",
    a: "Yes. You can upgrade at any time. If you upgrade mid-semester, you only pay the difference. Downgrading takes effect at the start of the next billing period.",
  },
  {
    q: "Is student data private?",
    a: "Absolutely. We never sell student data or show ads. Student information is only visible to their teachers and school administrators. We are FERPA-compliant and will sign a Data Processing Agreement with any school or district.",
  },
  {
    q: "Do you support purchase orders?",
    a: "Yes. School and District plans support purchase order and invoice billing. Contact us at hello@econlearn.org to set up PO billing.",
  },
  {
    q: "What if I need more than 500 students?",
    a: "The District plan supports unlimited students across your entire district. Contact us for volume pricing.",
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
          className="text-lg max-w-2xl mx-auto"
          style={{ color: "var(--color-ink-muted)" }}
        >
          Free for every student to self-study. Teacher and school plans add classroom
          management, lockdown exams, and real-time analytics.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto mb-20">
        {/* Individual / Free */}
        <div
          className="rounded-2xl p-6"
          style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}
        >
          <p className="text-sm font-semibold uppercase tracking-wider mb-1" style={{ color: "var(--color-ink-faint)" }}>
            Individual
          </p>
          <p className="text-3xl font-bold mb-1" style={{ color: "var(--color-ink)" }}>
            $0
          </p>
          <p className="text-sm mb-5" style={{ color: "var(--color-ink-muted)" }}>
            free for self-study
          </p>
          <ul className="space-y-2.5 mb-6">
            {[
              "24 interactive modules",
              "350+ practice questions",
              "150+ flashcards",
              "15 interactive graphs",
              "Progress tracking",
              "Daily challenge & streaks",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "var(--color-ink-light)" }}>
                {checkIcon("text-emerald-500")}
                {item}
              </li>
            ))}
          </ul>
          <Link href="/signup" className="btn-secondary w-full py-3 text-center text-sm block">
            Start Learning
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
            per semester &middot; 10-35 students
          </p>
          <ul className="space-y-2.5 mb-6">
            {[
              "Everything in Individual, plus:",
              "Teacher dashboard",
              "Classroom join codes",
              "Assignable lessons & quizzes",
              "Lockdown exam mode",
              "Violation tracking",
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
            per semester &middot; 50-500 students
          </p>
          <ul className="space-y-2.5 mb-6">
            {[
              "Everything in Classroom, plus:",
              "Multiple teacher accounts (up to 10)",
              "School admin dashboard",
              "Bulk student onboarding",
              "Priority support",
              "PO / credit card billing",
            ].map((item, i) => (
              <li key={item} className="flex items-start gap-2 text-sm" style={{ color: i === 0 ? "var(--color-ink)" : "var(--color-ink-light)", fontWeight: i === 0 ? 600 : 400 }}>
                {i > 0 && checkIcon("text-violet-500")}
                {item}
              </li>
            ))}
          </ul>
          <Link href="/schools" className="btn-secondary w-full py-3 text-center text-sm block">
            Start 30-Day Trial
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
            $1.50<span className="text-lg font-medium" style={{ color: "var(--color-ink-muted)" }}>/student</span>
          </p>
          <p className="text-sm mb-5" style={{ color: "var(--color-ink-muted)" }}>
            per semester &middot; 200+ students &middot; annual contract
          </p>
          <ul className="space-y-2.5 mb-6">
            {[
              "Everything in School, plus:",
              "Unlimited schools & teachers",
              "Cross-school analytics",
              "Dedicated onboarding & training",
              "PO / invoice billing",
              "FERPA documentation & DPA",
              "Free pilot semester",
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
            Request a Quote
          </a>
        </div>
      </div>

      {/* Student Access Note */}
      <div
        className="max-w-3xl mx-auto mb-20 rounded-xl p-5 text-center"
        style={{ background: "rgba(59, 130, 246, 0.04)", border: "1px solid rgba(59, 130, 246, 0.12)" }}
      >
        <p className="text-sm" style={{ color: "var(--color-ink)" }}>
          <strong>Students always access EconLearn for free</strong> when their teacher has an active Classroom, School, or District plan. Individual students can also self-study at no cost without a teacher.
        </p>
      </div>

      {/* Feature Comparison Table */}
      <div className="max-w-5xl mx-auto mb-20">
        <h2 className="text-xl font-bold text-center mb-8" style={{ color: "var(--color-ink)" }}>
          Compare Plans
        </h2>
        <div className="rounded-xl overflow-x-auto" style={{ border: "1px solid var(--color-border)" }}>
          <table className="w-full text-sm min-w-[640px]">
            <thead>
              <tr style={{ background: "var(--color-surface)", borderBottom: "1px solid var(--color-border)" }}>
                <th className="text-left px-5 py-3 font-medium" style={{ color: "var(--color-ink-faint)" }}>Feature</th>
                <th className="text-center px-4 py-3 font-medium" style={{ color: "var(--color-ink-faint)" }}>Individual</th>
                <th className="text-center px-4 py-3 font-medium" style={{ color: "#3B82F6" }}>Classroom</th>
                <th className="text-center px-4 py-3 font-medium" style={{ color: "var(--color-ink-faint)" }}>School</th>
                <th className="text-center px-4 py-3 font-medium" style={{ color: "var(--color-ink-faint)" }}>District</th>
              </tr>
            </thead>
            <tbody>
              {/* Pricing row */}
              <tr style={{ background: "var(--color-surface-raised)", borderBottom: "1px solid var(--color-border)" }}>
                <td className="px-5 py-2.5 font-semibold" style={{ color: "var(--color-ink)" }}>Price</td>
                <td className="px-4 py-2.5 text-center font-medium" style={{ color: "var(--color-ink)" }}>Free</td>
                <td className="px-4 py-2.5 text-center font-medium" style={{ color: "#3B82F6" }}>$3/student</td>
                <td className="px-4 py-2.5 text-center font-medium" style={{ color: "var(--color-ink)" }}>$2/student</td>
                <td className="px-4 py-2.5 text-center font-medium" style={{ color: "var(--color-ink)" }}>$1.50/student</td>
              </tr>
              {/* Min/max rows */}
              <tr style={{ background: "var(--color-surface)", borderBottom: "1px solid var(--color-border-subtle)" }}>
                <td className="px-5 py-2.5 font-medium" style={{ color: "var(--color-ink)" }}>Minimum students</td>
                <td className="px-4 py-2.5 text-center" style={{ color: "var(--color-ink-faint)" }}>&mdash;</td>
                <td className="px-4 py-2.5 text-center font-medium" style={{ color: "var(--color-ink-muted)" }}>10</td>
                <td className="px-4 py-2.5 text-center font-medium" style={{ color: "var(--color-ink-muted)" }}>50</td>
                <td className="px-4 py-2.5 text-center font-medium" style={{ color: "var(--color-ink-muted)" }}>200</td>
              </tr>
              <tr style={{ background: "var(--color-surface-raised)", borderBottom: "1px solid var(--color-border-subtle)" }}>
                <td className="px-5 py-2.5 font-medium" style={{ color: "var(--color-ink)" }}>Maximum students</td>
                <td className="px-4 py-2.5 text-center" style={{ color: "var(--color-ink-faint)" }}>&mdash;</td>
                <td className="px-4 py-2.5 text-center font-medium" style={{ color: "var(--color-ink-muted)" }}>35</td>
                <td className="px-4 py-2.5 text-center font-medium" style={{ color: "var(--color-ink-muted)" }}>500</td>
                <td className="px-4 py-2.5 text-center font-medium" style={{ color: "var(--color-ink-muted)" }}>Unlimited</td>
              </tr>
              {/* Feature rows */}
              {comparisonFeatures.map((row, i) => (
                <tr
                  key={row.feature}
                  style={{
                    background: i % 2 === 0 ? "var(--color-surface)" : "var(--color-surface-raised)",
                    borderBottom: "1px solid var(--color-border-subtle)",
                  }}
                >
                  <td className="px-5 py-2.5 font-medium" style={{ color: "var(--color-ink)" }}>{row.feature}</td>
                  {[row.individual, row.classroom, row.school, row.district].map((val, j) => (
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

      {/* Bottom Links */}
      <div className="text-center space-y-3">
        <p className="text-sm" style={{ color: "var(--color-ink-muted)" }}>
          All teacher plans include a 30-day free trial. No credit card required to start.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
          <Link href="/districts" className="font-medium hover:text-blue-600 transition-colors" style={{ color: "#3B82F6" }}>
            District pricing &rarr;
          </Link>
          <Link href="/pilot-program" className="font-medium hover:text-blue-600 transition-colors" style={{ color: "#3B82F6" }}>
            Free pilot program &rarr;
          </Link>
          <Link href="/for-administrators" className="font-medium hover:text-blue-600 transition-colors" style={{ color: "#3B82F6" }}>
            For administrators &rarr;
          </Link>
        </div>
      </div>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Product",
              name: "EconLearn Classroom Plan",
              description: "AP Economics classroom management with lockdown exams and analytics",
              offers: {
                "@type": "Offer",
                price: "3.00",
                priceCurrency: "USD",
                unitText: "per student per semester",
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "Product",
              name: "EconLearn District Plan",
              description: "AP Economics platform for school districts with cross-school analytics and FERPA compliance",
              offers: {
                "@type": "Offer",
                price: "1.50",
                priceCurrency: "USD",
                unitText: "per student per semester",
              },
            },
          ]),
        }}
      />
    </div>
  );
}
