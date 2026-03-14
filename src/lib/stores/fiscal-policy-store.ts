import { create } from "zustand";
import {
  type LinearCurve,
  type Equilibrium,
  findEquilibrium,
  shiftCurve,
} from "@/lib/graph-math";

// AD: P = 140 - 0.8Y (downward-sloping)
// SRAS: P = 20 + 0.5Y (upward-sloping)
// LRAS: vertical at Y = 100 (potential GDP)
const DEFAULT_AD: LinearCurve = { intercept: 140, slope: -0.8 };
const DEFAULT_SRAS: LinearCurve = { intercept: 20, slope: 0.5 };
const DEFAULT_LRAS_Y = 100;

interface FiscalPolicyState {
  ad: LinearCurve;
  sras: LinearCurve;
  lrasY: number;
  originalAD: LinearCurve;
  equilibrium: Equilibrium | null;
  gap: string;
  mpc: number;
  spendingChange: number;
  taxChange: number;

  setMPC: (n: number) => void;
  applySpendingChange: (amount: number) => void;
  applyTaxChange: (amount: number) => void;
  reset: () => void;
}

function computeGap(eq: Equilibrium | null, lrasY: number): string {
  if (!eq) return "—";
  const diff = eq.quantity - lrasY;
  if (Math.abs(diff) < 2) return "At full employment";
  return diff > 0 ? "Inflationary gap" : "Recessionary gap";
}

function spendingMultiplier(mpc: number): number {
  return 1 / (1 - mpc);
}

function taxMultiplier(mpc: number): number {
  return -mpc / (1 - mpc);
}

function totalADShift(
  spendingChange: number,
  taxChange: number,
  mpc: number
): number {
  return (
    spendingChange * spendingMultiplier(mpc) +
    taxChange * taxMultiplier(mpc)
  );
}

function deriveAD(
  originalAD: LinearCurve,
  spendingChange: number,
  taxChange: number,
  mpc: number
): LinearCurve {
  const shift = totalADShift(spendingChange, taxChange, mpc);
  if (Math.abs(shift) < 0.01) return originalAD;
  return shiftCurve(originalAD, shift);
}

function derive(ad: LinearCurve, sras: LinearCurve, lrasY: number) {
  const equilibrium = findEquilibrium(ad, sras);
  const gap = computeGap(equilibrium, lrasY);
  return { equilibrium, gap };
}

export const useFiscalPolicyStore = create<FiscalPolicyState>((set) => ({
  ad: DEFAULT_AD,
  sras: DEFAULT_SRAS,
  lrasY: DEFAULT_LRAS_Y,
  originalAD: DEFAULT_AD,
  ...derive(DEFAULT_AD, DEFAULT_SRAS, DEFAULT_LRAS_Y),
  mpc: 0.8,
  spendingChange: 0,
  taxChange: 0,

  setMPC: (n) =>
    set((s) => {
      const ad = deriveAD(s.originalAD, s.spendingChange, s.taxChange, n);
      return { mpc: n, ad, ...derive(ad, s.sras, s.lrasY) };
    }),

  applySpendingChange: (amount) =>
    set((s) => {
      const newSpending = s.spendingChange + amount;
      const ad = deriveAD(s.originalAD, newSpending, s.taxChange, s.mpc);
      return {
        spendingChange: newSpending,
        ad,
        ...derive(ad, s.sras, s.lrasY),
      };
    }),

  applyTaxChange: (amount) =>
    set((s) => {
      const newTax = s.taxChange + amount;
      const ad = deriveAD(s.originalAD, s.spendingChange, newTax, s.mpc);
      return { taxChange: newTax, ad, ...derive(ad, s.sras, s.lrasY) };
    }),

  reset: () =>
    set({
      ad: DEFAULT_AD,
      sras: DEFAULT_SRAS,
      lrasY: DEFAULT_LRAS_Y,
      originalAD: DEFAULT_AD,
      ...derive(DEFAULT_AD, DEFAULT_SRAS, DEFAULT_LRAS_Y),
      mpc: 0.8,
      spendingChange: 0,
      taxChange: 0,
    }),
}));

export { spendingMultiplier, taxMultiplier, totalADShift };
