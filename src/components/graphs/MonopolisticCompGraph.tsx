"use client";

import EconGraph, { GRAPH_AREA } from "./EconGraph";
import { useMonoCompStore } from "@/lib/stores/monopolistic-comp-store";
import { dataToSvg, pointsToSmoothPath, type Domain } from "@/lib/graph-math";

const DOMAIN: Domain = { xMin: 0, xMax: 80, yMin: 0, yMax: 100 };
const GA = GRAPH_AREA;

export default function MonopolisticCompGraph() {
  const {
    demand,
    mr,
    mc,
    fixedCost,
    profitMaxQ,
    profitMaxP,
    mcAtQm,
    atcAtQm,
    profit,
    efficientScaleQ,
    excessCapacity,
    isLongRun,
    toggleRun,
    reset,
  } = useMonoCompStore();

  // ── ATC curve (U-shaped): ATC(Q) = FC/Q + mcInt + 0.5 * mcSlope * Q ──
  const mcInt = mc.intercept;
  const mcSlope = mc.slope;
  const atcSvgPts: { x: number; y: number }[] = [];
  for (let q = 3; q <= 75; q += 1) {
    const atcVal = fixedCost / q + mcInt + 0.5 * mcSlope * q;
    if (atcVal <= DOMAIN.yMax && atcVal >= DOMAIN.yMin) {
      atcSvgPts.push(dataToSvg({ x: q, y: atcVal }, GA, DOMAIN));
    }
  }
  const atcPath = atcSvgPts.length > 2 ? pointsToSmoothPath(atcSvgPts) : "";

  // ATC minimum for label
  const qMinATC = Math.sqrt(fixedCost / (0.5 * mcSlope));
  const atcMinVal = fixedCost / qMinATC + mcInt + 0.5 * mcSlope * qMinATC;
  const atcMinSvg = dataToSvg({ x: qMinATC, y: atcMinVal }, GA, DOMAIN);

  // Key SVG points
  const qmOnDemand = dataToSvg({ x: profitMaxQ, y: profitMaxP }, GA, DOMAIN);
  const qmOnMC = dataToSvg({ x: profitMaxQ, y: mcAtQm }, GA, DOMAIN);
  const qmXAxis = dataToSvg({ x: profitMaxQ, y: 0 }, GA, DOMAIN);
  const pmYAxis = dataToSvg({ x: 0, y: profitMaxP }, GA, DOMAIN);
  const atcYAxis = dataToSvg({ x: 0, y: atcAtQm }, GA, DOMAIN);

  // Efficient scale marker on x-axis
  const effScaleXAxis = dataToSvg({ x: efficientScaleQ, y: 0 }, GA, DOMAIN);
  const effScaleOnATC = dataToSvg(
    {
      x: efficientScaleQ,
      y: fixedCost / efficientScaleQ + mcInt + 0.5 * mcSlope * efficientScaleQ,
    },
    GA,
    DOMAIN
  );

  // Profit rectangle
  const profitTopLeft = dataToSvg({ x: 0, y: profitMaxP }, GA, DOMAIN);
  const profitTopRight = dataToSvg(
    { x: profitMaxQ, y: profitMaxP },
    GA,
    DOMAIN
  );
  const profitBotRight = dataToSvg(
    { x: profitMaxQ, y: atcAtQm },
    GA,
    DOMAIN
  );
  const profitBotLeft = dataToSvg({ x: 0, y: atcAtQm }, GA, DOMAIN);
  const profitRectPts = [
    profitTopLeft,
    profitTopRight,
    profitBotRight,
    profitBotLeft,
  ]
    .map((p) => `${p.x},${p.y}`)
    .join(" ");

  const showProfit = profitMaxQ > 0.5 && Math.abs(profit) > 1;

  return (
    <div className="space-y-3">
      <div className="graph-container overflow-hidden">
        <div className="px-4 pt-3 pb-1 flex items-center justify-between">
          <h3 className="graph-title !text-[13px]">
            Monopolistic Competition
          </h3>
          <span
            className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
              isLongRun
                ? "bg-emerald-50 text-emerald-600"
                : "bg-amber-50 text-amber-600"
            }`}
          >
            {isLongRun ? "Long Run" : "Short Run"}
          </span>
        </div>

        <EconGraph
          curves={[
            {
              id: "demand",
              curve: demand,
              color: "#3B82F6",
              label: "D",
              draggable: false,
            },
            {
              id: "mr",
              curve: mr,
              color: "#8B5CF6",
              label: "MR",
              draggable: false,
              dashed: true,
            },
            {
              id: "mc",
              curve: mc,
              color: "#EF4444",
              label: "MC",
              draggable: false,
            },
          ]}
          showEquilibrium={false}
          domain={DOMAIN}
          xLabel="Quantity"
          yLabel="Price / Cost ($)"
        >
          {/* ATC curve */}
          {atcPath && (
            <>
              <path
                d={atcPath}
                fill="none"
                stroke="#14B8A6"
                strokeWidth={2}
              />
              <text
                x={atcMinSvg.x + 4}
                y={atcMinSvg.y - 10}
                fontSize={11}
                fontWeight={700}
                fill="#14B8A6"
                fontFamily="DM Sans, system-ui, sans-serif"
              >
                ATC
              </text>
            </>
          )}

          {/* Profit/loss rectangle (short run only) */}
          {showProfit && !isLongRun && (
            <polygon
              points={profitRectPts}
              fill={profit > 0 ? "#8B5CF6" : "#EF4444"}
              opacity={0.08}
            />
          )}

          {/* Vertical dashed: Qm to x-axis */}
          {profitMaxQ > 0.5 && (
            <>
              <line
                x1={qmOnDemand.x}
                y1={qmOnDemand.y}
                x2={qmXAxis.x}
                y2={qmXAxis.y}
                stroke="#6B7280"
                strokeWidth={1.2}
                strokeDasharray="5 3"
                opacity={0.5}
              />
              {/* Horizontal dashed: Pm to y-axis */}
              <line
                x1={qmOnDemand.x}
                y1={qmOnDemand.y}
                x2={pmYAxis.x}
                y2={pmYAxis.y}
                stroke="#6B7280"
                strokeWidth={1.2}
                strokeDasharray="5 3"
                opacity={0.5}
              />
              {/* ATC horizontal dashed */}
              {showProfit && !isLongRun && (
                <line
                  x1={profitBotRight.x}
                  y1={profitBotRight.y}
                  x2={atcYAxis.x}
                  y2={atcYAxis.y}
                  stroke="#6B7280"
                  strokeWidth={1}
                  strokeDasharray="3 3"
                  opacity={0.3}
                />
              )}
            </>
          )}

          {/* Excess capacity bracket (long run) */}
          {isLongRun && excessCapacity > 1 && (
            <>
              {/* Efficient scale vertical dashed */}
              <line
                x1={effScaleOnATC.x}
                y1={effScaleOnATC.y}
                x2={effScaleXAxis.x}
                y2={effScaleXAxis.y}
                stroke="#10B981"
                strokeWidth={1}
                strokeDasharray="4 3"
                opacity={0.4}
              />
              {/* Horizontal arrow between Qm and Q* */}
              <line
                x1={qmXAxis.x}
                y1={qmXAxis.y - 12}
                x2={effScaleXAxis.x}
                y2={effScaleXAxis.y - 12}
                stroke="#10B981"
                strokeWidth={1.5}
                opacity={0.6}
                markerEnd="url(#arrowGreen)"
              />
              <defs>
                <marker
                  id="arrowGreen"
                  markerWidth="6"
                  markerHeight="6"
                  refX="5"
                  refY="3"
                  orient="auto"
                >
                  <path d="M0,0 L6,3 L0,6 Z" fill="#10B981" opacity={0.6} />
                </marker>
              </defs>
              <text
                x={(qmXAxis.x + effScaleXAxis.x) / 2}
                y={qmXAxis.y - 18}
                textAnchor="middle"
                fontSize={9}
                fontWeight={600}
                fill="#10B981"
                fontFamily="DM Sans, system-ui, sans-serif"
                opacity={0.8}
              >
                Excess capacity
              </text>
              {/* Q* label */}
              <text
                x={effScaleXAxis.x}
                y={effScaleXAxis.y + 16}
                textAnchor="middle"
                fontSize={10}
                fontWeight={700}
                fill="#10B981"
                fontFamily="DM Sans, system-ui, sans-serif"
              >
                Q*
              </text>
            </>
          )}

          {/* Pm label on y-axis */}
          {profitMaxQ > 0.5 && (
            <text
              x={pmYAxis.x - 6}
              y={pmYAxis.y + 4}
              textAnchor="end"
              fontSize={10}
              fontWeight={700}
              fill="#8B5CF6"
              fontFamily="DM Sans, system-ui, sans-serif"
            >
              P
            </text>
          )}

          {/* ATC label on y-axis (short run) */}
          {showProfit && !isLongRun && (
            <text
              x={atcYAxis.x - 6}
              y={atcYAxis.y + 4}
              textAnchor="end"
              fontSize={9}
              fontWeight={600}
              fill="#6B7280"
              fontFamily="DM Sans, system-ui, sans-serif"
            >
              ATC
            </text>
          )}

          {/* Qm label */}
          {profitMaxQ > 0.5 && (
            <text
              x={qmXAxis.x}
              y={qmXAxis.y + 16}
              textAnchor="middle"
              fontSize={10}
              fontWeight={700}
              fill="#8B5CF6"
              fontFamily="DM Sans, system-ui, sans-serif"
            >
              Q
            </text>
          )}

          {/* MR=MC dot */}
          {profitMaxQ > 0.5 && (
            <circle
              cx={qmOnMC.x}
              cy={qmOnMC.y}
              r={4}
              fill="#EF4444"
              stroke="white"
              strokeWidth={2}
            />
          )}

          {/* Price on demand curve dot */}
          {profitMaxQ > 0.5 && (
            <circle
              cx={qmOnDemand.x}
              cy={qmOnDemand.y}
              r={4}
              fill="#3B82F6"
              stroke="white"
              strokeWidth={2}
            />
          )}

          {/* ATC at Qm dot */}
          {profitMaxQ > 0.5 && (
            <circle
              cx={profitBotRight.x}
              cy={profitBotRight.y}
              r={3.5}
              fill="#14B8A6"
              stroke="white"
              strokeWidth={1.5}
            />
          )}
        </EconGraph>

        <p className="text-[10px] text-center pb-1 -mt-0.5" style={{ color: 'var(--graph-label)' }}>
          Toggle between short and long run to see market adjustment
        </p>

        {/* Legend */}
        <div className="graph-legend">
          <div className="graph-legend-item">
            <div className="graph-legend-dot" style={{ background: 'var(--graph-demand)' }} />
            D
          </div>
          <div className="graph-legend-item">
            <div className="graph-legend-dot" style={{ background: '#8B5CF6' }} />
            MR
          </div>
          <div className="graph-legend-item">
            <div className="graph-legend-dot" style={{ background: 'var(--graph-supply)' }} />
            MC
          </div>
          <div className="graph-legend-item">
            <div className="graph-legend-dot" style={{ background: '#14B8A6' }} />
            ATC
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="card flex items-center py-3">
        <div className="flex-1 text-center">
          <p className="text-[10px] font-medium uppercase tracking-wider" style={{ color: 'var(--color-ink-faint)' }}>Price</p>
          <p className="text-lg font-semibold tabular-nums" style={{ color: 'var(--color-ink)' }}>
            ${profitMaxP.toFixed(0)}
          </p>
        </div>
        <div className="w-px h-8" style={{ background: 'var(--color-border-subtle)' }} />
        <div className="flex-1 text-center">
          <p className="text-[10px] font-medium uppercase tracking-wider" style={{ color: 'var(--color-ink-faint)' }}>Profit</p>
          <p
            className="text-lg font-semibold tabular-nums"
            style={{ color: Math.abs(profit) < 1 ? 'var(--color-ink-faint)' : profit > 0 ? '#8B5CF6' : 'var(--graph-supply)' }}
          >
            {Math.abs(profit) < 1 ? "$0" : `$${Math.abs(profit).toFixed(0)}`}
          </p>
        </div>
        <div className="w-px h-8" style={{ background: 'var(--color-border-subtle)' }} />
        <div className="flex-1 text-center">
          <p className="text-[10px] font-medium uppercase tracking-wider" style={{ color: 'var(--color-ink-faint)' }}>Excess Cap.</p>
          <p className="text-lg font-semibold tabular-nums" style={{ color: 'var(--graph-equilibrium)' }}>
            {excessCapacity.toFixed(0)}
          </p>
        </div>
      </div>

      {/* Toggle + Reset */}
      <div className="card p-4 space-y-2">
        <button
          onClick={toggleRun}
          className={`w-full px-3 py-2.5 text-xs font-medium rounded-lg transition-all duration-150 ${
            isLongRun
              ? "bg-emerald-600 text-white hover:bg-emerald-700"
              : "bg-amber-600 text-white hover:bg-amber-700"
          }`}
        >
          {isLongRun ? "Switch to Short Run" : "Switch to Long Run"}
        </button>
        <button
          onClick={reset}
          className="btn-primary w-full"
        >
          Reset
        </button>
      </div>

      {/* Info */}
      <div className="card p-4">
        <p className="text-xs font-semibold mb-1.5" style={{ color: 'var(--color-ink)' }}>
          {isLongRun ? "Long-Run Equilibrium" : "Short-Run Outcome"}
        </p>
        <p className="text-xs leading-relaxed" style={{ color: 'var(--color-ink-muted)' }}>
          {isLongRun
            ? "Entry has shifted demand left until P = ATC. Economic profit is zero. The firm produces below efficient scale — that gap is excess capacity."
            : "The firm sets MR = MC and charges the price from its demand curve. With P > ATC, the firm earns positive economic profit, attracting new entrants."}
        </p>
      </div>
    </div>
  );
}
