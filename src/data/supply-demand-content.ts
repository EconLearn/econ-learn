export interface PracticeQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const supplyDemandExplanation = {
  title: "Supply and Demand",
  subtitle: "The model behind how markets determine prices without central coordination",
  sections: [
    {
      heading: "The Core Model",
      content: `Nobody sets the price of a gallon of gasoline. No person, no government office. It falls out of millions of buyers deciding whether to fill up and thousands of stations deciding what to charge.

**Supply and demand** is the framework economists use to explain that process. Buyers push for lower prices. Sellers push for higher ones. Where those pressures balance out, you get an **equilibrium**, a price where the amount people want to buy matches the amount producers want to sell. The same logic applies to concert tickets, hourly wages, apartment rent, and virtually every market where goods change hands.`,
    },
    {
      heading: "Demand: The Buyer's Side",
      content: `How many iPhones would people buy at $500? At $1,200? At $200? **Demand** is the full schedule of those answers: the quantity consumers would purchase at each possible price.

The **Law of Demand** says price and quantity demanded move in opposite directions. Sneakers at $80, you buy a pair. At $200, you pass. Clearance at $40, you grab two. That inverse relationship is why the demand curve slopes downward (the blue curve on the graph).

A common mistake is confusing a *change in quantity demanded* (sliding along the curve when price changes) with a *change in demand* (the whole curve shifting). The curve shifts when something other than the good's own price changes:
- **Income** — A raise means you buy more restaurant meals (*normal goods*); ramen consumption might drop (*inferior goods*)
- **Substitute prices** — Pepsi gets cheaper, and Coke demand falls
- Tastes, trends, or cultural shifts — A viral TikTok sends Stanley cup demand through the roof
- **Expectations** — Rumors of a price hike tomorrow make people buy today
- Population or market size — More college students in a city means more demand for cheap pizza`,
    },
    {
      heading: "Supply: The Seller's Side",
      content: `Consider the seller's perspective. If you're a wheat farmer and wheat prices double overnight, you plant more wheat. Maybe you convert some acreage from corn. The profit motive pulls resources toward whatever's paying well.

The **Law of Supply** follows from this: higher prices lead to higher *quantity supplied*. The supply curve slopes upward (the red curve on the graph) because production becomes more attractive as the price climbs.

Several factors can shift the *entire* supply curve left or right:
- **Input costs** — Steel prices spike, and car manufacturers supply fewer vehicles at every price point
- **Technology** — Fracking unlocked massive oil reserves, shifting supply right
- **Number of sellers** — A wave of new coffee shops enters your neighborhood
- **Government policy** — A new tax on sugary drinks shrinks supply; a *subsidy* on solar panels expands it
- **Natural events** — A freeze in Florida devastates the orange crop, shifting supply sharply left`,
    },
    {
      heading: "Equilibrium",
      content: `Where the supply and demand curves cross (the green dot on the graph), you get the **equilibrium price** and **equilibrium quantity**. At that price, the amount buyers want to purchase exactly matches the amount sellers want to produce. No unsold inventory. No frustrated shoppers leaving empty-handed.

What if the price is *wrong*?

**Above equilibrium:** Sellers stock shelves that don't empty. That unsold inventory (a *surplus*) pressures them to cut prices, run sales, and discount. The price drifts back down.

**Below equilibrium:** Buyers show up and the product is gone. That *shortage* lets sellers raise prices, or buyers outbid each other. The price drifts back up.

Economists sometimes call equilibrium a "resting point" because of this self-correction. The market doesn't stay away from it for long, unless something external like a government price control holds it there.`,
    },
    {
      heading: "Shifts vs. Movements Along the Curve",
      content: `Students lose more points on this distinction than almost anything else in AP Micro. One question sorts it out: *did the good's own price change, or did something else change?*

**Own price changed** --> You get a **movement along the curve**. The curve stays put; you just slide to a different point on it. Gasoline goes from $3.50 to $4.00 a gallon, so you drive a bit less. That is movement *along* the demand curve.

**Something else changed** --> The whole curve **shifts**. Tesla releases a $25,000 electric car, and millions of drivers stop caring about gas at *any* price. The gas demand curve shifts left.

Quick filter: if you can answer "the price of *this* good went up/down," it's a movement. If the cause is income, preferences, input costs, technology, substitutes, or policy, it's a shift.`,
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

*Bonus application:* What if the exam asks about a surplus or shortage at P = $60? Plug $60 into both equations. Demand gives Q = 20; supply gives Q = 40. Quantity supplied exceeds quantity demanded by 20 units, so there is a surplus of 20.`,
    },
    {
      heading: "Price Controls",
      content: `Sometimes a government decides the market price is "too high" or "too low" and steps in.

**Price ceiling** is a legal *maximum*. New York City rent control caps what landlords can charge. When that cap sits below the equilibrium rent, more tenants want apartments than landlords are willing to offer at the capped price. The result is a *shortage*. Long waitlists, under-the-table payments, and deteriorating building quality are all predictable side effects.

**Price floor** is a legal *minimum*. The **minimum wage** is the textbook case. Set it above the equilibrium wage, and more workers want jobs than firms want to fill. The resulting *surplus* of labor is unemployment.

Students often reverse these: price floors create surpluses, ceilings create shortages. Floors prop the price *up* (above equilibrium), so quantity supplied exceeds quantity demanded. Ceilings push the price *down* (below equilibrium), so quantity demanded exceeds quantity supplied.

Both binding controls generate **deadweight loss**. Transactions that would have made both buyer and seller better off simply stop happening.`,
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
    explanation: "Price goes up, people buy less — that's the Law of Demand. (A) is backwards: higher prices reduce quantity demanded, not increase it. (C) confuses a movement with a shift — a change in the good's own price slides you along the existing curve; only non-price factors (income, tastes, substitutes) shift the curve itself. (D) has nothing to do with the demand side; supply shifts respond to production-related changes, not consumer behavior.",
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
    explanation: "Cheaper production means firms can profitably offer more phones at every price — the supply curve shifts right. More supply with unchanged demand drives the price down and quantity up. (A) is wrong because a production breakthrough affects the supply side, not consumer preferences; demand doesn't shift here. (B) has the direction backwards — lower costs shift supply *right*, not left. (D) is wrong because while price falls, quantity *rises* (the new equilibrium sits further right along the demand curve).",
  },
  {
    id: "sd-3",
    question: "At a price above the equilibrium, a competitive market will experience:",
    options: [
      "A shortage, because quantity demanded exceeds quantity supplied",
      "A surplus, because quantity supplied exceeds quantity demanded",
      "No change — the market is always in equilibrium",
      "An increase in demand to match the higher price",
    ],
    correctIndex: 1,
    explanation: "When price sits above equilibrium, sellers are eager but buyers aren't — quantity supplied exceeds quantity demanded, producing a surplus. That unsold inventory forces prices back down. (A) describes what happens *below* equilibrium, not above it; shortages occur when the price is too low. (C) is false because markets are not always at equilibrium — they tend toward it, but external conditions or price controls can hold them away. (D) inverts causation; demand doesn't rise just because the price is high — the Law of Demand says the opposite.",
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
    explanation: "Both shifts push price in the same direction — demand rising pulls price up, supply falling also pulls price up — so price *definitely* increases. Quantity is the contested variable: rising demand pushes quantity up, but falling supply pushes quantity down. Which wins depends on the relative size of the shifts. (A) is wrong because it treats the quantity increase as certain, when the supply decrease could offset or overwhelm it. (C) is wrong because price is *not* ambiguous — both shifts reinforce higher prices. (D) has the price direction entirely backwards.",
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
    explanation: "A ceiling below equilibrium holds the price artificially low. At that low price, more consumers want the good (quantity demanded rises) but fewer producers bother supplying it (quantity supplied falls). The gap is a shortage. (A) describes a surplus — the result of a price *floor*, not a ceiling; students commonly mix these up. (C) is wrong because a ceiling below equilibrium is binding by definition — it forces the price below where the market would naturally settle. (D) is wrong because the ceiling prevents the market from reaching a true equilibrium; the mandated price creates persistent excess demand.",
  },
  {
    id: "sd-6",
    question: "Coffee and tea are substitutes. If the price of coffee rises sharply, what happens in the market for tea?",
    options: [
      "The supply of tea increases",
      "The demand for tea increases, raising tea prices",
      "The demand for tea decreases",
      "Nothing — the tea market is independent",
    ],
    correctIndex: 1,
    explanation: "Pricier coffee drives some coffee drinkers to tea, shifting the tea demand curve right. Higher demand raises both the price and quantity of tea sold — that's the positive cross-price relationship between substitutes. (A) is wrong because nothing about coffee's price changes how much it costs to *produce* tea; tea supply is unaffected. (C) has it backwards — demand for a substitute *increases* when the other good's price rises. (D) ignores cross-market effects entirely; related goods markets are connected through consumer choice.",
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
    explanation: "The minimum wage is a price floor on labor. Set above equilibrium, the higher wage attracts more workers (quantity supplied of labor rises) while firms cut back on hiring (quantity demanded for labor falls). The gap — more people wanting jobs than jobs available — is unemployment, a labor surplus. (A) is backwards: a higher wage draws *more* workers in, not fewer. (C) ignores the surplus problem; the market doesn't just smoothly adjust when the legal price is locked above equilibrium. (D) contradicts basic profit logic — when labor costs more, firms hire *less*, not more.",
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
    explanation: "Consumer surplus is the triangle between the demand curve and the price line. With a linear demand curve, the triangle has a height of ($30 - $10) = $20 and a base of 200 units, so CS = 0.5 × $20 × 200 = $2,000. (A) $1,000 incorrectly uses the full rectangle ($10 × 200 / 2) or omits the 0.5 multiplier with wrong dimensions. (C) $4,000 forgets to multiply by 0.5, computing the full rectangle of $20 × 200 instead of the triangle. (D) $6,000 likely multiplies $30 × 200 and halves it, which would measure the entire area under the demand curve rather than the surplus above the price line.",
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
    explanation: "At $800, quantity demanded (15,000) exceeds quantity supplied (9,000), creating a shortage of 6,000 units. Deadweight loss arises because units between 9,000 and the equilibrium quantity would have been traded at mutually beneficial prices but are now prevented by the ceiling. (A) is wrong because a ceiling below equilibrium creates a shortage, not a surplus — surpluses result from price floors. (C) incorrectly claims no deadweight loss; even though renters pay less, the lost transactions between willing buyers and sellers who would have traded between $800 and $1,200 represent real welfare losses. (D) ignores that the ceiling discourages supply — landlords supply fewer units at the artificially low rent, not more.",
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
    explanation: "Both a rightward shift in demand and a rightward shift in supply push equilibrium quantity upward, so quantity definitely increases. However, the demand shift pushes price up while the supply shift pushes price down — the net effect on price depends on which shift is larger. (A) is wrong because it assumes demand dominates; if the supply shift is larger, price falls. (B) is wrong because it assumes supply dominates; if the demand shift is larger, price rises. (D) reverses the ambiguity — price is the ambiguous variable, not quantity, since both shifts reinforce higher quantity.",
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
    explanation: "The drought shifts supply left (reducing quantity and raising price), while the loss of consumer interest shifts demand left (reducing quantity and lowering price). Both shifts reduce equilibrium quantity, so quantity definitely falls. However, supply shifting left pushes price up while demand shifting left pushes price down — the net price effect depends on the relative magnitudes. (A) assumes the supply shift dominates on price, which is not guaranteed. (B) assumes the demand shift dominates on price, which is also not guaranteed. (D) gets the ambiguity backwards — quantity is certain to fall, while price is the ambiguous variable.",
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
    explanation: "When supply shifts left, at the original price there is now excess demand (a shortage) because quantity supplied has decreased while quantity demanded at the old price remains the same. This shortage puts upward pressure on price. As price rises, quantity demanded falls (movement along the demand curve) and quantity supplied increases (movement along the new supply curve) until a new equilibrium is reached at a higher price and lower quantity. (B) describes the adjustment to a rightward shift in supply, not a leftward one — surpluses appear when supply increases or price is above equilibrium. (C) is unrealistic; real markets take time to adjust, and the shortage is the mechanism that drives the price change. (D) is wrong because a supply shift does not automatically cause demand to shift — the demand curve stays put while the market adjusts along it.",
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
    explanation: "By definition, demand for an inferior good increases when income falls — consumers substitute away from more expensive normal goods toward cheaper alternatives like used clothing. This rightward shift in demand raises both the equilibrium price and quantity. (A) applies the logic of normal goods to an inferior good; for normal goods, lower income shifts demand left, but for inferior goods, the relationship is reversed. (C) incorrectly focuses on the supply side — while supply might change during a recession, the question asks about the income-demand relationship, and there is no stated reason for supply to shift. (D) contradicts the definition of an inferior good, which is specifically defined by its inverse relationship to income.",
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
    explanation: "When consumers expect a future price decrease, they delay purchases to take advantage of the coming lower price. This reduces current demand, shifting the demand curve left today, which lowers both the current equilibrium price and quantity. (A) focuses on the wrong side — seller expectations could play a role, but the primary and most direct effect described here is on buyers postponing purchases. (C) gets the logic backwards: consumers expecting a lower future price have an incentive to wait, not to rush in now; buying before a price drop makes no sense when you can pay less by waiting. (D) is wrong because expectations are a demand shifter that operates immediately — the anticipation itself changes current buying behavior, not just the actual future event.",
  },
];
