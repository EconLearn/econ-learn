import { create } from "zustand";
import { type LinearCurve, shiftCurve, findEquilibrium, type Equilibrium } from "@/lib/graph-math";

// AD: P = 124 - 0.8Y (downward)
// SRAS: P = 20 + 0.5Y (upward)
// LRAS: vertical at Y = 80 (full employment)
// Chosen so AD ∩ SRAS = Y=80, P=60 — starts at full employment.
const DEFAULT_AD: LinearCurve = { intercept: 124, slope: -0.8 };
const DEFAULT_SRAS: LinearCurve = { intercept: 20, slope: 0.5 };
const LRAS_Y = 80;
const SHIFT = 10;

export interface MacroShock {
  name: string;
  description: string;
  adShift: number;
  srasShift: number;
}

export const MACRO_SHOCKS: MacroShock[] = [
  { name: "Government Spending Increase", description: "Expansionary fiscal policy shifts AD right, raising both output and price level in the short run.", adShift: 12, srasShift: 0 },
  { name: "Central Bank Raises Rates", description: "Contractionary monetary policy reduces investment and consumption, shifting AD left.", adShift: -12, srasShift: 0 },
  { name: "Supply Chain Crisis", description: "A global supply disruption raises input costs, shifting SRAS left — causing stagflation.", adShift: 0, srasShift: -12 },
  { name: "Productivity Boom", description: "New technology increases efficiency. SRAS shifts right, lowering prices and boosting output.", adShift: 0, srasShift: 12 },
];

interface ADASState {
  ad: LinearCurve;
  sras: LinearCurve;
  lrasY: number;
  equilibrium: Equilibrium | null;
  gap: string;
  activeShock: MacroShock | null;

  shiftADRight: () => void;
  shiftADLeft: () => void;
  shiftSRASRight: () => void;
  shiftSRASLeft: () => void;
  applyShock: (shock: MacroShock) => void;
  reset: () => void;
}

function computeGap(eq: Equilibrium | null, lrasY: number): string {
  if (!eq) return "—";
  const diff = eq.quantity - lrasY;
  if (Math.abs(diff) < 2) return "At full employment";
  return diff > 0 ? "Inflationary gap" : "Recessionary gap";
}

function derive(ad: LinearCurve, sras: LinearCurve) {
  const equilibrium = findEquilibrium(ad, sras);
  const gap = computeGap(equilibrium, LRAS_Y);
  return { equilibrium, gap };
}

export const useADASStore = create<ADASState>((set) => ({
  ad: DEFAULT_AD,
  sras: DEFAULT_SRAS,
  lrasY: LRAS_Y,
  ...derive(DEFAULT_AD, DEFAULT_SRAS),
  activeShock: null,

  shiftADRight: () => set((s) => { const ad = shiftCurve(s.ad, SHIFT); return { ad, ...derive(ad, s.sras), activeShock: null }; }),
  shiftADLeft: () => set((s) => { const ad = shiftCurve(s.ad, -SHIFT); return { ad, ...derive(ad, s.sras), activeShock: null }; }),
  shiftSRASRight: () => set((s) => { const sras = shiftCurve(s.sras, SHIFT); return { sras, ...derive(s.ad, sras), activeShock: null }; }),
  shiftSRASLeft: () => set((s) => { const sras = shiftCurve(s.sras, -SHIFT); return { sras, ...derive(s.ad, sras), activeShock: null }; }),

  applyShock: (shock) => set((s) => {
    const ad = shiftCurve(s.ad, shock.adShift);
    const sras = shiftCurve(s.sras, shock.srasShift);
    return { ad, sras, ...derive(ad, sras), activeShock: shock };
  }),

  reset: () => set({
    ad: DEFAULT_AD, sras: DEFAULT_SRAS, lrasY: LRAS_Y,
    ...derive(DEFAULT_AD, DEFAULT_SRAS), activeShock: null,
  }),
}));
