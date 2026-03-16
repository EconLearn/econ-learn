import type { PracticeQuestion } from "@/data/supply-demand-content";

export const economicGrowthContent = {
  title: "Economic Growth",
  subtitle:
    "From the Industrial Revolution to the Asian Tigers — how physical capital, human capital, and technology turned some nations rich while others stagnated",
  sections: [
    {
      heading: "Why Some Countries Are Rich and Others Aren't",
      content: `In 1820, the richest countries in the world were perhaps three times wealthier per person than the poorest. By 2020, that gap had widened to more than 100-to-1. The average American earns roughly 50 times more than the average person in the Democratic Republic of the Congo. A child born in Norway can expect to live past 80. In Sierra Leone, past 55.

The short answer to why these gaps exist is **economic growth** — sustained increases in real GDP per capita over time. Countries that grew consistently for decades pulled away from those that stagnated. The divergence accelerated after 1800, when the Industrial Revolution in Britain set off a wave of capital accumulation and technological change that eventually spread to Western Europe, North America, and parts of East Asia.

South Korea and Ghana had nearly identical GDP per capita in 1960 — roughly $1,100 each in today's dollars. By 2020, South Korea's was more than 20 times higher. Same starting point. Radically different trajectories. South Korea invested heavily in education, built export-oriented industries under Park Chung-hee's government in the 1960s, maintained stable institutions, and aggressively adopted foreign technology. Ghana struggled through a series of military coups, underinvestment, and commodity dependence for much of the same period.

Growth determines whether a society has modern hospitals or does not, whether most children finish school or drop out to work. Understanding its sources may be the most consequential question in all of economics.`,
    },
    {
      heading: "Physical Capital and Human Capital",
      content: `A farmer with a John Deere tractor produces ten times more food than one with a hand plow. That tractor is **physical capital** — the tools, machines, factories, infrastructure, and equipment workers use to produce goods and services. More capital per worker means more output per worker. The logic is ancient, but it scaled dramatically during the Industrial Revolution, when steam engines and mechanized looms multiplied British textile output by orders of magnitude between 1780 and 1830.

Capital alone was never enough. The farmer also needs to know how to operate and maintain the tractor, read soil reports, and choose planting strategies. That knowledge is **human capital** — the skills, education, training, and health that make workers productive.

The two types accumulate through different channels. Physical capital grows when societies redirect resources toward investment. China invested close to 45% of its GDP for decades after Deng Xiaoping's reforms began in 1978, constructing highways, factories, and entire cities at a pace with no historical precedent. Human capital grows through education and training. Countries with high literacy rates, strong university systems, and healthy populations consistently produce more per worker. The return on education is among the most robust findings in empirical economics: an extra year of schooling raises individual earnings by roughly 8-13% on average, across countries and time periods.

Both types of capital face **diminishing returns**. The first tractor on a farm is transformative. The tenth adds almost nothing. A country starting from very low capital stock — China in the 1980s, Japan in the 1950s — grows rapidly when it begins investing. A country already saturated with capital sees much smaller gains from additional investment. The United States today adds factories and equipment every year, but each marginal unit contributes less to overall output than the last. This pattern is why poor countries *can* grow faster than rich ones, a phenomenon economists call catch-up growth.`,
    },
    {
      heading: "Technology and Total Factor Productivity",
      content: `If growth depended only on piling up more capital and labor, diminishing returns would eventually grind it to a halt. Yet Britain has been growing since the 1780s. The United States has grown for over two centuries. Something else sustains the engine.

That something is **technology**, defined broadly as any advance in knowledge that produces more output from the same inputs. Better seed varieties developed by Norman Borlaug's Green Revolution in the 1960s. More efficient algorithms powering Google's search engine. Smarter logistics at Amazon's fulfillment centers. New drugs that keep workers healthy and productive. Technology expands the frontier of what is possible.

Economists measure this residual through **total factor productivity (TFP)** — the portion of output growth that cannot be explained by increases in labor or capital alone. Robert Solow formalized this concept in 1956, and it earned him the Nobel Prize in 1987. If an economy added no new workers and no new machines but still produced 2% more output, that 2% is TFP growth. It represents doing things smarter, not just doing more.

TFP is what separates rich countries from the rest over the very long run. The U.S. produces vastly more per worker than it did in 1900, and the explanation is not longer hours or proportionally more machines. It is the technology embedded in those machines and the knowledge carried by those workers.

Developing countries benefit from a powerful advantage: technology can be adopted, not just invented. South Korea did not pioneer the semiconductor. It imported the knowledge — often through licensing deals and reverse engineering in the 1970s and 1980s — and built an industry around it. Samsung shipped its first memory chip in 1983. Technology diffusion from rich to poor countries is one of the most potent channels for catch-up growth.`,
    },
    {
      heading: "The Rule of 70",
      content: `Small differences in growth rates barely register in any single year. Over decades, they become life-altering. The **Rule of 70** makes the compounding arithmetic concrete.

**Doubling time = 70 / annual growth rate (%)**

At 1% growth, GDP doubles every 70 years. At 2%, every 35. At 7%, every 10. At 10%, every 7.

**Example:** Country A grows at 2% per year. Country B grows at 5%. Both start at $10,000 GDP per capita.

Country A doubling time: 70 / 2 = **35 years**
Country B doubling time: 70 / 5 = **14 years**

After 35 years, Country A has doubled once to $20,000. Country B has doubled roughly 2.5 times and sits near $56,000. Same starting line. Nearly three times richer in a single generation.

Extend to 70 years and the gap becomes staggering. Country A reaches $40,000. Country B surpasses $250,000.

China averaging 10% growth from 1980 to 2010 is what moved hundreds of millions out of poverty in barely one generation. At that rate, the economy doubled every seven years. A 2% rate would have required 35 years for the same doubling. Compounding is relentless. Three percentage points of difference in the annual growth rate, sustained over decades, produces an entirely different civilization.`,
    },
    {
      heading: "Policy Levers for Growth",
      content: `The question of what governments can actually do to generate growth has preoccupied economists since at least the Physiocrats in 18th-century France. Several policy levers have strong empirical backing, though fierce debate surrounds the details.

**Encourage investment.** Capital accumulation requires saving and investment. The U.S. Investment Tax Credit, first introduced under Kennedy in 1962, offered firms a direct tax reduction for purchasing equipment. China's government channeled enormous state resources into infrastructure for decades. Lower corporate taxes, investment incentives, and stable macroeconomic conditions all tend to boost capital formation.

**Invest in education and health.** Human capital is built through schools, universities, vocational programs, and public health systems. South Korea spent heavily on education during its industrialization phase — by the 1990s it had one of the world's highest rates of university enrollment. On the other side, a workforce devastated by malaria or HIV cannot be productive, which partly explains growth difficulties across parts of sub-Saharan Africa during the 1980s and 1990s.

**Support research and development.** Technology drives long-run growth, and R&D creates new technology. Most basic research generates positive **spillover effects** that spread far beyond the firm funding it — the internet itself grew out of DARPA-funded research in the 1960s. Because private firms cannot capture the full social return, they underinvest relative to the optimum. Government funding for basic science, patent protections (codified in the U.S. since the Patent Act of 1790), and R&D tax credits help close that gap.

**Build strong institutions.** Property rights, rule of law, contract enforcement, low corruption, and political stability create conditions where investment and innovation can take root. Without secure property rights, nobody builds a factory that could be seized. Without reliable courts, businesses cannot trust contracts. Economists like Daron Acemoglu (who won the Nobel Prize in 2024 for this work) have argued that institutions are the deepest driver of cross-country income differences.

**Promote trade openness.** Access to larger markets, cheaper inputs, and foreign technologies accelerates growth. Japan after 1868, South Korea after 1961, Taiwan, Singapore, and China after 1978 all relied heavily on export-led strategies. Trade lets countries specialize where they are most productive and import the rest — Ricardo's comparative advantage logic applied at national scale.

No single policy is sufficient. Growth results from many reinforcing factors working over long periods. But the evidence from the last two centuries points consistently toward the same fundamentals: invest in people, maintain stable institutions, embrace technology, and trade with the world.`,
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
      "Doubling time = 70 / 3.5 = 20 years. Option A would require 7% growth. Option C corresponds to 2%. Option D corresponds to 1%.",
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
      "Diminishing returns to capital mean each additional machine or factory adds progressively less to total output when other inputs remain constant. The first interstate highway connecting two cities is transformative; the fifth parallel route adds almost nothing. Robert Solow demonstrated in 1956 that without technological progress, capital accumulation alone leads to a growth slowdown. Option A is wrong because the issue is declining returns, not acquisition cost — many countries successfully accumulate capital.",
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
      "TFP is the residual — output growth left over after accounting for labor and capital inputs. It captures technological progress, better management, and efficiency gains. Solow called it the \"measure of our ignorance\" because it encompasses everything beyond raw input accumulation. Options A and B describe input-driven growth, which is precisely what TFP excludes. Option D confuses population growth with productivity.",
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
      "South Korea's transformation was driven by massive investments in human capital, physical capital, strong institutional frameworks, and an export-led strategy that Park Chung-hee's government initiated in the 1960s. Option A is actually backwards — South Korea has relatively few natural resources. Option B is incorrect because population size alone does not determine per-capita trends; growth rates do. The resource curse literature suggests natural wealth can even hinder institutional development.",
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
      "Human capital is the knowledge, skills, training, and health embodied in workers. An engineer's training directly increases productive output. Options A and B are physical capital. Option D is a financial asset — neither physical nor human capital in the growth accounting sense.",
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
      "Basic research generates knowledge that benefits society broadly — the internet itself originated from DARPA-funded university research in the late 1960s. Because the funding firm cannot capture all external benefits, private R&D investment falls short of the social optimum. This positive externality justifies government intervention. Option A has it exactly backward: firms underinvest, they do not overproduce.",
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
      "Sustained growth means the economy's productive capacity permanently expands — more labor, capital, or technology shifts LRAS rightward. Option A raises output only temporarily in the short run and primarily increases the price level long-term. Option B reduces output. Option D is geometrically impossible — you cannot move along a vertical line.",
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
      "Rule of 70: Country X doubles in 70/7 = 10 years ($5,000 to $10,000). Country Y doubles in 70/1 = 70 years ($40,000 to $80,000). This is the arithmetic that makes catch-up growth possible — China's rapid doubling times after 1978 are a real-world example. Option B miscalculates 70/7 as 7 instead of 10. Option C reverses the two countries. Option D ignores the Rule of 70 entirely; starting GDP is irrelevant to doubling time, but the growth rate is everything.",
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
      "The jump from 1 to 2 tractors is transformative; the jump from 9 to 10 is marginal, because the bottleneck shifts to other inputs like labor and land. This is diminishing marginal product of capital, holding other inputs constant. Option A describes the level effect without capturing the declining marginal contribution. Option C is about human vs. physical capital — a valid growth insight, but not an illustration of diminishing returns specifically. Option D describes how technology combats diminishing returns rather than illustrating the concept.",
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
      "Education builds skills, vaccination improves health and productivity, and broadband enables knowledge sharing. All three enhance human capital. South Korea's investment in universal education during the 1960s-1980s is a textbook example of this strategy producing sustained growth. Option A is wrong because these are investments in people, not physical assets like factories. Options C and D describe monetary and exchange rate policies completely unrelated to education or health infrastructure.",
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
      "Agricultural technology — like the hybrid wheat varieties Norman Borlaug developed in the 1960s — expands productive capacity for food. The PPC shifts outward along the food axis. If the technology frees labor for manufacturing, both axes may expand. Option A describes moving from inefficiency to efficiency without changing the frontier. Option C represents capacity loss, the opposite of progress. Option D is reallocation along the existing frontier, not growth.",
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
      "The convergence hypothesis holds that poor countries can grow faster because they adopt existing technologies rather than inventing them, and because diminishing returns to capital mean each new unit of investment has larger impact in capital-scarce economies. Crucially, convergence is conditional — it requires sound institutions, openness to trade, and human capital investment. South Korea converged; many Sub-Saharan African nations did not. Option A overstates the claim by ignoring the conditional nature. Option C describes divergence. Option D ignores strong empirical patterns.",
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
      "Acemoglu and Robinson's research — recognized with the 2024 Nobel Prize — demonstrates that property rights, rule of law, and political stability are the deepest drivers of income differences across nations. Without secure property, no one builds a factory that could be confiscated. Without reliable courts, contracts are unenforceable. These institutional failures compound over decades, trapping countries in poverty. Option A ignores half a century of research. Option B romanticizes corruption. Option D understates the damage; institutional failures permanently lower the growth trajectory.",
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
      "Labor and capital both face diminishing returns — each additional unit contributes less when other inputs are held constant. Technology breaks that constraint by enabling existing inputs to produce more. A more efficient engine, a better algorithm, a new pharmaceutical does not simply add another unit of input; it raises the productivity of every existing unit. Solow showed in 1956 that TFP growth is the only sustainable engine for capital-saturated economies. Option A is irrelevant to why technology drives growth. Option C is wrong; advanced economies do accumulate more capital, but each unit yields less. Option D overstates the case — technology complements capital and labor rather than replacing them.",
  },
];
