export const adasContent = {
  title: "Aggregate Demand & Supply",
  subtitle: "Understanding how the whole economy finds its equilibrium price level and output",
  sections: [
    {
      heading: "From Micro to Macro",
      content: `The 2008 financial crisis didn't just wreck the housing market. It dragged the entire U.S. economy down with it, because when one sector collapses, the damage ripples outward through interconnected markets. The **AD/AS model** is built to handle exactly this kind of thinking. Instead of looking at one product or one industry, it analyzes the economy as a whole.

The axes swap out the micro variables you're used to from supply-and-demand:
- **Price Level (PL)** is the average of all prices economy-wide, measured by the CPI or GDP deflator. Not the price of any single good.
- **Real GDP (Y)** is total output, adjusted for inflation.

This is the framework economists use to diagnose recessions, explain inflation, and figure out whether government policy is actually helping or making things worse.`,
    },
    {
      heading: "Aggregate Demand (AD)",
      content: `Consumers buy groceries. Businesses buy equipment. The government builds highways. Foreigners buy American exports. Add all of that up and you get **aggregate demand** = C + I + G + (X - M).

The AD curve slopes downward, and there are three distinct reasons why:
- **Wealth effect.** A higher price level erodes the purchasing power of savings, so people spend less.
- **Interest rate effect.** Higher prices increase the demand for money, which pushes up interest rates. That chokes off business investment and big-ticket consumer purchases like cars and homes.
- **Exchange rate effect.** Rising U.S. prices make American goods more expensive abroad. Exports fall, imports look cheaper, and net exports decline.

So what shifts the AD curve? Changes in consumer confidence, government spending, tax policy, monetary policy, or foreign income. The Fed slashing rates to near zero during COVID was a massive rightward push on AD. A tax increase shifts AD left.`,
    },
    {
      heading: "Short-Run Aggregate Supply (SRAS)",
      content: `Picture a factory owner in 2021. Prices for her products are climbing, but worker wages are still locked in by year-end contracts. Every unit sold earns a fatter margin, so she ramps up production. Scale that dynamic across millions of firms and you can see why the **SRAS** curve slopes upward. When the price level rises but input costs haven't caught up yet, firms expand output to capture those wider margins.

"Short run" here means the window where input prices remain sticky. Workers signed contracts months ago. Suppliers quoted prices last quarter. That lag is what gives the curve its upward slope.

Anything that changes production costs economy-wide will shift SRAS. The 1973 OPEC embargo sent energy costs through the roof, shifting SRAS left. A manufacturing technology breakthrough that lowers costs for everyone shifts SRAS right. Changes in wages, commodity prices, business taxes, and supply chain disruptions all work through the same channel.`,
    },
    {
      heading: "LRAS and Full Employment",
      content: `The **Long-Run Aggregate Supply (LRAS)** curve is just a vertical line. Once all wages and prices have fully adjusted, output depends entirely on real resources: workers, factories, and technology. If you doubled every price and every wage overnight, nothing real would change. The same machines exist. The same workforce shows up Monday morning.

That vertical line sits at **potential GDP**, the economy's maximum sustainable output. Where the economy sits relative to LRAS tells you a lot:
- Left of LRAS = recessionary gap. Factories sit idle, unemployment runs above normal. The U.S. in 2009.
- Right of LRAS = inflationary gap. The economy runs hot, overtime is everywhere, wages face upward pressure. The late 1960s before inflation took off.

Self-correction works through wages, and this part trips people up. In a recessionary gap, high unemployment pushes wages down over time, lowering production costs and shifting SRAS right until output returns to potential. In an inflationary gap, tight labor markets bid wages up, shifting SRAS left and cooling the economy back to LRAS. The mechanism is real, but it can take years to fully play out.`,
    },
    {
      heading: "Worked Example",
      content: `MPC = **0.8**. The government increases spending by **$10 billion**. How far does AD shift?

**Spending multiplier** = 1 / (1 - 0.8) = 1 / 0.2 = **5**

Change in AD = 5 x $10B = **$50 billion rightward shift**.

Here's the logic. The government pays $10B to construction firms. Workers receive that as income and spend 80%, or $8B, at restaurants, stores, and landlords. Those recipients spend 80% of $8B ($6.4B), and the chain keeps going. The geometric series $10B + $8B + $6.4B + $5.12B + ... converges to $50B.

Now compare a **$10B tax cut**. Tax multiplier = -MPC / (1 - MPC) = -0.8 / 0.2 = **-4**. The same $10B only shifts AD right by $40B. The gap exists because government spending injects the full $10B into the economy immediately. A tax cut lets households pocket $10B, but they save 20% before spending a dime. Only $8B enters the first round. The spending multiplier exceeds the tax multiplier by exactly 1 regardless of the MPC, and the AP exam tests this distinction constantly.`,
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
    explanation: "G is a direct component of AD = C + I + G + (X - M). More government spending means more total spending at every price level, so AD shifts right. Not A: government purchases affect the demand side (who's buying), not the supply side. SRAS shifts come from changes in production costs like wages or oil prices, not from spending decisions. Not D: an increase in G is expansionary, pushing AD right, not left.",
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
    explanation: "Oil feeds into the cost of producing nearly everything: transportation, plastics, heating, manufacturing. When oil prices spike, firms face higher costs across the board, which shifts SRAS left. Output falls while prices rise: that's stagflation. The 1970s OPEC crises are the textbook case. Not A: an oil spike hits producers' costs, not consumers' desire to spend. It's a supply shock, not a demand shock. Not C: LRAS only shifts with changes in the economy's productive capacity (labor, capital, technology), not input price swings.",
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
    explanation: "If actual GDP sits to the right of LRAS, the economy is running beyond what it can sustain. Firms are stretching capacity, workers are logging overtime, and employers compete for scarce labor by bidding up wages. That wage pressure drives prices higher. Not A: a recessionary gap is the mirror image: actual GDP below potential, unemployment rising. The question describes the opposite. Not C: long-run equilibrium means actual GDP equals potential GDP; exceeding LRAS means you've moved past equilibrium.",
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
    explanation: "Short run: AD shifts right, output rises, prices rise, which looks like A. But then wages catch up. Workers demand raises, input costs climb, SRAS shifts left, and output slides back to potential GDP. The only lasting change is a higher price level. Not A: that's the short-run snapshot, not the long-run outcome. Not D: unemployment temporarily dips below the natural rate during the boom, but once wages adjust fully, it returns to the natural rate.",
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
    explanation: "LRAS moves only when the economy's productive capacity changes: more workers, more capital, or better technology. Immigration expands the labor force, meaning the economy can physically produce more output at full employment. Potential GDP rises, LRAS shifts right. Not A: consumer confidence affects how much people want to spend (AD), not how much the economy can produce. Not B: tax rate cuts primarily boost spending incentives (AD shift); any supply-side effect is secondary and debated. Not D: expanding the money supply is monetary policy that shifts AD through lower interest rates. It doesn't build new factories or add workers.",
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
    explanation: "The name says it all: stag(nation) + (in)flation. Output falls and unemployment rises (the stagnation part) while prices climb (the inflation part). On the graph, SRAS shifts left. The 1970s oil shocks are the classic example. Not A: falling prices with rising output describes a positive supply shock (SRAS shifting right), the opposite situation. Not D: rising prices with rising output is demand-pull inflation from AD shifting right, which looks like an economic boom, not stagflation. Not C: falling prices and falling output would be a deflationary contraction.",
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
    explanation: "AD shifts left, so the economy moves down along the SRAS curve to a new short-run equilibrium: lower output, lower price level. Real GDP drops below potential. That's a recessionary gap. Think of the demand collapse in early 2020. Not C: the economy does not snap back to LRAS instantly. Self-correction requires time for wages and prices to fall, which can take months or years. Not D: this reverses the adjustment mechanism. In a recessionary gap, high unemployment eventually pushes wages down, reducing costs, which shifts SRAS right (not left) to restore long-run equilibrium. Not B: a leftward AD shift creates a recessionary gap, not an inflationary one.",
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
    explanation: "Multiplier = 1/(1 - 0.8) = 1/0.2 = 5. Multiply: $10B x 5 = $50B. The spending chain runs $10B -> $8B -> $6.4B -> $5.12B and so on, converging to $50B. Not A ($10B), this ignores the multiplier entirely, as if each dollar of government spending generates zero additional spending. Not B ($80B), this multiplies $10B x 8, confusing the MPC (0.8) with the multiplier (5). The MPC is an input to the formula, not the multiplier itself. Not D ($8B), this just calculates $10B x 0.8, which is only the second round of spending, not the total effect.",
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
    explanation: "The output gap is the difference between actual and potential GDP. When actual GDP ($16.5T) is below potential GDP ($18T), the economy has a recessionary gap of $1.5 trillion. This means resources are underutilized, factories are running below capacity, and unemployment is above the natural rate. Option B reverses the gap type; an inflationary gap occurs when actual GDP exceeds potential, not when it falls short. Option C is false because the economy routinely deviates from potential GDP during business cycle fluctuations. Option D is incorrect because the output gap is measured in real GDP terms and can be calculated by directly comparing actual and potential GDP without needing the price level.",
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
    explanation: "In an inflationary gap, the economy operates above potential GDP with unemployment below the natural rate. Tight labor markets give workers bargaining power to demand higher wages. Rising wages increase production costs across the economy, shifting SRAS to the left. The economy returns to potential GDP, but at a permanently higher price level. Option A describes a possible demand-side event but is not the self-correction mechanism, which works through supply-side wage adjustments. Option C incorrectly suggests that LRAS adjusts to match actual output; potential GDP is determined by real productive capacity, not by the current level of output. Option D gets the price movement backward; during inflationary gap self-correction, the price level rises further as SRAS shifts left, not falls.",
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
    explanation: "Demand-pull inflation occurs when aggregate demand increases faster than aggregate supply can respond. The AD curve shifts right, moving the economy up along the SRAS curve: both the price level and real GDP rise in the short run. Consumer spending booms, government stimulus, or expansionary monetary policy can all trigger this. Option A describes cost-push inflation (or stagflation), where a supply-side shock raises prices while reducing output. Option C describes economic growth from expanded productive capacity, which is deflationary, not inflationary. Option D describes a contractionary demand shock that causes a recession with falling prices, the opposite of demand-pull inflation.",
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
    explanation: "A major supply disruption like a hurricane immediately raises production costs and reduces firms' ability to produce goods. Transportation becomes more expensive, raw materials cannot reach factories, and some production facilities are damaged. This shifts SRAS to the left, resulting in a higher price level and lower real GDP -- stagflation. Option A focuses on reconstruction spending, which may occur eventually but is a secondary and delayed effect; the immediate impact is a supply shock. Option C overstates the effect; port facilities can be rebuilt, so the capacity reduction is temporary, not a permanent LRAS shift. Option D is internally contradictory; a supply disruption does not shift SRAS right, and both curves shifting right simultaneously is an unlikely response to destructive event.",
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
    explanation: "The spending multiplier = 1/(1 - 0.75) = 1/0.25 = 4. To close a $60 billion gap, divide the gap by the multiplier: $60B / 4 = $15 billion. Each dollar of government spending generates $4 in total GDP through the multiplier process, so $15 billion in new spending produces a $60 billion shift in AD. Option A ($60B) ignores the multiplier entirely and assumes a dollar-for-dollar effect. Option B ($45B) appears to subtract the initial spending from the gap rather than dividing. Option D ($20B) uses a multiplier of 3, which is the tax multiplier for this MPC, not the spending multiplier.",
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
    explanation: "Automatic stabilizers like progressive income taxes work by cushioning the fall in disposable income during a recession. As workers' incomes drop, they fall into lower tax brackets and keep a larger share of each remaining dollar. This sustains consumption and limits how far AD shifts to the left, reducing the severity of the recession. Option A confuses the demand-side effect of lower taxes on households with a supply-side cost reduction for firms; the stabilizer works through consumption, not production costs. Option C overstates the long-run impact; automatic stabilizers dampen short-run fluctuations but do not expand productive capacity. Option D overstates their power; automatic stabilizers moderate downturns but are not strong enough to fully close a recessionary gap on their own, which is why discretionary fiscal policy is often needed.",
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
    explanation: "Increasing the money supply lowers interest rates, stimulating investment and consumption, which shifts AD to the right. In the short run, the economy moves up along the SRAS curve: output rises above potential GDP and the price level increases. This creates an inflationary gap. In the long run, tight labor markets cause workers to demand higher wages. Rising wages increase production costs, shifting SRAS to the left until output returns to potential GDP. The final equilibrium has the same real GDP but a higher price level -- money is neutral in the long run. Option B incorrectly identifies the affected curve; monetary policy works through AD, not SRAS. Option C ignores the long-run self-correction mechanism. Option D describes long-run monetary neutrality but incorrectly claims there is no short-run effect; sticky wages and prices mean monetary policy has real short-run effects.",
  },
];
