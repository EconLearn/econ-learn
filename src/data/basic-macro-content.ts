import type { PracticeQuestion } from "@/data/supply-demand-content";

export const basicMacroContent = {
  title: "Basic Macroeconomic Concepts",
  subtitle:
    "From the first national income accounts of the 1930s to the modern policy debates — how economists learned to study entire economies at once",
  sections: [
    {
      heading: "Why Zoom Out? Micro vs Macro",
      content: `In 1930, the world's most sophisticated economic theory could explain why the price of wheat fell when harvests were good. It could not explain why every market in the United States was collapsing at the same time, or why 15 million Americans had lost their jobs by 1933. The Great Depression forced economists to confront a gap in their toolkit.

That gap produced **macroeconomics** as a distinct field. **Microeconomics** had existed since at least the 1870s marginal revolution, studying individual firms, consumers, and product markets in isolation. **Macroeconomics** — the study of economy-wide phenomena like national output, the general price level, and total employment — emerged as a response to events that microeconomic models simply could not address.

A coffee shop with lines out the door can still go under if a nationwide recession kills demand for $5 lattes. The shop did nothing wrong. The whole ocean shifted underneath it. The AP Macroeconomics exam tests whether students can identify when a question requires the macro lens versus the micro one — a distinction that did not even exist in formal economics before the 1930s.`,
    },
    {
      heading: "The Circular Flow Model",
      content: `François Quesnay, physician to Louis XV of France, published the *Tableau Économique* in 1758 — arguably the first attempt to diagram how money circulates through an economy. The modern **circular flow model** descends from that same impulse, though it has grown considerably more detailed.

The basic loop: **households** sell labor to **firms**, firms pay wages, and households spend those wages on the goods firms produce. Money circulates endlessly.

Two additional players complicate the picture. The **government** collects taxes from both households and firms, then pushes revenue back out through public goods, transfer payments (Social Security, unemployment insurance), and subsidies. The **foreign sector** introduces exports (money flowing in from abroad) and imports (money flowing out to other countries).

Every dollar one party spends becomes income for another. When households abruptly stop buying — as they did during the financial panic of September 2008 — firms lose revenue and lay off workers, and those newly unemployed workers cut their own spending. The loop can seize up fast. Within six months of Lehman Brothers' collapse, 3.6 million American jobs vanished.

**Leakages** drain money from the circular flow: saving, taxes, imports. **Injections** add money back: investment, government spending, exports. When leakages outpace injections, the economy contracts. The circular flow model makes visible what Quesnay sensed 270 years ago — an economy is a system of interdependent flows, and disrupting one channel sends shockwaves through every other.`,
    },
    {
      heading: "Three Macroeconomic Goals",
      content: `By the time the Employment Act of 1946 became law, the U.S. federal government had formally committed itself to three macroeconomic objectives that remain the standard framework worldwide.

**1. Economic growth**, measured by rising real GDP per capita. China averaged roughly 10% annual growth from 1980 to 2010. Hundreds of millions of people escaped poverty in a single generation. No other economic force in recorded history matches that transformation at that speed.

**2. Low unemployment.** The human toll of joblessness goes beyond statistics. Persistent unemployment erodes skills, fractures communities, and compounds into long-term poverty. In April 2020, U.S. unemployment hit 14.7% — the highest since the Bureau of Labor Statistics began monthly tracking in 1940 — when COVID shutdowns idled the economy almost overnight.

**3. Stable prices.** Rapid inflation and deflation both wreck the ability to plan. Zimbabwe's hyperinflation in November 2008 reached an estimated 79.6 billion percent per month. Prices doubled roughly every 24 hours. Currency became worthless, and Zimbabweans reverted to barter. Price stability is the precondition that allows saving and long-term investment to function at all.

These three goals conflict more often than policymakers like to admit. Policies that push unemployment very low tend to stoke inflation. Aggressive inflation-fighting — like Paul Volcker's interest rate hikes in 1981, which pushed the federal funds rate above 20% — can trigger a severe recession. That tension sits at the center of every major macroeconomic policy debate from the 1940s to the present.`,
    },
    {
      heading: "Business Cycle Phases",
      content: `The National Bureau of Economic Research (NBER) has been officially dating U.S. business cycles since 1929, though the pattern itself is far older. Economies do not grow in straight lines. Output expands, overshoots, contracts, and recovers in a recurring pattern called the **business cycle**.

**Expansion.** Real GDP rises, unemployment falls, businesses invest, and consumer confidence climbs. The United States experienced its longest expansion on record from June 2009 to February 2020 — nearly 128 consecutive months of growth.

**Peak.** Output and employment reach their maximum. Cracks form beneath the surface. The housing market peaked in mid-2006, a full two years before the financial system collapsed in September 2008. Inflation often picks up near the peak as the economy strains against capacity limits.

**Contraction (recession).** Real GDP declines for a sustained period. Firms slash production, lay off workers, and consumer spending drops. Two consecutive quarters of falling real GDP is the common shorthand, though the NBER uses a broader set of indicators — employment, industrial production, real income — to make its official determination.

**Trough.** The bottom. Output has stopped falling, and the economy begins stabilizing before the next expansion.

A diagnostic shortcut: if unemployment is falling and GDP is rising, the economy is expanding. If unemployment is rising and GDP is falling, contraction. The NBER has identified 34 completed business cycles in the United States between 1854 and 2020.`,
    },
    {
      heading: "Economic Systems",
      content: `Every society must answer three questions: what to produce, how to produce it, and who gets the output. The answer defines its **economic system**, and the 20th century staged a massive global experiment testing the alternatives.

A **market economy** relies on private individuals and firms making decisions through price signals. When consumers wanted more automobiles in the 1920s, car prices and profits rose, attracting new producers like Chrysler (founded 1925). No central authority issued a directive. The price mechanism coordinated millions of decisions spontaneously.

A **command economy** puts the government in charge. The Soviet Union's Gosplan agency set production targets for everything from steel tonnage to shoe output beginning in 1928. The state could mobilize resources quickly — Soviet industrialization in the 1930s was extraordinarily rapid — but without price signals, planners consistently overproduced what nobody wanted and underproduced what everyone did. By the 1980s, chronic shortages of consumer goods were endemic.

The Soviet collapse in 1991 did not prove that government has no role in an economy. In practice, every modern nation operates a **mixed economy**, blending market forces with government intervention. The United States layers public schools, Medicare (established 1965), and environmental regulations (the EPA was created in 1970) on top of private enterprise. China runs state-owned enterprises alongside a massive private sector that generates over 60% of GDP. The real debate has never been "market versus command" — it has always been about how much of each.`,
    },
    {
      heading: "Worked Example: Identifying the Business Cycle",
      content: `Given the following data for a country over four years:

Year 1: Real GDP = $800B, Unemployment = 5.0%
Year 2: Real GDP = $860B, Unemployment = 4.2%
Year 3: Real GDP = $870B, Unemployment = 4.0%
Year 4: Real GDP = $830B, Unemployment = 6.1%

**Question: Identify the phase of the business cycle in each year.**

**Year 1 to Year 2:** Real GDP jumped from $800B to $860B (7.5%), and unemployment dropped from 5.0% to 4.2%. This is **expansion** — output growing, the labor market tightening. A pattern similar to what the U.S. experienced between 2014 and 2018.

**Year 2 to Year 3:** Growth slowed sharply. GDP crept from $860B to $870B (about 1.2%), and unemployment barely moved to 4.0%. The economy is approaching its **peak** — near maximum output with fading momentum. Reminiscent of late 2006.

**Year 3 to Year 4:** GDP fell from $870B to $830B (a 4.6% decline), unemployment jumped to 6.1%. This is a **contraction**. Output is shrinking, and firms are cutting workers.

The critical factor is the *direction* of real GDP and unemployment, not their levels. A high GDP figure does not signal expansion if that figure is falling.`,
    },
  ],
};

export const basicMacroQuestions: PracticeQuestion[] = [
  {
    id: "bm-1",
    question:
      "Which of the following is a macroeconomic question rather than a microeconomic question?",
    options: [
      "Why did the price of avocados rise this summer?",
      "How does a minimum wage affect employment at fast-food restaurants?",
      "Why did the overall unemployment rate increase last quarter?",
      "Should a firm hire one more worker given current wages?",
    ],
    correctIndex: 2,
    explanation:
      "Macroeconomics studies economy-wide phenomena — the overall unemployment rate, national output, the general price level. The other three options focus on individual markets or firm-level decisions, which belong to microeconomics. Avocado pricing is a single-market question. Fast-food employment under minimum wage is a labor-market-specific question. The hiring decision is a firm-level marginal analysis.",
  },
  {
    id: "bm-2",
    question:
      "In the circular flow model, which of the following represents a leakage from the income-spending stream?",
    options: [
      "Government purchases of goods and services",
      "Household saving",
      "Business investment in new equipment",
      "Export revenue from foreign buyers",
    ],
    correctIndex: 1,
    explanation:
      "Saving removes money from the consumption stream, reducing the circular flow. The three leakages are saving, taxes, and imports. Options A, C, and D are all injections: government purchases inject public spending, business investment injects capital spending, and exports inject foreign spending back into the domestic flow.",
  },
  {
    id: "bm-3",
    question:
      "During a recession, which combination of indicators would you most likely observe?",
    options: [
      "Rising real GDP and falling unemployment",
      "Falling real GDP and rising unemployment",
      "Rising real GDP and rising unemployment",
      "Falling real GDP and falling inflation only",
    ],
    correctIndex: 1,
    explanation:
      "Recessions are defined by declining real GDP. As firms cut production, they lay off workers, pushing unemployment higher. The 2008-2009 recession saw U.S. GDP contract roughly 4.3% while unemployment doubled from about 5% to 10%. Option A describes expansion. Option C is contradictory under normal circumstances. Option D ignores the labor market entirely.",
  },
  {
    id: "bm-4",
    question:
      "A country where the government sets production quotas for all industries and determines prices centrally is best described as:",
    options: [
      "A market economy",
      "A mixed economy",
      "A command economy",
      "A traditional economy",
    ],
    correctIndex: 2,
    explanation:
      "Central government control over production quotas and prices defines a command economy — the model the Soviet Union operated from the late 1920s until its dissolution in 1991. Option A relies on private decision-making and price signals. Option B blends both. Option D refers to economies organized around custom and tradition, not centralized government planning.",
  },
  {
    id: "bm-5",
    question:
      "If the three macroeconomic goals are growth, low unemployment, and stable prices, which scenario illustrates a conflict between these goals?",
    options: [
      "A policy that raises GDP growth and lowers unemployment simultaneously",
      "A central bank raising interest rates to fight inflation, which slows growth and raises unemployment",
      "An economy at full employment with stable 2% inflation",
      "A technological breakthrough that increases output without raising prices",
    ],
    correctIndex: 1,
    explanation:
      "When a central bank raises interest rates to tame inflation — as Volcker did in 1981 — it deliberately slows growth and accepts higher unemployment. That is a direct conflict between the stable-prices goal and the other two. Option A shows goals aligning. Option C describes an ideal equilibrium. Option D is a supply-side improvement that advances all three goals simultaneously.",
  },
  {
    id: "bm-6",
    question:
      "An economy's real GDP peaked in March and has been declining for seven months. Unemployment has risen from 3.8% to 6.5%. This economy is most likely in which phase of the business cycle?",
    options: [
      "Expansion",
      "Peak",
      "Contraction",
      "Trough",
    ],
    correctIndex: 2,
    explanation:
      "Seven months of declining GDP and sharply rising unemployment are the hallmarks of a contraction. The peak already occurred in March. The economy has moved past it into recession. Option D (trough) would only apply once the decline bottoms out and stabilization begins, which has not happened yet.",
  },
  {
    id: "bm-7",
    question:
      "In the circular flow model, when households pay income taxes to the government, this represents:",
    options: [
      "An injection into the circular flow",
      "A leakage from the circular flow",
      "A transfer payment",
      "An increase in aggregate demand",
    ],
    correctIndex: 1,
    explanation:
      "Taxes pull money out of the household spending stream — dollars that would otherwise have been spent on goods and services flow to the government instead. That makes taxes a leakage. Option A is backwards; injections add to the flow (investment, government spending, exports). Option C is incorrect because transfer payments flow from government to households, not the reverse.",
  },
  {
    id: "bm-8",
    question:
      "Country A has GDP of $500 billion and GNP of $540 billion. Which of the following best explains the $40 billion difference?",
    options: [
      "Country A imports $40 billion more than it exports",
      "Country A's citizens earn $40 billion more from production abroad than foreigners earn from production inside Country A",
      "Country A's government spends $40 billion on transfer payments",
      "Country A's underground economy accounts for $40 billion in unreported output",
    ],
    correctIndex: 1,
    explanation:
      "GNP measures output by a country's citizens regardless of location; GDP measures output within borders regardless of citizenship. When GNP exceeds GDP by $40 billion, citizens earn that much more abroad than foreigners earn domestically. Option A confuses the trade balance with factor income flows. Option C is wrong because transfer payments are not counted in GDP or GNP — no new production occurs. Option D fails because the underground economy is excluded from both measures equally.",
  },
  {
    id: "bm-9",
    question:
      "In the circular flow model, a country simultaneously increases its savings rate, raises taxes, and expands imports. Assuming no offsetting changes in injections, what is the most likely effect on the economy?",
    options: [
      "Real GDP rises because savings fund future investment",
      "Real GDP falls because all three are leakages that drain spending from the flow",
      "Real GDP is unaffected because leakages always equal injections",
      "The price level rises due to reduced supply of goods",
    ],
    correctIndex: 1,
    explanation:
      "Saving, taxes, and imports are the three leakages. When all three increase simultaneously with no offsetting rise in injections, more money drains out of the spending stream than flows back in. Real GDP falls. Option A incorrectly assumes savings automatically become investment — Keynes identified this fallacy of composition in 1936 as the paradox of thrift. Option C states a long-run equilibrium condition, but with no offsetting injections, the economy contracts before reaching equilibrium. Option D describes a supply-side effect unrelated to demand-side leakages.",
  },
  {
    id: "bm-10",
    question:
      "An economy is at the trough of the business cycle. Which of the following combinations is most consistent with this phase?",
    options: [
      "High consumer confidence, accelerating GDP growth, and falling unemployment",
      "Peak corporate profits, maximum capacity utilization, and emerging inflationary pressure",
      "GDP has stopped declining, unemployment is at its highest, and idle capacity is at its maximum",
      "GDP is declining rapidly, businesses are cutting inventories, and layoffs are accelerating",
    ],
    correctIndex: 2,
    explanation:
      "The trough is the lowest point — output has bottomed out, unemployment peaks, and factories sit idle, but the rate of decline has stopped. The U.S. economy reached its trough in June 2009 before the longest expansion in recorded history began. Option A describes mid-expansion. Option B describes conditions near the peak. Option D describes active contraction, which precedes the trough.",
  },
  {
    id: "bm-11",
    question:
      "A mixed economy like the United States relies primarily on market mechanisms but also uses government intervention. Which of the following best illustrates why purely market-based economies face limitations?",
    options: [
      "Markets always produce goods at the lowest possible cost",
      "Markets tend to underprovide public goods because firms cannot exclude non-payers and therefore cannot profit from production",
      "Government regulation always improves efficiency in resource allocation",
      "Command economies grow faster than market economies over the long run",
    ],
    correctIndex: 1,
    explanation:
      "Public goods are non-excludable and non-rivalrous. Firms cannot charge non-payers, so there is no profit incentive to produce goods like national defense or street lighting — the classic market failure that has justified government involvement since at least the lighthouse debates of the 19th century. Option A overstates market efficiency by ignoring externalities and monopoly power. Option C is too broad; regulation sometimes helps and sometimes introduces its own inefficiencies. Option D is historically inaccurate — the Soviet command economy ultimately stagnated while mixed economies continued growing.",
  },
  {
    id: "bm-12",
    question:
      "In the expenditure approach to GDP, which of the following is classified as investment (I) rather than consumption (C)?",
    options: [
      "A household purchasing a new refrigerator",
      "A household purchasing a newly constructed home",
      "A household purchasing shares of stock in a technology company",
      "A household purchasing groceries for the week",
    ],
    correctIndex: 1,
    explanation:
      "In GDP accounting — a framework formalized by Simon Kuznets in the 1930s and 1940s — residential construction counts as investment (I), not consumption. A new home is a long-lived asset providing services over decades, which is why economists treat it like business capital. Option A is a consumer durable good (consumption). Option C is a financial transaction not counted in GDP at all — no new good or service is produced. Option D is non-durable consumption.",
  },
  {
    id: "bm-13",
    question:
      "A country's economy has been expanding for six consecutive years. Unemployment has fallen to 2.8%, well below the estimated natural rate of 4.5%. Based on business cycle analysis, which development is most likely emerging?",
    options: [
      "Deflation, because increased production drives prices down",
      "Rising inflationary pressure, because the economy is operating beyond its sustainable capacity",
      "A permanent shift to a higher potential GDP, because the expansion proves the economy can sustain this output",
      "Falling wages, because firms have more bargaining power in a tight labor market",
    ],
    correctIndex: 1,
    explanation:
      "When unemployment drops well below the natural rate, the economy is straining past its sustainable capacity — a situation the U.S. confronted in late 2021 and 2022. Labor markets tighten, firms bid up wages, and rising costs pass through as higher prices. Option A reverses the typical relationship; excess demand pushes prices up, not down. Option C mistakes temporary overheating for a permanent capacity increase. Option D gets labor dynamics backward; in a tight market, workers hold bargaining power, and wages rise.",
  },
  {
    id: "bm-14",
    question:
      "Which of the following scenarios describes a situation where macroeconomic analysis is essential but microeconomic analysis alone would be insufficient?",
    options: [
      "A firm deciding whether to hire an additional worker based on the worker's marginal revenue product",
      "A consumer choosing between two brands of cereal based on price and quality",
      "The Federal Reserve raising interest rates to combat economy-wide inflation, which simultaneously affects housing markets, business investment, and the exchange rate",
      "A city government evaluating whether to build a new park based on local cost-benefit analysis",
    ],
    correctIndex: 2,
    explanation:
      "The Federal Reserve's interest rate decisions operate through economy-wide channels, affecting the aggregate price level, total investment, exchange rates, and employment across all sectors simultaneously. The Fed has set monetary policy for the entire U.S. economy since its founding in 1913, and analyzing those decisions requires macroeconomic tools. Option A is a firm-level labor demand decision. Option B is a consumer choice problem. Option D is a localized public finance question addressable with micro-level cost-benefit analysis.",
  },
];
