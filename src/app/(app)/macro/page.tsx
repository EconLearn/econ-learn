import Link from "next/link";
import { macroCourse } from "@/data/courses";

export default function MacroPage() {
  return (
    <div className="macro-page max-w-3xl mx-auto px-6 py-14">
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full" style={{ background: 'var(--accent)' }} />
          <span className="text-[11px] font-medium" style={{ color: 'var(--accent)' }}>
            {macroCourse.modules.length} modules
          </span>
        </div>
        <h1 className="text-2xl font-bold tracking-tight mb-1.5" style={{ color: 'var(--color-ink)' }}>
          {macroCourse.title}
        </h1>
        <p className="text-[15px]" style={{ color: 'var(--color-ink-muted)' }}>{macroCourse.description}</p>
      </div>

      <div className="space-y-0.5">
        {macroCourse.modules.map((mod, index) => (
          <Link
            key={mod.id}
            href={mod.href}
            className={`group flex items-center gap-4 py-3.5 transition-colors ${
              index > 0 ? "border-t" : ""
            }`}
            style={index > 0 ? { borderColor: 'var(--color-border-subtle)' } : undefined}
          >
            <span className="text-[12px] w-5 text-center tabular-nums font-medium" style={{ color: 'var(--color-ink-faint)' }}>
              {index + 1}
            </span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <h3 className="text-[14px] font-medium transition-colors" style={{ color: 'var(--color-ink)' }}>
                  {mod.title}
                </h3>
                {mod.hasInteractive && (
                  <span className="badge badge-macro text-[9px]">
                    Interactive
                  </span>
                )}
              </div>
              <p className="text-[13px] truncate" style={{ color: 'var(--color-ink-faint)' }}>
                {mod.description}
              </p>
            </div>
            <svg
              className="w-4 h-4 transition-colors flex-shrink-0"
              style={{ color: 'var(--color-border)' }}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        ))}
      </div>
    </div>
  );
}
