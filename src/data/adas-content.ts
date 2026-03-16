export const adasContent = {
  title: "Aggregate Demand & Supply",
  subtitle: "How the entire economy finds its price level and output through AD, SRAS, and LRAS",
  sections: [
    {
      heading: "From Micro to Macro",
      content: `U.S. real GDP fell from $15.6 trillion in Q4 2007 to $14.4 trillion in Q2 2009. Unemployment hit 10%. The housing sector collapsed, but the damage spread to banking, auto manufacturing, retail, and state budgets. One sector's failure dragged the whole economy down.

The **AD/AS model** exists to analyze exactly this kind of economy-wide event. Instead of one product or one industry, it handles total output and the overall price level.

The axes replace the micro variables from supply-and-demand diagrams. **Price Level (PL)** is the average of all prices economy-wide, measured by the CPI or GDP deflator. Not the price of any single good. **Real GDP (Y)** is total output, adjusted for inflation.

This framework is what economists use to diagnose recessions, explain inflation, and evaluate whether government policy is helping or making things worse.`,
    },
    {
      heading: "Aggregate Demand (AD)",
      content: `Consumers buy groceries. Businesses buy equipment. The government builds highways. Foreigners buy American exports. Sum it all: **aggregate demand** = C + I + G + (X - M).

The AD curve slopes downward for three reasons.

The **wealth effect**: a higher price level erodes the purchasing power of savings. People spend less. The **interest rate effect**: higher prices increase money demand, which pushes up interest rates. That chokes off business investment and big consumer purchases like cars and houses. The **exchange rate effect**: rising U.S. prices make American goods more expensive abroad, reducing exports and making imports look cheaper. Net exports decline.

What shifts AD? Changes in consumer confidence, government spending, tax policy, monetary policy, or foreign income. The Fed cutting rates to near zero during COVID was a massive rightward push on AD. A tax hike shifts AD left. When the European economy strengthened in 2017, U.S. exports rose and AD shifted right.`,
    },
    {
      heading: "Short-Run Aggregate Supply (SRAS)",
      content: `A factory owner in 2021. Prices for her products climb, but worker wages are locked in by contracts signed months ago. Every unit sold earns a wider margin, so she ramps up production. Scale that dynamic across millions of firms and you see why **SRAS** slopes upward.

"Short run" means the window where input prices remain sticky. Workers signed contracts last quarter. Suppliers quoted prices months ago. That lag between output prices and input costs gives the curve its upward slope.

Anything that changes production costs economy-wide shifts SRAS. The 1973 OPEC embargo sent energy costs surging, shifting SRAS left. A manufacturing technology breakthrough that lowers costs shifts SRAS right. Changes in wages, commodity prices, business taxes, regulations, and supply chain disruptions all work through this same channel.`,
    },
    {
      heading: "LRAS and Full Employment",
      content: `The **Long-Run Aggregate Supply (LRAS)** curve is a vertical line. Once all wages and prices have fully adjusted, output depends entirely on real resources: the workforce, the capital stock, and technology. Double every price and every wage overnight and nothing real changes. The same machines exist. The same people show up to work Monday.

That vertical line sits at **potential GDP**, the economy's maximum sustainable output. Where the economy sits relative to LRAS tells you a lot.

Left of LRAS: a recessionary gap. Factories sit idle, unemployment runs above the natural rate. The U.S. economy in 2009.

Right of LRAS: an inflationary gap. The economy overheats, overtime is everywhere, labor markets are tight. The late 1960s before inflation accelerated.

Self-correction works through wages. In a recessionary gap, high unemployment pushes wages down over time. Lower wages reduce production costs, shifting SRAS right until output returns to potential. In an inflationary gap, tight labor markets bid wages up, shifting SRAS left and cooling the economy back to LRAS. The mechanism is real. It can also take years.`,
    },
    {
      heading: "Worked Example",
      content: `MPC = **0.8**. The government increases spending by **$10 billion**. How far does AD shift?

**Spending multiplier** = 1 / (1 - 0.8) = 1 / 0.2 = **5**

Change in AD = 5 x $10B = **$50 billion rightward shift**.

The chain: the government pays $10B to construction firms. Workers earn that income and spend 80%, or $8B, at restaurants, stores, and landlords. Those recipients spend 80% of the $8B ($6.4B). The geometric series $10B + $8B + $6.4B + $5.12B + ... converges to $50B.

Now compare a **$10B tax cut**. Tax multiplier = -MPC / (1 - MPC) = -0.8 / 0.2 = **-4**. The same $10B only shifts AD right by $40B. Why the gap? Government spending injects the full $10B into the spending stream immediately. A tax cut lets households pocket $10B, but they save 20% before spending. Only $8B enters the first round. The spending multiplier exceeds the tax multiplier by exactly 1, regardless of the MPC. The AP exam tests this distinction constantly.`,
    },
  ],
};

export const adasQuestions = [
  {
    id: "adas-1",
    question: "An increase in government spending shifts which curve?",
    options: [
      "SRAS shifts right",
      "LRAS shifts right",
      "AD shifts right",
      "AD shifts left",
    ],
    correctIndex: 2,
    explanation: "G is a component of AD = C + I + G + (X - M). More government spending raises total spending at every price level, shifting AD right. SRAS shifts come from changes in production costs (wages, oil prices), not from spending decisions. An increase in G is expansionary, pushing AD right, not left.",
  },
  {
    id: "adas-2",
    question: "A sudden oil price spike would cause:",
    options: [
      "AD to shift right (economic boom)",
      "SRAS to shift left (stagflation)",
      "LRAS to shift right (growth)",
      "AD to shift left and SRAS to shift right",
    ],
    correctIndex: 1,
    explanation: "Oil feeds into production costs for nearly everything: transportation, plastics, heating, manufacturing. A price spike raises costs across the board, shifting SRAS left. Output falls while prices rise. Stagflation. The 1970s OPEC crises are the textbook case. An oil spike is a supply shock, not a demand shock, so AD is not the affected curve. LRAS shifts only with changes to productive capacity (labor force, capital stock, technology), not input price swings.",
  },
  {
    id: "adas-3",
    question: "If actual GDP exceeds potential GDP (LRAS), the economy has:",
    options: [
      "A recessionary gap with rising unemployment",
      "An inflationary gap with upward pressure on prices",
      "Reached long-run equilibrium",
      "Negative GDP growth",
    ],
    correctIndex: 1,
    explanation: "Actual GDP to the right of LRAS means the economy runs beyond sustainable capacity. Firms stretch capacity, workers log overtime, employers bid up wages to attract scarce labor. That wage pressure pushes prices higher. A recessionary gap is the opposite: actual GDP below potential. Long-run equilibrium requires actual GDP to equal potential GDP, and exceeding LRAS means the economy has moved past that point.",
  },
  {
    id: "adas-4",
    question: "In the long run, an increase in aggregate demand leads to:",
    options: [
      "Higher real GDP and a higher price level",
      "Higher real GDP with no change in the price level",
      "A higher price level with no change in real GDP",
      "Lower unemployment below the natural rate",
    ],
    correctIndex: 2,
    explanation: "In the short run, AD shifts right, output rises, prices rise. That looks like option A. Then wages catch up. Workers demand raises, input costs climb, SRAS shifts left, and output slides back to potential GDP. The only lasting change is a higher price level. Option A describes the short-run snapshot. Unemployment temporarily dips below the natural rate during the boom but returns once wages fully adjust.",
  },
  {
    id: "adas-5",
    question: "Which of the following would shift LRAS to the right?",
    options: [
      "An increase in consumer confidence",
      "A decrease in income tax rates",
      "An increase in immigration that expands the labor force",
      "An increase in the money supply",
    ],
    correctIndex: 2,
    explanation: "LRAS moves only when productive capacity changes: more workers, more capital, better technology. Immigration expands the labor force, so the economy can produce more at full employment. Potential GDP rises. Consumer confidence affects spending (AD), not productive capacity. Tax rate cuts primarily shift AD through spending incentives; any supply-side effect is secondary and debated among economists. Expanding the money supply is monetary policy that shifts AD through lower interest rates. It builds no new factories and adds no workers.",
  },
  {
    id: "adas-6",
    question: "Stagflation is best described as:",
    options: [
      "Falling prices and rising output",
      "Rising prices and falling output",
      "Falling prices and falling output",
      "Rising prices and rising output",
    ],
    correctIndex: 1,
    explanation: "Stag(nation) + (in)flation. Output falls and unemployment rises while prices climb. On the graph, SRAS shifts left. The 1973 and 1979 oil shocks are the standard examples. Option A describes a positive supply shock (SRAS shifting right). Option D describes demand-pull inflation from AD shifting right. Option C describes a deflationary contraction.",
  },
  {
    id: "adas-7",
    question: "Starting from long-run equilibrium, a decrease in AD will lead to what in the short run?",
    options: [
      "A recessionary gap with lower price level and lower output",
      "An inflationary gap with higher price level",
      "No change, the economy stays at LRAS",
      "SRAS shifts left to maintain the price level",
    ],
    correctIndex: 0,
    explanation: "AD shifts left. The economy moves down along SRAS to a new short-run equilibrium: lower output, lower price level. Real GDP drops below potential. Recessionary gap. The demand collapse in early 2020 is a recent example. The economy does not snap back to LRAS instantly; self-correction requires time for wages to fall. Option D reverses the adjustment mechanism; in a recessionary gap, falling wages eventually shift SRAS right, not left.",
  },
  {
    id: "adas-8",
    question: "The spending multiplier is 1/(1 − MPC). If MPC = 0.8, a $10 billion increase in government spending shifts AD by:",
    options: [
      "$10 billion",
      "$80 billion",
      "$50 billion",
      "$8 billion",
    ],
    correctIndex: 2,
    explanation: "Multiplier = 1/(1 - 0.8) = 5. Then $10B x 5 = $50B. The spending chain: $10B, then $8B, then $6.4B, then $5.12B, converging to $50B total. Option A ignores the multiplier entirely. Option B confuses MPC (0.8) with the multiplier (5), computing $10B x 8. Option D calculates only the second round of spending ($10B x 0.8 = $8B) and stops there.",
  },
  {
    id: "adas-9",
    question: "An economy has potential GDP of $18 trillion but actual GDP is $16.5 trillion. The output gap is:",
    options: [
      "A recessionary gap of $1.5 trillion, indicating the economy is producing below its capacity with elevated unemployment",
      "An inflationary gap of $1.5 trillion, indicating the economy is overheating",
      "Zero, because the economy always operates at potential GDP",
      "Indeterminate without knowing the price level",
    ],
    correctIndex: 0,
    explanation: "Actual GDP ($16.5T) falls below potential GDP ($18T). The difference is a $1.5 trillion recessionary gap. Resources are underutilized, factories run below capacity, unemployment exceeds the natural rate. Option B reverses the gap type; inflationary gaps occur when actual exceeds potential. Option C is false; the economy routinely deviates from potential during business cycles. Option D is incorrect because the output gap is measured in real GDP terms and can be computed directly by comparing actual and potential GDP.",
  },
  {
    id: "adas-10",
    question: "An economy is in an inflationary gap. Without any policy intervention, the self-correction mechanism predicts that:",
    options: [
      "AD shifts left as consumer confidence falls, closing the gap",
      "SRAS shifts left as rising wages increase production costs, returning output to potential GDP at a higher price level",
      "LRAS shifts right to accommodate the higher output level",
      "The price level falls until the gap closes",
    ],
    correctIndex: 1,
    explanation: "In an inflationary gap, unemployment sits below the natural rate. Workers have bargaining power and demand higher wages. Rising wages increase production costs economy-wide, shifting SRAS left. Output returns to potential GDP, but the price level ends up permanently higher. Option A describes a possible demand-side event but is not the self-correction mechanism, which operates through wage adjustments on the supply side. Option C wrongly suggests LRAS adjusts to match actual output; potential GDP depends on productive capacity, not the current output level. Option D gets the price direction backward; the price level rises further as SRAS shifts left.",
  },
  {
    id: "adas-11",
    question: "Demand-pull inflation in the AD-AS model is best illustrated by:",
    options: [
      "A leftward shift of SRAS that raises the price level while reducing output",
      "A rightward shift of AD that raises both the price level and real GDP in the short run",
      "A rightward shift of LRAS that lowers the price level while increasing output",
      "A leftward shift of AD that lowers both the price level and real GDP",
    ],
    correctIndex: 1,
    explanation: "Demand-pull inflation: aggregate demand increases faster than supply can respond. AD shifts right, the economy moves up along SRAS, and both the price level and real GDP rise in the short run. Consumer spending booms, fiscal stimulus, or expansionary monetary policy can all trigger this. Option A describes cost-push inflation from a supply shock. Option C describes economic growth from expanded capacity, which is deflationary. Option D describes a contractionary demand shock causing recession.",
  },
  {
    id: "adas-12",
    question: "A hurricane destroys major port facilities and disrupts supply chains across the southeastern United States. In the AD-AS model, the most likely short-run effects are:",
    options: [
      "AD shifts right as reconstruction spending boosts demand; price level rises and output increases",
      "SRAS shifts left as production costs and supply disruptions increase; price level rises and output falls",
      "LRAS shifts left permanently because the economy's capacity is reduced",
      "Both AD and SRAS shift right, increasing output with no change in the price level",
    ],
    correctIndex: 1,
    explanation: "A hurricane immediately raises production costs and reduces firms' ability to produce. Transportation costs spike, raw materials cannot reach factories, production facilities are damaged. SRAS shifts left: higher price level, lower output. Stagflation in the affected region. Option A focuses on reconstruction spending, a secondary and delayed effect; the immediate impact is a supply shock. Option C overstates the damage; ports can be rebuilt, so the capacity reduction is temporary. Option D is internally contradictory; a supply disruption does not shift SRAS right.",
  },
  {
    id: "adas-13",
    question: "The MPC is 0.75 and the government wants to close a recessionary gap of $60 billion. Ignoring crowding out and price level effects, how much should the government increase spending to close the gap?",
    options: [
      "$60 billion",
      "$45 billion",
      "$15 billion",
      "$20 billion",
    ],
    correctIndex: 2,
    explanation: "Spending multiplier = 1/(1 - 0.75) = 4. To close a $60 billion gap: $60B / 4 = $15 billion. Each dollar of government spending generates $4 in total GDP through the multiplier process. Option A ignores the multiplier, assuming a dollar-for-dollar effect. Option B appears to subtract instead of divide. Option D uses 3 as the multiplier, which is the tax multiplier for this MPC (MPC / (1 - MPC) = 0.75/0.25 = 3), not the spending multiplier.",
  },
  {
    id: "adas-14",
    question: "During a recession, the U.S. progressive income tax system automatically reduces tax burdens on households whose incomes have fallen. In the AD-AS framework, this automatic stabilizer:",
    options: [
      "Shifts SRAS to the right by reducing production costs for firms",
      "Partially cushions the decline in AD by maintaining disposable income, limiting how far AD shifts left",
      "Shifts LRAS to the right by encouraging labor force participation",
      "Eliminates the recessionary gap entirely without any need for discretionary policy",
    ],
    correctIndex: 1,
    explanation: "Progressive income taxes cushion the fall in disposable income during a recession. As incomes drop, workers fall into lower brackets and keep a larger fraction of each remaining dollar. Consumption holds up better than it otherwise would, limiting how far AD shifts left. Option A confuses a demand-side effect on households with a supply-side cost reduction for firms. Option C overstates the long-run impact; automatic stabilizers dampen short-run swings but do not expand productive capacity. Option D overstates their power; stabilizers moderate downturns but cannot fully close a recessionary gap on their own.",
  },
  {
    id: "adas-15",
    question: "Starting from long-run equilibrium, the central bank significantly increases the money supply. What is the sequence of effects in the short run and long run?",
    options: [
      "Short run: AD shifts right, output rises above potential, price level increases. Long run: higher wages shift SRAS left, output returns to potential GDP at an even higher price level",
      "Short run: SRAS shifts right, output rises, price level falls. Long run: LRAS shifts right permanently",
      "Short run: AD shifts right, output and price level both increase permanently with no further adjustment",
      "Short run: no effect because money is neutral. Long run: price level rises proportionally to the money supply increase",
    ],
    correctIndex: 0,
    explanation: "More money lowers interest rates, stimulating investment and consumption. AD shifts right. Short run: the economy moves up along SRAS, output exceeds potential GDP, and the price level rises. An inflationary gap forms. Long run: tight labor markets push wages up, raising production costs, shifting SRAS left until output returns to potential. Final result: same real GDP, higher price level. Money is neutral in the long run. Option B misidentifies the affected curve; monetary policy works through AD. Option C ignores the self-correction mechanism. Option D correctly states long-run neutrality but incorrectly denies any short-run effect; sticky wages and prices mean monetary policy has real short-run consequences.",
  },
];
