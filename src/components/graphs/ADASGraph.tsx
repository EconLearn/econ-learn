"use client";

import EconGraph from "./EconGraph";
import FullscreenWrapper from "@/components/ui/FullscreenWrapper";
import { useADASStore, MACRO_SHOCKS } from "@/lib/stores/adas-store";
import { dataToSvg, type GraphArea, type Domain } from "@/lib/graph-math";

const GA: GraphArea = { x: 70, y: 20, width: 500, height: 360 };

export default function ADASGraph() {
  const {
    ad, sras, lrasY, equilibrium, gap, activeShock,
    shiftADRight, shiftADLeft, shiftSRASRight, shiftSRASLeft,
    applyShock, reset,
  } = useADASStore();

  const domain: Domain = { xMin: 0, xMax: 140, yMin: 0, yMax: 160 };

  // LRAS line data
  const lrasTop = dataToSvg({ x: lrasY, y: domain.yMax }, GA, domain);
  const lrasBot = dataToSvg({ x: lrasY, y: domain.yMin }, GA, domain);

  const gapColor = gap.includes("Inflationary") ? "text-red-600" : gap.includes("Recessionary") ? "text-blue-600" : "text-slate-900";

  return (
    <FullscreenWrapper title="AD / AS Model">
    <div className="space-y-3">
      <div className="graph-container overflow-hidden">
        <div className="px-4 pt-3 pb-1">
          <h3 className="graph-title !text-[13px]">
            AD / AS Model
          </h3>
        </div>
        <div className="relative">
          <EconGraph
            curves={[
              { id: "ad", curve: ad, color: "#3B82F6", label: "AD", draggable: false },
              { id: "sras", curve: sras, color: "#EF4444", label: "SRAS", draggable: false },
            ]}
            equilibriumPair={["ad", "sras"]}
            domain={domain}
            xLabel="Real GDP (Y)"
            yLabel="Price Level (PL)"
          />
          {/* LRAS overlay */}
          <svg viewBox="0 0 600 450" className="absolute inset-0 w-full h-full pointer-events-none">
            <line x1={lrasTop.x} y1={lrasTop.y} x2={lrasBot.x} y2={lrasBot.y}
              stroke="#10B981" strokeWidth={2.5} strokeDasharray="6 4" />
            <text x={lrasTop.x} y={lrasTop.y - 6} textAnchor="middle"
              fontSize={11} fontWeight={700} fill="#10B981" fontFamily="DM Sans, system-ui, sans-serif">
              LRAS
            </text>
          </svg>
        </div>
        <p className="text-[10px] text-center pb-1 -mt-0.5" style={{ color: 'var(--graph-label)' }}>
          Adjust curves using the shift buttons below
        </p>

        {/* Legend */}
        <div className="graph-legend">
          <div className="graph-legend-item">
            <div className="graph-legend-dot" style={{ background: 'var(--graph-demand)' }} />
            AD
          </div>
          <div className="graph-legend-item">
            <div className="graph-legend-dot" style={{ background: 'var(--graph-supply)' }} />
            SRAS
          </div>
          <div className="graph-legend-item">
            <div className="graph-legend-dot" style={{ background: 'var(--graph-equilibrium)' }} />
            LRAS
          </div>
        </div>
      </div>

      {/* Stats — horizontal strip */}
      <div className="card flex items-center py-3">
        {equilibrium && (
          <>
            <div className="flex-1 text-center">
              <p className="text-[10px] font-medium uppercase tracking-wider" style={{ color: 'var(--color-ink-faint)' }}>Price Level</p>
              <p className="text-lg font-semibold tabular-nums" style={{ color: 'var(--graph-equilibrium)' }}>{equilibrium.price.toFixed(0)}</p>
            </div>
            <div className="w-px h-8" style={{ background: 'var(--color-border-subtle)' }} />
            <div className="flex-1 text-center">
              <p className="text-[10px] font-medium uppercase tracking-wider" style={{ color: 'var(--color-ink-faint)' }}>Real GDP</p>
              <p className="text-lg font-semibold tabular-nums" style={{ color: 'var(--graph-equilibrium)' }}>{equilibrium.quantity.toFixed(0)}</p>
            </div>
            <div className="w-px h-8" style={{ background: 'var(--color-border-subtle)' }} />
          </>
        )}
        <div className="flex-1 text-center">
          <p className="text-[10px] font-medium uppercase tracking-wider" style={{ color: 'var(--color-ink-faint)' }}>Output Gap</p>
          <p className={`text-sm font-semibold ${gapColor}`}>{gap}</p>
        </div>
      </div>

      {/* Shift buttons */}
      <div className="grid grid-cols-2 gap-2">
        <div className="space-y-1.5">
          <p className="text-[10px] font-semibold uppercase tracking-wider pl-1" style={{ color: 'var(--graph-demand)' }}>Agg. Demand</p>
          <div className="flex gap-1.5">
            <button onClick={shiftADLeft}
              className="flex-1 px-2 py-2 text-xs font-medium rounded-lg transition-all duration-150
                         bg-blue-50 text-blue-700 border border-blue-100 hover:bg-blue-100 hover:border-blue-200 active:scale-[0.98]">
              ← Left
            </button>
            <button onClick={shiftADRight}
              className="flex-1 px-2 py-2 text-xs font-medium rounded-lg transition-all duration-150
                         bg-blue-50 text-blue-700 border border-blue-100 hover:bg-blue-100 hover:border-blue-200 active:scale-[0.98]">
              Right →
            </button>
          </div>
        </div>
        <div className="space-y-1.5">
          <p className="text-[10px] font-semibold uppercase tracking-wider pl-1" style={{ color: 'var(--graph-supply)' }}>Short-Run AS</p>
          <div className="flex gap-1.5">
            <button onClick={shiftSRASLeft}
              className="flex-1 px-2 py-2 text-xs font-medium rounded-lg transition-all duration-150
                         bg-red-50 text-red-700 border border-red-100 hover:bg-red-100 hover:border-red-200 active:scale-[0.98]">
              ← Left
            </button>
            <button onClick={shiftSRASRight}
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

      {/* Macro Shock Simulator */}
      <div className="card overflow-hidden">
        <div className="px-4 py-2.5 border-b" style={{ background: 'var(--color-surface-raised)', borderColor: 'var(--color-border-subtle)' }}>
          <p className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: 'var(--color-ink-muted)' }}>
            Macro Shocks
          </p>
        </div>
        <div className="p-2.5 grid grid-cols-2 gap-1.5">
          {MACRO_SHOCKS.map((shock) => (
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
    </FullscreenWrapper>
  );
}
