import { create } from "zustand";
import {
  type LinearCurve,
  type Equilibrium,
  findEquilibrium,
  shiftCurve,
} from "@/lib/graph-math";

// Supply of loanable funds (national saving) — upward sloping
const DEFAULT_SUPPLY: LinearCurve = { intercept: 1, slope: 0.05 };
// Demand for loanable funds (investment) — downward sloping
const DEFAULT_DEMAND: LinearCurve = { intercept: 9, slope: -0.06 };
const SHIFT_AMOUNT = 12;

export interface LFShockEvent {
  name: string;
  description: string;
  supplyShift: number;
  demandShift: number;
}

export const lfShocks: LFShockEvent[] = [
  {
    name: "Budget Deficit ↑",
    description:
      "Government borrows more, crowding out private investment. Supply of loanable funds shifts left as national saving falls.",
    supplyShift: -SHIFT_AMOUNT,
    demandShift: 0,
  },
  {
    name: "Budget Surplus",
    description:
      "Government saves instead of borrowing, adding to the supply of loanable funds. Real interest rates fall and investment rises.",
    supplyShift: SHIFT_AMOUNT,
    demandShift: 0,
  },
  {
    name: "Investment Tax Credit",
    description:
      "Firms get tax breaks for investing, increasing the demand for loanable funds. Real interest rates rise.",
    supplyShift: 0,
    demandShift: SHIFT_AMOUNT,
  },
  {
    name: "Saving Incentives",
    description:
      "Tax-advantaged savings accounts encourage households to save more, shifting the supply of loanable funds right.",
    supplyShift: SHIFT_AMOUNT,
    demandShift: 0,
  },
];

interface LoanableFundsState {
  supply: LinearCurve;
  demand: LinearCurve;
  equilibrium: Equilibrium | null;
  activeShock: LFShockEvent | null;
  showLabels: boolean;

  shiftSupply: (deltaQ: number) => void;
  shiftDemand: (deltaQ: number) => void;
  shiftSupplyRight: () => void;
  shiftSupplyLeft: () => void;
  shiftDemandRight: () => void;
  shiftDemandLeft: () => void;
  applyShock: (shock: LFShockEvent) => void;
  toggleLabels: () => void;
  reset: () => void;
}

function computeDerived(supply: LinearCurve, demand: LinearCurve) {
  const equilibrium = findEquilibrium(demand, supply);
  return { equilibrium };
}

export const useLoanableFundsStore = create<LoanableFundsState>((set) => ({
  supply: DEFAULT_SUPPLY,
  demand: DEFAULT_DEMAND,
  ...computeDerived(DEFAULT_SUPPLY, DEFAULT_DEMAND),
  activeShock: null,
  showLabels: true,

  shiftSupply: (deltaQ) =>
    set((s) => {
      const supply = shiftCurve(s.supply, deltaQ);
      return { supply, ...computeDerived(supply, s.demand) };
    }),

  shiftDemand: (deltaQ) =>
    set((s) => {
      const demand = shiftCurve(s.demand, deltaQ);
      return { demand, ...computeDerived(s.supply, demand) };
    }),

  shiftSupplyRight: () =>
    set((s) => {
      const supply = shiftCurve(s.supply, SHIFT_AMOUNT);
      return { supply, ...computeDerived(supply, s.demand) };
    }),

  shiftSupplyLeft: () =>
    set((s) => {
      const supply = shiftCurve(s.supply, -SHIFT_AMOUNT);
      return { supply, ...computeDerived(supply, s.demand) };
    }),

  shiftDemandRight: () =>
    set((s) => {
      const demand = shiftCurve(s.demand, SHIFT_AMOUNT);
      return { demand, ...computeDerived(s.supply, demand) };
    }),

  shiftDemandLeft: () =>
    set((s) => {
      const demand = shiftCurve(s.demand, -SHIFT_AMOUNT);
      return { demand, ...computeDerived(s.supply, demand) };
    }),

  applyShock: (shock) =>
    set((s) => {
      const supply = shiftCurve(s.supply, shock.supplyShift);
      const demand = shiftCurve(s.demand, shock.demandShift);
      return {
        supply,
        demand,
        activeShock: shock,
        ...computeDerived(supply, demand),
      };
    }),

  toggleLabels: () => set((s) => ({ showLabels: !s.showLabels })),

  reset: () =>
    set({
      supply: DEFAULT_SUPPLY,
      demand: DEFAULT_DEMAND,
      activeShock: null,
      showLabels: true,
      ...computeDerived(DEFAULT_SUPPLY, DEFAULT_DEMAND),
    }),
}));
