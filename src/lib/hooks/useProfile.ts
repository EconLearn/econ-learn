"use client";

import { useState, useEffect, useCallback } from "react";
import { createClient } from "@/lib/supabase/client";
import { useAuth } from "@/components/providers/AuthProvider";

export interface Profile {
  id: string;
  display_name: string | null;
  avatar_url: string | null;
  created_at: string;
  updated_at: string | null;
}

export function useProfile() {
  const { user } = useAuth();
  const supabase = createClient();

  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchProfile = useCallback(async () => {
    if (!user) {
      setProfile(null);
      setLoading(false);
      return;
    }

    setLoading(true);
    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", user.id)
      .maybeSingle();

    if (error) {
      console.error("Error fetching profile:", error);
    } else {
      setProfile(data as Profile | null);
    }
    setLoading(false);
  }, [user, supabase]);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  /**
   * Updates the user's display name in the profiles table.
   */
  const updateDisplayName = useCallback(
    async (name: string) => {
      if (!user) return;

      const { error } = await supabase
        .from("profiles")
        .update({
          display_name: name,
          updated_at: new Date().toISOString(),
        })
        .eq("id", user.id);

      if (error) {
        console.error("Error updating display name:", error);
        return;
      }

      await fetchProfile();
    },
    [user, supabase, fetchProfile]
  );

  return {
    profile,
    loading,
    updateDisplayName,
  };
}
