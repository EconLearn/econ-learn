import type { PracticeQuestion } from "@/data/supply-demand-content";

export const factorMarketsContent = {
  title: "Factor Markets",
  subtitle: "How firms decide who to hire, how many, and at what wage",
  sections: [
    {
      heading: "Derived Demand",
      content: `A coal mine in West Virginia employs 400 workers. Then natural gas prices drop 30% over eighteen months, utilities start switching fuel sources, and coal demand collapses. The mine lays off 250 people. Those miners didn't suddenly become worse at digging -- the problem was that nobody wanted to buy what they were digging up.

That chain is **derived demand**. The demand for any factor of production (labor, capital, land) exists only because there's demand for whatever that factor helps produce.

Consumers want iPhones, so Apple contracts with Foxconn, and Foxconn hires assembly workers in Shenzhen. If iPhone sales crater, those assembly jobs disappear. The hiring was never really about the workers themselves -- it was about the product they build and whether customers will pay for it. When you see the labor demand curve shift, your first question should be: what changed in the **product market**? The tech boom raised demand for software engineers not because HR departments developed a sudden appreciation for people who write code, but because consumers were pouring billions into apps, cloud storage, and streaming services.`,
    },
    {
      heading: "Marginal Revenue Product",
      content: `Every hiring decision boils down to one comparison: does the next worker bring in more revenue than they cost?

**Marginal Revenue Product (MRP)** = MR x MPL

For a competitive firm, MR equals the market price, so MRP = P x MPL. A bakery sells loaves at $4. A new baker produces 25 extra loaves per day. MRP = $4 x 25 = $100. If the going wage is $85, hire that baker -- the firm nets $15. At a wage of $110, don't. The math doesn't work.

The firm keeps adding workers until MRP = wage. That's the profit-maximizing rule.

The **labor demand curve** slopes downward because of diminishing marginal returns. Baker 3 adds 25 loaves, baker 4 adds 18, baker 5 adds 11. Since MPL shrinks with each additional hire, MRP drops too. If you plot MRP against the number of workers, that downward-sloping line is the firm's demand curve for labor. On AP free-response questions they sometimes give you a table of output data and ask you to derive the demand curve -- it's just MRP at each employment level.`,
    },
    {
      heading: "Labor Supply",
      content: `Would you work a warehouse shift for $8/hour? Most people wouldn't bother. At $35/hour you might rearrange your Saturday plans. Every hour worked is an hour of **leisure** sacrificed, and that trade-off sits at the center of labor supply.

The **market labor supply curve** slopes upward -- higher wages pull more people into the workforce and convince existing workers to put in more hours. At $12/hour only the most eager applicants show up; at $28/hour the applicant pool grows considerably.

What shifts the whole curve? Immigration is a big one. A wave of trained nurses entering the U.S. from the Philippines shifts the nursing labor supply curve rightward at every wage level, which puts downward pressure on equilibrium nursing wages. Changes in career preferences matter too -- the surge of interest in tech careers from roughly 2012 to 2022 shifted supply rightward for software roles, which is part of why entry-level developer salaries didn't rise as fast as senior engineer salaries during that period. Competition between occupations also shifts things around. When JPMorgan raised starting analyst pay to $110,000 in 2021, consulting firms like McKinsey and BCG saw their applicant pools thin out -- their labor supply curves shifted left.`,
    },
    {
      heading: "Wage Determination",
      content: `A software engineer's $155,000 salary comes from the same place any price comes from: supply meeting demand. The **equilibrium wage** sits at the intersection of labor supply and labor demand. At that wage, every firm willing to hire at that rate finds workers, and every worker willing to accept that rate finds a job.

When AI investment ramped up, firms scrambled for ML engineers, MRP jumped, and labor demand shifted right. Wages went up. Employment went up. That's roughly the story of Silicon Valley from 2015 through 2024, compressed into one supply-and-demand graph.

The reverse works the same way. A coding bootcamp graduating 10,000 new junior web developers pushes **labor supply** right. Entry-level developer wages fall, but total employment rises as firms scoop up the cheaper talent for projects that weren't worth staffing at the old wage.

Same framework as product markets, just with different labels. The good being traded is labor. The price is the wage.`,
    },
    {
      heading: "Monopsony",
      content: `One employer in town -- a rural hospital that's the only place hiring nurses within 50 miles. Those nurses can't just "go work somewhere else" without uprooting their families, selling their houses, pulling kids out of school. That employer is a **monopsony** (single buyer of labor), and it has leverage that a competitive employer doesn't have.

A competitive firm takes the market wage as given and hires as many workers as it wants at that rate. The monopsonist faces the entire upward-sloping supply curve alone. To attract one more nurse, it has to raise the wage -- and not just for the new hire, but for every nurse already on payroll. That's why the **marginal factor cost (MFC)** of hiring one more worker exceeds the wage on the supply curve. The MFC curve sits above the supply curve, and the gap between them represents those extra costs of raising everyone's pay.

The monopsonist hires where MRP = MFC, then pays the wage read off the supply curve at that quantity. Result: fewer workers hired and lower wages compared to a competitive market.

A well-placed **minimum wage** -- set above the monopsony wage but below where the competitive equilibrium would be -- can actually fix this. It flattens the supply curve up to the mandated wage, which collapses MFC down to equal that wage, and the gap disappears. The firm ends up hiring more workers at a higher wage. This is one of the rare cases where a price floor can increase both employment and wages rather than creating a surplus, and the AP exam tests it specifically because students expect minimum wages to always cause unemployment.`,
    },
    {
      heading: "Worked Example",
      content: `A small furniture shop sells chairs in a competitive market at P = $12 each. The daily wage is $72 per worker. Should the shop hire a 5th worker?

Worker 5 has MPL = 8 chairs per day.

MRP = P x MPL = $12 x 8 = **$96**

That's $96 in revenue against $72 in wage cost. Yes -- hire. The firm nets $24 from adding that worker.

Worker 6? MPL drops to 5 chairs. MRP = $12 x 5 = **$60**. The worker generates $60 but costs $72. That's a $12 loss on net. Don't hire.

**Optimal employment: 5 workers.** The rule is straightforward -- keep hiring as long as MRP >= wage, stop the moment the next worker's MRP drops below the wage. Two numbers, one comparison.`,
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
      "Firms hire workers because customers want to buy what those workers make. When product demand drops, hiring drops right along with it -- that's the derivation. Option A confuses two independent schedules; labor demand and labor supply are determined by totally different factors. Option C is off base since minimum wage is a policy tool, not a source of demand for workers. Option D mixes a supply-side cost concept into what is fundamentally a demand-side question.",
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
      "MRP = P x MPL = $20 x 6 = $120. Straight multiplication. Option A looks like an addition error ($20 + something). Option B plugs in the wrong MPL or wrong price somewhere. Option D seems to come from adding the numbers rather than multiplying them.",
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
      "If a worker brings in $90 in revenue and costs $70, that's $20 in additional profit. Keep hiring until MRP = wage. Option A has it backward -- MRP below the wage means the worker costs more than they generate, which loses money. Option B would mean the worker produces nothing of value, so there's no reason to hire them. Option D confuses the goal; maximizing total product ignores costs entirely and is not the same thing as maximizing profit.",
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
      "More qualified workers entering the country means more people willing to work at every wage level -- rightward shift of labor supply. Option A would boost MRP, which shifts labor demand, not supply. Keep the two curves straight: supply is about how many people show up wanting to work, demand is about how many workers firms want to hire. Fewer firms reduces demand for labor. Lower MPL hits demand through the MRP calculation.",
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
      "If the monopsonist has 10 nurses at $30/hour and needs an 11th, it has to offer $31/hour -- to everyone, not just the new hire. The 11th nurse costs $31 in direct wages plus $1 x 10 = $10 in raises for existing staff. Total MFC = $41, which is well above the $31 supply curve wage. That gap is the whole reason MFC sits above supply. Option A is wrong because the monopsonist pays a single wage to all workers. Option C describes a tax, which is unrelated to the structural MFC-supply gap. Option D confuses productivity with hiring cost mechanics.",
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
      "The monopsonist hires where MRP = MFC, then reads the actual wage paid off the supply curve at that lower employment quantity. Because MFC sits above supply, the profit-maximizing hire count falls below competitive levels. Fewer workers on the supply curve means a lower wage. Both employment and wages are suppressed relative to competition -- that's the whole distortion. Options A and B both claim higher wages, but monopsony power is specifically about the ability to suppress wages through restricted hiring. Option D gets the wage direction right but the employment direction wrong.",
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
      "This is the counterintuitive monopsony result that trips students up. A minimum wage in the right range flattens the supply curve and pulls MFC down to the mandated wage. The gap that allowed the employer to underpay vanishes. Hiring becomes profitable at higher quantities, so both wages and employment rise toward where they'd be in a competitive market. Option A applies the standard competitive-market logic (price floor creates surplus), but that doesn't apply here because the minimum wage is correcting an existing distortion rather than creating a new one. Option B is absurd. Option D overstates things -- the firm still earns profit, just with less monopsony rent.",
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
      "Derived demand in action. Product demand rises, which means price or quantity sold goes up, MRP increases at every employment level, and labor demand shifts right. Wages and employment both rise. Option A confuses which curve is affected -- product demand changes hit labor demand, not supply. Option C has the direction backward. Option D flatly contradicts derived demand, since MRP = P x MPL directly links product markets to labor markets.",
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
      "Worker 3: MRP = $15 x 10 = $150, which exceeds the $90 wage. Hire. Worker 4: MRP = $15 x 7 = $105, still above $90. Hire. Worker 5: MRP = $15 x 3 = $45, well below $90. Do not hire -- the firm would lose $45 on that worker. So hire 4 workers. Option A stops too early and leaves $15 in profit on the table from worker 4. Option C goes one worker too far and loses $45. Option D quits way too early.",
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
      "Coal demand falls, coal prices fall, revenue for coal companies drops, and MRP of coal miners declines at every employment level. Labor demand shifts left, and both wages and employment fall. Option A confuses the direction entirely. Option B describes a supply change, but the shock originates in the product market and therefore hits the demand side. Option D is wrong because even unionized wages ultimately depend on the employer's willingness and ability to pay, which is driven by MRP.",
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
      "Higher MPL means higher MRP at every employment level, which shifts labor demand right. With an upward-sloping supply curve, the new equilibrium has a higher wage and more workers employed. Option A reverses the effect completely. Option C would only be possible if labor supply were perfectly elastic -- a horizontal line -- which is not the standard assumption. Option D could only happen with a simultaneous leftward shift of supply, and the question doesn't describe anything that would cause that.",
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
      "MFC = new worker's wage + the raise applied to all existing workers. The 51st worker earns $20.50. The $0.50 raise hits all 50 existing workers: 50 x $0.50 = $25.00. Total MFC = $20.50 + $25.00 = $45.50. Option A only counts the new worker's wage and ignores the raise for existing staff -- this is by far the most common mistake on monopsony MFC calculations. Option C seems to add $5 instead of $25 somewhere. Option D uses the old wage before the raise.",
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
      "MPL of worker 4 = 36 - 30 = 6 additional units. MRP = $10 x 6 = $60. Option B confuses total output at 4 workers (36 units) with the marginal product -- a common table-reading mistake. Option C uses worker 2's MPL (10 units x $10 = $100). Option D multiplies total output by price ($36 x $10 = $360), which gives total revenue at 4 workers, not the marginal contribution of the 4th worker.",
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
      "A binding minimum wage above equilibrium works like any price floor -- it creates a surplus. Firms demand fewer workers at the higher wage (moving up along demand), while more people want jobs at that higher wage (moving up along supply). The gap between quantity supplied and quantity demanded is unemployment. Option A describes what happens in a monopsony, not in a competitive market. Option C has surplus and shortage mixed up. Option D oversimplifies the mechanics; even if some costs get passed through, the immediate labor market effect is still a surplus of workers.",
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
      "Education and training make a worker more productive at their job. Higher MPL feeds directly into higher MRP (since MRP = P x MPL), which makes the worker more valuable to employers and justifies a higher wage. Option A has a plausible-sounding mechanism -- fewer qualified workers could push wages up through supply restriction -- but the primary economic explanation is the productivity channel, not artificial scarcity. Option C attributes the wage premium to legal requirements rather than actual productivity gains. Option D describes an indirect effect on an entirely different labor market segment and doesn't explain why this specific worker earns more.",
  },
];
