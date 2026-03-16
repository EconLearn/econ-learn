import { PracticeQuestion } from "@/data/supply-demand-content";

export const basicConceptsContent = {
  title: "Basic Economic Concepts",
  subtitle:
    "Scarcity, opportunity cost, the production possibilities curve, and why countries trade",
  sections: [
    {
      heading: "Scarcity and Choice",
      content: `You can't have everything you want. Not because you're broke, but because **scarcity** hits everyone. There are only so many barrels of oil underground, so many hours in your day, so many tons of steel a factory can turn out. Land, labor, capital, entrepreneurship. Every factor of production has a ceiling.

Here's the thing people get wrong: scarcity is not poverty. Jeff Bezos faces scarcity. He gets the same 24 hours you do, and an hour spent in a board meeting is an hour he can't spend sailing. The United States faces scarcity. Every dollar Congress sends to the Pentagon is a dollar that doesn't go to Medicare.

Because resources are scarce, every choice forces a **tradeoff**. Pick one thing, lose access to something else. The core economic problem isn't that people are poor. It's that no pile of resources is big enough to satisfy every want at once. That's really what economics comes down to: studying how people, firms, and governments divide up what's limited among everything they'd like to do with it.`,
    },
    {
      heading: "Opportunity Cost",
      content: `Picture this: you graduate high school and face a choice. Attend a four-year university, or start working full-time at $35,000 a year. If you pick college, the sticker price (tuition, books, room and board) is only part of the cost. You also lose four years of paychecks. That lost income is your **opportunity cost**, the value of the next-best alternative you gave up.

This trips people up. Suppose you turn down both a $35,000 job and a $20,000 job to attend school. Your opportunity cost is $35,000, the single best alternative. Not the sum of every option you rejected. Opportunity cost never stacks. It's always the one road-not-taken that hurts the most.

The logic works at every scale. When Congress allocates $2 billion to a new aircraft carrier, the **opportunity cost** is the bridge repairs or school funding that money could have covered. When a startup spends its seed funding on engineers, the opportunity cost is the marketing campaign it can no longer afford. Every resource pointed in one direction is a resource pulled away from another.`,
    },
    {
      heading: "The Production Possibilities Curve",
      content: `Classic econ setup: take a country that makes only two things, guns and butter. Throw every factory, every worker, every acre at gun production and you hit a ceiling. Maximum guns, zero butter. Reverse it and you get maximum butter, zero guns. Between those extremes sits a whole menu of possible mixes. The **production possibilities curve** (PPC) draws that menu as a line on a graph.

Where you sit relative to the curve tells you something specific. Points **on the curve** mean the economy is using all its resources. Every worker employed, every machine running. You can't get more guns without giving up some butter. Points **inside the curve** mean something has gone wrong. Factories sit idle, workers are unemployed, capacity is wasted. The country could produce more of both goods just by putting those resources to work. Points **outside the curve** are simply out of reach given current resources and technology.

Now, the PPC bows outward instead of forming a straight line because of **increasing opportunity costs**. When you shift workers from butter churns to weapons factories, the first batch you move are people who were mediocre at churning butter but decent with machinery. You lose little butter and gain a lot of guns. The last batch are your star butter-makers who know nothing about weapons manufacturing. Each additional gun now costs a huge pile of forgone butter. Resources aren't interchangeable, so the tradeoff gets steeper as you push toward either extreme.`,
    },
    {
      heading: "Opportunity Cost on the PPC",
      content: `Reading opportunity cost off a PPC is actually pretty straightforward. Look at the **slope**. At any point on the curve, the slope tells you how many units of the vertical-axis good you sacrifice to get one more unit of the horizontal-axis good.

Slide rightward along the PPC, producing more of Good X, and the curve gets steeper. That steepening is the visual signature of rising opportunity cost. The 10th unit of X might cost you 1 unit of Y. The 50th unit of X might cost you 4 units of Y. Same good, wildly different price, because you're pulling less and less suitable resources into X production.

Here's an important distinction. If the economy is sitting inside the curve (say during a recession with 10% unemployment), it can increase production of both goods simultaneously just by putting idle resources to work. No tradeoff required. But once you're **on the curve**, every extra unit of X means less Y. No free lunch on the efficient frontier.

A straight-line PPC means **constant opportunity costs**: every additional unit of X always costs the same amount of Y, regardless of how much X you're already making. That only happens when resources are perfectly interchangeable between the two goods, which almost never holds in practice.`,
    },
    {
      heading: "Comparative Advantage",
      content: `The United States is richer, more productive, and more technologically advanced than Bangladesh. So why does it import T-shirts from there? Bangladesh can't outproduce the US in anything. Yet both countries gain from trade. The answer is **comparative advantage**.

Forget who's "better" in absolute terms. What matters is opportunity cost. A country has a comparative advantage in a good when it can produce that good at a lower opportunity cost than its trading partner. The US could make T-shirts, but every hour an American worker spends sewing cotton is an hour not spent writing software or manufacturing semiconductors. Bangladesh gives up far less when it makes T-shirts.

**Absolute advantage** means one party produces more output from the same inputs. The US has an absolute advantage over Bangladesh in practically everything. But that fact tells you nothing about who should specialize in what. Not the most intuitive idea, but it's one of the most important in economics.

Here's a concrete case. The US can produce 100 units of software or 50 units of clothing. Bangladesh can produce 10 units of software or 30 units of clothing. The US gives up 0.5 clothing per software unit; Bangladesh gives up 3 clothing per software unit. The US has the **comparative advantage** in software. Bangladesh gives up only 0.33 software per clothing unit versus 2 for the US, so Bangladesh has the comparative advantage in clothing despite being less productive overall.

Each side specializes where its opportunity cost is lowest, then trades. Both end up consuming more than they could produce on their own.`,
    },
    {
      heading: "Shifting the PPC",
      content: `The PPC shifts whenever the economy's capacity to produce changes.

An **outward shift** means the economy can now make more of both goods. That's economic growth. Causes include:
- More resources coming online (immigration boosts the labor force, new oil fields are drilled, factories are built)
- Technology improvements (mechanized farming, faster computer chips)
- Education and training that lift worker productivity
- Discovery of new natural resources

An **inward shift** means productive capacity has shrunk. Causes include:
- War or natural disaster destroying factories, infrastructure, or farmland
- Brain drain, where skilled workers emigrate to other countries
- Soil erosion, overfishing, or deforestation degrading natural resources

The shift doesn't have to be even across both goods, though. A breakthrough in agricultural biotech might double crop yields but do nothing for steel production. In that case the PPC **pivots**: the food-axis endpoint pushes outward while the steel-axis endpoint stays put.

A point outside the curve you couldn't reach last year? After an outward shift, it's now on or inside the new frontier. Economic growth is really just the frontier moving outward over time. What was impossible yesterday becomes achievable today.`,
    },
    {
      heading: "Worked Example",
      content: `Let's walk through one. Country A can produce 100 widgets or 50 gadgets. Country B can produce 60 widgets or 40 gadgets. Who specializes in what?

**Find each country's opportunity cost of widgets.**

Country A: 50 gadgets / 100 widgets = **0.5 gadgets per widget**.
Country B: 40 gadgets / 60 widgets = **0.67 gadgets per widget**.

**Compare.** Country A gives up less (0.5 < 0.67), so **Country A has the comparative advantage in widgets**.

**Now do gadgets.**

Country A: 100 widgets / 50 gadgets = **2 widgets per gadget**.
Country B: 60 widgets / 40 gadgets = **1.5 widgets per gadget**.

**Compare.** Country B gives up less (1.5 < 2), so **Country B has the comparative advantage in gadgets**.

Notice that Country A has the absolute advantage in both goods (it can produce more of each). Doesn't matter. Comparative advantage is about who sacrifices less, not who produces more.

Country A specializes in widgets, Country B specializes in gadgets, they trade, and both consume beyond what either could produce alone.`,
    },
  ],
};

export const basicConceptsQuestions: PracticeQuestion[] = [
  {
    id: "bc-1",
    question:
      "Which of the following best describes the fundamental economic problem?",
    options: [
      "Poverty prevents people from buying what they need",
      "Resources are scarce relative to unlimited wants",
      "Governments fail to distribute goods fairly",
      "Markets do not always reach equilibrium",
    ],
    correctIndex: 1,
    explanation:
      "Scarcity, limited resources chasing unlimited wants, is the whole reason economics exists as a field. Every allocation decision involves a tradeoff because of it. Option A confuses scarcity with poverty. A billionaire still faces scarcity (limited time, limited attention). Option C describes a distribution problem, and Option D describes market failure. These are real issues, but neither is THE fundamental economic problem.",
  },
  {
    id: "bc-2",
    question:
      "You skip a $12/hour work shift to study for your economics exam. Your roommate offers you a free concert ticket (worth $20 to you) for the same time slot, but you decline. What is your opportunity cost of studying?",
    options: [
      "$12 (the wages you gave up)",
      "$20 (the concert you gave up)",
      "$32 (wages plus the concert)",
      "$0 (studying is an investment, not a cost)",
    ],
    correctIndex: 1,
    explanation:
      "The concert ($20 value) beats the work shift ($12), so the concert is your next-best alternative. Opportunity cost = $20. Option C ($32) is the classic trap: students want to add up every forgone option, but opportunity cost only counts the single best alternative you didn't take. Option A picks the wrong alternative (the shift is worth less than the concert). Option D is just wishful thinking; studying absolutely has an opportunity cost.",
  },
  {
    id: "bc-3",
    question:
      "A point inside the production possibilities curve represents:",
    options: [
      "An efficient allocation of resources",
      "An unattainable combination of goods",
      "An attainable but inefficient use of resources",
      "Economic growth",
    ],
    correctIndex: 2,
    explanation:
      "Inside the curve = reachable but wasteful. Something is going wrong: idle factories, unemployed workers, misallocated resources. The economy could produce more of one or both goods without any tradeoff. Option A is backwards: efficiency means being ON the curve, not inside it. Option B flips the logic; points OUTSIDE the curve are unattainable. Option D confuses location on the graph with movement of the graph; economic growth shifts the PPC outward, which is a different concept entirely.",
  },
  {
    id: "bc-4",
    question:
      "The production possibilities curve bows outward because of:",
    options: [
      "Constant opportunity costs across all production levels",
      "Decreasing opportunity costs as more of a good is produced",
      "Increasing opportunity costs as more of a good is produced",
      "Economies of scale in production",
    ],
    correctIndex: 2,
    explanation:
      "Resources aren't one-size-fits-all. Farmland makes lousy factory floor, and machinists make lousy farmers. As you push production of one good further, you're pulling in resources that are worse and worse at making it, so each extra unit costs more of the other good, reflecting increasing opportunity costs. That's what creates the bowed-out shape. Option A describes a straight-line PPC (constant costs). Option B would produce a curve that bows inward, which isn't the standard shape. Option D (economies of scale) is a different concept entirely and wouldn't produce this shape.",
  },
  {
    id: "bc-5",
    question:
      "Country X can produce 200 tons of rice or 100 tons of cloth. Country Y can produce 150 tons of rice or 150 tons of cloth. Which country has a comparative advantage in cloth?",
    options: [
      "Country X, because it can produce more rice",
      "Country Y, because its opportunity cost of cloth is lower",
      "Country X, because it has higher total production capacity",
      "Neither, because they have equal opportunity costs",
    ],
    correctIndex: 1,
    explanation:
      "Run the numbers. Country X: 1 ton of cloth costs 200/100 = 2 tons of rice. Country Y: 1 ton of cloth costs 150/150 = 1 ton of rice. Country Y sacrifices less rice per cloth (1 < 2), so Country Y has the comparative advantage in cloth. Option A confuses absolute and comparative advantage; yes, Country X produces more rice, but that's absolute advantage, which doesn't determine who should specialize. Option C makes the same mistake using total output. Option D is arithmetically wrong: the opportunity costs are clearly different.",
  },
  {
    id: "bc-6",
    question:
      "Which of the following would shift the PPC outward?",
    options: [
      "A decrease in unemployment from 8% to 4%",
      "A shift in production from consumer goods to capital goods",
      "A technological improvement that increases productivity",
      "Moving from a point inside the PPC to a point on the PPC",
    ],
    correctIndex: 2,
    explanation:
      "New technology raises the ceiling on what the economy can produce, pushing the entire frontier outward. Option A is the trap answer and the one most students pick. Cutting unemployment from 8% to 4% moves the economy from a point inside the PPC toward the existing curve, but the curve itself doesn't budge. The PPC represents maximum potential, and reducing unemployment means getting closer to that potential, not raising it. Option B changes the production mix (movement along the curve) but doesn't shift it. Option D is the same idea as Option A: moving to the curve, not moving the curve.",
  },
  {
    id: "bc-7",
    question:
      "If two countries each specialize according to comparative advantage and then trade, which of the following is true?",
    options: [
      "Only the less productive country benefits from trade",
      "Both countries can consume beyond their individual PPCs",
      "The country with absolute advantage in both goods does not benefit",
      "Total world production of both goods decreases",
    ],
    correctIndex: 1,
    explanation:
      "Specialization based on comparative advantage raises total world output. Both countries then trade and end up consuming combinations that sit outside their own individual PPCs, something neither could reach alone. Option A gets it exactly backwards; the less productive country benefits, but so does the more productive one. Option C is a common misconception; even a country that's better at everything still gains, because it frees up resources by importing the good where its comparative advantage is weakest. Option D is the opposite of what happens; total production goes up, not down.",
  },
  {
    id: "bc-8",
    question:
      "A straight-line PPC implies which of the following about opportunity costs?",
    options: [
      "Opportunity costs increase as more of a good is produced",
      "Opportunity costs decrease as more of a good is produced",
      "Opportunity costs are constant regardless of the production mix",
      "There are no opportunity costs because resources are unlimited",
    ],
    correctIndex: 2,
    explanation:
      "Straight line = constant slope = the tradeoff ratio never changes. Produce the 1st unit of X or the 100th, and you give up the same amount of Y each time. That only happens when every resource is equally good at producing both goods. Option A describes a bowed-out (concave) PPC, which is the standard shape when resources are specialized. Option B would produce an inward-bowing curve, not a straight line. Option D is nonsense; there are always opportunity costs on a PPC; the slope itself IS the opportunity cost.",
  },
  {
    id: "bc-9",
    question:
      "Country A can produce 80 units of food or 40 units of clothing. Country B can produce 30 units of food or 30 units of clothing. Country A has:",
    options: [
      "Absolute advantage in both goods and comparative advantage in both goods",
      "Absolute advantage in both goods and comparative advantage in food",
      "Absolute advantage in food only and comparative advantage in clothing",
      "Absolute advantage in both goods and comparative advantage in clothing",
    ],
    correctIndex: 1,
    explanation:
      "Country A produces more of both goods (80 > 30 food, 40 > 30 clothing), so it has absolute advantage in both. For comparative advantage, compute opportunity costs: Country A's cost of 1 food = 40/80 = 0.5 clothing; Country B's cost of 1 food = 30/30 = 1 clothing. Since 0.5 < 1, Country A has the comparative advantage in food. Country B has the comparative advantage in clothing (1 food per clothing vs. 2 food per clothing for A). (A) is impossible; a country cannot have comparative advantage in both goods because comparative advantage is relative. (C) is wrong because Country A produces more clothing than Country B (40 > 30), so it has absolute advantage in clothing too. (D) reverses the comparative advantage; Country A's lower opportunity cost is in food, not clothing.",
  },
  {
    id: "bc-10",
    question:
      "An economy produces only two goods: tractors and wheat. Currently it produces 10 tractors and 200 tons of wheat. If it increases tractor production to 12, it must reduce wheat output to 150 tons. The opportunity cost of the 11th and 12th tractors combined is:",
    options: [
      "25 tons of wheat per tractor",
      "50 tons of wheat total",
      "150 tons of wheat total",
      "200 tons of wheat total",
    ],
    correctIndex: 1,
    explanation:
      "Moving from 10 to 12 tractors reduces wheat from 200 to 150 tons, a loss of 50 tons of wheat for 2 additional tractors. The combined opportunity cost of the 11th and 12th tractors is 50 tons of wheat. (A) 25 tons per tractor is the per-unit cost, not the combined cost that the question asks for. (C) 150 tons confuses the remaining wheat production with the wheat sacrificed; 150 is how much wheat is still produced, not how much was given up. (D) 200 tons is the original wheat production level, not the amount forgone.",
  },
  {
    id: "bc-11",
    question:
      "A country currently produces at a point inside its bowed-out PPC. Moving from 20 to 25 units of Good X reduces Good Y output from 80 to 78 units. Then moving from 25 to 30 units of Good X reduces Good Y from 78 to 70 units. This illustrates:",
    options: [
      "Constant opportunity costs",
      "Decreasing opportunity costs",
      "Increasing opportunity costs",
      "Economies of scale",
    ],
    correctIndex: 2,
    explanation:
      "The first 5 additional units of X cost only 2 units of Y (0.4 Y per X). The next 5 additional units of X cost 8 units of Y (1.6 Y per X). The opportunity cost per unit of X is rising as more X is produced, which is the definition of increasing opportunity costs. This is what creates the bowed-out shape of the PPC. (A) constant opportunity costs would mean each batch of 5 extra X units always costs the same amount of Y, which doesn't match the data. (B) decreasing opportunity costs would mean each additional unit of X becomes cheaper in terms of Y forgone, which is the opposite of what the numbers show. (D) economies of scale describe a long-run cost phenomenon for firms, not the tradeoff pattern on a PPC.",
  },
  {
    id: "bc-12",
    question:
      "Country M can produce 120 phones or 60 laptops. Country N can produce 80 phones or 80 laptops. If they specialize according to comparative advantage and trade 1 laptop for 1.5 phones, which statement is true?",
    options: [
      "Both countries are worse off because they lose production diversity",
      "Only Country N gains from trade because it gets cheap phones",
      "Both countries gain because each receives goods at a cost below their own opportunity cost",
      "Country M loses because it gives up 1.5 phones per laptop, which is less than its domestic cost",
    ],
    correctIndex: 2,
    explanation:
      "Country M's opportunity cost of 1 laptop is 2 phones (120/60). Country N's opportunity cost of 1 laptop is 1 phone (80/80). Country N has comparative advantage in laptops; Country M has comparative advantage in phones. A trade price of 1 laptop for 1.5 phones benefits both: Country M gets a laptop for 1.5 phones instead of its domestic cost of 2 phones (saving 0.5 phones), and Country N gets 1.5 phones for 1 laptop instead of its domestic cost of 1 phone per laptop (gaining 0.5 extra phones). (A) ignores the entire logic of gains from trade; specialization and trade allow both to consume beyond their PPCs. (B) is wrong because both countries gain, not just one. (D) miscalculates; Country M gives up 1.5 phones to get 1 laptop, which is cheaper than its domestic cost of 2 phones per laptop, so Country M benefits.",
  },
  {
    id: "bc-13",
    question:
      "Two workers produce only widgets and gadgets. Worker 1 can produce 10 widgets/hour or 5 gadgets/hour. Worker 2 can produce 4 widgets/hour or 4 gadgets/hour. After specialization based on comparative advantage, total output compared to each producing half-and-half would:",
    options: [
      "Stay the same because total resources haven't changed",
      "Increase because each worker focuses on their lower opportunity cost good",
      "Decrease because neither worker produces both goods anymore",
      "Increase only if Worker 1 produces both goods",
    ],
    correctIndex: 1,
    explanation:
      "Worker 1's opportunity cost of 1 widget = 0.5 gadgets; Worker 2's cost of 1 widget = 1 gadget. Worker 1 has comparative advantage in widgets; Worker 2 has comparative advantage in gadgets. If each splits time 50/50: Worker 1 makes 5 widgets + 2.5 gadgets; Worker 2 makes 2 widgets + 2 gadgets; total = 7 widgets + 4.5 gadgets. With full specialization: Worker 1 makes 10 widgets; Worker 2 makes 4 gadgets; total = 10 widgets + 4 gadgets. More widgets, slightly fewer gadgets, but the total combination lies outside what the half-and-half allocation can achieve. (A) is wrong because specialization reallocates resources more efficiently. (C) confuses specialization with waste; producing one good each is more efficient when done according to comparative advantage. (D) is wrong because having Worker 1 produce everything ignores the benefits of Worker 2 specializing in gadgets.",
  },
  {
    id: "bc-14",
    question:
      "A firm should hire an additional worker if and only if:",
    options: [
      "The worker's total output exceeds the total output of all previous workers",
      "The marginal revenue product of the worker exceeds the wage paid to that worker",
      "The firm's total revenue is positive",
      "The average product of labor is still increasing",
    ],
    correctIndex: 1,
    explanation:
      "Marginal analysis requires comparing the additional benefit to the additional cost. The marginal revenue product (MRP) measures the extra revenue the worker generates; the wage is the extra cost. Hire if MRP > wage, stop when MRP = wage. (A) confuses marginal with total; the relevant comparison is the extra output of this specific worker versus their cost, not their output versus all prior workers combined. (C) is far too broad; total revenue being positive says nothing about whether the next worker adds more revenue than they cost. (D) is wrong because a firm can profitably hire workers even after average product starts declining, as long as the marginal worker's revenue product still exceeds the wage.",
  },
  {
    id: "bc-15",
    question:
      "A government must choose between building a new highway ($500 million) and funding a school system upgrade ($500 million). If it chooses the highway, the opportunity cost is:",
    options: [
      "$500 million, the dollar cost of the highway",
      "The school system upgrade that was not funded",
      "The combined value of the highway and the school upgrade",
      "Zero, because the government can borrow to fund both projects",
    ],
    correctIndex: 1,
    explanation:
      "Opportunity cost is the value of the next-best alternative forgone. By choosing the highway, the government gives up the school system upgrade, and that is the opportunity cost. It is measured in terms of what was sacrificed, not in dollars spent. (A) confuses the accounting cost of the project with the opportunity cost; $500 million is what the highway costs in dollars, but opportunity cost asks what else those dollars could have bought. (C) double-counts by adding both options together; opportunity cost only includes the single best alternative not chosen. (D) is wrong because even with borrowing, the $500 million directed to the highway cannot simultaneously fund the school upgrade; scarcity of the budget still forces a tradeoff, and borrowing has its own opportunity cost in future repayment obligations.",
  },
];
