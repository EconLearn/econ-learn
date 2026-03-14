import { create } from "zustand";

export interface CostPoint {
  q: number;
  mc: number;
  atc: number;
  avc: number;
  afc: number;
}

interface ProductionCostsState {
  totalFixedCost: number;
  laborCost: number;
  productivity: number;
  costPoints: CostPoint[];

  setTotalFixedCost: (n: number) => void;
  setLaborCost: (n: number) => void;
  setProductivity: (n: number) => void;
  reset: () => void;
}

const DEFAULT_TFC = 100;
const DEFAULT_LABOR_COST = 20;
const DEFAULT_PRODUCTIVITY = 10;

// ─── Cubic cost model ────────────────────────────────────────────────
//
// Previous implementation used quadratic TVC, which made MC and AVC
// LINEAR (always increasing). This violates the fundamental AP cost
// curve relationships: MC and AVC must be U-shaped, and MC must pass
// through the minimums of both AVC and ATC.
//
// Correct model uses CUBIC total variable cost:
//   TVC(Q) = s · (αQ − βQ² + γQ³)
//
// This guarantees:
//   MC  = s · (α − 2βQ + 3γQ²)   ← U-shaped (quadratic)
//   AVC = s · (α − βQ + γQ²)     ← U-shaped (quadratic)
//   MC passes through AVC minimum ← mathematical property of cubic
//   MC passes through ATC minimum ← mathematical property
//
// The scale factor s = (wage / defaultWage)(defaultProd / prod) shifts
// all variable costs proportionally without distorting the U-shapes.
//
// With default parameters (s = 1, FC = 100):
//   MC minimum  at Q = β/(3γ)  = 10,  value ≈ 5
//   AVC minimum at Q = β/(2γ)  = 15,  value = 8
//   ATC minimum at Q ≈ 19,             value ≈ 14
//   MC = AVC = 8  at Q = 15 (confirmed: MC crosses AVC at its min)
// ─────────────────────────────────────────────────────────────────────

const ALPHA = 17;
const BETA = 1.2;
const GAMMA = 0.04;

function costScale(laborCost: number, productivity: number): number {
  return (laborCost / DEFAULT_LABOR_COST) * (DEFAULT_PRODUCTIVITY / productivity);
}

function computeCostPoints(
  totalFixedCost: number,
  laborCost: number,
  productivity: number
): CostPoint[] {
  const s = costScale(laborCost, productivity);
  const points: CostPoint[] = [];

  for (let q = 1; q <= 35; q++) {
    // Analytical TVC from cubic: s·(αQ − βQ² + γQ³)
    const tvc = s * (ALPHA * q - BETA * q * q + GAMMA * q * q * q);

    // Analytical MC as derivative of TVC: s·(α − 2βQ + 3γQ²)
    // Using the analytical derivative instead of discrete difference (TC(Q) - TC(Q-1))
    // guarantees MC passes through AVC minimum exactly.
    const mc = s * (ALPHA - 2 * BETA * q + 3 * GAMMA * q * q);

    const avc = tvc / q; // = s·(α − βQ + γQ²)
    const afc = totalFixedCost / q;
    const atc = avc + afc;

    points.push({
      q,
      mc: Math.max(0, mc),
      atc,
      avc: Math.max(0, avc),
      afc,
    });
  }

  return points;
}

const initialPoints = computeCostPoints(
  DEFAULT_TFC,
  DEFAULT_LABOR_COST,
  DEFAULT_PRODUCTIVITY
);

export const useProductionCostsStore = create<ProductionCostsState>((set) => ({
  totalFixedCost: DEFAULT_TFC,
  laborCost: DEFAULT_LABOR_COST,
  productivity: DEFAULT_PRODUCTIVITY,
  costPoints: initialPoints,

  setTotalFixedCost: (n) =>
    set((s) => ({
      totalFixedCost: n,
      costPoints: computeCostPoints(n, s.laborCost, s.productivity),
    })),

  setLaborCost: (n) =>
    set((s) => ({
      laborCost: n,
      costPoints: computeCostPoints(s.totalFixedCost, n, s.productivity),
    })),

  setProductivity: (n) =>
    set((s) => ({
      productivity: n,
      costPoints: computeCostPoints(s.totalFixedCost, s.laborCost, n),
    })),

  reset: () =>
    set({
      totalFixedCost: DEFAULT_TFC,
      laborCost: DEFAULT_LABOR_COST,
      productivity: DEFAULT_PRODUCTIVITY,
      costPoints: initialPoints,
    }),
}));
