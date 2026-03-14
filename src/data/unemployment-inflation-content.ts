import type { PracticeQuestion } from "@/data/supply-demand-content";

export const unemploymentInflationContent = {
  title: "Unemployment & Inflation",
  subtitle: "Types of unemployment, how inflation is measured, and the tradeoff described by the Phillips curve",
  sections: [
    {
      heading: "Types of Unemployment",
      content: `Zero unemployment is impossible. The reasons why tell you everything about the three types economists distinguish.

A recent college graduate sending out resumes, or a marketing manager who quit to chase a better role, is experiencing **frictional unemployment**. Both have usable skills. The search just takes time. Frictional unemployment exists even in a booming economy.

**Structural unemployment** runs deeper. A West Virginia coal miner displaced by the shift to natural gas cannot walk down the street and apply for a similar job. Neither can an assembly-line worker replaced by a robot. The skills or locations no longer match what employers need, and retraining takes months or years.

**Cyclical unemployment** tracks the business cycle directly. When recession hits, aggregate demand collapses, firms slash payrolls, and layoffs spike across sectors. The 2008-2009 crisis and the early 2020 COVID shutdown are textbook cases. Once GDP returns to potential, cyclical unemployment vanishes.

The **natural rate of unemployment** = frictional + structural. It prevails when the economy produces at potential GDP, and cyclical unemployment is zero. The natural rate is never zero because job searching and skills mismatches are permanent features of any dynamic economy.`,
    },
    {
      heading: "Measuring Unemployment",
      content: `The definition of "unemployed" is narrower than most people assume, and the gaps matter for policy.

The **labor force** includes everyone 16 and older who is either working or actively searching for work. Retirees, full-time students not seeking jobs, stay-at-home parents, and anyone who has stopped looking are excluded entirely.

**Unemployment rate = (Unemployed / Labor Force) x 100**

You must be jobless *and* actively searching to count. That rule creates two major blind spots.

**Discouraged workers** have given up looking because they believe no work is available. When they stop searching, they exit the labor force. The measured unemployment rate actually falls, even though the job market has not improved. The statistic simply stopped counting them. During 2009-2010, this effect masked how severe the labor crisis really was.

**Underemployment** is the other gap. A software engineer pulling espresso shots part-time because nobody in her field is hiring registers as "employed" in the official data. The headline unemployment rate (U-3) misses this slack entirely. The BLS publishes a broader U-6 measure capturing discouraged workers and the underemployed, but it rarely makes headlines.`,
    },
    {
      heading: "Inflation and the CPI",
      content: `Gas over $5 per gallon in June 2022. Grocery bills up 10%. How does the government compress all of that into a single number? The **Consumer Price Index (CPI)** tracks the cost of a fixed **market basket** of goods and services purchased by a typical urban household.

The Bureau of Labor Statistics selects the basket: housing, food, transportation, medical care, education, and more. Each item is weighted by its share of a typical budget, with housing dominating. The CPI compares the basket's cost in the current period to a base year, then multiplies by 100.

Given two CPI values, the inflation rate calculation is straightforward:

**Inflation rate = ((CPI_new - CPI_old) / CPI_old) x 100**

The CPI has known biases that push it above the true cost-of-living increase. **Substitution bias**: beef prices spike and consumers switch to chicken, but the fixed basket assumes they kept buying beef. **New product bias**: the basket updates slowly and misses cheaper or better products entering the market. **Quality change bias**: a laptop priced the same as last year's model but running twice as fast has not really held its price. All three mean the CPI overstates actual inflation somewhat.`,
    },
    {
      heading: "The Phillips Curve",
      content: `Can a government print money and spend its way to permanently low unemployment? The **Phillips curve** says no. The benefit is temporary, and inflation is the price.

The **short-run Phillips curve (SRPC)** slopes downward: unemployment on the x-axis, inflation on the y-axis. Move up and left for lower unemployment with higher inflation. Move down and right for the reverse. The late 1960s demonstrated this tradeoff clearly. LBJ's spending on Vietnam and the Great Society pushed unemployment down but ignited inflation.

The **long-run Phillips curve (LRPC)** is vertical at the natural rate of unemployment. In the long run, no tradeoff exists. Workers and firms adjust their inflation expectations. A central bank trying to hold unemployment permanently below the natural rate through relentless money creation produces accelerating inflation with no lasting employment gain. The 1970s proved this conclusively before Volcker crushed the cycle with punishingly high interest rates.

What shifts the SRPC? Expected inflation. When people expect higher inflation, the entire curve shifts up: at every unemployment rate, actual inflation is higher. When expectations cool, the curve shifts down.`,
    },
    {
      heading: "Stagflation and Supply Shocks",
      content: `In 1973, OPEC slashed oil production and energy prices quadrupled. Inflation soared and unemployment soared. Both at once. The Phillips curve predicted those two variables should move in opposite directions, yet here they were climbing together. The phenomenon got a name: **stagflation**.

The culprit was an adverse supply shock. Higher oil prices raised production costs across nearly every industry. Firms cut output and laid off workers while simultaneously passing cost increases on to consumers. The standard Phillips curve tradeoff could not account for this because it assumed shocks originated on the demand side.

On the Phillips curve diagram, an adverse supply shock shifts the SRPC upward and to the right. At every unemployment rate, inflation is now higher. Policymakers face a lose-lose choice: fight inflation with contractionary policy (worsening unemployment) or fight unemployment with expansionary policy (worsening inflation). The Fed under Arthur Burns tried to split the difference throughout the 1970s and mostly made things worse.

Favorable supply shocks work in reverse. Falling oil prices or a productivity breakthrough (the late-1990s tech boom) shift the SRPC downward and to the left, delivering the rare combination of lower inflation and lower unemployment simultaneously.`,
    },
    {
      heading: "Worked Example",
      content: `CPI was 248 last year and 255 this year.

Inflation rate = (255 - 248) / 248 x 100 = 7 / 248 x 100 = **2.8%**.

The labor force is 160 million, with 6.4 million unemployed.

Unemployment rate = 6.4 / 160 x 100 = **4.0%**.

Context matters. If the natural rate is 5.0% and the current rate is 4.0%, the economy is running below the natural rate. On the short-run Phillips curve, that puts you in the upper-left zone: low unemployment, building inflationary pressure. Contractionary policy would push unemployment back toward 5.0% and cool inflation. The U.S. was in roughly this position in late 2021, right before the inflation spike.

Now consider a different scenario: a supply shock drives unemployment to 7.0% while inflation jumps to 5.0%. That is stagflation. The SRPC has shifted upward and to the right, and no single demand-side tool fixes both problems. Expansionary policy would reduce unemployment but feed inflation. Contractionary policy would tame prices but deepen the jobs crisis. There is no clean answer.`,
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
    explanation: "She has marketable skills and is simply searching — that is textbook frictional unemployment. The search takes time, but nothing structural is blocking her. Option B (structural) is the trap answer: structural unemployment requires a mismatch between skills and available jobs, like a coal miner in a region with no mining jobs. A new grad has not yet experienced that kind of displacement. Option A (cyclical) would require a recession-driven layoff, not a voluntary first-time job search. Option D (seasonal) applies to predictable calendar-based fluctuations like holiday retail hiring.",
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
    explanation: "The natural rate = frictional + structural. These two types persist even when the economy is healthy and producing at potential GDP. Cyclical unemployment is, by definition, zero at the natural rate. Options A, B, and D all include cyclical unemployment, which is the giveaway that they are wrong — cyclical unemployment only exists when the economy has deviated from potential output. If cyclical unemployment is present, the economy is not at its natural rate.",
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
    explanation: "Plug into the formula: ((210 - 200) / 200) x 100 = 5%. You divide by the old CPI (200), not the new one. Option A (10%) is the most common mistake — students see a 10-point rise and write 10%, confusing the raw point change with the percentage change. Option C (4.76%) is what you get if you accidentally divide by 210 instead of 200. Option D (2.1%) has no basis in the formula.",
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
    explanation: "The SRPC slopes downward: moving left (lower unemployment) means moving up (higher inflation). That inverse relationship is the short-run tradeoff. Option A gets the slope backward — it describes an upward-sloping relationship, which the SRPC does not show. Option B also reverses the direction: on the SRPC, lower inflation pairs with higher unemployment, not lower unemployment. Option D contradicts the entire point of the Phillips curve, which exists specifically to describe the relationship between inflation and unemployment.",
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
    explanation: "When discouraged workers quit searching, they leave the labor force entirely. Both the numerator (unemployed) and denominator (labor force) shrink, and the net math produces a lower unemployment rate — even though the actual job market has not improved. This is one of the U-3 measure's biggest blind spots. Option A sounds logical on the surface (more people are jobless), but the formula only counts people actively seeking work. Option C is wrong because discouraged workers are explicitly not counted once they stop searching. Option D reverses the effect on the labor force — it shrinks, not grows.",
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
    explanation: "Stagflation = inflation up + unemployment up, simultaneously. The 1970s oil shocks are the textbook case: OPEC restricted supply, energy costs spiked, firms raised prices and laid off workers at the same time. Option B (rising inflation with falling unemployment) is just normal movement along the SRPC during a demand-driven expansion — that is the standard Phillips curve tradeoff, not stagflation. Option A describes an economy improving on both fronts (favorable supply shock territory). Option D describes the effect of contractionary demand policy, not a supply shock.",
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
    explanation: "In the long run, workers and firms fully adjust their inflation expectations, and the economy settles back at the natural rate no matter how high or low inflation runs. There is no permanent tradeoff to exploit — you cannot buy permanently lower unemployment with higher inflation. Option A is wrong because the Fed absolutely can change the money supply in the long run; the problem is that doing so only changes inflation, not the unemployment rate. Option C compares fiscal and monetary policy effectiveness, which has nothing to do with why the LRPC is vertical. Option D is nonsensical — the CPI has no mechanism to return to a base-year value.",
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
    explanation: "An adverse supply shock — like the OPEC oil embargo or the 2021-2022 supply chain crisis — raises production costs and lifts inflation expectations. The SRPC shifts upward and to the right: at every unemployment rate, inflation is now higher. Option A (downward and left) is the exact opposite — that describes a favorable supply shock, like falling oil prices or a productivity breakthrough. Option B is wrong because a supply shock does not move you along the existing curve; it shifts the whole curve. Option D is wrong because the SRPC absolutely does shift in response to supply shocks — that is the entire point of the stagflation story.",
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
    explanation: "The natural rate of unemployment equals frictional plus structural unemployment: 3% + 2% = 5%. Cyclical unemployment is not included because it only exists when the economy deviates from potential output. The number of cyclically unemployed workers is 1.5% of 150 million = 2.25 million. Option A (6.5%) incorrectly adds cyclical unemployment to the natural rate, which contradicts the definition. Option C (3%) uses only frictional unemployment and ignores the structural component. Option D calculates the natural rate correctly at 5% but multiplies 5% (instead of 1.5%) by 150 million to get 7.5 million cyclically unemployed, confusing the natural rate with the cyclical rate.",
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
    explanation: "CPI rose from 100 to 110, a 10% increase in the price level. Nominal wages rose from $50,000 to $52,000, only a 4% increase. Since prices rose faster than wages, real purchasing power declined. Real wage in the current year = ($52,000 / 110) x 100 = approximately $47,273, which is less than the base-year $50,000. Option A incorrectly focuses on the absolute dollar increase without comparing the percentage changes. Option C claims proportional increases, but 4% does not equal 10%. Option D is wrong because the CPI is sufficient to calculate real wages; the GDP deflator is an alternative price measure but is not required here.",
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
    explanation: "Structural unemployment occurs when workers' skills, location, or characteristics do not match the requirements of available jobs. Technological displacement through automation is a textbook cause of structural unemployment because the worker's existing skill set has become obsolete. Option A is tempting because the worker is searching, but frictional unemployment assumes the worker has marketable skills and is merely between suitable positions. Option B is wrong because cyclical unemployment is caused by downturns in the business cycle and reduced aggregate demand, not by technological change at the firm level. Option D applies to predictable, calendar-based fluctuations in labor demand, which is unrelated to automation.",
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
    explanation: "Borrowers with fixed-rate loans benefit from unexpected inflation because they repay their debts with dollars that have less purchasing power than when they borrowed. The real value of their debt shrinks. Option A is the opposite case: retirees on fixed pensions are harmed because their income buys less as prices rise. Option B describes lenders, who are hurt because the money repaid to them is worth less in real terms than what they lent. Option D describes workers who are also harmed, as their locked-in nominal wages lose purchasing power when prices rise faster than expected.",
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
    explanation: "Menu costs are the literal and figurative costs firms incur to change posted prices during inflation: reprinting menus, updating online listings, recoding scanners, and notifying customers. The term originated from restaurants reprinting menus but applies broadly. Option A refers to shoe-leather costs, which are the time and effort individuals and businesses spend trying to minimize cash holdings during inflation (like making more frequent bank trips), not the cost of updating prices. Option C is a general economic concept about forgone alternatives and is not specific to inflation. Option D refers to costs already incurred that cannot be recovered, which is unrelated to the ongoing expense of price adjustment.",
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
    explanation: "Simultaneous increases in both unemployment and inflation are the defining feature of stagflation, caused by adverse supply shocks such as energy price spikes. This shifts the SRPC upward and to the right, creating a policy dilemma: demand-side tools can address one problem only by worsening the other. Option A is wrong because movement along the SRPC produces the opposite pattern -- lower unemployment with higher inflation (or vice versa), not both rising. Option C is incorrect because the LRPC shifts when the natural rate of unemployment changes due to structural factors, not when both inflation and unemployment spike simultaneously. Option D contradicts itself; a favorable supply shock lowers both inflation and unemployment, not increases them.",
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
    explanation: "Contractionary monetary policy reduces aggregate demand, which in the short run causes the economy to move down and to the right along the existing SRPC: unemployment increases and inflation decreases. This is the intended tradeoff when fighting inflation. Option A describes the long-run self-correction outcome, not the short-run Phillips curve movement; in the short run, reducing inflation requires accepting higher unemployment. Option C falsely claims inflation can be eliminated without any change in unemployment, which contradicts the short-run tradeoff. Option D incorrectly asserts that monetary policy changes the natural rate; the LRPC position is determined by structural factors like labor market institutions and demographics, not by monetary policy.",
  },
];
