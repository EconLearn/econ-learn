import type { PracticeQuestion } from "@/data/supply-demand-content";

export const unemploymentInflationContent = {
  title: "Unemployment & Inflation",
  subtitle: "From the labor crises of the 1930s to the stagflation of the 1970s — how economists classified joblessness, learned to measure rising prices, and discovered the Phillips curve tradeoff",
  sections: [
    {
      heading: "Types of Unemployment",
      content: `Zero unemployment has never existed in any market economy, and it never will. The reasons why tell you everything about the three categories economists have distinguished since the mid-20th century.

A recent college graduate sending out resumes, or a marketing manager who quit in January 2024 to chase a better role at a competing firm, is experiencing **frictional unemployment**. Both have usable skills. Jobs exist for people like them. The search simply takes time. Frictional unemployment persists even in a roaring economy.

**Structural unemployment** runs deeper. When the U.S. coal industry shed roughly 40% of its workforce between 2011 and 2020, a miner in McDowell County, West Virginia could not walk down the street and find a similar job. Neither could assembly-line workers at the Lordstown, Ohio General Motors plant after it closed in 2019. Their skills or locations no longer matched what employers needed. Retraining takes months or years, and geographic relocation is expensive.

**Cyclical unemployment** tracks the business cycle directly. When recession hits, aggregate demand collapses, firms slash payrolls, and layoffs spike across entire sectors. The 2008-2009 financial crisis and the early 2020 COVID shutdown are textbook cases. Once GDP returns to potential, cyclical unemployment vanishes.

The **natural rate of unemployment** equals frictional plus structural. It prevails when the economy produces at potential GDP and cyclical unemployment is zero. The Congressional Budget Office estimated the U.S. natural rate at roughly 4.4% in 2024. That number is never zero, because job searching and skills mismatches are permanent features of any dynamic economy.`,
    },
    {
      heading: "Measuring Unemployment",
      content: `The Bureau of Labor Statistics has published monthly unemployment data since 1940, and the definition of "unemployed" is narrower than most people assume. The gaps matter for policy.

The **labor force** includes everyone 16 and older who is either working or actively searching for work. Retirees, full-time students not seeking employment, stay-at-home parents, and anyone who has stopped looking are excluded entirely.

**Unemployment rate = (Unemployed / Labor Force) x 100**

You must be jobless *and* actively searching to count as unemployed. That requirement creates two major blind spots in the official data.

**Discouraged workers** have given up looking because they believe no work is available. When they stop searching, they exit the labor force. The measured unemployment rate actually falls — even though the job market has not improved. The statistic simply stopped counting them. During 2009-2010, this effect masked how severe the labor crisis really was; the official U-3 rate peaked at 10.0% in October 2009, but broader measures suggested the real figure was closer to 17%.

**Underemployment** is the other gap. A software engineer pulling espresso shots part-time at Starbucks because nobody in her field is hiring registers as "employed." The headline U-3 rate misses this slack entirely. The BLS publishes a broader U-6 measure that captures discouraged workers and the involuntarily part-time, but U-6 rarely makes front-page headlines.`,
    },
    {
      heading: "Inflation and the CPI",
      content: `In June 2022, the average price of a gallon of regular gasoline in the United States hit $5.02 — the highest ever recorded by AAA. Grocery bills climbed 10% year-over-year. The government compresses all of that into a single number using the **Consumer Price Index (CPI)**, which tracks the cost of a fixed **market basket** of goods and services purchased by a typical urban household.

The Bureau of Labor Statistics has been publishing the CPI since 1913, making it one of the longest-running economic data series in the country. The BLS selects the basket — housing, food, transportation, medical care, education, and more — weighting each item by its share of a typical budget, with housing dominating at roughly one-third. The CPI compares the basket's cost in the current period to a base year, then multiplies by 100.

Given two CPI values, the inflation rate calculation is straightforward:

**Inflation rate = ((CPI_new - CPI_old) / CPI_old) x 100**

The CPI has known biases that push it above the true cost-of-living increase, all identified by the 1996 Boskin Commission. **Substitution bias**: beef prices spike and consumers switch to chicken, but the fixed basket assumes they kept buying beef. **New product bias**: the basket updates slowly and misses cheaper or better products entering the market (smartphones did not exist in the original basket). **Quality change bias**: a laptop priced the same as last year's model but running twice as fast has not really held its price in any meaningful sense. All three mean the CPI overstates actual inflation by an estimated 0.8-1.1 percentage points per year, according to the Boskin Commission's findings.`,
    },
    {
      heading: "The Phillips Curve",
      content: `In 1958, A.W. Phillips published a study examining nearly a century of British wage and unemployment data, from 1861 to 1957. The pattern he found was striking: when unemployment fell, wages — and by extension, prices — rose. When unemployment climbed, inflation cooled. The **Phillips curve** was born.

The **short-run Phillips curve (SRPC)** slopes downward with unemployment on the x-axis and inflation on the y-axis. Move up and left for lower unemployment with higher inflation. Move down and right for the reverse. The late 1960s demonstrated this tradeoff vividly, as Lyndon Johnson's simultaneous spending on Vietnam and Great Society programs pushed unemployment below 4% while inflation crept above 5%.

The long-run story is different. Milton Friedman and Edmund Phelps, working independently in the late 1960s, predicted that the tradeoff was temporary. The **long-run Phillips curve (LRPC)** is vertical at the natural rate of unemployment. Workers and firms eventually adjust their inflation expectations, and a central bank trying to hold unemployment permanently below the natural rate through relentless money creation just produces accelerating inflation with no lasting employment gain. The 1970s proved Friedman right. Paul Volcker's Federal Reserve finally crushed the inflationary cycle in 1981-1982 by pushing the federal funds rate above 20% — triggering a severe recession but breaking the spiral.

What shifts the SRPC? Expected inflation. When people expect higher inflation, the entire curve shifts upward: at every unemployment rate, actual inflation is higher. When expectations cool, the curve shifts back down. The anchoring of inflation expectations became the central preoccupation of central banking after the Volcker era.`,
    },
    {
      heading: "Stagflation and Supply Shocks",
      content: `On October 17, 1973, the Organization of Arab Petroleum Exporting Countries announced an oil embargo against nations that had supported Israel in the Yom Kippur War. Within months, oil prices quadrupled. Inflation soared. Unemployment soared. Both at once.

The standard Phillips curve predicted those two variables should move in opposite directions. Yet there they were, climbing together. Economists called it **stagflation** — stagnation plus inflation — and it shattered the prevailing Keynesian consensus that policymakers could always choose between the two evils.

The culprit was an adverse supply shock. Higher oil prices raised production costs across virtually every industry. Firms cut output and laid off workers while simultaneously passing cost increases to consumers. On the Phillips curve diagram, an adverse supply shock shifts the SRPC upward and to the right: at every unemployment rate, inflation is now higher.

Policymakers faced a lose-lose choice. Fight inflation with contractionary policy and unemployment worsens. Fight unemployment with expansionary policy and inflation worsens. Arthur Burns, the Fed chairman through most of the 1970s, tried to split the difference and mostly made things worse. Inflation was still running near 13% when Volcker took over in August 1979.

Favorable supply shocks work in reverse. The late-1990s technology boom, combined with falling energy prices, shifted the SRPC downward and to the left — delivering the rare combination of lower inflation and lower unemployment simultaneously. The U.S. unemployment rate fell to 3.9% in 2000 while inflation stayed below 3.5%. A golden moment that supply-side conditions made possible.`,
    },
    {
      heading: "Worked Example",
      content: `CPI was 248 last year and 255 this year.

Inflation rate = (255 - 248) / 248 x 100 = 7 / 248 x 100 = **2.8%**.

The labor force is 160 million, with 6.4 million unemployed.

Unemployment rate = 6.4 / 160 x 100 = **4.0%**.

Context from the Phillips curve framework: if the natural rate is 5.0% and the current rate is 4.0%, the economy is operating below the natural rate. On the short-run Phillips curve, that positions the economy in the upper-left zone — low unemployment, building inflationary pressure. Contractionary policy would push unemployment back toward 5.0% and cool inflation. The U.S. was in roughly this position in late 2021, before the inflation spike of 2022 forced the Fed into its most aggressive rate-hiking cycle since Volcker.

A different scenario: a supply shock drives unemployment to 7.0% while inflation jumps to 5.0%. That is stagflation — the SRPC has shifted upward and to the right. No single demand-side tool fixes both problems simultaneously. Expansionary policy would reduce unemployment but feed inflation. Contractionary policy would tame prices but deepen the jobs crisis. The 1970s taught this lesson at enormous cost.`,
    },
  ],
};

export const unemploymentInflationQuestions: PracticeQuestion[] = [
  {
    id: "ui-1",
    question: "A recent college graduate who is actively searching for her first job is an example of:",
    options: [
      "Cyclical unemployment",
      "Structural unemployment",
      "Frictional unemployment",
      "Seasonal unemployment",
    ],
    correctIndex: 2,
    explanation: "She has marketable skills and is simply searching — textbook frictional unemployment. Option B is the trap: structural unemployment requires a mismatch between skills and available jobs, like a coal miner in a region where mining has vanished. A new graduate has not experienced that kind of displacement. Option A would require a recession-driven layoff. Option D applies to predictable calendar-based fluctuations like holiday retail staffing.",
  },
  {
    id: "ui-2",
    question: "The natural rate of unemployment includes which of the following?",
    options: [
      "Frictional and cyclical unemployment",
      "Structural and cyclical unemployment",
      "Frictional and structural unemployment",
      "Only cyclical unemployment",
    ],
    correctIndex: 2,
    explanation: "Natural rate = frictional + structural. These two persist even when the economy is healthy and producing at potential GDP. Cyclical unemployment is zero at the natural rate by definition. Any option that includes cyclical unemployment is automatically wrong — if cyclical unemployment is present, the economy has deviated from potential output.",
  },
  {
    id: "ui-3",
    question: "If CPI was 200 last year and 210 this year, the inflation rate is:",
    options: [
      "10%",
      "5%",
      "4.76%",
      "2.1%",
    ],
    correctIndex: 1,
    explanation: "((210 - 200) / 200) x 100 = 5%. Divide by the old CPI, not the new one. Option A (10%) is the most common error — confusing the raw 10-point increase with a percentage. Option C (4.76%) results from accidentally dividing by 210. Option D has no basis in the formula.",
  },
  {
    id: "ui-4",
    question: "The short-run Phillips curve shows that:",
    options: [
      "Higher inflation is associated with higher unemployment",
      "Lower inflation is associated with lower unemployment",
      "Lower unemployment is associated with higher inflation",
      "There is no relationship between inflation and unemployment",
    ],
    correctIndex: 2,
    explanation: "The SRPC slopes downward: moving left (lower unemployment) means moving up (higher inflation). A.W. Phillips documented this inverse relationship in 1958 using British data stretching back to 1861. Option A describes an upward slope, which contradicts the curve. Option B also reverses the direction. Option D contradicts the entire purpose of the Phillips curve.",
  },
  {
    id: "ui-5",
    question: "When discouraged workers stop looking for jobs, the measured unemployment rate:",
    options: [
      "Increases because more people are jobless",
      "Decreases because discouraged workers exit the labor force",
      "Stays the same because discouraged workers are still counted",
      "Increases because the labor force grows",
    ],
    correctIndex: 1,
    explanation: "When discouraged workers quit searching, they leave the labor force. Both numerator and denominator shrink, and the net effect is a lower unemployment rate — even though the actual job market has not improved. This blind spot was particularly severe during 2009-2010, when the official U-3 rate understated the true labor market damage. Option A sounds logical but the BLS formula only counts those actively seeking work. Option C is wrong because discouraged workers are explicitly excluded once they stop searching. Option D reverses the effect on the labor force.",
  },
  {
    id: "ui-6",
    question: "Stagflation is best described as a period of:",
    options: [
      "Falling inflation and falling unemployment",
      "Rising inflation and falling unemployment",
      "Rising inflation and rising unemployment",
      "Falling inflation and rising unemployment",
    ],
    correctIndex: 2,
    explanation: "Stagflation = simultaneous rising inflation and rising unemployment. The 1973-1975 period following OPEC's oil embargo is the classic case. Option B describes normal movement along the SRPC during a demand-driven expansion. Option A describes favorable supply-shock territory. Option D describes contractionary demand policy effects.",
  },
  {
    id: "ui-7",
    question: "The long-run Phillips curve is vertical at the natural rate of unemployment because:",
    options: [
      "Monetary policy cannot change the money supply in the long run",
      "In the long run, there is no tradeoff between inflation and unemployment",
      "Fiscal policy is more effective than monetary policy",
      "The CPI always returns to its base-year value",
    ],
    correctIndex: 1,
    explanation: "In the long run, workers and firms fully adjust their inflation expectations, and the economy settles at the natural rate regardless of the inflation rate. Friedman and Phelps predicted this in the late 1960s, and the 1970s confirmed it. Option A is wrong because the Fed absolutely can change the money supply long-term — the problem is that doing so only changes inflation, not unemployment. Option C compares policy tools without addressing the LRPC's verticality. Option D is nonsensical.",
  },
  {
    id: "ui-8",
    question: "An adverse supply shock, such as a sharp increase in oil prices, shifts the short-run Phillips curve:",
    options: [
      "Downward and to the left",
      "Along the existing curve toward lower unemployment",
      "Upward and to the right",
      "The SRPC does not shift; only the LRPC shifts",
    ],
    correctIndex: 2,
    explanation: "An adverse supply shock — like the 1973 OPEC embargo or the 2021-2022 global supply chain crisis — raises production costs and lifts inflation expectations. The SRPC shifts upward and to the right: higher inflation at every unemployment rate. Option A is the exact opposite, describing a favorable supply shock. Option B is wrong because a supply shock shifts the whole curve, not just the economy's position on it. Option D is incorrect; the SRPC absolutely shifts in response to supply shocks. That shift is the entire explanation for stagflation.",
  },
  {
    id: "ui-9",
    question: "An economy has 150 million people in the labor force. Frictional unemployment is 3%, structural unemployment is 2%, and cyclical unemployment is 1.5%. What is the natural rate of unemployment, and how many people are cyclically unemployed?",
    options: [
      "Natural rate: 6.5%; cyclically unemployed: 9.75 million",
      "Natural rate: 5%; cyclically unemployed: 2.25 million",
      "Natural rate: 3%; cyclically unemployed: 4.5 million",
      "Natural rate: 5%; cyclically unemployed: 7.5 million",
    ],
    correctIndex: 1,
    explanation: "Natural rate = frictional + structural = 3% + 2% = 5%. Cyclical unemployment is excluded by definition. Cyclically unemployed = 1.5% of 150 million = 2.25 million. Option A incorrectly adds cyclical unemployment to the natural rate. Option C uses only frictional unemployment and ignores structural. Option D gets the natural rate right but multiplies 5% (instead of 1.5%) by 150 million, confusing the natural rate with the cyclical rate.",
  },
  {
    id: "ui-10",
    question: "A market basket costs $400 in the base year and $440 in the current year. The CPI for the current year is 110. If nominal wages rose from $50,000 to $52,000 over the same period, what happened to real wages?",
    options: [
      "Real wages increased because nominal wages rose by more than prices",
      "Real wages decreased because the 4% nominal wage increase did not keep pace with the 10% rise in the price level",
      "Real wages stayed the same because both wages and prices increased proportionally",
      "Real wages cannot be determined without knowing the GDP deflator",
    ],
    correctIndex: 1,
    explanation: "CPI rose from 100 to 110 — a 10% price increase. Nominal wages rose from $50,000 to $52,000 — only 4%. Prices outran wages, so purchasing power declined. Real wage in the current year = ($52,000 / 110) x 100 = approximately $47,273, below the base-year $50,000. This pattern hit American workers hard during the 2021-2022 inflation surge, when wage gains consistently lagged price increases. Option A ignores the percentage comparison. Option C claims proportionality, but 4% does not equal 10%. Option D is wrong because the CPI suffices for this calculation.",
  },
  {
    id: "ui-11",
    question: "A factory worker loses his job because the company replaced his position with an automated robotic system. After searching for six months, he cannot find work because his skills do not match any available positions. This worker is experiencing:",
    options: [
      "Frictional unemployment, because he is between jobs and searching",
      "Cyclical unemployment, because automation reduced demand for his labor",
      "Structural unemployment, because his skills no longer match the requirements of available jobs",
      "Seasonal unemployment, because manufacturing demand fluctuates",
    ],
    correctIndex: 2,
    explanation: "Technological displacement through automation is a textbook cause of structural unemployment — the worker's existing skills have become obsolete, mirroring the experience of thousands of manufacturing workers across the Rust Belt since the 1980s. Option A is tempting because the worker is searching, but frictional unemployment assumes marketable skills and a temporary search. Option B is wrong because cyclical unemployment stems from business-cycle downturns, not firm-level technology adoption. Option D applies to calendar-based labor fluctuations unrelated to automation.",
  },
  {
    id: "ui-12",
    question: "When inflation is unexpectedly high, which of the following groups is most likely to benefit?",
    options: [
      "Retirees living on fixed pensions",
      "Banks that issued fixed-rate mortgages",
      "Borrowers who locked in fixed-rate loans before inflation rose",
      "Workers whose wages are set by long-term contracts without cost-of-living adjustments",
    ],
    correctIndex: 2,
    explanation: "Borrowers with fixed-rate loans repay their debts with dollars that have less purchasing power than when they borrowed. The real value of their debt shrinks. This was a significant wealth transfer during the inflationary 1970s. Option A describes the opposite — retirees on fixed pensions are harmed as purchasing power erodes. Option B describes lenders, who are also hurt. Option D describes workers whose locked-in wages lose real value.",
  },
  {
    id: "ui-13",
    question: "During a period of moderate inflation, businesses must frequently update their menus, catalogs, and price lists. These expenses are an example of:",
    options: [
      "Shoe-leather costs",
      "Menu costs",
      "Opportunity costs",
      "Sunk costs",
    ],
    correctIndex: 1,
    explanation: "**Menu costs** are the literal and figurative expenses of changing posted prices — reprinting restaurant menus, updating online listings, recoding scanners. The term originated in the economics literature from the image of restaurants reprinting physical menus but applies broadly to any firm. Option A refers to shoe-leather costs: the time and effort spent minimizing cash holdings during inflation. Option C is a general concept about forgone alternatives, not specific to inflation. Option D refers to irrecoverable past expenses.",
  },
  {
    id: "ui-14",
    question: "An economy experiences a simultaneous increase in unemployment from 4% to 8% and a rise in inflation from 2% to 7%. The central bank must choose between fighting inflation and fighting unemployment. This scenario is most consistent with:",
    options: [
      "A movement along the short-run Phillips curve caused by expansionary demand policy",
      "Stagflation caused by an adverse supply shock, presenting a policy dilemma because contractionary policy would worsen unemployment while expansionary policy would worsen inflation",
      "A shift of the long-run Phillips curve to the right due to demographic changes",
      "A favorable supply shock that temporarily increases both inflation and unemployment",
    ],
    correctIndex: 1,
    explanation: "Simultaneous increases in both unemployment and inflation define stagflation — the pattern that emerged after the 1973 oil embargo and recurred after the 1979 Iranian Revolution. The SRPC has shifted upward and to the right, and demand-side tools can only address one problem by worsening the other. Option A is wrong because movement along the SRPC produces the inverse pattern (lower unemployment with higher inflation, or vice versa). Option C is about structural labor market changes, not a supply shock. Option D contradicts itself: favorable supply shocks reduce both inflation and unemployment.",
  },
  {
    id: "ui-15",
    question: "The economy is currently at 3% unemployment and 6% inflation. The natural rate of unemployment is estimated at 5%. If the central bank pursues contractionary monetary policy to reduce inflation, what is the expected short-run outcome according to the Phillips curve framework?",
    options: [
      "Both unemployment and inflation decrease as the economy returns to the natural rate",
      "Unemployment rises toward or above the natural rate while inflation falls, as the economy moves down and to the right along the SRPC",
      "Inflation falls to zero while unemployment remains unchanged at 3%",
      "The LRPC shifts to the left, permanently reducing the natural rate of unemployment",
    ],
    correctIndex: 1,
    explanation: "Contractionary monetary policy reduces aggregate demand, causing a short-run movement down and to the right along the SRPC: unemployment rises and inflation falls. This is precisely the tradeoff Volcker accepted in 1981-1982 when he raised rates above 20% to break inflation — unemployment climbed to 10.8% in the process. Option A describes long-run self-correction, not the short-run Phillips curve movement. Option C falsely claims inflation can vanish without any unemployment cost. Option D incorrectly asserts that monetary policy changes the natural rate, which is determined by structural factors like labor market institutions, not central bank decisions.",
  },
];
