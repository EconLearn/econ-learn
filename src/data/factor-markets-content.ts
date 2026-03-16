import type { PracticeQuestion } from "@/data/supply-demand-content";

export const factorMarketsContent = {
  title: "Factor Markets",
  subtitle: "How firms decide who to hire, how many, and at what wage",
  sections: [
    {
      heading: "Derived Demand",
      content: `A coal mine employs 400 workers. Natural gas prices drop 30%, utilities switch fuel sources, and coal demand collapses. The mine lays off 250 people. Not because the miners forgot how to dig. Because nobody is buying coal.

That chain -- product demand drives hiring decisions -- is **derived demand**. The demand for any factor of production (labor, capital, land) traces back to demand in the product market.

Consumers want iPhones, Apple contracts with Foxconn, Foxconn hires assembly workers in Shenzhen. If iPhone sales crater, those jobs vanish. The hiring decision was never about the workers themselves. It was about what they produce and whether anyone wants to buy it.

When the labor demand curve shifts, ask one question: what changed in the **product market**? The tech boom raised demand for software engineers not because firms suddenly liked coders, but because consumers were spending billions on apps and cloud services.`,
    },
    {
      heading: "Marginal Revenue Product",
      content: `A firm hires one more worker. Does that worker earn the firm more than the worker costs? That comparison drives every hiring decision.

**Marginal Revenue Product (MRP)** = MR x MPL

For a firm in a competitive output market, MR equals price, so MRP = P x MPL.

Run the numbers. A bakery sells loaves at $4 each. A new baker produces 25 extra loaves per day. MRP = $4 x 25 = $100. The wage is $85. Hire that baker. The firm nets $15. If the wage were $110, the answer flips. Don't hire.

The firm keeps adding workers until MRP = wage.

The **labor demand curve** slopes downward because of diminishing marginal returns. Baker 3 adds 25 loaves, baker 4 adds 18, baker 5 adds 11. Since MPL shrinks, MRP drops with each hire. Plot MRP against the number of workers and you have the firm's demand curve for labor.`,
    },
    {
      heading: "Labor Supply",
      content: `Would you work a warehouse shift for $8/hour? Probably not. At $35/hour? You might rearrange your weekend. Every hour worked is an hour of **leisure** given up. That trade-off sits at the core of labor supply.

The **market labor supply curve** slopes upward. Higher wages pull more people into the workforce. At $12/hour, only the most motivated applicants show up. At $28/hour, the pool grows substantially.

Several forces shift the entire curve. Immigration is a major one. A wave of trained nurses entering the U.S. shifts nursing labor supply rightward at every wage, pushing equilibrium wages down. Changes in worker preferences matter too. The surge of interest in tech careers from roughly 2012-2022 shifted supply rightward for software roles. Competition across occupations also plays a role. When JPMorgan raises starting analyst pay to $110,000, consulting firms lose applicants and their labor supply curve shifts left.`,
    },
    {
      heading: "Wage Determination",
      content: `A software engineer's $155,000 salary comes from the same place any price comes from: where supply meets demand. The **equilibrium wage** sits at the intersection of labor supply and labor demand. At that wage, every firm willing to hire at that rate can, and every worker willing to work at that rate does.

Say AI investment doubles. Firms scramble for ML engineers, MRP jumps, labor demand shifts right. Wages rise. Employment rises. That is roughly the story of Silicon Valley from 2015-2024 compressed into one graph.

Now consider the opposite. A coding bootcamp graduates 10,000 new junior web developers. **Labor supply** shifts right. Wages for entry-level developers drop, but total employment rises as firms snap up cheaper talent.

Same supply-and-demand framework as product markets. The good is labor. The price is the wage.`,
    },
    {
      heading: "Monopsony",
      content: `One employer in town. A rural hospital, the sole hirer of nurses within 50 miles. Those nurses cannot just "go work somewhere else" without uprooting their lives. That employer is a **monopsony**, a single buyer of labor, and it holds power a competitive employer does not.

A competitive firm takes the market wage as given. The monopsonist faces the entire supply curve alone. To attract one more nurse, it must raise the wage -- not just for the new hire, but for every nurse already on staff. The **marginal factor cost (MFC)** of hiring one more worker therefore exceeds the wage shown on the supply curve. The MFC curve sits above the supply curve.

The monopsonist hires where MRP = MFC, then pays the wage read off the supply curve at that quantity. Fewer workers get hired and wages are lower compared to a competitive outcome.

A **minimum wage** set above the monopsony wage but below the competitive wage can actually fix this distortion. It flattens the supply curve up to the mandated wage, collapses MFC down to equal that wage, and closes the gap. The firm hires more workers at a higher wage. One of the rare cases where a price floor increases employment instead of creating a surplus.`,
    },
    {
      heading: "Worked Example",
      content: `A small furniture shop sells chairs at P = $12 each. The daily wage is $72 per worker. Should the shop hire a 5th worker?

Worker 5 has MPL = 8 chairs.

MRP = P x MPL = $12 x 8 = **$96**

$96 in revenue versus $72 in cost. Yes. Hire. The firm nets $24 from that decision.

What about worker 6? MPL drops to 5 chairs. MRP = $12 x 5 = **$60**. The worker brings in $60 but costs $72. That is a $12 loss. Do not hire.

**Optimal employment: 5 workers.** Keep hiring as long as MRP >= wage. Stop the moment the next worker's MRP falls below the wage. Compare two numbers. Done.`,
    },
  ],
};

export const factorMarketsQuestions: PracticeQuestion[] = [
  {
    id: "fm-1",
    question:
      "The demand for labor is called a 'derived demand' because:",
    options: [
      "It is derived from the supply of labor in the market",
      "It is derived from the demand for the product that labor produces",
      "It is derived from the government's minimum wage policy",
      "It is derived from the marginal cost of production",
    ],
    correctIndex: 1,
    explanation:
      "Firms hire workers to make things customers will buy. When product demand drops, hiring drops with it. That is derived demand. Option A confuses two separate schedules; labor demand and labor supply are independent. Option C is off-track; minimum wage is policy, not a source of labor demand. Option D mixes up a supply-side concept with the demand for labor.",
  },
  {
    id: "fm-2",
    question:
      "A competitive firm sells output at $20 per unit. If the marginal product of the 4th worker is 6 units, what is the marginal revenue product of the 4th worker?",
    options: [
      "$24",
      "$80",
      "$120",
      "$26",
    ],
    correctIndex: 2,
    explanation:
      "MRP = P x MPL = $20 x 6 = $120. Straight multiplication. Option A looks like someone added the two numbers. Option B plugs in the wrong MPL or price. Option D is another addition error.",
  },
  {
    id: "fm-3",
    question:
      "A profit-maximizing firm should hire an additional worker when:",
    options: [
      "The worker's MRP is less than the wage",
      "The worker's MRP equals zero",
      "The worker's MRP is greater than or equal to the wage",
      "The total product of labor is maximized",
    ],
    correctIndex: 2,
    explanation:
      "If a worker brings in $90 and costs $70, that is $20 in profit. Hire. Keep going until MRP = wage. Option A has it backward; MRP below the wage means the worker costs more than they generate. Option B would mean the worker produces nothing of value. Option D confuses the goal; maximizing total product ignores costs entirely and is not profit-maximizing.",
  },
  {
    id: "fm-4",
    question:
      "Which of the following would shift the labor supply curve to the right?",
    options: [
      "An increase in the price of the product that labor produces",
      "An increase in immigration of qualified workers",
      "A decrease in the number of firms in the industry",
      "A decrease in the marginal product of labor",
    ],
    correctIndex: 1,
    explanation:
      "More qualified workers entering the country means more people willing to work at every wage. Rightward shift in labor supply. Option A boosts MRP, which shifts labor demand, not supply. Keep the two curves straight: supply is about workers showing up, demand is about firms wanting to hire. Fewer firms shifts labor demand left. Lower MPL hits demand through MRP.",
  },
  {
    id: "fm-5",
    question:
      "In a monopsony labor market, the marginal factor cost (MFC) curve lies above the labor supply curve because:",
    options: [
      "The monopsonist pays different wages to different workers",
      "The monopsonist must raise the wage for all workers to attract one more",
      "The government imposes a tax on each worker hired",
      "Workers in a monopsony are less productive than in a competitive market",
    ],
    correctIndex: 1,
    explanation:
      "Say the monopsonist employs 10 nurses at $30/hour. To attract an 11th, it offers $31/hour to everyone, not just the new hire. The 11th nurse costs $31 in direct wage plus $1 x 10 = $10 in raises for the existing staff. Total MFC: $41. That gap between $41 and $31 is why MFC sits above supply. Option A is wrong because the monopsonist pays a single wage. Option C describes a tax, unrelated to the MFC-supply gap. Option D confuses productivity with hiring cost structure.",
  },
  {
    id: "fm-6",
    question:
      "Compared to a competitive labor market, a monopsony results in:",
    options: [
      "A higher wage and more workers hired",
      "A higher wage and fewer workers hired",
      "A lower wage and fewer workers hired",
      "A lower wage and more workers hired",
    ],
    correctIndex: 2,
    explanation:
      "The monopsonist hires where MRP = MFC, then reads the wage off the supply curve at that lower quantity. Because MFC sits above supply, the profit-maximizing hire count falls below the competitive level. Fewer workers means a lower wage on the supply curve. Both employment and wages fall relative to competition. Options A and B both claim a higher wage, but the entire point of monopsony power is suppressing wages through restricted hiring. Option D gets the wage right but the employment wrong.",
  },
  {
    id: "fm-7",
    question:
      "A minimum wage set above the monopsony wage but below the competitive equilibrium wage will:",
    options: [
      "Decrease employment because it creates a labor surplus",
      "Have no effect because the monopsonist ignores wage laws",
      "Increase both the wage and employment toward competitive levels",
      "Eliminate the monopsonist's profit entirely",
    ],
    correctIndex: 2,
    explanation:
      "This is the monopsony twist. A minimum wage in the right range flattens the supply curve and collapses MFC down to the mandated wage. The gap that let the employer underpay disappears. Hiring becomes profitable at higher quantities, so both wages and employment rise. Option A applies competitive-market logic (price floor creates surplus), but here the minimum wage corrects a distortion rather than creating one. Option B is absurd. Option D overstates the effect; the firm still earns profit, just less monopsony rent.",
  },
  {
    id: "fm-8",
    question:
      "If the demand for a product increases, what happens in the labor market for workers who produce that product?",
    options: [
      "Labor supply shifts right, lowering the wage",
      "Labor demand shifts right, increasing both the wage and employment",
      "Labor demand shifts left, decreasing both the wage and employment",
      "There is no effect because the product market and labor market are independent",
    ],
    correctIndex: 1,
    explanation:
      "Derived demand at work. Product demand rises, so price or quantity sold increases, MRP goes up at every employment level, and labor demand shifts right. Both wages and employment rise. Option A confuses the curves; product demand affects labor demand, not supply. Option C reverses the direction. Option D ignores derived demand entirely, since MRP = P x MPL directly ties product markets to labor markets.",
  },
  {
    id: "fm-9",
    question:
      "A competitive firm sells its product for $15. The marginal product of labor for the 3rd, 4th, and 5th workers are 10, 7, and 3 units respectively. If the wage is $90 per worker, how many workers should the firm hire?",
    options: [
      "3 workers",
      "4 workers",
      "5 workers",
      "2 workers",
    ],
    correctIndex: 1,
    explanation:
      "Worker 3: MRP = $15 x 10 = $150. Exceeds $90. Hire. Worker 4: MRP = $15 x 7 = $105. Exceeds $90. Hire. Worker 5: MRP = $15 x 3 = $45. Below $90. Do not hire. The firm hires 4 workers. Option A stops too early and leaves $15 in profit on the table from worker 4. Option C goes too far; worker 5 loses $45. Option D quits far too early.",
  },
  {
    id: "fm-10",
    question:
      "The concept of 'derived demand' implies that if consumer preferences shift away from coal toward natural gas, the labor market for coal miners will experience:",
    options: [
      "An increase in labor demand as miners are needed to close the mines",
      "A rightward shift in labor supply as miners accept lower wages",
      "A leftward shift in labor demand as MRP of coal miners falls",
      "No change because wages are set by union contracts, not product demand",
    ],
    correctIndex: 2,
    explanation:
      "Coal demand falls, coal prices fall, coal firms' revenue drops, and MRP of coal miners declines at every employment level. Labor demand shifts left. Wages and employment both fall. Option A confuses the direction. Option B describes a supply change, but the shock originates in the product market and hits demand. Option D is wrong; even unionized wages depend on employer willingness to pay, which is driven by MRP.",
  },
  {
    id: "fm-11",
    question:
      "In a competitive labor market, the equilibrium wage is $25 per hour and 1,000 workers are employed. A new technology increases each worker's marginal product of labor. The new equilibrium will most likely feature:",
    options: [
      "A lower wage and fewer workers employed",
      "A higher wage and more workers employed",
      "The same wage but more workers employed",
      "A higher wage but fewer workers employed",
    ],
    correctIndex: 1,
    explanation:
      "Higher MPL means higher MRP at every level of employment. Labor demand shifts right. With an upward-sloping supply curve, the new equilibrium has both a higher wage and more workers. Option A reverses the effect. Option C would only hold if labor supply were perfectly elastic (horizontal). Option D could only happen with a simultaneous leftward supply shift, which the question does not describe.",
  },
  {
    id: "fm-12",
    question:
      "A monopsonist employer currently hires 50 workers at $20/hour. To attract a 51st worker, it must raise the wage to $20.50/hour for all workers. The marginal factor cost of the 51st worker is:",
    options: [
      "$20.50",
      "$45.50",
      "$25.50",
      "$20.00",
    ],
    correctIndex: 1,
    explanation:
      "MFC = new worker's wage + the raise applied to all existing workers. The 51st worker earns $20.50. The $0.50 raise hits all 50 existing workers: 50 x $0.50 = $25. Total MFC = $20.50 + $25.00 = $45.50. Option A only counts the new worker's wage and ignores the raise for existing staff. This is the most frequent error on monopsony questions. Option C appears to add $5 instead of $25. Option D uses the old wage.",
  },
  {
    id: "fm-13",
    question:
      "A firm operates in a perfectly competitive product market where P = $10. The following table shows total output at each employment level:\n\nWorkers: 1→12 units, 2→22 units, 3→30 units, 4→36 units, 5→40 units.\n\nThe MRP of the 4th worker is:",
    options: [
      "$60",
      "$36",
      "$100",
      "$360",
    ],
    correctIndex: 0,
    explanation:
      "MPL of worker 4 = 36 - 30 = 6 units. MRP = $10 x 6 = $60. Option B confuses total output (36) with marginal product. Option C uses worker 2's MPL (10 units x $10). Option D multiplies total output by price, giving total revenue at 4 workers instead of the marginal contribution of the 4th.",
  },
  {
    id: "fm-14",
    question:
      "If the government imposes a binding minimum wage above the competitive equilibrium in a perfectly competitive labor market, the result will be:",
    options: [
      "An increase in both wages and employment",
      "A surplus of labor (unemployment) because quantity supplied of labor exceeds quantity demanded",
      "A shortage of labor because firms want to hire more workers at the higher wage",
      "No effect because firms will simply pass the cost to consumers",
    ],
    correctIndex: 1,
    explanation:
      "A binding minimum wage above equilibrium is a price floor. Firms demand fewer workers (move up along demand), while more workers want jobs at the higher wage (move up along supply). The gap creates a labor surplus: unemployment. Option A describes the monopsony result, not the competitive one. Option C confuses surplus with shortage. Option D oversimplifies; the immediate labor market effect is still a surplus.",
  },
  {
    id: "fm-15",
    question:
      "Investment in human capital, such as a college degree, is expected to increase a worker's wage because it:",
    options: [
      "Shifts the labor supply curve to the left by reducing the number of qualified workers",
      "Increases the worker's marginal product of labor, thereby raising their MRP",
      "Forces employers to pay more due to government credentialing requirements",
      "Reduces the demand for unskilled labor, raising all wages through spillover effects",
    ],
    correctIndex: 1,
    explanation:
      "Education and training make workers more productive. Higher MPL means higher MRP (since MRP = P x MPL), making each worker more valuable and justifying a higher wage. Option A has a plausible mechanism but the primary economic rationale is productivity, not supply restriction. Option C attributes the wage premium to legal mandates rather than the actual productivity gains. Option D describes an indirect effect on a different market and does not explain why the educated worker specifically earns more.",
  },
];
