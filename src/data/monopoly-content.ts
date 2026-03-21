export const monopolyContent = {
  title: "Monopoly",
  subtitle: "What happens when one firm owns the entire market and nobody can do a thing about it",
  sections: [
    {
      heading: "The Only Seller",
      content: `Back in the late 1800s, a lot of economists figured monopolies would sort themselves out. High profits would lure competitors, the dominance would crack, problem solved. Then Standard Oil happened. John D. Rockefeller controlled over 90% of U.S. oil refining by 1880, and he held that grip for decades through railroad rebates, predatory pricing, and aggressive horizontal integration. Competitors couldn't get a foothold because Rockefeller had systematically locked down the entire supply chain.

A **monopolist** is the sole seller in a market with no close substitutes. Unlike a wheat farmer competing against thousands of nearly identical operations, the monopolist faces zero competition and has full control over price. That makes it a **price maker**.

Pfizer holding a patent on a blockbuster cancer drug. De Beers controlling 85% of the world's rough diamond supply through the 1990s. Your local electric utility. In every one of these cases, buyers either fork over the asking price or they go without.

What keeps competitors out? A **barrier to entry**:
- **Patents** give pharmaceutical companies 20 years of exclusivity. Humira earned AbbVie over $200 billion before its patent expired in 2023
- Exclusive resource control (De Beers locking up diamond mines across southern Africa for decades)
- Massive startup costs, because nobody casually builds a second electrical grid to serve the same city
- Government franchise: your local water utility probably holds a legal monopoly granted by the municipality

Yank away the barrier and monopoly power collapses. That point comes up constantly on AP free-response questions about long-run monopoly behavior, and students who don't hammer it lose points they shouldn't.`,
    },
    {
      heading: "Why MR Is Less Than Price",
      content: `Say a firm is selling 10 units at $50 each. To move an 11th unit, the price has to drop to $49, and not just for the new buyer. The demand curve slopes down, so the price falls to $49 on *all* units. The firm picks up $49 from the additional sale but loses $1 on each of the 10 units it was already selling, because those buyers now pay $49 instead of $50. Net gain: $49 minus $10 = $39. That $39 is the **marginal revenue**, and it sits well below the $49 price.

For a monopolist, MR is always less than price. Always.

A perfectly competitive firm never has to worry about this because it sells at the market price without moving it. But the monopolist *is* the market, so every output decision shifts the price for every single buyer. On the graph, the **MR curve** lies below the **demand curve**. With a linear demand curve, both start at the same vertical intercept, but MR drops twice as fast. That widening gap between price and MR is what drives monopoly profit maximization, the deadweight loss triangle, and basically everything else you'll see in this unit.`,
    },
    {
      heading: "Profit Maximization: MR = MC",
      content: `The monopolist follows the same profit rule as any firm: keep producing as long as the next unit brings in more revenue than it costs to make. Stop when **MR = MC**.

The mistake that wrecks exam scores here is mixing up the quantity decision with the price decision. On a free-response, if they ask you to identify the monopoly price and you point to where MR crosses MC on the vertical axis, that's wrong. There are two separate steps:

1. Find the quantity where MR = MC. Call it Qm.
2. Go *up* to the demand curve at Qm to read the maximum price buyers will pay. That's Pm.

Think about it this way. Pfizer doesn't look at where MR = MC and just charge that dollar amount. Pfizer figures out the output level where MR = MC, then checks the demand curve to see what patients (or insurance companies) will actually pay for that quantity. The price ends up above MC, sometimes way above it.

The result: **less output** and a **higher price** than what a competitive market would produce. Competition pushes production all the way out to where P = MC. The monopolist stops well short of that, leaving willing buyers unserved.`,
    },
    {
      heading: "Deadweight Loss",
      content: `A patient would pay $200 for a drug that costs $30 to produce. Under competition, that transaction happens and both sides walk away better off. Under monopoly, the firm slaps a $250 price tag on it and the patient walks away with nothing. The $170 of potential surplus that would have existed? Just gone. Neither party captures it.

Add up all that lost surplus across every unit between the monopoly quantity (Qm) and the competitive quantity (Qc), and you get the **deadweight loss (DWL)** triangle. On the graph, it sits between those two output levels, representing trades where buyers valued the good above production cost but got priced out.

DWL is *not* the monopolist's profit, and students mix these up constantly. Profit is a transfer of surplus from consumers to the producer, but that surplus still exists somewhere in the economy. Deadweight loss is surplus that vanishes entirely. Nobody gets it.

The U.S. Department of Justice pursues **antitrust regulation** because of exactly this. The wider the gap between Qm and Qc, the larger the DWL triangle, and the more society loses. The 1998 antitrust case against Microsoft and the 2020 suit against Google both trace their core economic argument back to deadweight loss and consumer harm.`,
    },
    {
      heading: "Worked Example",
      content: `Demand: **P = 100 - Q**. Cost: **MC = 10 + 0.5Q**. Work through the monopoly outcome, then compare it to what competition would give you.

**Derive MR.** For any linear demand P = a - bQ, you double the slope: MR = a - 2bQ.

**MR = 100 - 2Q**

**Set MR = MC.**

100 - 2Q = 10 + 0.5Q
90 = 2.5Q
**Qm = 36 units**

**Read the price off the demand curve** (not MR, this is where people mess up):

Pm = 100 - 36 = **$64**

**Compare to competition.** A competitive market sets P = MC directly:

100 - Q = 10 + 0.5Q
90 = 1.5Q
**Qc = 60 units**, **Pc = $40**

The monopolist produces 24 fewer units (36 vs. 60) and charges $24 more ($64 vs. $40). Every single unit between Q = 36 and Q = 60 would have generated surplus for somebody, because buyers valued those units above production cost. That lost triangle is the deadweight loss.`,
    },
  ],
};

export const monopolyQuestions = [
  {
    id: "mon-1",
    question: "Why is a monopolist's marginal revenue curve below its demand curve?",
    options: [
      "Because the monopolist has high fixed costs",
      "Because to sell more, it must lower the price on ALL units",
      "Because consumers don't value monopoly products",
      "Because the government regulates monopoly prices",
    ],
    correctIndex: 1,
    explanation: "Selling one additional unit forces the monopolist to drop the price on every unit already being sold. The revenue gained from the new buyer is partly offset by the revenue lost on all previous units, which puts MR below price at every quantity. (A) has nothing to do with it. Fixed costs don't affect marginal revenue, which measures the change in revenue from one additional unit. (C) doesn't make sense; consumer valuation doesn't explain the gap between MR and price. (D) describes regulated monopoly, which is a separate topic entirely.",
  },
  {
    id: "mon-2",
    question: "A monopolist maximizes profit by producing where:",
    options: [
      "Price = MC",
      "Price = ATC",
      "MR = MC, then charging the price from the demand curve",
      "MR = 0",
    ],
    correctIndex: 2,
    explanation: "Two steps: find the quantity where MR = MC, then go up to the demand curve to read the price. (A) is the competitive firm's rule. Since MR < P for a monopolist, using P = MC would push output past the profit-maximizing point. (B) is just the break-even condition where economic profit equals zero; it doesn't maximize anything. (D) maximizes total revenue, not profit. A firm ignoring costs entirely will overshoot its optimal output.",
  },
  {
    id: "mon-3",
    question: "Compared to a competitive market, a monopolist produces:",
    options: [
      "More output at a higher price",
      "Less output at a higher price",
      "More output at a lower price",
      "The same output at a higher price",
    ],
    correctIndex: 1,
    explanation: "The monopolist restricts output to where MR = MC, which means fewer units than competition's P = MC outcome. Fewer units on the market means a higher price along the demand curve. (A) contradicts basic demand logic because you can't sell more at a higher price without a demand shift. (C) describes what competition delivers, not monopoly. (D) is impossible; the monopolist raises price precisely *by* restricting the quantity.",
  },
  {
    id: "mon-4",
    question: "Deadweight loss from a monopoly represents:",
    options: [
      "The monopolist's total profit",
      "The revenue lost by not producing at competitive quantity",
      "The total surplus that is lost because the monopolist restricts output",
      "The difference between price and marginal cost",
    ],
    correctIndex: 2,
    explanation: "DWL is surplus from transactions that would have made both buyer and seller better off but never happen because the monopolist restricts output. Every unit between Qm and Qc has buyers willing to pay more than the production cost, and that potential surplus simply disappears. (A) confuses a transfer with a loss. Profit shifts surplus from consumers to the producer, but it still exists. DWL is surplus that nobody receives. (B) is misleading; the monopolist deliberately skips those units because producing them would push MR below MC. (D) describes the per-unit markup, not total lost surplus.",
  },
  {
    id: "mon-5",
    question: "A monopolist earning positive economic profit in the long run is possible because:",
    options: [
      "The monopolist is more efficient than competitors",
      "The government subsidizes the monopolist",
      "Barriers to entry prevent competitors from entering the market",
      "Demand for the product is perfectly inelastic",
    ],
    correctIndex: 2,
    explanation: "In a competitive market, positive economic profit is a signal that draws new entrants. Firms flood in and profit gets competed down to zero. Monopolists avoid that outcome because barriers to entry (patents, resource control, scale economies, legal restrictions) keep rivals out indefinitely. (A) doesn't matter; even an inefficient monopolist earns profit if nobody can enter. (B) describes a specific policy, not the general mechanism that sustains monopoly profits. (D) is wrong because no real demand curve is perfectly inelastic. At some price level, buyers will walk away.",
  },
  {
    id: "mon-6",
    question: "If a monopolist's demand curve is P = 100 − Q and MR = 100 − 2Q, what is marginal revenue when Q = 30?",
    options: [
      "$70",
      "$40",
      "$100",
      "$60",
    ],
    correctIndex: 1,
    explanation: "MR = 100 − 2(30) = 100 − 60 = $40. At Q = 30, price would be P = 100 − 30 = $70, and MR ($40) is below P ($70), which is exactly the pattern we'd expect. (A) is the price, not MR. Reading the demand curve when the question asks for marginal revenue is probably the most common computational error on monopoly questions. (C) is the vertical intercept when Q = 0. (D) doesn't correspond to any correct calculation with these numbers.",
  },
  {
    id: "mon-7",
    question: "Natural monopolies arise when:",
    options: [
      "The government grants exclusive operating licenses",
      "One firm can supply the entire market at lower cost than two or more firms",
      "A firm controls a unique natural resource",
      "Demand is very large relative to the minimum efficient scale",
    ],
    correctIndex: 1,
    explanation: "A natural monopoly exists because economies of scale extend across the entire range of market demand. One firm's average cost keeps falling, so splitting production between two firms would just duplicate expensive fixed infrastructure. Water pipes are the classic example: one network costs far less to build and maintain than two overlapping ones. (A) describes a government-granted monopoly, which is a different category. (C) describes resource-based monopoly like De Beers with diamond mines. (D) has the logic backwards: natural monopolies emerge when demand is *small* relative to minimum efficient scale, meaning one firm can serve the whole market before exhausting scale advantages.",
  },
  {
    id: "mon-8",
    question: "A monopolist produces where MR = MC. At this quantity, if P > ATC, the monopolist earns:",
    options: [
      "Normal profit (zero economic profit)",
      "Positive economic profit equal to (P − ATC) × Q",
      "A loss equal to (ATC − P) × Q",
      "Maximum total revenue",
    ],
    correctIndex: 1,
    explanation: "Profit per unit is (P − ATC), and total economic profit is that margin times quantity. On the graph, it shows up as the shaded rectangle from ATC up to P, with width Qm. (A) requires P = ATC exactly, which is the break-even case and isn't what the question describes. (C) has the inequality flipped; P > ATC means the firm is profitable, not losing money. (D) confuses revenue maximization (where MR = 0) with profit maximization (where MR = MC), because a firm chasing maximum revenue ignores costs and produces too much.",
  },
  {
    id: "mon-9",
    question: "A monopolist faces demand P = 120 − 2Q, so MR = 120 − 4Q, and has MC = 20. At the profit-maximizing output, the deadweight loss equals:",
    options: [
      "$250",
      "$500",
      "$625",
      "$125",
    ],
    correctIndex: 2,
    explanation: "Set MR = MC: 120 − 4Q = 20, giving Qm = 25. Competitive output comes from P = MC: 120 − 2Q = 20, so Qc = 50. At Qm = 25, price = 120 − 50 = $70 and MC = $20. The DWL triangle spans from Q = 25 to Q = 50, with height of $70 − $20 = $50 at the left edge. DWL = 0.5 × 25 × 50 = $625. (B) likely results from a calculation mistake, possibly dropping the 0.5 from the triangle area or using wrong dimensions. (A) and (D) use incorrect measurements for the triangle's base or height.",
  },
  {
    id: "mon-10",
    question: "For a monopolist with a linear demand curve P = a − bQ, the marginal revenue curve:",
    options: [
      "Has the same slope as the demand curve",
      "Has twice the slope of the demand curve and the same vertical intercept",
      "Is horizontal at the market price",
      "Lies above the demand curve at every quantity",
    ],
    correctIndex: 1,
    explanation: "For P = a − bQ, total revenue = aQ − bQ², so MR = a − 2bQ. Same y-intercept (a), but the slope is −2b instead of −b, so MR falls twice as fast. (A) is wrong because the slope doubles. (C) describes the demand curve facing a perfectly competitive firm, not a monopolist. (D) has it backwards. MR lies *below* demand at every positive quantity because selling more means cutting the price on all existing units.",
  },
  {
    id: "mon-11",
    question: "A government regulator forces a natural monopoly to set price equal to marginal cost (P = MC). The most likely result is:",
    options: [
      "The firm earns positive economic profit because P > ATC at that output",
      "The firm produces the allocatively efficient quantity but may need a subsidy because P < ATC",
      "The firm produces the monopoly quantity at a lower price",
      "Deadweight loss increases because the firm overproduces",
    ],
    correctIndex: 1,
    explanation: "Natural monopolies have declining ATC over the relevant output range, which means MC sits below ATC. Forcing P = MC sets the price below ATC, so the firm runs at a loss and will exit unless the government provides a subsidy. The output level is allocatively efficient (P = MC maximizes total surplus), but the firm can't sustain it financially on its own. (A) gets the cost structure wrong; with a natural monopoly, MC < ATC, so P = MC means losses. (C) is wrong because P = MC pushes output *beyond* the monopoly level. (D) has it backwards. Moving from monopoly output toward P = MC *reduces* deadweight loss.",
  },
  {
    id: "mon-12",
    question: "A monopolist practices third-degree price discrimination by charging different prices to two groups of consumers. Compared to charging a single monopoly price, total output will:",
    options: [
      "Always decrease because the monopolist restricts supply to the high-price group",
      "Always stay the same because the firm still produces where MR = MC",
      "Increase if the lower-price group's demand is sufficiently elastic",
      "Decrease to zero because consumers refuse to pay different prices",
    ],
    correctIndex: 2,
    explanation: "With third-degree price discrimination, the monopolist sets MR = MC independently in each market segment. The low-price group gets a lower price because their demand is more elastic, which means more units sold to that segment. If the expansion in the elastic market outweighs any contraction in the inelastic one, total output rises, and this is especially likely when the low-price group was largely priced out under the single monopoly price. (A) ignores the output gain in the low-price segment. (B) wrongly treats it as a single MR = MC condition when the firm actually equalizes MR to MC separately per segment. (D) is unrealistic; separated consumer groups generally can't observe each other's prices.",
  },
  {
    id: "mon-13",
    question: "Which of the following is the strongest barrier to entry that would allow a monopoly to persist in the long run?",
    options: [
      "High short-run advertising expenditures by the incumbent firm",
      "Consumer preference for variety in the market",
      "A government-granted patent giving exclusive production rights for 20 years",
      "Low fixed costs that make entry easy for new firms",
    ],
    correctIndex: 2,
    explanation: "A patent legally prohibits competitors from producing the same product for 20 years, so it blocks entry regardless of how profitable the market looks. That's about as strong as barriers get. (A) is a weak barrier; a well-funded entrant can match advertising spending, so it raises the cost of entry without legally blocking it. (B) actually encourages multiple firms with differentiated products, which describes monopolistic competition, not monopoly. (D) is the opposite of a barrier because low fixed costs make entry *easier* and undermine monopoly power.",
  },
  {
    id: "mon-14",
    question: "A monopolist faces demand P = 200 − 5Q, has MC = ATC = $50 (constant costs). The monopolist's maximum economic profit is:",
    options: [
      "$1,125",
      "$2,250",
      "$750",
      "$562.50",
    ],
    correctIndex: 0,
    explanation: "MR = 200 − 10Q. Set MR = MC: 200 − 10Q = 50, giving Q = 15. Price = 200 − 5(15) = $125. Profit per unit = $125 − $50 = $75. Total profit = $75 × 15 = $1,125. (B) doubles the correct answer, probably from a quantity error or forgetting to subtract costs. (C) uses the wrong quantity somewhere. (D) incorrectly halves the correct profit, possibly by confusing the profit rectangle with a triangle.",
  },
  {
    id: "mon-15",
    question: "Compared to the perfectly competitive outcome, a single-price monopolist causes a transfer of surplus from consumers to the producer and also:",
    options: [
      "Increases total surplus because the monopolist is more efficient",
      "Creates deadweight loss because some mutually beneficial trades do not occur",
      "Eliminates all consumer surplus by charging each buyer their maximum willingness to pay",
      "Reduces producer surplus because the monopolist produces fewer units",
    ],
    correctIndex: 1,
    explanation: "The monopolist restricts output below the competitive level. Units between Qm and Qc would have generated surplus because buyers valued them above MC, but they're never produced. That lost surplus is deadweight loss, and nobody receives it. (A) is wrong because monopoly *reduces* total surplus; restricting output destroys value regardless of the firm's efficiency. (C) describes perfect (first-degree) price discrimination, not single-price monopoly. A single-price monopolist leaves consumer surplus intact for buyers who value the good above the monopoly price. (D) has it backwards. The monopolist's producer surplus actually *increases* relative to competition because the higher price on units sold more than compensates for reduced volume.",
  },
];
