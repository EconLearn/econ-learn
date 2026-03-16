import type { PracticeQuestion } from "./supply-demand-content";

export const loanableFundsContent = {
  title: "The Loanable Funds Market",
  subtitle:
    "Where savers meet borrowers, and where the real interest rate gets determined.",
  sections: [
    {
      heading: "What Are Loanable Funds?",
      content:
        "Every dollar someone saves becomes a dollar someone else can borrow. That basic idea is what the loanable funds market captures. On one side, households and the government supply funds by saving. On the other, firms and the government demand funds to finance investment and spending.\n\nThe **real interest rate** is the price that balances the two sides. When it rises, saving becomes more attractive and borrowing less so. When it falls, the opposite happens. The market clears at the rate where the quantity of funds saved equals the quantity borrowed.",
    },
    {
      heading: "Supply: National Saving",
      content:
        "The supply of loanable funds comes from **national saving**, which includes both private saving by households and public saving by the government. When households spend less than they earn, that money enters the financial system through banks, bonds, and other channels.\n\nThe supply curve slopes upward because a higher real interest rate rewards saving. At 2%, you might keep your money in a checking account. At 6%, you're far more likely to put it in a savings bond or certificate of deposit.\n\n**Public saving** matters too. When the government runs a surplus (tax revenue exceeds spending), it adds to the supply. A deficit does the opposite. The government becomes a net borrower, reducing the pool available for private investment.",
    },
    {
      heading: "Demand: Investment",
      content:
        "The demand for loanable funds comes primarily from **business investment**: firms borrowing to buy equipment, build factories, or fund research. The government also borrows when it runs a deficit, but the AP exam focuses on investment demand.\n\nThe demand curve slopes downward because a lower interest rate makes more projects profitable. If a factory expansion earns an 8% return but the interest rate is 10%, the firm won't borrow. Drop the rate to 5% and suddenly the investment makes sense.\n\nThis is what economists call the **marginal efficiency of investment**. At lower rates, more projects clear the profitability hurdle.",
    },
    {
      heading: "Equilibrium and Crowding Out",
      content:
        "Where supply crosses demand, the market determines the **equilibrium real interest rate**. At this rate, every dollar saved finds a willing borrower and every profitable investment project gets funded.\n\nNow consider what happens when the government runs a large **budget deficit**. It must borrow heavily, which shifts the supply of loanable funds to the left (or equivalently, adds government demand). Either way, the real interest rate rises.\n\nHigher rates discourage private investment. Firms abandon projects that no longer beat the higher borrowing cost. That's **crowding out**: government borrowing displaces private investment. The larger the deficit, the more severe the crowding out.\n\nTry it in the graph: click \"Budget Deficit ↑\" and watch the equilibrium interest rate climb while the quantity of investment falls.",
    },
    {
      heading: "Policy Shifts and Open Economies",
      content:
        "**Saving incentives** (like tax-advantaged retirement accounts) shift supply right, lowering the real interest rate and boosting investment. **Investment tax credits** shift demand right, raising the rate and pulling in more saving.\n\nIn an **open economy**, loanable funds flow across borders. If the domestic real interest rate is high relative to the world rate, foreign capital flows in, supplementing domestic saving. If the domestic rate is low, capital flows out. The AP exam sometimes tests whether a policy change attracts or repels international capital.\n\nThe loanable funds model connects directly to **fiscal policy** and the **money market**. Fiscal expansion funded by borrowing raises interest rates here, which appreciates the currency in the foreign exchange market and worsens the trade balance. The AP exam loves to test that chain.",
    },
    {
      heading: "Common AP Mistakes",
      content:
        "**Confusing nominal and real rates.** The loanable funds market determines the **real** interest rate, adjusted for inflation. The money market (controlled by the Fed) determines the **nominal** rate. They're different models answering different questions.\n\n**Mixing up supply shifts.** A government deficit reduces the supply of loanable funds (shifts left), not the demand. The government is borrowing, which absorbs saving.\n\n**Forgetting the connection to exchange rates.** Higher real interest rates attract foreign capital, the currency appreciates, and net exports fall. This is the full chain the AP exam tests in free-response questions.",
    },
  ],
};

export const loanableFundsQuestions: PracticeQuestion[] = [
  {
    id: "lf-1",
    question:
      "If the government increases its budget deficit, what happens in the loanable funds market?",
    options: [
      "Supply shifts right, interest rate falls",
      "Supply shifts left, interest rate rises",
      "Demand shifts right, interest rate falls",
      "Demand shifts left, interest rate rises",
    ],
    correctIndex: 1,
    explanation:
      "A larger deficit means the government saves less (or borrows more), reducing the supply of loanable funds. Supply shifts left, and the real interest rate rises.",
  },
  {
    id: "lf-2",
    question:
      "Crowding out occurs when government borrowing:",
    options: [
      "Lowers interest rates, discouraging saving",
      "Raises interest rates, discouraging private investment",
      "Increases the money supply, causing inflation",
      "Reduces taxes, increasing consumer spending",
    ],
    correctIndex: 1,
    explanation:
      "Crowding out happens when government borrowing pushes up the real interest rate, making it more expensive for firms to invest. Private investment falls as a result.",
  },
  {
    id: "lf-3",
    question:
      "An investment tax credit would shift the:",
    options: [
      "Supply of loanable funds to the right",
      "Supply of loanable funds to the left",
      "Demand for loanable funds to the right",
      "Demand for loanable funds to the left",
    ],
    correctIndex: 2,
    explanation:
      "An investment tax credit makes investment more profitable, increasing firms' desire to borrow at every interest rate. Demand for loanable funds shifts right.",
  },
  {
    id: "lf-4",
    question:
      "In the loanable funds market, the real interest rate is determined by:",
    options: [
      "The Federal Reserve's open market operations",
      "The intersection of saving supply and investment demand",
      "Congress setting the rate through legislation",
      "The inflation rate minus the nominal rate",
    ],
    correctIndex: 1,
    explanation:
      "The loanable funds market determines the real interest rate where the supply of saving equals the demand for investment. The Fed sets the nominal rate through the money market, not the real rate.",
  },
  {
    id: "lf-5",
    question:
      "If households become more thrifty and increase their saving at every interest rate, what happens to real interest rates and investment?",
    options: [
      "Interest rates rise, investment falls",
      "Interest rates fall, investment rises",
      "Interest rates rise, investment rises",
      "Interest rates fall, investment falls",
    ],
    correctIndex: 1,
    explanation:
      "More saving shifts the supply of loanable funds to the right. The real interest rate falls, making more investment projects profitable, so investment rises.",
  },
  {
    id: "lf-6",
    question:
      "A government budget surplus contributes to the loanable funds market by:",
    options: [
      "Increasing the demand for loanable funds",
      "Decreasing the demand for loanable funds",
      "Increasing the supply of loanable funds",
      "Having no effect on the market",
    ],
    correctIndex: 2,
    explanation:
      "When the government runs a surplus, it saves rather than borrows, adding to the pool of national saving. This increases the supply of loanable funds.",
  },
  {
    id: "lf-7",
    question:
      "A rise in the domestic real interest rate, relative to foreign rates, will tend to:",
    options: [
      "Cause capital outflows and currency depreciation",
      "Cause capital inflows and currency appreciation",
      "Have no effect on international capital flows",
      "Cause capital inflows and currency depreciation",
    ],
    correctIndex: 1,
    explanation:
      "Higher domestic real interest rates attract foreign investors seeking better returns. Capital flows in, increasing demand for the domestic currency, which causes it to appreciate.",
  },
  {
    id: "lf-8",
    question:
      "Why does the supply curve for loanable funds slope upward?",
    options: [
      "Higher interest rates make borrowing cheaper",
      "Higher interest rates increase the reward for saving",
      "Higher interest rates reduce government spending",
      "Higher interest rates cause inflation",
    ],
    correctIndex: 1,
    explanation:
      "A higher real interest rate increases the return on saving, encouraging households to save more and consume less today. This is why the supply curve slopes upward.",
  },
  {
    id: "lf-9",
    question:
      "If the government funds a deficit by borrowing domestically, the full chain of effects in the loanable funds and foreign exchange markets is:",
    options: [
      "Interest rate ↑ → capital outflow → currency depreciates → net exports rise",
      "Interest rate ↑ → capital inflow → currency appreciates → net exports fall",
      "Interest rate ↓ → capital inflow → currency appreciates → net exports rise",
      "Interest rate ↓ → capital outflow → currency depreciates → net exports fall",
    ],
    correctIndex: 1,
    explanation:
      "Government borrowing raises the real interest rate. Higher rates attract foreign capital, which appreciates the currency. A stronger currency makes exports more expensive and imports cheaper, reducing net exports.",
  },
  {
    id: "lf-10",
    question:
      "The loanable funds market determines the real interest rate. The money market determines the:",
    options: [
      "Real interest rate",
      "Nominal interest rate",
      "Exchange rate",
      "Inflation rate",
    ],
    correctIndex: 1,
    explanation:
      "The loanable funds market sets the real interest rate (adjusted for inflation). The money market, where the Fed operates, determines the nominal interest rate. The two are linked by the Fisher equation: nominal rate ≈ real rate + expected inflation.",
  },
  {
    id: "lf-11",
    question:
      "The government increases spending by $500 billion, financed entirely by borrowing. In the loanable funds market, the most likely result is:",
    options: [
      "The supply of loanable funds shifts right, real interest rate falls, and private investment increases",
      "The supply of loanable funds shifts left, real interest rate rises, and private investment decreases",
      "The demand for loanable funds shifts left, real interest rate falls, and private investment increases",
      "The demand for loanable funds shifts right, real interest rate falls, and private investment increases",
    ],
    correctIndex: 1,
    explanation:
      "When the government borrows $500 billion, it absorbs national saving that would otherwise be available for private borrowers. This reduces the supply of loanable funds (shifts left), which drives the real interest rate up. Higher rates make private investment projects less profitable, so firms cut back. This is textbook crowding out. Option A reverses the direction of the supply shift; government borrowing reduces the supply, not increases it. Option C moves the wrong curve and in the wrong direction; borrowing affects the supply side, not demand. Option D shifts demand right but incorrectly predicts a falling rate; even if modeled as a demand increase, the rate would rise, not fall.",
  },
  {
    id: "lf-12",
    question:
      "The Fisher equation states that the nominal interest rate approximately equals the real interest rate plus expected inflation. If the nominal rate is 8% and expected inflation is 3%, the real interest rate is:",
    options: [
      "11%",
      "5%",
      "3%",
      "24%",
    ],
    correctIndex: 1,
    explanation:
      "The Fisher equation: nominal rate = real rate + expected inflation, so real rate = nominal rate - expected inflation = 8% - 3% = 5%. This is the rate that matters in the loanable funds market because it reflects the true purchasing-power return to savers and cost to borrowers. Option A adds the two rates instead of subtracting, which would give the nominal rate if you already had the real rate and inflation. Option C confuses the inflation rate with the real rate; 3% is the inflation component, not the real return. Option D multiplies the two rates, which has no economic meaning in this context.",
  },
  {
    id: "lf-13",
    question:
      "Congress passes a new tax-advantaged retirement savings program that makes saving more attractive at every interest rate. In the loanable funds market, this will:",
    options: [
      "Shift the demand for loanable funds to the right, raising the real interest rate",
      "Shift the supply of loanable funds to the left, raising the real interest rate",
      "Shift the supply of loanable funds to the right, lowering the real interest rate and increasing investment",
      "Shift the demand for loanable funds to the left, lowering the real interest rate",
    ],
    correctIndex: 2,
    explanation:
      "Tax-advantaged savings programs incentivize households to save more at every interest rate, which shifts the supply of loanable funds to the right. Greater supply drives down the equilibrium real interest rate, which makes more investment projects profitable, so private investment rises. This is the virtuous cycle policymakers hope for when designing savings incentives. Option A moves the wrong curve; savings incentives affect supply, not demand. Option B shifts supply in the wrong direction; the program increases saving, not decreases it. Option D moves the wrong curve entirely; nothing about a savings program directly reduces firms' desire to borrow for investment.",
  },
  {
    id: "lf-14",
    question:
      "In an open economy, a surge of foreign capital inflows into the domestic loanable funds market will:",
    options: [
      "Shift the supply of loanable funds left and raise the real interest rate",
      "Shift the demand for loanable funds right and raise the real interest rate",
      "Shift the supply of loanable funds right, lower the real interest rate, and increase domestic investment",
      "Have no effect because foreign capital does not enter the loanable funds market",
    ],
    correctIndex: 2,
    explanation:
      "Foreign capital inflows supplement domestic saving by adding to the pool of funds available for borrowing. This shifts the supply of loanable funds to the right, pushing the real interest rate down and making more domestic investment projects viable. The U.S. has historically attracted massive capital inflows, which helped keep real interest rates lower than they would be with only domestic saving. Option A shifts supply in the wrong direction; inflows add to supply, not subtract from it. Option B moves the wrong curve; foreign investors are supplying funds, not demanding them for their own investment projects. Option D is factually incorrect; international capital flows are a major component of the loanable funds market in open economies.",
  },
  {
    id: "lf-15",
    question:
      "Firms become more optimistic about future profitability and increase their demand for loanable funds. If nothing else changes, the real interest rate will _______ and the quantity of saving will _______.",
    options: [
      "rise; rise",
      "rise; fall",
      "fall; rise",
      "fall; fall",
    ],
    correctIndex: 0,
    explanation:
      "When firms demand more loanable funds (demand shifts right), the equilibrium real interest rate rises. A higher real rate moves the economy up along the existing supply curve, which induces more saving, and quantity supplied of loanable funds increases. Both the rate and the quantity of saving rise. Option B correctly predicts the rate increase but gets saving wrong; a higher rate encourages more saving (movement along the upward-sloping supply curve), not less. Option C and D both predict a falling rate, which contradicts the effect of a rightward demand shift; when demand rises and supply stays put, price goes up, not down.",
  },
  {
    id: "lf-16",
    question:
      "In a closed economy, national saving must equal investment (S = I). If the government moves from a balanced budget to a deficit, holding private saving constant, then:",
    options: [
      "National saving increases, and investment increases",
      "National saving decreases, and investment decreases",
      "National saving is unchanged, and investment is unchanged",
      "National saving decreases, but investment increases because the government spends more",
    ],
    correctIndex: 1,
    explanation:
      "National saving = private saving + public saving. A budget deficit means public saving is negative (government spending exceeds tax revenue). With private saving held constant, national saving falls. Since S = I in a closed economy, investment must fall by the same amount. This is the mathematical identity behind crowding out. Option A reverses the direction; a deficit reduces national saving, it does not increase it. Option C ignores the deficit's impact on public saving entirely. Option D makes the common error of confusing government spending with investment; government borrowing absorbs funds that would have financed private investment, so total investment declines even as the government spends more.",
  },
  {
    id: "lf-17",
    question:
      "A country runs a government surplus and simultaneously experiences an increase in business confidence that raises investment demand. In the loanable funds market, the real interest rate will:",
    options: [
      "Definitely increase",
      "Definitely decrease",
      "The effect on the real interest rate is ambiguous and depends on the relative magnitudes of the shifts",
      "Remain unchanged because the two effects cancel exactly",
    ],
    correctIndex: 2,
    explanation:
      "A government surplus increases national saving, shifting supply right and putting downward pressure on the real interest rate. Simultaneously, increased business confidence shifts demand right, putting upward pressure on the rate. Since one force pushes the rate down and the other pushes it up, the net effect depends on which shift is larger. If the demand shift dominates, the rate rises. If the supply shift dominates, the rate falls. Without knowing the magnitudes, the outcome is ambiguous. Option A and B each assume one shift dominates without justification. Option D assumes the shifts are exactly equal, which is a special case with no reason to presume it as the default.",
  },
];
