import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AP Economics for Schools - Classroom & Exam Tools",
  description:
    "Bring AP Micro & Macro Economics to your school. Interactive graphs, lockdown exams, teacher dashboards, and student analytics at $2/student/semester.",
  keywords: [
    "AP economics for schools",
    "AP micro macro school license",
    "AP economics classroom tools",
    "school AP economics platform",
  ],
  alternates: { canonical: "https://www.econlearn.org/schools" },
  openGraph: {
    title: "AP Economics for Schools | EconLearn",
    description:
      "Interactive AP Economics platform with lockdown exams, teacher dashboards, and student progress tracking.",
    url: "https://www.econlearn.org/schools",
    type: "website",
  },
};

const features = [
  {
    title: "Lockdown Exams",
    description: "Fullscreen enforcement, tab-switch detection, and real-time monitoring. Know exactly what students are doing during assessments.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  {
    title: "Teacher Dashboards",
    description: "Create assignments, track student progress, view analytics, and export grades. Everything a teacher needs in one place.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
  },
  {
    title: "Interactive Graphs",
    description: "15 draggable, explorable economics graphs that students can manipulate to understand shifts, equilibrium, and surplus concepts.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
  {
    title: "Student Progress Tracking",
    description: "See which students are on track, who needs help, and how your class performs by module. Configurable at-risk thresholds.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    title: "350+ Practice Questions",
    description: "AP-style multiple choice questions across all 24 modules, auto-graded with explanations. Assign as homework or use for test prep.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
      </svg>
    ),
  },
  {
    title: "Grade Export",
    description: "Export student grades and progress data as CSV. Compatible with your existing gradebook and reporting systems.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
      </svg>
    ),
  },
];

export default function SchoolsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-5 sm:px-6 pt-28 pb-16 text-center">
        <h1
          className="text-3xl sm:text-5xl font-bold tracking-tight mb-5 leading-tight"
          style={{ color: "var(--color-ink)" }}
        >
          Bring AP Economics
          <br />
          to Life at Your School
        </h1>
        <p
          className="text-lg max-w-xl mx-auto mb-10 leading-relaxed"
          style={{ color: "var(--color-ink-muted)" }}
        >
          Get your entire economics department on one platform with interactive modules, lockdown exams, and real-time student analytics.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:hello@econlearn.org?subject=School%20Pilot%20Inquiry&body=Hi%20EconLearn%20team%2C%0A%0AI%27m%20interested%20in%20bringing%20EconLearn%20to%20our%20school.%0A%0ASchool%3A%20%0ANumber%20of%20AP%20Econ%20teachers%3A%20%0AApproximate%20students%3A%20%0A%0AThanks!"
            className="btn-primary py-3.5 px-8 text-sm"
          >
            Start a School Pilot
          </a>
          <Link href="/pricing" className="btn-secondary py-3.5 px-8 text-sm">
            View Pricing
          </Link>
        </div>
      </section>

      {/* For Department Heads */}
      <section
        className="py-16"
        style={{ background: "var(--color-surface-raised)", borderTop: "1px solid var(--color-border-subtle)", borderBottom: "1px solid var(--color-border-subtle)" }}
      >
        <div className="max-w-3xl mx-auto px-5 sm:px-6 text-center">
          <h2
            className="text-2xl font-bold mb-4"
            style={{ color: "var(--color-ink)" }}
          >
            For Department Heads
          </h2>
          <p className="leading-relaxed" style={{ color: "var(--color-ink-muted)" }}>
            When your economics department shares one platform, every student gets the same quality of interactive content,
            practice questions, and exam tools — regardless of which section they are in. Teachers save time on material creation
            and get real data on student performance.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-5xl mx-auto px-5 sm:px-6 py-20">
        <h2
          className="text-2xl sm:text-3xl font-bold text-center mb-12"
          style={{ color: "var(--color-ink)" }}
        >
          What Teachers Get
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-xl p-5"
              style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
                style={{ background: "rgba(59, 130, 246, 0.08)", color: "#3B82F6" }}
              >
                {f.icon}
              </div>
              <h3 className="font-semibold mb-1 text-sm" style={{ color: "var(--color-ink)" }}>
                {f.title}
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: "var(--color-ink-muted)" }}>
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* School Plan Highlight */}
      <section
        className="py-20"
        style={{ background: "var(--color-surface-raised)", borderTop: "1px solid var(--color-border-subtle)", borderBottom: "1px solid var(--color-border-subtle)" }}
      >
        <div className="max-w-lg mx-auto px-5 sm:px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: "#3B82F6" }}>
            School Plan
          </p>
          <p className="text-4xl font-bold mb-2" style={{ color: "var(--color-ink)" }}>
            $2<span className="text-xl font-medium" style={{ color: "var(--color-ink-muted)" }}>/student/semester</span>
          </p>
          <p className="text-sm mb-8" style={{ color: "var(--color-ink-muted)" }}>
            Up to 150 students. Multiple teacher accounts. Priority support.
          </p>
          <ul className="text-left space-y-3 max-w-sm mx-auto mb-8">
            {[
              "All 24 interactive modules (Micro + Macro)",
              "Teacher dashboards for every classroom",
              "Lockdown exam mode with violation tracking",
              "Student progress analytics and reports",
              "CSV grade export",
              "Bulk student onboarding via join codes",
              "Priority email support",
              "30-day free trial, no credit card required",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "var(--color-ink-light)" }}>
                <svg className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/teacher" className="btn-primary py-3 px-8 text-sm">
              Start 30-Day Trial
            </Link>
            <Link href="/districts" className="text-sm font-medium hover:text-blue-600 transition-colors" style={{ color: "var(--color-ink-muted)" }}>
              Need district-wide pricing? &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Pilot CTA */}
      <section className="max-w-3xl mx-auto px-5 sm:px-6 py-20 text-center">
        <h2
          className="text-2xl font-bold mb-4"
          style={{ color: "var(--color-ink)" }}
        >
          Start with One Teacher
        </h2>
        <p className="mb-8" style={{ color: "var(--color-ink-muted)" }}>
          Not ready to commit your whole department? Start with a single teacher on the Classroom plan. When you see the results, expanding is easy.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:hello@econlearn.org?subject=School%20Pilot%20Inquiry"
            className="btn-primary py-3.5 px-8 text-sm"
          >
            Contact Us
          </a>
          <Link href="/signup" className="btn-secondary py-3.5 px-8 text-sm">
            Create Free Account
          </Link>
        </div>
      </section>
    </div>
  );
}
