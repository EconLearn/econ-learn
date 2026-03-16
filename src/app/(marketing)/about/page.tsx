import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About EconLearn",
  description:
    "EconLearn is a free AP Economics study platform with interactive graphs, 350+ practice questions, and flashcards. Built for students who learn by doing.",
  alternates: { canonical: "https://econlearn.org/about" },
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-5 sm:px-6 py-20">
      <h1
        className="text-3xl sm:text-4xl font-bold tracking-tight mb-6"
        style={{ color: "var(--color-ink)" }}
      >
        About EconLearn
      </h1>

      <div className="prose-custom space-y-6">
        <p className="text-lg leading-relaxed" style={{ color: "var(--color-ink-muted)" }}>
          EconLearn exists because economics makes more sense when you can see
          it. Textbook graphs are static. Lectures are linear. Neither gives
          you the chance to drag a supply curve and watch surplus appear in real
          time.
        </p>

        <h2>Why We Built This</h2>
        <p>
          AP Economics has some of the most visual content of any AP course,
          but most study resources treat it like a reading assignment. Students
          memorize definitions without building the intuition that carries them
          through free-response questions. EconLearn flips that around.
        </p>
        <p>
          Every module pairs written explanations with interactive graphs you
          can manipulate. Shift demand, adjust a tax, change the money supply.
          The immediate visual feedback makes abstract concepts stick in a way
          that highlighting a textbook never will.
        </p>

        <h2>What You Get</h2>
        <p>
          24 modules covering AP Microeconomics and AP Macroeconomics. 350+
          multiple-choice questions with detailed explanations. 144+ flashcards
          for quick review. 15 interactive graphs you can drag, toggle, and
          explore. Study streaks, achievements, and a personal dashboard to
          track your progress.
        </p>
        <p>
          All of it free. No premium tier, no paywall, no trial period.
        </p>

        <h2>Who It&apos;s For</h2>
        <p>
          High school students preparing for the AP Micro or AP Macro exam.
          College freshmen taking introductory economics. Self-learners who
          want to understand how markets, governments, and international trade
          actually work. If you learn better by doing than by reading, this
          was built for you.
        </p>

        <h2>Open &amp; Improving</h2>
        <p>
          EconLearn is a work in progress. New content, better graphs, and
          additional features are added regularly. If you find an error, have a
          suggestion, or want to contribute, reach out at{" "}
          <span style={{ color: "var(--color-ink)" }}>
            hello@econlearn.org
          </span>
          .
        </p>

        <div className="pt-4">
          <Link
            href="/micro/basic-concepts"
            className="btn-primary inline-flex items-center px-6 py-3"
          >
            Start Learning
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
