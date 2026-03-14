export const monopolisticCompContent = {
  title: "Monopolistic Competition",
  subtitle:
    "The market structure most firms actually operate in: product differentiation, easy entry, and zero long-run profit.",

  sections: [
    {
      heading: "Why Most Markets Aren't Perfect",
      content: `Count the shampoo brands at any grocery store. Dozens of them, each slightly different in scent, packaging, or promised benefits. None of these companies is a monopoly. None is a perfect competitor either. They all sell shampoo, yet each has carved out a small slice of market power by making its product *feel* distinct.

**Monopolistic competition** combines two features that seem contradictory: each firm has a tiny monopoly over its own branded product, but entry is essentially free, so competition erodes any lasting advantage.

Four conditions define this structure. Many firms, each too small to affect the overall market. Products are differentiated, not identical, but close substitutes. Firms can enter or exit freely. Each firm faces a downward-sloping demand curve because its product is at least somewhat unique.

Starbucks charges more than a generic diner because customers perceive a difference in atmosphere, quality, and brand. But if Starbucks raised prices dramatically, most customers would walk across the street. The demand curve slopes down, but it stays relatively flat. Close substitutes keep the firm honest.`,
    },
    {
      heading: "Short-Run Profit Maximization",
      content: `In the short run, a monopolistically competitive firm behaves much like a monopolist. It faces a downward-sloping demand curve, and its marginal revenue curve lies below demand for the same algebraic reason as in monopoly: cutting price to sell one more unit means cutting price on *all* units.

The firm maximizes profit where **MR = MC**, then reads up to the demand curve to find the price consumers will pay for that quantity. If price exceeds average total cost, the firm earns positive economic profit.

Worked example: a boutique bakery faces demand P = 90 - 0.8Q, so MR = 90 - 1.6Q. Marginal cost is MC = 10 + 0.5Q.

Set MR = MC:
90 - 1.6Q = 10 + 0.5Q
80 = 2.1Q
Q = 38 units (approximately)

Price: P = 90 - 0.8(38) = $59.60
If ATC at 38 units is $42, profit = ($59.60 - $42) x 38 = roughly $669.

Toggle the graph to "Short Run" to see this. The shaded rectangle between price and ATC represents economic profit, meaning real profit above what the owners could earn elsewhere.`,
    },
    {
      heading: "Long-Run Adjustment: Profit Gets Competed Away",
      content: `Monopolistic competition diverges from monopoly right here. Those short-run profits attract new entrants. A bakery opens down the street, then another. Each new entrant steals customers from existing firms, which means each existing firm's demand curve *shifts left*.

Entry continues as long as positive economic profit exists. It stops only when every firm's demand curve has shifted left far enough to become *tangent* to its ATC curve. At that tangency point, price exactly equals average total cost, and economic profit drops to zero.

The **long-run equilibrium** of monopolistic competition:
- P = ATC (zero economic profit)
- MR = MC (firms still optimize)
- The demand curve just barely touches the ATC curve at exactly one point

Losses trigger the reverse process. Some firms exit, the remaining firms' demand curves shift right, and adjustment continues until profit returns to zero.

Toggle the graph to "Long Run" to watch the demand curve slide left until it becomes tangent to ATC. The profit rectangle disappears entirely.`,
    },
    {
      heading: "Excess Capacity and the Markup",
      content: `The long-run tangency creates two features that separate monopolistic competition from perfect competition.

First: **excess capacity**. The firm produces on the downward-sloping portion of its ATC curve, to the left of the minimum. It could lower average cost by producing more, but that would require cutting price below ATC. The gap between actual output and the output at minimum ATC is excess capacity. Restaurants, salons, clothing stores, they all operate well below full capacity most of the time. That half-empty restaurant at 2 PM on a Tuesday is excess capacity made visible.

Second: **markup over marginal cost**. Because the demand curve slopes downward, price always exceeds marginal cost in equilibrium (P > MC). In perfect competition, P = MC. The difference is essentially the cost of product variety. Consumers pay slightly more per unit but get a wider range of products to choose from.

Is excess capacity wasteful? Depends who you ask. Some economists say yes, resources are spread too thin across too many firms. Others point out that the variety consumers gain (Thai food *and* Italian *and* Ethiopian on the same block) is worth the slight inefficiency. The AP exam expects you to recognize excess capacity as a feature of the model without making a value judgment.`,
    },
    {
      heading: "Monopolistic Competition vs. Other Structures",
      content: `Place monopolistic competition on the spectrum. One end: perfect competition with many firms, identical products, P = MC, zero profit, no excess capacity. Other end: monopoly with one firm, unique product, P > MC, persistent profit, restricted output.

Monopolistic competition sits closer to the competitive end. Like perfect competition, it has many firms and free entry, driving profit to zero in the long run. Like monopoly, each firm has a downward-sloping demand and sets P > MC.

Key differences from perfect competition:
- Firms are *price setters* (not price takers) because products are differentiated
- P > MC means a small deadweight loss exists, though much smaller than a monopoly's
- Firms produce below efficient scale (excess capacity)
- Zero economic profit in the long run, same as perfect competition

Key differences from monopoly:
- Free entry competes profit away. No long-run economic profit.
- Many close substitutes make demand relatively elastic (flat demand curve)
- Much less market power, smaller markup, smaller DWL

AP exam tip: if a question mentions "differentiated products" and "free entry," you are in monopolistic competition territory. "Identical products" points to perfect competition. "Barriers to entry" points to monopoly or oligopoly.`,
    },
    {
      heading: "What Students Get Wrong",
      content: `The most common mistake: confusing the long-run result with perfect competition. Both have zero economic profit. The *reason* differs. In perfect competition, P = MC = minimum ATC. In monopolistic competition, P = ATC but P > MC, and the firm does not produce at minimum ATC.

Another frequent error is assuming zero economic profit means the firm is failing. Not true. Zero *economic* profit means the firm earns a normal rate of return, enough to keep operating. The owners earn exactly what they would earn in their next-best alternative. The firm is fine. It just is not earning anything extra.

Students also sometimes believe demand becomes horizontal in the long run. It does not. The demand curve shifts left (fewer customers per firm), but it stays downward-sloping because the product is still differentiated. If demand were horizontal, you would be in perfect competition, and there would be no excess capacity.

One more: forgetting which curve demand is tangent to. It is tangent to **ATC**, not MC. The tangency point is where P = ATC and the demand curve just barely touches the ATC curve from above. At any other quantity, ATC would exceed price, confirming that zero profit is the best the firm can do.`,
    },
  ],
};

export const monopolisticCompQuestions = [
  {
    id: "mc-1",
    question:
      "In the long run, a monopolistically competitive firm earns zero economic profit because:",
    options: [
      "The government regulates prices to equal average total cost",
      "Free entry and exit shift the firm's demand curve until P = ATC",
      "Firms collude to set prices equal to marginal cost",
      "Consumers become indifferent between products over time",
    ],
    correctIndex: 1,
    explanation:
      "Free entry attracts new firms whenever profit exists, stealing customers from incumbents. Each firm's demand curve shifts left until it is tangent to ATC, making P = ATC and economic profit zero. No government regulation or collusion is involved — it's the automatic result of free entry. Option D is wrong because products remain differentiated even in the long run.",
  },
  {
    id: "mc-2",
    question:
      "Excess capacity in monopolistic competition means the firm:",
    options: [
      "Produces more output than the socially optimal level",
      "Operates on the upward-sloping portion of its ATC curve",
      "Produces less than the quantity that minimizes average total cost",
      "Has marginal cost equal to average total cost at its chosen output",
    ],
    correctIndex: 2,
    explanation:
      "Excess capacity means the firm operates on the downward-sloping portion of ATC — to the left of the minimum point. It could lower average cost by producing more, but profit maximization (MR = MC) doesn't call for that output level. Option A describes the opposite problem. Option B is wrong because the firm is on the falling part of ATC, not the rising part. Option D describes the minimum ATC point itself, not the firm's actual position.",
  },
  {
    id: "mc-3",
    question:
      "Which of the following best distinguishes monopolistic competition from perfect competition?",
    options: [
      "Monopolistically competitive firms earn long-run economic profit",
      "Monopolistically competitive firms sell differentiated products",
      "Perfect competition has barriers to entry",
      "Perfect competition features downward-sloping firm demand curves",
    ],
    correctIndex: 1,
    explanation:
      "Product differentiation is the defining feature that separates monopolistic competition from perfect competition. Both structures have free entry and zero long-run profit, so A is wrong. Perfect competition has no barriers to entry (C is backward). In perfect competition, the firm faces a horizontal demand curve, not a downward-sloping one (D is backward).",
  },
  {
    id: "mc-4",
    question:
      "A monopolistically competitive firm maximizes profit by producing where:",
    options: [
      "Price equals marginal cost",
      "Price equals average total cost",
      "Marginal revenue equals marginal cost",
      "Marginal revenue equals average total cost",
    ],
    correctIndex: 2,
    explanation:
      "Like any firm with market power, a monopolistically competitive firm maximizes profit at MR = MC, then charges the price from its demand curve at that quantity. P = MC is the perfect competition result (A is wrong). P = ATC is the zero-profit condition in long-run equilibrium, not the profit-maximization rule (B describes a long-run outcome, not the decision rule). MR = ATC has no economic significance (D is wrong).",
  },
  {
    id: "mc-5",
    question:
      "In the short run, a monopolistically competitive firm can earn positive economic profit. What happens next?",
    options: [
      "The government imposes a price ceiling to eliminate the profit",
      "New firms enter, shifting each existing firm's demand curve to the left",
      "Existing firms raise prices to increase their profit further",
      "Consumers switch to perfectly competitive substitutes",
    ],
    correctIndex: 1,
    explanation:
      "Positive profit attracts entry because there are no barriers. New firms offering similar products draw customers away from existing firms, shifting each incumbent's demand leftward. This continues until profit reaches zero. Government intervention (A) isn't part of the model. Raising prices (C) would reduce quantity demanded and wouldn't be optimal. Consumers don't switch to a different market structure (D) — new firms enter the same monopolistically competitive market.",
  },
  {
    id: "mc-6",
    question:
      "In long-run equilibrium, the demand curve of a monopolistically competitive firm is tangent to:",
    options: [
      "The marginal cost curve",
      "The marginal revenue curve",
      "The average total cost curve",
      "The average variable cost curve",
    ],
    correctIndex: 2,
    explanation:
      "The long-run zero-profit condition requires P = ATC. Geometrically, this happens when the demand curve is tangent to the ATC curve — they touch at exactly one point. If demand intersected ATC at two points, the firm could earn profit between them. Tangency to MC (A) would imply P = MC, which is perfect competition. The demand curve has no special relationship to MR (B) or AVC (D) at the long-run equilibrium.",
  },
  {
    id: "mc-7",
    question:
      "Compared to a perfectly competitive firm in long-run equilibrium, a monopolistically competitive firm charges a price that is:",
    options: [
      "Lower, because there are more firms in the market",
      "Equal, because both earn zero economic profit",
      "Higher, because the firm has some market power from product differentiation",
      "Higher, because the firm faces barriers to entry",
    ],
    correctIndex: 2,
    explanation:
      "Product differentiation gives each monopolistically competitive firm a downward-sloping demand curve, which means P > MC. The firm charges a markup over marginal cost, resulting in a higher price than a perfectly competitive firm would charge. Both earn zero profit in the long run (B confuses profit with price — zero profit doesn't mean the same price). There are no barriers to entry in monopolistic competition (D is wrong). More firms doesn't automatically mean lower prices when products are differentiated (A is wrong).",
  },
  {
    id: "mc-8",
    question:
      "A monopolistically competitive firm advertises heavily to differentiate its product. If successful, this advertising will:",
    options: [
      "Make the firm's demand curve more elastic (flatter)",
      "Shift the firm's demand curve to the right and make it less elastic",
      "Eliminate excess capacity by moving production to minimum ATC",
      "Convert the market structure to perfect competition",
    ],
    correctIndex: 1,
    explanation:
      "Successful advertising increases brand loyalty, which draws more customers (demand shifts right) and makes them less sensitive to price changes (demand becomes steeper / less elastic). This temporarily increases the firm's market power and short-run profit. It doesn't eliminate excess capacity (C) — that's a structural feature of the model. It doesn't create perfect competition (D) — it actually moves further from it by strengthening differentiation. Option A is backward — more brand loyalty means less elasticity, not more.",
  },
  {
    id: "mc-9",
    question:
      "A monopolistically competitive firm is currently earning short-run economic profit. In the long run, the firm's demand curve will shift to the left. This leftward shift stops when:",
    options: [
      "Price equals marginal cost at the profit-maximizing quantity",
      "The demand curve is tangent to the ATC curve, making economic profit zero",
      "Marginal revenue equals average total cost",
      "The firm's demand curve becomes perfectly elastic",
    ],
    correctIndex: 1,
    explanation:
      "Entry continues as long as economic profit attracts new firms. Each entrant steals customers, shifting incumbents' demand curves leftward. Entry stops precisely when the demand curve becomes tangent to ATC — at that single point, P = ATC and economic profit is zero. No more incentive to enter. Option A describes the perfect competition outcome (P = MC), but monopolistic competition never reaches P = MC because the demand curve stays downward-sloping. Option C (MR = ATC) has no standard economic meaning and is not an equilibrium condition in any market structure. Option D would mean the product is no longer differentiated, converting the market to perfect competition, which contradicts the assumption of product differentiation.",
  },
  {
    id: "mc-10",
    question:
      "Excess capacity in monopolistic competition exists because in long-run equilibrium, the firm produces:",
    options: [
      "On the upward-sloping portion of ATC, beyond minimum ATC",
      "At the minimum point of the ATC curve where P = MC",
      "On the downward-sloping portion of ATC, to the left of minimum ATC",
      "Where marginal cost intersects the demand curve",
    ],
    correctIndex: 2,
    explanation:
      "The long-run tangency between demand and ATC occurs on the downward-sloping portion of the ATC curve, to the left of its minimum point. The firm could theoretically lower average cost by producing more, but doing so would push price below ATC and generate losses. The gap between actual output and minimum-ATC output is excess capacity. Option A places the firm on the wrong side of the ATC curve — operating beyond minimum ATC would mean rising average costs. Option B describes the perfectly competitive long-run equilibrium, not monopolistic competition. Option D describes allocative efficiency (P = MC), which does not hold in monopolistic competition because P > MC.",
  },
  {
    id: "mc-11",
    question:
      "Product differentiation in monopolistic competition gives firms a downward-sloping demand curve. Compared to a monopolist, the monopolistically competitive firm's demand curve is:",
    options: [
      "Steeper, because there are fewer substitutes available",
      "Identical, because both are price makers",
      "More elastic, because many close substitutes exist",
      "Perfectly inelastic, because brand loyalty locks in customers",
    ],
    correctIndex: 2,
    explanation:
      "Close substitutes are the key difference. A monopolistically competitive firm has many competitors offering similar products, so consumers can easily switch if the price rises. This makes demand relatively elastic (flat). A monopolist, by contrast, has no close substitutes, so its demand curve is steeper (less elastic). Option A reverses the logic — fewer substitutes make demand steeper for the monopolist, not for the monopolistically competitive firm. Option B ignores the critical difference in the number and closeness of substitutes, which directly affects demand elasticity. Option D is extreme and unrealistic — no firm faces perfectly inelastic demand, and brand loyalty in monopolistic competition is moderate at best.",
  },
  {
    id: "mc-12",
    question:
      "A monopolistically competitive firm earns zero economic profit in long-run equilibrium. A new study reveals that the firm's product causes health problems, reducing consumer demand. In the short run, the firm will:",
    options: [
      "Continue earning zero profit because entry and exit maintain equilibrium",
      "Earn economic losses as demand shifts left and P falls below ATC",
      "Raise its price to compensate for lost sales volume",
      "Switch to producing a different product immediately",
    ],
    correctIndex: 1,
    explanation:
      "Starting from zero-profit equilibrium, a leftward demand shift means the demand curve now lies entirely below the ATC curve at the profit-maximizing output. The firm still sets MR = MC, but the resulting price is below ATC, generating economic losses. Option A confuses the short run with the long run — entry and exit take time, so short-run losses persist until firms exit. Option C is irrational — with lower demand, raising price would reduce quantity demanded even further, worsening losses. The firm is already maximizing profit (minimizing losses) at MR = MC. Option D ignores the reality of sunk costs, specialized capital, and the time required to retool — firms do not switch production instantaneously.",
  },
  {
    id: "mc-13",
    question:
      "Which of the following statements correctly compares monopolistic competition to perfect competition in long-run equilibrium?",
    options: [
      "Both produce at minimum ATC and earn zero economic profit",
      "Monopolistic competition has P > MC and excess capacity; perfect competition has P = MC and no excess capacity",
      "Perfect competition has a higher price because firms are more efficient",
      "Monopolistic competition has lower prices because of intense brand competition",
    ],
    correctIndex: 1,
    explanation:
      "In perfect competition, long-run equilibrium occurs at minimum ATC where P = MC = minimum ATC — no excess capacity, maximum efficiency. In monopolistic competition, the downward-sloping demand curve creates a tangency to the left of minimum ATC, so P > MC (allocative inefficiency) and the firm underproduces relative to its efficient scale (excess capacity). Both earn zero economic profit. Option A is wrong because only perfect competition produces at minimum ATC. Option C reverses the price relationship — perfect competition yields the lowest possible price, not the highest. Option D is wrong because product differentiation and the resulting markup mean monopolistically competitive prices exceed competitive prices.",
  },
  {
    id: "mc-14",
    question:
      "Industry-wide advertising in a monopolistically competitive market increases total demand for the product category but also increases each firm's costs. The most likely long-run effect is:",
    options: [
      "All firms earn persistent economic profit from the demand increase",
      "Economic profit remains zero because entry offsets demand gains, while higher costs shift ATC upward",
      "Firms exit the market because advertising costs exceed the revenue gains",
      "The market converts to an oligopoly as only large firms can afford advertising",
    ],
    correctIndex: 1,
    explanation:
      "Free entry is the equalizer. Even if advertising boosts demand, any resulting economic profit attracts entrants who split the market. Long-run equilibrium returns to zero economic profit. However, the ATC curve shifts upward due to advertising costs, so each firm charges a higher price to cover those costs while still earning zero profit. Option A ignores the free entry condition — profit cannot persist when there are no barriers. Option C is too pessimistic — if advertising were unprofitable, rational firms would stop doing it, and the market would adjust. Option D is possible in theory but overstates the effect — monopolistic competition is defined by low barriers to entry, and advertising alone rarely creates the scale barriers needed for oligopoly.",
  },
  {
    id: "mc-15",
    question:
      "If several firms exit a monopolistically competitive industry that is experiencing economic losses, the remaining firms will see their:",
    options: [
      "Demand curves shift rightward and profits increase toward zero",
      "Demand curves shift leftward and losses deepen",
      "Supply curves shift rightward, lowering the market price",
      "Marginal cost curves shift downward due to economies of scale",
    ],
    correctIndex: 0,
    explanation:
      "When firms exit, their former customers redistribute among the remaining firms. Each surviving firm's demand curve shifts to the right, increasing quantity demanded at every price. This process continues until demand shifts far enough rightward that firms return to zero economic profit (demand tangent to ATC). Option B has the direction backwards — exit helps remaining firms, it does not hurt them. Option C confuses firm-level analysis with market-level supply; in monopolistic competition, we focus on individual firm demand curves, not a market supply curve. Option D is unlikely because firm-level cost curves are determined by the firm's own production technology, not by the number of competitors in the industry.",
  },
];
