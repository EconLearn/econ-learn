import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AP Economics for Administrators - District Curriculum Software",
  description:
    "The AP Economics platform built for district adoption. Unified curriculum, real-time cross-school analytics, FERPA compliant, and a fraction of textbook costs. Request a district quote today.",
  keywords: [
    "AP economics curriculum software",
    "AP economics district license",
    "FERPA compliant AP economics platform",
    "interactive economics for schools",
    "AP economics administration tool",
    "district economics curriculum",
    "school district AP economics",
  ],
  alternates: { canonical: "https://www.econlearn.org/for-administrators" },
  openGraph: {
    title: "AP Economics for Administrators | EconLearn",
    description:
      "The AP Economics platform built for district adoption. Unified curriculum, real-time analytics, and FERPA compliance at a fraction of textbook costs.",
    url: "https://www.econlearn.org/for-administrators",
    type: "website",
  },
};

const decisionCards = [
  {
    title: "Standards Alignment",
    description:
      "Every module maps directly to the College Board AP Economics framework. Micro and Macro content is organized by AP topic, ensuring complete curriculum coverage across all schools.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Data & Analytics",
    description:
      "Cross-school performance dashboards give administrators visibility into AP Economics outcomes district-wide. Track engagement, quiz scores, and exam readiness in real time.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    title: "Cost Savings",
    description:
      "At $1.50/student/semester, EconLearn costs a fraction of traditional textbooks ($80-150 each). For a 500-student district, that means saving $38,500-73,500 per year.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Privacy & Compliance",
    description:
      "FERPA-ready from day one. No advertising, no data selling, no third-party tracking. Your district owns all student data, with US-hosted infrastructure and full export capabilities.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
];

const timelineSteps = [
  {
    num: "01",
    period: "Week 1",
    title: "Pilot Setup",
    description:
      "We create accounts for your pilot school, configure classrooms, and ensure everything is ready for teachers and students to start immediately.",
  },
  {
    num: "02",
    period: "Week 2-4",
    title: "Teacher Training",
    description:
      "Teachers receive guided onboarding (under 30 minutes), learn to assign modules and exams, and begin using dashboards to track student progress.",
  },
  {
    num: "03",
    period: "Month 2-4",
    title: "Monitor & Evaluate",
    description:
      "Track engagement metrics, quiz performance, and exam readiness across pilot classrooms. We provide regular check-ins and usage reports.",
  },
  {
    num: "04",
    period: "Month 5+",
    title: "Scale District-Wide",
    description:
      "Review pilot results, expand to all AP Economics classrooms across the district with volume pricing and dedicated support for each school.",
  },
];

const quoteFields = [
  { label: "Full Name", placeholder: "Jane Smith" },
  { label: "Title / Role", placeholder: "Curriculum Coordinator" },
  { label: "District", placeholder: "Lincoln Unified School District" },
  { label: "Email", placeholder: "jsmith@lincoln.k12.us" },
  { label: "Number of Schools", placeholder: "12" },
  { label: "Number of AP Econ Students", placeholder: "500" },
];

export default function ForAdministratorsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-5 sm:px-6 pt-28 pb-20 text-center">
        <div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6"
          style={{ background: "rgba(59, 130, 246, 0.08)", color: "#3B82F6" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
          For Administrators &amp; Decision-Makers
        </div>
        <h1
          className="text-4xl sm:text-5xl font-bold tracking-tight mb-5 leading-tight"
          style={{ color: "var(--color-ink)" }}
        >
          The AP Economics Platform
          <br />
          Built for District Adoption
        </h1>
        <p
          className="text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: "var(--color-ink-muted)" }}
        >
          Unified curriculum across every school, real-time cross-district
          analytics, and complete FERPA compliance — all at a fraction of
          textbook costs.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:hello@econlearn.org?subject=District%20Quote%20Request&body=Hi%20EconLearn%20team%2C%0A%0AI%27m%20interested%20in%20a%20district%20quote%20for%20AP%20Economics.%0A%0AName%3A%20%0ATitle%3A%20%0ADistrict%3A%20%0ANumber%20of%20schools%3A%20%0ANumber%20of%20AP%20Econ%20students%3A%20%0A%0AThanks!"
            className="btn-primary py-3.5 px-8 text-sm"
          >
            Request a Quote
          </a>
          <Link
            href="/pricing"
            className="btn-secondary py-3.5 px-8 text-sm"
          >
            View Pricing
          </Link>
        </div>
      </section>

      {/* What Decision-Makers Need to Know */}
      <section
        className="py-20"
        style={{ background: "var(--color-surface-raised)", borderTop: "1px solid var(--color-border-subtle)", borderBottom: "1px solid var(--color-border-subtle)" }}
      >
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <h2
            className="text-2xl sm:text-3xl font-bold text-center mb-4"
            style={{ color: "var(--color-ink)" }}
          >
            What Decision-Makers Need to Know
          </h2>
          <p
            className="text-center max-w-2xl mx-auto mb-12"
            style={{ color: "var(--color-ink-muted)" }}
          >
            Four things superintendents, curriculum coordinators, and district administrators ask about before adopting a new platform.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {decisionCards.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl p-6 flex gap-4"
                style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: "rgba(59, 130, 246, 0.08)", color: "#3B82F6" }}
                >
                  {card.icon}
                </div>
                <div>
                  <h3 className="font-semibold mb-1" style={{ color: "var(--color-ink)" }}>
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-ink-muted)" }}>
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="max-w-3xl mx-auto px-5 sm:px-6 py-20">
        <h2
          className="text-2xl sm:text-3xl font-bold text-center mb-4"
          style={{ color: "var(--color-ink)" }}
        >
          ROI at a Glance
        </h2>
        <p className="text-center mb-10 text-sm" style={{ color: "var(--color-ink-muted)" }}>
          Cost comparison for a district with 500 AP Economics students per year
        </p>
        <div className="grid sm:grid-cols-2 gap-6 mb-8">
          <div
            className="rounded-2xl p-6 text-center"
            style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}
          >
            <p className="text-xs font-medium uppercase tracking-wider mb-3" style={{ color: "var(--color-ink-faint)" }}>
              Traditional Textbooks
            </p>
            <p className="text-3xl font-bold mb-1" style={{ color: "var(--color-ink)" }}>
              $40,000 &ndash; $75,000
            </p>
            <p className="text-sm" style={{ color: "var(--color-ink-muted)" }}>
              per year
            </p>
          </div>
          <div
            className="rounded-2xl p-6 text-center"
            style={{ background: "rgba(59, 130, 246, 0.04)", border: "2px solid #3B82F6" }}
          >
            <p className="text-xs font-medium uppercase tracking-wider mb-3" style={{ color: "#3B82F6" }}>
              EconLearn District
            </p>
            <p className="text-3xl font-bold mb-1" style={{ color: "#3B82F6" }}>
              $1,500
            </p>
            <p className="text-sm" style={{ color: "var(--color-ink-muted)" }}>
              per year
            </p>
          </div>
        </div>
        <div
          className="rounded-2xl p-6 text-center"
          style={{ background: "var(--color-surface-raised)", border: "1px solid var(--color-border)" }}
        >
          <p className="text-sm font-medium mb-1" style={{ color: "var(--color-ink)" }}>
            Estimated Annual Savings
          </p>
          <p className="text-4xl font-bold" style={{ color: "#16A34A" }}>
            96 &ndash; 98%
          </p>
          <p className="text-xs mt-2" style={{ color: "var(--color-ink-faint)" }}>
            Based on 500 students at $80-150/textbook vs. $1.50/student/semester with EconLearn
          </p>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section
        className="py-20"
        style={{ background: "var(--color-surface-raised)", borderTop: "1px solid var(--color-border-subtle)", borderBottom: "1px solid var(--color-border-subtle)" }}
      >
        <div className="max-w-4xl mx-auto px-5 sm:px-6">
          <h2
            className="text-2xl sm:text-3xl font-bold text-center mb-12"
            style={{ color: "var(--color-ink)" }}
          >
            Implementation Timeline
          </h2>
          <div className="space-y-8">
            {timelineSteps.map((step) => (
              <div key={step.num} className="flex gap-5 items-start">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-sm font-bold"
                  style={{ background: "rgba(59, 130, 246, 0.08)", color: "#3B82F6" }}
                >
                  {step.num}
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-semibold" style={{ color: "var(--color-ink)" }}>
                      {step.title}
                    </h3>
                    <span
                      className="text-xs px-2 py-0.5 rounded-full font-medium"
                      style={{ background: "rgba(59, 130, 246, 0.08)", color: "#3B82F6" }}
                    >
                      {step.period}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-ink-muted)" }}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Request a Quote */}
      <section className="max-w-3xl mx-auto px-5 sm:px-6 py-20">
        <h2
          className="text-2xl sm:text-3xl font-bold text-center mb-4"
          style={{ color: "var(--color-ink)" }}
        >
          Request a Quote
        </h2>
        <p className="text-center max-w-xl mx-auto mb-10" style={{ color: "var(--color-ink-muted)" }}>
          Tell us about your district and we will prepare a custom quote within one business day.
        </p>
        <div
          className="rounded-2xl p-6 sm:p-8"
          style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}
        >
          <div className="grid sm:grid-cols-2 gap-5 mb-5">
            {quoteFields.map((field) => (
              <div key={field.label}>
                <label
                  className="block text-xs font-medium mb-1.5"
                  style={{ color: "var(--color-ink)" }}
                >
                  {field.label}
                </label>
                <div
                  className="rounded-lg px-3 py-2.5 text-sm"
                  style={{
                    background: "var(--color-surface-raised)",
                    border: "1px solid var(--color-border)",
                    color: "var(--color-ink-faint)",
                  }}
                >
                  {field.placeholder}
                </div>
              </div>
            ))}
          </div>
          <div className="mb-6">
            <label
              className="block text-xs font-medium mb-1.5"
              style={{ color: "var(--color-ink)" }}
            >
              Message (optional)
            </label>
            <div
              className="rounded-lg px-3 py-2.5 text-sm h-20"
              style={{
                background: "var(--color-surface-raised)",
                border: "1px solid var(--color-border)",
                color: "var(--color-ink-faint)",
              }}
            >
              Any additional details about your needs...
            </div>
          </div>
          <div className="text-center">
            <a
              href="mailto:hello@econlearn.org?subject=District%20Quote%20Request&body=Hi%20EconLearn%20team%2C%0A%0AI%27d%20like%20to%20request%20a%20district%20quote.%0A%0AName%3A%20%0ATitle%2FRole%3A%20%0ADistrict%3A%20%0AEmail%3A%20%0ANumber%20of%20schools%3A%20%0ANumber%20of%20AP%20Econ%20students%3A%20%0AMessage%3A%20%0A%0AThanks!"
              className="btn-primary py-3.5 px-8 text-sm inline-block"
            >
              Send Quote Request
            </a>
            <p className="text-xs mt-3" style={{ color: "var(--color-ink-faint)" }}>
              Opens your email client with a pre-filled message to hello@econlearn.org
            </p>
          </div>
        </div>
      </section>

      {/* Compliance & Privacy */}
      <section
        className="py-20"
        style={{ background: "var(--color-surface-raised)", borderTop: "1px solid var(--color-border-subtle)", borderBottom: "1px solid var(--color-border-subtle)" }}
      >
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <h2
            className="text-2xl sm:text-3xl font-bold text-center mb-4"
            style={{ color: "var(--color-ink)" }}
          >
            Compliance &amp; Data Privacy
          </h2>
          <p className="text-center max-w-2xl mx-auto mb-10" style={{ color: "var(--color-ink-muted)" }}>
            EconLearn is designed to meet the strict privacy and compliance requirements of K-12 school districts.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: "FERPA Ready",
                desc: "Student education records are handled in full compliance with FERPA. We sign Data Processing Agreements with every district.",
              },
              {
                title: "No Ads, No Data Selling",
                desc: "EconLearn is subscription-funded. Student data is never sold to or shared with third parties. Zero advertising on the platform.",
              },
              {
                title: "District Data Ownership",
                desc: "Your district retains full ownership of all student data. Request a complete export or deletion at any time, no questions asked.",
              },
              {
                title: "US-Hosted Infrastructure",
                desc: "All data is stored and processed on servers located in the United States with industry-standard encryption at rest and in transit.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl p-5"
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
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-3xl mx-auto px-5 sm:px-6 py-20 text-center">
        <div
          className="rounded-2xl p-10"
          style={{ background: "linear-gradient(135deg, #1E293B, #334155)" }}
        >
          <h2 className="text-2xl font-bold text-white mb-3">
            Ready to bring EconLearn to your district?
          </h2>
          <p className="text-sm text-gray-300 mb-8 max-w-lg mx-auto">
            Get a custom quote, schedule a live demo, or start a no-commitment pilot at one of your schools. We respond within one business day.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:hello@econlearn.org?subject=District%20Quote%20Request"
              className="bg-white text-gray-900 font-medium text-sm py-3 px-8 rounded-xl hover:bg-gray-100 transition-colors"
            >
              Request a Quote
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
            name: "EconLearn for Administrators",
            description:
              "AP Economics curriculum software for school district administrators. Unified curriculum, real-time cross-school analytics, FERPA compliant, at a fraction of textbook costs.",
            provider: {
              "@type": "EducationalOrganization",
              name: "EconLearn",
              url: "https://www.econlearn.org",
            },
            audience: {
              "@type": "EducationalAudience",
              educationalRole: "administrator",
            },
            serviceType: "Educational Technology Platform",
            areaServed: "US",
            offers: {
              "@type": "Offer",
              price: "1.50",
              priceCurrency: "USD",
              unitText: "per student per semester",
              description:
                "District volume pricing for AP Economics platform — a fraction of traditional textbook costs",
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "District Plans",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "AP Microeconomics Curriculum",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "AP Macroeconomics Curriculum",
                  },
                },
              ],
            },
          }),
        }}
      />
    </div>
  );
}
