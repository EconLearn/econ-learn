import type { PracticeQuestion } from "@/data/supply-demand-content";

export const productionCostsContent = {
  title: "Production and Costs",
  subtitle: "How firms turn inputs into outputs and why cost curves bend the way they do",
  sections: [
    {
      heading: "The Short-Run Production Function",
      content: `A bakery has 3 ovens. Each oven can bake 50 loaves per hour at full capacity. With 1 baker running all 3 ovens, output is 40 loaves (the baker can't keep up). Add a 2nd baker and output jumps to 100. A 3rd baker pushes it to 140. A 4th only gets it to 155. That pattern -- fast gains early, diminishing gains later -- is the **short-run production function** in action.

The **short run** means at least one input is fixed. The bakery cannot install a 4th oven by tomorrow. Ovens, lease agreements, equipment -- all locked in. The only lever is labor.

**Total product (TP)** tracks output as workers are added. **Marginal product (MP)** measures extra output per additional worker. Baker 2 added 60 loaves (MP = 60). Baker 3 added 40 (MP = 40). Baker 4 added 15 (MP = 15). MP rose initially through specialization, then fell as the fixed ovens became a bottleneck. That rise-then-fall pattern drives every cost curve in this module.`,
    },
    {
      heading: "The Law of Diminishing Marginal Returns",
      content: `The **law of diminishing marginal returns** is not a theory. It is a physical constraint. Pack enough workers into a fixed space with fixed equipment and each additional hire contributes less than the one before.

The word "eventually" matters. Early on, specialization boosts MP. Two workers on an assembly line outperform two solo operators because one wires and the other solders. A third running quality control adds even more. MP rises during this phase.

Crowd twenty workers onto that same three-station line and they wait for equipment, bump into each other, and slow production down.

The link to costs is direct. If worker 8 adds 15 units and worker 9 adds only 10, those last 10 units each cost more to produce than the previous 15. Diminishing marginal returns cause **marginal cost (MC)** to rise. That is why the MC curve eventually slopes upward.`,
    },
    {
      heading: "From Production to Cost Curves",
      content: `Production curves and cost curves are mirror images. Rising MP means falling MC. Falling MP means rising MC.

**Total cost (TC)** has two components. **Total fixed cost (TFC)** covers rent, insurance, equipment leases -- bills that arrive whether the firm produces zero units or ten thousand. **Total variable cost (TVC)** covers wages, raw materials, electricity on the production line. These scale with output.

TC = TFC + TVC.

Four per-unit curves appear on the standard cost graph. **Marginal Cost (MC)** = change in TC / change in Q. **Average Total Cost (ATC)** = TC / Q. **Average Variable Cost (AVC)** = TVC / Q. **Average Fixed Cost (AFC)** = TFC / Q.

AFC falls continuously. A $5,000 monthly lease divided by 100 units is $50 each. Divided by 1,000 units, $5 each. It never stops declining. ATC and AVC converge at high output levels because the shrinking AFC wedge between them approaches zero.`,
    },
    {
      heading: "MC Crosses ATC and AVC at Their Minimums",
      content: `Consider your GPA. If this semester's grades come in below your cumulative average, the cumulative drops. Above it, the cumulative rises. The marginal pulls the average in its direction.

Cost curves follow identical math. While MC sits below ATC, every additional unit is cheaper than the current average, so ATC falls. Once MC climbs above ATC, each new unit costs more than the average, and ATC rises. **MC must cross ATC at its minimum point.** Same logic applies to AVC.

AVC bottoms out at a lower quantity than ATC. The reason is arithmetic: ATC = AVC + AFC, and AFC is still declining at the point where AVC starts climbing. That declining AFC component keeps pulling ATC downward for a stretch even after AVC has turned upward. ATC's minimum therefore comes later.`,
    },
    {
      heading: "Economies and Diseconomies of Scale",
      content: `In the **long run**, nothing is fixed. A firm can triple its factory floor, replace every machine, or relocate to another state. The question shifts from "how many workers?" to "what size should this entire operation be?"

The **long-run average total cost (LRATC)** curve answers that question across three zones.

**Economies of scale** occupy the downward-sloping left portion. Toyota producing 500,000 Camrys a year can afford robotic welding systems, negotiate steel at bulk rates, and spread a $1.8 billion R&D budget across more units. Per-unit cost falls as scale grows.

**Diseconomies of scale** occupy the upward-sloping right portion. A company with 200,000 employees drowns in management layers, duplicated departments, and slow internal communication. Per-unit cost creeps back up.

**Constant returns to scale** fill the flat middle. Doubling all inputs doubles output. Average cost holds steady. The output level where LRATC first reaches this floor is called **minimum efficient scale**. Industries where that number is enormous (semiconductor fabrication, commercial aircraft manufacturing) naturally end up dominated by a handful of firms.`,
    },
    {
      heading: "Connecting Costs to Market Structure",
      content: `Every output decision traces back to these cost curves. A competitive firm produces where P = MC. A monopolist produces where MR = MC. The MC curve is the backbone of the production decision regardless of market structure.

Deciding how much to produce is only half the question. The other half: should the firm produce at all?

Price above ATC means economic profit. AVC below price but price below ATC means the firm loses money, but operating still beats shutting down. Revenue covers variable costs and chips away at fixed costs. Shutting down means eating the entire fixed cost bill with zero revenue coming in. Price below AVC means each unit produced makes losses worse. Shut down. That threshold is the **shutdown point**.

Stitch those rules together and a competitive firm supplies output along its MC curve, but only at prices above minimum AVC. Below that, quantity supplied is zero. The **short-run supply curve** is the segment of MC above AVC.`,
    },
    {
      heading: "Worked Example",
      content: `A screen-printing shop pays $120/day in rent and equipment leases. Today it printed 8 shirts at a total cost of $280.

TVC = TC - TFC = $280 - $120 = $160. That covers ink, blank shirts, and labor.

Per-unit averages:
- AFC = $120 / 8 = **$15** per shirt
- AVC = $160 / 8 = **$20** per shirt
- ATC = $280 / 8 = **$35** per shirt

Check: AVC + AFC = $20 + $15 = $35 = ATC. Always holds.

The shop prints a 9th shirt. That shirt costs $42 to produce. MC = $42. What happens to ATC?

New TC = $280 + $42 = $322. New ATC = $322 / 9 = $35.78. ATC rose from $35 to $35.78 because MC ($42) exceeded the old ATC ($35), pulling the average up.

Flip the scenario. If the 9th shirt cost $28 (MC = $28, below ATC = $35), new ATC = $308 / 9 = $34.22. The average falls. MC below ATC pulls it down. MC above ATC pushes it up. That tug-of-war is why MC intersects ATC at ATC's lowest point.`,
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
      "Each additional worker still adds output, just less than the previous one. Total product keeps climbing; it climbs more slowly. Option A confuses diminishing returns with negative returns, which is a separate and more extreme situation where MP goes below zero. Option C gets the direction wrong: total cost rises with output. Option D is backward; AFC always declines because a fixed dollar amount gets divided by a larger quantity.",
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
      "While MC sits below ATC, each new unit is cheaper than the average, dragging ATC down. Once MC exceeds ATC, each new unit is pricier, pushing ATC up. The crossover is ATC's minimum. Option A has no practical meaning on a U-shaped curve. Option C happens at zero variable cost, which is not a meaningful intersection. Option D confuses MC's own minimum with where MC crosses ATC; MC bottoms out at a lower quantity, then climbs to eventually cross through ATC's minimum.",
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
      "Below AVC, every unit sold fails to cover the wages and materials that went into it. Producing makes losses worse than simply shutting down and paying fixed costs with zero revenue. Price below ATC does mean losses, but the firm is still better off operating as long as revenue covers variable costs and partially offsets fixed costs. AFC is not a meaningful shutdown threshold. MC tells the firm how much to produce, not whether to produce at all.",
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
      "AFC = TFC / Q. Divide a constant $1,000 by 10 units and AFC is $100. Divide by 100 units and it drops to $10. It never stops falling. Option A would require fixed costs to rise, contradicting their definition. Option B confuses total fixed cost (constant) with average fixed cost (declining). Option D describes a U-shaped curve like ATC or AVC, not AFC.",
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
      "Economies of scale are a long-run concept. The firm scales up its entire operation and average cost per unit drops. Bulk purchasing, assembly-line specialization, and R&D spread over millions of units are typical sources. Falling MC is a short-run pattern from increasing marginal returns, which can happen without changing the firm's overall scale. Short-run ATC at its minimum describes efficient production at a given plant size. TC less than TR describes profitability, an entirely separate question.",
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
      "MP and MC are mirror images. If worker 5 produces 20 units and worker 6 produces 25, the cost per additional unit is falling because each wage dollar yields more output. Option A flips the relationship. Option B would require each worker to add exactly the same output. Option D would mean extra units cost nothing, which does not occur in any real production process.",
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
      "ATC = AVC + AFC. Even after AVC starts rising, the declining AFC component keeps pulling ATC downward for a range of output. Only when the AVC increase overwhelms the AFC decline does ATC finally bottom out. Option A is true but does not explain why the minimums occur at different quantities. Option C describes the result, not the cause. Option D contradicts the definition of fixed costs; they do not change with output.",
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
      "A competitive firm picks output where P = MC, but only when price covers variable costs. Below minimum AVC the firm shuts down. Above it, the firm traces along MC. So the supply curve is the portion of MC sitting above minimum AVC. Option A includes the range below AVC where the firm would not produce. Options B and D describe the wrong curves entirely.",
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
      "MC ($30) exceeds ATC ($25). The next unit costs more than the current average, so producing it pulls ATC up. New ATC = ($25 x 100 + $30) / 101 = $2,530 / 101 = $25.05. A clear increase. Option A is wrong because while spreading fixed costs does lower AFC, the $30 MC exceeding $25 ATC is the dominant force. Option C is wrong because every additional unit affects the average. Option D inverts the direction entirely.",
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
      "All inputs double and output more than doubles, so LRATC is falling. Economies of scale. Bulk purchasing, deeper specialization, and spreading large fixed costs like R&D drive this. Diminishing marginal returns is a short-run concept applying when only one input varies; here all inputs change. Diseconomies would mean output less than doubles. Constant returns would mean output exactly doubles.",
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
      "The short run has at least one fixed input (creating fixed costs). In the long run every input is variable, so the firm can resize its plant, renegotiate leases, and find the least-cost combination for any output level. Option B is wrong because firms produce where P = MC, which may be above or below the ATC minimum. Option C is wrong because long-run costs can actually be lower when the firm optimizes scale; inflation is unrelated. Option D is backward; the short run is defined by the presence of fixed costs.",
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
      "MC = wage / MP. Worker 5 costs $80 and produces 8 loaves. $80 / 8 = $10.00. Note the pattern: Worker 3's MC = $80/15 = $5.33, Worker 4's MC = $80/12 = $6.67. MC rises as MP falls. Option A is Worker 3's MC. Option B is Worker 4's MC. Option D implies only 5 loaves produced, which does not match the data.",
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
      "MP and MC are mirror images. Maximum MP means each additional worker adds the most output, so each additional unit is cheapest to produce. MC is at its minimum. ATC reaches its minimum later, when MC crosses ATC from below, at a higher output level. AVC is minimized where MC = AVC, which also comes at a higher output than MC's minimum. Total product is maximized when MP = 0, far beyond the point of maximum MP.",
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
      "TC = TFC + TVC. At Q = 4: $200 + $200 = $400. Option A counts only fixed costs, as if the firm produced nothing. Option C likely uses TVC from a different quantity or an incorrect TFC figure. Option D uses TVC at Q = 5 ($280) plus TFC ($200), which gives TC at 5 units, not 4.",
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
      "LRATC falls at first through economies of scale: specialization, bulk discounts, spreading setup costs. It rises eventually through diseconomies of scale: coordination problems, bureaucracy, communication breakdowns. That combination creates the U shape. Diminishing marginal returns is a short-run concept requiring a fixed input; in the long run all inputs vary. There are no fixed costs in the long run by definition. Option D describes a property of the curves but does not explain why the U shape exists.",
  },
];
