"use client";

import Link from "next/link";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">
      <p className="text-5xl font-bold text-gray-200 mb-4">Oops</p>
      <h1 className="text-lg font-semibold text-slate-900 mb-2">Something went wrong</h1>
      <p className="text-sm text-gray-500 mb-8 max-w-xs">
        An unexpected error occurred. You can try again or head back to the home page.
      </p>
      <div className="flex gap-3">
        <button onClick={reset} className="btn-secondary text-sm">
          Try Again
        </button>
        <Link href="/" className="btn-primary text-sm">
          Go Home
        </Link>
      </div>
    </div>
  );
}
