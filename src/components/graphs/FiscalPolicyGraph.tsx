"use client";

import EconGraph from "./EconGraph";
import FullscreenWrapper from "@/components/ui/FullscreenWrapper";
import {
  useFiscalPolicyStore,
  spendingMultiplier,
  taxMultiplier,
} from "@/lib/stores/fiscal-policy-store";
import { dataToSvg, type GraphArea, type Domain } from "@/lib/graph-math";

const GA: GraphArea = { x: 70, y: 20, width: 500, height: 360 };

export default function FiscalPolicyGraph() {
  const {
    ad,
    sras,
    lrasY,
    originalAD,
    equilibrium,
    gap,
    mpc,
    spendingChange,
    taxChange,
    setMPC,
    applySpendingChange,
    applyTaxChange,
    reset,
  } = useFiscalPolicyStore();

  const domain: Domain = { xMin: 0, xMax: 200, yMin: 0, yMax: 160 };

  // LRAS line coordinates
  const lrasTop = dataToSvg({ x: lrasY, y: domain.yMax }, GA, domain);
  const lrasBot = dataToSvg({ x: lrasY, y: domain.yMin }, GA, domain);

  // Determine whether AD has shifted from original
  const adShifted =
    Math.abs(ad.intercept - originalAD.intercept) > 0.01 ||
    Math.abs(ad.slope - originalAD.slope) > 0.01;

  const gapColor = gap.includes("Inflationary")
    ? "text-red-600"
    : gap.includes("Recessionary")
      ? "text-blue-600"
      : "text-slate-900";

  const multiplier = spendingMultiplier(mpc);
  const taxMult = taxMultiplier(mpc);

  const curves = [
    ...(adShifted
      ? [
          {
            id: "original-ad",
            curve: originalAD,
            color: "#9CA3AF",
            label: "AD\u2080",
            draggable: false,
            dashed: true,
          },
        ]
      : []),
    {
      id: "ad",
      curve: ad,
      color: "#3B82F6",
      label: adShifted ? "AD\u2081" : "AD",
      draggable: false,
    },
    { id: "sras", curve: sras, color: "#EF4444", label: "SRAS", draggable: false },
  ];

  return (
    <FullscreenWrapper title="Fiscal Policy">
    <div className="space-y-3">
      <div className="graph-container overflow-hidden">
        <div className="px-4 pt-3 pb-1">
          <h3 className="graph-title !text-[13px]">
            Fiscal Policy &mdash; AD / AS
          </h3>
        </div>
        <div className="relative">
          <EconGraph
            curves={curves}
            equilibriumPair={["ad", "sras"]}
            domain={domain}
            xLabel="Real GDP (Y)"
            yLabel="Price Level (PL)"
          />
          {/* LRAS overlay */}
          <svg
            viewBox="0 0 600 450"
            className="absolute inset-0 w-full h-full pointer-events-none"
          >
            <line
              x1={lrasTop.x}
              y1={lrasTop.y}
              x2={lrasBot.x}
              y2={lrasBot.y}
              stroke="#10B981"
              strokeWidth={2.5}
              strokeDasharray="6 4"
            />
            <text
              x={lrasTop.x}
              y={lrasTop.y - 6}
              textAnchor="middle"
              fontSize={11}
              fontWeight={700}
              fill="#10B981"
              fontFamily="DM Sans, system-ui, sans-serif"
            >
              LRAS
            </text>
          </svg>
        </div>

        <p className="text-[10px] text-center pb-1 -mt-0.5" style={{ color: 'var(--graph-label)' }}>
          Apply fiscal policy changes to shift AD
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

      {/* Stats strip */}
      <div className="card flex items-center py-3">
        {equilibrium && (
          <>
            <div className="flex-1 text-center">
              <p className="text-[10px] font-medium uppercase tracking-wider" style={{ color: 'var(--color-ink-faint)' }}>
                Price Level
              </p>
              <p className="text-lg font-semibold tabular-nums" style={{ color: 'var(--graph-equilibrium)' }}>
                {equilibrium.price.toFixed(0)}
              </p>
            </div>
            <div className="w-px h-8" style={{ background: 'var(--color-border-subtle)' }} />
            <div className="flex-1 text-center">
              <p className="text-[10px] font-medium uppercase tracking-wider" style={{ color: 'var(--color-ink-faint)' }}>
                Real GDP
              </p>
              <p className="text-lg font-semibold tabular-nums" style={{ color: 'var(--graph-equilibrium)' }}>
                {equilibrium.quantity.toFixed(0)}
              </p>
            </div>
            <div className="w-px h-8" style={{ background: 'var(--color-border-subtle)' }} />
          </>
        )}
        <div className="flex-1 text-center">
          <p className="text-[10px] font-medium uppercase tracking-wider" style={{ color: 'var(--color-ink-faint)' }}>
            Output Gap
          </p>
          <p className={`text-sm font-semibold ${gapColor}`}>{gap}</p>
        </div>
        <div className="w-px h-8" style={{ background: 'var(--color-border-subtle)' }} />
        <div className="flex-1 text-center">
          <p className="text-[10px] font-medium uppercase tracking-wider" style={{ color: 'var(--color-ink-faint)' }}>
            Multiplier
          </p>
          <p className="text-lg font-semibold tabular-nums" style={{ color: 'var(--color-ink)' }}>
            {multiplier.toFixed(1)}x
          </p>
        </div>
      </div>

      {/* MPC slider */}
      <div className="card p-4 space-y-2">
        <div className="flex items-center justify-between">
          <p className="text-[10px] font-medium uppercase tracking-wider" style={{ color: 'var(--color-ink-muted)' }}>
            MPC
          </p>
          <p className="text-sm font-semibold tabular-nums" style={{ color: 'var(--color-ink)' }}>
            {mpc.toFixed(2)}
          </p>
        </div>
        <input
          type="range"
          min={0.5}
          max={0.95}
          step={0.05}
          value={mpc}
          onChange={(e) => setMPC(parseFloat(e.target.value))}
          className="w-full accent-gray-900"
        />
        <div className="flex justify-between text-[10px] text-gray-400">
          <span>Spending mult: {multiplier.toFixed(2)}</span>
          <span>Tax mult: {taxMult.toFixed(2)}</span>
        </div>
      </div>

      {/* Government Spending change */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between">
          <p className="text-[10px] font-semibold uppercase tracking-wider pl-1" style={{ color: 'var(--graph-demand)' }}>
            Gov. Spending Change
          </p>
          <p className="text-xs font-semibold text-gray-600 tabular-nums pr-1">
            {spendingChange >= 0 ? "+" : ""}
            {spendingChange}
          </p>
        </div>
        <div className="flex gap-1.5">
          <button
            onClick={() => applySpendingChange(-20)}
            className="flex-1 px-2 py-2 text-xs font-medium rounded-lg transition-all duration-150
                         bg-blue-50 text-blue-700 border border-blue-100 hover:bg-blue-100 hover:border-blue-200 active:scale-[0.98]"
          >
            -20
          </button>
          <button
            onClick={() => applySpendingChange(-10)}
            className="flex-1 px-2 py-2 text-xs font-medium rounded-lg transition-all duration-150
                         bg-blue-50 text-blue-700 border border-blue-100 hover:bg-blue-100 hover:border-blue-200 active:scale-[0.98]"
          >
            -10
          </button>
          <button
            onClick={() => applySpendingChange(10)}
            className="flex-1 px-2 py-2 text-xs font-medium rounded-lg transition-all duration-150
                         bg-blue-50 text-blue-700 border border-blue-100 hover:bg-blue-100 hover:border-blue-200 active:scale-[0.98]"
          >
            +10
          </button>
          <button
            onClick={() => applySpendingChange(20)}
            className="flex-1 px-2 py-2 text-xs font-medium rounded-lg transition-all duration-150
                         bg-blue-50 text-blue-700 border border-blue-100 hover:bg-blue-100 hover:border-blue-200 active:scale-[0.98]"
          >
            +20
          </button>
        </div>
      </div>

      {/* Tax change */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between">
          <p className="text-[10px] font-semibold uppercase tracking-wider pl-1" style={{ color: 'var(--graph-supply)' }}>
            Tax Change
          </p>
          <p className="text-xs font-semibold text-gray-600 tabular-nums pr-1">
            {taxChange >= 0 ? "+" : ""}
            {taxChange}
          </p>
        </div>
        <div className="flex gap-1.5">
          <button
            onClick={() => applyTaxChange(-20)}
            className="flex-1 px-2 py-2 text-xs font-medium rounded-lg transition-all duration-150
                         bg-red-50 text-red-700 border border-red-100 hover:bg-red-100 hover:border-red-200 active:scale-[0.98]"
          >
            -20
          </button>
          <button
            onClick={() => applyTaxChange(-10)}
            className="flex-1 px-2 py-2 text-xs font-medium rounded-lg transition-all duration-150
                         bg-red-50 text-red-700 border border-red-100 hover:bg-red-100 hover:border-red-200 active:scale-[0.98]"
          >
            -10
          </button>
          <button
            onClick={() => applyTaxChange(10)}
            className="flex-1 px-2 py-2 text-xs font-medium rounded-lg transition-all duration-150
                         bg-red-50 text-red-700 border border-red-100 hover:bg-red-100 hover:border-red-200 active:scale-[0.98]"
          >
            +10
          </button>
          <button
            onClick={() => applyTaxChange(20)}
            className="flex-1 px-2 py-2 text-xs font-medium rounded-lg transition-all duration-150
                         bg-red-50 text-red-700 border border-red-100 hover:bg-red-100 hover:border-red-200 active:scale-[0.98]"
          >
            +20
          </button>
        </div>
      </div>

      <button
        onClick={reset}
        className="btn-primary w-full"
      >
        Reset
      </button>
    </div>
    </FullscreenWrapper>
  );
}
