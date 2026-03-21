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
      content: `Nobody in Washington sits in a room and decides what gas should cost. The price you see at the pump comes out of millions of individual decisions happening all at once, drivers choosing whether to fill up or wait until Thursday, refineries calculating how much crude to run through, and the gas station on the corner watching what the Chevron across the street just posted on its sign. The whole system is completely decentralized, and honestly it works way better than you'd expect.

**Supply and demand** is how economists make sense of all that chaos. Buyers want prices low, sellers want them high, and the back-and-forth settles on an **equilibrium**, the price where the quantity people want to buy lines up exactly with what sellers want to produce. Concert tickets, apartment rents, hourly wages, the price of a dozen eggs at Kroger. If it has a market price, this model explains how it got there.

The 2022 AP Micro exam leaned on this framework hard. Walking in without being able to draw a supply-and-demand diagram was basically like showing up to a calculus final without knowing what a fraction is.`,
    },
    {
      heading: "Demand: The Buyer's Side",
      content: `**Demand** is the full schedule of how many units consumers would buy at every possible price. Not one price. Every price. When Apple prices the iPhone at $500, they sell a certain number. At $1,200, fewer people bite. At $200, everyone and their grandma grabs one.

The **Law of Demand** says price and quantity demanded move in opposite directions, and that's what gives you the downward-sloping demand curve on the graph. Sneakers at $80, people grab a pair. Same sneakers at $200, most people walk right past. Slap a $40 clearance sticker on them and some people buy two.

Here's an AP exam pitfall that costs students points every single year: mixing up *change in quantity demanded* with *change in demand*. If you write on a free-response that "demand decreased" when the question is describing a price increase, the grader takes off points. And honestly they should, because those are completely different things. A price change just slides you along the existing curve. The whole curve only shifts when something other than the good's own price changes:
- **Income** goes up and people start eating out more (restaurant meals are a *normal good*), but their ramen purchases might actually drop since ramen is an *inferior good* for most people once they can afford real food
- **Substitute prices**: Pepsi drops to 99 cents a can and Coke starts losing customers
- Cultural shifts or viral trends, like the 2023 Stanley tumbler craze that sent demand through the roof in about two weeks flat
- **Expectations** about future prices: rumors of a tariff on electronics next month and suddenly everyone rushes to buy laptops right now
- Market size: 10,000 new college students pour into a town every August, and cheap pizza demand spikes overnight`,
    },
    {
      heading: "Supply: The Seller's Side",
      content: `A wheat farmer checks the futures market one morning and sees wheat prices have doubled overnight. What does she do? She plants more wheat, maybe converts a few hundred acres that had been growing corn. Profit pulls resources toward whatever pays well, and that basic logic is the entire foundation of the supply side.

The **Law of Supply**: higher prices mean higher *quantity supplied*. The supply curve slopes upward because producing stuff gets more attractive as prices climb. Pretty intuitive when you think about it.

What shifts the entire supply curve?
- A spike in **input costs**: steel prices jump 40% and automakers supply fewer vehicles at every price level
- **Technology** breakthroughs: fracking in the mid-2000s unlocked massive oil reserves across North Dakota and Texas, and U.S. oil supply shifted dramatically to the right
- More sellers entering the market (suddenly a wave of new coffee shops opens in your neighborhood)
- **Government policy** cuts both ways: a $0.02-per-ounce tax on sugary drinks shrinks supply, while a federal subsidy on solar panels expands it
- Natural disasters: a freeze hits Florida and wrecks the orange crop, supply shifts left, and OJ prices at the store jump within weeks`,
    },
    {
      heading: "Equilibrium",
      content: `The **equilibrium price** and **equilibrium quantity** sit right where the supply and demand curves cross. At that exact price, the number of units buyers want to purchase matches what sellers want to produce. No leftovers, no empty shelves.

Above equilibrium, sellers stock shelves that don't clear. That unsold inventory (a *surplus*) pressures them to cut prices, run sales, start marking things down. The price drifts back toward equilibrium on its own.

Below equilibrium, buyers show up and the product is already gone. That *shortage* gives sellers room to raise prices, or buyers start outbidding each other. Price climbs back up.

This self-correcting mechanism is why economists call equilibrium a "resting point." The market doesn't stay away from it for long unless something external like a government price control pins the price somewhere else. And even then, the underlying pressure to snap back to equilibrium never actually goes away. On the 2019 AP Micro free-response, students who couldn't walk through this adjustment process lost easy points on what should have been a straightforward question.`,
    },
    {
      heading: "Shifts vs. Movements Along the Curve",
      content: `There's one question that sorts this out every single time: *did the good's own price change, or did something else change?*

**Own price changed** means you get a **movement along the curve**. The curve stays exactly where it is, you just slide to a different point on it. Gas goes from $3.50 to $4.00 a gallon, so you drive a bit less. That's movement *along* the demand curve.

**Something else changed** means the entire curve **shifts**. Tesla releases a $25,000 electric car and millions of drivers stop caring about gasoline at *any* price, so the gas demand curve shifts left.

If a free-response prompt says "the price of corn increased, so demand for corn decreased" and you agree with that phrasing, you just told the grader you don't understand the model. The price of corn going up means *quantity demanded* decreased, which is movement along the curve. Demand itself didn't budge. This distinction sounds pedantic, but on the AP exam it costs people real points every single year.

Quick filter that always works: if the cause is the good's own price, it's a movement. If the cause is income, preferences, input costs, technology, substitutes, complements, expectations, or government policy, it's a shift.`,
    },
    {
      heading: "Worked Example",
      content: `You're given: **Demand: P = 100 - 2Q** and **Supply: P = 20 + Q**. Find equilibrium.

**Step 1:** Set the equations equal. At equilibrium the price on both sides has to match:

100 - 2Q = 20 + Q

**Step 2:** Solve for Q.

100 - 20 = Q + 2Q
80 = 3Q
**Q = 26.67 units**

**Step 3:** Plug Q back into either equation to get P. Using supply:

P = 20 + 26.67 = **$46.67**

Check it with demand: P = 100 - 2(26.67) = 100 - 53.33 = $46.67. Same answer both ways, so you know there's no algebra mistake.

Translation: at $46.67, buyers want exactly 26.67 units and sellers want to produce exactly 26.67 units. No surplus, no shortage, everyone's happy.

*Bonus application:* What if the exam asks about a surplus or shortage at P = $60? Just plug $60 into both equations. Demand gives Q = 20, supply gives Q = 40. Quantity supplied exceeds quantity demanded by 20 units, so that's a surplus of 20.`,
    },
    {
      heading: "Price Controls",
      content: `Sometimes the government looks at the market price and decides it's too high or too low, so they step in. The results follow a pretty predictable pattern every time.

A **price ceiling** is a legal *maximum*. New York City's rent stabilization program caps what landlords can charge on roughly one million apartments. When that cap sits below the equilibrium rent, more tenants want apartments than landlords are willing to offer at the capped price, and you get a *shortage*. Long waitlists, under-the-table payments, buildings that don't get maintained. The usual fallout.

A **price floor** is a legal *minimum*. The federal **minimum wage** (stuck at $7.25 per hour since 2009, which is kind of wild) is the textbook example. Set it above the equilibrium wage and more workers want jobs than firms want to fill. The resulting *surplus* of labor is what economists call unemployment.

There's a memory trick that saves AP students every year: floors go *under* something to hold it up, so they prop the price above equilibrium (surplus). Ceilings press *down* from above, holding the price below equilibrium (shortage). If you write on the exam that a price ceiling creates a surplus, that answer earns zero points.

Both binding controls generate **deadweight loss**, because transactions that would have made both buyer and seller better off just never happen. The deals are there, the gains from trade exist, but the price control blocks them.`,
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
    explanation: "Price goes up, quantity demanded goes down. That is the Law of Demand in one sentence. (A) reverses the relationship entirely. (C) confuses a movement along the curve with a shift. When the good's own price changes, you slide along the existing demand curve; only non-price factors like income, tastes, or substitute prices shift the curve. (D) involves supply and has nothing to do with the demand side of the question.",
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
    explanation: "Lower production costs let firms profitably offer more phones at every price, so supply shifts right. With demand unchanged, equilibrium price drops and quantity rises. (A) mistakes a supply-side event for a demand-side one. Consumers didn't suddenly want more phones; production just got cheaper. (B) has the shift direction backwards: lower costs shift supply *right*, not left. (D) gets the quantity direction wrong; price falls, but quantity *rises* because the new equilibrium sits further right on the demand curve.",
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
    explanation: "When price is above equilibrium, sellers produce more than buyers want. Quantity supplied exceeds quantity demanded, and the unsold inventory is a surplus. That surplus puts downward pressure on price. (A) has it backwards, because shortages happen *below* equilibrium. (C) is wrong; markets tend toward equilibrium but they aren't always there, especially when price controls or shocks intervene. (D) gets the Law of Demand wrong; higher prices don't cause consumers to buy *more*.",
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
    explanation: "Both shifts push price in the same direction: upward. Rising demand pulls price up, and falling supply also pulls price up. So price *definitely* increases. Quantity is where the ambiguity lives: the demand increase pushes quantity up, but the supply decrease pushes it down. Which effect dominates depends on how large each shift is. (A) treats the quantity increase as certain when the supply decrease could easily offset it. (C) claims price is ambiguous, but both shifts reinforce a price increase. (D) has price moving the wrong direction altogether.",
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
    explanation: "A ceiling below equilibrium holds price artificially low. At that low price, more consumers want the good but fewer producers bother supplying it, and the gap is a shortage. (A) describes what a price *floor* above equilibrium does, not a ceiling. (C) is wrong because a binding ceiling by definition forces the price below where the market would settle. (D) is wrong because the ceiling prevents a true equilibrium. The mandated price generates persistent excess demand rather than balancing the market.",
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
    explanation: "Coffee getting more expensive drives some coffee drinkers to switch to tea. Tea demand shifts right, which raises both the price and quantity of tea sold. That positive cross-price effect is the hallmark of substitutes. (A) is wrong because nothing about coffee's price changes the cost of *producing* tea, so tea supply stays put. (C) has the direction exactly backwards. (D) ignores how related goods markets connect through consumer choice; substitutes are linked, not independent.",
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
    explanation: "The minimum wage is a price floor on labor. Above the equilibrium wage, more workers show up wanting jobs (quantity supplied of labor rises) while firms cut hiring (quantity demanded for labor falls). The gap (more job seekers than open positions) is unemployment, a labor surplus. (A) flips it; a higher wage attracts more workers, not fewer. (C) ignores that a binding floor creates excess supply. (D) contradicts basic cost logic; when labor gets more expensive, firms want less of it.",
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
    explanation: "Consumer surplus is the triangle between the demand curve and the price line. Height = $30 − $10 = $20. Base = 200 units. Area of the triangle = 0.5 × $20 × 200 = $2,000. (A) gets a dimension wrong somewhere, possibly dropping the base or height. (C) forgets the 0.5 factor and calculates $20 × 200 = $4,000, which is the full rectangle, not the triangle. (D) appears to compute $30 × 200 ÷ 2, which measures the area under the entire demand curve instead of just the surplus above the price line.",
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
    explanation: "At $800, quantity demanded (15,000) exceeds quantity supplied (9,000), producing a 6,000-unit shortage. Deadweight loss exists because apartments between the 9,000th unit and the equilibrium quantity would have been rented at prices both landlord and tenant found acceptable, but the ceiling blocks those transactions. (A) has the wrong type of imbalance; ceilings below equilibrium create shortages, not surpluses. (C) ignores that the blocked transactions represent real welfare losses even though remaining renters pay less. (D) gets the incentive backwards, because artificially low rent *discourages* new construction.",
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
    explanation: "Both shifts push equilibrium quantity higher, and that part is certain. Price could go either way: the demand shift pushes price up while the supply shift pushes price down. Which dominates depends on how large each shift is. (A) assumes demand dominates on the price side. (B) assumes supply dominates on price. (D) gets the ambiguity assigned to the wrong variable, since price is the ambiguous one, not quantity.",
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
    explanation: "The drought shifts supply left (price up, quantity down). Lost consumer interest shifts demand left (price down, quantity down). Both shifts reduce quantity. That's the certainty. Price gets tugged in opposite directions: supply shift pushes price up, demand shift pushes it down. The net effect on price depends on which shift is bigger. (A) assumes the supply shock dominates on price. (B) assumes the demand shock dominates. (D) assigns the ambiguity to the wrong variable. Quantity is certain to fall; price is the unknown.",
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
    explanation: "When supply shifts left, at the original price there's excess demand (a shortage) because quantity supplied has dropped while quantity demanded at the old price hasn't changed yet. That shortage puts upward pressure on price. As price rises, quantity demanded falls (movement along the demand curve) and quantity supplied increases (movement along the new supply curve) until a new equilibrium is reached. (B) describes what happens after a supply *increase*, not decrease. (C) skips the mechanism entirely. The shortage is what drives the price adjustment. (D) is wrong because a supply shift doesn't cause demand to shift. The demand curve stays put while the market adjusts along it.",
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
    explanation: "By definition, demand for an inferior good rises when income falls, so consumers substitute away from pricier normal goods toward cheaper alternatives like used clothing. Demand shifts right, pushing both equilibrium price and quantity higher. (A) applies normal-good logic to an inferior good, which is the most common mistake students make on this type of question. (C) focuses on the wrong curve; the question is about the income-demand relationship, and no information is given about supply shifting. (D) contradicts the very definition of an inferior good, since the concept exists precisely because of its inverse relationship with income.",
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
    explanation: "When consumers expect a future price drop, they hold off on buying. Why pay full price today when it'll be 30% cheaper in four weeks? That reduces current demand, shifting the demand curve left and lowering both today's equilibrium price and quantity. (A) focuses on the wrong side; the primary effect here is on buyers delaying purchases. (C) gets the incentive backwards: expecting a *lower* future price means waiting, not rushing to buy now. (D) is wrong because expectations are a demand shifter that operates immediately; the anticipation itself changes current buying behavior before the actual event happens.",
  },
];
