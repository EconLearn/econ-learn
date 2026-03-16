import type { PracticeQuestion } from "@/data/supply-demand-content";

export const publicGoodsContent = {
  title: "Public Goods & Externalities",
  subtitle:
    "The cases where markets misfire, and the tools governments use to fix them",
  sections: [
    {
      heading: "Negative Externalities",
      content: `A coal plant generates electricity for its customers and dumps sulfur dioxide into the air, causing asthma in communities downwind. The people breathing that air never agreed to bear that cost. They bear it anyway.

That uncompensated cost imposed on third parties is a **negative externality**. The factory considers its own production costs (labor, fuel, machinery) when deciding output levels, but ignores the health damage it inflicts on others. The factory's own costs are the **marginal private cost (MPC)**. The full cost to society, private costs plus external damage, is the **marginal social cost (MSC)**.

Because MSC > MPC, the market price is too low and the quantity produced is too high. The market **overproduces** relative to the socially optimal level. On the graph, the Social Cost curve sits above the private Supply curve, and the gap between them is the external cost per unit.

Other examples: carbon emissions from driving, noise pollution from late-night construction, secondhand smoke, antibiotic resistance from overuse in livestock.`,
    },
    {
      heading: "Positive Externalities",
      content: `When you get a flu vaccine, you protect yourself. But you also protect the coworker sitting next to you, the elderly neighbor you pass on the street, and the immunocompromised stranger on the bus. They benefit from your decision without paying a cent.

That spillover benefit to third parties is a **positive externality**. The buyer considers only their own benefit (avoiding a week of misery) but ignores the broader social gain. The buyer's benefit is the **marginal private benefit (MPB)**. Add the benefit to others and you get the **marginal social benefit (MSB)**.

Because MSB > MPB, the market price is too high and the quantity consumed is too low. The market **underproduces** relative to the socially optimal level. On the graph, the Social Benefit curve sits above the private Demand curve, with the gap representing the external benefit per unit.

Education is the classic example here. A more educated person earns more (private benefit) and also contributes to a more productive workforce, lower crime rates, and better civic engagement (social benefits). Research and development, pollination by beekeepers, and home renovations that improve a neighborhood are other cases.`,
    },
    {
      heading: "Pigouvian Taxes and Subsidies",
      content: `Markets overproduce goods with negative externalities and underproduce goods with positive externalities. Arthur Pigou proposed a straightforward fix: make people face the full social cost or benefit of their actions through the price system.

A **Pigouvian tax** is a per-unit tax set equal to the external cost. If a factory imposes $15 of pollution damage per unit, tax each unit $15. The firm's private cost rises to match social cost, shifting the supply curve up until it overlaps with the Social Cost curve. The market then produces the socially optimal quantity. Toggle the tax on the graph to see the supply curve jump up to match social cost and watch the deadweight loss disappear.

A **Pigouvian subsidy** works in reverse for positive externalities. If vaccines generate $15 of external benefit per dose, give buyers a $15 subsidy. Effective demand rises to match social benefit, shifting the demand curve up to overlap with the Social Benefit curve.

What's elegant about Pigouvian corrections is that they use the market itself to fix the market. No banning pollution. No mandating vaccinations. Just adjust prices so that self-interested decisions lead to the right outcome.`,
    },
    {
      heading: "Public Goods and the Free-Rider Problem",
      content: `A lighthouse beams light across the ocean. Every ship benefits, whether or not the captain paid for the lighthouse. You can't stop a passing vessel from seeing the light. One ship using it doesn't diminish the light available to others.

**Public goods** have two defining properties:
- **Non-excludable** -- you can't prevent non-payers from consuming the good
- **Non-rival** -- one person's consumption doesn't reduce availability for others

National defense is the textbook example. The military protects every person in the country simultaneously (non-rival), and there's no way to defend some citizens while leaving others exposed (non-excludable). Street lighting, public fireworks displays, open-source software, and basic scientific research also qualify.

If you can't be excluded from the benefit, why would you voluntarily pay? That's the **free-rider problem**. Everyone wants the good, but everyone has an incentive to let someone else foot the bill. If everyone free-rides, the good never gets produced, even though society collectively values it far more than it costs.

Private markets fail to provide public goods efficiently. Governments typically fund them through taxation instead. Your tax dollars pay for national defense, public parks, and flood control whether you asked for them or not. That's precisely the point.`,
    },
    {
      heading: "The Coase Theorem and Property Rights",
      content: `A rancher's cattle trample a neighboring farmer's crops. The rancher profits, the farmer suffers. A clear negative externality. Ronald Coase argued that under the right conditions, the government doesn't need to intervene at all.

The **Coase theorem** states that if property rights are well-defined and transaction costs are low, private parties can negotiate their way to the efficient outcome regardless of who initially holds the rights.

Suppose the farmer has the legal right to untrammeled crops. The rancher will offer to pay for the right to let cattle graze, but only up to the amount the rancher gains. If the rancher's profit from grazing exceeds the farmer's crop damage, a deal happens and both are better off. If not, the cattle stay penned. Either way, the outcome is efficient.

Now reverse the assignment: the rancher has the right to let cattle roam. The farmer will offer to pay the rancher to pen them, up to the value of crop damage avoided. Same efficient result, different distribution of money.

In practice, the Coase theorem hits real limits. **Transaction costs** are often high. Negotiating with millions of pollution sources just isn't realistic. Property rights are sometimes unclear, and power imbalances can distort bargaining. So Pigouvian taxes and regulation remain essential for large-scale externalities like climate change.`,
    },
    {
      heading: "Worked Example: Calculating the Optimal Pigouvian Tax",
      content: `A factory produces widgets. Private supply (MPC) is **P = 10 + 0.7Q** and market demand is **P = 90 - 0.8Q**. Each widget generates $15 of pollution damage to surrounding communities. Let's find the market equilibrium, the socially optimal outcome, the deadweight loss, and the correct Pigouvian tax.

**Market equilibrium.** Set MPC = Demand:

10 + 0.7Q = 90 - 0.8Q
1.5Q = 80
**Q_market = 53.3 units**
**P_market = 10 + 0.7(53.3) = $47.33**

**Social cost curve.** MSC is private supply plus the external cost per unit:

MSC = (10 + 0.7Q) + 15 = **25 + 0.7Q**

**Socially optimal outcome.** Set MSC = Demand:

25 + 0.7Q = 90 - 0.8Q
1.5Q = 65
**Q_optimal = 43.3 units**
**P_optimal = 90 - 0.8(43.3) = $55.33**

**Deadweight loss.** The DWL is the triangle between MSC and Demand, from Q_optimal to Q_market:

DWL = 0.5 x (Q_market - Q_optimal) x (external cost)
DWL = 0.5 x (53.3 - 43.3) x 15 = **$75**

**Pigouvian tax.** Set it equal to the external cost per unit: **$15 per widget**. This shifts the supply curve up by $15, making private cost equal to social cost. The new market equilibrium lands exactly at the socially optimal point.

Verification: with the tax, new supply is P = 25 + 0.7Q, identical to the MSC curve. The market self-corrects.`,
    },
  ],
};

export const publicGoodsQuestions: PracticeQuestion[] = [
  {
    id: "pg-1",
    question:
      "A chemical plant dumps waste into a river, harming downstream fisheries. This is an example of:",
    options: [
      "A positive externality, because the plant creates jobs",
      "A negative externality, because third parties bear uncompensated costs",
      "A public good, because the river is non-excludable",
      "The free-rider problem, because fishers are free-riding on the plant",
    ],
    correctIndex: 1,
    explanation:
      "The fisheries bear a real cost (damaged catch) from the plant's production, and they were not part of the transaction. That is a textbook negative externality, a cost imposed on third parties. Option A confuses job creation (a private market outcome) with the pollution spillover. Option C describes a property of the river itself, not the pollution problem. Option D gets it backward; the fishers are victims, not free-riders.",
  },
  {
    id: "pg-2",
    question:
      "When a positive externality exists, the market equilibrium quantity is:",
    options: [
      "Greater than the socially optimal quantity",
      "Equal to the socially optimal quantity",
      "Less than the socially optimal quantity",
      "Indeterminate without more information",
    ],
    correctIndex: 2,
    explanation:
      "With a positive externality, the social benefit exceeds the private benefit. Buyers only consider their own benefit, so they purchase too little. The market underproduces relative to what society would choose. Option A describes what happens with a negative externality (overproduction). Option B would only be true if there were no externality at all.",
  },
  {
    id: "pg-3",
    question:
      "A Pigouvian tax on a good with a negative externality should be set equal to:",
    options: [
      "The total revenue the government wants to collect",
      "The marginal private cost at equilibrium",
      "The marginal external cost per unit",
      "The market price minus the social cost",
    ],
    correctIndex: 2,
    explanation:
      "The Pigouvian tax is designed to close the gap between private cost and social cost. That gap is exactly the external cost per unit. Setting the tax equal to the marginal external cost forces producers to internalize the full social cost of production. Option A is wrong because the goal is efficiency, not revenue. Option B would double-count private costs. Option D gets the direction backward.",
  },
  {
    id: "pg-4",
    question: "Which of the following is the best example of a public good?",
    options: [
      "A toll road with electronic payment",
      "A Netflix subscription",
      "National defense",
      "A loaf of bread from a bakery",
    ],
    correctIndex: 2,
    explanation:
      "National defense is both non-rival (protecting one citizen does not reduce protection for others) and non-excludable (you cannot selectively leave some citizens undefended). A toll road is excludable, since non-payers are blocked. Netflix is excludable via password. Bread is both rival and excludable, making it a private good.",
  },
  {
    id: "pg-5",
    question:
      "The free-rider problem explains why public goods are typically:",
    options: [
      "Overproduced by private markets",
      "Underproduced or not produced by private markets",
      "Produced efficiently by monopolies",
      "Only consumed by wealthy individuals",
    ],
    correctIndex: 1,
    explanation:
      "Because public goods are non-excludable, individuals can enjoy the benefit without paying. If enough people free-ride, no private firm can profitably produce the good, so it is underproduced or not produced at all. Option A describes the result of a negative externality, not a public good. Option C has no logical connection; monopolies do not solve the excludability problem.",
  },
  {
    id: "pg-6",
    question:
      "According to the Coase theorem, private negotiation can resolve externalities efficiently when:",
    options: [
      "The government imposes a Pigouvian tax",
      "Property rights are well-defined and transaction costs are low",
      "There are many parties involved in the externality",
      "The externality is positive rather than negative",
    ],
    correctIndex: 1,
    explanation:
      "Coase showed that if property rights are clear and bargaining is cheap, the affected parties will negotiate to the efficient outcome on their own. Option A describes Pigou's solution, not Coase's. Option C actually undermines the Coase theorem, since many parties means high transaction costs, which prevent efficient bargaining. Option D is irrelevant; the theorem applies to both positive and negative externalities.",
  },
  {
    id: "pg-7",
    question:
      "If the marginal external cost of pollution is $20 per unit and the government imposes a $20 Pigouvian tax, the deadweight loss from the externality becomes:",
    options: [
      "Larger, because taxes always create deadweight loss",
      "Zero, because the tax aligns private and social costs",
      "$20 per unit of output",
      "Unchanged, because taxes do not affect externalities",
    ],
    correctIndex: 1,
    explanation:
      "The Pigouvian tax shifts the supply curve up by exactly the external cost, making the private cost curve identical to the social cost curve. The market equilibrium now matches the socially optimal outcome, eliminating the deadweight loss entirely. Option A applies to taxes on goods without externalities. A Pigouvian tax corrects an existing distortion rather than creating a new one.",
  },
  {
    id: "pg-8",
    question:
      "Vaccines generate significant positive externalities. Without government intervention, the market price of vaccines will be _____ and the quantity will be _____ compared to the social optimum.",
    options: [
      "Too high; too low",
      "Too low; too high",
      "Too high; too high",
      "Too low; too low",
    ],
    correctIndex: 0,
    explanation:
      "With a positive externality, the marginal social benefit exceeds the marginal private benefit. The market only reflects private benefit, so it settles at a price that is too high relative to social value (making it too expensive for some buyers who would generate social gains) and a quantity that is too low (society wants more vaccinations than the market provides). A subsidy would lower the price and increase the quantity toward the social optimum. Option B describes what happens with a negative externality.",
  },
  {
    id: "pg-9",
    question:
      "A good that is non-rival but excludable is classified as a:",
    options: [
      "Public good",
      "Private good",
      "Club good",
      "Common resource",
    ],
    correctIndex: 2,
    explanation:
      "A club good (also called a natural monopoly good or toll good) is non-rival in consumption up to a congestion point but excludable, meaning providers can restrict access to payers. Examples include cable television, streaming services, and private golf courses. Option A (public good) requires both non-rivalry and non-excludability; excludability disqualifies it. Option B (private good) requires both rivalry and excludability; non-rivalry disqualifies it. Option D (common resource) is rival but non-excludable, the opposite combination of a club good.",
  },
  {
    id: "pg-10",
    question:
      "Overgrazing on public pastureland is an example of the 'tragedy of the commons.' This occurs because the pastureland is:",
    options: [
      "Non-rival and non-excludable, like a public good",
      "Rival and excludable, like a private good",
      "Rival but non-excludable, so each herder has an incentive to overuse the resource",
      "Non-rival but excludable, like a club good",
    ],
    correctIndex: 2,
    explanation:
      "Common resources are rival (one cow grazing reduces the grass available for others) but non-excludable (herders cannot be prevented from using the open pasture). Each herder captures the full private benefit of adding another cow but shares the cost of overgrazing with everyone. This asymmetry drives each individual to overuse the resource even though collective restraint would make everyone better off. Option A describes a public good; if the pasture were non-rival, overgrazing would not be a problem. Option B describes a private good, which can be efficiently allocated by markets. Option D describes a club good, which does not suffer from the commons problem because access can be restricted.",
  },
  {
    id: "pg-11",
    question:
      "A private firm builds a lighthouse. Ships that pass by benefit from the light regardless of whether they paid the firm. The firm struggles to profit because:",
    options: [
      "The lighthouse is rival in consumption, so too many ships deplete its usefulness",
      "The lighthouse is non-excludable, so ships free-ride on the light without paying",
      "The government prohibits private firms from charging for navigation aids",
      "Lighthouses are inferior goods, and demand falls as incomes rise",
    ],
    correctIndex: 1,
    explanation:
      "The lighthouse is the classic public good: non-rival (one ship using the light does not diminish it for others) and non-excludable (you cannot prevent passing ships from seeing the beam). Because the firm cannot exclude non-payers, ships have no incentive to pay voluntarily, so they free-ride. Without revenue, the firm cannot cover costs. Option A is wrong because lighthouse light is non-rival, as multiple ships benefit simultaneously without reducing the resource. Option C is a factual claim not related to the economic concept; the issue is the inherent non-excludability, not regulation. Option D is irrelevant; lighthouses are not consumer goods with income elasticity concerns.",
  },
  {
    id: "pg-12",
    question:
      "Governments provide public goods primarily because:",
    options: [
      "Public goods are always cheaper for governments to produce than for private firms",
      "The free-rider problem causes private markets to underprovide goods that society values",
      "Citizens prefer government-produced goods to privately produced goods",
      "Public goods generate negative externalities that only governments can regulate",
    ],
    correctIndex: 1,
    explanation:
      "The economic rationale for government provision of public goods is market failure caused by the free-rider problem. Because public goods are non-excludable, private firms cannot charge users and therefore underprovide (or do not provide at all) goods that society collectively values above their cost. Governments solve this by funding public goods through compulsory taxation. Option A is incorrect; governments are not necessarily cheaper producers; the issue is revenue collection, not production cost. Option C is a preference claim with no economic basis. Option D confuses public goods with externalities; public goods are defined by non-rivalry and non-excludability, not by the presence of externalities.",
  },
  {
    id: "pg-13",
    question:
      "A city is deciding whether to build a $10 million public park. Economists estimate the total social benefit at $14 million, spread across 200,000 residents. A cost-benefit analysis would recommend building the park because:",
    options: [
      "Each resident's share of the cost ($50) is affordable",
      "The total social benefit ($14 million) exceeds the total cost ($10 million), yielding net social benefit of $4 million",
      "Parks always generate positive externalities that justify public spending",
      "The park would create construction jobs, and job creation always justifies public expenditure",
    ],
    correctIndex: 1,
    explanation:
      "Cost-benefit analysis compares total social benefits to total social costs. Since $14 million > $10 million, the project generates $4 million in net social benefit, so it should be built. Option A focuses on affordability per person, which is a distributional concern, not the efficiency criterion used in cost-benefit analysis. Option C is too broad; not all parks are worth building; the decision depends on whether benefits exceed costs in each specific case. Option D invokes a jobs argument that ignores opportunity cost; the $10 million could create jobs elsewhere too; what matters is whether this particular use of resources maximizes social welfare.",
  },
  {
    id: "pg-14",
    question:
      "The marginal social benefit of a public good is determined by:",
    options: [
      "The benefit to the single consumer who values it most",
      "The average benefit across all consumers",
      "The vertical summation of all individual consumers' marginal benefit curves",
      "The horizontal summation of all individual consumers' marginal benefit curves",
    ],
    correctIndex: 2,
    explanation:
      "Because public goods are non-rival, every consumer enjoys the same unit simultaneously. To find total social benefit at any given quantity, you add up what each individual is willing to pay for that unit, and this is vertical summation of individual demand (marginal benefit) curves. This contrasts with private goods, where market demand is found by horizontal summation (adding quantities at each price). Option A only captures one person's valuation, ignoring the rest of society. Option B is a statistical measure that does not reflect the correct aggregation method. Option D describes how market demand for private goods is derived. For public goods, because all consumers consume the same quantity, you sum willingness to pay (vertically), not quantities (horizontally).",
  },
  {
    id: "pg-15",
    question:
      "Which of the following best explains why private markets tend to undersupply public goods relative to the socially optimal quantity?",
    options: [
      "Private firms lack the technology to produce public goods efficiently",
      "Consumers reveal their true willingness to pay through market transactions for public goods",
      "Non-excludability prevents firms from charging, and consumers understate their preferences, leading to insufficient funding",
      "Government regulations prevent private firms from entering public goods markets",
    ],
    correctIndex: 2,
    explanation:
      "Two forces drive undersupply. First, non-excludability means firms cannot charge non-payers, so they cannot capture revenue. Second, consumers strategically understate how much they value the good (since they can free-ride on others' payments), so even voluntary contribution schemes fall short. Together, the private market provides far less than the socially optimal quantity. Option A is wrong because the problem is not about production capability but about revenue collection and incentive revelation. Option B states the opposite of reality; consumers hide their true preferences for public goods precisely because they can benefit without paying. Option D is factually incorrect in most cases; the issue is economic incentives, not legal barriers.",
  },
];
