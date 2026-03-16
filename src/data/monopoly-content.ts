export const monopolyContent = {
  title: "Monopoly",
  subtitle: "What happens when one firm owns the entire market and nobody can do a thing about it",
  sections: [
    {
      heading: "The Only Seller",
      content: `Economists in the late 19th century believed monopolies were temporary — that high profits would inevitably attract competitors who'd break the stranglehold. Standard Oil proved them spectacularly wrong. John D. Rockefeller controlled over 90% of U.S. oil refining by 1880 and maintained that grip for decades through railroad rebates, predatory pricing, and horizontal integration. The competitors never showed up, because Rockefeller made sure the door was welded shut behind him.

A **monopolist** is the sole seller in a market with no close substitutes. Unlike a wheat farmer competing against thousands of identical operations, the monopolist faces no competition. One seller, full control over price. That makes the monopolist a **price maker**.

Pfizer holding a patent on a blockbuster cancer drug. De Beers controlling 85% of the world's rough diamond supply through the 1990s. Your local electric utility. Buyers either pay up or go without.

What keeps competitors out? A **barrier to entry**:
- **Patents** grant pharmaceutical companies 20 years of exclusivity — Humira earned AbbVie over $200 billion before its patent expired in 2023
- Exclusive resource control, like De Beers locking up diamond mines across southern Africa
- Massive startup costs — nobody casually builds a second electrical grid serving the same city
- Government franchise, where your local water utility holds a legal monopoly granted by the municipality

Remove the barrier and monopoly power evaporates. That point matters far more than most AP students realize when answering free-response questions about long-run monopoly behavior.`,
    },
    {
      heading: "Why MR Is Less Than Price",
      content: `Say you sell 10 units at $50 each. You want to sell an 11th. But the demand curve slopes down, so the price must drop to $49 for all units. You gain $49 from the new buyer. You also lose $1 on each of the 10 units you were already selling, because those buyers now pay $49 instead of $50. Net gain: $49 minus $10 = $39. That $39 is your **marginal revenue**, and it sits well below the $49 price.

For a monopolist, MR is always less than price. Always.

A competitive firm never faces this problem because it sells at the market price without nudging it. The monopolist *is* the market. Every output decision moves the price for everyone. On the graph, the **MR curve** sits below the **demand curve**. For a linear demand curve, both start at the same vertical intercept, but MR falls twice as fast. That growing wedge between price and MR drives everything else in monopoly analysis — profit maximization, the deadweight loss triangle, all of it.`,
    },
    {
      heading: "Profit Maximization: MR = MC",
      content: `A monopolist follows the same profit rule as any firm: keep producing as long as the next unit brings in more revenue than it costs. Stop when **MR = MC**.

The mistake that kills exam scores is confusing the quantity decision with the price decision. If a free-response question asks you to identify the monopoly price and you point to where MR crosses MC on the vertical axis, that's wrong. The process has two distinct steps:

1. Find the quantity where MR = MC. Call it Qm.
2. Go *up* to the demand curve at Qm to read the maximum price buyers will pay. That's the monopoly price, Pm.

Pfizer doesn't look at the MR = MC intersection and charge that dollar amount. Pfizer finds the output level where MR = MC, then checks the demand curve to see what patients or insurance companies will actually pay for that quantity. The price lands above MC. Sometimes far above it.

The result: **less output** and a **higher price** than a competitive market would deliver. Competition pushes production out to where P = MC. The monopolist stops well short, leaving willing buyers unserved and transactions unmade.`,
    },
    {
      heading: "Deadweight Loss",
      content: `A patient is willing to pay $200 for a drug that costs $30 to produce. Under competition, that trade happens and both sides gain. Under monopoly, the firm prices the drug at $250 and the patient walks away empty-handed. The $170 of potential surplus vanishes entirely. Nobody gets it.

Multiply that across every unit between the monopoly quantity (Qm) and the competitive quantity (Qc), and you get the **deadweight loss (DWL)** triangle. On the graph, it sits between those two quantities — representing trades where buyers valued the good above the production cost but got priced out anyway.

DWL is *not* the monopolist's profit. This trips people up constantly. Profit is a transfer — surplus moves from consumers to the producer, but it still exists somewhere in the economy. Deadweight loss is surplus that nobody captures. Destroyed.

The U.S. Department of Justice pursues **antitrust regulation** precisely because of this. The bigger the gap between Qm and Qc, the larger that triangle, and the more society loses. The 1998 antitrust case against Microsoft, the 2020 suit against Google — the underlying economic argument is always about this deadweight loss and the consumer harm it represents.`,
    },
    {
      heading: "Worked Example",
      content: `Demand: **P = 100 - Q**. Cost: **MC = 10 + 0.5Q**. Work through the monopoly outcome, then compare it to competition.

**Derive MR.** For any linear demand P = a - bQ, double the slope: MR = a - 2bQ.

**MR = 100 - 2Q**

**Set MR = MC.**

100 - 2Q = 10 + 0.5Q
90 = 2.5Q
**Qm = 36 units**

**Read the price off the demand curve** (not MR):

Pm = 100 - 36 = **$64**

**Compare to competition.** A competitive market sets P = MC directly:

100 - Q = 10 + 0.5Q
90 = 1.5Q
**Qc = 60 units**, **Pc = $40**

The monopolist produces 24 fewer units (36 vs. 60) and charges $24 more ($64 vs. $40). Every unit between Q = 36 and Q = 60 would have generated surplus, since buyers valued those units above production cost. That lost triangle is the deadweight loss.`,
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
    explanation: "Selling one more unit forces the monopolist to drop the price on every unit already being sold. The revenue gained from the new buyer is partially eaten by the revenue lost on all previous units. So MR sits below price at every quantity. (A) is irrelevant — fixed costs have nothing to do with marginal revenue, which measures the change in revenue from one additional unit. (C) makes no sense; consumer valuation doesn't explain the MR-price gap. (D) describes regulated monopoly, a different scenario entirely.",
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
    explanation: "Two steps. First, find the quantity where MR = MC. Second, go up to the demand curve to read the price. (A) is the competitive firm's rule — since MR < P for a monopolist, setting P = MC would push output past the profit-maximizing point. (B) is just the break-even condition where economic profit equals zero; nothing about it maximizes profit. (D) maximizes total revenue, not profit. A firm ignoring costs entirely will overshoot.",
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
    explanation: "The monopolist restricts output to MR = MC, which is fewer units than competition's P = MC outcome. Fewer units on the market means a higher price along the demand curve. (A) contradicts basic demand — you can't sell more at a higher price without an outward demand shift. (C) describes what competition delivers, not monopoly. (D) is impossible without a demand shift; the monopolist raises price *by* restricting quantity.",
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
    explanation: "DWL is the surplus from trades that would have made both sides better off but never happen because the monopolist chokes output. Every unit between Qm and Qc has buyers willing to pay more than production cost, and that potential surplus just evaporates. (A) confuses a transfer with a loss — profit shifts surplus from consumers to the producer, but the surplus still exists. DWL is surplus nobody gets. (B) is misleading; the monopolist deliberately forgoes those units because producing them would drop MR below MC. (D) describes the per-unit markup, not total lost surplus.",
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
    explanation: "In a competitive market, positive profit is a neon sign screaming \"enter here.\" New firms flood in and profit falls to zero. Monopolists avoid this fate because barriers to entry — patents, control over resources, scale economies, legal restrictions — keep rivals out permanently. (A) has nothing to do with it; an inefficient monopolist still earns profit if nobody can enter. (B) describes a specific policy, not the general mechanism. (D) is wrong because no real-world demand curve is perfectly inelastic. At some price, buyers walk away.",
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
    explanation: "MR = 100 − 2(30) = 100 − 60 = $40. Price at Q = 30 is P = 100 − 30 = $70, and MR ($40) is below P ($70) — exactly as expected. (A) is the price, not MR. Reading off the demand curve when the question asks for MR is probably the single most common computational error on monopoly questions. (C) is the y-intercept when Q = 0, not MR at Q = 30. (D) doesn't correspond to any correct calculation.",
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
    explanation: "A natural monopoly exists when economies of scale extend across the entire range of market demand. One firm's average cost keeps falling, so splitting production between two firms would just duplicate fixed infrastructure. Think water pipes — one network costs far less than two overlapping ones. (A) describes a government-granted monopoly, a different category. (C) describes resource-based monopoly like De Beers with diamond mines. (D) has the logic backwards: natural monopolies emerge when demand is *small* relative to minimum efficient scale, so one firm serves the whole market before exhausting its cost advantages.",
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
    explanation: "Profit per unit is (P − ATC), total economic profit is that margin times quantity. On the graph, it's the shaded rectangle from ATC up to P, with width Qm. (A) requires P = ATC exactly, the break-even case, not what the question describes. (C) has the inequality flipped; P > ATC means the firm is profitable. (D) confuses revenue maximization (where MR = 0) with profit maximization (where MR = MC). A firm chasing maximum revenue ignores costs and overproduces.",
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
    explanation: "Set MR = MC: 120 − 4Q = 20, so Qm = 25. Competitive output: 120 − 2Q = 20, giving Qc = 50. At Qm = 25, price = 120 − 50 = $70 and MC = $20. The DWL triangle spans Q = 25 to Q = 50, with height $70 − $20 = $50 at the left edge. DWL = 0.5 × 25 × 50 = $625. (B) drops the 0.5 from the triangle formula and gets $1,250... wait, or maybe uses a smaller base — either way, $500 results from a calculation error. (A) and (D) use incorrect dimensions for the triangle.",
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
    explanation: "For P = a − bQ, total revenue is TR = aQ − bQ², so MR = a − 2bQ. Same y-intercept (a), but the slope is −2b instead of −b. MR falls twice as fast. (A) is wrong because the slope doubles. (C) describes what a perfectly competitive firm sees, not a monopolist. (D) reverses reality — MR lies *below* demand at every positive quantity because selling more requires cutting the price on all existing units.",
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
    explanation: "Natural monopolies have declining ATC over the relevant output range, meaning MC sits below ATC. Forcing P = MC sets price below ATC, so the firm runs at a loss and will exit unless subsidized. The output is allocatively efficient — P = MC maximizes total surplus — but the firm can't sustain it on its own. (A) gets the cost structure wrong; with a natural monopoly, MC < ATC, so P = MC means losses. (C) is wrong because P = MC pushes output *beyond* the monopoly level, not at it. (D) is backwards — moving from monopoly output toward P = MC *reduces* deadweight loss.",
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
    explanation: "With third-degree price discrimination, the monopolist sets MR = MC in each market segment independently. The low-price group gets a lower price because their demand is more elastic, which means more units sold to that segment. If the expansion in the elastic market outweighs any contraction in the inelastic one, total output rises. This is especially likely when the low-price group was largely priced out under a single monopoly price. (A) ignores the output gain in the low-price segment. (B) wrongly assumes a single MR = MC condition; the firm equalizes MR to MC separately per segment. (D) is unrealistic — separated consumer groups generally can't observe each other's prices.",
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
    explanation: "A patent legally prohibits competitors from producing the same product for 20 years. It blocks entry regardless of how profitable the market looks. That's as strong as barriers get. (A) is weak — a well-funded entrant can match advertising spending; it raises the cost of entry without legally blocking it. (B) actually encourages multiple firms with differentiated products, which is monopolistic competition, not monopoly. (D) is the opposite of a barrier; low fixed costs make entry *easier*, undermining monopoly power.",
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
    explanation: "MR = 200 − 10Q. Set MR = MC: 200 − 10Q = 50, so Q = 15. Price = 200 − 5(15) = $125. Profit per unit = $125 − $50 = $75. Total profit = $75 × 15 = $1,125. (B) doubles the correct answer, probably by miscomputing quantity or forgetting to subtract costs. (C) uses the wrong quantity. (D) halves the correct profit, possibly confusing the profit rectangle with a triangle calculation.",
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
    explanation: "The monopolist restricts output below the competitive level. Units between Qm and Qc would have generated surplus — buyers valued them above MC — but they're never produced. That lost surplus is deadweight loss, accruing to nobody. (A) is wrong because monopoly *reduces* total surplus; restricting output destroys value regardless of whether the firm is efficient. (C) describes perfect (first-degree) price discrimination, not single-price monopoly. A single-price monopolist leaves consumer surplus intact for buyers who value the good above the monopoly price. (D) is backwards — the monopolist's producer surplus actually *increases* relative to competition because the higher price on sold units more than compensates for the reduced volume.",
  },
];
