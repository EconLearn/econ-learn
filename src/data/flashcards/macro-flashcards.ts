import type { Flashcard } from "@/components/ui/FlashcardDeck";

// ── Basic Macro Concepts ─────────────────────────────────────────────
export const basicMacroFlashcards: Flashcard[] = [
  {
    id: "bm-f1",
    front: "Scarcity",
    back: "The fundamental economic problem that unlimited wants exceed limited resources, forcing societies to make choices about allocation.",
  },
  {
    id: "bm-f2",
    front: "Opportunity Cost",
    back: "The value of the next-best alternative forgone when a choice is made. It is the true cost of any decision.",
  },
  {
    id: "bm-f3",
    front: "Production Possibilities Curve (PPC)",
    back: "A graph showing the maximum combinations of two goods an economy can produce using all resources efficiently. Points inside the curve indicate inefficiency; points outside are unattainable.",
  },
  {
    id: "bm-f4",
    front: "Comparative Advantage",
    back: "The ability to produce a good at a lower opportunity cost than another producer. It is the basis for mutually beneficial trade.",
  },
  {
    id: "bm-f5",
    front: "Absolute Advantage",
    back: "The ability to produce more of a good using the same amount of resources as another producer. It does not determine who should specialize.",
  },
  {
    id: "bm-f6",
    front: "Macroeconomics vs. Microeconomics",
    back: "Macroeconomics studies the economy as a whole (GDP, unemployment, inflation), while microeconomics focuses on individual markets, firms, and consumers.",
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
    back: "GDP = C + I + G + (X \u2212 M). Consumption, Investment, Government spending, and Net Exports. Consumption is typically the largest component.",
  },
  {
    id: "gdp-f3",
    front: "Nominal vs. Real GDP",
    back: "Nominal GDP is measured in current prices; Real GDP is adjusted for inflation using a base year. Real GDP is used to compare output over time.",
  },
  {
    id: "gdp-f4",
    front: "GDP Deflator",
    back: "A price index that measures the average price level of all goods included in GDP. Calculated as (Nominal GDP / Real GDP) \u00d7 100.",
  },
  {
    id: "gdp-f5",
    front: "What GDP Does NOT Measure",
    back: "GDP excludes non-market activities (household work), the underground economy, leisure, environmental quality, and income distribution. It measures output, not well-being.",
  },
  {
    id: "gdp-f6",
    front: "GDP Per Capita",
    back: "GDP divided by the population. It provides a rough measure of average living standards but masks inequality within a country.",
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
    back: "A phase of rising real GDP, falling unemployment, and increasing economic activity. It occurs between a trough and a peak.",
  },
  {
    id: "bc-f3",
    front: "Recession",
    back: "A significant decline in economic activity lasting more than a few months, typically identified by two consecutive quarters of falling real GDP.",
  },
  {
    id: "bc-f4",
    front: "Peak",
    back: "The highest point of the business cycle before the economy begins to contract. Output and employment are at their maximum.",
  },
  {
    id: "bc-f5",
    front: "Trough",
    back: "The lowest point of the business cycle before recovery begins. It marks the end of a contraction and the start of a new expansion.",
  },
  {
    id: "bc-f6",
    front: "Leading Economic Indicators",
    back: "Statistics that change before the economy shifts (e.g., stock prices, building permits, consumer confidence). They are used to predict future economic activity.",
  },
];

// ── Unemployment & Inflation ─────────────────────────────────────────
export const unemploymentInflationFlashcards: Flashcard[] = [
  {
    id: "ui-f1",
    front: "Unemployment Rate",
    back: "The percentage of the labor force that is actively seeking work but unable to find it. Calculated as (Unemployed / Labor Force) \u00d7 100.",
  },
  {
    id: "ui-f2",
    front: "Types of Unemployment",
    back: "Frictional (between jobs), Structural (skills mismatch), Cyclical (due to recessions), and Seasonal. Only cyclical unemployment varies with the business cycle.",
  },
  {
    id: "ui-f3",
    front: "Natural Rate of Unemployment (NRU)",
    back: "The unemployment rate when the economy is at full employment. It includes frictional and structural unemployment but zero cyclical unemployment.",
  },
  {
    id: "ui-f4",
    front: "Consumer Price Index (CPI)",
    back: "A measure of the average change in prices paid by urban consumers for a fixed basket of goods and services. It is the most common measure of inflation.",
  },
  {
    id: "ui-f5",
    front: "Demand-Pull vs. Cost-Push Inflation",
    back: "Demand-pull inflation is caused by excess aggregate demand ('too much money chasing too few goods'). Cost-push inflation is caused by rising production costs shifting SRAS left.",
  },
  {
    id: "ui-f6",
    front: "Phillips Curve",
    back: "Shows the short-run inverse relationship between inflation and unemployment. In the long run, the Phillips Curve is vertical at the natural rate of unemployment.",
  },
];

// ── Aggregate Demand ─────────────────────────────────────────────────
export const aggregateDemandFlashcards: Flashcard[] = [
  {
    id: "ad-f1",
    front: "Aggregate Demand (AD)",
    back: "The total quantity of goods and services demanded across all price levels in an economy. AD = C + I + G + (X \u2212 M). The AD curve slopes downward.",
  },
  {
    id: "ad-f2",
    front: "Wealth Effect",
    back: "When the price level falls, the real value of money increases, making consumers wealthier and increasing consumption. This explains the downward slope of AD.",
  },
  {
    id: "ad-f3",
    front: "Interest Rate Effect",
    back: "When the price level falls, households need less money for transactions, driving interest rates down, which increases investment and consumption spending.",
  },
  {
    id: "ad-f4",
    front: "Net Export Effect",
    back: "When a country's price level falls relative to other countries, its exports become cheaper and imports more expensive, increasing net exports.",
  },
  {
    id: "ad-f5",
    front: "Shifters of AD",
    back: "Changes in consumer spending, investment, government spending, or net exports shift the entire AD curve. Increases shift AD right; decreases shift AD left.",
  },
  {
    id: "ad-f6",
    front: "Multiplier Effect",
    back: "An initial change in spending causes a larger change in real GDP. The spending multiplier = 1 / (1 \u2212 MPC), where MPC is the marginal propensity to consume.",
  },
];

// ── Aggregate Supply ─────────────────────────────────────────────────
export const aggregateSupplyFlashcards: Flashcard[] = [
  {
    id: "as-f1",
    front: "Short-Run Aggregate Supply (SRAS)",
    back: "The total output firms are willing to produce at each price level in the short run. SRAS slopes upward because wages and input prices are sticky.",
  },
  {
    id: "as-f2",
    front: "Long-Run Aggregate Supply (LRAS)",
    back: "A vertical line at full-employment output (potential GDP). In the long run, output depends on resources and technology, not the price level.",
  },
  {
    id: "as-f3",
    front: "Stagflation",
    back: "A situation of simultaneous stagnation (rising unemployment) and inflation, typically caused by a leftward shift of SRAS (negative supply shock).",
  },
  {
    id: "as-f4",
    front: "Shifters of SRAS",
    back: "Changes in input prices (wages, oil), productivity, business taxes/subsidies, or supply shocks shift SRAS. Lower costs shift SRAS right; higher costs shift it left.",
  },
  {
    id: "as-f5",
    front: "Long-Run Self-Correction",
    back: "If the economy is in a recessionary or inflationary gap, wages eventually adjust. Falling wages shift SRAS right (recession); rising wages shift SRAS left (inflation), returning output to LRAS.",
  },
  {
    id: "as-f6",
    front: "Recessionary vs. Inflationary Gap",
    back: "A recessionary gap occurs when actual GDP is below potential GDP (unemployment above NRU). An inflationary gap occurs when actual GDP exceeds potential GDP.",
  },
];

// ── Fiscal Policy ────────────────────────────────────────────────────
export const fiscalPolicyFlashcards: Flashcard[] = [
  {
    id: "fp-f1",
    front: "Fiscal Policy",
    back: "Government use of taxing and spending to influence the economy. It is controlled by Congress and the President, not the Federal Reserve.",
  },
  {
    id: "fp-f2",
    front: "Expansionary Fiscal Policy",
    back: "Increasing government spending or decreasing taxes to stimulate AD during a recession. It leads to a budget deficit and shifts AD to the right.",
  },
  {
    id: "fp-f3",
    front: "Contractionary Fiscal Policy",
    back: "Decreasing government spending or increasing taxes to slow down an overheating economy. It shifts AD to the left and moves toward a budget surplus.",
  },
  {
    id: "fp-f4",
    front: "Automatic Stabilizers",
    back: "Government programs that automatically increase spending or reduce taxes during downturns without new legislation (e.g., unemployment benefits, progressive income taxes).",
  },
  {
    id: "fp-f5",
    front: "Crowding-Out Effect",
    back: "When government borrowing to finance deficit spending raises interest rates, reducing private investment. It partially offsets the intended stimulus of fiscal policy.",
  },
  {
    id: "fp-f6",
    front: "Spending Multiplier vs. Tax Multiplier",
    back: "The spending multiplier (1/MPS) is larger than the tax multiplier (MPC/MPS) because government spending directly enters GDP, while tax changes affect spending indirectly through consumption.",
  },
];

// ── Monetary Policy ──────────────────────────────────────────────────
export const monetaryPolicyFlashcards: Flashcard[] = [
  {
    id: "mp-f1",
    front: "Federal Reserve (The Fed)",
    back: "The central bank of the United States. It controls the money supply and conducts monetary policy to promote stable prices, full employment, and economic growth.",
  },
  {
    id: "mp-f2",
    front: "Federal Funds Rate",
    back: "The interest rate at which banks lend reserves to each other overnight. The Fed targets this rate as its primary monetary policy tool.",
  },
  {
    id: "mp-f3",
    front: "Open Market Operations (OMO)",
    back: "The Fed's buying and selling of government bonds. Buying bonds increases the money supply (expansionary); selling bonds decreases it (contractionary).",
  },
  {
    id: "mp-f4",
    front: "Reserve Requirement & Discount Rate",
    back: "The reserve requirement is the fraction of deposits banks must hold. The discount rate is the interest rate the Fed charges banks for loans. Lowering either is expansionary.",
  },
  {
    id: "mp-f5",
    front: "Money Multiplier",
    back: "The maximum amount the money supply can expand from each dollar of reserves. Calculated as 1 / Reserve Requirement (e.g., RR of 10% gives a multiplier of 10).",
  },
  {
    id: "mp-f6",
    front: "Expansionary vs. Contractionary Monetary Policy",
    back: "Expansionary: buy bonds, lower reserve requirement, lower discount rate \u2192 money supply up, interest rates down, AD right. Contractionary is the reverse.",
  },
];

// ── Loanable Funds Market ────────────────────────────────────────────
export const loanableFundsFlashcards: Flashcard[] = [
  {
    id: "lf-f1",
    front: "Loanable Funds Market",
    back: "A model showing how the real interest rate is determined by the supply of savings and demand for borrowing. The real interest rate is the equilibrium price.",
  },
  {
    id: "lf-f2",
    front: "Supply of Loanable Funds",
    back: "Comes from national savings (private + public). Higher real interest rates incentivize more saving, so the supply curve slopes upward.",
  },
  {
    id: "lf-f3",
    front: "Demand for Loanable Funds",
    back: "Comes from borrowers (firms for investment, government for deficit spending). Lower real interest rates make borrowing cheaper, so the demand curve slopes downward.",
  },
  {
    id: "lf-f4",
    front: "Government Budget Deficit & Loanable Funds",
    back: "A budget deficit increases government borrowing, shifting the demand for loanable funds right, which raises real interest rates and crowds out private investment.",
  },
  {
    id: "lf-f5",
    front: "Real vs. Nominal Interest Rate",
    back: "Real interest rate = Nominal interest rate \u2212 Inflation rate. The real rate reflects the true cost of borrowing and the true return on saving.",
  },
  {
    id: "lf-f6",
    front: "Fisher Effect",
    back: "The theory that nominal interest rates adjust one-for-one with expected inflation, keeping the real interest rate stable in the long run.",
  },
];

// ── Economic Growth ──────────────────────────────────────────────────
export const economicGrowthFlashcards: Flashcard[] = [
  {
    id: "eg-f1",
    front: "Economic Growth",
    back: "A sustained increase in real GDP per capita over time. On the PPC, growth is shown as an outward shift of the curve.",
  },
  {
    id: "eg-f2",
    front: "Determinants of Growth",
    back: "Physical capital, human capital, natural resources, and technological innovation. Investment in these factors shifts the LRAS and PPC outward.",
  },
  {
    id: "eg-f3",
    front: "Human Capital",
    back: "The knowledge, skills, and health that workers accumulate through education and training. Improving human capital raises productivity and promotes economic growth.",
  },
  {
    id: "eg-f4",
    front: "Productivity",
    back: "Output per unit of input (usually per worker or per hour). Productivity growth is the primary driver of sustained increases in living standards.",
  },
  {
    id: "eg-f5",
    front: "Rule of 70",
    back: "A formula to estimate the number of years for a variable to double: Years to double = 70 / Growth rate (%). A 2% growth rate means GDP doubles in 35 years.",
  },
  {
    id: "eg-f6",
    front: "Supply-Side / Long-Run Growth Policies",
    back: "Policies that increase productive capacity (e.g., education investment, R&D subsidies, infrastructure spending). They shift both LRAS and PPC outward.",
  },
];

// ── International Trade ──────────────────────────────────────────────
export const internationalTradeFlashcards: Flashcard[] = [
  {
    id: "it-f1",
    front: "Free Trade & Gains from Trade",
    back: "When countries specialize according to comparative advantage and trade, total world output increases and both countries can consume beyond their individual PPCs.",
  },
  {
    id: "it-f2",
    front: "Tariff",
    back: "A tax on imported goods. Tariffs raise domestic prices, reduce imports, protect domestic producers, but decrease consumer surplus and create deadweight loss.",
  },
  {
    id: "it-f3",
    front: "Quota",
    back: "A numerical limit on the quantity of a good that can be imported. Like tariffs, quotas raise prices and reduce consumer surplus, but the revenue goes to foreign producers or quota holders.",
  },
  {
    id: "it-f4",
    front: "Balance of Payments",
    back: "A record of all economic transactions between a country and the rest of the world. It consists of the current account and the capital/financial account, which must sum to zero.",
  },
  {
    id: "it-f5",
    front: "Current Account",
    back: "Records trade in goods and services, investment income, and transfers. A current account deficit means a country imports more than it exports (net borrower from abroad).",
  },
  {
    id: "it-f6",
    front: "Capital/Financial Account",
    back: "Records the flow of financial assets (investments) between countries. A current account deficit is offset by a capital account surplus (net capital inflow).",
  },
];

// ── Exchange Rates ───────────────────────────────────────────────────
export const exchangeRatesFlashcards: Flashcard[] = [
  {
    id: "er-f1",
    front: "Exchange Rate",
    back: "The price of one currency expressed in terms of another. It is determined by the supply and demand for currencies in the foreign exchange market.",
  },
  {
    id: "er-f2",
    front: "Appreciation vs. Depreciation",
    back: "Appreciation means a currency increases in value (buys more foreign currency). Depreciation means it decreases. Appreciation makes exports more expensive and imports cheaper.",
  },
  {
    id: "er-f3",
    front: "Floating Exchange Rate",
    back: "A system where currency values are determined by market forces of supply and demand without government intervention. Most major currencies use this system.",
  },
  {
    id: "er-f4",
    front: "Determinants of Exchange Rates",
    back: "Relative interest rates, inflation rates, income levels, and tastes for foreign goods. Higher interest rates attract foreign capital, increasing demand for the currency (appreciation).",
  },
  {
    id: "er-f5",
    front: "Net Exports & Exchange Rates",
    back: "Currency depreciation makes exports cheaper and imports more expensive, increasing net exports. Currency appreciation has the opposite effect.",
  },
  {
    id: "er-f6",
    front: "Fixed Exchange Rate",
    back: "A system where a government pegs its currency to another currency or gold. The central bank must buy/sell foreign reserves to maintain the fixed rate.",
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
