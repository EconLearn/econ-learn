import type { Flashcard } from "@/components/ui/FlashcardDeck";

// ── Basic Macro Concepts ─────────────────────────────────────────────
export const basicMacroFlashcards: Flashcard[] = [
  {
    id: "bm-f1",
    front: "Scarcity",
    back: "Resources are finite; wants are not. Every society must decide what to produce, how to produce it, and who gets it.",
  },
  {
    id: "bm-f2",
    front: "Opportunity Cost",
    back: "The value of the next-best alternative forgone. Not all alternatives — just the single highest-valued one you didn't pick.",
  },
  {
    id: "bm-f3",
    front: "Production Possibilities Curve (PPC)",
    back: "Inside = inefficient. On = efficient. Outside = unattainable. Bowed-out shape reflects increasing opportunity costs.",
  },
  {
    id: "bm-f4",
    front: "Comparative Advantage",
    back: "The US might produce both cars and wheat more efficiently than Canada in absolute terms, but trade still benefits both if their opportunity costs differ. Specialization should follow comparative, not absolute, advantage.",
  },
  {
    id: "bm-f5",
    front: "Absolute Advantage",
    back: "Producing more output with the same inputs. Does not determine who should specialize.",
  },
  {
    id: "bm-f6",
    front: "Macroeconomics vs. Microeconomics",
    back: "Macro: GDP, unemployment, inflation, aggregate economy. Micro: individual markets, firms, consumer decisions.",
  },
];

// ── GDP ──────────────────────────────────────────────────────────────
export const gdpFlashcards: Flashcard[] = [
  {
    id: "gdp-f1",
    front: "Gross Domestic Product (GDP)",
    back: "Total market value of all final goods and services produced within a country's borders in a given period. Intermediate goods are excluded to prevent double-counting — a common exam trap.",
  },
  {
    id: "gdp-f2",
    front: "GDP Expenditure Approach",
    back: "C + I + G + (X − M).",
  },
  {
    id: "gdp-f3",
    front: "Nominal vs. Real GDP",
    back: "Nominal is measured in current prices. Real adjusts for inflation using a base year. Always compare across time using real GDP — nominal can rise purely from price increases.",
  },
  {
    id: "gdp-f4",
    front: "GDP Deflator",
    back: "(Nominal GDP / Real GDP) × 100. Covers all domestically produced goods, not a fixed basket. Different from CPI in scope and weighting.",
  },
  {
    id: "gdp-f5",
    front: "What GDP Does NOT Measure",
    back: "Household labor, underground economy, leisure, environmental quality, income distribution.",
  },
  {
    id: "gdp-f6",
    front: "GDP Per Capita",
    back: "GDP / population. A rough indicator of average living standards, but it masks inequality entirely. Qatar has sky-high GDP per capita yet enormous income gaps between citizens and migrant workers.",
  },
];

// ── Business Cycle ───────────────────────────────────────────────────
export const businessCycleFlashcards: Flashcard[] = [
  {
    id: "bc-f1",
    front: "Business Cycle",
    back: "Expansion → peak → contraction → trough → repeat. Tracked by real GDP fluctuations.",
  },
  {
    id: "bc-f2",
    front: "Expansion",
    back: "Rising real GDP, falling unemployment, increasing business investment. The period between the trough and the next peak.",
  },
  {
    id: "bc-f3",
    front: "Recession",
    back: "A sustained decline in economic activity. The two-consecutive-quarters-of-negative-GDP rule is a rough guideline; NBER actually considers employment, industrial production, and other indicators before making the official call.",
  },
  {
    id: "bc-f4",
    front: "Peak",
    back: "The high point before contraction begins.",
  },
  {
    id: "bc-f5",
    front: "Trough",
    back: "Bottom of the cycle. Output stops falling and recovery begins.",
  },
  {
    id: "bc-f6",
    front: "Leading Economic Indicators",
    back: "Stock prices, building permits, consumer confidence, new orders for capital goods. They shift direction before the broader economy does, so economists watch them for early signals of turning points.",
  },
];

// ── Unemployment & Inflation ─────────────────────────────────────────
export const unemploymentInflationFlashcards: Flashcard[] = [
  {
    id: "ui-f1",
    front: "Unemployment Rate",
    back: "(Unemployed / Labor Force) × 100. Only counts people actively seeking work — discouraged workers are excluded from the labor force entirely.",
  },
  {
    id: "ui-f2",
    front: "Types of Unemployment",
    back: "Frictional: between jobs. Structural: skills mismatch. Cyclical: due to recessions. Seasonal: predictable calendar-based layoffs.",
  },
  {
    id: "ui-f3",
    front: "Natural Rate of Unemployment (NRU)",
    back: "Frictional + structural, zero cyclical. The economy is at \"full employment\" here. It is never actually zero.",
  },
  {
    id: "ui-f4",
    front: "Consumer Price Index (CPI)",
    back: "Tracks the cost of a fixed basket of goods and services purchased by urban consumers. The most commonly cited inflation measure, though it has known biases (substitution bias, quality change bias, new product bias).",
  },
  {
    id: "ui-f5",
    front: "Demand-Pull vs. Cost-Push Inflation",
    back: "Demand-pull: AD shifts right, too much spending relative to output. Cost-push: SRAS shifts left from an input price shock (oil embargo, wage spike). Both raise the price level but have different policy implications.",
  },
  {
    id: "ui-f6",
    front: "Phillips Curve",
    back: "Short run: inverse relationship between unemployment and inflation. Long run: vertical at the NRU — no permanent tradeoff.",
  },
];

// ── Aggregate Demand ─────────────────────────────────────────────────
export const aggregateDemandFlashcards: Flashcard[] = [
  {
    id: "ad-f1",
    front: "Aggregate Demand (AD)",
    back: "Total spending at each price level: C + I + G + (X − M). Slopes downward due to the wealth effect, interest rate effect, and net export effect.",
  },
  {
    id: "ad-f2",
    front: "Wealth Effect",
    back: "Lower price level → existing money buys more → consumers spend more.",
  },
  {
    id: "ad-f3",
    front: "Interest Rate Effect",
    back: "Lower price level reduces money demand for transactions, freeing funds for banks. Interest rates fall, stimulating borrowing and investment. This is one of three reasons the AD curve slopes down.",
  },
  {
    id: "ad-f4",
    front: "Net Export Effect",
    back: "Domestic price level falls → domestic goods become relatively cheaper for foreign buyers → exports up, imports down.",
  },
  {
    id: "ad-f5",
    front: "Shifters of AD",
    back: "Changes in C, I, G, or Xn at every price level. Tax cuts, consumer confidence, government spending increases, foreign income growth — all shift AD right. The reverse shifts AD left.",
  },
  {
    id: "ad-f6",
    front: "Multiplier Effect",
    back: "Multiplier = 1/(1 − MPC). One dollar of new spending generates more than one dollar of GDP because recipients re-spend a portion. MPC of 0.8 gives a multiplier of 5.",
  },
];

// ── Aggregate Supply ─────────────────────────────────────────────────
export const aggregateSupplyFlashcards: Flashcard[] = [
  {
    id: "as-f1",
    front: "Short-Run Aggregate Supply (SRAS)",
    back: "Upward sloping. Wages and input prices are sticky in the short run, so when the price level rises, firms earn higher margins and increase output.",
  },
  {
    id: "as-f2",
    front: "Long-Run Aggregate Supply (LRAS)",
    back: "Vertical at potential GDP. Output determined by resources, technology, and institutions — not the price level.",
  },
  {
    id: "as-f3",
    front: "Stagflation",
    back: "Rising prices and rising unemployment simultaneously. Typically caused by a negative supply shock — OPEC's 1973 oil embargo is the classic case. SRAS shifts left: output falls, price level rises.",
  },
  {
    id: "as-f4",
    front: "Shifters of SRAS",
    back: "Input prices, productivity, business taxes, subsidies, supply shocks. Cheaper inputs → SRAS right. Costlier inputs → SRAS left.",
  },
  {
    id: "as-f5",
    front: "Long-Run Self-Correction",
    back: "Below potential GDP, wages eventually fall → SRAS shifts right → economy returns to full employment. The process works but can take years, which is why policymakers often intervene rather than wait.",
  },
  {
    id: "as-f6",
    front: "Recessionary vs. Inflationary Gap",
    back: "Recessionary gap: actual GDP < potential GDP, unemployment above NRU. Inflationary gap: actual GDP > potential GDP, economy overheating.",
  },
];

// ── Fiscal Policy ────────────────────────────────────────────────────
export const fiscalPolicyFlashcards: Flashcard[] = [
  {
    id: "fp-f1",
    front: "Fiscal Policy",
    back: "Government use of taxation and spending to influence the economy. Controlled by Congress and the President, not the Fed.",
  },
  {
    id: "fp-f2",
    front: "Expansionary Fiscal Policy",
    back: "Tax cuts or increased government spending → AD shifts right. Used to combat recessions. Produces a budget deficit.",
  },
  {
    id: "fp-f3",
    front: "Contractionary Fiscal Policy",
    back: "Raise taxes or cut spending → AD shifts left. Cools inflation, moves budget toward surplus.",
  },
  {
    id: "fp-f4",
    front: "Automatic Stabilizers",
    back: "Progressive income taxes and unemployment insurance kick in without any new legislation. In a downturn, tax revenue falls and transfer payments rise automatically, cushioning the drop in aggregate demand.",
  },
  {
    id: "fp-f5",
    front: "Crowding-Out Effect",
    back: "Government borrows heavily → demand for loanable funds rises → interest rates rise → private investment falls. Partially offsets the fiscal stimulus.",
  },
  {
    id: "fp-f6",
    front: "Spending Multiplier vs. Tax Multiplier",
    back: "Spending multiplier = 1/MPS. Tax multiplier = MPC/MPS. The spending multiplier is always larger because government purchases enter GDP directly, while a tax cut partly leaks into savings first.",
  },
];

// ── Monetary Policy ──────────────────────────────────────────────────
export const monetaryPolicyFlashcards: Flashcard[] = [
  {
    id: "mp-f1",
    front: "Federal Reserve (The Fed)",
    back: "Central bank of the US. Dual mandate: price stability and maximum employment. Operates independently of Congress.",
  },
  {
    id: "mp-f2",
    front: "Federal Funds Rate",
    back: "The overnight interbank lending rate — the Fed's primary policy lever.",
  },
  {
    id: "mp-f3",
    front: "Open Market Operations (OMO)",
    back: "Buy bonds → money supply up → interest rates down (expansionary). Sell bonds → money supply down → interest rates up (contractionary). Most frequently used monetary policy tool.",
  },
  {
    id: "mp-f4",
    front: "Reserve Requirement & Discount Rate",
    back: "Reserve requirement: fraction of deposits banks must hold. Discount rate: interest the Fed charges on direct loans to banks. Lowering either is expansionary. The Fed largely replaced reserve requirements with an ample-reserves framework.",
  },
  {
    id: "mp-f5",
    front: "Money Multiplier",
    back: "1 / reserve ratio. Reserve ratio of 10% → multiplier of 10.",
  },
  {
    id: "mp-f6",
    front: "Expansionary vs. Contractionary Monetary Policy",
    back: "Expansionary (easy money): buy bonds, lower rates, increase money supply, AD shifts right. Contractionary (tight money): sell bonds, raise rates, shrink money supply, AD shifts left.",
  },
];

// ── Loanable Funds Market ────────────────────────────────────────────
export const loanableFundsFlashcards: Flashcard[] = [
  {
    id: "lf-f1",
    front: "Loanable Funds Market",
    back: "Market where savers supply funds and borrowers demand them. The real interest rate is the equilibrating price.",
  },
  {
    id: "lf-f2",
    front: "Supply of Loanable Funds",
    back: "Saving by households, firms, and foreign investors. Higher real interest rates increase the incentive to save, so the curve slopes upward.",
  },
  {
    id: "lf-f3",
    front: "Demand for Loanable Funds",
    back: "Borrowing for investment: factories, equipment, housing. Government deficit spending adds to demand. Downward sloping because lower rates make more projects profitable.",
  },
  {
    id: "lf-f4",
    front: "Government Budget Deficit & Loanable Funds",
    back: "Larger deficit → demand for loanable funds shifts right → real interest rate rises → private investment crowded out.",
  },
  {
    id: "lf-f5",
    front: "Real vs. Nominal Interest Rate",
    back: "Real = nominal − inflation. A 5% savings rate with 3% inflation yields only 2% in real terms. Decisions about borrowing and lending hinge on the real rate.",
  },
  {
    id: "lf-f6",
    front: "Fisher Effect",
    back: "Nominal rate ≈ real rate + expected inflation. If expected inflation rises by 2 percentage points, nominal rates rise by roughly the same amount, leaving the real rate unchanged.",
  },
];

// ── Economic Growth ──────────────────────────────────────────────────
export const economicGrowthFlashcards: Flashcard[] = [
  {
    id: "eg-f1",
    front: "Economic Growth",
    back: "A sustained increase in real GDP per capita. Graphically, the PPC and LRAS both shift outward.",
  },
  {
    id: "eg-f2",
    front: "Determinants of Growth",
    back: "Physical capital, human capital, natural resources, technology. Investment in any of these shifts LRAS right and expands the PPC.",
  },
  {
    id: "eg-f3",
    front: "Human Capital",
    back: "The skills, education, training, and health embodied in workers. South Korea's rapid postwar growth is frequently cited as a human capital success story.",
  },
  {
    id: "eg-f4",
    front: "Productivity",
    back: "Output per unit of input. The single most important determinant of long-run living standards.",
  },
  {
    id: "eg-f5",
    front: "Rule of 70",
    back: "70 / growth rate = approximate doubling time. 2% growth → 35 years to double. 7% → 10 years.",
  },
  {
    id: "eg-f6",
    front: "Supply-Side / Long-Run Growth Policies",
    back: "Education investment, R&D funding, infrastructure spending, deregulation. All aimed at expanding productive capacity — shifting LRAS and the PPC outward over time.",
  },
];

// ── International Trade ──────────────────────────────────────────────
export const internationalTradeFlashcards: Flashcard[] = [
  {
    id: "it-f1",
    front: "Free Trade & Gains from Trade",
    back: "Countries specialize according to comparative advantage and trade, enabling consumption beyond their own PPCs.",
  },
  {
    id: "it-f2",
    front: "Tariff",
    back: "A tax on imports. Raises domestic price, protects local producers, hurts consumers, and generates deadweight loss. Revenue goes to the government — contrast this with quotas.",
  },
  {
    id: "it-f3",
    front: "Quota",
    back: "A quantity limit on imports. Same price and DWL effects as a tariff, but quota rents go to whoever holds the import licenses rather than to the government treasury.",
  },
  {
    id: "it-f4",
    front: "Balance of Payments",
    back: "Current account + capital/financial account = 0.",
  },
  {
    id: "it-f5",
    front: "Current Account",
    back: "Net exports of goods and services, plus net investment income and net transfers. The US has run persistent current account deficits for decades, financed by capital inflows.",
  },
  {
    id: "it-f6",
    front: "Capital/Financial Account",
    back: "Records international asset transactions — foreign purchases of US bonds, American investment in overseas equities, etc. A current account deficit must be matched by a capital account surplus.",
  },
];

// ── Exchange Rates ───────────────────────────────────────────────────
export const exchangeRatesFlashcards: Flashcard[] = [
  {
    id: "er-f1",
    front: "Exchange Rate",
    back: "The price of one currency in terms of another, determined by supply and demand in foreign exchange markets.",
  },
  {
    id: "er-f2",
    front: "Appreciation vs. Depreciation",
    back: "Dollar appreciates → buys more foreign currency → US exports become more expensive abroad, imports become cheaper at home. Dollar depreciates → the reverse. Exporters prefer a weak dollar; importers and tourists abroad prefer a strong one.",
  },
  {
    id: "er-f3",
    front: "Floating Exchange Rate",
    back: "Determined entirely by market forces. The dollar, euro, and yen all float.",
  },
  {
    id: "er-f4",
    front: "Determinants of Exchange Rates",
    back: "Relative interest rates, inflation differentials, income levels, speculation, demand for foreign goods.",
  },
  {
    id: "er-f5",
    front: "Net Exports & Exchange Rates",
    back: "Weak dollar → US goods cheaper abroad → exports rise, imports fall. Strong dollar → opposite.",
  },
  {
    id: "er-f6",
    front: "Fixed Exchange Rate",
    back: "The government pegs its currency to another currency (or gold) and must buy or sell foreign reserves to maintain the rate. Requires large reserves and sacrifices independent monetary policy — the classic policy trilemma.",
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
