import type { PracticeQuestion } from "@/data/supply-demand-content";

export const marketFailureContent = {
  title: "Market Failure",
  subtitle:
    "When free markets overshoot, undershoot, or just plain get it wrong",
  sections: [
    {
      heading: "When Markets Get It Wrong",
      content: `A factory dumps toxic waste into a river to cut costs. The product is cheap, consumers are happy, the firm is profitable. By every market signal, this looks like success. But families downstream are drinking poisoned water. The market "worked" and still got it wrong.

**Market failure** occurs when free markets, left to their own devices, produce an outcome that isn't socially optimal. Resources get misallocated: too much of some things, too little of others. Society's total well-being is lower than it could be.

There are four primary sources:
- **Externalities** -- costs or benefits that fall on people outside the transaction
- **Public goods** -- goods the market won't provide in sufficient quantity
- **Information asymmetry** -- one side of a transaction knows more than the other
- **Market power** -- a single firm (or a handful) controls the market

Each one breaks a key assumption of the perfectly competitive model. When those assumptions fail, the invisible hand fumbles. Equilibrium price and quantity no longer maximize society's welfare.`,
    },
    {
      heading: "Externalities: Costs and Benefits That Spill Over",
      content: `A steel mill belches sulfur dioxide into the air. The owners bear the cost of coal, labor, and machinery, but not the cost of the asthma cases, corroded buildings, and dead forests their pollution causes. Those costs land on third parties who never agreed to the transaction. The gap between private cost and social cost is a **negative externality**.

When a negative externality exists, the market overproduces. Steel is too cheap because its price doesn't reflect the full cost to society. Buyers and sellers are happy at the market equilibrium, but society as a whole would be better off with less steel and less pollution. The **social cost** of each ton exceeds the **private cost**, so the socially optimal quantity is lower than what the market delivers.

Positive externalities work in reverse. You get a flu vaccine. You benefit, but so does everyone around you, because you're less likely to spread the virus. Your coworker, your elderly neighbor, the stranger on the bus all gain protection they didn't pay for. That spillover benefit is a **positive externality**.

With a positive externality, the market underproduces. Not enough people get vaccinated, because each person considers only their own benefit and ignores the benefit to others. The **social benefit** of each vaccine exceeds the **private benefit**, so the socially optimal quantity is higher than the market provides.

The core pattern: negative externalities mean *too much* production, positive externalities mean *too little*. In both cases, the market equilibrium diverges from the socially efficient outcome.`,
    },
    {
      heading: "Public Goods and the Free-Rider Problem",
      content: `Picture a Fourth of July fireworks display over a city. Once the fireworks go off, everyone in the area can see them, whether they paid or not. You can't block one person's view without blocking everyone's. Your enjoyment doesn't reduce the show for the person next to you.

Two features define a **public good**:
- **Non-excludable** -- you can't prevent non-payers from consuming it
- **Non-rivalrous** -- one person's consumption doesn't reduce availability for others

National defense is the textbook example. Once a country is defended, every resident benefits regardless of whether they paid taxes. A lighthouse warns every ship, not just the ones whose owners chipped in. Clean air, public radio signals, and basic scientific research all share these characteristics.

If you can enjoy the good without paying, why pay? That's the **free-rider problem**. Rational individuals wait for someone else to foot the bill. If everyone free-rides, no one pays, and the good never gets produced, or gets produced in far too small a quantity.

Private markets can't solve this. A fireworks company can't charge spectators because it can't exclude those who refuse to pay. The market fails to provide the good even though society collectively values it far above its cost. Governments typically step in, funding public goods through taxation rather than voluntary purchase.`,
    },
    {
      heading: "Information Asymmetry: The Market for Lemons",
      content: `You're shopping for a used car. The seller knows whether the car has been in a flood, whether the transmission slips, whether the engine burns oil. You don't. This imbalance, where one party has more information than the other, is **information asymmetry**. And it can unravel an entire market.

Economist George Akerlof showed how in his famous 1970 paper on the **market for lemons**. Suppose half of all used cars are good ("peaches") worth $10,000, and half are defective ("lemons") worth $5,000. Buyers can't tell which is which, so they offer the average: $7,500.

Here's the catch: owners of good cars know their cars are worth $10,000 and won't sell for $7,500. They withdraw from the market. Now the remaining pool is mostly lemons. Buyers recognize this and lower their offer. More good-car owners exit. The process repeats until the market is dominated by lemons or collapses entirely. This is **adverse selection** in action: the "bad" products drive out the "good" ones.

Information asymmetry also creates **moral hazard**, where one party changes their behavior after a deal because the other party can't observe them. Buy fire insurance and you might become less careful about fire safety, since the insurance company now bears the cost. The insurer can't watch you 24/7.

Real-world responses include warranties (the seller signals quality), vehicle history reports (third-party information), occupational licensing (the government certifies competence), and mandatory disclosure laws (forcing the informed party to share what they know).`,
    },
    {
      heading: "Market Power",
      content: `Your cable bill is high because in many areas a single company provides internet service. No competitor to switch to. The firm charges well above its cost of production and you either pay or go without. That's **market power** at work: the ability to set prices above the competitive level.

In a perfectly competitive market, many firms sell identical products and no single firm can influence the price. Competition pushes price down to minimum average cost, firms earn zero economic profit, and consumers get the most output at the lowest price.

A **monopoly** is the extreme case. A single seller controls the entire market, restricts output below the competitive level, and charges a higher price. The result is **deadweight loss**: transactions that would have benefited both buyer and seller never occur.

**Natural monopolies** arise when a single firm can serve the entire market at lower cost than two or more firms could. Water utilities, electric grids, rail networks. Building two parallel sewer systems would be wasteful. The monopoly is efficient on the production side, but without regulation, the firm still exploits its pricing power.

Market power doesn't need to be absolute, either. **Oligopolies**, markets with a handful of dominant firms, can also produce inefficient outcomes. Airlines, wireless carriers, and social media platforms often operate in oligopolistic markets where a few big players set the tone and smaller competitors struggle to gain traction.`,
    },
    {
      heading: "What Government Can Do (and Sometimes Makes Worse)",
      content: `When markets fail, governments often step in. The toolbox:

- **Pigouvian taxes** -- tax pollution per ton so the firm's private cost rises to match social cost. The market then naturally produces the socially optimal quantity. Carbon taxes work on this principle.
- **Subsidies** -- subsidize flu vaccines or education so consumers face a lower price, boosting consumption toward the socially optimal level.
- **Regulation** -- set emission limits, mandate disclosure, require safety standards. Command-and-control rules can directly cap harmful behavior.
- **Tradable permits** -- create a limited number of pollution allowances and let firms buy and sell them. Firms that can cut pollution cheaply do so and sell their permits to firms where cleanup is expensive. The cap is met at the lowest total cost.
- **Public provision** -- the government produces the good directly, funded by taxes. National defense, roads, and basic research are common examples.

Government intervention isn't a guaranteed fix, though. **Government failure** occurs when intervention makes things worse or creates new inefficiencies. Regulators may lack information, respond to political pressure instead of economic logic, or create unintended consequences. A poorly designed subsidy can encourage waste. A price control can create shortages. Lobbying can redirect policy to benefit a narrow group at the public's expense.

**Worked example:** A factory emits pollution causing $20 in health damages per unit. The government imposes a **Pigouvian tax** of $20 per unit. Before the tax, the firm produced 1,000 units (private-cost equilibrium). After the tax, marginal cost rises by $20 and output falls to 800 units (social-cost equilibrium). Those 200 units that are no longer produced had social cost exceeding social benefit. Deadweight loss is eliminated, and the tax revenue can fund cleanup or compensate those harmed.

The point isn't that government always succeeds or always fails. Both markets *and* governments can misallocate resources. Good policy design compares the imperfect market outcome with the imperfect government alternative and picks whichever gets closest to efficiency.`,
    },
  ],
};

export const marketFailureQuestions: PracticeQuestion[] = [
  {
    id: "mf-1",
    question:
      "A chemical plant dumps waste into a river, harming downstream fisheries. This is an example of:",
    options: [
      "A positive externality, because the chemical plant creates jobs",
      "A negative externality, because third parties bear costs not reflected in the market price",
      "A public good, because the river is available to everyone",
      "Moral hazard, because the plant changed its behavior after entering the market",
    ],
    correctIndex: 1,
    explanation:
      "The pollution imposes costs on the downstream fisheries, parties who are not involved in the chemical plant's transactions. This is a negative externality: the social cost of production exceeds the private cost, causing the market to overproduce the chemical. Option A is wrong because the jobs are a private benefit to the plant's workers, not a spillover benefit to uninvolved third parties; the harm to fisheries is the externality here. Option C is wrong because the river itself is a common resource, not a public good, and the issue is the pollution cost, not the nature of the river.",
  },
  {
    id: "mf-2",
    question:
      "When a positive externality exists in a market, the socially optimal quantity is:",
    options: [
      "Less than the market equilibrium quantity",
      "Equal to the market equilibrium quantity",
      "Greater than the market equilibrium quantity",
      "Impossible to determine without knowing the demand curve",
    ],
    correctIndex: 2,
    explanation:
      "Positive externalities mean the social benefit exceeds the private benefit. Consumers only consider their own benefit when deciding how much to buy, so the market produces less than the socially optimal amount. Society would be better off with more of the good. Option A describes the case for negative externalities, where the market overproduces. Option B would only be true if there were no externalities at all.",
  },
  {
    id: "mf-3",
    question:
      "Which of the following is the best example of a public good?",
    options: [
      "A slice of pizza at a restaurant",
      "A subscription streaming service",
      "National defense",
      "A toll road with electronic payment",
    ],
    correctIndex: 2,
    explanation:
      "National defense is both non-rivalrous (one person being defended does not reduce defense for others) and non-excludable (you cannot exclude any resident from being protected). These two properties define a public good. Option A is wrong because pizza is both rivalrous (if you eat it, no one else can) and excludable (the restaurant can refuse to serve you). Option B is excludable because the service requires a paid subscription. Option D is excludable because the toll prevents non-payers from using the road.",
  },
  {
    id: "mf-4",
    question:
      "In Akerlof's \"market for lemons\" model, what causes the market to break down?",
    options: [
      "Buyers offer too much for low-quality goods",
      "The government sets a price ceiling on used cars",
      "Sellers of high-quality goods exit because buyers cannot distinguish quality, driving average quality down",
      "Too many buyers enter the market, creating a shortage of used cars",
    ],
    correctIndex: 2,
    explanation:
      "Because buyers cannot tell good cars from bad ones, they offer an average price. Owners of high-quality cars find this price too low and withdraw. The remaining pool is increasingly low-quality, so buyers lower their offers further. This cycle of adverse selection can collapse the market. Option A is wrong because buyers actually offer too little for high-quality goods (not too much for low-quality ones); they pay an average that undervalues the good cars. Option B is wrong because the lemons problem is driven by information asymmetry, not government price controls.",
  },
  {
    id: "mf-5",
    question:
      "The free-rider problem makes it difficult for private markets to provide public goods because:",
    options: [
      "Public goods are too expensive for private firms to produce",
      "Consumers can enjoy the good without paying, so firms cannot collect enough revenue",
      "The government prohibits private firms from producing public goods",
      "Public goods have no demand in the market",
    ],
    correctIndex: 1,
    explanation:
      "Because public goods are non-excludable, firms cannot prevent non-payers from consuming. Rational consumers have an incentive to free-ride, to enjoy the benefit while letting others pay. If too many people free-ride, the firm cannot cover its costs and will not produce the good. Option A is wrong because the issue is not cost but revenue collection; even a low-cost public good suffers from the free-rider problem if people cannot be excluded from using it.",
  },
  {
    id: "mf-6",
    question:
      "A Pigouvian tax on pollution is designed to:",
    options: [
      "Raise government revenue to fund public schools",
      "Punish firms for unethical behavior",
      "Close the gap between private cost and social cost so the market produces the efficient quantity",
      "Eliminate all pollution by making production unprofitable",
    ],
    correctIndex: 2,
    explanation:
      "A Pigouvian tax is set equal to the external cost per unit, which raises the firm's private cost to match the social cost. The market then naturally reduces output to the socially optimal level. Option D is wrong because the goal is not zero pollution; it is the efficient level of pollution where the marginal social benefit of one more unit of output equals the marginal social cost. Some pollution may be worth tolerating if the goods produced are valuable enough. Option B is wrong because the tax is a corrective tool aimed at efficiency, not a moral punishment.",
  },
  {
    id: "mf-7",
    question:
      "A natural monopoly exists when:",
    options: [
      "A firm has a patent that prevents competitors from entering the market",
      "A single firm can supply the entire market at a lower average cost than multiple competing firms",
      "A firm uses predatory pricing to drive out competitors",
      "The government grants exclusive rights to produce a good",
    ],
    correctIndex: 1,
    explanation:
      "A natural monopoly arises from the cost structure of the industry, typically very high fixed costs and low marginal costs. One firm spreading those fixed costs across the entire market achieves a lower average cost than two or more firms splitting the market could. Water utilities and electric grids are classic examples. Option A describes a legal barrier to entry (a patent), not a natural monopoly. Option D describes a government-granted monopoly. Both create monopolies, but not natural ones. The distinction matters because natural monopolies are efficient on the production side even if pricing requires regulation.",
  },
  {
    id: "mf-8",
    question:
      "Which of the following is an example of moral hazard?",
    options: [
      "A used car seller hides a known defect from the buyer",
      "A person with health insurance visits the doctor more frequently because visits are covered",
      "A firm with market power raises prices above the competitive level",
      "Residents free-ride on a neighbor's pest control service",
    ],
    correctIndex: 1,
    explanation:
      "Moral hazard occurs when one party changes their behavior after a deal because the other party cannot fully observe or control their actions. A person with insurance takes more risk or uses more care because the insurer bears the cost. Option A is wrong because it describes adverse selection (hidden information before a transaction), not moral hazard (changed behavior after a transaction). Option D is wrong because free-riding relates to public goods, not moral hazard; the pest control spillover is a positive externality problem, not a post-contract behavior change.",
  },
  {
    id: "mf-9",
    question:
      "A factory produces steel with private supply MPC = 20 + Q and market demand P = 120 − Q. Each unit creates $30 in pollution damage. The socially optimal quantity is closest to:",
    options: [
      "50 units",
      "35 units",
      "45 units",
      "65 units",
    ],
    correctIndex: 1,
    explanation:
      "MSC = MPC + external cost = (20 + Q) + 30 = 50 + Q. Set MSC = Demand: 50 + Q = 120 − Q, so 2Q = 70, Q = 35. The market equilibrium without the tax would be MPC = Demand: 20 + Q = 120 − Q, so 2Q = 100, Q = 50. The socially optimal output (35) is less than the market equilibrium (50) because the negative externality causes overproduction. Option A (50) is the unregulated market quantity that ignores external costs. Option C (45) appears to be an averaging error. Option D (65) exceeds even the market equilibrium, meaning even more overproduction, which contradicts the need to reduce output.",
  },
  {
    id: "mf-10",
    question:
      "A Pigouvian tax is set at $30 per unit to correct a negative externality. Compared to a command-and-control regulation that mandates the same output level, the Pigouvian tax is generally preferred by economists because:",
    options: [
      "It generates no deadweight loss while the regulation does",
      "It allows firms with lower abatement costs to reduce pollution more, achieving the target at lower total cost",
      "It completely eliminates all pollution while regulation only reduces it",
      "It does not require the government to have any information about external costs",
    ],
    correctIndex: 1,
    explanation:
      "A Pigouvian tax puts a price on the externality and lets the market decide how to adjust. Firms that can reduce pollution cheaply will cut more; firms where abatement is expensive will cut less and pay the tax. This achieves the optimal output at the lowest total cost to society. A uniform regulation forces all firms to cut equally, regardless of cost differences. Option A is wrong; both approaches can achieve the efficient outcome and eliminate the externality-related DWL; the advantage of the tax is cost-effectiveness, not DWL elimination. Option C is wrong because neither policy aims for zero pollution; the goal is the socially optimal level where marginal social cost equals marginal social benefit. Option D is wrong because setting the correct Pigouvian tax requires knowledge of the marginal external cost.",
  },
  {
    id: "mf-11",
    question:
      "The Coase theorem is most likely to fail as a solution to externalities when:",
    options: [
      "Property rights are clearly assigned to one party",
      "Only two parties are involved in the dispute",
      "Transaction costs are high and many parties are affected by the externality",
      "The externality is negative rather than positive",
    ],
    correctIndex: 2,
    explanation:
      "The Coase theorem requires low transaction costs and well-defined property rights. When transaction costs are high, as when millions of people are affected by air pollution, negotiating a private solution is impractical. The costs of identifying all parties, organizing them, and reaching agreement overwhelm any potential gains from bargaining. Option A describes a condition that actually supports the Coase theorem, not undermines it. Option B describes a favorable scenario for Coasean bargaining, since fewer parties mean lower transaction costs. Option D is irrelevant; the theorem applies equally to negative and positive externalities; the type of externality does not determine whether bargaining will succeed.",
  },
  {
    id: "mf-12",
    question:
      "National defense is classified as a public good because it is:",
    options: [
      "Produced by the government and funded through taxes",
      "Non-rival and non-excludable: one person's protection does not reduce another's, and no citizen can be excluded",
      "Expensive to produce, making it impractical for private firms",
      "Consumed equally by all citizens regardless of income",
    ],
    correctIndex: 1,
    explanation:
      "The defining features of a public good are non-rivalry (my consumption does not diminish yours) and non-excludability (no one can be prevented from benefiting). National defense satisfies both: defending one citizen does not reduce defense for others, and you cannot selectively leave some citizens unprotected. Option A confuses how the good is provided with what makes it a public good; government provision is the response to the public goods problem, not the definition. Option C identifies a practical difficulty but not the economic classification; many expensive goods are private goods. Option D describes equal consumption, which is a consequence of non-rivalry and non-excludability, not the definition itself.",
  },
  {
    id: "mf-13",
    question:
      "A town of 1,000 residents values a public park at $5 per person, while the park costs $3,000 to build. A cost-benefit analysis would recommend building the park because:",
    options: [
      "Each resident's share of the cost ($50) is affordable",
      "The total social benefit ($5,000) exceeds the total cost ($3,000), yielding net social benefit of $4 million",
      "Parks always generate positive externalities that justify public spending",
      "The park would create construction jobs, and job creation always justifies public expenditure",
    ],
    correctIndex: 1,
    explanation:
      "Cost-benefit analysis compares total social benefits to total social costs. Since $14 million > $10 million, the project generates $4 million in net social benefit, so it should be built. Option A focuses on affordability per person, which is a distributional concern, not the efficiency criterion used in cost-benefit analysis. Option C is too broad; not all parks are worth building; the decision depends on whether benefits exceed costs in each specific case. Option D invokes a jobs argument that ignores opportunity cost; the $10 million could create jobs elsewhere too; what matters is whether this particular use of resources maximizes social welfare.",
  },
  {
    id: "mf-14",
    question:
      "Which of the following government interventions is most appropriate for correcting the underproduction of a good with a positive externality?",
    options: [
      "A per-unit tax equal to the marginal external benefit",
      "A per-unit subsidy equal to the marginal external benefit",
      "A price ceiling set below the market equilibrium price",
      "A quota that limits production to the current market level",
    ],
    correctIndex: 1,
    explanation:
      "A positive externality means MSB > MPB, so the market underproduces. A per-unit subsidy equal to the marginal external benefit shifts the effective demand curve up to match the social benefit curve, increasing consumption to the socially optimal level. Option A would make the problem worse; taxing a good that is already underproduced would reduce output even further. Option C (a price ceiling below equilibrium) would create a shortage and potentially reduce the quantity exchanged, worsening underproduction. Option D locks in the current inefficient market output instead of correcting it.",
  },
  {
    id: "mf-15",
    question:
      "On a graph showing a negative externality, the socially optimal quantity is found where:",
    options: [
      "The marginal private cost curve intersects the demand curve",
      "The marginal social cost curve intersects the marginal social benefit (demand) curve",
      "The marginal social cost curve intersects the marginal private cost curve",
      "The demand curve intersects the horizontal axis",
    ],
    correctIndex: 1,
    explanation:
      "The socially optimal quantity occurs where the full social cost of the last unit equals the full social benefit, that is, where MSC intersects the demand curve (which represents MSB when there are no consumption externalities). At this point, net social welfare is maximized. Option A finds the unregulated market equilibrium, which overproduces when a negative externality exists because it ignores external costs. Option C makes no economic sense; the intersection of MSC and MPC would only identify the output where external cost equals zero, which is not the optimality condition. Option D finds the quantity where willingness to pay is zero, which has no welfare-maximizing significance.",
  },
];
