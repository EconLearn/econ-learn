"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface Flashcard {
  id: string;
  front: string;
  back: string;
}

interface FlashcardDeckProps {
  cards: Flashcard[];
  moduleId: string;
}

export default function FlashcardDeck({ cards, moduleId }: FlashcardDeckProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [known, setKnown] = useState<Set<string>>(new Set());
  const [learning, setLearning] = useState<Set<string>>(new Set());
  const [showSummary, setShowSummary] = useState(false);

  const card = cards[currentIndex];
  const progress = currentIndex + 1;
  const total = cards.length;

  const handleFlip = useCallback(() => setFlipped((f) => !f), []);

  const advance = useCallback(() => {
    setFlipped(false);
    if (currentIndex < cards.length - 1) {
      setTimeout(() => setCurrentIndex((i) => i + 1), 150);
    } else {
      setTimeout(() => setShowSummary(true), 150);
    }
  }, [currentIndex, cards.length]);

  const handleKnow = useCallback(() => {
    setKnown((prev) => new Set(prev).add(card.id));
    advance();
  }, [card?.id, advance]);

  const handleLearning = useCallback(() => {
    setLearning((prev) => new Set(prev).add(card.id));
    advance();
  }, [card?.id, advance]);

  const handleRestart = () => {
    setCurrentIndex(0);
    setFlipped(false);
    setKnown(new Set());
    setLearning(new Set());
    setShowSummary(false);
  };

  // Keyboard navigation
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        handleFlip();
      } else if (e.key === "ArrowRight" && flipped) {
        handleKnow();
      } else if (e.key === "ArrowLeft" && flipped) {
        handleLearning();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [flipped, handleFlip, handleKnow, handleLearning]);

  if (showSummary) {
    return (
      <div
        className="card p-6 text-center"
      >
        <div className="text-3xl mb-3">🎯</div>
        <h3
          className="text-lg font-semibold mb-2"
          style={{ color: "var(--color-ink)" }}
        >
          Deck Complete!
        </h3>
        <div className="flex justify-center gap-6 mb-4">
          <div>
            <p
              className="text-2xl font-bold"
              style={{ color: "var(--graph-equilibrium)" }}
            >
              {known.size}
            </p>
            <p
              className="text-[11px]"
              style={{ color: "var(--color-ink-muted)" }}
            >
              Know it
            </p>
          </div>
          <div>
            <p
              className="text-2xl font-bold"
              style={{ color: "var(--graph-demand)" }}
            >
              {learning.size}
            </p>
            <p
              className="text-[11px]"
              style={{ color: "var(--color-ink-muted)" }}
            >
              Still learning
            </p>
          </div>
        </div>
        <button
          onClick={handleRestart}
          className="btn-primary text-sm"
        >
          Study Again
        </button>
      </div>
    );
  }

  return (
    <div>
      {/* Progress */}
      <div className="flex items-center justify-between mb-3">
        <span
          className="text-[12px] font-medium tabular-nums"
          style={{ color: "var(--color-ink-muted)" }}
        >
          {progress} / {total}
        </span>
        <div className="flex gap-3">
          <span
            className="text-[11px]"
            style={{ color: "var(--graph-equilibrium)" }}
          >
            ✓ {known.size}
          </span>
          <span
            className="text-[11px]"
            style={{ color: "var(--graph-demand)" }}
          >
            ✕ {learning.size}
          </span>
        </div>
      </div>

      {/* Progress bar */}
      <div
        className="h-1 rounded-full mb-4 overflow-hidden"
        style={{ background: "var(--color-surface-sunken)" }}
      >
        <div
          className="h-full rounded-full transition-all duration-300"
          style={{
            width: `${(progress / total) * 100}%`,
            background: "var(--graph-equilibrium)",
          }}
        />
      </div>

      {/* Card */}
      <div
        className="relative cursor-pointer select-none"
        onClick={handleFlip}
        style={{ perspective: "1000px", minHeight: 200 }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={`${card.id}-${flipped ? "back" : "front"}`}
            initial={{ rotateY: flipped ? -90 : 90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: flipped ? 90 : -90, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="card p-6 flex flex-col items-center justify-center text-center"
            style={{ minHeight: 200 }}
          >
            <p
              className="text-[10px] font-semibold uppercase tracking-wider mb-3"
              style={{
                color: flipped
                  ? "var(--graph-equilibrium)"
                  : "var(--graph-demand)",
              }}
            >
              {flipped ? "Answer" : "Term"}
            </p>
            <p
              className="text-[15px] leading-relaxed font-medium"
              style={{ color: "var(--color-ink)" }}
            >
              {flipped ? card.back : card.front}
            </p>
            {!flipped && (
              <p
                className="text-[11px] mt-4"
                style={{ color: "var(--color-ink-faint)" }}
              >
                Tap to reveal • Space bar
              </p>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Action buttons (only show when flipped) */}
      {flipped && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex gap-3 mt-4"
        >
          <button
            onClick={handleLearning}
            className="flex-1 py-2.5 rounded-xl text-[13px] font-medium transition-all active:scale-95"
            style={{
              border: "1px solid var(--graph-demand)",
              color: "var(--graph-demand)",
            }}
          >
            Still Learning ←
          </button>
          <button
            onClick={handleKnow}
            className="flex-1 py-2.5 rounded-xl text-[13px] font-medium transition-all active:scale-95"
            style={{
              background: "var(--graph-equilibrium)",
              color: "white",
            }}
          >
            Know It →
          </button>
        </motion.div>
      )}
    </div>
  );
}
