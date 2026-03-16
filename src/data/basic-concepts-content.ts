import { PracticeQuestion } from "@/data/supply-demand-content";

export const basicConceptsContent = {
  title: "Basic Economic Concepts",
  subtitle:
    "How scarcity shaped civilizations, why opportunity cost governs every decision, and the 200-year-old logic behind international trade",
  sections: [
    {
      heading: "Scarcity and Choice",
      content: `Long before Adam Smith published *The Wealth of Nations* in 1776, every human society confronted the same constraint: there is never enough to go around. Ancient Mesopotamian kings rationed grain. Medieval European monarchs fought wars over farmland. The problem has a name in economics — **scarcity** — and it has not changed in five thousand years of recorded history.

**Scarcity** is not poverty. When John D. Rockefeller controlled 90% of American oil refining in the 1890s, he still faced scarcity of time, attention, and political goodwill. The United States federal budget for fiscal year 2024 exceeded $6.1 trillion, yet Congress still argued over every allocation because the demands on that budget far outstripped the revenue. Every dollar routed to defense was a dollar unavailable for infrastructure.

Because resources are finite, every choice forces a **tradeoff**. Pick one path, and another closes. Land, labor, capital, entrepreneurship — the four factors of production all have ceilings. Economics, at its core, is the study of how individuals, firms, and governments allocate what is limited among competing wants. That foundational reality has driven the discipline since the Physiocrats first tried to map it in 1750s France.`,
    },
    {
      heading: "Opportunity Cost",
      content: `In 1914, Henry Ford doubled his workers' wages to $5 per day. The newspapers called it madness. Ford understood something his critics did not: every skilled mechanic who left his factory for a competitor represented lost output worth far more than the wage increase. He was calculating **opportunity cost** — the value of the next-best alternative forgone.

The concept applies at every scale. A high school graduate in 2024 choosing between attending a four-year university and earning $35,000 annually at full-time work gives up more than tuition and textbooks. The four years of lost paychecks are part of the true cost. That forgone income is the **opportunity cost** of college.

One persistent error deserves attention through a wrong-answer example: if that same graduate also turns down a $20,000-per-year job, the opportunity cost is $35,000 — the single best alternative — not $55,000. Opportunity cost never stacks multiple forgone options together.

When Congress allocated roughly $886 billion to defense in fiscal year 2024, the **opportunity cost** was whatever else that money could have funded — healthcare expansion, bridge repair, broadband access. When a startup burns its seed round hiring engineers, the opportunity cost is the marketing campaign it can no longer afford. Every resource aimed in one direction is pulled from another.`,
    },
    {
      heading: "The Production Possibilities Curve",
      content: `During World War II, the United States government ordered automobile factories to stop making cars and start making tanks. By 1943, not a single new civilian car rolled off a Detroit assembly line. The entire productive capacity of the nation had shifted toward military output. That wartime reallocation is, in essence, a movement along a **production possibilities curve** (PPC).

The PPC plots all possible combinations of two goods an economy can produce when it uses every resource at full capacity. Points **on the curve** represent efficiency — every factory running, every worker employed. Points **inside the curve** signal waste: idle plants, unemployed labor, misallocated resources. During the Great Depression of the 1930s, the U.S. economy sat deep inside its PPC, with unemployment exceeding 25%. Points **outside the curve** are unattainable given current resources and technology.

The curve bows outward rather than forming a straight line because of **increasing opportunity costs**. When the Roosevelt administration first shifted workers from consumer goods to munitions in 1941, it pulled from industries only loosely related to warfare. Minimal consumer output was lost. By 1944, even dairy farmers and schoolteachers were being drafted into war production, and each additional tank cost an ever-larger sacrifice of civilian goods. Resources are not perfectly interchangeable, so the tradeoff steepens as production pushes toward either extreme.`,
    },
    {
      heading: "Opportunity Cost on the PPC",
      content: `Reading opportunity cost off a PPC comes down to reading the **slope**. At any point on the curve, the slope reveals how many units of the vertical-axis good must be sacrificed to produce one more unit of the horizontal-axis good.

Slide rightward along the PPC, producing more of Good X, and the curve grows steeper. That steepening is the graphical signature of rising opportunity cost. The 10th unit of X might cost 1 unit of Y. The 50th unit might cost 4 units of Y. Same good, wildly different sacrifice — because each successive reallocation pulls in resources less suited to X production.

A critical distinction surfaces during recessions. If the economy sits inside the curve — as it did in April 2020 when U.S. unemployment hit 14.7% — it can increase production of both goods simultaneously by putting idle resources to work. No tradeoff required. Once the economy reaches the curve, every additional unit of X means less Y. No free lunch on the efficient frontier.

A straight-line PPC means **constant opportunity costs**: every additional unit of X always costs the same amount of Y. That only holds when resources are perfectly interchangeable between two goods — a condition that almost never exists in the real world.`,
    },
    {
      heading: "Comparative Advantage",
      content: `In 1817, David Ricardo published *On the Principles of Political Economy and Taxation* and introduced an idea that still underpins global trade two centuries later: **comparative advantage**. Ricardo used England and Portugal as his example, showing that even when Portugal could produce both wine and cloth more cheaply, both nations benefited from specializing and trading.

Forget who produces more in absolute terms. What matters is opportunity cost. A country holds a comparative advantage in a good when it can produce that good at a lower opportunity cost than its trading partner. The United States could manufacture T-shirts — but every hour an American worker spends sewing cotton in 2024 is an hour not spent writing code or assembling semiconductors. Bangladesh gives up far less when it produces textiles.

**Absolute advantage** means one party produces more output from the same inputs. The U.S. has an absolute advantage over Bangladesh in practically every sector. That fact, by itself, says nothing about who should specialize in what.

A concrete case drawn from simplified numbers: the U.S. can produce 100 units of software or 50 units of clothing. Bangladesh can produce 10 units of software or 30 units of clothing. The U.S. sacrifices 0.5 clothing per software unit; Bangladesh sacrifices 3 clothing per software unit. The U.S. holds the **comparative advantage** in software. Bangladesh sacrifices only 0.33 software per clothing unit versus 2 for the U.S., so Bangladesh holds the comparative advantage in clothing despite lower productivity across the board.

Each side specializes where its opportunity cost is lowest, then trades. Both end up consuming beyond what either could produce alone — a result Ricardo demonstrated over two hundred years ago that remains one of the most counterintuitive and important findings in all of economics.`,
    },
    {
      heading: "Shifting the PPC",
      content: `The PPC shifts whenever an economy's productive capacity changes. The history of the 20th century is largely a story of these shifts.

An **outward shift** means the economy can produce more of both goods. That is economic growth. The postwar United States experienced a massive outward shift between 1945 and 1970, driven by the GI Bill (which sent millions of veterans to college), the Interstate Highway Act of 1956 (which slashed transportation costs), the baby boom (which expanded the labor force), and a wave of technological advances from wartime R&D. Immigration, discovery of new resources like the Permian Basin oil fields, and investments in factory capacity all push the frontier outward.

An **inward shift** means productive capacity has shrunk. The Black Death of 1347-1351 killed roughly a third of Europe's population and collapsed the continent's economic output. In the modern era, a natural disaster destroying infrastructure, a brain drain of skilled emigrants, or resource depletion from overfishing and deforestation can pull the curve inward.

Shifts need not be uniform. A breakthrough in agricultural biotechnology — like the Green Revolution of the 1960s that dramatically boosted crop yields in India and Mexico — might push the food-axis endpoint outward while leaving industrial output unchanged. In that case the PPC **pivots** rather than shifting evenly.

A point outside last year's curve becomes reachable after an outward shift. Economic growth is the frontier moving outward over time. What was impossible yesterday becomes achievable today.`,
    },
    {
      heading: "Worked Example",
      content: `Country A can produce 100 widgets or 50 gadgets. Country B can produce 60 widgets or 40 gadgets. The question: who should specialize in what?

**Find each country's opportunity cost of widgets.**

Country A: 50 gadgets / 100 widgets = **0.5 gadgets per widget**.
Country B: 40 gadgets / 60 widgets = **0.67 gadgets per widget**.

**Compare.** Country A gives up less (0.5 < 0.67), so **Country A has the comparative advantage in widgets**.

**Now do gadgets.**

Country A: 100 widgets / 50 gadgets = **2 widgets per gadget**.
Country B: 60 widgets / 40 gadgets = **1.5 widgets per gadget**.

**Compare.** Country B gives up less (1.5 < 2), so **Country B has the comparative advantage in gadgets**.

Country A produces more of both goods in absolute terms. That does not determine specialization. Ricardo's insight from 1817 holds: comparative advantage is about who sacrifices less, not who produces more.

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
      "Scarcity — limited resources set against unlimited wants — is the foundational reason economics exists as a discipline. Every allocation decision involves a tradeoff because of it. Option A conflates scarcity with poverty; even Rockefeller in the 1890s faced scarcity of time and political capital. Option C identifies a distribution problem, and Option D identifies market failure — both real, but neither is THE fundamental economic problem that drives the entire field.",
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
      "The concert ($20) beats the shift ($12), making it the next-best alternative. Opportunity cost = $20. Option C adds both forgone options together — a classic error on AP exams, since opportunity cost only counts the single best alternative not taken. Option A picks the inferior alternative. Option D is wishful thinking; studying absolutely carries an opportunity cost.",
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
      "Inside the curve means reachable but wasteful — think of the U.S. economy during the Great Depression, when a quarter of the workforce sat idle. The country could have produced more of both goods simply by employing those workers. Option A describes points ON the curve. Option B describes points OUTSIDE the curve. Option D confuses a location on the graph with a shift of the graph itself.",
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
      "Resources are specialized. Farmland makes a poor factory floor, and machinists make poor farmers. As production of one good expands, the economy must pull in resources increasingly ill-suited to making it — each additional unit costs more of the other good. That increasing opportunity cost creates the bowed-out shape. Option A would produce a straight line. Option B would produce an inward-bowing curve, which is not the standard shape. Option D describes a firm-level cost phenomenon unrelated to the PPC's geometry.",
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
      "Country X gives up 2 tons of rice per ton of cloth (200/100). Country Y gives up 1 ton of rice per ton of cloth (150/150). Since 1 < 2, Country Y sacrifices less rice and holds the comparative advantage in cloth. Option A confuses absolute advantage in rice with comparative advantage in cloth — two entirely different concepts, as Ricardo showed in 1817. Option C makes the same error using total output. Option D is arithmetically wrong.",
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
      "New technology raises the ceiling on what the economy can produce, pushing the entire frontier outward — the way transistor technology expanded American productive capacity in the 1950s and 1960s. Option A is the trap: cutting unemployment moves the economy from a point inside the PPC toward the existing curve, but the curve itself stays put. The PPC represents maximum potential, and reducing unemployment means approaching that potential, not raising it. Option B changes the production mix (movement along the curve). Option D restates Option A in different words.",
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
      "Specialization based on comparative advantage raises total world output. Both countries trade and end up consuming combinations beyond their own individual PPCs — something neither could reach alone. This was the core of Ricardo's 1817 argument, and it holds up two centuries later. Option A gets it half right but misses that the more productive country also gains. Option C is a widespread misconception; even a country better at everything still benefits. Option D is the opposite of what happens.",
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
      "Straight line means constant slope, meaning the tradeoff ratio never changes. Produce the 1st unit of X or the 100th, and you surrender the same amount of Y each time. That scenario only arises when every resource is equally suited to producing both goods. Option A describes a bowed-out (concave) PPC. Option B would produce an inward-bowing curve. Option D is nonsensical — the slope itself IS the opportunity cost, and it exists at every point.",
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
      "Country A produces more of both goods (80 > 30 food, 40 > 30 clothing), so it holds absolute advantage in both. For comparative advantage: Country A's cost of 1 food = 40/80 = 0.5 clothing; Country B's cost of 1 food = 30/30 = 1 clothing. Since 0.5 < 1, Country A has comparative advantage in food. Country B has comparative advantage in clothing (1 food per clothing vs. 2 for A). Option A is impossible — no country can hold comparative advantage in both goods, since comparative advantage is inherently relative. Option C is wrong because Country A's clothing output (40) exceeds Country B's (30). Option D reverses the comparative advantage calculation.",
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
      "Wheat drops from 200 to 150 tons when tractor production rises from 10 to 12. That is a loss of 50 tons for 2 additional tractors — 50 tons combined. Option A gives the per-unit cost (25 tons each), not the combined figure the question asks for. Option C confuses the remaining wheat output with the wheat sacrificed. Option D uses the original wheat level rather than the amount forgone.",
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
      "The first 5 additional units of X cost only 2 units of Y (0.4 Y per X). The next 5 cost 8 units of Y (1.6 Y per X). The per-unit sacrifice is rising — the definition of increasing opportunity costs, and the reason the PPC bows outward. Option A would require each batch of 5 extra X units to always cost the same amount of Y. Option B would mean each unit of X gets cheaper in terms of Y forgone, which is the opposite of the numbers shown. Option D describes a firm-level cost phenomenon, not a PPC tradeoff pattern.",
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
      "Country M's domestic cost of 1 laptop is 2 phones (120/60). Country N's is 1 phone (80/80). Country N has comparative advantage in laptops; Country M in phones. At a trade price of 1.5 phones per laptop, Country M obtains a laptop for 1.5 phones instead of 2 (saving 0.5), and Country N receives 1.5 phones for a laptop that domestically cost only 1 phone (gaining 0.5 extra). Both benefit. Option A ignores two centuries of gains-from-trade logic. Option B is half right — both gain, not just one. Option D miscalculates; 1.5 is less than M's domestic cost of 2, so M comes out ahead.",
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
      "Worker 1's opportunity cost of 1 widget = 0.5 gadgets; Worker 2's = 1 gadget. Worker 1 has comparative advantage in widgets; Worker 2 in gadgets. Half-and-half yields 5 widgets + 2.5 gadgets from Worker 1 and 2 widgets + 2 gadgets from Worker 2, totaling 7 widgets + 4.5 gadgets. Full specialization yields 10 widgets from Worker 1 and 4 gadgets from Worker 2. The specialized combination lies beyond what half-and-half achieves. Option A is wrong because specialization reallocates the same resources more efficiently. Option C confuses concentration with waste. Option D ignores the benefit of Worker 2 specializing in gadgets.",
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
      "Marginal analysis — comparing the additional benefit to the additional cost — is the decision rule. The marginal revenue product (MRP) measures the extra revenue the worker generates; the wage is the extra cost. Hire when MRP > wage, stop when MRP = wage. Option A confuses marginal with total output. Option C is too broad; positive total revenue says nothing about whether the next hire adds more revenue than cost. Option D is wrong because a firm can profitably hire beyond the point where average product peaks, so long as MRP still exceeds the wage.",
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
      "Opportunity cost is measured in terms of what was sacrificed, not in dollars spent. By choosing the highway, the government forgoes the school system upgrade — and that forgone alternative is the opportunity cost. Option A confuses accounting cost with opportunity cost. Option C double-counts by adding both options. Option D is wrong because even borrowed funds carry opportunity costs: the $500 million directed to the highway cannot simultaneously fund the schools, and borrowing itself creates future repayment obligations.",
  },
];
