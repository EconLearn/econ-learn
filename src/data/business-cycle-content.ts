import type { PracticeQuestion } from "./supply-demand-content";

export const businessCycleContent = {
  title: "The Business Cycle",
  subtitle:
    "From the 128-month expansion of the 2010s to the two-month COVID contraction: how economies oscillate between growth and decline, and what the indicators reveal along the way",
  sections: [
    {
      heading: "What Is the Business Cycle?",
      content:
        "On February 1, 2020, the United States economy was in the 128th month of an unbroken expansion, the longest on record. Unemployment sat at 3.5%, a half-century low. Consumer spending was strong. Corporate earnings were climbing. Seven weeks later, the economy was in free fall. Real GDP contracted at an annualized rate of 31.4% in the second quarter, the steepest quarterly decline ever measured. Twenty-two million jobs vanished between mid-March and mid-April. The National Bureau of Economic Research would later date the peak at February 2020 and the trough at April 2020, making the entire contraction just two months long, the shortest recession in American history. That whiplash, from record expansion to historic collapse and back to recovery within a single calendar year, captures the essential nature of the **business cycle**: economies do not grow in straight lines. Output rises for a stretch, stumbles, and then recovers. The pattern repeats, though never at perfectly regular intervals and never with the same severity.\n\nThe cycle is measured by changes in **real GDP**, the inflation-adjusted value of all goods and services produced within a country's borders. Four phases define it. **Expansion** is the period of rising output. **Peak** is the high point, the moment growth crests. **Contraction** is the period of declining output. **Trough** is the low point. After the trough, a new expansion begins. Each cycle varies in duration and intensity, which is precisely what makes forecasting so difficult and policy timing so treacherous.",
    },
    {
      heading: "Expansion",
      content:
        "During an expansion, real GDP is climbing. Firms hire additional workers, consumer spending rises, and business investment picks up as companies build new factories, purchase equipment, and expand operations. Unemployment falls as the economy approaches and sometimes surpasses its **full-employment level**, the output rate consistent with the natural rate of unemployment.\n\nExpansions vary enormously in length. The expansion that began in June 2009 and ended in February 2020 lasted 128 months, nearly eleven years, shattering the previous record of 120 months set during the 1990s technology boom. Others are far shorter. The expansion following the 1980 recession lasted only twelve months before the economy tipped back into the severe 1981-82 downturn. There is no fixed rule governing how long good times persist.\n\nAs an expansion matures, warning signs of overheating tend to accumulate. Wages rise as employers compete for a shrinking pool of available workers, pushing costs higher. Households and corporations take on more debt, sometimes at terms that look reckless in hindsight. Asset prices, whether in housing, equities, or commercial real estate, can detach from fundamentals. These pressures do not guarantee a downturn, but they set the stage for one.",
    },
    {
      heading: "Peak",
      content:
        "The peak is the moment real GDP stops rising and begins to turn down. Nobody rings a bell. The peak is identified only in retrospect, sometimes many months after it has passed. At the peak, the economy is operating at or beyond its potential output, with nearly all available labor and capital engaged.\n\nInflation typically runs at its highest near the peak because aggregate demand is pressing against the economy's productive capacity. The Federal Reserve often raises interest rates during this phase to cool demand, which itself can help trigger the transition into contraction. The FOMC raised the federal funds rate 17 consecutive times between June 2004 and June 2006, bringing it from 1% to 5.25%, in an effort to slow an overheating housing market. The recession that followed, beginning in December 2007, became the worst downturn since the Great Depression.\n\nThe **National Bureau of Economic Research (NBER)** is the unofficial but widely accepted arbiter of business cycle dates in the United States. Its Business Cycle Dating Committee examines employment, income, production, and sales data before announcing peaks and troughs, usually months after the fact.",
    },
    {
      heading: "Contraction and Recession",
      content:
        "A contraction is a period of declining real GDP. When the decline is severe enough, typically defined as **two consecutive quarters of falling real GDP**, it crosses the threshold into a **recession**. Firms cut production, lay off workers, and postpone investment. Orders for durable goods drop. Inventories pile up on shelves and in warehouses.\n\nUnemployment rises. Consumer confidence drops. Spending pulls back, which reduces business revenue, which leads to more layoffs, which further reduces spending. This negative feedback loop is why recessions can feel self-perpetuating once they take hold.\n\nNot all contractions qualify as recessions. A brief dip that reverses within a quarter or two may never cross the threshold. But when unemployment spikes and output falls sharply, as it did in the fourth quarter of 2008 or in March-April 2020, the effects ripple across every sector of the economy. The 2008-2009 recession destroyed $19.2 trillion in household wealth, primarily through collapsing home values and stock portfolios. The 2020 recession, though far shorter, saw the unemployment rate jump from 3.5% to 14.7% in a single month.",
    },
    {
      heading: "Trough and Recovery",
      content:
        "The trough is the bottom. Real GDP has stopped falling but has not yet started growing meaningfully. Unemployment sits at its worst level of the cycle. Firms have slashed payrolls, depleted inventories, and cut discretionary spending to the bone.\n\nBut the trough is also where recovery begins. Pent-up consumer demand starts to surface. Interest rates, often lowered aggressively by the Fed during the contraction, make borrowing cheap. Fiscal stimulus programs inject spending into the economy. The first signs of recovery are subtle rather than dramatic: a slight uptick in retail sales, a slowdown in the pace of layoffs rather than actual hiring, improving sentiment in manufacturing surveys.\n\nThe trough of the Great Recession came in June 2009. It took until early 2014 for employment to return to its pre-recession peak. The trough of the COVID recession came in April 2020, and the recovery was far faster, fueled by $5 trillion in combined fiscal stimulus and near-zero interest rates. From the trough, the cycle begins again with a new expansion.",
    },
    {
      heading: "Leading, Coincident, and Lagging Indicators",
      content:
        "Economists and policymakers track three categories of indicators to gauge where the economy stands in the cycle and, more importantly, where it might be heading.\n\n**Leading indicators** move before the economy turns. Stock prices tend to decline months before a recession officially begins and rise before recoveries take hold. Building permits signal future construction activity. The yield curve spread, specifically the difference between 10-year and 2-year Treasury yields, has inverted before every U.S. recession since 1955, though the timing between inversion and recession onset varies widely. New orders for consumer goods also qualify. Leading indicators are useful but imperfect. As the old economist joke goes, the stock market has predicted nine of the last five recessions.\n\n**Coincident indicators** move in real time with the economy. Real GDP itself, industrial production, aggregate employment levels, and personal income all rise during expansions and fall during contractions. They tell you where the economy is right now.\n\n**Lagging indicators** change after the economy has already turned. The unemployment rate continues to rise for months after GDP begins growing again because firms are slow to rehire. The average duration of unemployment, commercial and industrial loan balances, and the ratio of consumer installment credit to income all peak well after a recession has ended and the recovery is underway.",
    },
    {
      heading: "Connection to AD/AS and Policy",
      content:
        "The business cycle maps directly onto the **AD/AS model**. An expansion corresponds to rightward shifts of aggregate demand along the short-run aggregate supply curve, producing higher output and, depending on how close the economy is to capacity, rising prices. A contraction results from leftward AD shifts, which can be triggered by falling consumer confidence, declining investment, or tightening monetary policy. Negative supply shocks, such as the oil embargo of 1973 or the supply chain disruptions of 2021-2022, shift SRAS leftward and can produce the painful combination of rising prices and falling output known as stagflation.\n\n**Fiscal policy** and **monetary policy** are the tools governments deploy to smooth the cycle's swings. Expansionary fiscal policy (increased government spending or tax cuts) and expansionary monetary policy (lower interest rates via Fed bond purchases) aim to shorten recessions by shifting AD right. Contractionary versions of both policies aim to prevent overheating near peaks by shifting AD left.\n\nThe fundamental challenge is timing. Policy operates with lags. By the time the NBER officially declares a recession, the contraction may already be months old. The recognition lag, legislative lag, and implementation lag together can mean that stimulus arrives after the economy has already begun recovering on its own, potentially adding fuel to an expansion rather than cushioning a downturn. This is why the Fed monitors leading indicators closely and sometimes acts preemptively, adjusting rates based on where the economy appears to be heading rather than where it has been.",
    },
  ],
};

export const businessCycleQuestions: PracticeQuestion[] = [
  {
    id: "bc-1",
    question:
      "The four phases of the business cycle, in order, are:",
    options: [
      "Peak, trough, expansion, contraction",
      "Expansion, peak, contraction, trough",
      "Trough, contraction, peak, expansion",
      "Contraction, expansion, trough, peak",
    ],
    correctIndex: 1,
    explanation:
      "The cycle runs: expansion (output rising), peak (the high point where growth crests), contraction (output falling), trough (the low point). After the trough, a new expansion begins and the cycle repeats.",
  },
  {
    id: "bc-2",
    question:
      "A recession is generally defined as:",
    options: [
      "Any decline in stock market prices",
      "Two consecutive quarters of declining real GDP",
      "An unemployment rate above 5%",
      "A period of falling nominal GDP",
    ],
    correctIndex: 1,
    explanation:
      "The NBER uses a broader set of criteria, but the standard shorthand is two consecutive quarters of declining real GDP. The distinction between real and nominal matters: nominal GDP can fall simply because of deflation, while real GDP adjusts for price changes and reflects actual output.",
  },
  {
    id: "bc-3",
    question:
      "Which of the following is a leading economic indicator?",
    options: [
      "Unemployment rate",
      "Real GDP",
      "Stock market prices",
      "Average duration of unemployment",
    ],
    correctIndex: 2,
    explanation:
      "Stock prices tend to decline before recessions begin and rise before recoveries materialize, which is why they qualify as a leading indicator. The unemployment rate is a lagging indicator because it continues rising even after GDP has begun to recover. Real GDP is a coincident indicator. Average duration of unemployment is also a lagging indicator.",
  },
  {
    id: "bc-4",
    question:
      "At the peak of the business cycle, which of the following is most likely true?",
    options: [
      "Unemployment is at its highest level",
      "The economy is producing below potential output",
      "Inflation is typically rising and the economy is at or beyond full employment",
      "The Federal Reserve is lowering interest rates",
    ],
    correctIndex: 2,
    explanation:
      "At the peak, the economy operates at or above potential output. Demand presses against productive capacity, which pushes inflation upward. The Fed is typically raising rates during this phase to cool the economy, not lowering them. Option A describes the trough, not the peak. Option B describes a recessionary gap.",
  },
  {
    id: "bc-5",
    question:
      "Unemployment is classified as a lagging indicator because:",
    options: [
      "It rises before a recession begins",
      "It falls before a recession begins",
      "It continues to rise even after the economy begins recovering",
      "It is unrelated to the business cycle",
    ],
    correctIndex: 2,
    explanation:
      "Firms are cautious about rehiring after a downturn. Even after GDP starts growing again, employers wait to see sustained demand before adding headcount. Unemployment continues to climb for several months into the recovery before it finally turns around. That delay is what makes it a lagging indicator.",
  },
  {
    id: "bc-6",
    question:
      "During a contraction, which is most likely to occur?",
    options: [
      "Rising business investment",
      "Increasing consumer confidence",
      "Falling output and rising unemployment",
      "Increasing government tax revenue",
    ],
    correctIndex: 2,
    explanation:
      "Contractions are defined by declining real GDP. Firms cut production and lay off workers, so output falls and unemployment rises. Business investment declines as firms postpone expansion plans. Consumer confidence drops. Tax revenue falls because incomes and profits shrink. Options A, B, and D all describe expansion characteristics.",
  },
  {
    id: "bc-7",
    question:
      "The long-run growth trend in a business cycle diagram represents:",
    options: [
      "The maximum possible output of the economy",
      "The economy's average growth rate over time, smoothing out cyclical fluctuations",
      "The inflation rate over time",
      "Government spending as a share of GDP",
    ],
    correctIndex: 1,
    explanation:
      "The trend line shows the economy's potential growth path, the trajectory GDP would follow if there were no cyclical swings above and below it. Actual GDP oscillates around this trend, rising above it during late expansions and falling below it during contractions.",
  },
  {
    id: "bc-8",
    question:
      "An inverted yield curve (short-term rates higher than long-term rates) is typically considered:",
    options: [
      "A coincident indicator of current economic strength",
      "A lagging indicator of past recessions",
      "A leading indicator of a potential recession",
      "An indicator that the Fed is running expansionary policy",
    ],
    correctIndex: 2,
    explanation:
      "The yield curve has inverted before every U.S. recession since 1955, making it one of the most closely watched leading indicators. An inversion signals that investors expect future economic weakness and lower interest rates ahead, which is why they accept lower yields on long-term bonds than on short-term ones.",
  },
  {
    id: "bc-9",
    question:
      "In the AD/AS model, an economic expansion is best represented by:",
    options: [
      "A leftward shift of aggregate demand",
      "A rightward shift of aggregate demand along the SRAS curve",
      "A leftward shift of short-run aggregate supply",
      "Movement along the LRAS curve",
    ],
    correctIndex: 1,
    explanation:
      "An expansion corresponds to aggregate demand increasing and shifting rightward. The economy moves along the SRAS curve to a higher level of output, and depending on proximity to full employment, the price level may also rise. Option A would represent a contraction. Option C would represent a negative supply shock. Option D does not describe a shift in either curve.",
  },
  {
    id: "bc-10",
    question:
      "What body officially declares the beginning and end of US recessions?",
    options: [
      "The Federal Reserve",
      "The Bureau of Labor Statistics",
      "The National Bureau of Economic Research (NBER)",
      "The Congressional Budget Office",
    ],
    correctIndex: 2,
    explanation:
      "The NBER's Business Cycle Dating Committee examines a range of economic indicators, including employment, income, production, and sales, before announcing the official dates of peaks and troughs. These announcements typically come months after the actual turning points have occurred.",
  },
  {
    id: "bc-11",
    question:
      "Building permits, new orders for consumer goods, and the yield curve spread are all classified as:",
    options: [
      "Coincident indicators because they reflect current economic conditions",
      "Lagging indicators because they change after the economy turns",
      "Leading indicators because they tend to change direction before the overall economy does",
      "Supply-side indicators because they measure production capacity",
    ],
    correctIndex: 2,
    explanation:
      "Building permits signal future construction. New orders predict future production. The yield curve spread reflects market expectations about future interest rates and growth. All three change direction before the broader economy turns, making them leading indicators. Option A describes indicators like real GDP and industrial production that move with the economy in real time. Option B describes indicators like unemployment duration that peak well after a recession ends. Option D is a fabricated category; these are demand-side signals about future spending and investment.",
  },
  {
    id: "bc-12",
    question:
      "If actual real GDP is $18 trillion and potential GDP is $20 trillion, the economy has:",
    options: [
      "An inflationary gap of $2 trillion",
      "A recessionary gap of $2 trillion",
      "A recessionary gap of $18 trillion",
      "No output gap because GDP is positive",
    ],
    correctIndex: 1,
    explanation:
      "Actual GDP ($18 trillion) falls below potential ($20 trillion), meaning the economy is producing less than its capacity allows. That $2 trillion shortfall is a recessionary gap. Resources are underutilized and unemployment exceeds the natural rate. Option A reverses the gap type; an inflationary gap requires actual GDP to exceed potential. Option C confuses the total GDP figure with the size of the gap, which is $20T minus $18T = $2T. Option D is nonsensical; positive GDP does not mean the economy is operating at full employment.",
  },
  {
    id: "bc-13",
    question:
      "Consumer confidence surveys show a sharp decline, and firms begin to cut planned investment. According to the role of expectations in the business cycle, this will most likely:",
    options: [
      "Have no effect on real GDP because expectations are not part of the AD/AS model",
      "Shift aggregate supply to the left, causing stagflation",
      "Shift aggregate demand to the left, reducing real GDP and potentially triggering a contraction",
      "Shift aggregate demand to the right as consumers rush to buy before conditions worsen",
    ],
    correctIndex: 2,
    explanation:
      "Expectations are a powerful self-fulfilling mechanism. When consumers expect hard times, they cut spending. When firms expect lower sales, they cut investment. Both consumption (C) and investment (I) are components of AD, so aggregate demand shifts left. Output falls, unemployment rises, and the pessimism that triggered the pullback becomes justified by the economic decline it caused. This feedback loop can transform a mild slowdown into a full contraction. Option A is wrong because C and I are in the AD equation. Option B confuses demand-side pessimism with a supply shock. Option D describes panic buying, which is rare and not the typical response to falling confidence.",
  },
  {
    id: "bc-14",
    question:
      "Which of the following government actions is counter-cyclical?",
    options: [
      "Cutting government spending during a recession to balance the budget",
      "Raising taxes during an expansion and increasing spending during a recession",
      "Raising interest rates during a recession to attract foreign capital",
      "Cutting taxes during an expansion to reward voters",
    ],
    correctIndex: 1,
    explanation:
      "Counter-cyclical policy works against the prevailing phase of the cycle to dampen fluctuations. Raising taxes during an expansion cools overheating demand. Increasing spending during a recession stimulates a sluggish economy. Both actions push opposite to the current trend. Option A is procyclical: cutting spending during a recession deepens the downturn. Option C is also procyclical: higher rates during a recession make borrowing more expensive when the economy needs stimulus. Option D is procyclical as well: cutting taxes during an expansion adds fuel to an already hot economy.",
  },
  {
    id: "bc-15",
    question:
      "Real GDP, industrial production, and employment levels are best classified as which type of economic indicator?",
    options: [
      "Leading indicators",
      "Coincident indicators",
      "Lagging indicators",
      "Composite indicators",
    ],
    correctIndex: 1,
    explanation:
      "These three indicators move in lockstep with the overall economy. When the economy expands, real GDP rises, factories produce more, and firms hire. When the economy contracts, all three decline simultaneously. They reveal where the economy is right now rather than where it has been or where it is heading. Option A describes indicators like stock prices and building permits that change before the economy turns. Option C describes indicators like unemployment rate that change after the turning point. Option D is not a standard classification in the leading-lagging-coincident framework.",
  },
  {
    id: "bc-16",
    question:
      "Corporate profits tend to rise during expansions and fall during contractions. This makes corporate profits a:",
    options: [
      "Procyclical variable",
      "Countercyclical variable",
      "Acyclical variable",
      "Leading indicator that predicts the business cycle",
    ],
    correctIndex: 0,
    explanation:
      "A procyclical variable moves in the same direction as the overall economy. Corporate profits fit precisely: when demand is strong, sales volumes and margins grow; when demand weakens, revenue and profits contract. Option B describes a variable that moves opposite to the cycle, such as unemployment. Option C describes a variable with no systematic relationship to economic fluctuations. Option D may hold partially in some periods, but the question asks about cyclical classification, and profits are definitively procyclical.",
  },
  {
    id: "bc-17",
    question:
      "An economy is at the trough of the business cycle. Which combination of indicators is most consistent with this phase?",
    options: [
      "Low unemployment, high inflation, rising stock prices",
      "High unemployment, low consumer confidence, declining GDP that is beginning to stabilize",
      "Moderate unemployment, stable prices, steady GDP growth",
      "Low unemployment, rising wages, increasing business investment",
    ],
    correctIndex: 1,
    explanation:
      "The trough is the lowest point. Real GDP has stopped falling but has not yet started growing meaningfully. Unemployment is at its worst. Consumer confidence is depressed. Inventories have been depleted. The critical signal is that the decline is stabilizing, setting the stage for recovery. Option A describes conditions near a peak, with low unemployment and high inflation signaling an overheating economy. Option C describes a mid-expansion economy with moderate and stable conditions. Option D also describes expansion characteristics, with rising wages and investment signaling robust growth well past the trough.",
  },
];
