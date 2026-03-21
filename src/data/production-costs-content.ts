import type { PracticeQuestion } from "@/data/supply-demand-content";

export const productionCostsContent = {
  title: "Production and Costs",
  subtitle: "How firms turn inputs into outputs and why cost curves bend the way they do",
  sections: [
    {
      heading: "The Short-Run Production Function",
      content: `Picture a bakery with 3 ovens that can crank out 50 loaves per hour at full capacity if someone's actually running them right. Put 1 baker on all 3 ovens and output hits about 40 loaves, she's stretched too thin, constantly running between stations. Bring in a 2nd baker and output jumps to 100 because they can split the workload. A 3rd pushes production to 140, and a 4th only gets you to 155 because at that point there just aren't enough ovens to keep everyone busy. That pattern of rapid early gains tapering off is the **short-run production function**.

**Short run** in economics has a specific technical meaning: at least one input is fixed. The bakery can't install a 4th oven by tomorrow morning. The lease is signed, the equipment is bolted down, the square footage is what it is. Labor is the only thing management can adjust on short notice.

**Total product (TP)** is just total output at each level of labor. **Marginal product (MP)** measures the extra output from one more worker. Baker 2 added 60 loaves (MP = 60), baker 3 added 40 (MP = 40), baker 4 added only 15 (MP = 15). MP went up at first because of specialization gains, then dropped once the fixed ovens became a bottleneck. That rise-then-fall pattern in MP is what shapes every single cost curve you'll see in this unit.`,
    },
    {
      heading: "The Law of Diminishing Marginal Returns",
      content: `**Diminishing marginal returns** isn't some theoretical claim, it's a physical constraint that kicks in whenever you keep cramming more of one input into a fixed set of other inputs.

The word "eventually" does real work in that sentence. Early on, adding workers actually raises MP because people can specialize. Two assemblers on a line beat two people each doing the whole job solo, since one can wire while the other solders. A third person doing quality checks might boost output even further per person. MP climbs during this specialization phase.

But put twenty workers on that same three-station line and they're literally tripping over each other waiting for equipment.

The connection to costs is mechanical and direct. If worker 8 adds 15 units and worker 9 adds only 10, those last 10 units each required more labor per unit, so they cost more to produce. Diminishing marginal returns cause **marginal cost (MC)** to rise, which is exactly why the MC curve eventually slopes upward. The College Board loves testing whether students can trace that link from the production side over to the cost side.`,
    },
    {
      heading: "From Production to Cost Curves",
      content: `Production and cost curves are mirror images of each other. When MP is rising, MC is falling. When MP falls, MC rises. Once you see that relationship the cost curves stop being mysterious.

**Total cost (TC)** breaks into two pieces. **Total fixed cost (TFC)** covers things like rent, insurance premiums, equipment leases, basically the bills that show up whether you produce zero units or ten thousand. **Total variable cost (TVC)** covers wages, raw materials, electricity consumed on the production floor. These move with output.

TC = TFC + TVC.

Four per-unit cost curves show up on the standard graph that appears on basically every AP exam. **Marginal Cost (MC)** = change in TC / change in Q. **Average Total Cost (ATC)** = TC / Q. **Average Variable Cost (AVC)** = TVC / Q. **Average Fixed Cost (AFC)** = TFC / Q. You need to know all four cold, and you need to know how they relate to each other.

AFC falls continuously, and it mathematically has to. A $5,000 monthly lease spread over 100 units is $50 per unit. Spread it over 1,000 units and it drops to $5. It never bottoms out or turns around. And as output gets really large, ATC and AVC get closer and closer together because that AFC wedge between them keeps shrinking toward zero.`,
    },
    {
      heading: "MC Crosses ATC and AVC at Their Minimums",
      content: `The GPA analogy is honestly the best way to understand this. If your semester GPA comes in below your cumulative, the cumulative drops. If it comes in above, the cumulative rises. The marginal always pulls the average toward itself.

Cost curves work on the exact same math. When MC sits below ATC, every additional unit is cheaper than the current average, so it drags ATC down. The moment MC climbs above ATC, each new unit costs more than average and ATC starts rising. **MC must intersect ATC at ATC's minimum point.** The identical logic holds for AVC, MC crosses through AVC's minimum too.

Here's a detail that matters for the exam: AVC bottoms out at a lower quantity than ATC does, and the reason is pure arithmetic. ATC = AVC + AFC. Even after AVC has started climbing, AFC is still declining (remember, it always declines). That declining AFC component keeps tugging ATC downward for a while longer, so ATC doesn't reach its minimum until later, at a higher output level than where AVC bottomed out. I've seen students lose FRQ points for drawing these minimums at the same quantity, so get the ordering right on your graphs.`,
    },
    {
      heading: "Economies and Diseconomies of Scale",
      content: `The **long run** is the planning horizon where nothing is fixed. A firm can triple its factory floor, replace every machine, move to a different state entirely. The question shifts from "how many workers should we hire?" to "what size should this whole operation be?"

**Long-run average total cost (LRATC)** maps out the answer across three zones.

**Economies of scale** show up on the downward-sloping left side. Toyota cranking out 500,000 Camrys a year can justify robotic welding systems that a 5,000-car-a-year shop never could, and they can negotiate steel prices at bulk rates and spread a $1.8 billion R&D budget across way more units. Per-unit cost drops as scale grows.

**Diseconomies of scale** are the upward-sloping right side. A company with 200,000 employees tends to drown in management layers, duplicated departments, and meetings about meetings. Communication slows down, decisions take forever, and per-unit cost starts climbing again.

**Constant returns to scale** fill the flat middle section where doubling all inputs doubles output and average cost holds steady. The output level where LRATC first hits this floor is called **minimum efficient scale**. In industries where that number is massive (semiconductor fabs cost $20+ billion to build, Boeing spent roughly $32 billion developing the 787), you end up with only a handful of firms because nobody else can reach the scale needed to compete on cost.`,
    },
    {
      heading: "Connecting Costs to Market Structure",
      content: `Every output decision a firm makes traces back to these cost curves. A competitive firm produces where P = MC. A monopolist produces where MR = MC. Regardless of what market structure you're in, MC is the backbone of the production decision.

But there's a second question: should the firm produce at all?

If price sits above ATC, the firm earns economic profit. If price is below ATC but still above AVC, the firm is losing money, but operating still beats shutting down because revenue covers all variable costs and chips away at the fixed cost bill. Shutting down means zero revenue while those fixed costs (the lease, the insurance) keep coming due anyway. Price below AVC is where it gets ugly: every additional unit produced actually makes total losses *worse* than just closing the doors. That's the **shutdown point**, and students mix it up with the break-even point constantly on the AP exam.

Stitch those rules together for a competitive firm: it supplies output along its MC curve, but only at prices at or above minimum AVC. Below that threshold, quantity supplied is zero. So the **short-run supply curve** is the segment of MC that sits above AVC. This is a standard multiple-choice question, the 2019 AP Micro exam had a version of it.`,
    },
    {
      heading: "Worked Example",
      content: `A screen-printing shop pays $120/day in rent and equipment leases. Today it printed 8 shirts at a total cost of $280.

TVC = TC - TFC = $280 - $120 = $160. That $160 covers ink, blank shirts, and the labor to print them.

Per-unit breakdown:
- AFC = $120 / 8 = **$15** per shirt
- AVC = $160 / 8 = **$20** per shirt
- ATC = $280 / 8 = **$35** per shirt

Sanity check: AVC + AFC = $20 + $15 = $35 = ATC. This relationship always holds. If your numbers don't add up, something went wrong somewhere.

Now the shop prints a 9th shirt, and that extra shirt costs $42 to produce. MC = $42. What happens to ATC?

New TC = $280 + $42 = $322. New ATC = $322 / 9 = $35.78. ATC went up from $35 to $35.78 because the MC of $42 exceeded the old ATC of $35, pulling the average upward. This is the marginal-pulls-the-average logic at work with actual numbers.

Flip it around. If that 9th shirt had only cost $28 to produce (MC = $28, which is below the $35 ATC), new ATC = $308 / 9 = $34.22. The average drops. MC below ATC pulls it down, MC above ATC pushes it up. That tug-of-war is exactly why MC intersects ATC at its lowest point.`,
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
      "Each additional worker still adds to output -- just less than the previous one did. Total product keeps climbing, it just climbs more slowly. Option A mixes up diminishing returns with negative returns, which is the more extreme case where MP actually drops below zero. Option C has the direction wrong since total cost rises as you produce more. Option D is backward because AFC always falls -- a fixed dollar amount divided by more units can only get smaller.",
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
      "When MC is below ATC, each new unit is cheaper than the current average, so ATC falls. Once MC rises above ATC, each new unit costs more than average, pushing ATC up. The crossover happens right at ATC's minimum -- same logic as your GPA being pulled up or down by this semester's grades. Option A doesn't really apply to a U-shaped curve in any meaningful way. Option C occurs only at zero variable cost, which isn't a useful production point. Option D confuses where MC bottoms out with where MC crosses ATC; MC reaches its minimum at a lower quantity and then climbs up to eventually pass through ATC's minimum.",
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
      "When price drops below AVC, each unit sold fails to cover even the wages and materials that went into making it. Producing actively makes losses worse compared to just shutting down and paying fixed costs with zero revenue coming in. Price below ATC does mean losses, sure -- but the firm should still operate as long as revenue covers variable costs and partially offsets fixed costs. AFC isn't a meaningful threshold for shutdown decisions. MC tells you how much to produce, not whether to produce at all.",
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
      "AFC = TFC / Q. Take a constant $1,000 and divide it by 10 units -- that's $100 per unit. Divide it by 100 units and AFC drops to $10. It never stops falling; it just approaches zero without ever reaching it. Option A would require fixed costs themselves to increase, which contradicts the definition of fixed. Option B confuses total fixed cost (which is constant) with average fixed cost (which declines as output rises). Option D describes a U-shaped curve like ATC or AVC, but AFC doesn't have that shape.",
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
      "Economies of scale are strictly a long-run concept about what happens when a firm scales up its entire operation -- bigger plant, more equipment, the works. LRATC falls because of things like bulk purchasing, deeper specialization, and spreading R&D over millions of units. Falling MC is a short-run pattern tied to increasing marginal returns, which can happen without any change to the firm's overall size. Short-run ATC at its minimum just means the firm is producing efficiently at its current plant size. TC below TR means the firm is profitable, which is a completely different question.",
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
      "MP and MC move in opposite directions. If worker 5 produces 20 units and worker 6 produces 25, each wage dollar is yielding more output -- so the cost per additional unit of output is falling. Option A flips the relationship backward. Option B would require each successive worker to add exactly the same output, which doesn't match increasing MP. Option D would mean additional units are free, which doesn't happen in any real production setting.",
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
      "Since ATC = AVC + AFC, the still-declining AFC keeps dragging ATC downward even after AVC has started to rise. ATC doesn't bottom out until the upward pull from rising AVC finally overwhelms the downward pull from declining AFC. Option A is a true statement but doesn't explain why their minimums occur at different quantities. Option C describes the consequence (MC hits AVC first) rather than the underlying reason. Option D contradicts what fixed costs are -- they don't change with output by definition.",
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
      "A competitive firm sets output where P = MC, but it only produces when price covers variable costs. Below minimum AVC the firm shuts down entirely. Above it, the firm traces along its MC curve. So the supply curve is the portion of MC at or above minimum AVC. Option A includes the region below AVC where the firm wouldn't operate -- that's the most common wrong answer on this type of question. Options B and D reference the wrong curves altogether.",
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
      "MC ($30) exceeds ATC ($25), so producing that 101st unit pulls the average up. You can verify: new TC = ($25 x 100 + $30) = $2,530. New ATC = $2,530 / 101 = $25.05. It went up. Option A is partially true -- spreading fixed costs does lower AFC -- but the $30 MC exceeding the $25 ATC is the dominant force here. Option C is wrong because every single additional unit affects the average; one unit can absolutely change it. Option D has the direction completely backward.",
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
      "All inputs doubled and output more than doubled, which means LRATC is falling. That's economies of scale -- bulk purchasing, deeper specialization, and spreading large upfront investments across more units. Diminishing marginal returns is a short-run concept about adding one variable input to fixed inputs; here all inputs changed proportionally. Diseconomies of scale would mean output less than doubles. Constant returns would mean output exactly doubles.",
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
      "The short run is defined by having at least one fixed input, which creates fixed costs and constrains how the firm can adjust. In the long run every input is variable, so the firm can resize its plant, renegotiate its lease, swap equipment -- whatever finds the lowest-cost combination for any given output. Option B is wrong because firms produce where P = MC, which may or may not line up with minimum ATC. Option C is wrong because long-run costs can actually be lower when the firm optimizes its scale; inflation is a separate issue. Option D is completely backward -- the short run is specifically where fixed costs exist.",
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
      "MC = wage / MP. Worker 5 costs $80 and produces 8 loaves, so $80 / 8 = $10.00 per loaf. Notice the pattern as diminishing returns set in: worker 3's MC = $80/15 = $5.33, worker 4's MC = $80/12 = $6.67. MC rises as MP falls. Option A is worker 3's MC. Option B is worker 4's MC. Option D would imply only 5 loaves from that worker, which contradicts the given data.",
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
      "Since MP and MC are mirror images, maximum MP -- where each additional worker adds the most output -- corresponds to minimum MC, where each additional unit is cheapest. ATC hits its minimum later, at the higher output where MC crosses up through ATC. AVC minimizes where MC = AVC, also at a higher output than MC's own minimum. Total product maxes out where MP = 0, which is way beyond the point of maximum MP.",
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
      "TC = TFC + TVC. At Q = 4, that's $200 + $200 = $400. Option A counts only fixed costs as if the firm produced nothing at all. Option C likely results from using the wrong quantity's TVC or an incorrect TFC value. Option D uses TVC at Q = 5 ($280) plus TFC ($200), which gives $480 -- the total cost of 5 units, not 4.",
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
      "LRATC falls on the left side through economies of scale -- specialization, volume discounts, spreading setup costs over more units. It rises on the right through diseconomies of scale -- coordination problems, bureaucratic bloat, communication breakdowns in huge organizations. That combination produces the U shape. Diminishing marginal returns requires a fixed input, and in the long run everything is variable, so that concept doesn't apply here. Fixed costs don't exist in the long run by definition. Option D describes a property of the curves but doesn't explain the underlying cause of the shape.",
  },
];
