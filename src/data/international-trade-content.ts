import type { PracticeQuestion } from "@/data/supply-demand-content";

export const internationalTradeContent = {
  title: "International Trade",
  subtitle: "How countries gain from specialization and how tariffs distort those gains",
  sections: [
    {
      heading: "Comparative Advantage",
      content: `Why would the United States ever import something it could produce domestically? The answer is opportunity cost, not raw ability.

A country has an **absolute advantage** when it produces a good with fewer resources. China manufactures more steel per worker-hour than most nations. But trade patterns are not set by who is "better" at production. They are set by **comparative advantage**: who gives up the least of one good to produce another.

Even if China outproduces Vietnam in both electronics and textiles, both countries gain when each specializes where its opportunity cost is lowest. Vietnam's cheap labor keeps its textile opportunity cost tiny relative to electronics. China's advanced factories keep its electronics opportunity cost low relative to textiles. Each focuses on its comparative advantage, they trade, and total world output rises. Both consume beyond what they could produce alone.

David Ricardo formalized this logic in 1817. It still anchors every AP trade question.`,
    },
    {
      heading: "Gains from Trade",
      content: `Without trade, a country is limited to consuming what it can produce on its own **production possibilities curve**. No Colombian coffee, no German machinery. That ceiling is called autarky.

Trade breaks through it. Colombia exports coffee (comparative advantage) and imports machinery. Germany does the reverse. Both end up consuming bundles of goods that sit outside their individual PPCs, combinations that were impossible under self-sufficiency.

The gains come from specialization. Resources shift toward their most productive use in each country. The surplus is split according to the **terms of trade**, the price ratio at which goods are exchanged. As long as the terms of trade fall between the two countries' opportunity costs, both sides benefit.`,
    },
    {
      heading: "World Price and Trade Flows",
      content: `When a country drops its trade barriers, the domestic price gets pulled to the **world price** prevailing on international markets.

If the world price of rice sits below the domestic equilibrium, U.S. consumers want more rice than U.S. farmers supply at that price. The gap gets filled by imports. Consumer surplus expands, producer surplus shrinks, but total surplus rises because buyers gain more than sellers lose.

If the world price sits **above** domestic equilibrium (U.S. soybeans, for instance, where American farmers are globally competitive), domestic producers supply more than domestic buyers want at that high price. The excess ships abroad as exports. Producer surplus rises, consumer surplus falls, but total surplus still increases.

On the graph, the horizontal teal line represents the world price. Drag the slider to watch imports and exports shift as the world price moves relative to domestic equilibrium.`,
    },
    {
      heading: "Tariffs",
      content: `In 2018, the U.S. imposed a 25% **tariff** on imported steel, a tax paid at the border that raised the effective domestic price. On the graph, the purple line shows the new price: world price plus tariff.

Four effects hit simultaneously:
- **Domestic producers supply more.** U.S. mills become viable at the inflated price and fire up capacity.
- **Domestic buyers demand less.** Automakers and construction firms cut back as steel costs rise.
- **Imports shrink.** The gap between what buyers want and what domestic mills produce narrows.
- **The government collects tariff revenue.** Tariff rate times the remaining import quantity.

Drag the tariff slider on the graph to watch all four effects move together.`,
    },
    {
      heading: "Deadweight Loss from Tariffs",
      content: `Who pays for a tariff, and where does the money go? The amber triangles on the graph represent **deadweight loss**: pure waste that benefits nobody.

The left triangle is **production-side DWL**. Domestic firms produce units costing more to make than the world price. A U.S. steel mill spending $45 per unit on something importable at $40 is burning resources. The tariff made that inefficient production artificially profitable.

The right triangle is **consumption-side DWL**. Buyers who would have purchased at the world price refuse to pay the tariff-inflated price. Those transactions vanish entirely.

The purple rectangle between the triangles is tariff revenue, a transfer from consumers to the government. Not a net loss, since it remains in someone's hands. The two triangles, however, represent surplus that is destroyed outright. No one recovers it.`,
    },
    {
      heading: "Quotas",
      content: `Instead of taxing imports, a government can cap how many enter the country. A **quota** is a hard ceiling on import quantity. The U.S. used quotas on Japanese auto imports in the 1980s. The EU still caps certain agricultural imports today.

Quotas and tariffs look the same on the surface: domestic price rises, imports fall, domestic production climbs, and consumers lose surplus. The difference is where the money goes. With a tariff, the government collects revenue. With a quota, whoever holds the **import licenses** pockets the equivalent windfall, called **quota rents**: the gap between the world price and the inflated domestic price on every permitted unit.

If the government auctions those licenses, it recaptures the rents, making the quota functionally identical to a tariff. But licenses are often handed to politically connected firms for free, which makes quotas less transparent and harder for voters to track.`,
    },
    {
      heading: "AP Exam Connections",
      content: `Trade questions account for roughly 10-15% of the AP Macro exam. The recurring topics:

- Calculating **comparative advantage** from a production possibilities table or output-per-worker data. Expect this on exam day.
- Identifying which country exports and which imports once trade opens
- Tracing tariff effects through the full chain: price, quantity, imports, consumer surplus, producer surplus, government revenue, and **deadweight loss**
- Distinguishing tariffs from quotas, especially regarding who captures the revenue
- Arguing that free trade maximizes total surplus while trade barriers reduce it
- Evaluating protectionist arguments (infant industry, national security, anti-dumping). The AP exam treats these as narrow exceptions, not as legitimate challenges to comparative advantage.`,
    },
    {
      heading: "Worked Example",
      content: `Domestic steel equilibrium: P = $60, Q = 50 units. World price: $40. What happens when borders open, then the government imposes a $10 tariff?

**Free trade.** At the $40 world price, demand rises to 70 units (cheaper steel, more buyers). Domestic supply falls to 30 units (mills cannot compete at $40). Imports fill the 40-unit gap. Consumers gain from lower prices. Domestic producers lose sales. But the consumer gain exceeds the producer loss, so total surplus rises.

**Impose the tariff.** Effective price: $40 + $10 = $50. Demand shrinks to 60 units. Domestic supply climbs to 40 units. Imports fall by half: 60 - 40 = 20 units.

**Revenue.** Tariff revenue = $10 x 20 imported units = $200. That is the purple rectangle on the graph, a transfer from consumers to the government treasury.

**Deadweight loss.** Two DWL triangles appear. Production side: domestic mills now produce units costing between $40 and $50 that could have been imported at $40. Consumption side: buyers willing to pay $40 but not $50 exit the market. Neither triangle benefits anyone. That surplus is destroyed.

The pattern holds across every tariff scenario: price rises, domestic output increases, consumption drops, imports shrink, and deadweight loss appears.`,
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
      "Neither — they have the same opportunity cost",
      "Country A, because it has an absolute advantage in both goods",
    ],
    correctIndex: 2,
    explanation:
      "Run the math: Country A gives up 10/5 = 2 cloth per wine. Country B gives up 8/4 = 2 cloth per wine. Identical opportunity costs — neither country has a comparative advantage in wine, so no gains from trade exist here. Option A is wrong because producing more wine is absolute advantage, not comparative. Option B is wrong because B's opportunity cost is not lower — it's the same. Option D falls into the classic trap: absolute advantage (producing more of everything) does not determine who trades what. Only opportunity costs do.",
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
      "World price below domestic equilibrium = consumers pay less than they did under autarky. Lower price, higher quantity demanded, larger consumer surplus triangle. That's an unambiguous win for buyers. Option A tries to make 'flood the market' sound scary, but cheaper imports are precisely why consumer surplus grows — more goods, lower prices. Option C is wrong because supply does adjust (domestic producers cut back), but that doesn't freeze consumer surplus. Option D confuses producer losses with consumer losses — domestic firms do produce less, but that hurts producers, not consumers.",
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
      "EXCEPT question — three options are true, one is false. A tariff does reduce imports (A is true), raise the domestic price (B is true), and boost domestic production (D is true). What it does not do is increase total surplus. The two DWL triangles represent surplus destroyed outright. Total surplus falls, not rises, making C the false statement. Students miss this when they focus on tariff revenue and forget that revenue is a transfer (consumers to government), not a net gain.",
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
      "Two sources of waste. First, domestic firms produce units costing more than the world price — resources burned on production that imports could handle cheaper. Second, consumers who'd buy at the world price get priced out by the tariff — transactions that simply vanish. Option A confuses revenue with DWL: tariff revenue moves from consumers to the government, but it's still in someone's pocket — it's a transfer, not destruction. Option C is irrelevant: foreign producers earning less isn't deadweight loss in the domestic market. Option D overstates tariffs — most tariffs reduce imports, they don't eliminate them entirely.",
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
      "Same price effect, same DWL triangles, same reduction in imports — but the money flows differently. Tariff revenue lands in the government's treasury. Quota rents land in the pockets of whoever holds import licenses — could be domestic firms, foreign firms, or the government (only if licenses are auctioned). Option A is wrong because quotas do raise the domestic price — restricting quantity drives price up, same as a tariff. Option C is wrong because quotas produce the exact same two deadweight loss triangles. Option D oversimplifies: neither tool benefits consumers; both raise prices on them.",
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
      "World price above domestic equilibrium means domestic producers can sell at a higher price than they were getting before trade. At that price, they supply more than domestic buyers want. The excess goes abroad as exports. Option A reverses the logic entirely — a higher world price means domestic supply exceeds domestic demand, creating an export surplus, not an import gap. Option C is flatly wrong; trade benefits countries regardless of whether the world price is above or below domestic equilibrium. Option D confuses the direction: foreign producers aren't the relevant actors here — domestic producers are the ones selling to the world.",
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
      "Lower opportunity cost in computers means this country should lean into computer production and trade for textiles. But 'specialize' doesn't mean 'produce only one good.' Complete specialization is the textbook extreme; real economies specialize partially and still capture gains from trade. Option A overstates the theory — comparative advantage pushes toward more production of your strong suit, not total abandonment of the other good. Option C gets it backwards: self-sufficiency is what trade theory argues against. Option D confuses which good to export — you export where your opportunity cost is low, not the good where it's high.",
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
      "Think about both sides of the multiplication: revenue = tariff rate x import quantity. At $0 tariff, revenue is zero (nothing to collect). As the tariff climbs, revenue rises because you're taxing each imported unit more. But higher tariffs also crush import volume. At some point the tariff is so large that imports hit zero — and zero imports means zero revenue. The result is an inverted-U shape, similar to the Laffer curve logic. Option A only tracks the rate going up and ignores the quantity collapsing. Option C is wrong because revenue clearly changes as both variables shift. Option D is wrong at small tariff levels — a tiny tariff barely dents import volume, so revenue initially rises.",
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
      "Calculate opportunity costs. Country A: 1 steel costs 100/50 = 2 wheat. Country B: 1 steel costs 60/40 = 1.5 wheat. Country B gives up less wheat per unit of steel, so B has the comparative advantage in steel (and A has the comparative advantage in wheat, since A gives up only 0.5 steel per wheat versus B's 0.67). Option A confuses absolute advantage with comparative advantage — producing more is irrelevant; what matters is the opportunity cost. Option C reverses the comparison — 2 wheat is higher than 1.5 wheat, so A has the higher cost of steel, not the lower one. Option D commits the classic error of thinking absolute advantage determines trade patterns; Ricardo showed that comparative advantage is what drives mutually beneficial specialization.",
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
      "The terms of trade must fall between the two countries' opportunity costs of the exported good. Country B exports steel (comparative advantage) at a domestic cost of 1.5 wheat per steel. Country A imports steel at a domestic cost of 2 wheat per steel. For both to gain, the trading price of steel must be between 1.5 and 2 wheat per steel. Below 1.5, Country B would be selling steel for less than it costs domestically — no gain. Above 2, Country A could produce steel more cheaply at home — no gain from importing. Option A is too low for either country to benefit from steel trade. Option B includes values below Country B's opportunity cost, which would hurt B. Option D is above Country A's opportunity cost, so A would prefer domestic production.",
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
      "A tariff raises the domestic price above the world price. Consumers pay more and buy less (consumer surplus falls). Domestic producers sell at the higher tariff-inflated price and expand output (producer surplus rises). The government collects tariff revenue on remaining imports. But the two deadweight loss triangles — inefficient domestic production and lost consumer transactions — mean total surplus falls. The consumer loss exceeds the combined producer gain plus government revenue. Option A reverses the consumer effect — consumers are unambiguously hurt by higher prices. Option C is wrong because the government explicitly collects revenue equal to the tariff rate times the import quantity. Option D ignores the price increase — consumers who switch to domestic cars still pay a higher price than they would under free trade.",
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
      "Under a quota, there is no tax collected at the border. The price rises from $20 to $30 because supply is restricted. The 40 units still imported generate a $10 per-unit windfall ($30 domestic price minus $20 world price) for whoever holds the import licenses — this is quota rent totaling $400. Unless the government auctions the licenses, this rent goes to private license holders rather than the treasury. Option A describes a tariff outcome, not a quota — quotas generate no government revenue without license auctions. Option C is wrong because the $400 is not destroyed; it transfers to license holders as profit. Option D confuses domestic producers' gains (from selling at the higher domestic price) with the quota rents on imported units — domestic producers benefit separately from the higher price, but the import margin goes to license holders.",
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
      "The trade balance (net exports) equals exports minus imports: $800B - $950B = -$150 billion. A negative trade balance is a trade deficit, meaning the country imports more than it exports. This must be financed by capital inflows — foreigners invest in the deficit country's assets to cover the gap. Option A reverses the sign — a surplus requires exports to exceed imports, which is not the case here. Option C is wrong because $800B does not equal $950B. Option D confuses the total import figure with the deficit — the deficit is the difference between exports and imports, not the import total itself.",
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
      "The balance of payments identity requires that the current account plus the financial account equals zero (ignoring the small statistical discrepancy and official reserves). A current account deficit of $200 billion means the country is spending more abroad than it earns. To finance this, it must attract $200 billion in net foreign investment — a financial account surplus. The U.S. has run this pattern for decades: trade deficits financed by foreign purchases of Treasury bonds and American assets. Option A would mean both accounts are in deficit, which violates the balance of payments identity. Option C contradicts the requirement that the deficit be financed by capital inflows. Option D confuses the government budget with the balance of payments — they are related but distinct concepts.",
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
      "Trade allows a country to consume beyond its production possibilities curve by specializing in the good where it has a comparative advantage, exporting the surplus, and importing the other good. The consumption possibilities with trade exceed the PPC. Even starting from an inefficient point inside the PPC, trade enables a move to a consumption bundle that was previously impossible. Option A ignores the fundamental insight of trade theory — the entire point is that trade expands consumption possibilities beyond the PPC. Option C confuses consumption with production — a country still cannot produce beyond its PPC (that requires growth shifting the PPC outward), but it can consume beyond it through trade. Option D incorrectly requires absolute advantage; comparative advantage is sufficient and is the basis for gains from trade.",
  },
];
