import { create } from "zustand";

type Theme = "light" | "dark" | "system";

interface ThemeState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: "light" | "dark";
}

function getSystemTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(resolved: "light" | "dark") {
  if (typeof document === "undefined") return;
  document.documentElement.setAttribute("data-theme", resolved);
}

export const useThemeStore = create<ThemeState>((set, get) => ({
  theme: "light",
  resolvedTheme: "light",

  setTheme: (theme: Theme) => {
    const resolved = theme === "system" ? getSystemTheme() : theme;
    applyTheme(resolved);
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("econ-theme", theme);
    }
    set({ theme, resolvedTheme: resolved });
  },
}));

// Initialize theme on client side
export function initializeTheme() {
  if (typeof window === "undefined") return;

  const stored = localStorage.getItem("econ-theme") as Theme | null;
  const theme = stored || "light";
  const resolved = theme === "system" ? getSystemTheme() : theme;
  applyTheme(resolved);
  useThemeStore.setState({ theme, resolvedTheme: resolved });

  // Listen for system theme changes
  const mq = window.matchMedia("(prefers-color-scheme: dark)");
  const handler = () => {
    const current = useThemeStore.getState().theme;
    if (current === "system") {
      const newResolved = getSystemTheme();
      applyTheme(newResolved);
      useThemeStore.setState({ resolvedTheme: newResolved });
    }
  };
  mq.addEventListener("change", handler);
}
