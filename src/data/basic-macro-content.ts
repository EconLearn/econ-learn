import type { PracticeQuestion } from "@/data/supply-demand-content";

export const basicMacroContent = {
  title: "Basic Macroeconomic Concepts",
  subtitle:
    "Why economists zoom out from individual markets to study the economy as a whole",
  sections: [
    {
      heading: "Why Zoom Out? Micro vs Macro",
      content: `A coffee shop with lines out the door can go under if a nationwide recession kills demand for $5 lattes. The shop did nothing wrong. The entire economy moved underneath it.

That gap between individual market performance and economy-wide forces is why **macroeconomics** exists as a separate field. Microeconomics studies one firm, one consumer, one product at a time. Macro tackles the bigger questions: why do entire economies boom and bust? Why were 10 million Americans unemployed simultaneously in 2009? Why did prices across *every* market rise 9% in 2022?

**Microeconomics** gives you tools for the coffee market. **Macroeconomics** gives you tools for the ocean every market floats on. The AP exam tests whether you know which lens applies to a given problem.`,
    },
    {
      heading: "The Circular Flow Model",
      content: `The economy runs as a loop. **Households** sell labor to **firms**, firms pay wages, and households spend those wages on the goods firms produce. Money keeps circulating.

Two more players complicate things. The **government** collects taxes from households and firms, then pushes revenue back out through public goods, transfers (Social Security, unemployment insurance), and subsidies. The **foreign sector** brings exports (money in from abroad) and imports (money out to other countries).

Every dollar one party spends becomes income for another. When households suddenly stop buying, firms lose revenue and lay off workers, and those workers cut their own spending. The 2008 financial crisis showed how fast this loop can seize up: fear froze spending, and the whole circular flow nearly stalled.

**Leakages** drain money from the flow: saving, taxes, imports. **Injections** add money back: investment, government spending, exports. When leakages outpace injections, the economy contracts.`,
    },
    {
      heading: "Three Macroeconomic Goals",
      content: `Every government, regardless of political orientation, chases the same three objectives.

**1. Economic growth**, measured by rising real GDP per capita. China averaged 10% annual growth for three decades. Hundreds of millions of people moved out of poverty. No other force in economics comes close to that kind of impact.

**2. Low unemployment.** This one goes beyond statistics. Persistent joblessness means families losing income, skills eroding, communities emptying out. The U.S. unemployment rate hit 14.7% in April 2020 when COVID shutdowns idled the economy almost overnight.

**3. Stable prices.** Rapid inflation and deflation both wreck economic planning. Zimbabwe's hyperinflation in 2008 reached an estimated 79.6 billion percent per month. Prices doubled every 24 hours. People abandoned currency altogether and bartered. Price stability is what allows saving and long-term investment to function.

These goals conflict with each other more than politicians admit. Policies that push unemployment very low can spark inflation. Aggressive inflation-fighting can trigger a recession. That tension sits at the center of every major macroeconomic policy debate.`,
    },
    {
      heading: "Business Cycle Phases",
      content: `Economies do not grow in straight lines. Output expands, overshoots, contracts, and recovers in a recurring pattern called the **business cycle**.

**Expansion.** Real GDP rises, unemployment falls, businesses invest, consumer confidence is high. The U.S. experienced its longest expansion on record from June 2009 to February 2020, nearly 11 years of uninterrupted growth.

**Peak.** Output and employment hit their maximum. Cracks form: inflation picks up, asset prices look stretched, risks build beneath the surface. The housing market peaked in 2006, two full years before the financial system collapsed.

**Contraction (recession).** Real GDP declines for a sustained period. Firms cut production, lay off workers, and consumer spending drops. Two consecutive quarters of falling GDP is the popular shorthand for a recession, though the official NBER determination looks at a broader set of indicators.

**Trough.** The low point. Output has bottomed out and the economy begins stabilizing before the next expansion.

A useful diagnostic: if unemployment is falling and GDP is rising, the economy is in expansion. If unemployment is rising and GDP is falling, it is contracting.`,
    },
    {
      heading: "Economic Systems",
      content: `What to produce, how to produce it, and who gets the output. Every society answers these questions, and the answer defines its **economic system**.

A **market economy** relies on private individuals and firms making decisions through price signals. If consumers want more electric vehicles, EV prices and profits rise, attracting new producers. No central authority issues a directive. The U.S. leans heavily toward this model.

A **command economy** puts the government in charge. The Soviet Union planned production targets for everything from steel to shoes. The state can mobilize resources quickly toward a specific goal, but without price signals, planners consistently overproduce what nobody wants and underproduce what everyone does.

Every modern economy is really a **mixed economy**, blending market forces with government intervention. The U.S. layers public schools, Medicare, and environmental regulations on top of private enterprise. China runs state-owned enterprises alongside a massive private sector. The real debate is never "market vs. command" but *how much* of each.`,
    },
    {
      heading: "Worked Example: Identifying the Business Cycle",
      content: `Given the following data for a country over four years:

Year 1: Real GDP = $800B, Unemployment = 5.0%
Year 2: Real GDP = $860B, Unemployment = 4.2%
Year 3: Real GDP = $870B, Unemployment = 4.0%
Year 4: Real GDP = $830B, Unemployment = 6.1%

**Question: Identify the phase of the business cycle in each year.**

**Year 1 to Year 2:** Real GDP jumped from $800B to $860B (7.5%), and unemployment dropped from 5.0% to 4.2%. Classic **expansion**: output growing, labor market tightening.

**Year 2 to Year 3:** Growth slowed sharply. GDP crept from $860B to $870B (about 1.2%), and unemployment barely moved to 4.0%. The economy is approaching its **peak**, near maximum output with fading momentum.

**Year 3 to Year 4:** GDP fell from $870B to $830B (a 4.6% decline), unemployment jumped to 6.1%. This is a **contraction**. Output is shrinking and firms are cutting workers.

You identify the cycle by watching the *direction* of real GDP and unemployment, not their levels. A high GDP figure does not mean expansion if GDP is falling.`,
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
      "Macroeconomics studies economy-wide phenomena like the overall unemployment rate, national output, and general price levels. The other options focus on individual markets (avocados, fast food) or individual firm decisions, which are microeconomic questions. Option A is micro because it concerns the price of one specific good, not the economy-wide price level.",
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
      "Leakages are flows of money out of the circular spending stream: saving, taxes, and imports. Household saving removes money from consumption, reducing the flow. Options A, C, and D are all injections -- they add spending back into the flow. Government purchases inject public spending, investment injects business spending, and exports inject foreign spending.",
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
      "A recession is defined by declining real GDP, and as firms cut production they lay off workers, causing unemployment to rise. Option A describes an expansion, not a recession. Option C is contradictory in typical circumstances -- if GDP is rising, firms are generally hiring, not firing. Option D focuses only on inflation and ignores the labor market, which is central to recessions.",
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
      "Central government control over production quotas and prices is the defining feature of a command economy. A market economy relies on private decision-making and price signals (option A). A mixed economy blends both approaches (option B). Option D refers to economies based on custom and tradition, not centralized government planning.",
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
      "When a central bank raises interest rates to reduce inflation (stable prices goal), it slows economic growth and can increase unemployment -- directly conflicting with the other two goals. This is the classic policy tradeoff. Option A shows goals aligning, not conflicting. Option C describes an ideal balance. Option D is a supply-side improvement that advances all three goals simultaneously.",
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
      "Declining real GDP and rising unemployment over several months are the hallmarks of a contraction (recession). The peak already occurred in March -- that was the high point. The economy has moved past the peak and is now contracting. Option D (trough) would only apply once the decline bottoms out and the economy begins to stabilize, which has not happened yet.",
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
      "Taxes are a leakage because they remove money from the household spending stream -- dollars that would have been spent on goods and services are instead sent to the government. Option A is wrong because injections add money to the flow (like government spending or investment), while taxes remove it. Option C is incorrect because transfer payments flow from government to households, not the other way around.",
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
      "GNP measures output by a country's citizens regardless of location, while GDP measures output within a country's borders regardless of citizenship. When GNP exceeds GDP, it means the country's citizens earn more from their overseas production than foreigners earn from producing inside the country. Option A confuses the trade balance (exports minus imports) with the GDP-GNP gap, which is about factor income flows, not goods flows. Option C is wrong because transfer payments are not counted in either GDP or GNP since no new production occurs. Option D is wrong because the underground economy is excluded from both GDP and GNP calculations, so it cannot explain the difference between them.",
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
      "Saving, taxes, and imports are the three leakages in the circular flow model. When all three increase simultaneously with no offsetting rise in injections (investment, government spending, exports), more money drains out of the spending stream than flows back in, reducing aggregate income and output. Option A incorrectly assumes savings automatically become investment; in practice, the paradox of thrift shows that higher saving can reduce GDP if not matched by borrowing. Option C states a long-run equilibrium condition, but the question specifies no offsetting injection changes, so the economy contracts before any adjustment. Option D describes a supply-side effect, but this scenario involves demand-side leakages that reduce spending, not supply constraints.",
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
      "The trough is the lowest point of the business cycle where output has bottomed out but has not yet begun to recover. Unemployment peaks, capacity sits idle, but the rate of decline has stopped. Option A describes conditions during an expansion, when confidence is high and the economy is growing. Option B describes conditions near the peak, when the economy is running at maximum capacity with inflation building. Option D describes the contraction phase, when GDP is still actively falling and layoffs are intensifying, which precedes the trough.",
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
      "Public goods are non-excludable and non-rivalrous, meaning firms cannot prevent non-payers from benefiting. Without the ability to charge users, private firms have no profit incentive to produce goods like national defense or street lighting, leading to underproduction. This is a classic market failure that justifies government intervention in otherwise market-based systems. Option A overstates market efficiency by ignoring externalities, monopoly power, and information asymmetries. Option C is too broad; regulation can improve outcomes in cases of market failure but can also introduce inefficiency. Option D is historically inaccurate; command economies like the Soviet Union ultimately stagnated compared to mixed and market economies.",
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
      "In GDP accounting, residential construction is classified as investment (I), not consumption, even though households are the buyers. A newly built home is a long-lived asset that provides services over many years, which is why economists treat it like business capital. Option A is consumption because a refrigerator, while durable, is a consumer durable good purchased for household use. Option C is not counted in GDP at all because buying stock is a financial transaction, not the purchase of a newly produced good or service. Option D is consumption because groceries are a non-durable consumer good.",
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
      "When unemployment drops significantly below the natural rate, the economy is operating beyond its sustainable capacity. Labor markets are extremely tight, firms bid up wages to attract scarce workers, and those rising costs get passed on as higher prices. This inflationary pressure is characteristic of the late expansion phase approaching a peak. Option A reverses the typical relationship; when demand outstrips productive capacity, prices rise, not fall. Option C confuses a temporary overheating with a permanent increase in potential output; running above capacity is unsustainable and leads to correction. Option D gets the labor market dynamics backward; in a tight labor market, workers have more bargaining power, so wages rise rather than fall.",
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
      "The Federal Reserve's interest rate decision is fundamentally macroeconomic because it operates through economy-wide channels: it affects the aggregate price level, total investment, exchange rates, and employment across all sectors simultaneously. Microeconomic tools cannot capture these interconnected, economy-wide effects. Option A is a textbook microeconomic labor demand decision at the firm level. Option B is a consumer choice problem analyzed with micro tools like utility maximization and budget constraints. Option D is a localized public finance question that can be addressed with micro-level cost-benefit analysis, even though it involves government.",
  },
];
