// Google Analytics 4 event tracking utility

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || "";

// Track a custom event
export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>
) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", eventName, params);
}

// Pre-defined event helpers
export function trackQuizComplete(moduleId: string, score: number, total: number) {
  trackEvent("quiz_complete", {
    module_id: moduleId,
    score_percent: Math.round((score / total) * 100),
    correct: score,
    total_questions: total,
  });
}

export function trackFlashcardInteraction(moduleId: string, action: "flip" | "known" | "learning") {
  trackEvent("flashcard_interaction", {
    module_id: moduleId,
    action,
  });
}

export function trackModuleStart(moduleId: string, course: "micro" | "macro") {
  trackEvent("module_start", {
    module_id: moduleId,
    course,
  });
}

export function trackSignup(method: "email" | "google") {
  trackEvent("sign_up", { method });
}

export function trackEmailSubscribe(source: string) {
  trackEvent("email_subscribe", { source });
}
