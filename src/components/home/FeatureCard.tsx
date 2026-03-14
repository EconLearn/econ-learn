"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export default function FeatureCard({
  icon,
  title,
  description,
  delay = 0,
}: FeatureCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) =>
      setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const content = (
    <>
      {/* Accent bottom border on hover */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-600
                    scale-x-0 group-hover:scale-x-100 transition-transform
                    duration-300 origin-left"
      />
      <div className="mb-4" style={{ color: "var(--color-ink-light)" }}>{icon}</div>
      <h3 className="text-lg font-semibold mb-2" style={{ color: "var(--color-ink)" }}>{title}</h3>
      <p className="text-[15px] leading-relaxed" style={{ color: "var(--color-ink-muted)" }}>
        {description}
      </p>
    </>
  );

  const cardClasses =
    "card-interactive group relative p-7 overflow-hidden";

  if (prefersReducedMotion) {
    return (
      <div ref={ref} className={cardClasses}>
        {content}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      className={cardClasses}
    >
      {content}
    </motion.div>
  );
}
