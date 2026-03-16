import type { PracticeQuestion } from "@/data/supply-demand-content";

export const fiscalPolicyContent = {
  title: "Fiscal Policy",
  subtitle: "Government spending and taxation as tools for shifting aggregate demand and stabilizing the economy",
  sections: [
    {
      heading: "Expansionary and Contractionary Fiscal Policy",
      content: `When COVID shut down the economy in 2020, Congress didn't sit around waiting for markets to self-correct. They passed trillions in spending and relief checks. That's fiscal policy in action: the federal government using its spending and taxing power to shift aggregate demand. Congress and the president control these levers, which is what separates fiscal policy from monetary policy (the Fed's territory).

**Expansionary fiscal policy** targets a recessionary gap. Increase government spending (G), cut taxes (T), or both. Each shifts AD right, raising real GDP and the price level. The 2009 American Recovery and Reinvestment Act deployed $800 billion in spending and tax cuts to pull the economy out of the Great Recession.

**Contractionary fiscal policy** works in reverse. An overheating economy with an inflationary gap calls for spending cuts or tax increases to shift AD left. Here's the political reality, though: nobody wins elections by raising taxes or slashing popular programs. Contractionary fiscal policy is rare. The economics are clean, but the politics are brutal.`,
    },
    {
      heading: "The Spending Multiplier",
      content: `The government hires a contractor for $1 million to repair a bridge. That contractor pays workers, who take their paychecks to grocery stores, landlords, and car dealerships. Those businesses pay their employees, who spend again. One dollar of government spending cycles through the economy multiple times. Economists call this the **multiplier effect**.

How big is it? That depends on the **marginal propensity to consume (MPC)**, the fraction of each new dollar that people spend rather than save.

**Spending multiplier = 1 / (1 - MPC)**

With an MPC of 0.8 (people spend 80 cents of every new dollar), the multiplier is 1 / 0.2 = 5. A $10 billion infrastructure bill shifts AD right by $50 billion as the money cascades through successive spending rounds. Raise the MPC to 0.9 and the multiplier jumps to 10. The more people spend out of each dollar, the longer the chain runs.`,
    },
    {
      heading: "The Tax Multiplier",
      content: `The AP exam comes back to this one constantly: why does a $10 billion tax cut produce a smaller AD shift than $10 billion in government spending? It comes down to leakage at the start. If the MPC is 0.8, households save 20% of the tax cut before spending a cent.

**Tax multiplier = -MPC / (1 - MPC)**

The negative sign captures the inverse relationship. Tax cuts increase AD, tax hikes decrease it. With MPC = 0.8: -0.8 / 0.2 = **-4**. A $10 billion tax cut shifts AD right by $40 billion, versus $50 billion from the same amount of direct spending.

The gap comes from that very first round. Government spending injects all $10 billion immediately. A tax cut puts $10 billion in household pockets, but they save $2 billion before any spending happens. Only $8 billion enters the multiplier chain. The spending multiplier always exceeds the tax multiplier (in absolute value) by exactly 1, regardless of the MPC.`,
    },
    {
      heading: "Crowding Out",
      content: `Deficit-financed spending has a complication. To fund a stimulus, the Treasury sells bonds, borrowing from the same pool of loanable funds that businesses want to tap. More borrowers chasing the same savings drives up **interest rates**.

Higher rates make it more expensive for companies to finance factories, for developers to build housing, and for consumers to borrow for big purchases. Private investment drops, partially offsetting the government's spending boost. This is the **crowding-out effect**, and it means the actual AD shift is smaller than the textbook multiplier predicts.

How much crowding out you get depends on context. During the depths of 2008, private investment demand had already collapsed and rates sat near zero. There wasn't much private borrowing to displace. But in a fully employed economy where firms are actively competing for loans, government borrowing can significantly raise rates and squeeze out private investment. Full crowding out (every government dollar displaces a private dollar) is the theoretical extreme. Partial crowding out is the norm.`,
    },
    {
      heading: "Automatic Stabilizers",
      content: `Congress is slow. Not the most exciting observation, but it matters a lot here. Passing a stimulus bill takes months of debate and political negotiation. By the time relief arrives, the recession may be over or far worse. **Automatic stabilizers** bypass that lag entirely because they kick in without any new legislation.

On the revenue side, the U.S. has a **progressive income tax**. If your income drops from a layoff or reduced hours, you fall into a lower bracket and owe less tax automatically. Your disposable income doesn't drop as far as your gross income did. During expansion, rising incomes push people into higher brackets, and the extra taxes act as a natural brake on spending.

On the spending side, **unemployment insurance** and safety net programs expand automatically during downturns because more people qualify. When the 2008 recession hit, unemployment claims surged with no legislation needed. Those checks went to people who were almost certain to spend every dollar, cushioning the fall in aggregate demand.

Automatic stabilizers dampen the business cycle, but they can't end a deep recession on their own. They absorb shocks. They don't generate recovery.`,
    },
    {
      heading: "Budget Deficits and the National Debt",
      content: `In 2020, the U.S. federal government spent roughly $6.5 trillion and collected about $3.4 trillion. That $3.1 trillion gap is a **budget deficit**. The Treasury covers the shortfall by selling bonds to pension funds, foreign governments, individual investors, and banks.

Stack every deficit (minus the occasional surplus) the government has ever run and you get the **national debt**. Deficit is a flow: how much red ink in a single year. Debt is a stock: the total pile of IOUs outstanding.

In theory, the budget should roughly balance over a full business cycle, with deficits during recessions offset by surpluses during booms. In practice, surpluses are rare. Cutting spending and raising taxes costs politicians their jobs, so deficits persist even during expansions.

Whether high debt actually matters is one of the sharpest divides in economics. On one side: interest payments consume a growing share of the budget, future taxes must rise to service the debt, and creditors may eventually demand higher rates. On the other: a government borrowing in its own currency can always make payments, and the meaningful metric is **debt-to-GDP ratio**, not raw dollars. Japan's debt exceeds 250% of GDP, and it still borrows at low rates.`,
    },
    {
      heading: "Fiscal Policy and the Phillips Curve",
      content: `Everything we just covered about AD shifts has a twin story on the **Phillips Curve**. When Congress runs expansionary fiscal policy (boosting G or cutting T), AD shifts right, real GDP rises, unemployment falls, and inflation picks up. On the short-run Phillips Curve, the economy slides up and to the left: lower unemployment, higher inflation.

Contractionary fiscal policy runs the opposite direction. Cutting spending or raising taxes shifts AD left, cools the economy, and moves the economy down and to the right on the Phillips Curve: higher unemployment, lower inflation.

The trade-off is real in the short run. But there's a critical limit. If the government keeps pumping stimulus after the economy has returned to full employment, the short-run Phillips Curve itself shifts upward as workers and firms adjust their inflation expectations. Eventually, unemployment returns to the **natural rate**, but at a permanently higher inflation level. That's the long-run Phillips Curve in action, a vertical line at the natural rate, just like LRAS is vertical at potential output.

For the AP exam, connect the graphs. An expansionary fiscal policy question should trigger three mental pictures: AD/AS (AD shifts right, GDP up, price level up), the money market (higher income raises money demand, pushing up interest rates), and the Phillips Curve (unemployment down, inflation up). Mastering these connections is what separates a 3 from a 5.`,
    },
    {
      heading: "Worked Example",
      content: `Congress is debating two proposals to fight a recession. MPC = 0.75.

**Option A: spend $20 billion on infrastructure.**
Spending multiplier = 1 / (1 - 0.75) = 1 / 0.25 = **4**. The full $20B enters the economy immediately. Construction workers spend 75% ($15B), those recipients spend 75% ($11.25B), and the chain continues. Total AD shift: $20B x 4 = **$80 billion**.

**Option B: cut taxes by $20 billion.**
Tax multiplier = -0.75 / 0.25 = **-3**. Households receive $20B in relief but save 25% upfront ($5B). Only $15B enters the first spending round. Chain: $15B, $11.25B, $8.44B ... Total AD shift: $20B x 3 = **$60 billion**.

Spending wins by $20 billion. On an AD/AS graph, both shift AD right, but spending shifts it further. The multiplier gap is exactly 1 (4 vs. 3) for any MPC value.

Both policies raise real GDP and the price level as the economy moves up along the SRAS curve. The real policy question is simple: how much stimulus per dollar does Congress want?`,
    },
  ],
};

export const fiscalPolicyQuestions: PracticeQuestion[] = [
  {
    id: "fp-1",
    question:
      "If the MPC is 0.75, what is the spending multiplier?",
    options: ["3", "4", "5", "0.75"],
    correctIndex: 1,
    explanation:
      "Plug into the formula: 1 / (1 - 0.75) = 1 / 0.25 = 4. Every dollar the government spends generates $4 in total GDP through successive re-spending rounds. Not A (3), that's the tax multiplier for this MPC (-0.75/0.25 = -3, absolute value 3). Mixing up the two multipliers is one of the most common AP exam mistakes. Not C (5), that would require an MPC of 0.8, not 0.75. Not D (0.75), the MPC is an input to the formula, not the multiplier itself.",
  },
  {
    id: "fp-2",
    question:
      "Congress increases government purchases by $50 billion and the MPC is 0.8. By how much does aggregate demand shift?",
    options: [
      "$50 billion",
      "$200 billion",
      "$250 billion",
      "$40 billion",
    ],
    correctIndex: 2,
    explanation:
      "Multiplier = 1 / (1 - 0.8) = 1 / 0.2 = 5. Total AD shift = $50B x 5 = $250 billion. The $50B cascades: recipients spend $40B (80%), those recipients spend $32B, and so on until the rounds converge to $250B. Not A ($50B), this treats the initial spending as the final answer, ignoring the multiplier entirely. That would only be correct if MPC were zero (nobody re-spends anything). Not B ($200B), this uses a multiplier of 4, which is the tax multiplier for this MPC, not the spending multiplier. Not D ($40B), this just calculates $50B x 0.8, which is the second spending round alone.",
  },
  {
    id: "fp-3",
    question:
      "Why is the tax multiplier smaller in absolute value than the spending multiplier?",
    options: [
      "Tax cuts are always smaller than spending increases",
      "Consumers save part of a tax cut, so only the spent portion enters the multiplier chain",
      "The government collects less revenue from tax cuts",
      "Tax changes do not affect aggregate demand",
    ],
    correctIndex: 1,
    explanation:
      "The difference comes down to the first round. Government purchases: the full dollar hits the economy immediately. The government buys something, someone gets paid. Tax cut: households receive a dollar but save a fraction (1 - MPC) before spending anything. That first-round savings leakage is why the tax multiplier falls short by exactly 1. Not A: the relative size of tax cuts versus spending bills is a political decision, not a mathematical one. The multiplier gap exists even if both policies are the same dollar amount. Not C: reduced revenue is a consequence of tax cuts, not an explanation for the weaker multiplier. Not D: tax changes absolutely affect AD; the tax multiplier is smaller, but it's not zero.",
  },
  {
    id: "fp-4",
    question:
      "During a recessionary gap, the appropriate discretionary fiscal policy is to:",
    options: [
      "Increase taxes and decrease government spending",
      "Decrease taxes and increase government spending",
      "Increase both taxes and government spending equally",
      "Take no action and wait for automatic stabilizers",
    ],
    correctIndex: 1,
    explanation:
      "Recessionary gap = real GDP below potential, unemployment above the natural rate. The fix: shift AD right by increasing G, cutting T, or both. This is expansionary fiscal policy, exactly what Congress did with the 2009 stimulus and the 2020 CARES Act. Not A: raising taxes and cutting spending is contractionary fiscal policy, which would widen the recessionary gap, not close it. That's the response for an inflationary gap. Not C: equal increases in both G and T would produce only a small net rightward shift (balanced-budget multiplier = 1), not the strong stimulus a recession calls for. Not D: automatic stabilizers aren't discretionary. The question asks about deliberate legislative action, and 'take no action' is by definition not discretionary fiscal policy.",
  },
  {
    id: "fp-5",
    question:
      "The crowding-out effect reduces the impact of expansionary fiscal policy because:",
    options: [
      "Higher government spending reduces consumer confidence",
      "Government borrowing raises interest rates, which reduces private investment",
      "Tax revenues automatically increase during an expansion",
      "The Federal Reserve tightens monetary policy in response",
    ],
    correctIndex: 1,
    explanation:
      "The mechanism: government borrows to fund its spending -> demand for loanable funds increases -> real interest rates rise -> businesses face higher borrowing costs -> private investment (I) falls. That drop in I partially offsets the rise in G, so the net AD shift is smaller than the simple multiplier predicts. Not A: crowding out works through interest rates, not consumer confidence. Consumer sentiment might shift for other reasons, but that's not the crowding-out channel. Not C: rising tax revenue during expansions is an automatic stabilizer effect, a completely different concept. Not D: the Fed choosing to tighten monetary policy is a separate, deliberate decision. Crowding out happens through the loanable funds market whether the Fed acts or not.",
  },
  {
    id: "fp-6",
    question:
      "Which of the following is an automatic stabilizer?",
    options: [
      "A new infrastructure spending bill passed by Congress",
      "The Federal Reserve lowering the federal funds rate",
      "Progressive income taxes that collect less revenue when GDP falls",
      "A one-time stimulus check authorized by legislation",
    ],
    correctIndex: 2,
    explanation:
      "The defining feature of automatic stabilizers: they work without Congress passing a single new law. Progressive income taxes do this: when the economy contracts and incomes fall, people drop into lower brackets and keep more of their paycheck. When the economy booms, rising incomes push people into higher brackets, automatically pulling money out of the spending stream. Not A: an infrastructure bill requires legislation, making it discretionary fiscal policy by definition. Not B: the Fed lowering rates is monetary policy, not fiscal policy at all. Not D: stimulus checks are the trickiest wrong answer. They do stabilize the economy, but they require an act of Congress to authorize. 'Automatic' means the mechanism is already baked into existing law.",
  },
  {
    id: "fp-7",
    question:
      "If the government simultaneously increases spending by $20 billion and raises taxes by $20 billion (MPC = 0.8), what is the net effect on aggregate demand?",
    options: [
      "AD does not change because the two effects cancel out",
      "AD shifts right by $20 billion",
      "AD shifts right by $100 billion",
      "AD shifts left by $20 billion",
    ],
    correctIndex: 1,
    explanation:
      "Work each piece separately. Spending multiplier = 1/0.2 = 5, so a $20B spending boost shifts AD right by $100B. Tax multiplier = 0.8/0.2 = 4, so a $20B tax hike shifts AD left by $80B. Net effect: $100B - $80B = $20B rightward shift. This is the balanced-budget multiplier, and it always equals exactly 1 regardless of the MPC. Not A: this is the most common mistake. Students assume equal-dollar spending and tax increases cancel out, but they don't. The spending multiplier is always larger by 1, so a net rightward shift survives. Not C ($100B): this counts only the spending effect and ignores the contractionary pull of the tax increase. Not D: the net shift is rightward, not leftward, because spending packs more punch per dollar than taxation.",
  },
  {
    id: "fp-8",
    question:
      "A persistent government budget deficit is most likely to lead to:",
    options: [
      "A decrease in the national debt",
      "An increase in the national debt",
      "A decrease in the money supply",
      "An automatic surplus the following year",
    ],
    correctIndex: 1,
    explanation:
      "Each year the government runs a deficit, it issues new Treasury bonds to cover the gap. Those bonds pile onto the existing stock of debt. Persistent deficits mean the national debt grows year after year. The U.S. has run deficits in all but a handful of years since the 1970s, which is why the debt has ballooned. Not A: this reverses the relationship entirely. Deficits add to debt; only surpluses reduce it. Not C: the money supply is controlled by the Fed through monetary policy, not directly by budget deficits. Not D: there is no automatic mechanism that turns a deficit into a surplus the next year. Surpluses require deliberate policy changes or an economic boom that lifts tax revenue.",
  },
  {
    id: "fp-9",
    question:
      "If the MPC is 0.9, the spending multiplier is 10 and the tax multiplier is -9. The government wants to close a recessionary gap of $45 billion. Which policy option requires the least government expenditure or tax reduction?",
    options: [
      "Increase government spending by $45 billion",
      "Cut taxes by $45 billion",
      "Increase government spending by $4.5 billion",
      "Cut taxes by $5 billion",
    ],
    correctIndex: 2,
    explanation:
      "With a spending multiplier of 10, the government needs to spend only $45B / 10 = $4.5 billion to generate a $45 billion shift in AD. Option D ($5 billion tax cut) would generate $5B x 9 = $45 billion in AD shift, which also closes the gap but requires more fiscal resources. Option A ($45 billion in spending) massively overshoots, producing $450 billion in AD expansion. Option B ($45 billion tax cut) produces $405 billion in AD expansion, also a massive overshoot. The spending multiplier is always more efficient per dollar than tax cuts because government spending injects the full amount immediately, while tax cuts lose a fraction to saving in the first round.",
  },
  {
    id: "fp-10",
    question:
      "The tax multiplier is smaller in absolute value than the spending multiplier by exactly 1, regardless of the MPC. If the MPC increases from 0.6 to 0.8, what happens to this gap and to both multipliers?",
    options: [
      "Both multipliers increase, but the gap between them widens to more than 1",
      "Both multipliers increase, and the gap remains exactly 1",
      "The spending multiplier increases but the tax multiplier decreases, widening the gap",
      "Both multipliers decrease, and the gap remains exactly 1",
    ],
    correctIndex: 1,
    explanation:
      "When MPC = 0.6: spending multiplier = 1/0.4 = 2.5, tax multiplier = -0.6/0.4 = -1.5, gap = 1. When MPC = 0.8: spending multiplier = 1/0.2 = 5, tax multiplier = -0.8/0.2 = -4, gap = 1. Both multipliers increase as the MPC rises because a higher spending propensity means each dollar circulates through more spending rounds. The gap between them always equals exactly 1 because the spending multiplier formula 1/(1-MPC) minus the tax multiplier formula MPC/(1-MPC) always yields 1. Option A incorrectly claims the gap changes. Option C incorrectly claims the tax multiplier decreases; it increases in absolute value. Option D reverses the direction of change; higher MPC means larger multipliers, not smaller ones.",
  },
  {
    id: "fp-11",
    question:
      "The balanced-budget multiplier states that an equal increase in government spending and taxes produces a net multiplier of exactly 1. If the government increases both spending and taxes by $30 billion with an MPC of 0.8, what is the net change in GDP?",
    options: [
      "$0, because the spending and tax effects cancel out",
      "$30 billion increase",
      "$150 billion increase",
      "$120 billion increase",
    ],
    correctIndex: 1,
    explanation:
      "The balanced-budget multiplier always equals 1, regardless of the MPC. The spending effect is $30B x 5 = $150B (rightward AD shift). The tax effect is $30B x 4 = $120B (leftward AD shift). Net: $150B - $120B = $30B. Alternatively, $30B x 1 (balanced-budget multiplier) = $30B. Option A is the most common error; students assume equal-dollar changes cancel out, but the spending multiplier is always larger by 1, so a net expansion survives. Option C counts only the spending effect and ignores the contractionary pull of the tax increase. Option D counts only the tax effect and ignores the expansionary push of the spending increase.",
  },
  {
    id: "fp-12",
    question:
      "The government enacts a $100 billion deficit-financed stimulus package. The spending multiplier predicts a $500 billion increase in GDP (MPC = 0.8). However, the actual increase in GDP is only $350 billion. The most likely explanation for this gap is:",
    options: [
      "The MPC was lower than 0.8, so the multiplier was smaller than expected",
      "The crowding-out effect: government borrowing raised interest rates, which reduced private investment, partially offsetting the stimulus",
      "Automatic stabilizers counteracted the stimulus by increasing taxes",
      "The Federal Reserve simultaneously contracted the money supply",
    ],
    correctIndex: 1,
    explanation:
      "Crowding out is the primary reason actual multiplier effects fall short of theoretical predictions for deficit-financed spending. When the government borrows heavily, it increases demand in the loanable funds market, driving up interest rates. Higher rates discourage private investment (a component of AD), partially offsetting the government's spending injection. The $150 billion shortfall represents private investment that was crowded out. Option A is possible in theory but does not explain why the stimulus specifically underperformed; the question states MPC = 0.8 as given. Option C describes a mechanism that moderates business cycles but does not specifically counteract stimulus packages. Option D describes a separate policy action that could reduce AD, but the question asks about the most likely explanation for the gap between predicted and actual GDP effects of deficit-financed spending.",
  },
  {
    id: "fp-13",
    question:
      "A senator argues that discretionary fiscal policy is unreliable because of time lags. Which of the following correctly identifies the three lags and why they matter?",
    options: [
      "Recognition lag (time to identify the problem), legislative lag (time to pass a law), and implementation lag (time for the policy to take effect) -- together, they mean the policy may arrive after the economy has already self-corrected or shifted to a different phase of the business cycle",
      "Monetary lag, fiscal lag, and exchange rate lag -- each affects a different sector of the economy",
      "Short-run lag, medium-run lag, and long-run lag -- corresponding to the three time horizons in macroeconomics",
      "Statistical lag, political lag, and behavioral lag -- all of which can be eliminated with faster data collection",
    ],
    correctIndex: 0,
    explanation:
      "The three fiscal policy lags are recognition (economists must first identify that a recession or inflationary gap exists, which requires data that arrives with a delay), legislative (Congress must debate, negotiate, and pass legislation, which can take months), and implementation (once passed, the spending or tax change takes time to flow through the economy). These lags mean fiscal policy often arrives too late and may even be destabilizing if the economy has moved to a different phase by the time the policy takes effect. Option B invents categories that do not correspond to the standard framework. Option C mislabels the lags; they are not defined by macroeconomic time horizons. Option D incorrectly suggests the lags can be eliminated; legislative and implementation lags are inherent to the democratic process and economic adjustment.",
  },
  {
    id: "fp-14",
    question:
      "An economy is experiencing an inflationary gap. Which combination of fiscal policy tools represents the appropriate contractionary response?",
    options: [
      "Increase government spending and cut taxes to boost output above potential",
      "Decrease government spending and increase taxes to shift AD left and cool the economy",
      "Increase government spending and increase taxes by the same amount to maintain a balanced budget",
      "Cut taxes and reduce transfer payments to stimulate private investment",
    ],
    correctIndex: 1,
    explanation:
      "An inflationary gap means actual GDP exceeds potential GDP, so the economy needs contractionary fiscal policy to shift AD left. Decreasing government spending directly reduces the G component of AD, and increasing taxes reduces disposable income, lowering consumption (C). Both shift AD left, closing the inflationary gap. Option A is expansionary fiscal policy, which would widen the inflationary gap by pushing AD further right. Option C sounds contractionary on both sides, but the balanced-budget multiplier of 1 means equal increases in G and T still produce a net expansionary effect -- the opposite of what is needed. Option D is internally contradictory: tax cuts are expansionary (shifting AD right), which worsens an inflationary gap.",
  },
  {
    id: "fp-15",
    question:
      "During the 2008 recession, the federal funds rate was already near zero, limiting the Federal Reserve's ability to further stimulate the economy. Congress responded with the $800 billion American Recovery and Reinvestment Act. Why was fiscal policy particularly important in this context, and what was the primary risk?",
    options: [
      "Fiscal policy was unnecessary because monetary policy at zero interest rates is infinitely powerful through quantitative easing",
      "With monetary policy constrained by the zero lower bound, fiscal stimulus was one of the few remaining tools to shift AD right; the primary risk was that deficit spending could crowd out private investment by raising interest rates",
      "Fiscal policy was important because it could shift LRAS right, permanently increasing potential GDP; the primary risk was inflation",
      "Congress acted because automatic stabilizers had already fully corrected the recession, and additional stimulus was needed only to accelerate the recovery",
    ],
    correctIndex: 1,
    explanation:
      "When interest rates hit the zero lower bound, the Fed cannot cut rates further to stimulate borrowing and spending. Fiscal policy becomes critical because government spending directly injects demand into the economy without relying on the interest rate channel. The primary risk of large deficit-financed spending is the crowding-out effect, though in the context of the 2008 recession, crowding out was likely minimal because private demand for loanable funds had collapsed. Option A overstates the effectiveness of unconventional monetary policy; quantitative easing helps but faces diminishing returns and transmission challenges. Option C incorrectly identifies fiscal stimulus as an LRAS shifter; government spending shifts AD, not long-run productive capacity. Option D contradicts the premise; automatic stabilizers moderated the downturn but were insufficient to close the massive recessionary gap caused by the financial crisis.",
  },
];
