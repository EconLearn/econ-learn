import type { PracticeQuestion } from "@/data/supply-demand-content";

export const oligopolyContent = {
  title: "Oligopoly",
  subtitle:
    "The market structure where your rival's pricing decision matters more than your own cost curve",
  sections: [
    {
      heading: "When a Few Firms Run the Show",
      content: `Three or four firms in a market doesn't mean competition works the way you'd expect. Verizon, AT&T, and T-Mobile all charge within a few bucks of each other for unlimited plans, month after month, year after year. Delta bumps fares on Atlanta-to-Chicago and United matches before lunch. The reason is **mutual interdependence**, and it changes everything about how these firms behave.

An **oligopoly** is a market structure where a small number of large firms dominate. Cell carriers, airlines, auto manufacturers, streaming platforms. You have real pricing power, but so do the other guys, and that tension sits at the core of every strategic choice: ad spending, product launches, whether to undercut on price or hold the line. This is fundamentally different from perfect competition (where your firm is a speck and can't move the market price) or monopoly (where you are the market, full stop). Oligopoly lives in the middle, and the middle is messy.

That interdependence is the thing the AP exam cares about most. A monopolist only worries about consumer demand. A perfectly competitive firm takes the price and goes home. An oligopolist has to think three moves ahead, like chess. If Coca-Cola drops prices 15%, does Pepsi match? Undercut? Hold and bet on brand loyalty? Each response triggers a counter-response.

**Barriers to entry** keep the number of firms small. Building out a 5G network runs tens of billions of dollars (T-Mobile spent over $80 billion acquiring Sprint in 2020 partly just to get spectrum). Pharma patents lock out competitors for 20 years. Decades of brand equity at Nike or Apple can't be replicated by a startup over a weekend. New firms would love to get in (oligopoly profits can be enormous), but the barriers are brutal.

Products can be identical (steel, aluminum, which is called a **homogeneous oligopoly**) or differentiated (Galaxy vs. iPhone). The strategic interdependence is there regardless.`,
    },
    {
      heading: "Game Theory and the Prisoner's Dilemma",
      content: `You're a pricing executive at American Airlines, looking at the Chicago-to-Miami route. Cutting fares 20% would steal passengers from United, but that sounds great only until United retaliates at 25% off, Southwest piles on, and everybody's margins are wrecked. Both airlines would have been better off keeping prices where they were.

Economists formalize this kind of situation with **game theory**: the study of strategic decision-making when your payoff depends on what somebody else does. In oligopoly, firms don't just respond to supply and demand. They anticipate moves, bluffs, retaliations.

The **prisoner's dilemma** is the classic setup. Applied to airline pricing, it works like this:

American and United each pick between keeping fares high or slashing them low.
- Both keep fares high: each pockets $10 million
- Both slash, meaning a price war, $4 million apiece
- One slashes while the other holds high: the cutter grabs share and gets $12 million, the holdout limps away with $2 million

Look at American's options. If United holds high, American earns $12M by cutting vs. $10M by holding. If United cuts, American earns $4M by cutting vs. $2M by holding. Cutting wins either way. That makes it the **dominant strategy** for both players. But when both cut, they end up at $4M each, which is way worse than the $10M they could have had by cooperating.

The gap between what's individually rational and what's collectively smart is where all the interesting oligopoly behavior comes from. Firms want desperately to cooperate, but the temptation to cheat keeps pulling them apart.`,
    },
    {
      heading: "Nash Equilibrium and Dominant Strategies",
      content: `So where do the airlines actually land? John Nash, the Princeton mathematician and subject of the 2001 film *A Beautiful Mind*, gave us the framework.

A **Nash equilibrium** is an outcome where no player can do better by switching strategy on their own, given what the other player is doing. In the airline example above, both cutting is the Nash equilibrium. Once they're both cutting, neither gains anything by unilaterally moving to high fares. You'd just hemorrhage passengers while the other guy keeps prices low.

The frustrating part: the Nash equilibrium here is not the best collective outcome. Both stuck at $4M is objectively worse than both at $10M. But it's stable. Nobody has a reason to move.

A **dominant strategy** is one that beats the alternative no matter what the opponent does. In the prisoner's dilemma, cutting fares is dominant for both airlines. Not every game has a dominant strategy, though. Once you get into scenarios with three or four options per player, the best choice might genuinely depend on your read of the competition, and no single option wins across all possibilities.

AP exam tip: Nash equilibrium is where rational, self-interested firms end up, not where they wish they were. That difference between the Nash outcome and the cooperative outcome is exactly what drives firms toward collusion.`,
    },
    {
      heading: "Cartels and Collusion",
      content: `If both firms cutting prices leaves everyone worse off, the obvious move is to agree not to cut. That's **collusion**, meaning rival firms coordinating on prices, output, or territory to boost joint profits.

**OPEC** is the textbook case. Saudi Arabia, Iraq, the UAE, and the other members meet to set production quotas. Less oil on the market means higher global prices. When coordination holds (as during the 1973 embargo that quadrupled oil prices overnight) the profits are staggering. When discipline falls apart, prices crater and members start pointing fingers.

A **cartel** is collusion with a formal structure: explicit agreements on prices or output levels. A well-functioning cartel mimics monopoly: restricted quantity, jacked-up prices, and deadweight loss for consumers. That's why most countries ban them. The Sherman Antitrust Act of 1890 made price-fixing a federal crime in the U.S., and the DOJ still prosecutes cases regularly (the lysine cartel of the 1990s, the LCD price-fixing conspiracy of 2006-2010).

Every cartel has the same Achilles' heel, though. If American and United agree to keep fares high at $10M each, American knows it could quietly discount a few routes, grab extra passengers, and jump to $12M while United sits there trusting the deal. Every single cartel member faces that temptation. Cartels are inherently unstable for this reason.

OPEC proves it constantly, and member countries routinely pump above their quotas hoping the extra revenue slides under the radar.

Collusion is easier to sustain when:
- There are fewer firms (monitoring is simpler with 3 players than 30)
- The product is homogeneous, which makes secret discounting harder to hide since buyers would notice
- Demand conditions stay relatively stable
- Firms interact repeatedly over long periods, so the threat of future punishment (economists call it the "grim trigger" strategy) keeps cheating in check

Firms sometimes coordinate without ever talking directly. **Tacit collusion** is when one airline raises fares and others follow within hours. No secret meeting, no paper trail. Prosecutors can't prove an agreement exists, so it's technically legal, but the economic effect is basically the same as a cartel.`,
    },
    {
      heading: "The Kinked Demand Curve",
      content: `Gas stations on the same intersection charge the same price for weeks straight. Airlines lock in fares on popular routes and nobody budges. Oligopoly prices are weirdly sticky, and the **kinked demand curve** model explains why through one assumption about rival behavior.

If you raise your price, competitors don't follow because they're happy to watch your customers walk over to them. So demand above the current price is very elastic. A small hike means a big drop in your sales.

If you cut your price, competitors match right away. They're not going to sit there losing market share. So demand below the current price is relatively inelastic, and your price cut barely gains you anything because rivals neutralize it immediately.

That asymmetry puts a *kink* in the demand curve at the going price. The kink creates a vertical gap in the marginal revenue curve, and this is the key insight for the AP exam: even if a firm's MC shifts up or down within that gap, the profit-maximizing quantity and price don't change. Prices stay put.

So firms avoid raising prices (lose customers) and avoid cutting them (rivals match, margins shrink, market share stays the same). Everyone clusters at the same price and it stays there until something big enough, like a major cost shock or a demand shift, pushes MC outside that gap.

The model has legitimate weaknesses. It explains why prices are sticky but doesn't explain how the initial price got established in the first place. George Stigler pointed this out back in the 1940s and the criticism stuck. Still, it captures something real about oligopoly behavior, and it shows up on AP exams consistently.`,
    },
    {
      heading: "Worked Example: 2-Firm Payoff Matrix",
      content: `Samsung and Apple are deciding whether to spend big on advertising or keep ad budgets low.

Payoff matrix (profits in millions, Samsung listed first):

                        Apple: High Ads    Apple: Low Ads
Samsung: High Ads         (5, 5)             (9, 2)
Samsung: Low Ads          (2, 9)             (7, 7)

**Samsung's dominant strategy:**
- If Apple picks High Ads: Samsung gets $5M (High) vs. $2M (Low). High Ads wins.
- If Apple picks Low Ads: Samsung gets $9M (High) vs. $7M (Low). High Ads wins.
- Dominant strategy for Samsung: **High Ads**, regardless of what Apple does.

**Apple's dominant strategy:**
- If Samsung picks High Ads: Apple gets $5M (High) vs. $2M (Low). High Ads wins.
- If Samsung picks Low Ads: Apple gets $9M (High) vs. $7M (Low). High Ads wins.
- Dominant strategy for Apple: **High Ads**.

**Nash equilibrium:** Both go High Ads, earning ($5M, $5M). Neither firm can improve by switching alone. If Samsung moves to Low Ads while Apple stays at High Ads, Samsung drops from $5M to $2M. Same logic applies to Apple.

**Cooperative outcome:** If both committed to Low Ads, each would earn $7M, which is $2M more per firm. But the agreement falls apart under pressure. If Apple trusts Samsung to keep ads low, Samsung can defect to High Ads and jump from $7M to $9M. That incentive to cheat is the whole prisoner's dilemma dynamic. Self-interest pushes both to the Nash equilibrium ($5M each) even though mutual restraint ($7M each) would leave them collectively better off.`,
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
      "Mutual interdependence is the hallmark of oligopoly: each firm's pricing and output decisions directly shape what rivals do and vice versa. (A) is wrong because oligopolies can sell identical or differentiated products. (C) is backwards; high barriers to entry are what keep the number of firms small. (D) describes perfect competition, not oligopoly, because these firms have real pricing power.",
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
      "Both choosing low prices is the Nash equilibrium because neither firm can improve its payoff by unilaterally switching to high prices, since doing so would just mean losing customers to the rival who stays low. (A) is the cooperative outcome both firms would prefer, but it's unstable since each firm is tempted to undercut. (C) isn't stable because the high-price firm would immediately want to switch. (D) describes repeated-game dynamics, not a one-shot prisoner's dilemma.",
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
      "Exceeding quotas is the classic example of cartel cheating. Each member boosts its own revenue by pumping more oil than agreed, even though collective overproduction undermines the high price the cartel worked to establish. (A) deals with price stickiness, not cartels. (C) gets it backwards, since OPEC involves explicit agreements, the opposite of tacit coordination. (D) is wrong because OPEC exists precisely to avoid competitive pricing.",
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
      "The kink in the demand curve produces a vertical discontinuity in the MR curve. When MC shifts within that gap, the profit-maximizing quantity and price don't budge. (A) is irrelevant because the model has nothing to do with government regulation. (C) is inaccurate; demand is more elastic above the kink and less elastic below it, not perfectly elastic throughout. (D) mixes up two different models; the kinked demand curve explains stickiness without requiring any collusion.",
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
      "Low Price dominates for Firm A. If B picks High, A earns 10 (Low) vs. 8 (High). If B picks Low, A earns 3 (Low) vs. 1 (High). Low Price wins in both cases. (A) yields less in every scenario. (C) is factually incorrect because the dominant strategy is clearly Low. (D) misunderstands what dominant means; the whole point of a dominant strategy is that A's best choice does not depend on B.",
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
      "Repeated interactions let firms credibly threaten punishment, something like 'undercut me today and I'll undercut you for the next six months', which keeps everyone in line. (A) makes collusion harder because coordinating and monitoring behavior becomes exponentially more difficult with more players. (B) complicates agreements because differentiated products make it tougher to agree on a single price or detect when someone is secretly discounting. (D) makes it hard to tell whether a rival's price cut is cheating or just a response to shifting demand, which erodes trust.",
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
      "The key asymmetry in the model: rivals ignore your price increase because they're perfectly happy picking up the customers you lose. They only match price decreases, to protect their own share. (A) describes cooperative or cartel-type behavior, not what the kinked demand model predicts. (B) is too extreme; rivals don't need to aggressively cut when the price-raiser is already bleeding customers on its own. (D) makes no sense for large firms with billions in sunk costs.",
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
      "(8, 8) is the cooperative optimum: both firms earn 8 by choosing High Price. It's unstable because either firm can defect to Low Price and jump from 8 to 10 while the cooperating firm crashes to 1. That temptation is exactly why real-world cartels collapse. (A) identifies the Nash equilibrium, not the cooperative outcome. Firms are trapped there rather than choosing it voluntarily. (C) is just one cell in the matrix, not an equilibrium or cooperative result. (D) names the right outcome but the wrong mechanism entirely.",
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
      "Cheating dominates for both firms. If the rival colludes, cheating yields 15 vs. 12. If the rival cheats, cheating yields 5 vs. 2. So both cheating gives the Nash equilibrium at (5, 5). The collectively optimal outcome is (12, 12), where both collude and total profit maxes out, but it's unstable because either firm can defect for a higher individual payoff. (A) reverses them. (C) picks asymmetric cells that aren't stable because Y would immediately switch to cheating. (D) wrongly labels an asymmetric cell as the cooperative optimum.",
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
      "Nash equilibrium means each player's strategy is the best response to the other player's strategy, so no one gains from changing their own choice while the other holds constant. It's about individual stability, not collective optimality. (A) describes the cooperative or socially optimal outcome, which is often different from Nash. (C) isn't necessary or sufficient because Nash equilibria can exist with or without dominant strategies. (D) describes a feature of repeated games that might help sustain cooperation, but Nash equilibrium applies to one-shot games just fine.",
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
      "As long as MC passes through the vertical discontinuity in MR, the profit-maximizing quantity and price stay exactly where they are. That's the whole model, and it explains why oligopoly prices resist moderate cost swings. (A) ignores the asymmetric response assumption; raising price means losing customers to rivals who won't follow your increase. (B) is unattractive because rivals match any cut, leaving everyone with thinner margins and basically the same market share. (D) is a huge overreaction to a cost increase that falls within the gap.",
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
      "Once the cartel pushes the price up, each member realizes it can boost its own revenue by quietly pumping beyond its quota. If only one member cheats, the price barely moves and that member profits handsomely. But when multiple members cheat at once, supply floods the market and the cartel price collapses. Prisoner's dilemma in real life. (A) is wrong because oil demand is famously inelastic, which is exactly why restricting supply works so well. (C) is the opposite of what happens; non-OPEC producers like U.S. shale companies ramp up output to capitalize on higher prices, further undermining the cartel. (D) describes effective enforcement, which is the exception in OPEC's history, not the norm.",
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
      "Boeing and Airbus produce virtually all large commercial aircraft worldwide: two firms, massive barriers to entry (billions in R&D, years of certification), and deep mutual interdependence on pricing and design. Textbook oligopoly. (A) describes perfect competition, meaning thousands of sellers with an identical product. (B) is monopolistic competition, meaning many firms, differentiated products, and low barriers. (D) has minimal capital requirements and easy entry, the opposite of oligopoly conditions.",
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
      "The four-firm concentration ratio adds up the market shares of the four biggest firms. At 92%, the market is highly concentrated, solidly in oligopoly territory. (A) draws the exact wrong conclusion; 92% concentration is about as far from competitive as it gets. (C) assumes equal shares, but the ratio is a sum. One firm might hold 60% while the other three split 32%. (D) contradicts the high concentration; industries without entry barriers tend toward many firms and low concentration.",
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
      "Tacit collusion is coordination without direct communication. One firm raises prices and the others follow, which is price leadership. No meetings, no written agreements, just observed behavior and an implicit understanding. (A) describes explicit collusion, and even explicit agreements are rarely binding since they're illegal to begin with. (B) is the definition of explicit collusion, the exact opposite of what's being asked. (D) flips the legal status: explicit collusion (price-fixing, bid-rigging) is what the DOJ prosecutes, while tacit collusion is nearly impossible to go after because there's no provable agreement.",
  },
];
