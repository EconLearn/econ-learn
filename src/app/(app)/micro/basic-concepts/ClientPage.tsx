"use client";

import dynamic from "next/dynamic";
import GraphSkeleton from "@/components/ui/GraphSkeleton";

const PPCGraph = dynamic(() => import("@/components/graphs/PPCGraph"), {
  ssr: false,
  loading: () => <GraphSkeleton />,
});
import PracticeQuiz from "@/components/ui/PracticeQuiz";
import {
  basicConceptsContent,
  basicConceptsQuestions,
} from "@/data/basic-concepts-content";
import Link from "next/link";
import PageTransition from "@/components/layout/PageTransition";
import ScrollReveal from "@/components/layout/ScrollReveal";
import ModuleNav from "@/components/ui/ModuleNav";
import FlashcardDeck from "@/components/ui/FlashcardDeck";
import { basicConceptsFlashcards } from "@/data/flashcards/micro-flashcards";

export default function BasicConceptsClientPage() {
  return (
    <PageTransition>
    <div className="max-w-7xl mx-auto px-6 py-10 lg:py-14">
      {/* Breadcrumb */}
      <div className="module-breadcrumb">
        <Link href="/micro" className="hover:text-gray-600">
          Micro
        </Link>
        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <span className="current">
          {basicConceptsContent.title}
        </span>
      </div>

      {/* Title */}
      <div className="module-header">
        <h1 className="text-2xl lg:text-3xl">
          {basicConceptsContent.title}
        </h1>
        <p >
          {basicConceptsContent.subtitle}
        </p>
      </div>

      {/* Main content: two-column layout on desktop */}
      <div className="grid lg:grid-cols-[1fr_480px] gap-10 items-start">
        {/* Left: explanation content */}
        <div className="order-2 lg:order-1">
          <div className="prose-econ">
            {basicConceptsContent.sections.map((section, i) => (
              <ScrollReveal key={i}><div className="mb-8">
                <h2>{section.heading}</h2>
                {section.content.split("\n\n").map((para, j) => (
                  <p key={j} dangerouslySetInnerHTML={{
                    __html: para
                      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                      .replace(/\n/g, "<br />"),
                  }} />
                ))}
              </div></ScrollReveal>
            ))}
          </div>

          {/* Key takeaways */}
          <div className="card p-5 mb-14">
            <p style={{ color: "var(--color-ink-muted)" }} className="text-xs font-semibold uppercase tracking-wider mb-3">
              Key takeaways
            </p>
            <ul className="space-y-2">
              {[
                "Scarcity is universal. Even wealthy societies face it.",
                "Opportunity cost is the value of the single next-best alternative, not everything you gave up.",
                "Points on the PPC are efficient. Inside is inefficient. Outside is unattainable.",
                "The PPC bows outward because of increasing opportunity costs.",
                "Comparative advantage, not absolute advantage, determines who should produce what.",
                "The PPC shifts outward with growth (technology, resources) and inward with destruction.",
              ].map((takeaway, i) => (
                <li key={i} style={{ color: "var(--color-ink-light)" }} className="text-[13px] leading-relaxed">
                  {takeaway}
                </li>
              ))}
            </ul>
          </div>

          {/* Practice questions */}
          <div className="mb-10">
            <h2 style={{ color: "var(--color-ink)" }} className="text-lg font-semibold mb-1">
              Practice Questions
            </h2>
            <p style={{ color: "var(--color-ink-muted)" }} className="text-[13px] mb-5">
              AP-style questions to test your understanding.
            </p>
            <PracticeQuiz questions={basicConceptsQuestions} moduleId="basic-concepts" />
          </div>



          {/* Flashcards */}
          <div className="mb-10">
            <h2 style={{ color: "var(--color-ink)" }} className="text-lg font-semibold mb-1">
              Flashcards
            </h2>
            <p style={{ color: "var(--color-ink-muted)" }} className="text-[13px] mb-5">
              Tap to flip. Sort cards as you learn them.
            </p>
            <FlashcardDeck cards={basicConceptsFlashcards} moduleId="basic-concepts" />
          </div>

          {/* Related Topics */}
          <div className="mb-10">
            <h2 style={{ color: "var(--color-ink)" }} className="text-lg font-semibold mb-3">
              Related Topics
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <Link href="/micro/supply-and-demand" className="card-interactive group flex items-center gap-3 p-3.5">
                <div className="flex-1">
                  <p className="text-sm font-medium" style={{ color: "var(--color-ink)" }}>Supply and Demand</p>
                  <p className="text-xs" style={{ color: "var(--color-ink-faint)" }}>Market equilibrium, curve shifts, price controls, and economic shocks.</p>
                </div>
                <svg className="w-4 h-4 flex-shrink-0" style={{ color: "var(--color-border)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link href="/micro/elasticity" className="card-interactive group flex items-center gap-3 p-3.5">
                <div className="flex-1">
                  <p className="text-sm font-medium" style={{ color: "var(--color-ink)" }}>Elasticity</p>
                  <p className="text-xs" style={{ color: "var(--color-ink-faint)" }}>Price elasticity of demand, total revenue test, and cross-price elasticity.</p>
                </div>
                <svg className="w-4 h-4 flex-shrink-0" style={{ color: "var(--color-border)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link href="/micro/production-costs" className="card-interactive group flex items-center gap-3 p-3.5">
                <div className="flex-1">
                  <p className="text-sm font-medium" style={{ color: "var(--color-ink)" }}>Production and Costs</p>
                  <p className="text-xs" style={{ color: "var(--color-ink-faint)" }}>Short-run production, cost curves, and diminishing returns.</p>
                </div>
                <svg className="w-4 h-4 flex-shrink-0" style={{ color: "var(--color-border)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          <ModuleNav courseId="micro" currentModuleId="basic-concepts" />
        </div>

        {/* Right: interactive graph (sticky on desktop) */}
        <div className="order-1 lg:order-2 lg:sticky lg:top-6">
          <PPCGraph />
        </div>
      </div>
    </div>
    </PageTransition>
  );
}
