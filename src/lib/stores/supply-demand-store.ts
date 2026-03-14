import { create } from "zustand";
import {
  findEquilibrium,
  shiftCurve,
  calculateSurplus,
  type LinearCurve,
  type Equilibrium,
  type SurplusResult,
} from "@/lib/graph-math";

const DEFAULT_DEMAND: LinearCurve = { intercept: 90, slope: -0.8 };
const DEFAULT_SUPPLY: LinearCurve = { intercept: 10, slope: 0.6 };
const SHIFT_AMOUNT = 10;

export interface ShockEvent {
  name: string;
  description: string;
  demandShift: number;
  supplyShift: number;
}

export const ECONOMIC_SHOCKS: ShockEvent[] = [
  {
    name: "Oil Price Spike",
    description: "A sudden increase in oil prices raises production costs across the economy, shifting supply left. Higher energy bills also reduce consumer purchasing power, slightly reducing demand.",
    demandShift: -3,
    supplyShift: -12,
  },
  {
    name: "Technology Breakthrough",
    description: "A major innovation dramatically reduces manufacturing costs. Producers can now supply much more at every price level, shifting supply right.",
    demandShift: 0,
    supplyShift: 15,
  },
  {
    name: "Consumer Income Rises",
    description: "A booming economy puts more money in consumers' pockets. For a normal good, this increases willingness to pay at every quantity, shifting demand right.",
    demandShift: 12,
    supplyShift: 0,
  },
  {
    name: "New Tax on Producers",
    description: "The government imposes a per-unit tax on producers. This raises the cost of production, effectively shifting supply left — producers need a higher price to supply the same quantity.",
    demandShift: 0,
    supplyShift: -10,
  },
  {
    name: "Viral Product Trend",
    description: "The product goes viral on social media. Suddenly everyone wants one, dramatically increasing demand. Supply can't adjust immediately.",
    demandShift: 18,
    supplyShift: 0,
  },
  {
    name: "Competitor Enters Market",
    description: "A new competitor offers a close substitute at a lower price. Consumers switch, reducing demand for this product.",
    demandShift: -14,
    supplyShift: 0,
  },
];

interface SupplyDemandState {
  demand: LinearCurve;
  supply: LinearCurve;
  equilibrium: Equilibrium | null;
  surplus: SurplusResult;

  showPriceFloor: boolean;
  showPriceCeiling: boolean;
  priceFloor: number;
  priceCeiling: number;
  showLabels: boolean;
  showSurplus: boolean;
  activeShock: ShockEvent | null;

  shiftDemand: (deltaQ: number) => void;
  shiftSupply: (deltaQ: number) => void;
  shiftDemandRight: () => void;
  shiftDemandLeft: () => void;
  shiftSupplyRight: () => void;
  shiftSupplyLeft: () => void;
  applyShock: (shock: ShockEvent) => void;
  togglePriceFloor: () => void;
  togglePriceCeiling: () => void;
  setPriceFloor: (price: number) => void;
  setPriceCeiling: (price: number) => void;
  toggleLabels: () => void;
  toggleSurplus: () => void;
  reset: () => void;
}

function computeDerived(demand: LinearCurve, supply: LinearCurve) {
  const equilibrium = findEquilibrium(demand, supply);
  const surplus = equilibrium
    ? calculateSurplus(demand, supply, equilibrium)
    : { consumerSurplus: 0, producerSurplus: 0, totalSurplus: 0 };
  return { equilibrium, surplus };
}

const initial = computeDerived(DEFAULT_DEMAND, DEFAULT_SUPPLY);

export const useSupplyDemandStore = create<SupplyDemandState>((set) => ({
  demand: DEFAULT_DEMAND,
  supply: DEFAULT_SUPPLY,
  ...initial,
  showPriceFloor: false,
  showPriceCeiling: false,
  priceFloor: 60,
  priceCeiling: 30,
  showLabels: true,
  showSurplus: true,
  activeShock: null,

  shiftDemand: (deltaQ) =>
    set((s) => {
      const demand = shiftCurve(s.demand, deltaQ);
      return { demand, ...computeDerived(demand, s.supply), activeShock: null };
    }),

  shiftSupply: (deltaQ) =>
    set((s) => {
      const supply = shiftCurve(s.supply, deltaQ);
      return { supply, ...computeDerived(s.demand, supply), activeShock: null };
    }),

  shiftDemandRight: () =>
    set((s) => {
      const demand = shiftCurve(s.demand, SHIFT_AMOUNT);
      return { demand, ...computeDerived(demand, s.supply), activeShock: null };
    }),
  shiftDemandLeft: () =>
    set((s) => {
      const demand = shiftCurve(s.demand, -SHIFT_AMOUNT);
      return { demand, ...computeDerived(demand, s.supply), activeShock: null };
    }),
  shiftSupplyRight: () =>
    set((s) => {
      const supply = shiftCurve(s.supply, SHIFT_AMOUNT);
      return { supply, ...computeDerived(s.demand, supply), activeShock: null };
    }),
  shiftSupplyLeft: () =>
    set((s) => {
      const supply = shiftCurve(s.supply, -SHIFT_AMOUNT);
      return { supply, ...computeDerived(s.demand, supply), activeShock: null };
    }),

  applyShock: (shock) =>
    set((s) => {
      const demand = shiftCurve(s.demand, shock.demandShift);
      const supply = shiftCurve(s.supply, shock.supplyShift);
      return { demand, supply, ...computeDerived(demand, supply), activeShock: shock };
    }),

  togglePriceFloor: () => set((s) => ({ showPriceFloor: !s.showPriceFloor })),
  togglePriceCeiling: () => set((s) => ({ showPriceCeiling: !s.showPriceCeiling })),
  setPriceFloor: (price) => set({ priceFloor: price }),
  setPriceCeiling: (price) => set({ priceCeiling: price }),
  toggleLabels: () => set((s) => ({ showLabels: !s.showLabels })),
  toggleSurplus: () => set((s) => ({ showSurplus: !s.showSurplus })),

  reset: () =>
    set({
      demand: DEFAULT_DEMAND,
      supply: DEFAULT_SUPPLY,
      ...computeDerived(DEFAULT_DEMAND, DEFAULT_SUPPLY),
      showPriceFloor: false,
      showPriceCeiling: false,
      priceFloor: 60,
      priceCeiling: 30,
      showSurplus: true,
      activeShock: null,
    }),
}));
