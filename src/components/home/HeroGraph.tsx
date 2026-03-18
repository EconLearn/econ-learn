"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";

/* ─── SVG layout constants ─── */
const W = 380;
const H = 280;
const PAD = { top: 24, right: 24, bottom: 36, left: 44 };
const PLOT_W = W - PAD.left - PAD.right;
const PLOT_H = H - PAD.top - PAD.bottom;

/* ─── Unique ID prefix to avoid SVG id collisions ─── */
const ID = "hero-graph";

/* ─── Coordinate helpers ─── */
function dataToSvg(dataX: number, dataY: number): [number, number] {
  const x = PAD.left + (dataX / 100) * PLOT_W;
  const y = PAD.top + (1 - dataY / 100) * PLOT_H;
  return [x, y];
}

/* ─── Curve math ─── */
// Demand: P = 88 - 0.78Q (shifted horizontally by dShift)
// Supply:  P = 8 + 0.72Q  (shifted horizontally by sShift)
function demandP(q: number, shift: number): number {
  return 88 - 0.78 * (q - shift);
}
function supplyP(q: number, shift: number): number {
  return 8 + 0.72 * (q - shift);
}

function equilibrium(dShift: number, sShift: number): { q: number; p: number } {
  // 88 - 0.78*(Q - dShift) = 8 + 0.72*(Q - sShift)
  // 80 + 0.78*dShift + 0.72*sShift = 1.5*Q
  const q = (80 + 0.78 * dShift + 0.72 * sShift) / 1.5;
  const p = supplyP(q, sShift);
  return { q, p };
}

/* Build a smooth quadratic bezier path for a curve */
function buildCurvePath(
  evalFn: (q: number) => number,
  qMin: number,
  qMax: number,
  steps: number = 20
): string {
  const points: [number, number][] = [];
  for (let i = 0; i <= steps; i++) {
    const q = qMin + ((qMax - qMin) * i) / steps;
    const p = evalFn(q);
    points.push(dataToSvg(q, p));
  }
  // Start path
  let d = `M${points[0][0].toFixed(2)},${points[0][1].toFixed(2)}`;
  // Smooth cubic through points using Catmull-Rom to cubic bezier conversion
  for (let i = 1; i < points.length; i++) {
    const p0 = points[Math.max(0, i - 2)];
    const p1 = points[i - 1];
    const p2 = points[i];
    const p3 = points[Math.min(points.length - 1, i + 1)];
    const cp1x = p1[0] + (p2[0] - p0[0]) / 6;
    const cp1y = p1[1] + (p2[1] - p0[1]) / 6;
    const cp2x = p2[0] - (p3[0] - p1[0]) / 6;
    const cp2y = p2[1] - (p3[1] - p1[1]) / 6;
    d += ` C${cp1x.toFixed(2)},${cp1y.toFixed(2)} ${cp2x.toFixed(2)},${cp2y.toFixed(2)} ${p2[0].toFixed(2)},${p2[1].toFixed(2)}`;
  }
  return d;
}

/* Build the surplus polygon path */
function surplusPath(
  type: "consumer" | "producer",
  dShift: number,
  sShift: number
): string {
  const eq = equilibrium(dShift, sShift);
  const eqSvg = dataToSvg(eq.q, eq.p);

  if (type === "consumer") {
    // Triangle: Y-axis intercept of demand, along demand curve to eq, horizontal to axis
    const pIntercept = demandP(0, dShift); // price when Q=0 on demand
    const topLeft = dataToSvg(0, pIntercept);
    // Build demand curve from Q=0 to eq.q
    const steps = 12;
    let d = `M${topLeft[0].toFixed(2)},${topLeft[1].toFixed(2)}`;
    for (let i = 1; i <= steps; i++) {
      const q = (eq.q * i) / steps;
      const p = demandP(q, dShift);
      const pt = dataToSvg(q, p);
      d += ` L${pt[0].toFixed(2)},${pt[1].toFixed(2)}`;
    }
    // Horizontal line from eq to y-axis at eq price
    const leftAtEq = dataToSvg(0, eq.p);
    d += ` L${eqSvg[0].toFixed(2)},${eqSvg[1].toFixed(2)}`;
    d += ` L${leftAtEq[0].toFixed(2)},${leftAtEq[1].toFixed(2)}`;
    d += " Z";
    return d;
  } else {
    // Triangle: Y-axis intercept of supply, along supply curve to eq, horizontal to axis
    const pIntercept = supplyP(0, sShift);
    const bottomLeft = dataToSvg(0, pIntercept);
    const steps = 12;
    let d = `M${bottomLeft[0].toFixed(2)},${bottomLeft[1].toFixed(2)}`;
    for (let i = 1; i <= steps; i++) {
      const q = (eq.q * i) / steps;
      const p = supplyP(q, sShift);
      const pt = dataToSvg(q, p);
      d += ` L${pt[0].toFixed(2)},${pt[1].toFixed(2)}`;
    }
    const leftAtEq = dataToSvg(0, eq.p);
    d += ` L${eqSvg[0].toFixed(2)},${eqSvg[1].toFixed(2)}`;
    d += ` L${leftAtEq[0].toFixed(2)},${leftAtEq[1].toFixed(2)}`;
    d += " Z";
    return d;
  }
}

/* Label position along a curve */
function labelPos(
  type: "demand" | "supply",
  shift: number
): [number, number] {
  if (type === "demand") {
    const q = 12 + shift;
    const p = demandP(q, shift);
    const [x, y] = dataToSvg(q, p);
    return [x + 6, y - 8];
  } else {
    const q = 82 + shift;
    const p = supplyP(q, shift);
    const [x, y] = dataToSvg(q, p);
    return [x + 6, y - 8];
  }
}

export default function HeroGraph() {
  const rafRef = useRef<number>(0);
  const startTimeRef = useRef<number>(0);
  const [prefersReduced, setPrefersReduced] = useState(false);

  // Animation state driven by requestAnimationFrame
  const [dShift, setDShift] = useState(0);
  const [sShift, setSShift] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const animate = useCallback(
    (time: number) => {
      if (!startTimeRef.current) startTimeRef.current = time;
      const elapsed = (time - startTimeRef.current) / 1000; // seconds

      // Gentle sinusoidal oscillation
      // Demand shifts with a period of ~8s, amplitude 16
      const d = Math.sin(elapsed * 0.78) * 16;
      // Supply shifts with a slightly different period ~10s, amplitude 12
      const s = Math.sin(elapsed * 0.62 + 1.2) * 12;

      setDShift(d);
      setSShift(s);

      rafRef.current = requestAnimationFrame(animate);
    },
    []
  );

  useEffect(() => {
    if (prefersReduced) return;
    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [prefersReduced, animate]);

  // Compute paths
  const dPath = buildCurvePath((q) => demandP(q, dShift), -10, 110);
  const sPath = buildCurvePath((q) => supplyP(q, sShift), -10, 110);
  const csPath = surplusPath("consumer", dShift, sShift);
  const psPath = surplusPath("producer", dShift, sShift);
  const eq = equilibrium(dShift, sShift);
  const eqSvg = dataToSvg(eq.q, eq.p);
  const dLabel = labelPos("demand", dShift);
  const sLabel = labelPos("supply", sShift);

  // Dashed guidelines from eq to axes
  const eqToXAxis = `M${eqSvg[0].toFixed(2)},${eqSvg[1].toFixed(2)} L${eqSvg[0].toFixed(2)},${(H - PAD.bottom).toFixed(2)}`;
  const eqToYAxis = `M${eqSvg[0].toFixed(2)},${eqSvg[1].toFixed(2)} L${PAD.left.toFixed(2)},${eqSvg[1].toFixed(2)}`;

  return (
    <div className="relative select-none" aria-hidden="true">
      {/* Glass card wrapper */}
      <div
        className="rounded-2xl p-4 overflow-hidden"
        style={{
          background: "rgba(255,255,255,0.06)",
          backdropFilter: "blur(24px) saturate(1.4)",
          WebkitBackdropFilter: "blur(24px) saturate(1.4)",
          border: "1px solid rgba(255,255,255,0.12)",
          boxShadow:
            "0 8px 32px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.1)",
        }}
      >
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="w-full h-auto"
          style={{ display: "block" }}
        >
          <defs>
            {/* Plot clip */}
            <clipPath id={`${ID}-clip`}>
              <rect x={PAD.left} y={PAD.top} width={PLOT_W} height={PLOT_H} />
            </clipPath>

            {/* Gradient overlay for plot bg */}
            <linearGradient id={`${ID}-bg-grad`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(59,130,246,0.04)" />
              <stop offset="100%" stopColor="rgba(139,92,246,0.03)" />
            </linearGradient>

            {/* Demand curve gradient stroke */}
            <linearGradient id={`${ID}-demand-grad`} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>

            {/* Supply curve gradient stroke */}
            <linearGradient id={`${ID}-supply-grad`} x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stopColor="#ef4444" />
              <stop offset="100%" stopColor="#f97316" />
            </linearGradient>

            {/* Consumer surplus fill */}
            <linearGradient id={`${ID}-cs-fill`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(59,130,246,0.22)" />
              <stop offset="100%" stopColor="rgba(59,130,246,0.06)" />
            </linearGradient>

            {/* Producer surplus fill */}
            <linearGradient id={`${ID}-ps-fill`} x1="0" y1="1" x2="0" y2="0">
              <stop offset="0%" stopColor="rgba(239,68,68,0.20)" />
              <stop offset="100%" stopColor="rgba(239,68,68,0.05)" />
            </linearGradient>

            {/* Equilibrium glow */}
            <radialGradient id={`${ID}-eq-glow`}>
              <stop offset="0%" stopColor="rgba(168,85,247,0.5)" />
              <stop offset="100%" stopColor="rgba(168,85,247,0)" />
            </radialGradient>
          </defs>

          {/* Plot background */}
          <rect
            x={PAD.left}
            y={PAD.top}
            width={PLOT_W}
            height={PLOT_H}
            fill={`url(#${ID}-bg-grad)`}
            rx={6}
          />

          {/* Subtle dotted grid lines */}
          {[20, 40, 60, 80].map((v) => {
            const [, y] = dataToSvg(0, v);
            return (
              <line
                key={`h-${v}`}
                x1={PAD.left}
                y1={y}
                x2={W - PAD.right}
                y2={y}
                stroke="rgba(148,163,184,0.12)"
                strokeWidth={0.5}
                strokeDasharray="2 4"
              />
            );
          })}
          {[20, 40, 60, 80].map((v) => {
            const [x] = dataToSvg(v, 0);
            return (
              <line
                key={`v-${v}`}
                x1={x}
                y1={PAD.top}
                x2={x}
                y2={H - PAD.bottom}
                stroke="rgba(148,163,184,0.12)"
                strokeWidth={0.5}
                strokeDasharray="2 4"
              />
            );
          })}

          {/* Axes */}
          <line
            x1={PAD.left}
            y1={H - PAD.bottom}
            x2={W - PAD.right}
            y2={H - PAD.bottom}
            stroke="rgba(148,163,184,0.35)"
            strokeWidth={1}
          />
          <line
            x1={PAD.left}
            y1={PAD.top}
            x2={PAD.left}
            y2={H - PAD.bottom}
            stroke="rgba(148,163,184,0.35)"
            strokeWidth={1}
          />

          {/* Axis labels */}
          <text
            x={(PAD.left + W - PAD.right) / 2}
            y={H - 8}
            textAnchor="middle"
            fill="rgba(148,163,184,0.6)"
            fontSize={9}
            fontWeight={400}
            fontFamily="Inter, system-ui, sans-serif"
            letterSpacing="0.04em"
          >
            QUANTITY
          </text>
          <text
            x={14}
            y={(PAD.top + H - PAD.bottom) / 2}
            textAnchor="middle"
            fill="rgba(148,163,184,0.6)"
            fontSize={9}
            fontWeight={400}
            fontFamily="Inter, system-ui, sans-serif"
            letterSpacing="0.04em"
            transform={`rotate(-90, 14, ${(PAD.top + H - PAD.bottom) / 2})`}
          >
            PRICE
          </text>

          {/* Clipped content */}
          <g clipPath={`url(#${ID}-clip)`}>
            {/* Consumer surplus area */}
            <path
              d={csPath}
              fill={`url(#${ID}-cs-fill)`}
            />

            {/* Producer surplus area */}
            <path
              d={psPath}
              fill={`url(#${ID}-ps-fill)`}
            />

            {/* Dashed guidelines from equilibrium to axes */}
            <path
              d={eqToXAxis}
              fill="none"
              stroke="rgba(168,85,247,0.25)"
              strokeWidth={0.8}
              strokeDasharray="3 3"
            />
            <path
              d={eqToYAxis}
              fill="none"
              stroke="rgba(168,85,247,0.25)"
              strokeWidth={0.8}
              strokeDasharray="3 3"
            />

            {/* Demand curve */}
            <path
              d={dPath}
              fill="none"
              stroke={`url(#${ID}-demand-grad)`}
              strokeWidth={2.8}
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Supply curve */}
            <path
              d={sPath}
              fill="none"
              stroke={`url(#${ID}-supply-grad)`}
              strokeWidth={2.8}
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Equilibrium glow */}
            <circle
              cx={eqSvg[0]}
              cy={eqSvg[1]}
              r={16}
              fill={`url(#${ID}-eq-glow)`}
            />

            {/* Equilibrium dot with pulse */}
            <circle
              cx={eqSvg[0]}
              cy={eqSvg[1]}
              r={5}
              fill="#a855f7"
              stroke="rgba(255,255,255,0.9)"
              strokeWidth={2}
            >
              {!prefersReduced && (
                <animate
                  attributeName="r"
                  values="4.5;6;4.5"
                  dur="2.5s"
                  repeatCount="indefinite"
                />
              )}
            </circle>
            {!prefersReduced && (
              <circle
                cx={eqSvg[0]}
                cy={eqSvg[1]}
                r={5}
                fill="none"
                stroke="rgba(168,85,247,0.4)"
                strokeWidth={1.5}
              >
                <animate
                  attributeName="r"
                  values="5;12;5"
                  dur="2.5s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.6;0;0.6"
                  dur="2.5s"
                  repeatCount="indefinite"
                />
              </circle>
            )}
          </g>

          {/* Curve labels that follow curves */}
          <text
            x={dLabel[0]}
            y={dLabel[1]}
            fontSize={12}
            fontWeight={600}
            fontFamily="Inter, system-ui, sans-serif"
            fill="#6366f1"
            opacity={0.9}
          >
            D
          </text>
          <text
            x={sLabel[0]}
            y={sLabel[1]}
            fontSize={12}
            fontWeight={600}
            fontFamily="Inter, system-ui, sans-serif"
            fill="#f97316"
            opacity={0.9}
          >
            S
          </text>

          {/* Small surplus labels */}
          <text
            x={dataToSvg(eq.q * 0.28, eq.p + (demandP(eq.q * 0.28, dShift) - eq.p) * 0.45)[0]}
            y={dataToSvg(eq.q * 0.28, eq.p + (demandP(eq.q * 0.28, dShift) - eq.p) * 0.45)[1]}
            fontSize={7.5}
            fontWeight={500}
            fontFamily="Inter, system-ui, sans-serif"
            fill="rgba(59,130,246,0.55)"
            textAnchor="middle"
          >
            CS
          </text>
          <text
            x={dataToSvg(eq.q * 0.28, eq.p - (eq.p - supplyP(eq.q * 0.28, sShift)) * 0.45)[0]}
            y={dataToSvg(eq.q * 0.28, eq.p - (eq.p - supplyP(eq.q * 0.28, sShift)) * 0.45)[1]}
            fontSize={7.5}
            fontWeight={500}
            fontFamily="Inter, system-ui, sans-serif"
            fill="rgba(239,68,68,0.5)"
            textAnchor="middle"
          >
            PS
          </text>
        </svg>
      </div>
    </div>
  );
}
