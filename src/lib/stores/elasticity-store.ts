import { create } from "zustand";
import { type LinearCurve, quantityAt } from "@/lib/graph-math";

// Default demand: P = 100 - Q (intercept=100, slope=-1)
// Midpoint at P=50, Q=50 gives unit elastic (|Ed| = 1)
const DEFAULT_INTERCEPT = 100;
const DEFAULT_SLOPE = -1;
const DEFAULT_PRICE_POINT = 50;

type Classification = "Elastic" | "Inelastic" | "Unit Elastic";

interface ElasticityState {
  demand: LinearCurve;
  demandSlope: number;
  pricePoint: number;
  quantity: number;
  elasticity: number;
  revenue: number;
  classification: Classification;

  setDemandSlope: (slope: number) => void;
  setPricePoint: (price: number) => void;
  reset: () => void;
}

function classify(absEd: number): Classification {
  if (Math.abs(absEd - 1) < 0.05) return "Unit Elastic";
  return absEd > 1 ? "Elastic" : "Inelastic";
}

function compute(slope: number, pricePoint: number) {
  const demand: LinearCurve = { intercept: DEFAULT_INTERCEPT, slope };

  // Q at the chosen price point
  const q = quantityAt(demand, pricePoint);
  const clampedQ = Math.max(0, q);
  const clampedP = Math.max(0, pricePoint);

  // Elasticity coefficient: Ed = (dQ/dP) * (P/Q)
  // For linear demand P = a + bQ, dQ/dP = 1/b (slope is b, which is negative)
  const dQdP = 1 / slope; // negative for downward-sloping demand
  const absEd = clampedQ > 0.01 ? Math.abs(dQdP * (clampedP / clampedQ)) : Infinity;

  const revenue = clampedP * clampedQ;

  return {
    demand,
    quantity: clampedQ,
    elasticity: absEd,
    revenue,
    classification: classify(absEd),
  };
}

const init = compute(DEFAULT_SLOPE, DEFAULT_PRICE_POINT);

export const useElasticityStore = create<ElasticityState>((set) => ({
  ...init,
  demandSlope: DEFAULT_SLOPE,
  pricePoint: DEFAULT_PRICE_POINT,

  setDemandSlope: (slope) =>
    set((s) => ({ demandSlope: slope, ...compute(slope, s.pricePoint) })),

  setPricePoint: (price) =>
    set((s) => ({ pricePoint: price, ...compute(s.demandSlope, price) })),

  reset: () =>
    set({
      demandSlope: DEFAULT_SLOPE,
      pricePoint: DEFAULT_PRICE_POINT,
      ...compute(DEFAULT_SLOPE, DEFAULT_PRICE_POINT),
    }),
}));
