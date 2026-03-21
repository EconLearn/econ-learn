import type { PracticeQuestion } from "@/data/supply-demand-content";

export const aggregateSupplyContent = {
  title: "Aggregate Supply",
  subtitle:
    "Watch the curves shift in real time. Short-run stickiness versus the long-run vertical line, and why the difference matters for every macro policy question",
  sections: [
    {
      heading: "Why SRAS Slopes Upward",
      content: `The **Short-Run Aggregate Supply (SRAS)** curve slopes upward, and the reason comes down to one thing. Wages and other input costs do not adjust immediately when the overall price level changes.

Picture the overall price level jumping 10%. Firms are still paying wages set by last quarter's contracts. Revenue per unit went up but labor costs stayed put, so profit margins widen and firms ramp up production. Scale that across every factory, restaurant, and office in the economy and you get an upward-sloping relationship between the price level and total output.

Two models explain why this happens, and the AP exam has tested both.

The **sticky-wage model** focuses on nominal wages getting locked in by employment contracts. When prices rise and wages lag behind, hiring workers effectively gets cheaper in real terms, because the employer's revenue per unit is up but the payroll line has not moved. So firms hire more and produce more. Workers do not immediately push for raises because contracts hold them in place, or sometimes they just have not noticed the broader price shift yet. That sounds absurd, but contract cycles are very real. Think a three-year union agreement at Ford or GM.

The **misperceptions model** tells a completely different story. A wheat farmer watches wheat prices climb and concludes demand for her product specifically went up. She plants more acres. But actually all prices rose together. It was a general inflation, not a signal about wheat. She expanded production based on a misread, confusing a general price-level increase with a change in the relative price of her crop.

Both models end up in the same place. A higher price level produces more output in the short run because input costs, especially wages, have not caught up yet.`,
    },
    {
      heading: "What Shifts SRAS",
      content: `SRAS shifts left or right when production costs change across the whole economy. That is separate from movements along the curve caused by price level changes.

**Input prices** are the big one. When oil prices spike, as they did in 1973, 1979, and again in early 2022, costs go up for transportation, manufacturing, agriculture, chemicals, basically everything. SRAS shifts left. Falling commodity prices push it the other direction. The AP exam loves oil shocks as the go-to SRAS shifter, and for good reason. Oil feeds into virtually every production chain.

**Productivity improvements** shift SRAS right. If workers produce more output per hour through better technology or better training or smarter logistics, the cost per unit drops. Every price level now supports higher output. The U.S. saw significant SRAS-right shifts during the late 1990s tech boom as computerization raised productivity growth to around 3% annually, roughly double the historical average.

**Supply shocks** are sudden and often dramatic. Hurricane Katrina wrecking Gulf Coast refineries in 2005. COVID shuttering factories worldwide in 2020. Russia's invasion of Ukraine choking off grain exports in 2022. All of these yank SRAS to the left. A positive shock like the fracking revolution that slashed U.S. natural gas prices after 2008 pushes SRAS right.

**Government regulations and production taxes** matter too. A new EPA rule raising compliance costs for manufacturers shifts SRAS left. A targeted subsidy for semiconductor production like the 2022 CHIPS Act shifts it right.

One mistake that shows up constantly on AP Macro free-response questions is mixing up which curve shifts. Demand-side factors like consumer confidence, government spending, money supply shift AD. Supply-side factors like input costs, productivity, shocks shift SRAS. Confusing the two costs you the explanation point every single time.`,
    },
    {
      heading: "LRAS and Potential Output",
      content: `The **Long-Run Aggregate Supply (LRAS)** curve is a vertical line.

Given enough time, every sticky price unsticks. Contracts get renegotiated. Workers demand raises that reflect actual inflation. Firms reprice their products. Once all of that adjustment happens, the economy's output depends entirely on its real productive capacity. How many workers exist, how much capital they have, and the state of technology. The price level becomes irrelevant to how much the economy produces. That is why the line is vertical.

LRAS sits at **potential GDP**, sometimes called full-employment output. This is the maximum sustainable production level when all resources are deployed at their normal rates. The term "full employment" trips people up because it does not mean zero unemployment. It means unemployment is at the **natural rate**, which includes frictional unemployment (people switching jobs) and structural unemployment (skills mismatch) but not cyclical unemployment. The U.S. natural rate has hovered around 4-5% for decades.

What shifts LRAS? Only changes in the economy's actual productive capacity. Labor force growth, maybe through immigration or rising participation rates. Capital accumulation from sustained business investment. Technological breakthroughs that permanently raise output per worker. Institutional improvements like better education systems or stronger property rights. Changes in the price level do nothing to LRAS. It just stays put.`,
    },
    {
      heading: "The Self-Correction Mechanism",
      content: `When actual GDP sits below the LRAS line, the economy has a **recessionary gap**. Output is below potential and unemployment is above the natural rate.

The self-correction story runs through wages. With lots of people out of work, workers compete hard for scarce jobs. Over time, nominal wages drift downward, or at least grow slower than they otherwise would. Falling wages reduce production costs across the board, which shifts SRAS to the right. That rightward shift continues until output returns to potential GDP, and the price level ends up lower than where it started.

An **inflationary gap** self-corrects the opposite way. When actual GDP exceeds potential, labor markets are tight, workers have leverage, they push for raises. Rising wages mean rising costs, SRAS shifts left, output cools back to the LRAS line. But the price level is now permanently higher.

The real debate in macro is how fast this happens.

Classical economists argue the adjustment is quick enough that government intervention mostly creates problems. Keynesians counter that wages are incredibly sticky downward, workers and unions fight pay cuts ferociously, and for good reason. In a deep recession, waiting for self-correction could mean years of mass unemployment. The Great Depression ground on for more than a decade before war spending finally ended it. The 2001 recession self-corrected in roughly eighteen months. How severe the downturn is determines whether "just wait it out" qualifies as a real policy position or just sounds callous.`,
    },
    {
      heading: "Supply Shocks in History",
      content: `The 1973 OPEC oil embargo is still the textbook example of a negative supply shock. Oil prices quadrupled almost overnight, and then in 1979 the Iranian Revolution disrupted supply again and prices roughly doubled. Since oil feeds into nearly every production process, SRAS shifted sharply left both times.

The result was **stagflation**, rising prices and falling output happening at the same time. Before the 1970s, most economists genuinely believed inflation and recession could not coexist because the Phillips Curve said they moved in opposite directions. Stagflation broke that assumption and forced a wholesale rethinking of macroeconomic theory.

COVID-19 in 2020-2021 produced a very different kind of supply shock but with some of the same consequences. Factories across Asia shut down. Shipping containers piled up at the wrong ports, literally thousands of them sitting off the coast of Long Beach, California. The global semiconductor shortage halted auto production at Ford, GM, and Toyota for months at a stretch. Workers dropped out of the labor force entirely. SRAS shifted hard to the left. And meanwhile the $1,200 and $1,400 stimulus checks, plus expanded unemployment benefits worth $600/week extra, shifted AD to the right. Reduced supply slamming into boosted demand is what produced the inflation spike running above 8% by mid-2022.

The policy lesson from both eras is the same. Demand shocks and supply shocks need different responses. A demand-driven recession can be fought with stimulus, more government spending or lower interest rates. A supply-driven shock is far harder because stimulating demand when supply is already constrained just stacks more inflation on top of an economy that is already struggling.`,
    },
    {
      heading: "Worked Example: SRAS Shift and New Equilibrium",
      content: `Starting position: long-run equilibrium with a price level of **110** and real GDP of **$5 trillion**, right on the LRAS line. Actual GDP equals potential GDP. Then an oil shock hits.

The shock drives up production costs economy-wide, shifting SRAS to the left. The new short-run equilibrium settles at a price level of **120** and real GDP of **$4.6 trillion**.

**Identify the gap.**
Potential GDP = $5T. Actual GDP = $4.6T. Actual is below potential, so this is a **recessionary gap** of $400 billion.

**What happened on the graph.**
Three things at once. The price level climbed from 110 to 120, output dropped from $5T to $4.6T, and you can see a deadweight loss area between the old and new equilibrium points. Prices going up while output goes down. That is the textbook definition of **stagflation**.

**Self-correction process.**
With GDP below potential, unemployment exceeds the natural rate. Over time, that excess unemployment puts downward pressure on wages. Falling wages lower production costs, so SRAS gradually drifts back to the right. The economy slides along the AD curve back toward $5T, and the price level eases down from 120.

Here is the painful reality of a negative supply shock. Self-correction means sitting through both elevated prices and elevated unemployment during the entire adjustment period, which could take years. Stimulating AD would close the output gap faster but make inflation worse. Tightening monetary policy would fight inflation but deepen the recession. Neither demand-side tool fixes both problems at once. This is exactly the bind the Fed faced in 2022, and it is the same bind Arthur Burns faced in 1974.`,
    },
  ],
};

export const aggregateSupplyQuestions: PracticeQuestion[] = [
  {
    id: "as-1",
    question:
      "The SRAS curve slopes upward because:",
    options: [
      "Higher prices always cause firms to invest in more capital",
      "Wages and input prices adjust slowly, so firms earn higher margins when the price level rises",
      "Government spending increases as the price level rises",
      "Consumers demand more goods when prices are higher",
    ],
    correctIndex: 1,
    explanation:
      "The upward slope comes from sticky wages and input prices. When the overall price level rises but wages haven't caught up yet, profit margins widen and firms produce more. A is wrong because capital investment decisions play out over the long run, not as a quick response to price changes. D contradicts the law of demand.",
  },
  {
    id: "as-2",
    question:
      "Which of the following would shift SRAS to the left?",
    options: [
      "A decrease in consumer confidence",
      "An increase in the price of oil",
      "An increase in government spending",
      "A decrease in interest rates by the central bank",
    ],
    correctIndex: 1,
    explanation:
      "Oil is baked into virtually every production process: transportation, manufacturing, agriculture, chemicals. When its price rises, costs go up across the whole economy and SRAS shifts left. The other three options are all demand-side factors. Consumer confidence, government spending, and interest rates shift AD, not SRAS. Quick mental test: does it change production costs? If not, it's probably shifting AD.",
  },
  {
    id: "as-3",
    question:
      "The Long-Run Aggregate Supply (LRAS) curve is vertical because:",
    options: [
      "The government controls output in the long run",
      "In the long run, all prices and wages fully adjust, so output depends only on real productive capacity",
      "Firms cannot increase production beyond current levels",
      "The money supply is fixed in the long run",
    ],
    correctIndex: 1,
    explanation:
      "Once wages and prices fully adjust, the price level has zero effect on real output. What the economy produces depends on labor, capital, and technology, which are real resources. C is misleading because firms can increase production; potential GDP represents the sustainable maximum, not an absolute ceiling. D is wrong on both counts because the money supply isn't fixed long-term, and even if it were, that wouldn't explain why the curve is vertical.",
  },
  {
    id: "as-4",
    question:
      "An economy is in a recessionary gap. According to the self-correction mechanism, which of the following will happen over time without government intervention?",
    options: [
      "AD shifts right as consumers gain confidence",
      "LRAS shifts left as the economy's capacity shrinks",
      "Wages fall, SRAS shifts right, and output returns to potential GDP",
      "The price level rises until the recessionary gap closes",
    ],
    correctIndex: 2,
    explanation:
      "Self-correction works through the supply side, not the demand side. Unemployment above the natural rate puts downward pressure on wages over time. Lower wages reduce production costs, SRAS shifts right, and output returns to potential GDP at a lower price level. A describes an AD shift, which would be a lucky break or active policy, not self-correction. D gets the price direction exactly backward because self-correction from a recessionary gap lowers the price level.",
  },
  {
    id: "as-5",
    question:
      "Stagflation is caused by:",
    options: [
      "A rightward shift in AD",
      "A leftward shift in SRAS",
      "A rightward shift in LRAS",
      "A leftward shift in AD",
    ],
    correctIndex: 1,
    explanation:
      "SRAS shifting left means firms produce less output at every price level while the price level rises, which is the simultaneous stagnation and inflation that defines stagflation. A gives you higher prices with higher output (no stagnation). D gives you lower prices with lower output (no inflation). C would expand the economy's capacity, which is good news, not stagflation.",
  },
  {
    id: "as-6",
    question:
      "Which of the following would shift LRAS to the right?",
    options: [
      "A decrease in the money supply",
      "An increase in oil prices",
      "A technological breakthrough that raises productivity across industries",
      "An increase in government transfer payments",
    ],
    correctIndex: 2,
    explanation:
      "LRAS only moves when productive capacity permanently expands. A tech breakthrough lets the economy get more output from the same resources, so potential GDP grows and LRAS shifts right. A is monetary policy, which shifts AD. B raises input costs and shifts SRAS left but doesn't change what the economy can produce at full capacity. D puts more money in people's pockets (AD shift) without expanding the ability to produce anything new.",
  },
  {
    id: "as-7",
    question:
      "During the COVID pandemic, supply chains broke down while governments sent large stimulus checks. In the AD/AS framework, this is best described as:",
    options: [
      "AD shifted left and SRAS shifted right",
      "AD shifted right and SRAS shifted left",
      "Both AD and SRAS shifted right",
      "Both AD and SRAS shifted left",
    ],
    correctIndex: 1,
    explanation:
      "Two shocks hitting at the same time. Factory closures, labor shortages, and broken shipping routes shifted SRAS left. Stimulus checks ($1,200 then $1,400) plus $600/week extra in unemployment benefits boosted spending, shifting AD right. Reduced supply colliding with increased demand produced major inflation. D gets the demand side wrong because roughly $2 trillion in fiscal stimulus clearly boosted aggregate demand, not reduced it.",
  },
  {
    id: "as-8",
    question:
      "An economy is initially in long-run equilibrium. Workers negotiate new contracts that significantly increase nominal wages across all industries. In the short run, this wage increase will:",
    options: [
      "Shift LRAS to the left because higher wages reduce the economy's productive capacity",
      "Shift SRAS to the left, raising the price level and reducing real GDP below potential",
      "Shift AD to the right because workers now have more income to spend",
      "Have no effect because wages and prices adjust simultaneously in equilibrium",
    ],
    correctIndex: 1,
    explanation:
      "Higher nominal wages mean higher production costs across the board, so SRAS shifts left. At the new short-run equilibrium, the price level is higher and real GDP has dropped below potential, creating a recessionary gap. A confuses nominal wages with productive capacity; LRAS depends on real factors like labor supply and technology, not what number is printed on the paycheck. C sounds plausible at first but misses the supply-side damage. Yes, workers have more income per hour, but higher costs reduce output and employment, so the net effect isn't a clean demand boost. D describes the long-run adjustment, not what happens right after new contracts get signed.",
  },
  {
    id: "as-9",
    question:
      "Which of the following correctly distinguishes the classical range from the Keynesian range of the aggregate supply curve?",
    options: [
      "The classical range is horizontal, indicating that output can increase without any price increase; the Keynesian range is vertical, indicating full capacity",
      "The classical range is vertical at potential GDP, indicating that output cannot increase regardless of price level; the Keynesian range is relatively flat, indicating idle resources allow output increases with minimal price changes",
      "Both ranges slope upward at the same rate; the distinction is purely theoretical",
      "The classical range applies only to developing economies, while the Keynesian range applies to advanced economies",
    ],
    correctIndex: 1,
    explanation:
      "The far right of the AS curve (where it goes nearly vertical) is the classical range, at or near full capacity, where boosting demand only pushes up prices. The flat stretch on the left is the Keynesian range, where idle factories and unemployed workers mean firms can crank up output without much price pressure. A swaps the two ranges, which is one of the most common wrong answers the AP exam deploys. C ignores the fundamental point that the curve's slope changes depending on how close the economy is to full capacity.",
  },
  {
    id: "as-10",
    question:
      "An economy in a recessionary gap begins to self-correct without any government intervention. Which of the following sequences correctly describes this process?",
    options: [
      "Unemployment above the natural rate puts downward pressure on wages; falling wages reduce production costs; SRAS shifts right; output returns to potential GDP at a lower price level",
      "Firms increase prices to restore profitability; higher prices shift AD right; output returns to potential GDP at a higher price level",
      "The central bank automatically increases the money supply; AD shifts right; output returns to potential GDP",
      "LRAS shifts left to meet actual GDP; the economy reaches a new, lower potential output",
    ],
    correctIndex: 0,
    explanation:
      "Self-correction runs entirely through the supply side. Surplus labor pushes wages down over time, lower wages mean lower production costs, and SRAS shifts right until output returns to potential GDP at a lower price level. B gets it wrong because firms can't just raise prices when demand is weak and they're sitting on unused capacity. Nobody's buying. C describes active monetary policy intervention, which is the opposite of self-correction. D has the adjustment running backwards; the economy moves back toward LRAS, not LRAS collapsing down to meet depressed output.",
  },
  {
    id: "as-11",
    question:
      "A country discovers a massive new natural gas reserve and develops extraction technology that cuts energy costs in half. On the AD/AS diagram, this is best represented as:",
    options: [
      "AD shifts right because cheaper energy increases consumer spending power",
      "SRAS shifts right because lower energy costs reduce production costs across the economy, and LRAS shifts right because the economy's productive capacity has permanently increased",
      "Only LRAS shifts right because natural resources affect long-run capacity but not short-run costs",
      "SRAS shifts left because the resource extraction industry draws workers away from other sectors",
    ],
    correctIndex: 1,
    explanation:
      "Both curves shift. Short run: slashing energy costs cuts production costs for nearly every industry, so SRAS moves right. Long run: a permanent new resource base expands productive capacity, so LRAS shifts right too. A only sees the demand side and misses the much bigger supply-side story, since cheaper energy is primarily a supply-side development. C pretends that cutting energy costs in half wouldn't immediately lower what it costs firms to produce stuff, which is obviously wrong.",
  },
  {
    id: "as-12",
    question:
      "In the sticky-wage model, if the actual price level turns out to be lower than what workers and firms expected when they negotiated wage contracts, what happens in the short run?",
    options: [
      "Firms produce more because their real costs have fallen",
      "Firms produce less because real wages are now higher than anticipated, squeezing profit margins",
      "Output is unaffected because firms can immediately renegotiate all contracts",
      "Workers voluntarily accept lower wages to preserve their jobs, keeping output stable",
    ],
    correctIndex: 1,
    explanation:
      "Wages got locked in at levels that assumed prices would be higher. When the actual price level comes in below expectations but wages don't budge, real wages (nominal wage divided by the actual price level) end up higher than firms bargained for. Higher real labor costs squeeze margins, so firms cut back on production and lay people off. This is exactly why unexpected deflation causes recessions in the sticky-wage framework. Japan's experience in the 1990s and 2000s illustrates it well. A gets the logic completely backwards. C contradicts the entire premise of the sticky-wage model, which is that contracts cannot be instantly renegotiated.",
  },
  {
    id: "as-13",
    question:
      "Which of the following events would shift SRAS to the right without shifting LRAS?",
    options: [
      "A temporary decline in global oil prices due to a price war among oil-producing nations",
      "A permanent increase in the working-age population through sustained immigration",
      "Construction of new factories and infrastructure across the country",
      "A breakthrough in artificial intelligence that permanently raises worker productivity",
    ],
    correctIndex: 0,
    explanation:
      "A temporary oil price drop, like the Saudi-Russia price war in early 2020 that briefly sent oil futures negative, reduces current production costs and slides SRAS right. But because the price drop is temporary, it doesn't change the economy's long-run productive capacity, so LRAS stays put. B, C, and D all permanently expand what the economy can produce, which means both SRAS and LRAS would shift right.",
  },
  {
    id: "as-14",
    question:
      "An economy is in an inflationary gap where actual GDP exceeds potential GDP. According to the self-correction mechanism, what adjustment occurs in the long run?",
    options: [
      "AD shifts left as consumers become pessimistic, returning output to potential GDP",
      "Workers demand higher wages due to tight labor markets; rising wages shift SRAS left, reducing output to potential GDP at a higher price level",
      "LRAS shifts right to match the higher level of actual GDP, validating the inflationary gap as the new normal",
      "The price level falls as firms compete for customers, shifting SRAS right",
    ],
    correctIndex: 1,
    explanation:
      "In an inflationary gap, unemployment sits below the natural rate, so the labor market is tight and workers have bargaining power. They push for raises (and get them). Rising wages increase production costs across the board, shifting SRAS left. Output falls back to potential GDP, but the price level is now permanently higher. A describes something that could happen but it's not self-correction. Self-correction operates through wage adjustments on the supply side, not consumer sentiment on the demand side. C is wrong because LRAS doesn't stretch to accommodate output the economy can't sustainably maintain; potential GDP is set by real resources. D has the price direction completely reversed because in an inflationary gap, self-correction pushes the price level up, not down.",
  },
];
