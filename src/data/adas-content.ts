export const adasContent = {
  title: "Aggregate Demand & Supply",
  subtitle: "How the entire economy finds its price level and output through AD, SRAS, and LRAS",
  sections: [
    {
      heading: "From Micro to Macro",
      content: `U.S. real GDP went from $15.6 trillion in Q4 2007 down to $14.4 trillion by Q2 2009. That is nearly an 8% drop. Unemployment hit 10%. Housing blew up first, then the damage spread into banking, auto manufacturing, retail, state government budgets. One sector dragged everything else down with it.

The **AD/AS model** exists to analyze exactly that kind of economy-wide disaster. You are not looking at one product or one industry anymore. You are looking at total output and the overall price level at the same time.

The axes are different from your micro supply-and-demand graphs. **Price Level (PL)** goes on the vertical axis and it represents the average of all prices in the economy, measured by something like the CPI or the GDP deflator. Not the price of any single good. **Real GDP (Y)** on the horizontal axis is total output adjusted for inflation.

This is what you use to diagnose recessions, explain inflation, and figure out whether fiscal or monetary policy is actually helping or just making things worse.`,
    },
    {
      heading: "Aggregate Demand (AD)",
      content: `Consumers buy groceries. Businesses buy equipment. The government builds highways and funds school districts. Foreigners buy American soybeans and software. Add all of that up and you get **aggregate demand** = C + I + G + (X - M).

The AD curve slopes downward, and there are three separate reasons for it.

**Wealth effect**: when the price level rises, the purchasing power of people's savings gets eaten away. A household sitting on $50,000 in the bank feels poorer when everything costs more, so they cut back on spending. **Interest rate effect**: a higher price level means people need more cash just to buy the same stuff, so money demand goes up, which pushes interest rates higher. Higher rates choke off business investment and big purchases like houses, cars, appliances. **Exchange rate effect**: rising domestic prices make American goods more expensive for foreign buyers, which cuts into exports, and imports start looking like a better deal. Net exports fall.

What shifts the whole AD curve? Consumer confidence swings, changes in government spending, tax policy, monetary policy decisions, shifts in foreign income. The Fed slashing rates to near zero during COVID in March 2020 was a massive rightward push on AD. A tax hike shifts AD left. When the European economy got stronger through 2017, U.S. exports picked up and AD shifted right.`,
    },
    {
      heading: "Short-Run Aggregate Supply (SRAS)",
      content: `Picture a factory owner in 2021. Prices for her products are climbing, but her workers' wages are locked in by contracts signed six months earlier. Every unit she sells earns a wider margin than she expected, so she ramps up production. Scale that across millions of firms and you get the upward slope of **SRAS**.

"Short run" here means the window where input prices, especially wages, stay sticky. Workers signed contracts last quarter. Suppliers quoted raw material prices months ago. That lag between rising output prices and still-fixed input costs is what gives the curve its positive slope.

Anything that changes production costs across the whole economy shifts SRAS. The 1973 OPEC oil embargo sent energy costs through the roof and shifted SRAS sharply left, which is why we got stagflation instead of a normal recession. A manufacturing technology breakthrough that lowers unit costs shifts SRAS right. Wage changes, commodity price swings, changes in business taxes, new regulations, supply chain disruptions like the Suez Canal blockage in 2021, all of these work through the SRAS channel.`,
    },
    {
      heading: "LRAS and Full Employment",
      content: `The **Long-Run Aggregate Supply (LRAS)** curve is a vertical line. Once all wages and prices have fully adjusted, output depends entirely on the economy's real resources. The size of the workforce, the capital stock, the state of technology. If you doubled every price and every wage overnight, nothing real would change. The same machines exist, the same people show up to work on Monday, the same software runs the same processes.

That vertical line sits at **potential GDP**, the economy's maximum sustainable output level.

Where the economy sits relative to LRAS tells you a lot. Left of LRAS means a recessionary gap, factories running below capacity, unemployment above the natural rate. That was the U.S. in 2009 and again briefly in spring 2020.

Right of LRAS is an inflationary gap, the economy running hotter than it can sustain. Overtime everywhere, firms competing aggressively for scarce workers, upward pressure on wages. Think the late 1960s before inflation really took off.

Self-correction works through wages, but it is slow. In a recessionary gap, high unemployment gradually pushes wages down as workers compete for scarce jobs. Lower wages reduce production costs, shifting SRAS right until output drifts back toward potential. In an inflationary gap, tight labor markets bid wages up, shifting SRAS left and cooling things off. The mechanism is real. But it can take years, and that is the whole argument for why active fiscal and monetary policy might be needed rather than just waiting around.`,
    },
    {
      heading: "Worked Example",
      content: `MPC = **0.8**. The government increases spending by **$10 billion**. How far does AD shift?

**Spending multiplier** = 1 / (1 - 0.8) = 1 / 0.2 = **5**

Change in AD = 5 x $10B = **$50 billion rightward shift**.

Here is how the spending chain works. The government pays $10B to construction firms for highway projects. Workers earn that income and spend 80% of it, $8B, at restaurants, retail stores, on rent. Those recipients spend 80% of the $8B, which is $6.4B. The series $10B + $8B + $6.4B + $5.12B + ... converges to $50B.

Now compare a **$10B tax cut** instead. Tax multiplier = -MPC / (1 - MPC) = -0.8 / 0.2 = **-4**. The same $10B only shifts AD right by $40B. Why the $10B gap? Government spending injects the full $10B into the spending stream on day one, all of it gets spent immediately on goods and services. A tax cut hands households $10B, but they save 20% of it before spending anything. Only $8B enters the first round of spending. The spending multiplier exceeds the tax multiplier by exactly 1 regardless of what the MPC is (this is the balanced budget multiplier result). The AP exam tests this distinction constantly, so know which multiplier to use for which policy.`,
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
    explanation: "G is a direct component of AD = C + I + G + (X - M). More government spending raises total spending at every price level, which shifts AD right. SRAS shifts come from changes in production costs like wages and energy prices, not from spending decisions. An increase in G is expansionary -- it pushes AD right, not left.",
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
    explanation: "Oil is an input for practically everything -- transportation, plastics, heating, chemical manufacturing. A price spike raises production costs across the board, shifting SRAS left. Output falls while prices rise simultaneously, which is the ugly combination called stagflation. The 1973 and 1979 OPEC crises are the textbook cases. An oil spike is a supply shock hitting production costs, not a demand shock, so AD isn't the curve that moves. LRAS shifts only when productive capacity itself changes (labor force, capital stock, technology), not from input price swings.",
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
    explanation: "When actual GDP sits to the right of LRAS, the economy is running beyond its sustainable capacity. Firms stretch production, workers log overtime, and employers bid wages up to attract scarce labor. That wage pressure feeds into higher prices across the economy. A recessionary gap is the opposite situation -- actual GDP below potential. Long-run equilibrium requires actual GDP to equal potential GDP exactly, and exceeding LRAS means the economy has overshot that mark.",
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
    explanation: "In the short run, an AD shift right raises both output and prices -- that looks like option A, and it's partially correct but only temporarily. Then wages start catching up. Workers demand raises to keep pace with higher prices, input costs climb, and SRAS shifts left. Output slides back to potential GDP. The only lasting change is a higher price level. Option A captures the short-run snapshot but not the long-run outcome. Unemployment dips below the natural rate temporarily during the boom phase but returns to normal once wages fully adjust.",
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
    explanation: "LRAS only moves when the economy's productive capacity changes: more workers, more capital equipment, better technology. Immigration expands the labor force, which means the economy can produce more goods and services at full employment. Potential GDP rises and LRAS shifts right. Consumer confidence affects spending decisions (AD), not productive capacity. Tax rate cuts primarily stimulate AD through higher disposable income; any supply-side effect on LRAS is secondary and heavily debated among economists. Expanding the money supply is monetary policy that shifts AD through lower interest rates -- it doesn't build factories or add workers.",
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
    explanation: "Stag(nation) + (in)flation -- output falls and unemployment rises while prices climb at the same time. On the AD/AS graph, this is what a leftward SRAS shift looks like. The 1973 and 1979 oil shocks are the go-to examples. Option A describes a positive supply shock with SRAS shifting right. Option D describes demand-pull inflation from AD shifting right. Option C would be a deflationary contraction, which is a different kind of downturn.",
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
    explanation: "AD shifts left and the economy moves down along the SRAS curve to a new short-run equilibrium with lower output and a lower price level. Real GDP drops below potential, creating a recessionary gap. The demand collapse in early 2020 when COVID lockdowns hit is a recent real-world example. The economy doesn't snap back to LRAS right away -- self-correction requires time for wages to fall. Option D has the adjustment mechanism backward; in a recessionary gap, falling wages eventually shift SRAS right (not left) to close the gap.",
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
    explanation: "Multiplier = 1/(1 - 0.8) = 1/0.2 = 5. Then $10B x 5 = $50B. The spending rounds: $10B in the first round, then $8B, then $6.4B, then $5.12B, converging to $50B total. Option A ignores the multiplier completely as if each dollar only counts once. Option B seems to confuse the MPC (0.8) with the multiplier (5), computing $10B x 8. Option D calculates only the second round of spending ($10B x 0.8) and stops.",
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
    explanation: "Actual GDP ($16.5T) falls short of potential GDP ($18T) by $1.5 trillion. That's a recessionary gap -- resources are underutilized, factories operate below capacity, and unemployment exceeds the natural rate. Option B reverses which type of gap this is; inflationary gaps happen when actual exceeds potential. Option C is simply false since the economy routinely deviates from potential during business cycles. Option D is incorrect because the output gap is measured in real GDP terms and can be computed directly from these two numbers.",
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
    explanation: "In an inflationary gap, unemployment is below the natural rate, so workers have bargaining power. They demand higher wages, and employers competing for scarce labor have to pay up. Those rising wages increase production costs economy-wide, shifting SRAS left. Output falls back to potential GDP, but the price level ends up permanently higher. Option A describes something that could happen on the demand side but isn't the self-correction mechanism -- self-correction specifically works through wage adjustments on the supply side. Option C is wrong because LRAS depends on productive capacity (workforce, capital, technology), not on where actual output happens to be sitting. Option D has the price direction backward since SRAS shifting left actually pushes the price level higher.",
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
    explanation: "Demand-pull inflation happens when aggregate demand grows faster than supply can keep up with. AD shifts right, the economy moves up along SRAS, and both the price level and real GDP rise in the short run. Consumer spending booms, fiscal stimulus packages, or expansionary monetary policy can all trigger it. Option A describes cost-push inflation from a supply shock -- different cause, different graph. Option C describes economic growth from expanded productive capacity, which is actually deflationary. Option D describes a contractionary demand shock leading to recession, not inflation.",
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
    explanation: "A hurricane immediately raises production costs and reduces firms' ability to get goods to market. Transportation costs spike when ports are damaged, raw materials can't reach factories, and production facilities themselves may be knocked offline. SRAS shifts left, which means higher prices and lower output -- stagflationary pressure in the affected region. Option A focuses on reconstruction spending, but that's a secondary effect that kicks in later; the immediate impact is a supply disruption. Option C overstates the damage since ports can be rebuilt and supply chains restored, so the capacity reduction is temporary rather than permanent. Option D is internally contradictory -- a supply disruption cannot shift SRAS right.",
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
    explanation: "Spending multiplier = 1/(1 - 0.75) = 1/0.25 = 4. To close a $60 billion gap: $60B / 4 = $15 billion in new government spending. Each dollar of spending generates $4 in total GDP through the multiplier process. Option A ignores the multiplier entirely, assuming each dollar of spending only creates one dollar of GDP. Option B appears to subtract rather than divide ($60B - $15B = $45B, which doesn't follow any correct formula). Option D uses 3 as the multiplier -- that's actually the tax multiplier for this MPC (0.75/0.25 = 3), not the spending multiplier.",
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
    explanation: "When incomes drop during a recession, workers fall into lower tax brackets under a progressive system and keep a larger fraction of each remaining dollar. Disposable income doesn't fall as sharply as gross income does, so consumption holds up better than it otherwise would. The result is that AD doesn't shift as far left as it would without the progressive tax structure. Option A confuses a demand-side cushion for households with a supply-side cost reduction for firms -- those are different mechanisms. Option C overstates the long-run impact; automatic stabilizers dampen short-run fluctuations but don't expand productive capacity. Option D overstates their power considerably -- stabilizers moderate downturns but can't fully close a recessionary gap on their own, which is the argument for discretionary fiscal policy.",
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
    explanation: "More money in circulation lowers interest rates, which stimulates both investment and consumption. AD shifts right. In the short run, the economy moves up along SRAS -- output exceeds potential GDP and the price level rises, creating an inflationary gap. In the long run, the tight labor market pushes wages up, raising production costs and shifting SRAS left until output falls back to potential. The final result: same real GDP as before, but a higher price level. Money is neutral in the long run. Option B misidentifies which curve monetary policy affects -- it works through AD, not SRAS. Option C ignores the self-correction mechanism that pulls output back to potential. Option D correctly states long-run neutrality but incorrectly denies any short-run effect; sticky wages and prices mean monetary policy has real consequences in the short run, which is the entire basis for the Fed's role in stabilization.",
  },
];
