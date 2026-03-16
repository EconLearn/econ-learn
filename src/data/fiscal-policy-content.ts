import type { PracticeQuestion } from "@/data/supply-demand-content";

export const fiscalPolicyContent = {
  title: "Fiscal Policy",
  subtitle: "How Congress wields spending and taxation to steer aggregate demand, from trillion-dollar stimulus packages to the quiet mechanics of automatic stabilizers",
  sections: [
    {
      heading: "Expansionary and Contractionary Fiscal Policy",
      content: `On March 27, 2020, President Trump signed the Coronavirus Aid, Relief, and Economic Security Act into law. The price tag was $2.2 trillion, the largest single economic rescue package in American history at that point. Within weeks, the Treasury Department began depositing $1,200 checks into the bank accounts of roughly 160 million Americans. Airlines received $25 billion in payroll grants. Hospitals got $175 billion. Small businesses could apply for forgivable loans through the Paycheck Protection Program, which ultimately distributed $800 billion across two rounds. The logic was blunt: the economy had lost 22 million jobs in March and April, GDP was contracting at an annualized rate of 31.4% in the second quarter, and Congress decided that massive federal spending was the only lever large enough to prevent a depression. That spending was fiscal policy in its rawest form, the federal government using its taxing and spending authority to shift aggregate demand when the private sector could not or would not spend.

**Expansionary fiscal policy** targets a recessionary gap. The government can increase spending (G), cut taxes (T), or do both simultaneously, and each approach shifts AD to the right, raising both real GDP and the price level. Nine years before the CARES Act, Congress had deployed the same playbook during the Great Recession. The American Recovery and Reinvestment Act of 2009 injected $831 billion into the economy through a mix of infrastructure projects, state fiscal relief, and middle-class tax cuts.

**Contractionary fiscal policy** operates in reverse. An economy running past its potential output, producing an inflationary gap, theoretically calls for spending cuts or tax increases that shift AD left. The economics of contraction are straightforward. The politics are nearly impossible. Elected officials who vote for tax hikes or slash popular programs tend to lose their seats. This is why genuine contractionary fiscal policy is vanishingly rare in practice, even when textbook models say it should happen.`,
    },
    {
      heading: "The Spending Multiplier",
      content: `When the federal government awarded a $42 million contract to rebuild the I-35W bridge in Minneapolis after its 2007 collapse, the money did not simply land in one company's bank account and sit there. The primary contractor, Flatiron-Manson, hired welders, crane operators, and engineers. Those workers deposited their paychecks and spent portions at grocery stores, restaurants, and car dealerships across the Twin Cities metro area. The grocery stores used that revenue to pay their own employees, who turned around and spent again. One injection of government dollars cycled through the economy over and over, each round slightly smaller than the last because some fraction of every dollar was saved rather than spent. Economists call this cascading effect the **multiplier effect**, and it explains why a single dollar of government spending can generate several dollars of total economic activity.

The size of the multiplier depends entirely on the **marginal propensity to consume (MPC)**, the share of each additional dollar that households spend rather than save. The formula is clean: **Spending multiplier = 1 / (1 - MPC)**. If the MPC is 0.8, meaning people spend 80 cents of every new dollar they receive, the multiplier equals 1 / 0.2 = 5. A $10 billion infrastructure bill would shift aggregate demand rightward by $50 billion as the initial spending cascades through successive rounds. Bump the MPC to 0.9 and the multiplier jumps to 10, because each dollar circulates through more hands before leaking out into savings. The higher the MPC, the longer the chain runs and the more powerful each government dollar becomes.`,
    },
    {
      heading: "The Tax Multiplier",
      content: `A question that surfaces on nearly every AP Macroeconomics exam in some form: why does a $10 billion tax cut produce a smaller shift in aggregate demand than $10 billion in direct government spending? The answer lies in what happens at the very first step. When the government spends $10 billion building highways, that entire sum enters the economy immediately. Someone gets paid. With a tax cut, the $10 billion lands in household bank accounts, but households do not spend every cent. If the MPC is 0.8, they save $2 billion right out of the gate. Only $8 billion actually enters the first round of the multiplier chain.

The formula captures this leakage: **Tax multiplier = -MPC / (1 - MPC)**. The negative sign reflects the inverse relationship between taxes and aggregate demand. A tax cut increases AD while a tax hike decreases it. With an MPC of 0.8, the tax multiplier is -0.8 / 0.2 = **-4**. That $10 billion tax cut shifts AD right by $40 billion, compared to the $50 billion shift from equivalent direct spending.

The gap between the two multipliers is always exactly 1 in absolute value, regardless of the MPC. Spending multiplier minus tax multiplier always equals 1. This mathematical fact emerges from the initial-round leakage: government spending injects 100% of each dollar immediately while tax cuts lose the savings fraction before any spending occurs. That first-round difference of (1 - MPC) times the policy amount accounts for the entire gap.`,
    },
    {
      heading: "Crowding Out",
      content: `Deficit-financed stimulus carries a complication that the simple multiplier math ignores. When Congress spends more than it collects in taxes, the Treasury must sell bonds to cover the shortfall. Those bonds compete for the same pool of loanable funds that businesses want to tap for factory expansions, that developers need for housing projects, that consumers rely on for auto loans and mortgages. More borrowers chasing a finite supply of savings drives up **interest rates** across the economy.

Higher rates make capital investment more expensive. A manufacturing firm that would have built a new plant at 4% interest might shelve the project at 7%. A real estate developer cancels a condominium project. A family decides the monthly payment on a new car is no longer affordable. Private investment falls, partially offsetting the boost from government spending. This is the **crowding-out effect**, and it means the realized shift in aggregate demand is smaller than what the textbook multiplier predicts.

The severity of crowding out depends heavily on context. During the depths of the 2008 financial crisis, private investment demand had already collapsed. Interest rates sat near zero. There was very little private borrowing to displace, so government spending faced minimal crowding out. Contrast that with an economy at full employment where firms are actively competing for every available dollar of savings. In that environment, government borrowing can push rates up substantially and squeeze private investment hard. Full crowding out, where every government dollar displaces exactly one private dollar, represents the theoretical extreme. Partial crowding out is the norm in practice.`,
    },
    {
      heading: "Automatic Stabilizers",
      content: `Congress is slow. Passing a major spending bill requires committee hearings, floor debates, conference negotiations between the House and Senate, and a presidential signature. The American Recovery and Reinvestment Act of 2009 was considered fast by legislative standards, and it still took nearly two months from inauguration to signing. By the time relief money flows into the economy, the recession may have deepened or, in some cases, already ended. **Automatic stabilizers** bypass this political friction because they activate without any new legislation.

The U.S. has a **progressive income tax** system. When a worker loses her job or gets her hours cut, her taxable income drops and she falls into a lower bracket, owing less to the IRS automatically. Her disposable income does not collapse as steeply as her gross income did. During expansions, rising incomes push taxpayers into higher brackets, siphoning off purchasing power and acting as a natural brake on aggregate demand.

**Unemployment insurance** works the other side. When the economy contracts, more workers qualify for benefits without Congress lifting a finger. Unemployment claims surged from 211,000 per week in February 2020 to 6.9 million per week by late March. Those checks went overwhelmingly to people who would spend every dollar, cushioning the collapse in consumption. Safety net programs like SNAP follow similar logic, expanding enrollment automatically as incomes fall.

Automatic stabilizers dampen the business cycle's swings. They do not end deep recessions on their own. They are shock absorbers, not engines.`,
    },
    {
      heading: "Budget Deficits and the National Debt",
      content: `In fiscal year 2020, the federal government spent approximately $6.55 trillion and collected about $3.42 trillion in revenue. That $3.13 trillion gap was a **budget deficit**, the largest in U.S. history measured in raw dollars, though as a share of GDP the World War II deficits of 1943-1945 were proportionally larger. The Treasury covered the shortfall by selling bonds, notes, and bills to pension funds, foreign central banks, individual savers, commercial banks, and the Federal Reserve itself.

Stack every deficit the government has ever run, subtract the occasional surplus (1998 through 2001 being the most recent stretch), and you arrive at the **national debt**. A deficit is a flow: how much red ink accumulates in a single fiscal year. The debt is a stock: the total pile of outstanding IOUs at any given moment.

In theory, the budget should roughly balance over a full business cycle, running deficits during recessions to support demand and surpluses during booms to rebuild fiscal capacity. In practice, surpluses are extraordinarily rare because cutting spending and raising taxes is politically toxic regardless of the economic backdrop. Deficits have persisted even during the long expansion of 2010-2019.

Whether elevated debt poses a genuine economic threat remains one of the sharpest divides in the profession. Critics point to rising interest payments consuming an ever-larger share of the federal budget, the likelihood that future taxes must increase to service obligations, and the risk that creditors eventually demand higher yields. Defenders note that a sovereign government borrowing in its own currency can always make nominal payments, that the meaningful metric is **debt-to-GDP ratio** rather than the raw dollar figure, and that Japan has carried debt exceeding 250% of GDP for years while still borrowing at rock-bottom rates.`,
    },
    {
      heading: "Fiscal Policy and the Phillips Curve",
      content: `Every aggregate demand shift from fiscal policy has a mirror image on the **Phillips Curve**. When Congress runs expansionary fiscal policy by increasing government spending or cutting taxes, AD shifts right. Real GDP climbs, unemployment falls, and the price level rises. Translate that onto the short-run Phillips Curve: the economy slides up and to the left, trading lower unemployment for higher inflation.

Contractionary fiscal policy traces the opposite path. Spending cuts or tax increases shift AD left, cool the economy, and push the economy down and to the right along the short-run Phillips Curve. Unemployment rises. Inflation eases.

That trade-off holds in the short run. But there is a boundary. If the government keeps injecting stimulus after the economy has returned to full employment, workers and firms begin adjusting their inflation expectations upward. The short-run Phillips Curve itself shifts up. Unemployment eventually drifts back to the **natural rate**, but the economy arrives there with a permanently higher baseline of inflation. The long-run Phillips Curve captures this reality: a vertical line at the natural rate of unemployment, just as the LRAS curve is vertical at potential output. Fiscal policy can move the economy along the short-run curve but cannot hold unemployment below the natural rate indefinitely without accelerating inflation.

Connecting the graphs matters on the AP exam. An expansionary fiscal policy question should trigger three linked pictures in your mind: the AD/AS diagram (AD shifts right, output rises, price level rises), the money market (higher income raises money demand, pushing interest rates up), and the Phillips Curve (unemployment falls, inflation rises). Tracing those connections cleanly across all three models is where exam scores separate.`,
    },
    {
      heading: "Worked Example",
      content: `Congress is debating two proposals to fight a recession. The MPC is 0.75.

**Option A: spend $20 billion on infrastructure.** The spending multiplier is 1 / (1 - 0.75) = 1 / 0.25 = **4**. The full $20 billion enters the economy on day one. Construction workers spend 75% of their income ($15 billion), the recipients of that spending do the same ($11.25 billion), and the chain continues until the rounds converge. Total AD shift: $20 billion x 4 = **$80 billion**.

**Option B: cut taxes by $20 billion.** The tax multiplier is -0.75 / 0.25 = **-3**. Households receive the $20 billion in relief but save 25% upfront, which is $5 billion. Only $15 billion enters the first spending round. The chain: $15 billion, then $11.25 billion, then $8.44 billion, and so on. Total AD shift: $20 billion x 3 = **$60 billion**.

Spending wins by $20 billion in total AD impact. On an AD/AS graph, both proposals shift AD to the right, but the spending option shifts it further. The multiplier gap is always exactly 1 (spending multiplier of 4 versus tax multiplier of 3) for any MPC value.

Both policies raise real GDP and the price level as the economy moves up along the SRAS curve. The practical policy question reduces to this: how much aggregate demand shift does Congress want per dollar of fiscal commitment?`,
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
      "Spending multiplier = 1 / (1 - 0.75) = 1 / 0.25 = 4. Each government dollar generates $4 in total GDP as it circulates through successive spending rounds. Option A (3) is the absolute value of the tax multiplier for this MPC, calculated as 0.75/0.25. Confusing the two formulas is an extremely frequent error on the AP exam. Option C (5) would require an MPC of 0.8, not 0.75. Option D treats the MPC itself as the multiplier, but the MPC is an input to the formula, not the output.",
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
      "Multiplier = 1 / (1 - 0.8) = 5. Total AD shift = $50B x 5 = $250 billion. The $50B cascades through the economy: recipients spend $40B, those recipients spend $32B, and so on until the geometric series converges to $250B. Option A ignores the multiplier entirely, treating the initial injection as the final answer, which would only be correct if nobody re-spent any of the money. Option B applies a multiplier of 4, which is the tax multiplier for this MPC. Option D just calculates $50B x 0.8, the second spending round alone.",
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
      "Government purchases enter the economy at full force: every dollar gets spent immediately because the government is buying something and someone receives payment. A tax cut puts money in households' pockets, but they save a fraction (1 - MPC) before spending anything. That initial savings leakage means fewer dollars enter the multiplier chain in the first round. The gap between the two multipliers is always exactly 1 in absolute value, regardless of the MPC. Option A confuses a political decision (how large each policy is) with the mathematical relationship between the multipliers. The gap persists even when both policies are the same dollar amount. Option C describes a consequence of tax cuts rather than the mechanism behind the weaker multiplier. Option D is wrong because tax changes clearly affect AD through consumption; the tax multiplier is smaller than the spending multiplier, but it is not zero.",
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
      "A recessionary gap means real GDP sits below potential and unemployment exceeds the natural rate. Closing that gap requires shifting AD right, which means increasing G, cutting T, or both. Congress followed exactly this playbook with the 2009 ARRA and the 2020 CARES Act. Option A is contractionary fiscal policy, which would widen the recessionary gap. That prescription fits an inflationary gap, not a recession. Option C would produce only a modest net rightward shift because the balanced-budget multiplier equals 1, far weaker than the strong stimulus a deep recession demands. Option D misreads the question. Automatic stabilizers are not discretionary by definition. The question explicitly asks about deliberate legislative action.",
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
      "The chain: government borrows to fund spending, demand for loanable funds rises, real interest rates climb, businesses face steeper borrowing costs, and private investment (I) contracts. That drop in I partially offsets the increase in G, so the net AD shift is smaller than the simple multiplier formula would suggest. Option A misidentifies the channel. Crowding out operates through interest rates in the loanable funds market, not through consumer sentiment. Option C describes automatic stabilizers, an entirely separate concept. Option D describes a deliberate Fed decision that could coincidentally happen at the same time, but crowding out occurs through the loanable funds market regardless of whether the Fed acts.",
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
      "The defining characteristic: automatic stabilizers operate without Congress passing new legislation. Progressive income taxes qualify because when incomes fall during a downturn, taxpayers drop into lower brackets automatically, keeping more of their paychecks. During expansions, rising incomes push people into higher brackets, pulling purchasing power out of the economy without any legislative vote. Option A requires an act of Congress, making it discretionary fiscal policy by definition. Option B is monetary policy, not fiscal policy. Option D is the trickiest wrong answer. Stimulus checks do stabilize the economy, but they require specific legislation to authorize. The word \"automatic\" means the mechanism is already embedded in existing law and activates on its own.",
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
      "Work each piece separately. Spending multiplier = 1/0.2 = 5, so the $20B spending increase shifts AD right by $100B. Tax multiplier = 0.8/0.2 = 4, so the $20B tax hike shifts AD left by $80B. Net: $100B - $80B = $20B rightward. This result is the balanced-budget multiplier, which always equals exactly 1 regardless of the MPC. Option A is the most frequent mistake. Equal-dollar changes in spending and taxes do not cancel because the spending multiplier always exceeds the tax multiplier by 1, so a net rightward shift survives. Option C counts only the spending side and ignores the contractionary drag from the tax increase. Option D gets the direction wrong; the net shift is rightward because spending packs more punch per dollar than taxation.",
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
      "Every year the government runs a deficit, it issues new Treasury securities to cover the gap, and those obligations pile onto the existing stock of debt. The U.S. has run deficits in all but four years since 1970. The debt has grown accordingly. Option A reverses the relationship. Only surpluses reduce the debt; deficits add to it. Option C confuses fiscal and monetary policy. The money supply is controlled by the Fed, not by the size of the budget deficit. Option D imagines a self-correcting mechanism that does not exist. A deficit does not automatically produce a surplus the next year. That would require deliberate policy changes or an economic boom that lifts tax revenue sharply.",
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
      "With a spending multiplier of 10, the government needs only $45B / 10 = $4.5 billion in new spending to generate a $45 billion AD shift. Compare that to Option D: a $5 billion tax cut generates $5B x 9 = $45 billion in AD expansion, which also closes the gap but costs more in fiscal resources. Option A ($45 billion in spending) overshoots massively, producing $450 billion of AD expansion. Option B ($45 billion in tax cuts) produces $405 billion, another enormous overshoot. Government spending is always more efficient per dollar than tax cuts because it injects the full amount immediately rather than losing a fraction to first-round savings.",
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
      "At MPC = 0.6: spending multiplier = 1/0.4 = 2.5, tax multiplier = -0.6/0.4 = -1.5, gap = 1. At MPC = 0.8: spending multiplier = 1/0.2 = 5, tax multiplier = -0.8/0.2 = -4, gap = 1. A higher MPC means each dollar circulates through more spending rounds, so both multipliers grow. The gap stays at exactly 1 because the formula 1/(1-MPC) minus MPC/(1-MPC) always simplifies to 1. Option A incorrectly claims the gap changes. Option C is wrong because the tax multiplier increases in absolute value alongside the spending multiplier. Option D reverses the direction entirely; higher MPC produces larger multipliers, not smaller ones.",
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
      "The balanced-budget multiplier equals 1 regardless of the MPC. Spending effect: $30B x 5 = $150B rightward. Tax effect: $30B x 4 = $120B leftward. Net: $150B - $120B = $30B. You can also compute it directly: $30B x 1 = $30B. Option A is the classic error. Students assume that equal-dollar changes in opposite directions cancel out, but because the spending multiplier is always one unit larger, a net expansion survives. Option C accounts only for the spending effect. Option D accounts only for the tax effect.",
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
      "Crowding out is the standard explanation for why actual fiscal multiplier effects fall short of the theoretical prediction when spending is deficit-financed. Heavy government borrowing pushes up demand in the loanable funds market, raising interest rates and discouraging private investment. The $150 billion shortfall represents private investment that was displaced. Option A is logically possible, but the question states MPC = 0.8 as a given parameter, so the shortfall must come from another source. Option C describes an automatic stabilizer mechanism that moderates cycles generally but does not specifically explain the gap between a predicted multiplier effect and the actual outcome of a deficit-financed package. Option D describes a separate, deliberate policy choice by the Fed that could reduce AD, but the question asks for the most likely explanation specific to deficit-financed spending.",
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
      "Recognition lag: economic data arrives with a delay, so identifying a recession or inflationary gap takes time. Legislative lag: Congress must debate, negotiate, and vote, a process that consumed weeks even for the fast-tracked CARES Act and months for the 2009 ARRA. Implementation lag: once signed into law, spending and tax changes take time to flow through the economy and generate multiplier effects. These three lags combined mean fiscal policy frequently arrives too late and may even destabilize the economy if conditions have shifted by the time the policy takes effect. Option B invents categories that do not exist in the standard framework. Option C mislabels the lags by confusing them with macroeconomic time horizons. Option D incorrectly suggests the lags can be eliminated; legislative and implementation lags are structural features of democratic governance and economic adjustment.",
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
      "An inflationary gap means real GDP exceeds potential, so the economy needs AD to shift left. Cutting government spending directly reduces the G component. Raising taxes reduces disposable income and thus consumption (C). Both push AD leftward, closing the gap. Option A is expansionary, which would widen the inflationary gap by shifting AD further right. Option C sounds contractionary on both sides, but equal increases in G and T still produce a net expansionary effect because the balanced-budget multiplier is 1, exactly the opposite of what an inflationary gap requires. Option D is internally contradictory: cutting taxes is expansionary while reducing transfer payments is contractionary, and neither combination is the standard prescription for an inflationary gap.",
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
      "When the federal funds rate hits zero, the Fed cannot cut further. Fiscal policy becomes essential because government spending directly injects demand without relying on the interest rate transmission mechanism. The primary risk of large-scale deficit spending is crowding out, though during the 2008 crisis this risk was likely minimal. Private demand for loanable funds had collapsed, so government borrowing faced little competition for savings. Option A overstates unconventional monetary policy. Quantitative easing helped but encountered diminishing returns and transmission problems that limited its effectiveness. Option C misidentifies fiscal stimulus as a supply-side tool; government spending shifts AD, not long-run aggregate supply. Option D contradicts the premise of the question. Automatic stabilizers moderated the downturn but were far too small to close the massive recessionary gap the financial crisis created.",
  },
];
