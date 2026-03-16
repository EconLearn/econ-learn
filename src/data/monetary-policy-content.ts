import type { PracticeQuestion } from "@/data/supply-demand-content";

export const monetaryPolicyContent = {
  title: "Monetary Policy",
  subtitle: "Inside the Federal Reserve's playbook: how bond purchases, interest rate targets, and reserve requirements ripple from bank vaults to factory floors",
  sections: [
    {
      heading: "The Money Market Model",
      content: `In September 2019, something strange happened in a corner of the financial system most Americans had never heard of. The overnight repurchase agreement market, where banks lend cash to each other using Treasury securities as collateral, seized up. The repo rate, normally hovering near the Fed's target of around 2%, spiked to 10% in a single morning. The New York Federal Reserve injected $75 billion in emergency liquidity before lunch. Within days, it committed to $100 billion in daily repo operations. The crisis lasted barely two weeks, but it exposed a fundamental truth about the financial system: the price of holding cash versus lending it out, which is the interest rate, can move violently when supply and demand for money fall out of balance. The money market model captures exactly this dynamic.

The graph puts the **nominal interest rate** on the vertical axis and the quantity of money on the horizontal axis. The **money supply (MS)** curve is near-vertical because the Federal Reserve determines how much money exists in the system, and that decision does not change based on where market interest rates happen to sit. The **money demand (MD)** curve slopes downward for an intuitive reason: when interest rates are high, holding cash is expensive because every idle dollar represents forgone bond returns, so people economize on their cash balances. When rates are low, cash is cheap to hold, and people keep more of it on hand.

Where MS crosses MD, the economy finds its equilibrium interest rate. If the market rate sits above that equilibrium, people discover they are holding more money than they actually want at that high opportunity cost. They buy bonds, bond prices rise, and yields (interest rates) fall back toward equilibrium. The reverse pressure operates below equilibrium, pushing rates up until the market clears.`,
    },
    {
      heading: "The Federal Reserve's Tools",
      content: `The Fed shifts the money supply curve using three primary instruments, each targeting bank reserves from a different angle. These tools have evolved over the decades, but their underlying logic has remained consistent since the Fed's founding in 1913.

**Open market operations (OMOs)** are the workhorse. When the Fed buys government bonds from banks, it credits their reserve accounts with freshly created money. Banks find themselves sitting on excess reserves and lend them out. Through the money multiplier, a single bond purchase ripples outward into a much larger expansion of the total money supply. Selling bonds reverses the flow, draining reserves from the banking system and contracting the supply. During the spring of 2020, the Fed was purchasing more than $80 billion in Treasuries per month alongside $40 billion in mortgage-backed securities, flooding the system with liquidity on a scale that dwarfed even the 2008-2009 quantitative easing programs.

**The discount rate** is the interest rate the Fed charges commercial banks for short-term emergency loans from the discount window. Lowering the discount rate makes it cheaper for banks to borrow reserves, which encourages lending to businesses and consumers. Raising it discourages banks from tapping the window. In practice, banks treat the discount window as a last resort because borrowing from it carries a stigma, signaling to regulators and competitors that the bank may be in trouble.

**The reserve requirement** historically dictated the fraction of customer deposits that banks had to hold back rather than lend. Lowering the requirement freed deposits for lending and raised the money multiplier. Raising it locked up reserves and constrained lending capacity. In March 2020, the Fed dropped the reserve requirement to zero for the first time in its history, a shift that remains in effect and has altered how the Fed manages reserves.`,
    },
    {
      heading: "The Federal Funds Rate",
      content: `Every six weeks, financial markets around the world fixate on a single number: the **federal funds rate**, the interest rate banks charge one another for overnight loans of excess reserves. It serves as the Fed's primary policy target, the lever through which the institution communicates its stance on the economy.

A persistent misconception is that the Federal Open Market Committee simply decrees this rate into existence. The FOMC announces a target range, but the Fed's trading desk at the New York Fed must then conduct open market operations to shift the money supply until the actual overnight rate in the interbank market matches the announced target. When the FOMC declared an emergency rate cut to near-zero on March 15, 2020, the open market desk immediately began purchasing massive quantities of Treasury securities and mortgage-backed bonds to push reserves into the system and drag the actual rate down.

One overnight lending rate between banks sounds like an obscure technical detail. It is anything but. The federal funds rate sets the floor for the entire credit market. When it moves, banks adjust the prime lending rate, which reprices mortgages, auto loans, corporate debt, and credit card interest. A decision made in the Federal Reserve's Eccles Building in Washington reaches a young couple financing their first home in suburban Ohio within weeks. That transmission from overnight interbank lending to household borrowing costs is what gives monetary policy its reach.`,
    },
    {
      heading: "Expansionary Monetary Policy",
      content: `By late March 2020, the U.S. economy had entered a textbook **recessionary gap**. GDP was collapsing at an annualized rate exceeding 30%, unemployment applications were arriving at state offices by the millions, and real output had fallen far below the economy's potential. The Federal Reserve's response was expansionary policy, often called "easy money," designed to lower borrowing costs and encourage private spending.

The transmission mechanism follows a specific chain. The Fed buys bonds on the open market, or alternatively cuts the discount rate or lowers the reserve requirement. Bank reserves rise, and the money supply increases, shifting MS to the right on the money market graph. The equilibrium interest rate falls as more money enters the system. Cheaper borrowing encourages firms to invest in factories, equipment, and hiring while households take on mortgages, car loans, and other interest-sensitive spending. Investment (I) and consumption rise. Aggregate demand shifts right, narrowing or closing the output gap.

On the money market graph, MS shifts rightward and the interest rate drops. That lower rate is the critical bridge connecting the Fed's actions in financial markets to real economic activity in factories, offices, and shopping centers. Expanding the money supply without a corresponding decrease in the interest rate accomplishes nothing for the real economy. The interest rate channel is everything.`,
    },
    {
      heading: "Contractionary Monetary Policy",
      content: `In June 2022, the Bureau of Labor Statistics reported that the Consumer Price Index had risen 9.1% over the prior twelve months, the steepest annual increase since November 1981. Real GDP was running above potential output, employers were competing fiercely for scarce workers, and prices for groceries, gasoline, and rent were climbing at a pace that eroded household purchasing power month by month. A clear **inflationary gap** had opened. The Federal Reserve, under Chair Jerome Powell, pivoted to contractionary policy, sometimes called "tight money," and the transmission mechanism ran in reverse.

The Fed sells bonds on the open market, or raises the discount rate, or increases the reserve requirement. Bank reserves contract. The money supply shrinks, shifting MS to the left. The equilibrium interest rate rises. Borrowing becomes more expensive for firms considering capital investments and for households weighing large purchases. Investment and interest-sensitive consumption decline. Aggregate demand shifts left, easing upward pressure on prices.

Between March 2022 and July 2023, the FOMC raised the federal funds rate from near-zero to a target range of 5.25%-5.50%. That represented the fastest tightening cycle in four decades. Mortgage rates climbed above 7%, auto loan rates pushed past 8%, and corporate borrowing costs rose sharply. The mechanism worked precisely as the model predicts, squeezing demand by making credit expensive.`,
    },
    {
      heading: "The Transmission Mechanism",
      content: `What actually connects a bond purchase at the New York Fed's trading desk to a family signing a mortgage in Phoenix or a manufacturer breaking ground on a new assembly line in Tennessee? The **transmission mechanism** traces every link in that chain, and AP free-response questions frequently require students to walk through it step by step.

The full sequence: **Fed action leads to a change in the money supply, which changes the interest rate, which changes investment spending, which shifts aggregate demand, which changes real GDP and the price level.** Each link depends on the one before it. Break any single link and the policy fails to reach the real economy.

Weak links exist. If money demand is nearly flat, meaning highly elastic, even a large rightward shift in MS barely moves the interest rate. If businesses are deeply pessimistic about future demand, rock-bottom rates still will not convince them to borrow and build, as was the case through much of 2009 and 2010. This asymmetry explains why monetary policy tends to be more effective at cooling an overheating economy than at reviving a depressed one. Paul Volcker demonstrated the first half of that proposition in 1980-82, when he crushed double-digit inflation by pushing the federal funds rate above 20% and accepting a brutal recession as the cost. The Fed's struggle to spark recovery after the 2008 financial crisis demonstrated the second half.

Two graphs capture the full story. The money market diagram covers the first three links, from Fed action through the interest rate change. The AD/AS model picks up the remaining links, from the investment response through the change in GDP and prices.`,
    },
    {
      heading: "Monetary Policy and the Phillips Curve",
      content: `The Phillips Curve is the inflation-unemployment mirror of everything the Federal Reserve does. When the Fed runs expansionary policy by buying bonds and lowering rates, aggregate demand shifts right, output increases, unemployment drops, and inflation rises. On the **short-run Phillips Curve**, the economy moves up and to the left, trading lower unemployment for higher inflation.

When Chair Volcker crushed inflation in the early 1980s with punishing rate hikes, the economy traced the opposite path. AD shifted left, unemployment soared past 10% by the end of 1982, and inflation collapsed from double digits to under 4% by 1983. On the Phillips Curve, the movement was down and to the right. The cost of killing inflation was a severe recession that devastated manufacturing communities across the Midwest and industrial Northeast.

Powell's 2022-2023 tightening cycle followed the same directional logic. The federal funds rate climbed from near-zero to above 5%, and the Phillips Curve predicted what came next: inflation fell from the 9.1% peak toward 3%, while unemployment initially stayed remarkably low before gradually showing signs of cooling in certain sectors like technology and commercial real estate.

The **long-run Phillips Curve is vertical** at the natural rate of unemployment, mirroring the vertical LRAS at full-employment output. Monetary policy can move the economy along the short-run Phillips Curve but cannot permanently push unemployment below the natural rate. Any attempt to do so merely shifts the SRPC itself upward as workers and firms incorporate higher expected inflation into their wage and price decisions. Unemployment eventually returns to the natural rate, but inflation settles at a permanently higher level.

Connecting the monetary policy chain to the Phillips Curve on AP free-response questions separates strong answers from mediocre ones. The Fed buys bonds, interest rates fall, AD shifts right, and the Phillips Curve registers lower unemployment and higher inflation. The ability to trace that full sequence across multiple graphs is where the points are.`,
    },
    {
      heading: "Worked Example",
      content: `The Fed purchases $100 million in government bonds on the open market. The reserve requirement is 10%. Trace the full chain.

**Money multiplier.** With a 10% reserve requirement, the multiplier is 1 / 0.10 = 10. That initial $100 million reserve injection can support up to $1 billion in new money supply as banks lend their excess reserves, those loans get deposited in other banks, those banks lend again, and the cycle continues until reserves are fully committed.

**Money market graph.** MS shifts rightward by $1 billion. Money demand has not changed because income and the price level have not yet adjusted. The equilibrium interest rate falls. The magnitude of that decline depends on the slope of the MD curve. A steeper money demand curve produces a larger swing in the interest rate. A flatter curve produces a smaller one.

**Real economy.** Lower interest rates reduce the cost of borrowing for firms and households. Investment spending picks up as projects that were marginally unprofitable at higher rates become viable. Aggregate demand shifts right, real GDP rises, and the price level increases along the SRAS curve. The recessionary gap narrows.

End to end: Fed buys bonds, bank reserves rise, money supply expands by the multiplied amount, the interest rate falls, investment rises, AD shifts right, and GDP increases. The AP exam can ask about any single step in this sequence, so practicing the chain in both the expansionary and contractionary directions is essential.`,
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
    explanation: "The Fed determines how much money exists in the system, and that decision does not change when market interest rates fluctuate. A vertical curve means the quantity on the horizontal axis stays fixed no matter what happens to the price on the vertical axis. Option A gets the relationship backwards: vertical means unresponsive, not responsive. Option C is wrong because banks hold required reserves and may hold excess reserves. Option D is wrong because the money multiplier depends on the reserve requirement and is typically well above one.",
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
    explanation: "The Fed buys bonds from banks, crediting their reserve accounts with newly created money. Banks lend out those excess reserves, the money multiplier amplifies the effect, and MS shifts right. More money in circulation with the same demand level pushes the equilibrium interest rate down. Option A misidentifies which curve moves. Open market operations shift supply, not demand, because money demand depends on income and the price level. Option B reverses the direction: buying bonds adds reserves, shifting MS right, not left. Option D again misidentifies the curve. The Fed's bond purchases act on supply.",
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
    explanation: "Bond purchases expand the money supply, lower interest rates, stimulate investment, and shift AD right. That is the expansionary monetary policy chain. Option A describes fiscal policy through tax cuts, a congressional tool. Option C also describes fiscal policy through government spending. Option D traces the correct monetary policy mechanism but in the contractionary direction: selling bonds shrinks MS and raises rates. Right steps, wrong label.",
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
    explanation: "A higher reserve requirement forces banks to hold a larger share of their deposits in reserve rather than lending. The money multiplier shrinks. The money supply contracts. MS shifts left on the money market graph, and the equilibrium interest rate rises. Option A has the direction completely reversed. Option B is wrong because reserve requirements affect the supply side of the money market, not money demand. Option D has no logical basis; raising requirements is contractionary and pushes rates up.",
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
    explanation: "The near-vertical MS curve means the quantity of money barely changes regardless of what happens to demand. When MD shifts right, the intersection slides up the near-vertical MS curve. The interest rate rises, but the quantity of money stays essentially the same. Option D is the most common trap: it correctly identifies a higher rate but incorrectly claims the quantity of money increases. Option B reverses both effects. Option C ignores the demand shift entirely.",
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
    explanation: "Bank-to-bank overnight lending of excess reserves, at this rate, is what the federal funds rate measures. The Fed targets it by adjusting the money supply through open market operations. Option B is the classic mix-up. That describes the discount rate, which is the Fed lending to banks, not banks lending to each other. Option A describes the Treasury bond yield. Option D describes a retail consumer rate that is influenced by the federal funds rate but is a separate, higher rate.",
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
    explanation: "Contractionary tools, selling bonds, raising the discount rate, or increasing reserve requirements, are designed to slow spending and bring prices under control. An inflationary gap with real GDP above potential is precisely the condition that calls for tightening. The Fed's aggressive rate hikes throughout 2022-2023 to combat 9% inflation followed this exact logic. Option A calls for expansionary policy, not tightening. Option C describes an economy at equilibrium with no need for intervention. Option D is a supply-side problem that contractionary demand policy would worsen.",
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
    explanation: "This is the \"pushing on a string\" problem that plagued the Fed after 2008. Rates were near zero, the money supply had expanded enormously, but banks sat on mountains of excess reserves and businesses saw no reason to borrow when consumer demand was collapsing. The transmission mechanism breaks at the investment link: cheap money is available but nobody wants to use it. Option A is wrong because the Fed can always buy bonds and expand reserves; the bottleneck is the private sector's willingness to borrow and spend. Option C overstates the inflation risk; low rates in a depressed economy typically do not generate inflation. Option D invents a mechanism with no basis in the model.",
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
    explanation: "Money multiplier = 1 / reserve requirement = 1 / 0.20 = 5. Multiply the initial injection by the multiplier: $50 million x 5 = $250 million. Option A ignores the multiplier and counts only the initial reserve injection. Option B uses a multiplier of 2, which would correspond to a 50% reserve requirement. Option D uses a multiplier of 10, the result if you mistakenly apply the textbook 10% reserve requirement instead of the given 20%.",
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
    explanation: "With V constant and Y fixed at full employment, the equation MV = PY forces any increase in M to translate into a proportional increase in P. Double the money supply, double the price level. More money chasing the same quantity of goods pushes prices up. Option A is wrong because Y cannot rise above full employment in the long run. Option C contradicts the premise that velocity is constant. Option D has no logical connection; expanding the money supply does not cause unemployment.",
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
    explanation: "Lowering the target rate requires increasing the money supply. The Fed buys government bonds from banks, crediting their reserve accounts. Those excess reserves get lent out, the multiplier amplifies the expansion, and MS shifts right, pushing the equilibrium rate down toward the new target. Option A pairs the wrong operation (selling) with the correct effect (more reserves), an internal contradiction. Option B reverses the effect of purchases. Option D describes contractionary policy, which would raise rates rather than lower them.",
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
    explanation: "At the zero lower bound, the money demand curve becomes nearly horizontal. People are indifferent between holding bonds and holding cash because bonds yield almost nothing. The Fed can keep buying bonds and expanding MS, but the interest rate refuses to budge, so the transmission mechanism to investment and AD breaks down. Japan experienced this condition throughout the 1990s and 2000s. Option A describes rapid tightening, not a liquidity trap. Option C is nonsensical. Option D gets the slope backwards: in a liquidity trap, money demand is nearly horizontal (perfectly elastic), not vertical.",
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
    explanation: "Buying bonds is expansionary. MS shifts right, rates fall, investment rises, AD shifts right, output increases, unemployment drops, and the price level rises. On the short-run Phillips Curve, that combination is a movement up and to the left. Option B describes the outcome of contractionary policy. Option C would occur if inflation expectations changed, but a single expansionary action causes movement along the existing SRPC, not a shift of the curve. Option D is flatly wrong; monetary policy is one of the primary forces that moves the economy along the Phillips Curve.",
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
    explanation: "A steep MD curve means people's desired cash holdings are not very responsive to interest rate changes. When MS shifts right along a steep MD curve, the equilibrium slides down sharply, producing a large drop in the interest rate. Graphically: the steeper the curve you shift along, the bigger the vertical change for any given horizontal shift. Option B confuses steep with flat. A flat (elastic) MD curve produces a small rate change because people readily absorb extra money without needing much rate incentive. Option C would require a perfectly horizontal MD curve, the liquidity trap scenario. Option D is wrong because open market purchases shift MS, not MD.",
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
    explanation: "Selling bonds drains $200 million in reserves from the banking system. The money multiplier is 1 / 0.10 = 10. Maximum contraction: $200 million x 10 = $2 billion decrease. Option A gets both direction and reasoning wrong; selling bonds is contractionary. Option B applies the initial drain without the multiplier effect, ignoring the cascading contraction as banks call in loans to meet their reserve requirements. Option D reverses the direction entirely.",
  },
];
