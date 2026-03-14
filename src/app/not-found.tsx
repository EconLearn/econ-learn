import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">
      <p className="text-6xl font-bold text-gray-200 mb-4">404</p>
      <h1 className="text-lg font-semibold text-slate-900 mb-2">Page not found</h1>
      <p className="text-sm text-gray-500 mb-8 max-w-xs">
        The page you are looking for does not exist or may have been moved.
      </p>
      <Link href="/" className="btn-primary text-sm inline-flex items-center gap-2">
        Go Home
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </Link>
    </div>
  );
}
