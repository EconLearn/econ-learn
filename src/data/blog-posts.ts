export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  readingTime: string;
  tags: string[];
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-score-a-5-on-ap-microeconomics",
    title: "How to Score a 5 on AP Microeconomics in 2026",
    description:
      "A practical study plan for the AP Micro exam. What to focus on, how to study graphs, and the FRQ strategies that actually work.",
    publishedAt: "2026-03-16",
    readingTime: "8 min read",
    tags: ["AP Micro", "Study Tips", "Exam Prep"],
    content: `Scoring a 5 on AP Microeconomics is very doable if you study the right way. The exam tests your ability to apply concepts, not just memorize them. About 23% of students earned a 5 in 2024, and the curve is generous enough that you don't need a perfect score.

Here's what actually matters.

## Know the Graph Cold

The AP Micro exam is a graph exam disguised as an economics exam. If you can't draw and label the following from memory, you're not ready:

**Supply and demand** with equilibrium, consumer surplus, producer surplus, and deadweight loss. You need to show what happens when demand or supply shifts. You need to identify surplus and shortage areas.

**Perfect competition** in both the short run and long run. The firm-level graph (MR = D = AR = P as a horizontal line intersecting MC and ATC) and the market-level graph side by side.

**Monopoly** with MR below the demand curve, profit-maximizing output where MR = MC, price read off the demand curve, and the deadweight loss triangle. This graph appears on nearly every AP Micro exam.

**Monopolistic competition** short run and long run. The long-run graph where the demand curve is tangent to ATC (zero economic profit) trips people up. Practice drawing it until the tangent point feels natural.

## Focus Your FRQ Practice

The free-response section is worth 50% of your score. Three questions, and they follow a pattern. Question 1 is always the longest and usually covers a market structure (monopoly, oligopoly, or monopolistic competition). Questions 2 and 3 are shorter and test specific concepts like elasticity, game theory, or factor markets.

The single most important FRQ skill: label everything. If the question asks you to draw a graph, label both axes, all curves, the profit-maximizing quantity, the price, and any shaded areas. Points are awarded for correct labels even if your graph is slightly off.

Reread the question after answering. FRQs often have 4-5 parts, and skipping part (d) because you forgot about it costs easy points.

## The 80/20 of Topics

Some topics carry more weight than others. Based on recent exams:

Supply and demand fundamentals, including shifts, price controls, and surplus/shortage analysis, appear every single year. This is non-negotiable.

Market structures (perfect competition, monopoly, monopolistic competition, oligopoly) make up roughly 25-30% of the exam. Monopoly is tested most frequently.

Elasticity shows up in multiple-choice and often as part of an FRQ. The total revenue test, midpoint formula, and determinants of elasticity are all fair game.

Factor markets (labor markets in particular) appear on about 60% of recent exams. MRP = MRC for profit-maximizing hiring is the key equation.

Market failure, externalities, and public goods round out the exam. Know how to show deadweight loss from a negative externality and the optimal Pigouvian tax.

## Study Schedule

If the exam is in May and you're starting in March, you have roughly 10 weeks. Here's a realistic breakdown:

Weeks 1-3: Cover all content. One module per day using EconLearn's interactive lessons. Don't skip the graphs. Drag the curves and see what happens to equilibrium.

Weeks 4-6: Practice questions. Do 15-20 multiple-choice questions per day. Review every wrong answer and understand why the correct answer is correct.

Weeks 7-8: FRQ practice. Do at least one full FRQ per day. Time yourself: 25 minutes for the long question, 12 minutes for each short one. Compare your answers to the College Board's scoring guidelines (available free on AP Central).

Weeks 9-10: Review weak areas. Use your quiz scores on EconLearn to identify which modules need more work. Redo the flashcards for those topics.

## Test Day Tips

Bring multiple pencils and a good eraser. Read every multiple-choice question twice before selecting an answer. On FRQs, write clearly and use the economic terminology from the question. If it says "perfectly competitive firm," your answer should use those exact words.

Don't leave anything blank. Partial credit exists on FRQs, and even a correctly labeled axis can earn you a point.`,
  },
  {
    slug: "supply-and-demand-explained",
    title: "Supply and Demand Explained: The Complete Beginner's Guide",
    description:
      "What supply and demand actually means, how equilibrium works, and why prices change. Written for students who find textbooks confusing.",
    publishedAt: "2026-03-16",
    readingTime: "6 min read",
    tags: ["Supply and Demand", "Beginner", "Microeconomics"],
    content: `Supply and demand is the first thing you learn in economics and the concept that keeps coming back for the rest of the course. If you understand it well, everything else builds on top of it. If you don't, the rest of the class feels like guessing.

The core idea is straightforward.

## Demand: What Buyers Want

**Demand** is the relationship between a product's price and how much people want to buy. When the price goes up, people buy less. When the price drops, people buy more. Economists call this the **law of demand**.

This makes intuitive sense. If your favorite sneakers cost $80, you might buy a pair. At $200, probably not. At $40 on clearance, you might grab two. The demand curve slopes downward because of this inverse relationship between price and quantity.

One thing that confuses students: "demand" and "quantity demanded" are different. **Quantity demanded** changes when the price of the good changes. You slide along the existing curve. **Demand** itself changes when something else changes, like income, preferences, or the price of a substitute. The entire curve shifts.

A pay raise might increase your demand for restaurant meals (the whole curve shifts right). A price increase at one specific restaurant reduces your quantity demanded at that restaurant (you move along the curve). The distinction matters on every AP exam.

## Supply: What Sellers Offer

Flip to the seller's side. **Supply** is the relationship between price and how much producers are willing to sell. Higher prices make production more attractive, so sellers offer more. The supply curve slopes upward.

If you're a farmer and wheat prices double, you plant more wheat. You might even convert some of your corn acreage. The profit motive pulls resources toward whatever's paying well.

Like demand, supply can shift. New technology (fracking made oil cheaper to extract), input costs (steel prices affect car production), government policy (taxes shrink supply, subsidies expand it), and the number of sellers in the market all move the supply curve left or right.

## Equilibrium: Where They Meet

The **equilibrium price** is where the quantity buyers want matches the quantity sellers offer. On a graph, it's where the supply and demand curves cross.

At any price above equilibrium, sellers produce more than buyers want. Unsold inventory piles up. That's a **surplus**, and it pushes the price down as sellers compete to clear their shelves.

At any price below equilibrium, buyers want more than sellers offer. Shelves empty fast. That's a **shortage**, and it pushes the price up as buyers compete for the limited supply.

The market naturally drifts toward equilibrium unless something external holds the price away from it (like a government price ceiling or price floor).

## Why Prices Change

Prices change because supply or demand shifts. A cold snap in Florida destroys orange crops (supply shifts left, price rises). A viral TikTok makes a product trendy (demand shifts right, price rises). A new factory opens (supply shifts right, price falls).

The key to analyzing any price change: figure out which curve shifted and in which direction. Then trace the effect on equilibrium price and quantity. If both curves shift simultaneously, you can determine the direction of one variable but not the other without more information. That's a common AP exam trick.

## Try It Yourself

The best way to understand supply and demand is to manipulate a graph. EconLearn's interactive supply and demand graph lets you drag curves, set price controls, and watch equilibrium adjust in real time. Seeing it move beats reading about it.`,
  },
  {
    slug: "ap-economics-frq-tips",
    title: "AP Economics FRQ Tips: How to Maximize Your Score",
    description:
      "Proven strategies for the AP Economics free-response section. Graph labeling, common mistakes, and what the graders actually look for.",
    publishedAt: "2026-03-16",
    readingTime: "7 min read",
    tags: ["AP Exam", "FRQ", "Study Tips"],
    content: `The free-response questions on the AP Economics exams are worth 50% of your total score. Three questions. You get 60 minutes. Most students lose points not because they don't know the economics, but because they don't answer the question the way the graders want.

Here's how to fix that.

## Read the Scoring Guidelines First

Before you practice a single FRQ, go to AP Central and download the scoring guidelines from the last 3-5 years. These documents show you exactly what earns points and what doesn't. The graders use a rubric. If your answer doesn't match the rubric's language, you might know the concept perfectly and still lose the point.

For example, if the rubric says "the firm will produce where MR = MC" and you write "the firm maximizes profit," that's not specific enough. Use the precise terminology from the question and from economic theory.

## Label Everything on Your Graphs

This is the single easiest way to earn more points. Every graph you draw should have:

Labeled axes (Price on the vertical, Quantity on the horizontal, or whatever the question specifies). Labeled curves (D, S, MC, ATC, MR, etc.). The equilibrium or profit-maximizing point clearly marked. Any relevant areas shaded and labeled (consumer surplus, deadweight loss, profit, etc.). Specific points on the axes identified (P*, Q*, or whatever the question asks for).

Graders award separate points for correct labels. A messy graph with correct labels often earns more than a beautiful graph with missing labels.

## Answer Each Part Separately

FRQs typically have parts (a), (b), (c), and sometimes (d) and (e). Answer them in order. Label your responses clearly. Don't write one big paragraph that covers everything; the grader might miss that you answered part (c) if it's buried in your response to part (b).

If a part asks you to "identify" something, a single word or phrase is enough. If it says "explain," you need 1-2 sentences with economic reasoning. If it says "show on your graph," you need to draw and label.

## Common Mistakes That Cost Points

Writing "price increases" when the question asks about a specific firm and you should say "the firm raises its price to P*." Being vague costs points.

Confusing short run and long run. In perfect competition, firms can earn economic profit in the short run. In the long run, entry drives profit to zero. If the question specifies the time frame, your answer must match.

Forgetting to circle or clearly mark what the question asks for. If it says "shade the area of deadweight loss," and you don't shade anything, that's zero points for that part.

Drawing the wrong number of graphs. Some FRQs want a side-by-side graph (one for the firm, one for the market). If you only draw one, you can't earn the points associated with the other.

## Time Management

You get 60 minutes for three questions. The first question (the long one) should take about 25 minutes. Questions 2 and 3 should take about 12-15 minutes each. If you spend 35 minutes on question 1, you'll rush the others.

Start with whichever question feels easiest to build confidence. But don't spend extra time perfecting it at the expense of the others. Partial credit across all three questions beats a perfect answer on one.

## Practice with Real Exams

The College Board publishes past FRQs with scoring guidelines for free on AP Central. Do them under timed conditions. Then grade yourself against the rubric. Be honest about where you'd lose points. That feedback loop is more valuable than rereading your textbook.

EconLearn's practice quizzes can help you nail the concepts, but FRQ practice requires actually writing out answers by hand. The multiple-choice section tests recognition; the FRQ section tests recall and application. Train both.`,
  },
];
