"use client";

import { useState, useEffect } from "react";

const phrases = [
  "Supply & Demand",
  "Fiscal Policy",
  "Market Structures",
  "The Phillips Curve",
  "International Trade",
  "Monetary Policy",
];

export default function TypingEffect() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const currentPhrase = phrases[phraseIndex];
  const displayText = currentPhrase.slice(0, charIndex);

  useEffect(() => {
    const typeSpeed = isDeleting ? 40 : 80;
    const pauseAfterType = 2000;
    const pauseAfterDelete = 400;

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex === currentPhrase.length) {
        // Pause then start deleting
        setTimeout(() => setIsDeleting(true), pauseAfterType);
        return;
      }

      if (isDeleting && charIndex === 0) {
        // Move to next phrase
        setIsDeleting(false);
        setPhraseIndex((i) => (i + 1) % phrases.length);
        return;
      }

      setCharIndex((c) => c + (isDeleting ? -1 : 1));
    }, isDeleting && charIndex === currentPhrase.length ? pauseAfterType : charIndex === 0 && !isDeleting ? pauseAfterDelete : typeSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentPhrase]);

  return (
    <span className="text-gradient">
      {displayText}
      <span
        className="inline-block w-[2px] h-[1em] ml-0.5 align-baseline animate-blink"
        style={{ background: "var(--color-ink-muted)" }}
      />
    </span>
  );
}
