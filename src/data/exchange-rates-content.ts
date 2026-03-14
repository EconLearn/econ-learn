import type { PracticeQuestion } from "@/data/supply-demand-content";

export const exchangeRatesContent = {
  title: "Exchange Rates",
  subtitle: "How currencies are priced in the foreign exchange market and why those prices matter for trade and capital flows",
  sections: [
    {
      heading: "The Foreign Exchange Market",
      content: `Over $7 trillion changes hands daily in the **foreign exchange (forex) market**, dwarfing every stock exchange on the planet combined. The **exchange rate** is a price: how much of one currency trades for another.

Foreigners demand dollars. A BMW plant in Munich importing American microchips needs dollars to pay the supplier. A Japanese pension fund buying U.S. Treasury bonds needs dollars to settle the trade. Every foreign purchase of American goods, services, or assets creates demand for dollars.

Americans supply dollars. Buying a German car, Korean electronics, or a vacation in Mexico sends dollars into the forex market in exchange for euros, won, or pesos.

Standard supply-and-demand logic applies. Equilibrium occurs where the quantity of dollars demanded equals the quantity supplied, and that intersection determines the exchange rate. On the graph, the vertical axis shows the dollar's price in foreign currency (euros per dollar) and the horizontal axis tracks the quantity of dollars traded.`,
    },
    {
      heading: "Appreciation and Depreciation",
      content: `In 2022 the dollar surged against nearly every major currency. The euro fell below parity for the first time in twenty years: one dollar bought more than one euro. That is **appreciation**, where each dollar commands more foreign currency than before.

With numbers: the rate moves from 1.00 to 1.20 euros per dollar. A $100 American product that cost Europeans 100 euros now costs 120 euros. U.S. exports get more expensive abroad, and foreigners buy fewer of them. Meanwhile, a 100-euro German product drops from $100 to about $83 for American buyers. Imports get cheaper, so Americans buy more.

**Depreciation** reverses every effect. When the yen weakened past 150 per dollar in late 2022, Japanese exports became a bargain for Americans while dollar-priced American goods became painfully expensive in Tokyo. A weaker currency boosts exports and raises import costs, pushing **net exports** higher.`,
    },
    {
      heading: "What Shifts Demand and Supply",
      content: `Five shifters drive exchange rate movements and show up repeatedly on the AP exam.

**Interest rate differentials.** The Fed hiked rates aggressively in 2022-2023 while the ECB lagged behind. Foreign investors piled into higher-yielding U.S. bonds, demanding dollars to make those purchases. Demand for dollars shifted right, and the dollar appreciated sharply against the euro.

**Income growth.** If American GDP grows faster than Japan's, Americans import more Japanese cars, electronics, and food. More dollars flow into the forex market (supply shifts right), and the dollar **depreciates**. If Japan's economy booms instead, Japanese consumers import more American goods, boosting demand for dollars.

**Inflation differentials.** Higher U.S. inflation makes American exports pricier. Foreigners buy less (demand for dollars shifts left) while Americans pivot to cheaper imports (supply of dollars shifts right). Both forces depreciate the dollar. The 1970s stagflation era demonstrated this clearly.

**Speculation and expectations.** Currency traders do not wait for data. If markets expect the dollar to strengthen, traders buy dollars now, pushing up demand and actually causing the appreciation they predicted. Self-fulfilling prophecy is built into forex.

**Tastes and preferences.** A global craze for American tech products increases foreign demand for dollars. A shift by American consumers toward European luxury goods increases the supply of dollars. Preferences move curves.`,
    },
    {
      heading: "Exchange Rates and the Current Account",
      content: `A strong dollar hurts American manufacturers because the exchange rate feeds directly into **net exports** (NX = exports minus imports), and NX is a component of aggregate demand.

When the dollar appreciates, U.S. goods cost more in foreign currency. Exports drop. Foreign goods cost fewer dollars. Imports climb. NX falls. In 2022, when the dollar hit two-decade highs, Caterpillar and other manufacturers reported that the strong dollar was cutting into overseas revenue.

When the dollar depreciates, exports become cheaper abroad and imports become more expensive at home. Exports rise, imports fall, NX increases.

Connect this to AD. AD = C + I + G + **NX**. Dollar appreciation that lowers NX shifts aggregate demand left, a contractionary force. Dollar depreciation that raises NX shifts AD right, an expansionary force. The forex market is not isolated from the domestic economy; exchange rate swings feed straight into GDP.`,
    },
    {
      heading: "Exchange Rates and Capital Flows",
      content: `The **capital account** and current account are two sides of the same coin. A country importing more than it exports (current account deficit) must be attracting enough foreign investment to cover the gap (capital account surplus). The U.S. has run this pattern for decades: trade deficits financed by massive foreign purchases of Treasury bonds and American real estate.

The AP exam tests one chain more than almost anything else: **interest rate to exchange rate to net exports**. The Fed raises rates. Foreign investors chase higher yields and buy U.S. bonds. To do so, they demand dollars. The dollar appreciates. A stronger dollar makes American exports expensive and imports cheap. Net exports fall.

That chain exposes a second channel of monetary policy. When the Fed tightens, the obvious effect is reduced domestic investment from higher borrowing costs. The less obvious effect: the dollar strengthens and net exports drop. Both channels are **contractionary** and reinforce each other.

Reverse it for expansionary policy. The Fed cuts rates, the dollar weakens, net exports rise, and the stimulus from cheaper borrowing gets amplified. Two channels, same direction.`,
    },
    {
      heading: "Worked Example",
      content: `The Fed raises the federal funds rate from 3% to 5%.

**Capital flows.** U.S. bonds now yield 5% instead of 3%. A German pension fund earning 2% on European bonds notices the spread. Money flows toward the higher return, and foreign investors compete for U.S. assets.

**Forex market.** To buy U.S. bonds, foreign investors need dollars. Demand for dollars shifts right. The exchange rate climbs from 0.90 to 1.05 euros per dollar.

**Trade prices.** A $100 American product that cost Europeans 90 euros now costs 105 euros. U.S. exports become more expensive abroad. European goods get cheaper for Americans. Imports rise, exports fall.

**Net exports and AD.** Falling net exports reduce aggregate demand, reinforcing the contractionary effect of the rate hike. The exchange rate channel and the investment channel both tighten the economy.

The AP exam will give you one link and ask you to trace the rest. The sequence to internalize: interest rates up, capital inflows, dollar appreciates, net exports down, AD shifts left.`,
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
      "0.85 to 1.10 euros per dollar — each dollar grabs more euros than before, so the dollar appreciated. A $100 American product that cost Europeans 85 euros now costs 110 euros. U.S. exports got pricier for foreign buyers. Option A and D are wrong because they say the dollar depreciated — the math shows the opposite. Option C is the sneakiest trap: it correctly identifies appreciation but flips the import effect. Appreciation makes imports cheaper for Americans (a 100-euro item now costs fewer dollars), not more expensive.",
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
      "When an American buys a Toyota, she exchanges dollars for yen — those dollars flow into the forex market as supply. Any American purchase of foreign goods, services, or assets puts dollars into the market. Option A confuses the money supply (Fed printing currency) with forex supply — two completely different concepts. Option B gets the direction backwards: foreign governments buying U.S. Treasuries need dollars to make that purchase, so they demand dollars, not supply them. Option D also describes demand for dollars — foreign tourists spending money in the U.S. are exchanging their currency for dollars, which is dollar demand.",
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
      "Higher U.S. rates mean better returns on American bonds. European investors want in, so they need dollars — demand for dollars shifts right, and the dollar appreciates. This played out visibly during the Fed's 2022-2023 rate hikes as the dollar surged against the euro. Option A flips the curve: higher U.S. rates trigger capital inflows (foreigners buying U.S. assets), which is demand for dollars, not supply. Option C gets both direction and curve wrong. Option D is wrong because the supply curve isn't what's moving — foreign investors buying U.S. assets don't supply dollars; they demand them.",
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
      "Weaker dollar = U.S. goods cheaper in foreign currency (exports rise) + foreign goods pricier in dollars (imports fall). Both effects push net exports higher. When the yen weakened in 2022, Japan's export sector boomed for exactly this reason. Option A reverses the outcome — depreciation increases net exports, not decreases them. Option C ignores decades of evidence that currency movements affect trade flows. Option D gets it completely backwards: depreciation makes imports more expensive, so Americans buy fewer imports, not more. Don't confuse 'more expensive' with 'buy more.'",
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
      "Rising U.S. incomes mean Americans buy more of everything, including Japanese imports — more Toyotas, more Sony products, more sushi-grade tuna. To pay for Japanese goods, Americans swap dollars for yen, increasing the supply of dollars in the forex market. More supply, same demand: the dollar depreciates. Option A is the classic student mistake — assuming a 'stronger economy' means a 'stronger currency.' The income channel works through imports, not confidence. Higher income drives more import spending, which floods the forex market with dollars and weakens the currency. Option C is wrong because the yen would appreciate (not depreciate) as demand for yen rises. Option D ignores the well-documented link between income and currency markets.",
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
      "Trace the chain: Fed raises rates, foreign capital flows in, demand for dollars rises, dollar appreciates, U.S. exports become expensive, imports become cheap, net exports fall, AD shifts left. That's contractionary — same direction as the rate hike itself. The two channels (investment and exchange rate) reinforce each other. Option A gets the exchange rate direction wrong — higher rates appreciate the dollar, they don't depreciate it. If you picked A, you broke the chain at link two. Option C also gets the exchange rate wrong (depreciation instead of appreciation). Option D gets the exchange rate right but flips the net export effect — a stronger dollar hurts exports and boosts imports, so net exports fall, not rise.",
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
      "Fewer foreign buyers of American exports = fewer foreigners needing dollars = demand for dollars shifts left. Straightforward. Option A is backwards — higher U.S. interest rates attract foreign investment, which shifts demand right, not left. Option C is the trap most students fall into: Americans buying European vacations do involve international currency exchange, but Americans are supplying dollars (swapping them for euros), not demanding them. That shifts the supply curve, not the demand curve. Always ask: who needs dollars? Foreigners demand dollars. Americans supply them. Option D shifts demand right (foreigners buying U.S. stocks need dollars), not left.",
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
      "U.S. inflation running hotter than trading partners makes American goods relatively expensive. Two forex effects hit simultaneously: foreigners buy fewer U.S. exports (demand for dollars shifts left) and Americans pivot to cheaper foreign goods (supply of dollars shifts right). Both depreciate the dollar. But here's the catch — normally depreciation boosts net exports, yet the inflation that caused the depreciation also makes U.S. goods less competitive. Prices rose faster than the currency fell, so American products remain relatively expensive even after depreciation. Net exports decline. Option A gets both directions wrong. Option B correctly identifies depreciation but wrongly assumes it overcomes the inflation penalty — when inflation causes the depreciation, the competitiveness loss dominates the currency adjustment.",
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
      "When the dollar appreciates from 110 to 130 yen, each dollar buys more yen. A $100 American product now costs Japanese buyers 13,000 yen instead of 11,000 yen — American exports become more expensive in Japan. Conversely, a 10,000-yen Japanese product falls from about $91 to about $77 for Americans — Japanese imports get cheaper. Option A reverses the import effect: appreciation of the dollar makes Japanese goods cheaper (not more expensive) for Americans because each dollar stretches further. Option C reverses the export effect: dollar appreciation makes U.S. goods more expensive abroad, not cheaper. Option D ignores the well-established link between exchange rates and trade flows — currency movements directly alter the relative prices of exports and imports.",
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
      "Purchasing power parity says exchange rates should adjust so identical goods cost the same in both countries. If the basket costs $100 in the U.S. and 90 euros in Europe, then $100 = 90 euros, which means 1 euro = $100/90 = approximately $1.11. The PPP rate is about 1.11 dollars per euro. Option B expresses the rate in the wrong direction — 0.90 euros per dollar would mean $100 buys 90 euros, which is the same relationship but expressed from the dollar side; the question asks for dollars per euro. Option C assumes the currencies have equal value, which contradicts the given prices. Option D incorrectly divides in the wrong direction — 90/100 gives euros per dollar, not dollars per euro.",
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
      "When European rates rise relative to U.S. rates, European bonds become more attractive. Investors (including Americans) shift capital toward Europe, which means selling dollars to buy euros. In the dollar forex market, this reduces demand for dollars (fewer foreigners buying U.S. assets) and increases supply of dollars (more Americans buying European assets). Both forces push the dollar to depreciate and the euro to appreciate. Option A reverses the flow — higher European rates attract capital away from the U.S., not toward it. Option C ignores that exchange rates respond to relative interest rates between countries, not just one central bank's actions. Option D gets the euro direction wrong — higher European rates attract capital inflows that strengthen the euro, not weaken it.",
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
      "The J-curve captures a timing mismatch. When a currency depreciates, import prices rise and export prices fall immediately, but the quantities of imports and exports take time to adjust because firms have existing contracts, supply chains need reconfiguring, and consumers respond slowly to price changes. In the short run, the country pays more for the same volume of imports (worsening the trade deficit). Over time, the quantity effects dominate — exports increase and imports decrease — and the trade balance improves, tracing a J-shaped path. Option A ignores the short-run lag in quantity adjustment. Option C is wrong in two ways: appreciation tends to worsen the trade balance (correct direction), but the effect is not necessarily permanent — trade flows eventually adjust. Option D fabricates a meaning for the J-curve that has no basis in trade economics.",
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
      "When market pressure pushes a currency below its fixed rate, the central bank must defend the peg by buying its own currency in the forex market using foreign reserves (dollars, euros, gold). This increases demand for the domestic currency (pushing its value back up) while simultaneously draining domestic money supply (a contractionary side effect). This is why fixed exchange rates limit monetary policy independence. Option A would worsen the problem — printing more currency increases supply and pushes the value down further. Option C is a trade policy response that does not directly defend the exchange rate peg in the forex market. Option D contradicts the premise of a fixed system — floating freely is what happens when the peg is abandoned, not when it is defended.",
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
      "The balance of payments must balance: current account + financial account = 0 (approximately). A $300 billion current account deficit (spending more abroad than earning) must be matched by a $300 billion financial account surplus (foreign investors buying domestic assets — stocks, bonds, real estate — to cover the gap). The U.S. runs this pattern consistently: trade deficits financed by massive foreign purchases of Treasury securities. Option A violates the balance of payments identity — both accounts cannot be in deficit simultaneously. Option C confuses the government budget deficit (fiscal concept) with the current account deficit (international concept); they are related through the twin deficits hypothesis but are not mechanically equal. Option D invents a nonexistent relationship — exchange rates adjust to equilibrate markets, but there is no formula linking deficit size to a specific depreciation amount.",
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
      "Lower interest rates reduce the return on domestic assets. Foreign investors pull capital out (or invest less), reducing demand for the domestic currency. Domestic investors seek higher returns abroad, increasing the supply of domestic currency in forex markets. Both forces depreciate the currency. A weaker currency makes exports cheaper for foreigners (exports rise) and imports more expensive domestically (imports fall), so net exports increase. Higher net exports shift AD right — reinforcing the original expansionary intent of the rate cut. The exchange rate channel and the domestic investment channel work in the same direction. Option A gets the exchange rate direction wrong — lower rates depreciate the currency, not appreciate it. Option C also gets the exchange rate wrong and then compounds the error with an incorrect net export prediction. Option D ignores the open-economy dimension of monetary policy — interest rate differentials are one of the most powerful exchange rate determinants.",
  },
];
