import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AP Economics for School Districts - District Licensing",
  description:
    "Bring AP Micro & Macro Economics to every school in your district. Interactive graphs, lockdown exams, teacher dashboards, and real-time analytics at $1.50/student. FERPA-ready. Start with a pilot.",
  keywords: [
    "AP economics district license",
    "school district AP curriculum",
    "AP micro macro district",
    "bulk AP economics platform",
    "district economics curriculum tool",
    "FERPA compliant AP economics",
  ],
  alternates: { canonical: "https://www.econlearn.org/districts" },
  openGraph: {
    title: "AP Economics for School Districts | EconLearn",
    description:
      "One platform for every AP Economics classroom in your district. Interactive graphs, lockdown exams, and cross-school analytics.",
    url: "https://www.econlearn.org/districts",
    type: "website",
  },
};

const benefits = [
  {
    title: "Unified Curriculum",
    description:
      "Every AP Econ teacher in your district uses the same interactive modules, question banks, and graphs. Consistent instruction quality across all schools.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    title: "Cross-School Analytics",
    description:
      "See AP Economics performance across every school in one dashboard. Identify which schools need support and where students excel.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    title: "Cost Efficiency",
    description:
      "At $1.50/student/semester, EconLearn costs a fraction of traditional textbooks ($80-150 each) and competing digital platforms.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Easy Deployment",
    description:
      "No software to install. Teachers get accounts in minutes. Students join with a classroom code. Full onboarding support included.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.841m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
  },
];

const steps = [
  {
    num: "01",
    title: "Pilot One School",
    description: "Start with a single school or a few teachers. We set up accounts, provide training, and support the rollout at no commitment.",
  },
  {
    num: "02",
    title: "Onboard Teachers",
    description: "Teachers create classrooms, assign modules and exams, and monitor student progress through their dashboards. Training takes under 30 minutes.",
  },
  {
    num: "03",
    title: "Monitor Results",
    description: "Track engagement metrics, quiz scores, and exam performance across classrooms. Identify at-risk students early with configurable thresholds.",
  },
  {
    num: "04",
    title: "Scale District-Wide",
    description: "Once you see the results, expand to every AP Economics classroom in your district with volume pricing and dedicated support.",
  },
];

const faqs = [
  {
    q: "How does billing work for districts?",
    a: "Districts are billed annually via purchase order or invoice. We work with your procurement office to align with your fiscal year and approval process. No credit card required.",
  },
  {
    q: "Who owns the student data?",
    a: "Your district owns all student data. We never sell or share student information with third parties. You can request a full data export or deletion at any time.",
  },
  {
    q: "Is EconLearn FERPA compliant?",
    a: "Yes. We handle student data in compliance with FERPA requirements. We are happy to sign a Data Processing Agreement or Student Data Privacy Agreement with your district.",
  },
  {
    q: "Do you support SSO or SIS integration?",
    a: "We currently support Google sign-in (compatible with Google Workspace for Education). Clever and ClassLink integration is on our roadmap for the 2026-27 school year.",
  },
  {
    q: "How long does implementation take?",
    a: "Teachers can be up and running in a single day. A full district rollout — including training, account setup, and classroom creation — typically takes 1-2 weeks.",
  },
  {
    q: "What training and support is included?",
    a: "District plans include onboarding support, teacher training sessions (virtual or in-person for local districts), and priority email support throughout the school year.",
  },
  {
    q: "Can we start with a pilot before committing district-wide?",
    a: "Absolutely. Most districts start with 1-2 schools for a semester, evaluate results, then expand. Pilot pricing is available.",
  },
];

export default function DistrictsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-5 sm:px-6 pt-28 pb-20 text-center">
        <div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6"
          style={{ background: "rgba(59, 130, 246, 0.08)", color: "#3B82F6" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
          Now accepting district partnerships
        </div>
        <h1
          className="text-4xl sm:text-5xl font-bold tracking-tight mb-5 leading-tight"
          style={{ color: "var(--color-ink)" }}
        >
          AP Economics for
          <br />
          Your Entire District
        </h1>
        <p
          className="text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: "var(--color-ink-muted)" }}
        >
          One platform for every AP Micro and Macro classroom. Interactive graphs,
          lockdown exams, teacher dashboards, and cross-school analytics — all at a
          fraction of textbook costs.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:hello@econlearn.org?subject=District%20Partnership%20Inquiry&body=Hi%20EconLearn%20team%2C%0A%0AI%27m%20interested%20in%20learning%20more%20about%20district%20pricing%20for%20AP%20Economics.%0A%0ADistrict%3A%20%0ANumber%20of%20schools%3A%20%0AApproximate%20AP%20Econ%20students%3A%20%0A%0AThanks!"
            className="btn-primary py-3.5 px-8 text-sm"
          >
            Schedule a District Demo
          </a>
          <Link
            href="/pricing"
            className="btn-secondary py-3.5 px-8 text-sm"
          >
            View Pricing
          </Link>
        </div>
      </section>

      {/* The Problem */}
      <section
        className="py-20"
        style={{ background: "var(--color-surface-raised)", borderTop: "1px solid var(--color-border-subtle)", borderBottom: "1px solid var(--color-border-subtle)" }}
      >
        <div className="max-w-4xl mx-auto px-5 sm:px-6">
          <h2
            className="text-2xl sm:text-3xl font-bold text-center mb-4"
            style={{ color: "var(--color-ink)" }}
          >
            The Problem with AP Economics Instruction
          </h2>
          <p
            className="text-center max-w-2xl mx-auto mb-12"
            style={{ color: "var(--color-ink-muted)" }}
          >
            Districts face real challenges delivering consistent, high-quality AP Economics education.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "Fragmented Tools",
                desc: "Teachers cobble together slideshows, worksheets, YouTube videos, and quiz apps. No single platform covers interactive graphs, practice questions, and exam management.",
              },
              {
                title: "Inconsistent Quality",
                desc: "Without shared resources, AP Economics instruction quality varies wildly from school to school and teacher to teacher within the same district.",
              },
              {
                title: "No Visibility",
                desc: "District administrators have no way to see how AP Economics students are performing across schools until AP exam scores arrive months later.",
              },
              {
                title: "Expensive Textbooks",
                desc: "Traditional economics textbooks cost $80-150 per student, go out of date quickly, and don't offer the interactive practice students need for the AP exam.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl p-6"
                style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}
              >
                <h3 className="font-semibold mb-2" style={{ color: "var(--color-ink)" }}>
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-ink-muted)" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="max-w-5xl mx-auto px-5 sm:px-6 py-20">
        <h2
          className="text-2xl sm:text-3xl font-bold text-center mb-4"
          style={{ color: "var(--color-ink)" }}
        >
          Everything Your Teachers Need, In One Place
        </h2>
        <p
          className="text-center max-w-2xl mx-auto mb-12"
          style={{ color: "var(--color-ink-muted)" }}
        >
          EconLearn replaces fragmented tools with a unified platform built specifically for AP Economics.
        </p>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { num: "24", label: "Interactive Modules", sub: "Micro & Macro" },
            { num: "350+", label: "Practice Questions", sub: "AP-style, auto-graded" },
            { num: "15", label: "Interactive Graphs", sub: "Drag, explore, learn" },
            { num: "150+", label: "Flashcards", sub: "Sorted by module" },
            { num: "Lockdown", label: "Exam Mode", sub: "Fullscreen, tab monitoring" },
            { num: "Real-time", label: "Teacher Dashboards", sub: "Analytics & reports" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl p-5 text-center"
              style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}
            >
              <p className="text-2xl font-bold mb-1" style={{ color: "#3B82F6" }}>
                {stat.num}
              </p>
              <p className="text-sm font-medium" style={{ color: "var(--color-ink)" }}>
                {stat.label}
              </p>
              <p className="text-xs mt-0.5" style={{ color: "var(--color-ink-faint)" }}>
                {stat.sub}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* District Benefits */}
      <section
        className="py-20"
        style={{ background: "var(--color-surface-raised)", borderTop: "1px solid var(--color-border-subtle)", borderBottom: "1px solid var(--color-border-subtle)" }}
      >
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <h2
            className="text-2xl sm:text-3xl font-bold text-center mb-12"
            style={{ color: "var(--color-ink)" }}
          >
            Why Districts Choose EconLearn
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="rounded-xl p-6 flex gap-4"
                style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: "rgba(59, 130, 246, 0.08)", color: "#3B82F6" }}
                >
                  {b.icon}
                </div>
                <div>
                  <h3 className="font-semibold mb-1" style={{ color: "var(--color-ink)" }}>
                    {b.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-ink-muted)" }}>
                    {b.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How District Rollout Works */}
      <section className="max-w-4xl mx-auto px-5 sm:px-6 py-20">
        <h2
          className="text-2xl sm:text-3xl font-bold text-center mb-12"
          style={{ color: "var(--color-ink)" }}
        >
          How a District Rollout Works
        </h2>
        <div className="space-y-8">
          {steps.map((step) => (
            <div key={step.num} className="flex gap-5 items-start">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-sm font-bold"
                style={{ background: "rgba(59, 130, 246, 0.08)", color: "#3B82F6" }}
              >
                {step.num}
              </div>
              <div>
                <h3 className="font-semibold mb-1" style={{ color: "var(--color-ink)" }}>
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-ink-muted)" }}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ROI / Cost Comparison */}
      <section
        className="py-20"
        style={{ background: "var(--color-surface-raised)", borderTop: "1px solid var(--color-border-subtle)", borderBottom: "1px solid var(--color-border-subtle)" }}
      >
        <div className="max-w-3xl mx-auto px-5 sm:px-6">
          <h2
            className="text-2xl sm:text-3xl font-bold text-center mb-4"
            style={{ color: "var(--color-ink)" }}
          >
            The Cost Comparison
          </h2>
          <p className="text-center mb-10 text-sm" style={{ color: "var(--color-ink-muted)" }}>
            For a district with 500 AP Economics students per year
          </p>
          <div className="rounded-xl overflow-hidden" style={{ border: "1px solid var(--color-border)" }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: "var(--color-surface)", borderBottom: "1px solid var(--color-border)" }}>
                  <th className="text-left px-5 py-3 font-medium" style={{ color: "var(--color-ink-faint)" }} />
                  <th className="text-center px-5 py-3 font-medium" style={{ color: "var(--color-ink-faint)" }}>
                    Textbooks
                  </th>
                  <th className="text-center px-5 py-3 font-medium" style={{ color: "#3B82F6" }}>
                    EconLearn
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: "Cost per student", old: "$80-150", new: "$1.50/semester" },
                  { label: "Annual cost (500 students)", old: "$40,000-75,000", new: "$1,500" },
                  { label: "Interactive graphs", old: "No", new: "15 built-in" },
                  { label: "Auto-graded quizzes", old: "No", new: "350+ questions" },
                  { label: "Lockdown exams", old: "No", new: "Yes" },
                  { label: "Real-time analytics", old: "No", new: "Per-student & school" },
                  { label: "Updates & new content", old: "New edition ($$$)", new: "Free, continuous" },
                ].map((row, i) => (
                  <tr
                    key={row.label}
                    style={{
                      background: i % 2 === 0 ? "var(--color-surface)" : "var(--color-surface-raised)",
                      borderBottom: "1px solid var(--color-border-subtle)",
                    }}
                  >
                    <td className="px-5 py-3 font-medium" style={{ color: "var(--color-ink)" }}>
                      {row.label}
                    </td>
                    <td className="px-5 py-3 text-center" style={{ color: "var(--color-ink-muted)" }}>
                      {row.old}
                    </td>
                    <td className="px-5 py-3 text-center font-medium" style={{ color: "#3B82F6" }}>
                      {row.new}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-center mt-4" style={{ color: "var(--color-ink-faint)" }}>
            Textbook costs based on average AP Economics textbook pricing. EconLearn pricing is per semester at district volume rates.
          </p>
        </div>
      </section>

      {/* Compliance & Privacy */}
      <section className="max-w-4xl mx-auto px-5 sm:px-6 py-20">
        <h2
          className="text-2xl sm:text-3xl font-bold text-center mb-4"
          style={{ color: "var(--color-ink)" }}
        >
          Built for Student Privacy
        </h2>
        <p className="text-center max-w-2xl mx-auto mb-10" style={{ color: "var(--color-ink-muted)" }}>
          We take student data seriously. EconLearn is designed to meet district privacy and compliance requirements.
        </p>
        <div className="grid sm:grid-cols-3 gap-5">
          {[
            {
              title: "FERPA Ready",
              desc: "Student education records are handled in compliance with FERPA. We sign Data Processing Agreements with districts.",
            },
            {
              title: "No Ads, No Data Selling",
              desc: "EconLearn is funded by subscriptions, not advertising. Student data is never sold to or shared with third parties.",
            },
            {
              title: "District Data Ownership",
              desc: "Your district owns all student data. Request a full export or deletion at any time. Data is stored securely in the US.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl p-5"
              style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center mb-3"
                style={{ background: "rgba(22, 163, 74, 0.08)", color: "#16A34A" }}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-1 text-sm" style={{ color: "var(--color-ink)" }}>
                {item.title}
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: "var(--color-ink-muted)" }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Pilot CTA */}
      <section
        className="py-20"
        style={{ background: "var(--color-surface-raised)", borderTop: "1px solid var(--color-border-subtle)", borderBottom: "1px solid var(--color-border-subtle)" }}
      >
        <div className="max-w-2xl mx-auto px-5 sm:px-6 text-center">
          <h2
            className="text-2xl sm:text-3xl font-bold mb-4"
            style={{ color: "var(--color-ink)" }}
          >
            Start with a Single School
          </h2>
          <p className="mb-8" style={{ color: "var(--color-ink-muted)" }}>
            Most districts begin with a pilot at one school. We provide full onboarding support, training for teachers, and help you measure results before committing district-wide.
          </p>
          <a
            href="mailto:hello@econlearn.org?subject=District%20Pilot%20Inquiry&body=Hi%20EconLearn%20team%2C%0A%0AI%27m%20interested%20in%20a%20pilot%20for%20our%20district.%0A%0ADistrict%3A%20%0ASchool(s)%20for%20pilot%3A%20%0ANumber%20of%20AP%20Econ%20teachers%3A%20%0A%0AThanks!"
            className="btn-primary py-3.5 px-8 text-sm inline-block"
          >
            Request a Pilot
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-5 sm:px-6 py-20">
        <h2
          className="text-2xl sm:text-3xl font-bold text-center mb-12"
          style={{ color: "var(--color-ink)" }}
        >
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq) => (
            <div
              key={faq.q}
              className="rounded-xl p-5"
              style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}
            >
              <h3 className="font-semibold mb-2 text-sm" style={{ color: "var(--color-ink)" }}>
                {faq.q}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-ink-muted)" }}>
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-3xl mx-auto px-5 sm:px-6 pb-20 text-center">
        <div
          className="rounded-2xl p-10"
          style={{ background: "linear-gradient(135deg, #1E293B, #334155)" }}
        >
          <h2 className="text-2xl font-bold text-white mb-3">
            Ready to bring EconLearn to your district?
          </h2>
          <p className="text-sm text-gray-300 mb-8 max-w-lg mx-auto">
            Get in touch to discuss pricing, schedule a demo, or start a pilot program at one of your schools.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:hello@econlearn.org?subject=District%20Demo%20Request"
              className="bg-white text-gray-900 font-medium text-sm py-3 px-8 rounded-xl hover:bg-gray-100 transition-colors"
            >
              Schedule a Demo
            </a>
            <Link
              href="/pricing"
              className="text-white/80 hover:text-white text-sm font-medium transition-colors"
            >
              View All Plans &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "EconLearn District Plan",
            description: "AP Economics platform for school districts with interactive graphs, lockdown exams, and cross-school analytics.",
            provider: {
              "@type": "EducationalOrganization",
              name: "EconLearn",
              url: "https://www.econlearn.org",
            },
            audience: {
              "@type": "EducationalAudience",
              educationalRole: "administrator",
            },
            areaServed: "US",
            offers: {
              "@type": "Offer",
              price: "1.50",
              priceCurrency: "USD",
              unitText: "per student per semester",
              description: "District volume pricing for AP Economics platform",
            },
          }),
        }}
      />
    </div>
  );
}
