"use client";

import dynamic from "next/dynamic";
import GraphSkeleton from "@/components/ui/GraphSkeleton";

const ProductionCostsGraph = dynamic(() => import("@/components/graphs/ProductionCostsGraph"), {
  ssr: false,
  loading: () => <GraphSkeleton />,
});
import PracticeQuiz from "@/components/ui/PracticeQuiz";
import {
  productionCostsContent,
  productionCostsQuestions,
} from "@/data/production-costs-content";
import Link from "next/link";
import PageTransition from "@/components/layout/PageTransition";
import ScrollReveal from "@/components/layout/ScrollReveal";
import ModuleNav from "@/components/ui/ModuleNav";
import FlashcardDeck from "@/components/ui/FlashcardDeck";
import { productionCostsFlashcards } from "@/data/flashcards/micro-flashcards";

export default function ProductionCostsPage() {
  return (
    <PageTransition>
    <div className="max-w-7xl mx-auto px-6 py-10 lg:py-14">
      {/* Breadcrumb */}
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
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 5l7 7-7 7"
          />
        </svg>
        <span className="current">
          {productionCostsContent.title}
        </span>
      </div>

      {/* Title */}
      <div className="module-header">
        <h1 className="text-2xl lg:text-3xl">
          {productionCostsContent.title}
        </h1>
        <p >
          {productionCostsContent.subtitle}
        </p>
      </div>

      {/* Main content: two-column layout on desktop */}
      <div className="grid lg:grid-cols-[1fr_480px] gap-10 items-start">
        {/* Left: explanation content */}
        <div className="order-2 lg:order-1">
          <div className="prose-econ">
            {productionCostsContent.sections.map((section, i) => (
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

          {/* Key takeaways */}
          <div className="card p-5 mb-14">
            <p style={{ color: "var(--color-ink-muted)" }} className="text-xs font-semibold uppercase tracking-wider mb-3">
              Key takeaways
            </p>
            <ul className="space-y-2">
              {[
                "Diminishing marginal returns cause MC to eventually rise in the short run.",
                "MC crosses ATC and AVC at their minimum points.",
                "AFC declines continuously, which is why ATC and AVC converge.",
                "A firm shuts down when price falls below minimum AVC.",
                "The MC curve above AVC is the competitive firm's short-run supply curve.",
                "Economies of scale explain why LRATC declines at low output levels.",
              ].map((takeaway, i) => (
                <li
                  key={i}
                  style={{ color: "var(--color-ink-light)" }} className="text-[13px] leading-relaxed"
                >
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
            <PracticeQuiz questions={productionCostsQuestions} moduleId="production-costs" />
          </div>
        

          
          {/* Flashcards */}
          <div className="mb-10">
            <h2 style={{ color: "var(--color-ink)" }} className="text-lg font-semibold mb-1">
              Flashcards
            </h2>
            <p style={{ color: "var(--color-ink-muted)" }} className="text-[13px] mb-5">
              Tap to flip. Sort cards as you learn them.
            </p>
            <FlashcardDeck cards={productionCostsFlashcards} moduleId="production-costs" />
          </div>
        
          <ModuleNav courseId="micro" currentModuleId="production-costs" />
        </div>

        {/* Right: interactive graph (sticky on desktop) */}
        <div className="order-1 lg:order-2 lg:sticky lg:top-6">
          <ProductionCostsGraph />
        </div>
      </div>
    </div>
    </PageTransition>
  );
}
