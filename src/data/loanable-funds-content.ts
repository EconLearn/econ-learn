import type { PracticeQuestion } from "./supply-demand-content";

export const loanableFundsContent = {
  title: "The Loanable Funds Market",
  subtitle:
    "How savers and borrowers set the real interest rate through supply and demand",
  sections: [
    {
      heading: "What Are Loanable Funds?",
      content:
        "A household earns $80,000 and spends $65,000. The leftover $15,000 goes somewhere -- a savings account, a bond purchase, a mutual fund contribution. Meanwhile, a firm across town borrows $15,000 to buy a new CNC machine. That transaction, scaled up across millions of households and firms, is the loanable funds market.\n\nEvery dollar saved becomes a dollar available for someone else to borrow. Households and the government supply funds by saving. Firms and the government demand funds to finance investment and spending.\n\nThe **real interest rate** is the price that brings the two sides into balance. When it rises, saving looks more attractive and borrowing gets more expensive, so less borrowing happens. When it falls, borrowing gets cheaper and saving pays less, so borrowing picks up. The market clears where the quantity saved equals the quantity borrowed.",
    },
    {
      heading: "Supply: National Saving",
      content:
        "The supply of loanable funds comes from **national saving** -- that's private saving by households plus public saving by the government. When households spend less than they earn, that surplus flows into the financial system through bank deposits, bond purchases, and other instruments.\n\nThe supply curve slopes upward. At a 2% real interest rate, a household might just leave cash sitting in a checking account earning basically nothing -- why bother locking it up? At 6%, that same household is much more likely to buy a savings bond or a 12-month CD. Higher rates reward the patience of deferring consumption.\n\n**Public saving** is the other piece. When the government runs a budget surplus (tax revenue exceeds spending), it adds to the supply of loanable funds. A deficit flips that around -- the government becomes a net borrower, soaking up funds that would otherwise be available for private investment. The Clinton-era surpluses of 1998-2001 were a textbook example of the government contributing positively to national saving.",
    },
    {
      heading: "Demand: Investment",
      content:
        "Demand for loanable funds comes primarily from **business investment** -- firms borrowing to buy equipment, build factories, fund R&D. The government also borrows when running a deficit, but for AP purposes the focus is on investment demand.\n\nThe demand curve slopes downward, and the intuition is concrete. A factory expansion project earns an expected 8% return. If the interest rate is 10%, the firm won't borrow because the project loses money on net. Drop the rate to 5% and suddenly that expansion clears the profitability bar.\n\nEconomists call this the **marginal efficiency of investment**. Firms internally rank their potential projects by expected return -- the warehouse expansion at 12%, the new software system at 9%, the office renovation at 4%. They borrow for every project that beats the interest rate and skip the rest. Lower rates mean more projects pass the test; higher rates thin out the list.",
    },
    {
      heading: "Equilibrium and Crowding Out",
      content:
        "Where supply meets demand, the market settles on the **equilibrium real interest rate**. At that rate, every dollar saved finds a borrower and every investment project worth funding gets funded.\n\nSuppose the federal government runs an $800 billion **budget deficit** in a given year. It has to borrow heavily, and that borrowing absorbs saving that would otherwise be available to private firms. In the graph, supply shifts left. The real interest rate rises.\n\nHigher rates kill off private investment projects. A firm that was planning to borrow for a 7% return project won't do it if the rate jumps to 8%. That displacement is **crowding out** -- government borrowing elbowing private investment out of the way. The bigger the deficit, the more severe the crowding out. This was a major concern during the post-2008 stimulus debates and has come up repeatedly in AP free-response questions since then.\n\nTry it in the graph: click \"Budget Deficit \\u2191\" and watch the equilibrium interest rate climb while the quantity of investment falls.",
    },
    {
      heading: "Policy Shifts and Open Economies",
      content:
        "**Saving incentives** like 401(k) tax advantages or Roth IRA contribution limit increases shift supply right, which lowers the real interest rate and boosts investment. **Investment tax credits** shift demand right, which raises the rate and pulls in more saving from people responding to that higher return.\n\nIn an **open economy**, loanable funds cross borders. If the U.S. real interest rate exceeds rates in Europe or Japan, foreign capital flows in -- supplementing domestic saving and putting downward pressure on the rate. If the domestic rate drops below the world rate, capital flows out chasing better returns elsewhere. The AP exam occasionally tests whether a specific policy change attracts or repels international capital, and students tend to get the direction wrong.\n\nThe loanable funds model connects directly to **fiscal policy** and the **money market**. Deficit-financed government spending raises interest rates here, which appreciates the dollar in the foreign exchange market (because foreign investors want higher-yielding U.S. assets), which makes American exports more expensive and imports cheaper. Net exports fall. The 2024 AP Macroeconomics free-response section tested exactly this chain of reasoning -- deficit to interest rate to exchange rate to trade balance.",
    },
    {
      heading: "Common AP Mistakes",
      content:
        "The loanable funds market determines the **real** interest rate -- that's the rate adjusted for inflation. The money market determines the **nominal** rate through Federal Reserve operations. Mixing up these two models is probably the single most common way students lose points on AP Macro free-response questions. They answer different questions using different mechanisms, and writing about the Fed in a loanable funds problem (or vice versa) will cost you.\n\nA government deficit reduces the supply of loanable funds by shifting the curve left. It does not shift demand. The government is borrowing, which absorbs saving that would otherwise go to private investment -- that's a supply-side event. Getting the wrong curve on a free-response costs you full credit for that section of the problem.\n\nHigher real interest rates attract foreign capital inflows, which increases demand for the domestic currency and causes it to appreciate. A stronger dollar makes U.S. exports more expensive for foreign buyers and makes imports cheaper for Americans. Net exports fall. That full chain -- interest rate to capital flow to exchange rate to net exports -- shows up on AP Macro free-response prompts almost every year in some form.",
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
      "A larger deficit means the government is saving less (or borrowing more), which pulls funds out of the supply side. Supply shifts left. With less saving available, the real interest rate gets pushed up.",
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
      "Government borrowing competes with private firms for the same pool of saving. That competition pushes the real interest rate up, and firms shelve investment projects that no longer beat the higher borrowing cost. Private investment drops -- that's crowding out.",
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
      "An investment tax credit makes capital purchases more profitable for firms, so they want to borrow more at every interest rate. Demand for loanable funds shifts right. Supply isn't affected because the credit targets investment spending, not saving behavior.",
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
      "The loanable funds market determines the real interest rate where the supply of saving equals the demand for investment. The Fed controls the nominal rate through the money market -- different model, different rate. Congress doesn't set interest rates directly. Option D has the Fisher equation backward; real rate = nominal rate minus inflation, not the other direction.",
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
      "More saving at every interest rate means supply shifts right. The equilibrium real interest rate falls, which makes more investment projects profitable. Investment rises. This is the classical economics argument for why thrift benefits the economy through cheaper capital.",
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
      "A surplus means the government collects more in taxes than it spends. The government is saving rather than borrowing, which adds to the total pool of national saving. Supply of loanable funds increases.",
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
      "Foreign investors chase higher returns. Capital flows into the country, increasing demand for the domestic currency, and the currency appreciates. Option A has the capital flow direction backward. Option D gets the currency movement wrong -- inflows increase demand for the currency, which pushes its value up, not down.",
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
      "A higher real interest rate means savers earn a better return on their deposits and bonds. That increased reward encourages households to save more and consume less today. The positive relationship between the interest rate and the quantity of saving is what gives the supply curve its upward slope.",
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
      "Government borrowing pushes the real interest rate up. Higher rates attract foreign capital looking for better returns. Capital inflows increase demand for the dollar, which appreciates. A stronger dollar makes U.S. exports pricier for foreign buyers and imports cheaper for Americans. Net exports fall. This chain shows up on AP Macro free-response questions with remarkable regularity.",
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
      "Two separate models for two separate rates. The loanable funds market sets the real interest rate (adjusted for inflation). The money market, where the Fed conducts open market operations and sets the federal funds rate, determines the nominal interest rate. The Fisher equation connects them: nominal rate = real rate + expected inflation.",
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
      "Borrowing $500 billion absorbs national saving that would otherwise go to private borrowers. Supply shifts left, the real interest rate rises, and higher rates make investment projects less profitable -- so firms cut back. Textbook crowding out. Option A reverses the supply shift. Option C moves the wrong curve in the wrong direction. Option D shifts demand right but then incorrectly predicts a falling rate; a rightward demand shift would push the rate up.",
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
      "Real rate = nominal rate - expected inflation = 8% - 3% = 5%. This is the rate that matters in the loanable funds market because it captures the actual purchasing-power return for savers and cost for borrowers. Option A adds instead of subtracting. Option C confuses the inflation rate itself with the real rate. Option D multiplies the two numbers, which produces a meaningless result.",
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
      "Tax-advantaged savings programs incentivize more saving at every interest rate, shifting supply right. More supply drives the real interest rate down, and a lower rate makes more investment projects profitable. Option A targets the wrong curve -- savings incentives affect supply. Option B shifts supply the wrong direction since the program encourages more saving, not less. Option D also targets the wrong curve.",
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
      "Foreign capital supplements domestic saving -- there's simply more money available for borrowing. Supply shifts right, the real interest rate drops, and more domestic investment projects become viable at the lower rate. The U.S. has historically attracted enormous capital inflows, which has helped keep real rates lower than domestic saving alone would support. Option A shifts supply the wrong direction. Option B moves the wrong curve entirely. Option D is factually wrong; international capital flows are a huge part of how the loanable funds market works in open economies.",
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
      "Demand shifts right. The equilibrium real interest rate rises. That higher rate moves the economy up along the existing supply curve, which induces more saving (since saving increases when the return on it goes up). Both the rate and the quantity of saving increase. Option B gets saving wrong -- a higher rate encourages more saving, not less, because the supply curve slopes upward. Options C and D both predict a falling rate, which contradicts a rightward demand shift with no change in supply.",
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
      "National saving = private saving + public saving. A deficit means public saving goes negative (the government spends more than it collects). With private saving held constant, national saving falls. In a closed economy S = I, so investment must fall by the same amount. This is the accounting identity behind crowding out. Option A reverses the direction. Option C ignores the deficit. Option D confuses government spending with private investment -- the borrowing absorbs funds that would have financed private investment.",
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
      "Two opposing forces are at work. The surplus shifts supply right, putting downward pressure on the rate. Higher business confidence shifts demand right, putting upward pressure on the rate. Which one wins depends on which shift is bigger -- and the question doesn't give you that information. If demand dominates, the rate rises; if supply dominates, it falls. Options A and B each assume one shift dominates without any basis for that assumption. Option D assumes exact cancellation, which is a special case that would require a very specific coincidence.",
  },
];
