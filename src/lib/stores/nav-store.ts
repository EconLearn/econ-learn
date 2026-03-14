import { create } from "zustand";
import { createClient } from "@/lib/supabase/client";

interface NavData {
  profile: { display_name: string } | null;
  completedModules: Set<string>;
  bookmarkedModules: Set<string>;
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
  completedModules: new Set(),
  bookmarkedModules: new Set(),
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
        .select("display_name")
        .eq("id", userId)
        .single(),
      supabase
        .from("bookmarks")
        .select("module_id")
        .eq("user_id", userId),
    ]);

    set({
      completedModules: new Set(
        progressRes.data?.map((p) => p.module_id) ?? []
      ),
      profile: profileRes.data ?? null,
      bookmarkedModules: new Set(
        bookmarksRes.data?.map((b) => b.module_id) ?? []
      ),
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
      completedModules: new Set(),
      bookmarkedModules: new Set(),
      loading: false,
      lastFetchedAt: null,
      userId: null,
    });
  },
}));
