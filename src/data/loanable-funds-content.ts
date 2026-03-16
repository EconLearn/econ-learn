import type { PracticeQuestion } from "./supply-demand-content";

export const loanableFundsContent = {
  title: "The Loanable Funds Market",
  subtitle:
    "How savers and borrowers set the real interest rate through supply and demand",
  sections: [
    {
      heading: "What Are Loanable Funds?",
      content:
        "A household earns $80,000 and spends $65,000. The remaining $15,000 enters the financial system -- a bank account, a bond purchase, a mutual fund. Somewhere else, a firm borrows $15,000 to buy new equipment. That transaction is the loanable funds market in miniature.\n\nEvery dollar someone saves becomes a dollar someone else can borrow. On the supply side, households and the government provide funds by saving. On the demand side, firms and the government borrow to finance investment and spending.\n\nThe **real interest rate** is the price that balances the two sides. When it rises, saving becomes more attractive and borrowing less so. When it falls, the reverse happens. The market clears at the rate where quantity saved equals quantity borrowed.",
    },
    {
      heading: "Supply: National Saving",
      content:
        "The supply of loanable funds comes from **national saving**: private saving by households plus public saving by the government. When households spend less than they earn, that money flows into the financial system through banks, bonds, and other instruments.\n\nThe supply curve slopes upward. At a 2% real interest rate, a household might leave cash in a checking account earning nothing. At 6%, that same household is far more likely to buy a savings bond or a certificate of deposit. Higher rates reward patience.\n\n**Public saving** is the other component. When the government runs a budget surplus (tax revenue exceeds spending), it adds to the supply. A deficit does the opposite. The government becomes a net borrower, absorbing funds that would otherwise be available for private investment.",
    },
    {
      heading: "Demand: Investment",
      content:
        "The demand for loanable funds comes primarily from **business investment**: firms borrowing to purchase equipment, construct factories, or fund research. The government also borrows when running a deficit, but the AP exam focuses on investment demand.\n\nThe demand curve slopes downward. A factory expansion earns an 8% return. If the interest rate is 10%, the firm will not borrow. Drop the rate to 5% and the project suddenly clears the profitability hurdle.\n\nEconomists call this the **marginal efficiency of investment**. At lower rates, more projects become viable. At higher rates, fewer pass the test. Each firm ranks its potential projects by expected return and borrows only for those that beat the interest rate.",
    },
    {
      heading: "Equilibrium and Crowding Out",
      content:
        "Where supply crosses demand, the market sets the **equilibrium real interest rate**. At that rate, every dollar saved finds a borrower and every profitable investment project gets funded.\n\nSuppose the federal government runs a $800 billion **budget deficit** in a given year. It must borrow heavily. That borrowing reduces the supply of loanable funds available to the private sector (shifts supply left). The real interest rate rises.\n\nHigher rates discourage private investment. Firms abandon projects that no longer beat the higher borrowing cost. That displacement is **crowding out**: government borrowing pushes private investment aside. The larger the deficit, the more severe the crowding out.\n\nTry it in the graph: click \"Budget Deficit ↑\" and watch the equilibrium interest rate climb while the quantity of investment falls.",
    },
    {
      heading: "Policy Shifts and Open Economies",
      content:
        "**Saving incentives** like 401(k) tax advantages or Roth IRA expansions shift supply right, lowering the real interest rate and boosting investment. **Investment tax credits** shift demand right, raising the rate and pulling in more saving.\n\nIn an **open economy**, loanable funds flow across borders. If the domestic real interest rate exceeds the world rate, foreign capital flows in, supplementing domestic saving. If the domestic rate falls below the world rate, capital flows out seeking better returns. The AP exam sometimes tests whether a specific policy change attracts or repels international capital.\n\nThe loanable funds model connects directly to **fiscal policy** and the **money market**. Deficit-financed fiscal expansion raises interest rates in this market, which appreciates the currency in the foreign exchange market and worsens the trade balance. The 2024 AP Macroeconomics free-response section tested exactly this chain of reasoning.",
    },
    {
      heading: "Common AP Mistakes",
      content:
        "The loanable funds market determines the **real** interest rate, adjusted for inflation. The money market determines the **nominal** rate through Federal Reserve operations. Mixing these two models is a frequent source of lost points on the AP exam. They answer different questions using different frameworks.\n\nA government deficit reduces the supply of loanable funds (shifts left). It does not shift demand. The government is borrowing, absorbing saving that would otherwise go to private investment. Getting the curve wrong on a free-response question costs full credit on that section.\n\nHigher real interest rates attract foreign capital, which causes the domestic currency to appreciate, making exports more expensive and imports cheaper. Net exports fall. That full chain -- from interest rate to capital flow to exchange rate to net exports -- appears regularly on AP Macroeconomics free-response prompts.",
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
      "A larger deficit means the government saves less or borrows more, pulling funds out of the supply side. Supply shifts left. With less available saving, the real interest rate rises.",
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
      "Government borrowing competes with private borrowers for the same pool of saving. The real interest rate gets pushed up, and firms abandon investment projects that no longer beat the higher borrowing cost. Private investment falls. That displacement is crowding out.",
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
      "An investment tax credit makes capital purchases more profitable, so firms want to borrow more at every interest rate. Demand for loanable funds shifts right. Supply is not affected because the credit targets investment spending, not saving behavior.",
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
      "The loanable funds market determines the real interest rate at the point where the supply of saving equals the demand for investment. The Fed controls the nominal rate through the money market. Congress does not set interest rates directly. Option D reverses the Fisher equation; the real rate equals the nominal rate minus inflation, not the other way around.",
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
      "More saving at every interest rate shifts supply right. The equilibrium real interest rate falls, making more investment projects profitable. Investment rises.",
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
      "A surplus means tax revenue exceeds spending. The government saves rather than borrows, adding to the pool of national saving. Supply of loanable funds increases.",
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
      "Foreign investors chase higher returns. Capital flows into the country, increasing demand for the domestic currency. The currency appreciates. Option A reverses the direction of capital flow. Option D gets the currency movement wrong; inflows increase demand for the currency, which makes it appreciate, not depreciate.",
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
      "A higher real interest rate means savers earn more on their deposits and bonds. The increased return encourages households to save more and consume less today. That positive relationship between the interest rate and quantity of saving produces an upward slope.",
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
      "Government borrowing pushes the real interest rate up. Higher rates attract foreign capital. Capital inflows increase demand for the dollar, which appreciates. A stronger dollar makes exports pricier and imports cheaper. Net exports fall. This chain appears on AP Macroeconomics free-response sections regularly.",
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
      "Two separate models, two separate rates. The loanable funds market sets the real interest rate (adjusted for inflation). The money market, where the Fed operates, sets the nominal interest rate. The Fisher equation links them: nominal rate = real rate + expected inflation.",
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
      "Borrowing $500 billion absorbs national saving that would otherwise go to private borrowers. Supply shifts left. The real interest rate rises. Higher rates make investment projects less profitable, so firms cut back. Textbook crowding out. Option A reverses the supply shift direction. Option C moves the wrong curve in the wrong direction. Option D shifts demand right but incorrectly predicts a falling rate; a rightward demand shift would raise the rate, not lower it.",
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
      "Real rate = nominal rate - expected inflation = 8% - 3% = 5%. This is the rate that matters in the loanable funds market because it captures the true purchasing-power return for savers and cost for borrowers. Option A adds instead of subtracting. Option C confuses the inflation rate with the real rate. Option D multiplies the two numbers, which has no meaning in this context.",
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
      "Tax-advantaged savings programs incentivize more saving at every interest rate. Supply shifts right. Greater supply drives the real interest rate down, which makes more investment projects profitable. Option A moves the wrong curve; savings incentives affect supply. Option B shifts supply the wrong direction; the program increases saving, not decreases it. Option D targets the wrong curve entirely.",
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
      "Foreign capital supplements domestic saving. More funds available for borrowing means supply shifts right, the real interest rate falls, and more domestic investment projects become viable. The U.S. has historically attracted large capital inflows, helping keep real rates lower than domestic saving alone would permit. Option A shifts supply the wrong direction. Option B moves the wrong curve. Option D is factually wrong; international capital flows are a major part of the loanable funds market in open economies.",
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
      "Demand shifts right. The equilibrium real interest rate rises. A higher rate moves the economy up along the existing supply curve, inducing more saving. Both the rate and the quantity of saving increase. Option B gets saving wrong; a higher rate encourages more saving, not less, since the supply curve slopes upward. Options C and D both predict a falling rate, which contradicts a rightward demand shift with no supply change.",
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
      "National saving = private saving + public saving. A deficit means public saving goes negative. With private saving held constant, national saving falls. Since S = I in a closed economy, investment must fall by the same amount. This is the mathematical identity behind crowding out. Option A reverses the direction. Option C ignores the deficit entirely. Option D confuses government spending with investment; the borrowing absorbs funds that would have financed private investment.",
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
      "Two opposing forces. The surplus shifts supply right (downward pressure on the rate). Increased business confidence shifts demand right (upward pressure). The net effect depends on which shift is larger. If demand dominates, the rate rises. If supply dominates, it falls. Without magnitudes, the outcome is indeterminate. Options A and B each assume one shift dominates without justification. Option D assumes exact cancellation, which is a special case with no reason to assume it as the default.",
  },
];
