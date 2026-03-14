import { create } from "zustand";
import {
  type LinearCurve,
  type Equilibrium,
  findEquilibrium,
  shiftCurve,
} from "@/lib/graph-math";

// Labor market: MRP (demand for labor) slopes down, labor supply slopes up
// MRP = MR × MPL — diminishing marginal product makes it downward-sloping
const DEFAULT_LABOR_DEMAND: LinearCurve = { intercept: 30, slope: -0.3 };
const DEFAULT_LABOR_SUPPLY: LinearCurve = { intercept: 5, slope: 0.2 };
const SHIFT = 5;

interface FactorMarketsState {
  laborDemand: LinearCurve;
  laborSupply: LinearCurve;
  equilibrium: Equilibrium | null;
  wage: number;
  employment: number;

  shiftDemandRight: () => void;
  shiftDemandLeft: () => void;
  shiftSupplyRight: () => void;
  shiftSupplyLeft: () => void;
  reset: () => void;
}

function derive(demand: LinearCurve, supply: LinearCurve) {
  const equilibrium = findEquilibrium(demand, supply);
  return {
    equilibrium,
    wage: equilibrium?.price ?? 0,
    employment: equilibrium?.quantity ?? 0,
  };
}

const init = derive(DEFAULT_LABOR_DEMAND, DEFAULT_LABOR_SUPPLY);

export const useFactorMarketsStore = create<FactorMarketsState>((set) => ({
  laborDemand: DEFAULT_LABOR_DEMAND,
  laborSupply: DEFAULT_LABOR_SUPPLY,
  ...init,

  shiftDemandRight: () =>
    set((s) => {
      const laborDemand = shiftCurve(s.laborDemand, SHIFT);
      return { laborDemand, ...derive(laborDemand, s.laborSupply) };
    }),
  shiftDemandLeft: () =>
    set((s) => {
      const laborDemand = shiftCurve(s.laborDemand, -SHIFT);
      return { laborDemand, ...derive(laborDemand, s.laborSupply) };
    }),
  shiftSupplyRight: () =>
    set((s) => {
      const laborSupply = shiftCurve(s.laborSupply, SHIFT);
      return { laborSupply, ...derive(s.laborDemand, laborSupply) };
    }),
  shiftSupplyLeft: () =>
    set((s) => {
      const laborSupply = shiftCurve(s.laborSupply, -SHIFT);
      return { laborSupply, ...derive(s.laborDemand, laborSupply) };
    }),

  reset: () =>
    set({
      laborDemand: DEFAULT_LABOR_DEMAND,
      laborSupply: DEFAULT_LABOR_SUPPLY,
      ...derive(DEFAULT_LABOR_DEMAND, DEFAULT_LABOR_SUPPLY),
    }),
}));
