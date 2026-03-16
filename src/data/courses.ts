export interface Module {
  id: string;
  title: string;
  description: string;
  hasInteractive: boolean;
  href: string;
}

export interface Course {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  color: string;
  modules: Module[];
}

export const microCourse: Course = {
  id: "micro",
  title: "AP Microeconomics",
  shortTitle: "Micro",
  description:
    "How individual markets work, from supply and demand to monopoly power.",
  color: "#3B82F6",
  modules: [
    {
      id: "basic-concepts",
      title: "Basic Economic Concepts",
      description: "Scarcity, opportunity cost, PPCs, and comparative advantage.",
      hasInteractive: true,
      href: "/micro/basic-concepts",
    },
    {
      id: "supply-and-demand",
      title: "Supply and Demand",
      description: "Market equilibrium, curve shifts, price controls, and economic shocks.",
      hasInteractive: true,
      href: "/micro/supply-and-demand",
    },
    {
      id: "elasticity",
      title: "Elasticity",
      description: "Price elasticity of demand, total revenue test, and cross-price elasticity.",
      hasInteractive: true,
      href: "/micro/elasticity",
    },
    {
      id: "consumer-choice",
      title: "Consumer Choice",
      description: "Utility, indifference curves, budget constraints, and optimal choice.",
      hasInteractive: false,
      href: "/micro/consumer-choice",
    },
    {
      id: "production-costs",
      title: "Production and Costs",
      description: "Short-run production, cost curves, and diminishing returns.",
      hasInteractive: true,
      href: "/micro/production-costs",
    },
    {
      id: "perfect-competition",
      title: "Perfect Competition",
      description: "Price-taking firms, profit maximization at P = MC, and long-run equilibrium.",
      hasInteractive: true,
      href: "/micro/perfect-competition",
    },
    {
      id: "monopoly",
      title: "Monopoly",
      description: "Single-firm markets, MR below price, and deadweight loss.",
      hasInteractive: true,
      href: "/micro/monopoly",
    },
    {
      id: "monopolistic-competition",
      title: "Monopolistic Competition",
      description: "Product differentiation, short-run profits, and long-run zero-profit.",
      hasInteractive: true,
      href: "/micro/monopolistic-competition",
    },
    {
      id: "oligopoly",
      title: "Oligopoly",
      description: "Game theory, Nash equilibrium, cartels, and strategic behavior.",
      hasInteractive: false,
      href: "/micro/oligopoly",
    },
    {
      id: "factor-markets",
      title: "Factor Markets",
      description: "Labor markets, wage determination, and marginal revenue product.",
      hasInteractive: true,
      href: "/micro/factor-markets",
    },
    {
      id: "market-failure",
      title: "Market Failure",
      description: "Externalities, public goods, and government intervention.",
      hasInteractive: false,
      href: "/micro/market-failure",
    },
    {
      id: "public-goods-externalities",
      title: "Public Goods & Externalities",
      description: "Free-rider problem, Pigouvian taxes, and the Coase theorem.",
      hasInteractive: true,
      href: "/micro/public-goods-externalities",
    },
  ],
};

export const macroCourse: Course = {
  id: "macro",
  title: "AP Macroeconomics",
  shortTitle: "Macro",
  description:
    "GDP, monetary policy, fiscal policy, and international trade.",
  color: "#8B5CF6",
  modules: [
    {
      id: "basic-macro-concepts",
      title: "Basic Macroeconomic Concepts",
      description: "Circular flow, economic systems, and macroeconomic goals.",
      hasInteractive: false,
      href: "/macro/basic-macro-concepts",
    },
    {
      id: "gdp",
      title: "GDP",
      description: "Measuring national output, GDP components, and real vs. nominal.",
      hasInteractive: false,
      href: "/macro/gdp",
    },
    {
      id: "business-cycle",
      title: "The Business Cycle",
      description: "Expansions, peaks, contractions, troughs, and economic indicators.",
      hasInteractive: true,
      href: "/macro/business-cycle",
    },
    {
      id: "unemployment-inflation",
      title: "Unemployment & Inflation",
      description: "Types of unemployment, CPI, and the Phillips curve.",
      hasInteractive: true,
      href: "/macro/unemployment-inflation",
    },
    {
      id: "aggregate-demand",
      title: "Aggregate Demand & Supply",
      description: "AD/AS model, macro equilibrium, output gaps, and macro shocks.",
      hasInteractive: true,
      href: "/macro/aggregate-demand",
    },
    {
      id: "aggregate-supply",
      title: "Aggregate Supply",
      description: "SRAS vs. LRAS and the long-run adjustment process.",
      hasInteractive: false,
      href: "/macro/aggregate-supply",
    },
    {
      id: "fiscal-policy",
      title: "Fiscal Policy",
      description: "Government spending, taxation, multipliers, and budget deficits.",
      hasInteractive: true,
      href: "/macro/fiscal-policy",
    },
    {
      id: "monetary-policy",
      title: "Monetary Policy",
      description: "The Federal Reserve, interest rates, and money supply tools.",
      hasInteractive: true,
      href: "/macro/monetary-policy",
    },
    {
      id: "loanable-funds",
      title: "The Loanable Funds Market",
      description: "Saving, investment, real interest rates, and crowding out.",
      hasInteractive: true,
      href: "/macro/loanable-funds",
    },
    {
      id: "economic-growth",
      title: "Economic Growth",
      description: "Long-run growth, productivity, and expanding the PPC.",
      hasInteractive: false,
      href: "/macro/economic-growth",
    },
    {
      id: "international-trade",
      title: "International Trade",
      description: "Comparative advantage, tariffs, quotas, and trade effects.",
      hasInteractive: true,
      href: "/macro/international-trade",
    },
    {
      id: "exchange-rates",
      title: "Exchange Rates",
      description: "Foreign exchange markets, appreciation, and depreciation.",
      hasInteractive: true,
      href: "/macro/exchange-rates",
    },
  ],
};

export const courses: Course[] = [microCourse, macroCourse];
