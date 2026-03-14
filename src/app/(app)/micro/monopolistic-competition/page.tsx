"use client";

import dynamic from "next/dynamic";
import GraphSkeleton from "@/components/ui/GraphSkeleton";

const MonopolisticCompGraph = dynamic(() => import("@/components/graphs/MonopolisticCompGraph"), {
  ssr: false,
  loading: () => <GraphSkeleton />,
});
import PracticeQuiz from "@/components/ui/PracticeQuiz";
import {
  monopolisticCompContent,
  monopolisticCompQuestions,
} from "@/data/monopolistic-competition-content";
import Link from "next/link";
import PageTransition from "@/components/layout/PageTransition";
import ScrollReveal from "@/components/layout/ScrollReveal";
import ModuleNav from "@/components/ui/ModuleNav";
import FlashcardDeck from "@/components/ui/FlashcardDeck";
import { monopolisticCompetitionFlashcards } from "@/data/flashcards/micro-flashcards";

export default function MonopolisticCompetitionPage() {
  return (
    <PageTransition>
      <div className="max-w-7xl mx-auto px-6 py-10 lg:py-14">
        {/* Breadcrumb */}
        <div className="module-breadcrumb">
          <Link
            href="/micro"
            className="hover:text-gray-600"
          >
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
            {monopolisticCompContent.title}
          </span>
        </div>

        {/* Title */}
        <div className="module-header">
          <h1 className="text-2xl lg:text-3xl">
            {monopolisticCompContent.title}
          </h1>
          <p >
            {monopolisticCompContent.subtitle}
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-[1fr_480px] gap-10 items-start">
          {/* Left: content + quiz */}
          <div className="order-2 lg:order-1">
            <div className="prose-econ">
              {monopolisticCompContent.sections.map((section, i) => (
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

            {/* Practice questions */}
            <div className="mb-10">
              <h2 style={{ color: "var(--color-ink)" }} className="text-lg font-semibold mb-1">
                Practice Questions
              </h2>
              <p style={{ color: "var(--color-ink-muted)" }} className="text-[13px] mb-5">
                AP-style questions to test your understanding.
              </p>
              <PracticeQuiz questions={monopolisticCompQuestions} moduleId="monopolistic-competition" />
            </div>
          

          
          {/* Flashcards */}
          <div className="mb-10">
            <h2 style={{ color: "var(--color-ink)" }} className="text-lg font-semibold mb-1">
              Flashcards
            </h2>
            <p style={{ color: "var(--color-ink-muted)" }} className="text-[13px] mb-5">
              Tap to flip. Sort cards as you learn them.
            </p>
            <FlashcardDeck cards={monopolisticCompetitionFlashcards} moduleId="monopolistic-competition" />
          </div>
        
          <ModuleNav courseId="micro" currentModuleId="monopolistic-competition" />
        </div>

          {/* Right: interactive graph (sticky) */}
          <div className="order-1 lg:order-2 lg:sticky lg:top-6">
            <MonopolisticCompGraph />
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
