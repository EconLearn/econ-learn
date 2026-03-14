import { create } from "zustand";
import { type LinearCurve, findEquilibrium } from "@/lib/graph-math";

// Monopoly: Demand P = 100 - Q, so MR = 100 - 2Q
// MC = 10 + 0.5Q (linear for simplicity)
const DEFAULT_DEMAND: LinearCurve = { intercept: 100, slope: -1 };
const DEFAULT_MR: LinearCurve = { intercept: 100, slope: -2 };
const DEFAULT_MC: LinearCurve = { intercept: 10, slope: 0.5 };

interface MonopolyState {
  demand: LinearCurve;
  mr: LinearCurve;
  mc: LinearCurve;
  fixedCost: number;
  profitMaxQ: number;
  profitMaxP: number;
  competitiveQ: number;
  competitiveP: number;
  mcAtQm: number;
  atcAtQm: number;
  monopolyProfit: number;
  dwl: number;
  mcIntercept: number;
  demandIntercept: number;

  setMcIntercept: (val: number) => void;
  setDemandIntercept: (val: number) => void;
  reset: () => void;
}

function compute(demandInt: number, mcInt: number) {
  const demand: LinearCurve = { intercept: demandInt, slope: -1 };
  const mr: LinearCurve = { intercept: demandInt, slope: -2 };
  const mc: LinearCurve = { intercept: mcInt, slope: 0.5 };

  // MR = MC => demandInt - 2Q = mcInt + 0.5Q => Q = (demandInt - mcInt) / 2.5
  const profitMaxQ = Math.max(0, (demandInt - mcInt) / 2.5);
  const profitMaxP = demand.intercept + demand.slope * profitMaxQ;

  // Competitive: D = MC
  const compEq = findEquilibrium(demand, mc);
  const competitiveQ = compEq?.quantity ?? 0;
  const competitiveP = compEq?.price ?? 0;

  // MC at Qm
  const mcAtQm = mc.intercept + mc.slope * profitMaxQ;

  // ATC at Qm: approximate using TC = FC + integral of MC
  // TC(Q) = FC + mcInt*Q + 0.5*mc.slope*Q^2
  // ATC = TC/Q = FC/Q + mcInt + 0.5*mc.slope*Q
  const fixedCost = 200;
  const atcAtQm = profitMaxQ > 0
    ? fixedCost / profitMaxQ + mcInt + 0.5 * mc.slope * profitMaxQ
    : mcInt;

  // Monopoly profit = (Pm - ATC) * Qm
  const monopolyProfit = profitMaxQ > 0 ? (profitMaxP - atcAtQm) * profitMaxQ : 0;

  // DWL = 0.5 * (Pm - MCm) * (Qc - Qm)
  const dwl = competitiveQ > profitMaxQ
    ? 0.5 * (profitMaxP - mcAtQm) * (competitiveQ - profitMaxQ)
    : 0;

  return {
    demand, mr, mc, fixedCost, profitMaxQ, profitMaxP, competitiveQ, competitiveP,
    mcAtQm, atcAtQm, monopolyProfit, dwl,
  };
}

const init = compute(100, 10);

export const useMonopolyStore = create<MonopolyState>((set) => ({
  ...init,
  mcIntercept: 10,
  demandIntercept: 100,

  setMcIntercept: (val) =>
    set((s) => ({ mcIntercept: val, ...compute(s.demandIntercept, val) })),
  setDemandIntercept: (val) =>
    set((s) => ({ demandIntercept: val, ...compute(val, s.mcIntercept) })),
  reset: () => set({ mcIntercept: 10, demandIntercept: 100, ...compute(100, 10) }),
}));
