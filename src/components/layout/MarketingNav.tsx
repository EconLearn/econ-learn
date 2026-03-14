"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/components/providers/AuthProvider";

export default function MarketingNav() {
  const { user, loading } = useAuth();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 10);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 768) setMobileOpen(false);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const displayName =
    user?.user_metadata?.full_name ||
    user?.user_metadata?.name ||
    user?.email ||
    "";
  const initial = displayName ? displayName.charAt(0).toUpperCase() : "U";

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <motion.div
        className="transition-colors duration-300"
        animate={{
          backgroundColor: scrolled
            ? "rgba(255, 255, 255, 0.85)"
            : "rgba(255, 255, 255, 0)",
          backdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
        }}
        transition={{ duration: 0.3 }}
        style={{
          borderBottom: scrolled
            ? "1px solid var(--color-border-subtle)"
            : "1px solid transparent",
        }}
      >
        <nav
          className="max-w-6xl mx-auto px-5 sm:px-6 h-16 flex items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Left: Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <div className="w-7 h-7 rounded-md flex items-center justify-center" style={{ background: "var(--color-ink)" }}>
              <span className="text-white font-bold text-xs">E</span>
            </div>
            <span className="text-[15px] font-semibold tracking-tight" style={{ color: "var(--color-ink)" }}>
              EconLearn
            </span>
          </Link>

          {/* Center: Course links (desktop) */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/micro/basic-concepts"
              className="text-sm font-medium text-[var(--color-ink-muted)] hover:text-[var(--color-ink)] transition-colors"
            >
              Microeconomics
            </Link>
            <Link
              href="/macro/basic-macro-concepts"
              className="text-sm font-medium text-[var(--color-ink-muted)] hover:text-[var(--color-ink)] transition-colors"
            >
              Macroeconomics
            </Link>
          </div>

          {/* Right: Auth actions (desktop) */}
          <div className="hidden md:flex items-center gap-4">
            {!loading && (
              <>
                {user ? (
                  <Link
                    href="/dashboard"
                    className="w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                    style={{ background: "var(--color-ink)" }}
                    aria-label="Go to dashboard"
                  >
                    <span className="text-white text-xs font-semibold">
                      {initial}
                    </span>
                  </Link>
                ) : (
                  <>
                    <Link
                      href="/login"
                      className="text-sm font-medium text-[var(--color-ink-light)] hover:text-[var(--color-ink)] transition-colors"
                    >
                      Sign in
                    </Link>
                    <Link
                      href="/signup"
                      className="btn-primary text-sm"
                    >
                      Get Started
                    </Link>
                  </>
                )}
              </>
            )}
          </div>

          {/* Mobile: Hamburger button */}
          <button
            className="md:hidden p-2 -mr-2 text-[var(--color-ink-light)] hover:text-[var(--color-ink)] transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <svg
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
              strokeLinecap="round"
            >
              {mobileOpen ? (
                <>
                  <line x1="4" y1="4" x2="16" y2="16" />
                  <line x1="16" y1="4" x2="4" y2="16" />
                </>
              ) : (
                <>
                  <line x1="3" y1="5" x2="17" y2="5" />
                  <line x1="3" y1="10" x2="17" y2="10" />
                  <line x1="3" y1="15" x2="17" y2="15" />
                </>
              )}
            </svg>
          </button>
        </nav>
      </motion.div>

      {/* Mobile slide-out panel */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden fixed inset-0 top-16 bg-black/20 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />

            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden fixed right-0 top-16 bottom-0 w-72 shadow-xl overflow-y-auto"
              style={{ background: "var(--color-surface)", borderLeft: "1px solid var(--color-border)" }}
            >
              <div className="px-5 py-6 space-y-1">
                <Link
                  href="/micro/basic-concepts"
                  className="block px-3 py-3 text-sm font-medium rounded-lg hover:bg-[var(--color-surface-raised)] transition-colors"
                  style={{ color: "var(--color-ink-light)" }}
                  onClick={() => setMobileOpen(false)}
                >
                  Microeconomics
                </Link>
                <Link
                  href="/macro/basic-macro-concepts"
                  className="block px-3 py-3 text-sm font-medium rounded-lg hover:bg-[var(--color-surface-raised)] transition-colors"
                  style={{ color: "var(--color-ink-light)" }}
                  onClick={() => setMobileOpen(false)}
                >
                  Macroeconomics
                </Link>

                <div className="pt-4 mt-4 space-y-1" style={{ borderTop: "1px solid var(--color-border-subtle)" }}>
                  {!loading && (
                    <>
                      {user ? (
                        <Link
                          href="/dashboard"
                          className="flex items-center gap-3 px-3 py-3 text-sm font-medium rounded-lg hover:bg-[var(--color-surface-raised)] transition-colors"
                          style={{ color: "var(--color-ink-light)" }}
                          onClick={() => setMobileOpen(false)}
                        >
                          <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0" style={{ background: "var(--color-ink)" }}>
                            <span className="text-white text-[10px] font-semibold">
                              {initial}
                            </span>
                          </div>
                          Dashboard
                        </Link>
                      ) : (
                        <>
                          <Link
                            href="/login"
                            className="block px-3 py-3 text-sm font-medium rounded-lg hover:bg-[var(--color-surface-raised)] transition-colors"
                            style={{ color: "var(--color-ink-light)" }}
                            onClick={() => setMobileOpen(false)}
                          >
                            Sign in
                          </Link>
                          <Link
                            href="/signup"
                            className="btn-primary block py-3 text-center"
                            onClick={() => setMobileOpen(false)}
                          >
                            Get Started
                          </Link>
                        </>
                      )}
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
