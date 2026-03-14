import type { PracticeQuestion } from "@/data/supply-demand-content";

export const aggregateSupplyContent = {
  title: "Aggregate Supply",
  subtitle:
    "Why the economy's total output responds differently to price changes in the short run versus the long run",
  sections: [
    {
      heading: "Why SRAS Slopes Upward",
      content: `The overall price level rises 10%, but employers have not renegotiated wages. From the firm's perspective, revenue per unit just jumped while labor costs stayed flat. Margins widen. Production ramps up. Scale that across millions of firms and you get the upward slope of the **Short-Run Aggregate Supply (SRAS)** curve.

Two models explain the mechanism:

The **sticky-wage model** holds that nominal wages are locked in by contracts and cannot adjust instantly. When the price level rises but wages lag, firms find it cheaper in real terms to hire and produce more. Workers do not immediately demand raises because their contracts hold, or because they have not yet noticed the broader price increase.

The **misperceptions model** holds that firms sometimes confuse a general price increase with a rise in the *relative* price of their own product. A wheat farmer sees wheat prices climb and concludes demand for wheat has increased. She plants more. In reality, all prices rose. She expanded output based on a misread of the signal.

Both models reach the same conclusion: in the short run, higher price levels produce higher output because input costs, especially wages, have not caught up.`,
    },
    {
      heading: "What Shifts SRAS",
      content: `SRAS shifts when production costs change across the economy, independent of the price level.

**Input prices** are the most common driver. An oil price spike raises costs for transportation, manufacturing, agriculture, and chemicals all at once. Firms need a higher price level to justify the same output, so SRAS shifts left. Falling commodity prices do the opposite.

**Productivity improvements** shift SRAS right. Workers producing more output per hour (through better technology, training, or management) lower the cost per unit. Firms supply more at every price level.

**Supply shocks** are sudden and unexpected. A hurricane destroying Gulf Coast refineries, a pandemic shutting factories, a war disrupting grain exports. All shift SRAS left abruptly. A positive shock like a fracking technology breakthrough shifts SRAS right.

**Government regulations and production taxes** also matter. A new environmental regulation that raises compliance costs shifts SRAS left. A manufacturing subsidy shifts it right.

The AP exam distinction to memorize: demand-side factors (consumer confidence, government spending, money supply) shift AD. Supply-side factors (input costs, productivity, supply shocks) shift SRAS.`,
    },
    {
      heading: "LRAS and Potential Output",
      content: `Given enough time, wages and all input prices fully adjust to match the price level. Contracts get renegotiated. Workers demand raises. Firms reprice their output. The stickiness that gave SRAS its upward slope disappears.

Once everything has adjusted, the economy's output depends only on its real productive capacity: how many workers it has, how much capital they work with, and the state of technology. The price level becomes irrelevant. The **Long-Run Aggregate Supply (LRAS)** curve is therefore a vertical line.

That line sits at **potential GDP** (or full-employment output), the maximum the economy can sustainably produce with all resources deployed at normal rates. "Full employment" does not mean zero unemployment. It means unemployment is at the **natural rate**, which includes frictional and structural unemployment but not cyclical.

LRAS shifts only when the economy's productive capacity changes: labor force growth, physical capital accumulation, technological advances, or improvements in institutions and education.`,
    },
    {
      heading: "The Self-Correction Mechanism",
      content: `The economy falls into recession. Actual GDP drops below potential GDP, creating a **recessionary gap**, and unemployment climbs above the natural rate. What happens if the government does nothing?

The self-correction model says the economy eventually heals itself. With high unemployment, workers compete for scarce jobs. Nominal wages fall over time (or at least grow slower than they otherwise would). Falling wages reduce production costs. Lower costs shift SRAS right, and output gradually returns to potential GDP at a lower price level.

An **inflationary gap** self-corrects in the opposite direction. When actual GDP exceeds potential, labor is scarce. Workers demand higher wages, costs rise, SRAS shifts left, and output cools back to the LRAS.

The real debate in macroeconomics is about speed. Classical economists argue the adjustment is fast enough that government intervention is unnecessary. Keynesians counter that wages are extremely sticky downward. Workers and unions resist pay cuts fiercely. In a severe recession, self-correction could take years while millions suffer.

The Great Depression took over a decade. Milder recessions have self-corrected within a year or two. The severity of the downturn determines whether patience is a viable policy.`,
    },
    {
      heading: "Supply Shocks in History",
      content: `The 1970s oil crises remain the textbook negative supply shock. In 1973, OPEC imposed an oil embargo and prices quadrupled. In 1979, the Iranian Revolution disrupted supply again and prices doubled. Oil feeds into nearly every production process, so the entire SRAS curve shifted sharply left.

The result was **stagflation**: rising prices *and* falling output at the same time. Before the 1970s, most economists believed inflation and recession could not coexist. The Phillips Curve said they should move in opposite directions. Stagflation shattered that assumption and forced a rethinking of macroeconomic theory.

COVID-19 created a very different kind of supply shock in 2020-2021. Factories shut down. Shipping containers piled up at the wrong ports. Semiconductor shortages halted auto production. Workers left the labor force. SRAS shifted left dramatically. Meanwhile, massive stimulus checks shifted AD right. The collision of reduced supply and increased demand produced the sharp inflation spike of 2021-2022.

The policy lesson from both episodes: demand shocks and supply shocks require different responses. A demand-driven recession can be addressed by stimulating spending. A supply-driven shock is far harder because stimulating demand just piles more inflation onto an already constrained economy.`,
    },
    {
      heading: "Worked Example: SRAS Shift and New Equilibrium",
      content: `Starting point: long-run equilibrium with a price level of **110** and real GDP of **$5 trillion** (equal to potential GDP). A major oil price shock hits.

The oil shock raises production costs economy-wide, shifting SRAS left. The new short-run equilibrium settles at a price level of **120** and real GDP of **$4.6 trillion**.

**Identify the gap.**
Potential GDP = $5T. Actual GDP = $4.6T. Since actual < potential, this is a **recessionary gap** of $400 billion.

**What happened on the graph.**
SRAS shifted left. Output fell from $5T to $4.6T while the price level rose from 110 to 120. Falling output with rising prices is the definition of **stagflation**.

**Self-correction process.**
With GDP below potential, unemployment exceeds the natural rate. Over time, excess unemployment puts downward pressure on wages. Falling wages reduce costs, and SRAS gradually shifts back to the right. The economy moves along the AD curve toward $5T, and the price level drifts down from 120.

The difficult reality: self-correction from a negative supply shock means enduring both higher prices and higher unemployment during the adjustment. Stimulating AD would close the output gap but worsen inflation. Tightening to fight inflation would deepen the recession. Neither tool solves both problems simultaneously.`,
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
      "The upward slope of SRAS is driven by sticky wages and input prices. When the overall price level rises but wages have not yet adjusted, firms see wider profit margins and increase production. Option A is wrong because capital investment is a long-run decision, not an immediate response to price level changes. Option D contradicts the law of demand -- consumers demand less, not more, when prices rise.",
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
      "Oil is a key production input. When oil prices rise, it costs more to produce virtually everything, shifting SRAS left. Options A, C, and D all affect the demand side of the economy (AD), not the supply side. A drop in consumer confidence shifts AD left. More government spending and lower interest rates shift AD right. None of these change firms' production costs.",
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
      "LRAS is vertical because once all wages and prices have fully adjusted, the price level has no effect on real output. Output is determined by the economy's resources -- labor, capital, and technology. Option C is misleading because firms can increase production, but potential GDP is the maximum sustainable output. Option D is wrong because the money supply is not fixed in the long run and is not the reason LRAS is vertical.",
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
      "In a recessionary gap, unemployment exceeds the natural rate, putting downward pressure on wages over time. Falling wages reduce production costs, shifting SRAS to the right. This gradually returns output to potential GDP at a lower price level. Option A describes an AD shift, which is not part of the self-correction mechanism. Option D gets the price direction wrong -- self-correction from a recessionary gap involves falling prices, not rising ones.",
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
      "Stagflation -- rising prices combined with falling output -- results from a leftward shift of SRAS. When production costs increase suddenly (like an oil shock), firms produce less at every price level, pushing the price level up while output falls. Option A (AD shifting right) causes both higher prices and higher output, not the stagnation part. Option D (AD shifting left) causes lower prices and lower output, not the inflation part.",
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
      "LRAS shifts right when the economy's productive capacity permanently increases. A technological breakthrough allows more output from the same resources, expanding potential GDP. Option A affects AD through monetary policy, not productive capacity. Option B shifts SRAS left (higher input costs) but does not change long-run capacity. Option D shifts AD by putting more money in consumers' hands but does not expand the economy's ability to produce.",
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
      "COVID created two simultaneous shocks. Supply chain breakdowns, factory shutdowns, and labor shortages shifted SRAS left (less output at every price level). Meanwhile, stimulus checks and expanded unemployment benefits boosted consumer spending, shifting AD right. The combination of reduced supply and increased demand produced significant inflation. Option D is wrong on the demand side -- massive fiscal stimulus clearly boosted aggregate demand, not reduced it.",
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
      "Higher nominal wages increase production costs for firms across the economy. Since SRAS shifts are driven by changes in input costs, a widespread wage increase shifts SRAS to the left. At the new short-run equilibrium, the price level is higher and real GDP falls below potential, creating a recessionary gap. Option A is wrong because LRAS depends on the economy's real productive capacity (labor, capital, technology), not on the nominal wage level. Option C confuses a supply-side cost change with a demand-side income effect; while workers earn more per hour, the higher costs reduce output and employment, so the net demand effect is not a simple rightward AD shift. Option D describes the long-run adjustment, not the short-run impact.",
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
      "The classical range corresponds to the vertical portion of aggregate supply at or near potential GDP, where all resources are fully employed and additional demand only raises prices without increasing output. The Keynesian range is the relatively flat portion far below potential, where significant idle capacity (unemployed workers, shuttered factories) means firms can increase output without bidding up input prices. Option A reverses the two ranges entirely. Option C ignores the fundamental insight that the slope of AS depends on how close the economy is to full capacity. Option D incorrectly ties the ranges to development status rather than to capacity utilization.",
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
      "The self-correction mechanism works entirely through the supply side. When actual GDP is below potential, unemployment exceeds the natural rate. Surplus labor puts downward pressure on nominal wages over time. Falling wages reduce production costs across the economy, shifting SRAS to the right until output returns to potential GDP. The price level ends up lower than during the recessionary gap. Option B incorrectly has firms raising prices during a recession when demand is weak; firms have no pricing power with idle capacity. Option C describes monetary policy, which is an active intervention, not self-correction. Option D reverses the adjustment: the economy moves back to LRAS, not LRAS moving to match depressed output.",
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
      "A major reduction in energy costs has both short-run and long-run supply effects. In the short run, lower energy prices reduce production costs for virtually all industries, shifting SRAS right. In the long run, the permanent addition of a valuable natural resource expands the economy's productive capacity, shifting LRAS right. Option A focuses only on the demand side and misses the more significant supply-side impact; while consumers may benefit, the primary channel is reduced production costs. Option C ignores the short-run cost reduction that clearly shifts SRAS. Option D describes a possible secondary labor reallocation effect but misidentifies the dominant impact, which is a massive cost reduction, not a labor shortage.",
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
      "When the actual price level falls below expectations, nominal wages are locked in at the previously agreed level. With prices lower but wages unchanged, real wages (nominal wage divided by price level) are higher than firms anticipated. Higher real labor costs squeeze profit margins, making production less profitable, so firms reduce output and employment. This is why unexpected deflation or below-expected price levels cause recessions in the sticky-wage framework. Option A reverses the logic; lower-than-expected prices with sticky wages raise real costs, not lower them. Option C is incorrect because the entire point of sticky wages is that contracts cannot be renegotiated instantly. Option D assumes voluntary flexibility that contradicts the sticky-wage assumption.",
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
      "A temporary decline in oil prices reduces current production costs, shifting SRAS right. However, because the price decline is temporary (driven by a price war that will eventually end), it does not permanently expand the economy's productive capacity, so LRAS does not shift. Option B shifts both SRAS and LRAS because a larger labor force permanently increases productive capacity. Option C shifts both because new capital stock permanently raises potential output. Option D shifts both because permanent productivity gains expand what the economy can sustainably produce at full employment.",
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
      "In an inflationary gap, the economy operates beyond sustainable capacity. Unemployment is below the natural rate, so labor markets are extremely tight. Workers leverage their bargaining power to demand higher wages. Rising wages increase production costs, shifting SRAS to the left. Output falls back to potential GDP, but the price level settles at a permanently higher level. Option A describes a demand-side shift that could happen but is not the self-correction mechanism, which operates through the supply side via wage adjustments. Option C is wrong because LRAS does not adjust to accommodate unsustainable output levels; potential GDP is determined by real resources, not by how hot the economy is running. Option D reverses the adjustment direction; prices rise during inflationary gap correction, they do not fall.",
  },
];
