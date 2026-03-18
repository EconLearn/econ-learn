"use client";

import GraphAxes from "./GraphAxes";
import FullscreenWrapper from "@/components/ui/FullscreenWrapper";
import { usePPCStore, yOnPPC } from "@/lib/stores/ppc-store";
import { dataToSvg, pointsToSmoothPath, type GraphArea, type Domain } from "@/lib/graph-math";

const GA: GraphArea = { x: 70, y: 20, width: 500, height: 360 };
const SVG_W = 600;
const SVG_H = 450;

export default function PPCGraph() {
  const {
    maxX, maxY, pointX, pointY,
    isEfficient, isAttainable, opportunityCostX,
    setPoint, setPointX, shiftOutward, shiftInward, reset,
  } = usePPCStore();

  const domain: Domain = { xMin: 0, xMax: maxX + 20, yMin: 0, yMax: maxY + 20 };

  // Generate PPC curve points
  const ppcPts: { x: number; y: number }[] = [];
  const steps = 100;
  for (let i = 0; i <= steps; i++) {
    const x = (i / steps) * maxX;
    const y = yOnPPC(x, maxX, maxY);
    ppcPts.push({ x, y });
  }

  const svgPts = ppcPts.map((p) => dataToSvg(p, GA, domain));
  const ppcPath = pointsToSmoothPath(svgPts);

  // Current point
  const ptSvg = dataToSvg({ x: pointX, y: pointY }, GA, domain);
  const ptXAxis = dataToSvg({ x: pointX, y: 0 }, GA, domain);
  const ptYAxis = dataToSvg({ x: 0, y: pointY }, GA, domain);

  // Attainable region fill
  const fillPts = [...svgPts];
  const bottomRight = dataToSvg({ x: maxX, y: 0 }, GA, domain);
  const origin = dataToSvg({ x: 0, y: 0 }, GA, domain);
  fillPts.push(bottomRight, origin);
  const fillPath = fillPts.map((p, i) =>
    `${i === 0 ? "M" : "L"}${p.x.toFixed(1)},${p.y.toFixed(1)}`
  ).join(" ") + "Z";

  const statusLabel = isEfficient ? "Efficient" : isAttainable ? "Attainable (Inefficient)" : "Unattainable";
  const statusColor = isEfficient ? "text-emerald-600" : isAttainable ? "text-amber-600" : "text-red-500";

  return (
    <FullscreenWrapper title="Production Possibilities Curve">
    <div className="space-y-3">
      <div className="graph-container overflow-hidden">
        <div className="px-4 pt-3 pb-1">
          <h3 className="graph-title !text-[13px]">
            Production Possibilities Curve
          </h3>
        </div>
        <svg
          viewBox={`0 0 ${SVG_W} ${SVG_H}`}
          className="w-full h-auto select-none"
          style={{ maxHeight: "520px" }}
        >
          {/* Background */}
          <rect x={GA.x} y={GA.y} width={GA.width} height={GA.height}
            fill="#FAFAFA" rx={4} />

          {/* Axes */}
          <GraphAxes graphArea={GA} domain={domain} xLabel="Good X" yLabel="Good Y" tickCount={5} />

          {/* Attainable region */}
          <path d={fillPath} fill="#3B82F6" opacity={0.04} />

          {/* PPC curve */}
          <path d={ppcPath} fill="none" stroke="#3B82F6" strokeWidth={2.5} />

          {/* PPC label */}
          {svgPts.length > 0 && (
            <text
              x={svgPts[Math.floor(svgPts.length * 0.7)].x + 12}
              y={svgPts[Math.floor(svgPts.length * 0.7)].y - 8}
              fontSize={11} fontWeight={700} fill="#3B82F6"
              fontFamily="DM Sans, system-ui, sans-serif"
            >
              PPC
            </text>
          )}

          {/* Dashed lines from point to axes */}
          <line
            x1={ptSvg.x} y1={ptSvg.y} x2={ptXAxis.x} y2={ptXAxis.y}
            stroke="#6B7280" strokeWidth={1} strokeDasharray="4 3" opacity={0.5}
          />
          <line
            x1={ptSvg.x} y1={ptSvg.y} x2={ptYAxis.x} y2={ptYAxis.y}
            stroke="#6B7280" strokeWidth={1} strokeDasharray="4 3" opacity={0.5}
          />

          {/* Current point */}
          <circle cx={ptSvg.x} cy={ptSvg.y} r={6}
            fill={isEfficient ? "#10B981" : isAttainable ? "#F59E0B" : "#EF4444"}
            stroke="white" strokeWidth={2}
          />
          <text
            x={ptSvg.x + 10} y={ptSvg.y - 8}
            fontSize={12} fontWeight={800}
            fill={isEfficient ? "#10B981" : isAttainable ? "#F59E0B" : "#EF4444"}
            fontFamily="DM Sans, system-ui, sans-serif"
          >
            A
          </text>
        </svg>
      </div>

      {/* Stats */}
      <div className="card flex items-center py-3">
        <div className="flex-1 text-center">
          <p className="text-[10px] font-medium uppercase tracking-wider" style={{ color: 'var(--color-ink-faint)' }}>Good X</p>
          <p className="text-lg font-semibold tabular-nums" style={{ color: 'var(--color-ink)' }}>{pointX.toFixed(0)}</p>
        </div>
        <div className="w-px h-8" style={{ background: 'var(--color-border-subtle)' }} />
        <div className="flex-1 text-center">
          <p className="text-[10px] font-medium uppercase tracking-wider" style={{ color: 'var(--color-ink-faint)' }}>Good Y</p>
          <p className="text-lg font-semibold tabular-nums" style={{ color: 'var(--color-ink)' }}>{pointY.toFixed(0)}</p>
        </div>
        <div className="w-px h-8" style={{ background: 'var(--color-border-subtle)' }} />
        <div className="flex-1 text-center">
          <p className="text-[10px] font-medium uppercase tracking-wider" style={{ color: 'var(--color-ink-faint)' }}>Status</p>
          <p className={`text-sm font-semibold ${statusColor}`}>{statusLabel}</p>
        </div>
      </div>

      {/* Opp cost display */}
      <div className="card p-4">
        <p className="text-xs" style={{ color: 'var(--color-ink-muted)' }}>
          Opportunity cost of 1 more unit of Good X:
          <span className="font-semibold ml-1" style={{ color: 'var(--color-ink)' }}>
            {opportunityCostX < 100 ? `${opportunityCostX.toFixed(2)} units of Good Y` : "very high"}
          </span>
        </p>
      </div>

      {/* Point position presets */}
      <div className="space-y-1.5">
        <p className="text-[10px] font-medium uppercase tracking-wider pl-1" style={{ color: 'var(--color-ink-muted)' }}>
          Point Position
        </p>
        <div className="flex gap-1.5">
          <button
            onClick={() => setPointX(pointX)}
            className={`flex-1 px-2 py-2 text-xs font-medium rounded-md transition-colors border
              ${isEfficient ? "bg-emerald-50 text-emerald-700 border-emerald-200" : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"}`}
          >
            On Curve
          </button>
          <button
            onClick={() => {
              const curveY = yOnPPC(pointX, maxX, maxY);
              setPoint(pointX, curveY * 0.55);
            }}
            className={`flex-1 px-2 py-2 text-xs font-medium rounded-md transition-colors border
              ${isAttainable && !isEfficient ? "bg-amber-50 text-amber-700 border-amber-200" : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"}`}
          >
            Inside
          </button>
          <button
            onClick={() => {
              const curveY = yOnPPC(pointX, maxX, maxY);
              setPoint(pointX, Math.min(maxY + 15, curveY * 1.3 + 5));
            }}
            className={`flex-1 px-2 py-2 text-xs font-medium rounded-md transition-colors border
              ${!isAttainable ? "bg-red-50 text-red-700 border-red-200" : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"}`}
          >
            Outside
          </button>
        </div>
      </div>

      {/* Good X slider */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between">
          <p className="text-[10px] font-medium uppercase tracking-wider pl-1" style={{ color: 'var(--color-ink-muted)' }}>
            Good X
          </p>
          <p className="text-xs font-semibold tabular-nums" style={{ color: 'var(--color-ink)' }}>
            {pointX.toFixed(0)}
          </p>
        </div>
        <input
          type="range" min={0} max={maxX} step={1}
          value={pointX}
          onChange={(e) => {
            const newX = Number(e.target.value);
            if (isEfficient) {
              setPointX(newX);
            } else {
              setPoint(newX, pointY);
            }
          }}
          className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gray-900"
        />
      </div>

      {/* Good Y slider */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between">
          <p className="text-[10px] font-medium uppercase tracking-wider pl-1" style={{ color: 'var(--color-ink-muted)' }}>
            Good Y
          </p>
          <p className="text-xs font-semibold tabular-nums" style={{ color: 'var(--color-ink)' }}>
            {pointY.toFixed(0)}
          </p>
        </div>
        <input
          type="range" min={0} max={maxY + 15} step={1}
          value={pointY}
          onChange={(e) => setPoint(pointX, Number(e.target.value))}
          className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gray-900"
        />
      </div>

      {/* PPC shift buttons */}
      <div className="space-y-1.5">
        <p className="text-[10px] font-semibold uppercase tracking-wider pl-1" style={{ color: 'var(--graph-demand)' }}>
          Shift PPC (Economic Growth)
        </p>
        <div className="flex gap-1.5">
          <button onClick={shiftInward}
            className="flex-1 px-2 py-2 text-xs font-medium rounded-lg transition-all duration-150
                       bg-blue-50 text-blue-700 border border-blue-100 hover:bg-blue-100 hover:border-blue-200 active:scale-[0.98]">
            ← Inward
          </button>
          <button onClick={shiftOutward}
            className="flex-1 px-2 py-2 text-xs font-medium rounded-lg transition-all duration-150
                       bg-blue-50 text-blue-700 border border-blue-100 hover:bg-blue-100 hover:border-blue-200 active:scale-[0.98]">
            Outward →
          </button>
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
