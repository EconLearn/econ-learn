import { create } from "zustand";
import {
  findEquilibrium,
  quantityAt,
  type LinearCurve,
  type Equilibrium,
} from "@/lib/graph-math";

const DEFAULT_DEMAND: LinearCurve = { intercept: 100, slope: -0.8 };
const DEFAULT_SUPPLY: LinearCurve = { intercept: 10, slope: 0.6 };
const DEFAULT_WORLD_PRICE = 40;
const DEFAULT_TARIFF = 0;

interface InternationalTradeState {
  domesticDemand: LinearCurve;
  domesticSupply: LinearCurve;
  worldPrice: number;
  tariff: number;
  domesticEquilibrium: Equilibrium | null;

  // Derived values
  effectivePrice: number;
  qDemanded: number;
  qSupplied: number;
  imports: number;
  tariffRevenue: number;
  dwl: number;

  // Actions
  setWorldPrice: (n: number) => void;
  setTariff: (n: number) => void;
  reset: () => void;
}

function computeDerived(
  demand: LinearCurve,
  supply: LinearCurve,
  worldPrice: number,
  tariff: number
) {
  const domesticEquilibrium = findEquilibrium(demand, supply);
  const effectivePrice = worldPrice + tariff;
  const qDemanded = Math.max(0, quantityAt(demand, effectivePrice));
  const qSupplied = Math.max(0, quantityAt(supply, effectivePrice));
  const imports = Math.max(0, qDemanded - qSupplied);

  const tariffRevenue = tariff * imports;

  // DWL from tariff: two triangles
  // Triangle 1 (production side): 0.5 * tariff * (qSupplied_tariff - qSupplied_free)
  // Triangle 2 (consumption side): 0.5 * tariff * (qDemanded_free - qDemanded_tariff)
  let dwl = 0;
  if (tariff > 0) {
    const qDemandedFree = Math.max(0, quantityAt(demand, worldPrice));
    const qSuppliedFree = Math.max(0, quantityAt(supply, worldPrice));
    const productionDWL =
      0.5 * tariff * Math.abs(qSupplied - qSuppliedFree);
    const consumptionDWL =
      0.5 * tariff * Math.abs(qDemandedFree - qDemanded);
    dwl = productionDWL + consumptionDWL;
  }

  return {
    domesticEquilibrium,
    effectivePrice,
    qDemanded,
    qSupplied,
    imports,
    tariffRevenue,
    dwl,
  };
}

const initial = computeDerived(
  DEFAULT_DEMAND,
  DEFAULT_SUPPLY,
  DEFAULT_WORLD_PRICE,
  DEFAULT_TARIFF
);

export const useInternationalTradeStore = create<InternationalTradeState>(
  (set) => ({
    domesticDemand: DEFAULT_DEMAND,
    domesticSupply: DEFAULT_SUPPLY,
    worldPrice: DEFAULT_WORLD_PRICE,
    tariff: DEFAULT_TARIFF,
    ...initial,

    setWorldPrice: (n: number) =>
      set((s) => ({
        worldPrice: n,
        ...computeDerived(s.domesticDemand, s.domesticSupply, n, s.tariff),
      })),

    setTariff: (n: number) =>
      set((s) => ({
        tariff: n,
        ...computeDerived(s.domesticDemand, s.domesticSupply, s.worldPrice, n),
      })),

    reset: () =>
      set({
        domesticDemand: DEFAULT_DEMAND,
        domesticSupply: DEFAULT_SUPPLY,
        worldPrice: DEFAULT_WORLD_PRICE,
        tariff: DEFAULT_TARIFF,
        ...computeDerived(
          DEFAULT_DEMAND,
          DEFAULT_SUPPLY,
          DEFAULT_WORLD_PRICE,
          DEFAULT_TARIFF
        ),
      }),
  })
);
