import type { Flashcard } from "@/components/ui/FlashcardDeck";

// ── Basic Macro Concepts ─────────────────────────────────────────────
export const basicMacroFlashcards: Flashcard[] = [
  {
    id: "bm-f1",
    front: "Scarcity",
    back: "The core economic problem: unlimited wants but limited resources. Every society has to make choices about allocation.",
  },
  {
    id: "bm-f2",
    front: "Opportunity Cost",
    back: "The value of the next-best alternative you give up when making a choice. It's the true cost of any decision.",
  },
  {
    id: "bm-f3",
    front: "Production Possibilities Curve (PPC)",
    back: "A graph showing the maximum combinations of two goods an economy can produce using all resources efficiently. Points inside mean inefficiency; points outside are unattainable.",
  },
  {
    id: "bm-f4",
    front: "Comparative Advantage",
    back: "Producing a good at a lower opportunity cost than another producer. This is what makes mutually beneficial trade possible.",
  },
  {
    id: "bm-f5",
    front: "Absolute Advantage",
    back: "Producing more of a good with the same resources as another producer. Doesn't determine who should specialize.",
  },
  {
    id: "bm-f6",
    front: "Macroeconomics vs. Microeconomics",
    back: "Macro looks at the economy as a whole (GDP, unemployment, inflation). Micro focuses on individual markets, firms, and consumers.",
  },
];

// ── GDP ──────────────────────────────────────────────────────────────
export const gdpFlashcards: Flashcard[] = [
  {
    id: "gdp-f1",
    front: "Gross Domestic Product (GDP)",
    back: "The total market value of all final goods and services produced within a country's borders in a given time period.",
  },
  {
    id: "gdp-f2",
    front: "GDP Expenditure Approach",
    back: "GDP = C + I + G + (X \u2212 M). Consumption, Investment, Government spending, and Net Exports. Consumption is typically the largest piece.",
  },
  {
    id: "gdp-f3",
    front: "Nominal vs. Real GDP",
    back: "Nominal GDP uses current prices; Real GDP adjusts for inflation using a base year. Use Real GDP when comparing output over time.",
  },
  {
    id: "gdp-f4",
    front: "GDP Deflator",
    back: "A price index covering all goods in GDP. Calculated as (Nominal GDP / Real GDP) \u00d7 100.",
  },
  {
    id: "gdp-f5",
    front: "What GDP Does NOT Measure",
    back: "GDP misses non-market activity (household work), the underground economy, leisure, environmental quality, and income distribution. It measures output, not well-being.",
  },
  {
    id: "gdp-f6",
    front: "GDP Per Capita",
    back: "GDP divided by population. A rough measure of average living standards, but it masks inequality within a country.",
  },
];

// ── Business Cycle ───────────────────────────────────────────────────
export const businessCycleFlashcards: Flashcard[] = [
  {
    id: "bc-f1",
    front: "Business Cycle",
    back: "The recurring pattern of expansion and contraction in economic activity, measured by changes in real GDP over time.",
  },
  {
    id: "bc-f2",
    front: "Expansion",
    back: "Rising real GDP, falling unemployment, increasing economic activity. It's the phase between a trough and a peak.",
  },
  {
    id: "bc-f3",
    front: "Recession",
    back: "A significant decline in economic activity lasting more than a few months. Often identified by two consecutive quarters of falling real GDP.",
  },
  {
    id: "bc-f4",
    front: "Peak",
    back: "The high point of the business cycle before contraction begins. Output and employment are at their maximum.",
  },
  {
    id: "bc-f5",
    front: "Trough",
    back: "The low point before recovery begins. Marks the end of contraction and the start of a new expansion.",
  },
  {
    id: "bc-f6",
    front: "Leading Economic Indicators",
    back: "Stats that change before the economy shifts (stock prices, building permits, consumer confidence). Used to predict where the economy is heading.",
  },
];

// ── Unemployment & Inflation ─────────────────────────────────────────
export const unemploymentInflationFlashcards: Flashcard[] = [
  {
    id: "ui-f1",
    front: "Unemployment Rate",
    back: "The percentage of the labor force that's actively looking for work but can't find it. Formula: (Unemployed / Labor Force) \u00d7 100.",
  },
  {
    id: "ui-f2",
    front: "Types of Unemployment",
    back: "Frictional (between jobs), Structural (skills mismatch), Cyclical (recessions), Seasonal. Only cyclical changes with the business cycle.",
  },
  {
    id: "ui-f3",
    front: "Natural Rate of Unemployment (NRU)",
    back: "The unemployment rate at full employment. Includes frictional and structural unemployment, but zero cyclical unemployment.",
  },
  {
    id: "ui-f4",
    front: "Consumer Price Index (CPI)",
    back: "Tracks the average change in prices paid by urban consumers for a fixed basket of goods and services. The most common inflation measure.",
  },
  {
    id: "ui-f5",
    front: "Demand-Pull vs. Cost-Push Inflation",
    back: "Demand-pull: too much spending chasing too few goods. Cost-push: rising production costs shift SRAS left. Different causes, similar price-level results.",
  },
  {
    id: "ui-f6",
    front: "Phillips Curve",
    back: "Short-run inverse relationship between inflation and unemployment. In the long run, the Phillips Curve is vertical at the natural rate.",
  },
];

// ── Aggregate Demand ─────────────────────────────────────────────────
export const aggregateDemandFlashcards: Flashcard[] = [
  {
    id: "ad-f1",
    front: "Aggregate Demand (AD)",
    back: "Total quantity of goods and services demanded at each price level. AD = C + I + G + (X \u2212 M). The curve slopes downward.",
  },
  {
    id: "ad-f2",
    front: "Wealth Effect",
    back: "When the price level falls, money's real value rises, people feel wealthier, and consumption increases. One reason AD slopes downward.",
  },
  {
    id: "ad-f3",
    front: "Interest Rate Effect",
    back: "A lower price level means people need less money for transactions. Interest rates fall, boosting investment and consumption spending.",
  },
  {
    id: "ad-f4",
    front: "Net Export Effect",
    back: "When a country's price level falls relative to others, its exports get cheaper and imports more expensive, so net exports rise.",
  },
  {
    id: "ad-f5",
    front: "Shifters of AD",
    back: "Changes in consumer spending, investment, government spending, or net exports shift the whole AD curve. Increases shift right; decreases shift left.",
  },
  {
    id: "ad-f6",
    front: "Multiplier Effect",
    back: "An initial spending change causes a larger change in real GDP. The spending multiplier = 1 / (1 \u2212 MPC), where MPC is the marginal propensity to consume.",
  },
];

// ── Aggregate Supply ─────────────────────────────────────────────────
export const aggregateSupplyFlashcards: Flashcard[] = [
  {
    id: "as-f1",
    front: "Short-Run Aggregate Supply (SRAS)",
    back: "Total output firms will produce at each price level in the short run. Slopes upward because wages and input prices are sticky.",
  },
  {
    id: "as-f2",
    front: "Long-Run Aggregate Supply (LRAS)",
    back: "A vertical line at full-employment output (potential GDP). In the long run, output depends on resources and technology, not the price level.",
  },
  {
    id: "as-f3",
    front: "Stagflation",
    back: "Rising unemployment and rising inflation at the same time. Typically caused by a leftward shift of SRAS (a negative supply shock).",
  },
  {
    id: "as-f4",
    front: "Shifters of SRAS",
    back: "Input prices (wages, oil), productivity, business taxes/subsidies, and supply shocks. Lower costs shift SRAS right; higher costs shift it left.",
  },
  {
    id: "as-f5",
    front: "Long-Run Self-Correction",
    back: "If the economy is in a gap, wages eventually adjust. Falling wages shift SRAS right (closing a recession); rising wages shift SRAS left (cooling inflation).",
  },
  {
    id: "as-f6",
    front: "Recessionary vs. Inflationary Gap",
    back: "Recessionary gap: actual GDP is below potential (unemployment above NRU). Inflationary gap: actual GDP exceeds potential.",
  },
];

// ── Fiscal Policy ────────────────────────────────────────────────────
export const fiscalPolicyFlashcards: Flashcard[] = [
  {
    id: "fp-f1",
    front: "Fiscal Policy",
    back: "Using taxing and spending to influence the economy. Controlled by Congress and the President, not the Fed.",
  },
  {
    id: "fp-f2",
    front: "Expansionary Fiscal Policy",
    back: "More government spending or lower taxes to boost AD during a recession. Creates a budget deficit and shifts AD right.",
  },
  {
    id: "fp-f3",
    front: "Contractionary Fiscal Policy",
    back: "Less government spending or higher taxes to cool an overheating economy. Shifts AD left and moves toward a budget surplus.",
  },
  {
    id: "fp-f4",
    front: "Automatic Stabilizers",
    back: "Programs that kick in without new legislation during downturns, like unemployment benefits and progressive income taxes. They smooth the business cycle automatically.",
  },
  {
    id: "fp-f5",
    front: "Crowding-Out Effect",
    back: "Government borrowing to finance deficits pushes interest rates up, which discourages private investment. Partially offsets the fiscal stimulus.",
  },
  {
    id: "fp-f6",
    front: "Spending Multiplier vs. Tax Multiplier",
    back: "The spending multiplier (1/MPS) is larger than the tax multiplier (MPC/MPS). Government spending hits GDP directly; tax changes work indirectly through consumption.",
  },
];

// ── Monetary Policy ──────────────────────────────────────────────────
export const monetaryPolicyFlashcards: Flashcard[] = [
  {
    id: "mp-f1",
    front: "Federal Reserve (The Fed)",
    back: "The U.S. central bank. Controls the money supply and conducts monetary policy to promote stable prices, full employment, and economic growth.",
  },
  {
    id: "mp-f2",
    front: "Federal Funds Rate",
    back: "The rate banks charge each other for overnight loans of reserves. The Fed targets this rate as its primary monetary policy tool.",
  },
  {
    id: "mp-f3",
    front: "Open Market Operations (OMO)",
    back: "The Fed buying and selling government bonds. Buying bonds increases the money supply (expansionary); selling decreases it (contractionary).",
  },
  {
    id: "mp-f4",
    front: "Reserve Requirement & Discount Rate",
    back: "Reserve requirement: the fraction of deposits banks must hold. Discount rate: what the Fed charges banks for loans. Lowering either is expansionary.",
  },
  {
    id: "mp-f5",
    front: "Money Multiplier",
    back: "The maximum amount the money supply can expand from each dollar of reserves. Formula: 1 / Reserve Requirement (e.g., 10% RR gives a multiplier of 10).",
  },
  {
    id: "mp-f6",
    front: "Expansionary vs. Contractionary Monetary Policy",
    back: "Expansionary: buy bonds, lower reserve requirement, lower discount rate. Money supply up, interest rates down, AD right. Contractionary: the reverse.",
  },
];

// ── Loanable Funds Market ────────────────────────────────────────────
export const loanableFundsFlashcards: Flashcard[] = [
  {
    id: "lf-f1",
    front: "Loanable Funds Market",
    back: "A model showing how the real interest rate is set by the supply of savings and demand for borrowing. The real interest rate is the equilibrium price.",
  },
  {
    id: "lf-f2",
    front: "Supply of Loanable Funds",
    back: "Comes from national savings (private + public). Higher real interest rates reward saving more, so the supply curve slopes upward.",
  },
  {
    id: "lf-f3",
    front: "Demand for Loanable Funds",
    back: "Comes from borrowers (firms investing, government deficit spending). Lower real rates make borrowing cheaper, so the demand curve slopes downward.",
  },
  {
    id: "lf-f4",
    front: "Government Budget Deficit & Loanable Funds",
    back: "A deficit means more government borrowing, shifting demand right. Real interest rates rise and private investment gets crowded out.",
  },
  {
    id: "lf-f5",
    front: "Real vs. Nominal Interest Rate",
    back: "Real rate = Nominal rate minus Inflation rate. The real rate is what actually matters for the cost of borrowing and the return on saving.",
  },
  {
    id: "lf-f6",
    front: "Fisher Effect",
    back: "Nominal interest rates adjust one-for-one with expected inflation, keeping the real interest rate stable in the long run.",
  },
];

// ── Economic Growth ──────────────────────────────────────────────────
export const economicGrowthFlashcards: Flashcard[] = [
  {
    id: "eg-f1",
    front: "Economic Growth",
    back: "A sustained increase in real GDP per capita over time. On the PPC, it shows up as an outward shift of the curve.",
  },
  {
    id: "eg-f2",
    front: "Determinants of Growth",
    back: "Physical capital, human capital, natural resources, and technology. Investing in these shifts both LRAS and the PPC outward.",
  },
  {
    id: "eg-f3",
    front: "Human Capital",
    back: "The knowledge, skills, and health workers build through education and training. Better human capital means higher productivity and faster growth.",
  },
  {
    id: "eg-f4",
    front: "Productivity",
    back: "Output per unit of input (usually per worker or per hour). Productivity growth is the main driver of sustained improvements in living standards.",
  },
  {
    id: "eg-f5",
    front: "Rule of 70",
    back: "Years to double = 70 / growth rate (%). At 2% growth, GDP doubles in 35 years. Quick way to see how compounding works over time.",
  },
  {
    id: "eg-f6",
    front: "Supply-Side / Long-Run Growth Policies",
    back: "Policies that expand productive capacity: education investment, R&D subsidies, infrastructure spending. They shift both LRAS and the PPC outward.",
  },
];

// ── International Trade ──────────────────────────────────────────────
export const internationalTradeFlashcards: Flashcard[] = [
  {
    id: "it-f1",
    front: "Free Trade & Gains from Trade",
    back: "When countries specialize by comparative advantage and trade, total world output rises. Both countries can consume beyond their individual PPCs.",
  },
  {
    id: "it-f2",
    front: "Tariff",
    back: "A tax on imports. Raises domestic prices, cuts imports, helps domestic producers, but shrinks consumer surplus and creates deadweight loss.",
  },
  {
    id: "it-f3",
    front: "Quota",
    back: "A numerical cap on imports. Same price and DWL effects as a tariff, but the revenue (quota rents) goes to license holders instead of the government.",
  },
  {
    id: "it-f4",
    front: "Balance of Payments",
    back: "A record of all transactions between a country and the rest of the world. The current account and capital/financial account must sum to zero.",
  },
  {
    id: "it-f5",
    front: "Current Account",
    back: "Tracks trade in goods and services, investment income, and transfers. A deficit means the country imports more than it exports (it's a net borrower).",
  },
  {
    id: "it-f6",
    front: "Capital/Financial Account",
    back: "Tracks flows of financial assets (investments) between countries. A current account deficit is matched by a capital account surplus (net capital coming in).",
  },
];

// ── Exchange Rates ───────────────────────────────────────────────────
export const exchangeRatesFlashcards: Flashcard[] = [
  {
    id: "er-f1",
    front: "Exchange Rate",
    back: "The price of one currency in terms of another. Set by supply and demand in the foreign exchange market.",
  },
  {
    id: "er-f2",
    front: "Appreciation vs. Depreciation",
    back: "Appreciation: a currency gains value (buys more foreign currency). Depreciation: it loses value. Appreciation makes exports pricier and imports cheaper.",
  },
  {
    id: "er-f3",
    front: "Floating Exchange Rate",
    back: "Currency values determined purely by market supply and demand, with no government intervention. Most major currencies work this way.",
  },
  {
    id: "er-f4",
    front: "Determinants of Exchange Rates",
    back: "Relative interest rates, inflation rates, income levels, and tastes for foreign goods. Higher interest rates attract foreign capital, which appreciates the currency.",
  },
  {
    id: "er-f5",
    front: "Net Exports & Exchange Rates",
    back: "Depreciation makes exports cheaper and imports pricier, boosting net exports. Appreciation does the opposite.",
  },
  {
    id: "er-f6",
    front: "Fixed Exchange Rate",
    back: "A government pegs its currency to another currency or gold. The central bank must buy and sell foreign reserves to maintain the fixed rate.",
  },
];

// ── Master Lookup ────────────────────────────────────────────────────
export const macroFlashcards: Record<string, Flashcard[]> = {
  "basic-macro-concepts": basicMacroFlashcards,
  gdp: gdpFlashcards,
  "business-cycle": businessCycleFlashcards,
  "unemployment-inflation": unemploymentInflationFlashcards,
  "aggregate-demand": aggregateDemandFlashcards,
  "aggregate-supply": aggregateSupplyFlashcards,
  "fiscal-policy": fiscalPolicyFlashcards,
  "monetary-policy": monetaryPolicyFlashcards,
  "loanable-funds": loanableFundsFlashcards,
  "economic-growth": economicGrowthFlashcards,
  "international-trade": internationalTradeFlashcards,
  "exchange-rates": exchangeRatesFlashcards,
};
