import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy & FERPA Compliance - EconLearn",
  description:
    "EconLearn's privacy policy and FERPA compliance details. We never sell student data, never show ads, and handle all data in accordance with FERPA. Built for schools and districts.",
  keywords: [
    "EconLearn privacy policy",
    "FERPA compliance",
    "student data privacy",
    "COPPA compliance",
    "AP economics privacy",
    "student data protection",
    "school data privacy",
  ],
  alternates: { canonical: "https://www.econlearn.org/privacy" },
  openGraph: {
    title: "Privacy Policy & FERPA Compliance | EconLearn",
    description:
      "EconLearn's privacy policy and FERPA compliance details. We never sell student data and handle all data in accordance with FERPA.",
    url: "https://www.econlearn.org/privacy",
    type: "website",
  },
};

const sections = [
  {
    id: "commitment",
    title: "Our Commitment",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    content: (
      <>
        <p>
          EconLearn is built for students and educators. Our business model is
          straightforward: schools and students pay for the platform. That means:
        </p>
        <ul>
          <li>We <strong>never sell</strong> student data</li>
          <li>We <strong>never show ads</strong> to students or teachers</li>
          <li>We handle all data in accordance with <strong>FERPA</strong></li>
        </ul>
        <p>
          Privacy is not an afterthought. It is central to how we build and
          operate EconLearn.
        </p>
      </>
    ),
  },
  {
    id: "ferpa",
    title: "FERPA Compliance",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    content: (
      <>
        <p>
          When providing services to schools and districts, EconLearn acts as a
          &ldquo;school official&rdquo; under FERPA with a legitimate educational
          interest in student education records.
        </p>
        <ul>
          <li>
            We use student education records <strong>only</strong> for the
            purposes for which the school authorized access.
          </li>
          <li>
            We do <strong>not</strong> disclose student records to third parties
            except as required to operate the platform or as directed by the
            school.
          </li>
          <li>
            We will sign a <strong>Data Processing Agreement</strong> (DPA) or{" "}
            <strong>Student Data Privacy Agreement</strong> with any school or
            district upon request.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "data-collected",
    title: "What Data We Collect",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
    content: (
      <>
        <div className="space-y-4">
          <div>
            <p className="font-medium" style={{ color: "var(--color-ink)" }}>
              Account Information
            </p>
            <p>Name, email address, and role (student, teacher, or administrator).</p>
          </div>
          <div>
            <p className="font-medium" style={{ color: "var(--color-ink)" }}>
              Learning Data
            </p>
            <p>
              Quiz scores, module progress, exam results, and learning streaks.
            </p>
          </div>
          <div>
            <p className="font-medium" style={{ color: "var(--color-ink)" }}>
              Classroom Data
            </p>
            <p>Classroom membership and assignment completions.</p>
          </div>
          <div>
            <p className="font-medium" style={{ color: "var(--color-ink)" }}>
              Usage Data
            </p>
            <p>
              Login timestamps and feature usage for platform analytics. We do
              not use tracking pixels or third-party analytics on student pages.
            </p>
          </div>
        </div>
      </>
    ),
  },
  {
    id: "data-usage",
    title: "How We Use Data",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    content: (
      <>
        <p className="font-medium mb-2" style={{ color: "var(--color-ink)" }}>
          We use data to:
        </p>
        <ul>
          <li>Provide the learning platform and its features</li>
          <li>Show teachers their students&apos; progress and performance</li>
          <li>Generate classroom and school-level analytics</li>
          <li>Improve the platform based on aggregate usage patterns</li>
        </ul>
        <p
          className="font-medium mt-4 mb-2"
          style={{ color: "var(--color-ink)" }}
        >
          We do NOT use data for:
        </p>
        <ul>
          <li>Advertising of any kind</li>
          <li>Selling to third parties</li>
          <li>Profiling students for non-educational purposes</li>
          <li>Training AI models on student data</li>
        </ul>
      </>
    ),
  },
  {
    id: "security",
    title: "Data Storage & Security",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    content: (
      <>
        <ul>
          <li>
            All data stored in the <strong>United States</strong> via Supabase
            (hosted on AWS).
          </li>
          <li>
            Data encrypted <strong>in transit</strong> (TLS) and{" "}
            <strong>at rest</strong>.
          </li>
          <li>
            Access controls and <strong>row-level security</strong> enforced on
            all database tables.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "ownership",
    title: "Data Ownership",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
      </svg>
    ),
    content: (
      <>
        <ul>
          <li>
            <strong>Schools and districts</strong> own all student data generated
            through their classrooms.
          </li>
          <li>
            <strong>Individual students</strong> own their personal learning
            data.
          </li>
          <li>
            Data can be <strong>exported</strong> or <strong>deleted</strong>{" "}
            upon request.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "retention",
    title: "Data Retention & Deletion",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    content: (
      <>
        <ul>
          <li>Account data is retained while the account is active.</li>
          <li>
            Schools and districts can request <strong>bulk deletion</strong> of
            student data at any time.
          </li>
          <li>
            Individual users can <strong>delete their account</strong> and all
            associated data at any time.
          </li>
          <li>
            After account deletion, data is{" "}
            <strong>permanently removed within 30 days</strong>.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "coppa",
    title: "Children\u2019s Privacy (COPPA)",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    content: (
      <>
        <p>
          EconLearn is designed for high school students, typically ages 15&ndash;18.
        </p>
        <ul>
          <li>
            We do <strong>not</strong> knowingly collect data from children under
            13.
          </li>
          <li>
            If a school uses EconLearn with students under 13, the school must
            obtain <strong>parental consent</strong> in accordance with COPPA.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "third-party",
    title: "Third-Party Services",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m9.686-3.758a4.5 4.5 0 00-1.242-7.244l-4.5-4.5a4.5 4.5 0 00-6.364 6.364L4.34 8.374" />
      </svg>
    ),
    content: (
      <>
        <p>We use the following third-party services to operate the platform:</p>
        <div className="space-y-3 mt-3">
          <div>
            <p className="font-medium" style={{ color: "var(--color-ink)" }}>
              Supabase
            </p>
            <p>Database and authentication infrastructure.</p>
          </div>
          <div>
            <p className="font-medium" style={{ color: "var(--color-ink)" }}>
              Vercel
            </p>
            <p>Application hosting and deployment.</p>
          </div>
          <div>
            <p className="font-medium" style={{ color: "var(--color-ink)" }}>
              Google Analytics
            </p>
            <p>
              Used on marketing pages only. Not present on the student dashboard
              or any authenticated pages.
            </p>
          </div>
        </div>
        <p className="mt-3">
          We do not share student data with any of these services beyond what is
          strictly necessary to operate the platform.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    content: (
      <>
        <p>
          For privacy questions, data requests, or to request a Data Processing
          Agreement:
        </p>
        <p className="mt-3">
          <a
            href="mailto:hello@econlearn.org"
            className="font-medium underline underline-offset-2"
            style={{ color: "#3B82F6" }}
          >
            hello@econlearn.org
          </a>
        </p>
        <p className="mt-3">
          We aim to respond to all privacy-related inquiries within two business
          days.
        </p>
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <div>
      {/* Header */}
      <section className="max-w-4xl mx-auto px-5 sm:px-6 pt-28 pb-16 text-center">
        <div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6"
          style={{ background: "rgba(22, 163, 74, 0.08)", color: "#16A34A" }}
        >
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
            />
          </svg>
          FERPA Compliant
        </div>
        <h1
          className="text-4xl sm:text-5xl font-bold tracking-tight mb-5 leading-tight"
          style={{ color: "var(--color-ink)" }}
        >
          Privacy Policy
        </h1>
        <p
          className="text-lg max-w-2xl mx-auto leading-relaxed"
          style={{ color: "var(--color-ink-muted)" }}
        >
          How EconLearn protects student and educator data.
          <br />
          <span className="text-sm" style={{ color: "var(--color-ink-faint)" }}>
            Last updated: March 2026
          </span>
        </p>
      </section>

      {/* Quick Summary Banner */}
      <section
        className="py-10"
        style={{
          background: "var(--color-surface-raised)",
          borderTop: "1px solid var(--color-border-subtle)",
          borderBottom: "1px solid var(--color-border-subtle)",
        }}
      >
        <div className="max-w-4xl mx-auto px-5 sm:px-6">
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            {[
              { label: "No Ads", desc: "Ever, on any page" },
              { label: "No Data Sales", desc: "Student data is never sold" },
              { label: "FERPA Ready", desc: "DPA available on request" },
            ].map((item) => (
              <div key={item.label}>
                <p
                  className="text-lg font-bold"
                  style={{ color: "var(--color-ink)" }}
                >
                  {item.label}
                </p>
                <p
                  className="text-sm mt-0.5"
                  style={{ color: "var(--color-ink-muted)" }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Policy Sections */}
      <section className="max-w-4xl mx-auto px-5 sm:px-6 py-16">
        <div className="space-y-6">
          {sections.map((section) => (
            <div
              key={section.id}
              id={section.id}
              className="rounded-xl p-6 sm:p-8"
              style={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                  style={{
                    background: "rgba(59, 130, 246, 0.08)",
                    color: "#3B82F6",
                  }}
                >
                  {section.icon}
                </div>
                <h2
                  className="text-lg font-semibold"
                  style={{ color: "var(--color-ink)" }}
                >
                  {section.title}
                </h2>
              </div>
              <div
                className="text-sm leading-relaxed space-y-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_strong]:font-semibold"
                style={{ color: "var(--color-ink-muted)" }}
              >
                {section.content}
              </div>
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
            Questions about our privacy practices?
          </h2>
          <p className="text-sm text-gray-300 mb-8 max-w-lg mx-auto">
            We are happy to discuss our data practices, sign a DPA, or answer
            any privacy questions your district may have.
          </p>
          <a
            href="mailto:hello@econlearn.org?subject=Privacy%20%2F%20Data%20Inquiry"
            className="bg-white text-gray-900 font-medium text-sm py-3 px-8 rounded-xl hover:bg-gray-100 transition-colors inline-block"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Privacy Policy & FERPA Compliance",
            description:
              "EconLearn's privacy policy and FERPA compliance details for schools, districts, and students.",
            url: "https://www.econlearn.org/privacy",
            inLanguage: "en-US",
            isPartOf: {
              "@type": "WebSite",
              name: "EconLearn",
              url: "https://www.econlearn.org",
            },
            about: [
              {
                "@type": "Thing",
                name: "FERPA Compliance",
              },
              {
                "@type": "Thing",
                name: "Student Data Privacy",
              },
            ],
            publisher: {
              "@type": "EducationalOrganization",
              name: "EconLearn",
              url: "https://www.econlearn.org",
            },
            dateModified: "2026-03-01",
          }),
        }}
      />
    </div>
  );
}
