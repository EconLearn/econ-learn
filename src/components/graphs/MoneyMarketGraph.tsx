"use client";

import EconGraph, { GRAPH_AREA } from "./EconGraph";
import FullscreenWrapper from "@/components/ui/FullscreenWrapper";
import { useMoneyMarketStore } from "@/lib/stores/money-market-store";
import { dataToSvg, type Domain } from "@/lib/graph-math";

const DOMAIN: Domain = { xMin: 0, xMax: 100, yMin: 0, yMax: 100 };
const GA = GRAPH_AREA;

export default function MoneyMarketGraph() {
  const {
    md, msQuantity, interestRate,
    shiftMSRight, shiftMSLeft, shiftMDRight, shiftMDLeft,
    reset,
  } = useMoneyMarketStore();

  // Vertical MS line coordinates
  const msTop = dataToSvg({ x: msQuantity, y: DOMAIN.yMax }, GA, DOMAIN);
  const msBottom = dataToSvg({ x: msQuantity, y: DOMAIN.yMin }, GA, DOMAIN);

  // Equilibrium point
  const eqPt = dataToSvg({ x: msQuantity, y: interestRate }, GA, DOMAIN);
  const eqXAxis = dataToSvg({ x: msQuantity, y: DOMAIN.yMin }, GA, DOMAIN);
  const eqYAxis = dataToSvg({ x: DOMAIN.xMin, y: interestRate }, GA, DOMAIN);

  return (
    <FullscreenWrapper title="Money Market">
    <div className="space-y-3">
      <div className="graph-container overflow-hidden">
        <div className="px-4 pt-3 pb-1">
          <h3 className="graph-title !text-[13px]">
            Money Market
          </h3>
        </div>
        <EconGraph
          curves={[
            { id: "md", curve: md, color: "#3B82F6", label: "MD", draggable: false },
          ]}
          showEquilibrium={false}
          domain={DOMAIN}
          xLabel="Quantity of Money"
          yLabel="Nominal Interest Rate (%)"
        >
          {/* Vertical MS line */}
          <line
            x1={msTop.x} y1={msTop.y}
            x2={msBottom.x} y2={msBottom.y}
            stroke="#10B981" strokeWidth={2.5}
          />
          {/* MS label */}
          <g>
            <rect
              x={msTop.x + 6} y={msTop.y + 2}
              width={32} height={20} rx={4}
              fill="#10B981" opacity={0.9}
            />
            <text
              x={msTop.x + 22} y={msTop.y + 16}
              textAnchor="middle" fontSize={11} fontWeight={700}
              fill="white" fontFamily="DM Sans, system-ui, sans-serif"
            >
              MS
            </text>
          </g>

          {/* Dashed lines from equilibrium to axes */}
          <line
            x1={eqPt.x} y1={eqPt.y}
            x2={eqXAxis.x} y2={eqXAxis.y}
            stroke="#10B981" strokeWidth={1.2} strokeDasharray="5 3" opacity={0.5}
          />
          <line
            x1={eqPt.x} y1={eqPt.y}
            x2={eqYAxis.x} y2={eqYAxis.y}
            stroke="#10B981" strokeWidth={1.2} strokeDasharray="5 3" opacity={0.5}
          />

          {/* Equilibrium dot */}
          <circle cx={eqPt.x} cy={eqPt.y} r={5}
            fill="#10B981" stroke="white" strokeWidth={2} />
          <text
            x={eqPt.x + 12} y={eqPt.y - 8}
            fontSize={13} fontWeight={800} fill="#10B981"
            fontFamily="DM Sans, system-ui, sans-serif"
          >
            E
          </text>

          {/* Interest rate label on y-axis */}
          <g>
            <rect
              x={eqYAxis.x - 42} y={eqYAxis.y - 11}
              width={38} height={22} rx={4} fill="#10B981"
            />
            <text
              x={eqYAxis.x - 23} y={eqYAxis.y + 4}
              textAnchor="middle" fontSize={10} fontWeight={700}
              fill="white" fontFamily="DM Sans, system-ui, sans-serif"
            >
              {interestRate.toFixed(0)}%
            </text>
          </g>

          {/* Quantity label on x-axis */}
          <g>
            <rect
              x={eqXAxis.x - 19} y={eqXAxis.y + 6}
              width={38} height={22} rx={4} fill="#10B981"
            />
            <text
              x={eqXAxis.x} y={eqXAxis.y + 21}
              textAnchor="middle" fontSize={10} fontWeight={700}
              fill="white" fontFamily="DM Sans, system-ui, sans-serif"
            >
              {msQuantity.toFixed(0)}
            </text>
          </g>
        </EconGraph>

        <p className="text-[10px] text-center pb-1 -mt-0.5" style={{ color: 'var(--graph-label)' }}>
          Use shift buttons to adjust money supply and demand
        </p>

        {/* Legend */}
        <div className="graph-legend">
          <div className="graph-legend-item">
            <div className="graph-legend-dot" style={{ background: 'var(--graph-demand)' }} />
            Money Demand
          </div>
          <div className="graph-legend-item">
            <div className="graph-legend-dot" style={{ background: 'var(--graph-equilibrium)' }} />
            Money Supply
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="card flex items-center py-3">
        <div className="flex-1 text-center">
          <p className="text-[10px] font-medium uppercase tracking-wider" style={{ color: 'var(--color-ink-faint)' }}>Interest Rate</p>
          <p className="text-lg font-semibold tabular-nums" style={{ color: 'var(--graph-equilibrium)' }}>{interestRate.toFixed(1)}%</p>
        </div>
        <div className="w-px h-8" style={{ background: 'var(--color-border-subtle)' }} />
        <div className="flex-1 text-center">
          <p className="text-[10px] font-medium uppercase tracking-wider" style={{ color: 'var(--color-ink-faint)' }}>Money Supply</p>
          <p className="text-lg font-semibold tabular-nums" style={{ color: 'var(--color-ink)' }}>{msQuantity.toFixed(0)}</p>
        </div>
      </div>

      {/* Shift buttons */}
      <div className="grid grid-cols-2 gap-2">
        <div className="space-y-1.5">
          <p className="text-[10px] font-semibold uppercase tracking-wider pl-1" style={{ color: 'var(--graph-equilibrium)' }}>Money Supply</p>
          <div className="flex gap-1.5">
            <button onClick={shiftMSLeft}
              className="flex-1 px-2 py-2 text-xs font-medium rounded-lg transition-all duration-150
                         bg-emerald-50 text-emerald-700 border border-emerald-100 hover:bg-emerald-100 hover:border-emerald-200 active:scale-[0.98]">
              ← Left
            </button>
            <button onClick={shiftMSRight}
              className="flex-1 px-2 py-2 text-xs font-medium rounded-lg transition-all duration-150
                         bg-emerald-50 text-emerald-700 border border-emerald-100 hover:bg-emerald-100 hover:border-emerald-200 active:scale-[0.98]">
              Right →
            </button>
          </div>
        </div>
        <div className="space-y-1.5">
          <p className="text-[10px] font-semibold uppercase tracking-wider pl-1" style={{ color: 'var(--graph-demand)' }}>Money Demand</p>
          <div className="flex gap-1.5">
            <button onClick={shiftMDLeft}
              className="flex-1 px-2 py-2 text-xs font-medium rounded-lg transition-all duration-150
                         bg-blue-50 text-blue-700 border border-blue-100 hover:bg-blue-100 hover:border-blue-200 active:scale-[0.98]">
              ← Left
            </button>
            <button onClick={shiftMDRight}
              className="flex-1 px-2 py-2 text-xs font-medium rounded-lg transition-all duration-150
                         bg-blue-50 text-blue-700 border border-blue-100 hover:bg-blue-100 hover:border-blue-200 active:scale-[0.98]">
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
