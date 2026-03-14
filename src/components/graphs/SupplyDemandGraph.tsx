"use client";

import { useCallback } from "react";
import EconGraph from "./EconGraph";
import { useSupplyDemandStore, ECONOMIC_SHOCKS } from "@/lib/stores/supply-demand-store";

export default function SupplyDemandGraph() {
  const store = useSupplyDemandStore();
  const {
    demand, supply, equilibrium, surplus,
    showPriceFloor, showPriceCeiling, priceFloor, priceCeiling,
    showLabels, showSurplus, activeShock,
    shiftDemand, shiftSupply,
    shiftDemandRight, shiftDemandLeft, shiftSupplyRight, shiftSupplyLeft,
    applyShock,
    togglePriceFloor, togglePriceCeiling, setPriceFloor, setPriceCeiling,
    toggleLabels, toggleSurplus, reset,
  } = store;

  const handleDemandShift = useCallback((dq: number) => shiftDemand(dq), [shiftDemand]);
  const handleSupplyShift = useCallback((dq: number) => shiftSupply(dq), [shiftSupply]);

  const domain = { xMin: 0, xMax: 100, yMin: 0, yMax: 100 };

  return (
    <div className="space-y-3">
      {/* Graph */}
      <div className="graph-container">
        <div className="flex items-center justify-between mb-2">
          <div>
            <h3 className="graph-title">Supply & Demand</h3>
          </div>
          <div className="flex gap-1.5">
            <button onClick={toggleSurplus}
              className={`px-2.5 py-1 text-[10px] font-medium rounded-md transition-all duration-150 ${
                showSurplus
                  ? "bg-white text-gray-700 shadow-sm border border-gray-200"
                  : "text-gray-400 hover:text-gray-600 hover:bg-white/60"
              }`}>
              Surplus
            </button>
            <button onClick={toggleLabels}
              className={`px-2.5 py-1 text-[10px] font-medium rounded-md transition-all duration-150 ${
                showLabels
                  ? "bg-white text-gray-700 shadow-sm border border-gray-200"
                  : "text-gray-400 hover:text-gray-600 hover:bg-white/60"
              }`}>
              Labels
            </button>
          </div>
        </div>

        <EconGraph
          curves={[
            { id: "demand", curve: demand, color: "var(--graph-demand)", label: "D", draggable: true, onShift: handleDemandShift },
            { id: "supply", curve: supply, color: "var(--graph-supply)", label: "S", draggable: true, onShift: handleSupplyShift },
          ]}
          priceControls={[
            { type: "floor", price: priceFloor, onPriceChange: setPriceFloor, visible: showPriceFloor },
            { type: "ceiling", price: priceCeiling, onPriceChange: setPriceCeiling, visible: showPriceCeiling },
          ]}
          equilibriumPair={["demand", "supply"]}
          showLabels={showLabels}
          showSurplus={showSurplus}
          domain={domain}
        />

        <p className="text-[10px] text-center pb-1 -mt-0.5" style={{ color: 'var(--graph-label)' }}>
          Drag the curves to shift them
        </p>

        {/* Legend */}
        <div className="graph-legend">
          <div className="graph-legend-item">
            <div className="graph-legend-dot" style={{ background: 'var(--graph-demand)' }} />
            Demand
          </div>
          <div className="graph-legend-item">
            <div className="graph-legend-dot" style={{ background: 'var(--graph-supply)' }} />
            Supply
          </div>
          <div className="graph-legend-item">
            <div className="graph-legend-dot" style={{ background: 'var(--graph-equilibrium)' }} />
            Equilibrium
          </div>
        </div>
      </div>

      {/* Live readout */}
      {equilibrium && (
        <div className="card flex items-center py-3">
          <div className="flex-1 text-center">
            <p className="text-[10px] font-medium uppercase tracking-wider" style={{ color: 'var(--color-ink-faint)' }}>Price</p>
            <p className="text-lg font-semibold tabular-nums" style={{ color: 'var(--graph-equilibrium)' }}>${equilibrium.price.toFixed(0)}</p>
          </div>
          <div className="w-px h-8" style={{ background: 'var(--color-border-subtle)' }} />
          <div className="flex-1 text-center">
            <p className="text-[10px] font-medium uppercase tracking-wider" style={{ color: 'var(--color-ink-faint)' }}>Qty</p>
            <p className="text-lg font-semibold tabular-nums" style={{ color: 'var(--graph-equilibrium)' }}>{equilibrium.quantity.toFixed(0)}</p>
          </div>
          <div className="w-px h-8" style={{ background: 'var(--color-border-subtle)' }} />
          <div className="flex-1 text-center">
            <p className="text-[10px] font-medium uppercase tracking-wider" style={{ color: 'var(--color-ink-faint)' }}>Surplus</p>
            <p className="text-lg font-semibold tabular-nums" style={{ color: 'var(--color-ink)' }}>${surplus.totalSurplus.toFixed(0)}</p>
          </div>
        </div>
      )}

      {/* Curve shift controls */}
      <div className="grid grid-cols-2 gap-2">
        <div className="space-y-1.5">
          <p className="text-[10px] font-semibold uppercase tracking-wider pl-1" style={{ color: 'var(--graph-demand)' }}>Demand</p>
          <div className="flex gap-1.5">
            <button onClick={shiftDemandLeft}
              className="flex-1 px-2 py-2 text-xs font-medium rounded-lg transition-all duration-150
                         bg-blue-50 text-blue-700 border border-blue-100 hover:bg-blue-100 hover:border-blue-200 active:scale-[0.98]">
              ← Shift left
            </button>
            <button onClick={shiftDemandRight}
              className="flex-1 px-2 py-2 text-xs font-medium rounded-lg transition-all duration-150
                         bg-blue-50 text-blue-700 border border-blue-100 hover:bg-blue-100 hover:border-blue-200 active:scale-[0.98]">
              Shift right →
            </button>
          </div>
        </div>
        <div className="space-y-1.5">
          <p className="text-[10px] font-semibold uppercase tracking-wider pl-1" style={{ color: 'var(--graph-supply)' }}>Supply</p>
          <div className="flex gap-1.5">
            <button onClick={shiftSupplyLeft}
              className="flex-1 px-2 py-2 text-xs font-medium rounded-lg transition-all duration-150
                         bg-red-50 text-red-700 border border-red-100 hover:bg-red-100 hover:border-red-200 active:scale-[0.98]">
              ← Shift left
            </button>
            <button onClick={shiftSupplyRight}
              className="flex-1 px-2 py-2 text-xs font-medium rounded-lg transition-all duration-150
                         bg-red-50 text-red-700 border border-red-100 hover:bg-red-100 hover:border-red-200 active:scale-[0.98]">
              Shift right →
            </button>
          </div>
        </div>
      </div>

      {/* Price controls */}
      <div className="flex flex-wrap gap-1.5">
        <button onClick={togglePriceFloor}
          className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-150 border ${
            showPriceFloor
              ? "bg-gray-900 text-white border-gray-900"
              : "bg-white text-gray-500 border-gray-200 hover:bg-gray-50 hover:border-gray-300"
          }`}>
          Price floor
        </button>
        <button onClick={togglePriceCeiling}
          className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-150 border ${
            showPriceCeiling
              ? "bg-gray-900 text-white border-gray-900"
              : "bg-white text-gray-500 border-gray-200 hover:bg-gray-50 hover:border-gray-300"
          }`}>
          Price ceiling
        </button>
        <button onClick={reset}
          className="px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-150 ml-auto
                     bg-gray-900 text-white hover:bg-gray-800 active:bg-gray-950">
          Reset
        </button>
      </div>

      {/* Economic shocks */}
      <div className="card overflow-hidden">
        <div className="px-4 py-2.5 border-b" style={{ background: 'var(--color-surface-raised)', borderColor: 'var(--color-border-subtle)' }}>
          <p className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: 'var(--color-ink-muted)' }}>
            Economic Shocks
          </p>
        </div>
        <div className="p-2.5 grid grid-cols-2 gap-1.5">
          {ECONOMIC_SHOCKS.map((shock) => (
            <button key={shock.name} onClick={() => applyShock(shock)}
              className={`text-left px-3 py-2 rounded-lg text-xs font-medium transition-all duration-150 border ${
                activeShock?.name === shock.name
                  ? "bg-gray-900 border-gray-900 text-white"
                  : "bg-white border-gray-100 text-gray-600 hover:border-gray-200 hover:bg-gray-50"
              }`}>
              {shock.name}
            </button>
          ))}
        </div>
        {activeShock && (
          <div className="px-4 py-3 border-t" style={{ borderColor: 'var(--color-border-subtle)' }}>
            <p className="text-xs leading-relaxed" style={{ color: 'var(--color-ink-light)' }}>
              <span className="font-semibold" style={{ color: 'var(--color-ink)' }}>{activeShock.name}:</span>{" "}
              {activeShock.description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
