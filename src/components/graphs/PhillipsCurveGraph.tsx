"use client";

import EconGraph, { GRAPH_AREA } from "./EconGraph";
import { usePhillipsCurveStore } from "@/lib/stores/phillips-curve-store";
import { dataToSvg, type Domain } from "@/lib/graph-math";

const DOMAIN: Domain = { xMin: 0, xMax: 12, yMin: -1, yMax: 12 };
const GA = GRAPH_AREA;

export default function PhillipsCurveGraph() {
  const {
    srpc, naturalRate, currentUnemployment, currentInflation,
    expectedInflation,
    shiftSRPCUp, shiftSRPCDown, setNaturalRate, setCurrentUnemployment,
    reset,
  } = usePhillipsCurveStore();

  // LRPC vertical line coordinates
  const lrpcTop = dataToSvg({ x: naturalRate, y: DOMAIN.yMax }, GA, DOMAIN);
  const lrpcBottom = dataToSvg({ x: naturalRate, y: DOMAIN.yMin }, GA, DOMAIN);

  // Current point on the SRPC
  const currentPt = dataToSvg({ x: currentUnemployment, y: Math.max(DOMAIN.yMin, currentInflation) }, GA, DOMAIN);
  const currentXAxis = dataToSvg({ x: currentUnemployment, y: DOMAIN.yMin }, GA, DOMAIN);
  const currentYAxis = dataToSvg({ x: DOMAIN.xMin, y: Math.max(DOMAIN.yMin, currentInflation) }, GA, DOMAIN);

  return (
    <div className="space-y-3">
      <div className="graph-container overflow-hidden">
        <div className="px-4 pt-3 pb-1">
          <h3 className="graph-title !text-[13px]">
            Phillips Curve
          </h3>
        </div>
        <EconGraph
          curves={[
            { id: "srpc", curve: srpc, color: "#3B82F6", label: "SRPC", draggable: false },
          ]}
          showEquilibrium={false}
          domain={DOMAIN}
          xLabel="Unemployment Rate (%)"
          yLabel="Inflation Rate (%)"
        >
          {/* LRPC — vertical line at natural rate */}
          <line
            x1={lrpcTop.x} y1={lrpcTop.y}
            x2={lrpcBottom.x} y2={lrpcBottom.y}
            stroke="#EF4444" strokeWidth={2.5}
          />
          <g>
            <rect
              x={lrpcTop.x + 6} y={lrpcTop.y + 2}
              width={42} height={20} rx={4}
              fill="#EF4444" opacity={0.9}
            />
            <text
              x={lrpcTop.x + 27} y={lrpcTop.y + 16}
              textAnchor="middle" fontSize={11} fontWeight={700}
              fill="white" fontFamily="DM Sans, system-ui, sans-serif"
            >
              LRPC
            </text>
          </g>

          {/* Current point marker */}
          {currentUnemployment > 0 && (
            <>
              <line
                x1={currentPt.x} y1={currentPt.y}
                x2={currentXAxis.x} y2={currentXAxis.y}
                stroke="#10B981" strokeWidth={1} strokeDasharray="4 3" opacity={0.5}
              />
              <line
                x1={currentPt.x} y1={currentPt.y}
                x2={currentYAxis.x} y2={currentYAxis.y}
                stroke="#10B981" strokeWidth={1} strokeDasharray="4 3" opacity={0.5}
              />
              <circle cx={currentPt.x} cy={currentPt.y} r={5}
                fill="#10B981" stroke="white" strokeWidth={2} />
              <text
                x={currentPt.x + 10} y={currentPt.y - 8}
                fontSize={12} fontWeight={800} fill="#10B981"
                fontFamily="DM Sans, system-ui, sans-serif"
              >
                A
              </text>
            </>
          )}
        </EconGraph>

        <p className="text-[10px] text-center pb-1 -mt-0.5" style={{ color: 'var(--graph-label)' }}>
          Adjust unemployment and shift SRPC using the controls below
        </p>

        {/* Legend */}
        <div className="graph-legend">
          <div className="graph-legend-item">
            <div className="graph-legend-dot" style={{ background: 'var(--graph-demand)' }} />
            SRPC
          </div>
          <div className="graph-legend-item">
            <div className="graph-legend-dot" style={{ background: 'var(--graph-supply)' }} />
            LRPC
          </div>
          <div className="graph-legend-item">
            <div className="graph-legend-dot" style={{ background: 'var(--graph-equilibrium)' }} />
            Current Point
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="card flex items-center py-3">
        <div className="flex-1 text-center">
          <p className="text-[10px] font-medium uppercase tracking-wider" style={{ color: 'var(--color-ink-faint)' }}>Unemployment</p>
          <p className="text-lg font-semibold tabular-nums" style={{ color: 'var(--graph-equilibrium)' }}>{currentUnemployment.toFixed(1)}%</p>
        </div>
        <div className="w-px h-8" style={{ background: 'var(--color-border-subtle)' }} />
        <div className="flex-1 text-center">
          <p className="text-[10px] font-medium uppercase tracking-wider" style={{ color: 'var(--color-ink-faint)' }}>Inflation</p>
          <p className="text-lg font-semibold tabular-nums" style={{ color: 'var(--graph-equilibrium)' }}>{currentInflation.toFixed(1)}%</p>
        </div>
        <div className="w-px h-8" style={{ background: 'var(--color-border-subtle)' }} />
        <div className="flex-1 text-center">
          <p className="text-[10px] font-medium uppercase tracking-wider" style={{ color: 'var(--color-ink-faint)' }}>Natural Rate</p>
          <p className="text-lg font-semibold tabular-nums" style={{ color: 'var(--color-ink)' }}>{naturalRate.toFixed(1)}%</p>
        </div>
      </div>

      {/* Unemployment slider */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between">
          <p className="text-[10px] font-semibold uppercase tracking-wider pl-1" style={{ color: 'var(--graph-demand)' }}>
            Current Unemployment
          </p>
          <p className="text-xs font-semibold tabular-nums" style={{ color: 'var(--color-ink)' }}>
            {currentUnemployment.toFixed(1)}%
          </p>
        </div>
        <input
          type="range" min={1} max={10} step={0.5}
          value={currentUnemployment}
          onChange={(e) => setCurrentUnemployment(Number(e.target.value))}
          className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gray-900"
        />
      </div>

      {/* Natural rate slider */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between">
          <p className="text-[10px] font-semibold uppercase tracking-wider pl-1" style={{ color: 'var(--graph-supply)' }}>
            Natural Rate (LRPC)
          </p>
          <p className="text-xs font-semibold tabular-nums" style={{ color: 'var(--color-ink)' }}>
            {naturalRate.toFixed(1)}%
          </p>
        </div>
        <input
          type="range" min={2} max={8} step={0.5}
          value={naturalRate}
          onChange={(e) => setNaturalRate(Number(e.target.value))}
          className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gray-900"
        />
      </div>

      {/* Shift SRPC buttons */}
      <div className="space-y-1.5">
        <p className="text-[10px] font-semibold uppercase tracking-wider pl-1" style={{ color: 'var(--graph-demand)' }}>
          Shift SRPC (Inflation Expectations)
        </p>
        <div className="flex gap-1.5">
          <button onClick={shiftSRPCDown}
            className="flex-1 px-2 py-2 text-xs font-medium rounded-lg transition-all duration-150
                       bg-blue-50 text-blue-700 border border-blue-100 hover:bg-blue-100 hover:border-blue-200 active:scale-[0.98]">
            ↓ Down
          </button>
          <button onClick={shiftSRPCUp}
            className="flex-1 px-2 py-2 text-xs font-medium rounded-lg transition-all duration-150
                       bg-blue-50 text-blue-700 border border-blue-100 hover:bg-blue-100 hover:border-blue-200 active:scale-[0.98]">
            ↑ Up
          </button>
        </div>
      </div>

      <button onClick={reset}
        className="btn-primary w-full">
        Reset
      </button>
    </div>
  );
}
