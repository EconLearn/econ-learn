import type { PracticeQuestion } from "@/data/supply-demand-content";

export const consumerChoiceContent = {
  title: "Consumer Choice",
  subtitle:
    "Drag the budget line, watch the optimal bundle shift — this is how economists model every purchasing decision you make",
  sections: [
    {
      heading: "Why Do People Buy What They Buy?",
      content: `Economists model purchasing decisions using the concept of **utility** — basically the satisfaction or benefit you get from consuming something.

The question isn't whether you enjoy lattes. The question is how much satisfaction the next latte gives you per dollar compared to everything else that dollar could buy. That ratio — satisfaction per dollar — is what drives every purchasing decision in the model. When you pay $15.49/month for Netflix Standard instead of $10.99/month for Spotify Premium, you're implicitly saying the marginal dollar spent on Netflix returns more satisfaction to you than the marginal dollar on Spotify. Economists call that additional satisfaction from one more unit **marginal utility**.

Nobody walks around with a satisfaction meter, obviously. Utility isn't directly measurable in the real world. But the framework is useful because it forces you to think systematically about trade-offs — you can't have everything, so the question becomes what combination of goods squeezes the most satisfaction out of your limited budget.`,
    },
    {
      heading: "The Third Slice of Pizza Problem",
      content: `First slice when you haven't eaten since breakfast — amazing. Second slice, still solid. Third slice, fine but you're not excited anymore. By the fourth or fifth you're kind of forcing it.

That's the **law of diminishing marginal utility** in action: each additional unit of a good delivers less extra satisfaction than the previous one. The first hour of a new video game pulls you in completely. Hour eight feels like a chore.

This matters for way more than just pizza preferences. Diminishing marginal utility is why consumers spread their spending across many goods instead of dumping their entire paycheck on one thing. If the tenth coffee of the day adds essentially zero satisfaction, that $5 is obviously better spent on lunch. At some point the declining marginal utility of coffee drops below the marginal utility of food or entertainment or whatever else, and you switch. Look at the utility curve on the graph — see how it flattens as quantity goes up? That flattening IS diminishing marginal utility.

It also gives you another way to understand why demand curves slope downward, which you covered in earlier sections. You'll only buy the next unit if the price drops enough to justify the lower marginal utility that unit provides.`,
    },
    {
      heading: "Budget Constraints: The Reality Check",
      content: `Wanting stuff is the easy part.

A **budget constraint** shows every combination of goods you can afford given your income and the prices you face. It's the straight line on the graph.

Suppose you have $60 a month for entertainment and you're choosing between movies at $15 each and books at $10 each. Blow it all on movies and you get 4. All on books, 6. Mix it: 2 movies and 3 books uses exactly $60. The budget constraint is the line connecting all possible combinations that exactly exhaust your budget.

The slope of that line equals the negative price ratio: -(P_movies / P_books) = -(15/10) = -1.5. That slope represents the market's trade-off rate — to get one more movie you give up 1.5 books, and you don't get to negotiate that. The market sets it.

Income changes shift the whole line in or out while keeping the slope the same (parallel shift). Price changes rotate it. If the movie price drops, the budget line pivots outward along the movie axis — you can afford more movies now but your book-buying power didn't change. This distinction between parallel shifts and rotations comes up constantly on the AP exam: parallel shift means income changed, rotation means a price changed. Getting those mixed up is an easy way to lose points.`,
    },
    {
      heading: "The Utility-Maximizing Rule",
      content: `A rational consumer wants to wring the maximum total satisfaction out of every dollar. The rule for doing that is actually pretty elegant:

Allocate spending so that the **marginal utility per dollar** is equal across all goods:

MU_A / P_A = MU_B / P_B = MU_C / P_C ...

Here's why it works. You're spending on tacos ($2 each) and burritos ($5 each). The last taco gave you 20 utils, so that's 10 utils per dollar. The last burrito gave you 15 utils — only 3 utils per dollar. You're getting way more bang for your buck on tacos. Shift money away from burritos toward tacos. Each dollar you pull from burritos costs you 3 utils but gains you 10 on tacos. Keep shifting until the ratios equalize.

If MU_A / P_A > MU_B / P_B, buy more of A and less of B. As you consume more A, diminishing marginal utility pulls MU_A down. As you consume less B, MU_B rises. Eventually the per-dollar ratios converge.

That convergence is **consumer equilibrium** — there's no way to reshuffle your spending and squeeze out more total utility. On the graph, it's where the green dot sits on the budget line. Drag it anywhere else and total utility drops.`,
    },
    {
      heading: "Income and Substitution Effects",
      content: `When the price of a good changes, two separate things happen at once. The AP Micro exam tested this distinction in 2024 free-response, and it remains one of those concepts that sounds simple until you try to explain it precisely on paper.

Suppose your gym membership drops from $60/month to $30/month.

The **substitution effect**: the gym just got cheaper relative to every other way you could spend that money — rock climbing, yoga classes, a home workout setup. Compared to those alternatives, the gym is now a better deal per dollar, so you substitute toward it and cut back on other activities. The substitution effect always — every single time — pushes you toward the good that got cheaper. No exceptions.

The **income effect**: you're now spending $30 less on the gym each month. That functions exactly like getting a $30 raise — your real purchasing power went up. What you do with that extra buying power depends on whether the gym is a **normal good** (you'd use it more as your income rises) or an **inferior good** (you'd actually use it less as income rises — maybe you'd switch to a fancier boutique fitness studio).

For **normal goods**, both effects push the same direction: price drops, you buy more. Clean and simple. For **inferior goods**, they push against each other — substitution says buy more (it's relatively cheaper), income says buy less (you're effectively richer and this is an inferior good). In the rare extreme where the income effect actually overpowers the substitution effect, you get a **Giffen good** — demand goes up when price goes up. Robert Giffen supposedly observed this with potatoes during the Irish famine in the 1840s. It's mostly a theoretical curiosity but it showed up on the 2019 AP exam, so know what it is.`,
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

Next: 3rd coffee (3.0) and 3rd sandwich (3.0) are tied, but only $4 left. A coffee costs $4, a sandwich costs $6. Can only afford the coffee.
Spent: $20 + $4 = **$24**. Budget gone.

**Step 3: Verify the optimal bundle.**

**Optimal bundle: 3 coffees and 2 sandwiches.** The green dot on the graph should land right here.
Total spending: 3($4) + 2($6) = $12 + $12 = $24. Budget fully spent.
Total utility: (20 + 16 + 12) + (30 + 24) = 48 + 54 = **102 utils**.

At this bundle, the last coffee has MU/P = 12/4 = 3.0, and the last sandwich has MU/P = 24/6 = 4.0. Not perfectly equal — but that's because the budget can't stretch to a 3rd sandwich at $6. Shifting $4 away from the 3rd coffee (losing 12 utils) wouldn't free up enough to buy another sandwich. This is the best allocation the budget allows.`,
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
      "The utility-maximizing rule is MU/P equal across all goods — not raw MU, not total utility, and definitely not equal dollar amounts. B ignores prices entirely, which is a problem because a good with sky-high marginal utility but a massive price tag might deliver terrible value per dollar. A confuses total with marginal utility, and total utility levels across different goods have nothing to do with the optimization condition.",
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
      "Each additional unit gives you less satisfaction, so you'll only buy the next unit if the price drops enough to justify that lower marginal utility. That's a downward-sloping demand curve. A is about increasing marginal costs on the production side — completely different concept, different side of the market. C is about firm entry and exit in competitive markets, which has nothing to do with how individual consumers value successive units of a good.",
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
      "Notebook price dropped, so the maximum number of notebooks the student can afford jumps from 5 to 10. Maximum pens stays at 10 (pen price didn't change). The budget line pivots outward along the notebook axis — one endpoint moves, the other doesn't. A would require an income change with both prices held constant; that gives a parallel shift. D is wrong because a price change alters your real purchasing power even when your nominal income stays the same.",
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
      "Do the math. MU_X / P_X = 30/5 = 6 utils per dollar. MU_Y / P_Y = 20/10 = 2 utils per dollar. X gives triple the satisfaction per dollar, so shift spending from Y toward X. As you buy more X, diminishing marginal utility drags MU_X down; as you buy less Y, MU_Y rises. Eventually the ratios converge and you're at equilibrium. D is wrong because 6 doesn't equal 2 — the current allocation is clearly leaving satisfaction on the table.",
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
      "For normal goods, the two effects reinforce each other. Substitution effect: the good is relatively cheaper, so you buy more of it. Income effect: the price drop effectively raised your real income, and for a normal good you buy more when income rises. Both push quantity demanded upward. C and D describe what happens with inferior goods, where the income effect works against the substitution effect.",
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
      "The substitution effect isolates the price-ratio change while holding real income constant. Good A got cheaper relative to Good B, so you substitute toward A. That's it. A describes the income effect — the feeling-wealthier part is about purchasing power, not relative prices. C is wrong because a change in a good's own price causes movement along the demand curve, not a shift of the whole curve.",
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
      "If the 5th unit adds zero satisfaction, then total utility peaked at 4 units — the 5th unit doesn't help and consuming a 6th would actually reduce total utility (negative marginal utility). C confuses marginal with total; total utility is the sum of all marginal utilities from units 1 through 4, which is definitely positive. B is wrong because the 5th unit contributes nothing, so unless it's free there's no reason to buy it — stopping at 4 is optimal.",
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
      "The price drop raises real income. By definition, when income goes up consumers buy less of inferior goods — so the income effect alone pushes quantity down. The substitution effect still pushes quantity up (the good is relatively cheaper). For most inferior goods the substitution effect wins overall and quantity still increases on net. But the question asks specifically about the income effect in isolation, and that component reduces purchases. A describes the income effect for a normal good, not an inferior one.",
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
      "MU_A / P_A = 18/3 = 6 utils per dollar. MU_B / P_B = 30/6 = 5 utils per dollar. A delivers more satisfaction per dollar, so shift spending from B toward A until the ratios converge. The classic trap is A — it compares raw MU (30 > 18) instead of MU per dollar (5 < 6). Higher marginal utility doesn't mean better value if the price is proportionally higher. C is wrong because positive marginal utility from both goods doesn't mean the allocation is optimal; the unequal MU/P ratios prove you could do better by reshuffling.",
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
      "Marginal utility = change in total utility from one more unit. For the 3rd slice: 46 - 36 = 10 utils. A (46) is the total utility after three slices, not the marginal gain from the third one. B (15.3) comes from dividing total utility by quantity (46/3), which gives you average utility — a different concept. D (4 utils) is the marginal utility of the 4th slice (50 - 46), not the 3rd.",
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
      "Plug into the budget constraint: ($5 x 12) + ($10 x Q_Y) = $120. So $60 + $10Q_Y = $120, meaning Q_Y = 6. The MU/P = 8 condition confirms the bundle is optimal, but the number of Y units comes straight from budget arithmetic. A (4 units) would leave $20 unspent. C (8 units) would blow past the $120 budget by $20.",
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
      "Double the income with prices unchanged — both axis intercepts double. The slope equals the negative ratio of prices, and since neither price changed, the slope stays the same. Parallel outward shift. A describes what happens when one price changes (rotation). D makes the mistake of confusing relative prices with purchasing power; relative prices didn't change, true, but the set of affordable bundles clearly expanded when income doubled.",
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
      "A Giffen good is an extreme type of inferior good where the income effect dominates the substitution effect. When the price falls, the substitution effect still pushes toward more X — the good is cheaper relative to alternatives, and substitution always moves you toward the cheaper good. But the price drop raises real income, and since X is inferior, higher real income means buying less of it. For a Giffen good specifically, this negative income effect is strong enough to overwhelm the positive substitution effect, so overall quantity demanded actually falls when price falls — violating the Law of Demand. A is wrong because the substitution effect never pushes away from the good that got cheaper; it always goes the other direction. D is wrong because the income effect is the whole mechanism driving Giffen behavior.",
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
      "The diamond-water paradox disappears once you separate marginal utility from total utility. Water's total utility is immense — you literally die without it. But at typical consumption levels water is so abundant that the next gallon adds almost nothing. Diamonds are scarce, so each additional one carries high marginal utility. Market prices reflect marginal utility, not total. Adam Smith posed this puzzle in 1776; the marginalist economists of the 1870s (Jevons, Menger, Walras) finally resolved it. A is factually wrong — water's total utility dwarfs diamonds'. C is a non-answer that explains nothing.",
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
      "Consumer surplus = willingness to pay minus price actually paid = $120 - $50 = $70. On a demand curve graph, that $70 shows up as the area between the demand curve and the market price line — the familiar triangle or rectangle depending on whether you're looking at one unit or many. A gives the gross value, not the surplus. B is just the cost. D adds the two numbers together, which doesn't correspond to any economic concept.",
  },
];
