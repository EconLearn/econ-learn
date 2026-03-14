import type { PracticeQuestion } from "./supply-demand-content";

export const businessCycleContent = {
  title: "The Business Cycle",
  subtitle:
    "Expansions, peaks, contractions, and troughs — the rhythm of a modern economy.",
  sections: [
    {
      heading: "What Is the Business Cycle?",
      content:
        "Economies do not grow in straight lines. Output rises for a while, then stumbles, then recovers. This pattern — alternating between growth and decline — is the **business cycle**. It is measured by changes in **real GDP**, the inflation-adjusted value of all goods and services produced.\n\nThe business cycle has four phases: **expansion** (output rising), **peak** (the high point), **contraction** (output falling), and **trough** (the low point). After a trough, a new expansion begins. The cycle repeats, though never at perfectly regular intervals.",
    },
    {
      heading: "Expansion",
      content:
        "During an expansion, real GDP is climbing. Firms hire more workers, consumer spending rises, and business investment picks up. Unemployment falls as the economy approaches — and sometimes surpasses — its **full-employment level**.\n\nExpansions vary in length. The expansion from 2009 to 2020 lasted nearly 11 years, the longest on record in the US. Others last only two or three years. There is no rule governing how long good times persist.\n\nAs the expansion matures, watch for signs of overheating: rising wages (which push costs higher), increased borrowing, and asset price bubbles. These can set the stage for the next downturn.",
    },
    {
      heading: "Peak",
      content:
        "The peak is the moment real GDP stops rising and starts to turn down. It is only identified after the fact — nobody rings a bell. At the peak, the economy is operating at or beyond its potential output.\n\nInflation is typically at its highest near the peak because demand is pressing against the economy's productive capacity. The Federal Reserve often raises interest rates during this phase to cool things down, which itself can help trigger the transition to contraction.\n\nThe **National Bureau of Economic Research (NBER)** is the unofficial arbiter that determines when peaks and troughs occur, usually months after the fact.",
    },
    {
      heading: "Contraction and Recession",
      content:
        "A contraction is a period of declining real GDP. When the contraction is severe enough — commonly defined as **two consecutive quarters of falling GDP** — it is called a **recession**. Firms cut production, lay off workers, and delay investment.\n\nUnemployment rises, consumer confidence drops, and spending pulls back further, reinforcing the decline. This negative feedback loop is why recessions can feel self-perpetuating.\n\nNot all contractions are recessions. A brief dip that reverses quickly may never cross the threshold. But when unemployment spikes and output falls sharply — as in 2008 or early 2020 — the effects ripple through the entire economy.",
    },
    {
      heading: "Trough and Recovery",
      content:
        "The trough is the bottom. Real GDP has stopped falling but has not yet started growing meaningfully. Unemployment is at its worst. Inventories are depleted, and firms have cut to the bone.\n\nThe trough is also where recovery begins. Pent-up demand, low interest rates (often set by the Fed to stimulate borrowing), and fiscal stimulus programs start pulling the economy upward. The first signs of recovery are subtle — a slight uptick in retail sales, a slowdown in layoffs, improving sentiment surveys.\n\nFrom the trough, the cycle begins again with a new expansion.",
    },
    {
      heading: "Leading, Coincident, and Lagging Indicators",
      content:
        "Economists track three categories of indicators to gauge where the economy stands in the cycle:\n\n**Leading indicators** move before the economy turns. Stock prices, building permits, the yield curve, and new orders for consumer goods all tend to decline before a recession and rise before a recovery. They are useful but imperfect — they have predicted \"nine of the last five recessions,\" as the joke goes.\n\n**Coincident indicators** move with the economy in real time: real GDP, industrial production, employment levels, and personal income.\n\n**Lagging indicators** change after the economy has already turned. Unemployment rates, average duration of unemployment, and commercial loan balances typically peak well after a recession has ended.\n\nFor the AP exam, know which category each indicator falls into and why they move at different times.",
    },
    {
      heading: "Connection to AD/AS and Policy",
      content:
        "The business cycle maps directly onto the **AD/AS model**. An expansion corresponds to rightward shifts of aggregate demand along the SRAS curve. A contraction results from leftward AD shifts or negative supply shocks.\n\n**Fiscal policy** (government spending and taxation) and **monetary policy** (interest rates and money supply) are the tools used to smooth the cycle. Expansionary policy during a trough aims to shorten recessions. Contractionary policy near a peak aims to prevent overheating.\n\nThe challenge is timing. Policy acts with a lag — by the time a recession is officially declared, it may already be months old. This is why the Fed watches leading indicators closely and sometimes acts preemptively.",
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
      "The business cycle moves from expansion (growing) to peak (high point) to contraction (declining) to trough (low point), then repeats.",
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
      "While the NBER uses a broader assessment, the common shorthand definition of a recession is two consecutive quarters of declining real GDP (not nominal GDP).",
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
      "Stock prices tend to decline before recessions and rise before recoveries, making them a leading indicator. Unemployment rate is a lagging indicator, and real GDP is coincident.",
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
      "At the peak, the economy is producing at or above potential. Demand is high, which pushes inflation up. The Fed is more likely to be raising rates to cool things down, not lowering them.",
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
      "Firms are slow to rehire after a downturn. Even after GDP starts growing again, unemployment continues to rise for several months before it turns around, which is why it lags the cycle.",
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
      "During a contraction, firms cut production and lay off workers, so output falls and unemployment rises. Business investment declines, consumer confidence drops, and tax revenue falls as incomes shrink.",
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
      "The trend line shows the economy's potential growth path — what GDP would be if there were no cyclical swings. Actual GDP oscillates above and below this trend.",
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
      "An inverted yield curve has historically preceded recessions, making it one of the most watched leading indicators. It signals that investors expect future economic weakness.",
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
      "An expansion corresponds to increasing aggregate demand (shifting right), which moves the economy along the SRAS curve to higher output and possibly higher prices.",
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
      "The NBER's Business Cycle Dating Committee is the unofficial but widely recognized authority that determines when recessions begin and end, often announcing the dates months after the fact.",
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
      "Building permits signal future construction activity, new orders predict future production, and the yield curve spread reflects market expectations about future interest rates and growth. All three change direction before the broader economy turns, making them leading indicators. Option A is wrong because coincident indicators (like real GDP and industrial production) move with the economy in real time, not ahead of it. Option B describes indicators like unemployment duration and commercial loan balances that peak well after a recession ends. Option D is a fabricated category — these are demand-side signals about future spending and investment, not measures of productive capacity.",
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
      "The output gap is the difference between actual and potential GDP. When actual GDP ($18 trillion) falls below potential ($20 trillion), the economy produces less than it is capable of, which is a recessionary gap of $2 trillion. This means resources are underutilized and unemployment is above the natural rate. Option A reverses the gap type — an inflationary gap occurs when actual GDP exceeds potential, not when it falls short. Option C confuses the total GDP figure with the size of the gap; the gap is $20T - $18T = $2T, not $18T. Option D is nonsensical — a positive GDP does not mean the economy is at full employment; it merely means production exists.",
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
      "Expectations are a powerful self-fulfilling mechanism in the business cycle. When consumers expect hard times, they cut spending. When firms expect lower sales, they cut investment. Both consumption (C) and investment (I) are components of aggregate demand, so AD shifts left. Output falls, unemployment rises, and the pessimism that triggered the pullback becomes justified. This feedback loop can turn a mild slowdown into a full contraction. Option A is wrong because expectations directly influence C and I, both of which are in AD. Option B confuses demand expectations with supply shocks — pessimism reduces demand, not supply. Option D describes panic buying, which is rare and temporary; the dominant response to negative expectations is reduced spending, not increased spending.",
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
      "Counter-cyclical policy works against the current phase of the business cycle to smooth out fluctuations. Raising taxes during an expansion cools overheating demand, and increasing spending during a recession stimulates a sluggish economy. Both actions push against the prevailing trend. Option A is procyclical — cutting spending during a recession deepens the downturn by further reducing aggregate demand when it is already weak. Option C is also procyclical — raising rates during a recession makes borrowing more expensive when the economy already needs stimulus. Option D is procyclical as well — cutting taxes during an expansion adds fuel to an already hot economy, potentially worsening inflation.",
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
      "Coincident indicators move in lockstep with the overall economy. When the economy expands, real GDP rises, factories produce more (industrial production increases), and firms hire (employment rises). When the economy contracts, all three decline simultaneously. They tell you where the economy is right now. Option A is wrong because leading indicators (like stock prices and building permits) change before the economy turns, giving advance warning. Option C is wrong because lagging indicators (like unemployment rate and commercial loan balances) change after the economy has already shifted direction. Option D is not a standard classification in the leading-lagging-coincident framework used on the AP exam.",
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
      "A procyclical variable moves in the same direction as the overall economy — rising during expansions and falling during contractions. Corporate profits fit this pattern precisely: when demand is strong, sales and margins grow; when demand weakens, profits shrink. Option B describes a variable that moves opposite to the cycle, like unemployment (which rises in contractions and falls in expansions). Option C describes a variable with no systematic relationship to the cycle, which does not apply to profits since they are closely tied to economic activity. Option D may be partially true in some cases, but the question asks about the cyclical classification, and profits are primarily coincident or slightly lagging — they are definitively procyclical, not necessarily leading.",
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
      "The trough is the lowest point of the cycle — real GDP has stopped falling but has not yet begun growing meaningfully. Unemployment is at its worst, consumer confidence is depressed, and inventories have been depleted. The key distinction is that the decline is stabilizing, setting the stage for recovery. Option A describes conditions near a peak — low unemployment and high inflation are signs of an overheating economy, not a trough. Option C describes an economy in the middle of a steady expansion, not at its lowest point. Option D also describes expansion characteristics — rising wages and increasing investment signal that the economy is well past the trough and growing robustly.",
  },
];
