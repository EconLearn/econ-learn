import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Interactive Economics Graphs - AP Econ Sandbox",
  description:
    "17 interactive economics graphs for AP Micro & Macro. Supply and demand, monopoly, AD/AS, fiscal policy, and more. Drag curves and explore freely.",
  alternates: { canonical: "https://www.econlearn.org/sandbox" },
};

const GRAPHS = [
  {
    slug: "supply-demand",
    name: "Supply and Demand",
    description: "Shift curves, set price floors and ceilings, and apply economic shocks.",
  },
  {
    slug: "monopoly",
    name: "Monopoly",
    description: "Single-firm pricing, MR below demand, and deadweight loss.",
  },
  {
    slug: "perfect-competition",
    name: "Perfect Competition",
    description: "Price-taking firms, profit maximization, and long-run equilibrium.",
  },
  {
    slug: "monopolistic-competition",
    name: "Monopolistic Competition",
    description: "Product differentiation, short-run profits, and long-run zero-profit.",
  },
  {
    slug: "elasticity",
    name: "Elasticity",
    description: "Price elasticity of demand, total revenue, and elastic vs. inelastic ranges.",
  },
  {
    slug: "adas",
    name: "AD/AS Model",
    description: "Aggregate demand, short-run and long-run aggregate supply, and output gaps.",
  },
  {
    slug: "fiscal-policy",
    name: "Fiscal Policy",
    description: "Government spending, taxation, multipliers, and budget effects.",
  },
  {
    slug: "monetary-policy",
    name: "Money Market",
    description: "Money supply, money demand, and interest rate determination.",
  },
  {
    slug: "loanable-funds",
    name: "Loanable Funds",
    description: "Saving, investment, real interest rates, and crowding out.",
  },
  {
    slug: "exchange-rates",
    name: "Exchange Rates",
    description: "Foreign exchange markets, currency appreciation, and depreciation.",
  },
  {
    slug: "international-trade",
    name: "International Trade",
    description: "Comparative advantage, tariffs, quotas, and welfare effects.",
  },
  {
    slug: "phillips-curve",
    name: "Phillips Curve",
    description: "Short-run tradeoff between inflation and unemployment.",
  },
  {
    slug: "ppc",
    name: "Production Possibilities",
    description: "Opportunity cost, efficiency, and economic growth on the PPC.",
  },
  {
    slug: "business-cycle",
    name: "Business Cycle",
    description: "Expansions, peaks, contractions, troughs, and economic indicators.",
  },
  {
    slug: "externality",
    name: "Externalities",
    description: "Market inefficiency from positive and negative externalities.",
  },
  {
    slug: "production-costs",
    name: "Production Costs",
    description: "Short-run cost curves, marginal cost, ATC, and AVC.",
  },
  {
    slug: "factor-markets",
    name: "Factor Markets",
    description: "Labor demand, wage determination, and marginal revenue product.",
  },
] as const;

export default function SandboxPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10 lg:py-14">
      <div className="mb-10">
        <h1
          className="text-2xl font-bold tracking-tight mb-2"
          style={{ color: "var(--color-ink)" }}
        >
          Graph Sandbox
        </h1>
        <p className="text-sm" style={{ color: "var(--color-ink-muted)" }}>
          Explore any graph with full control over every parameter. No lessons
          — just interactive graphs.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {GRAPHS.map((graph) => (
          <Link
            key={graph.slug}
            href={`/sandbox/${graph.slug}`}
            className="card-interactive group p-5"
          >
            <p
              className="text-sm font-semibold mb-1 group-hover:text-blue-600 transition-colors"
              style={{ color: "var(--color-ink)" }}
            >
              {graph.name}
            </p>
            <p
              className="text-xs leading-relaxed"
              style={{ color: "var(--color-ink-faint)" }}
            >
              {graph.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
