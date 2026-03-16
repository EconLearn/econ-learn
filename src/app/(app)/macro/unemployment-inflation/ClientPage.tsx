"use client";

import dynamic from "next/dynamic";
import GraphSkeleton from "@/components/ui/GraphSkeleton";

const PhillipsCurveGraph = dynamic(() => import("@/components/graphs/PhillipsCurveGraph"), {
  ssr: false,
  loading: () => <GraphSkeleton />,
});
import PracticeQuiz from "@/components/ui/PracticeQuiz";
import { unemploymentInflationContent, unemploymentInflationQuestions } from "@/data/unemployment-inflation-content";
import type { PracticeQuestion } from "@/data/supply-demand-content";
import Link from "next/link";
import PageTransition from "@/components/layout/PageTransition";
import ScrollReveal from "@/components/layout/ScrollReveal";
import ModuleNav from "@/components/ui/ModuleNav";
import FlashcardDeck from "@/components/ui/FlashcardDeck";
import { unemploymentInflationFlashcards } from "@/data/flashcards/macro-flashcards";

export default function UnemploymentInflationClientPage() {
  return (
    <PageTransition>
    <div className="max-w-7xl mx-auto px-6 py-10 lg:py-14">
      <div className="module-breadcrumb">
        <Link href="/macro" className="hover:text-gray-600">Macro</Link>
        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <span className="current">{unemploymentInflationContent.title}</span>
      </div>

      <div className="module-header">
        <h1 className="text-2xl lg:text-3xl">
          {unemploymentInflationContent.title}
        </h1>
        <p >{unemploymentInflationContent.subtitle}</p>
      </div>

      <div className="grid lg:grid-cols-[1fr_480px] gap-10 items-start">
        <div className="order-2 lg:order-1">
          <div className="prose-econ">
            {unemploymentInflationContent.sections.map((section, i) => (
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

          <div className="mb-10">
            <h2 style={{ color: "var(--color-ink)" }} className="text-lg font-semibold mb-1">Practice Questions</h2>
            <p style={{ color: "var(--color-ink-muted)" }} className="text-[13px] mb-5">
              AP-style questions to test your understanding.
            </p>
            <PracticeQuiz questions={unemploymentInflationQuestions} moduleId="unemployment-inflation" />
          </div>



          {/* Flashcards */}
          <div className="mb-10">
            <h2 style={{ color: "var(--color-ink)" }} className="text-lg font-semibold mb-1">
              Flashcards
            </h2>
            <p style={{ color: "var(--color-ink-muted)" }} className="text-[13px] mb-5">
              Tap to flip. Sort cards as you learn them.
            </p>
            <FlashcardDeck cards={unemploymentInflationFlashcards} moduleId="unemployment-inflation" />
          </div>

          <ModuleNav courseId="macro" currentModuleId="unemployment-inflation" />
        </div>

        <div className="order-1 lg:order-2 lg:sticky lg:top-6">
          <PhillipsCurveGraph />
        </div>
      </div>
    </div>
    </PageTransition>
  );
}
