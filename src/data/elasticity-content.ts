export interface PracticeQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const elasticityContent = {
  title: "Elasticity",
  subtitle: "Measuring how strongly buyers and sellers respond to price changes",
  sections: [
    {
      heading: "Price Elasticity of Demand",
      content: `If the price of gasoline jumps 20%, do drivers cut their consumption by 20%? By 5%? Not at all? **Price elasticity of demand (Ed)** is how economists answer this. It's a ratio that captures how sharply quantity demanded reacts to a price change:

**Ed = % change in quantity demanded / % change in price**

The raw coefficient comes out negative (demand curves slope downward), so economists work with the absolute value |Ed|. One common trap: assuming a straight-line demand curve has the same elasticity everywhere. It doesn't. The *slope* stays constant, but elasticity changes at every point because it depends on the ratio P/Q, not the slope alone.

For calculations, the AP exam expects the **midpoint method**, which avoids the problem of getting different answers depending on your starting point: %ΔQ = (Q2 - Q1) / ((Q1 + Q2)/2) and %ΔP = (P2 - P1) / ((P1 + P2)/2).`,
    },
    {
      heading: "Elastic, Inelastic, and Unit Elastic",
      content: `Compare a luxury handbag and insulin. Raise the price on both by 15%. Handbag sales might crater as customers switch to a competitor or skip the purchase entirely. Insulin sales barely budge, because diabetic patients have no real alternative. That gap in responsiveness is the difference between **elastic** and **inelastic** demand.

|Ed| > 1 means **elastic** demand. Quantity swings *more* than proportionally to the price change. Consumers have options: they can substitute, delay, or walk away.

|Ed| < 1 means **inelastic** demand. Quantity barely moves relative to the price change. Buyers just absorb the hit. Gasoline, electricity, and prescription drugs fall in this category.

|Ed| = 1 means **unit elastic** demand. The percentage changes in quantity and price mirror each other exactly. On a linear demand curve, this happens at the midpoint.

Then there are the extremes. **Perfectly elastic** demand (|Ed| = infinity) gives you a horizontal curve where even a tiny price increase sends quantity to zero. **Perfectly inelastic** demand (|Ed| = 0) gives a vertical curve where quantity stays fixed no matter what price does.`,
    },
    {
      heading: "The Total Revenue Test",
      content: `Should a coffee shop raise its prices or lower them to bring in more money? The answer depends on elasticity, not costs. **TR = P x Q**, and when price moves, P and Q push revenue in opposite directions. Elasticity determines which force wins.

**Elastic range** (|Ed| > 1): Drop the price and revenue *rises*. The flood of new quantity more than compensates for the lower price per unit. A streaming service like Netflix cutting its subscription from $15 to $12 might gain enough subscribers to come out ahead. Raise the price in this range, though, and customers flee. Revenue falls.

**Inelastic range** (|Ed| < 1): The math reverses. A price cut *hurts* revenue because quantity barely responds. You're selling roughly the same amount for less. Insulin manufacturers can raise prices and watch revenue climb because patients keep buying regardless.

At **unit elasticity** (|Ed| = 1), revenue hits its peak. Move price in either direction and TR drops. The shaded rectangle on the graph represents TR at the selected price. Drag the slider and watch the rectangle's area change.`,
    },
    {
      heading: "Determinants of Elasticity",
      content: `Not the most glamorous concept, but understanding *why* some goods have elastic demand while others don't is genuinely useful. Five factors do most of the work.

**Substitutes** are the single biggest driver. The more alternatives a buyer has, the easier it is to walk away from a price hike. One brand of sparkling water competes with dozens of others (elastic). Electricity from your local utility has no close substitute (inelastic).

**Necessity vs. luxury** matters enormously. Patients don't comparison-shop during a medical emergency. But a $200 price bump on a designer handbag? Plenty of shoppers will pass. Necessities pin buyers in place; *luxuries* give them room to say no.

**Budget share** plays a role too. A 10% spike in the price of salt costs you an extra few cents a year. You won't notice. A 10% spike in rent reshapes your entire spending. Goods that eat a larger share of income produce stronger reactions.

**Time horizon** can flip the classification entirely. When gas prices surge, drivers grumble but keep filling up (inelastic in the short run). Give them two years and they buy hybrids, move closer to work, or switch to public transit. Demand becomes *more elastic* over time.

**Market definition** also changes things. Zoom out and demand looks inelastic: "food" is a necessity nobody can quit. Zoom in and it gets elastic fast: "organic avocados at the Whole Foods on 5th Street" has plenty of substitutes.`,
    },
    {
      heading: "Cross-Price and Income Elasticity",
      content: `When Pepsi raises its price, what happens to Coke sales? When printer prices drop, what happens to ink cartridge sales? These questions need a different kind of elasticity, one that tracks how *two* goods relate to each other.

**Cross-price elasticity of demand:**

**Exy = % change in Qd of good X / % change in price of good Y**

The sign tells the story. Positive Exy means the goods are **substitutes** (Coke and Pepsi: raise the price of one, demand for the other climbs). Negative Exy means **complements** (printers and ink: cheaper printers mean more ink sales). Near zero means the goods are unrelated.

When people's incomes change rather than prices, we use:

**Income elasticity (Ei) = % change in Qd / % change in income**

Positive Ei means a **normal good**, where people buy more as they earn more. Within that category, *luxuries* (Ei > 1) see demand grow faster than income (designer clothes, international travel), while *necessities* (0 < Ei < 1) see demand grow at a slower pace (groceries, basic clothing). Negative Ei flags an **inferior good** where demand actually *falls* as income rises. Generic store-brand pasta gets replaced by the good stuff once paychecks get bigger.

The AP exam leans hard on sign and magnitude here. You should be comfortable reading a number like -0.6 or +2.3 and immediately classifying the good.`,
    },
    {
      heading: "Elasticity and the AP Exam",
      content: `Elasticity shows up on roughly 15-20% of the AP Microeconomics exam, and the question patterns are pretty predictable. Expect to:

- Calculate |Ed| with the **midpoint method** given two price-quantity pairs
- Classify demand as elastic, inelastic, or unit elastic from the coefficient
- Predict the direction of **total revenue** after a price change
- Explain *why* one good has more elastic demand than another using the determinants

Free-response prompts tend to weave elasticity into bigger scenarios. A common one involves a tax landing on a market and asking how the burden splits between buyers and sellers. The answer hinges on relative elasticity of demand and supply. Another favorite gives you a firm facing inelastic demand and asks why it can raise its price and still see revenue climb.

Honestly, two mechanical skills get tested more than anything else: the **total revenue test** and the **midpoint formula**. Get the arithmetic right on those, and the reasoning clicks into place.`,
    },
    {
      heading: "Worked Example",
      content: `A local bookstore raises the price of a bestseller from **$4 to $6**. Weekly sales drop from **100 to 80 copies**. Let's find out how elastic demand is.

**Percentage change in quantity (midpoint method):**

%ΔQ = (80 - 100) / ((100 + 80) / 2) = -20 / 90 = **-22.2%**

**Percentage change in price:**

%ΔP = (6 - 4) / ((4 + 6) / 2) = 2 / 5 = **40%**

**Elasticity coefficient:**

Ed = -22.2% / 40% = **-0.556**

Absolute value: |Ed| = 0.556.

**Classification:** |Ed| = 0.556 < 1, so demand is **inelastic** over this price range. Buyers didn't cut back much relative to how far the price climbed.

**Revenue check:** Before the hike, TR = $4 x 100 = $400. After, TR = $6 x 80 = $480. Revenue jumped $80. That confirms the rule: when demand is inelastic, a price increase pushes total revenue *up* because the higher price per unit more than offsets the small drop in quantity sold.`,
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
      "|Ed| = |(-20%) / (10%)| = 2.0, so demand is elastic. Option A (0.5) gets the fraction upside down: it divides the price change by the quantity change. Option B (1.0) would require equal percentage changes, but here quantity moved twice as far as price. Option D (10) has no mathematical basis from these numbers.",
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
      "Inelastic demand means buyers barely reduce purchases when price rises. The higher price per unit more than compensates for the small drop in quantity, so total revenue climbs. Option A applies to elastic demand, where customers flee and revenue falls. Option C would require unit elasticity (|Ed| = 1). Option D is irrelevant: the total revenue test depends on elasticity, not marginal cost.",
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
      "One brand of bottled water competes with dozens of alternatives: other brands, tap water, filtered water. All those substitutes make demand highly elastic. Option A (insulin) is nearly the opposite: a diabetic patient has no substitute, so demand is extremely inelastic. Option B (table salt) takes a tiny share of anyone's budget and has few substitutes, keeping it inelastic. Option D (electricity) from a local utility has no close substitute either.",
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
      "Slope stays constant on a linear demand curve, but elasticity does not; it depends on P/Q, which shifts at every point. At the midpoint, that ratio produces |Ed| = 1. Option A is wrong because the top of the curve (high P, low Q) gives |Ed| > 1, which is elastic, not unit elastic. Option B is wrong because the bottom (low P, high Q) gives |Ed| < 1, which is inelastic. Option D confuses constant slope with constant elasticity, which is a common mistake.",
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
      "The negative sign is the giveaway: when B's price rises, demand for A falls, so the goods move together, so they're complements (like printers and ink). Option A (substitutes) requires a positive cross-price elasticity: a price hike on one drives buyers toward the other, increasing demand. Options C and D confuse cross-price elasticity with income elasticity; 'normal' and 'inferior' classify goods by their response to income changes, not to the price of another good.",
  },
  {
    id: "elas-6",
    question:
      "Using the midpoint method, if quantity demanded changes from 40 to 60 when price falls from $12 to $8, what is the price elasticity of demand?",
    options: ["|Ed| = 0.5", "|Ed| = 1.0", "|Ed| = 1.25", "|Ed| = 2.0"],
    correctIndex: 1,
    explanation:
      "Midpoint %ΔQ = (60 − 40) / 50 = 40%. Midpoint %ΔP = (8 − 12) / 10 = −40%. |Ed| = |40% / −40%| = 1.0, which is unit elastic. Option A (0.5) comes from using simple percentage changes with the starting value as the base instead of the midpoint average. Option C (1.25) likely results from a calculation error in the denominator. Option D (2.0) would require quantity to change by twice the percentage of price, which doesn't match this data.",
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
      "The negative sign seals it: when income goes up, people buy *less* of this good. That's the definition of an inferior good (think generic store-brand pasta that gets dropped once paychecks grow). Option A (normal necessity) requires a positive Ei between 0 and 1. Option B (normal luxury) requires Ei above 1. Both are positive, and this number is negative. Option D (substitute) isn't an income-elasticity classification at all; it describes how two goods relate to each other's *prices*.",
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
      "If quantity never changes regardless of price, the curve must be vertical: price moves up and down along the y-axis, but quantity stays locked in place on the x-axis. That's |Ed| = 0, perfectly inelastic. Option A (horizontal) is the exact opposite: perfectly elastic demand, where the slightest price increase kills all demand. Option C (slope of −1) just describes a particular downward-sloping line, which would have varying elasticity. Option D (upward-sloping) describes a supply curve, not a demand curve.",
  },
  {
    id: "el-9",
    question:
      "A coffee shop raises the price of a large latte from $5 to $7. Weekly sales fall from 300 to 200 cups. Using the midpoint method, the price elasticity of demand is approximately:",
    options: ["|Ed| = 0.5", "|Ed| = 1.0", "|Ed| = 1.2", "|Ed| = 1.5"],
    correctIndex: 2,
    explanation:
      "Midpoint %ΔQ = (200 − 300) / ((300 + 200)/2) = −100/250 = −40%. Midpoint %ΔP = (7 − 5) / ((5 + 7)/2) = 2/6 = 33.3%. |Ed| = |−40% / 33.3%| = 1.2, so demand is elastic over this range. (A) 0.5 results from dividing the price percentage change by the quantity percentage change instead of the reverse. (B) 1.0 would require equal percentage changes, but here quantity changed proportionally more than price. (D) 1.5 overstates the ratio, likely from using a simple percentage calculation with only the initial value as the base (100/300 = 33% and 2/5 = 40%, giving 33/40 = 0.83, also wrong) rather than midpoint averages.",
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
      "The total revenue test is definitive: when a price increase causes total revenue to rise, demand must be inelastic. Quantity fell, but not by enough (proportionally) to offset the higher price, so the price effect dominated the quantity effect. (A) gets the logic backwards: elastic demand means a price increase would cause revenue to fall, not rise, because customers would flee in large numbers. (C) is wrong because unit elasticity means revenue stays exactly the same after a price change, but here revenue rose from $20,000 to $20,900, a clear increase. (D) is incorrect because the total revenue test is specifically designed to determine elasticity from revenue changes; that is its entire purpose.",
  },
  {
    id: "el-11",
    question:
      "When the price of peanut butter rises by 8%, the quantity demanded of jelly falls by 4%. The cross-price elasticity of demand between peanut butter and jelly is:",
    options: ["+0.5, indicating substitutes", "−0.5, indicating complements", "+2.0, indicating substitutes", "−2.0, indicating complements"],
    correctIndex: 1,
    explanation:
      "Cross-price elasticity = %ΔQd of jelly / %ΔP of peanut butter = −4% / +8% = −0.5. The negative sign means the goods move together: when peanut butter gets more expensive, people buy less jelly too, confirming they are complements (consumed together in sandwiches). (A) +0.5 gets the sign wrong: a positive cross-price elasticity would mean jelly demand increases when peanut butter price rises, which describes substitutes, not complements. (C) +2.0 both misidentifies the sign and inverts the fraction. (D) −2.0 has the correct sign but inverts the fraction, dividing the price change by the quantity change instead of the reverse.",
  },
  {
    id: "el-12",
    question:
      "A household's income rises from $50,000 to $65,000, and their annual spending on generic store-brand groceries falls from $3,000 to $2,400. The income elasticity of demand for generic groceries is approximately:",
    options: ["+0.75, a normal necessity", "−0.75, an inferior good", "+1.33, a normal luxury", "−1.33, an inferior good"],
    correctIndex: 1,
    explanation:
      "Midpoint %ΔQ = (2400 − 3000) / ((3000 + 2400)/2) = −600/2700 = −22.2%. Midpoint %ΔI = (65000 − 50000) / ((50000 + 65000)/2) = 15000/57500 = 26.1%. Income elasticity = −22.2% / 26.1% = −0.85, which is closest to −0.75. The negative sign means demand falls when income rises, which is the definition of an inferior good. (A) +0.75 has the wrong sign; a positive income elasticity would mean the household buys more as income rises, but they clearly bought less. (C) +1.33 is both wrong in sign and magnitude, and would classify the good as a luxury, which contradicts the falling quantity. (D) −1.33 gets the sign right but overstates the magnitude, likely from inverting the numerator and denominator or using simple percentage changes from the wrong base.",
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
      "A perfectly elastic demand curve is horizontal at the market price. Consumers will purchase any amount at that price, but even the slightest increase drives quantity demanded to zero because buyers have perfect substitutes available. This is the demand curve facing a firm in perfect competition. (B) describes perfectly inelastic demand (a vertical curve), which is the exact opposite: quantity stays fixed regardless of price. (C) is the opposite of elastic demand; if the firm can raise price without losing customers, demand is inelastic, not elastic. (D) describes unit elasticity, where the percentage changes in price and quantity offset each other exactly, keeping TR constant.",
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
      "Tax incidence depends on relative elasticity, not on who writes the check. The more inelastic side of the market bears a larger share of the tax burden because they are less able to change their behavior in response to the price change. With inelastic demand and elastic supply, consumers cannot easily reduce their purchases, so sellers pass most of the tax on as higher prices. (A) reverses the logic: elastic supply means producers can adjust quantity easily, so they escape most of the burden, not absorb it. (C) is wrong because equal incidence only occurs when demand and supply have equal elasticity. (D) confuses legal incidence (who remits the tax) with economic incidence (who actually bears the cost); the economic burden has nothing to do with who physically pays the government.",
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
      "Three of the strongest determinants of elasticity all point toward high elasticity in option B: luxuries are easy to forgo (unlike necessities), many close substitutes give consumers alternatives to switch to, and a long time horizon allows consumers to find workarounds and adjust habits. (A) describes the most inelastic scenario: a necessity with few substitutes and a small budget share gives consumers no reason and no ability to change behavior. (C) is a mixed bag: many substitutes increase elasticity, but being a necessity and having a short time horizon both decrease it. (D) is also mixed: luxury status increases elasticity, but few substitutes and small budget share both work against strong consumer responsiveness.",
  },
];
