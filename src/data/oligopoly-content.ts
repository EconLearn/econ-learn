import type { PracticeQuestion } from "@/data/supply-demand-content";

export const oligopolyContent = {
  title: "Oligopoly",
  subtitle:
    "The market structure where your rival's pricing decision matters more than your own cost curve",
  sections: [
    {
      heading: "When a Few Firms Run the Show",
      content: `You might assume that having three or four competitors in a market produces something close to competition. Prices should be driven down, consumers should benefit, firms should fight tooth and nail for every sale. That assumption is wrong — and the U.S. wireless industry proves it. Verizon, AT&T, and T-Mobile all charge roughly the same for unlimited plans, hovering within a few dollars of each other month after month. When Delta raises fares on the Atlanta-to-Chicago route, United matches within hours. The textbook explanation is one word: *mutual interdependence*.

An **oligopoly** is a market dominated by a small number of large firms. Cell carriers. Airlines. Auto manufacturers. Streaming services. Unlike perfect competition (where your firm is too small to move the needle) or monopoly (where you *are* the market), oligopoly sits in the messy, strategic middle ground. You have real market power, but so do your rivals. Every pricing decision, every ad campaign, every product launch sends ripples through the entire industry.

That interdependence is what separates oligopoly from everything else. A monopolist worries about consumer demand and nothing more. A perfectly competitive firm takes the market price and moves on. An oligopolist plays chess. If Coca-Cola slashes prices by 15%, Pepsi must decide: match the cut, undercut further, or hold firm and hope brand loyalty carries the day? Each response triggers another round of decisions.

**Barriers to entry** keep the club small. Building a 5G network costs tens of billions of dollars. Pharmaceutical patents last 20 years. Brand loyalty built over decades — think Nike, Apple, Boeing — is nearly impossible for a startup to replicate overnight. New firms *want* in because oligopoly profits can be enormous, but the barriers make entry brutally difficult.

Products can be identical (steel, aluminum — a **homogeneous oligopoly**) or differentiated (Samsung Galaxy vs. iPhone). Strategic interdependence remains either way.`,
    },
    {
      heading: "Game Theory and the Prisoner's Dilemma",
      content: `Picture yourself as a pricing executive at American Airlines. You could slash fares on the Chicago-to-Miami route by 20% and steal passengers from United. Sounds like a win — until United retaliates with a 25% cut, Southwest jumps in, and everyone's margins are destroyed. Both airlines would have earned more by keeping prices high.

This is why economists use **game theory**: the study of strategic decision-making when your outcome depends on what the other player does. In oligopoly, firms don't just react to supply and demand curves. They anticipate each other's moves, bluffs, and retaliations.

The classic illustration is the **prisoner's dilemma**. Applied to airline pricing:

*Setup:* American and United each choose between keeping fares high or cutting low.
- Both keep fares high → each earns $10 million
- Both cut fares → price war, each earns $4 million
- One cuts while the other holds high → the cutter grabs market share and earns $12 million; the holdout earns just $2 million

Each airline individually gains by cutting fares *regardless* of what the other does. If United holds high, American earns $12M by cutting versus $10M by holding. If United cuts, American earns $4M by cutting versus $2M by holding. Cutting is the **dominant strategy** for both players. Yet when both cut, they land at $4M each — far worse than the $10M they'd each pocket through cooperation.

The tension between individual rationality and collective interest is the beating heart of oligopoly. Firms desperately want to cooperate and keep prices high, but the temptation to cheat is overwhelming.`,
    },
    {
      heading: "Nash Equilibrium and Dominant Strategies",
      content: `Where do the airlines actually end up? The answer comes from John Nash, the Princeton mathematician made famous by the 2001 film *A Beautiful Mind*.

A **Nash equilibrium** occurs when no player can improve their payoff by *unilaterally* switching strategy, given what the other player is doing. In the airline example, both cutting fares is the Nash equilibrium. Once both are cutting, neither benefits from switching alone to high fares — they'd just hemorrhage market share.

The painful part: the Nash equilibrium is *not* the best collective outcome. Both firms stuck at $4M is strictly worse than both earning $10M. But it's stable. Neither has incentive to deviate on its own.

A **dominant strategy** exists when one choice beats the alternative no matter what the opponent does. In the prisoner's dilemma, cutting fares is dominant for both airlines. Not every game has dominant strategies, though. In more complex scenarios with three or four options, the best move genuinely depends on your read of the competition, and no single choice dominates across all possibilities.

For the AP exam: *Nash equilibrium is where rational, self-interested firms end up, not where they'd like to be.* That gap between the Nash outcome and the cooperative outcome is precisely what tempts firms toward collusion.`,
    },
    {
      heading: "Cartels and Collusion",
      content: `If cutting prices makes everyone worse off, the obvious question is: why not just agree to keep them high? That logic drives **collusion** — rival firms secretly or openly coordinating on pricing, output, or market territory to maximize joint profits.

**OPEC** (Organization of the Petroleum Exporting Countries) is the most famous example. Saudi Arabia, Iraq, the UAE, and other member nations meet regularly to set production quotas. Restricting oil output pushes the global price above the competitive level. When OPEC coordination is tight — as it was in the 1973 embargo that quadrupled oil prices — members split enormous profits. When discipline collapses, prices crater.

A **cartel** is collusion made formal: firms explicitly agree on prices or output. When it works, a cartel mimics a monopoly outcome — restricted quantity, monopoly-level prices, deadweight loss. That's why cartels are illegal in most countries. The Sherman Antitrust Act of 1890 made price-fixing a federal crime in the United States.

Every cartel faces the same fatal flaw, though. Cheating is irresistible. If American and United agree to keep fares high and each earns $10M, American knows it could secretly discount flights, grab extra passengers, and jump to $12M while United naively holds the line. Every cartel member faces this exact temptation. Cartels are therefore inherently unstable.

OPEC demonstrates the instability constantly. Member countries routinely exceed their production quotas, pumping extra oil for additional revenue and hoping nobody notices. When enough members cheat, discipline collapses and prices fall.

Collusion is easier to maintain when:
- Fewer firms are involved, making monitoring simpler
- The product is homogeneous, so secret discounting is hard to hide
- Demand conditions are stable rather than volatile
- Firms interact repeatedly over time, because the threat of future punishment keeps everyone honest (the so-called "grim trigger" strategy in repeated games)

Even without explicit agreements, firms sometimes engage in **tacit collusion** — coordinating behavior without direct communication. One airline raises fares and others follow within hours. Proving a secret agreement is nearly impossible, so it's technically legal, but the economic effects mirror those of an outright cartel.`,
    },
    {
      heading: "The Kinked Demand Curve",
      content: `Oligopoly prices are often remarkably sticky. Gas stations on the same intersection hold identical prices for weeks. Airlines lock fares on popular routes. The **kinked demand curve** model offers an explanation rooted in one simple assumption about how rivals react.

*If you raise your price, competitors won't follow.* They happily watch your customers defect to them. Demand above the current price is therefore very elastic — a small price increase triggers a large drop in your sales.

*If you cut your price, competitors match immediately.* They refuse to lose market share. Demand below the current price is relatively inelastic, because a price cut barely boosts your sales when rivals neutralize it.

This asymmetry creates a *kink* in the demand curve at the current price. The kink produces a vertical gap in the marginal revenue curve. Even if a firm's MC shifts up or down within that gap, the profit-maximizing quantity — and therefore the price — *doesn't change*.

So prices are sticky because firms resist raising them (you lose customers) and resist cutting them (rivals match, leaving everyone with thinner margins and roughly the same market share). Prices cluster together and stay put until costs or demand shift dramatically enough to push MC outside the gap.

The model has real limitations. It explains *why* prices are rigid but not *how* the initial price got set. Economists like George Stigler criticized it back in the 1940s for exactly that reason. Still, it captures something genuine about oligopoly behavior, and it appears on the AP exam regularly enough that you need to know it.`,
    },
    {
      heading: "Worked Example: 2-Firm Payoff Matrix",
      content: `Samsung and Apple are deciding whether to spend big on advertising or keep ad budgets low.

Payoff matrix (profits in millions, Samsung listed first):

                        Apple: High Ads    Apple: Low Ads
Samsung: High Ads         (5, 5)             (9, 2)
Samsung: Low Ads          (2, 9)             (7, 7)

**Samsung's dominant strategy:**
- If Apple chooses High Ads: Samsung earns $5M (High) vs. $2M (Low). High Ads wins.
- If Apple chooses Low Ads: Samsung earns $9M (High) vs. $7M (Low). High Ads wins again.
- Samsung's dominant strategy: **High Ads** regardless of Apple's choice.

**Apple's dominant strategy:**
- If Samsung chooses High Ads: Apple earns $5M (High) vs. $2M (Low). High Ads wins.
- If Samsung chooses Low Ads: Apple earns $9M (High) vs. $7M (Low). High Ads wins again.
- Apple's dominant strategy: **High Ads**.

**Nash equilibrium:** Both firms choose High Ads, earning ($5M, $5M). Neither can improve by switching alone. If Samsung moves to Low Ads while Apple stays at High Ads, Samsung drops from $5M to $2M. Same logic for Apple.

**Cooperative outcome:** If both committed to Low Ads, they'd each earn $7M — $2M more per firm. But the agreement is unstable. If Apple trusts Samsung to keep ads low, Samsung can defect to High Ads and jump from $7M to $9M. The incentive to cheat destroys cooperation, which is the prisoner's dilemma in action. Rational self-interest pushes both firms to the Nash equilibrium ($5M each), even though mutual restraint ($7M each) would be collectively superior.`,
    },
  ],
};

export const oligopolyQuestions: PracticeQuestion[] = [
  {
    id: "olig-1",
    question:
      "What is the defining characteristic that distinguishes oligopoly from other market structures?",
    options: [
      "Firms produce only identical products",
      "Firms are mutually interdependent in their decision-making",
      "There are no barriers to entry",
      "Firms are price takers",
    ],
    correctIndex: 1,
    explanation:
      "Mutual interdependence is the hallmark — each firm's pricing and output decisions directly affect its rivals and are shaped by what those rivals might do in return. (A) is wrong because oligopolies can involve either identical or differentiated products. (C) is the opposite of reality; significant barriers to entry are what keep the number of firms small. (D) describes perfect competition; oligopolists have genuine pricing power.",
  },
  {
    id: "olig-2",
    question:
      "In a prisoner's dilemma between two firms deciding whether to set high or low prices, what outcome represents the Nash equilibrium?",
    options: [
      "Both firms set high prices",
      "Both firms set low prices",
      "One firm sets a high price and the other sets a low price",
      "Firms alternate between high and low prices each period",
    ],
    correctIndex: 1,
    explanation:
      "Both choosing low prices is Nash because neither can improve its payoff by unilaterally switching to high — doing so would mean losing market share to the rival who stays low. (A) is the cooperative outcome both firms *prefer*, but it's unstable because each is tempted to undercut. (C) isn't an equilibrium because the high-price firm would immediately want to switch. (D) describes a repeated-game dynamic, not the one-shot prisoner's dilemma.",
  },
  {
    id: "olig-3",
    question:
      "OPEC member nations frequently produce more oil than their agreed-upon quotas. This behavior best illustrates which concept?",
    options: [
      "The kinked demand curve",
      "The instability of cartels due to incentives to cheat",
      "Tacit collusion among competitors",
      "Perfectly competitive market behavior",
    ],
    correctIndex: 1,
    explanation:
      "Exceeding quotas is textbook cartel cheating. Each member can boost its own revenue by pumping more oil than agreed, even though collective overproduction undermines the cartel's high-price strategy. (A) is about price stickiness, not cartel behavior. (C) gets it backwards — OPEC involves explicit agreements, not tacit coordination. (D) is wrong because OPEC exists specifically to avoid competitive pricing.",
  },
  {
    id: "olig-4",
    question:
      "According to the kinked demand curve model, why do oligopoly prices tend to be sticky?",
    options: [
      "Government price controls prevent firms from changing prices",
      "Firms face a gap in the marginal revenue curve that absorbs cost changes",
      "Firms have perfectly elastic demand at the current price",
      "Colluding firms agree to never change prices",
    ],
    correctIndex: 1,
    explanation:
      "The kink creates a vertical discontinuity in the MR curve. MC can shift within that gap without changing the profit-maximizing output or price. Prices stay put. (A) has nothing to do with the model — no government regulation is involved. (C) is inaccurate; demand is more elastic *above* the kink and less elastic *below* it, not perfectly elastic throughout. (D) conflates two different models; the kinked demand curve explains stickiness without any collusion agreement.",
  },
  {
    id: "olig-5",
    question:
      "Use this payoff matrix (Firm A's profit listed first):\n\n              Firm B: High Price    Firm B: Low Price\nFirm A: High    (8, 8)                (1, 10)\nFirm A: Low     (10, 1)               (3, 3)\n\nWhat is Firm A's dominant strategy?",
    options: [
      "High Price",
      "Low Price",
      "Firm A does not have a dominant strategy",
      "It depends on what Firm B chooses",
    ],
    correctIndex: 1,
    explanation:
      "Low Price dominates. If B goes High, A earns 10 (Low) vs. 8 (High). If B goes Low, A earns 3 (Low) vs. 1 (High). Low wins in both scenarios. (A) yields a lower payoff in every case. (C) is factually wrong — the dominant strategy is clear. (D) misunderstands what \"dominant\" means; the entire point is that A's best choice does *not* depend on B's decision.",
  },
  {
    id: "olig-6",
    question:
      "Which of the following conditions makes collusion between firms EASIER to sustain?",
    options: [
      "A large number of firms in the market",
      "Highly differentiated products",
      "Frequent, repeated interactions between firms",
      "Rapidly fluctuating demand conditions",
    ],
    correctIndex: 2,
    explanation:
      "Repeated interactions allow firms to punish cheaters in future rounds. The threat of retaliation — \"if you undercut me today, I'll undercut you for the next six months\" — keeps everyone honest. (A) makes collusion harder because coordination and monitoring grow exponentially more difficult with more participants. (B) complicates things because differentiated products make it harder to agree on a common price or detect secret discounts. (D) creates uncertainty about whether a rival's price cut is cheating or a legitimate response to demand shifts, which destabilizes trust.",
  },
  {
    id: "olig-7",
    question:
      "In the kinked demand curve model, if a firm raises its price above the prevailing market price, what is the most likely response from competitors?",
    options: [
      "Competitors will raise their prices by the same amount",
      "Competitors will lower their prices aggressively",
      "Competitors will not follow the price increase",
      "Competitors will exit the market",
    ],
    correctIndex: 2,
    explanation:
      "The core asymmetric assumption: rivals ignore price increases (they're happy to absorb your defecting customers) but match price decreases (to protect their own share). (A) describes cooperative or cartel behavior, not the kinked demand model. (B) is too extreme — rivals don't need to aggressively cut prices when the other firm is already losing customers on its own. (D) makes no sense for large oligopolists with billions in sunk costs.",
  },
  {
    id: "olig-8",
    question:
      "Referring to the same payoff matrix from Question 5, what is the cooperative (jointly optimal) outcome, and why is it unlikely to persist?",
    options: [
      "(3, 3), because both firms prefer low prices",
      "(8, 8), because each firm is tempted to defect to Low Price and earn 10",
      "(10, 1), because Firm A always dominates Firm B",
      "(8, 8), because government regulation enforces it",
    ],
    correctIndex: 1,
    explanation:
      "(8, 8) is the cooperative optimum — both firms earn 8 by choosing High Price. It's unstable because either firm can defect to Low Price and jump from 8 to 10, while the cooperating firm crashes to 1. That temptation is why real-world cartels collapse. (A) identifies the Nash equilibrium, not the cooperative outcome, and both firms are trapped there rather than choosing it. (C) is just one cell in the matrix, not an equilibrium or cooperative result. (D) names the right outcome but the wrong mechanism — the question is about market incentives, not regulation.",
  },
  {
    id: "olig-9",
    question:
      "Use this payoff matrix (Firm X's profit listed first):\n\n              Firm Y: Collude    Firm Y: Cheat\nFirm X: Collude   (12, 12)         (2, 15)\nFirm X: Cheat     (15, 2)          (5, 5)\n\nThe Nash equilibrium and the collectively optimal outcome are, respectively:",
    options: [
      "Nash: (12, 12); Optimal: (5, 5)",
      "Nash: (5, 5); Optimal: (12, 12)",
      "Nash: (15, 2); Optimal: (2, 15)",
      "Nash: (12, 12); Optimal: (15, 2)",
    ],
    correctIndex: 1,
    explanation:
      "Cheating dominates for both firms. If the rival colludes, cheating yields 15 vs. 12. If the rival cheats, cheating yields 5 vs. 2. Both cheating produces the Nash equilibrium at (5, 5). The collectively optimal outcome is (12, 12), where both collude and total profit is maximized — but it's unstable because either firm can defect for a higher individual payoff. (A) reverses the two. (C) picks asymmetric cells that aren't stable — if X cheats and Y colludes, Y would immediately switch to cheating. (D) wrongly labels an asymmetric outcome as the cooperative optimum.",
  },
  {
    id: "olig-10",
    question:
      "A Nash equilibrium in a two-player game is best defined as an outcome where:",
    options: [
      "Both players achieve the highest possible combined payoff",
      "Neither player can improve their own payoff by unilaterally changing strategy",
      "One player has a dominant strategy and the other does not",
      "The game has been repeated enough times for cooperation to emerge",
    ],
    correctIndex: 1,
    explanation:
      "Nash equilibrium: a set of strategies, one per player, where no individual can do better by changing *only* their own strategy while the other holds constant. Individual stability, not collective optimality. (A) describes the cooperative or socially optimal outcome, which frequently differs from Nash. (C) is neither necessary nor sufficient — Nash equilibria exist whether or not dominant strategies are present. (D) describes a feature of repeated games that *may* facilitate cooperation, but the definition of Nash equilibrium applies to one-shot games too.",
  },
  {
    id: "olig-11",
    question:
      "In the kinked demand curve model, a firm's marginal cost rises but remains within the gap in the MR curve. The firm will most likely:",
    options: [
      "Raise its price to cover the higher cost",
      "Lower its price to attract more customers",
      "Keep its price unchanged because MC still intersects within the MR gap",
      "Exit the market because it can no longer cover its costs",
    ],
    correctIndex: 2,
    explanation:
      "As long as MC passes through the vertical discontinuity in MR, the profit-maximizing quantity and price don't budge. That's the whole point of the model — it explains why oligopoly prices resist moderate cost changes. (A) ignores the asymmetric response assumption; raising price means losing customers to rivals who won't follow. (B) is unattractive because rivals would match any cut, leaving everyone with lower margins for roughly the same market share. (D) is an overreaction to a cost increase that falls within the gap.",
  },
  {
    id: "olig-12",
    question:
      "OPEC successfully raises oil prices by restricting production quotas among members. Over time, cartel discipline weakens primarily because:",
    options: [
      "Consumer demand for oil becomes perfectly elastic",
      "Each member has an individual incentive to exceed its quota and sell more at the high price",
      "Non-OPEC countries reduce their oil production in solidarity",
      "Governments in OPEC nations enforce strict compliance with quotas",
    ],
    correctIndex: 1,
    explanation:
      "Once the cartel price is elevated, each member realizes it can boost its own revenue by secretly pumping beyond its quota. If only one member cheats, the price barely drops and that member profits handsomely. But when multiple members cheat simultaneously, supply floods the market and the cartel price collapses. Classic prisoner's dilemma. (A) is wrong — oil demand is notoriously inelastic, which is precisely why restricting supply is so effective at raising prices. (C) is the opposite of reality; non-OPEC producers like U.S. shale companies often *increase* output to exploit the higher price, further undermining the cartel. (D) describes effective enforcement, which is the exception in OPEC's history, not the rule.",
  },
  {
    id: "olig-13",
    question:
      "Which of the following industries is most likely to be classified as an oligopoly?",
    options: [
      "Wheat farming, where thousands of producers sell identical grain",
      "The restaurant industry, where many firms sell differentiated food",
      "The commercial aircraft manufacturing industry, where two firms produce nearly all large passenger jets",
      "Street-corner hot dog vendors, where entry requires minimal capital",
    ],
    correctIndex: 2,
    explanation:
      "Boeing and Airbus produce virtually all large commercial aircraft worldwide. Two firms, enormous barriers to entry (billions in R&D, decades of certification processes), deep mutual interdependence in pricing and design decisions. Textbook oligopoly. (A) is perfect competition — thousands of sellers, identical product. (B) is monopolistic competition — many firms, differentiated products, low barriers. (D) has minimal capital requirements and easy entry, the opposite of oligopoly conditions.",
  },
  {
    id: "olig-14",
    question:
      "A four-firm concentration ratio of 92% in an industry indicates that:",
    options: [
      "The industry is perfectly competitive because many firms share the market",
      "The four largest firms control 92% of total market sales, suggesting an oligopoly",
      "Each of the four firms earns exactly 23% of industry profit",
      "The industry has no barriers to entry",
    ],
    correctIndex: 1,
    explanation:
      "The four-firm concentration ratio sums the market shares of the four largest firms. At 92%, the market is highly concentrated — classic oligopoly territory. (A) draws the opposite conclusion; 92% concentration is about as far from competitive as you can get. (C) assumes equal shares, but the ratio is a sum — one firm could hold 60% while three others split the remaining 32%. (D) contradicts the high concentration; industries with no entry barriers tend toward many firms and low concentration ratios.",
  },
  {
    id: "olig-15",
    question:
      "Tacit collusion differs from explicit collusion in that tacit collusion:",
    options: [
      "Is more stable because firms sign binding contracts",
      "Involves direct communication between firms about prices and output",
      "Occurs when firms coordinate behavior without a formal agreement, such as through price leadership",
      "Is illegal under antitrust law while explicit collusion is permitted",
    ],
    correctIndex: 2,
    explanation:
      "Tacit collusion means firms reach mutually beneficial pricing without any direct communication. One firm raises its price and others follow — price leadership. No meetings, no signed agreements, just observed behavior and an unspoken understanding. (A) describes explicit collusion, and even explicit agreements are rarely binding since they're illegal. (B) is the definition of explicit collusion, the exact opposite. (D) reverses the legal status: explicit collusion (price-fixing, bid-rigging) is what prosecutors go after under antitrust law, while tacit collusion is nearly impossible to prosecute because there's no provable agreement.",
  },
];
