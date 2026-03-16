import type { PracticeQuestion } from "@/data/supply-demand-content";

export const productionCostsContent = {
  title: "Production and Costs",
  subtitle: "Why cost curves look the way they do, and how firms turn inputs into outputs",
  sections: [
    {
      heading: "The Short-Run Production Function",
      content: `Picture a pizza shop gearing up for a Friday night rush. The owner can't build a second kitchen by Friday. The ovens, counter space, and walk-in cooler are all locked in. That constraint is what defines the **short run**: at least one input (usually capital) is fixed, so the only thing the firm can adjust is how much labor it hires.

The **total product (TP)** curve tracks pizzas made per hour as you add cooks. One cook handling dough, sauce, toppings, and the oven is slow. Add a second, and they split tasks; output more than doubles. A third cook runs the oven full-time while the others prep. Output climbs fast. But cram a tenth cook into that same kitchen and someone is just standing around waiting for oven space.

**Marginal product (MP)** measures the extra output from each additional worker. It *rises* early on because specialization kicks in, then *falls* once the fixed kitchen becomes a bottleneck. That rise-then-fall pattern drives everything else in this module.`,
    },
    {
      heading: "The Law of Diminishing Marginal Returns",
      content: `A factory can't just keep hiring and produce infinite output. At some point, each new worker adds less than the one before. The **law of diminishing marginal returns** isn't really a theory. It's a physical constraint. Every short-run production process hits it eventually.

The word *eventually* matters here. A two-person assembly team outperforms two solo workers because they specialize: one wires, one solders. A third worker running quality checks boosts output further. Marginal product is *rising* during this phase. But pack twenty workers onto the same three-station line and they're tripping over each other, waiting for equipment, and slowing things down.

Here's the direct link to costs: when the 8th worker adds 15 units of output and the 9th worker adds only 10, the cost of those last 10 units is higher per unit than the previous 15. Diminishing marginal returns *are* the reason **marginal cost (MC)** eventually climbs, and why the MC curve has its characteristic U shape.`,
    },
    {
      heading: "From Production to Cost Curves",
      content: `Production and cost curves are mirror images of each other. When each additional worker churns out *more* output (rising MP), the cost of each additional unit *drops* (falling MC). When MP falls, MC rises. Not the most exciting relationship, but it matters a lot.

**Total cost (TC)** splits into two buckets:
1. **Total fixed cost (TFC)**: rent on the building, insurance premiums, equipment lease payments. Produce zero units or a thousand; these bills stay the same.
2. **Total variable cost (TVC)**: hourly wages, flour, electricity on the production line. These scale with output.

TC = TFC + TVC. From there, four per-unit curves appear on the graph:
- **Marginal Cost (MC)** is what the *next* unit costs to produce: MC = change in TC / change in Q
- **Average Total Cost (ATC)** is total cost spread across all units: ATC = TC / Q
- **Average Variable Cost (AVC)** is variable cost per unit: AVC = TVC / Q
- **Average Fixed Cost (AFC)** is fixed cost per unit: AFC = TFC / Q

As output grows, AFC falls continuously because you're dividing a constant dollar amount by a bigger and bigger number. ATC and AVC squeeze closer together at high quantities because the shrinking AFC wedge between them approaches zero.`,
    },
    {
      heading: "MC Crosses ATC and AVC at Their Minimums",
      content: `Think about your GPA. If this semester's grades (the "marginal") come in below your cumulative average, your cumulative GPA drops. If they come in above it, the cumulative rises. The marginal pulls the average in its direction, and the crossover point is where the average *stops falling and starts rising*.

Cost curves follow the exact same math. While MC sits below ATC, every additional unit is cheaper than the current average, so ATC falls. Once MC climbs above ATC, each new unit is *more expensive* than the average, and ATC rises. **MC must cross ATC at its minimum point.** The same logic applies to AVC.

On the graph, the MC curve (red) slices through the bottom of both the ATC curve (blue) and the AVC curve (green). AVC bottoms out at a *lower* quantity than ATC because ATC = AVC + AFC, and AFC is still declining at that point. The falling AFC keeps pulling ATC downward even after AVC has started climbing, so ATC's minimum comes later.`,
    },
    {
      heading: "Economies and Diseconomies of Scale",
      content: `When a firm has time to rebuild its entire operation from scratch, nothing is fixed. In the **long run**, the firm can triple its factory floor, swap out every machine, or move to a different state. The question shifts from "how many workers do I hire?" to "what *size* should this whole operation be?"

The **long-run average total cost (LRATC)** curve answers that, and it has three distinct zones:

1. **Economies of scale** occupy the downward-sloping left side. A car manufacturer building 500,000 vehicles a year can afford robotic welding arms, negotiate steel contracts at bulk rates, and spread its $2 billion R&D budget across more units. Average cost falls as the operation scales up.

2. **Diseconomies of scale** occupy the upward-sloping right side. A company with 200,000 employees starts drowning in layers of management, slow communication chains, and departments that duplicate each other's work. Average cost creeps back up.

3. **Constant returns to scale** occupy the flat middle, where doubling all inputs doubles output and average cost holds steady. The quantity where LRATC first hits this floor is the **minimum efficient scale**. Industries where that number is enormous (chip fabrication, commercial aircraft) naturally end up with just a handful of giant firms.`,
    },
    {
      heading: "Connecting Costs to Market Structure",
      content: `Every output decision comes back to these cost curves. A competitive firm produces where P = MC. A monopolist produces where MR = MC. Regardless of market structure, the MC curve is the backbone of the production decision.

But deciding *how much* to produce is only half the question. The other half is whether the firm should produce *at all*. That depends on where price sits relative to ATC and AVC.

- Price > ATC: the firm earns economic profit (the green rectangle you'll see in later modules).
- AVC < Price < ATC: the firm is losing money, but producing still beats shutting down. Every unit sold covers all its variable cost *and* chips away at fixed costs. Shutting down means eating the *entire* fixed cost bill with zero revenue.
- Price < AVC: the firm can't even cover its variable costs. Each unit produced makes losses *worse*. Shut down, pay the fixed costs, and wait for conditions to improve. This threshold is the **shutdown point**.

Stitching those rules together: a competitive firm supplies output along its MC curve, but only at prices above minimum AVC. Below that, quantity supplied is zero. So the **short-run supply curve** is the segment of MC that sits above AVC.`,
    },
    {
      heading: "Worked Example",
      content: `A small t-shirt printing shop pays $100/day in rent and equipment leases (fixed costs). Today it printed 10 shirts at a total cost of $350.

Strip out fixed costs to find variable costs: TVC = TC - TFC = $350 - $100 = $250. That $250 covers ink, blank shirts, and labor, the costs that only exist because the shop produced something.

Per-unit averages:
- AFC = TFC / Q = $100 / 10 = **$10** per shirt
- AVC = TVC / Q = $250 / 10 = **$25** per shirt
- ATC = TC / Q = $350 / 10 = **$35** per shirt

Sanity check: AVC + AFC should equal ATC. $25 + $10 = $35. That identity *always* holds.

Now suppose the shop prints an 11th shirt, and that shirt costs $40 to produce. That $40 is the marginal cost. What happens to ATC?

New TC = $350 + $40 = $390. New ATC = $390 / 11 = roughly $35.45. ATC *rose* from $35 to $35.45 because MC ($40) was above the old ATC ($35), dragging the average upward. Same reason a bad exam score pulls down your course average.

Reverse the scenario: if that 11th shirt had cost only $30 (MC = $30, below ATC = $35), new ATC = $380 / 11 = roughly $34.55. The average *falls*. MC below the average pulls it down; MC above the average pushes it up. That tug-of-war is why MC intersects ATC at ATC's lowest point.`,
    },
  ],
};

export const productionCostsQuestions: PracticeQuestion[] = [
  {
    id: "pc-1",
    question:
      "The law of diminishing marginal returns states that as a firm adds more of a variable input to a fixed input:",
    options: [
      "Total output will eventually decrease",
      "Marginal product of the variable input will eventually decline",
      "Total cost will decrease",
      "Average fixed cost will increase",
    ],
    correctIndex: 1,
    explanation:
      "Correct: each additional worker still adds output, just *less* output than the worker before. Total product keeps climbing; it just climbs more slowly. Option A (total output eventually decreases) confuses diminishing returns with *negative* returns. Output only falls if marginal product goes negative, which is a separate and more extreme situation. Option C gets the direction wrong; total cost rises with more output, not falls. Option D is backwards; AFC always declines as output rises because you're dividing a fixed number by a larger quantity.",
  },
  {
    id: "pc-2",
    question:
      "Marginal cost (MC) crosses average total cost (ATC) at which point?",
    options: [
      "Where ATC is at its maximum",
      "Where ATC is at its minimum",
      "Where ATC equals AFC",
      "Where MC is at its minimum",
    ],
    correctIndex: 1,
    explanation:
      "While MC is below ATC, every additional unit is cheaper than the current average, dragging ATC down. The moment MC rises above ATC, each new unit is pricier than the average, pushing ATC up. The crossover, where ATC switches from falling to rising, is ATC's minimum. Option A (ATC's maximum) has no practical meaning on a standard U-shaped curve. Option C (ATC equals AFC) happens at zero variable cost, which isn't a meaningful intersection. Option D confuses MC's own minimum with the crossing point; MC bottoms out at a *lower* quantity, then rises and eventually crosses through ATC's minimum.",
  },
  {
    id: "pc-3",
    question:
      "A firm should shut down in the short run if the market price falls below:",
    options: [
      "Average total cost (ATC)",
      "Average fixed cost (AFC)",
      "Marginal cost (MC)",
      "Average variable cost (AVC)",
    ],
    correctIndex: 3,
    explanation:
      "Below AVC, every unit the firm sells fails to cover even the wages and materials that went into it. Producing makes losses *worse* than just closing the doors and paying fixed costs with zero revenue. Option A (ATC) is the classic trap: price below ATC does mean losses, but the firm is still better off operating as long as revenue covers variable costs and chips away at fixed costs. Option B (AFC) isn't a meaningful shutdown threshold because AFC isn't a per-unit cost the firm can compare to price in the same way. Option C (MC) doesn't work either; MC tells the firm how much to produce, not whether to produce at all.",
  },
  {
    id: "pc-4",
    question:
      "As output increases, average fixed cost (AFC):",
    options: [
      "Increases because fixed costs rise",
      "Remains constant at all output levels",
      "Decreases continuously because fixed costs are spread over more units",
      "First decreases, then increases",
    ],
    correctIndex: 2,
    explanation:
      "Pure arithmetic: AFC = TFC / Q. TFC is a constant dollar amount, say $1,000 in rent. Divide $1,000 by 10 units and AFC is $100. Divide by 100 units and AFC is $10. It never stops falling. Option A (AFC increases) would require fixed costs themselves to rise, which contradicts the definition of fixed costs. Option B (remains constant) mixes up *total* fixed cost (constant) with *average* fixed cost (declining), a common mistake. Option D (U-shaped) describes ATC or AVC, not AFC, which only moves in one direction: down.",
  },
  {
    id: "pc-5",
    question:
      "Economies of scale exist when:",
    options: [
      "Marginal cost is falling",
      "Long-run average total cost falls as output increases",
      "Short-run ATC is at its minimum",
      "Total cost is less than total revenue",
    ],
    correctIndex: 1,
    explanation:
      "Economies of scale are strictly a *long-run* concept: the firm scales up its entire operation (bigger plant, more equipment, more workers) and average cost per unit drops. Think bulk purchasing, assembly-line specialization, and spreading R&D over millions of units. Option A (falling MC) describes a short-run pattern caused by increasing marginal returns, and that can happen without any change in the firm's overall scale. Option C (short-run ATC at its minimum) is about efficient production at a given plant size, not about what happens when you change that plant size. Option D (TC < TR) describes profitability, which is a completely separate question from how costs behave as scale changes.",
  },
  {
    id: "pc-6",
    question:
      "When marginal product is increasing, what is happening to marginal cost?",
    options: [
      "Marginal cost is increasing",
      "Marginal cost is constant",
      "Marginal cost is decreasing",
      "Marginal cost is zero",
    ],
    correctIndex: 2,
    explanation:
      "MP and MC are mirror images. If the 5th worker produces 20 units and the 6th produces 25 (rising MP), then the cost per unit is *falling* because you're getting more output for each dollar of wages. Option A (MC increasing) flips the relationship backwards; rising MP means each unit gets cheaper, not more expensive. Option B (MC constant) would require each worker to add exactly the same output, which only happens at one specific point. Option D (MC zero) would mean the extra unit costs nothing to produce, which doesn't happen in any real production process.",
  },
  {
    id: "pc-7",
    question:
      "The minimum point of AVC occurs at a lower quantity than the minimum of ATC because:",
    options: [
      "Variable costs are always lower than total costs",
      "ATC includes AFC, which is still declining and pulling ATC down at higher quantities",
      "MC intersects AVC before it intersects ATC",
      "Fixed costs increase at high output",
    ],
    correctIndex: 1,
    explanation:
      "Since ATC = AVC + AFC, the declining AFC component keeps pulling ATC downward even after AVC has started to rise. For a range of output, the drop in AFC outweighs the rise in AVC, so ATC continues falling. Only once the rising AVC overwhelms the shrinking AFC does ATC finally bottom out. Option A (variable costs are always lower) is true but irrelevant; it doesn't explain *why* the minimums occur at different quantities. Option C (MC intersects AVC first) is an accurate observation but describes the *result*, not the *cause*. Option D (fixed costs increase) contradicts the definition of fixed costs; they don't change with output.",
  },
  {
    id: "pc-8",
    question:
      "In a perfectly competitive market, a firm's short-run supply curve is:",
    options: [
      "The entire MC curve",
      "The ATC curve above the MC curve",
      "The MC curve above the minimum AVC",
      "The AVC curve above the MC curve",
    ],
    correctIndex: 2,
    explanation:
      "A competitive firm picks its output where P = MC, but it only does this when price is high enough to cover variable costs. Below minimum AVC, the firm shuts down and quantity supplied is zero. Above that threshold, the firm traces along the MC curve. So the supply curve is specifically the *portion* of MC that sits above minimum AVC. Option A (the entire MC curve) includes quantities where price is below AVC; the firm wouldn't produce there, so that segment isn't part of supply. Option B (ATC above MC) and Option D (AVC above MC) describe the wrong curves entirely and don't represent a supply relationship.",
  },
  {
    id: "pc-9",
    question:
      "A firm's ATC is $25 at its current output of 100 units. If the marginal cost of the 101st unit is $30, what happens to ATC when the firm produces the 101st unit?",
    options: [
      "ATC falls because the firm is spreading fixed costs over more units",
      "ATC rises because MC exceeds ATC, pulling the average upward",
      "ATC stays at $25 because one additional unit cannot change the average",
      "ATC falls to $24.75 because MC is close to ATC",
    ],
    correctIndex: 1,
    explanation:
      "When MC ($30) is above ATC ($25), the next unit costs more than the current average, so producing it pulls ATC upward. This is the same logic as a test score above your GPA raising your GPA, except here the 'score' is above the average, so the average rises. (A) is wrong because while spreading fixed costs does lower AFC, the MC of $30 being above ATC of $25 is the dominant force here, and ATC rises. (C) is wrong because every additional unit affects the average. New ATC = ($25 × 100 + $30) / 101 = $2,530/101 ≈ $25.05, a clear increase. (D) inverts the direction; ATC rises, not falls, when MC exceeds it.",
  },
  {
    id: "pc-10",
    question:
      "A large automobile manufacturer finds that doubling its factory size, workforce, and all other inputs causes output to more than double. This firm is experiencing:",
    options: [
      "Diminishing marginal returns",
      "Diseconomies of scale",
      "Economies of scale",
      "Constant returns to scale",
    ],
    correctIndex: 2,
    explanation:
      "When all inputs double and output more than doubles, the firm's long-run average total cost is falling. This is the definition of economies of scale. Bulk purchasing, specialization, and spreading large fixed costs (like R&D) are typical sources. (A) diminishing marginal returns is a short-run concept that applies when only one input varies while others are fixed, but here all inputs are changing, making it a long-run scenario. (B) diseconomies of scale would mean output less than doubles when inputs double, causing LRATC to rise. (D) constant returns to scale would mean output exactly doubles when inputs double, keeping LRATC flat.",
  },
  {
    id: "pc-11",
    question:
      "Which of the following best explains why short-run cost curves differ from long-run cost curves?",
    options: [
      "In the long run, all costs become variable because the firm can adjust every input",
      "In the short run, firms always operate at the minimum of their ATC curve",
      "Long-run costs are always higher than short-run costs due to inflation",
      "In the short run, firms face no fixed costs",
    ],
    correctIndex: 0,
    explanation:
      "The key distinction between short run and long run is that in the short run at least one input is fixed (creating fixed costs), while in the long run every input is variable, so the firm can resize its plant, renegotiate leases, and adjust all factors of production. This flexibility means the firm can find the least-cost combination for any output level. (B) is wrong because firms typically do not operate at minimum ATC in the short run; they produce where P = MC, which may be above or below the ATC minimum depending on market conditions. (C) is wrong because long-run costs can be lower than short-run costs when the firm optimizes its scale; inflation is unrelated to this distinction. (D) is backwards; the short run is defined by the presence of fixed costs, not their absence.",
  },
  {
    id: "pc-12",
    question:
      "A bakery hires workers and observes the following: Worker 3 produces 15 additional loaves, Worker 4 produces 12 additional loaves, and Worker 5 produces 8 additional loaves. If each worker is paid $80/day, the marginal cost of a loaf produced by the 5th worker is:",
    options: [
      "$5.33",
      "$6.67",
      "$10.00",
      "$16.00",
    ],
    correctIndex: 2,
    explanation:
      "Marginal cost = wage / marginal product. The 5th worker costs $80 and produces 8 additional loaves, so MC = $80/8 = $10.00 per loaf. Notice that MC is rising as MP falls (Worker 3's MC = $80/15 = $5.33, Worker 4's MC = $80/12 = $6.67), which illustrates the inverse relationship between MP and MC. (A) $5.33 is the marginal cost when Worker 3 is hired ($80/15), not Worker 5. (B) $6.67 is the marginal cost when Worker 4 is hired ($80/12). (D) $16.00 would imply the worker only produced 5 loaves ($80/5), which doesn't match the given data.",
  },
  {
    id: "pc-13",
    question:
      "When marginal product (MP) of labor is at its maximum, which of the following must be true?",
    options: [
      "Average total cost is at its minimum",
      "Marginal cost is at its minimum",
      "Average variable cost is at its minimum",
      "Total product is at its maximum",
    ],
    correctIndex: 1,
    explanation:
      "MP and MC are mirror images. When MP is at its highest point (each additional worker adds the most output), the cost of producing each additional unit is at its lowest, and MC is at its minimum. After this point, diminishing returns set in, MP falls, and MC rises. (A) is wrong because ATC reaches its minimum later, when MC crosses ATC from below; the minimum MC point occurs at a lower output level. (C) is wrong because AVC is minimized where MC = AVC, not where MC is minimized; AVC's minimum occurs at a higher output than MC's minimum. (D) is wrong because total product is maximized only when MP = 0 (an additional worker adds nothing), which is far beyond the point of maximum MP.",
  },
  {
    id: "pc-14",
    question:
      "A firm has total fixed costs of $200 and the following variable costs: Q=1, TVC=$50; Q=2, TVC=$90; Q=3, TVC=$140; Q=4, TVC=$200; Q=5, TVC=$280. What is the total cost of producing 4 units?",
    options: [
      "$200",
      "$400",
      "$450",
      "$480",
    ],
    correctIndex: 1,
    explanation:
      "Total cost = total fixed cost + total variable cost. At Q = 4, TFC = $200 and TVC = $200, so TC = $200 + $200 = $400. (A) $200 counts only the fixed costs and ignores variable costs entirely. This would be the total cost only if the firm produced zero units. (C) $450 may result from incorrectly summing TVC at a different quantity or adding a wrong TFC figure. (D) $480 appears to use TVC at Q = 5 ($280) plus TFC ($200), which gives the total cost at 5 units, not 4.",
  },
  {
    id: "pc-15",
    question:
      "The long-run average total cost (LRATC) curve is typically U-shaped because:",
    options: [
      "Of the law of diminishing marginal returns, which applies to all production time frames",
      "Fixed costs first fall then rise as output increases",
      "Economies of scale reduce costs at low output, but diseconomies of scale raise costs at high output",
      "Marginal cost always intersects LRATC at its minimum",
    ],
    correctIndex: 2,
    explanation:
      "The LRATC curve falls at first because of economies of scale: larger operations benefit from specialization, bulk discounts, and spreading large setup costs. It eventually rises because of diseconomies of scale: as firms grow too large, coordination problems, bureaucracy, and communication breakdowns raise per-unit costs. The combination creates the U shape. (A) is wrong because diminishing marginal returns is a short-run concept that applies when at least one input is fixed; in the long run, all inputs are variable, so diminishing returns is not the driver. (B) is wrong because there are no fixed costs in the long run; by definition, every cost is variable when the firm can adjust all inputs. (D) while technically true that MC crosses LRATC at its minimum, this describes a property of the curves, not the underlying reason for the U shape.",
  },
];
