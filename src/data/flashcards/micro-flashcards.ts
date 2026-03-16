import type { Flashcard } from "@/components/ui/FlashcardDeck";

export const basicConceptsFlashcards: Flashcard[] = [
  {
    id: "bc-f1",
    front: "Scarcity",
    back: "We've got unlimited wants and limited stuff. That's it. Every economic question boils down to making tradeoffs because there isn't enough to go around.",
  },
  {
    id: "bc-f2",
    front: "Opportunity Cost",
    back: "Whatever you gave up to do what you're doing right now. Like if you skip a $15/hr shift to study, the opportunity cost of studying is that $15/hr.",
  },
  {
    id: "bc-f3",
    front: "Production Possibilities Curve",
    back: "Shows all the max combos of two goods an economy can make. Inside the curve = wasting resources. Outside = can't get there yet. On the curve = efficient.",
  },
  {
    id: "bc-f4",
    front: "Marginal Analysis",
    back: "Should I do one more unit of this? Compare the extra benefit to the extra cost. If the benefit's bigger, do it. That's how rational decisions work.",
  },
  {
    id: "bc-f5",
    front: "Comparative Advantage",
    back: "Whoever can produce something at a lower opportunity cost should specialize in it. This is why trade works — even if one country's better at everything.",
  },
  {
    id: "bc-f6",
    front: "Absolute Advantage",
    back: "Just means you can produce more with the same resources. But it doesn't tell you who should specialize — that's comparative advantage's job.",
  },
];

export const supplyDemandFlashcards: Flashcard[] = [
  {
    id: "sd-f1",
    front: "Law of Demand",
    back: "Price goes up, quantity demanded goes down. Always. That's why the demand curve slopes downward from left to right.",
  },
  {
    id: "sd-f2",
    front: "Law of Supply",
    back: "Higher prices mean producers want to sell more. Makes sense — if coffee beans jump to $8/lb, farmers plant more coffee. Supply curve slopes up.",
  },
  {
    id: "sd-f3",
    front: "Equilibrium Price",
    back: "Where supply meets demand. No shortage, no surplus — the market just clears.",
  },
  {
    id: "sd-f4",
    front: "Shift vs. Movement",
    back: "Price change? You slide along the curve. Something else changes — like consumer income or input costs — the whole curve shifts. Don't mix these up on the exam.",
  },
  {
    id: "sd-f5",
    front: "Price Ceiling",
    back: "Government says \"you can't charge more than $X.\" If that's below equilibrium, you get a shortage. NYC rent control is the classic example — tons of demand, not enough apartments.",
  },
  {
    id: "sd-f6",
    front: "Price Floor",
    back: "Legal minimum price, has to be above equilibrium to matter. Creates a surplus. Think minimum wage — if it's set above the market wage, more people want jobs than firms want to hire.",
  },
];

export const elasticityFlashcards: Flashcard[] = [
  {
    id: "el-f1",
    front: "Price Elasticity of Demand",
    back: "Measures how much buyers react to a price change. It's % change in Qd divided by % change in price. Big number = very responsive consumers.",
  },
  {
    id: "el-f2",
    front: "Elastic vs. Inelastic",
    back: "Elastic means |Ed| > 1 — quantity swings more than price. Inelastic is |Ed| < 1 — people barely change how much they buy. Insulin's super inelastic; vacation flights are elastic.",
  },
  {
    id: "el-f3",
    front: "Total Revenue Test",
    back: "Quick trick: if demand's elastic, lowering your price actually increases total revenue (you sell way more units). If it's inelastic, a price cut hurts revenue.",
  },
  {
    id: "el-f4",
    front: "Determinants of Elasticity",
    back: "More substitutes = more elastic. Luxury goods = more elastic. Takes up a big chunk of your budget = more elastic. More time to adjust = more elastic. Gasoline in the short run? Pretty inelastic.",
  },
  {
    id: "el-f5",
    front: "Cross-Price Elasticity",
    back: "Positive means they're substitutes (Coke and Pepsi). Negative means complements (hot dogs and buns).",
  },
  {
    id: "el-f6",
    front: "Income Elasticity of Demand",
    back: "Positive = normal good, you buy more when income rises. Negative = inferior good — think ramen noodles, you buy less once you can afford better food.",
  },
];

export const consumerChoiceFlashcards: Flashcard[] = [
  {
    id: "cc-f1",
    front: "Utility",
    back: "Fancy word for satisfaction. Economists assume you're always trying to squeeze the most happiness out of your budget.",
  },
  {
    id: "cc-f2",
    front: "Diminishing Marginal Utility",
    back: "First slice of pizza? Amazing. Fourth slice? Meh. Each extra unit gives you less additional satisfaction than the last one did.",
  },
  {
    id: "cc-f3",
    front: "Utility Maximization Rule",
    back: "You're getting the most bang for your buck when MU per dollar is equal across everything you buy. So MU_A/P_A = MU_B/P_B.",
  },
  {
    id: "cc-f4",
    front: "Budget Constraint",
    back: "A line showing every combo of two goods you can afford. Slope is the negative price ratio (-P_X/P_Y). Income goes up, the whole line shifts out.",
  },
  {
    id: "cc-f5",
    front: "Substitution Effect",
    back: "Price of Coke drops? You switch from Pepsi to Coke because Coke's now the better deal. That switch is the substitution effect — nothing to do with feeling richer.",
  },
  {
    id: "cc-f6",
    front: "Income Effect",
    back: "When something gets cheaper, your money stretches further — you're basically richer. So you buy more stuff. Pair this with the substitution effect and you've got the full demand story.",
  },
];

export const productionCostsFlashcards: Flashcard[] = [
  {
    id: "pc-f1",
    front: "Marginal Product",
    back: "Extra output from one more worker. At first it goes up because of specialization, then it falls. Like adding a 5th cook to a tiny kitchen — they just get in the way.",
  },
  {
    id: "pc-f2",
    front: "Diminishing Marginal Returns",
    back: "Keep adding workers to a fixed amount of equipment and eventually each new hire adds less output. Short-run concept only — in the long run you can add more equipment too.",
  },
  {
    id: "pc-f3",
    front: "Marginal Cost",
    back: "Cost of making one more unit. U-shaped curve. Crosses ATC and AVC at their lowest points — that's a favorite exam question.",
  },
  {
    id: "pc-f4",
    front: "Average Total Cost",
    back: "TC divided by Q. Also equals AFC + AVC. U-shaped because fixed costs get spread thin at first, then diminishing returns kick in.",
  },
  {
    id: "pc-f5",
    front: "Economies of Scale",
    back: "Bigger output, lower average cost. Amazon can ship packages cheaper per unit than a small shop because they spread those massive warehouse costs over millions of orders.",
  },
  {
    id: "pc-f6",
    front: "Explicit vs. Implicit Costs",
    back: "Explicit = money you actually hand over (rent, wages, materials). Implicit = what you gave up, like the salary you could've earned working somewhere else. Economic profit counts both.",
  },
];

export const perfectCompetitionFlashcards: Flashcard[] = [
  {
    id: "pcomp-f1",
    front: "Perfect Competition Characteristics",
    back: "Tons of tiny firms, identical product, everyone knows everything, easy to enter or leave. Each firm is a price taker — like a wheat farmer who just takes whatever the market price is.",
  },
  {
    id: "pcomp-f2",
    front: "Profit Maximization Rule",
    back: "Produce where MR = MC, period. But only if price is at least covering your variable costs — otherwise shut down.",
  },
  {
    id: "pcomp-f3",
    front: "Shutdown Rule",
    back: "If P < AVC, close up shop in the short run. You'd lose less money by just paying your fixed costs and producing nothing.",
  },
  {
    id: "pcomp-f4",
    front: "Long-Run Equilibrium",
    back: "Profits attract new firms, losses push firms out. This keeps going until everyone earns zero economic profit. Price settles at the minimum of ATC.",
  },
  {
    id: "pcomp-f5",
    front: "Allocative Efficiency",
    back: "P = MC. Society gets exactly the right amount of the good — the last unit's value to consumers equals what it cost to make.",
  },
  {
    id: "pcomp-f6",
    front: "Productive Efficiency",
    back: "Producing at the bottom of the ATC curve. No waste. Perfect competition gets you here in the long run.",
  },
];

export const monopolyFlashcards: Flashcard[] = [
  {
    id: "mon-f1",
    front: "Monopoly Characteristics",
    back: "One seller, no close substitutes, high barriers keeping everyone else out. The monopolist IS the market — they face the whole downward-sloping demand curve.",
  },
  {
    id: "mon-f2",
    front: "Monopoly Pricing",
    back: "Find MR = MC, then go up to the demand curve to set the price. They charge more than MC, which is why monopolies are allocatively inefficient.",
  },
  {
    id: "mon-f3",
    front: "Deadweight Loss (Monopoly)",
    back: "The triangle of lost surplus because the monopolist produces less than the competitive quantity. Transactions that'd benefit both buyer and seller just don't happen.",
  },
  {
    id: "mon-f4",
    front: "Barriers to Entry",
    back: "Patents (like pharmaceutical companies), owning a key resource, massive startup costs, government licenses. Whatever keeps competitors from showing up.",
  },
  {
    id: "mon-f5",
    front: "Natural Monopoly",
    back: "When one firm can serve everybody cheaper than two firms could. Utilities are the usual example — it'd be absurd to have three competing sets of power lines running to your house.",
  },
  {
    id: "mon-f6",
    front: "Price Discrimination",
    back: "Charging different people different prices for the same thing based on what they'll pay. Student discounts, airline tickets, senior pricing — all price discrimination. You need market power and the ability to prevent resale.",
  },
];

export const monopolisticCompetitionFlashcards: Flashcard[] = [
  {
    id: "mc-f1",
    front: "Monopolistic Competition Characteristics",
    back: "Lots of firms, differentiated products, easy entry and exit. Think restaurants — there are hundreds, but each one's a little different.",
  },
  {
    id: "mc-f2",
    front: "Product Differentiation",
    back: "Making your product stand out — branding, quality, location, features. It's why Nike can charge more than a generic shoe brand and still sell.",
  },
  {
    id: "mc-f3",
    front: "Short-Run Profits (Monopolistic)",
    back: "A firm can earn economic profit in the short run by producing at MR = MC and pricing off its demand curve. But it won't last.",
  },
  {
    id: "mc-f4",
    front: "Long-Run Equilibrium (Monopolistic)",
    back: "New firms see profits and enter, stealing customers until economic profit hits zero. Demand curve ends up just tangent to ATC. P = ATC but P > MC.",
  },
  {
    id: "mc-f5",
    front: "Excess Capacity",
    back: "These firms don't produce at the lowest ATC — they sit to the left of that minimum. The tradeoff? Consumers get variety instead of maximum efficiency.",
  },
  {
    id: "mc-f6",
    front: "Non-Price Competition",
    back: "Competing through ads, branding, loyalty programs, and product upgrades instead of just cutting prices. Starbucks doesn't win on price — they win on vibes and brand.",
  },
];

export const oligopolyFlashcards: Flashcard[] = [
  {
    id: "ol-f1",
    front: "Oligopoly Characteristics",
    back: "Few big firms, high barriers to entry, and every decision depends on what rivals do. Think Coca-Cola and Pepsi constantly watching each other.",
  },
  {
    id: "ol-f2",
    front: "Game Theory",
    back: "Studying strategic decisions where your best move depends on what the other player does. It's how economists model oligopoly behavior — lots of payoff matrices.",
  },
  {
    id: "ol-f3",
    front: "Nash Equilibrium",
    back: "Nobody can improve their outcome by changing strategy alone. Both players are stuck — even if cooperating would've been better for everyone.",
  },
  {
    id: "ol-f4",
    front: "Prisoner's Dilemma",
    back: "Both firms would be better off cooperating, but each one's dominant strategy is to cheat. So they both cheat and end up worse. Explains why cartels fall apart.",
  },
  {
    id: "ol-f5",
    front: "Collusion and Cartels",
    back: "Firms agreeing behind closed doors to limit output and jack up prices. OPEC is the famous example. It's illegal in the US, and members always have an incentive to secretly produce more.",
  },
  {
    id: "ol-f6",
    front: "Kinked Demand Curve",
    back: "If you raise your price, rivals won't follow — you lose customers. If you cut your price, they match you — no gain. So prices tend to stay sticky. That's the kink.",
  },
];

export const factorMarketsFlashcards: Flashcard[] = [
  {
    id: "fm-f1",
    front: "Derived Demand",
    back: "Firms don't hire workers for fun — they hire because there's demand for the product those workers make. More people buying iPhones = Apple hiring more engineers.",
  },
  {
    id: "fm-f2",
    front: "Marginal Revenue Product",
    back: "How much extra revenue one more worker brings in. MRP = MP x MR. It's also the firm's demand curve for labor.",
  },
  {
    id: "fm-f3",
    front: "Profit-Maximizing Hiring Rule",
    back: "Keep hiring until the last worker's MRP equals the wage. If a worker brings in $20/hr and costs $20/hr, that's your stopping point.",
  },
  {
    id: "fm-f4",
    front: "Monopsony",
    back: "One buyer in the labor market — like a mining town with only one mine. They pay less than MRP and hire fewer people than a competitive market would.",
  },
  {
    id: "fm-f5",
    front: "Least-Cost Rule",
    back: "Get the cheapest combo of inputs by equalizing marginal product per dollar: MP_L/P_L = MP_K/P_K. If labor gives more bang per buck, use more labor.",
  },
  {
    id: "fm-f6",
    front: "Economic Rent",
    back: "Payment above what's needed to keep a resource in its current use. Think of a pro athlete's $40M salary — they'd probably still play for way less.",
  },
];

export const marketFailureFlashcards: Flashcard[] = [
  {
    id: "mf-f1",
    front: "Market Failure",
    back: "When free markets mess up and don't allocate resources well. Happens with externalities, public goods, or when firms have too much power.",
  },
  {
    id: "mf-f2",
    front: "Negative Externality",
    back: "A factory dumps pollution into a river — nearby residents pay the cost, not the factory. Social cost > private cost, so the market overproduces the polluting good.",
  },
  {
    id: "mf-f3",
    front: "Positive Externality",
    back: "Your neighbor gets a flu shot and you're less likely to get sick too. Social benefit > private benefit, so the market produces too little. Vaccines and education are big ones.",
  },
  {
    id: "mf-f4",
    front: "Pigouvian Tax",
    back: "Slap a tax on the polluter equal to the external cost. Now they're paying the full social cost, and production drops to the right level. A carbon tax is a Pigouvian tax.",
  },
  {
    id: "mf-f5",
    front: "Coase Theorem",
    back: "If property rights are clear and bargaining is cheap, people can sort out externalities on their own without government. Doesn't matter who starts with the rights — they'll negotiate to the efficient outcome.",
  },
  {
    id: "mf-f6",
    front: "Socially Optimal Output",
    back: "Where MSB = MSC. Total surplus for everyone is maximized at this quantity. It's what a perfectly functioning market would produce.",
  },
];

export const publicGoodsFlashcards: Flashcard[] = [
  {
    id: "pg-f1",
    front: "Public Good",
    back: "Non-rival and non-excludable. My using it doesn't use it up, and you can't stop anyone from benefiting. National defense, streetlights, public fireworks shows.",
  },
  {
    id: "pg-f2",
    front: "Free-Rider Problem",
    back: "Why pay for something you'll get for free anyway? Everyone thinks this, nobody pays, and the good doesn't get produced. That's why the government funds things like national parks.",
  },
  {
    id: "pg-f3",
    front: "Private Good",
    back: "Rival and excludable. A sandwich — if I eat it, you can't, and the store can refuse to sell it to me. Markets handle these just fine.",
  },
  {
    id: "pg-f4",
    front: "Common Resource",
    back: "Rival but non-excludable. Gets overharvested because no one can be kept out. Ocean fish stocks are the go-to example — everyone fishes until there's nothing left.",
  },
  {
    id: "pg-f5",
    front: "Club Good",
    back: "Non-rival but excludable. Netflix — millions stream at once, but you need a subscription to get in.",
  },
  {
    id: "pg-f6",
    front: "Tragedy of the Commons",
    back: "Shared pasture, every herder adds one more cow because the benefit's private but the cost's shared. Multiply that by everyone and the pasture's destroyed. Fix it with property rights, quotas, or regulation.",
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
