"use client";

import { useMemo } from "react";
import GraphAxes from "./GraphAxes";
import Curve from "./Curve";
import EquilibriumMarker from "./EquilibriumMarker";
import PriceControl from "./PriceControl";
import {
  findEquilibrium,
  consumerSurplusPolygon,
  producerSurplusPolygon,
  deadweightLossPolygon,
  type LinearCurve,
  type GraphArea,
  type Domain,
  type Equilibrium,
} from "@/lib/graph-math";

export interface CurveConfig {
  id: string;
  curve: LinearCurve;
  color: string;
  label: string;
  draggable?: boolean;
  onShift?: (deltaQ: number) => void;
  dashed?: boolean;
}

export interface PriceControlConfig {
  type: "floor" | "ceiling";
  price: number;
  onPriceChange: (price: number) => void;
  visible: boolean;
}

interface EconGraphProps {
  curves: CurveConfig[];
  priceControls?: PriceControlConfig[];
  xLabel?: string;
  yLabel?: string;
  domain?: Domain;
  showLabels?: boolean;
  showEquilibrium?: boolean;
  showSurplus?: boolean;
  equilibriumPair?: [string, string];
  equilibriumLabel?: string;
  className?: string;
  children?: React.ReactNode;
}

const SVG_WIDTH = 600;
const SVG_HEIGHT = 450;
const GRAPH_AREA: GraphArea = { x: 70, y: 20, width: 500, height: 360 };

export default function EconGraph({
  curves,
  priceControls = [],
  xLabel = "Quantity",
  yLabel = "Price ($)",
  domain = { xMin: 0, xMax: 100, yMin: 0, yMax: 100 },
  showLabels = true,
  showEquilibrium = true,
  showSurplus = false,
  equilibriumPair,
  equilibriumLabel = "E",
  className = "",
  children,
}: EconGraphProps) {
  const equilibrium = useMemo<Equilibrium | null>(() => {
    if (!showEquilibrium || !equilibriumPair) return null;
    const c1 = curves.find((c) => c.id === equilibriumPair[0]);
    const c2 = curves.find((c) => c.id === equilibriumPair[1]);
    if (!c1 || !c2) return null;
    return findEquilibrium(c1.curve, c2.curve);
  }, [curves, showEquilibrium, equilibriumPair]);

  const activeFloor = priceControls.find((pc) => pc.visible && pc.type === "floor");
  const activeCeiling = priceControls.find((pc) => pc.visible && pc.type === "ceiling");

  const surplusPair = useMemo(() => {
    if (!showSurplus || !equilibriumPair || !equilibrium) return null;
    const c1 = curves.find((c) => c.id === equilibriumPair[0]);
    const c2 = curves.find((c) => c.id === equilibriumPair[1]);
    if (!c1 || !c2) return null;

    const demandCurve = c1.curve.slope < 0 ? c1.curve : c2.curve;
    const supplyCurve = c1.curve.slope > 0 ? c1.curve : c2.curve;

    return {
      cs: consumerSurplusPolygon(demandCurve, equilibrium, GRAPH_AREA, domain),
      ps: producerSurplusPolygon(supplyCurve, equilibrium, GRAPH_AREA, domain),
      dwl: (activeFloor || activeCeiling)
        ? deadweightLossPolygon(
            demandCurve, supplyCurve, equilibrium,
            activeFloor?.price ?? activeCeiling?.price ?? 0,
            GRAPH_AREA, domain
          )
        : null,
    };
  }, [showSurplus, equilibriumPair, equilibrium, curves, domain, activeFloor, activeCeiling]);

  return (
    <div className={`w-full ${className}`}>
      <svg
        viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}
        className="w-full h-auto select-none"
        style={{ maxHeight: "520px" }}
      >
        {/* Background — flat color, no gradient */}
        <rect x={GRAPH_AREA.x} y={GRAPH_AREA.y} width={GRAPH_AREA.width}
          height={GRAPH_AREA.height} fill="#FAFAFA" rx={4} />

        {/* Axes */}
        <GraphAxes graphArea={GRAPH_AREA} domain={domain} xLabel={xLabel} yLabel={yLabel} />

        {/* Surplus shading */}
        {surplusPair && (
          <g style={{ transition: "opacity 0.4s ease" }}>
            <polygon points={surplusPair.cs} fill="#3B82F6" opacity={0.08} />
            <polygon points={surplusPair.ps} fill="#EF4444" opacity={0.08} />
            {surplusPair.dwl && (
              <polygon points={surplusPair.dwl} fill="#F59E0B" opacity={0.15} />
            )}
          </g>
        )}

        {/* Price controls */}
        {priceControls.map((pc, i) => (
          <PriceControl key={`pc-${pc.type}-${i}`} {...pc}
            graphArea={GRAPH_AREA} domain={domain} />
        ))}

        {/* Curves */}
        {curves.map((cc) => (
          <Curve key={cc.id} curve={cc.curve} color={cc.color} label={cc.label}
            graphArea={GRAPH_AREA} domain={domain} showLabel={showLabels}
            draggable={cc.draggable} onShift={cc.onShift} dashed={cc.dashed} />
        ))}

        {/* Custom overlays */}
        {children}

        {/* Equilibrium */}
        <EquilibriumMarker equilibrium={equilibrium} graphArea={GRAPH_AREA}
          domain={domain} label={equilibriumLabel} />
      </svg>
    </div>
  );
}

export { GRAPH_AREA, SVG_WIDTH, SVG_HEIGHT };
