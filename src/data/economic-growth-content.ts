import type { PracticeQuestion } from "@/data/supply-demand-content";

export const economicGrowthContent = {
  title: "Economic Growth",
  subtitle:
    "What makes some countries rich and others poor, and why small differences in growth rates produce enormous gaps over time",
  sections: [
    {
      heading: "Why Some Countries Are Rich and Others Aren't",
      content: `The average American earns roughly 50 times more than the average person in the Democratic Republic of the Congo. A child born in Norway can expect to live past 80. In Sierra Leone, past 55.

The short answer to why these gaps exist is **economic growth**: sustained increases in real GDP per capita over time. Countries that grew consistently for decades (the U.S., Japan, South Korea, China) pulled away from those that stagnated (much of sub-Saharan Africa through the late 20th century).

South Korea and Ghana had nearly identical GDP per capita in 1960. By 2020, South Korea's was more than 20 times higher. Same starting point, radically different paths. South Korea invested heavily in education, built export-oriented industries, maintained stable institutions, and adopted foreign technology. Ghana struggled with political instability, underinvestment, and commodity dependence.

Growth is not an abstraction. It determines whether a society has modern hospitals or does not, whether most children finish school or drop out. Understanding its sources may be the most important question in all of economics.`,
    },
    {
      heading: "Physical Capital and Human Capital",
      content: `A farmer with a tractor produces ten times more food than one with a hand plow. That tractor is **physical capital**: the tools, machines, factories, infrastructure, and equipment workers use to produce goods and services. More capital per worker means more output per worker.

Capital alone is not sufficient, though. The farmer also needs to know how to operate the tractor, maintain it, and choose the right planting strategy for her soil. That knowledge is **human capital**: the skills, education, training, and health that make workers productive.

The two types accumulate differently. Physical capital can be built by redirecting resources toward investment. China invested close to 45% of its GDP for decades, constructing highways, factories, and entire cities at an unprecedented pace. Human capital grows through education and training. Countries with high literacy rates, strong university systems, and healthy populations consistently produce more per worker. The return on education is one of the most robust findings in the field: an extra year of schooling raises earnings by roughly 8-13% on average, across countries and time periods.

Both types of capital face **diminishing returns**. The first tractor on a farm is transformative. The tenth adds little. A country starting from almost nothing grows fast when it begins investing (China in the 1980s). A country already saturated with capital sees much smaller gains from additional investment (the U.S. today). This is why poor countries *can* grow faster than rich ones.`,
    },
    {
      heading: "Technology and Total Factor Productivity",
      content: `If growth depended only on accumulating more capital and labor, diminishing returns would eventually grind it to a halt. Yet rich countries have been growing for over a century. Something else keeps the engine running.

That something is **technology**, defined broadly as any advance in knowledge that produces more output from the same inputs. Better seed varieties, more efficient algorithms, smarter logistics, new drugs that keep workers healthy. Technology expands what is possible.

Economists measure this through **total factor productivity (TFP)**, the portion of output growth that cannot be explained by increases in labor or capital alone. If an economy added no new workers and no new machines but still produced 2% more, that 2% is TFP growth. It represents doing things smarter.

TFP is what separates rich countries from the rest over the very long run. The U.S. produces vastly more per worker than it did in 1900, and the explanation is not longer hours or proportionally more machines. It is the technology embedded in those machines and the knowledge carried by those workers.

Developing countries benefit from a crucial advantage: technology can be adopted, not just invented. South Korea did not pioneer the semiconductor. It imported the knowledge and built an industry around it. Technology diffusion from rich to poor countries is one of the most powerful channels for catch-up growth.`,
    },
    {
      heading: "The Rule of 70",
      content: `Small differences in growth rates barely register in any single year. Over decades, they become life-altering. The **Rule of 70** makes the math concrete.

**Doubling time = 70 / annual growth rate (%)**

At 1% growth, GDP doubles every 70 years. At 2%, every 35. At 7%, every 10. At 10%, every 7.

**Example:** Country A grows at 2% per year. Country B grows at 5%. Both start at $10,000 GDP per capita.

Country A doubling time: 70 / 2 = **35 years**
Country B doubling time: 70 / 5 = **14 years**

After 35 years, Country A has doubled once to $20,000. Country B has doubled roughly 2.5 times and sits near $56,000. Same starting point. Nearly three times richer in just over a generation.

Extend to 70 years and the gap becomes staggering: Country A reaches $40,000 while Country B surpasses $250,000.

China averaging 10% growth for three decades is what moved hundreds of millions out of poverty in a single generation. At that rate, the economy doubled every seven years. A 2% rate would have required 35 years for the same doubling. Compounding is relentless. Small differences in the growth rate produce enormous differences in the outcome.`,
    },
    {
      heading: "Policy Levers for Growth",
      content: `What can governments actually do to generate growth? Several policy levers have strong empirical backing, though debate around the details is fierce.

**Encourage investment.** Capital accumulation requires saving and investment. Lower corporate taxes, investment tax credits, and stable macroeconomic conditions all tend to boost capital formation. China's government channeled enormous resources into infrastructure. The U.S. offers accelerated depreciation to encourage equipment purchases.

**Invest in education and health.** Human capital is built through schools, universities, vocational training, and public health. South Korea spent heavily on education during its development phase and today has one of the world's most educated workforces. A workforce devastated by malaria or HIV cannot be productive, which partly explains growth difficulties across parts of sub-Saharan Africa.

**Support research and development.** Technology drives long-run growth, and R&D creates new technology. Most basic research has positive **spillover effects** that spread far beyond the firm funding it. Because private firms cannot capture the full social return, they underinvest relative to what is optimal. Government funding for basic science and patent protections help close that gap.

**Build strong institutions.** Property rights, rule of law, contract enforcement, low corruption, and political stability create the conditions where investment and innovation can take root. Without secure property rights, nobody builds a factory that could be seized. Without reliable courts, businesses cannot trust each other. Economists like Daron Acemoglu have argued institutions are the deepest driver of cross-country growth differences.

**Promote trade openness.** Access to larger markets, cheaper inputs, and foreign technologies accelerates growth. Japan, South Korea, Taiwan, Singapore, and China all relied heavily on export-led strategies. Trade lets countries specialize where they are most productive and import the rest.

No single policy is sufficient. Growth results from many reinforcing factors working over long periods. But the evidence consistently points to the same fundamentals: invest in people, maintain stable institutions, embrace technology, and trade with the world.`,
    },
  ],
};

export const economicGrowthQuestions: PracticeQuestion[] = [
  {
    id: "eg-1",
    question:
      "Using the Rule of 70, approximately how long will it take for a country's GDP to double if it grows at 3.5% per year?",
    options: ["10 years", "20 years", "35 years", "70 years"],
    correctIndex: 1,
    explanation:
      "The Rule of 70 says doubling time = 70 / growth rate. So 70 / 3.5 = 20 years. Option A (10 years) would require a 7% growth rate. Option C (35 years) would correspond to a 2% growth rate. Option D (70 years) would correspond to a 1% growth rate. This simple formula is a powerful tool for understanding the impact of growth rate differences over time.",
  },
  {
    id: "eg-2",
    question:
      "Which of the following best explains why capital accumulation alone cannot sustain long-run economic growth?",
    options: [
      "Capital is too expensive for most countries to acquire",
      "Capital experiences diminishing returns -- each additional unit adds less output",
      "Workers resist the introduction of new capital equipment",
      "Government regulations prevent excessive capital accumulation",
    ],
    correctIndex: 1,
    explanation:
      "Diminishing returns to capital means that each additional machine, factory, or piece of equipment adds progressively less to total output when other inputs (like technology and labor quality) remain constant. The first highway connecting two cities is transformative; the fifth parallel highway adds little. This is why technology and TFP growth are essential for sustaining long-run growth. Option A is wrong because many countries successfully accumulate capital -- the issue is the declining return, not the cost.",
  },
  {
    id: "eg-3",
    question:
      "Total factor productivity (TFP) growth represents:",
    options: [
      "The increase in output due to hiring more workers",
      "The increase in output due to building more factories",
      "The increase in output that cannot be explained by increases in labor or capital alone",
      "The growth rate of a country's population",
    ],
    correctIndex: 2,
    explanation:
      "TFP is the residual -- the portion of output growth left over after accounting for growth in labor and capital inputs. It captures technological progress, better management, improved organization, and any other efficiency gain. Options A and B describe growth from adding more inputs (labor and capital), which are explicitly what TFP excludes. Option D confuses population growth with productivity.",
  },
  {
    id: "eg-4",
    question:
      "South Korea and Ghana had similar GDP per capita in 1960, but by 2020 South Korea was over 20 times richer. Which factor best explains the divergence?",
    options: [
      "South Korea has more natural resources than Ghana",
      "Ghana has a larger population, diluting its GDP per capita",
      "South Korea invested heavily in education, stable institutions, and export-oriented industry",
      "Ghana's currency appreciated too much, making its exports uncompetitive",
    ],
    correctIndex: 2,
    explanation:
      "South Korea's growth was driven by massive investments in human capital (education), physical capital, strong institutional frameworks, and an export-led development strategy. Option A is actually backward -- South Korea has relatively few natural resources compared to many African nations. Option B is incorrect because population size alone does not determine GDP per capita trends -- growth rates do. The resource curse often means that natural resource wealth can actually hinder institutional development.",
  },
  {
    id: "eg-5",
    question:
      "Which of the following is the best example of human capital?",
    options: [
      "A new factory built by an auto manufacturer",
      "A computer installed at an office workstation",
      "An engineer's training and problem-solving skills",
      "A government bond held by a pension fund",
    ],
    correctIndex: 2,
    explanation:
      "Human capital refers to the knowledge, skills, training, and health that make workers productive. An engineer's training directly increases her ability to produce valuable output. Options A and B are examples of physical capital -- tangible tools and equipment. Option D is a financial asset, which is neither physical capital nor human capital in the economic growth sense.",
  },
  {
    id: "eg-6",
    question:
      "Economists argue that governments should fund basic scientific research because:",
    options: [
      "Private firms always produce too much research",
      "Research has positive spillover effects that private firms cannot fully capture, leading to underinvestment",
      "Only governments have the knowledge to direct research effectively",
      "Private research is always lower quality than government research",
    ],
    correctIndex: 1,
    explanation:
      "Basic research creates knowledge that benefits society broadly -- competitors, other industries, and future innovators all gain from it. Because the firm funding the research cannot capture all these external benefits, it earns less than the social return and therefore invests less than the socially optimal amount. This is a positive externality that justifies government intervention. Option A has it backward -- firms underinvest in research, they do not produce too much.",
  },
  {
    id: "eg-7",
    question:
      "In the AD/AS model, sustained economic growth is represented by:",
    options: [
      "A rightward shift in AD only",
      "A leftward shift in SRAS",
      "A rightward shift in LRAS (potential GDP increases)",
      "A movement along the LRAS curve",
    ],
    correctIndex: 2,
    explanation:
      "Sustained economic growth means the economy's productive capacity permanently increases -- more labor, capital, or technology. This shifts LRAS to the right, increasing potential GDP. Option A (AD shifting right) raises output only temporarily in the short run and mainly increases the price level in the long run. Option B (SRAS shifting left) reduces output, the opposite of growth. Option D is impossible -- you cannot move along a vertical line.",
  },
  {
    id: "eg-8",
    question:
      "Country X has a GDP per capita of $5,000 and grows at 7% per year. Country Y has a GDP per capita of $40,000 and grows at 1% per year. Using the Rule of 70, approximately when will Country X's GDP per capita double, and how does this compare to Country Y?",
    options: [
      "Country X doubles in 10 years; Country Y doubles in 70 years",
      "Country X doubles in 7 years; Country Y doubles in 70 years",
      "Country X doubles in 70 years; Country Y doubles in 10 years",
      "Both countries double at the same time because starting GDP does not matter",
    ],
    correctIndex: 0,
    explanation:
      "Rule of 70: doubling time = 70 / growth rate. Country X: 70 / 7 = 10 years. Country Y: 70 / 1 = 70 years. Country X's GDP per capita doubles from $5,000 to $10,000 in 10 years, while Country Y takes 70 years to go from $40,000 to $80,000. This illustrates why growth rate differences matter far more than initial wealth levels over time. Option B miscalculates Country X's doubling time — 70/7 = 10, not 7. Option C reverses the two countries entirely. Option D ignores the Rule of 70 altogether — starting GDP is irrelevant to doubling time, but the growth rate is everything.",
  },
  {
    id: "eg-9",
    question:
      "Which of the following best illustrates the concept of diminishing returns to physical capital?",
    options: [
      "A country with many factories grows faster than one with few factories",
      "Adding a second tractor to a one-tractor farm doubles output, but adding a tenth tractor to a nine-tractor farm barely increases output",
      "A country that invests in education grows faster than one that only builds factories",
      "Technological progress offsets the declining productivity of workers",
    ],
    correctIndex: 1,
    explanation:
      "Diminishing returns means each additional unit of capital (holding other inputs constant) adds progressively less to total output. The jump from 1 to 2 tractors is transformative; the jump from 9 to 10 is marginal because the bottleneck shifts to other inputs like labor and land. This is why capital-only strategies eventually hit a wall. Option A describes the level effect (more capital = more output) without capturing the diminishing marginal product of each additional unit. Option C is about the importance of human capital versus physical capital, which is a valid growth insight but does not illustrate diminishing returns specifically. Option D describes how technology combats diminishing returns rather than illustrating the concept itself.",
  },
  {
    id: "eg-10",
    question:
      "A country invests in universal primary education, raises vaccination rates, and builds a national broadband network. These policies primarily increase growth through:",
    options: [
      "Increasing the physical capital stock",
      "Increasing human capital and improving the health and connectivity of the workforce",
      "Reducing the money supply to control inflation",
      "Depreciating the currency to boost exports",
    ],
    correctIndex: 1,
    explanation:
      "Education builds skills, vaccination improves worker health and productivity, and broadband connectivity enables knowledge sharing and remote work — all three enhance human capital, which is the knowledge, skills, and health embodied in workers. A healthier, more educated, better-connected workforce produces more output per hour. Option A is wrong because none of these are physical capital investments like factories or machinery — they invest in people, not things. Option C describes monetary policy, which has nothing to do with education or health infrastructure. Option D describes exchange rate strategy, which is completely unrelated to these domestic development policies.",
  },
  {
    id: "eg-11",
    question:
      "An improvement in agricultural technology that allows farmers to produce more food with the same land and labor is best represented on a production possibilities curve (PPC) as:",
    options: [
      "A movement from a point inside the PPC to a point on the PPC",
      "An outward shift of the PPC along the food axis (and possibly both axes)",
      "An inward shift of the PPC",
      "A movement along the existing PPC from more food to less food",
    ],
    correctIndex: 1,
    explanation:
      "Technological improvement in agriculture expands the economy's productive capacity for food. The PPC shifts outward along the food axis, indicating that more food can now be produced at every level of the other good. If the technology has spillover effects (like freeing labor for manufacturing), both axes may expand. Option A describes an economy moving from inefficiency to efficiency, not an expansion of capacity — the PPC itself does not change. Option C represents a loss of productive capacity (like a natural disaster), the opposite of technological progress. Option D describes a tradeoff along the existing frontier, which represents reallocation, not growth.",
  },
  {
    id: "eg-12",
    question:
      "The convergence hypothesis predicts that:",
    options: [
      "All countries will eventually reach the same GDP per capita regardless of their policies",
      "Poor countries with access to existing technology and sound institutions should grow faster than rich countries, narrowing the income gap over time",
      "Rich countries will always grow faster than poor countries due to their technological advantage",
      "Growth rates are entirely random and unrelated to initial income levels",
    ],
    correctIndex: 1,
    explanation:
      "The convergence (or catch-up) hypothesis holds that poor countries can grow faster than rich ones because they can adopt existing technologies rather than inventing them, and because diminishing returns to capital mean that each unit of new investment has a larger marginal impact in capital-scarce countries. However, convergence is conditional — it requires sound institutions, openness to trade, and investment in human capital. South Korea converged toward rich-country income levels; many others did not. Option A overstates the claim — convergence is conditional on good policies, not automatic for all countries. Option C describes divergence, which contradicts the hypothesis entirely. Option D ignores the strong empirical pattern linking initial poverty to faster growth rates among countries with sound institutions.",
  },
  {
    id: "eg-13",
    question:
      "Country A lacks secure property rights, has widespread corruption, and suffers from frequent political coups. According to institutional theories of growth, these factors will most likely:",
    options: [
      "Have no effect on long-run growth because institutions are separate from economics",
      "Boost growth because firms must innovate to navigate bureaucratic obstacles",
      "Severely hinder growth by discouraging investment, innovation, and long-term planning",
      "Only affect short-run growth but have no impact on the long-run trend",
    ],
    correctIndex: 2,
    explanation:
      "Institutional economists like Acemoglu argue that property rights, rule of law, and political stability are the deepest drivers of growth differences across countries. Without secure property rights, no one builds a factory that could be seized. Without reliable courts, contracts are meaningless. Without political stability, firms cannot plan beyond the next election or coup. These institutional failures discourage both domestic and foreign investment, suppress innovation, and trap countries in poverty. Option A ignores decades of research showing institutions are central to economic outcomes. Option B romanticizes corruption — navigating obstacles wastes resources rather than spurring productive innovation. Option D understates the damage — institutional failures compound over decades and permanently lower the growth trajectory.",
  },
  {
    id: "eg-14",
    question:
      "Which of the following best explains why technology is considered the primary driver of long-run economic growth in advanced economies?",
    options: [
      "Technology is the cheapest factor of production to acquire",
      "Unlike labor and capital, technology is not subject to diminishing returns and can continuously expand what is possible with existing inputs",
      "Advanced economies cannot accumulate more physical capital",
      "Technology eliminates the need for both human and physical capital",
    ],
    correctIndex: 1,
    explanation:
      "Both labor and capital face diminishing returns — each additional unit contributes less to output when other inputs are held constant. Technology breaks this constraint by enabling the same inputs to produce more output. A better algorithm, a more efficient engine, or a new drug does not simply add another unit of input; it raises the productivity of all existing units. This is why TFP growth is the only sustainable engine for rich countries that are already capital-saturated. Option A is irrelevant — the cost of technology has nothing to do with why it drives growth. Option C is wrong because advanced economies can and do accumulate more capital; the issue is that additional capital yields less and less. Option D overstates the case — technology complements human and physical capital rather than replacing them.",
  },
];
