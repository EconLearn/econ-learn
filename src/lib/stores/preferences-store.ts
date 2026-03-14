"use client";

import { create } from "zustand";

export interface StudyPreferences {
  quizLength: 5 | 8 | 10 | 15;
  timedModeDefault: boolean;
  dailyGoalMinutes: number;
}

const DEFAULTS: StudyPreferences = {
  quizLength: 8,
  timedModeDefault: false,
  dailyGoalMinutes: 30,
};

const STORAGE_KEY = "econ-study-prefs";

interface PreferencesState {
  preferences: StudyPreferences;
  setPreference: <K extends keyof StudyPreferences>(key: K, value: StudyPreferences[K]) => void;
  loaded: boolean;
}

function loadFromStorage(): StudyPreferences {
  if (typeof window === "undefined") return DEFAULTS;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return { ...DEFAULTS, ...JSON.parse(stored) };
    }
  } catch {
    // ignore
  }
  return DEFAULTS;
}

function saveToStorage(prefs: StudyPreferences) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
  } catch {
    // ignore
  }
}

export const usePreferencesStore = create<PreferencesState>((set, get) => ({
  preferences: DEFAULTS,
  loaded: false,
  setPreference: (key, value) => {
    const updated = { ...get().preferences, [key]: value };
    saveToStorage(updated);
    set({ preferences: updated });
  },
}));

export function initializePreferences() {
  const prefs = loadFromStorage();
  usePreferencesStore.setState({ preferences: prefs, loaded: true });
}
