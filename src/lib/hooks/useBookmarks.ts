"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { createClient } from "@/lib/supabase/client";
import { useAuth } from "@/components/providers/AuthProvider";

export interface Bookmark {
  id?: string;
  user_id: string;
  module_id: string;
  created_at: string;
}

export function useBookmarks() {
  const { user } = useAuth();
  const supabase = createClient();

  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchBookmarks = useCallback(async () => {
    if (!user) {
      setBookmarks([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    const { data, error } = await supabase
      .from("bookmarks")
      .select("*")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching bookmarks:", error);
    } else {
      setBookmarks((data ?? []) as Bookmark[]);
    }
    setLoading(false);
  }, [user, supabase]);

  useEffect(() => {
    fetchBookmarks();
  }, [fetchBookmarks]);

  const bookmarkedIds = useMemo(() => {
    return new Set(bookmarks.map((b) => b.module_id));
  }, [bookmarks]);

  /**
   * Returns true if the given module is bookmarked by the current user.
   */
  const isBookmarked = useCallback(
    (moduleId: string): boolean => {
      return bookmarkedIds.has(moduleId);
    },
    [bookmarkedIds]
  );

  /**
   * Toggles bookmark for a module: deletes if already bookmarked, inserts if not.
   */
  const toggleBookmark = useCallback(
    async (moduleId: string) => {
      if (!user) return;

      if (bookmarkedIds.has(moduleId)) {
        // Remove bookmark
        const { error } = await supabase
          .from("bookmarks")
          .delete()
          .eq("user_id", user.id)
          .eq("module_id", moduleId);

        if (error) {
          console.error("Error removing bookmark:", error);
          return;
        }
      } else {
        // Add bookmark
        const { error } = await supabase.from("bookmarks").insert({
          user_id: user.id,
          module_id: moduleId,
          created_at: new Date().toISOString(),
        });

        if (error) {
          console.error("Error adding bookmark:", error);
          return;
        }
      }

      await fetchBookmarks();
    },
    [user, supabase, bookmarkedIds, fetchBookmarks]
  );

  return {
    bookmarks,
    loading,
    bookmarkedIds,
    toggleBookmark,
    isBookmarked,
  };
}
