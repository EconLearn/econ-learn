"use client";

import { useCallback, useRef, useState } from "react";
import { dataToSvg, svgToData, type Point, type GraphArea, type Domain } from "@/lib/graph-math";

interface PriceControlProps {
  price: number;
  type: "floor" | "ceiling";
  graphArea: GraphArea;
  domain: Domain;
  onPriceChange: (price: number) => void;
  visible: boolean;
}

const SVG_HEIGHT = 450;

export default function PriceControl({
  price,
  type,
  graphArea,
  domain,
  onPriceChange,
  visible,
}: PriceControlProps) {
  const [isDragging, setIsDragging] = useState(false);
  const svgRef = useRef<SVGGElement>(null);

  const leftPoint = dataToSvg(
    { x: domain.xMin, y: price },
    graphArea,
    domain
  );
  const rightPoint = dataToSvg(
    { x: domain.xMax, y: price },
    graphArea,
    domain
  );

  const color = type === "floor" ? "#F59E0B" : "#8B5CF6";
  const label = type === "floor" ? "Price Floor" : "Price Ceiling";

  const getSvgPoint = useCallback(
    (e: MouseEvent): Point => {
      const svg = svgRef.current?.closest("svg");
      if (!svg) return { x: 0, y: 0 };
      const rect = svg.getBoundingClientRect();
      const scaleY = SVG_HEIGHT / rect.height;
      return {
        x: 0,
        y: (e.clientY - rect.top) * scaleY,
      };
    },
    []
  );

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(true);

      const handleMouseMove = (moveEvent: MouseEvent) => {
        const svgPt = getSvgPoint(moveEvent);
        const dataPt = svgToData(
          { x: 0, y: svgPt.y },
          graphArea,
          domain
        );
        const clampedPrice = Math.max(domain.yMin + 2, Math.min(domain.yMax - 2, dataPt.y));
        onPriceChange(clampedPrice);
      };

      const handleMouseUp = () => {
        setIsDragging(false);
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
      };

      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    },
    [getSvgPoint, graphArea, domain, onPriceChange]
  );

  if (!visible) return null;

  return (
    <g ref={svgRef}>
      {/* Shaded zone */}
      <rect
        x={graphArea.x}
        y={type === "floor" ? leftPoint.y : graphArea.y}
        width={graphArea.width}
        height={type === "floor" ? graphArea.y + graphArea.height - leftPoint.y : leftPoint.y - graphArea.y}
        fill={color}
        opacity={0.04}
      />

      {/* The line */}
      <line
        x1={leftPoint.x}
        y1={leftPoint.y}
        x2={rightPoint.x}
        y2={rightPoint.y}
        stroke={color}
        strokeWidth={isDragging ? 2.5 : 2}
        strokeDasharray="8 5"
        style={{ transition: "stroke-width 0.15s ease" }}
      />

      {/* Drag handle */}
      <circle
        cx={rightPoint.x - 20}
        cy={rightPoint.y}
        r={isDragging ? 8 : 6}
        fill={color}
        stroke="white"
        strokeWidth={2.5}
        onMouseDown={handleMouseDown}
        style={{
          cursor: isDragging ? "grabbing" : "ns-resize",
          transition: "r 0.15s ease",
          filter: isDragging ? "drop-shadow(0 2px 4px rgba(0,0,0,0.15))" : "none",
        }}
      />

      {/* Label pill */}
      <rect
        x={leftPoint.x + 6}
        y={leftPoint.y - 24}
        width={label.length * 7 + 38}
        height={22}
        rx={11}
        fill={color}
        opacity={0.92}
      />
      <text
        x={leftPoint.x + 14}
        y={leftPoint.y - 9}
        fontSize={10.5}
        fontWeight={700}
        fill="white"
        fontFamily="Inter, sans-serif"
        letterSpacing="0.01em"
      >
        {label} ${price.toFixed(0)}
      </text>
    </g>
  );
}
