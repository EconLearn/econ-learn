import type { PracticeQuestion } from "@/data/supply-demand-content";

export const oligopolyContent = {
  title: "Oligopoly",
  subtitle:
    "A handful of dominant firms locked in a strategic game where every move triggers a counter-move",
  sections: [
    {
      heading: "When a Few Firms Run the Show",
      content: `Verizon, AT&T, and T-Mobile all charge roughly the same for unlimited plans. Delta raises fares and United matches within hours. The reason comes down to one concept: *mutual interdependence*.

An **oligopoly** is a market dominated by a small number of large firms. Cell carriers, airlines, auto manufacturers, streaming services. Unlike perfect competition (where your firm is too small to matter) or monopoly (where you *are* the market), oligopoly sits in the messy middle. You have real market power, but so do your rivals, and *every pricing decision, ad campaign, or product launch ripples through the entire market*.

That interdependence is what makes oligopoly the most strategically complex market structure. A monopolist worries only about consumer demand. A perfectly competitive firm takes the market price. An oligopolist is playing chess. If Coca-Cola slashes prices, Pepsi must decide: match the cut, undercut further, or hold the line? Each response triggers another round of decisions.

**Barriers to entry** keep the club exclusive. Enormous capital requirements (building a 5G network costs billions), patents, brand loyalty built over decades, control over key resources. New firms *want* to enter because oligopoly profits can be substantial, but the barriers make it extremely difficult.

Firms in an oligopoly can produce *identical* products (steel, aluminum, a **homogeneous oligopoly**) or *differentiated* ones (Samsung vs. Apple phones). Either way, strategic interdependence remains.`,
    },
    {
      heading: "Game Theory and the Prisoner's Dilemma",
      content: `Imagine you're a pricing executive at American Airlines. You could cut fares on the Chicago-to-Miami route by 20% and steal passengers from United. Sounds great until United retaliates with a 25% cut, Southwest jumps in, and everyone's margins are destroyed. Both airlines would have been better off keeping prices high.

This is exactly why economists use **game theory**, the study of strategic decision-making when your outcome depends on what the other player does. In oligopoly, firms aren't just reacting to supply and demand. They're anticipating each other's moves.

The classic illustration is the **prisoner's dilemma**. Applied to airline pricing:

*Setup:* American and United each choose between keeping fares high or cutting them low.
- If *both* keep fares high, they each earn $10 million in profit.
- If *both* cut fares, a price war erupts and each earns only $4 million.
- If *one* cuts while the other holds high, the price-cutter grabs market share and earns $12 million while the holdout earns just $2 million.

Each airline *individually* gains by cutting fares regardless of what the other does. If United keeps prices high, American earns $12M by cutting vs. $10M by holding. If United cuts, American earns $4M by cutting vs. $2M by holding. Cutting is the **dominant strategy** for both. Yet when both cut, they land at $4M each, far worse than the $10M they'd earn by cooperating.

The tension between *individual rationality* and *collective interest* sits at the core of oligopoly. Firms want to cooperate and keep prices high together, but the temptation to cheat is overwhelming.`,
    },
    {
      heading: "Nash Equilibrium and Dominant Strategies",
      content: `So where do the airlines actually end up? The answer comes from mathematician John Nash (yes, the *A Beautiful Mind* guy).

A **Nash equilibrium** occurs when no player can improve their outcome by *unilaterally* changing their strategy, given what the other player is doing. In the airline example, both cutting fares is the Nash equilibrium. Once both are cutting, neither gains by switching to high fares alone. They'd just lose market share.

Here's the painful part: the Nash equilibrium is *not* the best collective outcome. Both firms earning $4M is worse than both earning $10M. But it's *stable*. Neither firm has an incentive to deviate on its own. Oligopolies therefore tend to produce outcomes better for consumers than monopoly but worse than perfect competition.

A **dominant strategy** exists when one choice is better for a player *regardless* of what the opponent does. In the prisoner's dilemma, cutting fares is dominant for both airlines. Not every game has dominant strategies, though. In more complex scenarios, the best move genuinely depends on your read of the competition.

For the AP exam, remember: *Nash equilibrium is where rational, self-interested firms end up, not where they would ideally like to be.* The gap between Nash equilibrium and the cooperative outcome is what drives firms to attempt collusion.`,
    },
    {
      heading: "Cartels and Collusion",
      content: `If cutting prices makes everyone worse off, why not just agree not to? That logic drives **collusion**, where rival firms secretly (or openly) coordinate pricing, output, or market territory to maximize joint profits.

The most famous example is **OPEC** (Organization of the Petroleum Exporting Countries). Member nations, including Saudi Arabia, Iraq, and the UAE, meet regularly to set production quotas. Restricting oil output pushes the global price above the competitive level, and members split the extra profit. When OPEC coordination is tight, oil prices surge. When it falls apart, prices collapse.

A **cartel** is collusion made formal: firms explicitly agree on prices or output levels. When it works, a cartel mimics a monopoly, restricting quantity and charging monopoly prices. Consumers pay more, output falls below the efficient level, and deadweight loss appears. Cartels are illegal in most countries for exactly this reason (the Sherman Antitrust Act in the U.S., for instance).

Every cartel faces the same fundamental problem, though: *cheating is irresistible*. If American and United agree to keep fares high, each earns $10M. But American knows it could secretly offer discount fares, grab extra passengers, and earn $12M while United naively holds the line. Every cartel member faces this temptation. Cartels are therefore inherently unstable.

OPEC demonstrates this constantly. Member countries regularly exceed their production quotas, pumping extra oil for additional revenue and hoping others won't notice. When enough members cheat, discipline breaks down and prices fall.

Collusion is easier to sustain when:
- There are *fewer* firms (easier to monitor each other)
- The product is *homogeneous* (hard to secretly differentiate)
- The market is *stable* (demand isn't fluctuating wildly)
- Firms interact *repeatedly* (the threat of future retaliation keeps everyone honest)

Even without explicit agreements, firms sometimes engage in **tacit collusion**, coordinating behavior without direct communication. One airline raises fares and others follow within hours. It's legal, since proving a secret agreement is nearly impossible, but the economic effects are similar.`,
    },
    {
      heading: "The Kinked Demand Curve",
      content: `Oligopoly prices often stay *remarkably stable* even when costs change. Gas stations on the same intersection hold the same price for weeks. Airlines keep fares locked on popular routes. The **kinked demand curve** model offers one explanation, and it starts with a simple assumption about how rivals react.

*If you raise your price, competitors won't follow.* They happily watch you lose customers to them. Demand above the current price is therefore very elastic. A small price increase causes a big drop in your sales.

*If you cut your price, competitors will match you immediately.* They can't afford to lose market share. Demand below the current price is relatively inelastic, since a price cut barely increases your sales when rivals neutralize it.

This asymmetry creates a *kink* in the demand curve right at the current price. The kink produces a gap in the marginal revenue curve. Even if a firm's marginal costs shift up or down within that gap, the profit-maximizing quantity, and therefore the price, *does not change*.

So oligopoly prices are sticky because firms resist raising prices (they lose customers) and resist cutting them (rivals match, leaving everyone worse off). Prices cluster together and stay put, changing only when costs or demand shift dramatically.

The model has critics, and honestly it's not perfect. It explains *why* prices are sticky but not *how* the current price got established in the first place. Still, it captures an important reality of oligopoly behavior and shows up regularly on the AP exam.`,
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

**Nash equilibrium:** Both firms choose High Ads, earning ($5M, $5M). Neither can improve by switching alone. If Samsung moves to Low Ads while Apple stays at High Ads, Samsung drops from $5M to $2M. Same for Apple.

**Cooperative outcome:** If both firms could credibly commit to Low Ads, they'd each earn $7M, better for *both*. But the agreement is unstable. If Apple trusts Samsung to keep ads low, Samsung can defect to High Ads and jump from $7M to $9M. The incentive to cheat destroys cooperation.

This is the prisoner's dilemma at work. Rational self-interest drives both firms to the Nash equilibrium ($5M each), even though mutual cooperation ($7M each) would be *collectively* superior. That $2M gap per firm is the cost of strategic rivalry, and the reason firms are constantly tempted to collude.`,
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
      "Mutual interdependence is the hallmark of oligopoly: each firm's decisions directly affect and are affected by its rivals. (A) is wrong because oligopolies can have either identical or differentiated products. (C) is the opposite; oligopolies have significant barriers to entry. (D) describes perfect competition, not oligopoly; oligopolists have pricing power.",
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
      "Both firms setting low prices is the Nash equilibrium because neither can improve its payoff by unilaterally switching to high prices, since doing so would mean losing even more market share. (A) is the cooperative outcome that both firms would prefer, but it's unstable because each firm is tempted to undercut. (C) isn't an equilibrium because the high-price firm would want to switch to low. (D) describes a dynamic strategy not relevant to the one-shot prisoner's dilemma.",
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
      "Exceeding quotas is the classic cartel cheating problem: each member can increase its own revenue by producing more, even though this undermines the cartel's collective goal of restricting output. (A) is a different model about price stickiness, not cartel behavior. (C) is the opposite; OPEC is an explicit agreement, not tacit. (D) is wrong because OPEC exists precisely to avoid competitive pricing.",
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
      "The kink in the demand curve creates a discontinuity (gap) in the marginal revenue curve. Marginal cost can shift within this gap without changing the profit-maximizing output or price, so prices stay stable. (A) is wrong; the model has nothing to do with government regulation. (C) is incorrect; demand is more elastic above the kink and less elastic below it, not perfectly elastic. (D) conflates price stickiness with collusion; the kinked demand model explains stickiness without requiring any agreement.",
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
      "Low Price is Firm A's dominant strategy because it yields a higher payoff no matter what Firm B does. If B goes High, A earns 10 (Low) vs. 8 (High). If B goes Low, A earns 3 (Low) vs. 1 (High). Low wins in both cases. (A) is wrong; High Price gives a lower payoff in every scenario. (C) is wrong because a clear dominant strategy does exist. (D) misunderstands dominant strategies; the whole point is that the best choice does NOT depend on the rival's decision.",
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
      "Repeated interactions make collusion more sustainable because firms can punish cheaters in future rounds, and the threat of retaliation keeps everyone in line. (A) is wrong because more firms means it's harder to coordinate and monitor behavior. (B) makes collusion harder because differentiated products make it difficult to agree on a common price or detect secret discounts. (D) is wrong because unstable demand creates uncertainty about whether a rival's price cut is cheating or just responding to market conditions.",
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
      "The key assumption of the kinked demand model is asymmetric responses: rivals ignore price increases (happily gaining your lost customers) but match price decreases (to protect their market share). (A) describes what happens in a cooperative or cartel scenario, not the kinked demand model. (B) is too extreme; rivals don't need to cut prices when the other firm is already losing customers by raising its own. (D) makes no sense for large oligopolists with significant sunk costs.",
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
      "The cooperative outcome is (8, 8): both firms earning 8 by choosing High Price. But it's unstable because either firm can defect to Low Price and jump from 8 to 10 in profit, while the cooperating firm drops to just 1. This temptation to cheat is why cartels collapse. (A) identifies the Nash equilibrium, not the cooperative outcome, and both firms don't prefer it, they're trapped in it. (C) is not an equilibrium or a cooperative outcome; it's just one possible combination. (D) gets the right outcome but the wrong reason; the question is about market incentives, not regulation.",
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
      "Each firm has a dominant strategy to Cheat: if the rival colludes, cheating yields 15 > 12; if the rival cheats, cheating yields 5 > 2. Both cheating gives the Nash equilibrium of (5, 5). The collectively optimal outcome is (12, 12), where both collude and earn more total profit, but it is unstable because either firm can defect for a higher individual payoff. Option A reverses the two outcomes. Option C picks asymmetric cells that are not equilibria. If Firm X cheats and Firm Y colludes (15, 2), Firm Y would want to switch to cheating, so it is not a Nash equilibrium. Option D incorrectly identifies an asymmetric outcome as the cooperative optimum.",
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
      "A Nash equilibrium is a set of strategies, one per player, such that no individual player can do better by changing only their own strategy while the other players hold theirs constant. It is about individual stability, not collective optimality. Option A describes the cooperative/socially optimal outcome, which often differs from Nash equilibrium. Option C is neither necessary nor sufficient for Nash equilibrium; Nash equilibria can exist whether or not dominant strategies are present. Option D describes a feature of repeated games that may facilitate cooperation, but the definition of Nash equilibrium applies to any game, one-shot or repeated.",
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
      "The MR gap created by the kink means that moderate shifts in MC do not change the profit-maximizing output or price. As long as the new MC curve passes through the vertical discontinuity in MR, the firm's optimal quantity and price remain the same. This is the core explanation for price rigidity in oligopoly. Option A ignores the asymmetric response assumption: raising price causes a large loss of customers because rivals do not follow, so the firm avoids it. Option B is also unattractive because rivals would immediately match the price cut, leaving the firm with lower margins and roughly the same market share. Option D is an overreaction; a cost increase within the gap does not threaten the firm's viability.",
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
      "The cartel instability problem: once the price is elevated, each member realizes it can increase its own revenue by secretly producing beyond its quota. If the cheating is small, the price barely drops and the cheater profits. But when multiple members cheat, supply floods the market and the cartel price collapses. This is the prisoner's dilemma applied to cartels. Option A is wrong because oil demand is relatively inelastic, not perfectly elastic. That inelasticity is precisely why restricting supply raises price effectively. Option C is the opposite of reality; non-OPEC countries often increase production to exploit the higher price, further undermining the cartel. Option D describes effective enforcement, which is the exception rather than the rule in OPEC history.",
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
      "Commercial aircraft manufacturing (Boeing and Airbus) is a textbook oligopoly: very few firms, enormous barriers to entry (billions in R&D and capital), mutual interdependence in pricing and product decisions, and high concentration. Option A describes perfect competition: many sellers of an identical product. Option B describes monopolistic competition: many firms with differentiated products and low barriers to entry. Option D describes a market with easy entry and minimal scale requirements, the opposite of oligopoly conditions.",
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
      "A four-firm concentration ratio measures the combined market share of the four largest firms. At 92%, the market is highly concentrated, which is the hallmark of oligopoly: a few firms dominate. Option A is the opposite conclusion: 92% concentration means the market is far from competitive. Option C incorrectly assumes equal market shares; the ratio is a sum (e.g., one firm could have 50% and three could share 42%). Option D contradicts the high concentration; industries with no barriers to entry tend to have many firms and low concentration ratios, not 92%.",
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
      "Tacit collusion occurs when firms arrive at mutually beneficial pricing without direct communication. For example, one firm raises its price and others follow (price leadership). No meetings, no agreements, just observed behavior and mutual understanding. Option A describes explicit collusion, not tacit, and even explicit agreements are rarely binding since cartels are illegal. Option B is the definition of explicit collusion (direct communication), the opposite of tacit. Option D reverses the legal status: explicit collusion (price-fixing agreements) is the type prosecuted under antitrust law, while tacit collusion is extremely difficult to prosecute precisely because there is no provable agreement.",
  },
];
