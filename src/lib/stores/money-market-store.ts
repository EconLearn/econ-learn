import { create } from "zustand";
import { type LinearCurve, shiftCurve, priceAt } from "@/lib/graph-math";

// Money demand is a normal downward-sloping linear curve
const DEFAULT_MD: LinearCurve = { intercept: 80, slope: -0.8 };
// Money supply is vertical at a fixed quantity (set by the central bank)
const DEFAULT_MS_QUANTITY = 50;
const SHIFT = 5;

interface MoneyMarketState {
  md: LinearCurve;
  msQuantity: number;
  interestRate: number;

  shiftMSRight: () => void;
  shiftMSLeft: () => void;
  shiftMDRight: () => void;
  shiftMDLeft: () => void;
  reset: () => void;
}

function derive(md: LinearCurve, msQuantity: number) {
  // Equilibrium: plug msQuantity into MD to get interest rate
  const interestRate = Math.max(0, priceAt(md, msQuantity));
  return { interestRate };
}

export const useMoneyMarketStore = create<MoneyMarketState>((set) => ({
  md: DEFAULT_MD,
  msQuantity: DEFAULT_MS_QUANTITY,
  ...derive(DEFAULT_MD, DEFAULT_MS_QUANTITY),

  shiftMSRight: () =>
    set((s) => {
      const msQuantity = s.msQuantity + SHIFT;
      return { msQuantity, ...derive(s.md, msQuantity) };
    }),
  shiftMSLeft: () =>
    set((s) => {
      const msQuantity = Math.max(5, s.msQuantity - SHIFT);
      return { msQuantity, ...derive(s.md, msQuantity) };
    }),
  shiftMDRight: () =>
    set((s) => {
      const md = shiftCurve(s.md, SHIFT);
      return { md, ...derive(md, s.msQuantity) };
    }),
  shiftMDLeft: () =>
    set((s) => {
      const md = shiftCurve(s.md, -SHIFT);
      return { md, ...derive(md, s.msQuantity) };
    }),

  reset: () =>
    set({
      md: DEFAULT_MD,
      msQuantity: DEFAULT_MS_QUANTITY,
      ...derive(DEFAULT_MD, DEFAULT_MS_QUANTITY),
    }),
}));
