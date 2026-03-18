import type { Metadata } from "next";
import Link from "next/link";
import { microCourse } from "@/data/courses";

export const metadata: Metadata = {
  title: "AP Microeconomics - Free Study Guide & Practice Questions",
  description:
    "Study all 12 AP Microeconomics topics: supply and demand, elasticity, market structures, factor markets, and more. Interactive graphs and 175+ practice questions.",
  alternates: { canonical: "https://econlearn.org/micro" },
  openGraph: {
    title: "AP Microeconomics Study Guide - EconLearn",
    description:
      "Free interactive AP Micro study guide with 12 modules covering every topic on the AP exam.",
    url: "https://econlearn.org/micro",
  },
};

export default function MicroPage() {
  const courseJsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "AP Microeconomics",
    description:
      "Free interactive AP Microeconomics study guide covering all 12 topics: supply and demand, elasticity, market structures, factor markets, and more.",
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

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What topics are covered on the AP Microeconomics exam?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The AP Microeconomics exam covers basic economic concepts, supply and demand, elasticity, consumer choice, production and costs, perfect competition, monopoly, monopolistic competition, oligopoly, factor markets, market failure, and public goods and externalities.",
        },
      },
      {
        "@type": "Question",
        name: "How hard is AP Microeconomics?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AP Microeconomics is considered moderately difficult. The exam relies heavily on graph analysis and the ability to connect concepts across market structures. Students who practice with graphs and free-response questions tend to score well.",
        },
      },
      {
        "@type": "Question",
        name: "How many units are in AP Microeconomics?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The College Board organizes AP Microeconomics into 6 units, but EconLearn breaks these into 12 focused modules for more targeted study — covering everything from supply and demand to market failure and public goods.",
        },
      },
    ],
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full" style={{ background: 'var(--accent)' }} />
          <span className="text-[11px] font-medium" style={{ color: 'var(--accent)' }}>
            {microCourse.modules.length} modules
          </span>
        </div>
        <h1 className="text-2xl font-bold tracking-tight mb-1.5" style={{ color: 'var(--color-ink)' }}>
          {microCourse.title}
        </h1>
        <p className="text-[15px]" style={{ color: 'var(--color-ink-muted)' }}>{microCourse.description}</p>
      </div>

      {/* SEO intro prose */}
      <div className="mb-10 text-[14px] leading-relaxed space-y-3" style={{ color: 'var(--color-ink-light)' }}>
        <p>
          AP Microeconomics covers how individual markets work — from the basic supply and demand model
          through market structures like monopoly and oligopoly, then into factor markets and market
          failure. The exam is split between multiple choice (66% of your score) and free-response
          questions (34%), and both sections lean heavily on graph analysis.
        </p>
        <p>
          Each module below includes written explanations, interactive graphs where available, AP-style
          practice questions with detailed answer breakdowns, and flashcards for key terms. The modules
          follow the sequence most AP Econ teachers use in class, but you can jump to any topic.
        </p>
      </div>

      <div className="space-y-0.5">
        {microCourse.modules.map((mod, index) => (
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
                  <span className="badge badge-micro text-[9px]">
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
