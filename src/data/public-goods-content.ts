import type { PracticeQuestion } from "@/data/supply-demand-content";

export const publicGoodsContent = {
  title: "Public Goods & Externalities",
  subtitle:
    "Toggle the tax and subsidy controls on the graph — watch deadweight loss shrink to zero when the price signal finally reflects full social costs",
  sections: [
    {
      heading: "Negative Externalities",
      content: `Two supply curves on the graph. The lower one is private supply, the upper one is social cost. That vertical gap between them — that's the external cost per unit, and it's the whole story.

A coal plant generates electricity and dumps sulfur dioxide into the atmosphere. Communities downwind end up with higher asthma rates. They never signed up for that cost.

The uncompensated damage imposed on third parties is a **negative externality**. The factory looks at its own production costs — labor, fuel, machinery — when deciding how much to produce. It ignores the health damage it inflicts on everybody else. The factory's own costs are the **marginal private cost (MPC)**. Tack on the external damage and you get the **marginal social cost (MSC)**, which is always higher when a negative externality exists.

Because MSC sits above MPC, the market price ends up too low and quantity produced too high. The market **overproduces** relative to the social optimum. On the graph, look at where demand crosses private supply versus where it crosses the social cost curve — that quantity gap is the overproduction, and the shaded triangle between the two intersections represents deadweight loss. Every unit produced in that gap costs society more than the benefit it generates, but the market cranks them out anyway because the firm doesn't see those costs on its books.

Carbon emissions from driving, noise from late-night construction next to apartment buildings, secondhand cigarette smoke, antibiotic resistance driven by overuse in livestock feed — all negative externalities, all producing that same pattern on the graph.`,
    },
    {
      heading: "Positive Externalities",
      content: `Flip to the demand side of the graph. Two demand curves this time — private demand below, social benefit above. The gap is the external benefit per unit.

Getting a flu vaccine protects you directly. Obviously. But it also protects everyone you'd otherwise sneeze on — your coworker in the next cubicle, the elderly neighbor you wave to every morning, the immunocompromised person on the bus. They get a benefit they never paid for.

That spillover to third parties is a **positive externality**. The buyer weighs only their own benefit — skipping a week of fever and body aches — and ignores the broader social gain their vaccination provides. The buyer's personal gain is the **marginal private benefit (MPB)**. Add in the benefit to everyone else and you get the **marginal social benefit (MSB)**.

MSB exceeds MPB, so the market price is too high and the quantity consumed too low. The market **underproduces**. On the graph, the social benefit curve floats above private demand, and the equilibrium quantity falls short of where MSB intersects supply.

Education is probably the most cited example. A more educated worker earns more (that's the private benefit), but a more educated workforce also means higher productivity across firms that hire those workers, lower crime rates, and stronger civic participation — benefits that don't appear on anyone's tuition bill. R&D spending by tech companies generates knowledge spillovers that competitors and other industries can build on. Beekeepers whose bees pollinate neighboring farms produce an external benefit the beekeeper can't capture in honey prices. Home renovations that lift an entire block's property values also fit the pattern.`,
    },
    {
      heading: "Pigouvian Taxes and Subsidies",
      content: `Toggle the tax control on the graph. The private supply curve jumps up to meet the social cost curve. Deadweight loss vanishes.

Markets overproduce when there's a negative externality and underproduce when there's a positive one. Arthur Pigou, writing at Cambridge in 1920, proposed the fix that economists still rely on: make people face the full social cost or benefit of their actions through prices.

A **Pigouvian tax** is a per-unit tax set equal to the external cost. Factory inflicts $15 of pollution damage per unit of output — tax each unit $15. The firm's private cost rises to match social cost. Supply curve shifts up until it overlaps with MSC. The market produces the socially optimal quantity on its own after that. No banning, no mandates.

A **Pigouvian subsidy** handles the positive externality case. Flu vaccines generate $15 of external benefit per dose — subsidize each dose by $15. Effective demand rises to match social benefit. Toggle the subsidy control on the graph and watch private demand climb up to meet the social benefit curve.

The appeal of the Pigouvian approach is that it uses the market to fix the market. Adjust prices so that self-interested decisions lead to the socially optimal outcome — no central planner picking quantities, no prohibition. British Columbia introduced a carbon tax in 2008 at $10 per ton of CO2 and gradually raised it to $65 by 2023. Revenue-neutral by design: the province cut income and business taxes by equivalent amounts. That's a Pigouvian tax working in the real world, not just on a chalkboard.`,
    },
    {
      heading: "Public Goods and the Free-Rider Problem",
      content: `A lighthouse sends its beam across the ocean. Every passing ship benefits, whether the captain paid for upkeep or not. You can't block one vessel from seeing the light. And one ship using it doesn't dim it for the next.

**Public goods** have two defining properties:

**Non-excludable** — you can't keep non-payers from consuming the good. **Non-rival** — one person's consumption doesn't reduce what's available for anyone else.

National defense is the standard example on every AP exam. The military protects every person in the country at once (non-rival), and there's no way to defend selected citizens while leaving others exposed (non-excludable). Street lighting works the same way. Public fireworks on the Fourth of July. Open-source software like Linux — anyone can download and run it without reducing its availability. Basic scientific research funded by government agencies also qualifies, since published findings are available to everyone.

If you benefit whether you pay or not, why would you pay? The **free-rider problem**. Everybody wants the good, everybody has an incentive to let somebody else cover the tab. If enough people free-ride, the good never gets produced — or it gets produced at a fraction of the quantity society actually wants.

Private markets fail here because there's no revenue mechanism. Governments fund public goods through compulsory taxation instead — your tax dollars pay for defense, parks, and flood levees whether you personally asked for them or not. The compulsion is the point. It solves the free-rider problem by eliminating the option to opt out of payment.`,
    },
    {
      heading: "The Coase Theorem and Property Rights",
      content: `A rancher's cattle trample a neighboring farmer's crops. The rancher profits. The farmer loses. Straightforward negative externality. Ronald Coase argued in a famous 1960 paper that under certain conditions, the government doesn't need to get involved at all.

The **Coase theorem**: if property rights are well-defined and transaction costs are low, private parties can negotiate to the efficient outcome regardless of who initially holds the rights.

Give the farmer the legal right to undamaged crops. The rancher will offer payment for grazing permission — but only up to the amount the rancher actually gains from grazing. If that gain exceeds the farmer's crop damage, they strike a deal and both end up better off. If not, the cattle stay penned. Efficient either way.

Now flip the rights — the rancher has the legal right to let cattle roam. The farmer offers to pay the rancher to pen them, up to the value of avoided crop damage. Same efficient allocation of resources, just different distribution of money.

In practice, though, Coase hits hard limits fast. **Transaction costs** can be enormous — try getting 200,000 people affected by factory pollution across an industrial corridor into a room to negotiate. Property rights are sometimes unclear (who owns the air above a smokestack?). Power imbalances warp the bargaining. So for large-scale externalities — climate change involves billions of people across every country on the planet — Pigouvian taxes and direct regulation remain the go-to tools. Coase works beautifully in two-party disputes with clear property lines and low negotiating costs, and it breaks down almost everywhere else.`,
    },
    {
      heading: "Worked Example: Calculating the Optimal Pigouvian Tax",
      content: `Follow along with the graph. A factory produces widgets with private supply (MPC) given by **P = 10 + 0.7Q** and market demand **P = 90 - 0.8Q**. Each widget generates $15 of pollution damage to nearby communities.

**Market equilibrium.** Set MPC = Demand:

10 + 0.7Q = 90 - 0.8Q
1.5Q = 80
**Q_market = 53.3 units**
**P_market = 10 + 0.7(53.3) = $47.33**

That intersection on the graph is where the market settles when no one accounts for the $15 external cost.

**Social cost curve.** MSC = MPC + external cost:

MSC = (10 + 0.7Q) + 15 = **25 + 0.7Q**

The upper curve on the graph sits exactly $15 above the lower one at every quantity. Parallel shift.

**Socially optimal outcome.** Set MSC = Demand:

25 + 0.7Q = 90 - 0.8Q
1.5Q = 65
**Q_optimal = 43.3 units**
**P_optimal = 90 - 0.8(43.3) = $55.33**

**Deadweight loss** from the externality (the shaded triangle):

DWL = 0.5 x (Q_market - Q_optimal) x (external cost)
DWL = 0.5 x (53.3 - 43.3) x 15 = **$75**

**Pigouvian tax.** Set it at $15 per widget — equal to the external cost. Toggle the tax on the graph: private supply jumps up by $15 and lands right on top of the MSC curve. The new market equilibrium matches the social optimum. Deadweight loss disappears.

Verification: with the $15 tax baked in, the new supply curve is P = 25 + 0.7Q, which is identical to MSC. The market corrects itself.`,
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
      "The fisheries bear genuine costs — contaminated water, damaged catch — from production they were never part of. Negative externality by definition. (A) confuses the plant's employment with the pollution spillover; jobs are a private market outcome, not the externality at issue. (D) gets the relationship completely backwards; the fishers are victims of the pollution, not free-riders benefiting from the plant.",
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
      "Social benefit exceeds private benefit. Buyers weigh only their own gain, so they purchase less than society would want. Underproduction. (A) describes negative externalities — that's the overproduction case.",
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
      "The tax closes the gap between private and social cost. That gap is the external cost per unit — the vertical distance between the two supply curves on the graph. Set the tax equal to that distance and private cost jumps up to match social cost. (A) misidentifies the goal; it's allocative efficiency, not revenue maximization. (B) would double-count private costs the firm already pays.",
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
      "National defense is non-rival (protecting one citizen doesn't reduce protection for anyone else) and non-excludable (you can't selectively leave some citizens undefended). Toll roads are excludable — non-payers get blocked at the booth. Netflix is excludable through login credentials. Bread is both rival and excludable. Private good through and through.",
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
      "Non-excludability means people enjoy the benefit without paying for it. If enough people free-ride, no private firm can generate sufficient revenue to justify producing the good. It gets underproduced or skipped entirely. (A) describes the negative externality outcome, not the public good problem. (C) has no logical basis — monopoly power doesn't solve the excludability issue that drives the free-rider problem.",
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
      "Clear property rights plus low bargaining costs — those are the two conditions Coase requires. Parties negotiate their way to efficiency without government intervention. (A) is Pigou's approach, not Coase's. (C) actually undermines Coasean bargaining; more parties means higher transaction costs, which is exactly what causes the theorem to fail.",
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
      "Toggle the tax on the graph and the deadweight loss triangle disappears. The $20 tax shifts supply up by exactly the external cost, making private cost equal to social cost. The market equilibrium now sits at the socially optimal point. (A) applies to taxes on goods without externalities — those create new distortions. A Pigouvian tax corrects an existing distortion rather than creating one.",
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
      "With a positive externality, marginal social benefit exceeds marginal private benefit. The market only reflects private benefit, settling at a price that's too high relative to social value — which prices out buyers who would generate genuine social gains — and a quantity that falls short of the optimum. A subsidy would lower the effective price and push quantity toward where society wants it. (B) describes the negative externality pattern, which is the reverse.",
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
      "A **club good** (also called a toll good) is non-rival up to a congestion point but excludable — the provider can restrict access to paying members. HBO, a private golf course, a gated community pool. (A) requires both non-rivalry and non-excludability; excludability disqualifies it. (D) is the opposite combination — rival but non-excludable.",
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
      "Common resources are rival (one cow eating the grass leaves less for the next cow) but non-excludable (herders can't be fenced out of open pasture). Each herder captures the full private benefit of adding another cow but shares the overgrazing damage with everyone else. That lopsided incentive drives overuse even though collective restraint would make everyone better off — exactly what Garrett Hardin described in his 1968 essay. (A) is wrong because if the pasture were non-rival, overgrazing wouldn't be an issue in the first place.",
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
      "Non-excludability is the problem. The firm can't block passing ships from seeing the beam, so captains have no reason to pay. Without revenue, the firm can't cover operating costs. (A) is wrong because lighthouse light is non-rival — hundreds of ships can use it simultaneously without diminishing it. (D) doesn't make sense; lighthouses aren't consumer goods with income elasticity.",
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
      "The free-rider problem is the market failure that triggers government involvement. Non-excludability means private firms can't charge users, so the good gets underproduced or never produced at all. Governments use compulsory taxation to solve the revenue problem — everyone pays, everyone benefits. (A) is wrong because governments aren't necessarily cheaper producers; the issue is revenue collection, not production cost. (D) confuses public goods with externalities — two different concepts entirely.",
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
      "$14 million in benefits minus $10 million in costs equals $4 million in net social benefit. Build it. (A) focuses on individual affordability, which is a distributional question rather than the efficiency criterion that cost-benefit analysis actually uses. (C) is too sweeping — whether a park justifies its cost depends on the specific numbers, not a blanket rule. (D) invokes a jobs argument that ignores opportunity cost; $10 million spent differently would also create employment.",
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
      "Public goods are non-rival, meaning every consumer enjoys the same unit at the same time. To find total social benefit at any given quantity, you add up what each person is willing to pay for that unit — that's vertical summation. This is different from private goods, where market demand comes from horizontal summation (adding quantities at each price). (D) is the private good method. (A) captures only one person's valuation and ignores everyone else who also benefits simultaneously. (B) is a statistical average that doesn't correspond to any standard aggregation procedure in economics.",
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
      "Two forces compound each other. Non-excludability means firms can't charge non-payers, which destroys the revenue stream. On top of that, consumers strategically understate how much they value the good — why admit you'd pay $50 for flood protection if you can free-ride on your neighbor's contribution? Together, these forces push private provision far below the socially optimal level. (B) states the opposite of reality; consumers actively conceal their true preferences for public goods precisely because they can benefit without paying. (A) misidentifies the problem — it's about incentives and revenue, not production capability.",
  },
];
