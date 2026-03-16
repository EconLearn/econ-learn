import type { PracticeQuestion } from "@/data/supply-demand-content";

export const publicGoodsContent = {
  title: "Public Goods & Externalities",
  subtitle:
    "Toggle the tax and subsidy controls on the graph — watch deadweight loss shrink to zero when the price signal finally reflects full social costs",
  sections: [
    {
      heading: "Negative Externalities",
      content: `Look at the two supply curves on the graph. The lower one is private supply. The upper one is social cost. The vertical gap between them — that's the external cost per unit.

A coal plant generates electricity for its customers and dumps sulfur dioxide into the air, causing asthma in communities downwind. Those people never agreed to bear that cost. They bear it anyway.

That uncompensated cost imposed on third parties is a **negative externality**. The factory considers its own production costs (labor, fuel, machinery) when choosing output levels but ignores the health damage it inflicts on others. The factory's own costs are the **marginal private cost (MPC)**. The full cost to society — private costs plus external damage — is the **marginal social cost (MSC)**.

Because MSC > MPC, the market price ends up too low and the quantity produced too high. The market **overproduces** relative to the socially optimal level. On the graph, notice where the demand curve crosses the private supply curve versus where it crosses the social cost curve. That gap in quantity is the overproduction. The shaded triangle between the two intersections is the deadweight loss.

Carbon emissions from driving, noise from late-night construction near apartment buildings, secondhand smoke, antibiotic resistance from overuse in livestock — all negative externalities producing that same gap on the graph.`,
    },
    {
      heading: "Positive Externalities",
      content: `Now look at the demand side of the graph. Two demand curves. The lower one is private demand. The upper one is social benefit. The gap between them is the external benefit per unit.

When you get a flu vaccine, you protect yourself. You also protect the coworker sitting next to you, the elderly neighbor you pass on the sidewalk, and the immunocompromised stranger on the bus. They benefit from your decision without paying a cent.

That spillover benefit to third parties is a **positive externality**. The buyer considers only their own benefit — avoiding a week of misery — and ignores the broader social gain. The buyer's benefit is the **marginal private benefit (MPB)**. Add the benefit to others and you get the **marginal social benefit (MSB)**.

Because MSB > MPB, the market price lands too high and the quantity consumed too low. The market **underproduces** relative to the socially optimal level. On the graph, the social benefit curve sits above private demand, and the equilibrium quantity falls short of where the social benefit curve intersects supply.

Education is the classic example. A more educated person earns more (private benefit) and also contributes to a more productive workforce, lower crime rates, and stronger civic engagement (social benefits that don't show up in anyone's tuition bill). R&D spending, pollination by beekeepers, and home renovations that lift a whole neighborhood's property values also qualify.`,
    },
    {
      heading: "Pigouvian Taxes and Subsidies",
      content: `Toggle the tax control on the graph. Watch the private supply curve jump up to meet the social cost curve. The deadweight loss triangle vanishes.

Markets overproduce goods with negative externalities and underproduce goods with positive externalities. Arthur Pigou, a Cambridge economist writing in 1920, proposed a fix that's still the standard policy tool: make people face the full social cost or benefit of their actions through the price system.

A **Pigouvian tax** is a per-unit tax set equal to the external cost. If a factory imposes $15 of pollution damage per unit of output, tax each unit $15. The firm's private cost rises to match social cost, the supply curve shifts up until it overlaps with the MSC curve, and the market produces the socially optimal quantity. No banning required.

A **Pigouvian subsidy** works in reverse for positive externalities. If flu vaccines generate $15 of external benefit per dose, subsidize each dose by $15. Effective demand rises to match social benefit. Toggle the subsidy control and watch the private demand curve climb up to meet the social benefit curve.

The elegance is that Pigouvian corrections use the market itself to fix the market. No outright prohibition, no mandates. Just adjust prices so that self-interested decisions lead to the socially optimal outcome. The British Columbia carbon tax, introduced at $10 per ton of CO2 in 2008 and gradually raised to $65 by 2023, is a real-world Pigouvian tax in action.`,
    },
    {
      heading: "Public Goods and the Free-Rider Problem",
      content: `A lighthouse beams light across the ocean. Every ship benefits whether or not the captain paid for it. You can't block a passing vessel from seeing the light. One ship using it doesn't dim it for others.

**Public goods** have two defining properties:

**Non-excludable** — you can't prevent non-payers from consuming the good. **Non-rival** — one person's consumption doesn't reduce what's available for anyone else.

National defense is the textbook example. The military protects every person in the country simultaneously (non-rival), and there's no way to defend some citizens while leaving others exposed (non-excludable). Street lighting, public fireworks on the Fourth of July, open-source software like Linux, and basic scientific research also qualify.

If you can't be excluded from the benefit, why would you voluntarily pay? That's the **free-rider problem**. Everyone wants the good, but everyone has an incentive to let someone else foot the bill. If everyone free-rides, the good never gets produced — even though society collectively values it far more than it costs.

Private markets fail here. Governments typically fund public goods through compulsory taxation instead. Your tax dollars pay for national defense, public parks, and flood levees whether you asked for them or not. That compulsion is the whole point — it solves the free-rider problem by removing the option to opt out.`,
    },
    {
      heading: "The Coase Theorem and Property Rights",
      content: `A rancher's cattle trample a neighboring farmer's crops. The rancher profits, the farmer suffers. Clear negative externality. Ronald Coase, in a famous 1960 paper, argued that under the right conditions the government doesn't need to intervene at all.

The **Coase theorem** states that if property rights are well-defined and transaction costs are low, private parties can negotiate their way to the efficient outcome regardless of who initially holds the rights.

Suppose the farmer has the legal right to untrammeled crops. The rancher will offer to pay for grazing permission, but only up to the amount the rancher gains. If the rancher's profit from grazing exceeds the farmer's crop damage, a deal gets struck and both parties end up better off. If not, the cattle stay penned. Efficient either way.

Reverse the assignment: the rancher has the right to let cattle roam freely. Now the farmer offers to pay the rancher to pen them, up to the value of crop damage avoided. Same efficient result. Different distribution of money, but identical resource allocation.

In practice, the Coase theorem hits hard limits. **Transaction costs** are often enormous. Imagine trying to negotiate individually with 200,000 pollution sources across an industrial region. Property rights are sometimes murky — who owns the air above a factory? Power imbalances distort bargaining. So Pigouvian taxes and direct regulation remain essential tools for large-scale externalities. Climate change, for instance, involves billions of affected parties across every country. Coasian bargaining is a nonstarter at that scale.`,
    },
    {
      heading: "Worked Example: Calculating the Optimal Pigouvian Tax",
      content: `Follow the math on the graph. A factory produces widgets. Private supply (MPC) is **P = 10 + 0.7Q** and market demand is **P = 90 - 0.8Q**. Each widget generates $15 of pollution damage to surrounding communities.

**Market equilibrium.** Set MPC = Demand:

10 + 0.7Q = 90 - 0.8Q
1.5Q = 80
**Q_market = 53.3 units**
**P_market = 10 + 0.7(53.3) = $47.33**

Look at that intersection on the graph. The market ignores the $15 external cost entirely.

**Social cost curve.** MSC = private supply plus external cost per unit:

MSC = (10 + 0.7Q) + 15 = **25 + 0.7Q**

Notice the upper curve on the graph sits exactly $15 above the lower one at every quantity.

**Socially optimal outcome.** Set MSC = Demand:

25 + 0.7Q = 90 - 0.8Q
1.5Q = 65
**Q_optimal = 43.3 units**
**P_optimal = 90 - 0.8(43.3) = $55.33**

**Deadweight loss.** The shaded triangle between the two intersections:

DWL = 0.5 x (Q_market - Q_optimal) x (external cost)
DWL = 0.5 x (53.3 - 43.3) x 15 = **$75**

**Pigouvian tax.** Set it equal to the external cost per unit: **$15 per widget**. Toggle the tax on the graph and watch the private supply curve jump up by $15, landing exactly on top of the MSC curve. The new market equilibrium matches the socially optimal point. Deadweight loss gone.

Verification: with the $15 tax, new supply is P = 25 + 0.7Q — identical to MSC. The market self-corrects.`,
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
      "The fisheries bear real costs — damaged catch, contaminated water — from the plant's production, and they were never part of the transaction. Textbook negative externality. (A) confuses job creation with the pollution spillover; jobs are a private market outcome, not the issue here. (D) gets it completely backwards; the fishers are victims, not free-riders.",
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
      "Social benefit exceeds private benefit. Buyers only account for their own gain, so they purchase too little from society's perspective. The market underproduces. (A) describes what happens with a negative externality — overproduction, not underproduction.",
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
      "The tax closes the gap between private cost and social cost. That gap is the external cost per unit — the vertical distance between the two supply curves on the graph. Set the tax equal to that distance and the private cost curve jumps up to match social cost. (A) is wrong because the goal is allocative efficiency, not revenue maximization. (B) would double-count private costs that firms already pay.",
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
      "National defense is both non-rival (protecting one citizen doesn't reduce protection for others) and non-excludable (you can't selectively leave some citizens undefended). Toll roads are excludable — non-payers get blocked. Netflix is excludable via login credentials. Bread is rival and excludable. Private good.",
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
      "Non-excludability means individuals enjoy the benefit without paying. If enough people free-ride, no private firm can profitably produce the good. It gets underproduced or skipped entirely. (A) describes the negative externality result, not the public good problem. (C) has no logical connection — monopoly power doesn't solve the excludability issue.",
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
      "Clear property rights plus cheap bargaining — that's the Coase recipe. Parties negotiate to the efficient outcome on their own. (A) is Pigou's solution, not Coase's. (C) actually undermines Coase; many parties means high transaction costs, which prevent efficient bargaining from happening.",
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
      "Toggle the tax on the graph and watch the deadweight loss triangle disappear. The $20 tax shifts the supply curve up by exactly the external cost, making private cost identical to social cost. Market equilibrium now matches the social optimum. (A) applies to taxes on goods without externalities — those taxes create new distortions. A Pigouvian tax corrects an existing one.",
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
      "With a positive externality, marginal social benefit exceeds marginal private benefit. The market only reflects private benefit, so it settles at a price that's too high relative to social value — pricing out some buyers who would generate real social gains — and a quantity that falls short of the optimum. A subsidy would lower the effective price and push quantity toward the socially optimal level. (B) describes the negative externality pattern.",
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
      "A **club good** (sometimes called a toll good) is non-rival up to a congestion point but excludable — providers can restrict access to paying members. HBO Max, a private golf course, a gated community swimming pool. (A) requires both non-rivalry and non-excludability; excludability knocks it out. (D) is rival but non-excludable — the opposite combination.",
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
      "Common resources are rival (one cow eating grass means less grass for the next cow) but non-excludable (herders can't be kept off the open pasture). Each herder captures the full private benefit of adding another cow while sharing the overgrazing cost with everyone else. That asymmetry drives overuse even though collective restraint would make everyone better off. Garrett Hardin laid this out in his famous 1968 essay. (A) is wrong because if the pasture were non-rival, overgrazing wouldn't be a problem in the first place.",
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
      "Non-excludability is the core problem. The firm cannot block passing ships from seeing the beam, so captains have no reason to pay voluntarily. Without revenue, the firm can't cover costs. (A) is wrong because lighthouse light is non-rival — multiple ships benefit simultaneously without reducing the resource for others. (D) makes no sense; lighthouses aren't consumer goods with income elasticity.",
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
      "Market failure caused by the free-rider problem. Non-excludability means private firms can't charge users, so production falls short of (or never reaches) the level society collectively wants. Governments solve this through compulsory taxation — everyone pays, everyone benefits. (A) is incorrect; governments aren't necessarily cheaper producers; the issue is revenue collection, not production efficiency. (D) confuses public goods with externalities entirely.",
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
      "$14 million in benefits minus $10 million in costs equals $4 million in net social benefit. Build it. (A) focuses on affordability per person, which is a distributional question, not the efficiency criterion cost-benefit analysis uses. (C) is too sweeping — not every park justifies its price tag; you need the specific numbers to decide. (D) invokes a jobs argument that ignores opportunity cost; $10 million spent elsewhere would also create jobs.",
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
      "Because public goods are non-rival, every consumer enjoys the same unit simultaneously. To find total social benefit at any given quantity, add up what each individual is willing to pay for that unit — that's vertical summation of individual marginal benefit curves. Contrast this with private goods, where market demand comes from horizontal summation (adding quantities at each price). (D) describes the private good method. (A) only captures one person's valuation and ignores everyone else. (B) is a statistical average with no role in the correct aggregation method.",
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
      "Two forces compound the problem. Non-excludability means firms can't charge non-payers, killing the revenue stream. Consumers strategically understate how much they value the good — why admit you'd pay $50 for flood protection when you can free-ride on your neighbor's payment? Both forces together push private provision far below the socially optimal quantity. (B) states the opposite of reality; consumers actively conceal their true preferences for public goods precisely because they can benefit without paying. (A) is wrong because the problem is about incentives and revenue, not production capability.",
  },
];
