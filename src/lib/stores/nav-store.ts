import { create } from "zustand";
import { createClient } from "@/lib/supabase/client";

interface StudentClassroomNav {
  id: string;
  name: string;
}

interface NavData {
  profile: { display_name: string } | null;
  role: "student" | "teacher" | "admin" | null;
  completedModules: Set<string>;
  bookmarkedModules: Set<string>;
  studentClassrooms: StudentClassroomNav[];
}

interface NavStore extends NavData {
  loading: boolean;
  lastFetchedAt: number | null;
  userId: string | null;
  fetchNavData: (userId: string) => Promise<void>;
  invalidate: () => void;
  reset: () => void;
}

const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

export const useNavStore = create<NavStore>((set, get) => ({
  profile: null,
  role: null,
  completedModules: new Set(),
  bookmarkedModules: new Set(),
  studentClassrooms: [],
  loading: false,
  lastFetchedAt: null,
  userId: null,

  fetchNavData: async (userId: string) => {
    const state = get();
    // Skip if data is fresh and for the same user
    if (
      state.userId === userId &&
      state.lastFetchedAt &&
      Date.now() - state.lastFetchedAt < CACHE_TTL
    ) {
      return;
    }

    set({ loading: true, userId });

    const supabase = createClient();

    const [progressRes, profileRes, bookmarksRes] = await Promise.all([
      supabase
        .from("module_progress")
        .select("module_id")
        .eq("user_id", userId)
        .eq("completed", true),
      supabase
        .from("profiles")
        .select("display_name, role")
        .eq("id", userId)
        .single(),
      supabase
        .from("bookmarks")
        .select("module_id")
        .eq("user_id", userId),
    ]);

    const userRole = (profileRes.data as any)?.role || "student";

    // Fetch student classrooms for sidebar (lightweight)
    let studentClassrooms: StudentClassroomNav[] = [];
    if (userRole === "student") {
      try {
        const { data: memberships } = await supabase
          .from("classroom_members")
          .select("classroom_id")
          .eq("student_id", userId);

        if (memberships && memberships.length > 0) {
          const classroomIds = memberships.map((m) => m.classroom_id);
          const { data: classrooms } = await supabase
            .from("classrooms")
            .select("id, name")
            .in("id", classroomIds)
            .eq("active", true);

          studentClassrooms = (classrooms || []).map((c) => ({
            id: c.id,
            name: c.name,
          }));
        }
      } catch {
        // Silently fail — classroom data is supplementary
      }
    }

    set({
      completedModules: new Set(
        progressRes.data?.map((p) => p.module_id) ?? []
      ),
      profile: profileRes.data ? { display_name: profileRes.data.display_name } : null,
      role: userRole,
      bookmarkedModules: new Set(
        bookmarksRes.data?.map((b) => b.module_id) ?? []
      ),
      studentClassrooms,
      loading: false,
      lastFetchedAt: Date.now(),
    });
  },

  invalidate: () => {
    const state = get();
    // Force refetch by clearing timestamp
    set({ lastFetchedAt: null });
    if (state.userId) {
      state.fetchNavData(state.userId);
    }
  },

  reset: () => {
    set({
      profile: null,
      role: null,
      completedModules: new Set(),
      bookmarkedModules: new Set(),
      studentClassrooms: [],
      loading: false,
      lastFetchedAt: null,
      userId: null,
    });
  },
}));
