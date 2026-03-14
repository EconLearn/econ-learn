import { create } from "zustand";
import {
  type LinearCurve,
  type Equilibrium,
  findEquilibrium,
  shiftCurve,
} from "@/lib/graph-math";

const DEFAULT_MARKET_DEMAND: LinearCurve = { intercept: 80, slope: -0.6 };
const DEFAULT_MARKET_SUPPLY: LinearCurve = { intercept: 10, slope: 0.5 };
const DEFAULT_FIRM_ALPHA = 25;
const SHIFT_AMOUNT = 10;

// ─── Cubic cost model for the individual firm ───────────────────────
//
// TC(Q) = FC + α·Q − β·Q² + γ·Q³
//
// This guarantees:
//   MC(Q)  = α − 2β·Q + 3γ·Q²   ← U-shaped (quadratic)
//   AVC(Q) = α − β·Q + γ·Q²     ← U-shaped (quadratic)
//   ATC(Q) = FC/Q + AVC(Q)       ← U-shaped
//
// MC passes through AVC minimum at Q = β/(2γ) — mathematical property.
// MC passes through ATC minimum — mathematical property.
//
// With default α=25, FC=150:
//   MC min  at Q = 10,   value = 7
//   AVC min at Q = 15,   value = 11.5
//   ATC min at Q ≈ 18.6, value ≈ 20.3
//
// The slider adjusts α, which shifts all variable-cost curves up/down
// uniformly without distorting the U-shapes or breaking the crossings.
// ─────────────────────────────────────────────────────────────────────

export const FIRM_FC = 150;
export const FIRM_BETA = 1.8;
export const FIRM_GAMMA = 0.06;

interface PerfectCompetitionState {
  marketDemand: LinearCurve;
  marketSupply: LinearCurve;
  firmAlpha: number;
  marketEquilibrium: Equilibrium | null;
  marketPrice: number;
  firmQuantity: number;
  firmATCAtQ: number;
  firmAVCAtQ: number;
  profitPerUnit: number;
  totalProfit: number;
  qMinATC: number;
  qMinAVC: number;

  shiftMarketDemandRight: () => void;
  shiftMarketDemandLeft: () => void;
  shiftMarketSupplyRight: () => void;
  shiftMarketSupplyLeft: () => void;
  setFirmAlpha: (val: number) => void;
  reset: () => void;
}

function computeDerived(
  marketDemand: LinearCurve,
  marketSupply: LinearCurve,
  firmAlpha: number,
) {
  const marketEquilibrium = findEquilibrium(marketDemand, marketSupply);
  const marketPrice = marketEquilibrium?.price ?? 0;

  // AVC minimum: Q = β/(2γ), value = α − β²/(4γ)
  const qMinAVC = FIRM_BETA / (2 * FIRM_GAMMA);
  const avcMin = firmAlpha - (FIRM_BETA * FIRM_BETA) / (4 * FIRM_GAMMA);

  // MC minimum: Q = β/(3γ), value = α − β²/(3γ)
  const mcMin = firmAlpha - (FIRM_BETA * FIRM_BETA) / (3 * FIRM_GAMMA);

  // Firm produces where P = MC on the rising portion of MC
  // Solve: 3γ·Q² − 2β·Q + (α − P) = 0
  let firmQuantity = 0;
  if (marketPrice > mcMin) {
    const a_c = 3 * FIRM_GAMMA;
    const b_c = -2 * FIRM_BETA;
    const c_c = firmAlpha - marketPrice;
    const disc = b_c * b_c - 4 * a_c * c_c;
    if (disc >= 0) {
      // Larger root = rising portion of MC
      firmQuantity = Math.max(0, (-b_c + Math.sqrt(disc)) / (2 * a_c));
    }
  }

  // Shutdown rule: if P < AVC minimum, produce nothing
  if (marketPrice < avcMin) firmQuantity = 0;

  // AVC and ATC at firm's chosen quantity
  const firmAVCAtQ =
    firmQuantity > 0
      ? firmAlpha -
        FIRM_BETA * firmQuantity +
        FIRM_GAMMA * firmQuantity * firmQuantity
      : avcMin;
  const firmATCAtQ =
    firmQuantity > 0 ? FIRM_FC / firmQuantity + firmAVCAtQ : 0;

  // ATC minimum: solve dATC/dQ = 0 → 2γ·Q³ − β·Q² = FC (Newton's method)
  let qMinATC = qMinAVC * 1.2;
  for (let i = 0; i < 50; i++) {
    const f =
      2 * FIRM_GAMMA * qMinATC ** 3 -
      FIRM_BETA * qMinATC ** 2 -
      FIRM_FC;
    const fp =
      6 * FIRM_GAMMA * qMinATC ** 2 - 2 * FIRM_BETA * qMinATC;
    if (Math.abs(fp) < 1e-10) break;
    const step = f / fp;
    qMinATC -= step;
    if (qMinATC < 1) qMinATC = 1;
    if (Math.abs(step) < 1e-8) break;
  }

  const profitPerUnit = firmQuantity > 0 ? marketPrice - firmATCAtQ : 0;
  const totalProfit = profitPerUnit * firmQuantity;

  return {
    marketEquilibrium,
    marketPrice,
    firmQuantity,
    firmATCAtQ,
    firmAVCAtQ,
    profitPerUnit,
    totalProfit,
    qMinATC,
    qMinAVC,
  };
}

const init = computeDerived(
  DEFAULT_MARKET_DEMAND,
  DEFAULT_MARKET_SUPPLY,
  DEFAULT_FIRM_ALPHA,
);

export const usePerfectCompetitionStore = create<PerfectCompetitionState>(
  (set) => ({
    marketDemand: DEFAULT_MARKET_DEMAND,
    marketSupply: DEFAULT_MARKET_SUPPLY,
    firmAlpha: DEFAULT_FIRM_ALPHA,
    ...init,

    shiftMarketDemandRight: () =>
      set((s) => {
        const marketDemand = shiftCurve(s.marketDemand, SHIFT_AMOUNT);
        return {
          marketDemand,
          ...computeDerived(marketDemand, s.marketSupply, s.firmAlpha),
        };
      }),

    shiftMarketDemandLeft: () =>
      set((s) => {
        const marketDemand = shiftCurve(s.marketDemand, -SHIFT_AMOUNT);
        return {
          marketDemand,
          ...computeDerived(marketDemand, s.marketSupply, s.firmAlpha),
        };
      }),

    shiftMarketSupplyRight: () =>
      set((s) => {
        const marketSupply = shiftCurve(s.marketSupply, SHIFT_AMOUNT);
        return {
          marketSupply,
          ...computeDerived(s.marketDemand, marketSupply, s.firmAlpha),
        };
      }),

    shiftMarketSupplyLeft: () =>
      set((s) => {
        const marketSupply = shiftCurve(s.marketSupply, -SHIFT_AMOUNT);
        return {
          marketSupply,
          ...computeDerived(s.marketDemand, marketSupply, s.firmAlpha),
        };
      }),

    setFirmAlpha: (val) =>
      set((s) => ({
        firmAlpha: val,
        ...computeDerived(s.marketDemand, s.marketSupply, val),
      })),

    reset: () =>
      set({
        marketDemand: DEFAULT_MARKET_DEMAND,
        marketSupply: DEFAULT_MARKET_SUPPLY,
        firmAlpha: DEFAULT_FIRM_ALPHA,
        ...computeDerived(
          DEFAULT_MARKET_DEMAND,
          DEFAULT_MARKET_SUPPLY,
          DEFAULT_FIRM_ALPHA,
        ),
      }),
  }),
);
