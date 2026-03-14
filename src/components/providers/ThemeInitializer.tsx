"use client";

import { useEffect } from "react";
import { initializeTheme } from "@/lib/stores/theme-store";
import { initializePreferences } from "@/lib/stores/preferences-store";

export default function ThemeInitializer() {
  useEffect(() => {
    initializeTheme();
    initializePreferences();
  }, []);

  return null;
}
