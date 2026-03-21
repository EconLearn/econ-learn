import type { PracticeQuestion } from "@/data/supply-demand-content";

export const exchangeRatesContent = {
  title: "Exchange Rates",
  subtitle: "The $7.5 trillion daily currency market: how interest rate differentials, trade flows, and capital movements determine what a dollar is worth abroad",
  sections: [
    {
      heading: "The Foreign Exchange Market",
      content: `On September 26, 2022, the British pound crashed to $1.035 against the U.S. dollar, its lowest level in recorded history. The catalyst was a "mini-budget" announced by Chancellor Kwasi Kwarteng two days earlier, a package of unfunded tax cuts totaling roughly 45 billion pounds that spooked currency traders and bond investors at the same time. Within hours of the announcement, hedge funds and institutional investors dumped sterling in massive volumes. The Bank of England was forced into emergency gilt purchases to stabilize the bond market. Kwarteng was fired within weeks. The entire episode showed with brutal clarity how quickly the **foreign exchange (forex) market** can punish a policy misstep. Over $7.5 trillion changes hands daily on this market, dwarfing every stock exchange on the planet combined.

The **exchange rate** is simply a price: how much of one currency trades for another. Foreigners demand dollars when they want to purchase American goods, services, or financial assets. A BMW plant in Munich importing American-made microchips needs dollars to pay the supplier. A Japanese pension fund buying U.S. Treasury bonds needs dollars to settle the trade. Every foreign purchase of American exports or American assets creates demand for dollars in the forex market.

Americans supply dollars whenever they buy foreign goods, services, or assets. Purchasing a German car, Korean electronics, or booking a vacation in Mexico sends dollars into the forex market in exchange for euros, won, or pesos. Standard supply-and-demand logic applies here. Equilibrium occurs where the quantity of dollars demanded equals the quantity supplied, and that intersection determines the exchange rate. On the graph, the vertical axis shows the dollar's price in foreign currency (euros per dollar) while the horizontal axis tracks the quantity of dollars traded.`,
    },
    {
      heading: "Appreciation and Depreciation",
      content: `Through most of 2022, the dollar surged against nearly every major currency on the planet. The euro fell below parity with the dollar for the first time in twenty years, meaning one dollar could buy more than one euro. The Japanese yen weakened past 150 per dollar, a level not seen since 1990. The British pound, as mentioned, hit an all-time low. The dollar's strength was so pronounced that the DXY index, which tracks the dollar against a basket of six major currencies, climbed to its highest reading in two decades. This broad-based strengthening is **appreciation**: each dollar commands more foreign currency than before.

And the math matters for trade. When the rate moves from 1.00 to 1.20 euros per dollar, a $100 American product that cost Europeans 100 euros now costs them 120 euros. U.S. exports get more expensive abroad, and foreign buyers purchase fewer of them. At the same time, a 100-euro German product drops from $100 to about $83 for American consumers. Imports get cheaper. Americans buy more.

**Depreciation** reverses every single one of those effects. When the yen weakened past 150 per dollar in late 2022, Japanese-made cars, electronics, and machinery became a bargain for American buyers while dollar-priced American products became painfully expensive in Tokyo showrooms. A weaker currency boosts exports and raises the cost of imports, pushing **net exports** higher. This is why countries occasionally engage in competitive devaluation, deliberately weakening their currencies to gain a trade advantage, though the practice invites retaliation and the IMF and WTO frown on it.`,
    },
    {
      heading: "What Shifts Demand and Supply",
      content: `Five forces drive exchange rate movements and they show up repeatedly on the AP Macroeconomics exam. Each one operates through the demand curve, the supply curve, or both in the forex market.

**Interest rate differentials.** The Fed hiked rates aggressively throughout 2022 and 2023, pushing the federal funds rate from near-zero to above 5%, while the European Central Bank lagged months behind with smaller increases. Foreign investors chased the higher yields available on U.S. bonds and other dollar-denominated assets, creating a surge in demand for dollars. The dollar appreciated sharply against the euro, moving from roughly 0.88 euros per dollar in early 2022 to above 1.03 by September. Interest rate differentials are the single most powerful short-run driver of exchange rate movements.

**Relative income growth.** If American GDP grows faster than Japan's, American households import more Japanese cars, electronics, and consumer goods. More dollars flow into the forex market as Americans exchange them for yen, shifting the supply of dollars rightward. The dollar **depreciates**. If Japan's economy booms instead, Japanese consumers import more American products, boosting demand for dollars and appreciating the dollar.

**Inflation differentials.** Higher U.S. inflation makes American exports pricier relative to foreign alternatives. Foreigners buy fewer American goods, shifting demand for dollars leftward. Meanwhile, Americans pivot to cheaper foreign imports, shifting the supply of dollars rightward. Both forces depreciate the dollar. The stagflation era of the 1970s, when U.S. inflation ran persistently above its trading partners, showed this dynamic clearly as the dollar lost roughly half its value against the German mark between 1971 and 1979.

**Speculation and expectations.** Currency traders do not wait for published data. If markets expect the Fed to raise rates next month, traders buy dollars today, pushing up demand immediately and causing the appreciation they predicted. Self-fulfilling prophecy is baked into forex markets in a way that few other markets experience.

**Tastes and preferences.** A global surge in demand for American technology products increases foreign demand for dollars. A shift by American consumers toward European luxury goods increases the supply of dollars in the forex market. Preference shifts move curves, though they tend to operate more slowly than interest rate or speculation channels.`,
    },
    {
      heading: "Exchange Rates and the Current Account",
      content: `A strong dollar punishes American manufacturers, and the mechanism runs straight through **net exports** (NX = exports minus imports), which is a direct component of aggregate demand.

When the dollar appreciates, American goods cost more in foreign currency. Exports decline. Foreign goods cost fewer dollars. Imports climb. NX falls. During 2022, when the dollar reached two-decade highs, Caterpillar reported that unfavorable currency effects reduced its revenue by roughly $700 million. Procter & Gamble disclosed a $1.2 billion foreign exchange headwind. Multinational corporations with significant overseas revenue watched their earnings erode as the strong dollar made their foreign sales worth less when converted back to dollars.

Depreciation flips the whole thing. Exports become cheaper for foreign buyers, so export volume rises. Imports become more expensive for domestic consumers, so import volume falls. NX increases.

The connection to aggregate demand is direct. AD = C + I + G + **NX**. Dollar appreciation that lowers NX shifts aggregate demand leftward, a contractionary force. Dollar depreciation that raises NX shifts AD rightward, an expansionary force. The forex market is not some isolated corner of finance. Exchange rate swings feed straight into GDP through the net exports channel. The AP exam tests this link relentlessly.`,
    },
    {
      heading: "Exchange Rates and Capital Flows",
      content: `The **capital account** (more precisely, the financial account) and the current account are two sides of one ledger. A country that imports more than it exports, running a current account deficit, must attract enough foreign investment to cover the gap, producing a capital account surplus. The United States has operated this way for decades, persistent trade deficits financed by massive foreign purchases of Treasury bonds, corporate equities, and American real estate.

Here is the chain the AP exam tests more than almost anything else in this unit: **interest rate to exchange rate to net exports.** The Fed raises rates. Foreign investors chase higher yields and buy U.S. bonds. To make those purchases, they need dollars. Demand for dollars rises in the forex market. The dollar appreciates. A stronger dollar makes American exports expensive and imports cheap. Net exports fall.

That chain reveals a second channel of monetary policy that operates beyond domestic borders. When the Fed tightens, the obvious domestic effect is reduced investment from higher borrowing costs. The less obvious international effect is that the dollar strengthens and net exports drop. Both channels are **contractionary**. They reinforce each other, amplifying the Fed's intended restraint on aggregate demand.

Now reverse the chain for expansionary policy. The Fed cuts rates. The return on dollar assets falls. Foreign investors pull capital out or invest less. Demand for dollars weakens. The dollar depreciates. Exports rise, imports fall, and net exports increase. The domestic stimulus from cheaper borrowing gets amplified by the exchange rate channel. Two channels, same expansionary direction.`,
    },
    {
      heading: "Worked Example",
      content: `The Fed raises the federal funds rate from 3% to 5%.

**Capital flows.** U.S. bonds now yield 5% instead of 3%. A German pension fund managing 50 billion euros in assets notices the 300-basis-point spread between American and European bond yields. Money flows toward the higher return. Foreign investors compete to buy U.S. Treasuries, corporate bonds, and other dollar-denominated assets.

**Forex market.** To purchase U.S. bonds, foreign investors need dollars. Demand for dollars in the forex market shifts right. The exchange rate climbs from 0.90 to 1.05 euros per dollar.

**Trade prices.** A $100 American product that cost European buyers 90 euros now costs 105 euros. U.S. exports become significantly more expensive abroad. Meanwhile, European goods get cheaper for Americans. A 100-euro item that cost $111 now costs only about $95. Imports rise, exports fall.

**Net exports and AD.** Falling net exports reduce aggregate demand, reinforcing the contractionary effect of the rate hike through the domestic investment channel. The exchange rate channel and the investment channel both work in the same direction, tightening the economy.

The AP exam typically gives you one link in this chain and asks you to trace the rest. The sequence you need to internalize: interest rates up, capital inflows, dollar appreciates, net exports down, AD shifts left.`,
    },
  ],
};

export const exchangeRatesQuestions: PracticeQuestion[] = [
  {
    id: "er-1",
    question:
      "If the exchange rate for the U.S. dollar changes from 0.85 euros per dollar to 1.10 euros per dollar, the dollar has:",
    options: [
      "Depreciated, making U.S. exports cheaper",
      "Appreciated, making U.S. exports more expensive to foreigners",
      "Appreciated, making U.S. imports more expensive for Americans",
      "Depreciated, making U.S. imports cheaper for Americans",
    ],
    correctIndex: 1,
    explanation:
      "Each dollar now grabs more euros (0.85 to 1.10), so the dollar has appreciated. A $100 American product that cost Europeans 85 euros now costs 110 euros, making U.S. exports pricier for foreign buyers. Options A and D incorrectly identify depreciation when the math shows appreciation. Option C correctly identifies appreciation but flips the import effect: appreciation makes imports cheaper for Americans, not more expensive, because each dollar stretches further when buying foreign goods.",
  },
  {
    id: "er-2",
    question:
      "In the foreign exchange market for U.S. dollars, the supply of dollars comes primarily from:",
    options: [
      "The Federal Reserve printing new currency",
      "Foreign governments buying U.S. Treasury bonds",
      "Americans purchasing foreign goods, services, and assets",
      "Foreign tourists spending money in the United States",
    ],
    correctIndex: 2,
    explanation:
      "When an American buys a Toyota, she exchanges dollars for yen, and those dollars flow into the forex market as supply. Any American purchase of foreign goods, services, or assets puts dollars into the market. Option A confuses the domestic money supply with forex supply; two entirely different concepts. Option B gets the direction backwards: foreign governments buying U.S. Treasuries need dollars, so they demand dollars rather than supply them. Option D also describes dollar demand, since foreign tourists exchange their currency for dollars.",
  },
  {
    id: "er-3",
    question:
      "If U.S. interest rates increase relative to interest rates in Europe, what happens in the foreign exchange market for dollars?",
    options: [
      "The supply of dollars increases, and the dollar depreciates",
      "The demand for dollars increases, and the dollar appreciates",
      "The demand for dollars decreases, and the dollar depreciates",
      "The supply of dollars decreases, and the dollar appreciates",
    ],
    correctIndex: 1,
    explanation:
      "Higher U.S. rates mean better returns on American bonds and other dollar assets. European investors want in, so they need dollars to make those purchases. Demand for dollars shifts right. The dollar appreciates. This played out visibly during the Fed's 2022-2023 tightening cycle as the dollar surged against the euro. Option A misidentifies the curve: capital inflows from foreign investors buying U.S. assets represent demand for dollars, not supply. Options C and D both get the direction or curve wrong.",
  },
  {
    id: "er-4",
    question:
      "A depreciation of the U.S. dollar will most likely cause:",
    options: [
      "A decrease in U.S. net exports",
      "An increase in U.S. net exports",
      "No change in U.S. net exports because prices adjust fully",
      "An increase in U.S. imports and a decrease in U.S. exports",
    ],
    correctIndex: 1,
    explanation:
      "A weaker dollar makes U.S. goods cheaper in foreign currency, so exports rise. Foreign goods become pricier in dollars, so imports fall. Both effects push net exports higher. When the yen weakened in 2022, Japan's export sector boomed for exactly this reason. Option A reverses the outcome. Option C ignores decades of evidence linking currency movements to trade flows. Option D gets it completely backwards: depreciation makes imports more expensive, reducing their volume, not increasing it.",
  },
  {
    id: "er-5",
    question:
      "If incomes in the United States rise significantly while incomes in Japan remain constant, what is the most likely effect on the dollar-yen exchange rate?",
    options: [
      "The dollar appreciates because higher incomes signal a stronger economy",
      "The dollar depreciates because Americans import more Japanese goods, increasing the supply of dollars",
      "The yen depreciates because Japanese exports fall",
      "The exchange rate is unchanged because income changes do not affect currency markets",
    ],
    correctIndex: 1,
    explanation:
      "Rising American incomes mean Americans buy more of everything, including Japanese imports. To pay for those imports, Americans swap dollars for yen, increasing the supply of dollars in the forex market. More supply with unchanged demand: the dollar depreciates. Option A is the classic student error, equating a \"stronger economy\" with a \"stronger currency.\" The income channel works through import spending, not confidence. Higher income drives more import demand, which floods the forex market with dollars and weakens the currency. Option C gets the yen direction wrong; the yen would appreciate as demand for yen rises. Option D ignores well-documented relationships.",
  },
  {
    id: "er-6",
    question:
      "The Federal Reserve pursues contractionary monetary policy by raising the federal funds rate. Through the exchange rate channel, this policy will:",
    options: [
      "Depreciate the dollar and increase net exports, partially offsetting the contraction",
      "Appreciate the dollar and decrease net exports, reinforcing the contraction",
      "Depreciate the dollar and decrease net exports, reinforcing the contraction",
      "Appreciate the dollar and increase net exports, partially offsetting the contraction",
    ],
    correctIndex: 1,
    explanation:
      "Trace the chain: Fed raises rates, foreign capital flows in seeking higher returns, demand for dollars rises, dollar appreciates, U.S. exports become expensive abroad, imports become cheap at home, net exports fall, AD shifts left. That is contractionary, reinforcing the rate hike's domestic investment effect. Option A gets the exchange rate direction wrong; higher rates appreciate the dollar. Option C also gets the exchange rate wrong. Option D correctly identifies appreciation but then incorrectly claims net exports rise; a stronger dollar hurts exports and boosts imports.",
  },
  {
    id: "er-7",
    question:
      "Which of the following would cause the demand curve for U.S. dollars in the foreign exchange market to shift to the left?",
    options: [
      "An increase in U.S. interest rates relative to foreign rates",
      "A decrease in foreign demand for U.S. exports",
      "An increase in American demand for European vacations",
      "An increase in foreign investment in U.S. stocks",
    ],
    correctIndex: 1,
    explanation:
      "Fewer foreign buyers of American exports means fewer foreigners needing dollars, so demand for dollars shifts left. Option A shifts demand right because higher U.S. rates attract foreign investment. Option C is the trap: Americans buying European vacations exchange dollars for euros, which shifts the supply curve of dollars, not the demand curve. Always ask: who needs dollars? Foreigners demand dollars, Americans supply them. Option D shifts demand right since foreigners buying U.S. stocks need dollars to complete the purchase.",
  },
  {
    id: "er-8",
    question:
      "If the U.S. experiences higher inflation than its trading partners, what is the expected effect on the exchange rate and net exports?",
    options: [
      "The dollar appreciates and net exports increase",
      "The dollar depreciates and net exports increase",
      "The dollar appreciates and net exports decrease",
      "The dollar depreciates and net exports decrease",
    ],
    correctIndex: 3,
    explanation:
      "Higher U.S. inflation makes American goods relatively expensive. Foreigners buy fewer U.S. exports (demand for dollars shifts left) and Americans pivot to cheaper foreign goods (supply of dollars shifts right). Both forces depreciate the dollar. Normally, depreciation boosts net exports, but when inflation caused the depreciation, the competitiveness loss dominates. American prices rose faster than the currency fell, so U.S. products remain relatively expensive even after the depreciation. Net exports decline. Option A gets both directions wrong. Option B correctly identifies depreciation but incorrectly assumes it overcomes the inflation penalty.",
  },
  {
    id: "er-9",
    question:
      "A U.S. dollar currently buys 110 Japanese yen. If the dollar appreciates to 130 yen per dollar, which of the following is true?",
    options: [
      "Japanese exports to the U.S. become more expensive for American buyers",
      "American exports to Japan become more expensive for Japanese buyers, and Japanese imports become cheaper for Americans",
      "American exports to Japan become cheaper for Japanese buyers",
      "The trade balance between the two countries is unaffected",
    ],
    correctIndex: 1,
    explanation:
      "At 130 yen per dollar instead of 110, a $100 American product costs Japanese buyers 13,000 yen instead of 11,000 yen. American exports are more expensive in Japan. Conversely, a 10,000-yen Japanese product falls from about $91 to about $77 for Americans. Japanese imports get cheaper. Option A reverses the import effect: dollar appreciation makes Japanese goods cheaper for Americans, not more expensive. Option C reverses the export effect: dollar appreciation makes U.S. goods more expensive abroad. Option D ignores the established relationship between exchange rates and trade flows.",
  },
  {
    id: "er-10",
    question:
      "According to purchasing power parity (PPP), if a basket of goods costs $100 in the United States and 90 euros in Europe, the PPP exchange rate should be approximately:",
    options: [
      "1.11 dollars per euro",
      "0.90 euros per dollar",
      "1.00 dollar per euro",
      "0.90 dollars per euro",
    ],
    correctIndex: 0,
    explanation:
      "PPP says exchange rates should adjust so identical goods cost the same everywhere. If the basket is $100 in the U.S. and 90 euros in Europe, then $100 = 90 euros, so 1 euro = $100/90 = approximately $1.11. The PPP rate is about 1.11 dollars per euro. Option B expresses the rate from the dollar side (0.90 euros per dollar), which is mathematically the same relationship but does not answer the question as asked. Option C assumes the currencies are equally valued, contradicting the given prices. Option D divides in the wrong direction.",
  },
  {
    id: "er-11",
    question:
      "The European Central Bank raises interest rates while the Federal Reserve holds rates constant. In the market for U.S. dollars, this will most likely:",
    options: [
      "Increase demand for dollars as investors seek higher U.S. returns",
      "Decrease demand for dollars as investors shift capital to higher-yielding European assets, causing the dollar to depreciate",
      "Have no effect because only the Fed influences the dollar's value",
      "Increase the supply of euros, causing the euro to depreciate",
    ],
    correctIndex: 1,
    explanation:
      "Higher European rates make European bonds more attractive relative to U.S. bonds. Investors, including Americans, shift capital toward Europe, selling dollars to buy euros. In the dollar forex market, demand for dollars falls (fewer foreigners buying U.S. assets) and supply of dollars rises (more Americans buying European assets). Both forces depreciate the dollar and appreciate the euro. Option A reverses the capital flow direction. Option C ignores that exchange rates respond to relative interest rates between countries. Option D gets the euro direction wrong; higher European rates attract capital inflows that strengthen the euro.",
  },
  {
    id: "er-12",
    question:
      "The J-curve effect describes the phenomenon where:",
    options: [
      "A currency depreciation immediately improves the trade balance",
      "After a currency depreciation, the trade balance initially worsens before improving, because existing contracts are denominated in the old exchange rate and quantities adjust slowly",
      "A currency appreciation always worsens the trade balance permanently",
      "Trade balances follow a J-shaped long-run growth path unrelated to exchange rates",
    ],
    correctIndex: 1,
    explanation:
      "The J-curve reflects a timing mismatch. When a currency depreciates, import prices rise and export prices fall immediately, but the actual quantities of goods traded adjust slowly because firms operate under existing contracts, supply chains need time to reconfigure, and consumers respond gradually to price signals. In the short run, the country pays more for roughly the same volume of imports, worsening the trade balance. Over time, the quantity adjustments dominate as exports increase and imports decrease, improving the trade balance and tracing the upward stroke of the J shape. Option A ignores the short-run quantity lag. Option C overstates permanence. Option D fabricates a meaning for the term.",
  },
  {
    id: "er-13",
    question:
      "Under a fixed exchange rate system, if market forces push a country's currency below the official peg, the central bank must:",
    options: [
      "Print more domestic currency to flood the market",
      "Buy its own currency using foreign reserves, which reduces the domestic money supply",
      "Raise tariffs on all imports to reduce demand for foreign currency",
      "Allow the currency to float freely until it recovers",
    ],
    correctIndex: 1,
    explanation:
      "Defending a peg that is under downward pressure requires the central bank to buy its own currency in the forex market using foreign reserves such as dollars, euros, or gold. This increases demand for the domestic currency (pushing its value back toward the peg) while simultaneously draining the domestic money supply, a contractionary side effect. This is why fixed exchange rates limit a country's monetary policy independence. Option A would worsen the problem by increasing supply and pushing the currency's value down further. Option C is a trade policy tool that does not directly defend the peg in the forex market. Option D describes abandoning the fixed system, not defending it.",
  },
  {
    id: "er-14",
    question:
      "A country runs a current account deficit of $300 billion. According to the balance of payments identity, this means:",
    options: [
      "The country must also run a financial account deficit of $300 billion",
      "The country has a financial account surplus of approximately $300 billion, meaning net foreign investment inflows cover the trade gap",
      "The country's government budget must also be in deficit by $300 billion",
      "The country's currency must depreciate by exactly $300 billion worth",
    ],
    correctIndex: 1,
    explanation:
      "Current account + financial account = approximately zero. A $300 billion current account deficit must be offset by a $300 billion financial account surplus, meaning foreign investors are purchasing $300 billion worth of domestic assets to cover the trade gap. The U.S. runs this pattern persistently: trade deficits financed by foreign purchases of Treasury securities, stocks, and real estate. Option A violates the identity. Option C confuses the government budget with the balance of payments; the twin deficits hypothesis links them, but they are not mechanically equal. Option D invents a nonexistent relationship between deficit size and currency depreciation.",
  },
  {
    id: "er-15",
    question:
      "Country A has a floating exchange rate. Its central bank pursues expansionary monetary policy by cutting interest rates. Through the exchange rate channel, this policy will:",
    options: [
      "Appreciate the currency, reduce net exports, and partially offset the expansionary effect",
      "Depreciate the currency, increase net exports, and reinforce the expansionary effect",
      "Appreciate the currency, increase net exports, and reinforce the expansionary effect",
      "Have no effect on the exchange rate because monetary policy only affects domestic markets",
    ],
    correctIndex: 1,
    explanation:
      "Lower interest rates reduce returns on domestic assets. Foreign investors pull capital out or invest less, reducing demand for the domestic currency. Domestic investors seek higher returns abroad, increasing the supply of domestic currency in forex markets. Both forces depreciate the currency. A weaker currency makes exports cheaper abroad (exports rise) and imports more expensive at home (imports fall), so net exports increase. Higher NX shifts AD right, reinforcing the original expansionary intent. The exchange rate channel and the domestic investment channel work in the same direction. Option A reverses the exchange rate movement. Option C compounds an incorrect exchange rate prediction with an incorrect net export prediction. Option D ignores the open-economy dimension of monetary policy entirely.",
  },
];
