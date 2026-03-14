"use client";

import dynamic from "next/dynamic";
import GraphSkeleton from "@/components/ui/GraphSkeleton";

const MoneyMarketGraph = dynamic(() => import("@/components/graphs/MoneyMarketGraph"), {
  ssr: false,
  loading: () => <GraphSkeleton />,
});
import PracticeQuiz from "@/components/ui/PracticeQuiz";
import { monetaryPolicyContent, monetaryPolicyQuestions } from "@/data/monetary-policy-content";
import type { PracticeQuestion } from "@/data/supply-demand-content";
import Link from "next/link";
import PageTransition from "@/components/layout/PageTransition";
import ScrollReveal from "@/components/layout/ScrollReveal";
import ModuleNav from "@/components/ui/ModuleNav";
import FlashcardDeck from "@/components/ui/FlashcardDeck";
import { monetaryPolicyFlashcards } from "@/data/flashcards/macro-flashcards";

export default function MonetaryPolicyPage() {
  return (
    <PageTransition>
    <div className="max-w-7xl mx-auto px-6 py-10 lg:py-14">
      <div className="module-breadcrumb">
        <Link href="/macro" className="hover:text-gray-600">Macro</Link>
        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <span className="current">{monetaryPolicyContent.title}</span>
      </div>

      <div className="module-header">
        <h1 className="text-2xl lg:text-3xl">
          {monetaryPolicyContent.title}
        </h1>
        <p >{monetaryPolicyContent.subtitle}</p>
      </div>

      <div className="grid lg:grid-cols-[1fr_480px] gap-10 items-start">
        <div className="order-2 lg:order-1">
          <div className="prose-econ">
            {monetaryPolicyContent.sections.map((section, i) => (
              <ScrollReveal key={i}><div className="mb-8">
                <h2>{section.heading}</h2>
                {section.content.split("\n\n").map((para, j) => (
                  <p key={j} dangerouslySetInnerHTML={{
                    __html: para.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>").replace(/\n/g, "<br />"),
                  }} />
                ))}
              </div></ScrollReveal>
            ))}
          </div>

          {/* Phillips Curve Cross-Reference */}
          <Link
            href="/macro/unemployment-inflation"
            className="card-interactive group flex items-center gap-4 p-5 mb-10"
          >
            <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(139, 92, 246, 0.08)" }}>
              <svg className="w-5 h-5 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold group-hover:text-violet-600 transition-colors" style={{ color: "var(--color-ink)" }}>
                See the Phillips Curve Trade-Off →
              </p>
              <p className="text-xs mt-0.5" style={{ color: "var(--color-ink-faint)" }}>
                Expansionary monetary policy moves the economy up the short-run Phillips Curve: lower unemployment, higher inflation.
              </p>
            </div>
          </Link>

          <div className="mb-10">
            <h2 style={{ color: "var(--color-ink)" }} className="text-lg font-semibold mb-1">Practice Questions</h2>
            <p style={{ color: "var(--color-ink-muted)" }} className="text-[13px] mb-5">
              AP-style questions to test your understanding.
            </p>
            <PracticeQuiz questions={monetaryPolicyQuestions} moduleId="monetary-policy" />
          </div>
        

          
          {/* Flashcards */}
          <div className="mb-10">
            <h2 style={{ color: "var(--color-ink)" }} className="text-lg font-semibold mb-1">
              Flashcards
            </h2>
            <p style={{ color: "var(--color-ink-muted)" }} className="text-[13px] mb-5">
              Tap to flip. Sort cards as you learn them.
            </p>
            <FlashcardDeck cards={monetaryPolicyFlashcards} moduleId="monetary-policy" />
          </div>
        
          <ModuleNav courseId="macro" currentModuleId="monetary-policy" />
        </div>

        <div className="order-1 lg:order-2 lg:sticky lg:top-6">
          <MoneyMarketGraph />
        </div>
      </div>
    </div>
    </PageTransition>
  );
}
