import type { PracticeQuestion } from "@/data/supply-demand-content";

export const consumerChoiceContent = {
  title: "Consumer Choice",
  subtitle:
    "How rational consumers allocate limited income to maximize satisfaction — and what happens when prices shift",
  sections: [
    {
      heading: "Why Do People Buy What They Buy?",
      content: `You walk into a coffee shop with $6. You could get a latte, a muffin, or both if they're cheap enough. What determines your choice? Economists answer this with **utility**, the satisfaction or benefit you get from consuming a good.

The question isn't "do I like lattes?" It's "how much satisfaction does this latte give me *relative to its price* and *relative to everything else I could buy*?" That comparison, satisfaction per dollar, drives every purchasing decision.

Utility isn't directly measurable. Nobody walks around with a satisfaction meter. But the framework is powerful because it forces you to think about trade-offs. When you choose a Netflix subscription over Spotify Premium, you're implicitly saying the next dollar spent on Netflix gives you more utility than the next dollar on Spotify. Economists call this **marginal utility**: the *additional* satisfaction from one more unit of a good.`,
    },
    {
      heading: "The Third Slice of Pizza Problem",
      content: `The first slice of pizza when you're starving is incredible. The second is still great. The third is fine but not as exciting. By the fourth or fifth, you're forcing it down.

This pattern is the **law of diminishing marginal utility**. Each additional unit of a good provides *less* extra satisfaction than the previous one. The first hour of a video game is thrilling. Hour eight is a slog.

The implications are real. Diminishing marginal utility explains why consumers *diversify* their spending instead of dumping their entire budget on one good. If the tenth coffee of the day gives you almost zero additional satisfaction, that $5 is better spent on lunch. The declining marginal utility of coffee eventually falls below the marginal utility of other goods, so you switch.

It also explains downward-sloping demand curves. You'll only buy more of something if the price drops, because each additional unit is worth less to you than the last one.`,
    },
    {
      heading: "Budget Constraints: The Reality Check",
      content: `Wanting things is easy. Affording them is the constraint. A **budget constraint** represents all the combinations of goods you can afford given your income and the prices you face.

Say you have $60 per month for entertainment, choosing between movies ($15 each) and books ($10 each). Spend everything on movies and you get 4. Everything on books, you get 6. Or mix: 2 movies and 3 books. The budget constraint is the line connecting all these combinations.

The slope of the budget line equals the *negative* ratio of prices: -(P_movies / P_books) = -(15/10) = -1.5. This slope is the market trade-off. To get one more movie, you must give up 1.5 books. You don't choose that rate; the market imposes it.

**What shifts the budget constraint?**
- *Income changes* shift the line outward (more income) or inward (less income), keeping the slope the same.
- *Price changes* rotate the line. If movie prices drop, the budget line pivots outward along the movie axis. You can now afford more movies, but your book-buying power hasn't changed.`,
    },
    {
      heading: "The Utility-Maximizing Rule",
      content: `A rational consumer wants to squeeze the most total satisfaction out of every dollar. The rule for doing so:

Allocate your budget so that the **marginal utility per dollar** is equal across all goods:

MU_A / P_A = MU_B / P_B = MU_C / P_C ...

To see why, suppose you're spending on tacos and burritos. The last taco gives you 20 utils and costs $2, so that's 10 utils per dollar. The last burrito gives you 15 utils and costs $5, so that's 3 utils per dollar. You're *not* maximizing. You should shift money from burritos to tacos. Each dollar moved from burritos costs you 3 utils but gains you 10. Keep shifting until the ratios equalize.

If MU_A / P_A > MU_B / P_B, buy more of A and less of B. As you consume more A, diminishing marginal utility kicks in and MU_A falls. As you consume less B, MU_B rises. Eventually the ratios converge and you've found your optimal bundle.

This point is **consumer equilibrium**: no reallocation of spending can increase total utility.`,
    },
    {
      heading: "Income and Substitution Effects",
      content: `When the price of a good changes, two things happen simultaneously. Separating them is critical for the AP exam.

Say your gym membership drops from $60/month to $30/month. You respond in two distinct ways.

The **substitution effect**: the gym just got cheaper *relative to* other activities. Compared to rock climbing, home workouts, or yoga classes, the gym is now a better deal per dollar. You substitute toward it, going more often and doing less of the alternatives. The substitution effect *always* moves you toward the good that got cheaper.

The **income effect**: you're now spending $30 less on the gym, which functions like a $30 raise. Your real purchasing power increased. What you do with that depends on whether the gym is a *normal good* (you buy more as income rises) or an *inferior good* (you buy less as income rises). For most goods, the income effect reinforces the substitution effect.

For **normal goods**, both effects push in the same direction: price drops, quantity demanded rises. For **inferior goods**, they push in opposite directions. In the rare extreme case where the income effect overpowers the substitution effect, you get a **Giffen good** where demand *increases* when price rises. Mostly a theoretical curiosity, but it has appeared on exams.`,
    },
    {
      heading: "Worked Example: Finding the Optimal Bundle",
      content: `A student has **$24** to spend on two goods: coffee (C) at **$4 per cup** and sandwiches (S) at **$6 each**. The table below shows marginal utility for each unit:

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

Next: 3rd coffee (3.0) and 3rd sandwich (3.0) are tied, but we only have $4 left. A coffee costs $4, a sandwich costs $6. Buy the 3rd coffee.
Spent: $20 + $4 = **$24**. Budget exhausted.

**Step 3: Verify the optimal bundle.**

**Optimal bundle: 3 coffees and 2 sandwiches.**
Total spending: 3($4) + 2($6) = $12 + $12 = $24. Budget is fully spent.
Total utility: (20 + 16 + 12) + (30 + 24) = 48 + 54 = **102 utils**.

At this bundle, the last coffee purchased has MU/P = 12/4 = 3.0, and the last sandwich has MU/P = 24/6 = 4.0. These aren't perfectly equal, but only because we couldn't afford the 3rd sandwich. Given the budget constraint, no reallocation would increase total utility. Shifting $4 from the 3rd coffee (losing 12 utils) wouldn't be enough to buy another sandwich ($6), so this is the best we can do.`,
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
      "The utility-maximizing rule requires MU/P to be equal across all goods, not MU alone. Option B is wrong because a good with high marginal utility but a very high price may deliver less satisfaction per dollar than a cheaper alternative. Option A confuses total utility with marginal — total utility levels across goods have no bearing on the optimization condition. Option D is wrong because optimal spending depends on prices and preferences, not equal dollar amounts.",
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
      "As you consume more of a good, each additional unit provides less satisfaction. You'll only buy that next unit if the price falls enough to justify the lower marginal utility — hence the downward slope of demand. Option A is wrong because supply curves slope upward due to increasing marginal costs of production, which is a seller-side concept unrelated to consumer satisfaction. Option C describes long-run competitive equilibrium, which is driven by market entry and exit, not diminishing utility.",
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
      "When the price of notebooks falls, the student can afford more notebooks (the maximum on the notebook axis increases from 5 to 10), but the maximum pens affordable stays at 10. The budget line pivots outward along the notebook axis. Option A is wrong because parallel shifts occur when income changes with prices constant — here income is unchanged and only one price changed. Option D is wrong because a price change absolutely affects the budget constraint even though nominal income is the same, since real purchasing power has increased.",
  },
  {
    id: "cc-4",
    question:
      "A consumer currently buys goods X and Y. The marginal utility of X is 30 and its price is $5. The marginal utility of Y is 20 and its price is $10. To maximize utility, the consumer should:",
    options: [
      "Buy more of both X and Y",
      "Buy more of X and less of Y",
      "Buy more of Y and less of X",
      "Make no changes — utility is already maximized",
    ],
    correctIndex: 1,
    explanation:
      "MU_X / P_X = 30/5 = 6. MU_Y / P_Y = 20/10 = 2. Since X delivers more utility per dollar, the consumer should shift spending from Y to X. As they buy more X, diminishing marginal utility will reduce MU_X. As they buy less Y, MU_Y will rise. They should continue until the ratios equalize. Option D is wrong because the MU per dollar ratios are not equal (6 vs. 2), so the current bundle is not optimal. Option C gets the direction backwards — you should buy more of the good with the higher MU/P ratio, not less of it.",
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
      "For a normal good, the substitution effect says: the good is relatively cheaper, so buy more of it. The income effect says: your real income rose (you can buy more overall), and since it's a normal good, higher income means buying more of it. Both push quantity demanded upward. Options C and D describe the situation for inferior goods, where the income effect works against the substitution effect. For normal goods, the two effects reinforce each other.",
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
      "The substitution effect isolates the impact of the changed price ratio while holding real income constant. When good A gets cheaper, it becomes a better deal relative to good B, so the consumer substitutes toward A. Option A describes the income effect, not the substitution effect — feeling wealthier and expanding total consumption is about purchasing power, not relative prices. Option C is wrong because a price change of the good itself causes a movement along the demand curve, not a shift of it.",
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
      "When marginal utility reaches zero, the next unit adds nothing to total satisfaction. Total utility is maximized at 4 units — consuming the 5th unit provides no additional benefit (and a 6th might actually reduce it). Option B is wrong because buying the 5th unit adds zero satisfaction, so the consumer should stop at 4 unless the good is free. Option C confuses marginal utility with total utility — total utility is the sum of all marginal utilities from units 1 through 4, which is positive. Option D is unrelated; zero marginal utility is about satisfaction, not affordability.",
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
      "When the price of an inferior good falls, the consumer's real income effectively rises. By definition, consumers buy less of inferior goods when their income increases. So the income effect alone pushes them to buy less. However, the substitution effect still pushes them to buy more (it's relatively cheaper). For most inferior goods, the substitution effect dominates and quantity demanded still rises overall. Option A describes what the income effect does for a normal good, not an inferior one. Option D overstates the response — the income effect reduces quantity but doesn't eliminate consumption entirely.",
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
      "MU_A / P_A = 18/3 = 6 utils per dollar. MU_B / P_B = 30/6 = 5 utils per dollar. Good A delivers more satisfaction per dollar spent, so the consumer should reallocate spending from B toward A until the ratios equalize. (A) is wrong because while B has higher total marginal utility (30 > 18), the utility-maximizing rule compares MU per dollar, not MU alone — and A wins that comparison at 6 vs. 5. (C) is wrong because positive marginal utility does not mean the allocation is optimal; the unequal MU/P ratios prove reallocation would increase total utility. (D) ignores the budget constraint — the question assumes a fixed income, and borrowing is not part of the standard consumer choice model.",
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
      "Marginal utility is the change in total utility from consuming one more unit: MU of 3rd slice = TU after 3rd − TU after 2nd = 46 − 36 = 10 utils. The pattern (20, 16, 10, 4) confirms diminishing marginal utility. (A) 46 confuses total utility with marginal utility — 46 is the cumulative satisfaction from all three slices combined, not the addition from just the third. (B) 15.3 divides the total utility by the number of slices (46/3), which gives average utility, not marginal utility. (D) 4 is the marginal utility of the 4th slice (50 − 46), not the 3rd.",
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
      "The budget constraint requires total spending to equal income: (P_X × Q_X) + (P_Y × Q_Y) = $120. Substituting: ($5 × 12) + ($10 × Q_Y) = $120, so $60 + $10Q_Y = $120, giving Q_Y = 6. The equilibrium condition MU/P = 8 for both goods confirms the bundle is optimal, but the quantity of Y is determined by the budget constraint. (A) 4 units would leave $20 unspent ($60 + $40 = $100), violating the assumption that all income is spent. (C) 8 units would cost $60 + $80 = $140, exceeding the $120 budget. (D) 12 units would cost $60 + $120 = $180, far exceeding the budget.",
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
      "When income doubles with prices constant, the maximum affordable quantity of every good doubles. Both intercepts double, and since prices (which determine the slope) are unchanged, the line shifts outward in parallel. (A) describes what happens when one good's price changes — the line pivots around the intercept of the good whose price didn't change. (C) is wrong because the slope of the budget line equals the negative price ratio (−P_X/P_Y), which hasn't changed since both prices are constant. (D) ignores that while relative prices are the same, the consumer's purchasing power has expanded — the set of affordable bundles has grown.",
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
      "A Giffen good is a special case of an inferior good where the income effect is so strong that it overwhelms the substitution effect. When price falls, the substitution effect still pushes toward buying more X (the good is relatively cheaper). However, the price drop raises real income, and since it is an inferior good, higher real income reduces demand for X. For a Giffen good, this negative income effect is larger than the positive substitution effect, so the net result is that quantity demanded falls when price falls — violating the Law of Demand. (A) is wrong because the substitution effect always moves toward the relatively cheaper good, never away from it. (B) is wrong because the substitution effect always increases quantity of the good whose price fell. (D) is wrong because the income effect is the entire mechanism through which Giffen behavior operates — without it, the good would behave normally.",
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
      "The diamond-water paradox is resolved by distinguishing marginal utility from total utility. Water has enormous total utility (it sustains life) but very low marginal utility at typical consumption levels because it is so abundant — the next gallon adds almost nothing to your well-being. Diamonds have lower total utility but very high marginal utility because they are scarce — each additional diamond is highly valued. Market price reflects marginal utility, not total utility. (A) is wrong because water's total utility far exceeds diamonds' — without water you die. (C) dismisses the paradox without explaining it; consumers are behaving rationally by paying based on marginal value. (D) is wrong because diamond supply is highly restricted (inelastic, not perfectly elastic), but supply conditions alone don't resolve the paradox without understanding marginal utility.",
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
      "Consumer surplus measures the net benefit to the buyer: willingness to pay minus the actual price paid. $120 − $50 = $70. This $70 represents the extra value the consumer received beyond what they had to give up. (A) $120 is the gross value the consumer places on the ticket, not the surplus — surplus subtracts the cost. (B) $50 is the price paid, which represents what the consumer gave up, not what they gained beyond that payment. (D) $170 adds willingness to pay and price, which has no economic meaning — surplus is always a subtraction (value received minus value given up).",
  },
];
