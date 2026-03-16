export interface PracticeQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const supplyDemandExplanation = {
  title: "Supply and Demand",
  subtitle: "The invisible auction that sets every price you've ever paid",
  sections: [
    {
      heading: "The Core Model",
      content: `Most people assume someone decides what gasoline costs. A government agency, maybe. Some pricing czar in a back office. They're wrong. The price of a gallon of gas emerges from millions of uncoordinated decisions made by buyers who want fuel and stations that want profit. Nobody is in charge.

**Supply and demand** is how economists describe that messy, decentralized process. Buyers want lower prices. Sellers want higher ones. Somewhere in the middle, those two pressures cancel out and you land on an **equilibrium**, the price where the quantity people want to buy matches the quantity producers want to sell. Concert tickets work this way. So do hourly wages, apartment rents, and the going rate for a dozen eggs at your grocery store.

The 2022 AP Micro exam leaned heavily on this framework. If you walked in unable to draw a basic supply-and-demand diagram, you were already behind.`,
    },
    {
      heading: "Demand: The Buyer's Side",
      content: `How many iPhones would people buy at $500? At $1,200? At $200? **Demand** is the full schedule of those answers — every possible price matched with the quantity consumers would purchase at that price.

The **Law of Demand** says price and quantity demanded move in opposite directions. Sneakers at $80, you grab a pair. At $200, you walk past. Clearance rack at $40, you buy two. That inverse relationship explains why the demand curve slopes downward on the graph.

Now, a *change in quantity demanded* and a *change in demand* sound like the same thing. They are not. If you write on a free-response that "demand decreased" when the question describes a price increase, you will lose points. A price change slides you along the existing curve. The whole curve only shifts when something other than the good's own price changes:
- **Income** goes up, and you eat out more (that's a *normal good*); meanwhile your ramen purchases might drop, because ramen is an *inferior good* for most people once they can afford alternatives
- **Substitute prices** matter — Pepsi drops to 99 cents and suddenly fewer people reach for Coke
- Cultural shifts or viral trends (the 2023 Stanley cup craze sent demand for those tumblers through the roof practically overnight)
- **Expectations** about future prices — rumors of a tariff on electronics next month push people to buy laptops today
- Market size — 10,000 new college students move into a city each fall, and cheap pizza demand jumps`,
    },
    {
      heading: "Supply: The Seller's Side",
      content: `Put yourself in a wheat farmer's boots. Wheat prices double overnight. You plant more wheat. Maybe you convert a few hundred acres that were growing corn. The profit motive pulls resources toward whatever's paying well, and that logic is the entire foundation of the supply side.

The **Law of Supply** captures it simply: higher prices lead to higher *quantity supplied*. The supply curve slopes upward because production becomes more attractive as the price climbs.

What shifts the entire supply curve left or right? Several things:
- A spike in **input costs** — steel prices rise and car manufacturers supply fewer vehicles at every price level
- **Technology** breakthroughs — fracking technology in the mid-2000s unlocked massive oil reserves across North Dakota and Texas, shifting U.S. oil supply dramatically to the right
- More sellers entering (a wave of new coffee shops in your neighborhood)
- **Government policy** can go either direction: a $0.02-per-ounce tax on sugary drinks shrinks supply, while a federal subsidy on solar panels expands it
- A freeze in Florida devastates the orange crop — supply shifts sharply left, and orange juice prices spike at the grocery store within weeks`,
    },
    {
      heading: "Equilibrium",
      content: `Where the supply and demand curves cross, you get the **equilibrium price** and **equilibrium quantity**. At that price, the amount buyers want to purchase exactly matches what sellers want to produce. No unsold inventory stacking up in warehouses. No frustrated shoppers leaving empty-handed.

What happens when the price sits above equilibrium? Sellers stock shelves that don't empty. That unsold inventory — a *surplus* — pressures them to cut prices, run sales, and discount. The price drifts back down.

Below equilibrium, the opposite. Buyers show up and the product is gone. That *shortage* lets sellers raise prices, or buyers outbid each other. The price climbs back up.

Economists call equilibrium a "resting point" for this reason. The market doesn't stay away from it for long. External forces like government price controls can pin the price somewhere else, but the pressure to return never disappears. On the 2019 AP Micro free-response, students who couldn't explain this self-correcting mechanism lost easy points on an otherwise straightforward question.`,
    },
    {
      heading: "Shifts vs. Movements Along the Curve",
      content: `One question sorts this out: *did the good's own price change, or did something else change?*

**Own price changed** → you get a **movement along the curve**. The curve stays put. You slide to a different point on it. Gasoline goes from $3.50 to $4.00 a gallon, so you drive a bit less. That's movement *along* the demand curve.

**Something else changed** → the entire curve **shifts**. Tesla releases a $25,000 electric car, and millions of drivers stop caring about gasoline at *any* price. The gas demand curve shifts left.

If a free-response question says "the price of corn increased, so demand for corn decreased" and you agree with that phrasing, you just told the grader you don't understand the model. Price of corn increasing means *quantity demanded* decreased — a movement along the curve. Demand itself didn't budge. The distinction sounds pedantic. On the AP exam, it is worth real points. Every single time.

A useful filter: if the cause is the good's own price, it's a movement. If the cause is income, preferences, input costs, technology, substitutes, complements, expectations, or policy, it's a shift.`,
    },
    {
      heading: "Worked Example",
      content: `Given: **Demand: P = 100 - 2Q** and **Supply: P = 20 + Q**. Find equilibrium.

**Step 1:** Set the equations equal. At equilibrium, the price on both sides matches:

100 - 2Q = 20 + Q

**Step 2:** Solve for Q.

100 - 20 = Q + 2Q
80 = 3Q
**Q = 26.67 units**

**Step 3:** Plug Q into either equation for P. Using supply:

P = 20 + 26.67 = **$46.67**

Verify with demand: P = 100 - 2(26.67) = 100 - 53.33 = $46.67. Same answer, so we're good.

In plain English: at $46.67, buyers want exactly 26.67 units and sellers want to produce exactly 26.67 units. No surplus, no shortage.

*Bonus application:* What if the exam asks about a surplus or shortage at P = $60? Plug $60 into both equations. Demand gives Q = 20; supply gives Q = 40. Quantity supplied exceeds quantity demanded by 20 units, so you've got a surplus of 20.`,
    },
    {
      heading: "Price Controls",
      content: `Sometimes a government decides the market price is too high or too low and steps in. The results are predictable, and predictably messy.

A **price ceiling** is a legal *maximum*. New York City's rent stabilization program caps what landlords can charge on roughly one million apartments. When that cap sits below the equilibrium rent, more tenants want apartments than landlords are willing to offer at the capped price. The result is a *shortage*. Long waitlists, under-the-table payments, and deteriorating building conditions follow.

A **price floor** is a legal *minimum*. The federal **minimum wage** — $7.25 per hour since 2009 — is the textbook example. Set it above the equilibrium wage, and more workers want jobs than firms want to fill. The resulting *surplus* of labor is unemployment.

If you write on the AP exam that a price ceiling creates a surplus, that answer is worth zero points. Floors go *under* something to hold it up — they prop the price above equilibrium, so quantity supplied exceeds quantity demanded, producing surpluses. Ceilings press *down* on the price, holding it below equilibrium, so quantity demanded exceeds quantity supplied, producing shortages.

Both binding controls generate **deadweight loss**. Transactions that would have made both buyer and seller better off simply never happen.`,
    },
  ],
};

export const practiceQuestions: PracticeQuestion[] = [
  {
    id: "sd-1",
    question: "When the price of a good rises, what does the Law of Demand predict will happen?",
    options: [
      "Quantity demanded will increase",
      "Quantity demanded will decrease",
      "The demand curve will shift to the left",
      "The supply curve will shift to the right",
    ],
    correctIndex: 1,
    explanation: "Price up, quantity demanded down. That's the entire Law of Demand in one sentence. (A) flips the relationship backwards. (C) confuses a movement along the curve with a shift — a change in the good's own price slides you along the existing demand curve; only non-price factors like income, tastes, or substitute prices shift the curve itself. (D) has nothing to do with buyers; supply shifts respond to production-side changes.",
  },
  {
    id: "sd-2",
    question: "A major technological breakthrough reduces the cost of producing smartphones. What happens in the smartphone market?",
    options: [
      "Demand curve shifts right, raising price",
      "Supply curve shifts left, raising price",
      "Supply curve shifts right, lowering equilibrium price and increasing quantity",
      "The equilibrium price and quantity both decrease",
    ],
    correctIndex: 2,
    explanation: "Cheaper production costs mean firms can profitably offer more phones at every price point, so supply shifts right. With demand unchanged, that drives the equilibrium price down and quantity up. (A) is wrong because a production breakthrough is a supply-side event — consumer preferences haven't changed, so demand stays put. (B) gets the direction backwards: lower costs shift supply *right*, not left. (D) fails because while price does fall, quantity *rises* — the new equilibrium sits further right along the demand curve.",
  },
  {
    id: "sd-3",
    question: "At a price above the equilibrium, a competitive market will experience:",
    options: [
      "A shortage, because quantity demanded exceeds quantity supplied",
      "A surplus, because quantity supplied exceeds quantity demanded",
      "No change, because the market is always in equilibrium",
      "An increase in demand to match the higher price",
    ],
    correctIndex: 1,
    explanation: "When price sits above equilibrium, sellers are eager but buyers aren't. Quantity supplied exceeds quantity demanded, producing a surplus. That unsold inventory creates downward pressure on the price. (A) describes a scenario *below* equilibrium. (C) is flat wrong — markets tend toward equilibrium, but they aren't always there, especially when price controls or external shocks intervene. (D) inverts the Law of Demand; a higher price doesn't make consumers want *more*.",
  },
  {
    id: "sd-4",
    question: "If demand increases and supply decreases simultaneously, what can we say for certain about the new equilibrium?",
    options: [
      "Price rises and quantity rises",
      "Price rises, but the effect on quantity is ambiguous",
      "Both price and quantity are ambiguous",
      "Price falls and quantity rises",
    ],
    correctIndex: 1,
    explanation: "Both shifts push price upward — rising demand pulls price up, falling supply also pulls price up. So price *definitely* increases. Quantity is the contested variable: rising demand pushes quantity up, but falling supply pushes it down. Which effect wins depends on how large each shift is. (A) treats the quantity increase as certain, when the supply decrease could easily offset it. (C) claims price is ambiguous, but both shifts reinforce higher prices. (D) has price going the wrong direction entirely.",
  },
  {
    id: "sd-5",
    question: "A binding price ceiling set below the equilibrium price will create:",
    options: [
      "A surplus, because sellers produce more than buyers want",
      "A shortage, because buyers want more than sellers will provide",
      "No effect on the market",
      "A new equilibrium at the ceiling price",
    ],
    correctIndex: 1,
    explanation: "A ceiling below equilibrium holds the price artificially low. At that price, more consumers want the good but fewer producers bother supplying it. The gap between quantity demanded and quantity supplied is a shortage. (A) describes a surplus — the result of a price *floor* above equilibrium, not a ceiling below it. (C) is wrong because a ceiling below equilibrium is binding by definition; it forces the price below where the market would settle on its own. (D) is wrong because the ceiling prevents a true equilibrium from forming; the mandated price creates persistent excess demand instead.",
  },
  {
    id: "sd-6",
    question: "Coffee and tea are substitutes. If the price of coffee rises sharply, what happens in the market for tea?",
    options: [
      "The supply of tea increases",
      "The demand for tea increases, raising tea prices",
      "The demand for tea decreases",
      "Nothing, because the tea market is independent",
    ],
    correctIndex: 1,
    explanation: "Pricier coffee drives some coffee drinkers to switch to tea. Tea demand shifts right, raising both the price and quantity of tea sold. That positive cross-price effect is the signature of substitutes. (A) is wrong — nothing about coffee's price changes the cost of *producing* tea, so tea supply stays put. (C) has it exactly backwards. (D) ignores cross-market linkages that run through consumer choice; related goods markets are connected, not independent.",
  },
  {
    id: "sd-7",
    question: "A government imposes a minimum wage (price floor) above the current equilibrium wage. What results in the labor market?",
    options: [
      "A shortage of workers (not enough people want to work)",
      "A surplus of workers (unemployment increases)",
      "The market wage adjusts to equal the minimum wage with no side effects",
      "Firms hire more workers because they're paying them more",
    ],
    correctIndex: 1,
    explanation: "The minimum wage acts as a price floor on labor. Above the equilibrium wage, more workers show up wanting jobs (quantity supplied of labor rises) while firms cut hiring (quantity demanded for labor falls). That gap — more people seeking work than jobs available — is unemployment, a labor surplus. (A) gets it backwards: a higher wage draws more workers in, not fewer. (C) ignores that the binding floor creates a surplus. (D) contradicts basic profit logic; when labor gets more expensive, firms demand less of it.",
  },
  {
    id: "sd-9",
    question: "In a competitive market, the equilibrium price is $10 and the equilibrium quantity is 200 units. The maximum price consumers are willing to pay for the first unit is $30. If the demand curve is linear, consumer surplus is approximately:",
    options: [
      "$1,000",
      "$2,000",
      "$4,000",
      "$6,000",
    ],
    correctIndex: 1,
    explanation: "Consumer surplus is the triangle between the demand curve and the price line. Height = $30 − $10 = $20. Base = 200 units. CS = 0.5 × $20 × 200 = $2,000. (A) likely botches the dimensions or drops the base. (C) forgets the 0.5 — computing $20 × 200 = $4,000 gives the full rectangle, not the triangle. (D) appears to use $30 × 200 ÷ 2, which measures the area under the entire demand curve rather than the surplus above the price line.",
  },
  {
    id: "sd-10",
    question: "A city imposes a price ceiling of $800/month on apartments in a market where the equilibrium rent is $1,200/month. At $800, quantity demanded is 15,000 units and quantity supplied is 9,000 units. Compared to the free-market equilibrium, the price ceiling creates:",
    options: [
      "A surplus of 6,000 units and no deadweight loss",
      "A shortage of 6,000 units and deadweight loss from transactions that no longer occur",
      "A shortage of 6,000 units but no deadweight loss because consumers pay less",
      "No shortage because landlords will simply build more apartments",
    ],
    correctIndex: 1,
    explanation: "At $800, quantity demanded (15,000) exceeds quantity supplied (9,000), creating a 6,000-unit shortage. Deadweight loss appears because apartments between the 9,000 mark and the equilibrium quantity would have been rented at mutually beneficial prices but are now blocked by the ceiling. (A) confuses a ceiling with a floor — ceilings below equilibrium create shortages, not surpluses. (C) ignores the lost transactions; even though renters pay less, the trades that no longer happen represent real welfare losses. (D) is backwards — the artificially low rent *discourages* landlords from supplying units.",
  },
  {
    id: "sd-11",
    question: "Suppose both the supply and demand for electric vehicles increase simultaneously. Supply shifts right due to new battery technology, and demand shifts right due to rising gasoline prices. Which of the following outcomes is certain?",
    options: [
      "Equilibrium price rises and equilibrium quantity rises",
      "Equilibrium price falls and equilibrium quantity rises",
      "Equilibrium quantity rises, but the effect on price is ambiguous",
      "Equilibrium price rises, but the effect on quantity is ambiguous",
    ],
    correctIndex: 2,
    explanation: "Both rightward shifts push equilibrium quantity up — that's certain. Price is the variable that could go either way: the demand shift pushes price up while the supply shift pushes price down. Which dominates depends on the relative magnitude of each shift. (A) assumes demand dominates on price. (B) assumes supply dominates. (D) gets the ambiguity backwards — price is ambiguous, quantity is not.",
  },
  {
    id: "sd-12",
    question: "The market for avocados is in equilibrium. A severe drought destroys 40% of the avocado crop, while simultaneously a new health study causes consumers to lose interest in avocados. What can we say with certainty about the new equilibrium?",
    options: [
      "Price will rise and quantity will fall",
      "Price will fall and quantity will fall",
      "Quantity will fall, but the effect on price is ambiguous",
      "Price will rise, but the effect on quantity is ambiguous",
    ],
    correctIndex: 2,
    explanation: "The drought shifts supply left (pushing price up and quantity down). Lost consumer interest shifts demand left (pushing price down and quantity down). Both shifts reduce quantity — that's guaranteed. Price gets pulled in opposite directions, so the net effect on price depends on which shift is larger. (A) assumes the supply shock dominates on price. (B) assumes the demand shock dominates. (D) flips the ambiguity: quantity is certain to fall, price is the unknown.",
  },
  {
    id: "sd-13",
    question: "After a market is disturbed by a leftward shift in supply, which sequence correctly describes the adjustment back toward the new equilibrium?",
    options: [
      "Shortage appears → price rises → quantity demanded decreases and quantity supplied increases → new equilibrium",
      "Surplus appears → price falls → quantity demanded increases → new equilibrium",
      "Price immediately jumps to the new equilibrium with no transitional shortage or surplus",
      "Demand shifts right to compensate for the supply decrease",
    ],
    correctIndex: 0,
    explanation: "When supply shifts left, at the original price there's now excess demand — a shortage — because quantity supplied has dropped while quantity demanded at the old price hasn't changed. The shortage puts upward pressure on price. As price rises, quantity demanded falls (movement along the demand curve) and quantity supplied increases (movement along the new supply curve) until a new equilibrium is reached. (B) describes adjustment to a supply *increase*, not decrease. (C) is unrealistic; the shortage is the very mechanism that drives the price adjustment. (D) is wrong because a supply shift doesn't cause demand to shift. The demand curve stays in place while the market adjusts along it.",
  },
  {
    id: "sd-14",
    question: "During a recession, consumers' incomes fall significantly. In the market for used clothing (an inferior good), what is the expected effect on equilibrium price and quantity?",
    options: [
      "Price falls and quantity falls because consumers have less money to spend",
      "Price rises and quantity rises because demand for inferior goods increases when income falls",
      "Price falls and quantity rises because supply increases during recessions",
      "No change because inferior goods are not affected by income changes",
    ],
    correctIndex: 1,
    explanation: "By definition, demand for an inferior good rises when income falls — consumers substitute away from pricier normal goods toward cheaper alternatives like used clothing. Demand shifts right, raising both equilibrium price and quantity. (A) applies normal-good logic to an inferior good; that's the single most common error on this question type. (C) focuses on the wrong curve; the question asks about the income-demand relationship, and no reason is given for supply to shift. (D) contradicts what \"inferior good\" means — the entire concept is defined by its inverse relationship to income.",
  },
  {
    id: "sd-15",
    question: "Consumers expect that the price of a popular gaming console will drop by 30% next month due to the release of a newer model. What is the most likely immediate effect in today's market for the current console?",
    options: [
      "Supply shifts left because sellers anticipate lower future prices",
      "Demand shifts left today because consumers postpone purchases, reducing today's price and quantity",
      "Demand shifts right today because consumers want to buy before the price drop",
      "No effect until the actual price change occurs next month",
    ],
    correctIndex: 1,
    explanation: "When consumers expect a future price decrease, they delay buying — why pay full price today when it'll be 30% cheaper in four weeks? That reduces current demand, shifting the demand curve left and lowering both today's equilibrium price and quantity. (A) focuses on the wrong side; the primary and most direct effect here is on buyers postponing purchases. (C) gets the incentive backwards: expecting a *lower* future price means waiting, not rushing in. (D) is wrong because expectations are a demand shifter that operates right now; the anticipation itself changes current buying behavior, not just the eventual event.",
  },
];
