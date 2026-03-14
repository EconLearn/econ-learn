import Link from "next/link";
import { microCourse, macroCourse } from "@/data/courses";

interface ModuleNavProps {
  courseId: "micro" | "macro";
  currentModuleId: string;
}

export default function ModuleNav({ courseId, currentModuleId }: ModuleNavProps) {
  const course = courseId === "micro" ? microCourse : macroCourse;
  const currentIndex = course.modules.findIndex((m) => m.id === currentModuleId);

  if (currentIndex === -1) return null;

  const prev = currentIndex > 0 ? course.modules[currentIndex - 1] : null;
  const next = currentIndex < course.modules.length - 1 ? course.modules[currentIndex + 1] : null;

  return (
    <nav
      className="flex items-stretch gap-3 mt-12 pt-8"
      style={{ borderTop: "1px solid var(--color-border-subtle)" }}
    >
      {prev ? (
        <Link
          href={prev.href}
          className="flex-1 group rounded-xl p-4 transition-all duration-200 hover:-translate-y-0.5"
          style={{
            border: "1px solid var(--color-border-subtle)",
            background: "var(--color-surface)",
          }}
        >
          <span
            className="text-[11px] font-medium uppercase tracking-wider"
            style={{ color: "var(--color-ink-faint)" }}
          >
            ← Previous
          </span>
          <p
            className="text-[13px] font-semibold mt-1 group-hover:underline"
            style={{ color: "var(--color-ink)" }}
          >
            {prev.title}
          </p>
        </Link>
      ) : (
        <div className="flex-1" />
      )}

      {next ? (
        <Link
          href={next.href}
          className="flex-1 group rounded-xl p-4 text-right transition-all duration-200 hover:-translate-y-0.5"
          style={{
            border: "1px solid var(--color-border-subtle)",
            background: "var(--color-surface)",
          }}
        >
          <span
            className="text-[11px] font-medium uppercase tracking-wider"
            style={{ color: "var(--color-ink-faint)" }}
          >
            Next →
          </span>
          <p
            className="text-[13px] font-semibold mt-1 group-hover:underline"
            style={{ color: "var(--color-ink)" }}
          >
            {next.title}
          </p>
        </Link>
      ) : (
        <div className="flex-1" />
      )}
    </nav>
  );
}
