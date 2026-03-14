import { create } from "zustand";
import {
  type LinearCurve,
  type Equilibrium,
  findEquilibrium,
  shiftCurve,
} from "@/lib/graph-math";

// Forex market for USD
// Demand for USD: foreigners buying US goods/assets (downward sloping)
// Supply of USD: Americans buying foreign goods/assets (upward sloping)
const DEFAULT_DEMAND: LinearCurve = { intercept: 1.8, slope: -0.012 };
const DEFAULT_SUPPLY: LinearCurve = { intercept: 0.2, slope: 0.008 };
const SHIFT = 5;

interface ExchangeRateState {
  demand: LinearCurve;
  supply: LinearCurve;
  equilibrium: Equilibrium | null;
  exchangeRate: number; // price of 1 USD in foreign currency
  quantity: number; // quantity of USD traded

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
    exchangeRate: equilibrium?.price ?? 0,
    quantity: equilibrium?.quantity ?? 0,
  };
}

const init = derive(DEFAULT_DEMAND, DEFAULT_SUPPLY);

export const useExchangeRateStore = create<ExchangeRateState>((set) => ({
  demand: DEFAULT_DEMAND,
  supply: DEFAULT_SUPPLY,
  ...init,

  shiftDemandRight: () =>
    set((s) => {
      const demand = shiftCurve(s.demand, SHIFT);
      return { demand, ...derive(demand, s.supply) };
    }),
  shiftDemandLeft: () =>
    set((s) => {
      const demand = shiftCurve(s.demand, -SHIFT);
      return { demand, ...derive(demand, s.supply) };
    }),
  shiftSupplyRight: () =>
    set((s) => {
      const supply = shiftCurve(s.supply, SHIFT);
      return { supply, ...derive(s.demand, supply) };
    }),
  shiftSupplyLeft: () =>
    set((s) => {
      const supply = shiftCurve(s.supply, -SHIFT);
      return { supply, ...derive(s.demand, supply) };
    }),

  reset: () =>
    set({
      demand: DEFAULT_DEMAND,
      supply: DEFAULT_SUPPLY,
      ...derive(DEFAULT_DEMAND, DEFAULT_SUPPLY),
    }),
}));
