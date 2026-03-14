"use client";

import { useCallback } from "react";
import EconGraph from "./EconGraph";
import {
  useLoanableFundsStore,
  lfShocks,
} from "@/lib/stores/loanable-funds-store";

const DOMAIN = { xMin: 0, xMax: 100, yMin: 0, yMax: 12 };

export default function LoanableFundsGraph() {
  const {
    supply,
    demand,
    equilibrium,
    showLabels,
    activeShock,
    shiftSupply,
    shiftDemand,
    shiftSupplyRight,
    shiftSupplyLeft,
    shiftDemandRight,
    shiftDemandLeft,
    applyShock,
    toggleLabels,
    reset,
  } = useLoanableFundsStore();

  const handleSupplyShift = useCallback(
    (dq: number) => shiftSupply(dq),
    [shiftSupply]
  );
  const handleDemandShift = useCallback(
    (dq: number) => shiftDemand(dq),
    [shiftDemand]
  );

  return (
    <div className="graph-container">
      <div className="p-1">
        <EconGraph
          curves={[
            {
              id: "supply",
              curve: supply,
              color: "var(--graph-supply)",
              label: "S (Saving)",
              draggable: true,
              onShift: handleSupplyShift,
            },
            {
              id: "demand",
              curve: demand,
              color: "var(--graph-demand)",
              label: "D (Investment)",
              draggable: true,
              onShift: handleDemandShift,
            },
          ]}
          xLabel="Quantity of Loanable Funds"
          yLabel="Real Interest Rate (%)"
          domain={DOMAIN}
          showLabels={showLabels}
          showEquilibrium
          equilibriumPair={["demand", "supply"]}
          equilibriumLabel="r*"
        />
      </div>

      {/* Live readout */}
      {equilibrium && (
        <div
          className="mx-4 mb-3 px-3 py-2.5 rounded-lg text-[12px] leading-relaxed"
          style={{
            background: "var(--color-surface-sunken)",
            color: "var(--color-ink-light)",
          }}
        >
          <div className="flex justify-between">
            <span>
              Real interest rate:{" "}
              <strong style={{ color: "var(--color-ink)" }}>
                {equilibrium.price.toFixed(1)}%
              </strong>
            </span>
            <span>
              Qty:{" "}
              <strong style={{ color: "var(--color-ink)" }}>
                {equilibrium.quantity.toFixed(0)}
              </strong>
            </span>
          </div>
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
            Shift Curves
          </p>
          <div className="grid grid-cols-2 gap-2">
            <div className="space-y-1.5">
              <p
                className="text-[11px] font-medium"
                style={{ color: "var(--graph-supply)" }}
              >
                Supply (Saving)
              </p>
              <div className="flex gap-1.5">
                <button
                  onClick={shiftSupplyLeft}
                  className="flex-1 px-2 py-1.5 rounded-md text-[11px] font-medium transition-all active:scale-95"
                  style={{
                    border: "1px solid var(--color-border-subtle)",
                    color: "var(--color-ink-light)",
                  }}
                >
                  ← Left
                </button>
                <button
                  onClick={shiftSupplyRight}
                  className="flex-1 px-2 py-1.5 rounded-md text-[11px] font-medium transition-all active:scale-95"
                  style={{
                    border: "1px solid var(--color-border-subtle)",
                    color: "var(--color-ink-light)",
                  }}
                >
                  Right →
                </button>
              </div>
            </div>
            <div className="space-y-1.5">
              <p
                className="text-[11px] font-medium"
                style={{ color: "var(--graph-demand)" }}
              >
                Demand (Investment)
              </p>
              <div className="flex gap-1.5">
                <button
                  onClick={shiftDemandLeft}
                  className="flex-1 px-2 py-1.5 rounded-md text-[11px] font-medium transition-all active:scale-95"
                  style={{
                    border: "1px solid var(--color-border-subtle)",
                    color: "var(--color-ink-light)",
                  }}
                >
                  ← Left
                </button>
                <button
                  onClick={shiftDemandRight}
                  className="flex-1 px-2 py-1.5 rounded-md text-[11px] font-medium transition-all active:scale-95"
                  style={{
                    border: "1px solid var(--color-border-subtle)",
                    color: "var(--color-ink-light)",
                  }}
                >
                  Right →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Toggle row */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleLabels}
            className="text-[11px] font-medium px-2.5 py-1 rounded-md transition-all"
            style={{
              border: "1px solid var(--color-border-subtle)",
              color: showLabels ? "var(--color-ink)" : "var(--color-ink-faint)",
              background: showLabels ? "var(--color-surface-sunken)" : "transparent",
            }}
          >
            Labels
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

        {/* Economic scenarios */}
        <div>
          <p
            className="text-[11px] font-semibold uppercase tracking-wider mb-2"
            style={{ color: "var(--color-ink-faint)" }}
          >
            Economic Scenarios
          </p>
          <div className="grid grid-cols-2 gap-1.5">
            {lfShocks.map((shock) => (
              <button
                key={shock.name}
                onClick={() => applyShock(shock)}
                className="text-left px-2.5 py-2 rounded-lg text-[11px] font-medium transition-all active:scale-[0.97]"
                style={{
                  border: "1px solid var(--color-border-subtle)",
                  color:
                    activeShock?.name === shock.name
                      ? "var(--color-ink)"
                      : "var(--color-ink-muted)",
                  background:
                    activeShock?.name === shock.name
                      ? "var(--color-surface-sunken)"
                      : "transparent",
                }}
              >
                {shock.name}
              </button>
            ))}
          </div>
          {activeShock && (
            <p
              className="text-[11px] mt-2 leading-relaxed"
              style={{ color: "var(--color-ink-muted)" }}
            >
              {activeShock.description}
            </p>
          )}
        </div>

        {/* Legend */}
        <div className="flex items-center gap-4 pt-1">
          <div className="flex items-center gap-1.5">
            <span
              className="w-3 h-0.5 rounded-full"
              style={{ background: "var(--graph-supply)" }}
            />
            <span
              className="text-[10px]"
              style={{ color: "var(--color-ink-muted)" }}
            >
              Supply (National Saving)
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <span
              className="w-3 h-0.5 rounded-full"
              style={{ background: "var(--graph-demand)" }}
            />
            <span
              className="text-[10px]"
              style={{ color: "var(--color-ink-muted)" }}
            >
              Demand (Investment)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
