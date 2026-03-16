import type { PracticeQuestion } from "@/data/supply-demand-content";

export const aggregateSupplyContent = {
  title: "Aggregate Supply",
  subtitle:
    "Watch the curves shift in real time — short-run stickiness versus the long-run vertical line, and why the difference matters for every macro policy question",
  sections: [
    {
      heading: "Why SRAS Slopes Upward",
      content: `Look at the upward-sloping curve on the graph. That's your **Short-Run Aggregate Supply (SRAS)**. Drag the price level slider up and notice what happens to output — it rises. The reason is deceptively simple: wages haven't caught up yet.

Imagine the overall price level jumps 10%. Employers are still paying last quarter's wages because contracts lock those numbers in. Revenue per unit climbed, but labor costs didn't budge. Margins widen. Firms ramp up production. Scale that across every factory, office, and restaurant in the economy and you get that upward slope you see on screen.

Two models explain the mechanism.

The **sticky-wage model** says nominal wages are frozen by contracts. When the price level rises and wages lag behind, hiring gets cheaper in real terms. Workers don't immediately push for raises — their contracts hold, or they simply haven't registered the broader price increase yet. So firms expand output.

The **misperceptions model** tells a completely different story. A wheat farmer sees wheat prices climb and thinks, "Demand for my wheat just jumped." She plants more. But actually all prices rose together. She expanded based on a misread signal — confusing a general price increase with a rise in the *relative* price of her product.

Both models land in the same place: higher price levels produce higher output in the short run because input costs, especially wages, are stuck.`,
    },
    {
      heading: "What Shifts SRAS",
      content: `The curve you're looking at shifts left or right when production costs change economy-wide — independent of the price level itself.

**Input prices** drive most shifts. Toggle the oil price control on the graph and watch SRAS slide left as costs spike. An oil price increase in the style of 1973 raises costs for transportation, manufacturing, agriculture, and chemicals simultaneously. Firms need a higher price level to justify the same output. Falling commodity prices push the curve the other direction.

**Productivity improvements** shift SRAS right. Workers producing more output per hour — through better tech, better training, smarter management — lower the cost per unit. Every price level now supports more output.

**Supply shocks** hit suddenly. A hurricane wrecking Gulf Coast refineries. A pandemic shuttering factories. A war cutting off Ukrainian grain exports in 2022. All of these yank SRAS left. A positive shock like the fracking revolution after 2008 pushes it right.

**Government regulations and production taxes** matter too. A new EPA compliance rule that raises costs for manufacturers shifts SRAS left. A targeted manufacturing subsidy shifts it right.

One distinction the AP Macroeconomics exam hammers repeatedly: demand-side factors (consumer confidence, government spending, money supply) shift AD. Supply-side factors (input costs, productivity, supply shocks) shift SRAS. Mixing these up on a free-response question costs you the entire explanation point.`,
    },
    {
      heading: "LRAS and Potential Output",
      content: `Now look at the vertical line on the graph. That's your **Long-Run Aggregate Supply (LRAS)**.

Given enough time, every sticky price unsticks. Contracts get renegotiated. Workers demand raises that match actual inflation. Firms reprice their goods. The stickiness that gave SRAS its upward slope vanishes completely. Once everything adjusts, the economy's output depends only on real productive capacity — how many workers exist, how much capital they operate, and what technology is available. The price level becomes irrelevant to output. Vertical line.

That line sits at **potential GDP**, sometimes called full-employment output. The maximum sustainable production level with all resources deployed at normal rates. "Full employment" trips people up. It does not mean zero unemployment. It means unemployment sits at the **natural rate** — which includes frictional unemployment (people between jobs) and structural unemployment (skills mismatch) but excludes cyclical unemployment.

LRAS shifts only when productive capacity itself changes. Labor force growth from immigration. Capital accumulation from business investment. Technological breakthroughs. Institutional improvements in education or property rights. Notice on the graph that dragging the price level slider does absolutely nothing to LRAS. It stays put.`,
    },
    {
      heading: "The Self-Correction Mechanism",
      content: `Drag actual GDP on the graph to the left of the LRAS line. See that gap? That's a **recessionary gap** — actual output below potential, unemployment above the natural rate.

The self-correction story goes like this. With high unemployment, workers compete for scarce jobs. Nominal wages fall over time, or at minimum grow slower than they otherwise would. Falling wages reduce production costs. Lower costs shift SRAS right. Watch the curve slide rightward on the graph until output returns to potential GDP at a lower price level.

An **inflationary gap** self-corrects in reverse. Drag actual GDP to the right of LRAS. Labor is scarce. Workers demand raises. Costs climb. SRAS shifts left. Output cools back to the vertical line.

The real fight in macroeconomics is about speed.

Classical economists say adjustment happens fast enough that government intervention mostly creates noise. Keynesians counter that wages are brutally sticky downward — workers and unions resist pay cuts with everything they've got. In a severe recession, self-correction could drag on for years while millions sit unemployed. The Great Depression took over a decade. The 2001 recession self-corrected in about eighteen months. Severity determines whether patience qualifies as a serious policy stance.`,
    },
    {
      heading: "Supply Shocks in History",
      content: `The 1973 OPEC oil embargo remains the textbook negative supply shock. Prices quadrupled almost overnight. Then in 1979, the Iranian Revolution disrupted supply again and prices doubled. Oil feeds into nearly every production process, so SRAS shifted sharply left both times.

The result was **stagflation** — rising prices *and* falling output simultaneously. Before the 1970s, most economists believed inflation and recession couldn't coexist. The Phillips Curve said they moved in opposite directions. Stagflation broke that framework and forced a wholesale rethinking of macroeconomic theory.

COVID-19 produced a very different shock in 2020-2021. Factories shut down across Asia. Shipping containers piled up at wrong ports. The global semiconductor shortage halted auto production at Ford, GM, and Toyota for months. Workers left the labor force entirely. SRAS shifted left dramatically. Meanwhile, the $1,200 and $1,400 stimulus checks plus expanded unemployment benefits shifted AD right. Reduced supply colliding with boosted demand — that collision produced the sharp inflation spike running above 8% by mid-2022.

The policy lesson from both episodes: demand shocks and supply shocks require different responses. A demand-driven recession can be addressed by stimulating spending through fiscal or monetary policy. A supply-driven shock is far harder. Stimulating demand when supply is constrained just piles more inflation onto an already stressed economy.`,
    },
    {
      heading: "Worked Example: SRAS Shift and New Equilibrium",
      content: `Look at the starting position on the graph: long-run equilibrium with a price level of **110** and real GDP of **$5 trillion**, sitting right on the LRAS line. Potential GDP equals actual GDP. Now hit the oil shock button.

The shock raises production costs economy-wide, dragging SRAS to the left. Watch where the new intersection lands. The short-run equilibrium settles at a price level of **120** and real GDP of **$4.6 trillion**.

**Identify the gap.**
Potential GDP = $5T. Actual GDP = $4.6T. Actual falls short of potential. That's a **recessionary gap** of $400 billion.

**What happened on the graph.**
Three things occurred at once: the price level jumped from 110 to 120, output fell from $5T to $4.6T, and a deadweight loss region appeared between the old and new equilibrium points. Rising prices with falling output. That's the definition of **stagflation**.

**Self-correction process.**
With GDP below potential, unemployment exceeds the natural rate. Over time — toggle the "self-correct" animation — excess unemployment pushes wages down. Falling wages reduce costs. SRAS gradually drifts back rightward. The economy slides along the AD curve toward $5T, and the price level eases down from 120.

The painful reality with a negative supply shock: self-correction means enduring both elevated prices and elevated unemployment during the entire adjustment period. Stimulating AD would close the output gap but worsen inflation. Tightening monetary policy to fight inflation would deepen the recession. Neither tool fixes both problems simultaneously, which is exactly why the 2022 Fed faced such brutal tradeoffs.`,
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
      "Sticky wages and input prices create the upward slope. When the overall price level rises but wages haven't adjusted yet, profit margins widen and firms produce more. (A) is off — capital investment is a long-run decision, not a snap response to price level changes. (D) contradicts the law of demand outright.",
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
      "Oil is embedded in virtually every production process. When its price rises, costs climb economy-wide, and SRAS shifts left. The other three options — consumer confidence, government spending, interest rates — all live on the demand side of the model. They shift AD, not SRAS. A quick test: does it change production costs? If not, it's probably an AD shifter.",
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
      "Once wages and prices fully adjust, the price level has zero effect on real output. Output is pinned to the economy's resources — labor, capital, technology. (C) is misleading because firms can increase production; potential GDP just represents the maximum sustainable level. (D) is wrong on both counts: the money supply isn't fixed, and it wouldn't explain the vertical shape anyway.",
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
      "Self-correction runs through the supply side. Unemployment above the natural rate pushes wages down. Lower wages mean lower production costs, so SRAS shifts right until output returns to potential GDP — at a lower price level, not a higher one. (A) describes an AD shift, which is government intervention or a lucky confidence boost, not self-correction. (D) gets the price direction exactly backward.",
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
      "SRAS shifting left means firms produce less at every price level while the price level rises. That's stagflation — inflation plus stagnation. (A) gives you higher prices and higher output, missing the stagnation. (D) gives you lower prices and lower output, missing the inflation.",
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
      "LRAS moves only when the economy's productive capacity permanently expands. A tech breakthrough lets the economy squeeze more output from the same resources, so potential GDP grows. (A) is monetary policy — shifts AD. (B) shifts SRAS left by raising input costs but doesn't change what the economy can produce at full capacity. (D) puts more dollars in consumers' pockets (AD shift) without expanding the ability to produce anything new.",
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
      "Two shocks hit simultaneously. Factory shutdowns, labor shortages, and broken supply chains shifted SRAS left. Stimulus checks and expanded unemployment benefits boosted spending, shifting AD right. Reduced supply plus increased demand produced significant inflation. If you picked (D), you got the demand side wrong — $2 trillion in fiscal stimulus clearly boosted aggregate demand.",
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
      "Higher nominal wages mean higher production costs across the board. SRAS shifts left. At the new short-run equilibrium, the price level is higher and real GDP drops below potential — creating a recessionary gap. (A) confuses nominal wages with productive capacity; LRAS depends on real factors like labor supply and technology, not the nominal wage level. (C) sounds plausible but misses the supply-side hit: yes workers earn more per hour, but higher costs reduce output and employment, so the net effect isn't a clean rightward AD shift. (D) describes the long-run adjustment, not what happens in the short run when contracts just got signed.",
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
      "Look at the far right of the AS curve on the graph — where it goes nearly vertical. That's the classical range, at or near potential GDP, where all resources are employed and pushing demand higher only raises prices. Now look at the flat stretch on the far left. That's the Keynesian range, where idle factories and unemployed workers mean firms can ramp up output without bidding up input prices. (A) swaps the two ranges entirely — a common wrong answer on the AP exam. (C) ignores the fundamental point that the curve's slope depends on how close the economy is to full capacity.",
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
      "Self-correction works entirely through the supply side. Surplus labor pushes nominal wages down over time. Falling wages lower production costs, shifting SRAS right until output returns to potential GDP. The price level ends up lower. (B) gets it wrong because firms have no pricing power when demand is weak and capacity sits idle — you can't just raise prices into a recession. (C) describes monetary policy, which is active intervention, the opposite of self-correction. (D) has the adjustment running the wrong direction; the economy moves back to LRAS, not LRAS collapsing to match depressed output.",
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
      "Both curves shift. In the short run, slashing energy costs reduces production costs for nearly every industry, so SRAS moves right. In the long run, a permanent new resource base expands the economy's productive capacity, shifting LRAS right too. (A) only looks at the demand side and misses the much larger supply-side story. (C) pretends that cutting energy costs in half wouldn't immediately lower production costs — it obviously would.",
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
      "Wages got locked in at levels that assumed a higher price level. When prices come in lower than expected but wages stay put, real wages (nominal wage divided by actual price level) end up higher than firms planned for. Higher real labor costs squeeze margins, so firms cut production and lay off workers. That's why unexpected deflation causes recessions in the sticky-wage framework. (A) reverses the logic entirely. (C) contradicts the whole premise — the point of sticky wages is that contracts can't be renegotiated instantly.",
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
      "A temporary oil price drop — like the Saudi-Russia price war of early 2020 — reduces current production costs, sliding SRAS right. But because it's temporary, the economy's long-run productive capacity doesn't change, so LRAS stays put. (B), (C), and (D) all permanently expand what the economy can produce, meaning both SRAS and LRAS shift right.",
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
      "In an inflationary gap, unemployment sits below the natural rate. Labor markets are tight. Workers have leverage and they use it — demanding higher wages. Rising wages push production costs up, shifting SRAS left. Output falls back to potential GDP, but the price level settles permanently higher. (A) describes something that could happen but it's not the self-correction mechanism, which operates through wage adjustments on the supply side. (C) is wrong because LRAS doesn't stretch to accommodate unsustainable output; potential GDP is set by real resources, not by how overheated the economy runs. (D) gets the price direction completely reversed.",
  },
];
