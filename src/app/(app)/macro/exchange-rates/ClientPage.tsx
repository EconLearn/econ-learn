"use client";

import dynamic from "next/dynamic";
import GraphSkeleton from "@/components/ui/GraphSkeleton";

const ExchangeRateGraph = dynamic(() => import("@/components/graphs/ExchangeRateGraph"), {
  ssr: false,
  loading: () => <GraphSkeleton />,
});
import PracticeQuiz from "@/components/ui/PracticeQuiz";
import {
  exchangeRatesContent,
  exchangeRatesQuestions,
} from "@/data/exchange-rates-content";
import Link from "next/link";
import PageTransition from "@/components/layout/PageTransition";
import ScrollReveal from "@/components/layout/ScrollReveal";
import ModuleNav from "@/components/ui/ModuleNav";
import FlashcardDeck from "@/components/ui/FlashcardDeck";
import { exchangeRatesFlashcards } from "@/data/flashcards/macro-flashcards";

export default function ExchangeRatesClientPage() {
  return (
    <PageTransition>
    <div className="max-w-7xl mx-auto px-6 py-10 lg:py-14">
      <div className="module-breadcrumb">
        <Link href="/macro" className="hover:text-gray-600">
          Macro
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
        <span className="current">
          {exchangeRatesContent.title}
        </span>
      </div>

      <div className="module-header">
        <h1 className="text-2xl lg:text-3xl">
          {exchangeRatesContent.title}
        </h1>
        <p >
          {exchangeRatesContent.subtitle}
        </p>
      </div>

      <div className="grid lg:grid-cols-[1fr_480px] gap-10 items-start">
        <div className="order-2 lg:order-1">
          <div className="prose-econ">
            {exchangeRatesContent.sections.map((section, i) => (
              <ScrollReveal key={i}><div className="mb-8">
                <h2>{section.heading}</h2>
                {section.content.split("\n\n").map((para, j) => (
                  <p
                    key={j}
                    dangerouslySetInnerHTML={{
                      __html: para
                        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
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
            <PracticeQuiz questions={exchangeRatesQuestions} moduleId="exchange-rates" />
          </div>



          {/* Flashcards */}
          <div className="mb-10">
            <h2 style={{ color: "var(--color-ink)" }} className="text-lg font-semibold mb-1">
              Flashcards
            </h2>
            <p style={{ color: "var(--color-ink-muted)" }} className="text-[13px] mb-5">
              Tap to flip. Sort cards as you learn them.
            </p>
            <FlashcardDeck cards={exchangeRatesFlashcards} moduleId="exchange-rates" />
          </div>

          {/* Related Topics */}
          <div className="mb-10">
            <h2 style={{ color: "var(--color-ink)" }} className="text-lg font-semibold mb-3">
              Related Topics
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <Link href="/macro/international-trade" className="card-interactive group flex items-center gap-3 p-3.5">
                <div className="flex-1">
                  <p className="text-sm font-medium" style={{ color: "var(--color-ink)" }}>International Trade</p>
                  <p className="text-xs" style={{ color: "var(--color-ink-faint)" }}>Comparative advantage, tariffs, quotas, and trade effects.</p>
                </div>
                <svg className="w-4 h-4 flex-shrink-0" style={{ color: "var(--color-border)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link href="/macro/loanable-funds" className="card-interactive group flex items-center gap-3 p-3.5">
                <div className="flex-1">
                  <p className="text-sm font-medium" style={{ color: "var(--color-ink)" }}>The Loanable Funds Market</p>
                  <p className="text-xs" style={{ color: "var(--color-ink-faint)" }}>Saving, investment, real interest rates, and crowding out.</p>
                </div>
                <svg className="w-4 h-4 flex-shrink-0" style={{ color: "var(--color-border)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link href="/macro/monetary-policy" className="card-interactive group flex items-center gap-3 p-3.5">
                <div className="flex-1">
                  <p className="text-sm font-medium" style={{ color: "var(--color-ink)" }}>Monetary Policy</p>
                  <p className="text-xs" style={{ color: "var(--color-ink-faint)" }}>The Federal Reserve, interest rates, and money supply tools.</p>
                </div>
                <svg className="w-4 h-4 flex-shrink-0" style={{ color: "var(--color-border)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          <ModuleNav courseId="macro" currentModuleId="exchange-rates" />
        </div>

        <div className="order-1 lg:order-2 lg:sticky lg:top-6">
          <ExchangeRateGraph />
        </div>
      </div>
    </div>
    </PageTransition>
  );
}
