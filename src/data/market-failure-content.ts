import type { PracticeQuestion } from "@/data/supply-demand-content";

export const marketFailureContent = {
  title: "Market Failure",
  subtitle:
    "Why free markets sometimes get the answer spectacularly, provably wrong",
  sections: [
    {
      heading: "When Markets Get It Wrong",
      content: `Free-market advocates will tell you that voluntary exchange always makes both parties better off. Skeptics will tell you that markets exploit workers, destroy the environment, and concentrate wealth. Surprisingly, introductory economics agrees with *both* sides — depending on the situation. Markets can be astonishingly efficient at allocating scarce resources. They can also fail completely, producing outcomes that leave society measurably worse off than it needs to be.

**Market failure** occurs when free markets, left alone, produce an outcome that isn't socially optimal. Resources get misallocated. Too much pollution. Too few vaccinations. Products whose true costs never show up on any price tag.

Four primary sources drive the problem:
- **Externalities** — costs or benefits that land on people who never agreed to the transaction
- **Public goods** — goods the market won't produce in sufficient quantity because nobody can be charged for consuming them
- **Information asymmetry** — one side of a deal knows something the other doesn't (George Akerlof won the 2001 Nobel Prize for formalizing this idea)
- **Market power** — when a single firm or a small group controls an entire market

Each one breaks a key assumption of perfect competition. When those assumptions break, equilibrium price and quantity no longer maximize society's welfare. The invisible hand fumbles.`,
    },
    {
      heading: "Externalities: Costs and Benefits That Spill Over",
      content: `A steel mill in Gary, Indiana belches sulfur dioxide into the air. The owners pay for coal, labor, and machinery. They do not pay for the asthma hospitalizations, the corroded buildings, or the dead forests their pollution causes. Those costs land on third parties who never agreed to the transaction and never saw a dime of the steel mill's profit. The gap between what the firm pays (**private cost**) and what society pays (**social cost**) is a **negative externality**.

When a negative externality exists, the market overproduces. Steel is too cheap because its price doesn't reflect the full damage. Buyers and sellers are perfectly happy at the market equilibrium — but society would be better off with less steel and less sulfur dioxide. The socially optimal quantity is lower than what the market delivers.

Positive externalities flip the story. You get a flu vaccine in October. You benefit directly, obviously. But so does your coworker, your elderly neighbor, the stranger sitting next to you on the bus — because you're less likely to spread the virus to any of them. That spillover benefit is a **positive externality**.

With a positive externality, the market underproduces. Not enough people get vaccinated because each person weighs only their own benefit against the cost, ignoring the benefit they confer on everyone around them. The **social benefit** exceeds the **private benefit**, so the socially optimal quantity is higher than what the market provides.

The pattern: negative externalities mean *too much* production, positive externalities mean *too little*. If a free-response question describes a factory polluting a river and you write that the market "underproduces," that answer is dead wrong.`,
    },
    {
      heading: "Public Goods and the Free-Rider Problem",
      content: `A Fourth of July fireworks display goes off over a city. Everyone in the area can see it, whether they contributed to the cost or not. You can't block one person's view without blocking everyone's. Your enjoyment doesn't reduce the show for the person standing next to you.

Two features define a **public good**:
- **Non-excludable** — you can't prevent non-payers from consuming it
- **Non-rivalrous** — one person's consumption doesn't reduce what's available for others

National defense is the textbook example. Once a country maintains a military, every resident is protected regardless of whether they paid taxes. A lighthouse warns every passing ship. Clean air. Public radio signals. Basic scientific research funded by the National Science Foundation. All share these two properties.

If you can enjoy the good without paying, why pay? That's the **free-rider problem**. Rational individuals wait for someone else to foot the bill. If everyone free-rides, no one pays and the good either never gets produced or gets produced in far too small a quantity.

Private markets can't solve this on their own. A fireworks company can't charge spectators because it has no way to exclude those who refuse to pay. The market fails to provide the good even though society collectively values it far above its cost. Governments typically step in, funding public goods through taxation. That's not ideology — it's a direct response to a specific, identifiable market failure.`,
    },
    {
      heading: "Information Asymmetry: The Market for Lemons",
      content: `You're shopping for a used car. The seller knows whether the car has been in a flood, whether the transmission slips on cold mornings, whether the engine burns oil. You don't know any of that. This imbalance — where one party in a transaction has significantly more information than the other — is **information asymmetry**. And it can unravel an entire market.

Economist George Akerlof demonstrated exactly how in his landmark 1970 paper on the **market for lemons**. Suppose half of all used cars are good ("peaches") worth $10,000, and half are defective ("lemons") worth $5,000. Buyers can't distinguish which is which, so they offer the average: $7,500.

The catch: owners of good cars know their vehicles are worth $10,000 and refuse to sell for $7,500. They pull out. The remaining pool is mostly lemons. Buyers notice and lower their offer. More good-car owners exit. The spiral continues until the market is dominated by lemons or collapses entirely. This is **adverse selection** — the "bad" products systematically drive out the "good" ones.

**Moral hazard** is the other side of information asymmetry. Here, one party changes their behavior *after* a deal is struck because the other party can't observe them. Buy comprehensive fire insurance and you might become less careful about fire safety — leaving candles burning, skipping electrical inspections — because the insurance company now bears the cost. The insurer can't watch you 24/7.

Real-world responses to these problems include warranties (the seller signals quality by bearing repair risk), Carfax and similar vehicle history reports (third-party information provision), occupational licensing for doctors and lawyers (government-certified competence), and mandatory disclosure laws like the SEC's financial reporting requirements.`,
    },
    {
      heading: "Market Power",
      content: `Your cable bill is $120 a month because in many American cities a single company provides broadband internet. No competitor to switch to. The firm charges well above its cost of production and you either pay or go without. That's **market power**: the ability to set prices above the competitive level.

In a perfectly competitive market, many firms sell identical products and no single firm influences the price. Competition pushes price down to marginal cost, firms earn zero economic profit in the long run, and consumers get maximum output at the lowest sustainable price.

A **monopoly** is the extreme case. One seller, no close substitutes, full control over output. The monopolist restricts production below the competitive level and charges a higher price, producing **deadweight loss** — transactions that would have benefited both buyer and seller never occur.

**Natural monopolies** arise when one firm can serve the entire market at lower average cost than two or more firms. Water utilities. Electric grids. Rail networks. Building two parallel sewer systems would be absurdly wasteful. The monopoly is efficient on the production side, but without regulation, the firm still exploits its pricing power to the detriment of consumers.

Market power doesn't have to be absolute to cause problems. **Oligopolies** — markets with a handful of dominant firms — can produce similarly inefficient outcomes. The U.S. airline industry, wireless carriers, and social media platforms all operate in markets where a few large players set the terms and smaller competitors struggle to gain traction. The result sits somewhere between the competitive ideal and monopoly, usually closer to the latter.`,
    },
    {
      heading: "What Government Can Do (and Sometimes Makes Worse)",
      content: `When markets fail, governments have several tools at their disposal:

- **Pigouvian taxes** raise the firm's private cost to match social cost by taxing pollution per unit. The market then naturally contracts to the socially optimal quantity. The European Union's carbon pricing system, launched in 2005, works on exactly this principle.
- **Subsidies** lower the price consumers face for goods with positive externalities, pushing consumption toward the socially optimal level — think subsidized flu shots or federal Pell Grants for college education
- **Regulation** sets emission limits, mandates disclosure, requires safety standards. Command-and-control rules directly cap harmful behavior, though they can be blunt instruments.
- **Tradable permits** create a fixed number of pollution allowances and let firms buy and sell them. Firms that can reduce emissions cheaply do so and sell their leftover permits to firms where cleanup is expensive. The pollution cap is met at the lowest total cost to the economy.
- **Public provision** means the government produces the good directly, funded by taxes. National defense, interstate highways, and basic research through agencies like the NIH and NSF.

Government intervention isn't automatically an improvement, though. **Government failure** occurs when intervention creates new inefficiencies or makes existing ones worse. Regulators may lack the information they need. Political pressure may redirect policy toward well-connected interest groups rather than the public. A poorly designed farm subsidy can encourage overproduction of corn that nobody wants. A rent ceiling can create housing shortages worse than the affordability problem it was trying to solve.

**Worked example:** A factory emits pollution causing $20 in health damages per unit of output. The government imposes a **Pigouvian tax** of $20 per unit. Before the tax, the firm produced 1,000 units at its private-cost equilibrium. After the tax, marginal cost rises by $20, and output falls to 800 units — the social-cost equilibrium. Those 200 units that are no longer produced had social costs exceeding their social benefits. Deadweight loss is eliminated. The tax revenue ($20 × 800 = $16,000) can fund cleanup or compensate those harmed.

The bottom line isn't that government always succeeds or always fails. Both markets *and* governments can misallocate resources. Smart policy design compares the imperfect market outcome against the imperfect government alternative and goes with whichever gets closer to efficiency.`,
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
      "The pollution forces costs onto downstream fisheries — parties not involved in the chemical plant's transactions. That's a textbook negative externality: social cost exceeds private cost, and the market overproduces the chemical. (A) is wrong because the jobs are a private benefit to the plant's workers, not a spillover benefit to uninvolved third parties. The harm to fisheries is the externality. (C) is wrong because the river is a common resource, not a public good, and the issue at hand is pollution cost, not the river's classification.",
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
      "Positive externalities mean social benefit exceeds private benefit. Consumers only consider their own gain when deciding how much to buy, so the market underproduces. Society would be better off with more. (A) describes the negative externality case, where the market overproduces. (B) would only hold if no externality existed at all.",
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
      "National defense is non-rivalrous (defending one citizen doesn't reduce defense for another) and non-excludable (you can't selectively leave some residents unprotected). Both properties must hold for a public good. (A) fails both tests — pizza is rivalrous and excludable. (B) is excludable via subscription. (D) is excludable via the toll.",
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
      "Buyers can't tell peaches from lemons, so they offer an average price. Owners of good cars find this average insulting and withdraw. The remaining pool skews toward lemons. Buyers adjust downward. More good-car owners leave. The cycle — adverse selection — can collapse the market entirely. (A) gets the mechanism backwards; the problem is buyers offering too *little* for good cars, not too much for bad ones. (B) is wrong because the lemons problem stems from information asymmetry, not government controls.",
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
      "Non-excludability is the culprit. If firms can't prevent non-payers from consuming, rational consumers free-ride and let others pay. If too many people free-ride, revenue dries up and the good never gets produced — or gets produced at far too low a level. (A) misidentifies the problem; even a cheap public good suffers from free-riding if people can't be excluded. Cost isn't the bottleneck. Revenue collection is.",
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
      "The tax is set equal to the marginal external cost per unit, which forces the firm's private cost up to match the social cost. The market then naturally cuts back to the socially optimal output level. (D) is wrong because the goal is *not* zero pollution — it's the *efficient* level, where the marginal social benefit of one more unit equals the marginal social cost. Some pollution is worth tolerating if the goods produced are valuable enough. (B) frames the tax as moral punishment, but it's a corrective tool aimed at efficiency, not ethics.",
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
      "Natural monopoly arises from cost structure: very high fixed costs and low marginal costs. One firm spreading those fixed costs across the entire market achieves a lower average cost than two or more firms splitting the same market ever could. Water utilities and electric grids are the classic examples. (A) describes a patent-based legal barrier, not a natural monopoly. (D) describes a government-granted monopoly. Both create monopolies, but through different mechanisms entirely. The distinction matters because natural monopolies are efficient on the production side — the problem is only on the pricing side.",
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
      "Moral hazard = changed behavior *after* a deal is struck because the other party can't fully observe you. A person with insurance uses more medical care because the insurer bears most of the cost. (A) is adverse selection — hidden information *before* the transaction, not changed behavior *after* it. That distinction is one of the most commonly tested points in AP Micro's market failure unit. (D) is the free-rider problem, which relates to public goods and positive externalities, not post-contract behavior changes.",
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
      "MSC = MPC + external cost = (20 + Q) + 30 = 50 + Q. Set MSC = Demand: 50 + Q = 120 − Q, giving 2Q = 70, Q = 35. For comparison, the unregulated market equilibrium would be MPC = Demand: 20 + Q = 120 − Q, so Q = 50. The market overproduces by 15 units because pollution costs never enter the firm's private calculation. (A) is the unregulated quantity — exactly the wrong answer. (C) splits the difference incorrectly. (D) exceeds even the market equilibrium, which would mean even *more* overproduction.",
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
      "The tax puts a price on the externality and lets firms decide how to respond. Firms that can cut pollution cheaply reduce emissions heavily and avoid the tax; firms where cleanup is expensive pay the tax instead. The same pollution target is met at the lowest total cost to the economy. A blanket regulation forces all firms to cut equally, regardless of their individual abatement costs. (A) is misleading; both approaches can eliminate the externality-related DWL — the tax's advantage is *cost-effectiveness*, not DWL elimination per se. (C) is wrong because neither policy aims for zero pollution. (D) is wrong because setting the correct Pigouvian tax *does* require knowledge of the marginal external cost.",
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
      "The Coase theorem requires low transaction costs and well-defined property rights. When millions of people are harmed by air pollution from a factory, getting all those people into a room to negotiate a private deal is essentially impossible. Transaction costs overwhelm any potential gains from bargaining. (A) describes a condition that *supports* the Coase theorem, not one that undermines it. (B) is the most favorable scenario for Coasean bargaining — fewer parties means lower transaction costs. (D) is irrelevant; the theorem applies to both negative and positive externalities equally.",
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
      "Non-rivalry and non-excludability are the two defining features. Defending one citizen doesn't reduce defense for others, and you can't selectively leave some residents unprotected. (A) confuses how the good is *provided* with what makes it a public good. Government provision is the *response* to the public goods problem, not the definition. (C) identifies a practical difficulty, but plenty of expensive goods are private goods. (D) describes a consequence of non-rivalry and non-excludability, not the classification criteria themselves.",
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
      "Cost-benefit analysis compares total social benefits to total social costs. 1,000 residents × $5 = $5,000 in total benefit versus $3,000 in cost — net benefit of $2,000, so the project should proceed. (The answer choice mentions $4 million, which appears to be a typo in the option text, but the logic is correct: benefits exceed costs.) (A) focuses on affordability, a distributional concern, not the efficiency criterion. (C) is too sweeping — not every park is worth building; each case depends on whether benefits exceed costs. (D) invokes a jobs argument that ignores opportunity cost; the $3,000 could create value elsewhere too.",
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
      "Positive externality means MSB > MPB, and the market underproduces. A per-unit subsidy equal to the marginal external benefit shifts the effective demand curve up to align with the social benefit curve, boosting consumption to the socially optimal level. (A) would make things worse — taxing a good that's already underproduced reduces output even further. (C) creates a shortage and could reduce quantity exchanged, worsening the underproduction problem. (D) locks in the current inefficient output instead of correcting it.",
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
      "Social optimum is where MSC = MSB. When there are no consumption externalities, the demand curve represents MSB. So the intersection of MSC and demand gives the socially optimal quantity — the point where net social welfare is maximized. (A) finds the unregulated market equilibrium, which overproduces when negative externalities exist because external costs are ignored. (C) makes no economic sense as an optimality condition — that intersection only identifies where external cost happens to equal zero. (D) finds the quantity where willingness to pay drops to zero, which has no welfare significance.",
  },
];
