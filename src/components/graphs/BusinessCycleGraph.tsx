"use client";

import { useEffect, useRef } from "react";
import FullscreenWrapper from "@/components/ui/FullscreenWrapper";
import {
  useBusinessCycleStore,
  phases,
  type CyclePhase,
} from "@/lib/stores/business-cycle-store";

const W = 600;
const H = 400;
const PAD = { top: 30, right: 30, bottom: 50, left: 70 };
const GW = W - PAD.left - PAD.right;
const GH = H - PAD.top - PAD.bottom;

// Business cycle wave parameters
const CYCLES = 1.5;
const AMPLITUDE = 0.22;
const TREND_SLOPE = 0.15;

function waveY(t: number): number {
  const trend = 0.35 + TREND_SLOPE * t;
  const cycle = AMPLITUDE * Math.sin(t * CYCLES * 2 * Math.PI);
  return trend + cycle;
}

function trendY(t: number): number {
  return 0.35 + TREND_SLOPE * t;
}

function toSvg(t: number, val: number): { x: number; y: number } {
  return {
    x: PAD.left + t * GW,
    y: PAD.top + (1 - val) * GH,
  };
}

// Phase regions along the t-axis (0 to 1)
const phaseRegions: { id: CyclePhase; tStart: number; tEnd: number; labelT: number }[] = [
  { id: "trough", tStart: 0, tEnd: 0.12, labelT: 0.06 },
  { id: "expansion", tStart: 0.12, tEnd: 0.38, labelT: 0.25 },
  { id: "peak", tStart: 0.38, tEnd: 0.52, labelT: 0.45 },
  { id: "contraction", tStart: 0.52, tEnd: 0.78, labelT: 0.65 },
  { id: "trough", tStart: 0.78, tEnd: 0.88, labelT: 0.83 },
  { id: "expansion", tStart: 0.88, tEnd: 1.0, labelT: 0.94 },
];

export default function BusinessCycleGraph() {
  const {
    activePhase,
    showTrend,
    showLabels,
    animating,
    setActivePhase,
    toggleTrend,
    toggleLabels,
    startAnimation,
    stopAnimation,
    reset,
  } = useBusinessCycleStore();

  const progressRef = useRef(0);
  const animFrameRef = useRef<number>(0);

  // Build wave path
  const STEPS = 200;
  const wavePoints: string[] = [];
  for (let i = 0; i <= STEPS; i++) {
    const t = i / STEPS;
    const pt = toSvg(t, waveY(t));
    wavePoints.push(`${i === 0 ? "M" : "L"}${pt.x.toFixed(1)},${pt.y.toFixed(1)}`);
  }
  const wavePath = wavePoints.join(" ");

  // Build trend line
  const trendStart = toSvg(0, trendY(0));
  const trendEnd = toSvg(1, trendY(1));

  // Phase highlight regions
  const activeRegions = phaseRegions.filter((r) => r.id === activePhase);

  // Key points for markers
  const peakT = 0.45;
  const troughT = 0.83;
  const peakPt = toSvg(peakT, waveY(peakT));
  const troughPt = toSvg(troughT, waveY(troughT));

  // Animation
  useEffect(() => {
    if (!animating) return;
    let running = true;
    const start = Date.now();

    function tick() {
      if (!running) return;
      const elapsed = (Date.now() - start) / 4000; // 4 seconds per cycle
      progressRef.current = elapsed % 1;

      // Cycle through phases based on progress
      const t = progressRef.current;
      let phase: CyclePhase = "expansion";
      for (const region of phaseRegions) {
        if (t >= region.tStart && t < region.tEnd) {
          phase = region.id;
          break;
        }
      }
      setActivePhase(phase);
      animFrameRef.current = requestAnimationFrame(tick);
    }

    tick();
    return () => {
      running = false;
      cancelAnimationFrame(animFrameRef.current);
    };
  }, [animating, setActivePhase]);

  const activeInfo = phases.find((p) => p.id === activePhase);

  return (
    <FullscreenWrapper title="Business Cycle">
    <div className="graph-container">
      <div className="p-1">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="w-full"
          style={{ background: "var(--graph-bg, #FAFAFA)" }}
        >
          {/* Grid lines */}
          {[0.2, 0.4, 0.6, 0.8].map((v) => {
            const pt = toSvg(0, v);
            return (
              <line
                key={v}
                x1={PAD.left}
                y1={pt.y}
                x2={W - PAD.right}
                y2={pt.y}
                stroke="var(--graph-grid, #e5e7eb)"
                strokeWidth={0.5}
              />
            );
          })}

          {/* Phase highlight regions */}
          {activeRegions.map((region, i) => {
            const x1 = PAD.left + region.tStart * GW;
            const x2 = PAD.left + region.tEnd * GW;
            const phaseInfo = phases.find((p) => p.id === region.id);
            return (
              <rect
                key={i}
                x={x1}
                y={PAD.top}
                width={x2 - x1}
                height={GH}
                fill={phaseInfo?.color || "#ddd"}
                opacity={0.08}
              />
            );
          })}

          {/* Trend line */}
          {showTrend && (
            <line
              x1={trendStart.x}
              y1={trendStart.y}
              x2={trendEnd.x}
              y2={trendEnd.y}
              stroke="var(--color-ink-faint, #9ca3af)"
              strokeWidth={1.5}
              strokeDasharray="6 4"
            />
          )}

          {/* Business cycle wave */}
          <path
            d={wavePath}
            fill="none"
            stroke="var(--graph-demand, #3b82f6)"
            strokeWidth={2.5}
            strokeLinecap="round"
          />

          {/* Peak and Trough markers */}
          {showLabels && (
            <>
              <circle
                cx={peakPt.x}
                cy={peakPt.y}
                r={5}
                fill="#3b82f6"
                stroke="white"
                strokeWidth={2}
              />
              <text
                x={peakPt.x}
                y={peakPt.y - 14}
                textAnchor="middle"
                fill="#3b82f6"
                fontSize={11}
                fontWeight={600}
              >
                Peak
              </text>

              <circle
                cx={troughPt.x}
                cy={troughPt.y}
                r={5}
                fill="#f59e0b"
                stroke="white"
                strokeWidth={2}
              />
              <text
                x={troughPt.x}
                y={troughPt.y + 20}
                textAnchor="middle"
                fill="#f59e0b"
                fontSize={11}
                fontWeight={600}
              >
                Trough
              </text>
            </>
          )}

          {/* Phase labels along the wave */}
          {showLabels &&
            phaseRegions.slice(0, 4).map((region) => {
              const phaseInfo = phases.find((p) => p.id === region.id);
              const pt = toSvg(region.labelT, waveY(region.labelT));
              const isAboveTrend =
                waveY(region.labelT) > trendY(region.labelT);
              return (
                <text
                  key={`${region.id}-${region.tStart}`}
                  x={pt.x}
                  y={pt.y + (isAboveTrend ? -22 : 24)}
                  textAnchor="middle"
                  fill={phaseInfo?.color || "#666"}
                  fontSize={10}
                  fontWeight={500}
                  opacity={activePhase === region.id || !activePhase ? 1 : 0.3}
                >
                  {phaseInfo?.label}
                </text>
              );
            })}

          {/* Axes */}
          <line
            x1={PAD.left}
            y1={PAD.top}
            x2={PAD.left}
            y2={H - PAD.bottom}
            stroke="var(--graph-axis, #374151)"
            strokeWidth={1.5}
          />
          <line
            x1={PAD.left}
            y1={H - PAD.bottom}
            x2={W - PAD.right}
            y2={H - PAD.bottom}
            stroke="var(--graph-axis, #374151)"
            strokeWidth={1.5}
          />

          {/* Axis labels */}
          <text
            x={W / 2}
            y={H - 10}
            textAnchor="middle"
            fill="var(--graph-axis, #374151)"
            fontSize={12}
            fontWeight={500}
          >
            Time
          </text>
          <text
            x={16}
            y={H / 2}
            textAnchor="middle"
            fill="var(--graph-axis, #374151)"
            fontSize={12}
            fontWeight={500}
            transform={`rotate(-90, 16, ${H / 2})`}
          >
            Real GDP
          </text>

          {/* Trend label */}
          {showTrend && (
            <text
              x={trendEnd.x + 2}
              y={trendEnd.y - 8}
              fill="var(--color-ink-faint, #9ca3af)"
              fontSize={10}
              fontWeight={500}
            >
              Trend
            </text>
          )}
        </svg>
      </div>

      {/* Active phase info */}
      {activeInfo && (
        <div
          className="mx-4 mb-3 px-3 py-2.5 rounded-lg text-[12px] leading-relaxed"
          style={{
            background: "var(--color-surface-sunken)",
            color: "var(--color-ink-light)",
            borderLeft: `3px solid ${activeInfo.color}`,
          }}
        >
          <p className="font-semibold mb-1" style={{ color: activeInfo.color }}>
            {activeInfo.label}
          </p>
          <p>{activeInfo.description}</p>
          <ul className="mt-2 space-y-0.5">
            {activeInfo.indicators.map((ind) => (
              <li
                key={ind}
                className="text-[11px]"
                style={{ color: "var(--color-ink-muted)" }}
              >
                • {ind}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Controls */}
      <div
        className="px-4 pb-4 space-y-3"
        style={{ borderTop: "1px solid var(--color-border-subtle)" }}
      >
        <div className="pt-3">
          <p
            className="text-[11px] font-semibold uppercase tracking-wider mb-2"
            style={{ color: "var(--color-ink-faint)" }}
          >
            Explore Phases
          </p>
          <div className="grid grid-cols-4 gap-1.5">
            {phases.map((phase) => (
              <button
                key={phase.id}
                onClick={() =>
                  setActivePhase(
                    activePhase === phase.id ? null : phase.id
                  )
                }
                className="px-2 py-2 rounded-lg text-[11px] font-medium transition-all active:scale-95 text-center"
                style={{
                  border:
                    activePhase === phase.id
                      ? `1.5px solid ${phase.color}`
                      : "1px solid var(--color-border-subtle)",
                  color:
                    activePhase === phase.id
                      ? phase.color
                      : "var(--color-ink-muted)",
                  background:
                    activePhase === phase.id
                      ? `${phase.color}08`
                      : "transparent",
                }}
              >
                {phase.label}
              </button>
            ))}
          </div>
        </div>

        {/* Toggle row */}
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={toggleTrend}
            className="text-[11px] font-medium px-2.5 py-1 rounded-md transition-all"
            style={{
              border: "1px solid var(--color-border-subtle)",
              color: showTrend ? "var(--color-ink)" : "var(--color-ink-faint)",
              background: showTrend
                ? "var(--color-surface-sunken)"
                : "transparent",
            }}
          >
            Trend Line
          </button>
          <button
            onClick={toggleLabels}
            className="text-[11px] font-medium px-2.5 py-1 rounded-md transition-all"
            style={{
              border: "1px solid var(--color-border-subtle)",
              color: showLabels ? "var(--color-ink)" : "var(--color-ink-faint)",
              background: showLabels
                ? "var(--color-surface-sunken)"
                : "transparent",
            }}
          >
            Labels
          </button>
          <button
            onClick={animating ? stopAnimation : startAnimation}
            className="text-[11px] font-medium px-2.5 py-1 rounded-md transition-all"
            style={{
              border: "1px solid var(--color-border-subtle)",
              color: animating ? "var(--graph-demand)" : "var(--color-ink-muted)",
              background: animating
                ? "var(--color-surface-sunken)"
                : "transparent",
            }}
          >
            {animating ? "⏸ Pause" : "▶ Animate"}
          </button>
          <button
            onClick={reset}
            className="text-[11px] font-medium px-2.5 py-1 rounded-md transition-all ml-auto"
            style={{
              border: "1px solid var(--color-border-subtle)",
              color: "var(--color-ink-muted)",
            }}
          >
            Reset
          </button>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-4 pt-1">
          <div className="flex items-center gap-1.5">
            <span
              className="w-3 h-0.5 rounded-full"
              style={{ background: "var(--graph-demand)" }}
            />
            <span
              className="text-[10px]"
              style={{ color: "var(--color-ink-muted)" }}
            >
              Real GDP
            </span>
          </div>
          {showTrend && (
            <div className="flex items-center gap-1.5">
              <span
                className="w-3 h-0.5 rounded-full opacity-50"
                style={{
                  background: "var(--color-ink-faint)",
                  borderTop: "1px dashed var(--color-ink-faint)",
                }}
              />
              <span
                className="text-[10px]"
                style={{ color: "var(--color-ink-muted)" }}
              >
                Long-run Growth Trend
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
    </FullscreenWrapper>
  );
}
