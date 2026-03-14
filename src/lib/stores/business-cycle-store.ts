import { create } from "zustand";

export type CyclePhase = "expansion" | "peak" | "contraction" | "trough";

export interface PhaseInfo {
  id: CyclePhase;
  label: string;
  description: string;
  color: string;
  indicators: string[];
}

export const phases: PhaseInfo[] = [
  {
    id: "expansion",
    label: "Expansion",
    description:
      "Real GDP is rising. Employment grows, consumer spending increases, and businesses invest. The economy moves from below to above its long-run trend.",
    color: "#22c55e",
    indicators: [
      "Rising employment",
      "Increasing consumer confidence",
      "Business profits growing",
      "Possible inflationary pressure",
    ],
  },
  {
    id: "peak",
    label: "Peak",
    description:
      "Real GDP hits its highest point before turning down. The economy is at or beyond full employment, and inflation is typically rising. The Fed may tighten monetary policy.",
    color: "#3b82f6",
    indicators: [
      "Maximum real GDP output",
      "Very low unemployment",
      "Rising inflation",
      "Overheating risk",
    ],
  },
  {
    id: "contraction",
    label: "Contraction",
    description:
      "Real GDP is falling. If it lasts two consecutive quarters, economists call it a recession. Firms cut production and lay off workers.",
    color: "#ef4444",
    indicators: [
      "Falling output",
      "Rising unemployment",
      "Declining business investment",
      "Reduced consumer spending",
    ],
  },
  {
    id: "trough",
    label: "Trough",
    description:
      "Real GDP hits its lowest point. Unemployment is at its highest. This is the turning point where the economy begins recovering — the start of a new expansion.",
    color: "#f59e0b",
    indicators: [
      "Minimum real GDP output",
      "Highest unemployment",
      "Low inflation or deflation",
      "Potential for policy stimulus",
    ],
  },
];

interface BusinessCycleState {
  activePhase: CyclePhase | null;
  showTrend: boolean;
  showLabels: boolean;
  animating: boolean;

  setActivePhase: (phase: CyclePhase | null) => void;
  toggleTrend: () => void;
  toggleLabels: () => void;
  startAnimation: () => void;
  stopAnimation: () => void;
  reset: () => void;
}

export const useBusinessCycleStore = create<BusinessCycleState>((set) => ({
  activePhase: null,
  showTrend: true,
  showLabels: true,
  animating: false,

  setActivePhase: (phase) => set({ activePhase: phase }),
  toggleTrend: () => set((s) => ({ showTrend: !s.showTrend })),
  toggleLabels: () => set((s) => ({ showLabels: !s.showLabels })),
  startAnimation: () => set({ animating: true }),
  stopAnimation: () => set({ animating: false }),
  reset: () =>
    set({
      activePhase: null,
      showTrend: true,
      showLabels: true,
      animating: false,
    }),
}));
