import { create } from "zustand";
import { type LinearCurve, findEquilibrium } from "@/lib/graph-math";

/**
 * Monopolistic Competition Store
 *
 * Short-run: Firm faces downward-sloping demand, sets MR = MC, earns profit (or loss).
 * Long-run: Entry/exit shifts the firm's demand curve until economic profit = 0.
 *           Demand becomes tangent to ATC — the firm produces at excess capacity.
 *
 * Curves:
 *   Demand: P = demandInt - 0.8Q   (flatter than monopoly — closer substitutes)
 *   MR:     P = demandInt - 1.6Q   (twice the slope of demand)
 *   MC:     P = mcInt + 0.5Q       (same structure as monopoly module)
 *   ATC:    FC/Q + mcInt + 0.25Q   (U-shaped, derived from TC = FC + MC integral)
 */

const SR_DEMAND_INT = 90; // short-run demand intercept
const LR_DEMAND_INT = 58; // long-run demand intercept (tangent to ATC)
const DEFAULT_MC_INT = 10;
const FIXED_COST = 200;
const DEMAND_SLOPE = -0.8;
const MR_SLOPE = -1.6;
const MC_SLOPE = 0.5;

interface MonoCompState {
  isLongRun: boolean;
  demand: LinearCurve;
  mr: LinearCurve;
  mc: LinearCurve;
  fixedCost: number;
  profitMaxQ: number;
  profitMaxP: number;
  mcAtQm: number;
  atcAtQm: number;
  profit: number;
  efficientScaleQ: number;
  excessCapacity: number;

  toggleRun: () => void;
  reset: () => void;
}

function compute(demandInt: number, mcInt: number) {
  const demand: LinearCurve = { intercept: demandInt, slope: DEMAND_SLOPE };
  const mr: LinearCurve = { intercept: demandInt, slope: MR_SLOPE };
  const mc: LinearCurve = { intercept: mcInt, slope: MC_SLOPE };

  // MR = MC → demandInt - 1.6Q = mcInt + 0.5Q → Q = (demandInt - mcInt) / 2.1
  const profitMaxQ = Math.max(0, (demandInt - mcInt) / (-MR_SLOPE + MC_SLOPE));
  const profitMaxP = demand.intercept + demand.slope * profitMaxQ;

  const mcAtQm = mc.intercept + mc.slope * profitMaxQ;

  // ATC(Q) = FC/Q + mcInt + 0.5 * mcSlope * Q
  const atcAtQm =
    profitMaxQ > 0
      ? FIXED_COST / profitMaxQ + mcInt + 0.5 * MC_SLOPE * profitMaxQ
      : mcInt;

  const profit = profitMaxQ > 0 ? (profitMaxP - atcAtQm) * profitMaxQ : 0;

  // Efficient scale: minimum of ATC → d(ATC)/dQ = -FC/Q^2 + 0.5*mcSlope = 0
  // Q* = sqrt(FC / (0.5 * mcSlope))
  const efficientScaleQ = Math.sqrt(FIXED_COST / (0.5 * MC_SLOPE));
  const excessCapacity = Math.max(0, efficientScaleQ - profitMaxQ);

  return {
    demand,
    mr,
    mc,
    fixedCost: FIXED_COST,
    profitMaxQ,
    profitMaxP,
    mcAtQm,
    atcAtQm,
    profit,
    efficientScaleQ,
    excessCapacity,
  };
}

const srInit = compute(SR_DEMAND_INT, DEFAULT_MC_INT);

export const useMonoCompStore = create<MonoCompState>((set) => ({
  isLongRun: false,
  ...srInit,

  toggleRun: () =>
    set((s) => {
      const nextLR = !s.isLongRun;
      const demandInt = nextLR ? LR_DEMAND_INT : SR_DEMAND_INT;
      return { isLongRun: nextLR, ...compute(demandInt, DEFAULT_MC_INT) };
    }),

  reset: () =>
    set({ isLongRun: false, ...compute(SR_DEMAND_INT, DEFAULT_MC_INT) }),
}));
