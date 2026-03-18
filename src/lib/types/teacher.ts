export interface Classroom {
  id: string;
  teacher_id: string;
  name: string;
  join_code: string;
  school_name: string | null;
  active: boolean;
  created_at: string;
}

export interface ClassroomMember {
  classroom_id: string;
  student_id: string;
  joined_at: string;
  // joined profile data
  display_name?: string;
  email?: string;
}

export interface Assignment {
  id: string;
  classroom_id: string;
  teacher_id: string;
  title: string;
  type: "lesson" | "quiz" | "practice_test" | "exam";
  module_ids: string[];
  due_date: string | null;
  created_at: string;
  config: AssignmentConfig;
  status: "draft" | "scheduled" | "published";
  publish_at: string | null;
}

export interface AssignmentConfig {
  quiz_length?: number; // 5, 10, 15, 20
  time_limit_minutes?: number | null; // null = no limit
  retakes_allowed?: boolean;
  passing_score?: number; // 0-100
  // Exam-specific config
  question_ids?: string[]; // UUIDs of teacher_questions
  lockdown?: boolean; // lock student browser during exam
  shuffle_questions?: boolean;
  shuffle_options?: boolean;
  show_results?: boolean; // teacher controls when to release results
}

export interface AssignmentCompletion {
  assignment_id: string;
  student_id: string;
  completed_at: string | null;
  score: number | null;
  time_spent_seconds: number | null;
}

export interface StudentProgress {
  student_id: string;
  display_name: string;
  email: string;
  modules_completed: number;
  quizzes_taken: number;
  average_score: number;
  last_active: string | null;
  assignments_completed: number;
  assignments_total: number;
}

export interface Subscription {
  id: string;
  teacher_id: string;
  stripe_customer_id: string | null;
  stripe_subscription_id: string | null;
  plan: "free" | "classroom" | "school";
  student_limit: number;
  status: "active" | "trial" | "canceled" | "past_due";
  trial_ends_at: string | null;
  current_period_end: string | null;
  created_at: string;
}

export interface TeacherQuestion {
  id: string;
  teacher_id: string;
  module_id: string;
  course: "micro" | "macro";
  question: string;
  options: string[];
  correct_index: number;
  explanation: string | null;
  difficulty: "easy" | "medium" | "hard";
  created_at: string;
  updated_at: string;
}

export interface ExamSession {
  id: string;
  assignment_id: string;
  student_id: string;
  started_at: string;
  ends_at: string;
  submitted_at: string | null;
  tab_switches: number;
  fullscreen_exits: number;
  status: "in_progress" | "submitted" | "expired" | "force_submitted";
  answers: ExamAnswer[] | null;
  score: number | null;
}

export interface ExamAnswer {
  question_id: string;
  selected_index: number;
}

export interface ExamQuestion {
  id: string;
  module_id: string;
  course: string;
  question: string;
  options: string[];
  difficulty: string;
}

export function generateJoinCode(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // no I, O, 0, 1 to avoid confusion
  let code = "";
  for (let i = 0; i < 6; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return code.slice(0, 3) + "-" + code.slice(3);
}
