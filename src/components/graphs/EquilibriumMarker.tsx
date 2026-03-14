"use client";

import { dataToSvg, type Equilibrium, type GraphArea, type Domain } from "@/lib/graph-math";

interface EquilibriumMarkerProps {
  equilibrium: Equilibrium | null;
  graphArea: GraphArea;
  domain: Domain;
  showDashedLines?: boolean;
  showValues?: boolean;
  color?: string;
  label?: string;
}

export default function EquilibriumMarker({
  equilibrium,
  graphArea,
  domain,
  showDashedLines = true,
  showValues = true,
  color = "#10B981",
  label = "E",
}: EquilibriumMarkerProps) {
  if (!equilibrium) return null;

  const eqSvg = dataToSvg({ x: equilibrium.quantity, y: equilibrium.price }, graphArea, domain);
  const xAxisPt = dataToSvg({ x: equilibrium.quantity, y: domain.yMin }, graphArea, domain);
  const yAxisPt = dataToSvg({ x: domain.xMin, y: equilibrium.price }, graphArea, domain);

  return (
    <g className="equilibrium-marker" style={{ transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)" }}>
      {showDashedLines && (
        <>
          <line x1={eqSvg.x} y1={eqSvg.y} x2={xAxisPt.x} y2={xAxisPt.y}
            stroke={color} strokeWidth={1.2} strokeDasharray="5 3" opacity={0.5} />
          <line x1={eqSvg.x} y1={eqSvg.y} x2={yAxisPt.x} y2={yAxisPt.y}
            stroke={color} strokeWidth={1.2} strokeDasharray="5 3" opacity={0.5} />
        </>
      )}

      {/* Pulsing outer ring — slow pulse */}
      <circle cx={eqSvg.x} cy={eqSvg.y} r={12} fill={color} opacity={0.08}>
        <animate attributeName="r" values="10;14;10" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.08;0.04;0.08" dur="3s" repeatCount="indefinite" />
      </circle>

      {/* Solid ring */}
      <circle cx={eqSvg.x} cy={eqSvg.y} r={6} fill="none" stroke={color}
        strokeWidth={1.5} opacity={0.3} />

      {/* Center dot */}
      <circle cx={eqSvg.x} cy={eqSvg.y} r={4} fill={color} stroke="white" strokeWidth={2} />

      {showValues && (
        <>
          {/* P* label */}
          <g>
            <rect x={yAxisPt.x - 42} y={yAxisPt.y - 11} width={38} height={22}
              rx={4} fill={color} />
            <text x={yAxisPt.x - 23} y={yAxisPt.y + 4} textAnchor="middle"
              fontSize={10} fontWeight={700} fill="white"
              fontFamily="DM Sans, system-ui, sans-serif">
              ${equilibrium.price.toFixed(0)}
            </text>
          </g>

          {/* Q* label */}
          <g>
            <rect x={xAxisPt.x - 19} y={xAxisPt.y + 6} width={38} height={22}
              rx={4} fill={color} />
            <text x={xAxisPt.x} y={xAxisPt.y + 21} textAnchor="middle"
              fontSize={10} fontWeight={700} fill="white"
              fontFamily="DM Sans, system-ui, sans-serif">
              {equilibrium.quantity.toFixed(0)}
            </text>
          </g>
        </>
      )}

      {/* E label */}
      <text x={eqSvg.x + 14} y={eqSvg.y - 10} fontSize={13} fontWeight={800}
        fill={color} fontFamily="DM Sans, system-ui, sans-serif">
        {label}
      </text>
    </g>
  );
}
