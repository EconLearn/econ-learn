import type { Flashcard } from "@/components/ui/FlashcardDeck";

// ── Basic Macro Concepts ─────────────────────────────────────────────
export const basicMacroFlashcards: Flashcard[] = [
  {
    id: "bm-f1",
    front: "Scarcity",
    back: "People want infinite things but resources are finite. Every society has to figure out what to produce, how, and for whom.",
  },
  {
    id: "bm-f2",
    front: "Opportunity Cost",
    back: "The next-best thing you didn't pick. If you spend $50K on a car instead of investing it, the opportunity cost is whatever that investment would've returned.",
  },
  {
    id: "bm-f3",
    front: "Production Possibilities Curve (PPC)",
    back: "Graph of all the max output combos with current resources. Inside the curve means you're slacking. Outside means you can't reach it yet. On the curve = fully efficient.",
  },
  {
    id: "bm-f4",
    front: "Comparative Advantage",
    back: "Whoever gives up less to make something should be the one making it. Even if the US is better at both cars and wheat than Canada, trade still helps if opportunity costs differ.",
  },
  {
    id: "bm-f5",
    front: "Absolute Advantage",
    back: "You make more stuff with the same resources. Cool, but it doesn't determine who should specialize — comparative advantage does.",
  },
  {
    id: "bm-f6",
    front: "Macroeconomics vs. Microeconomics",
    back: "Macro = big picture (GDP, unemployment, inflation across the whole economy). Micro = zoomed in on individual markets, firms, and households.",
  },
];

// ── GDP ──────────────────────────────────────────────────────────────
export const gdpFlashcards: Flashcard[] = [
  {
    id: "gdp-f1",
    front: "Gross Domestic Product (GDP)",
    back: "Total dollar value of all final goods and services produced inside a country's borders over a set period. Key word is 'final' — don't double-count intermediate goods.",
  },
  {
    id: "gdp-f2",
    front: "GDP Expenditure Approach",
    back: "GDP = C + I + G + (X − M). Consumer spending is by far the biggest chunk in the US — usually around 68-70% of GDP.",
  },
  {
    id: "gdp-f3",
    front: "Nominal vs. Real GDP",
    back: "Nominal uses today's prices, so inflation inflates the number. Real GDP strips out inflation by using a base year. Always use real GDP when comparing across years.",
  },
  {
    id: "gdp-f4",
    front: "GDP Deflator",
    back: "Covers ALL domestically produced goods, not just a fixed basket. Formula: (Nominal GDP / Real GDP) × 100. Different from CPI.",
  },
  {
    id: "gdp-f5",
    front: "What GDP Does NOT Measure",
    back: "Doesn't count stay-at-home parents' work, the black market, leisure time, environmental damage, or how income is distributed. Big number doesn't necessarily mean people are happy.",
  },
  {
    id: "gdp-f6",
    front: "GDP Per Capita",
    back: "GDP divided by population. Rough proxy for average living standards, but Qatar's high GDP per capita hides massive inequality between citizens and foreign workers.",
  },
];

// ── Business Cycle ───────────────────────────────────────────────────
export const businessCycleFlashcards: Flashcard[] = [
  {
    id: "bc-f1",
    front: "Business Cycle",
    back: "The economy's up-and-down rhythm: expansion, peak, contraction, trough, repeat. Tracked by changes in real GDP.",
  },
  {
    id: "bc-f2",
    front: "Expansion",
    back: "Good times — GDP rising, unemployment dropping, businesses hiring. Runs from the trough to the next peak.",
  },
  {
    id: "bc-f3",
    front: "Recession",
    back: "Broadly, a sustained drop in economic activity. The rule of thumb is two straight quarters of falling real GDP, though NBER looks at more than just that.",
  },
  {
    id: "bc-f4",
    front: "Peak",
    back: "The top of the cycle right before things start sliding. Output and employment are maxed out.",
  },
  {
    id: "bc-f5",
    front: "Trough",
    back: "Rock bottom. The economy stops shrinking and a new expansion begins from here.",
  },
  {
    id: "bc-f6",
    front: "Leading Economic Indicators",
    back: "Signals that move before the economy does — stock market performance, new building permits, consumer confidence surveys. Economists use these to try to predict what's coming.",
  },
];

// ── Unemployment & Inflation ─────────────────────────────────────────
export const unemploymentInflationFlashcards: Flashcard[] = [
  {
    id: "ui-f1",
    front: "Unemployment Rate",
    back: "(Unemployed / Labor Force) × 100. You have to be actively looking for work to count as unemployed — discouraged workers who gave up aren't included.",
  },
  {
    id: "ui-f2",
    front: "Types of Unemployment",
    back: "Frictional = between jobs (a college grad job hunting). Structural = skills don't match (coal miners when mines close). Cyclical = recessions. Seasonal = lifeguards in winter.",
  },
  {
    id: "ui-f3",
    front: "Natural Rate of Unemployment (NRU)",
    back: "The rate when the economy's at full employment — frictional plus structural, zero cyclical. It's never zero because people are always switching jobs or retraining.",
  },
  {
    id: "ui-f4",
    front: "Consumer Price Index (CPI)",
    back: "Tracks the cost of a fixed basket of goods urban consumers buy. If the basket cost $250 last year and $260 now, prices rose about 4%. Most-cited inflation measure.",
  },
  {
    id: "ui-f5",
    front: "Demand-Pull vs. Cost-Push Inflation",
    back: "Demand-pull: too many dollars chasing too few goods (AD shifts right). Cost-push: input costs spike — like oil prices tripling — and SRAS shifts left. Both raise the price level but for different reasons.",
  },
  {
    id: "ui-f6",
    front: "Phillips Curve",
    back: "Short run: unemployment and inflation move in opposite directions. Long run: the curve goes vertical at the natural rate — no permanent tradeoff.",
  },
];

// ── Aggregate Demand ─────────────────────────────────────────────────
export const aggregateDemandFlashcards: Flashcard[] = [
  {
    id: "ad-f1",
    front: "Aggregate Demand (AD)",
    back: "Total spending in the economy at each price level. Same components as GDP: C + I + G + (X − M). Slopes down for three specific reasons (wealth, interest rate, net export effects).",
  },
  {
    id: "ad-f2",
    front: "Wealth Effect",
    back: "Price level drops → your dollars buy more → you feel richer → you spend more. One of the three reasons AD slopes downward.",
  },
  {
    id: "ad-f3",
    front: "Interest Rate Effect",
    back: "Lower price level means people hold less money for transactions, so more money flows to banks, interest rates drop, and borrowing/investment picks up.",
  },
  {
    id: "ad-f4",
    front: "Net Export Effect",
    back: "If US prices fall relative to Europe, American goods get cheaper abroad. Exports rise, imports fall, net exports go up.",
  },
  {
    id: "ad-f5",
    front: "Shifters of AD",
    back: "Anything that changes C, I, G, or net exports at every price level. Tax cuts boost C, business optimism boosts I, more gov spending boosts G. All shift AD right.",
  },
  {
    id: "ad-f6",
    front: "Multiplier Effect",
    back: "One dollar of new spending creates more than one dollar of GDP because it gets re-spent. Multiplier = 1/(1 − MPC). If MPC is 0.8, the multiplier is 5.",
  },
];

// ── Aggregate Supply ─────────────────────────────────────────────────
export const aggregateSupplyFlashcards: Flashcard[] = [
  {
    id: "as-f1",
    front: "Short-Run Aggregate Supply (SRAS)",
    back: "Upward sloping because wages and contracts are sticky in the short run. If prices rise but wages haven't caught up, firms earn more per unit and produce more.",
  },
  {
    id: "as-f2",
    front: "Long-Run Aggregate Supply (LRAS)",
    back: "Vertical line at potential GDP. In the long run, output depends on resources, technology, and institutions — not the price level.",
  },
  {
    id: "as-f3",
    front: "Stagflation",
    back: "The worst of both worlds: prices rising AND unemployment rising at the same time. Usually from a supply shock — like the 1970s oil crisis when OPEC cut production.",
  },
  {
    id: "as-f4",
    front: "Shifters of SRAS",
    back: "Input prices (wages, oil, raw materials), productivity changes, business taxes, subsidies, supply shocks. Cheaper inputs shift SRAS right; pricier inputs shift it left.",
  },
  {
    id: "as-f5",
    front: "Long-Run Self-Correction",
    back: "Economy below potential? Workers eventually accept lower wages → SRAS shifts right → back to full employment. It works, but it can take years, which is why governments intervene.",
  },
  {
    id: "as-f6",
    front: "Recessionary vs. Inflationary Gap",
    back: "Recessionary: actual GDP < potential, unemployment's above the NRU. Inflationary: actual GDP > potential, economy's running too hot.",
  },
];

// ── Fiscal Policy ────────────────────────────────────────────────────
export const fiscalPolicyFlashcards: Flashcard[] = [
  {
    id: "fp-f1",
    front: "Fiscal Policy",
    back: "Congress and the President using taxes and spending to steer the economy. Not the Fed — that's monetary policy.",
  },
  {
    id: "fp-f2",
    front: "Expansionary Fiscal Policy",
    back: "Cut taxes or boost government spending to fight a recession. Shifts AD right. Creates a budget deficit — the government's spending more than it takes in.",
  },
  {
    id: "fp-f3",
    front: "Contractionary Fiscal Policy",
    back: "Raise taxes or cut spending to cool down inflation. Shifts AD left. Moves the budget toward surplus.",
  },
  {
    id: "fp-f4",
    front: "Automatic Stabilizers",
    back: "Built-in shock absorbers like unemployment insurance and progressive taxes. Recession hits? People automatically get benefits and pay less tax without Congress passing anything new.",
  },
  {
    id: "fp-f5",
    front: "Crowding-Out Effect",
    back: "Government borrows a ton to fund deficit spending → interest rates rise → businesses borrow less → private investment falls. So the fiscal boost isn't as big as you'd hope.",
  },
  {
    id: "fp-f6",
    front: "Spending Multiplier vs. Tax Multiplier",
    back: "Spending multiplier (1/MPS) is bigger than the tax multiplier (MPC/MPS). Why? A dollar of government spending goes straight into GDP. A dollar tax cut partly gets saved first.",
  },
];

// ── Monetary Policy ──────────────────────────────────────────────────
export const monetaryPolicyFlashcards: Flashcard[] = [
  {
    id: "mp-f1",
    front: "Federal Reserve (The Fed)",
    back: "America's central bank. Dual mandate: keep prices stable and maximize employment. Independent from Congress — they don't have to run for reelection.",
  },
  {
    id: "mp-f2",
    front: "Federal Funds Rate",
    back: "The rate banks charge each other for overnight loans. It's the Fed's main lever — when you hear \"the Fed raised rates,\" this is what they're talking about.",
  },
  {
    id: "mp-f3",
    front: "Open Market Operations (OMO)",
    back: "Fed buys bonds → injects money into banks → money supply up → rates drop (expansionary). Fed sells bonds → pulls money out → rates rise (contractionary). This is their most-used tool.",
  },
  {
    id: "mp-f4",
    front: "Reserve Requirement & Discount Rate",
    back: "Reserve req = fraction of deposits banks must keep on hand. Discount rate = what the Fed charges banks who borrow directly. Lowering either one is expansionary.",
  },
  {
    id: "mp-f5",
    front: "Money Multiplier",
    back: "1 / reserve requirement. If banks must hold 10%, the multiplier is 10 — meaning $1 of new reserves can eventually create $10 in the money supply through repeated lending.",
  },
  {
    id: "mp-f6",
    front: "Expansionary vs. Contractionary Monetary Policy",
    back: "Easy money: buy bonds, lower rates, money supply grows, AD shifts right. Tight money: sell bonds, raise rates, money supply shrinks, AD shifts left. Opposite directions, same toolkit.",
  },
];

// ── Loanable Funds Market ────────────────────────────────────────────
export const loanableFundsFlashcards: Flashcard[] = [
  {
    id: "lf-f1",
    front: "Loanable Funds Market",
    back: "Where savers meet borrowers. The real interest rate is the price — it adjusts until the amount people want to save equals the amount firms and government want to borrow.",
  },
  {
    id: "lf-f2",
    front: "Supply of Loanable Funds",
    back: "Comes from savings — households, businesses, and foreign investors parking their money. Higher real interest rates make saving more attractive, so the curve slopes up.",
  },
  {
    id: "lf-f3",
    front: "Demand for Loanable Funds",
    back: "Firms borrowing to build factories, buy equipment, or expand. Government deficit spending too. Lower rates = cheaper to borrow = more demanded. Downward slope.",
  },
  {
    id: "lf-f4",
    front: "Government Budget Deficit & Loanable Funds",
    back: "Big deficit means the government's borrowing more → demand for loanable funds shifts right → real interest rate rises → private investment gets crowded out.",
  },
  {
    id: "lf-f5",
    front: "Real vs. Nominal Interest Rate",
    back: "Real = nominal minus inflation. If your savings account pays 5% but inflation's 3%, you're only 2% richer in real terms. Real rate is what actually matters for decisions.",
  },
  {
    id: "lf-f6",
    front: "Fisher Effect",
    back: "When expected inflation rises by 2%, nominal interest rates rise by about 2% too, keeping the real rate roughly constant. Named after Irving Fisher.",
  },
];

// ── Economic Growth ──────────────────────────────────────────────────
export const economicGrowthFlashcards: Flashcard[] = [
  {
    id: "eg-f1",
    front: "Economic Growth",
    back: "Sustained rise in real GDP per capita. On the PPC, the whole curve shifts outward — the economy can produce more of everything.",
  },
  {
    id: "eg-f2",
    front: "Determinants of Growth",
    back: "Physical capital (machines, factories), human capital (education, skills), natural resources, and technology. Pour into these and both LRAS and the PPC shift out.",
  },
  {
    id: "eg-f3",
    front: "Human Capital",
    back: "What workers carry in their heads — skills, training, education, health. A country that invests in schools and job training grows faster. South Korea's a great example of this.",
  },
  {
    id: "eg-f4",
    front: "Productivity",
    back: "Output per worker or per hour. It's the single biggest driver of long-run living standard improvements. More productive workers = more output without more inputs.",
  },
  {
    id: "eg-f5",
    front: "Rule of 70",
    back: "70 ÷ growth rate = years to double. Growing at 2%? GDP doubles in 35 years. At 7%? Just 10 years. Small differences in growth rates are huge over time.",
  },
  {
    id: "eg-f6",
    front: "Supply-Side / Long-Run Growth Policies",
    back: "Investing in education, funding R&D, building infrastructure, cutting red tape. All aimed at expanding what the economy can produce — shifting LRAS and PPC outward.",
  },
];

// ── International Trade ──────────────────────────────────────────────
export const internationalTradeFlashcards: Flashcard[] = [
  {
    id: "it-f1",
    front: "Free Trade & Gains from Trade",
    back: "Countries specialize based on comparative advantage and trade. Both sides end up consuming beyond their own PPCs. Total world output goes up.",
  },
  {
    id: "it-f2",
    front: "Tariff",
    back: "Tax on imported goods. Raises the domestic price, helps local producers, hurts consumers who pay more, and creates deadweight loss. The US tariffs on steel are a recent example.",
  },
  {
    id: "it-f3",
    front: "Quota",
    back: "Hard limit on how many units you can import. Same effect on price and DWL as a tariff, but the extra revenue (quota rents) goes to whoever holds the import licenses, not the government.",
  },
  {
    id: "it-f4",
    front: "Balance of Payments",
    back: "Tracks every international transaction. Current account + capital/financial account = zero. If you're running a trade deficit, capital has to be flowing in to balance it.",
  },
  {
    id: "it-f5",
    front: "Current Account",
    back: "Exports minus imports of goods and services, plus investment income and transfers. The US typically runs a deficit here — we import more than we export.",
  },
  {
    id: "it-f6",
    front: "Capital/Financial Account",
    back: "Money flowing in and out for investments — foreigners buying US bonds, Americans investing in European stocks. A current account deficit is always matched by a capital account surplus.",
  },
];

// ── Exchange Rates ───────────────────────────────────────────────────
export const exchangeRatesFlashcards: Flashcard[] = [
  {
    id: "er-f1",
    front: "Exchange Rate",
    back: "How much one currency costs in terms of another. Right now $1 might buy 0.92 euros — that rate moves constantly based on supply and demand in forex markets.",
  },
  {
    id: "er-f2",
    front: "Appreciation vs. Depreciation",
    back: "Dollar appreciates = it buys more foreign currency = American tourists love it but exporters hate it. Dollar depreciates = opposite. Exports get cheaper, imports get pricier.",
  },
  {
    id: "er-f3",
    front: "Floating Exchange Rate",
    back: "Market forces alone set the rate — no government interference. The dollar, euro, and yen all float.",
  },
  {
    id: "er-f4",
    front: "Determinants of Exchange Rates",
    back: "Relative interest rates, inflation differences, income levels, and demand for foreign goods. If US rates rise, foreign investors pile into dollar assets, and the dollar appreciates.",
  },
  {
    id: "er-f5",
    front: "Net Exports & Exchange Rates",
    back: "Weak dollar → US goods are cheap abroad → exports rise, imports fall → net exports increase. Strong dollar → the reverse.",
  },
  {
    id: "er-f6",
    front: "Fixed Exchange Rate",
    back: "Government locks the currency to another currency or gold. The central bank has to constantly buy/sell foreign reserves to hold the peg. China used to do this with the yuan.",
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
