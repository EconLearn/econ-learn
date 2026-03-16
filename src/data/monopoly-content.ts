export const monopolyContent = {
  title: "Monopoly",
  subtitle: "One firm, no competition, and why that changes everything about pricing and output",
  sections: [
    {
      heading: "The Only Seller",
      content: `Your electric company can charge whatever it wants. A wheat farmer can't. The difference? The wheat farmer competes with thousands of identical sellers, so customers just buy the cheapest grain. A **monopolist** faces no competition. One seller, no close substitutes, full control over price. That makes the monopolist a **price maker**.

Pfizer holding a patent on a new cancer drug, De Beers controlling 85% of the world's rough diamond supply in the 1990s. Buyers either pay up or go without.

What keeps competitors from rushing in? A **barrier to entry**:
- **Patents** (pharmaceutical exclusivity for 20 years)
- Exclusive resource control (De Beers locking up diamond mines)
- Massive startup costs (nobody casually builds a second electrical grid)
- Government franchise (your local water utility holds a legal monopoly)

Remove the barrier and monopoly power collapses. That last point matters more than students usually realize.`,
    },
    {
      heading: "Why MR Is Less Than Price",
      content: `Say you sell 10 units at $50 each. You want to sell an 11th, but the demand curve slopes down, so the price must drop to $49. You gain $49 from the new buyer. You also lose $1 on each of the 10 units you were already selling. Net gain: $49 minus $10 = $39. That $39 is your **marginal revenue**, well below the $49 price.

For a monopolist, MR is always less than price. A competitive firm never deals with this because it sells at the market price without moving the needle. The monopolist *is* the market. Every output decision shifts the price for everyone.

On the graph, the **MR curve** (purple, dashed) sits below the **demand curve** (blue). For a linear demand curve, both start at the same vertical intercept, but MR falls twice as fast. That wedge between price and MR is what drives everything else in monopoly analysis: profit maximization, deadweight loss, all of it.`,
    },
    {
      heading: "Profit Maximization: MR = MC",
      content: `A monopolist follows the same profit rule as any firm: keep producing as long as the next unit brings in more revenue than it costs. Stop when **MR = MC**.

Here's the common exam mistake. People confuse the quantity decision with the price decision. The monopolist does *not* charge the price where MR = MC. It's two separate steps:

1. Find the quantity where MR = MC. Call it Qm.
2. Go *up* to the demand curve at Qm to read the maximum price buyers will pay. Charge that price (Pm).

Think of Pfizer with a patented drug: they find the output level where MR = MC, then check the demand curve to see what patients (or insurers) will pay for that quantity. The price lands above MC, sometimes far above it.

The result is **less output** and a **higher price** than a competitive market would deliver. Competition pushes production out to P = MC. The monopolist stops short, leaving willing buyers unserved.`,
    },
    {
      heading: "Deadweight Loss",
      content: `A patient is willing to pay $200 for a drug that costs $30 to produce. Under competition, that trade happens and both sides gain. Under monopoly, the price sits at $250 and the patient walks away empty-handed. The $170 of surplus that *would* have existed vanishes entirely.

Multiply that across every unit between the monopoly quantity (Qm) and the competitive quantity (Qc), and you get **deadweight loss (DWL)**. On the graph it's the triangle between those two quantities, representing trades where buyers valued the good above production cost but got priced out anyway.

DWL is *not* the monopolist's profit. This distinction is important. Profit is a transfer. Surplus moves from consumers to the producer, but it still exists somewhere. DWL is surplus that nobody gets. It's just destroyed.

Governments pursue **antitrust regulation** precisely because of this. The bigger the gap between Qm and Qc, the larger that triangle, and the more society loses.`,
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
    explanation: "Correct. Selling one more unit means dropping the price on every unit already being sold, so the revenue gain from the new buyer is partially offset by the revenue lost on all previous units, so MR falls below price. Option A (high fixed costs) is wrong because fixed costs don't touch marginal revenue. MR is about the change in revenue from one more unit, which depends entirely on the demand curve. Option C is wrong because consumer valuation has nothing to do with it; even highly valued products have MR < P under monopoly. Option D is wrong because government price regulation would actually constrain the monopolist's pricing, not explain why MR sits below demand.",
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
    explanation: "Correct. It's a two-step process. First find the quantity where MR = MC, then go up to the demand curve to read off the price. Option A (P = MC) is the competitive firm's rule, not the monopolist's. Since MR < P for a monopolist, setting P = MC would push output past the profit-maximizing point. Option B (P = ATC) describes the break-even point where economic profit is zero, and nothing about that maximizes profit. Option D (MR = 0) maximizes total revenue, not profit. A firm that ignores costs will overshoot.",
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
    explanation: "Correct. The monopolist stops producing at MR = MC, which is fewer units than competition's P = MC outcome. Fewer units on the market means a higher price along the demand curve. Option A (more output, higher price) contradicts basic demand; you can't sell more at a higher price without demand shifting outward. Option C (more output, lower price) describes the competitive outcome, not the monopoly one. Option D (same output, higher price) is impossible without a demand shift; the monopolist raises price precisely *by* restricting quantity.",
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
    explanation: "Correct. DWL represents trades that would have made both buyers and sellers better off but never happen because the monopolist restricts output. Every unit between Qm and Qc has buyers willing to pay more than it costs to produce, and that surplus just evaporates. Option A (monopolist's total profit) confuses a transfer with a loss. Profit shifts surplus from consumers to the producer, but it still exists; DWL is surplus nobody gets. Option B (revenue lost) is vague and misleading; the monopolist deliberately forgoes that revenue because producing those units would lower MR below MC. Option D (P minus MC) describes the markup per unit, not total lost surplus.",
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
    explanation: "Correct. In a competitive market, positive profit is a neon sign that says \"enter here,\" and new firms flood in, supply rises, and profit falls to zero. Monopolists dodge this because barriers to entry (patents, resource control, scale economies, legal restrictions) keep rivals out. Option A (more efficient) is wrong because efficiency has nothing to do with it; a wildly inefficient monopolist still earns profit if no one can enter. Option B (government subsidies) describes a specific policy, not the general reason monopoly profit persists. Option D (perfectly inelastic demand) is wrong because no real-world demand curve is perfectly inelastic; at some price, buyers walk away.",
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
    explanation: "Plug in: MR = 100 − 2(30) = 100 − 60 = $40. Quick sanity check: price at Q = 30 is P = 100 − 30 = $70, and MR ($40) is less than P ($70), exactly what we'd expect. Option A ($70) is the price, not MR. This is the most common mistake on exam day: students read off the demand curve instead of the MR curve. Option C ($100) is the demand intercept (price when Q = 0), not MR at Q = 30. Option D ($60) doesn't correspond to any meaningful calculation here.",
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
    explanation: "Correct. A natural monopoly exists when economies of scale stretch across the entire market demand, so one firm's average cost keeps falling, so splitting production between two firms would just duplicate fixed costs. Think about water pipes: one network serving a city costs far less than two overlapping networks. Option A describes a legal/government-granted monopoly, which is a different category entirely. Option C describes resource-based monopoly (like De Beers with diamond mines), not a natural one. Option D has the logic backwards: natural monopolies arise when demand is *small* relative to minimum efficient scale, meaning one firm hits the entire market before exhausting its scale advantages.",
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
    explanation: "Correct. Profit per unit is (P − ATC), and total economic profit is that margin times quantity: (P − ATC) x Q. On the graph, it's the rectangle with height from ATC to P and width Qm. Option A (zero economic profit) would require P = ATC exactly, which is the break-even case, not what the question describes. Option C (a loss) has the inequality flipped; P > ATC means the firm is above break-even, not below it. Option D (maximum total revenue) confuses revenue with profit. Maximum revenue happens where MR = 0, which ignores costs entirely. A firm maximizing revenue instead of profit would overproduce.",
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
    explanation: "Set MR = MC: 120 − 4Q = 20, so Qm = 25. The competitive output is P = MC: 120 − 2Q = 20, giving Qc = 50. At Qm = 25, price is 120 − 2(25) = $70, and MC = $20. The DWL triangle spans from Q = 25 to Q = 50, bounded above by the demand curve and below by MC ($20). The height at Qm is $70 − $20 = $50, and the height at Qc is $0 (demand meets MC). DWL = 0.5 × (50 − 25) × (70 − 20) = 0.5 × 25 × 50 = $625. Option A ($250) likely results from using an incorrect base or height. Option B ($500) drops the one-half from the triangle formula. Option D ($125) uses far too small a quantity gap.",
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
    explanation: "For linear demand P = a − bQ, total revenue is TR = aQ − bQ², so MR = a − 2bQ. The MR curve shares the same y-intercept (a) but falls twice as fast (slope −2b vs. −b). Option A is wrong because MR's slope is −2b, not −b, so it falls twice as steeply. Option C describes the demand curve faced by a perfectly competitive firm, not a monopolist. Option D reverses the relationship; MR lies below demand for every positive quantity because selling additional units requires lowering the price on all previous units.",
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
    explanation: "A natural monopoly has declining average total cost over the relevant range of output, meaning MC lies below ATC. Forcing P = MC sets price below ATC, so the firm suffers losses and will exit unless the government provides a subsidy. The output is allocatively efficient (P = MC maximizes total surplus), but the firm cannot sustain it independently. Option A is wrong because with a natural monopoly's cost structure, MC < ATC, so P = MC means P < ATC and the firm loses money. Option C is wrong because P = MC forces output beyond the monopoly quantity, not at it. Option D is wrong because moving from monopoly output toward the P = MC output reduces deadweight loss rather than increasing it.",
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
    explanation: "With third-degree price discrimination, the monopolist sets MR = MC separately in each market segment. The low-price group gets a lower price (because their demand is more elastic), which increases quantity sold to that segment. If this increase outweighs any reduction in the high-price segment, total output rises. This is especially likely when the low-price segment was largely priced out under a single monopoly price. Option A is wrong because while the high-price group may see restricted output, the low-price group typically sees expanded output, and the net effect depends on elasticities. Option B incorrectly assumes a single MR = MC condition; the firm equates MR to MC in each segment independently. Option D is unrealistic; consumers in separated markets cannot observe the other group's price.",
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
    explanation: "A patent is a legal barrier that prohibits competitors from producing the same product for 20 years, directly blocking entry regardless of potential profits. This is the textbook example of a strong, enforceable barrier. Option A is weak because advertising spending can be matched by a well-funded entrant; it raises the cost of entry but does not block it legally. Option B actually encourages entry by many differentiated firms, which characterizes monopolistic competition, not monopoly. Option D is the opposite of a barrier; low fixed costs make it easy for firms to enter, undermining monopoly power.",
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
    explanation: "MR = 200 − 10Q. Set MR = MC: 200 − 10Q = 50, so Q = 15. Price = 200 − 5(15) = $125. Profit per unit = P − ATC = $125 − $50 = $75. Total profit = $75 × 15 = $1,125. Option B ($2,250) doubles the correct answer, likely forgetting to account for costs or miscomputing quantity. Option C ($750) likely uses the wrong quantity (Q = 10). Option D ($562.50) appears to halve the correct profit, perhaps confusing profit with consumer surplus or applying the triangle formula where a rectangle is appropriate.",
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
    explanation: "The monopolist restricts output below the competitive level. Units between Qm and Qc would have generated surplus (buyers valued them above MC), but they are never produced. That lost surplus is deadweight loss; it accrues to nobody. Option A is wrong because monopoly reduces total surplus; the firm may or may not be more efficient, but restricting output destroys surplus regardless. Option C describes perfect (first-degree) price discrimination, not single-price monopoly. A single-price monopolist leaves some consumer surplus intact for those who value the good above the monopoly price. Option D is wrong because the monopolist's producer surplus actually increases relative to competition; the higher price on units sold more than compensates for the lost sales, shifting surplus from consumers to the producer.",
  },
];
