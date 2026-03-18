"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useAuth } from "@/components/providers/AuthProvider";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { courses } from "@/data/courses";
import { useAchievements } from "@/lib/hooks/useAchievements";
import { useStudyRecommendations } from "@/lib/hooks/useStudyRecommendations";
import AchievementBadge from "@/components/ui/AchievementBadge";
import APCountdown from "@/components/ui/APCountdown";

interface ModuleProgress {
  module_id: string;
  course_id: string;
  completed: boolean;
  last_accessed_at: string;
}

interface QuizAttempt {
  module_id: string;
  score: number;
  total_questions: number;
  correct_answers: number;
  completed_at: string;
}

interface ActivityDay {
  activity_date: string;
}

interface StudentClassroom {
  id: string;
  name: string;
  school_name: string | null;
  teacher_name: string;
}

interface StudentAssignment {
  id: string;
  classroom_id: string;
  title: string;
  type: "lesson" | "quiz" | "practice_test";
  module_ids: string[];
  due_date: string | null;
  status: "completed" | "pending" | "overdue";
  score: number | null;
}

export default function DashboardPage() {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const supabase = createClient();

  const [profile, setProfile] = useState<{ display_name: string } | null>(null);
  const [progress, setProgress] = useState<ModuleProgress[]>([]);
  const [recentQuizzes, setRecentQuizzes] = useState<QuizAttempt[]>([]);
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [activityDays, setActivityDays] = useState<string[]>([]);
  const [streak, setStreak] = useState(0);
  const [studentClassrooms, setStudentClassrooms] = useState<StudentClassroom[]>([]);
  const [studentAssignments, setStudentAssignments] = useState<StudentAssignment[]>([]);
  const [loading, setLoading] = useState(true);
  const { achievements, unlockedCount, totalCount } = useAchievements();
  const { recommendations, weakAreas } = useStudyRecommendations();

  useEffect(() => {
    if (authLoading) return;
    if (!user) {
      router.push("/login");
      return;
    }

    async function fetchDashboard() {
      const [profileRes, progressRes, quizzesRes, bookmarksRes, activityRes] =
        await Promise.all([
          supabase.from("profiles").select("display_name").eq("id", user!.id).single(),
          supabase.from("module_progress").select("*").eq("user_id", user!.id),
          supabase.from("quiz_attempts").select("*").eq("user_id", user!.id).order("completed_at", { ascending: false }).limit(5),
          supabase.from("bookmarks").select("module_id").eq("user_id", user!.id),
          supabase.from("user_activity").select("activity_date").eq("user_id", user!.id).order("activity_date", { ascending: false }),
        ]);

      if (profileRes.data) setProfile(profileRes.data);
      if (progressRes.data) setProgress(progressRes.data);
      if (quizzesRes.data) setRecentQuizzes(quizzesRes.data);
      if (bookmarksRes.data) setBookmarks(bookmarksRes.data.map((b) => b.module_id));
      if (activityRes.data) {
        const days = activityRes.data.map((a) => a.activity_date);
        setActivityDays(days);
        setStreak(calculateStreak(days));
      }

      // Fetch student classroom/assignment data
      try {
        const [classroomRes, assignmentRes] = await Promise.all([
          fetch("/api/student/classrooms"),
          fetch("/api/student/assignments"),
        ]);
        if (classroomRes.ok) {
          const classroomData = await classroomRes.json();
          setStudentClassrooms(classroomData.classrooms || []);
        }
        if (assignmentRes.ok) {
          const assignmentData = await assignmentRes.json();
          setStudentAssignments(assignmentData.assignments || []);
        }
      } catch {
        // Silently fail — classroom data is supplementary
      }

      setLoading(false);
    }

    fetchDashboard();
  }, [user, authLoading, router, supabase]);

  if (authLoading || loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="w-6 h-6 border-2 rounded-full animate-spin" style={{ borderColor: 'var(--color-border)', borderTopColor: 'var(--color-ink)' }} />
      </div>
    );
  }

  if (!user) return null;

  const completedMicro = progress.filter((p) => p.course_id === "micro" && p.completed).length;
  const completedMacro = progress.filter((p) => p.course_id === "macro" && p.completed).length;
  const lastAccessed = progress
    .filter((p) => p.last_accessed_at)
    .sort((a, b) => new Date(b.last_accessed_at).getTime() - new Date(a.last_accessed_at).getTime())[0];

  const allModules = [...courses[0].modules, ...courses[1].modules];
  const lastModule = lastAccessed
    ? allModules.find((m) => m.id === lastAccessed.module_id)
    : null;

  const bookmarkedModules = allModules.filter((m) => bookmarks.includes(m.id));

  const firstName = profile?.display_name?.split(" ")[0] || "there";

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 lg:py-14">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Welcome Header */}
        <div className="flex items-start justify-between mb-10">
          <div>
            <h1 className="text-2xl font-bold tracking-tight mb-1" style={{ color: 'var(--color-ink)' }}>
              Welcome back, {firstName}
            </h1>
            <p className="text-sm" style={{ color: 'var(--color-ink-muted)' }}>
              {streak > 0
                ? `You're on a ${streak}-day study streak. Keep it up!`
                : "Start studying today to build your streak."}
            </p>
          </div>
          {streak > 0 && (
            <div className="badge flex items-center gap-1.5 bg-amber-50 text-amber-700 px-3 py-1.5" style={{ border: '1px solid rgba(217, 119, 6, 0.12)' }}>
              <span className="text-sm">🔥</span>
              <span className="text-xs font-semibold">{streak} day{streak !== 1 ? "s" : ""}</span>
            </div>
          )}
        </div>

        {/* AP Countdown */}
        <div className="mb-8">
          <APCountdown />
        </div>

        {/* My Classrooms */}
        {studentClassrooms.length > 0 && (
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--color-ink-faint)' }}>
                My Classrooms
              </h2>
              <Link href="/join" className="text-[11px] font-medium transition-colors" style={{ color: 'var(--accent)' }}>
                Join another
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {studentClassrooms.map((classroom) => (
                <div
                  key={classroom.id}
                  className="card p-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(139, 92, 246, 0.08)" }}>
                      <svg className="w-4 h-4 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold truncate" style={{ color: 'var(--color-ink)' }}>
                        {classroom.name}
                      </p>
                      <p className="text-[11px]" style={{ color: 'var(--color-ink-faint)' }}>
                        {classroom.teacher_name}{classroom.school_name ? ` · ${classroom.school_name}` : ""}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Upcoming Assignments */}
        {studentAssignments.length > 0 && (
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--color-ink-faint)' }}>
                Assignments
              </h2>
              <Link href="/assignments" className="text-[11px] font-medium transition-colors" style={{ color: 'var(--accent)' }}>
                View all
              </Link>
            </div>
            <div className="card overflow-hidden">
              {studentAssignments.slice(0, 5).map((assignment, i) => {
                const classroomName = studentClassrooms.find(c => c.id === assignment.classroom_id)?.name || "";
                const urgencyColor = getAssignmentUrgencyColor(assignment.due_date, assignment.status);
                const allMods = [...courses[0].modules, ...courses[1].modules];
                const moduleLink = assignment.module_ids?.[0]
                  ? allMods.find(m => m.id === assignment.module_ids[0])?.href
                  : null;

                return (
                  <div
                    key={assignment.id}
                    className="flex items-center justify-between px-5 py-3.5"
                    style={i > 0 ? { borderTop: '1px solid var(--color-border-subtle)' } : undefined}
                  >
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <div
                        className="w-2 h-2 rounded-full flex-shrink-0"
                        style={{ background: urgencyColor }}
                      />
                      <div className="min-w-0">
                        {moduleLink ? (
                          <Link href={moduleLink} className="text-sm font-medium hover:text-blue-600 transition-colors truncate block" style={{ color: 'var(--color-ink)' }}>
                            {assignment.title}
                          </Link>
                        ) : (
                          <p className="text-sm font-medium truncate" style={{ color: 'var(--color-ink)' }}>
                            {assignment.title}
                          </p>
                        )}
                        <p className="text-[11px]" style={{ color: 'var(--color-ink-faint)' }}>
                          {classroomName}
                          {assignment.due_date ? ` · Due ${new Date(assignment.due_date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}` : ""}
                        </p>
                      </div>
                    </div>
                    <div className="flex-shrink-0 ml-3">
                      {assignment.status === "completed" ? (
                        <span className="text-xs font-medium text-emerald-600 flex items-center gap-1">
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          {assignment.score != null ? `${assignment.score}%` : "Done"}
                        </span>
                      ) : assignment.status === "overdue" ? (
                        <span className="text-xs font-medium text-red-500">Overdue</span>
                      ) : (
                        <span className="text-xs font-medium" style={{ color: 'var(--color-ink-faint)' }}>
                          {assignment.type === "quiz" ? "Quiz" : assignment.type === "practice_test" ? "Test" : "Lesson"}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Continue Studying */}
        {lastModule && (
          <div className="mb-8">
            <h2 className="text-xs font-medium uppercase tracking-wider mb-3" style={{ color: 'var(--color-ink-faint)' }}>
              Continue studying
            </h2>
            <Link
              href={lastModule.href}
              className="card-interactive group flex items-center justify-between p-5"
            >
              <div>
                <p className="text-sm font-semibold group-hover:text-blue-600 transition-colors" style={{ color: 'var(--color-ink)' }}>
                  {lastModule.title}
                </p>
                <p className="text-xs mt-0.5" style={{ color: 'var(--color-ink-faint)' }}>{lastModule.description}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs" style={{ color: 'var(--color-ink-faint)' }}>Resume</span>
                <svg className="w-4 h-4 group-hover:text-blue-500 transition-colors" style={{ color: 'var(--color-border)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </Link>
          </div>
        )}

        {/* Weak Areas */}
        {weakAreas.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xs font-medium uppercase tracking-wider mb-3" style={{ color: 'var(--color-ink-faint)' }}>
              Needs review
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {weakAreas.map((area) => (
                <Link
                  key={area.module.id}
                  href={area.module.href}
                  className="card-interactive group flex items-center gap-3 p-4"
                >
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(239, 68, 68, 0.08)" }}>
                    <span className="text-xs font-bold text-red-500">{area.avgScore}%</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium group-hover:text-blue-600 transition-colors truncate" style={{ color: 'var(--color-ink)' }}>
                      {area.module.title}
                    </p>
                    <p className="text-[11px]" style={{ color: 'var(--color-ink-faint)' }}>
                      Review to improve your score
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Suggested Next */}
        {recommendations.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xs font-medium uppercase tracking-wider mb-3" style={{ color: 'var(--color-ink-faint)' }}>
              Suggested next
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {recommendations.filter(r => r.priority > 1).slice(0, 2).map((rec) => (
                <Link
                  key={rec.module.id}
                  href={rec.module.href}
                  className="card-interactive group flex items-center gap-3 p-4"
                >
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(59, 130, 246, 0.08)" }}>
                    <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium group-hover:text-blue-600 transition-colors truncate" style={{ color: 'var(--color-ink)' }}>
                      {rec.module.title}
                    </p>
                    <p className="text-[11px]" style={{ color: 'var(--color-ink-faint)' }}>
                      {rec.reason}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Progress Overview */}
        <div className="mb-8">
          <h2 className="text-xs font-medium uppercase tracking-wider mb-3" style={{ color: 'var(--color-ink-faint)' }}>
            Progress
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <CourseProgressCard
              title="Microeconomics"
              completed={completedMicro}
              total={courses[0].modules.length}
              color="blue"
              href="/micro"
            />
            <CourseProgressCard
              title="Macroeconomics"
              completed={completedMacro}
              total={courses[1].modules.length}
              color="violet"
              href="/macro"
            />
          </div>
        </div>

        {/* Recent Quizzes */}
        {recentQuizzes.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xs font-medium uppercase tracking-wider mb-3" style={{ color: 'var(--color-ink-faint)' }}>
              Recent quizzes
            </h2>
            <div className="card overflow-hidden">
              {recentQuizzes.map((quiz, i) => {
                const matchedModule = allModules.find((m) => m.id === quiz.module_id);
                return (
                  <div
                    key={i}
                    className="flex items-center justify-between px-5 py-3.5"
                    style={i > 0 ? { borderTop: '1px solid var(--color-border-subtle)' } : undefined}
                  >
                    <div>
                      <p className="text-sm font-medium" style={{ color: 'var(--color-ink)' }}>
                        {matchedModule?.title || quiz.module_id}
                      </p>
                      <p className="text-xs" style={{ color: 'var(--color-ink-faint)' }}>
                        {new Date(quiz.completed_at).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })}
                      </p>
                    </div>
                    <div className={`text-sm font-bold tabular-nums ${
                      quiz.score >= 80 ? "text-emerald-600" : quiz.score >= 50 ? "text-amber-600" : "text-red-500"
                    }`}>
                      {quiz.score}%
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Bookmarked Modules */}
        {bookmarkedModules.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xs font-medium uppercase tracking-wider mb-3" style={{ color: 'var(--color-ink-faint)' }}>
              Bookmarked
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {bookmarkedModules.map((module) => (
                <Link
                  key={module.id}
                  href={module.href}
                  className="card-interactive group flex items-center gap-3 p-4"
                >
                  <svg className="w-4 h-4 text-amber-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                  <span className="text-sm font-medium group-hover:text-blue-600 transition-colors truncate" style={{ color: 'var(--color-ink)' }}>
                    {module.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Achievements */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--color-ink-faint)' }}>
              Achievements
            </h2>
            <span className="text-[11px] font-medium tabular-nums" style={{ color: 'var(--color-ink-faint)' }}>
              {unlockedCount}/{totalCount}
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
            {achievements.map((achievement) => (
              <AchievementBadge key={achievement.id} achievement={achievement} />
            ))}
          </div>
        </div>

        {/* Activity Calendar */}
        <div className="mb-8">
          <h2 className="text-xs font-medium uppercase tracking-wider mb-3" style={{ color: 'var(--color-ink-faint)' }}>
            Study activity
          </h2>
          <ActivityCalendar activityDays={activityDays} />
        </div>
      </motion.div>
    </div>
  );
}

function getAssignmentUrgencyColor(dueDate: string | null, status: string): string {
  if (status === "completed") return "#34d399"; // emerald
  if (!dueDate) return "#9ca3af"; // gray
  const now = new Date();
  const due = new Date(dueDate);
  const diffMs = due.getTime() - now.getTime();
  const diffDays = diffMs / (1000 * 60 * 60 * 24);
  if (diffDays < 0) return "#ef4444"; // red — overdue
  if (diffDays < 1) return "#ef4444"; // red — due today
  if (diffDays < 7) return "#f59e0b"; // amber — due this week
  return "#22c55e"; // green — due later
}

function CourseProgressCard({
  title,
  completed,
  total,
  color,
  href,
}: {
  title: string;
  completed: number;
  total: number;
  color: "blue" | "violet";
  href: string;
}) {
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
  const barColor = color === "blue" ? "bg-blue-500" : "bg-violet-500";
  const iconBg = color === "blue" ? "bg-blue-50" : "bg-violet-50";
  const iconText = color === "blue" ? "text-blue-600" : "text-violet-600";

  return (
    <Link
      href={href}
      className="card-interactive group p-5"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${iconBg}`}>
          <span className={`text-sm font-bold ${iconText}`}>
            {color === "blue" ? "μ" : "Σ"}
          </span>
        </div>
        <div>
          <p className="text-sm font-semibold" style={{ color: 'var(--color-ink)' }}>{title}</p>
          <p className="text-xs" style={{ color: 'var(--color-ink-faint)' }}>
            {completed}/{total} modules
          </p>
        </div>
      </div>
      <div className="w-full rounded-full h-1.5" style={{ background: 'var(--color-surface-sunken)' }}>
        <div
          className={`h-full rounded-full transition-all duration-500 ${barColor}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </Link>
  );
}

function ActivityCalendar({ activityDays }: { activityDays: string[] }) {
  const weeks = 12;
  const today = new Date();
  const activitySet = new Set(activityDays);

  const days: { date: string; active: boolean }[] = [];
  for (let i = weeks * 7 - 1; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const dateStr = d.toISOString().split("T")[0];
    days.push({ date: dateStr, active: activitySet.has(dateStr) });
  }

  // Group by weeks (columns)
  const columns: typeof days[] = [];
  for (let i = 0; i < days.length; i += 7) {
    columns.push(days.slice(i, i + 7));
  }

  return (
    <div className="card p-5">
      <div className="flex gap-1 overflow-x-auto">
        {columns.map((week, wi) => (
          <div key={wi} className="flex flex-col gap-1">
            {week.map((day) => (
              <div
                key={day.date}
                title={day.date}
                className="w-3 h-3 rounded-sm transition-colors"
                style={{
                  background: day.active ? '#34d399' : 'var(--color-surface-sunken)',
                }}
              />
            ))}
          </div>
        ))}
      </div>
      <p className="text-[11px] mt-3" style={{ color: 'var(--color-ink-faint)' }}>
        {activityDays.length} active day{activityDays.length !== 1 ? "s" : ""} in the last {weeks} weeks
      </p>
    </div>
  );
}

function calculateStreak(sortedDays: string[]): number {
  if (sortedDays.length === 0) return 0;

  const today = new Date().toISOString().split("T")[0];
  const yesterday = new Date(Date.now() - 86400000).toISOString().split("T")[0];

  // Check if the most recent day is today or yesterday
  if (sortedDays[0] !== today && sortedDays[0] !== yesterday) return 0;

  let streak = 1;
  for (let i = 1; i < sortedDays.length; i++) {
    const prev = new Date(sortedDays[i - 1]);
    const curr = new Date(sortedDays[i]);
    const diff = (prev.getTime() - curr.getTime()) / 86400000;
    if (Math.round(diff) === 1) {
      streak++;
    } else {
      break;
    }
  }

  return streak;
}
