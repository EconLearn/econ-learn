"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

/* ─── SVG layout constants ─── */
const W = 320;
const H = 240;
const PAD = { top: 20, right: 20, bottom: 30, left: 36 };
const PLOT_W = W - PAD.left - PAD.right;
const PLOT_H = H - PAD.top - PAD.bottom;

/* ─── Curve state definitions ─── */
interface CurveState {
  demandShift: number;
  supplyShift: number;
}

// Phase 0: equilibrium. Phase 1: demand shifts right. Phase 2: supply shifts left.
// Phase 3: reset. Total cycle = 4 x 1.5s = 6s.
const PHASES: CurveState[] = [
  { demandShift: 0, supplyShift: 0 },
  { demandShift: 18, supplyShift: 0 },
  { demandShift: 18, supplyShift: -14 },
  { demandShift: 0, supplyShift: 0 },
];

function dataToSvg(dataX: number, dataY: number): [number, number] {
  const x = PAD.left + (dataX / 100) * PLOT_W;
  const y = PAD.top + (1 - dataY / 100) * PLOT_H;
  return [x, y];
}

function demandPath(shift: number): string {
  // Demand: downward sloping P = 85 - 0.8Q, shifted horizontally
  const p1 = dataToSvg(0 + shift, 85);
  const p2 = dataToSvg(100 + shift, 5);
  return `M${p1[0]},${p1[1]} L${p2[0]},${p2[1]}`;
}

function supplyPath(shift: number): string {
  // Supply: upward sloping P = 10 + 0.7Q, shifted horizontally
  const p1 = dataToSvg(0 + shift, 10);
  const p2 = dataToSvg(100 + shift, 80);
  return `M${p1[0]},${p1[1]} L${p2[0]},${p2[1]}`;
}

function equilibriumPoint(
  dShift: number,
  sShift: number
): [number, number] {
  // Solve: 85 - 0.8*(Q - dShift) = 10 + 0.7*(Q - sShift)
  // => Q = (75 + 0.8*dShift + 0.7*sShift) / 1.5
  const Q = (75 + 0.8 * dShift + 0.7 * sShift) / 1.5;
  const P = 10 + 0.7 * (Q - sShift);
  return dataToSvg(Q, P);
}

export default function HeroGraph() {
  const [phaseIdx, setPhaseIdx] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (prefersReduced) return;

    // 6s total cycle: 4 phases x 1500ms each
    timerRef.current = setInterval(() => {
      setPhaseIdx((prev) => (prev + 1) % PHASES.length);
    }, 1500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [prefersReduced]);

  const phase = PHASES[phaseIdx];
  const dPath = demandPath(phase.demandShift);
  const sPath = supplyPath(phase.supplyShift);
  const eq = equilibriumPoint(phase.demandShift, phase.supplyShift);
  const transitionDur = prefersReduced ? 0 : 0.8;

  return (
    <div className="relative select-none" aria-hidden="true">
      <div className="rounded-2xl shadow-elevated p-3 overflow-hidden" style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}>
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto">
          {/* Plot area background */}
          <rect
            x={PAD.left}
            y={PAD.top}
            width={PLOT_W}
            height={PLOT_H}
            fill="var(--graph-bg)"
            rx={4}
          />

          {/* Grid lines */}
          {[20, 40, 60, 80].map((v) => {
            const [, y] = dataToSvg(0, v);
            return (
              <line
                key={`h-${v}`}
                x1={PAD.left}
                y1={y}
                x2={W - PAD.right}
                y2={y}
                stroke="var(--graph-grid)"
                strokeWidth={1}
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
                stroke="var(--graph-grid)"
                strokeWidth={1}
              />
            );
          })}

          {/* Axes */}
          <line
            x1={PAD.left}
            y1={H - PAD.bottom}
            x2={W - PAD.right}
            y2={H - PAD.bottom}
            stroke="var(--graph-axis)"
            strokeWidth={1.5}
          />
          <line
            x1={PAD.left}
            y1={PAD.top}
            x2={PAD.left}
            y2={H - PAD.bottom}
            stroke="var(--graph-axis)"
            strokeWidth={1.5}
          />

          {/* Axis labels */}
          <text
            x={W / 2}
            y={H - 6}
            textAnchor="middle"
            fill="var(--graph-label)"
            fontSize={10}
            fontFamily="Inter, system-ui, sans-serif"
          >
            Quantity
          </text>
          <text
            x={12}
            y={H / 2}
            textAnchor="middle"
            fill="var(--graph-label)"
            fontSize={10}
            fontFamily="Inter, system-ui, sans-serif"
            transform={`rotate(-90, 12, ${H / 2})`}
          >
            Price
          </text>

          {/* Clip to plot area */}
          <defs>
            <clipPath id="hero-plot-clip">
              <rect
                x={PAD.left}
                y={PAD.top}
                width={PLOT_W}
                height={PLOT_H}
              />
            </clipPath>
          </defs>

          <g clipPath="url(#hero-plot-clip)">
            {/* Demand curve (blue) */}
            <motion.path
              d={dPath}
              fill="none"
              stroke="var(--graph-demand)"
              strokeWidth={2.5}
              strokeLinecap="round"
              animate={{ d: dPath }}
              transition={{ duration: transitionDur, ease: [0.16, 1, 0.3, 1] }}
            />

            {/* Supply curve (red) */}
            <motion.path
              d={sPath}
              fill="none"
              stroke="var(--graph-supply)"
              strokeWidth={2.5}
              strokeLinecap="round"
              animate={{ d: sPath }}
              transition={{ duration: transitionDur, ease: [0.16, 1, 0.3, 1] }}
            />

            {/* Equilibrium dot */}
            <motion.circle
              r={4.5}
              fill="var(--graph-equilibrium)"
              stroke="white"
              strokeWidth={2}
              animate={{ cx: eq[0], cy: eq[1] }}
              transition={{ duration: transitionDur, ease: [0.16, 1, 0.3, 1] }}
            />
          </g>

          {/* Curve labels */}
          <motion.text
            fontSize={11}
            fontWeight={600}
            fontFamily="Inter, system-ui, sans-serif"
            fill="var(--graph-demand)"
            animate={{
              x: dataToSvg(10 + phase.demandShift, 78)[0] + 4,
              y: dataToSvg(10 + phase.demandShift, 78)[1] - 6,
            }}
            transition={{ duration: transitionDur, ease: [0.16, 1, 0.3, 1] }}
          >
            D
          </motion.text>
          <motion.text
            fontSize={11}
            fontWeight={600}
            fontFamily="Inter, system-ui, sans-serif"
            fill="var(--graph-supply)"
            animate={{
              x: dataToSvg(85 + phase.supplyShift, 70)[0] + 4,
              y: dataToSvg(85 + phase.supplyShift, 70)[1] - 6,
            }}
            transition={{ duration: transitionDur, ease: [0.16, 1, 0.3, 1] }}
          >
            S
          </motion.text>
        </svg>
      </div>
    </div>
  );
}
