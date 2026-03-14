import type { Flashcard } from "@/components/ui/FlashcardDeck";

export const basicConceptsFlashcards: Flashcard[] = [
  {
    id: "bc-f1",
    front: "Scarcity",
    back: "The fundamental economic problem that unlimited wants exceed limited resources, forcing societies to make choices about how to allocate resources.",
  },
  {
    id: "bc-f2",
    front: "Opportunity Cost",
    back: "The value of the next best alternative forgone when making a choice. It represents the true cost of any decision in economics.",
  },
  {
    id: "bc-f3",
    front: "Production Possibilities Curve",
    back: "A graph showing all maximum combinations of two goods an economy can produce with its available resources. Points inside the curve are inefficient; points outside are unattainable.",
  },
  {
    id: "bc-f4",
    front: "Marginal Analysis",
    back: "Decision-making by comparing the additional (marginal) benefit of an action to its additional (marginal) cost. Rational agents act when marginal benefit exceeds marginal cost.",
  },
  {
    id: "bc-f5",
    front: "Comparative Advantage",
    back: "The ability to produce a good at a lower opportunity cost than another producer. It is the basis for mutually beneficial trade between individuals or nations.",
  },
  {
    id: "bc-f6",
    front: "Absolute Advantage",
    back: "The ability to produce more of a good using the same amount of resources as another producer. Having absolute advantage does not determine who should specialize.",
  },
];

export const supplyDemandFlashcards: Flashcard[] = [
  {
    id: "sd-f1",
    front: "Law of Demand",
    back: "As the price of a good rises, the quantity demanded falls, ceteris paribus. This inverse relationship creates a downward-sloping demand curve.",
  },
  {
    id: "sd-f2",
    front: "Law of Supply",
    back: "As the price of a good rises, the quantity supplied rises, ceteris paribus. This direct relationship creates an upward-sloping supply curve.",
  },
  {
    id: "sd-f3",
    front: "Equilibrium Price",
    back: "The price at which quantity demanded equals quantity supplied. At this price, there is no shortage or surplus and the market clears.",
  },
  {
    id: "sd-f4",
    front: "Shift vs. Movement",
    back: "A change in price causes movement along a curve (change in quantity). A change in a non-price determinant (income, tastes, input costs) shifts the entire curve.",
  },
  {
    id: "sd-f5",
    front: "Price Ceiling",
    back: "A legal maximum price set below equilibrium. It creates a shortage because quantity demanded exceeds quantity supplied. Example: rent control.",
  },
  {
    id: "sd-f6",
    front: "Price Floor",
    back: "A legal minimum price set above equilibrium. It creates a surplus because quantity supplied exceeds quantity demanded. Example: minimum wage.",
  },
];

export const elasticityFlashcards: Flashcard[] = [
  {
    id: "el-f1",
    front: "Price Elasticity of Demand",
    back: "Measures how responsive quantity demanded is to a change in price. Calculated as the percentage change in quantity demanded divided by the percentage change in price.",
  },
  {
    id: "el-f2",
    front: "Elastic vs. Inelastic",
    back: "Elastic demand (|Ed| > 1) means quantity changes more than price; inelastic (|Ed| < 1) means quantity changes less. Unit elastic (|Ed| = 1) means they change proportionally.",
  },
  {
    id: "el-f3",
    front: "Total Revenue Test",
    back: "If demand is elastic, a price decrease raises total revenue. If inelastic, a price decrease lowers total revenue. This test helps firms set optimal prices.",
  },
  {
    id: "el-f4",
    front: "Determinants of Elasticity",
    back: "Demand is more elastic when there are close substitutes, the good is a luxury, spending is a large share of income, or consumers have more time to adjust.",
  },
  {
    id: "el-f5",
    front: "Cross-Price Elasticity",
    back: "Measures how quantity demanded of one good responds to a price change in another. Positive values indicate substitutes; negative values indicate complements.",
  },
  {
    id: "el-f6",
    front: "Income Elasticity of Demand",
    back: "Measures how quantity demanded responds to a change in consumer income. Positive values indicate normal goods; negative values indicate inferior goods.",
  },
];

export const consumerChoiceFlashcards: Flashcard[] = [
  {
    id: "cc-f1",
    front: "Utility",
    back: "The satisfaction or benefit a consumer receives from consuming a good or service. Economists assume consumers seek to maximize total utility.",
  },
  {
    id: "cc-f2",
    front: "Diminishing Marginal Utility",
    back: "As a consumer consumes more units of a good, the additional satisfaction from each extra unit tends to decrease. This explains the downward-sloping demand curve.",
  },
  {
    id: "cc-f3",
    front: "Utility Maximization Rule",
    back: "Consumers maximize utility when the marginal utility per dollar spent is equal across all goods: MU_A/P_A = MU_B/P_B for goods A and B.",
  },
  {
    id: "cc-f4",
    front: "Budget Constraint",
    back: "A line showing all combinations of two goods a consumer can afford given their income and the prices of the goods. Its slope equals the negative price ratio (-P_X/P_Y).",
  },
  {
    id: "cc-f5",
    front: "Substitution Effect",
    back: "When a good's price falls, consumers buy more of it because it is now relatively cheaper compared to other goods, regardless of any change in purchasing power.",
  },
  {
    id: "cc-f6",
    front: "Income Effect",
    back: "When a good's price falls, consumers' real purchasing power increases, allowing them to buy more of all normal goods. Combined with the substitution effect, it explains demand curves.",
  },
];

export const productionCostsFlashcards: Flashcard[] = [
  {
    id: "pc-f1",
    front: "Marginal Product",
    back: "The additional output produced by hiring one more unit of a variable input (usually labor). It initially rises due to specialization, then falls due to diminishing returns.",
  },
  {
    id: "pc-f2",
    front: "Diminishing Marginal Returns",
    back: "As more of a variable input is added to a fixed input, the marginal product of the variable input eventually declines. This is a short-run phenomenon.",
  },
  {
    id: "pc-f3",
    front: "Marginal Cost",
    back: "The additional cost of producing one more unit of output. The MC curve is U-shaped and intersects ATC and AVC at their minimum points.",
  },
  {
    id: "pc-f4",
    front: "Average Total Cost",
    back: "Total cost divided by quantity of output (ATC = TC/Q). It equals average fixed cost plus average variable cost and is U-shaped in the short run.",
  },
  {
    id: "pc-f5",
    front: "Economies of Scale",
    back: "Long-run decreases in average total cost as a firm increases its scale of production. They arise from specialization, bulk purchasing, and spreading fixed costs.",
  },
  {
    id: "pc-f6",
    front: "Explicit vs. Implicit Costs",
    back: "Explicit costs are direct monetary payments to resource owners. Implicit costs are the opportunity costs of using owner-supplied resources. Economic profit accounts for both.",
  },
];

export const perfectCompetitionFlashcards: Flashcard[] = [
  {
    id: "pcomp-f1",
    front: "Perfect Competition Characteristics",
    back: "Many small firms, identical products, perfect information, and free entry/exit. Individual firms are price takers who face a perfectly elastic demand curve.",
  },
  {
    id: "pcomp-f2",
    front: "Profit Maximization Rule",
    back: "All firms maximize profit (or minimize loss) by producing where marginal revenue equals marginal cost (MR = MC), as long as price covers average variable cost.",
  },
  {
    id: "pcomp-f3",
    front: "Shutdown Rule",
    back: "A firm should shut down in the short run if price falls below average variable cost (P < AVC), because it cannot even cover its variable costs of production.",
  },
  {
    id: "pcomp-f4",
    front: "Long-Run Equilibrium",
    back: "In the long run, perfectly competitive firms earn zero economic profit. Price equals the minimum of average total cost (P = min ATC), and firms produce at efficient scale.",
  },
  {
    id: "pcomp-f5",
    front: "Allocative Efficiency",
    back: "Achieved when price equals marginal cost (P = MC). Resources are allocated to their highest-valued uses, and the socially optimal quantity is produced.",
  },
  {
    id: "pcomp-f6",
    front: "Productive Efficiency",
    back: "Achieved when firms produce at the minimum point of their average total cost curve (P = min ATC). No resources are wasted in production.",
  },
];

export const monopolyFlashcards: Flashcard[] = [
  {
    id: "mon-f1",
    front: "Monopoly Characteristics",
    back: "A single seller of a unique product with no close substitutes and high barriers to entry. The firm is a price maker and faces the entire market demand curve.",
  },
  {
    id: "mon-f2",
    front: "Monopoly Pricing",
    back: "A monopolist produces where MR = MC and charges the price on the demand curve above that quantity. Price exceeds marginal cost, creating allocative inefficiency.",
  },
  {
    id: "mon-f3",
    front: "Deadweight Loss (Monopoly)",
    back: "The loss in total surplus that occurs because a monopolist restricts output below the competitive level. It represents the value of trades that do not occur.",
  },
  {
    id: "mon-f4",
    front: "Barriers to Entry",
    back: "Obstacles that prevent new firms from entering a market, such as patents, control of key resources, high startup costs, or government licenses.",
  },
  {
    id: "mon-f5",
    front: "Natural Monopoly",
    back: "A market in which one firm can supply the entire quantity demanded at a lower average total cost than two or more firms. Often arises from very high fixed costs.",
  },
  {
    id: "mon-f6",
    front: "Price Discrimination",
    back: "Charging different prices to different consumers for the same good based on willingness to pay. It requires market power, ability to segment buyers, and prevention of resale.",
  },
];

export const monopolisticCompetitionFlashcards: Flashcard[] = [
  {
    id: "mc-f1",
    front: "Monopolistic Competition Characteristics",
    back: "Many firms sell differentiated products with free entry and exit. Each firm has a small degree of market power from product differentiation.",
  },
  {
    id: "mc-f2",
    front: "Product Differentiation",
    back: "Making a product distinct from competitors through branding, quality, features, or location. It gives firms a downward-sloping demand curve despite many competitors.",
  },
  {
    id: "mc-f3",
    front: "Short-Run Profits (Monopolistic)",
    back: "A monopolistically competitive firm can earn economic profit in the short run by producing where MR = MC and charging the corresponding price on its demand curve.",
  },
  {
    id: "mc-f4",
    front: "Long-Run Equilibrium (Monopolistic)",
    back: "Free entry and exit drive economic profit to zero. The demand curve becomes tangent to the ATC curve, so P = ATC but P > MC.",
  },
  {
    id: "mc-f5",
    front: "Excess Capacity",
    back: "In long-run equilibrium, monopolistically competitive firms produce below their efficient scale (left of minimum ATC). This is the cost of product variety.",
  },
  {
    id: "mc-f6",
    front: "Non-Price Competition",
    back: "Strategies such as advertising, branding, and product improvements used by firms to attract customers without lowering price. Common in monopolistic competition.",
  },
];

export const oligopolyFlashcards: Flashcard[] = [
  {
    id: "ol-f1",
    front: "Oligopoly Characteristics",
    back: "A market dominated by a few large firms whose decisions are interdependent. High barriers to entry exist, and products may be identical or differentiated.",
  },
  {
    id: "ol-f2",
    front: "Game Theory",
    back: "The study of strategic decision-making where each firm's optimal choice depends on rivals' actions. It explains why oligopolists may cooperate or compete.",
  },
  {
    id: "ol-f3",
    front: "Nash Equilibrium",
    back: "An outcome where no player can improve their payoff by unilaterally changing their strategy, given the other players' strategies. Neither firm has incentive to deviate.",
  },
  {
    id: "ol-f4",
    front: "Prisoner's Dilemma",
    back: "A game where each firm's dominant strategy leads to an outcome worse for both than if they cooperated. Explains why cartels tend to break down.",
  },
  {
    id: "ol-f5",
    front: "Collusion and Cartels",
    back: "When firms secretly agree to restrict output and raise prices to act like a monopoly. Cartels are illegal in the U.S. and inherently unstable because each member has incentive to cheat.",
  },
  {
    id: "ol-f6",
    front: "Kinked Demand Curve",
    back: "A model explaining price rigidity in oligopoly: rivals match price cuts but ignore price increases. This creates a kink in the demand curve and a gap in the MR curve.",
  },
];

export const factorMarketsFlashcards: Flashcard[] = [
  {
    id: "fm-f1",
    front: "Derived Demand",
    back: "The demand for a factor of production (like labor) is derived from the demand for the final good it helps produce. Higher product demand increases factor demand.",
  },
  {
    id: "fm-f2",
    front: "Marginal Revenue Product",
    back: "The additional revenue a firm earns from hiring one more unit of an input. MRP = Marginal Product x Marginal Revenue. It is the firm's demand curve for that input.",
  },
  {
    id: "fm-f3",
    front: "Profit-Maximizing Hiring Rule",
    back: "A firm should hire workers until the marginal revenue product of labor equals the wage rate (MRP_L = W). Hiring beyond this point reduces profit.",
  },
  {
    id: "fm-f4",
    front: "Monopsony",
    back: "A labor market with a single buyer of labor. The monopsonist pays a wage below MRP and hires fewer workers than a competitive market, creating deadweight loss.",
  },
  {
    id: "fm-f5",
    front: "Least-Cost Rule",
    back: "A firm minimizes cost when the marginal product per dollar is equal across all inputs: MP_L/P_L = MP_K/P_K for labor (L) and capital (K).",
  },
  {
    id: "fm-f6",
    front: "Economic Rent",
    back: "Payment to a factor of production above its opportunity cost. Land with a perfectly inelastic supply earns pure economic rent since its supply cannot be increased.",
  },
];

export const marketFailureFlashcards: Flashcard[] = [
  {
    id: "mf-f1",
    front: "Market Failure",
    back: "A situation where the free market fails to allocate resources efficiently, resulting in deadweight loss. Causes include externalities, public goods, and market power.",
  },
  {
    id: "mf-f2",
    front: "Negative Externality",
    back: "A cost imposed on a third party not involved in a transaction. The market overproduces the good because the social cost exceeds the private cost. Example: pollution.",
  },
  {
    id: "mf-f3",
    front: "Positive Externality",
    back: "A benefit received by a third party not involved in a transaction. The market underproduces the good because the social benefit exceeds the private benefit. Example: education.",
  },
  {
    id: "mf-f4",
    front: "Pigouvian Tax",
    back: "A per-unit tax set equal to the external cost of a negative externality. It internalizes the externality and moves the market to the socially optimal quantity.",
  },
  {
    id: "mf-f5",
    front: "Coase Theorem",
    back: "If property rights are well-defined and transaction costs are low, private parties can negotiate to resolve externalities efficiently regardless of initial rights assignment.",
  },
  {
    id: "mf-f6",
    front: "Socially Optimal Output",
    back: "The quantity where marginal social benefit equals marginal social cost (MSB = MSC). At this output, total surplus for society is maximized.",
  },
];

export const publicGoodsFlashcards: Flashcard[] = [
  {
    id: "pg-f1",
    front: "Public Good",
    back: "A good that is non-rivalrous (one person's use does not reduce availability) and non-excludable (no one can be prevented from using it). Example: national defense.",
  },
  {
    id: "pg-f2",
    front: "Free-Rider Problem",
    back: "When individuals benefit from a public good without paying for it, leading to under-provision by the private market. This is why governments often provide public goods.",
  },
  {
    id: "pg-f3",
    front: "Private Good",
    back: "A good that is both rivalrous and excludable. Most everyday market goods are private goods, and they can be efficiently allocated through markets.",
  },
  {
    id: "pg-f4",
    front: "Common Resource",
    back: "A good that is rivalrous but non-excludable. Overuse leads to the tragedy of the commons because no one can be excluded from consuming it. Example: ocean fisheries.",
  },
  {
    id: "pg-f5",
    front: "Club Good",
    back: "A good that is non-rivalrous but excludable. Providers can charge for access while many people consume it simultaneously. Example: streaming services or toll roads.",
  },
  {
    id: "pg-f6",
    front: "Tragedy of the Commons",
    back: "The overexploitation of a shared common resource because individuals acting in self-interest consume more than is socially optimal. Solutions include regulation, quotas, or property rights.",
  },
];

// Master lookup mapping module slugs to their flashcard arrays
export const microFlashcards: Record<string, Flashcard[]> = {
  "basic-concepts": basicConceptsFlashcards,
  "supply-and-demand": supplyDemandFlashcards,
  elasticity: elasticityFlashcards,
  "consumer-choice": consumerChoiceFlashcards,
  "production-costs": productionCostsFlashcards,
  "perfect-competition": perfectCompetitionFlashcards,
  monopoly: monopolyFlashcards,
  "monopolistic-competition": monopolisticCompetitionFlashcards,
  oligopoly: oligopolyFlashcards,
  "factor-markets": factorMarketsFlashcards,
  "market-failure": marketFailureFlashcards,
  "public-goods": publicGoodsFlashcards,
};
