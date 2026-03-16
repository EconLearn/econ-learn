import type { PracticeQuestion } from "@/data/supply-demand-content";

export const consumerChoiceContent = {
  title: "Consumer Choice",
  subtitle:
    "Drag the budget line, watch the optimal bundle shift — this is how economists model every purchasing decision you make",
  sections: [
    {
      heading: "Why Do People Buy What They Buy?",
      content: `You walk into a coffee shop with $6. Latte, muffin, or both if prices cooperate. What drives your pick? Economists answer with **utility** — the satisfaction or benefit you pull from consuming a good.

The real question isn't whether you like lattes. It's how much satisfaction this latte delivers *per dollar* compared to *everything else you could buy with that dollar.* That ratio — satisfaction per dollar — sits behind every purchasing decision.

Utility isn't directly measurable. Nobody carries a satisfaction meter. But the framework is powerful because it forces you to confront trade-offs head on. When you choose a $15.49 Netflix Standard plan over a $10.99 Spotify Premium subscription, you're implicitly saying the next dollar spent on Netflix returns more satisfaction than the next dollar on Spotify. Economists call that additional satisfaction from one more unit of a good **marginal utility**.`,
    },
    {
      heading: "The Third Slice of Pizza Problem",
      content: `First slice when you're starving — incredible. Second slice, still great. Third slice, fine but the excitement is gone. By the fourth or fifth, you're forcing it down.

Everyone has lived this. Economists call it the **law of diminishing marginal utility**: each additional unit of a good delivers *less* extra satisfaction than the one before it. The first hour of a video game is electric. Hour eight is a grind.

The implications ripple through everything on this page. Diminishing marginal utility explains why consumers *diversify* their spending instead of dumping their entire budget on a single good. If the tenth coffee of the day gives you essentially zero additional satisfaction, that $5 goes further spent on lunch. The declining marginal utility of coffee eventually drops below the marginal utility of other goods, and you switch. Look at the utility curve on the graph — notice how it flattens as quantity increases. That flattening is diminishing marginal utility made visible.

It also explains the downward-sloping demand curves you've seen in earlier sections. You'll only buy more of something if the price drops enough to justify the lower marginal utility of each additional unit.`,
    },
    {
      heading: "Budget Constraints: The Reality Check",
      content: `Wanting things is easy. Affording them is the constraint.

A **budget constraint** represents every combination of goods you can afford given your income and current prices. Look at the straight line on the graph. That's yours.

Say you have $60 per month for entertainment, choosing between movies at $15 each and books at $10 each. Spend it all on movies: 4. All on books: 6. Mix it up: 2 movies and 3 books. The budget constraint is the line connecting all these combinations.

The slope of that line equals the negative ratio of prices: -(P_movies / P_books) = -(15/10) = -1.5. This slope is the market's trade-off rate. To get one more movie, you sacrifice 1.5 books. You don't choose that rate. The market imposes it on you.

Income changes shift the line outward (more income) or inward (less income), keeping the slope identical. Price changes rotate it. Drag the movie price slider down on the graph and watch the budget line pivot outward along the movie axis — you can suddenly afford more movies, but your book-buying power stays the same. That pivot is key. Parallel shift means income changed. Rotation means a price changed.`,
    },
    {
      heading: "The Utility-Maximizing Rule",
      content: `A rational consumer wants maximum total satisfaction from every dollar. The rule for achieving it is clean:

Allocate your budget so that the **marginal utility per dollar** is equal across all goods:

MU_A / P_A = MU_B / P_B = MU_C / P_C ...

See why this works by looking at an example. You're spending on tacos ($2 each) and burritos ($5 each). The last taco gives you 20 utils — that's 10 utils per dollar. The last burrito gives you 15 utils — 3 utils per dollar. You're leaving satisfaction on the table. Shift money from burritos to tacos. Each dollar moved away from burritos costs you 3 utils but gains you 10. Keep shifting until the ratios equalize.

If MU_A / P_A > MU_B / P_B, buy more of A and less of B. As you consume more A, diminishing marginal utility drags MU_A down. As you consume less B, MU_B climbs. Eventually the ratios converge.

That convergence point is **consumer equilibrium** — no reallocation of spending can squeeze out more total utility. On the graph, it's where the green dot sits on the budget line. Drag it off that point and watch total utility drop.`,
    },
    {
      heading: "Income and Substitution Effects",
      content: `When the price of a good changes, two distinct things happen simultaneously. Separating them cleanly is what the 2024 AP Microeconomics free-response section tested, and it remains one of the trickier concepts to internalize.

Say your gym membership drops from $60/month to $30/month.

The **substitution effect**: the gym just got cheaper *relative to* other activities. Compared to rock climbing, home workouts, yoga classes — the gym is now a better deal per dollar. You substitute toward it, going more often while cutting back on alternatives. The substitution effect *always* pushes you toward the good that got cheaper. Always.

The **income effect**: you're suddenly spending $30 less on the gym. That functions like a $30 raise. Your real purchasing power increased. What you do with that extra buying power depends on whether the gym is a *normal good* (you buy more as income rises) or an *inferior good* (you buy less as income rises).

For **normal goods**, both effects push the same direction: price drops, quantity demanded rises. For **inferior goods**, they push against each other. In the rare extreme case where the income effect overpowers the substitution effect, you get a **Giffen good** — demand *increases* when price rises. Robert Giffen supposedly observed this with potatoes in 1840s Ireland. Mostly a theoretical curiosity, but it appeared on the 2019 AP exam.`,
    },
    {
      heading: "Worked Example: Finding the Optimal Bundle",
      content: `Follow along on the graph. A student has **$24** to spend on two goods: coffee (C) at **$4 per cup** and sandwiches (S) at **$6 each**. The table below shows marginal utility for each unit:

| Units | MU of Coffee | MU of Sandwich |
|-------|-------------|----------------|
| 1     | 20          | 30             |
| 2     | 16          | 24             |
| 3     | 12          | 18             |
| 4     | 8           | 12             |
| 5     | 4           | 6              |

**Step 1: Calculate MU per dollar for each unit.**

Coffee (price = $4):
- 1st cup: 20/4 = **5.0**
- 2nd cup: 16/4 = **4.0**
- 3rd cup: 12/4 = **3.0**
- 4th cup: 8/4 = **2.0**

Sandwiches (price = $6):
- 1st sandwich: 30/6 = **5.0**
- 2nd sandwich: 24/6 = **4.0**
- 3rd sandwich: 18/6 = **3.0**
- 4th sandwich: 12/6 = **2.0**

**Step 2: Rank purchases by MU per dollar and buy in order.**

Highest MU/$ first: 1st coffee (5.0) and 1st sandwich (5.0) are tied. Buy both.
Spent so far: $4 + $6 = **$10**. Remaining: $14.

Next highest: 2nd coffee (4.0) and 2nd sandwich (4.0), tied again. Buy both.
Spent: $10 + $4 + $6 = **$20**. Remaining: $4.

Next: 3rd coffee (3.0) and 3rd sandwich (3.0) are tied, but only $4 remains. A coffee costs $4, a sandwich costs $6. Buy the 3rd coffee.
Spent: $20 + $4 = **$24**. Budget exhausted.

**Step 3: Verify the optimal bundle.**

**Optimal bundle: 3 coffees and 2 sandwiches.** Watch the green dot on the graph — it should land right here.
Total spending: 3($4) + 2($6) = $12 + $12 = $24. Budget fully spent.
Total utility: (20 + 16 + 12) + (30 + 24) = 48 + 54 = **102 utils**.

At this bundle, the last coffee has MU/P = 12/4 = 3.0, and the last sandwich has MU/P = 24/6 = 4.0. Not perfectly equal — but only because the budget can't stretch to a 3rd sandwich at $6. Shifting $4 from the 3rd coffee (losing 12 utils) wouldn't be enough to buy another sandwich. This is the best the budget allows.`,
    },
  ],
};

export const consumerChoiceQuestions: PracticeQuestion[] = [
  {
    id: "cc-1",
    question:
      "A consumer is maximizing utility when which of the following conditions is met?",
    options: [
      "Total utility is equal for all goods consumed",
      "Marginal utility is equal for all goods consumed",
      "Marginal utility per dollar spent is equal for all goods consumed",
      "The consumer spends equal amounts on each good",
    ],
    correctIndex: 2,
    explanation:
      "The rule is MU/P equal across all goods — not MU alone, not total utility, not equal dollar amounts. (B) ignores prices entirely; a good with high marginal utility but a massive price tag might deliver terrible satisfaction per dollar. (A) confuses total with marginal, and total utility levels across goods are irrelevant to the optimization condition.",
  },
  {
    id: "cc-2",
    question:
      "The law of diminishing marginal utility helps explain which of the following?",
    options: [
      "Why supply curves slope upward",
      "Why demand curves slope downward",
      "Why firms earn zero economic profit in the long run",
      "Why governments impose price floors",
    ],
    correctIndex: 1,
    explanation:
      "Each additional unit provides less satisfaction, so you'll only buy the next one if the price drops enough to justify that lower marginal utility. Downward-sloping demand. (A) is about increasing marginal costs on the production side — completely different concept. (C) is about market entry and exit in competitive markets, unrelated to diminishing utility.",
  },
  {
    id: "cc-3",
    question:
      "A student has $20 and can buy notebooks at $4 each or pens at $2 each. If the price of notebooks falls to $2, what happens to the budget constraint?",
    options: [
      "It shifts outward in a parallel fashion",
      "It rotates outward along the notebook axis",
      "It rotates outward along the pen axis",
      "It remains unchanged because total income hasn't changed",
    ],
    correctIndex: 1,
    explanation:
      "Notebook price dropped, so the maximum notebooks affordable jumps from 5 to 10. Maximum pens stays at 10. The budget line pivots outward along the notebook axis. (A) would require an income change with constant prices — that's a parallel shift. (D) is wrong because a price change alters real purchasing power even when nominal income stays the same; the set of affordable bundles clearly expanded.",
  },
  {
    id: "cc-4",
    question:
      "A consumer currently buys goods X and Y. The marginal utility of X is 30 and its price is $5. The marginal utility of Y is 20 and its price is $10. To maximize utility, the consumer should:",
    options: [
      "Buy more of both X and Y",
      "Buy more of X and less of Y",
      "Buy more of Y and less of X",
      "Make no changes; utility is already maximized",
    ],
    correctIndex: 1,
    explanation:
      "Run the numbers. MU_X / P_X = 30/5 = 6. MU_Y / P_Y = 20/10 = 2. X delivers triple the satisfaction per dollar. Shift spending from Y to X. Diminishing marginal utility will pull MU_X down as you buy more X, and MU_Y will climb as you buy less Y, until the ratios converge. (D) is wrong because 6 does not equal 2 — the current bundle is clearly suboptimal.",
  },
  {
    id: "cc-5",
    question:
      "When the price of a normal good falls, the income and substitution effects:",
    options: [
      "Both increase the quantity demanded",
      "Both decrease the quantity demanded",
      "Work in opposite directions, with the substitution effect dominant",
      "Work in opposite directions, with the income effect dominant",
    ],
    correctIndex: 0,
    explanation:
      "For normal goods, both effects reinforce each other. Substitution effect: the good is relatively cheaper, buy more. Income effect: real income rose, and for a normal good, higher income means buying more. Both push quantity demanded up. (C) and (D) describe the inferior good situation, where the income effect works against the substitution effect.",
  },
  {
    id: "cc-6",
    question:
      "Which of the following best describes the substitution effect of a price decrease?",
    options: [
      "The consumer feels wealthier and buys more of all goods",
      "The consumer buys more of the good because it is now relatively cheaper than alternatives",
      "The consumer's demand curve shifts to the right",
      "The consumer reaches a higher budget constraint through increased income",
    ],
    correctIndex: 1,
    explanation:
      "The substitution effect isolates the changed price ratio while holding real income constant. Good A got cheaper relative to Good B, so you substitute toward A. (A) describes the income effect — feeling wealthier and expanding consumption is about purchasing power, not relative prices. (C) is wrong because a change in a good's own price causes movement along the demand curve, not a shift of it.",
  },
  {
    id: "cc-7",
    question:
      "A consumer's marginal utility from the 5th unit of a good is zero. What does this imply?",
    options: [
      "The consumer has maximized total utility from this good at 4 units",
      "The consumer should buy exactly 5 units",
      "The consumer's total utility is zero",
      "The consumer has reached their budget constraint",
    ],
    correctIndex: 0,
    explanation:
      "Zero marginal utility on the 5th unit means it adds nothing. Total utility peaked at 4 units. Look at the utility curve on the graph — it flattens completely at unit 5. (C) confuses marginal with total; total utility is the sum of all marginal utilities from units 1 through 4, which is positive. (B) is wrong because consuming the 5th unit yields zero additional benefit, so stopping at 4 is optimal unless the good is free.",
  },
  {
    id: "cc-8",
    question:
      "If the price of an inferior good decreases, the income effect will cause the consumer to:",
    options: [
      "Buy more of the inferior good",
      "Buy less of the inferior good",
      "Buy the same amount of the inferior good",
      "Switch entirely to a substitute good",
    ],
    correctIndex: 1,
    explanation:
      "Price drop raises real income. By definition, consumers buy less of inferior goods when income rises. So the income effect alone pushes quantity down. The substitution effect still pushes quantity up (it's relatively cheaper). For most inferior goods the substitution effect wins and overall quantity still rises. But the income effect component, isolated, reduces purchases. (A) describes the income effect for a normal good.",
  },
  {
    id: "cc-9",
    question:
      "A consumer spends all income on goods A and B. Good A costs $3 and delivers 18 utils of marginal utility. Good B costs $6 and delivers 30 utils of marginal utility. To move toward utility maximization, the consumer should:",
    options: [
      "Buy more of B and less of A because B has higher marginal utility",
      "Buy more of A and less of B because A has a higher marginal utility per dollar",
      "Maintain the current bundle because both goods provide positive utility",
      "Buy more of both goods by borrowing",
    ],
    correctIndex: 1,
    explanation:
      "MU_A / P_A = 18/3 = 6 utils per dollar. MU_B / P_B = 30/6 = 5 utils per dollar. A wins the per-dollar comparison. Shift spending from B toward A until the ratios equalize. (A) falls into the classic trap of comparing raw MU instead of MU per dollar — B has higher marginal utility (30 > 18) but lower bang per buck (5 < 6). (C) is wrong because positive marginal utility doesn't mean the allocation is optimal; unequal MU/P ratios prove reallocation would boost total utility.",
  },
  {
    id: "cc-10",
    question:
      "A consumer eats four slices of pizza and reports the following total utilities: 1st slice = 20 utils, 2nd slice = 36 utils, 3rd slice = 46 utils, 4th slice = 50 utils. The marginal utility of the 3rd slice is:",
    options: [
      "46 utils",
      "15.3 utils",
      "10 utils",
      "4 utils",
    ],
    correctIndex: 2,
    explanation:
      "Marginal utility = change in total utility from one more unit. MU of 3rd slice = 46 - 36 = 10 utils. (A) is the total utility after three slices, not the marginal gain from the third. (B) divides total by quantity (46/3 = 15.3) — that's average utility, a completely different measure. (D) is the marginal utility of the 4th slice (50 - 46 = 4).",
  },
  {
    id: "cc-11",
    question:
      "A consumer is in equilibrium spending $120 on goods X and Y. If MU_X/P_X = MU_Y/P_Y = 8, P_X = $5, and P_Y = $10, and the consumer buys 12 units of X, how many units of Y does the consumer buy?",
    options: [
      "4 units",
      "6 units",
      "8 units",
      "12 units",
    ],
    correctIndex: 1,
    explanation:
      "Plug into the budget constraint: ($5 x 12) + ($10 x Q_Y) = $120. That gives $60 + $10Q_Y = $120, so Q_Y = 6. The MU/P = 8 condition confirms the bundle is optimal, but the quantity of Y comes straight from the budget math. (A) would leave $20 unspent. (C) would blow the budget by $20.",
  },
  {
    id: "cc-12",
    question:
      "A consumer's income doubles while all prices remain constant. The budget constraint will:",
    options: [
      "Rotate outward along one axis only",
      "Shift outward in a parallel fashion, doubling the intercepts on both axes",
      "Become steeper because the consumer can now afford more expensive goods",
      "Remain unchanged because relative prices have not changed",
    ],
    correctIndex: 1,
    explanation:
      "Double the income, prices constant — both axis intercepts double. The slope equals the negative price ratio, which hasn't changed, so the shift is parallel. Watch the budget line on the graph when you drag the income slider: it moves outward without tilting. (A) describes a price change, which pivots the line. (D) confuses relative prices with purchasing power; the affordable set of bundles clearly expanded even though relative prices stayed the same.",
  },
  {
    id: "cc-13",
    question:
      "The price of good X falls. For a normal good, the substitution effect leads the consumer to buy more X, and the income effect also leads to buying more X. If good X were instead a Giffen good, what would be true?",
    options: [
      "The substitution effect leads to buying less X, and the income effect leads to buying more X",
      "Both the substitution and income effects lead to buying less X",
      "The substitution effect leads to buying more X, but the income effect leads to buying even more less X, so quantity demanded falls",
      "The income effect is zero for Giffen goods",
    ],
    correctIndex: 2,
    explanation:
      "A Giffen good is a special inferior good where the income effect dominates. When price falls, substitution effect still pushes toward more X — the good is relatively cheaper, and the substitution effect always moves toward the cheaper good. But the price drop raises real income, and since X is inferior, higher real income means buying less X. For Giffen goods specifically, this negative income effect overwhelms the positive substitution effect, so overall quantity demanded actually falls when price falls. Violates the Law of Demand. (A) is wrong because the substitution effect never moves away from the good that got cheaper. (D) is wrong because the income effect is the entire engine driving Giffen behavior.",
  },
  {
    id: "cc-14",
    question:
      "A consumer values the 100th gallon of water at $0.01 and a 1-carat diamond at $5,000. Water is essential for survival and diamonds are not, yet diamonds cost far more. This paradox is best explained by:",
    options: [
      "Diamonds are more useful than water in total",
      "The marginal utility of water is very low because water is abundant, while the marginal utility of diamonds is high because they are scarce",
      "Consumers are irrational in their purchasing decisions",
      "The supply of diamonds is perfectly elastic",
    ],
    correctIndex: 1,
    explanation:
      "The diamond-water paradox dissolves once you separate marginal from total utility. Water's total utility is enormous — you die without it. But at typical consumption levels water is so abundant that the next gallon adds almost nothing. Diamonds are scarce, so each additional one carries high marginal utility. Market price tracks marginal utility, not total. Adam Smith posed this puzzle in 1776; the marginalist revolution of the 1870s finally cracked it. (A) is factually wrong — water's total utility dwarfs diamonds'. (C) dismisses the puzzle without explaining anything.",
  },
  {
    id: "cc-15",
    question:
      "A consumer buys a concert ticket for $50 but would have been willing to pay up to $120 for it. The consumer surplus from this purchase is:",
    options: [
      "$120, the maximum willingness to pay",
      "$50, the price actually paid",
      "$70, the difference between willingness to pay and the actual price",
      "$170, the sum of willingness to pay and the price",
    ],
    correctIndex: 2,
    explanation:
      "Consumer surplus = willingness to pay minus price paid. $120 - $50 = $70. That $70 is the green shaded area you see on demand curve graphs — the triangle between the demand curve and the market price. (A) is gross value, not surplus. (B) is the cost, not the gain. (D) adds the two numbers together, which has no economic meaning whatsoever.",
  },
];
