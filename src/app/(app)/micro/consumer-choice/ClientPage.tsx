"use client";

import PracticeQuiz from "@/components/ui/PracticeQuiz";
import {
  consumerChoiceContent,
  consumerChoiceQuestions,
} from "@/data/consumer-choice-content";
import Link from "next/link";
import PageTransition from "@/components/layout/PageTransition";
import ScrollReveal from "@/components/layout/ScrollReveal";
import ModuleNav from "@/components/ui/ModuleNav";
import FlashcardDeck from "@/components/ui/FlashcardDeck";
import { consumerChoiceFlashcards } from "@/data/flashcards/micro-flashcards";

export default function ConsumerChoiceClientPage() {
  return (
    <PageTransition>
      <div className="max-w-3xl mx-auto px-6 py-10 lg:py-14">
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
            {consumerChoiceContent.title}
          </span>
        </div>

        {/* Title */}
        <div className="module-header">
          <h1 className="text-2xl lg:text-3xl">
            {consumerChoiceContent.title}
          </h1>
          <p >
            {consumerChoiceContent.subtitle}
          </p>
        </div>

        {/* Content - single column, no graph */}
        <div className="prose-econ">
          {consumerChoiceContent.sections.map((section, i) => (
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
          <PracticeQuiz questions={consumerChoiceQuestions} moduleId="consumer-choice" />
        </div>


          {/* Flashcards */}
          <div className="mb-10">
            <h2 style={{ color: "var(--color-ink)" }} className="text-lg font-semibold mb-1">
              Flashcards
            </h2>
            <p style={{ color: "var(--color-ink-muted)" }} className="text-[13px] mb-5">
              Tap to flip. Sort cards as you learn them.
            </p>
            <FlashcardDeck cards={consumerChoiceFlashcards} moduleId="consumer-choice" />
          </div>

          <ModuleNav courseId="micro" currentModuleId="consumer-choice" />
      </div>
    </PageTransition>
  );
}
