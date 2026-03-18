import type { PracticeQuestion } from "@/data/supply-demand-content";

export const unemploymentInflationContent = {
  title: "Unemployment & Inflation",
  subtitle: "From the labor crises of the 1930s to the stagflation of the 1970s — how economists classified joblessness, learned to measure rising prices, and discovered the Phillips curve tradeoff",
  sections: [
    {
      heading: "Types of Unemployment",
      content: `Economists split unemployment into three buckets, and knowing which bucket someone falls into matters a lot for policy — you can't fix structural unemployment with a stimulus check.

**Frictional unemployment** is the easiest to wrap your head around. Someone just graduated from UGA with an accounting degree and is sending out applications. A marketing director at Coca-Cola quit in February 2024 because she got a better offer at PepsiCo but doesn't start for six weeks. Both of these people have skills employers want. The jobs are out there — the matching just takes time, and that's true even when the economy is booming.

**Structural unemployment** is a different animal entirely. When U.S. coal employment dropped roughly 40% between 2011 and 2020, miners in places like McDowell County, West Virginia weren't between jobs — they were stranded. The General Motors plant in Lordstown, Ohio shut down in 2019, and those assembly-line workers couldn't exactly retool overnight into software developers. Their skills or their geography (or both) stopped matching what employers needed, and retraining programs take months or years when they work at all, which they often don't. Moving is expensive. Whole communities get hollowed out.

**Cyclical unemployment** is the one that tracks recessions directly. Aggregate demand tanks, businesses slash payrolls, layoffs cascade through sector after sector. The 2008-2009 financial crisis, the early weeks of COVID in 2020 — classic examples. Once GDP climbs back to potential, cyclical unemployment goes away.

The **natural rate of unemployment** is frictional plus structural — the unemployment rate when the economy sits at potential GDP and cyclical unemployment equals zero. The CBO pegged it at about 4.4% for 2024. That number will never be zero because people will always be between jobs and some skills will always be mismatched with what the market demands.`,
    },
    {
      heading: "Measuring Unemployment",
      content: `The Bureau of Labor Statistics puts out monthly unemployment numbers, and the way they define "unemployed" is much narrower than most people realize.

The **labor force** counts everyone age 16 and up who is either working or actively looking for work. If you're retired, a full-time student who isn't job hunting, a stay-at-home parent, or you just plain gave up — you're not in the labor force at all.

**Unemployment rate = (Unemployed / Labor Force) x 100**

To count as unemployed you have to be both jobless AND actively searching. That creates two big holes in the data that come up on basically every AP exam.

**Discouraged workers** are people who stopped looking because they figure nothing's out there for them. Once they quit searching, poof — they drop out of the labor force entirely, and the official unemployment rate actually goes down even though the job market didn't improve one bit. The BLS just stopped counting them. During 2009-2010 this made the recession look less awful than it was; the headline U-3 rate topped out at 10.0% in October 2009, but broader measures that account for discouraged workers put the real damage closer to 17%.

**Underemployment** is the other blind spot. A software engineer who can't find tech work and is pulling espresso shots part-time at Starbucks shows up as "employed" in the official data. The BLS does publish a U-6 measure that captures discouraged workers plus people stuck in involuntary part-time jobs, but nobody puts U-6 in newspaper headlines. On the AP exam, if a question describes someone working part-time who wants full-time work, that's underemployment and the U-3 rate misses it completely.`,
    },
    {
      heading: "Inflation and the CPI",
      content: `Gas hit $5.02 a gallon in June 2022 — AAA's highest recorded national average ever. Grocery bills were up something like 10% year-over-year. The government boils all of that price movement down to one number through the **Consumer Price Index (CPI)**, which tracks the cost of a fixed **market basket** of stuff a typical urban household buys.

The BLS has published the CPI since 1913, which makes it one of the oldest continuous economic data series in the country. They pick the basket — housing, food, transportation, medical care, education, etc. — and weight each category by how much a typical budget allocates to it (housing eats up roughly a third). Then they compare what the basket costs now versus a base year, multiply by 100, and that's your CPI.

The formula for turning two CPI values into an inflation rate is straightforward:

**Inflation rate = ((CPI_new - CPI_old) / CPI_old) x 100**

The CPI has some well-known problems that push the number higher than actual cost-of-living increases, and the 1996 Boskin Commission laid them all out. **Substitution bias** — beef prices spike so people switch to chicken, but the fixed basket pretends everyone kept buying beef at the higher price. **New product bias** — the basket gets updated on a lag and misses cheaper or better products entering the market (smartphones weren't in the original basket, obviously). **Quality change bias** — a $900 laptop this year runs circles around last year's $900 laptop, so calling that "unchanged price" doesn't capture the improvement. The Boskin Commission estimated these biases together overstated inflation by about 0.8 to 1.1 percentage points annually. That matters a ton for things like Social Security COLAs, which are pegged to CPI.`,
    },
    {
      heading: "The Phillips Curve",
      content: `A.W. Phillips published his paper in 1958 after crunching nearly a century of British wage and unemployment data — 1861 through 1957. The pattern was consistent: low unemployment went with rising wages and prices, high unemployment went with low inflation.

The **short-run Phillips curve (SRPC)** slopes downward with unemployment on the x-axis and inflation on the y-axis. Up and to the left means lower unemployment, higher inflation. Down and to the right, the reverse. Lyndon Johnson demonstrated this relationship beautifully (if accidentally) in the late 1960s — he funded both Vietnam and Great Society programs simultaneously, unemployment dropped below 4%, and inflation crept past 5%.

The long run is a totally different story, and this is the part students trip on. Milton Friedman and Edmund Phelps, working separately in the late 1960s, both argued the tradeoff wouldn't hold permanently. The **long-run Phillips curve (LRPC)** is vertical at the natural rate of unemployment. Their logic: eventually workers and firms adjust their inflation expectations, so a central bank that keeps trying to hold unemployment below the natural rate through endless money creation just gets accelerating inflation with no lasting employment benefit. The 1970s proved them right in spectacular fashion. Paul Volcker's Fed finally killed the inflationary spiral in 1981-1982 by shoving the federal funds rate above 20%, which triggered a brutal recession — unemployment hit 10.8% — but it broke the cycle.

What shifts the SRPC? Expected inflation, mainly. When people start expecting higher inflation (because they've been living through it, or because the Fed signals loose policy), the whole curve shifts up — at every unemployment rate, actual inflation runs higher. When expectations cool back down, the curve drops. After Volcker, anchoring inflation expectations became basically the central obsession of central banking worldwide.`,
    },
    {
      heading: "Stagflation and Supply Shocks",
      content: `October 17, 1973 — the Organization of Arab Petroleum Exporting Countries slapped an oil embargo on nations that backed Israel in the Yom Kippur War. Oil prices quadrupled within months. Inflation surged. Unemployment surged. Both at the same time.

The Phillips curve said that wasn't supposed to happen.

Economists coined the term **stagflation** — stagnation plus inflation — and the standard Keynesian framework, which assumed policymakers could always pick their spot on a nice clean inflation-unemployment tradeoff, basically fell apart. What happened was an adverse supply shock: oil price spikes jacked up production costs across nearly every industry all at once. Firms cut output and laid off workers while simultaneously raising prices to cover their higher costs. On the Phillips curve diagram, an adverse supply shock shifts the SRPC upward and to the right, meaning higher inflation at every level of unemployment.

The policy bind was genuinely awful. Fight inflation with contractionary policy and you make unemployment worse. Fight unemployment with expansionary policy and you make inflation worse. Arthur Burns ran the Fed through most of the 1970s and tried to do a little of both — didn't work. Inflation was still running near 13% when Volcker replaced him in August 1979.

Favorable supply shocks flip the whole thing around. The late-1990s tech boom combined with cheap energy shifted the SRPC downward and to the left, delivering something rare and wonderful — lower inflation AND lower unemployment at the same time. The U.S. hit 3.9% unemployment in 2000 with inflation staying under 3.5%. That doesn't happen from demand management alone; it takes supply-side conditions cooperating.`,
    },
    {
      heading: "Worked Example",
      content: `CPI was 248 last year and 255 this year.

Inflation rate = (255 - 248) / 248 x 100 = 7 / 248 x 100 = **2.8%**.

The labor force is 160 million, with 6.4 million unemployed.

Unemployment rate = 6.4 / 160 x 100 = **4.0%**.

Connecting this to the Phillips curve: if the natural rate is 5.0% and the current unemployment rate is 4.0%, the economy is running below its natural rate. On the short-run Phillips curve, that puts you in the upper-left zone — lower unemployment than the natural rate, with inflationary pressure building. The standard policy prescription would be contractionary policy to nudge unemployment back toward 5.0% and cool inflation off. This was more or less where the U.S. sat in late 2021, right before the inflation spike of 2022 forced the Fed into its most aggressive rate-hiking campaign since Volcker.

Different scenario: a supply shock pushes unemployment to 7.0% while inflation jumps to 5.0%. That's stagflation — the SRPC shifted upward and to the right. No demand-side tool can fix both problems at once. Expansionary policy brings unemployment down but pours gasoline on inflation. Contractionary policy tames prices but deepens the jobs crisis. The entire decade of the 1970s was a painful demonstration of exactly this dilemma, and the AP exam loves asking about it in free-response format.`,
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
    explanation: "She has usable skills and she's looking — that's textbook frictional unemployment. The trap answer is B (structural), but structural requires a mismatch between what she can do and what's available, like a coal miner in a region where mining disappeared. Nothing suggests that here. A would need a recession-driven layoff. D applies to predictable calendar-based swings like holiday retail hiring and post-holiday layoffs.",
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
    explanation: "Natural rate = frictional + structural. These are the types that stick around even when the economy is at potential GDP. Cyclical unemployment is zero at the natural rate — that's part of the definition. Any answer choice with \"cyclical\" in it is automatically wrong here.",
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
    explanation: "((210 - 200) / 200) x 100 = 5%. You divide by the OLD CPI, not the new one. The most common mistake is picking A — students see the 10-point jump and write 10%, confusing a raw point change with a percentage. C (4.76%) comes from dividing by 210 instead of 200. D has no basis in the formula at all.",
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
    explanation: "The SRPC slopes downward on the standard diagram — move left to lower unemployment and you move up to higher inflation. Phillips documented this inverse relationship in 1958 using nearly a century of British data. A describes an upward slope, which contradicts the curve entirely. B also reverses the relationship. D denies any relationship exists, which contradicts the whole point of the model.",
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
    explanation: "Once discouraged workers quit searching, they leave the labor force. Both the numerator and denominator of the unemployment formula shrink, and the net effect is a lower measured rate — even though the actual job situation hasn't improved at all. This was a real problem during 2009-2010 when the U-3 rate understated how bad things were. A sounds intuitive but the BLS only counts people actively searching. C is wrong because discouraged workers are explicitly excluded once they stop looking. D gets the labor force direction backwards.",
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
    explanation: "Stagflation means inflation and unemployment both climbing at once — stagnation plus inflation. The 1973-1975 period after OPEC's embargo is the go-to example. B is what normal movement along the SRPC during a demand expansion looks like. A describes what a favorable supply shock produces. D describes what happens under contractionary demand policy.",
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
    explanation: "Given enough time, workers and firms fully adjust their inflation expectations. The economy settles at the natural rate no matter what the inflation rate is — meaning there's no permanent tradeoff to exploit. Friedman and Phelps predicted this in the late 1960s and the 1970s confirmed it. A is wrong because the Fed can absolutely change the money supply long-term; the issue is that doing so only changes the inflation rate, not the unemployment rate. C compares policy tools but doesn't address why the LRPC is vertical. D is nonsense.",
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
    explanation: "An adverse supply shock — the 1973 OPEC embargo, the 2021-2022 supply chain mess — drives up production costs and lifts inflation expectations. The SRPC shifts upward and to the right, meaning higher inflation at every unemployment rate. A describes a favorable supply shock (the exact opposite). B is wrong because a supply shock shifts the whole curve, not just the economy's position on it. D is incorrect — the SRPC absolutely shifts in response to supply shocks, and that shift is how the model explains stagflation.",
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
    explanation: "Natural rate = frictional + structural = 3% + 2% = 5%. Cyclical unemployment is excluded from the natural rate by definition. Number of cyclically unemployed = 1.5% of 150 million = 2.25 million. A adds cyclical to the natural rate, which is wrong. C uses only frictional and ignores structural. D gets the natural rate correct but then multiplies 5% by 150 million instead of using the 1.5% cyclical figure — mixing up which rate to apply.",
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
    explanation: "CPI went from 100 to 110, which is a 10% price increase. Nominal wages went from $50,000 to $52,000, only a 4% bump. Prices outpaced wages, so purchasing power fell. You can calculate it directly — real wage in the current year = ($52,000 / 110) x 100 = roughly $47,273, which is below the base-year $50,000. This exact pattern hammered American workers during 2021-2022, when wage gains consistently ran behind price increases. A ignores the percentage comparison. C claims the increases are proportional but 4% obviously doesn't equal 10%. D is wrong because the CPI gives you everything you need for this calculation.",
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
    explanation: "Automation making someone's skills obsolete is classic structural unemployment — it mirrors what happened to thousands of manufacturing workers across the Rust Belt starting in the 1980s and continuing through today. A is tempting because the guy is searching, but frictional unemployment assumes your skills are still marketable and it's just a matter of time. Six months of searching with no match points to a deeper mismatch. B is wrong because cyclical unemployment comes from economy-wide downturns, not a single firm adopting robots. D is about calendar-driven fluctuations, which has nothing to do with automation.",
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
    explanation: "Borrowers with fixed-rate loans are paying back their debt in dollars that buy less than when they originally borrowed. The real burden of their debt shrinks — this was a massive wealth transfer during the inflationary 1970s, when homeowners with 6% mortgages were effectively getting paid to borrow as inflation ran at 10%+. A is the opposite situation: retirees on fixed pensions get crushed because their income doesn't adjust. B describes lenders, who get hurt for the same reason borrowers benefit. D describes workers whose locked-in wages lose purchasing power.",
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
    explanation: "**Menu costs** are exactly what the name suggests — the costs of changing posted prices. Originally the term came from the literal image of a restaurant reprinting menus, but it covers everything: updating website prices, recoding barcode scanners, reprinting catalogs. Amazon changes millions of prices per day and even for them it requires real computational resources. A (shoe-leather costs) is a different inflation cost — the time and hassle people spend minimizing their cash holdings. C is a general concept about forgone alternatives. D refers to costs already incurred that can't be recovered.",
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
    explanation: "Both unemployment and inflation climbing simultaneously is the signature of stagflation — the pattern from the 1973 oil embargo and again after the 1979 Iranian Revolution. The SRPC shifted upward and to the right, and demand-side tools can only fix one problem while making the other worse. A is wrong because movement along the SRPC produces an inverse pattern (lower unemployment with higher inflation, or the reverse, but not both rising). C is about structural changes in the labor market, not a supply shock. D contradicts itself — favorable supply shocks lower both inflation and unemployment, not raise them.",
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
    explanation: "Contractionary monetary policy pulls aggregate demand back, and in the short run you slide down and to the right along the SRPC — unemployment goes up, inflation comes down. Volcker did exactly this in 1981-1982, cranking rates above 20% and accepting 10.8% unemployment to kill inflation. A describes what happens in the long run through self-correction, not the short-run Phillips curve movement. C claims you can get rid of inflation for free with no unemployment cost, which contradicts the entire framework. D is wrong because monetary policy doesn't change the natural rate — that's determined by structural factors like labor market rules and demographics, not by what the central bank does with interest rates.",
  },
];
