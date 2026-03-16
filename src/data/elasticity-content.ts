export interface PracticeQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const elasticityContent = {
  title: "Elasticity",
  subtitle: "Quantifying how much buyers and sellers actually react when prices move",
  sections: [
    {
      heading: "Price Elasticity of Demand",
      content: `A gas station raises its price from $3.50 to $4.00 per gallon. Weekly sales fall from 10,000 gallons to 9,500. That is a 14.3% price hike (midpoint method) and only a 5.1% drop in quantity. The ratio of those two numbers gives us **price elasticity of demand (Ed)**:

**Ed = % change in quantity demanded / % change in price**

Here, Ed = -5.1% / 14.3% = -0.36. Take the absolute value: |Ed| = 0.36. Demand is inelastic. Drivers grumble but keep filling up.

The coefficient always comes out negative because demand curves slope downward. Economists drop the sign and work with |Ed|. One thing to watch: a straight-line demand curve does not have constant elasticity. The slope stays the same everywhere, but elasticity depends on the ratio P/Q, which changes at every point along the line.

The AP Microeconomics exam expects you to use the **midpoint method** for calculations. It eliminates the problem of getting a different answer depending on which price-quantity pair you start from. The formulas: %ΔQ = (Q2 - Q1) / ((Q1 + Q2)/2) and %ΔP = (P2 - P1) / ((P1 + P2)/2).`,
    },
    {
      heading: "Elastic, Inelastic, and Unit Elastic",
      content: `Novo Nordisk raises the price of insulin by 15%. Sales barely move. Louis Vuitton raises handbag prices by 15%. Plenty of shoppers walk away. The gap between those two reactions is the difference between **elastic** and **inelastic** demand.

|Ed| > 1 means **elastic** demand. Quantity changes more than proportionally to the price change. Buyers have substitutes, or they can wait, or the purchase is discretionary enough to skip.

|Ed| < 1 means **inelastic** demand. Quantity barely budges. Gasoline, electricity, prescription medications. Buyers absorb the price increase because they have no realistic alternative.

|Ed| = 1 means **unit elastic** demand. Percentage changes match exactly. On a linear demand curve, this occurs at the midpoint and nowhere else.

Two extreme cases round out the spectrum. **Perfectly elastic** demand (|Ed| = infinity) produces a horizontal curve. Any price increase above the market level sends quantity to zero. **Perfectly inelastic** demand (|Ed| = 0) produces a vertical curve. Price moves freely; quantity never changes.`,
    },
    {
      heading: "The Total Revenue Test",
      content: `A bookstore sells 500 copies a week at $12 each. Revenue: $6,000. Should the owner raise the price to $14? **TR = P x Q**, and when price goes up, P and Q pull revenue in opposite directions. Elasticity decides which force wins.

In the **elastic range** (|Ed| > 1), a price cut actually raises revenue. The surge in quantity more than compensates for the lower per-unit price. Netflix dropped its basic plan from $9.99 to $6.99 in certain markets during 2023 and saw subscriber counts jump enough to increase total revenue in those regions. Raise the price in this range and customers leave faster than the higher price can compensate.

In the **inelastic range** (|Ed| < 1), the math flips. A price cut hurts revenue because quantity barely responds. You collect less per unit on roughly the same volume. Pharmaceutical companies operate in this zone. They raise prices and revenue climbs because patients keep buying.

At **unit elasticity** (|Ed| = 1), revenue peaks. Any price movement in either direction reduces TR.`,
    },
    {
      heading: "Determinants of Elasticity",
      content: `Five factors explain most of the variation in elasticity across goods.

The availability of **substitutes** is the single biggest driver. Dasani competes with Aquafina, Fiji, tap water, and a dozen store brands. Demand is elastic. Your local electric utility faces no real competitor. Demand is inelastic.

Whether the good is a **necessity or a luxury** matters enormously. Nobody comparison-shops for an ambulance ride. A $300 increase in the price of a designer watch? That purchase gets postponed or dropped entirely. Necessities pin buyers in place. Luxuries give them room to say no.

**Budget share** plays a role. A 10% jump in the price of table salt costs a household maybe $0.40 a year. Unnoticeable. A 10% jump in rent reshapes an entire monthly budget. Goods that consume a larger fraction of income generate stronger reactions.

**Time horizon** changes things. When gas prices surged in 2022, drivers kept filling up (inelastic in the short run). Over the next two years, EV sales climbed 35% and public transit ridership recovered. Demand becomes more elastic as buyers find alternatives.

**Market definition** is the fifth factor. "Food" is inelastic. Nobody quits eating. "Organic blueberries from the farmer's market on Elm Street" is elastic. Plenty of substitutes exist at that level of specificity.`,
    },
    {
      heading: "Cross-Price and Income Elasticity",
      content: `Pepsi raises its price by 10%. Coke sales climb 7%. A printer drops from $200 to $150. Ink cartridge sales rise. These relationships need a different elasticity measure.

**Cross-price elasticity of demand:**

**Exy = % change in Qd of good X / % change in price of good Y**

The sign does the classifying. Positive Exy means the goods are **substitutes** (Coke and Pepsi, Uber and Lyft). When one gets more expensive, buyers switch to the other. Negative Exy means **complements** (printers and ink cartridges, hot dogs and buns). Cheaper printers drive more ink sales. A value near zero means the goods are unrelated.

For income changes rather than price changes:

**Income elasticity (Ei) = % change in Qd / % change in income**

Positive Ei marks a **normal good**. Within that category, goods with Ei > 1 are luxuries (demand grows faster than income -- think international vacations, designer clothing), and goods with 0 < Ei < 1 are necessities (demand grows, just more slowly -- groceries, basic utilities). Negative Ei flags an **inferior good**. As incomes rise, people buy less of it. Store-brand pasta gives way to Barilla once paychecks get bigger.

The AP exam puts heavy weight on reading a coefficient like -0.6 or +2.3 and classifying the good immediately.`,
    },
    {
      heading: "Elasticity and the AP Exam",
      content: `Elasticity questions appear on roughly 15-20% of the AP Microeconomics exam. The patterns repeat year after year:

Calculate |Ed| using the **midpoint method** from two price-quantity pairs. Classify demand as elastic, inelastic, or unit elastic based on the coefficient. Predict what happens to **total revenue** after a price change. Explain why one good has more elastic demand than another, citing specific determinants.

Free-response prompts tend to embed elasticity inside larger scenarios. A per-unit tax lands on a market and the question asks how the burden splits between buyers and sellers. That answer depends on relative elasticity of demand and supply. A firm facing inelastic demand raises its price, and the question asks why revenue still goes up.

Two mechanical skills get tested more than anything: the **total revenue test** and the **midpoint formula**. Nail the arithmetic and the reasoning follows.`,
    },
    {
      heading: "Worked Example",
      content: `A coffee shop sells large lattes at **$5 each**, moving **200 cups per week**. The owner raises the price to **$6**. Weekly sales drop to **160 cups**. Calculate the price elasticity of demand.

**Percentage change in quantity (midpoint method):**

%ΔQ = (160 - 200) / ((200 + 160) / 2) = -40 / 180 = **-22.2%**

**Percentage change in price:**

%ΔP = (6 - 5) / ((5 + 6) / 2) = 1 / 5.5 = **18.2%**

**Elasticity coefficient:**

Ed = -22.2% / 18.2% = **-1.22**

Absolute value: |Ed| = 1.22.

**Classification:** |Ed| = 1.22 > 1, so demand is **elastic** over this price range. Buyers cut back more than proportionally to the price increase.

**Revenue check:** Before the hike, TR = $5 x 200 = $1,000. After, TR = $6 x 160 = $960. Revenue fell by $40. That confirms the elastic rule: when demand is elastic, a price increase reduces total revenue because the quantity drop outweighs the higher per-unit price.`,
    },
  ],
};

export const elasticityQuestions: PracticeQuestion[] = [
  {
    id: "elas-1",
    question:
      "If a 10% increase in the price of a good leads to a 20% decrease in quantity demanded, the price elasticity of demand is:",
    options: ["|Ed| = 0.5", "|Ed| = 1.0", "|Ed| = 2.0", "|Ed| = 10"],
    correctIndex: 2,
    explanation:
      "|Ed| = |(-20%) / (10%)| = 2.0. Demand is elastic. Option A flips the fraction, dividing price change by quantity change. Option B would require equal percentage changes. Option D has no basis in the given numbers.",
  },
  {
    id: "elas-2",
    question:
      "A firm faces inelastic demand for its product. If it raises the price, what happens to total revenue?",
    options: [
      "Total revenue decreases",
      "Total revenue increases",
      "Total revenue stays the same",
      "The effect depends on marginal cost",
    ],
    correctIndex: 1,
    explanation:
      "Inelastic demand means quantity barely falls when price rises. The higher per-unit price more than compensates for the small quantity loss, so TR climbs. Option A describes what happens with elastic demand, where customers flee in large numbers. Option C requires unit elasticity, |Ed| = 1 exactly. Option D is irrelevant because the total revenue test depends entirely on elasticity, not on marginal cost or any cost measure.",
  },
  {
    id: "elas-3",
    question:
      "Which of the following goods is most likely to have highly elastic demand?",
    options: [
      "Insulin for a diabetic patient",
      "Table salt",
      "A specific brand of bottled water",
      "Electricity",
    ],
    correctIndex: 2,
    explanation:
      "Dozens of alternatives exist: other brands, tap water, filtered water. All those substitutes make demand highly elastic. Insulin has essentially no substitute for a diabetic patient, so demand is extremely inelastic. Salt takes a tiny share of anyone's budget and has few alternatives. Electricity from a local utility has no close competitor either.",
  },
  {
    id: "elas-4",
    question:
      "On a linear demand curve, where does unit elasticity occur?",
    options: [
      "At the top of the curve where price is highest",
      "At the bottom of the curve where price is lowest",
      "At the midpoint of the curve",
      "At every point along the curve",
    ],
    correctIndex: 2,
    explanation:
      "Slope stays constant on a linear demand curve, but elasticity does not. It depends on the ratio P/Q, which shifts at every point. At the midpoint, that ratio yields |Ed| = 1. The top of the curve has high P and low Q, giving |Ed| > 1 (elastic). The bottom has low P and high Q, giving |Ed| < 1 (inelastic). Option D confuses constant slope with constant elasticity. They are not the same thing.",
  },
  {
    id: "elas-5",
    question:
      "The cross-price elasticity of demand between goods A and B is -1.8. This means A and B are:",
    options: [
      "Substitutes",
      "Complements",
      "Normal goods",
      "Inferior goods",
    ],
    correctIndex: 1,
    explanation:
      "Negative cross-price elasticity: when B's price rises, demand for A falls. They move together, like printers and ink. That means complements. Substitutes require a positive coefficient because a price hike on one sends buyers toward the other. Options C and D involve income elasticity, a completely different measure. Normal and inferior classify goods by response to income changes, not to another good's price.",
  },
  {
    id: "elas-6",
    question:
      "Using the midpoint method, if quantity demanded changes from 40 to 60 when price falls from $12 to $8, what is the price elasticity of demand?",
    options: ["|Ed| = 0.5", "|Ed| = 1.0", "|Ed| = 1.25", "|Ed| = 2.0"],
    correctIndex: 1,
    explanation:
      "Midpoint %ΔQ = (60 − 40) / 50 = 40%. Midpoint %ΔP = (8 − 12) / 10 = −40%. |Ed| = |40% / −40%| = 1.0, which is unit elastic. Option A comes from using simple percentage changes with the starting value as the base instead of the midpoint average. Option C likely results from a denominator error. Option D would require quantity to change by double the percentage of price.",
  },
  {
    id: "elas-7",
    question:
      "Demand for a good has income elasticity of -0.6. This good is classified as:",
    options: [
      "A normal necessity",
      "A normal luxury",
      "An inferior good",
      "A substitute good",
    ],
    correctIndex: 2,
    explanation:
      "Negative income elasticity means people buy less of this good as their income rises. That is the definition of an inferior good. Generic store-brand cereal that gets replaced by name-brand once paychecks grow. A normal necessity has positive Ei between 0 and 1, and a normal luxury has Ei above 1. Both are positive. Option D describes a cross-price relationship, not an income-elasticity classification.",
  },
  {
    id: "elas-8",
    question:
      "A perfectly inelastic demand curve is:",
    options: [
      "Horizontal",
      "Vertical",
      "Downward-sloping with a slope of -1",
      "Upward-sloping",
    ],
    correctIndex: 1,
    explanation:
      "Quantity never changes regardless of price. That is a vertical line: price moves along the y-axis, quantity stays fixed on the x-axis. |Ed| = 0. A horizontal curve is perfectly elastic, the exact opposite. A slope of -1 just describes a particular downward-sloping line with varying elasticity. Upward-sloping describes a supply curve.",
  },
  {
    id: "el-9",
    question:
      "A coffee shop raises the price of a large latte from $5 to $7. Weekly sales fall from 300 to 200 cups. Using the midpoint method, the price elasticity of demand is approximately:",
    options: ["|Ed| = 0.5", "|Ed| = 1.0", "|Ed| = 1.2", "|Ed| = 1.5"],
    correctIndex: 2,
    explanation:
      "Midpoint %ΔQ = (200 − 300) / 250 = −40%. Midpoint %ΔP = (7 − 5) / 6 = 33.3%. |Ed| = 40% / 33.3% = 1.2. Demand is elastic. Option A divides price change by quantity change instead of the reverse. Option B would need equal percentage changes. Option D overstates the ratio, likely from computing simple percentage changes off the initial values rather than midpoint averages.",
  },
  {
    id: "el-10",
    question:
      "A firm currently sells 1,000 units at $20 each, earning total revenue of $20,000. If the firm raises its price to $22 and total revenue increases to $20,900, what can we conclude about demand in this price range?",
    options: [
      "Demand is elastic because price increased",
      "Demand is inelastic because a price increase raised total revenue",
      "Demand is unit elastic because revenue barely changed",
      "Demand elasticity cannot be determined from revenue data alone",
    ],
    correctIndex: 1,
    explanation:
      "Price went up and total revenue went up. The total revenue test says this means demand is inelastic. Quantity fell, but not by enough proportionally to offset the higher price. Option A gets it backward: elastic demand would cause revenue to fall when price rises. Option C is wrong because unit elasticity means revenue stays exactly the same, and $20,900 is not $20,000. Option D is incorrect because the total revenue test exists specifically to determine elasticity from revenue data.",
  },
  {
    id: "el-11",
    question:
      "When the price of peanut butter rises by 8%, the quantity demanded of jelly falls by 4%. The cross-price elasticity of demand between peanut butter and jelly is:",
    options: ["+0.5, indicating substitutes", "−0.5, indicating complements", "+2.0, indicating substitutes", "−2.0, indicating complements"],
    correctIndex: 1,
    explanation:
      "Cross-price elasticity = %ΔQd of jelly / %ΔP of peanut butter = −4% / +8% = −0.5. Negative sign means the goods move together: peanut butter gets pricier, jelly sales fall too. Complements. They go together in sandwiches. Option A has the wrong sign. Option C both misidentifies the sign and inverts the fraction. Option D has the correct sign but inverts numerator and denominator.",
  },
  {
    id: "el-12",
    question:
      "A household's income rises from $50,000 to $65,000, and their annual spending on generic store-brand groceries falls from $3,000 to $2,400. The income elasticity of demand for generic groceries is approximately:",
    options: ["+0.75, a normal necessity", "−0.75, an inferior good", "+1.33, a normal luxury", "−1.33, an inferior good"],
    correctIndex: 1,
    explanation:
      "Midpoint %ΔQ = (2400 − 3000) / 2700 = −22.2%. Midpoint %ΔI = (65000 − 50000) / 57500 = 26.1%. Income elasticity = −22.2% / 26.1% = −0.85, closest to −0.75. The negative sign means demand falls as income rises. Inferior good. Option A has the wrong sign; positive would mean buying more as income rises. Option C is wrong in both sign and magnitude. Option D has the right sign but overstates the magnitude, probably from inverting the formula or using a different base.",
  },
  {
    id: "el-13",
    question:
      "A perfectly elastic demand curve implies that:",
    options: [
      "Consumers will buy any quantity at the market price but zero at any higher price",
      "Consumers will buy the same quantity regardless of price",
      "The firm can raise its price without losing any customers",
      "Total revenue remains constant when price changes",
    ],
    correctIndex: 0,
    explanation:
      "Perfectly elastic demand is a horizontal line at the market price. Buyers purchase any amount at that price but zero at even a penny more, because perfect substitutes exist. This is the demand curve facing a firm in perfect competition. Option B describes perfectly inelastic demand, a vertical curve, which is the opposite. Option C describes inelastic demand. Option D describes unit elasticity.",
  },
  {
    id: "el-14",
    question:
      "A government imposes a per-unit tax on a good. If demand is relatively inelastic and supply is relatively elastic, the burden of the tax falls:",
    options: [
      "Mostly on producers because they have elastic supply",
      "Mostly on consumers because they have inelastic demand",
      "Equally on both buyers and sellers regardless of elasticity",
      "Entirely on producers because they are legally responsible for remitting the tax",
    ],
    correctIndex: 1,
    explanation:
      "Tax incidence depends on relative elasticity, not on who writes the check to the government. The more inelastic side bears a larger share because those participants cannot easily change their behavior. With inelastic demand and elastic supply, consumers absorb most of the tax as higher prices. Producers adjust their quantity with relative ease and escape most of the burden. Equal incidence only happens when both sides have equal elasticity. Option D confuses legal incidence (who remits the tax) with economic incidence (who actually pays), and these are two different things entirely.",
  },
  {
    id: "el-15",
    question:
      "Which of the following combinations of characteristics would make demand for a good MOST elastic?",
    options: [
      "The good is a necessity, has few substitutes, and takes a small share of the consumer's budget",
      "The good is a luxury, has many close substitutes, and the consumer has a long time horizon to adjust",
      "The good is a necessity, has many substitutes, and the consumer faces a short time horizon",
      "The good is a luxury, has few substitutes, and takes a small share of the consumer's budget",
    ],
    correctIndex: 1,
    explanation:
      "All three determinants point toward maximum elasticity in option B. Luxuries are easy to forgo. Many close substitutes give consumers real alternatives. A long time horizon lets them find workarounds and change habits. Option A stacks three inelastic factors: necessity, few substitutes, small budget share. Option C mixes signals: substitutes push toward elasticity, but necessity status and a short time horizon push the other way. Option D also sends mixed signals: luxury status increases elasticity, but few substitutes and small budget share both dampen responsiveness.",
  },
];
