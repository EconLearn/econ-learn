"use client";

import { useMemo } from "react";
import FullscreenWrapper from "@/components/ui/FullscreenWrapper";
import { useProductionCostsStore, type CostPoint } from "@/lib/stores/production-costs-store";

const VIEWBOX_W = 600;
const VIEWBOX_H = 450;

const MARGIN = { top: 30, right: 30, bottom: 50, left: 55 };
const GRAPH_W = VIEWBOX_W - MARGIN.left - MARGIN.right;
const GRAPH_H = VIEWBOX_H - MARGIN.top - MARGIN.bottom;

const X_MAX = 35;
const Y_MAX = 80;

function scaleX(q: number): number {
  return MARGIN.left + (q / X_MAX) * GRAPH_W;
}

function scaleY(cost: number): number {
  return MARGIN.top + GRAPH_H - (cost / Y_MAX) * GRAPH_H;
}

function buildSmoothPath(points: CostPoint[], accessor: (p: CostPoint) => number): string {
  const filtered = points.filter((p) => {
    const val = accessor(p);
    return val >= 0 && val <= Y_MAX;
  });
  if (filtered.length < 3) {
    return filtered
      .map((p, i) => {
        const x = scaleX(p.q);
        const y = scaleY(accessor(p));
        return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
      })
      .join(" ");
  }

  const svgPts = filtered.map((p) => ({
    x: scaleX(p.q),
    y: scaleY(accessor(p)),
  }));

  let d = `M${svgPts[0].x.toFixed(1)},${svgPts[0].y.toFixed(1)}`;
  for (let i = 0; i < svgPts.length - 1; i++) {
    const p0 = svgPts[Math.max(0, i - 1)];
    const p1 = svgPts[i];
    const p2 = svgPts[i + 1];
    const p3 = svgPts[Math.min(svgPts.length - 1, i + 2)];
    const cp1x = p1.x + (p2.x - p0.x) / 6;
    const cp1y = p1.y + (p2.y - p0.y) / 6;
    const cp2x = p2.x - (p3.x - p1.x) / 6;
    const cp2y = p2.y - (p3.y - p1.y) / 6;
    d += ` C${cp1x.toFixed(1)},${cp1y.toFixed(1)} ${cp2x.toFixed(1)},${cp2y.toFixed(1)} ${p2.x.toFixed(1)},${p2.y.toFixed(1)}`;
  }
  return d;
}

export default function ProductionCostsGraph() {
  const {
    costPoints,
    totalFixedCost,
    laborCost,
    productivity,
    setTotalFixedCost,
    setLaborCost,
    setProductivity,
    reset,
  } = useProductionCostsStore();

  const { mcPath, atcPath, avcPath, afcPath } = useMemo(() => {
    return {
      mcPath: buildSmoothPath(costPoints, (p) => p.mc),
      atcPath: buildSmoothPath(costPoints, (p) => p.atc),
      avcPath: buildSmoothPath(costPoints, (p) => p.avc),
      afcPath: buildSmoothPath(costPoints, (p) => p.afc),
    };
  }, [costPoints]);

  const { minATC, minAVC } = useMemo(() => {
    let minAtcPoint = costPoints[0];
    let minAvcPoint = costPoints[0];

    for (const p of costPoints) {
      if (p.atc < minAtcPoint.atc) minAtcPoint = p;
      if (p.avc < minAvcPoint.avc) minAvcPoint = p;
    }

    return {
      minATC: minAtcPoint,
      minAVC: minAvcPoint,
    };
  }, [costPoints]);

  const xTicks = [0, 5, 10, 15, 20, 25, 30, 35];
  const yTicks = [0, 10, 20, 30, 40, 50, 60, 70, 80];

  // Find last visible point for each curve to place labels
  const lastVisibleMC = [...costPoints].reverse().find((p) => p.mc <= Y_MAX && p.mc >= 0);
  const lastVisibleATC = [...costPoints].reverse().find((p) => p.atc <= Y_MAX && p.atc >= 0);
  const lastVisibleAVC = [...costPoints].reverse().find((p) => p.avc <= Y_MAX && p.avc >= 0);
  const lastVisibleAFC = [...costPoints].reverse().find((p) => p.afc <= Y_MAX && p.afc >= 0);

  return (
    <FullscreenWrapper title="Short-Run Cost Curves">
    <div className="space-y-3">
      <div className="graph-container overflow-hidden">
        <div className="px-4 pt-3 pb-1">
          <h3 className="graph-title !text-[13px]">
            Short-Run Cost Curves
          </h3>
        </div>

        <svg viewBox={`0 0 ${VIEWBOX_W} ${VIEWBOX_H}`} className="w-full" role="img">
          {/* Graph background */}
          <rect
            x={MARGIN.left}
            y={MARGIN.top}
            width={GRAPH_W}
            height={GRAPH_H}
            fill="#FAFAFA"
            rx={4}
          />

          {/* Grid lines (dashed, matching EconGraph style) */}
          {xTicks.slice(1).map((t) => (
            <line
              key={`xg-${t}`}
              x1={scaleX(t)} y1={MARGIN.top}
              x2={scaleX(t)} y2={MARGIN.top + GRAPH_H}
              stroke="#E5E7EB" strokeWidth={0.5} strokeDasharray="2 4"
            />
          ))}
          {yTicks.slice(1).map((t) => (
            <line
              key={`yg-${t}`}
              x1={MARGIN.left} y1={scaleY(t)}
              x2={MARGIN.left + GRAPH_W} y2={scaleY(t)}
              stroke="#E5E7EB" strokeWidth={0.5} strokeDasharray="2 4"
            />
          ))}

          {/* Axes */}
          <line
            x1={MARGIN.left} y1={MARGIN.top + GRAPH_H}
            x2={MARGIN.left + GRAPH_W} y2={MARGIN.top + GRAPH_H}
            stroke="#1F2937" strokeWidth={1.5}
          />
          <line
            x1={MARGIN.left} y1={MARGIN.top}
            x2={MARGIN.left} y2={MARGIN.top + GRAPH_H}
            stroke="#1F2937" strokeWidth={1.5}
          />

          {/* Arrowheads */}
          <polygon
            points={`${MARGIN.left + GRAPH_W - 1},${MARGIN.top + GRAPH_H - 4} ${MARGIN.left + GRAPH_W + 6},${MARGIN.top + GRAPH_H} ${MARGIN.left + GRAPH_W - 1},${MARGIN.top + GRAPH_H + 4}`}
            fill="#1F2937"
          />
          <polygon
            points={`${MARGIN.left - 4},${MARGIN.top + 1} ${MARGIN.left},${MARGIN.top - 6} ${MARGIN.left + 4},${MARGIN.top + 1}`}
            fill="#1F2937"
          />

          {/* X-axis ticks */}
          {xTicks.map((t) => {
            if (t === 0) return null;
            return (
              <g key={`xl-${t}`}>
                <line
                  x1={scaleX(t)} y1={MARGIN.top + GRAPH_H}
                  x2={scaleX(t)} y2={MARGIN.top + GRAPH_H + 5}
                  stroke="#9CA3AF" strokeWidth={1}
                />
                <text
                  x={scaleX(t)} y={MARGIN.top + GRAPH_H + 18}
                  textAnchor="middle" fontSize={10} fill="#9CA3AF"
                  fontFamily="DM Sans, system-ui, sans-serif"
                >
                  {t}
                </text>
              </g>
            );
          })}

          {/* Y-axis ticks */}
          {yTicks.map((t) => {
            if (t === 0) return null;
            return (
              <g key={`yl-${t}`}>
                <line
                  x1={MARGIN.left - 5} y1={scaleY(t)}
                  x2={MARGIN.left} y2={scaleY(t)}
                  stroke="#9CA3AF" strokeWidth={1}
                />
                <text
                  x={MARGIN.left - 10} y={scaleY(t) + 3.5}
                  textAnchor="end" fontSize={10} fill="#9CA3AF"
                  fontFamily="DM Sans, system-ui, sans-serif"
                >
                  {t}
                </text>
              </g>
            );
          })}

          {/* Axis labels */}
          <text
            x={MARGIN.left + GRAPH_W / 2} y={VIEWBOX_H - 6}
            textAnchor="middle" fontSize={12} fontWeight={600} fill="#374151"
            fontFamily="DM Sans, system-ui, sans-serif" letterSpacing="0.02em"
          >
            Quantity
          </text>
          <text
            x={MARGIN.left - 44} y={MARGIN.top + GRAPH_H / 2}
            textAnchor="middle" fontSize={12} fontWeight={600} fill="#374151"
            fontFamily="DM Sans, system-ui, sans-serif" letterSpacing="0.02em"
            transform={`rotate(-90, ${MARGIN.left - 44}, ${MARGIN.top + GRAPH_H / 2})`}
          >
            Cost ($)
          </text>

          {/* AFC curve (gray, dashed) */}
          {afcPath && (
            <path d={afcPath} fill="none" stroke="#9CA3AF" strokeWidth={1.5} strokeDasharray="4 3" />
          )}

          {/* AVC curve (green, U-shaped) */}
          {avcPath && (
            <path d={avcPath} fill="none" stroke="#22C55E" strokeWidth={2} />
          )}

          {/* ATC curve (blue, U-shaped) */}
          {atcPath && (
            <path d={atcPath} fill="none" stroke="#3B82F6" strokeWidth={2} />
          )}

          {/* MC curve (red, U-shaped, thickest) */}
          {mcPath && (
            <path d={mcPath} fill="none" stroke="#EF4444" strokeWidth={2.5} />
          )}

          {/* Min ATC dot + dashed guide line */}
          <line
            x1={scaleX(minATC.q)} y1={scaleY(minATC.atc)}
            x2={scaleX(minATC.q)} y2={scaleY(0)}
            stroke="#3B82F6" strokeWidth={1} strokeDasharray="4 3" opacity={0.4}
          />
          <circle
            cx={scaleX(minATC.q)} cy={scaleY(minATC.atc)}
            r={4} fill="#3B82F6" stroke="white" strokeWidth={2}
          />

          {/* Min AVC dot + dashed guide line */}
          <line
            x1={scaleX(minAVC.q)} y1={scaleY(minAVC.avc)}
            x2={scaleX(minAVC.q)} y2={scaleY(0)}
            stroke="#22C55E" strokeWidth={1} strokeDasharray="4 3" opacity={0.4}
          />
          <circle
            cx={scaleX(minAVC.q)} cy={scaleY(minAVC.avc)}
            r={4} fill="#22C55E" stroke="white" strokeWidth={2}
          />

          {/* Curve labels at end of each visible curve */}
          {lastVisibleMC && (
            <text
              x={scaleX(lastVisibleMC.q) + 6} y={scaleY(lastVisibleMC.mc) - 6}
              fontSize={11} fill="#EF4444" fontWeight={700}
              fontFamily="DM Sans, system-ui, sans-serif"
            >
              MC
            </text>
          )}
          {lastVisibleATC && (
            <text
              x={scaleX(lastVisibleATC.q) + 6} y={scaleY(lastVisibleATC.atc) - 6}
              fontSize={11} fill="#3B82F6" fontWeight={700}
              fontFamily="DM Sans, system-ui, sans-serif"
            >
              ATC
            </text>
          )}
          {lastVisibleAVC && (
            <text
              x={scaleX(lastVisibleAVC.q) + 6} y={scaleY(lastVisibleAVC.avc) - 6}
              fontSize={11} fill="#22C55E" fontWeight={700}
              fontFamily="DM Sans, system-ui, sans-serif"
            >
              AVC
            </text>
          )}
          {lastVisibleAFC && (
            <text
              x={scaleX(lastVisibleAFC.q) + 6} y={scaleY(lastVisibleAFC.afc) + 12}
              fontSize={11} fill="#9CA3AF" fontWeight={600}
              fontFamily="DM Sans, system-ui, sans-serif"
            >
              AFC
            </text>
          )}
        </svg>

        <p className="text-[10px] text-center pb-1 -mt-0.5" style={{ color: 'var(--graph-label)' }}>
          Adjust parameters using the sliders below
        </p>

        {/* Legend */}
        <div className="graph-legend">
          <div className="graph-legend-item">
            <div className="graph-legend-dot" style={{ background: 'var(--graph-supply)' }} />
            MC
          </div>
          <div className="graph-legend-item">
            <div className="graph-legend-dot" style={{ background: 'var(--graph-demand)' }} />
            ATC
          </div>
          <div className="graph-legend-item">
            <div className="graph-legend-dot" style={{ background: '#22C55E' }} />
            AVC
          </div>
          <div className="graph-legend-item">
            <div className="graph-legend-dot" style={{ background: 'var(--graph-axis)' }} />
            AFC
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="card flex items-center py-3">
        <div className="flex-1 text-center">
          <p className="text-[10px] font-medium uppercase tracking-wider" style={{ color: 'var(--color-ink-faint)' }}>Min ATC</p>
          <p className="text-lg font-semibold tabular-nums" style={{ color: 'var(--color-ink)' }}>
            ${minATC.atc.toFixed(1)}
          </p>
          <p className="text-[10px]" style={{ color: 'var(--color-ink-faint)' }}>at Q = {minATC.q}</p>
        </div>
        <div className="w-px h-8" style={{ background: 'var(--color-border-subtle)' }} />
        <div className="flex-1 text-center">
          <p className="text-[10px] font-medium uppercase tracking-wider" style={{ color: 'var(--color-ink-faint)' }}>Min AVC</p>
          <p className="text-lg font-semibold tabular-nums" style={{ color: 'var(--color-ink)' }}>
            ${minAVC.avc.toFixed(1)}
          </p>
          <p className="text-[10px]" style={{ color: 'var(--color-ink-faint)' }}>at Q = {minAVC.q}</p>
        </div>
        <div className="w-px h-8" style={{ background: 'var(--color-border-subtle)' }} />
        <div className="flex-1 text-center">
          <p className="text-[10px] font-medium uppercase tracking-wider" style={{ color: 'var(--color-ink-faint)' }}>Shutdown</p>
          <p className="text-sm font-semibold" style={{ color: 'var(--color-ink)' }}>
            P &lt; ${minAVC.avc.toFixed(0)}
          </p>
        </div>
      </div>

      {/* Sliders */}
      <div className="card p-4 space-y-3">
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="text-xs font-medium" style={{ color: 'var(--graph-demand)' }}>Fixed Cost</label>
            <span className="text-xs font-semibold tabular-nums" style={{ color: 'var(--color-ink)' }}>
              ${totalFixedCost}
            </span>
          </div>
          <input
            type="range" min={20} max={300} value={totalFixedCost}
            onChange={(e) => setTotalFixedCost(Number(e.target.value))}
            className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gray-900"
          />
          <p className="text-[10px] text-gray-400 mt-0.5">
            Affects ATC and AFC only — not MC or AVC
          </p>
        </div>
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="text-xs font-medium" style={{ color: 'var(--graph-supply)' }}>Labor Cost (wage)</label>
            <span className="text-xs font-semibold tabular-nums" style={{ color: 'var(--color-ink)' }}>
              ${laborCost}
            </span>
          </div>
          <input
            type="range" min={5} max={60} value={laborCost}
            onChange={(e) => setLaborCost(Number(e.target.value))}
            className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gray-900"
          />
        </div>
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="text-xs font-medium" style={{ color: 'var(--graph-supply)' }}>Productivity</label>
            <span className="text-xs font-semibold tabular-nums" style={{ color: 'var(--color-ink)' }}>
              {productivity}
            </span>
          </div>
          <input
            type="range" min={3} max={25} value={productivity}
            onChange={(e) => setProductivity(Number(e.target.value))}
            className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gray-900"
          />
        </div>
        <button
          onClick={reset}
          className="btn-primary w-full"
        >
          Reset
        </button>
      </div>

      {/* Key relationships */}
      <div className="card p-4">
        <p className="text-xs font-semibold mb-1.5" style={{ color: 'var(--color-ink)' }}>Key Relationships</p>
        <div className="space-y-1 text-xs" style={{ color: 'var(--color-ink-muted)' }}>
          <p>MC crosses AVC at its minimum (the shutdown point)</p>
          <p>MC crosses ATC at its minimum (the break-even point)</p>
          <p>AVC minimum is always to the left of ATC minimum</p>
        </div>
      </div>
    </div>
    </FullscreenWrapper>
  );
}
