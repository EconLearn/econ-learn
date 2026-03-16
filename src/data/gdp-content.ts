import type { PracticeQuestion } from "@/data/supply-demand-content";

export const gdpContent = {
  title: "GDP",
  subtitle:
    "From Simon Kuznets' 1934 report to Congress to the $27.4 trillion U.S. economy of 2024 — how the world learned to measure national output, and what the number still misses",
  sections: [
    {
      heading: "What GDP Actually Measures (and What It Misses)",
      content: `Before 1934, no country on Earth had a reliable way to measure its total economic output. The Great Depression was devastating the United States, and policymakers were flying blind. Congress commissioned economist Simon Kuznets to build a system of national income accounts, and by 1937, the framework that would become **Gross Domestic Product** was taking shape.

**GDP** is the total market value of all *final* goods and services produced *within a country's borders* during a specific time period — usually a year or a quarter. Every bakery loaf, every haircut, every new Toyota Camry off the Georgetown, Kentucky assembly line, every hour of legal counsel counts toward the total. U.S. GDP reached approximately $27.4 trillion in 2023.

The word "final" carries significant weight. Tires sold to Ford are an *intermediate good* — their value is already embedded in the finished car's price. Counting both the tires and the car would be **double counting**, inflating the GDP figure beyond true output. GDP captures only the finished product reaching the end user.

"Domestic" matters equally. A Japanese-owned Honda factory in Marysville, Ohio contributes to *U.S.* GDP because production happens on American soil. An American-owned Apple supplier in Shenzhen contributes to *Chinese* GDP. Location of production, not ownership, determines which nation claims the output. That boundary distinction was formally standardized by the United Nations System of National Accounts in 1953.`,
    },
    {
      heading: "The Expenditure Approach: C + I + G + NX",
      content: `The most common method for measuring GDP adds up all spending on final goods and services. The **expenditure approach** sorts this spending into four categories, a framework that became standard in U.S. national accounting by the late 1940s.

**Consumption (C)** is the largest component — roughly 68-70% of U.S. GDP in recent decades. Groceries, rent, Netflix subscriptions, dental visits. Everything households purchase.

**Investment (I)** covers business spending on capital goods (factories, machinery, software), residential construction, and changes in business inventories. A persistent source of confusion on AP exams: "investment" in GDP accounting does not mean buying shares of Apple stock. It means physical or productive assets. When Intel broke ground on its $20 billion semiconductor fabrication plant in Ohio in 2022, that was investment.

**Government purchases (G)** includes federal, state, and local spending on goods and services — teacher salaries, military equipment, highway construction. Transfer payments like Social Security checks are excluded because the government receives no new good or service in return.

**Net exports (NX)** equals exports minus imports (X − M). Boeing selling a 787 Dreamliner to a Japanese airline adds to U.S. GDP. An American buying a Samsung television subtracts from it. The U.S. has run a trade deficit almost every year since 1976, so NX is typically negative.

**GDP = C + I + G + NX**

This is an accounting identity, not a theory. Every dollar of final output gets purchased by someone, and that buyer falls into one of these four buckets.`,
    },
    {
      heading: "Nominal vs Real GDP and the GDP Deflator",
      content: `GDP rises from $20 trillion to $21 trillion. Did the economy actually produce more goods and services, or did prices simply climb? That question haunted economic measurement from the start, and the distinction between nominal and real GDP is the answer the profession developed.

**Nominal GDP** uses *current-year prices*. If both output quantities and prices rise, nominal GDP rises — but the two effects are tangled together.

**Real GDP** uses *constant base-year prices*, stripping out inflation to isolate actual changes in production. Real GDP is the figure that matters for growth calculations and recession calls. When the NBER declared a recession in 2008, it was tracking real GDP, not nominal.

The **GDP deflator** bridges the two:

GDP Deflator = (Nominal GDP / Real GDP) x 100

Unlike the Consumer Price Index (which the Bureau of Labor Statistics has published since 1913 and which tracks a basket of consumer goods), the deflator covers the price level of *everything* produced domestically. A deflator moving from 100 to 105 means the overall domestic price level rose 5%.

The 2021-2022 COVID recovery exposed this distinction starkly. Nominal U.S. GDP surged, partly on the back of rapid price increases that pushed annual inflation above 9% by June 2022. Real GDP growth was considerably weaker. The economy was producing more, but not nearly as much as the nominal headlines implied.`,
    },
    {
      heading: "Worked Example: Calculating Real GDP",
      content: `An economy produces only two goods: tacos and textbooks.

**Base Year:**
Tacos: 100 units at $2 each = $200
Textbooks: 20 units at $50 each = $1,000
**Nominal GDP (base year) = $1,200**

**Current Year:**
Tacos: 120 units at $3 each = $360
Textbooks: 25 units at $60 each = $1,500
**Nominal GDP (current year) = $1,860**

A 55% nominal increase. But how much reflects real growth versus price inflation?

**Calculate Real GDP** using base-year prices applied to current-year quantities:
Tacos: 120 x $2 = $240
Textbooks: 25 x $50 = $1,250
**Real GDP (current year) = $1,490**

**GDP Deflator** = ($1,860 / $1,490) x 100 = **124.8**

Real output grew from $1,200 to $1,490 — a **24.2% increase**. The deflator reveals prices rose **24.8%**. The 55% nominal gain splits into roughly equal parts real growth and inflation. Skipping the real GDP calculation would have overstated actual output gains by more than double. Kuznets himself warned Congress in the 1930s that raw dollar figures could be deeply misleading without price adjustments.`,
    },
    {
      heading: "Limitations of GDP",
      content: `GDP became the world's most-cited economic statistic after World War II, when the Bretton Woods institutions adopted it as the standard yardstick for national economic performance. Kuznets himself cautioned that the metric had blind spots. He was right.

**Unpaid work is invisible.** A parent raising children at home produces real economic value, but GDP records none of it. If that same parent hires a nanny and takes a paid job, GDP rises — even though total productive activity may be unchanged. Household production, volunteering, and caregiving all fall outside the count. Economists have estimated that unpaid household labor in the U.S. would add trillions to GDP if it were included.

**The underground economy is missing.** Cash-paid labor, unreported income, illegal transactions — none of it appears. In some developing countries, the informal economy may account for 30-40% of actual economic activity, meaning GDP systematically understates their true output.

**GDP ignores inequality.** A country with $10 trillion in GDP could have most income concentrated among a tiny elite while the median citizen struggles. **GDP per capita** is still just an average. It says nothing about distribution. The Gini coefficient and income quintile data exist to fill that gap, but they rarely make front pages.

**Environmental destruction can boost GDP.** The Deepwater Horizon oil spill in 2010 generated billions in paid cleanup activity — crews, equipment, lawyers — all of which counted as GDP. The ecological damage to the Gulf of Mexico was never subtracted. Clear-cutting a rainforest and selling the timber adds to GDP. The destroyed natural capital does not register as a loss.

**Quality of life goes unmeasured.** Leisure time, mental health, personal safety, political freedom, life satisfaction. None of it appears in GDP. The U.S. has the largest GDP on Earth but ranks below many smaller economies on life expectancy and self-reported happiness indices.

GDP remains the best single measure of market production. But it measures *output*, not *well-being*. Kuznets warned about conflating the two in 1934. Ninety years later, the warning still applies.`,
    },
  ],
};

export const gdpQuestions: PracticeQuestion[] = [
  {
    id: "gdp-1",
    question:
      "A U.S. citizen owns a factory in Mexico. The output of that factory is included in:",
    options: [
      "U.S. GDP only",
      "Mexico's GDP only",
      "Both U.S. GDP and Mexico's GDP",
      "Neither country's GDP",
    ],
    correctIndex: 1,
    explanation:
      "GDP measures production within a country's borders, regardless of ownership. The factory is in Mexico, so its output counts toward Mexico's GDP. Ownership would matter for GNP (Gross National Product), which tracks output by a country's citizens. Option A confuses GDP with GNP — a distinction formalized in national accounting standards after World War II.",
  },
  {
    id: "gdp-2",
    question:
      "Which of the following would be counted in U.S. GDP for this year?",
    options: [
      "A family selling their used car to a neighbor",
      "The federal government paying Social Security benefits",
      "A restaurant purchasing flour from a wholesale supplier",
      "A homebuilder constructing and selling a new house",
    ],
    correctIndex: 3,
    explanation:
      "A new house is a final good produced in the current period. Option A fails because used goods were already counted when first produced. Option B is a transfer payment — no new production occurs in exchange. Option C is an intermediate good whose value will be captured in the final product sold to consumers.",
  },
  {
    id: "gdp-3",
    question:
      "If nominal GDP increased by 8% and the GDP deflator increased by 5%, real GDP growth was approximately:",
    options: ["13%", "8%", "5%", "3%"],
    correctIndex: 3,
    explanation:
      "Real GDP growth approximately equals nominal growth minus inflation: 8% − 5% = 3%. The precise formula — ((1.08 / 1.05) − 1) — yields about 2.86%, which rounds to 3%. Option A incorrectly adds the two figures. Option B ignores inflation entirely. Option C mistakes the inflation rate for the growth rate.",
  },
  {
    id: "gdp-4",
    question:
      "Which component of GDP (expenditure approach) is typically the largest in the United States?",
    options: [
      "Investment (I)",
      "Government purchases (G)",
      "Net exports (NX)",
      "Consumption (C)",
    ],
    correctIndex: 3,
    explanation:
      "Consumer spending has dominated U.S. GDP since national income accounting began — roughly 68-70% of the total in recent decades. Investment runs around 17-18%, government purchases around 17%, and net exports are typically negative because the U.S. has run a trade deficit almost continuously since 1976.",
  },
  {
    id: "gdp-5",
    question:
      "A parent quits a $60,000 job to stay home and care for their children full-time. What happens to GDP?",
    options: [
      "GDP is unaffected because childcare is always excluded",
      "GDP decreases because the parent's paid output is lost, while unpaid caregiving is not counted",
      "GDP increases because the family saves on daycare costs",
      "GDP increases because the parent is now more productive",
    ],
    correctIndex: 1,
    explanation:
      "GDP only captures market transactions. The $60,000 salary was counted; unpaid caregiving at home is not, even though it has real economic value. This is one of the limitations Kuznets identified in the 1930s. Option A is wrong because paid childcare (daycare services) IS counted in GDP. Option C confuses saving money with producing output.",
  },
  {
    id: "gdp-6",
    question:
      "Why does GDP exclude intermediate goods from its calculation?",
    options: [
      "Intermediate goods have no economic value",
      "Including them would result in double counting",
      "Only services are counted in GDP, not goods",
      "Intermediate goods are only counted in GNP",
    ],
    correctIndex: 1,
    explanation:
      "The value of intermediate goods is already embedded in the final good's price. Counting the steel sold to General Motors AND the finished Chevrolet would count the steel twice — inflating GDP beyond the true value of final production. Option A is wrong because intermediate goods absolutely have value; their value is simply captured downstream in the final product.",
  },
  {
    id: "gdp-7",
    question:
      "In a year when the GDP deflator equals 100, which of the following must be true?",
    options: [
      "The economy is experiencing no inflation",
      "Nominal GDP and real GDP are equal because this is the base year",
      "The economy is in a recession",
      "Consumer prices have not changed since last year",
    ],
    correctIndex: 1,
    explanation:
      "A GDP deflator of 100 means nominal GDP equals real GDP — the definition of the base year, since current prices match base-year prices. Option A is misleading; the deflator being 100 just means the price level matches the base year, not that there is zero year-over-year inflation. Option D confuses the GDP deflator with the CPI; they measure different baskets of goods.",
  },
  {
    id: "gdp-8",
    question:
      "An economy produces only shoes and shirts. In the base year, 100 shoes sell at $50 and 200 shirts sell at $20. In the current year, 120 shoes sell at $60 and 220 shirts sell at $25. What is the current-year real GDP?",
    options: [
      "$12,700",
      "$10,400",
      "$12,200",
      "$9,000",
    ],
    correctIndex: 1,
    explanation:
      "Real GDP applies base-year prices to current-year quantities: shoes at 120 × $50 = $6,000; shirts at 220 × $20 = $4,400. Total: $10,400. Option A ($12,700) is nominal GDP for the current year (120 × $60 + 220 × $25), which fails to strip out price increases. Option D ($9,000) is base-year nominal GDP (100 × $50 + 200 × $20). Option C does not correspond to any correct calculation with the given data.",
  },
  {
    id: "gdp-9",
    question:
      "Nominal GDP is $800 billion and real GDP is $640 billion. What is the GDP deflator, and what does it indicate?",
    options: [
      "80; the price level has fallen 20% since the base year",
      "125; the price level has risen 25% since the base year",
      "160; the economy is in a recession",
      "1.25; nominal GDP exceeds real GDP by 25 percentage points",
    ],
    correctIndex: 1,
    explanation:
      "GDP deflator = (Nominal / Real) × 100 = ($800B / $640B) × 100 = 125. A deflator of 125 means the overall price level is 25% higher than in the base year. Option A reverses the formula (divides real by nominal). Option C produces an arithmetic error and incorrectly connects a price index to a recession call. Option D omits the multiplication by 100, which is not the standard format.",
  },
  {
    id: "gdp-10",
    question:
      "Which of the following transactions would NOT be included in the calculation of GDP?",
    options: [
      "A law firm billing a client $5,000 for legal services",
      "The federal government purchasing $2 million in new military equipment",
      "A homeowner selling her house, built in 2005, for $350,000 in the current year",
      "A car manufacturer producing 1,000 vehicles that remain unsold in inventory at year-end",
    ],
    correctIndex: 2,
    explanation:
      "Reselling an existing home does not represent new production — that house was already counted when it was built in 2005. The real estate agent's commission would count as a current service, but the home itself does not re-enter GDP. Option A is a current final service. Option B is government purchases (G). Option D counts because unsold inventory is classified as investment (I) in GDP accounting — the vehicles were produced in the current period.",
  },
  {
    id: "gdp-11",
    question:
      "Country X has a GDP of $2 trillion and a population of 50 million. Country Y has a GDP of $500 billion and a population of 10 million. A student concludes that citizens in both countries enjoy the same standard of living because GDP per capita is equal. What is the most significant flaw in this reasoning?",
    options: [
      "The student failed to adjust for inflation using real GDP",
      "GDP per capita is an average that ignores income distribution; Country X could have extreme inequality while Country Y distributes income more evenly",
      "GDP per capita does not account for differences in population growth rates",
      "The student should have used GNP per capita instead of GDP per capita",
    ],
    correctIndex: 1,
    explanation:
      "Both countries show $40,000 per capita, but that average reveals nothing about distribution. Country X might have a small elite earning millions while most citizens live in poverty, whereas Country Y might have a broad middle class. Measures like the Gini coefficient exist precisely to capture what per-capita averages obscure. Option A raises a valid concern, but the question's core flaw is distributional. Option C is irrelevant to a point-in-time calculation. Option D suffers from the same distributional blindness.",
  },
  {
    id: "gdp-12",
    question:
      "A steel company sells $10 million worth of steel to an automobile manufacturer, which then produces cars sold to consumers for $25 million. What is the contribution to GDP from these transactions?",
    options: [
      "$35 million, because both the steel and cars are productive output",
      "$25 million, because only the final goods sold to consumers are counted",
      "$15 million, because GDP only counts the value added at each stage",
      "$10 million, because only the intermediate good represents real production",
    ],
    correctIndex: 1,
    explanation:
      "GDP counts only final goods to avoid double counting. The $10 million in steel is embedded in the $25 million car price. Option A commits that double-counting error. Option C ($15 million) represents only the auto manufacturer's value added, but the value-added approach sums all stages ($10M + $15M = $25M), reaching the same answer. Option D incorrectly excludes the final product.",
  },
  {
    id: "gdp-13",
    question:
      "A massive earthquake destroys infrastructure across a region. In the following year, GDP rises significantly due to reconstruction spending. Which of the following best explains why this GDP increase is misleading as a measure of welfare?",
    options: [
      "The reconstruction spending should be excluded from GDP because it is government expenditure",
      "GDP measures market production, not net welfare; the reconstruction merely restores destroyed capital rather than creating new wealth, and the loss of the original infrastructure is never subtracted",
      "The GDP increase is misleading because the earthquake reduced the labor force permanently",
      "GDP should have fallen because natural disasters always reduce economic output",
    ],
    correctIndex: 1,
    explanation:
      "Reconstruction spending genuinely counts as new production — government purchases and private investment. But the destroyed capital (roads, buildings, homes) is never subtracted from GDP. Society spends billions to return to where it started, yet GDP registers a gain. After the 2011 Tohoku earthquake, Japan's reconstruction spending boosted GDP figures even though the country had suffered catastrophic losses. Option A is wrong because government expenditure on goods and services is included in GDP. Option C makes an unsupported assumption. Option D is incorrect because reconstruction activity does increase measured output.",
  },
  {
    id: "gdp-14",
    question:
      "Using the expenditure approach, if consumption is $10 trillion, investment is $3 trillion, government purchases are $3.5 trillion, exports are $2 trillion, and imports are $2.8 trillion, what is GDP?",
    options: [
      "$21.3 trillion",
      "$15.7 trillion",
      "$16.5 trillion",
      "$14.9 trillion",
    ],
    correctIndex: 1,
    explanation:
      "GDP = C + I + G + NX = $10T + $3T + $3.5T + ($2T − $2.8T) = $15.7 trillion. Net exports are −$0.8T because imports exceed exports, reflecting the kind of trade deficit the U.S. has run since the mid-1970s. Option A adds imports instead of subtracting them. Option C likely ignores the net export calculation. Option D results from an additional arithmetic error.",
  },
];
