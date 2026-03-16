import type { Metadata } from "next";
import Link from "next/link";
import { macroCourse } from "@/data/courses";

export const metadata: Metadata = {
  title: "AP Macroeconomics - Free Study Guide & Practice Questions",
  description:
    "Study all 12 AP Macroeconomics topics: GDP, fiscal policy, monetary policy, international trade, and more. Interactive graphs and 175+ practice questions.",
  alternates: { canonical: "https://econlearn.org/macro" },
  openGraph: {
    title: "AP Macroeconomics Study Guide - EconLearn",
    description:
      "Free interactive AP Macro study guide with 12 modules covering every topic on the AP exam.",
    url: "https://econlearn.org/macro",
  },
};

export default function MacroPage() {
  const courseJsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "AP Macroeconomics",
    description:
      "Free interactive AP Macroeconomics study guide covering all 12 topics: GDP, fiscal policy, monetary policy, international trade, and more.",
    provider: {
      "@type": "Organization",
      name: "EconLearn",
      url: "https://econlearn.org",
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "online",
      courseWorkload: "PT20H",
      inLanguage: "en",
    },
    isAccessibleForFree: true,
    numberOfCredits: 0,
    audience: {
      "@type": "EducationalAudience",
      educationalRole: "student",
    },
  };

  return (
    <div className="macro-page max-w-3xl mx-auto px-6 py-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
      />
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full" style={{ background: 'var(--accent)' }} />
          <span className="text-[11px] font-medium" style={{ color: 'var(--accent)' }}>
            {macroCourse.modules.length} modules
          </span>
        </div>
        <h1 className="text-2xl font-bold tracking-tight mb-1.5" style={{ color: 'var(--color-ink)' }}>
          {macroCourse.title}
        </h1>
        <p className="text-[15px]" style={{ color: 'var(--color-ink-muted)' }}>{macroCourse.description}</p>
      </div>

      <div className="space-y-0.5">
        {macroCourse.modules.map((mod, index) => (
          <Link
            key={mod.id}
            href={mod.href}
            className={`group flex items-center gap-4 py-3.5 transition-colors ${
              index > 0 ? "border-t" : ""
            }`}
            style={index > 0 ? { borderColor: 'var(--color-border-subtle)' } : undefined}
          >
            <span className="text-[12px] w-5 text-center tabular-nums font-medium" style={{ color: 'var(--color-ink-faint)' }}>
              {index + 1}
            </span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <h3 className="text-[14px] font-medium transition-colors" style={{ color: 'var(--color-ink)' }}>
                  {mod.title}
                </h3>
                {mod.hasInteractive && (
                  <span className="badge badge-macro text-[9px]">
                    Interactive
                  </span>
                )}
              </div>
              <p className="text-[13px] truncate" style={{ color: 'var(--color-ink-faint)' }}>
                {mod.description}
              </p>
            </div>
            <svg
              className="w-4 h-4 transition-colors flex-shrink-0"
              style={{ color: 'var(--color-border)' }}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        ))}
      </div>
    </div>
  );
}
