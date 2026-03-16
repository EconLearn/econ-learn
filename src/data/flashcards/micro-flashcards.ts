import type { Flashcard } from "@/components/ui/FlashcardDeck";

export const basicConceptsFlashcards: Flashcard[] = [
  {
    id: "bc-f1",
    front: "Scarcity",
    back: "The basic economic problem: unlimited wants but limited resources. Every society has to make choices about how to allocate what it has.",
  },
  {
    id: "bc-f2",
    front: "Opportunity Cost",
    back: "The value of the next best alternative you give up when making a choice. It's the true cost of any decision in economics.",
  },
  {
    id: "bc-f3",
    front: "Production Possibilities Curve",
    back: "A graph showing all the maximum combinations of two goods an economy can produce with its resources. Points inside the curve are inefficient; points outside are unattainable.",
  },
  {
    id: "bc-f4",
    front: "Marginal Analysis",
    back: "Making decisions by comparing the additional benefit of an action to its additional cost. Rational agents act when marginal benefit exceeds marginal cost.",
  },
  {
    id: "bc-f5",
    front: "Comparative Advantage",
    back: "The ability to produce a good at a lower opportunity cost than another producer. This is what makes mutually beneficial trade possible.",
  },
  {
    id: "bc-f6",
    front: "Absolute Advantage",
    back: "Being able to produce more of a good using the same resources as another producer. Important: this doesn't determine who should specialize.",
  },
];

export const supplyDemandFlashcards: Flashcard[] = [
  {
    id: "sd-f1",
    front: "Law of Demand",
    back: "As the price of a good rises, quantity demanded falls (all else equal). This inverse relationship is why the demand curve slopes downward.",
  },
  {
    id: "sd-f2",
    front: "Law of Supply",
    back: "As the price of a good rises, quantity supplied rises (all else equal). This direct relationship is why the supply curve slopes upward.",
  },
  {
    id: "sd-f3",
    front: "Equilibrium Price",
    back: "The price where quantity demanded equals quantity supplied. No shortage, no surplus. The market clears.",
  },
  {
    id: "sd-f4",
    front: "Shift vs. Movement",
    back: "A change in price causes movement along a curve (change in quantity). A change in a non-price factor (income, tastes, input costs) shifts the entire curve.",
  },
  {
    id: "sd-f5",
    front: "Price Ceiling",
    back: "A legal maximum price set below equilibrium. Creates a shortage because quantity demanded exceeds quantity supplied. Classic example: rent control.",
  },
  {
    id: "sd-f6",
    front: "Price Floor",
    back: "A legal minimum price set above equilibrium. Creates a surplus because quantity supplied exceeds quantity demanded. Classic example: minimum wage.",
  },
];

export const elasticityFlashcards: Flashcard[] = [
  {
    id: "el-f1",
    front: "Price Elasticity of Demand",
    back: "How responsive quantity demanded is to a price change. Calculated as % change in quantity demanded divided by % change in price.",
  },
  {
    id: "el-f2",
    front: "Elastic vs. Inelastic",
    back: "Elastic (|Ed| > 1): quantity changes more than price. Inelastic (|Ed| < 1): quantity changes less. Unit elastic (|Ed| = 1): they change proportionally.",
  },
  {
    id: "el-f3",
    front: "Total Revenue Test",
    back: "If demand is elastic, cutting the price raises total revenue. If demand is inelastic, cutting the price lowers it. Useful for firms setting prices.",
  },
  {
    id: "el-f4",
    front: "Determinants of Elasticity",
    back: "Demand is more elastic when close substitutes exist, the good is a luxury, it takes a big share of income, or consumers have more time to adjust.",
  },
  {
    id: "el-f5",
    front: "Cross-Price Elasticity",
    back: "How quantity demanded of one good responds to a price change in another. Positive = substitutes. Negative = complements.",
  },
  {
    id: "el-f6",
    front: "Income Elasticity of Demand",
    back: "How quantity demanded responds to a change in income. Positive = normal good. Negative = inferior good.",
  },
];

export const consumerChoiceFlashcards: Flashcard[] = [
  {
    id: "cc-f1",
    front: "Utility",
    back: "The satisfaction a consumer gets from consuming a good or service. Economists assume consumers try to maximize their total utility.",
  },
  {
    id: "cc-f2",
    front: "Diminishing Marginal Utility",
    back: "Each additional unit of a good gives you a little less satisfaction than the one before. This helps explain why demand curves slope downward.",
  },
  {
    id: "cc-f3",
    front: "Utility Maximization Rule",
    back: "Consumers maximize utility when the marginal utility per dollar is equal across all goods: MU_A/P_A = MU_B/P_B for goods A and B.",
  },
  {
    id: "cc-f4",
    front: "Budget Constraint",
    back: "A line showing all combinations of two goods a consumer can afford given income and prices. Its slope equals the negative price ratio (-P_X/P_Y).",
  },
  {
    id: "cc-f5",
    front: "Substitution Effect",
    back: "When a good's price falls, consumers buy more of it because it's now relatively cheaper compared to other goods, regardless of any purchasing power change.",
  },
  {
    id: "cc-f6",
    front: "Income Effect",
    back: "When a good's price falls, your real purchasing power increases, so you can buy more of all normal goods. Together with the substitution effect, this explains demand curves.",
  },
];

export const productionCostsFlashcards: Flashcard[] = [
  {
    id: "pc-f1",
    front: "Marginal Product",
    back: "The extra output from hiring one more unit of input (usually labor). It initially rises due to specialization, then falls due to diminishing returns.",
  },
  {
    id: "pc-f2",
    front: "Diminishing Marginal Returns",
    back: "As you add more of a variable input to a fixed input, the marginal product eventually declines. This is strictly a short-run phenomenon.",
  },
  {
    id: "pc-f3",
    front: "Marginal Cost",
    back: "The cost of producing one more unit. The MC curve is U-shaped and crosses both ATC and AVC at their minimum points.",
  },
  {
    id: "pc-f4",
    front: "Average Total Cost",
    back: "Total cost divided by quantity (ATC = TC/Q). Equals average fixed cost plus average variable cost. U-shaped in the short run.",
  },
  {
    id: "pc-f5",
    front: "Economies of Scale",
    back: "When average total cost falls as a firm scales up production. Comes from specialization, bulk purchasing, and spreading fixed costs over more units.",
  },
  {
    id: "pc-f6",
    front: "Explicit vs. Implicit Costs",
    back: "Explicit costs are actual payments to resource owners. Implicit costs are the opportunity costs of using your own resources. Economic profit accounts for both.",
  },
];

export const perfectCompetitionFlashcards: Flashcard[] = [
  {
    id: "pcomp-f1",
    front: "Perfect Competition Characteristics",
    back: "Many small firms, identical products, perfect information, free entry and exit. Each firm is a price taker facing a perfectly elastic demand curve.",
  },
  {
    id: "pcomp-f2",
    front: "Profit Maximization Rule",
    back: "All firms maximize profit (or minimize loss) by producing where MR = MC, as long as price covers average variable cost.",
  },
  {
    id: "pcomp-f3",
    front: "Shutdown Rule",
    back: "Shut down in the short run if price falls below average variable cost (P < AVC). At that point, you can't even cover your variable costs.",
  },
  {
    id: "pcomp-f4",
    front: "Long-Run Equilibrium",
    back: "In the long run, perfectly competitive firms earn zero economic profit. Price equals minimum ATC (P = min ATC), and firms produce at efficient scale.",
  },
  {
    id: "pcomp-f5",
    front: "Allocative Efficiency",
    back: "Achieved when P = MC. Resources go to their highest-valued uses, and the socially optimal quantity gets produced.",
  },
  {
    id: "pcomp-f6",
    front: "Productive Efficiency",
    back: "Achieved when firms produce at minimum ATC (P = min ATC). No resources are wasted in production.",
  },
];

export const monopolyFlashcards: Flashcard[] = [
  {
    id: "mon-f1",
    front: "Monopoly Characteristics",
    back: "One seller, unique product with no close substitutes, high barriers to entry. The firm is a price maker and faces the entire market demand curve.",
  },
  {
    id: "mon-f2",
    front: "Monopoly Pricing",
    back: "Produces where MR = MC, then charges the price on the demand curve above that quantity. Price exceeds MC, which means allocative inefficiency.",
  },
  {
    id: "mon-f3",
    front: "Deadweight Loss (Monopoly)",
    back: "The surplus lost because the monopolist restricts output below the competitive level. It's the value of trades that never happen.",
  },
  {
    id: "mon-f4",
    front: "Barriers to Entry",
    back: "Things that keep new firms out: patents, control of key resources, high startup costs, or government licenses.",
  },
  {
    id: "mon-f5",
    front: "Natural Monopoly",
    back: "A market where one firm can serve the whole market at lower average cost than two or more firms could. Usually arises from very high fixed costs.",
  },
  {
    id: "mon-f6",
    front: "Price Discrimination",
    back: "Charging different prices to different buyers for the same good, based on willingness to pay. Requires market power, the ability to segment buyers, and prevention of resale.",
  },
];

export const monopolisticCompetitionFlashcards: Flashcard[] = [
  {
    id: "mc-f1",
    front: "Monopolistic Competition Characteristics",
    back: "Many firms selling differentiated products with free entry and exit. Each firm has a small amount of market power from product differentiation.",
  },
  {
    id: "mc-f2",
    front: "Product Differentiation",
    back: "Making your product distinct through branding, quality, features, or location. It gives firms a downward-sloping demand curve even with many competitors.",
  },
  {
    id: "mc-f3",
    front: "Short-Run Profits (Monopolistic)",
    back: "In the short run, a monopolistically competitive firm can earn economic profit by producing where MR = MC and charging the price on its demand curve.",
  },
  {
    id: "mc-f4",
    front: "Long-Run Equilibrium (Monopolistic)",
    back: "Free entry and exit drive economic profit to zero. The demand curve becomes tangent to ATC, so P = ATC but P > MC.",
  },
  {
    id: "mc-f5",
    front: "Excess Capacity",
    back: "In the long run, these firms produce below efficient scale (left of minimum ATC). That's the tradeoff for having product variety.",
  },
  {
    id: "mc-f6",
    front: "Non-Price Competition",
    back: "Advertising, branding, and product improvements used to attract customers without cutting price. Very common in monopolistic competition.",
  },
];

export const oligopolyFlashcards: Flashcard[] = [
  {
    id: "ol-f1",
    front: "Oligopoly Characteristics",
    back: "A few large firms dominate the market, and their decisions are interdependent. High barriers to entry. Products can be identical or differentiated.",
  },
  {
    id: "ol-f2",
    front: "Game Theory",
    back: "The study of strategic decision-making where each firm's best move depends on what rivals do. It explains why oligopolists sometimes cooperate and sometimes compete.",
  },
  {
    id: "ol-f3",
    front: "Nash Equilibrium",
    back: "An outcome where no player can do better by changing strategy on their own, given what everyone else is doing. Neither firm has reason to deviate.",
  },
  {
    id: "ol-f4",
    front: "Prisoner's Dilemma",
    back: "A game where each firm's dominant strategy leads to a worse outcome for both than if they'd cooperated. This is why cartels tend to fall apart.",
  },
  {
    id: "ol-f5",
    front: "Collusion and Cartels",
    back: "Firms secretly agreeing to restrict output and raise prices, acting like a monopoly. Cartels are illegal in the U.S. and unstable because each member has incentive to cheat.",
  },
  {
    id: "ol-f6",
    front: "Kinked Demand Curve",
    back: "A model for price rigidity in oligopoly: rivals match your price cuts but ignore your price increases. Creates a kink in the demand curve and a gap in MR.",
  },
];

export const factorMarketsFlashcards: Flashcard[] = [
  {
    id: "fm-f1",
    front: "Derived Demand",
    back: "Demand for a factor of production (like labor) comes from demand for the final good it helps produce. More demand for the product means more demand for the input.",
  },
  {
    id: "fm-f2",
    front: "Marginal Revenue Product",
    back: "The extra revenue from hiring one more unit of input. MRP = Marginal Product x Marginal Revenue. It's the firm's demand curve for that input.",
  },
  {
    id: "fm-f3",
    front: "Profit-Maximizing Hiring Rule",
    back: "Hire workers until MRP of labor equals the wage rate (MRP_L = W). Hiring beyond that point costs more than the worker brings in.",
  },
  {
    id: "fm-f4",
    front: "Monopsony",
    back: "A labor market with just one buyer. The monopsonist pays below MRP and hires fewer workers than a competitive market would, creating deadweight loss.",
  },
  {
    id: "fm-f5",
    front: "Least-Cost Rule",
    back: "A firm minimizes cost when marginal product per dollar is equal across all inputs: MP_L/P_L = MP_K/P_K for labor (L) and capital (K).",
  },
  {
    id: "fm-f6",
    front: "Economic Rent",
    back: "Payment to a factor above its opportunity cost. Land with perfectly inelastic supply earns pure economic rent since its supply can't increase.",
  },
];

export const marketFailureFlashcards: Flashcard[] = [
  {
    id: "mf-f1",
    front: "Market Failure",
    back: "When the free market doesn't allocate resources efficiently, creating deadweight loss. Main causes: externalities, public goods, and market power.",
  },
  {
    id: "mf-f2",
    front: "Negative Externality",
    back: "A cost imposed on someone not involved in the transaction. The market overproduces because social cost exceeds private cost. Pollution is the classic example.",
  },
  {
    id: "mf-f3",
    front: "Positive Externality",
    back: "A benefit to someone not involved in the transaction. The market underproduces because social benefit exceeds private benefit. Education is the classic example.",
  },
  {
    id: "mf-f4",
    front: "Pigouvian Tax",
    back: "A per-unit tax equal to the external cost of a negative externality. It internalizes the externality and pushes the market to the socially optimal quantity.",
  },
  {
    id: "mf-f5",
    front: "Coase Theorem",
    back: "If property rights are clear and transaction costs are low, private parties can negotiate to solve externalities on their own, regardless of who starts with the rights.",
  },
  {
    id: "mf-f6",
    front: "Socially Optimal Output",
    back: "The quantity where marginal social benefit equals marginal social cost (MSB = MSC). This is where total surplus for society is maximized.",
  },
];

export const publicGoodsFlashcards: Flashcard[] = [
  {
    id: "pg-f1",
    front: "Public Good",
    back: "Non-rivalrous (one person using it doesn't reduce availability) and non-excludable (you can't stop anyone from using it). National defense is the go-to example.",
  },
  {
    id: "pg-f2",
    front: "Free-Rider Problem",
    back: "People benefit from a public good without paying, so the private market under-provides it. This is the main reason governments step in to supply public goods.",
  },
  {
    id: "pg-f3",
    front: "Private Good",
    back: "Both rivalrous and excludable. Most everyday goods you buy in a store are private goods, and markets handle them efficiently.",
  },
  {
    id: "pg-f4",
    front: "Common Resource",
    back: "Rivalrous but non-excludable. Gets overused because nobody can be kept out. Ocean fisheries are a textbook example (tragedy of the commons).",
  },
  {
    id: "pg-f5",
    front: "Club Good",
    back: "Non-rivalrous but excludable. Providers can charge admission while many people use it at once. Think streaming services or toll roads.",
  },
  {
    id: "pg-f6",
    front: "Tragedy of the Commons",
    back: "Shared resources get overexploited because each person acting in self-interest takes more than is socially optimal. Solutions: regulation, quotas, or assigning property rights.",
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
