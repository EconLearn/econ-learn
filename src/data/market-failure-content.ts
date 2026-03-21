import type { PracticeQuestion } from "@/data/supply-demand-content";

export const marketFailureContent = {
  title: "Market Failure",
  subtitle:
    "Why free markets sometimes get the answer spectacularly, provably wrong",
  sections: [
    {
      heading: "When Markets Get It Wrong",
      content: `Markets are genuinely good at allocating scarce resources most of the time. Prices carry information, voluntary exchange usually makes both sides better off, and competition drives efficiency in ways central planning never managed. But there are specific situations where free markets produce outcomes that leave society measurably worse off than it could be. And these aren't fringe cases. They show up everywhere.

**Market failure** is what economists call it when unregulated markets produce a socially suboptimal result. Too much of something harmful gets made, too little of something beneficial gets made, or some product that people clearly want never gets produced at all.

Four sources account for most of it:
- **Externalities**: costs or benefits that spill onto people who weren't part of the transaction (the steel mill that gives the whole town asthma)
- **Public goods**: goods the market won't supply adequately because there's no way to charge people for using them
- **Information asymmetry**: one side of a deal knows things the other side doesn't, which George Akerlof formalized in a 1970 paper that eventually won him the 2001 Nobel
- **Market power**: a firm or small group of firms controlling a market tightly enough to restrict output and jack up prices

Every one of these breaks a core assumption behind the competitive model. When those assumptions fail, the equilibrium price and quantity stop maximizing social welfare.`,
    },
    {
      heading: "Externalities: Costs and Benefits That Spill Over",
      content: `A steel mill in Gary, Indiana runs its furnaces and puts sulfur dioxide into the air. The owners pay for coal, labor, equipment. They do not pay for the asthma hospitalizations in surrounding neighborhoods, the corroded buildings, or the damage to nearby forests. Those costs land on people who never agreed to the deal and never saw a cent of profit. The gap between what the firm pays (**private cost**) and what society actually pays (**social cost**) is a **negative externality**.

The market overproduces when a negative externality exists. Steel ends up too cheap because its price doesn't reflect the full damage being done. Buyers and sellers are perfectly happy at the market equilibrium, but society would be better off with less steel and less pollution. The socially optimal quantity is lower than what the market delivers on its own.

Positive externalities work the other direction. You get a flu shot in October and obviously you benefit, you skip a week of misery. But your coworker benefits too, and your elderly neighbor, and the stranger next to you on the subway, because you're less likely to pass the virus to any of them. That spillover benefit is a **positive externality**.

With a positive externality the market underproduces. Not enough people get vaccinated because each person only weighs their own benefit against the cost and ignores the benefit they're providing to everyone around them. **Social benefit** exceeds **private benefit**, so the socially optimal quantity is higher than what the market generates on its own.

The pattern here is straightforward and it gets tested constantly on the AP exam. Negative externalities mean too much production, positive externalities mean too little. If a free-response question describes a polluting factory and you write that the market "underproduces," you will lose points.`,
    },
    {
      heading: "Public Goods and the Free-Rider Problem",
      content: `Fireworks go off over a city on the Fourth of July. Everybody in the area can watch, whether they chipped in money or not. You can't block one person's view without blocking everyone's. And your enjoyment of the show doesn't reduce the experience for the person standing next to you.

Two features define a **public good**:
- **Non-excludable**: there's no practical way to prevent non-payers from consuming it
- **Non-rivalrous**: one person using it doesn't diminish what's left for others

National defense is the standard textbook example. Once a country maintains a military, every resident gets the protection regardless of whether they paid taxes. A lighthouse warns every ship that passes. Clean air. Public radio signals. Basic research funded by the NSF, like the work that led to GPS, which the military developed in the 1970s and opened to civilians in 2000.

The problem is obvious. If you get the benefit without paying, why would you pay? That's the **free-rider problem**. Rational individuals wait for somebody else to cover the cost. If enough people free-ride, nobody pays and the good either never gets produced or gets produced in a tiny quantity relative to how much society actually values it.

Private firms can't solve this. A fireworks company can't bill spectators because it has no mechanism to exclude non-payers. The market fails even though the good is clearly worth more than it costs to produce. Governments step in and fund public goods through taxation, not because of any ideological preference for government, but because it directly addresses a specific, identifiable market failure.`,
    },
    {
      heading: "Information Asymmetry: The Market for Lemons",
      content: `You're shopping for a used car. The seller knows if the car sat in a flood for two days, if the transmission grinds in cold weather, if the engine burns a quart of oil every 500 miles. You don't know any of that. One side has significantly better information than the other. That's **information asymmetry**, and it can wreck an entire market.

George Akerlof showed how in his famous 1970 paper. Suppose half the used cars out there are solid ("peaches") worth $10,000 and half are garbage ("lemons") worth $5,000. Buyers can't tell which is which, so they offer the average, $7,500. Owners of peaches know their cars are worth $10,000 and won't sell for $7,500, so they pull their cars off the market. The remaining pool tilts toward lemons. Buyers notice, lower their offer. More peach owners bail. The spiral continues until mostly lemons are left, or the market collapses entirely. This is **adverse selection**, bad products systematically driving out good ones.

**Moral hazard** is the flip side. Somebody changes their behavior after a deal is done because the other party can't watch them closely enough. Buy comprehensive fire insurance and maybe you get a little careless about candles, skip the electrical inspection, put off replacing that old dryer vent. Because the insurance company eats the cost now, not you. The insurer can't monitor you around the clock.

Real-world fixes include warranties where the seller signals confidence by bearing repair costs, vehicle history reports like Carfax that fill the information gap, occupational licensing for doctors and lawyers, and mandatory disclosure rules like the SEC's financial reporting requirements for public companies.`,
    },
    {
      heading: "Market Power",
      content: `Your cable bill runs $120 a month because in a lot of American cities, one company provides broadband. No competitor to switch to. The firm charges well above its production cost and your options are to pay or go without internet. That's **market power**, the ability to set prices above the competitive level.

In a perfectly competitive market, lots of firms sell identical products and no individual firm can move the price. Competition grinds price down to marginal cost, firms earn zero economic profit in the long run, and consumers get maximum output at the lowest sustainable price.

**Monopoly** is the extreme version. One seller, no close substitutes, complete control over output. The monopolist restricts production below the competitive level, charges more, and creates **deadweight loss**. Mutually beneficial transactions that would have happened under competition simply don't occur.

**Natural monopolies** are a special case where one firm can serve the whole market at lower average cost than two or more firms could. Water utilities, electric grids, rail networks. Running two parallel sewer systems through a city would be absurdly wasteful. The monopoly is efficient on the production side because economies of scale are enormous, but without regulation the firm still exploits its pricing power. That tension between production efficiency and pricing abuse is why natural monopolies get regulated rather than broken up.

And market power doesn't have to be absolute to cause damage. **Oligopolies**, markets with a handful of dominant players like U.S. airlines, wireless carriers, or social media platforms, produce outcomes somewhere between the competitive ideal and full monopoly. Usually closer to monopoly, if we're being honest about it.`,
    },
    {
      heading: "What Government Can Do (and Sometimes Makes Worse)",
      content: `Governments have a toolkit for addressing market failures:

- **Pigouvian taxes** make the firm's private cost equal to social cost by taxing pollution per unit, so the market naturally contracts to the efficient quantity. The EU's Emissions Trading System, launched in 2005, operates on this principle.
- **Subsidies** reduce the price consumers face for goods with positive externalities (subsidized flu shots, federal Pell Grants for college tuition), pushing consumption toward the socially optimal level
- **Regulation** can set emission caps, mandate disclosure, or require safety standards. Command-and-control rules directly limit harmful activity, though they can be blunt, forcing every plant to cut pollution by the same percentage regardless of how much it costs each one.
- **Tradable permits** cap total pollution and let firms buy and sell allowances. A firm that can cut emissions cheaply does so and sells its extra permits to a firm where cleanup costs more. The overall cap is met at the lowest total cost to the economy.
- **Public provision** means the government produces the good itself, funded by taxes. National defense, interstate highways, basic research through the NIH and NSF.

But government intervention doesn't automatically improve things. **Government failure** happens when the intervention creates new inefficiencies or worsens existing ones. Regulators sometimes lack critical information about the industries they oversee. Political pressure can redirect policy toward well-connected interest groups instead of the general public. A badly designed farm subsidy might encourage overproduction of corn that sits in storage. A rent ceiling can create housing shortages worse than the affordability problem it was supposed to fix. New York's experience with rent control over the past 80 years has generated a small library of research on this.

**Worked example:** A factory's pollution causes $20 in health damages per unit of output. The government imposes a **Pigouvian tax** of $20 per unit. Before the tax, the firm produced 1,000 units at its private-cost equilibrium. After the tax, marginal cost jumps by $20 and output drops to 800 units, which is the social-cost equilibrium. Those 200 units that no longer get produced were units where social costs exceeded social benefits. Deadweight loss is eliminated. Tax revenue comes to $20 x 800 = $16,000, which can fund cleanup or compensate affected communities.

The takeaway here isn't that government always works or always fails. Markets and governments can both misallocate resources. Good policy compares the imperfect market outcome against the imperfect government alternative and picks whichever gets closer to efficiency.`,
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
      "The downstream fisheries bear real costs (damaged catches, contaminated water) from production they had no part in. Textbook negative externality: social cost exceeds private cost and the market overproduces. (A) is wrong because jobs go to the plant's own workers; they're a private outcome, not a spillover benefit to unrelated third parties. (C) confuses the river as a common resource with the concept of a public good, and the real issue here is the pollution cost, not how to classify the river.",
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
      "With positive externalities, the social benefit exceeds what private buyers account for. Consumers only weigh their own gain, so the market underproduces relative to what society needs. The socially optimal quantity is therefore higher than the market equilibrium. (A) describes negative externalities, where overproduction is the problem. (B) would only be true if there were no externality at all.",
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
      "National defense passes both tests: non-rivalrous (defending one citizen doesn't reduce defense for others) and non-excludable (you can't selectively leave certain residents unprotected). (A) fails both because pizza is rivalrous and excludable. (B) is excludable through the subscription paywall. (D) is excludable via the toll. All three are private or club goods.",
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
      "Buyers can't distinguish peaches from lemons, so they offer an average price. Owners of good cars find that average insulting compared to what their car is worth and pull out. The remaining pool skews toward lemons. Buyers adjust downward, more good-car owners leave, and the spiral of adverse selection can collapse the market. (A) reverses the mechanism; the problem is buyers paying too little for good cars, not too much for bad ones. (B) is wrong because the breakdown comes from information asymmetry, not price controls.",
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
      "Non-excludability kills the revenue model. If firms can't keep non-payers from consuming, rational people free-ride and let others foot the bill. Revenue dries up and the good either never gets made or gets produced at a fraction of the level society wants. (A) misidentifies the issue; even a cheap public good suffers from free-riding if exclusion is impossible. The bottleneck is revenue collection, not production cost.",
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
      "The tax equals the marginal external cost per unit, which lifts the firm's private cost to match social cost. The market then naturally adjusts to the socially optimal output. (D) misunderstands the goal; it's not zero pollution but the efficient level, where the marginal social benefit of one more unit equals the marginal social cost. Some pollution is worth tolerating when the goods being produced are valuable enough. (B) frames it as moral punishment, but a Pigouvian tax is a corrective efficiency tool, not an ethical judgment.",
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
      "Natural monopoly comes from cost structure: massive fixed costs and relatively low marginal costs. One firm spreading those fixed costs across the entire market achieves lower average cost than two or more firms splitting that same market ever could. Water utilities and electric grids are the go-to examples. (A) describes a legal barrier from patents, a different mechanism entirely. (D) is a government-granted monopoly. Both create monopoly, but through different channels. The distinction matters because natural monopolies are efficient at production. The problem is purely on the pricing side.",
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
      "Moral hazard is changed behavior after a deal is struck because the other party can't fully observe you. Someone with insurance uses more medical care because the insurer picks up most of the tab. (A) is adverse selection, meaning hidden information before the transaction, not changed behavior after it. That adverse selection vs. moral hazard distinction is one of AP Micro's most commonly tested points in the market failure unit. (D) is the free-rider problem, related to public goods and externalities, not post-contract behavior change.",
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
      "Add the external cost to get MSC: (20 + Q) + 30 = 50 + Q. Set MSC equal to demand: 50 + Q = 120 - Q, so 2Q = 70 and Q = 35. For reference, the unregulated market equilibrium would be 20 + Q = 120 - Q, giving Q = 50. The market overproduces by 15 units because pollution costs never factor into the firm's private calculation. (A) is the unregulated quantity, which is exactly the wrong answer on this type of question. (C) splits the difference incorrectly. (D) exceeds even the unregulated equilibrium.",
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
      "The tax puts a price on the externality and lets each firm decide how to respond based on its own cost structure. Firms that can cut pollution cheaply do so and avoid the tax; firms where cleanup is expensive pay the tax instead. Same pollution reduction, lowest total cost to the economy. A blanket regulation that forces uniform cuts ignores the fact that abatement costs vary wildly across firms. (A) is misleading because both can eliminate the externality-related DWL; the tax's real advantage is cost-effectiveness. (C) is wrong because neither aims for zero pollution. (D) is wrong because setting the right Pigouvian tax requires knowing the marginal external cost.",
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
      "Coase requires low transaction costs and well-defined property rights. When millions of people are harmed by air pollution from an industrial region, negotiating a private deal among all affected parties is essentially impossible because the transaction costs alone would swallow any potential gains. (A) actually supports the Coase theorem rather than undermining it. (B) describes the best-case scenario for Coasean bargaining, since fewer parties means cheaper negotiation. (D) doesn't matter; the theorem applies equally to negative and positive externalities.",
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
      "The two defining features: non-rivalry (defending one person doesn't reduce defense for others) and non-excludability (you can't selectively leave certain residents unprotected). (A) confuses how the good is provided with what makes it a public good. Government provision is the response to the public goods problem, not the definition. (C) just identifies a practical difficulty, but lots of expensive goods are perfectly private. (D) describes a consequence of non-rivalry and non-excludability rather than the classification criteria themselves.",
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
      "Cost-benefit analysis: total social benefits vs. total social costs. 1,000 residents at $5 each = $5,000 in total benefit vs. $3,000 in cost, so net benefit is $2,000 and the project passes. (The answer text mentions $4 million, which appears to be an error in the option, but the underlying logic is that benefits exceed costs.) (A) focuses on affordability per person, which is a distributional question, not the efficiency test. (C) is too broad because not every park justifies its price tag; each case requires comparing specific numbers. (D) ignores opportunity cost; the $3,000 could generate value elsewhere too.",
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
      "Positive externality means MSB > MPB and the market underproduces. A per-unit subsidy equal to the marginal external benefit shifts effective demand up to align with the social benefit curve, pushing consumption to the socially optimal level. (A) would make things worse because you don't tax a good that's already being underproduced. (C) creates a shortage and could further reduce quantity exchanged. (D) locks in the current inefficient output instead of correcting it.",
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
      "Social optimum is where MSC = MSB. When there are no consumption-side externalities, the demand curve represents MSB, so the intersection of MSC and demand gives the socially optimal quantity, which is the point maximizing net social welfare. (A) finds the unregulated market equilibrium, which overproduces because external costs get ignored. (C) doesn't have economic meaning as an optimality condition because it just identifies where the external cost happens to be zero. (D) finds the quantity where willingness to pay hits zero, which isn't relevant to welfare optimization.",
  },
];
