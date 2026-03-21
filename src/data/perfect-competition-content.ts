import type { PracticeQuestion } from "@/data/supply-demand-content";

export const perfectCompetitionContent = {
  title: "Perfect Competition",
  subtitle: "Why the most boring market structure is the benchmark for everything else",
  sections: [
    {
      heading: "Price-Taking Behavior",
      content: `You'd think every business gets at least some say in what it charges. Somebody has to write the price tag, right? But a wheat farmer in Kansas growing 500 acres of hard red winter wheat, the exact same variety planted across thousands of farms from Nebraska to Oklahoma, has absolutely zero pricing power. None. The farmer sells at whatever the Chicago Board of Trade quotes that morning. Try charging a penny more and buyers walk next door. Charge less and you're just throwing money away for no reason.

That's what economists call a **price taker**. The firm faces a perfectly horizontal demand curve at the market price. You can sell as much as you want at that price, but bump it up even slightly and your sales drop to nothing.

Four conditions create this situation: lots of small firms, identical products, perfect information on both sides, and free entry and exit. No real market hits all four at once. Agricultural commodities get close. So do certain financial markets like U.S. Treasury bills. But the model was never meant to be a photograph of reality. It's more like a blueprint, and it turns out to generate surprisingly accurate predictions about pricing, output, and how markets adjust over time.`,
    },
    {
      heading: "Profit Maximization: P = MC",
      content: `Every firm on the planet, whether it's a Kansas wheat operation or Apple Inc., follows the same basic logic: keep producing as long as each additional unit brings in more revenue than it costs to make.

In a competitive market, selling one more bushel adds exactly the market price to your revenue. So **MR = P**. And since the profit-maximizing rule is **MR = MC**, that simplifies to **P = MC**. You find where the market price line crosses the marginal cost curve, and that intersection is your optimal quantity.

Go past that point and each extra unit costs more to produce than it earns you. Stop short and you've left profitable units sitting on the table, unmade. One mistake that shows up constantly on AP free-responses: the exam gives you a cost schedule and asks for profit-maximizing output, and students pick the quantity where ATC is lowest instead of where P = MC. That answer earns zero points.

Try shifting market demand or supply on the graph and watch the equilibrium price move. The firm's output adjusts automatically to wherever P = MC lands on its cost curve.`,
    },
    {
      heading: "Short-Run Profit and Loss",
      content: `Three scenarios can play out in the short run, and which one you're dealing with depends entirely on where the market price sits relative to the firm's cost curves.

**P > ATC**: the firm earns economic profit. Every unit sold brings in more than it costs on average, and the gap between price and ATC multiplied by quantity gives you that profit rectangle shaded on the graph.

**P < ATC but P > AVC**: the firm is losing money. But it keeps producing anyway. Why would it do that? Because fixed costs like the building lease and equipment loans have to be paid whether the firm makes a single unit or shuts the doors entirely. As long as revenue covers all variable costs and chips away at some of those fixed costs, shutting down would actually produce a *bigger* loss. So the firm stays open and takes the hit.

**P < AVC**: shut it down. Revenue can't even cover the cost of inputs that go directly into production. Every additional unit just digs the hole deeper. The firm produces nothing and eats the fixed costs. That price level is the **shutdown point**.`,
    },
    {
      heading: "The Shutdown Condition",
      content: `Say a restaurant pays $5,000 a month in rent whether it opens or not. Staying open pulls in $8,000 in revenue against $7,000 in food, wages, and utilities. Staying open: $8,000 minus $7,000 minus $5,000 = negative $4,000. Closing: negative $5,000 (just rent). Staying open is the less painful option by $1,000.

Now suppose revenue drops to $6,000 with those same $7,000 in variable costs. Staying open: $6,000 minus $7,000 minus $5,000 = negative $6,000. Closing: negative $5,000. Shut the doors. Operating just makes the loss worse.

The rule is clean: **shut down when P < minimum AVC**. Below that threshold, the firm's quantity supplied is zero. Above it, the firm uses the MC curve to figure out how much to produce. And that's what makes the **short-run supply curve** the portion of the MC curve sitting above minimum AVC.

On the 2018 AP Micro exam, a question gave students AVC = $12 and a price of $10 and asked whether the firm should operate. If you wrote "yes, because the firm should always produce in the short run," that was zero points. You need to compare price to AVC, not just assume the firm keeps going.`,
    },
    {
      heading: "Long-Run Equilibrium",
      content: `Profits attract competitors. Losses drive them away. Those two sentences explain almost the entire long-run story of perfect competition.

When firms are earning economic profit, outsiders notice. New entrants flood in, supply increases, and the market price drops. Profits shrink. Entry keeps happening until there's nothing extra left to attract newcomers.

When firms are losing money, the weakest ones bail. Supply decreases, the market price climbs, and losses shrink for whoever sticks around. Exit continues until the surviving firms break even.

The endpoint is **P = minimum ATC** for every firm. Economic profit lands at zero.

That "zero" trips up people who haven't studied economics before. Zero economic profit does not mean the business is failing. It means the owners earn exactly what they'd earn in their next best alternative, their **opportunity cost** of capital and time. A firm reporting zero economic profit could easily be posting $2 million in accounting profit. The business is perfectly healthy. It's just not pulling in anything *above* what's needed to keep resources parked here instead of somewhere else.`,
    },
    {
      heading: "Efficiency in Perfect Competition",
      content: `Perfect competition delivers two efficiency outcomes that no other market structure can match in the long run. This is the reason the model matters even though no real market is perfectly competitive.

**Allocative efficiency** means P = MC. The price consumers pay for the last unit equals the marginal cost of making it. Resources flow exactly where consumers value them most, and you can't reshuffle production to make anyone better off without making someone else worse off.

**Productive efficiency** means every firm produces at the lowest point on its ATC curve. Nothing wasted. Output gets made at the lowest possible cost per unit.

When your AP textbook says a monopoly creates deadweight loss or that monopolistic competition leads to "excess capacity," the measuring stick is always perfect competition. Every other market structure falls short of at least one of these benchmarks in specific, measurable ways. And that's not some minor academic distinction. It's the foundation of antitrust policy, regulatory economics, and most of the second half of AP Microeconomics.`,
    },
    {
      heading: "Worked Example",
      content: `Market price is **$40**. A firm's marginal cost function is **MC = 5 + 1.5Q**. Find the profit-maximizing quantity and figure out total profit.

**Set P = MC.** The firm is a price taker, so MR = P = $40.

40 = 5 + 1.5Q

**Solve for Q.**

35 = 1.5Q
**Q = 23.33 units**

**Calculate profit.** Suppose the firm's ATC at Q = 23.33 is $32. Profit per unit is just the gap between price and ATC:

Profit per unit = P - ATC = 40 - 32 = **$8**
Total profit = 8 x 23.33 = **$186.67**

Now what if the market price dropped to $28? Set 28 = 5 + 1.5Q, and you get Q = 15.33. If ATC at that output is $33, then P < ATC, so the firm is losing $5 per unit. The next step is checking whether P > AVC. If it is, the firm keeps producing to cover some fixed costs. If P < AVC, shut it down.`,
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
      "In perfect competition, MR equals the market price because the firm is a price taker. So MR = MC becomes P = MC. The firm produces the quantity where its marginal cost curve crosses the horizontal price line. (C) is wrong because maximizing total revenue means selling as much as possible while ignoring costs. A firm could have enormous revenue and still hemorrhage money on every unit.",
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
      "Shutdown happens when P < minimum AVC. At that point, the firm can't even cover variable costs, so producing makes the loss worse than simply closing and paying fixed costs. (A) is the trap answer on virtually every practice exam. A firm below ATC but above AVC should keep producing. It's losing money, but it loses *less* by staying open.",
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
      "Free entry and exit do the work here. Profits attract new firms, supply rises, price falls, and the process continues until P = minimum ATC and economic profit is zero. Zero economic profit means the firm earns a normal return covering all opportunity costs. (A) can't persist because positive profit is a signal that draws entry, which eliminates that profit over time. (D) is nonsensical because zero total revenue would mean the firm sells nothing at all.",
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
      "A rightward demand shift raises the equilibrium price. At the higher price, each firm produces more (moving up along its MC curve) and earns economic profit because P now exceeds ATC. In the long run, entry would erode these profits. (C) is wrong because while each firm *takes* the market price, the market price itself still changes when demand shifts. The firm takes whatever the new equilibrium price happens to be.",
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
      "At any price above minimum AVC, the firm uses P = MC to pick its quantity. Below minimum AVC, the firm shuts down and quantity supplied is zero. The supply curve is therefore the MC segment at or above the shutdown point. (A) is wrong; marginal cost isn't negative below AVC. The shutdown is about revenue failing to cover variable costs, not about the sign of MC.",
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
      "P = MC is allocative efficiency. The price consumers pay for the last unit equals what it cost to produce. No reshuffling of resources could improve total welfare. (A) describes productive efficiency, which is producing at the lowest ATC. Related concepts, but they're distinct, and confusing them on the AP exam costs points.",
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
      "Economic profit signals that returns here beat the opportunity cost of capital. New firms enter, market supply increases, equilibrium price falls. Entry continues until P = minimum ATC and economic profit is zero. (A) is wrong because a perfectly competitive firm *cannot* raise its price. It's a price taker. Charging above the market price means zero sales.",
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
      "Competitive firms are price takers, not price makers. No individual firm can set or influence the market price. Price-making power belongs to monopolists and other imperfectly competitive firms. The other three options (many participants, identical products, free entry/exit) are all genuine features of perfect competition.",
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
      "The shutdown rule: produce if P >= AVC. Here P = $14 > AVC = $12, so the firm covers variable costs and puts $2 per unit toward fixed costs. Shutting down means eating the full $6 gap between ATC and AVC on every unit as a pure fixed-cost loss, which is worse. (A) is the classic trap. Price below ATC means losses, yes, but the shutdown threshold is AVC, not ATC. (C) is wrong because the firm can't control the market price. It produces where P = MC, not where P = ATC. (D) confuses short-run shutdown with long-run exit, which happens only after persistent losses, not as an immediate reaction.",
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
      "Zero economic profit = all explicit costs (wages, rent, materials) covered AND all implicit costs (the owner's foregone salary, the return capital could earn elsewhere) covered. The firm is doing fine. It just has no reason to enter or leave the industry. (A) is wrong because zero economic profit is not failure; every cost including opportunity cost is met. (B) confuses economic and accounting profit. A firm earning zero economic profit typically still reports positive accounting profit on its income statement. (D) describes the shutdown point where TR = TVC, a completely different concept.",
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
      "Price taker means every bushel sells for $7. Average revenue (TR/Q) = $7. Marginal revenue (extra revenue from one more bushel) = $7. The demand curve facing this individual firm is a flat line at $7. All three curves are the same horizontal line. (A) describes a firm with market power, like a monopolist or monopolistically competitive firm that must cut price to sell more. That doesn't apply here. (C) is wrong because MR only slopes downward when the firm faces a downward-sloping demand curve. (D) would mean quantity is fixed regardless of price, which is perfectly inelastic supply and irrelevant here.",
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
      "Profit per unit = P − ATC = $20 − $15 = $5. Total = $5 × 500 = $2,500. Straightforward. (B) subtracts AVC ($11) from price ($20) to get $9, but that measures the contribution margin over variable costs, not economic profit. You have to measure against ATC, which includes fixed costs. (C) uses the entire price as profit, ignoring costs altogether. (D) assumes long-run equilibrium, but P ($20) exceeds ATC ($15), so the firm is earning positive economic profit and entry hasn't driven the price down yet.",
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
      "A monopoly restricts output below the competitive level and charges P > MC, failing allocative efficiency. Its profit-maximizing quantity (where MR = MC) also falls short of the output at minimum ATC, so it fails productive efficiency too. Both tests failed. (B) is wrong because the monopolist's output doesn't land at minimum ATC. (D) is wrong because P > MC is the textbook definition of allocative *in*efficiency.",
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
      "P ($6) < minimum AVC ($8). Shutdown. Every unit produced makes the loss worse than simply absorbing fixed costs and producing nothing. (A) is a clever trap. Technically P does equal MC at Q = 1 ($6 = 4 + 2(1)), but the P = MC rule only applies in the region above minimum AVC. Below that threshold, the firm doesn't produce at all. (B) is wrong because operating at minimum AVC doesn't help when revenue per unit ($6) is still below that minimum ($8). (D) is wrong because competitive firms use P = MC, not P = ATC, and besides, the shutdown condition makes the question moot.",
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
      "Losses mean price is below ATC. Some firms exit, supply shifts left, the market price rises. Exit continues until price equals minimum ATC and remaining firms earn zero economic profit. That's the long-run adjustment mechanism. (A) is wrong because competitive firms are price takers. No individual firm can raise its price; the price adjustment comes from changes in market supply. (C) describes a policy intervention that isn't part of the standard model, and subsidies would actually shift supply right, pushing price *lower*. (D) violates the assumptions of perfect competition entirely.",
  },
];
