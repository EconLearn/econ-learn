import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Pilot Program - Try EconLearn Risk-Free",
  description:
    "Run a zero-commitment pilot of EconLearn at your school. Full platform access, teacher accounts, onboarding support, and a performance report — completely free for one semester.",
  keywords: [
    "AP economics pilot program",
    "free AP economics trial",
    "try AP economics platform",
    "school pilot AP econ",
    "risk-free AP economics",
    "EconLearn pilot",
  ],
  alternates: { canonical: "https://www.econlearn.org/pilot-program" },
  openGraph: {
    title: "Free Pilot Program | EconLearn",
    description:
      "Try EconLearn risk-free for a full semester. No purchase order, no contract, no obligation.",
    url: "https://www.econlearn.org/pilot-program",
    type: "website",
  },
};

const included = [
  {
    title: "Full Platform Access",
    description:
      "All 24 interactive modules covering AP Micro and Macro, interactive graphs, flashcards, and 350+ practice questions.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    title: "Up to 3 Teacher Accounts",
    description:
      "Each teacher gets their own dashboard to create classrooms, assign modules, build exams, and track student progress.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    title: "Unlimited Student Access",
    description:
      "Every student in your pilot classrooms gets full access. No per-student fees, no seat limits during the pilot.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    title: "Lockdown Exam Mode",
    description:
      "Fullscreen lockdown exams with tab-switch detection and violation tracking. The same exam tools as paid plans.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  {
    title: "Onboarding & Training Session",
    description:
      "A 30-minute virtual onboarding session to walk your teachers through the platform, classroom setup, and exam creation.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
  },
  {
    title: "End-of-Pilot Performance Report",
    description:
      "A comprehensive report covering student engagement, quiz scores, module completion, and recommendations for next steps.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
];

const steps = [
  {
    num: "01",
    title: "Apply",
    description:
      "Fill out a quick form or send us an email. It takes about 2 minutes. Tell us your school, how many AP Econ teachers you have, and your expected number of students.",
  },
  {
    num: "02",
    title: "Setup",
    description:
      "We create your teacher accounts and schedule an onboarding session. You're ready to go within 24 hours.",
  },
  {
    num: "03",
    title: "Evaluate",
    description:
      "Use EconLearn for a full semester with your students. At the end, review your performance report and decide if you'd like to continue.",
  },
];

const metrics = [
  { label: "Student Engagement Rate", description: "How often students log in and interact with modules" },
  { label: "Average Quiz Scores", description: "Performance across practice questions and exams" },
  { label: "Module Completion Rate", description: "Percentage of assigned modules completed by students" },
  { label: "Teacher Time Saved", description: "Reduction in manual grading and content prep time" },
  { label: "Student Satisfaction", description: "Feedback from students on learning experience" },
];

const faqs = [
  {
    q: "How long is the pilot?",
    a: "The pilot runs for one full semester. This gives your teachers and students enough time to meaningfully use the platform and see real results.",
  },
  {
    q: "Is there any cost?",
    a: "No. The pilot is completely free. No purchase order, no invoice, no credit card. We want you to see the results before making any financial commitment.",
  },
  {
    q: "What happens after the pilot?",
    a: "At the end of the pilot, you'll receive a performance report. If you'd like to continue, we'll work with you on a paid plan. If not, you can walk away with no obligation.",
  },
  {
    q: "Do I need IT approval?",
    a: "In most cases, no. EconLearn is a web-based platform — there's no software to install, no browser extension, and no app to download. Students and teachers just visit the website.",
  },
];

export default function PilotProgramPage() {
  return (
    <div>
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-5 sm:px-6 pt-28 pb-20 text-center">
        <div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6"
          style={{ background: "rgba(22, 163, 74, 0.08)", color: "#16A34A" }}
        >
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#16A34A" }} />
          No Commitment Required
        </div>
        <h1
          className="text-4xl sm:text-5xl font-bold tracking-tight mb-5 leading-tight"
          style={{ color: "var(--color-ink)" }}
        >
          Try EconLearn Risk-Free
        </h1>
        <p
          className="text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: "var(--color-ink-muted)" }}
        >
          Run a full semester pilot at your school with no purchase order, no
          contract, and no obligation.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:hello@econlearn.org?subject=Pilot%20Program%20Request&body=Hi%20EconLearn%20team%2C%0A%0AI%27d%20like%20to%20request%20a%20pilot%20of%20EconLearn.%0A%0ASchool%20name%3A%20%0ANumber%20of%20AP%20Econ%20teachers%3A%20%0AExpected%20number%20of%20students%3A%20%0A%0AThanks!"
            className="btn-primary py-3.5 px-8 text-sm"
          >
            Request a Pilot
          </a>
          <Link
            href="/districts"
            className="btn-secondary py-3.5 px-8 text-sm"
          >
            District Licensing &rarr;
          </Link>
        </div>
      </section>

      {/* What's Included */}
      <section
        className="py-20"
        style={{ background: "var(--color-surface-raised)", borderTop: "1px solid var(--color-border-subtle)", borderBottom: "1px solid var(--color-border-subtle)" }}
      >
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <h2
            className="text-2xl sm:text-3xl font-bold text-center mb-4"
            style={{ color: "var(--color-ink)" }}
          >
            What&apos;s Included in the Pilot
          </h2>
          <p
            className="text-center max-w-2xl mx-auto mb-12"
            style={{ color: "var(--color-ink-muted)" }}
          >
            Everything you need to run a meaningful evaluation — no features held back.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {included.map((item) => (
              <div
                key={item.title}
                className="rounded-xl p-6 flex gap-4"
                style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: "rgba(59, 130, 246, 0.08)", color: "#3B82F6" }}
                >
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold mb-1" style={{ color: "var(--color-ink)" }}>
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-ink-muted)" }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-4xl mx-auto px-5 sm:px-6 py-20">
        <h2
          className="text-2xl sm:text-3xl font-bold text-center mb-12"
          style={{ color: "var(--color-ink)" }}
        >
          How It Works
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

      {/* Why Schools Pilot First */}
      <section
        className="py-20"
        style={{ background: "var(--color-surface-raised)", borderTop: "1px solid var(--color-border-subtle)", borderBottom: "1px solid var(--color-border-subtle)" }}
      >
        <div className="max-w-3xl mx-auto px-5 sm:px-6 text-center">
          <h2
            className="text-2xl sm:text-3xl font-bold mb-4"
            style={{ color: "var(--color-ink)" }}
          >
            Why Schools Pilot First
          </h2>
          <p
            className="leading-relaxed"
            style={{ color: "var(--color-ink-muted)" }}
          >
            Education budgets are tight, and adopting new tools is a big decision.
            A pilot lets you see real results in your own classrooms — actual student
            engagement data, quiz performance, and teacher feedback — before making
            any budget commitment. It&apos;s a data-driven way to evaluate whether
            EconLearn is the right fit for your school or district.
          </p>
        </div>
      </section>

      {/* Pilot Success Metrics */}
      <section className="max-w-4xl mx-auto px-5 sm:px-6 py-20">
        <h2
          className="text-2xl sm:text-3xl font-bold text-center mb-4"
          style={{ color: "var(--color-ink)" }}
        >
          Pilot Success Metrics
        </h2>
        <p
          className="text-center max-w-2xl mx-auto mb-12"
          style={{ color: "var(--color-ink-muted)" }}
        >
          At the end of your pilot, we deliver a detailed report covering these key metrics.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-xl p-5"
              style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center mb-3"
                style={{ background: "rgba(59, 130, 246, 0.08)", color: "#3B82F6" }}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-1 text-sm" style={{ color: "var(--color-ink)" }}>
                {metric.label}
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: "var(--color-ink-muted)" }}>
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20"
        style={{ background: "var(--color-surface-raised)", borderTop: "1px solid var(--color-border-subtle)", borderBottom: "1px solid var(--color-border-subtle)" }}
      >
        <div className="max-w-2xl mx-auto px-5 sm:px-6 text-center">
          <h2
            className="text-2xl sm:text-3xl font-bold mb-4"
            style={{ color: "var(--color-ink)" }}
          >
            Request a Pilot
          </h2>
          <p className="mb-8" style={{ color: "var(--color-ink-muted)" }}>
            Send us a quick email with your school name, the number of AP Economics
            teachers, and your expected number of students. We&apos;ll have you set up
            within 24 hours.
          </p>
          <a
            href="mailto:hello@econlearn.org?subject=Pilot%20Program%20Request&body=Hi%20EconLearn%20team%2C%0A%0AI%27d%20like%20to%20request%20a%20pilot%20of%20EconLearn.%0A%0ASchool%20name%3A%20%0ANumber%20of%20AP%20Econ%20teachers%3A%20%0AExpected%20number%20of%20students%3A%20%0A%0AThanks!"
            className="btn-primary py-3.5 px-8 text-sm inline-block"
          >
            Email Us to Get Started
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
            Ready to see EconLearn in your classroom?
          </h2>
          <p className="text-sm text-gray-300 mb-8 max-w-lg mx-auto">
            Start a free pilot this semester. No contracts, no purchase orders — just
            results.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:hello@econlearn.org?subject=Pilot%20Program%20Request&body=Hi%20EconLearn%20team%2C%0A%0AI%27d%20like%20to%20request%20a%20pilot%20of%20EconLearn.%0A%0ASchool%20name%3A%20%0ANumber%20of%20AP%20Econ%20teachers%3A%20%0AExpected%20number%20of%20students%3A%20%0A%0AThanks!"
              className="bg-white text-gray-900 font-medium text-sm py-3 px-8 rounded-xl hover:bg-gray-100 transition-colors"
            >
              Request a Pilot
            </a>
            <Link
              href="/pricing"
              className="text-white/80 hover:text-white text-sm font-medium transition-colors"
            >
              View Pricing &rarr;
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
            name: "EconLearn Free Pilot Program",
            description:
              "A zero-commitment, free semester-long pilot of the EconLearn AP Economics platform for schools and districts.",
            provider: {
              "@type": "EducationalOrganization",
              name: "EconLearn",
              url: "https://www.econlearn.org",
            },
            audience: {
              "@type": "EducationalAudience",
              educationalRole: "teacher",
            },
            areaServed: "US",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
              description:
                "Free pilot program — full platform access for one semester with no obligation.",
            },
            isRelatedTo: {
              "@type": "Course",
              name: "AP Economics",
              description:
                "Advanced Placement Microeconomics and Macroeconomics",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
              },
            })),
          }),
        }}
      />
    </div>
  );
}
