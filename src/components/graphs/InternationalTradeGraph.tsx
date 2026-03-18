"use client";

import EconGraph from "./EconGraph";
import FullscreenWrapper from "@/components/ui/FullscreenWrapper";
import { useInternationalTradeStore } from "@/lib/stores/international-trade-store";
import { dataToSvg, quantityAt, type GraphArea, type Domain } from "@/lib/graph-math";

const GA: GraphArea = { x: 70, y: 20, width: 500, height: 360 };
const DOMAIN: Domain = { xMin: 0, xMax: 100, yMin: 0, yMax: 100 };

export default function InternationalTradeGraph() {
  const {
    domesticDemand,
    domesticSupply,
    worldPrice,
    tariff,
    effectivePrice,
    qDemanded,
    qSupplied,
    imports,
    tariffRevenue,
    setWorldPrice,
    setTariff,
    reset,
  } = useInternationalTradeStore();

  // SVG coordinates for the world price line
  const wpLeft = dataToSvg({ x: DOMAIN.xMin, y: worldPrice }, GA, DOMAIN);
  const wpRight = dataToSvg({ x: DOMAIN.xMax, y: worldPrice }, GA, DOMAIN);

  // SVG coordinates for the effective price line (world price + tariff)
  const epLeft = dataToSvg({ x: DOMAIN.xMin, y: effectivePrice }, GA, DOMAIN);
  const epRight = dataToSvg({ x: DOMAIN.xMax, y: effectivePrice }, GA, DOMAIN);

  // Import shading: rectangle between qSupplied and qDemanded at effective price
  const importLeft = dataToSvg({ x: qSupplied, y: effectivePrice }, GA, DOMAIN);
  const importRight = dataToSvg({ x: qDemanded, y: effectivePrice }, GA, DOMAIN);
  const importBottom = dataToSvg({ x: qSupplied, y: 0 }, GA, DOMAIN);

  // DWL triangles (only when tariff > 0)
  const showDWL = tariff > 0 && imports > 0;
  const qDemandedFree = Math.max(0, quantityAt(domesticDemand, worldPrice));
  const qSuppliedFree = Math.max(0, quantityAt(domesticSupply, worldPrice));

  // Production-side DWL triangle: (qSuppliedFree, worldPrice) -> (qSupplied, effectivePrice) -> (qSupplied, worldPrice)
  const dwlProd1 = dataToSvg({ x: qSuppliedFree, y: worldPrice }, GA, DOMAIN);
  const dwlProd2 = dataToSvg({ x: qSupplied, y: effectivePrice }, GA, DOMAIN);
  const dwlProd3 = dataToSvg({ x: qSupplied, y: worldPrice }, GA, DOMAIN);
  const dwlProdPoints = `${dwlProd1.x},${dwlProd1.y} ${dwlProd2.x},${dwlProd2.y} ${dwlProd3.x},${dwlProd3.y}`;

  // Consumption-side DWL triangle: (qDemanded, effectivePrice) -> (qDemandedFree, worldPrice) -> (qDemanded, worldPrice)
  const dwlCons1 = dataToSvg({ x: qDemanded, y: effectivePrice }, GA, DOMAIN);
  const dwlCons2 = dataToSvg({ x: qDemandedFree, y: worldPrice }, GA, DOMAIN);
  const dwlCons3 = dataToSvg({ x: qDemanded, y: worldPrice }, GA, DOMAIN);
  const dwlConsPoints = `${dwlCons1.x},${dwlCons1.y} ${dwlCons2.x},${dwlCons2.y} ${dwlCons3.x},${dwlCons3.y}`;

  // Tariff revenue rectangle: between qSupplied and qDemanded, from worldPrice to effectivePrice
  const trTopLeft = dataToSvg({ x: qSupplied, y: effectivePrice }, GA, DOMAIN);
  const trTopRight = dataToSvg({ x: qDemanded, y: effectivePrice }, GA, DOMAIN);
  const trBotRight = dataToSvg({ x: qDemanded, y: worldPrice }, GA, DOMAIN);
  const trBotLeft = dataToSvg({ x: qSupplied, y: worldPrice }, GA, DOMAIN);
  const tariffRectPoints = `${trTopLeft.x},${trTopLeft.y} ${trTopRight.x},${trTopRight.y} ${trBotRight.x},${trBotRight.y} ${trBotLeft.x},${trBotLeft.y}`;

  // Consumer surplus triangle: from demand intercept on y-axis, to (0, effectivePrice), to (qDemanded, effectivePrice)
  const csTop = dataToSvg({ x: 0, y: domesticDemand.intercept }, GA, DOMAIN);
  const csLeft = dataToSvg({ x: 0, y: effectivePrice }, GA, DOMAIN);
  const csRight = dataToSvg({ x: qDemanded, y: effectivePrice }, GA, DOMAIN);
  const csPoints = `${csTop.x},${csTop.y} ${csLeft.x},${csLeft.y} ${csRight.x},${csRight.y}`;

  // Producer surplus triangle: from supply intercept on y-axis, to (0, effectivePrice), to (qSupplied, effectivePrice)
  const psBot = dataToSvg({ x: 0, y: domesticSupply.intercept }, GA, DOMAIN);
  const psLeft = dataToSvg({ x: 0, y: effectivePrice }, GA, DOMAIN);
  const psRight = dataToSvg({ x: qSupplied, y: effectivePrice }, GA, DOMAIN);
  const psPoints = `${psBot.x},${psBot.y} ${psLeft.x},${psLeft.y} ${psRight.x},${psRight.y}`;

  return (
    <FullscreenWrapper title="International Trade">
    <div className="space-y-3">
      <div className="graph-container overflow-hidden">
        <div className="px-4 pt-3 pb-1">
          <h3 className="graph-title !text-[13px]">
            International Trade
          </h3>
        </div>
        <div className="relative">
          <EconGraph
            curves={[
              { id: "demand", curve: domesticDemand, color: "#3B82F6", label: "D" },
              { id: "supply", curve: domesticSupply, color: "#EF4444", label: "S" },
            ]}
            equilibriumPair={["demand", "supply"]}
            equilibriumLabel="E"
            domain={DOMAIN}
            xLabel="Quantity"
            yLabel="Price ($)"
          />
          {/* Overlay: world price, effective price, imports shading, DWL */}
          <svg viewBox="0 0 600 450" className="absolute inset-0 w-full h-full pointer-events-none">
            {/* Consumer surplus triangle */}
            <polygon points={csPoints} fill="#3B82F6" opacity={0.15} />
            <text
              x={(csTop.x + csLeft.x + csRight.x) / 3}
              y={(csTop.y + csLeft.y + csRight.y) / 3 + 3}
              textAnchor="middle"
              fontSize={9}
              fontWeight={600}
              fill="#3B82F6"
              opacity={0.7}
              fontFamily="DM Sans, system-ui, sans-serif"
            >
              CS
            </text>

            {/* Producer surplus triangle */}
            {qSupplied > 0.5 && (
              <>
                <polygon points={psPoints} fill="#EF4444" opacity={0.15} />
                <text
                  x={(psBot.x + psLeft.x + psRight.x) / 3}
                  y={(psBot.y + psLeft.y + psRight.y) / 3 + 3}
                  textAnchor="middle"
                  fontSize={9}
                  fontWeight={600}
                  fill="#EF4444"
                  opacity={0.7}
                  fontFamily="DM Sans, system-ui, sans-serif"
                >
                  PS
                </text>
              </>
            )}

            {/* Tariff revenue rectangle */}
            {showDWL && (
              <>
                <polygon
                  points={tariffRectPoints}
                  fill="#10B981"
                  opacity={0.2}
                />
                <text
                  x={(trTopLeft.x + trTopRight.x) / 2}
                  y={(trTopLeft.y + trBotLeft.y) / 2 + 3}
                  textAnchor="middle"
                  fontSize={9}
                  fontWeight={600}
                  fill="#10B981"
                  opacity={0.8}
                  fontFamily="DM Sans, system-ui, sans-serif"
                >
                  Gov. Rev.
                </text>
              </>
            )}

            {/* DWL triangles */}
            {showDWL && (
              <>
                <polygon points={dwlProdPoints} fill="#F59E0B" opacity={0.22} />
                <text
                  x={(dwlProd1.x + dwlProd2.x + dwlProd3.x) / 3}
                  y={(dwlProd1.y + dwlProd2.y + dwlProd3.y) / 3 + 3}
                  textAnchor="middle"
                  fontSize={8}
                  fontWeight={600}
                  fill="#F59E0B"
                  opacity={0.8}
                  fontFamily="DM Sans, system-ui, sans-serif"
                >
                  DWL
                </text>
                <polygon points={dwlConsPoints} fill="#F59E0B" opacity={0.22} />
                <text
                  x={(dwlCons1.x + dwlCons2.x + dwlCons3.x) / 3}
                  y={(dwlCons1.y + dwlCons2.y + dwlCons3.y) / 3 + 3}
                  textAnchor="middle"
                  fontSize={8}
                  fontWeight={600}
                  fill="#F59E0B"
                  opacity={0.8}
                  fontFamily="DM Sans, system-ui, sans-serif"
                >
                  DWL
                </text>
              </>
            )}

            {/* World price line (dashed, teal) */}
            <line
              x1={wpLeft.x} y1={wpLeft.y}
              x2={wpRight.x} y2={wpRight.y}
              stroke="#14B8A6" strokeWidth={2} strokeDasharray="8 4"
            />
            <text
              x={wpRight.x - 4} y={wpLeft.y - 6}
              textAnchor="end" fontSize={10} fontWeight={600}
              fill="#14B8A6" fontFamily="DM Sans, system-ui, sans-serif"
            >
              Pw
            </text>

            {/* Effective price line (solid, above world price when tariff > 0) */}
            {tariff > 0 && (
              <>
                <line
                  x1={epLeft.x} y1={epLeft.y}
                  x2={epRight.x} y2={epRight.y}
                  stroke="#8B5CF6" strokeWidth={2}
                />
                <text
                  x={epRight.x - 4} y={epLeft.y - 6}
                  textAnchor="end" fontSize={10} fontWeight={600}
                  fill="#8B5CF6" fontFamily="DM Sans, system-ui, sans-serif"
                >
                  Pw + T
                </text>
              </>
            )}

            {/* Imports bracket */}
            {imports > 0 && (
              <>
                <line
                  x1={importLeft.x} y1={importLeft.y + 8}
                  x2={importRight.x} y2={importRight.y + 8}
                  stroke="#14B8A6" strokeWidth={1.5}
                />
                <line
                  x1={importLeft.x} y1={importLeft.y + 4}
                  x2={importLeft.x} y2={importLeft.y + 12}
                  stroke="#14B8A6" strokeWidth={1.5}
                />
                <line
                  x1={importRight.x} y1={importRight.y + 4}
                  x2={importRight.x} y2={importRight.y + 12}
                  stroke="#14B8A6" strokeWidth={1.5}
                />
                <text
                  x={(importLeft.x + importRight.x) / 2}
                  y={importLeft.y + 22}
                  textAnchor="middle" fontSize={9} fontWeight={600}
                  fill="#14B8A6" fontFamily="DM Sans, system-ui, sans-serif"
                >
                  Imports
                </text>
              </>
            )}
          </svg>
        </div>

        <p className="text-[10px] text-center pb-1 -mt-0.5" style={{ color: 'var(--graph-label)' }}>
          Adjust world price and tariff using the sliders below
        </p>

        {/* Legend */}
        <div className="graph-legend">
          <div className="graph-legend-item">
            <div className="graph-legend-dot" style={{ background: 'var(--graph-demand)' }} />
            Demand
          </div>
          <div className="graph-legend-item">
            <div className="graph-legend-dot" style={{ background: 'var(--graph-supply)' }} />
            Supply
          </div>
          <div className="graph-legend-item">
            <div className="graph-legend-dot" style={{ background: '#14B8A6' }} />
            World Price
          </div>
          <div className="graph-legend-item">
            <div className="graph-legend-dot" style={{ background: '#3B82F6', borderRadius: 2 }} />
            CS
          </div>
          <div className="graph-legend-item">
            <div className="graph-legend-dot" style={{ background: '#EF4444', borderRadius: 2 }} />
            PS
          </div>
          {showDWL && (
            <>
              <div className="graph-legend-item">
                <div className="graph-legend-dot" style={{ background: '#10B981', borderRadius: 2 }} />
                Gov. Rev.
              </div>
              <div className="graph-legend-item">
                <div className="graph-legend-dot" style={{ background: '#F59E0B', borderRadius: 2 }} />
                DWL
              </div>
            </>
          )}
        </div>
      </div>

      {/* Stats strip */}
      <div className="card flex items-center py-3">
        <div className="flex-1 text-center">
          <p className="text-[10px] font-medium uppercase tracking-wider" style={{ color: 'var(--color-ink-faint)' }}>Domestic Price</p>
          <p className="text-lg font-semibold tabular-nums" style={{ color: 'var(--graph-equilibrium)' }}>${effectivePrice.toFixed(0)}</p>
        </div>
        <div className="w-px h-8" style={{ background: 'var(--color-border-subtle)' }} />
        <div className="flex-1 text-center">
          <p className="text-[10px] font-medium uppercase tracking-wider" style={{ color: 'var(--color-ink-faint)' }}>Imports</p>
          <p className="text-lg font-semibold tabular-nums" style={{ color: 'var(--color-ink)' }}>{imports.toFixed(1)}</p>
        </div>
        <div className="w-px h-8" style={{ background: 'var(--color-border-subtle)' }} />
        <div className="flex-1 text-center">
          <p className="text-[10px] font-medium uppercase tracking-wider" style={{ color: 'var(--color-ink-faint)' }}>Tariff Rev.</p>
          <p className="text-lg font-semibold tabular-nums" style={{ color: 'var(--color-ink)' }}>${tariffRevenue.toFixed(0)}</p>
        </div>
      </div>

      {/* World Price slider */}
      <div className="card p-4 space-y-3">
        <div className="flex items-center justify-between">
          <p className="text-[10px] font-medium uppercase tracking-wider" style={{ color: 'var(--color-ink-muted)' }}>
            World Price
          </p>
          <p className="text-xs font-semibold tabular-nums" style={{ color: 'var(--color-ink)' }}>
            ${worldPrice.toFixed(0)}
          </p>
        </div>
        <input
          type="range"
          min={20}
          max={70}
          step={1}
          value={worldPrice}
          onChange={(e) => setWorldPrice(Number(e.target.value))}
          className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gray-900"
        />
        <div>
          <div className="flex items-center justify-between">
            <p className="text-[10px] font-medium uppercase tracking-wider" style={{ color: 'var(--color-ink-muted)' }}>
              Tariff
            </p>
            <p className="text-xs font-semibold tabular-nums" style={{ color: 'var(--color-ink)' }}>
              ${tariff.toFixed(0)}
            </p>
          </div>
          <input
            type="range"
            min={0}
            max={20}
            step={1}
            value={tariff}
            onChange={(e) => setTariff(Number(e.target.value))}
            className="w-full"
          />
        </div>

        {/* Reset button */}
        <button
          onClick={reset}
          className="btn-primary w-full"
        >
          Reset
        </button>
      </div>
    </div>
    </FullscreenWrapper>
  );
}
