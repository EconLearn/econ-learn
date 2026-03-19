"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { courses, type Course } from "@/data/courses";
import { useAuth } from "@/components/providers/AuthProvider";
import { useNavStore } from "@/lib/stores/nav-store";

export default function Sidebar() {
  const pathname = usePathname();
  const { user } = useAuth();
  const { completedModules, profile, role, studentClassrooms } = useNavStore();
  const [expandedCourse, setExpandedCourse] = useState<string | null>(
    pathname.startsWith("/micro") ? "micro" : pathname.startsWith("/macro") ? "macro" : null
  );

  const isTeacher = role === "teacher" || role === "admin";

  const getCompletedCount = (courseId: string) => {
    const course = courses.find((c) => c.id === courseId);
    if (!course) return 0;
    return course.modules.filter((m) => completedModules.has(m.id)).length;
  };

  return (
    <aside className="w-[260px] h-screen overflow-y-auto sticky top-0 flex flex-col" style={{ background: 'var(--color-surface)', borderRight: '1px solid var(--color-border-subtle)' }}>
      <div className="px-5 py-5" style={{ borderBottom: '1px solid var(--color-border-subtle)' }}>
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-md flex items-center justify-center" style={{ background: "linear-gradient(135deg, #1E293B, #334155)" }}>
            <svg width="16" height="16" viewBox="0 0 22 22" fill="none">
              <path d="M3 5 L19 17" stroke="#60A5FA" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M3 17 L19 5" stroke="#F87171" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="11" cy="11" r="2.5" fill="#34D399" />
            </svg>
          </div>
          <span className="text-[15px] font-semibold" style={{ color: 'var(--color-ink)' }}>EconLearn</span>
        </Link>
      </div>

      <nav className="flex-1 px-3 py-3 space-y-0.5">
        <Link
          href="/"
          className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-[13px] font-medium transition-all duration-150 ${
            pathname === "/"
              ? "font-semibold"
              : ""
          }`}
          style={pathname === "/"
            ? { background: 'var(--color-surface-sunken)', color: 'var(--color-ink)' }
            : { color: 'var(--color-ink-muted)' }}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
          Home
        </Link>

        {user && (
          <Link
            href="/dashboard"
            className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-[13px] font-medium transition-all duration-150 ${
              pathname === "/dashboard"
                ? "font-semibold"
                : ""
            }`}
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

        {user && !isTeacher && (
          <Link
            href="/join"
            className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-[13px] font-medium transition-all duration-150 ${
              pathname === "/join"
                ? "font-semibold"
                : ""
            }`}
            style={pathname === "/join"
              ? { background: 'var(--color-surface-sunken)', color: 'var(--color-ink)' }
              : { color: 'var(--color-ink-muted)' }}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM3 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 019.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
            </svg>
            Join Classroom
          </Link>
        )}

        <Link
          href="/practice-test"
          className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-[13px] font-medium transition-all duration-150 ${
            pathname === "/practice-test"
              ? "font-semibold"
              : ""
          }`}
          style={pathname === "/practice-test"
            ? { background: 'var(--color-surface-sunken)', color: 'var(--color-ink)' }
            : { color: 'var(--color-ink-muted)' }}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
          </svg>
          Practice Test
        </Link>

        <Link
          href="/challenge"
          className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-[13px] font-medium transition-all duration-150 ${
            pathname.startsWith("/challenge")
              ? "font-semibold"
              : ""
          }`}
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

        {/* Teacher Section */}
        {user && isTeacher && (
          <>
            <div className="pt-4 pb-1 px-3">
              <p className="text-[11px] font-semibold uppercase tracking-wider" style={{ color: 'var(--color-ink-faint)' }}>
                Teacher
              </p>
            </div>
            {[
              { href: "/teacher", label: "Dashboard", icon: (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
              ) },
              { href: "/teacher/classrooms", label: "Classrooms", icon: (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                </svg>
              ) },
              { href: "/teacher/assignments", label: "Assignments", icon: (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15a2.25 2.25 0 012.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>
              ) },
              { href: "/teacher/assignments/quick-exam", label: "Quick Exam", icon: (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              ) },
              { href: "/teacher/reports", label: "Reports", icon: (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                </svg>
              ) },
              { href: "/teacher/questions", label: "Question Bank", icon: (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                </svg>
              ) },
              { href: "/teacher/infractions", label: "Violations", icon: (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
              ) },
            ].map((item) => {
              const isActive = pathname === item.href || (item.href !== "/teacher" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-[13px] font-medium transition-all duration-150 ${
                    isActive ? "font-semibold" : ""
                  }`}
                  style={isActive
                    ? { background: 'var(--color-surface-sunken)', color: 'var(--color-ink)' }
                    : { color: 'var(--color-ink-muted)' }}
                >
                  {item.icon}
                  {item.label}
                </Link>
              );
            })}
          </>
        )}

        {/* Student My Classes Section */}
        {user && !isTeacher && studentClassrooms.length > 0 && (
          <>
            <div className="pt-4 pb-1 px-3">
              <p className="text-[11px] font-semibold uppercase tracking-wider" style={{ color: 'var(--color-ink-faint)' }}>
                My Classes
              </p>
            </div>
            {studentClassrooms.map((classroom) => {
              const classPath = `/classrooms/${classroom.id}`;
              const isActive = pathname === classPath;
              return (
                <Link
                  key={classroom.id}
                  href={classPath}
                  className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-[13px] font-medium transition-all duration-150 ${
                    isActive ? "font-semibold" : ""
                  }`}
                  style={isActive
                    ? { background: 'var(--color-surface-sunken)', color: 'var(--color-ink)' }
                    : { color: 'var(--color-ink-muted)' }}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                  </svg>
                  <span className="truncate">{classroom.name}</span>
                </Link>
              );
            })}
            <Link
              href="/classrooms"
              className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-[13px] font-medium transition-all duration-150"
              style={pathname === "/classrooms"
                ? { background: 'var(--color-surface-sunken)', color: 'var(--color-ink)' }
                : { color: 'var(--color-ink-faint)' }}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
              All Classrooms
            </Link>
          </>
        )}

        <div className="pt-4 pb-1 px-3">
          <p className="text-[11px] font-semibold uppercase tracking-wider" style={{ color: 'var(--color-ink-faint)' }}>
            Courses
          </p>
        </div>

        {courses.map((course) => (
          <CourseSection
            key={course.id}
            course={course}
            expanded={expandedCourse === course.id}
            onToggle={() =>
              setExpandedCourse(expandedCourse === course.id ? null : course.id)
            }
            currentPath={pathname}
            completedModules={completedModules}
            completedCount={getCompletedCount(course.id)}
            isLoggedIn={!!user}
          />
        ))}
      </nav>

      {/* User section at bottom */}
      <div className="flex-shrink-0 p-3" style={{ borderTop: '1px solid var(--color-border-subtle)' }}>
        {user && profile ? (
          <Link
            href="/profile"
            className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-[13px] transition-all duration-150 hover:opacity-80"
          >
            <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'var(--color-ink)' }}>
              <span className="text-white text-[10px] font-bold">
                {(profile.display_name || "U")[0].toUpperCase()}
              </span>
            </div>
            <span className="text-sm font-medium truncate" style={{ color: 'var(--color-ink-light)' }}>
              {profile.display_name}
            </span>
          </Link>
        ) : (
          <Link
            href="/login"
            className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-[13px] transition-all duration-150"
            style={{ color: 'var(--color-ink-muted)' }}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
            Sign in to save progress
          </Link>
        )}
      </div>
    </aside>
  );
}

function CourseSection({
  course,
  expanded,
  onToggle,
  currentPath,
  completedModules,
  completedCount,
  isLoggedIn,
}: {
  course: Course;
  expanded: boolean;
  onToggle: () => void;
  currentPath: string;
  completedModules: Set<string>;
  completedCount: number;
  isLoggedIn: boolean;
}) {
  return (
    <div>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-[13px] font-semibold transition-all duration-150"
        style={{ color: expanded ? 'var(--color-ink)' : 'var(--color-ink-muted)' }}
      >
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: course.id === "micro" ? 'var(--graph-demand)' : '#6d28d9' }} />
          {course.shortTitle}
          {isLoggedIn && (
            <span className="text-[10px] font-normal tabular-nums" style={{ color: 'var(--color-ink-faint)' }}>
              {completedCount}/{course.modules.length}
            </span>
          )}
        </span>
        <svg
          className={`w-3.5 h-3.5 transition-transform duration-200 ${
            expanded ? "rotate-90" : ""
          }`}
          style={{ color: 'var(--color-ink-faint)' }}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div className="ml-3 pl-3 space-y-px" style={{ borderLeft: '1px solid var(--color-border-subtle)' }}>
              {course.modules.map((mod, index) => {
                const isActive = currentPath === mod.href;
                const isCompleted = completedModules.has(mod.id);
                return (
                  <motion.div
                    key={mod.id}
                    initial={{ opacity: 0, x: -4 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.03, duration: 0.2 }}
                  >
                    <Link
                      href={mod.href}
                      className={`flex items-center gap-2 px-2.5 py-1.5 text-[12.5px] transition-all duration-150 ${
                        isActive
                          ? "font-semibold -ml-[13px] pl-[11px]"
                          : ""
                      }`}
                      style={isActive
                        ? { color: 'var(--color-ink)', borderLeft: '2px solid var(--graph-equilibrium)' }
                        : { color: 'var(--color-ink-muted)' }}
                    >
                      {isLoggedIn && isCompleted ? (
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
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
