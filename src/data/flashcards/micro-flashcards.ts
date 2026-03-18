import type { Flashcard } from "@/components/ui/FlashcardDeck";

export const basicConceptsFlashcards: Flashcard[] = [
  {
    id: "bc-f1",
    front: "Scarcity",
    back: "Unlimited wants, limited resources. Every economic problem traces back to this mismatch.",
  },
  {
    id: "bc-f2",
    front: "Opportunity Cost",
    back: "You skip a $15/hr shift to study — that $15/hr is the opportunity cost of studying. It's always the value of the next-best alternative you didn't choose, not all the alternatives combined. Common exam mistake: listing every forgone option instead of just the highest-valued one.",
  },
  {
    id: "bc-f3",
    front: "Production Possibilities Curve",
    back: "Inside = inefficient. On = efficient. Outside = unattainable with current resources.",
  },
  {
    id: "bc-f4",
    front: "Marginal Analysis",
    back: "Compare MB to MC for the next unit. Proceed if MB ≥ MC.",
  },
  {
    id: "bc-f5",
    front: "Comparative Advantage",
    back: "Not the same as absolute advantage — this is about who gives up less. Portugal might be better at making both wine and cloth, but if England's opportunity cost for cloth is lower, England should make cloth and trade. That's Ricardo's whole insight.",
  },
  {
    id: "bc-f6",
    front: "Absolute Advantage",
    back: "Producing more output with the same resources. Doesn't determine who should specialize — comparative advantage does.",
  },
];

export const supplyDemandFlashcards: Flashcard[] = [
  {
    id: "sd-f1",
    front: "Law of Demand",
    back: "Price ↑ → Qd ↓. Downward-sloping curve.",
  },
  {
    id: "sd-f2",
    front: "Law of Supply",
    back: "Coffee jumps to $8/lb and suddenly farmers are planting more coffee everywhere. Higher prices give producers an incentive to increase quantity supplied.",
  },
  {
    id: "sd-f3",
    front: "Equilibrium Price",
    back: "The price at which quantity supplied equals quantity demanded. No shortage, no surplus — the market clears.",
  },
  {
    id: "sd-f4",
    front: "Shift vs. Movement",
    back: "A price change causes movement along the curve. A change in something else (income, input costs, tastes) shifts the entire curve. Confusing these two is probably the most common mistake on supply-and-demand questions.",
  },
  {
    id: "sd-f5",
    front: "Price Ceiling",
    back: "NYC rent control: the city caps rent below equilibrium, so demand for apartments far exceeds what landlords supply. Result is a shortage.",
  },
  {
    id: "sd-f6",
    front: "Price Floor",
    back: "A legal minimum price — only binding if set above equilibrium. Creates a surplus. Minimum wage is the standard example: set the floor above the market wage and the quantity of labor supplied exceeds quantity demanded.",
  },
];

export const elasticityFlashcards: Flashcard[] = [
  {
    id: "el-f1",
    front: "Price Elasticity of Demand",
    back: "%ΔQd / %ΔP. Always negative, reported as absolute value.",
  },
  {
    id: "el-f2",
    front: "Elastic vs. Inelastic",
    back: "|Ed| > 1 means quantity responds more than proportionally to price. |Ed| < 1 means it barely budges. Insulin is a classic inelastic good; luxury vacation flights are elastic because people can just not go.",
  },
  {
    id: "el-f3",
    front: "Total Revenue Test",
    back: "Elastic demand: cut price → TR rises. Inelastic demand: cut price → TR falls. Unitary elastic: TR stays the same regardless of price change.",
  },
  {
    id: "el-f4",
    front: "Determinants of Elasticity",
    back: "Substitutes, luxury vs. necessity, budget share, time horizon.",
  },
  {
    id: "el-f5",
    front: "Cross-Price Elasticity",
    back: "Positive → substitutes. Negative → complements.",
  },
  {
    id: "el-f6",
    front: "Income Elasticity of Demand",
    back: "Positive for normal goods (restaurant meals), negative for inferior goods (instant ramen — you buy less of it once your income rises enough to afford real food). Watch out: a good can be normal at low income levels and inferior at high ones.",
  },
];

export const consumerChoiceFlashcards: Flashcard[] = [
  {
    id: "cc-f1",
    front: "Utility",
    back: "A measure of satisfaction or happiness from consumption.",
  },
  {
    id: "cc-f2",
    front: "Diminishing Marginal Utility",
    back: "The 1st slice of pizza might be worth $5 to you, the 4th maybe $1. Each additional unit consumed yields less additional satisfaction. This is why demand curves slope down.",
  },
  {
    id: "cc-f3",
    front: "Utility Maximization Rule",
    back: "MUa/Pa = MUb/Pb for all goods purchased.",
  },
  {
    id: "cc-f4",
    front: "Budget Constraint",
    back: "Slope = −Px/Py. Shows every affordable combination of two goods. Income increase shifts it outward; a price change rotates it.",
  },
  {
    id: "cc-f5",
    front: "Substitution Effect",
    back: "Not about income at all — purely about relative prices. When Coke gets cheaper relative to Pepsi, consumers substitute toward Coke. Isolate it by holding real purchasing power constant.",
  },
  {
    id: "cc-f6",
    front: "Income Effect",
    back: "A price drop makes your existing budget stretch further, as if your real income rose. For normal goods you buy more; for inferior goods you might actually buy less (Giffen goods are the extreme case).",
  },
];

export const productionCostsFlashcards: Flashcard[] = [
  {
    id: "pc-f1",
    front: "Marginal Product",
    back: "ΔTP / ΔL. Rises then falls.",
  },
  {
    id: "pc-f2",
    front: "Diminishing Marginal Returns",
    back: "A short-run concept only. With fixed capital, each additional worker eventually adds less output. Adding a 10th cook to a small kitchen just creates congestion.",
  },
  {
    id: "pc-f3",
    front: "Marginal Cost",
    back: "The cost of producing one additional unit. MC intersects ATC and AVC at their minimum points — a relationship students are constantly tested on.",
  },
  {
    id: "pc-f4",
    front: "Average Total Cost",
    back: "TC/Q. Falls then rises as output increases.",
  },
  {
    id: "pc-f5",
    front: "Economies of Scale",
    back: "Amazon ships millions of packages, spreading enormous fixed costs across each one. Per-unit cost drops as scale increases. Diseconomies of scale are the reverse — bureaucratic overhead and coordination problems push ATC back up.",
  },
  {
    id: "pc-f6",
    front: "Explicit vs. Implicit Costs",
    back: "Explicit: actual out-of-pocket payments (rent, wages). Implicit: opportunity costs of owner-supplied resources. Economic profit subtracts both; accounting profit only subtracts explicit costs.",
  },
];

export const perfectCompetitionFlashcards: Flashcard[] = [
  {
    id: "pcomp-f1",
    front: "Perfect Competition Characteristics",
    back: "Many firms, identical products, perfect information, free entry/exit. Each firm is a price taker.",
  },
  {
    id: "pcomp-f2",
    front: "Profit Maximization Rule",
    back: "Produce where MR = MC, as long as P ≥ AVC.",
  },
  {
    id: "pcomp-f3",
    front: "Shutdown Rule",
    back: "P < AVC → shut down in the short run. The firm loses less by paying fixed costs and producing nothing than by continuing to operate.",
  },
  {
    id: "pcomp-f4",
    front: "Long-Run Equilibrium",
    back: "Entry and exit drive economic profit to zero. P = MC = minimum ATC. This is the benchmark against which every other market structure gets compared.",
  },
  {
    id: "pcomp-f5",
    front: "Allocative Efficiency",
    back: "P = MC.",
  },
  {
    id: "pcomp-f6",
    front: "Productive Efficiency",
    back: "Production at minimum ATC. No resources wasted. Achieved in the long run under perfect competition.",
  },
];

export const monopolyFlashcards: Flashcard[] = [
  {
    id: "mon-f1",
    front: "Monopoly Characteristics",
    back: "Single seller, no close substitutes, high barriers to entry. The firm faces the market demand curve.",
  },
  {
    id: "mon-f2",
    front: "Monopoly Pricing",
    back: "Find Q where MR = MC, then read up to the demand curve for the price. The gap between price and MC is the source of allocative inefficiency.",
  },
  {
    id: "mon-f3",
    front: "Deadweight Loss (Monopoly)",
    back: "Triangle between the demand curve and MC, from the monopoly quantity to the competitive quantity. Represents transactions that would have benefited both parties but never occur.",
  },
  {
    id: "mon-f4",
    front: "Barriers to Entry",
    back: "Patents, control of key resources, massive startup costs, government licenses.",
  },
  {
    id: "mon-f5",
    front: "Natural Monopoly",
    back: "One firm can supply the whole market at lower cost than two or more firms could. Usually involves huge fixed costs and low marginal costs — think electric utilities running power lines to every house.",
  },
  {
    id: "mon-f6",
    front: "Price Discrimination",
    back: "Senior discounts at the movies, airline seats that cost $200 or $900 for the same flight, student software pricing — all the same concept. Requires market power and the ability to segment buyers who can't resell to each other.",
  },
];

export const monopolisticCompetitionFlashcards: Flashcard[] = [
  {
    id: "mc-f1",
    front: "Monopolistic Competition Characteristics",
    back: "Many firms, differentiated products, free entry and exit. Restaurants are the textbook example.",
  },
  {
    id: "mc-f2",
    front: "Product Differentiation",
    back: "Branding, quality, location, design — anything that makes your product distinct in the buyer's mind. Creates a small degree of market power even with many competitors.",
  },
  {
    id: "mc-f3",
    front: "Short-Run Profits (Monopolistic)",
    back: "Possible. Firm produces at MR = MC and prices off its own downward-sloping demand curve. But entry will erode these profits over time.",
  },
  {
    id: "mc-f4",
    front: "Long-Run Equilibrium (Monopolistic)",
    back: "P = ATC, economic profit = 0, but P > MC. The demand curve is tangent to ATC. Don't confuse this with perfect competition where P also equals MC.",
  },
  {
    id: "mc-f5",
    front: "Excess Capacity",
    back: "Firms produce to the left of minimum ATC. The tradeoff is product variety for consumers.",
  },
  {
    id: "mc-f6",
    front: "Non-Price Competition",
    back: "Advertising, brand loyalty programs, packaging redesigns, loyalty apps. Starbucks doesn't compete primarily on price.",
  },
];

export const oligopolyFlashcards: Flashcard[] = [
  {
    id: "ol-f1",
    front: "Oligopoly Characteristics",
    back: "Few dominant firms, high barriers, strategic interdependence. Every pricing decision depends on what rivals might do in response.",
  },
  {
    id: "ol-f2",
    front: "Game Theory",
    back: "Framework for modeling strategic interaction. Players, strategies, payoffs, equilibria. Applied heavily in oligopoly analysis because firms must anticipate competitor reactions.",
  },
  {
    id: "ol-f3",
    front: "Nash Equilibrium",
    back: "No player can improve their payoff by unilaterally changing strategy.",
  },
  {
    id: "ol-f4",
    front: "Prisoner's Dilemma",
    back: "Two firms could both profit from cooperating, but each has a dominant strategy to defect. Both defect, both end up worse off. This is why cartels tend to collapse — cheating is individually rational even when collectively destructive.",
  },
  {
    id: "ol-f5",
    front: "Collusion and Cartels",
    back: "OPEC: member nations agree to restrict oil output, pushing prices above competitive levels. Illegal in the US under antitrust law. Inherently unstable because each member can profit by secretly exceeding their quota.",
  },
  {
    id: "ol-f6",
    front: "Kinked Demand Curve",
    back: "Raise your price → rivals don't follow → you lose customers. Cut your price → rivals match → no market share gain. Produces price rigidity and a gap in the MR curve.",
  },
];

export const factorMarketsFlashcards: Flashcard[] = [
  {
    id: "fm-f1",
    front: "Derived Demand",
    back: "Demand for labor (or any input) exists because there is demand for the product it produces.",
  },
  {
    id: "fm-f2",
    front: "Marginal Revenue Product",
    back: "MRP = MP × MR. This is the firm's labor demand curve.",
  },
  {
    id: "fm-f3",
    front: "Profit-Maximizing Hiring Rule",
    back: "Hire until MRP = wage. If a worker generates $20/hr in revenue and the wage is $20/hr, that's the last worker you hire.",
  },
  {
    id: "fm-f4",
    front: "Monopsony",
    back: "Single buyer of labor — a mining company in a remote town, for instance. Pays below MRP and hires fewer workers than a competitive labor market would. The marginal factor cost curve lies above the supply curve because hiring one more worker means raising the wage for all workers.",
  },
  {
    id: "fm-f5",
    front: "Least-Cost Rule",
    back: "MPL/PL = MPK/PK.",
  },
  {
    id: "fm-f6",
    front: "Economic Rent",
    back: "Payment above what's needed to keep a resource in its current use. A star athlete earning $40M would probably still play for $500K — the difference is economic rent.",
  },
];

export const marketFailureFlashcards: Flashcard[] = [
  {
    id: "mf-f1",
    front: "Market Failure",
    back: "Any situation where a free market fails to allocate resources efficiently. Causes include externalities, public goods, market power, and information asymmetry.",
  },
  {
    id: "mf-f2",
    front: "Negative Externality",
    back: "Social cost > private cost → overproduction. A factory polluting a river imposes costs on downstream residents that aren't reflected in the product's price.",
  },
  {
    id: "mf-f3",
    front: "Positive Externality",
    back: "Flu vaccinations reduce illness for people who never got the shot. Social benefit exceeds private benefit, so the market produces less than the socially optimal quantity. Subsidies or public provision can close the gap.",
  },
  {
    id: "mf-f4",
    front: "Pigouvian Tax",
    back: "Tax = marginal external cost. Forces producers to internalize the externality, bringing output to the socially efficient level.",
  },
  {
    id: "mf-f5",
    front: "Coase Theorem",
    back: "With clearly defined property rights and low transaction costs, private parties can negotiate an efficient outcome regardless of who holds the initial rights. Breaks down when bargaining is expensive or parties are numerous.",
  },
  {
    id: "mf-f6",
    front: "Socially Optimal Output",
    back: "Where MSB = MSC.",
  },
];

export const publicGoodsFlashcards: Flashcard[] = [
  {
    id: "pg-f1",
    front: "Public Good",
    back: "Non-rival, non-excludable. National defense and streetlights are standard examples.",
  },
  {
    id: "pg-f2",
    front: "Free-Rider Problem",
    back: "If you can enjoy the benefit without paying, why pay? When everyone reasons this way, the good doesn't get provided by private markets. Government provision funded through taxes is the typical solution.",
  },
  {
    id: "pg-f3",
    front: "Private Good",
    back: "Rival and excludable. A sandwich: if I eat it, you can't.",
  },
  {
    id: "pg-f4",
    front: "Common Resource",
    back: "Rival but non-excludable. Ocean fisheries are the go-to example — no one can be excluded, so the stock gets overharvested. Hardin called this the Tragedy of the Commons, though Ostrom showed communities sometimes manage it without government intervention.",
  },
  {
    id: "pg-f5",
    front: "Club Good",
    back: "Non-rival, excludable. Netflix, toll roads, cable TV.",
  },
  {
    id: "pg-f6",
    front: "Tragedy of the Commons",
    back: "Each user of a shared resource captures the full private benefit of extra use but bears only a fraction of the cost. Multiply across all users and the resource is depleted. Solutions: property rights, quotas, regulation, or community norms.",
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
