"use client";

import { useCallback, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  generateCurvePoints,
  dataToSvg,
  svgToData,
  pointsToSmoothPath,
  type LinearCurve,
  type Point,
  type GraphArea,
  type Domain,
} from "@/lib/graph-math";

interface CurveProps {
  curve: LinearCurve;
  color: string;
  label: string;
  graphArea: GraphArea;
  domain: Domain;
  showLabel?: boolean;
  draggable?: boolean;
  onShift?: (deltaQ: number) => void;
  strokeWidth?: number;
  dashed?: boolean;
}

const SVG_W = 600;
const SVG_H = 450;

const DRAW_IN = {
  initial: { pathLength: 0, opacity: 0 },
  animate: { pathLength: 1, opacity: 1 },
  transition: { duration: 0.4, ease: [0.33, 1, 0.68, 1] },
};

export default function Curve({
  curve,
  color,
  label,
  graphArea,
  domain,
  showLabel = true,
  draggable = true,
  onShift,
  strokeWidth = 2.5,
  dashed = false,
}: CurveProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const dragStartRef = useRef<Point | null>(null);
  const svgRef = useRef<SVGGElement>(null);

  const dataPoints = generateCurvePoints(curve, domain.xMin, domain.xMax, 80);
  const svgPoints = dataPoints.map((p) => dataToSvg(p, graphArea, domain));
  const pathD = pointsToSmoothPath(svgPoints);

  const labelPoint = svgPoints.length > 0 ? svgPoints[svgPoints.length - 1] : null;

  const getSvgPoint = useCallback(
    (e: { clientX: number; clientY: number }): Point => {
      const svg = svgRef.current?.closest("svg");
      if (!svg) return { x: 0, y: 0 };
      const rect = svg.getBoundingClientRect();
      return {
        x: (e.clientX - rect.left) * (SVG_W / rect.width),
        y: (e.clientY - rect.top) * (SVG_H / rect.height),
      };
    },
    []
  );

  // Pointer events (mouse + touch)
  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      if (!draggable || !onShift) return;
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(true);
      dragStartRef.current = getSvgPoint(e);

      // Capture pointer for reliable tracking
      (e.target as SVGElement).setPointerCapture(e.pointerId);

      const handlePointerMove = (moveEvent: PointerEvent) => {
        if (!dragStartRef.current) return;
        const current = getSvgPoint(moveEvent);
        const startData = svgToData(dragStartRef.current, graphArea, domain);
        const currentData = svgToData(current, graphArea, domain);
        const deltaQ = currentData.x - startData.x;
        if (Math.abs(deltaQ) > 0.15) {
          onShift(deltaQ);
          dragStartRef.current = current;
        }
      };

      const handlePointerUp = () => {
        setIsDragging(false);
        dragStartRef.current = null;
        window.removeEventListener("pointermove", handlePointerMove);
        window.removeEventListener("pointerup", handlePointerUp);
      };

      window.addEventListener("pointermove", handlePointerMove);
      window.addEventListener("pointerup", handlePointerUp);
    },
    [draggable, onShift, getSvgPoint, graphArea, domain]
  );

  const active = isDragging || isHovered;

  return (
    <g
      ref={svgRef}
      onPointerDown={handlePointerDown}
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
      style={{
        cursor: draggable ? (isDragging ? "grabbing" : "grab") : "default",
        touchAction: "none",
      }}
    >
      {/* Glow */}
      {active && (
        <path d={pathD} fill="none" stroke={color} strokeWidth={10}
          strokeLinecap="round" opacity={0.12} />
      )}

      {/* Main curve with draw-in animation */}
      <motion.path
        d={pathD}
        fill="none"
        stroke={color}
        strokeWidth={active ? strokeWidth + 0.5 : strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray={dashed ? "8 5" : undefined}
        initial={DRAW_IN.initial}
        animate={DRAW_IN.animate}
        transition={DRAW_IN.transition}
        style={{
          transition: "stroke-width 0.2s cubic-bezier(0.4,0,0.2,1)",
          filter: active ? `drop-shadow(0 0 6px ${color}30)` : "none",
        }}
      />

      {/* Hit area for grabbing */}
      {draggable && (
        <path d={pathD} fill="none" stroke="transparent" strokeWidth={24}
          strokeLinecap="round" />
      )}

      {/* Label */}
      {showLabel && labelPoint && (
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.25 }}
        >
          <rect
            x={labelPoint.x + 6} y={labelPoint.y - 14}
            width={label.length * 9 + 14} height={22}
            rx={4} fill={color} opacity={0.9}
          />
          <text
            x={labelPoint.x + 6 + (label.length * 9 + 14) / 2}
            y={labelPoint.y + 1}
            textAnchor="middle" fontSize={11} fontWeight={700}
            fill="white" fontFamily="DM Sans, system-ui, sans-serif">
            {label}
          </text>
        </motion.g>
      )}
    </g>
  );
}
