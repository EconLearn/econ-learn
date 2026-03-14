import { create } from "zustand";
import {
  findEquilibrium,
  type LinearCurve,
  type Equilibrium,
} from "@/lib/graph-math";

// Default curves
const DEFAULT_DEMAND: LinearCurve = { intercept: 90, slope: -0.8 };
const DEFAULT_SUPPLY: LinearCurve = { intercept: 10, slope: 0.7 };
const DEFAULT_EXTERNAL_COST = 15;
const DEFAULT_EXTERNAL_BENEFIT = 15;

interface ExternalityState {
  demand: LinearCurve;
  supply: LinearCurve;
  externalCost: number;
  externalBenefit: number;
  mode: "negative" | "positive";
  showTax: boolean;
  taxAmount: number;

  // Computed
  socialCost: LinearCurve;
  socialBenefit: LinearCurve;
  marketEquilibrium: Equilibrium | null;
  socialEquilibrium: Equilibrium | null;
  deadweightLoss: number;

  // Actions
  setMode: (mode: "negative" | "positive") => void;
  setExternalCost: (cost: number) => void;
  setExternalBenefit: (benefit: number) => void;
  toggleTax: () => void;
  setTaxAmount: (amount: number) => void;
  reset: () => void;
}

function computeDerived(
  demand: LinearCurve,
  supply: LinearCurve,
  externalCost: number,
  externalBenefit: number,
  mode: "negative" | "positive",
  showTax: boolean
) {
  // Social cost = private supply shifted up by external cost
  // P_SC = (intercept + externalCost) + slope * Q
  const socialCost: LinearCurve = {
    intercept: supply.intercept + externalCost,
    slope: supply.slope,
  };

  // Social benefit = private demand shifted up by external benefit
  // P_SB = (intercept + externalBenefit) + slope * Q
  const socialBenefit: LinearCurve = {
    intercept: demand.intercept + externalBenefit,
    slope: demand.slope,
  };

  // Market equilibrium is always D intersect S
  const marketEquilibrium = findEquilibrium(demand, supply);

  // Social equilibrium depends on the mode
  let socialEquilibrium: Equilibrium | null;
  if (mode === "negative") {
    // Socially optimal: D intersect Social Cost
    socialEquilibrium = findEquilibrium(demand, socialCost);
  } else {
    // Socially optimal: S intersect Social Benefit
    socialEquilibrium = findEquilibrium(socialBenefit, supply);
  }

  // Deadweight loss: triangle between market Q and social Q
  let deadweightLoss = 0;
  if (marketEquilibrium && socialEquilibrium && !showTax) {
    const qDiff = Math.abs(
      marketEquilibrium.quantity - socialEquilibrium.quantity
    );
    if (mode === "negative") {
      // DWL = 0.5 * (Qmarket - Qoptimal) * external cost
      deadweightLoss = 0.5 * qDiff * externalCost;
    } else {
      // DWL = 0.5 * (Qoptimal - Qmarket) * external benefit
      deadweightLoss = 0.5 * qDiff * externalBenefit;
    }
  }

  return {
    socialCost,
    socialBenefit,
    marketEquilibrium,
    socialEquilibrium,
    deadweightLoss,
  };
}

const initialDerived = computeDerived(
  DEFAULT_DEMAND,
  DEFAULT_SUPPLY,
  DEFAULT_EXTERNAL_COST,
  DEFAULT_EXTERNAL_BENEFIT,
  "negative",
  false
);

export const useExternalityStore = create<ExternalityState>((set) => ({
  demand: DEFAULT_DEMAND,
  supply: DEFAULT_SUPPLY,
  externalCost: DEFAULT_EXTERNAL_COST,
  externalBenefit: DEFAULT_EXTERNAL_BENEFIT,
  mode: "negative",
  showTax: false,
  taxAmount: DEFAULT_EXTERNAL_COST,
  ...initialDerived,

  setMode: (mode) =>
    set((s) => ({
      mode,
      showTax: false,
      taxAmount: mode === "negative" ? s.externalCost : s.externalBenefit,
      ...computeDerived(
        s.demand,
        s.supply,
        s.externalCost,
        s.externalBenefit,
        mode,
        false
      ),
    })),

  setExternalCost: (cost) =>
    set((s) => {
      const taxAmount = s.showTax ? cost : s.taxAmount;
      return {
        externalCost: cost,
        taxAmount: s.mode === "negative" ? cost : s.taxAmount,
        ...computeDerived(
          s.demand,
          s.supply,
          cost,
          s.externalBenefit,
          s.mode,
          s.showTax
        ),
      };
    }),

  setExternalBenefit: (benefit) =>
    set((s) => ({
      externalBenefit: benefit,
      taxAmount: s.mode === "positive" ? benefit : s.taxAmount,
      ...computeDerived(
        s.demand,
        s.supply,
        s.externalCost,
        benefit,
        s.mode,
        s.showTax
      ),
    })),

  toggleTax: () =>
    set((s) => {
      const newShowTax = !s.showTax;
      return {
        showTax: newShowTax,
        ...computeDerived(
          s.demand,
          s.supply,
          s.externalCost,
          s.externalBenefit,
          s.mode,
          newShowTax
        ),
      };
    }),

  setTaxAmount: (amount) =>
    set((s) => ({
      taxAmount: amount,
    })),

  reset: () =>
    set({
      demand: DEFAULT_DEMAND,
      supply: DEFAULT_SUPPLY,
      externalCost: DEFAULT_EXTERNAL_COST,
      externalBenefit: DEFAULT_EXTERNAL_BENEFIT,
      mode: "negative",
      showTax: false,
      taxAmount: DEFAULT_EXTERNAL_COST,
      ...computeDerived(
        DEFAULT_DEMAND,
        DEFAULT_SUPPLY,
        DEFAULT_EXTERNAL_COST,
        DEFAULT_EXTERNAL_BENEFIT,
        "negative",
        false
      ),
    }),
}));
