"use client";

import { useState, useCallback, useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import GraphSkeleton from "@/components/ui/GraphSkeleton";

const GRAPH_IMPORTS: Record<string, () => Promise<any>> = {
  "supply-demand": () => import("@/components/graphs/SupplyDemandGraph"),
  monopoly: () => import("@/components/graphs/MonopolyGraph"),
  "perfect-competition": () =>
    import("@/components/graphs/PerfectCompetitionGraph"),
  "monopolistic-competition": () =>
    import("@/components/graphs/MonopolisticCompGraph"),
  elasticity: () => import("@/components/graphs/ElasticityGraph"),
  adas: () => import("@/components/graphs/ADASGraph"),
  "fiscal-policy": () => import("@/components/graphs/FiscalPolicyGraph"),
  "monetary-policy": () => import("@/components/graphs/MoneyMarketGraph"),
  "loanable-funds": () => import("@/components/graphs/LoanableFundsGraph"),
  "exchange-rates": () => import("@/components/graphs/ExchangeRateGraph"),
  "international-trade": () =>
    import("@/components/graphs/InternationalTradeGraph"),
  "phillips-curve": () => import("@/components/graphs/PhillipsCurveGraph"),
  ppc: () => import("@/components/graphs/PPCGraph"),
  "business-cycle": () => import("@/components/graphs/BusinessCycleGraph"),
  externality: () => import("@/components/graphs/ExternalityGraph"),
  "production-costs": () =>
    import("@/components/graphs/ProductionCostsGraph"),
  "factor-markets": () => import("@/components/graphs/FactorMarketsGraph"),
};

interface SandboxViewProps {
  graphType: string;
  name: string;
  description: string;
}

export default function SandboxView({
  graphType,
  name,
  description,
}: SandboxViewProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        setIsFullscreen(true);
      });
    } else {
      document.exitFullscreen().then(() => {
        setIsFullscreen(false);
      });
    }
  }, []);

  useEffect(() => {
    const handleChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleChange);
    return () => document.removeEventListener("fullscreenchange", handleChange);
  }, []);

  if (!GRAPH_IMPORTS[graphType]) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-16 text-center">
        <p style={{ color: "var(--color-ink-muted)" }}>
          Unknown graph type.
        </p>
      </div>
    );
  }

  const GraphComponent = dynamic(
    () => GRAPH_IMPORTS[graphType](),
    {
      ssr: false,
      loading: () => <GraphSkeleton />,
    }
  );

  return (
    <div className="max-w-3xl mx-auto px-6 py-10 lg:py-14">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3 min-w-0">
          <Link
            href="/sandbox"
            className="flex items-center gap-1.5 text-xs font-medium shrink-0 transition-colors"
            style={{ color: "var(--color-ink-muted)" }}
          >
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Sandbox
          </Link>
          <div
            className="w-px h-4"
            style={{ background: "var(--color-border-subtle)" }}
          />
          <h1
            className="text-lg font-bold tracking-tight truncate"
            style={{ color: "var(--color-ink)" }}
          >
            {name}
          </h1>
        </div>
        <button
          onClick={toggleFullscreen}
          className="p-2 rounded-lg transition-colors shrink-0"
          style={{ color: "var(--color-ink-muted)" }}
          title={isFullscreen ? "Exit fullscreen" : "Fullscreen"}
        >
          {isFullscreen ? (
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 9L4 4m0 0v5m0-5h5m6 6l5 5m0 0v-5m0 5h-5M9 15l-5 5m0 0h5m-5 0v-5m11-6l5-5m0 0h-5m5 0v5"
              />
            </svg>
          ) : (
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Graph */}
      <div className="mb-6">
        <GraphComponent />
      </div>

      {/* Info card */}
      <div
        className="rounded-xl p-5"
        style={{
          background: "var(--color-surface)",
          border: "1px solid var(--color-border-subtle)",
        }}
      >
        <p
          className="text-xs leading-relaxed mb-3"
          style={{ color: "var(--color-ink-light)" }}
        >
          {description}
        </p>
        <div
          className="pt-3 flex flex-wrap gap-x-4 gap-y-1"
          style={{ borderTop: "1px solid var(--color-border-subtle)" }}
        >
          <span
            className="text-[10px] font-medium"
            style={{ color: "var(--color-ink-faint)" }}
          >
            Drag curves to shift them
          </span>
          <span
            className="text-[10px] font-medium"
            style={{ color: "var(--color-ink-faint)" }}
          >
            Use buttons for precise control
          </span>
          <span
            className="text-[10px] font-medium"
            style={{ color: "var(--color-ink-faint)" }}
          >
            F11 for fullscreen
          </span>
        </div>
      </div>
    </div>
  );
}
