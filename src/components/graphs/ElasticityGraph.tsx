"use client";

import EconGraph, { GRAPH_AREA, SVG_WIDTH, SVG_HEIGHT } from "./EconGraph";
import { useElasticityStore } from "@/lib/stores/elasticity-store";
import { dataToSvg, type Domain } from "@/lib/graph-math";

const domain: Domain = { xMin: 0, xMax: 120, yMin: 0, yMax: 120 };

export default function ElasticityGraph() {
  const {
    demand,
    demandSlope,
    pricePoint,
    quantity,
    elasticity,
    revenue,
    classification,
    setDemandSlope,
    setPricePoint,
    reset,
  } = useElasticityStore();

  // Convert data coordinates to SVG coordinates
  const currentPt = dataToSvg({ x: quantity, y: pricePoint }, GRAPH_AREA, domain);
  const origin = dataToSvg({ x: 0, y: 0 }, GRAPH_AREA, domain);
  const priceAxis = dataToSvg({ x: 0, y: pricePoint }, GRAPH_AREA, domain);
  const qAxis = dataToSvg({ x: quantity, y: 0 }, GRAPH_AREA, domain);

  // Revenue rectangle in SVG space
  const rectX = priceAxis.x;
  const rectY = priceAxis.y;
  const rectW = currentPt.x - priceAxis.x;
  const rectH = origin.y - priceAxis.y;

  const absEd = isFinite(elasticity) ? elasticity.toFixed(2) : "\u221E";

  // Max price slider value (must stay below the demand intercept)
  const maxPrice = Math.min(Math.floor(demand.intercept) - 1, 119);

  return (
    <div className="space-y-3">
      <div className="graph-container overflow-hidden">
        <div className="px-4 pt-3 pb-1">
          <h3 className="graph-title !text-[13px]">
            Elasticity of Demand
          </h3>
        </div>

        {/* Graph with SVG overlay */}
        <div className="relative">
          <EconGraph
            curves={[
              {
                id: "demand",
                curve: demand,
                color: "#3B82F6",
                label: "D",
                draggable: false,
              },
            ]}
            domain={domain}
            xLabel="Quantity"
            yLabel="Price ($)"
            showEquilibrium={false}
          />
          {/* Overlay SVG for revenue rectangle and annotations */}
          <svg
            viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}
            className="absolute inset-0 w-full h-full pointer-events-none"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Revenue rectangle */}
            {quantity > 0.5 && pricePoint > 0.5 && (
              <rect
                x={rectX}
                y={rectY}
                width={Math.max(0, rectW)}
                height={Math.max(0, rectH)}
                fill="#3B82F6"
                opacity={0.08}
                stroke="#3B82F6"
                strokeWidth={1}
                strokeOpacity={0.25}
              />
            )}

            {quantity > 0.5 && pricePoint > 0.5 && (
              <>
                {/* Dashed lines from point to axes */}
                <line
                  x1={priceAxis.x}
                  y1={currentPt.y}
                  x2={currentPt.x}
                  y2={currentPt.y}
                  stroke="#9CA3AF"
                  strokeWidth={1}
                  strokeDasharray="4 3"
                />
                <line
                  x1={currentPt.x}
                  y1={currentPt.y}
                  x2={currentPt.x}
                  y2={qAxis.y}
                  stroke="#9CA3AF"
                  strokeWidth={1}
                  strokeDasharray="4 3"
                />

                {/* Point on demand curve */}
                <circle
                  cx={currentPt.x}
                  cy={currentPt.y}
                  r={5}
                  fill="#1D4ED8"
                  stroke="white"
                  strokeWidth={2}
                />

                {/* Elasticity annotation */}
                <text
                  x={currentPt.x + 12}
                  y={currentPt.y - 12}
                  fontSize={11}
                  fontWeight={600}
                  fill="#1D4ED8"
                >
                  |Ed| = {absEd}
                </text>

                {/* Price label on y-axis */}
                <text
                  x={priceAxis.x - 8}
                  y={currentPt.y + 4}
                  fontSize={10}
                  fill="#6B7280"
                  textAnchor="end"
                >
                  {pricePoint.toFixed(0)}
                </text>

                {/* Quantity label on x-axis */}
                <text
                  x={currentPt.x}
                  y={qAxis.y + 14}
                  fontSize={10}
                  fill="#6B7280"
                  textAnchor="middle"
                >
                  {quantity.toFixed(0)}
                </text>
              </>
            )}

            {/* Revenue label inside rectangle */}
            {quantity > 10 && pricePoint > 10 && rectW > 60 && rectH > 30 && (
              <text
                x={rectX + rectW / 2}
                y={rectY + rectH / 2 + 4}
                fontSize={10}
                fill="#3B82F6"
                textAnchor="middle"
                opacity={0.6}
              >
                TR = ${revenue.toFixed(0)}
              </text>
            )}
          </svg>
        </div>

        <p className="text-[10px] text-center pb-1 -mt-0.5" style={{ color: 'var(--graph-label)' }}>
          Adjust the sliders to explore elasticity at different points
        </p>
      </div>

      {/* Stats strip */}
      <div className="card flex items-center py-3">
        <div className="flex-1 text-center">
          <p className="text-[10px] font-medium uppercase tracking-wider" style={{ color: 'var(--color-ink-faint)' }}>|Ed|</p>
          <p className="text-lg font-semibold tabular-nums" style={{ color: 'var(--graph-equilibrium)' }}>{absEd}</p>
        </div>
        <div className="w-px h-8" style={{ background: 'var(--color-border-subtle)' }} />
        <div className="flex-1 text-center">
          <p className="text-[10px] font-medium uppercase tracking-wider" style={{ color: 'var(--color-ink-faint)' }}>Revenue</p>
          <p className="text-lg font-semibold tabular-nums" style={{ color: 'var(--color-ink)' }}>
            ${revenue.toFixed(0)}
          </p>
        </div>
        <div className="w-px h-8" style={{ background: 'var(--color-border-subtle)' }} />
        <div className="flex-1 text-center">
          <p className="text-[10px] font-medium uppercase tracking-wider" style={{ color: 'var(--color-ink-faint)' }}>Type</p>
          <p className="text-lg font-semibold" style={{ color: 'var(--color-ink)' }}>{classification}</p>
        </div>
      </div>

      {/* Sliders */}
      <div className="card p-4 space-y-3">
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="text-xs font-medium" style={{ color: 'var(--graph-demand)' }}>Demand Slope</label>
            <span className="text-xs font-semibold tabular-nums" style={{ color: 'var(--color-ink)' }}>
              {demandSlope.toFixed(2)}
            </span>
          </div>
          <input
            type="range"
            min={-3}
            max={-0.3}
            step={0.05}
            value={demandSlope}
            onChange={(e) => setDemandSlope(Number(e.target.value))}
            className="w-full"
          />
          <div className="flex justify-between text-[10px] text-gray-400 mt-0.5">
            <span>Steeper (inelastic)</span>
            <span>Flatter (elastic)</span>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="text-xs font-medium" style={{ color: 'var(--graph-demand)' }}>Price Point</label>
            <span className="text-xs font-semibold tabular-nums" style={{ color: 'var(--color-ink)' }}>
              ${pricePoint.toFixed(0)}
            </span>
          </div>
          <input
            type="range"
            min={5}
            max={maxPrice > 5 ? maxPrice : 95}
            step={1}
            value={pricePoint}
            onChange={(e) => setPricePoint(Number(e.target.value))}
            className="w-full"
          />
        </div>
        <button
          onClick={reset}
          className="btn-primary w-full"
        >
          Reset
        </button>
      </div>

      {/* Total Revenue Test note */}
      <div className="card p-4">
        <p className="text-xs font-semibold mb-2" style={{ color: 'var(--color-ink)' }}>Total Revenue Test</p>
        <div className="grid grid-cols-1 gap-1.5 text-xs" style={{ color: 'var(--color-ink-muted)' }}>
          <div>
            {classification === "Elastic"
              ? "Elastic range: a price decrease increases total revenue."
              : classification === "Inelastic"
              ? "Inelastic range: a price decrease decreases total revenue."
              : "Unit elastic: total revenue is at its maximum."}
          </div>
        </div>
      </div>
    </div>
  );
}
