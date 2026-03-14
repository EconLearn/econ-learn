"use client";

import { dataToSvg, generateTicks, type GraphArea, type Domain } from "@/lib/graph-math";

interface GraphAxesProps {
  graphArea: GraphArea;
  domain: Domain;
  xLabel: string;
  yLabel: string;
  tickCount?: number;
}

export default function GraphAxes({
  graphArea,
  domain,
  xLabel,
  yLabel,
  tickCount = 5,
}: GraphAxesProps) {
  const xTicks = generateTicks(domain.xMin, domain.xMax, tickCount);
  const yTicks = generateTicks(domain.yMin, domain.yMax, tickCount);

  const origin = dataToSvg({ x: domain.xMin, y: domain.yMin }, graphArea, domain);
  const xEnd = dataToSvg({ x: domain.xMax, y: domain.yMin }, graphArea, domain);
  const yEnd = dataToSvg({ x: domain.xMin, y: domain.yMax }, graphArea, domain);

  return (
    <g className="graph-axes">
      {/* Grid lines */}
      {xTicks.slice(1).map((tick) => {
        const p = dataToSvg({ x: tick, y: domain.yMin }, graphArea, domain);
        const pTop = dataToSvg({ x: tick, y: domain.yMax }, graphArea, domain);
        return (
          <line key={`xg-${tick}`} x1={p.x} y1={p.y} x2={pTop.x} y2={pTop.y}
            stroke="#E5E7EB" strokeWidth={0.5} strokeDasharray="2 4" />
        );
      })}
      {yTicks.slice(1).map((tick) => {
        const p = dataToSvg({ x: domain.xMin, y: tick }, graphArea, domain);
        const pR = dataToSvg({ x: domain.xMax, y: tick }, graphArea, domain);
        return (
          <line key={`yg-${tick}`} x1={p.x} y1={p.y} x2={pR.x} y2={pR.y}
            stroke="#E5E7EB" strokeWidth={0.5} strokeDasharray="2 4" />
        );
      })}

      {/* Axes */}
      <line x1={origin.x} y1={origin.y} x2={xEnd.x} y2={xEnd.y}
        stroke="#1F2937" strokeWidth={1.5} />
      <line x1={origin.x} y1={origin.y} x2={yEnd.x} y2={yEnd.y}
        stroke="#1F2937" strokeWidth={1.5} />

      {/* Arrowheads */}
      <polygon
        points={`${xEnd.x - 1},${xEnd.y - 4} ${xEnd.x + 6},${xEnd.y} ${xEnd.x - 1},${xEnd.y + 4}`}
        fill="#1F2937" />
      <polygon
        points={`${yEnd.x - 4},${yEnd.y + 1} ${yEnd.x},${yEnd.y - 6} ${yEnd.x + 4},${yEnd.y + 1}`}
        fill="#1F2937" />

      {/* X-axis ticks */}
      {xTicks.map((tick) => {
        if (tick === domain.xMin) return null;
        const p = dataToSvg({ x: tick, y: domain.yMin }, graphArea, domain);
        return (
          <g key={`xt-${tick}`}>
            <line x1={p.x} y1={p.y} x2={p.x} y2={p.y + 5} stroke="#9CA3AF" strokeWidth={1} />
            <text x={p.x} y={p.y + 18} textAnchor="middle" fontSize={10} fill="#9CA3AF"
              fontFamily="DM Sans, system-ui, sans-serif">
              {tick % 1 === 0 ? tick : tick.toFixed(1)}
            </text>
          </g>
        );
      })}

      {/* Y-axis ticks */}
      {yTicks.map((tick) => {
        if (tick === domain.yMin) return null;
        const p = dataToSvg({ x: domain.xMin, y: tick }, graphArea, domain);
        return (
          <g key={`yt-${tick}`}>
            <line x1={p.x - 5} y1={p.y} x2={p.x} y2={p.y} stroke="#9CA3AF" strokeWidth={1} />
            <text x={p.x - 10} y={p.y + 3.5} textAnchor="end" fontSize={10} fill="#9CA3AF"
              fontFamily="DM Sans, system-ui, sans-serif">
              {tick % 1 === 0 ? tick : tick.toFixed(1)}
            </text>
          </g>
        );
      })}

      {/* Labels */}
      <text x={graphArea.x + graphArea.width / 2} y={graphArea.y + graphArea.height + 44}
        textAnchor="middle" fontSize={12} fontWeight={600} fill="#374151"
        fontFamily="DM Sans, system-ui, sans-serif" letterSpacing="0.02em">
        {xLabel}
      </text>
      <text x={graphArea.x - 44} y={graphArea.y + graphArea.height / 2}
        textAnchor="middle" fontSize={12} fontWeight={600} fill="#374151"
        fontFamily="DM Sans, system-ui, sans-serif" letterSpacing="0.02em"
        transform={`rotate(-90, ${graphArea.x - 44}, ${graphArea.y + graphArea.height / 2})`}>
        {yLabel}
      </text>
    </g>
  );
}
