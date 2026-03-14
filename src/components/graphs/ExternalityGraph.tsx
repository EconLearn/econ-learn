"use client";

import { useMemo } from "react";
import EconGraph, { GRAPH_AREA } from "./EconGraph";
import EquilibriumMarker from "./EquilibriumMarker";
import { useExternalityStore } from "@/lib/stores/externality-store";
import { dataToSvg, type Domain } from "@/lib/graph-math";

const domain: Domain = { xMin: 0, xMax: 100, yMin: 0, yMax: 100 };

export default function ExternalityGraph() {
  const {
    demand,
    supply,
    externalCost,
    externalBenefit,
    mode,
    showTax,
    socialCost,
    socialBenefit,
    marketEquilibrium,
    socialEquilibrium,
    deadweightLoss,
    setMode,
    setExternalCost,
    setExternalBenefit,
    toggleTax,
    reset,
  } = useExternalityStore();

  // When the tax/subsidy is active, the private curve shifts to match the social curve
  const effectiveSupply = showTax && mode === "negative" ? socialCost : supply;
  const effectiveDemand = showTax && mode === "positive" ? socialBenefit : demand;

  // The equilibrium shown on the graph depends on whether the tax is active
  const displayEquilibrium = showTax ? socialEquilibrium : marketEquilibrium;

  // DWL polygon: triangle between market Q and social Q
  const dwlPolygon = useMemo(() => {
    if (showTax || !marketEquilibrium || !socialEquilibrium) return null;

    if (mode === "negative") {
      // Triangle vertices: social optimum on D, market eq on D, and market eq on MSC
      // The DWL triangle is bounded by Demand and Social Cost between Qoptimal and Qmarket
      const qOpt = socialEquilibrium.quantity;
      const qMkt = marketEquilibrium.quantity;
      if (Math.abs(qOpt - qMkt) < 0.5) return null;

      // Three corners of the DWL triangle:
      // 1. Where D and MSC intersect (social optimum point)
      const p1 = dataToSvg(
        { x: qOpt, y: socialEquilibrium.price },
        GRAPH_AREA,
        domain
      );
      // 2. Market equilibrium (where D and MPC intersect)
      const p2 = dataToSvg(
        { x: qMkt, y: marketEquilibrium.price },
        GRAPH_AREA,
        domain
      );
      // 3. Point on MSC at market quantity
      const mscAtQmkt = socialCost.intercept + socialCost.slope * qMkt;
      const p3 = dataToSvg({ x: qMkt, y: mscAtQmkt }, GRAPH_AREA, domain);

      return `${p1.x},${p1.y} ${p2.x},${p2.y} ${p3.x},${p3.y}`;
    } else {
      // Positive externality: triangle between S and MSB from Qmarket to Qoptimal
      const qMkt = marketEquilibrium.quantity;
      const qOpt = socialEquilibrium.quantity;
      if (Math.abs(qOpt - qMkt) < 0.5) return null;

      // Three corners:
      // 1. Market equilibrium (where D and S intersect)
      const p1 = dataToSvg(
        { x: qMkt, y: marketEquilibrium.price },
        GRAPH_AREA,
        domain
      );
      // 2. Social optimum (where MSB and S intersect)
      const p2 = dataToSvg(
        { x: qOpt, y: socialEquilibrium.price },
        GRAPH_AREA,
        domain
      );
      // 3. Point on MSB at market quantity
      const msbAtQmkt = socialBenefit.intercept + socialBenefit.slope * qMkt;
      const p3 = dataToSvg({ x: qMkt, y: msbAtQmkt }, GRAPH_AREA, domain);

      return `${p1.x},${p1.y} ${p2.x},${p2.y} ${p3.x},${p3.y}`;
    }
  }, [
    showTax,
    mode,
    marketEquilibrium,
    socialEquilibrium,
    socialCost,
    socialBenefit,
  ]);

  // Build curves array
  const curves = useMemo(() => {
    const result = [];

    // Private demand (blue) — or effective demand if subsidy active
    result.push({
      id: "demand",
      curve: effectiveDemand,
      color: "#3B82F6",
      label: showTax && mode === "positive" ? "D + Subsidy" : "D (MPB)",
      draggable: false,
      dashed: false,
    });

    // Private supply (red) — or effective supply if tax active
    result.push({
      id: "supply",
      curve: effectiveSupply,
      color: "#EF4444",
      label: showTax && mode === "negative" ? "S + Tax" : "S (MPC)",
      draggable: false,
      dashed: false,
    });

    // Social curve (dashed)
    if (mode === "negative") {
      // Show social cost curve (orange, dashed) above supply
      // Don't show if tax is active (supply already matches it)
      if (!showTax) {
        result.push({
          id: "social-cost",
          curve: socialCost,
          color: "#F97316",
          label: "MSC",
          draggable: false,
          dashed: true,
        });
      }
    } else {
      // Show social benefit curve (green, dashed) above demand
      // Don't show if subsidy is active (demand already matches it)
      if (!showTax) {
        result.push({
          id: "social-benefit",
          curve: socialBenefit,
          color: "#22C55E",
          label: "MSB",
          draggable: false,
          dashed: true,
        });
      }
    }

    return result;
  }, [
    effectiveDemand,
    effectiveSupply,
    mode,
    showTax,
    socialCost,
    socialBenefit,
  ]);

  // Determine the equilibrium pair for the EconGraph built-in marker
  const equilibriumPair: [string, string] = ["demand", "supply"];

  const externalValue =
    mode === "negative" ? externalCost : externalBenefit;
  const sliderLabel =
    mode === "negative" ? "External Cost" : "External Benefit";
  const correctionLabel =
    mode === "negative" ? "Pigouvian Tax" : "Pigouvian Subsidy";

  // Display prices
  const marketPrice = marketEquilibrium
    ? `$${marketEquilibrium.price.toFixed(0)}`
    : "—";
  const socialPrice = socialEquilibrium
    ? `$${socialEquilibrium.price.toFixed(0)}`
    : "—";
  const dwlDisplay = showTax ? "$0" : `$${deadweightLoss.toFixed(0)}`;

  return (
    <div className="space-y-3">
      {/* Graph container */}
      <div className="graph-container overflow-hidden">
        <div className="px-4 pt-3 pb-1">
          <div className="flex items-center justify-between">
            <h3 className="graph-title !text-[13px]">Externalities</h3>
            <div className="flex gap-1.5">
              <button
                onClick={() => setMode("negative")}
                className={`px-2 py-0.5 text-[10px] font-medium rounded transition-colors ${
                  mode === "negative"
                    ? "bg-orange-100 text-orange-700"
                    : "bg-gray-100 text-gray-400 hover:bg-gray-200"
                }`}
              >
                Negative
              </button>
              <button
                onClick={() => setMode("positive")}
                className={`px-2 py-0.5 text-[10px] font-medium rounded transition-colors ${
                  mode === "positive"
                    ? "bg-emerald-100 text-emerald-700"
                    : "bg-gray-100 text-gray-400 hover:bg-gray-200"
                }`}
              >
                Positive
              </button>
            </div>
          </div>
        </div>

        <EconGraph
          curves={curves}
          equilibriumPair={equilibriumPair}
          equilibriumLabel={showTax ? "E*" : "E"}
          showLabels={true}
          domain={domain}
        >
          {/* DWL triangle */}
          {dwlPolygon && (
            <polygon
              points={dwlPolygon}
              fill="#F59E0B"
              opacity={0.18}
              stroke="#F59E0B"
              strokeWidth={1}
              strokeOpacity={0.3}
            />
          )}

          {/* Show social equilibrium marker when tax is off */}
          {!showTax && socialEquilibrium && (
            <EquilibriumMarker
              equilibrium={socialEquilibrium}
              graphArea={GRAPH_AREA}
              domain={domain}
              label="E*"
              color={mode === "negative" ? "#F97316" : "#22C55E"}
              showDashedLines={true}
              showValues={false}
            />
          )}
        </EconGraph>

        <p className="text-[10px] text-center pb-1 -mt-0.5" style={{ color: 'var(--graph-label)' }}>
          {mode === "negative"
            ? "Orange dashed curve = Social Cost (MPC + external cost)"
            : "Green dashed curve = Social Benefit (MPB + external benefit)"}
        </p>

        {/* Legend */}
        <div className="graph-legend">
          <div className="graph-legend-item">
            <div className="graph-legend-dot" style={{ background: 'var(--graph-demand)' }} />
            D (MPB)
          </div>
          <div className="graph-legend-item">
            <div className="graph-legend-dot" style={{ background: 'var(--graph-supply)' }} />
            S (MPC)
          </div>
          <div className="graph-legend-item">
            <div className="graph-legend-dot" style={{ background: mode === "negative" ? '#F97316' : '#22C55E' }} />
            {mode === "negative" ? "MSC" : "MSB"}
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="card flex items-center py-3">
        <div className="flex-1 text-center">
          <p className="text-[10px] font-medium uppercase tracking-wider" style={{ color: 'var(--color-ink-faint)' }}>Market P</p>
          <p className="text-lg font-semibold tabular-nums" style={{ color: 'var(--graph-equilibrium)' }}>
            {marketPrice}
          </p>
        </div>
        <div className="w-px h-8" style={{ background: 'var(--color-border-subtle)' }} />
        <div className="flex-1 text-center">
          <p className="text-[10px] font-medium uppercase tracking-wider" style={{ color: 'var(--color-ink-faint)' }}>Optimal P</p>
          <p className="text-lg font-semibold tabular-nums" style={{ color: 'var(--graph-equilibrium)' }}>
            {socialPrice}
          </p>
        </div>
        <div className="w-px h-8" style={{ background: 'var(--color-border-subtle)' }} />
        <div className="flex-1 text-center">
          <p className="text-[10px] font-medium uppercase tracking-wider" style={{ color: 'var(--color-ink-faint)' }}>DWL</p>
          <p
            className="text-lg font-semibold tabular-nums"
            style={{ color: showTax ? 'var(--graph-equilibrium)' : '#F59E0B' }}
          >
            {dwlDisplay}
          </p>
        </div>
      </div>

      {/* Controls */}
      <div className="card p-4 space-y-3">
        {/* External cost/benefit slider */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label
              className="text-xs font-medium"
              style={{ color: mode === "negative" ? '#F97316' : 'var(--graph-equilibrium)' }}
            >
              {sliderLabel}
            </label>
            <span className="text-xs font-semibold tabular-nums" style={{ color: 'var(--color-ink)' }}>
              ${externalValue.toFixed(0)}
            </span>
          </div>
          <input
            type="range"
            min={0}
            max={40}
            step={1}
            value={externalValue}
            onChange={(e) => {
              const val = Number(e.target.value);
              if (mode === "negative") {
                setExternalCost(val);
              } else {
                setExternalBenefit(val);
              }
            }}
            className="w-full"
          />
          <div className="flex justify-between text-[10px] text-gray-400 mt-0.5">
            <span>No externality</span>
            <span>Large externality</span>
          </div>
        </div>

        {/* Tax/subsidy toggle */}
        <button
          onClick={toggleTax}
          className={`w-full px-3 py-2 text-xs font-medium rounded-md transition-colors border ${
            showTax
              ? "bg-slate-900 text-white border-slate-900"
              : "bg-white text-gray-500 border-gray-200 hover:bg-gray-50"
          }`}
        >
          {showTax ? `${correctionLabel} Applied` : `Apply ${correctionLabel}`}
        </button>

        {/* Reset */}
        <button
          onClick={reset}
          className="btn-primary w-full"
        >
          Reset
        </button>
      </div>

      {/* Explanation note */}
      <div className="card p-4">
        <p className="text-xs font-semibold mb-2" style={{ color: 'var(--color-ink)' }}>
          {mode === "negative" ? "Overproduction" : "Underproduction"}
        </p>
        <p className="text-xs leading-relaxed" style={{ color: 'var(--color-ink-muted)' }}>
          {mode === "negative"
            ? "The market produces too much because firms ignore pollution costs. The yellow triangle shows the deadweight loss from overproduction. A Pigouvian tax shifts supply up to match social cost, eliminating the DWL."
            : "The market produces too little because buyers ignore spillover benefits. The yellow triangle shows the deadweight loss from underproduction. A Pigouvian subsidy shifts demand up to match social benefit, eliminating the DWL."}
        </p>
      </div>
    </div>
  );
}
