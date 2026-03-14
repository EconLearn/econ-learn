"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-dot-pattern flex flex-col items-center justify-center px-4 py-12">
      {/* Logo */}
      <Link
        href="/"
        className="mb-10 flex items-center gap-2.5 group"
      >
        <div className="w-9 h-9 rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow duration-200" style={{ background: 'var(--color-ink)' }}>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M3 17L9 11L13 15L21 7"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17 7H21V11"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <span className="text-xl font-bold tracking-tight" style={{ color: 'var(--color-ink)' }}>
          EconLearn
        </span>
      </Link>

      {/* Card container */}
      <div className="w-full max-w-[420px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="card-elevated p-8 sm:p-10"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer */}
      <p className="mt-10 text-xs text-center" style={{ color: 'var(--color-ink-faint)' }}>
        &copy; {new Date().getFullYear()} EconLearn. All rights reserved.
      </p>
    </div>
  );
}
