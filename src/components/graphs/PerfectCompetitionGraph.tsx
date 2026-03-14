"use client";

import EconGraph from "./EconGraph";
import GraphAxes from "./GraphAxes";
import {
  usePerfectCompetitionStore,
  FIRM_FC,
  FIRM_BETA,
  FIRM_GAMMA,
} from "@/lib/stores/perfect-competition-store";
import {
  dataToSvg,
  pointsToSmoothPath,
  type GraphArea,
  type Domain,
} from "@/lib/graph-math";

// Firm panel dimensions (standalone SVG)
const FIRM_GA: GraphArea = { x: 56, y: 20, width: 240, height: 260 };
const FIRM_DOMAIN: Domain = { xMin: 0, xMax: 50, yMin: 0, yMax: 80 };
const FIRM_SVG_W = 320;
const FIRM_SVG_H = 330;

// Market panel uses EconGraph defaults
const MARKET_DOMAIN: Domain = { xMin: 0, xMax: 120, yMin: 0, yMax: 100 };

export default function PerfectCompetitionGraph() {
  const {
    marketDemand,
    marketSupply,
    marketPrice,
    firmAlpha,
    firmQuantity,
    firmATCAtQ,
    firmAVCAtQ,
    profitPerUnit,
    totalProfit,
    qMinATC,
    qMinAVC,
    shiftMarketDemandRight,
    shiftMarketDemandLeft,
    shiftMarketSupplyRight,
    shiftMarketSupplyLeft,
    setFirmAlpha,
    reset,
  } = usePerfectCompetitionStore();

  // ─── Generate firm-level cost curves from cubic model ───────────
  // MC(Q)  = α − 2β·Q + 3γ·Q²
  // AVC(Q) = α − β·Q + γ·Q²
  // ATC(Q) = FC/Q + AVC(Q)

  const mcDataPts: { x: number; y: number }[] = [];
  const avcDataPts: { x: number; y: number }[] = [];
  const atcDataPts: { x: number; y: number }[] = [];

  for (let q = 0.5; q <= FIRM_DOMAIN.xMax; q += 0.5) {
    const mc =
      firmAlpha - 2 * FIRM_BETA * q + 3 * FIRM_GAMMA * q * q;
    if (mc >= 0 && mc <= FIRM_DOMAIN.yMax) {
      mcDataPts.push({ x: q, y: mc });
    }

    const avc = firmAlpha - FIRM_BETA * q + FIRM_GAMMA * q * q;
    if (avc >= 0 && avc <= FIRM_DOMAIN.yMax && q >= 1) {
      avcDataPts.push({ x: q, y: avc });
    }

    const atc = FIRM_FC / q + avc;
    if (atc >= 0 && atc <= FIRM_DOMAIN.yMax && q >= 2) {
      atcDataPts.push({ x: q, y: atc });
    }
  }

  // Convert to SVG coordinates and build smooth paths
  const mcSvgPts = mcDataPts.map((p) => dataToSvg(p, FIRM_GA, FIRM_DOMAIN));
  const avcSvgPts = avcDataPts.map((p) => dataToSvg(p, FIRM_GA, FIRM_DOMAIN));
  const atcSvgPts = atcDataPts.map((p) => dataToSvg(p, FIRM_GA, FIRM_DOMAIN));

  const mcPath = mcSvgPts.length > 2 ? pointsToSmoothPath(mcSvgPts) : "";
  const avcPath = avcSvgPts.length > 2 ? pointsToSmoothPath(avcSvgPts) : "";
  const atcPath = atcSvgPts.length > 2 ? pointsToSmoothPath(atcSvgPts) : "";

  // ─── Key SVG points ─────────────────────────────────────────────

  // Firm equilibrium: where P = MC (on rising portion)
  const firmEqSvg = dataToSvg(
    { x: firmQuantity, y: marketPrice },
    FIRM_GA,
    FIRM_DOMAIN,
  );
  const firmQAxis = dataToSvg(
    { x: firmQuantity, y: 0 },
    FIRM_GA,
    FIRM_DOMAIN,
  );
  const firmPAxis = dataToSvg(
    { x: 0, y: marketPrice },
    FIRM_GA,
    FIRM_DOMAIN,
  );

  // Price line across firm panel
  const pLineLeft = dataToSvg(
    { x: FIRM_DOMAIN.xMin, y: marketPrice },
    FIRM_GA,
    FIRM_DOMAIN,
  );
  const pLineRight = dataToSvg(
    { x: FIRM_DOMAIN.xMax, y: marketPrice },
    FIRM_GA,
    FIRM_DOMAIN,
  );

  // Profit/loss rectangle: between P and ATC at firmQuantity
  const rectTop = Math.min(marketPrice, firmATCAtQ);
  const rectBottom = Math.max(marketPrice, firmATCAtQ);
  const rectTopLeft = dataToSvg(
    { x: 0, y: rectBottom },
    FIRM_GA,
    FIRM_DOMAIN,
  );
  const rectBottomLeft = dataToSvg(
    { x: 0, y: rectTop },
    FIRM_GA,
    FIRM_DOMAIN,
  );
  const rectTopRight = dataToSvg(
    { x: firmQuantity, y: rectBottom },
    FIRM_GA,
    FIRM_DOMAIN,
  );

  const showProfit = firmQuantity > 0.5 && Math.abs(profitPerUnit) > 0.5;
  const profitFill = profitPerUnit > 0 ? "#10B981" : "#EF4444";

  // Label positions (near right end of visible curves)
  const atcLabelPt =
    atcSvgPts.length > 0 ? atcSvgPts[atcSvgPts.length - 1] : null;
  const avcLabelPt =
    avcSvgPts.length > 0 ? avcSvgPts[avcSvgPts.length - 1] : null;
  const mcLabelPt =
    mcSvgPts.length > 0 ? mcSvgPts[mcSvgPts.length - 1] : null;

  // AVC minimum dot position
  const avcMinVal =
    firmAlpha - (FIRM_BETA * FIRM_BETA) / (4 * FIRM_GAMMA);
  const avcMinSvg = dataToSvg(
    { x: qMinAVC, y: avcMinVal },
    FIRM_GA,
    FIRM_DOMAIN,
  );

  // ATC minimum dot position
  const atcMinVal =
    FIRM_FC / qMinATC +
    firmAlpha -
    FIRM_BETA * qMinATC +
    FIRM_GAMMA * qMinATC * qMinATC;
  const atcMinSvg = dataToSvg(
    { x: qMinATC, y: atcMinVal },
    FIRM_GA,
    FIRM_DOMAIN,
  );

  const profitLabel =
    totalProfit > 0.5
      ? "Economic Profit"
      : totalProfit < -0.5
        ? "Economic Loss"
        : "Normal Profit";
  const profitColor =
    totalProfit > 0.5
      ? "text-emerald-600"
      : totalProfit < -0.5
        ? "text-red-500"
        : "text-gray-500";

  return (
    <div className="space-y-3">
      {/* Two-panel graph */}
      <div className="graph-container overflow-hidden">
        <div className="px-4 pt-3 pb-1">
          <h3 className="graph-title !text-[13px]">
            Perfect Competition
          </h3>
        </div>

        <div className="grid grid-cols-2 gap-0">
          {/* LEFT: Market S&D */}
          <div className="border-r border-gray-100">
            <p className="text-[11px] font-medium text-gray-500 text-center pt-1 pb-0">
              Market
            </p>
            <EconGraph
              curves={[
                {
                  id: "demand",
                  curve: marketDemand,
                  color: "#3B82F6",
                  label: "D",
                },
                {
                  id: "supply",
                  curve: marketSupply,
                  color: "#EF4444",
                  label: "S",
                },
              ]}
              equilibriumPair={["demand", "supply"]}
              equilibriumLabel="E"
              domain={MARKET_DOMAIN}
              xLabel="Q (market)"
              yLabel="Price ($)"
            />
          </div>

          {/* RIGHT: Firm panel — custom SVG */}
          <div>
            <p className="text-[11px] font-medium text-gray-500 text-center pt-1 pb-0">
              Individual Firm
            </p>
            <svg
              viewBox={`0 0 ${FIRM_SVG_W} ${FIRM_SVG_H}`}
              className="w-full h-auto select-none"
            >
              {/* Background */}
              <rect
                x={FIRM_GA.x}
                y={FIRM_GA.y}
                width={FIRM_GA.width}
                height={FIRM_GA.height}
                fill="#FAFAFA"
                rx={4}
              />

              {/* Axes */}
              <GraphAxes
                graphArea={FIRM_GA}
                domain={FIRM_DOMAIN}
                xLabel="Q (firm)"
                yLabel="$/unit"
                tickCount={4}
              />

              {/* Profit/loss rectangle */}
              {showProfit && (
                <rect
                  x={rectTopLeft.x}
                  y={Math.min(rectTopLeft.y, rectBottomLeft.y)}
                  width={rectTopRight.x - rectTopLeft.x}
                  height={Math.abs(rectTopLeft.y - rectBottomLeft.y)}
                  fill={profitFill}
                  opacity={0.1}
                />
              )}

              {/* Horizontal price line: P = MR = D */}
              <line
                x1={pLineLeft.x}
                y1={pLineLeft.y}
                x2={pLineRight.x}
                y2={pLineRight.y}
                stroke="#14B8A6"
                strokeWidth={2}
              />
              <text
                x={pLineRight.x - 2}
                y={pLineRight.y - 5}
                textAnchor="end"
                fontSize={9}
                fontWeight={600}
                fill="#14B8A6"
                fontFamily="DM Sans, system-ui, sans-serif"
              >
                P = MR = D
              </text>

              {/* ATC curve (U-shaped, orange) */}
              {atcPath && (
                <path
                  d={atcPath}
                  fill="none"
                  stroke="#F59E0B"
                  strokeWidth={2}
                />
              )}
              {atcLabelPt && (
                <text
                  x={atcLabelPt.x + 4}
                  y={atcLabelPt.y - 4}
                  fontSize={9}
                  fontWeight={700}
                  fill="#F59E0B"
                  fontFamily="DM Sans, system-ui, sans-serif"
                >
                  ATC
                </text>
              )}

              {/* AVC curve (U-shaped, pink dashed) */}
              {avcPath && (
                <path
                  d={avcPath}
                  fill="none"
                  stroke="#EC4899"
                  strokeWidth={1.5}
                  strokeDasharray="4 3"
                />
              )}
              {avcLabelPt && (
                <text
                  x={avcLabelPt.x + 4}
                  y={avcLabelPt.y + 10}
                  fontSize={9}
                  fontWeight={600}
                  fill="#EC4899"
                  fontFamily="DM Sans, system-ui, sans-serif"
                >
                  AVC
                </text>
              )}

              {/* MC curve (red, U-shaped) */}
              {mcPath && (
                <path
                  d={mcPath}
                  fill="none"
                  stroke="#EF4444"
                  strokeWidth={2.5}
                />
              )}
              {mcLabelPt && (
                <text
                  x={mcLabelPt.x + 4}
                  y={mcLabelPt.y - 4}
                  fontSize={9}
                  fontWeight={700}
                  fill="#EF4444"
                  fontFamily="DM Sans, system-ui, sans-serif"
                >
                  MC
                </text>
              )}

              {/* MC crosses AVC at AVC minimum — small dot */}
              {avcMinVal > 0 && avcMinVal <= FIRM_DOMAIN.yMax && (
                <circle
                  cx={avcMinSvg.x}
                  cy={avcMinSvg.y}
                  r={3}
                  fill="#EC4899"
                  stroke="white"
                  strokeWidth={1.5}
                />
              )}

              {/* MC crosses ATC at ATC minimum — small dot */}
              {atcMinVal > 0 && atcMinVal <= FIRM_DOMAIN.yMax && (
                <circle
                  cx={atcMinSvg.x}
                  cy={atcMinSvg.y}
                  r={3}
                  fill="#F59E0B"
                  stroke="white"
                  strokeWidth={1.5}
                />
              )}

              {/* Dashed lines from firm eq to axes */}
              {firmQuantity > 0.5 && (
                <>
                  <line
                    x1={firmEqSvg.x}
                    y1={firmEqSvg.y}
                    x2={firmQAxis.x}
                    y2={firmQAxis.y}
                    stroke="#6B7280"
                    strokeWidth={1}
                    strokeDasharray="4 3"
                    opacity={0.5}
                  />
                  <line
                    x1={firmEqSvg.x}
                    y1={firmEqSvg.y}
                    x2={firmPAxis.x}
                    y2={firmPAxis.y}
                    stroke="#6B7280"
                    strokeWidth={1}
                    strokeDasharray="4 3"
                    opacity={0.5}
                  />
                  {/* Qf label */}
                  <text
                    x={firmQAxis.x}
                    y={firmQAxis.y + 14}
                    textAnchor="middle"
                    fontSize={9}
                    fontWeight={700}
                    fill="#1F2937"
                    fontFamily="DM Sans, system-ui, sans-serif"
                  >
                    Qf
                  </text>
                  {/* Dot at P=MC */}
                  <circle
                    cx={firmEqSvg.x}
                    cy={firmEqSvg.y}
                    r={4}
                    fill="#14B8A6"
                    stroke="white"
                    strokeWidth={2}
                  />
                </>
              )}
            </svg>
          </div>
        </div>

        {/* Legend */}
        <div className="graph-legend">
          <div className="graph-legend-item">
            <div className="graph-legend-dot" style={{ background: 'var(--graph-demand)' }} />
            D
          </div>
          <div className="graph-legend-item">
            <div className="graph-legend-dot" style={{ background: 'var(--graph-supply)' }} />
            S / MC
          </div>
          <div className="graph-legend-item">
            <div className="graph-legend-dot" style={{ background: '#F59E0B' }} />
            ATC
          </div>
          <div className="graph-legend-item">
            <div className="graph-legend-dot" style={{ background: '#14B8A6' }} />
            P = MR
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="card flex items-center py-3">
        <div className="flex-1 text-center">
          <p className="text-[10px] font-medium uppercase tracking-wider" style={{ color: 'var(--color-ink-faint)' }}>
            Mkt Price
          </p>
          <p className="text-lg font-semibold tabular-nums" style={{ color: 'var(--graph-equilibrium)' }}>
            ${marketPrice.toFixed(0)}
          </p>
        </div>
        <div className="w-px h-8" style={{ background: 'var(--color-border-subtle)' }} />
        <div className="flex-1 text-center">
          <p className="text-[10px] font-medium uppercase tracking-wider" style={{ color: 'var(--color-ink-faint)' }}>
            Firm Q
          </p>
          <p className="text-lg font-semibold tabular-nums" style={{ color: 'var(--graph-equilibrium)' }}>
            {firmQuantity.toFixed(1)}
          </p>
        </div>
        <div className="w-px h-8" style={{ background: 'var(--color-border-subtle)' }} />
        <div className="flex-1 text-center">
          <p className="text-[10px] font-medium uppercase tracking-wider" style={{ color: 'var(--color-ink-faint)' }}>
            {profitLabel}
          </p>
          <p
            className={`text-lg font-semibold tabular-nums ${profitColor}`}
          >
            ${Math.abs(totalProfit).toFixed(0)}
          </p>
        </div>
      </div>

      {/* Shift buttons */}
      <div className="grid grid-cols-2 gap-2">
        <div className="space-y-1.5">
          <p className="text-[10px] font-semibold uppercase tracking-wider pl-1" style={{ color: 'var(--graph-demand)' }}>
            Demand
          </p>
          <div className="flex gap-1.5">
            <button
              onClick={shiftMarketDemandLeft}
              className="flex-1 px-2 py-2 text-xs font-medium rounded-lg transition-all duration-150
                         bg-blue-50 text-blue-700 border border-blue-100 hover:bg-blue-100 hover:border-blue-200 active:scale-[0.98]"
            >
              ← Left
            </button>
            <button
              onClick={shiftMarketDemandRight}
              className="flex-1 px-2 py-2 text-xs font-medium rounded-lg transition-all duration-150
                         bg-blue-50 text-blue-700 border border-blue-100 hover:bg-blue-100 hover:border-blue-200 active:scale-[0.98]"
            >
              Right →
            </button>
          </div>
        </div>
        <div className="space-y-1.5">
          <p className="text-[10px] font-semibold uppercase tracking-wider pl-1" style={{ color: 'var(--graph-supply)' }}>
            Supply
          </p>
          <div className="flex gap-1.5">
            <button
              onClick={shiftMarketSupplyLeft}
              className="flex-1 px-2 py-2 text-xs font-medium rounded-lg transition-all duration-150
                         bg-red-50 text-red-700 border border-red-100 hover:bg-red-100 hover:border-red-200 active:scale-[0.98]"
            >
              ← Left
            </button>
            <button
              onClick={shiftMarketSupplyRight}
              className="flex-1 px-2 py-2 text-xs font-medium rounded-lg transition-all duration-150
                         bg-red-50 text-red-700 border border-red-100 hover:bg-red-100 hover:border-red-200 active:scale-[0.98]"
            >
              Right →
            </button>
          </div>
        </div>
      </div>

      {/* Cost level slider + reset */}
      <div className="card p-4 space-y-3">
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="text-xs font-medium" style={{ color: 'var(--color-ink-muted)' }}>
              Firm Cost Level
            </label>
            <span className="text-xs font-semibold tabular-nums" style={{ color: 'var(--color-ink)' }}>
              {firmAlpha}
            </span>
          </div>
          <input
            type="range"
            min={10}
            max={50}
            value={firmAlpha}
            onChange={(e) => setFirmAlpha(Number(e.target.value))}
            className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gray-900"
          />
        </div>
        <button
          onClick={reset}
          className="btn-primary w-full"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
