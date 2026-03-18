import type { Metadata } from "next";
import SandboxView from "./SandboxView";

const GRAPH_META: Record<string, { name: string; description: string }> = {
  "supply-demand": {
    name: "Supply and Demand",
    description: "Shift curves, set price floors and ceilings, and apply economic shocks.",
  },
  monopoly: {
    name: "Monopoly",
    description: "Single-firm pricing, MR below demand, and deadweight loss.",
  },
  "perfect-competition": {
    name: "Perfect Competition",
    description: "Price-taking firms, profit maximization, and long-run equilibrium.",
  },
  "monopolistic-competition": {
    name: "Monopolistic Competition",
    description: "Product differentiation, short-run profits, and long-run zero-profit.",
  },
  elasticity: {
    name: "Elasticity",
    description: "Price elasticity of demand, total revenue, and elastic vs. inelastic ranges.",
  },
  adas: {
    name: "AD/AS Model",
    description: "Aggregate demand, short-run and long-run aggregate supply, and output gaps.",
  },
  "fiscal-policy": {
    name: "Fiscal Policy",
    description: "Government spending, taxation, multipliers, and budget effects.",
  },
  "monetary-policy": {
    name: "Money Market",
    description: "Money supply, money demand, and interest rate determination.",
  },
  "loanable-funds": {
    name: "Loanable Funds",
    description: "Saving, investment, real interest rates, and crowding out.",
  },
  "exchange-rates": {
    name: "Exchange Rates",
    description: "Foreign exchange markets, currency appreciation, and depreciation.",
  },
  "international-trade": {
    name: "International Trade",
    description: "Comparative advantage, tariffs, quotas, and welfare effects.",
  },
  "phillips-curve": {
    name: "Phillips Curve",
    description: "Short-run tradeoff between inflation and unemployment.",
  },
  ppc: {
    name: "Production Possibilities",
    description: "Opportunity cost, efficiency, and economic growth on the PPC.",
  },
  "business-cycle": {
    name: "Business Cycle",
    description: "Expansions, peaks, contractions, troughs, and economic indicators.",
  },
  externality: {
    name: "Externalities",
    description: "Market inefficiency from positive and negative externalities.",
  },
  "production-costs": {
    name: "Production Costs",
    description: "Short-run cost curves, marginal cost, ATC, and AVC.",
  },
  "factor-markets": {
    name: "Factor Markets",
    description: "Labor demand, wage determination, and marginal revenue product.",
  },
};

export function generateMetadata({
  params,
}: {
  params: { graphType: string };
}): Metadata {
  const meta = GRAPH_META[params.graphType];
  if (!meta) return { title: "Graph Not Found | EconLearn" };
  return {
    title: `${meta.name} — Sandbox | EconLearn`,
    description: `Interactive ${meta.name} graph. ${meta.description}`,
  };
}

export function generateStaticParams() {
  return Object.keys(GRAPH_META).map((graphType) => ({ graphType }));
}

export default function SandboxGraphPage({
  params,
}: {
  params: { graphType: string };
}) {
  const meta = GRAPH_META[params.graphType];

  if (!meta) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-16 text-center">
        <h1
          className="text-xl font-bold mb-4"
          style={{ color: "var(--color-ink)" }}
        >
          Graph Not Found
        </h1>
        <a
          href="/sandbox"
          className="text-sm transition-colors hover:underline"
          style={{ color: "var(--color-ink-muted)" }}
        >
          Back to Sandbox
        </a>
      </div>
    );
  }

  return (
    <SandboxView
      graphType={params.graphType}
      name={meta.name}
      description={meta.description}
    />
  );
}
