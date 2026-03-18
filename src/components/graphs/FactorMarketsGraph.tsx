"use client";

import EconGraph from "./EconGraph";
import FullscreenWrapper from "@/components/ui/FullscreenWrapper";
import { useFactorMarketsStore } from "@/lib/stores/factor-markets-store";

const DOMAIN = { xMin: 0, xMax: 80, yMin: 0, yMax: 40 };

export default function FactorMarketsGraph() {
  const {
    laborDemand, laborSupply, wage, employment,
    shiftDemandRight, shiftDemandLeft,
    shiftSupplyRight, shiftSupplyLeft,
    reset,
  } = useFactorMarketsStore();

  return (
    <FullscreenWrapper title="Labor Market">
    <div className="space-y-3">
      <div className="graph-container overflow-hidden">
        <div className="px-4 pt-3 pb-1">
          <h3 className="graph-title !text-[13px]">
            Labor Market
          </h3>
        </div>
        <EconGraph
          curves={[
            { id: "demand", curve: laborDemand, color: "#3B82F6", label: "DL = MRP", draggable: false },
            { id: "supply", curve: laborSupply, color: "#EF4444", label: "SL", draggable: false },
          ]}
          equilibriumPair={["demand", "supply"]}
          equilibriumLabel="E"
          domain={DOMAIN}
          xLabel="Quantity of Labor"
          yLabel="Wage ($/hr)"
          showSurplus={true}
        />

        <p className="text-[10px] text-center pb-1 -mt-0.5" style={{ color: 'var(--graph-label)' }}>
          Use shift buttons to adjust labor supply and demand
        </p>

        {/* Legend */}
        <div className="graph-legend">
          <div className="graph-legend-item">
            <div className="graph-legend-dot" style={{ background: 'var(--graph-demand)' }} />
            DL (MRP)
          </div>
          <div className="graph-legend-item">
            <div className="graph-legend-dot" style={{ background: 'var(--graph-supply)' }} />
            SL
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
          <p className="text-[10px] font-medium uppercase tracking-wider" style={{ color: 'var(--color-ink-faint)' }}>Wage</p>
          <p className="text-lg font-semibold tabular-nums" style={{ color: 'var(--graph-equilibrium)' }}>${wage.toFixed(2)}/hr</p>
        </div>
        <div className="w-px h-8" style={{ background: 'var(--color-border-subtle)' }} />
        <div className="flex-1 text-center">
          <p className="text-[10px] font-medium uppercase tracking-wider" style={{ color: 'var(--color-ink-faint)' }}>Employment</p>
          <p className="text-lg font-semibold tabular-nums" style={{ color: 'var(--graph-equilibrium)' }}>{employment.toFixed(0)} workers</p>
        </div>
      </div>

      {/* Shift buttons */}
      <div className="grid grid-cols-2 gap-2">
        <div className="space-y-1.5">
          <p className="text-[10px] font-semibold uppercase tracking-wider pl-1" style={{ color: 'var(--graph-demand)' }}>
            Labor Demand (MRP)
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
            Labor Supply
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
    </FullscreenWrapper>
  );
}
