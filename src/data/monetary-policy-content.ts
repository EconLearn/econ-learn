import type { PracticeQuestion } from "@/data/supply-demand-content";

export const monetaryPolicyContent = {
  title: "Monetary Policy",
  subtitle: "How the Federal Reserve uses the money supply to influence interest rates, investment, and aggregate demand",
  sections: [
    {
      heading: "The Money Market Model",
      content: `Why hold cash in a wallet when a savings account pays interest? The opportunity cost of holding money is the interest you forfeit, and that tradeoff is what the money market model captures.

The graph puts the **nominal interest rate** on the vertical axis and the quantity of money on the horizontal. The **money supply (MS)** curve is near-vertical because the Federal Reserve decides how much money exists, and market interest rates do not alter that decision. The **money demand (MD)** curve slopes downward: when rates are high, holding cash is expensive (you sacrifice bond returns), so people hold less of it. When rates are low, cash is cheap to hold.

Where MS crosses MD, you get the equilibrium interest rate. If the market rate sits above equilibrium, people hold more money than they want. They buy bonds, bond prices rise, and rates fall back. Below equilibrium, the opposite pressure pushes rates up.`,
    },
    {
      heading: "The Federal Reserve's Tools",
      content: `The Fed shifts the MS curve using three tools, each targeting bank reserves from a different angle.

**Open market operations (OMOs)** are the primary instrument. The Fed buys government bonds from banks, credits their reserve accounts with fresh money, and banks lend out the excess. Through the money multiplier, a single bond purchase ripples into a much larger expansion of the money supply. Selling bonds reverses the process, draining reserves and contracting the supply. During 2020, the Fed purchased over $80 billion in Treasuries per month to flood the banking system with liquidity.

**The discount rate** is what the Fed charges commercial banks for short-term emergency loans. A lower rate makes it cheaper for banks to borrow reserves, fueling lending. A higher rate discourages it.

**The reserve requirement** sets the fraction of deposits banks must hold back rather than lend out. Lowering it frees deposits for lending and raises the money multiplier. Raising it locks up reserves and constrains lending capacity. The Fed dropped the reserve requirement to zero in March 2020, a historic shift.`,
    },
    {
      heading: "The Federal Funds Rate",
      content: `Every six weeks, markets focus on one number: the **federal funds rate**, the interest rate banks charge each other for overnight loans of reserves. It is the Fed's primary policy target.

A common misconception: the Fed does not set this rate by decree. It uses open market operations to shift the money supply until the equilibrium interest rate in the money market matches the target. When the FOMC announced an emergency rate cut to near-zero in March 2020, the open market desk started buying massive quantities of bonds to push the actual rate down.

One overnight rate between banks might sound inconsequential, but it sets the floor for the entire credit market. When the federal funds rate moves, banks adjust prime lending rates, which reprices mortgages, auto loans, corporate debt, and credit cards. A decision in a Washington boardroom reaches a family financing a home in Ohio within weeks.`,
    },
    {
      heading: "Expansionary Monetary Policy",
      content: `The U.S. economy in early 2020: GDP collapsing, unemployment spiking, a textbook **recessionary gap** with real GDP far below potential. The Fed's response was expansionary policy, or "easy money."

The chain of events:
1. The Fed buys bonds (or cuts the discount rate or reserve requirement)
2. Money supply increases, MS shifts right
3. Equilibrium interest rate falls
4. Cheaper borrowing encourages firms to invest and households to spend
5. Investment (I) and interest-sensitive consumption rise
6. Aggregate demand shifts right, closing the output gap

On the money market graph, MS shifts right and the interest rate drops. That lower rate is the bridge connecting the money market to the real economy. Without it, expanding the money supply accomplishes nothing.`,
    },
    {
      heading: "Contractionary Monetary Policy",
      content: `By mid-2022, U.S. inflation had hit 9.1%, the highest in four decades. Real GDP exceeded potential and prices were climbing fast, a clear **inflationary gap**. The Fed pivoted to contractionary policy, or "tight money," and the transmission mechanism ran in reverse:

1. The Fed sells bonds (or raises the discount rate or reserve requirement)
2. Money supply decreases, MS shifts left
3. Equilibrium interest rate rises
4. Borrowing becomes more expensive for firms and households
5. Investment and interest-sensitive consumption fall
6. Aggregate demand shifts left, easing price pressure

The Fed under Jerome Powell raised the federal funds rate from near-zero to over 5% between March 2022 and July 2023. That was the fastest tightening cycle in decades, executed precisely through this mechanism.`,
    },
    {
      heading: "The Transmission Mechanism",
      content: `What connects a Fed bond purchase to a family buying a house or a factory expanding production? The **transmission mechanism** traces every link, and AP free-response questions test whether you can walk through it.

The full chain: **Fed action -> money supply -> interest rate -> investment -> aggregate demand -> real GDP and price level.**

Weak links can break the chain. If money demand is nearly flat (highly elastic), even a big shift in money supply barely moves the interest rate. If businesses are deeply pessimistic, as in 2009, rock-bottom rates still will not spur borrowing. This asymmetry explains why monetary policy tends to be more effective at cooling an overheating economy than at reviving a depressed one. Paul Volcker proved the first half in 1980-82 by crushing inflation with punishing rates. The Fed's struggle to spark recovery after 2008 demonstrated the second.

Two graphs capture the full story. The money market graph covers the first three links (Fed action through interest rate). The AD/AS model picks up the rest (investment through GDP and prices).`,
    },
    {
      heading: "Monetary Policy and the Phillips Curve",
      content: `The Phillips Curve is the inflation-unemployment mirror of everything the Fed does. When the Fed runs expansionary policy (buying bonds, lowering rates), AD shifts right. Output rises, unemployment drops, and inflation creeps up. On the **short-run Phillips Curve**, the economy moves up and to the left.

When Chair Volcker crushed inflation in the early 1980s with brutal rate hikes, the economy moved the other direction: AD shifted left, unemployment soared past 10%, and inflation collapsed from double digits to under 4%. On the Phillips Curve: down and to the right. The cost of killing inflation was a severe recession.

Powell's 2022-2023 tightening cycle traced the same path. The Fed raised rates from near-zero to over 5%, and the Phillips Curve predicted the outcome: inflation fell from 9.1% toward 3%, while unemployment initially stayed low before showing signs of cooling.

The critical insight: the **long-run Phillips Curve is vertical** at the natural rate of unemployment, just as LRAS is vertical at full-employment output. Monetary policy can shift the economy along the short-run curve but cannot permanently push unemployment below the natural rate. Attempting to do so only results in higher expected inflation, which shifts the SRPC itself upward.

For the AP exam: every monetary policy free-response question benefits from connecting to the Phillips Curve. The Fed buys bonds → interest rates fall → AD shifts right → on the Phillips Curve, the economy moves to lower unemployment and higher inflation. Draw it.`,
    },
    {
      heading: "Worked Example",
      content: `The Fed buys $100 million in government bonds on the open market.

**Money multiplier.** Reserve requirement is 10%, so the multiplier = 1 / 0.10 = 10. That $100 million reserve injection can support up to $1 billion in new money supply as banks lend, deposits get re-deposited, and the cycle repeats.

**Money market graph.** MS shifts right by $1 billion. Money demand is unchanged, so the equilibrium interest rate falls. How far depends on the slope of MD: a steeper curve means a bigger rate swing, a flatter one means a smaller swing.

**Real economy.** Lower interest rates reduce borrowing costs. Investment spending picks up. Aggregate demand shifts right, real GDP rises, and the price level increases. The recessionary gap narrows.

End to end: Fed buys bonds -> reserves rise -> money supply expands by the multiplied amount -> interest rate falls -> investment rises -> AD shifts right -> GDP rises. The AP exam can ask you to identify any single step in this sequence, so practice tracing it in both directions.`,
    },
  ],
};

export const monetaryPolicyQuestions: PracticeQuestion[] = [
  {
    id: "mp-1",
    question: "Why is the money supply curve nearly vertical in the money market graph?",
    options: [
      "Because the money supply responds strongly to interest rate changes",
      "Because the Federal Reserve controls the quantity of money regardless of the interest rate",
      "Because banks always lend out all their reserves",
      "Because the money multiplier is always equal to one",
    ],
    correctIndex: 1,
    explanation: "The Fed decides how much money exists — interest rates do not change that decision. A vertical curve means the quantity on the horizontal axis stays fixed regardless of the price on the vertical axis. Option A gets this backward: a vertical MS curve means money supply does not respond to interest rate changes. Option C is wrong because banks hold reserves and do not lend everything. Option D is wrong because the money multiplier depends on the reserve requirement and is typically well above one.",
  },
  {
    id: "mp-2",
    question: "When the Fed conducts open market purchases of government bonds, what happens in the money market?",
    options: [
      "Money demand shifts right, raising the interest rate",
      "Money supply shifts left, raising the interest rate",
      "Money supply shifts right, lowering the interest rate",
      "Money demand shifts left, lowering the interest rate",
    ],
    correctIndex: 2,
    explanation: "When the Fed buys bonds, it pays banks with newly created reserves. Banks lend those reserves out, the money multiplier kicks in, and MS shifts right. More money in circulation at the same demand level pushes the equilibrium interest rate down. Option A is wrong because OMOs shift supply, not demand — money demand depends on income and price levels. Option B reverses the direction: buying bonds increases MS (shifts right), not decreases it. Option D confuses which curve moves — OMOs act on supply, not demand.",
  },
  {
    id: "mp-3",
    question: "The transmission mechanism of expansionary monetary policy follows which sequence?",
    options: [
      "Tax cuts → consumption → AD shifts right → GDP rises",
      "Fed buys bonds → MS increases → interest rate falls → investment rises → AD shifts right",
      "Government spending increases → AD shifts right → price level rises",
      "Fed sells bonds → MS decreases → interest rate rises → investment falls → AD shifts left",
    ],
    correctIndex: 1,
    explanation: "Expansionary = the Fed buys bonds, MS rises, interest rates fall, investment picks up, AD shifts right. That sequence matches option B. Option A describes fiscal policy — tax cuts are a congressional tool, not a Fed tool. Option C also describes fiscal policy (government spending). Option D traces the correct monetary mechanism but in the contractionary direction: selling bonds, shrinking MS, raising rates. Right steps, wrong policy label.",
  },
  {
    id: "mp-4",
    question: "If the Federal Reserve raises the reserve requirement, the most likely effect is:",
    options: [
      "The money supply increases and interest rates fall",
      "The money demand curve shifts left",
      "The money supply decreases and interest rates rise",
      "The federal funds rate falls to zero",
    ],
    correctIndex: 2,
    explanation: "Raising the reserve requirement locks up a larger share of bank deposits, shrinking the money multiplier and contracting the money supply. MS shifts left, and the equilibrium interest rate rises. Option A has the direction completely backward — raising requirements restricts lending, it does not expand it. Option B is wrong because reserve requirements affect the supply side, not money demand. Option D has no logical basis — raising requirements is contractionary and pushes rates up, not to zero.",
  },
  {
    id: "mp-5",
    question: "An increase in money demand, with no change in money supply, would result in:",
    options: [
      "A higher equilibrium interest rate and the same quantity of money",
      "A lower equilibrium interest rate and a larger quantity of money",
      "No change in the interest rate",
      "A higher equilibrium interest rate and a larger quantity of money",
    ],
    correctIndex: 0,
    explanation: "Think about what a near-vertical MS curve means: the quantity of money barely budges no matter what happens to demand. So when MD shifts right, the intersection slides up the near-vertical MS — the interest rate rises, but the quantity of money stays roughly the same. Option D is the most common trap because it correctly identifies a higher rate but incorrectly claims a larger quantity of money. Option B reverses both effects. Option C ignores the shift entirely.",
  },
  {
    id: "mp-6",
    question: "The federal funds rate is best described as:",
    options: [
      "The interest rate the government pays on Treasury bonds",
      "The rate the Fed charges banks for discount window loans",
      "The interest rate banks charge each other for overnight loans of reserves",
      "The rate consumers pay on mortgage loans",
    ],
    correctIndex: 2,
    explanation: "The federal funds rate is bank-to-bank: one bank lends overnight reserves to another at this rate. The Fed targets it by adjusting the money supply through OMOs. Option B is the classic mix-up — that describes the discount rate (Fed lending to banks), not the federal funds rate (banks lending to each other). Option A describes the Treasury bond yield, which is what the government pays investors. Option D describes a retail consumer rate that is influenced by the federal funds rate but is not the rate itself.",
  },
  {
    id: "mp-7",
    question: "Contractionary monetary policy is most appropriate when the economy is experiencing:",
    options: [
      "A recessionary gap with high unemployment",
      "An inflationary gap with rising price levels",
      "Long-run equilibrium with stable prices",
      "A decrease in aggregate supply",
    ],
    correctIndex: 1,
    explanation: "Contractionary policy — selling bonds, raising the discount rate, or increasing reserve requirements — is designed to slow spending and cool prices. That matches an inflationary gap where real GDP exceeds potential. Think of the Fed's aggressive rate hikes in 2022-2023 to fight 9% inflation. Option A describes the opposite situation: a recessionary gap calls for expansionary policy, not tightening. Option C describes an economy already at equilibrium with no need for intervention. Option D describes a supply-side problem that contractionary demand policy would only worsen.",
  },
  {
    id: "mp-8",
    question: "Monetary policy may be less effective at stimulating a depressed economy because:",
    options: [
      "The Fed cannot increase the money supply",
      "Banks may not increase lending and firms may not borrow even at low interest rates",
      "Lower interest rates always cause inflation",
      "The money demand curve becomes vertical during recessions",
    ],
    correctIndex: 1,
    explanation: "This is the \"pushing on a string\" problem. After 2008, the Fed slashed rates to near-zero, but banks sat on excess reserves and businesses saw no reason to borrow — the economy was too weak for investment to look profitable. The transmission mechanism breaks at the investment link. Option A is wrong because the Fed can always buy bonds and expand the money supply; the bottleneck is private-sector willingness to borrow and spend. Option C is wrong because low rates do not automatically cause inflation, especially in a depressed economy. Option D is wrong because there is no mechanism that makes money demand vertical during recessions.",
  },
  {
    id: "mp-9",
    question: "The reserve requirement is 20%. If the Fed purchases $50 million in government bonds on the open market, what is the maximum potential increase in the money supply?",
    options: [
      "$50 million",
      "$100 million",
      "$250 million",
      "$500 million",
    ],
    correctIndex: 2,
    explanation: "The money multiplier equals 1 / reserve requirement = 1 / 0.20 = 5. Multiply the initial injection by the multiplier: $50 million x 5 = $250 million maximum potential increase. Option A ignores the multiplier entirely and counts only the initial reserve injection. Option B uses a multiplier of 2, which would correspond to a 50% reserve requirement. Option D uses a multiplier of 10, which would correspond to a 10% reserve requirement — a common mistake when students default to the textbook 10% example instead of using the given 20%.",
  },
  {
    id: "mp-10",
    question: "According to the quantity theory of money (MV = PY), if the velocity of money is constant and real output is at full employment, an increase in the money supply will primarily lead to:",
    options: [
      "An increase in real GDP",
      "A proportional increase in the price level",
      "A decrease in the velocity of money",
      "An increase in unemployment",
    ],
    correctIndex: 1,
    explanation: "With V fixed and Y at full employment (also fixed in the long run), the equation MV = PY means any increase in M must translate into a proportional increase in P. Double the money supply, double the price level. Option A is wrong because real output Y cannot rise above full employment in the long run — more money chases the same goods, so prices rise instead. Option C contradicts the premise that velocity is constant. Option D has no logical connection — increasing the money supply does not cause unemployment; if anything, expansionary policy temporarily reduces it in the short run.",
  },
  {
    id: "mp-11",
    question: "The Fed lowers the federal funds rate target from 5% to 3%. Which of the following correctly describes the open market operation used and its immediate effect?",
    options: [
      "The Fed sells bonds, increasing bank reserves and shifting MS right",
      "The Fed buys bonds, decreasing bank reserves and shifting MS left",
      "The Fed buys bonds, increasing bank reserves and shifting MS right",
      "The Fed sells bonds, decreasing bank reserves and shifting MS left",
    ],
    correctIndex: 2,
    explanation: "To lower the federal funds rate, the Fed must increase the money supply. It does this by buying government bonds from banks, which credits their reserve accounts with new money. Those excess reserves get lent out, the money multiplier expands the supply further, and MS shifts right — pushing the equilibrium interest rate down to the new target. Option A correctly identifies a bond sale but misattributes the effect — selling bonds drains reserves. Option B gets the operation right (buying) but reverses the effect — purchases increase reserves, not decrease them. Option D describes contractionary policy, which would raise rates, the opposite of the stated goal.",
  },
  {
    id: "mp-12",
    question: "A liquidity trap occurs when:",
    options: [
      "The Fed raises interest rates too quickly, causing a credit crunch",
      "Nominal interest rates are near zero and further increases in the money supply fail to lower rates or stimulate spending",
      "Banks refuse to accept deposits from households",
      "The money demand curve becomes perfectly vertical",
    ],
    correctIndex: 1,
    explanation: "In a liquidity trap, nominal interest rates have hit their effective lower bound (near zero), and the money demand curve becomes nearly horizontal at that rate. People are indifferent between holding bonds and holding cash because bonds yield almost nothing. The Fed can keep buying bonds and expanding MS, but the interest rate barely budges, so the transmission mechanism to investment and AD breaks down. Japan experienced this throughout the 1990s and 2000s. Option A describes a different phenomenon — rapid tightening — not a trap at the zero bound. Option C is nonsensical; banks always accept deposits. Option D gets the slope wrong — in a liquidity trap, money demand is nearly horizontal (perfectly elastic), not vertical.",
  },
  {
    id: "mp-13",
    question: "Suppose the economy is in a recessionary gap and the Fed buys bonds. On the Phillips Curve, the economy will move:",
    options: [
      "Up and to the left along the short-run Phillips Curve (lower unemployment, higher inflation)",
      "Down and to the right along the short-run Phillips Curve (higher unemployment, lower inflation)",
      "The short-run Phillips Curve itself shifts upward",
      "There is no movement because monetary policy does not affect the Phillips Curve",
    ],
    correctIndex: 0,
    explanation: "The Fed buying bonds is expansionary: MS shifts right, interest rates fall, investment rises, AD shifts right, real GDP increases, and unemployment drops while the price level rises. On the short-run Phillips Curve, this is a movement up and to the left — the economy trades lower unemployment for higher inflation. Option B describes the effect of contractionary policy (selling bonds), which moves the economy in the opposite direction. Option C would occur if inflation expectations changed, but a single round of expansionary policy causes movement along the existing SRPC, not a shift of the curve itself. Option D is flatly wrong — monetary policy is one of the primary forces that moves the economy along the Phillips Curve.",
  },
  {
    id: "mp-14",
    question: "If the money demand curve is very steep (highly inelastic), a given increase in the money supply will:",
    options: [
      "Cause a relatively large decrease in the interest rate",
      "Cause a relatively small decrease in the interest rate",
      "Have no effect on the interest rate",
      "Shift the money demand curve to the right",
    ],
    correctIndex: 0,
    explanation: "A steep (inelastic) money demand curve means that people's desired money holdings are not very responsive to interest rate changes. When MS shifts right along a steep MD curve, the equilibrium point slides down sharply — producing a large drop in the interest rate. Graphically, the steeper the curve you're shifting along, the bigger the vertical change for any given horizontal shift. Option B confuses steep with flat — a flat (elastic) MD curve would produce a small rate change because people readily absorb extra money without needing much rate incentive. Option C would only occur if the MD curve were perfectly horizontal (liquidity trap). Option D is wrong because an open market purchase shifts MS, not MD — money demand depends on income and the price level, not on Fed operations.",
  },
  {
    id: "mp-15",
    question: "The Fed sells $200 million in government bonds. The reserve requirement is 10%. Assuming banks are fully loaned up and there is no excess reserve holding, what is the maximum change in the money supply?",
    options: [
      "Increase of $2 billion",
      "Decrease of $200 million",
      "Decrease of $2 billion",
      "Increase of $200 million",
    ],
    correctIndex: 2,
    explanation: "Selling bonds is contractionary — it drains $200 million in reserves from the banking system. With a 10% reserve requirement, the money multiplier is 1 / 0.10 = 10. The maximum contraction is $200 million x 10 = $2 billion decrease in the money supply. Option A gets the direction and magnitude reversed — selling bonds contracts the supply, it does not expand it. Option B applies the initial drain without the multiplier, ignoring the cascading effect as banks call in loans. Option D gets both the direction and the multiplier wrong — selling bonds does not increase the money supply at all.",
  },
];
