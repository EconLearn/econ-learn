"use client";

import dynamic from "next/dynamic";
import GraphSkeleton from "@/components/ui/GraphSkeleton";

const ElasticityGraph = dynamic(() => import("@/components/graphs/ElasticityGraph"), {
  ssr: false,
  loading: () => <GraphSkeleton />,
});
import PracticeQuiz from "@/components/ui/PracticeQuiz";
import { elasticityContent, elasticityQuestions } from "@/data/elasticity-content";
import Link from "next/link";
import PageTransition from "@/components/layout/PageTransition";
import ScrollReveal from "@/components/layout/ScrollReveal";
import ModuleNav from "@/components/ui/ModuleNav";
import FlashcardDeck from "@/components/ui/FlashcardDeck";
import { elasticityFlashcards } from "@/data/flashcards/micro-flashcards";

export default function ElasticityClientPage() {
  return (
    <PageTransition>
    <div className="max-w-7xl mx-auto px-6 py-10 lg:py-14">
      <div className="module-breadcrumb">
        <Link href="/micro" className="hover:text-gray-600">
          Micro
        </Link>
        <svg
          className="w-3 h-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <span className="current">{elasticityContent.title}</span>
      </div>

      <div className="module-header">
        <h1 className="text-2xl lg:text-3xl">
          {elasticityContent.title}
        </h1>
        <p >
          {elasticityContent.subtitle}
        </p>
      </div>

      <div className="grid lg:grid-cols-[1fr_480px] gap-10 items-start">
        <div className="order-2 lg:order-1">
          <div className="prose-econ">
            {elasticityContent.sections.map((section, i) => (
              <ScrollReveal key={i}><div className="mb-8">
                <h2>{section.heading}</h2>
                {section.content.split("\n\n").map((para, j) => (
                  <p
                    key={j}
                    dangerouslySetInnerHTML={{
                      __html: para
                        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                        .replace(/\*(.*?)\*/g, "<em>$1</em>")
                        .replace(/\n/g, "<br />"),
                    }}
                  />
                ))}
              </div></ScrollReveal>
            ))}
          </div>

          <div className="mb-10">
            <h2 style={{ color: "var(--color-ink)" }} className="text-lg font-semibold mb-1">
              Practice Questions
            </h2>
            <p style={{ color: "var(--color-ink-muted)" }} className="text-[13px] mb-5">
              AP-style questions to test your understanding.
            </p>
            <PracticeQuiz questions={elasticityQuestions} moduleId="elasticity" />
          </div>



          {/* Flashcards */}
          <div className="mb-10">
            <h2 style={{ color: "var(--color-ink)" }} className="text-lg font-semibold mb-1">
              Flashcards
            </h2>
            <p style={{ color: "var(--color-ink-muted)" }} className="text-[13px] mb-5">
              Tap to flip. Sort cards as you learn them.
            </p>
            <FlashcardDeck cards={elasticityFlashcards} moduleId="elasticity" />
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
              <Link href="/micro/consumer-choice" className="card-interactive group flex items-center gap-3 p-3.5">
                <div className="flex-1">
                  <p className="text-sm font-medium" style={{ color: "var(--color-ink)" }}>Consumer Choice</p>
                  <p className="text-xs" style={{ color: "var(--color-ink-faint)" }}>Utility, indifference curves, budget constraints, and optimal choice.</p>
                </div>
                <svg className="w-4 h-4 flex-shrink-0" style={{ color: "var(--color-border)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link href="/micro/monopoly" className="card-interactive group flex items-center gap-3 p-3.5">
                <div className="flex-1">
                  <p className="text-sm font-medium" style={{ color: "var(--color-ink)" }}>Monopoly</p>
                  <p className="text-xs" style={{ color: "var(--color-ink-faint)" }}>Single-firm markets, MR below price, and deadweight loss.</p>
                </div>
                <svg className="w-4 h-4 flex-shrink-0" style={{ color: "var(--color-border)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          <ModuleNav courseId="micro" currentModuleId="elasticity" />
        </div>

        <div className="order-1 lg:order-2 lg:sticky lg:top-6">
          <ElasticityGraph />
        </div>
      </div>
    </div>
    </PageTransition>
  );
}
