import type { PracticeQuestion } from "@/data/supply-demand-content";

export const perfectCompetitionContent = {
  title: "Perfect Competition",
  subtitle: "Price-taking firms, free entry and exit, and what profit maximization actually looks like",
  sections: [
    {
      heading: "Price-Taking Behavior",
      content: `A wheat farmer in Kansas grows 500 acres of hard red winter wheat, the same variety as thousands of other farms across the Great Plains. When harvest comes, the farmer sells at whatever the market price happens to be. Charging more is pointless because buyers would just go next door. Charging less is unnecessary because every bushel already sells at the going rate.

That's what it means to be a **price taker**. The firm faces a horizontal demand curve at the market price. Sell as much as you want at that price, but try to charge even a penny more and your sales drop to zero.

Four conditions create this situation: many small firms, identical products, perfect information, and free entry/exit. No single real-world market hits all four perfectly, but agricultural commodities and certain financial markets come close enough that the model generates accurate predictions.`,
    },
    {
      heading: "Profit Maximization: P = MC",
      content: `The decision rule is the same one every firm uses: keep producing as long as each additional unit brings in more revenue than it costs.

In competitive markets, selling one more bushel adds exactly the market price to revenue. So **MR = P**, and the profit-maximizing rule **MR = MC** simplifies to **P = MC**. Find where the market price intersects the marginal cost curve. That's your optimal quantity.

Produce past that point and you're spending more on each extra unit than you earn from it. Stop short and you're leaving money on the table, with profitable units going unmade.

Try it on the graph: shift market demand or supply and watch how the equilibrium price changes. The firm's output adjusts automatically to wherever P = MC lands on the cost curve.`,
    },
    {
      heading: "Short-Run Profit and Loss",
      content: `Three scenarios play out here, depending on where the market price lands relative to the firm's cost curves.

**P > ATC**: the firm earns economic profit. Each unit sold brings in more than it costs on average. The gap between price and ATC, multiplied by quantity, gives you the profit rectangle on the graph.

**P < ATC but P > AVC**: the firm is losing money but keeps producing. Fixed costs (rent on the building, equipment leases) have to be paid whether you produce or not. As long as revenue covers all variable costs and chips away at some of the fixed costs, shutting down would mean an even *bigger* loss. So the firm stays open.

**P < AVC**: time to close. Revenue doesn't even cover variable costs, so every unit produced digs the hole deeper. The firm produces nothing and eats the fixed costs. That's the **shutdown point**.`,
    },
    {
      heading: "The Shutdown Condition",
      content: `This trips people up constantly, so let's get the logic straight.

A restaurant pays $5,000/month in rent whether it opens or not. If it stays open, it earns $8,000 in revenue and spends $7,000 on food, staff, and utilities (variable costs). Staying open: $8,000 - $7,000 - $5,000 = -$4,000 loss. Closing: -$5,000 loss (just rent). Staying open is the better option. It covers variable costs and knocks $1,000 off the fixed costs.

Now suppose revenue drops to $6,000 with the same $7,000 in variable costs. Staying open: $6,000 - $7,000 - $5,000 = -$6,000. Closing: -$5,000. Shut down. You lose more by operating than by sitting dark.

The rule: **shut down when P < minimum AVC**. The firm's **short-run supply curve** is the portion of MC that lies above that minimum AVC threshold. Below it, quantity supplied is zero.`,
    },
    {
      heading: "Long-Run Equilibrium",
      content: `Profits attract competitors. Losses drive them away. Those two sentences basically explain the entire long-run adjustment process.

When firms in a market earn economic profit, outsiders notice. New firms enter, supply increases, the market price drops, and profits shrink. Entry continues until there's nothing extra to attract newcomers.

When firms are losing money, some give up and exit. Supply decreases, the market price rises, and losses shrink for whoever remains. Exit continues until the remaining firms break even.

The endpoint is **P = minimum ATC** for every firm. Economic profit is zero. That doesn't mean the business is failing. It means owners are earning exactly what they'd earn in their best alternative investment. Zero *economic* profit still includes a normal accounting return. The firm is fine; it's just not earning anything above what it takes to keep capital invested.`,
    },
    {
      heading: "Efficiency in Perfect Competition",
      content: `Perfect competition delivers two efficiency results that no other market structure matches in the long run.

**Allocative efficiency** means P = MC. The price of the last unit sold equals what it cost to produce. Resources go exactly where consumers value them most. You can't reshuffle production to make someone better off without making someone else worse off.

**Productive efficiency** means every firm operates at the bottom of its ATC curve. Nothing is wasted. Output gets produced at the lowest possible per-unit cost.

There's a reason economists treat perfect competition as the benchmark. When we say a monopoly creates deadweight loss or that monopolistic competition leads to excess capacity, the measuring stick is always: "compared to what perfect competition would deliver." Every other market structure falls short of these two benchmarks in specific, quantifiable ways.`,
    },
    {
      heading: "Worked Example",
      content: `Market price is **$40**. A firm's marginal cost function is **MC = 5 + 1.5Q**. Find the profit-maximizing quantity and calculate total profit.

**Set P = MC.** The firm is a price taker, so MR = P = $40.

40 = 5 + 1.5Q

**Solve for Q.**

35 = 1.5Q
**Q = 23.33 units**

**Calculate profit.** Suppose the firm's ATC at Q = 23.33 is $32. Profit per unit is the difference between price and ATC:

Profit per unit = P - ATC = 40 - 32 = **$8**
Total profit = 8 x 23.33 = **$186.67**

What if the market price were $28 instead? Set 28 = 5 + 1.5Q, giving Q = 15.33. If ATC at that output is $33, then P < ATC, and the firm incurs a loss of $5 per unit. The firm should check whether P > AVC. If so, the firm keeps producing to cover some fixed costs. If P < AVC, the firm shuts down.`,
    },
  ],
};

export const perfectCompetitionQuestions: PracticeQuestion[] = [
  {
    id: "pc-1",
    question:
      "A perfectly competitive firm maximizes profit by producing where:",
    options: [
      "Price = ATC",
      "MR = MC, which simplifies to P = MC",
      "Total revenue is maximized",
      "ATC is at its minimum",
    ],
    correctIndex: 1,
    explanation:
      "In perfect competition, MR equals the market price because the firm is a price taker. The profit-maximization rule MR = MC therefore simplifies to P = MC. The firm produces the quantity where its marginal cost curve intersects the horizontal price line. Option C is wrong because maximizing total revenue would mean selling as much as possible, ignoring costs entirely. A firm could have enormous revenue and still lose money on every unit.",
  },
  {
    id: "pc-2",
    question:
      "A competitive firm should shut down in the short run when:",
    options: [
      "Price is below ATC",
      "Price is below AVC",
      "Economic profit is zero",
      "Marginal cost is rising",
    ],
    correctIndex: 1,
    explanation:
      "The shutdown condition is P < minimum AVC. When price falls below average variable cost, the firm cannot even cover its variable costs. Producing zero output and paying only fixed costs results in a smaller loss than continuing to operate. Option A is tempting but wrong because a firm below ATC but above AVC should keep producing. It is losing money, but it loses less by staying open and covering some fixed costs than by shutting down.",
  },
  {
    id: "pc-3",
    question:
      "In long-run equilibrium, a perfectly competitive firm earns:",
    options: [
      "Positive economic profit due to efficiency",
      "Zero economic profit, with P = minimum ATC",
      "Negative economic profit because of competition",
      "Positive accounting profit but zero total revenue",
    ],
    correctIndex: 1,
    explanation:
      "Free entry and exit drive economic profit to zero in the long run. Profits attract entry, which increases supply and lowers price until P = minimum ATC. Zero economic profit means the firm earns a normal return, enough to cover all opportunity costs, but nothing beyond that. Option A is wrong because positive economic profit cannot persist: it attracts new entrants who increase supply and drive the price down until the profit disappears.",
  },
  {
    id: "pc-4",
    question:
      "If market demand increases in a perfectly competitive market, what happens in the short run?",
    options: [
      "Existing firms earn economic profit as market price rises",
      "Firms immediately exit the market",
      "The market price stays the same because firms are price takers",
      "Each firm's MC curve shifts to the right",
    ],
    correctIndex: 0,
    explanation:
      "An increase in market demand shifts the demand curve right, raising the equilibrium price. At the higher price, each firm produces more (moving up its MC curve) and earns economic profit because P now exceeds ATC. In the long run, entry will erode these profits. Option C is wrong because while each firm is a price taker, the market price itself still changes when market demand shifts. The firm takes whatever the new equilibrium price is.",
  },
  {
    id: "pc-5",
    question:
      "Why is a competitive firm's short-run supply curve the MC curve above minimum AVC?",
    options: [
      "Below minimum AVC, marginal cost is negative",
      "Below minimum AVC, the firm shuts down and supplies zero output",
      "Above AVC, marginal revenue exceeds total cost",
      "The MC curve below AVC is downward-sloping and irrelevant",
    ],
    correctIndex: 1,
    explanation:
      "At any price above minimum AVC, the firm uses P = MC to determine quantity supplied. Below minimum AVC, the firm shuts down, and quantity supplied drops to zero. The relevant supply curve is therefore the portion of MC at or above the shutdown point. Option A is wrong because marginal cost is not negative below AVC. The shutdown occurs because revenue no longer covers variable costs, not because of the sign of MC.",
  },
  {
    id: "pc-6",
    question:
      "Allocative efficiency in perfect competition means:",
    options: [
      "Firms produce at the lowest point on their ATC curves",
      "Price equals marginal cost, so resources go to their highest-valued use",
      "All firms earn positive economic profit",
      "Government regulates output to the socially optimal level",
    ],
    correctIndex: 1,
    explanation:
      "Allocative efficiency occurs when P = MC. The price consumers pay for the last unit equals the cost of producing it. No reallocation of resources could improve total welfare; the market directs resources to where they are valued most. Option A describes productive efficiency (producing at the lowest ATC), not allocative efficiency. These are related but distinct concepts.",
  },
  {
    id: "pc-7",
    question:
      "A competitive firm currently produces where P > ATC. In the long run, we expect:",
    options: [
      "The firm will raise its price to increase profit",
      "New firms will enter, increasing supply and driving price down to minimum ATC",
      "The firm will reduce output to maintain its profit margin",
      "Existing firms will merge to form a monopoly",
    ],
    correctIndex: 1,
    explanation:
      "Economic profit signals that returns in this market exceed the opportunity cost of capital. New firms enter, market supply increases, and the equilibrium price falls. Entry continues until P = minimum ATC and economic profit is zero. Option A is wrong because a perfectly competitive firm cannot raise its price; it is a price taker, and charging above the market price means zero sales.",
  },
  {
    id: "pc-8",
    question:
      "Which of the following is NOT a characteristic of perfect competition?",
    options: [
      "Many buyers and sellers",
      "Firms are price makers",
      "Identical (homogeneous) products",
      "Free entry and exit in the long run",
    ],
    correctIndex: 1,
    explanation:
      "In perfect competition, firms are price takers, not price makers. No individual firm has the market power to set or influence the price. Price-making ability is a feature of monopoly and other imperfectly competitive market structures. The other three options are all genuine characteristics of perfect competition, which is why recognizing the false statement requires understanding what distinguishes competitive markets from monopoly.",
  },
  {
    id: "perf-9",
    question:
      "A perfectly competitive firm has AVC = $12, ATC = $18, and MC = $15 at its current output. The market price is $14. In the short run, this firm should:",
    options: [
      "Shut down because price is below ATC",
      "Continue producing because price exceeds AVC, even though it incurs a loss",
      "Increase output until price equals ATC",
      "Exit the industry immediately",
    ],
    correctIndex: 1,
    explanation:
      "The shutdown rule says: produce as long as P >= AVC. Here P = $14 > AVC = $12, so the firm covers all variable costs and contributes $2 per unit toward fixed costs. Shutting down would mean losing all fixed costs ($18 - $12 = $6 per unit times quantity), which is worse than the current loss of ($18 - $14 = $4 per unit times quantity). (A) is the classic trap: price below ATC does mean losses, but the relevant threshold for shutdown is AVC, not ATC; the firm is better off operating and partially covering fixed costs. (C) is wrong because the firm cannot control the market price; it is a price taker and produces where P = MC, not where P = ATC. (D) confuses short-run shutdown with long-run exit; exit involves leaving the industry entirely and occurs in the long run when losses persist, not as an immediate response.",
  },
  {
    id: "perf-10",
    question:
      "In long-run equilibrium under perfect competition, firms earn zero economic profit. This means:",
    options: [
      "Firms are not covering their costs and will eventually go bankrupt",
      "Firms earn no accounting profit whatsoever",
      "Firms earn a normal rate of return that exactly covers all opportunity costs, including the cost of capital",
      "Total revenue equals total variable cost",
    ],
    correctIndex: 2,
    explanation:
      "Zero economic profit means the firm earns exactly enough to cover all explicit costs (wages, rent, materials) AND all implicit costs (the owner's foregone salary, the return they could earn investing capital elsewhere). The firm is doing fine; it just has no reason to enter or leave the industry. (A) is wrong because zero economic profit does not mean the firm is failing; it is covering every cost including the opportunity cost of the owner's time and capital. (B) is wrong because economic profit and accounting profit are different. Accounting profit ignores implicit costs, so a firm earning zero economic profit typically still reports positive accounting profit. (D) describes the shutdown point (TR = TVC), not zero economic profit; zero economic profit occurs when TR = TC (including fixed costs).",
  },
  {
    id: "perf-11",
    question:
      "A wheat farmer can sell as much wheat as desired at the prevailing market price of $7 per bushel. This means the farmer's demand curve, marginal revenue curve, and average revenue curve are:",
    options: [
      "All downward-sloping because selling more requires lowering the price",
      "All identical and horizontal at $7",
      "The demand curve is horizontal, but MR is downward-sloping",
      "All vertical at the farmer's current output level",
    ],
    correctIndex: 1,
    explanation:
      "In perfect competition, the firm is a price taker. The demand curve facing the individual firm is perfectly elastic (horizontal) at the market price. Since every unit sells for $7, average revenue (TR/Q) = $7 and marginal revenue (additional revenue from one more unit) = $7. All three curves are the same horizontal line at $7. (A) describes a monopolist or monopolistically competitive firm that must lower price to sell more, and this does not apply to a price taker. (C) is wrong because MR only slopes downward when the firm faces a downward-sloping demand curve (monopoly); here the firm sells every unit at the same price, so MR is constant. (D) vertical curves would mean quantity is fixed regardless of price, which describes perfectly inelastic supply or demand, not relevant to a competitive firm's revenue curves.",
  },
  {
    id: "perf-12",
    question:
      "A perfectly competitive firm produces where P = MC = $20. At this output, ATC = $15 and AVC = $11. The firm's economic profit per unit and total economic profit at Q = 500 units are:",
    options: [
      "Profit per unit = $5, total profit = $2,500",
      "Profit per unit = $9, total profit = $4,500",
      "Profit per unit = $20, total profit = $10,000",
      "Profit per unit = $0, because the firm is in long-run equilibrium",
    ],
    correctIndex: 0,
    explanation:
      "Economic profit per unit = P − ATC = $20 − $15 = $5. Total economic profit = profit per unit × quantity = $5 × 500 = $2,500. (B) incorrectly subtracts AVC ($11) from price ($20) to get $9, but that gives the per-unit contribution margin over variable costs, not economic profit. Profit must be measured against ATC which includes both variable and fixed costs. (C) uses the full price of $20 as profit, ignoring costs entirely. (D) assumes zero profit, but the firm's P ($20) exceeds ATC ($15), so it is earning positive economic profit, and long-run equilibrium has not yet been reached because entry hasn't driven price down to minimum ATC.",
  },
  {
    id: "perf-13",
    question:
      "Perfect competition achieves both productive and allocative efficiency in the long run. Productive efficiency means the firm produces at the minimum of ATC. Allocative efficiency means P = MC. A monopoly achieves:",
    options: [
      "Both productive and allocative efficiency",
      "Productive efficiency but not allocative efficiency",
      "Neither productive nor allocative efficiency",
      "Allocative efficiency but not productive efficiency",
    ],
    correctIndex: 2,
    explanation:
      "A monopoly restricts output below the competitive level and charges a price above MC (P > MC), so it fails allocative efficiency: resources are not directed to their highest-valued use. It also typically does not produce at the minimum of its ATC curve because its profit-maximizing output (where MR = MC) falls short of the output at minimum ATC, so it fails productive efficiency as well. (A) is wrong because monopoly fails both tests by definition. Restricted output and pricing above MC ensure both inefficiencies. (B) is wrong because the monopolist's profit-maximizing quantity does not correspond to the minimum point on ATC. (D) is wrong because P > MC in monopoly is the textbook violation of allocative efficiency.",
  },
  {
    id: "perf-14",
    question:
      "A competitive firm's marginal cost curve is MC = 4 + 2Q, and its minimum AVC is $8 (occurring at Q = 2). If the market price is $6, the firm will:",
    options: [
      "Produce 1 unit because P = MC at Q = 1",
      "Produce 2 units to minimize average variable cost",
      "Shut down and produce zero units because price is below minimum AVC",
      "Produce where P = ATC instead",
    ],
    correctIndex: 2,
    explanation:
      "The shutdown rule states: if P < minimum AVC, the firm produces nothing. Here the market price ($6) is below the minimum AVC ($8), so the firm cannot cover its variable costs on any unit. Every unit produced makes the loss worse than simply paying fixed costs and producing nothing. (A) is wrong because even though P = MC at Q = 1 ($6 = 4 + 2(1) = $6), the firm should not produce at all when price is below minimum AVC. The P = MC rule only applies in the region above AVC. (B) is wrong because producing at minimum AVC doesn't help when revenue per unit ($6) is still below that minimum AVC ($8). (D) is wrong because competitive firms produce where P = MC (not P = ATC), and regardless, the firm should not produce at all given the shutdown condition.",
  },
  {
    id: "perf-15",
    question:
      "Several firms in a perfectly competitive industry are earning economic losses. In the long run, which sequence of events restores equilibrium?",
    options: [
      "Firms raise their prices to cover costs → losses disappear → equilibrium is restored",
      "Some firms exit → market supply decreases → market price rises → remaining firms earn zero economic profit",
      "Government provides subsidies to prevent exit → supply stays constant → losses persist indefinitely",
      "Firms merge into a monopoly to gain pricing power → price rises → losses disappear",
    ],
    correctIndex: 1,
    explanation:
      "In perfect competition, economic losses signal that the market price is below ATC. Some firms exit the industry, which reduces market supply (shifts the supply curve left). With less supply, the equilibrium price rises. Exit continues until price rises to equal minimum ATC for the remaining firms, at which point economic profit is zero and there is no further incentive to exit. (A) is wrong because competitive firms are price takers, and no individual firm can raise its price above the market price; the price adjustment comes from changes in market supply, not from individual firm pricing decisions. (C) describes a government intervention that is not part of the standard competitive model, and subsidies would shift supply right (lowering price further), not fix the problem. (D) is wrong because merging into a monopoly would violate the assumptions of perfect competition (many small firms, free entry/exit) and is not the adjustment mechanism the model describes.",
  },
];
