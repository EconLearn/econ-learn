import type { PracticeQuestion } from "@/data/supply-demand-content";

export const internationalTradeContent = {
  title: "International Trade",
  subtitle: "From David Ricardo's 1817 insight to the 2018 steel tariffs: why countries specialize, how tariffs distort markets, and where the deadweight loss hides",
  sections: [
    {
      heading: "Comparative Advantage",
      content: `After China joined the World Trade Organization in 2001, Chinese exports to the United States surged from $102 billion to $399 billion over the next decade. Walmart alone was importing an estimated $27 billion in Chinese goods annually by 2006, electronics, clothing, toys, furniture, all at prices American manufacturers could not touch. Textile mills in North Carolina shut down. Furniture factories in Virginia closed. Politicians on both sides called for tariffs. But economists at the Peterson Institute estimated the China trade relationship was saving the average American household roughly $850 per year in lower consumer prices by 2010. The gains and losses get distributed unevenly, but the net calculation comes out positive. And the reason goes back to a principle David Ricardo laid out in 1817.

**Absolute advantage** means a country can produce a good using fewer resources than another country. China cranks out more steel per worker-hour than most nations. But absolute advantage does not determine trade patterns. **Comparative advantage** does, the country with the lowest opportunity cost for a given good is the one that should specialize in it. Even if China outproduces Vietnam in both electronics and textiles, both countries gain when each focuses where its opportunity cost is lowest. Vietnam's abundant low-cost labor keeps textile opportunity cost small relative to electronics. China's advanced manufacturing infrastructure keeps electronics opportunity cost low relative to textiles. They specialize, they trade, and total world output increases. Both end up consuming combinations of goods that would have been impossible if they'd tried to make everything themselves.

Ricardo worked this out more than two centuries ago. It still anchors every trade question on the AP Macro exam.`,
    },
    {
      heading: "Gains from Trade",
      content: `Without trade, a country can only consume what it produces along its own **production possibilities curve**. No Colombian coffee for Americans, no German precision machinery for Brazilians. Economists call this autarky, and it is a terrible way to run an economy.

Trade breaks through that ceiling. Colombia has the ideal climate and elevation for arabica beans, so it exports coffee where its comparative advantage is overwhelming, and imports machinery it would produce only at enormous opportunity cost. Germany with its engineering infrastructure does the reverse. Both countries end up consuming bundles of goods that lie outside their individual PPCs, combinations that were literally impossible under self-sufficiency. The arithmetic is not complicated. Voluntary exchange makes both sides richer than going it alone ever could.

The gains come from specialization, resources in each country shift toward their most productive use. The surplus output gets divided according to the **terms of trade**, which is just the price ratio at which goods exchange between countries. As long as the terms of trade fall between the two countries' domestic opportunity costs, both capture a share of the gains. If the terms of trade equal one country's opportunity cost exactly, that country gains nothing while the other gets the entire surplus. So the negotiation over terms of trade determines how the pie gets split. But trade theory guarantees the pie itself is bigger than what either country could bake alone.`,
    },
    {
      heading: "World Price and Trade Flows",
      content: `When a country drops its trade barriers, the domestic price of a good gets pulled toward the **world price**, the prevailing price on international markets set by global supply and demand.

Say the world price of rice sits below the U.S. domestic equilibrium. American consumers can buy rice more cheaply from Thailand or Vietnam than from domestic growers. Domestic demand at the lower world price exceeds what American farmers will supply, and imports fill the gap. Consumer surplus expands because buyers pay less. Producer surplus shrinks because domestic growers sell less at a lower price. But total surplus rises, the consumer gain exceeds the producer loss. That is the fundamental efficiency argument for free trade.

When the world price sits **above** domestic equilibrium, the dynamic flips. American soybean farmers, among the most productive globally, can sell at the higher world price. At that price they supply more than domestic buyers want, and the excess ships abroad as exports. Producer surplus rises, consumer surplus falls because domestic buyers pay the higher world price, but total surplus still increases because the producer gain outweighs the consumer loss.

On the graph, the horizontal teal line represents the world price. Drag the slider to watch imports and exports shift as the world price moves relative to domestic equilibrium.`,
    },
    {
      heading: "Tariffs",
      content: `In March 2018, President Trump slapped a 25% **tariff** on imported steel and 10% on imported aluminum under Section 232 of the Trade Expansion Act, citing national security. The steel tariff raised the effective domestic price above the world market level. On the graph, the purple line shows this new price, world price plus tariff per unit.

Four effects hit at once:

- **Domestic producers expand.** U.S. steel mills that were uncompetitive at the world price become viable at the tariff-inflated price. Nucor and U.S. Steel both reported higher capacity utilization in the months after.
- **Consumers cut back.** Ford estimated $1 billion in additional steel costs for 2018. Construction firms and appliance manufacturers faced similar squeezes, some costs passed to consumers, some absorbed through thinner margins.
- **Imports shrink** as the gap between domestic demand and domestic supply narrows.
- **Government collects tariff revenue** equal to the tariff rate times the remaining import quantity.

Drag the tariff slider on the graph to watch all four effects move together.`,
    },
    {
      heading: "Deadweight Loss from Tariffs",
      content: `The amber triangles on the graph are **deadweight loss**, surplus destroyed outright that benefits nobody. Not consumers, not producers, not the government.

The left triangle is **production-side deadweight loss**. Domestic mills produce units that cost more to manufacture than the world price at which those same units could be imported. A U.S. steel plant spending $650 per ton on steel that foreign mills sell for $500 is burning resources inefficiently. The tariff made that high-cost production artificially profitable by shielding it from competition.

The right triangle is **consumption-side deadweight loss**. Buyers who would have purchased steel at the world price refuse to pay the tariff-inflated price and exit the market entirely. A construction firm that would have started a project at $500-per-ton steel cancels it at $650. That value is just gone.

Between the two triangles sits the purple rectangle, tariff revenue. That revenue is a transfer from consumers to the government, not a net loss to society because the money stays in someone's hands and can be spent or redistributed. The two triangles, though, represent surplus that is destroyed outright. Nobody recovers it. That is why economists describe tariffs as reducing total surplus in the domestic market.`,
    },
    {
      heading: "Quotas",
      content: `Instead of taxing imports, a government can just cap the quantity. A **quota** is a hard numerical ceiling on import volume.

In the early 1980s the Reagan administration pressured Japan into accepting "voluntary export restraints" limiting Japanese auto shipments to 1.68 million vehicles per year. The EU still maintains quotas on certain agricultural products from non-member countries. On the surface, quotas and tariffs produce identical market effects, domestic price rises, imports fall, domestic production climbs, consumers lose surplus. But the critical difference is where the revenue flows. With a tariff, the government pockets the difference between the domestic price and the world price on every imported unit. With a quota, whoever holds the **import licenses** captures that windfall, known as **quota rents**. The rent per unit is the gap between the inflated domestic price and the world price, multiplied across every permitted import.

If the government auctions licenses competitively, it recaptures the rents and the quota functions identically to a tariff. In practice licenses are frequently handed to politically connected firms at no cost, making quotas less transparent and harder for the public to scrutinize. Same distortion, but money flowing to private intermediaries instead of the public treasury.`,
    },
    {
      heading: "AP Exam Connections",
      content: `Trade questions account for roughly 10-15% of the AP Macroeconomics exam. Here are the topics that come up the most:

- Calculating **comparative advantage** from a production possibilities table or output-per-worker data, then figuring out which country exports which good. Expect at least one question requiring opportunity cost calculations.
- Figuring out whether a country imports or exports once borders open, based on whether the world price is above or below domestic equilibrium
- The full tariff chain: price increase, quantity changes, import shift, consumer and producer surplus changes, government revenue, and the two **deadweight loss** triangles
- Tariff vs. quota, especially the question of who captures the revenue equivalent (government vs. import license holders)
- The argument that free trade maximizes total surplus while barriers reduce it, even though the distribution across producers, consumers, and government varies
- Protectionist arguments: infant industry defense, national security exceptions, anti-dumping provisions. The AP framework treats these as narrow situational exceptions, not broad challenges to comparative advantage.`,
    },
    {
      heading: "Worked Example",
      content: `Domestic steel market equilibrium: price = $60/unit, quantity = 50 units. World price: $40/unit. Trace what happens when borders open and then when the government slaps on a $10 tariff.

**Free trade.** At $40, domestic demand rises to 70 units (consumers respond to the lower price). Domestic supply drops to 30 units, many mills just cannot produce profitably at $40. Imports fill the 40-unit gap (70 minus 30). Consumers gain surplus from the lower price. Domestic producers lose sales and surplus. But the consumer gain exceeds the producer loss, so total surplus rises relative to autarky.

**$10 tariff imposed.** Effective domestic price becomes $40 + $10 = $50. Demand falls from 70 to 60 units. Domestic supply rises from 30 to 40 as more mills become profitable at $50. Imports drop by half: 60 - 40 = 20 units.

**Tariff revenue.** Government collects $10 on each of 20 imported units = $200. That is the purple rectangle on the graph, a transfer from consumers to the treasury.

**Deadweight loss.** Two triangles appear. Production side: domestic mills now make units costing between $40 and $50 that could have been imported at $40, wasting resources on inefficient production. Consumption side: buyers who would have purchased at $40 but will not pay $50 exit the market, destroying those transactions.

Same pattern repeats across every tariff scenario on the AP exam. Price rises, domestic output increases, consumption drops, imports shrink, government collects revenue, deadweight loss appears in the two triangles.`,
    },
  ],
};

export const internationalTradeQuestions: PracticeQuestion[] = [
  {
    id: "it-1",
    question:
      "Country A can produce 10 units of cloth or 5 units of wine. Country B can produce 8 units of cloth or 4 units of wine. Which country has a comparative advantage in wine?",
    options: [
      "Country A, because it produces more wine",
      "Country B, because its opportunity cost of wine is lower",
      "Neither; they have the same opportunity cost",
      "Country A, because it has an absolute advantage in both goods",
    ],
    correctIndex: 2,
    explanation:
      "Country A gives up 10/5 = 2 cloth per wine. Country B gives up 8/4 = 2 cloth per wine. Identical opportunity costs. Neither country has a comparative advantage in wine, and no gains from trade exist for this good. Option A confuses absolute advantage (producing more) with comparative advantage (lower opportunity cost). Option B is factually incorrect; B's opportunity cost equals A's, not lower. Option D falls into the trap of thinking absolute advantage determines trade patterns. Only relative opportunity costs matter.",
  },
  {
    id: "it-2",
    question:
      "When a small country opens to trade and the world price is below the domestic equilibrium price, what happens to consumer surplus?",
    options: [
      "Consumer surplus decreases because imports flood the market",
      "Consumer surplus increases because consumers pay a lower price",
      "Consumer surplus is unchanged because supply adjusts",
      "Consumer surplus decreases because domestic firms produce less",
    ],
    correctIndex: 1,
    explanation:
      "World price below domestic equilibrium means consumers pay less than they did under autarky. Lower price, higher quantity demanded, larger consumer surplus triangle. Unambiguous win for buyers. Option A uses alarming language about markets being \"flooded,\" but cheaper imports are precisely why consumer surplus grows. Option C is wrong because supply does adjust (domestic producers cut back), but that contraction hurts producers, not consumers. Option D confuses producer losses with consumer losses.",
  },
  {
    id: "it-3",
    question:
      "A tariff on imported steel will cause all of the following EXCEPT:",
    options: [
      "A decrease in the quantity of steel imported",
      "An increase in the domestic price of steel",
      "An increase in total surplus in the domestic steel market",
      "An increase in domestic steel production",
    ],
    correctIndex: 2,
    explanation:
      "Three of these are true; one is false. A tariff reduces imports (A is true), raises the domestic price (B is true), and boosts domestic production (D is true). Total surplus, however, falls. The two deadweight loss triangles represent surplus destroyed outright that nobody captures. Option C is the false statement. Tariff revenue is a transfer from consumers to the government, not a net gain, and the DWL triangles ensure the market as a whole loses.",
  },
  {
    id: "it-4",
    question:
      "The deadweight loss from a tariff arises because:",
    options: [
      "The government collects revenue that would otherwise go to consumers",
      "Domestic firms produce units at a cost above the world price, and some consumers are priced out",
      "Foreign producers earn less revenue",
      "The tariff eliminates all imports",
    ],
    correctIndex: 1,
    explanation:
      "Two sources of waste. Domestic firms produce units that cost more than the world price, burning resources on production that imports could handle more cheaply. Consumers willing to buy at the world price get priced out by the tariff and those transactions vanish entirely. Option A confuses tariff revenue with deadweight loss. Revenue is a transfer from consumers to the government; it stays in someone's pocket, so it is not destroyed. Option C is irrelevant to the domestic market's surplus calculation. Option D overstates the effect; most tariffs reduce imports rather than eliminating them completely.",
  },
  {
    id: "it-5",
    question:
      "How does a quota differ from a tariff that produces the same reduction in imports?",
    options: [
      "A quota raises the domestic price while a tariff does not",
      "A tariff generates government revenue; a quota may instead create quota rents for license holders",
      "A quota eliminates deadweight loss while a tariff does not",
      "A tariff benefits consumers while a quota benefits producers",
    ],
    correctIndex: 1,
    explanation:
      "Same price effect. Same deadweight loss triangles. Same import reduction. The difference is in the revenue-equivalent area. Tariff revenue goes to the government treasury. Quota rents go to whoever holds the import licenses, which could be domestic firms, foreign firms, or the government only if licenses are auctioned. Option A is wrong because quotas do raise domestic prices by restricting supply. Option C is wrong because quotas produce the identical two DWL triangles. Option D oversimplifies; neither tariffs nor quotas benefit consumers since both raise prices.",
  },
  {
    id: "it-6",
    question:
      "If the world price of a good is above a country's domestic equilibrium price, the country will:",
    options: [
      "Import the good because domestic consumers demand more",
      "Export the good because domestic producers can supply more than domestic consumers demand",
      "Neither import nor export because trade is only beneficial when the world price is lower",
      "Import the good because foreign producers are more efficient",
    ],
    correctIndex: 1,
    explanation:
      "A world price above the domestic equilibrium means domestic producers can sell at a higher price than they previously received. At that elevated price, they supply more than domestic consumers want. The excess goes abroad as exports. Option A reverses the logic entirely; a higher world price creates an export surplus, not an import gap. Option C is flatly wrong; trade benefits countries regardless of the direction of the price difference. Option D misidentifies the relevant actors; domestic producers are the ones selling to the world market.",
  },
  {
    id: "it-7",
    question:
      "A country has a comparative advantage in producing computers over textiles. According to trade theory, the country should:",
    options: [
      "Produce only computers and import all textiles",
      "Specialize in computers and trade for textiles, though not necessarily produce zero textiles",
      "Produce both goods equally to maintain self-sufficiency",
      "Export textiles because other countries will pay more for them",
    ],
    correctIndex: 1,
    explanation:
      "Comparative advantage in computers means this country's opportunity cost of computers is lower than its trading partners'. Trade theory says lean into computer production and trade for textiles. But \"specialize\" does not mean \"produce exclusively.\" Complete specialization is a textbook extreme. Real economies specialize partially and still capture gains. Option A overstates the theory. Option C describes autarky, which is what trade theory argues against. Option D confuses which good to export; you export where your opportunity cost is low, not the other good.",
  },
  {
    id: "it-8",
    question:
      "As a tariff on imported goods increases from $0, what happens to tariff revenue?",
    options: [
      "Tariff revenue increases continuously as the tariff rises",
      "Tariff revenue first increases, then decreases as the tariff becomes large enough to eliminate imports",
      "Tariff revenue remains constant regardless of the tariff rate",
      "Tariff revenue decreases immediately because imports fall",
    ],
    correctIndex: 1,
    explanation:
      "Revenue equals the tariff rate multiplied by the import quantity. At a $0 tariff, revenue is zero. As the tariff climbs, revenue rises because each imported unit is taxed more. But higher tariffs simultaneously crush import volume. At some prohibitive tariff level, imports drop to zero, and zero imports means zero revenue. The result traces an inverted-U shape, conceptually similar to the Laffer curve. Option A tracks only the rate rising and ignores the quantity collapsing. Option C is wrong because both variables shift as the tariff changes. Option D is incorrect at small tariff levels; a tiny tariff barely dents import volume, so revenue initially climbs.",
  },
  {
    id: "it-9",
    question:
      "Country A can produce 100 units of wheat or 50 units of steel. Country B can produce 60 units of wheat or 40 units of steel. Which country has the comparative advantage in steel?",
    options: [
      "Country A, because it can produce more steel",
      "Country B, because its opportunity cost of steel (1.5 wheat) is lower than Country A's (2 wheat)",
      "Country A, because its opportunity cost of steel (2 wheat) is lower than Country B's (1.5 wheat)",
      "Neither, because Country A has the absolute advantage in both goods",
    ],
    correctIndex: 1,
    explanation:
      "Country A: 1 steel costs 100/50 = 2 wheat. Country B: 1 steel costs 60/40 = 1.5 wheat. Country B gives up less wheat per unit of steel, so B has the comparative advantage. Country A, meanwhile, has the comparative advantage in wheat (0.5 steel per wheat versus B's 0.67). Option A confuses absolute advantage with comparative advantage. Option C reverses the comparison; 2 wheat is a higher cost than 1.5 wheat. Option D commits the classic error of assuming absolute advantage determines trade patterns.",
  },
  {
    id: "it-10",
    question:
      "Using the countries from the previous question (Country A: 100 wheat or 50 steel; Country B: 60 wheat or 40 steel), for trade to benefit both countries, the terms of trade (price of 1 steel in wheat) must fall between:",
    options: [
      "0 and 1 wheat per steel",
      "1 and 1.5 wheat per steel",
      "1.5 and 2 wheat per steel",
      "2 and 3 wheat per steel",
    ],
    correctIndex: 2,
    explanation:
      "The terms of trade must fall between the two countries' opportunity costs of the exported good. Country B exports steel at a domestic cost of 1.5 wheat per steel. Country A imports steel at a domestic cost of 2 wheat per steel. For both to gain, the price must sit between 1.5 and 2. Below 1.5, Country B would sell steel for less than its domestic opportunity cost, eliminating its gain. Above 2, Country A could produce steel more cheaply at home and would have no reason to import. Option A is far too low. Option B includes values below Country B's opportunity cost. Option D exceeds Country A's opportunity cost.",
  },
  {
    id: "it-11",
    question:
      "A country imposes a tariff on imported automobiles. Which of the following correctly describes the welfare effects?",
    options: [
      "Consumer surplus increases, producer surplus decreases, and total surplus increases",
      "Consumer surplus decreases, producer surplus increases, government gains revenue, but total surplus decreases due to deadweight loss",
      "Consumer surplus decreases, producer surplus decreases, and the government gains no revenue",
      "Consumer surplus is unchanged because consumers switch to domestic cars",
    ],
    correctIndex: 1,
    explanation:
      "The tariff raises the domestic price above the world price. Consumers pay more and buy less, so consumer surplus falls. Domestic producers sell at the higher price and expand output, so producer surplus rises. The government collects revenue on the remaining imports. But the two deadweight loss triangles mean total surplus declines. The consumer loss exceeds the combined producer gain and government revenue. Option A reverses the consumer effect. Option C is wrong because the government explicitly collects tariff revenue. Option D ignores the price increase; consumers who switch to domestic cars still pay more than they would under free trade.",
  },
  {
    id: "it-12",
    question:
      "Under free trade, a country imports 100 units of shoes at the world price of $20. The government then imposes a quota limiting imports to 40 units, which raises the domestic price to $30. What happens to the equivalent of tariff revenue?",
    options: [
      "The government collects $400 in tariff revenue",
      "The $10 per-unit price difference on 40 imported units ($400) becomes quota rent captured by import license holders, not the government",
      "The $400 disappears as deadweight loss",
      "Domestic producers capture the entire $400 as additional profit",
    ],
    correctIndex: 1,
    explanation:
      "Under a quota, there is no border tax. The price rises from $20 to $30 because supply is restricted. The 40 imported units carry a $10-per-unit windfall, the gap between the $30 domestic price and the $20 world price, totaling $400. That windfall goes to whoever holds the import licenses. Unless the government auctions those licenses, the rent accrues to private holders. Option A describes a tariff outcome, not a quota. Option C is wrong because the $400 is transferred, not destroyed. Option D confuses the quota rents on imported units with the separate gains domestic producers capture from selling at the higher domestic price.",
  },
  {
    id: "it-13",
    question:
      "A country's exports total $800 billion and its imports total $950 billion. This country has:",
    options: [
      "A trade surplus of $150 billion",
      "A trade deficit of $150 billion",
      "A balanced trade account",
      "A trade deficit of $950 billion",
    ],
    correctIndex: 1,
    explanation:
      "Net exports = exports minus imports = $800B - $950B = -$150 billion. Negative net exports means a trade deficit. The country imports more than it exports, and the gap must be financed by capital inflows from foreign investors. Option A reverses the sign; a surplus requires exports to exceed imports. Option C is wrong because $800B does not equal $950B. Option D confuses total imports with the deficit; the deficit is the difference, not the total.",
  },
  {
    id: "it-14",
    question:
      "In the balance of payments, the current account and the financial (capital) account must sum to approximately zero. If a country runs a current account deficit of $200 billion, it must have:",
    options: [
      "A financial account deficit of $200 billion",
      "A financial account surplus of $200 billion",
      "Zero net capital flows",
      "A government budget surplus of $200 billion",
    ],
    correctIndex: 1,
    explanation:
      "The balance of payments identity: current account + financial account = approximately zero. A $200 billion current account deficit (spending more abroad than earning) requires $200 billion in net foreign investment inflows, creating a financial account surplus. The United States has operated this way for decades, running trade deficits financed by foreign purchases of Treasury bonds and American real estate. Option A violates the identity; both accounts cannot be in deficit. Option C contradicts the requirement that the deficit be financed. Option D confuses the government budget with the balance of payments; they are related concepts but not mechanically identical.",
  },
  {
    id: "it-15",
    question:
      "Country X and Country Y both produce food and clothing. Under autarky, Country X produces at a point inside its PPC due to inefficiency. When trade opens, Country X can:",
    options: [
      "Only consume at points on its PPC, never beyond it",
      "Consume at points beyond its PPC by specializing according to comparative advantage and trading",
      "Produce at points beyond its PPC",
      "Consume at points beyond its PPC only if it has an absolute advantage in both goods",
    ],
    correctIndex: 1,
    explanation:
      "Trade expands consumption possibilities beyond the PPC. By specializing in the good where it has a comparative advantage, exporting the surplus, and importing the other good, a country can consume combinations of goods that were impossible under self-sufficiency. Even starting from an inefficient point inside the PPC, trade opens consumption bundles that exceed the frontier. Option A ignores the central insight of trade theory. Option C confuses consumption with production; a country cannot produce beyond its PPC without growth that shifts the curve outward, but it can consume beyond it through trade. Option D incorrectly requires absolute advantage; comparative advantage is sufficient.",
  },
];
