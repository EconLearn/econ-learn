"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { courses } from "@/data/courses";
import { useAuth } from "@/components/providers/AuthProvider";
import { useNavStore } from "@/lib/stores/nav-store";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { user } = useAuth();
  const { completedModules, profile } = useNavStore();

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div className="lg:hidden">
      {/* Top bar */}
      <div
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg px-4 py-3 flex items-center justify-between"
        style={{ background: 'rgba(255,255,255,0.8)', borderBottom: '1px solid var(--color-border-subtle)' }}
      >
        <Link href="/" className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-md flex items-center justify-center" style={{ background: "linear-gradient(135deg, #1E293B, #334155)" }}>
            <svg width="16" height="16" viewBox="0 0 22 22" fill="none">
              <path d="M3 5 L19 17" stroke="#60A5FA" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M3 17 L19 5" stroke="#F87171" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="11" cy="11" r="2.5" fill="#34D399" />
            </svg>
          </div>
          <span className="font-semibold text-sm" style={{ color: 'var(--color-ink)' }}>EconLearn</span>
        </Link>

        <div className="flex items-center gap-2">
          {user && profile ? (
            <Link href="/profile" className="flex items-center">
              <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: 'var(--color-ink)' }}>
                <span className="text-white text-[10px] font-bold">
                  {(profile.display_name || "U")[0].toUpperCase()}
                </span>
              </div>
            </Link>
          ) : (
            <Link
              href="/login"
              className="text-[13px] font-medium transition-colors px-2"
              style={{ color: 'var(--color-ink-muted)' }}
            >
              Sign in
            </Link>
          )}

          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-lg transition-colors"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <svg className="w-5 h-5" style={{ color: 'var(--color-ink-light)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Full-screen overlay menu */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />

            {/* Menu panel */}
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[85%] max-w-sm shadow-xl overflow-y-auto"
              style={{ background: 'var(--color-surface)' }}
            >
              {/* Menu header */}
              <div className="flex items-center justify-between px-5 py-4" style={{ borderBottom: '1px solid var(--color-border-subtle)' }}>
                <span className="text-sm font-semibold" style={{ color: 'var(--color-ink)' }}>Menu</span>
                <button
                  onClick={() => setOpen(false)}
                  className="p-1.5 rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5" style={{ color: 'var(--color-ink-muted)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <nav className="p-4 space-y-1">
                {/* Home link */}
                <Link
                  href="/"
                  className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-[13px] font-medium transition-all duration-150"
                  style={pathname === "/"
                    ? { background: 'var(--color-surface-sunken)', color: 'var(--color-ink)' }
                    : { color: 'var(--color-ink-muted)' }}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                  Home
                </Link>

                {/* Dashboard link */}
                {user && (
                  <Link
                    href="/dashboard"
                    className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-[13px] font-medium transition-all duration-150"
                    style={pathname === "/dashboard"
                      ? { background: 'var(--color-surface-sunken)', color: 'var(--color-ink)' }
                      : { color: 'var(--color-ink-muted)' }}
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                    </svg>
                    Dashboard
                  </Link>
                )}

                {/* Practice Test link */}
                <Link
                  href="/practice-test"
                  className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-[13px] font-medium transition-all duration-150"
                  style={pathname === "/practice-test"
                    ? { background: 'var(--color-surface-sunken)', color: 'var(--color-ink)' }
                    : { color: 'var(--color-ink-muted)' }}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                  </svg>
                  Practice Test
                </Link>

                {/* Daily Challenge link */}
                <Link
                  href="/challenge"
                  className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-[13px] font-medium transition-all duration-150"
                  style={pathname.startsWith("/challenge")
                    ? { background: 'var(--color-surface-sunken)', color: 'var(--color-ink)' }
                    : { color: 'var(--color-ink-muted)' }}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
                  </svg>
                  Daily Challenge
                </Link>

                {/* Courses */}
                {courses.map((course) => {
                  const completedCount = course.modules.filter((m) => completedModules.has(m.id)).length;
                  return (
                    <div key={course.id}>
                      <div className="flex items-center justify-between px-3 pt-5 pb-2">
                        <p className="text-[11px] font-semibold uppercase tracking-wider" style={{ color: 'var(--color-ink-faint)' }}>
                          {course.title}
                        </p>
                        {user && (
                          <span className="text-[10px] font-medium tabular-nums" style={{ color: 'var(--color-ink-faint)' }}>
                            {completedCount}/{course.modules.length}
                          </span>
                        )}
                      </div>
                      <div className="space-y-0.5">
                        {course.modules.map((mod, index) => {
                          const isActive = pathname === mod.href;
                          const isCompleted = completedModules.has(mod.id);
                          return (
                            <Link
                              key={mod.id}
                              href={mod.href}
                              className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-[13px] transition-all duration-150 ${
                                isActive ? "font-semibold" : ""
                              }`}
                              style={isActive
                                ? { background: 'var(--color-surface-sunken)', color: 'var(--color-ink)' }
                                : { color: 'var(--color-ink-muted)' }}
                            >
                              {user && isCompleted ? (
                                <svg className="w-3.5 h-3.5 flex-shrink-0" style={{ color: 'var(--graph-equilibrium)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              ) : (
                                <span className="text-[10px] w-3.5 text-center tabular-nums flex-shrink-0" style={{ color: 'var(--color-ink-faint)' }}>
                                  {index + 1}
                                </span>
                              )}
                              <span className="truncate">{mod.title}</span>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </nav>

              {/* Bottom user section */}
              <div className="p-4 mt-4" style={{ borderTop: '1px solid var(--color-border-subtle)' }}>
                {user && profile ? (
                  <div className="space-y-2">
                    <Link
                      href="/profile"
                      className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg transition-all duration-150 hover:opacity-80"
                    >
                      <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'var(--color-ink)' }}>
                        <span className="text-white text-[10px] font-bold">
                          {(profile.display_name || "U")[0].toUpperCase()}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate" style={{ color: 'var(--color-ink-light)' }}>{profile.display_name}</p>
                        <p className="text-[11px]" style={{ color: 'var(--color-ink-faint)' }}>View profile</p>
                      </div>
                    </Link>
                  </div>
                ) : (
                  <Link
                    href="/login"
                    className="btn-primary flex items-center justify-center gap-2 w-full"
                  >
                    Sign in to save progress
                  </Link>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
