"use client";

import EconGraph, { GRAPH_AREA } from "./EconGraph";
import FullscreenWrapper from "@/components/ui/FullscreenWrapper";
import { useMonopolyStore } from "@/lib/stores/monopoly-store";
import { dataToSvg, pointsToSmoothPath, type Domain } from "@/lib/graph-math";

const DOMAIN: Domain = { xMin: 0, xMax: 100, yMin: 0, yMax: 120 };
const GA = GRAPH_AREA;

export default function MonopolyGraph() {
  const {
    demand, mr, mc, fixedCost,
    profitMaxQ, profitMaxP, competitiveQ, competitiveP,
    mcAtQm, atcAtQm, monopolyProfit, dwl,
    mcIntercept, demandIntercept, setMcIntercept, setDemandIntercept, reset,
  } = useMonopolyStore();

  // Generate U-shaped ATC curve: ATC(Q) = FC/Q + mcInt + 0.5·mcSlope·Q
  const atcSvgPts: { x: number; y: number }[] = [];
  {
    const mcSlope = mc.slope; // 0.5
    const mcInt = mc.intercept;
    // Start from Q=2 to avoid ATC → ∞ as Q→0
    for (let q = 2; q <= 95; q += 1) {
      const atcVal = fixedCost / q + mcInt + 0.5 * mcSlope * q;
      if (atcVal <= DOMAIN.yMax && atcVal >= DOMAIN.yMin) {
        atcSvgPts.push(dataToSvg({ x: q, y: atcVal }, GA, DOMAIN));
      }
    }
  }
  const atcPath = atcSvgPts.length > 2 ? pointsToSmoothPath(atcSvgPts) : "";

  // ATC minimum point for label placement
  const qMinATC = Math.sqrt(fixedCost / (0.5 * mc.slope));
  const atcMinVal = fixedCost / qMinATC + mc.intercept + 0.5 * mc.slope * qMinATC;
  const atcMinSvg = dataToSvg({ x: qMinATC, y: atcMinVal }, GA, DOMAIN);

  // Key SVG coordinates
  const qmOnDemand = dataToSvg({ x: profitMaxQ, y: profitMaxP }, GA, DOMAIN);
  const qmOnMC = dataToSvg({ x: profitMaxQ, y: mcAtQm }, GA, DOMAIN);
  const qmXAxis = dataToSvg({ x: profitMaxQ, y: 0 }, GA, DOMAIN);
  const pmYAxis = dataToSvg({ x: 0, y: profitMaxP }, GA, DOMAIN);
  const atcYAxis = dataToSvg({ x: 0, y: atcAtQm }, GA, DOMAIN);

  // Competitive equilibrium
  const compPt = dataToSvg({ x: competitiveQ, y: competitiveP }, GA, DOMAIN);

  // DWL triangle: (Qm, Pm) -> (Qc, Pc) -> (Qm, MCm)
  const dwlPoints = [
    qmOnDemand,
    compPt,
    qmOnMC,
  ].map((p) => `${p.x},${p.y}`).join(" ");

  // Profit rectangle: from (0, ATC) to (Qm, Pm)
  const profitTopLeft = dataToSvg({ x: 0, y: profitMaxP }, GA, DOMAIN);
  const profitTopRight = dataToSvg({ x: profitMaxQ, y: profitMaxP }, GA, DOMAIN);
  const profitBotRight = dataToSvg({ x: profitMaxQ, y: atcAtQm }, GA, DOMAIN);
  const profitBotLeft = dataToSvg({ x: 0, y: atcAtQm }, GA, DOMAIN);
  const profitRectPts = [profitTopLeft, profitTopRight, profitBotRight, profitBotLeft]
    .map((p) => `${p.x},${p.y}`).join(" ");

  const showProfit = profitMaxQ > 0.5 && Math.abs(monopolyProfit) > 1;
  const profitFill = monopolyProfit > 0 ? "#8B5CF6" : "#EF4444";

  return (
    <FullscreenWrapper title="Monopoly">
    <div className="space-y-3">
      <div className="graph-container overflow-hidden">
        <div className="px-4 pt-3 pb-1">
          <h3 className="graph-title !text-[13px]">
            Monopoly
          </h3>
        </div>
        <EconGraph
          curves={[
            { id: "demand", curve: demand, color: "#3B82F6", label: "D", draggable: false },
            { id: "mr", curve: mr, color: "#8B5CF6", label: "MR", draggable: false, dashed: true },
            { id: "mc", curve: mc, color: "#EF4444", label: "MC", draggable: false },
          ]}
          showEquilibrium={false}
          domain={DOMAIN}
          xLabel="Quantity"
          yLabel="Price / Cost ($)"
        >
          {/* ATC curve */}
          {atcPath && (
            <>
              <path d={atcPath} fill="none" stroke="#14B8A6" strokeWidth={2} />
              <text
                x={atcMinSvg.x + 4} y={atcMinSvg.y - 10}
                fontSize={11} fontWeight={700} fill="#14B8A6"
                fontFamily="DM Sans, system-ui, sans-serif"
              >
                ATC
              </text>
            </>
          )}

          {/* Profit rectangle */}
          {showProfit && (
            <>
              <polygon points={profitRectPts} fill={profitFill} opacity={0.18} />
              <text
                x={(profitTopLeft.x + profitTopRight.x) / 2}
                y={(profitTopLeft.y + profitBotLeft.y) / 2 + 3}
                textAnchor="middle"
                fontSize={9}
                fontWeight={600}
                fill={profitFill}
                opacity={0.8}
                fontFamily="DM Sans, system-ui, sans-serif"
              >
                {monopolyProfit > 0 ? "Economic Profit" : "Economic Loss"}
              </text>
            </>
          )}

          {/* DWL triangle */}
          {profitMaxQ > 0.5 && dwl > 0 && (
            <>
              <polygon points={dwlPoints} fill="#F59E0B" opacity={0.22} />
              <text
                x={(qmOnDemand.x + compPt.x + qmOnMC.x) / 3}
                y={(qmOnDemand.y + compPt.y + qmOnMC.y) / 3 + 3}
                textAnchor="middle"
                fontSize={9}
                fontWeight={600}
                fill="#F59E0B"
                opacity={0.8}
                fontFamily="DM Sans, system-ui, sans-serif"
              >
                DWL
              </text>
            </>
          )}

          {/* Vertical dashed line from demand at Qm down to x-axis */}
          {profitMaxQ > 0.5 && (
            <>
              <line
                x1={qmOnDemand.x} y1={qmOnDemand.y}
                x2={qmXAxis.x} y2={qmXAxis.y}
                stroke="#6B7280" strokeWidth={1.2} strokeDasharray="5 3" opacity={0.5}
              />
              {/* Horizontal dashed line from Pm to y-axis */}
              <line
                x1={qmOnDemand.x} y1={qmOnDemand.y}
                x2={pmYAxis.x} y2={pmYAxis.y}
                stroke="#6B7280" strokeWidth={1.2} strokeDasharray="5 3" opacity={0.5}
              />
              {/* Horizontal dashed ATC line */}
              {showProfit && (
                <line
                  x1={profitBotRight.x} y1={profitBotRight.y}
                  x2={atcYAxis.x} y2={atcYAxis.y}
                  stroke="#6B7280" strokeWidth={1} strokeDasharray="3 3" opacity={0.3}
                />
              )}
            </>
          )}

          {/* Pm label on y-axis */}
          {profitMaxQ > 0.5 && (
            <text
              x={pmYAxis.x - 6} y={pmYAxis.y + 4}
              textAnchor="end" fontSize={10} fontWeight={700}
              fill="#8B5CF6" fontFamily="DM Sans, system-ui, sans-serif"
            >
              Pm
            </text>
          )}

          {/* ATC label on y-axis */}
          {showProfit && (
            <text
              x={atcYAxis.x - 6} y={atcYAxis.y + 4}
              textAnchor="end" fontSize={9} fontWeight={600}
              fill="#6B7280" fontFamily="DM Sans, system-ui, sans-serif"
            >
              ATC
            </text>
          )}

          {/* Qm label on x-axis */}
          {profitMaxQ > 0.5 && (
            <text
              x={qmXAxis.x} y={qmXAxis.y + 16}
              textAnchor="middle" fontSize={10} fontWeight={700}
              fill="#8B5CF6" fontFamily="DM Sans, system-ui, sans-serif"
            >
              Qm
            </text>
          )}

          {/* MR=MC intersection dot */}
          {profitMaxQ > 0.5 && (
            <circle cx={qmOnMC.x} cy={qmOnMC.y} r={4}
              fill="#EF4444" stroke="white" strokeWidth={2} />
          )}

          {/* Price on demand curve dot */}
          {profitMaxQ > 0.5 && (
            <circle cx={qmOnDemand.x} cy={qmOnDemand.y} r={4}
              fill="#8B5CF6" stroke="white" strokeWidth={2} />
          )}

          {/* ATC at Qm dot */}
          {showProfit && (
            <circle cx={profitBotRight.x} cy={profitBotRight.y} r={3.5}
              fill="#14B8A6" stroke="white" strokeWidth={1.5} />
          )}

          {/* Competitive equilibrium marker */}
          {competitiveQ > 0.5 && (
            <>
              <circle cx={compPt.x} cy={compPt.y} r={3.5}
                fill="none" stroke="#10B981" strokeWidth={1.5} opacity={0.6} />
              <circle cx={compPt.x} cy={compPt.y} r={1.5} fill="#10B981" opacity={0.6} />
              <text
                x={compPt.x + 8} y={compPt.y - 6}
                fontSize={10} fontWeight={700} fill="#10B981"
                fontFamily="DM Sans, system-ui, sans-serif" opacity={0.7}
              >
                Ec
              </text>
            </>
          )}
        </EconGraph>

        <p className="text-[10px] text-center pb-1 -mt-0.5" style={{ color: 'var(--graph-label)' }}>
          Adjust demand and MC intercepts using the sliders below
        </p>

        {/* Legend */}
        <div className="graph-legend">
          <div className="graph-legend-item">
            <div className="graph-legend-dot" style={{ background: 'var(--graph-demand)' }} />
            D
          </div>
          <div className="graph-legend-item">
            <div className="graph-legend-dot" style={{ background: '#8B5CF6' }} />
            MR
          </div>
          <div className="graph-legend-item">
            <div className="graph-legend-dot" style={{ background: 'var(--graph-supply)' }} />
            MC
          </div>
          <div className="graph-legend-item">
            <div className="graph-legend-dot" style={{ background: '#14B8A6' }} />
            ATC
          </div>
          {showProfit && (
            <div className="graph-legend-item">
              <div className="graph-legend-dot" style={{ background: profitFill, borderRadius: 2 }} />
              {monopolyProfit > 0 ? "Profit" : "Loss"}
            </div>
          )}
          {profitMaxQ > 0.5 && dwl > 0 && (
            <div className="graph-legend-item">
              <div className="graph-legend-dot" style={{ background: '#F59E0B', borderRadius: 2 }} />
              DWL
            </div>
          )}
        </div>
      </div>

      {/* Stats strip */}
      <div className="card flex items-center py-3">
        <div className="flex-1 text-center">
          <p className="text-[10px] font-medium uppercase tracking-wider" style={{ color: 'var(--color-ink-faint)' }}>Price</p>
          <p className="text-lg font-semibold tabular-nums" style={{ color: 'var(--color-ink)' }}>${profitMaxP.toFixed(0)}</p>
        </div>
        <div className="w-px h-8" style={{ background: 'var(--color-border-subtle)' }} />
        <div className="flex-1 text-center">
          <p className="text-[10px] font-medium uppercase tracking-wider" style={{ color: 'var(--color-ink-faint)' }}>Profit</p>
          <p className="text-lg font-semibold tabular-nums" style={{ color: monopolyProfit > 0 ? '#8B5CF6' : 'var(--graph-supply)' }}>
            ${Math.abs(monopolyProfit).toFixed(0)}
          </p>
        </div>
        <div className="w-px h-8" style={{ background: 'var(--color-border-subtle)' }} />
        <div className="flex-1 text-center">
          <p className="text-[10px] font-medium uppercase tracking-wider" style={{ color: 'var(--color-ink-faint)' }}>DWL</p>
          <p className="text-lg font-semibold tabular-nums" style={{ color: '#F59E0B' }}>${dwl.toFixed(0)}</p>
        </div>
      </div>

      {/* Sliders */}
      <div className="card p-4 space-y-3">
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="text-xs font-medium" style={{ color: 'var(--graph-demand)' }}>Demand Intercept</label>
            <span className="text-xs font-semibold tabular-nums" style={{ color: 'var(--color-ink)' }}>{demandIntercept}</span>
          </div>
          <input type="range" min={60} max={140} value={demandIntercept}
            onChange={(e) => setDemandIntercept(Number(e.target.value))}
            className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gray-900" />
        </div>
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="text-xs font-medium" style={{ color: 'var(--graph-supply)' }}>MC Intercept</label>
            <span className="text-xs font-semibold tabular-nums" style={{ color: 'var(--color-ink)' }}>{mcIntercept}</span>
          </div>
          <input type="range" min={0} max={50} value={mcIntercept}
            onChange={(e) => setMcIntercept(Number(e.target.value))}
            className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gray-900" />
        </div>
        <button onClick={reset}
          className="btn-primary w-full">
          Reset
        </button>
      </div>

      {/* Comparison */}
      <div className="card p-4">
        <p className="text-xs font-semibold mb-2" style={{ color: 'var(--color-ink)' }}>Monopoly vs. Competition</p>
        <div className="grid grid-cols-2 gap-1.5 text-xs" style={{ color: 'var(--color-ink-muted)' }}>
          <div>Competitive price: <span className="font-semibold" style={{ color: 'var(--color-ink)' }}>${competitiveP.toFixed(0)}</span></div>
          <div>Monopoly price: <span className="font-semibold" style={{ color: 'var(--color-ink)' }}>${profitMaxP.toFixed(0)}</span></div>
          <div>Competitive qty: <span className="font-semibold" style={{ color: 'var(--color-ink)' }}>{competitiveQ.toFixed(0)}</span></div>
          <div>Monopoly qty: <span className="font-semibold" style={{ color: 'var(--color-ink)' }}>{profitMaxQ.toFixed(0)}</span></div>
        </div>
      </div>
    </div>
    </FullscreenWrapper>
  );
}
