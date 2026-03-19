import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About EconLearn",
  description:
    "EconLearn is a free AP Economics study platform with interactive graphs, 350+ practice questions, and flashcards. Built for students who learn by doing.",
  alternates: { canonical: "https://www.econlearn.org/about" },
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
          Most AP Econ study tools hand you a wall of text and hope for the
          best. EconLearn is different — you can actually drag the supply curve,
          watch deadweight loss show up on the graph, and then answer
          AP-style questions about what you just saw.
        </p>

        <h2>Why This Exists</h2>
        <p>
          AP Economics is one of the most graph-heavy AP exams. The FRQ section
          practically lives on diagrams — AD/AS, supply and demand, cost curves,
          Phillips curve. But most prep materials give you a static image and
          a paragraph. That disconnect between how you study and how you get
          tested is the whole reason EconLearn was built.
        </p>
        <p>
          Each module has written content alongside an interactive graph.
          You move the curves, the numbers update, and the explanation
          on the left connects to what you see on the right. It sticks
          better than re-reading highlighted notes at 1 AM.
        </p>

        <h2>What&apos;s Included</h2>
        <p>
          24 modules across AP Micro and AP Macro. Over 350 multiple-choice
          questions — each one has an explanation, not just the right answer.
          144+ flashcards if you want something quick before the test. 15 graphs
          you can actually interact with. A dashboard that tracks quiz scores,
          streaks, and how far along you are.
        </p>
        <p>
          There&apos;s no paywall. Everything is open.
        </p>

        <h2>Who Uses EconLearn</h2>
        <p>
          Mostly high schoolers studying for the AP Micro or Macro exam — that&apos;s
          who it was built for. But it also works for college intro econ students
          or anyone who wants to actually understand how markets function beyond
          the textbook definition. If you&apos;re the kind of person who learns
          by messing with things rather than reading about them, this should
          click for you.
        </p>

        <h2>Still Building</h2>
        <p>
          New modules, better graphs, and more practice questions get added on
          a rolling basis. Found a mistake? Have an idea for a graph?
          Email{" "}
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

        {/* For Institutions */}
        <div className="mt-16 pt-10" style={{ borderTop: "1px solid var(--color-border)" }}>
          <h2
            className="text-xl font-bold mb-3"
            style={{ color: "var(--color-ink)" }}
          >
            For Schools &amp; Districts
          </h2>
          <p
            className="text-sm leading-relaxed mb-4"
            style={{ color: "var(--color-ink-muted)" }}
          >
            EconLearn is now available for schools and districts looking to provide a unified AP Economics platform across
            multiple classrooms. Volume pricing, dedicated onboarding, lockdown exams, and cross-school analytics included.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/schools"
              className="text-sm font-medium hover:text-blue-600 transition-colors"
              style={{ color: "#3B82F6" }}
            >
              For Schools &rarr;
            </Link>
            <Link
              href="/districts"
              className="text-sm font-medium hover:text-blue-600 transition-colors"
              style={{ color: "#3B82F6" }}
            >
              For Districts &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
