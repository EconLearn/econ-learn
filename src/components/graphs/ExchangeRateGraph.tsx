"use client";

import EconGraph from "./EconGraph";
import { useExchangeRateStore } from "@/lib/stores/exchange-rate-store";

const DOMAIN = { xMin: 0, xMax: 120, yMin: 0, yMax: 2 };

export default function ExchangeRateGraph() {
  const {
    demand, supply, exchangeRate, quantity,
    shiftDemandRight, shiftDemandLeft,
    shiftSupplyRight, shiftSupplyLeft,
    reset,
  } = useExchangeRateStore();

  return (
    <div className="space-y-3">
      <div className="graph-container overflow-hidden">
        <div className="px-4 pt-3 pb-1">
          <h3 className="graph-title !text-[13px]">
            Foreign Exchange Market (USD)
          </h3>
        </div>
        <EconGraph
          curves={[
            { id: "demand", curve: demand, color: "#3B82F6", label: "D$", draggable: false },
            { id: "supply", curve: supply, color: "#EF4444", label: "S$", draggable: false },
          ]}
          equilibriumPair={["demand", "supply"]}
          equilibriumLabel="E"
          domain={DOMAIN}
          xLabel="Quantity of USD"
          yLabel="Exchange Rate (foreign / USD)"
        />

        <p className="text-[10px] text-center pb-1 -mt-0.5" style={{ color: 'var(--graph-label)' }}>
          Use shift buttons to adjust supply and demand
        </p>

        {/* Legend */}
        <div className="graph-legend">
          <div className="graph-legend-item">
            <div className="graph-legend-dot" style={{ background: 'var(--graph-demand)' }} />
            Demand (D$)
          </div>
          <div className="graph-legend-item">
            <div className="graph-legend-dot" style={{ background: 'var(--graph-supply)' }} />
            Supply (S$)
          </div>
          <div className="graph-legend-item">
            <div className="graph-legend-dot" style={{ background: 'var(--graph-equilibrium)' }} />
            Equilibrium
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="card flex items-center py-3">
        <div className="flex-1 text-center">
          <p className="text-[10px] font-medium uppercase tracking-wider" style={{ color: 'var(--color-ink-faint)' }}>Exchange Rate</p>
          <p className="text-lg font-semibold tabular-nums" style={{ color: 'var(--graph-equilibrium)' }}>{exchangeRate.toFixed(2)}</p>
        </div>
        <div className="w-px h-8" style={{ background: 'var(--color-border-subtle)' }} />
        <div className="flex-1 text-center">
          <p className="text-[10px] font-medium uppercase tracking-wider" style={{ color: 'var(--color-ink-faint)' }}>USD Traded</p>
          <p className="text-lg font-semibold tabular-nums" style={{ color: 'var(--color-ink)' }}>{quantity.toFixed(0)}</p>
        </div>
      </div>

      {/* Shift buttons */}
      <div className="grid grid-cols-2 gap-2">
        <div className="space-y-1.5">
          <p className="text-[10px] font-semibold uppercase tracking-wider pl-1" style={{ color: 'var(--graph-demand)' }}>
            Demand for USD
          </p>
          <div className="flex gap-1.5">
            <button onClick={shiftDemandLeft}
              className="flex-1 px-2 py-2 text-xs font-medium rounded-lg transition-all duration-150
                         bg-blue-50 text-blue-700 border border-blue-100 hover:bg-blue-100 hover:border-blue-200 active:scale-[0.98]">
              ← Left
            </button>
            <button onClick={shiftDemandRight}
              className="flex-1 px-2 py-2 text-xs font-medium rounded-lg transition-all duration-150
                         bg-blue-50 text-blue-700 border border-blue-100 hover:bg-blue-100 hover:border-blue-200 active:scale-[0.98]">
              Right →
            </button>
          </div>
        </div>
        <div className="space-y-1.5">
          <p className="text-[10px] font-semibold uppercase tracking-wider pl-1" style={{ color: 'var(--graph-supply)' }}>
            Supply of USD
          </p>
          <div className="flex gap-1.5">
            <button onClick={shiftSupplyLeft}
              className="flex-1 px-2 py-2 text-xs font-medium rounded-lg transition-all duration-150
                         bg-red-50 text-red-700 border border-red-100 hover:bg-red-100 hover:border-red-200 active:scale-[0.98]">
              ← Left
            </button>
            <button onClick={shiftSupplyRight}
              className="flex-1 px-2 py-2 text-xs font-medium rounded-lg transition-all duration-150
                         bg-red-50 text-red-700 border border-red-100 hover:bg-red-100 hover:border-red-200 active:scale-[0.98]">
              Right →
            </button>
          </div>
        </div>
      </div>

      <button onClick={reset}
        className="btn-primary w-full">
        Reset
      </button>
    </div>
  );
}
