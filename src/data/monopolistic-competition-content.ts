export const monopolisticCompContent = {
  title: "Monopolistic Competition",
  subtitle:
    "Toggle between short run and long run on the graph — watch profit appear, then vanish as new firms crowd in",

  sections: [
    {
      heading: "Why Most Markets Aren't Perfect",
      content: `Count the shampoo brands next time you're at a Target or Kroger. Dozens of them — each slightly different in scent, packaging, or promised miracle. None of these companies is a monopoly. None is a perfect competitor either. They all sell shampoo, but each has carved out a small slice of market power by making its product *feel* distinct.

**Monopolistic competition** combines two features that seem contradictory: each firm holds a tiny monopoly over its own branded product, yet entry is essentially free, so competition erodes any lasting advantage.

Four conditions define this structure. Many firms, each too small to move the overall market. Products are differentiated — not identical, but close substitutes. Firms enter or exit freely. Each firm faces a downward-sloping demand curve because its product is at least somewhat unique.

Look at the demand curve on the graph. It slopes down, but it's relatively flat. That flatness matters. Starbucks can charge more than a generic diner because customers perceive a difference in atmosphere and brand. But if Starbucks jacked prices to $12 for a latte, most people would walk across the street. Close substitutes keep the demand curve from getting steep.`,
    },
    {
      heading: "Short-Run Profit Maximization",
      content: `Toggle the graph to "Short Run" and look at the shaded rectangle. That's economic profit.

In the short run, a monopolistically competitive firm behaves like a textbook monopolist. Downward-sloping demand curve. Marginal revenue curve sitting below demand for the same algebraic reason as monopoly — cutting price to sell one more unit means cutting price on *all* units already being sold.

The firm maximizes profit where **MR = MC**, then reads up to the demand curve to find what consumers will actually pay for that quantity. If price lands above average total cost, the firm earns positive economic profit. That shaded rectangle between price and ATC at the profit-maximizing quantity — drag your cursor over it — represents real profit above what the owners could earn doing anything else.

A worked example. A boutique bakery faces demand P = 90 - 0.8Q, giving MR = 90 - 1.6Q. Marginal cost is MC = 10 + 0.5Q. Set MR = MC: 90 - 1.6Q = 10 + 0.5Q, so 80 = 2.1Q, Q = 38 units approximately. Price: P = 90 - 0.8(38) = $59.60. If ATC at 38 units is $42, profit = ($59.60 - $42) x 38 = roughly $669.`,
    },
    {
      heading: "Long-Run Adjustment: Profit Gets Competed Away",
      content: `Toggle the graph to "Long Run" and watch what happens to that profit rectangle. It disappears.

Those short-run profits attracted new entrants. Another bakery opened down the street. Then another. Each new competitor stole customers from existing firms, meaning each incumbent's demand curve *shifted left*. Entry continues as long as positive economic profit exists anywhere in the market. It stops only when every firm's demand curve has shifted left far enough to become *tangent* to its ATC curve.

At that tangency point — zoom in on the graph to see it — price exactly equals average total cost. Zero economic profit.

The **long-run equilibrium** of monopolistic competition has three features happening simultaneously: P = ATC (zero economic profit), MR = MC (firms still optimize), and the demand curve barely touches the ATC curve at exactly one point. Not intersecting it. Tangent to it.

Losses trigger the reverse. Some firms exit, surviving firms' demand curves shift right, and adjustment continues until profit returns to zero. The market oscillates toward that tangency like a pendulum settling.`,
    },
    {
      heading: "Excess Capacity and the Markup",
      content: `Look at where the firm produces on the ATC curve in the long-run graph. It's on the downward-sloping portion — to the left of the minimum point.

That gap between actual output and minimum-ATC output is **excess capacity**. The firm could lower its average cost by producing more, but doing so would require cutting price below ATC and taking losses. Restaurants, hair salons, clothing boutiques — they all operate well below full capacity most of the time. That half-empty restaurant at 2 PM on a Tuesday is excess capacity made visible.

Now compare price to the MC curve. Price sits above marginal cost. That gap is the **markup over marginal cost**. In perfect competition, P = MC. Here, P > MC because the downward-sloping demand curve forces a wedge between them. Consumers pay slightly more per unit, but in exchange they get variety — Thai food *and* Italian *and* Ethiopian all on the same block.

Is excess capacity wasteful? Some economists say yes, resources spread too thin across too many firms producing below efficient scale. Others argue the variety consumers gain justifies the slight inefficiency. The AP exam expects you to identify excess capacity as a structural feature of the model without taking sides. Just point at the graph, note where the firm sits on the ATC curve, and describe the gap.`,
    },
    {
      heading: "Monopolistic Competition vs. Other Structures",
      content: `Place monopolistic competition on the spectrum. One end: perfect competition with many firms, identical products, P = MC, zero profit, no excess capacity. Other end: monopoly with one firm, unique product, P > MC, persistent profit, restricted output.

Monopolistic competition sits closer to the competitive end.

Like perfect competition, it has many firms and free entry, driving profit to zero in the long run. Like monopoly, each firm faces a downward-sloping demand and sets P > MC. On the graph, toggle between market structures and compare the size of the deadweight loss triangles — monopolistic competition's is far smaller than monopoly's.

Differences from perfect competition: firms are *price setters* because products are differentiated (not price takers), P > MC creates a small deadweight loss, firms produce below efficient scale (excess capacity), but zero economic profit in the long run, same as perfect competition.

Differences from monopoly: free entry competes profit away so no long-run economic profit persists, many close substitutes make demand relatively elastic (notice the flatter demand curve), and the markup and deadweight loss are much smaller.

On the AP exam, the giveaway language works like this. "Differentiated products" plus "free entry" means monopolistic competition. "Identical products" signals perfect competition. "Barriers to entry" points to monopoly or oligopoly.`,
    },
    {
      heading: "What Students Get Wrong",
      content: `Both monopolistic competition and perfect competition produce zero economic profit in the long run. Picking the wrong answer on an AP question often comes down to confusing *why* each structure reaches that result. In perfect competition, P = MC = minimum ATC. In monopolistic competition, P = ATC but P > MC, and the firm doesn't sit at minimum ATC. Same profit outcome, different graph geometry.

Zero economic profit does not mean the firm is failing. Zero *economic* profit means the firm earns a normal rate of return — enough to keep the doors open, enough that the owners earn exactly what they'd earn in their next-best alternative. The firm is fine. It just isn't earning anything extra above opportunity cost.

Another wrong answer that shows up repeatedly: claiming that demand becomes horizontal in the long run. It doesn't. Pull up the long-run graph and look. The demand curve shifted left (fewer customers per firm as entrants arrived), but it stays downward-sloping because the product is still differentiated. If demand were horizontal, you'd be in perfect competition and there'd be no excess capacity at all.

One more. The tangency in long-run equilibrium is between demand and **ATC**, not MC. The demand curve just barely touches the ATC curve from above. At any other quantity, ATC would exceed price, confirming that zero profit is the best achievable outcome.`,
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
      "Free entry does the work. New firms enter whenever profit exists, stealing customers from incumbents. Each firm's demand curve slides left until it's tangent to ATC — P = ATC, profit gone. No government regulation or collusion involved. (D) is wrong because products remain differentiated even in the long run; consumers still prefer one brand over another.",
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
      "Look at the ATC curve on the graph. The firm operates on the downward-sloping portion, to the left of the minimum point. It could lower average cost by producing more, but MR = MC doesn't call for that higher output level. (B) places the firm on the wrong side of the curve. (D) describes the minimum-ATC point itself, which is precisely where the firm does not produce.",
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
      "Product differentiation. That's the defining split. Both structures have free entry and zero long-run profit, so (A) is wrong. Perfect competition has no barriers to entry — (C) has it backward. In perfect competition, firm demand is horizontal, not downward-sloping — (D) is also backward.",
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
      "MR = MC. Same profit-maximization rule as any firm with market power — find that intersection on the graph, then read up to the demand curve for price. (A) is the perfect competition result. (B) is the zero-profit condition in long-run equilibrium, a result, not a decision rule. (D) has no economic significance in any market structure.",
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
      "No barriers to entry. Profit attracts new firms offering similar products, pulling customers away from incumbents. Each existing firm's demand shifts left until profit reaches zero. (C) is irrational — raising prices when new competitors are arriving would accelerate customer loss. (D) confuses market structures; consumers don't jump between structures, new firms enter the same monopolistically competitive market.",
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
      "Tangent to ATC. That single tangency point is where P = ATC and economic profit hits zero. If demand intersected ATC at two points, the firm could earn profit between them — so it must be tangency, not intersection. (A) would mean P = MC, which is the perfect competition outcome. (D) has no role in the long-run equilibrium condition.",
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
      "Product differentiation gives each firm a downward-sloping demand curve, so P > MC. The markup means a higher price than a perfectly competitive firm would charge. (B) confuses profit with price — zero profit doesn't mean identical prices across market structures. (D) is wrong because monopolistic competition has no barriers to entry; the higher price comes from differentiation, not protection from competition.",
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
      "Successful advertising builds brand loyalty. More customers arrive (demand shifts right) and existing customers become less price-sensitive (demand steepens, becoming less elastic). Short-run profit rises temporarily. (A) gets the elasticity direction wrong — loyalty reduces sensitivity to price, it doesn't increase it. (C) misunderstands the model; excess capacity is structural and advertising doesn't eliminate it. (D) is the opposite of what happens — stronger differentiation moves further from perfect competition.",
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
      "Entry stops when there's no more profit to chase. That happens at the exact moment the demand curve becomes tangent to ATC — one touching point, P = ATC, zero economic profit. (A) describes perfect competition (P = MC), which this market structure never reaches because the demand curve stays downward-sloping. (D) would mean the product is no longer differentiated at all, contradicting the foundational assumption of the model.",
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
      "The tangency between demand and ATC occurs on the downward-sloping portion, to the left of minimum ATC. The firm could theoretically lower average cost by producing more, but pushing output higher would drop price below ATC and generate losses. That gap between actual output and minimum-ATC output is the excess capacity you can see on the graph. (A) places the firm on the wrong side. (B) describes perfect competition's long-run equilibrium.",
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
      "Close substitutes are everything. A monopolistically competitive firm has dozens of competitors selling similar products, so customers can easily jump ship if price rises even a little. Demand stays relatively flat — elastic. A monopolist faces no close substitutes, so its demand curve is much steeper. (A) reverses the logic. (D) is extreme and unrealistic; no firm in any market structure faces perfectly inelastic demand.",
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
      "Starting from zero profit, any leftward demand shift drops the demand curve entirely below ATC at the profit-maximizing output. The firm still sets MR = MC — that's rational even when losing money — but price now falls below ATC, generating losses. (A) confuses short run with long run; exit takes time, so losses persist until firms actually leave. (C) is irrational; with fewer customers, raising price would drive quantity demanded even lower.",
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
      "Perfect competition reaches minimum ATC where P = MC — maximum efficiency, no excess capacity. Monopolistic competition's downward-sloping demand creates tangency to the left of minimum ATC, so P > MC (allocative inefficiency) and the firm underproduces relative to efficient scale. Both earn zero economic profit. (A) is wrong because only perfect competition produces at minimum ATC. (D) reverses the price comparison; the markup in monopolistic competition means higher prices, not lower.",
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
      "Free entry neutralizes any profit boost. Even if advertising grows total demand, profit attracts entrants who split the market. Long-run equilibrium returns to zero economic profit — but now with a higher ATC curve because of advertising costs, meaning each firm charges a higher price to cover those costs while still earning zero profit. (A) ignores the free entry condition entirely. (C) is too gloomy; if advertising were unprofitable, rational firms would stop doing it and the market would adjust.",
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
      "When firms exit, their former customers redistribute among whoever remains. Each surviving firm's demand curve shifts right, increasing quantity demanded at every price. This continues until demand shifts far enough that firms return to zero economic profit — demand tangent to ATC again. (B) has the direction backwards; exit helps surviving firms, it doesn't hurt them. (C) confuses firm-level analysis with market supply; in monopolistic competition the focus is on individual firm demand curves, not an aggregate supply curve.",
  },
];
