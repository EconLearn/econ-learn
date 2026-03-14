import { create } from "zustand";
import { type LinearCurve, shiftCurve, priceAt, quantityAt } from "@/lib/graph-math";

// Short-run Phillips Curve: inflation = expected_inflation - slope*(unemployment - natural_rate)
// We model as a linear curve where x-axis = unemployment, y-axis = inflation
// SRPC: inflation = intercept + slope * unemployment (slope < 0)
const DEFAULT_SRPC: LinearCurve = { intercept: 12, slope: -1.5 };
const DEFAULT_NATURAL_RATE = 5; // Natural rate of unemployment (LRPC)
const DEFAULT_EXPECTED_INFLATION = 4.5;
const SHIFT = 2;

interface PhillipsCurveState {
  srpc: LinearCurve;
  naturalRate: number;
  expectedInflation: number;
  currentUnemployment: number;
  currentInflation: number;

  // Actions
  shiftSRPCUp: () => void;
  shiftSRPCDown: () => void;
  setNaturalRate: (rate: number) => void;
  setCurrentUnemployment: (u: number) => void;
  reset: () => void;
}

function derive(srpc: LinearCurve, unemployment: number) {
  const currentInflation = priceAt(srpc, unemployment);
  return { currentInflation: Math.max(-2, currentInflation) };
}

const init = derive(DEFAULT_SRPC, DEFAULT_NATURAL_RATE);

export const usePhillipsCurveStore = create<PhillipsCurveState>((set) => ({
  srpc: DEFAULT_SRPC,
  naturalRate: DEFAULT_NATURAL_RATE,
  expectedInflation: DEFAULT_EXPECTED_INFLATION,
  currentUnemployment: DEFAULT_NATURAL_RATE,
  ...init,

  shiftSRPCUp: () =>
    set((s) => {
      const srpc: LinearCurve = { intercept: s.srpc.intercept + SHIFT, slope: s.srpc.slope };
      return {
        srpc,
        expectedInflation: s.expectedInflation + SHIFT,
        ...derive(srpc, s.currentUnemployment),
      };
    }),

  shiftSRPCDown: () =>
    set((s) => {
      const srpc: LinearCurve = { intercept: s.srpc.intercept - SHIFT, slope: s.srpc.slope };
      return {
        srpc,
        expectedInflation: Math.max(0, s.expectedInflation - SHIFT),
        ...derive(srpc, s.currentUnemployment),
      };
    }),

  setNaturalRate: (rate: number) =>
    set((s) => {
      // SRPC must pass through (naturalRate, expectedInflation)
      // inflation = intercept + slope * u → intercept = expectedInflation - slope * naturalRate
      const intercept = s.expectedInflation - s.srpc.slope * rate;
      const srpc: LinearCurve = { intercept, slope: s.srpc.slope };
      return {
        naturalRate: rate,
        srpc,
        ...derive(srpc, s.currentUnemployment),
      };
    }),

  setCurrentUnemployment: (u: number) =>
    set((s) => ({
      currentUnemployment: u,
      ...derive(s.srpc, u),
    })),

  reset: () =>
    set({
      srpc: DEFAULT_SRPC,
      naturalRate: DEFAULT_NATURAL_RATE,
      expectedInflation: DEFAULT_EXPECTED_INFLATION,
      currentUnemployment: DEFAULT_NATURAL_RATE,
      ...derive(DEFAULT_SRPC, DEFAULT_NATURAL_RATE),
    }),
}));
