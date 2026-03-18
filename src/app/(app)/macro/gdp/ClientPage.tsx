"use client";

import PracticeQuiz from "@/components/ui/PracticeQuiz";
import { gdpContent, gdpQuestions } from "@/data/gdp-content";
import Link from "next/link";
import PageTransition from "@/components/layout/PageTransition";
import ScrollReveal from "@/components/layout/ScrollReveal";
import ModuleNav from "@/components/ui/ModuleNav";
import FlashcardDeck from "@/components/ui/FlashcardDeck";
import { gdpFlashcards } from "@/data/flashcards/macro-flashcards";

export default function GDPClientPage() {
  return (
    <PageTransition>
      <div className="max-w-3xl mx-auto px-6 py-10 lg:py-14">
        <div className="module-breadcrumb">
          <Link
            href="/macro"
            className="hover:text-gray-600"
          >
            Macro
          </Link>
          <svg
            className="w-3 h-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
          <span className="current">
            {gdpContent.title}
          </span>
        </div>

        <div className="module-header">
          <h1 className="text-2xl lg:text-3xl">
            {gdpContent.title}
          </h1>
          <p >
            {gdpContent.subtitle}
          </p>
        </div>

        <div className="prose-econ">
          {gdpContent.sections.map((section, i) => (
            <ScrollReveal key={i}>
              <div className="mb-8">
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
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mb-10">
          <h2 style={{ color: "var(--color-ink)" }} className="text-lg font-semibold mb-1">
            Practice Questions
          </h2>
          <p style={{ color: "var(--color-ink-muted)" }} className="text-[13px] mb-5">
            AP-style questions to test your understanding.
          </p>
          <PracticeQuiz questions={gdpQuestions} moduleId="gdp" />
        </div>


          {/* Flashcards */}
          <div className="mb-10">
            <h2 style={{ color: "var(--color-ink)" }} className="text-lg font-semibold mb-1">
              Flashcards
            </h2>
            <p style={{ color: "var(--color-ink-muted)" }} className="text-[13px] mb-5">
              Tap to flip. Sort cards as you learn them.
            </p>
            <FlashcardDeck cards={gdpFlashcards} moduleId="gdp" />
          </div>

          {/* Related Topics */}
          <div className="mb-10">
            <h2 style={{ color: "var(--color-ink)" }} className="text-lg font-semibold mb-3">
              Related Topics
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <Link href="/macro/basic-macro-concepts" className="card-interactive group flex items-center gap-3 p-3.5">
                <div className="flex-1">
                  <p className="text-sm font-medium" style={{ color: "var(--color-ink)" }}>Basic Macroeconomic Concepts</p>
                  <p className="text-xs" style={{ color: "var(--color-ink-faint)" }}>Circular flow, economic systems, and macroeconomic goals.</p>
                </div>
                <svg className="w-4 h-4 flex-shrink-0" style={{ color: "var(--color-border)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link href="/macro/business-cycle" className="card-interactive group flex items-center gap-3 p-3.5">
                <div className="flex-1">
                  <p className="text-sm font-medium" style={{ color: "var(--color-ink)" }}>The Business Cycle</p>
                  <p className="text-xs" style={{ color: "var(--color-ink-faint)" }}>Expansions, peaks, contractions, troughs, and economic indicators.</p>
                </div>
                <svg className="w-4 h-4 flex-shrink-0" style={{ color: "var(--color-border)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link href="/macro/unemployment-inflation" className="card-interactive group flex items-center gap-3 p-3.5">
                <div className="flex-1">
                  <p className="text-sm font-medium" style={{ color: "var(--color-ink)" }}>Unemployment & Inflation</p>
                  <p className="text-xs" style={{ color: "var(--color-ink-faint)" }}>Types of unemployment, CPI, and the Phillips curve.</p>
                </div>
                <svg className="w-4 h-4 flex-shrink-0" style={{ color: "var(--color-border)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          <ModuleNav courseId="macro" currentModuleId="gdp" />
      </div>
    </PageTransition>
  );
}
