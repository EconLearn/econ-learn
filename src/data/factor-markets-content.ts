import type { PracticeQuestion } from "@/data/supply-demand-content";

export const factorMarketsContent = {
  title: "Factor Markets",
  subtitle: "How wages are determined by the interaction of labor demand, labor supply, and market structure",
  sections: [
    {
      heading: "Derived Demand",
      content: `A coal mine shuts down and lays off hundreds of workers. Not because the workers forgot how to mine. Because nobody is buying coal anymore. The demand for any factor of production (labor, capital, land) traces back to the product market. Economists call this **derived demand**.

The chain is straightforward: consumers want iPhones, Apple needs assembly workers, Foxconn hires in Shenzhen. If iPhone sales crater, those assembly jobs vanish. The hiring decision was never about the workers themselves. It was about what those workers produce and whether anyone wants to buy it.

When you see the labor demand curve shift, the question to ask is: what changed in the **product market**? A tech boom raises demand for software engineers not because firms suddenly love coders, but because consumers are spending billions on apps and cloud services. Every movement in factor demand has a product-market story behind it.`,
    },
    {
      heading: "Marginal Revenue Product",
      content: `A firm decides whether to hire one more worker by comparing what that worker brings in against what they cost. The revenue side of that comparison is **Marginal Revenue Product (MRP)**:

MRP = MR x MPL

MR is marginal revenue. **MPL** is the marginal product of labor. For a firm in a competitive output market, MR equals the product price P, so MRP = P x MPL.

A bakery sells loaves at $5 each. A new baker produces 20 extra loaves per day, giving an MRP of $100. If the wage is $80, that hire is profitable. If the wage is $110, it is not. The firm keeps hiring until MRP = wage, then stops.

The **labor demand curve** slopes downward because each additional worker runs into diminishing marginal returns. The 3rd baker adds 20 loaves, the 4th adds 14, the 5th adds 9. MRP = P x MPL, and since MPL shrinks, MRP drops with each hire. Plot MRP against the number of workers and you have the firm's demand curve for labor.`,
    },
    {
      heading: "Labor Supply",
      content: `Would you drive for Uber at $5/hour? Probably not. At $50/hour? You might cancel your evening plans. The trade-off between **leisure** and income is the core of labor supply. Every hour worked is an hour not spent sleeping, surfing, or watching TV.

The **market labor supply curve** slopes upward for a straightforward reason: higher wages pull more people into the workforce. At $10/hour, maybe only the most desperate workers show up at an Amazon warehouse. At $25/hour, the applicant pool explodes.

What shifts the whole curve? Immigration is a major factor. A wave of qualified nurses entering the country shifts nursing labor supply right at every wage, pushing wages down. Worker preferences matter too. The explosion of interest in tech careers over the past decade shifted supply rightward for software jobs. Competition across occupations is constant as well. When Goldman Sachs raises analyst salaries, consulting firms lose applicants, and their labor supply curve shifts left.`,
    },
    {
      heading: "Wage Determination",
      content: `A software engineer's $150K salary comes from the same place any price comes from: where supply meets demand. The **equilibrium wage** sits at the intersection of labor supply and labor demand. At that wage, every firm that wants to hire at that rate can, and every worker willing to work at that rate does.

Say AI spending doubles. Firms scramble for ML engineers, MRP jumps, labor demand shifts right. Result: higher wages and more engineers employed. That is basically the story of Silicon Valley from 2015-2024 in one graph.

Now consider the other direction. A coding bootcamp graduates 10,000 new web developers into the market. **Labor supply** shifts right. Wages for junior developers drop, but total employment rises as firms snap up cheaper talent. The market clears at a new, lower wage with more workers.

Same supply-and-demand logic as product markets. The "good" is labor, the "price" is the wage.`,
    },
    {
      heading: "Monopsony",
      content: `One employer in town. A rural hospital, the sole hirer of nurses within 50 miles. Those nurses cannot just "go work somewhere else" without uprooting their lives. That employer is a **monopsony**, a single buyer of labor, and it has power a competitive employer does not.

A competitive firm takes the market wage as given. The monopsonist faces the entire supply curve alone. Want one more nurse? You must raise the wage, but not just for the new hire. You raise it for every nurse already on staff. So the **marginal factor cost (MFC)** of hiring one more worker exceeds the wage on the supply curve. The MFC curve sits above the supply curve.

The monopsonist hires where MRP = MFC, then pays the wage from the supply curve at that quantity. Fewer workers get hired and wages are lower compared to a competitive market. The employer pockets the difference.

A **minimum wage** can actually fix this, which surprises most students. Set it above the monopsony wage but below the competitive wage, and you flatten the supply curve up to that mandated wage. MFC collapses down to equal the minimum wage, and the gap disappears. The firm hires more workers at a higher wage. One of the rare cases where a price floor increases employment instead of creating a surplus.`,
    },
    {
      heading: "Worked Example",
      content: `A small furniture shop sells chairs at P = $10 per unit. The wage is $60 per worker. Should they hire a 5th worker?

The 5th worker has MPL = 8 chairs.

MRP = P x MPL = $10 x 8 = **$80**

$80 in revenue vs. $60 in cost. Yes, hire them. The firm nets $20 from that decision.

What about a 6th worker? MPL drops to 5 chairs as diminishing returns kick in. MRP = $10 x 5 = **$50**. The worker brings in $50 but costs $60. That is a $10 loss. Do not hire.

**Optimal employment: 5 workers.** The rule is mechanical: keep hiring as long as MRP >= wage. Stop the moment the next worker's MRP falls below the wage. Compare the two numbers, that is all there is to it.`,
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
      "Nobody hires workers just to have workers around — firms hire because those workers make something customers will buy. When consumer demand for the product drops, hiring drops with it. That is derived demand. Option A confuses two separate curves: labor demand and labor supply are independent schedules that intersect to determine the wage. One is not derived from the other. Option C is off-track — minimum wage is a government policy, not the source of labor demand. Option D mixes up marginal cost of production (a supply-side concept) with the demand for labor.",
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
      "MRP = P x MPL = $20 x 6 = $120. Straight multiplication. Option A ($24) looks like someone added the two numbers or confused the formula. Option B ($80) could come from plugging in the wrong MPL or price — a common arithmetic slip. Option D ($26) is another addition error. The only inputs you need: the market price of output ($20) and how many extra units that specific worker produces (6).",
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
      "If a worker brings in $90 (MRP) and costs $70 (wage), that is $20 in profit — hire them. Keep going until MRP = wage, then stop. Option A has the logic backwards: MRP below the wage means the worker costs more than they generate, so you should fire them, not hire them. Option B (MRP = zero) would mean the worker produces nothing — no firm would pay a wage for zero output. Option D confuses the goal: maximizing total product means piling on workers regardless of cost, which is not profit-maximizing.",
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
      "More qualified workers entering the country means more people willing to work at every wage level — that is a rightward shift in labor supply. Option A is the classic trap: a higher product price boosts MRP, which shifts labor demand, not labor supply. Keep the two curves straight — supply is about workers showing up, demand is about firms wanting to hire. Option C (fewer firms) would shift labor demand left, not supply right. Option D (lower MPL) also hits the demand side through MRP.",
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
      "Say the monopsonist employs 10 nurses at $30/hour. To attract an 11th, it must offer $31/hour — but that $31 goes to all 11 nurses, not just the new one. The 11th nurse costs $31 in direct wage plus $1 x 10 = $10 in raises for existing staff, totaling $41 in marginal factor cost versus a $31 wage. That gap is why MFC sits above the supply curve. Option A is wrong — the monopsonist pays everyone the same wage; the problem is that one more hire ratchets the common wage up. Option C (a tax) would shift costs but is unrelated to the MFC-supply gap. Option D confuses productivity with the cost structure of hiring.",
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
      "The monopsonist hires where MRP = MFC, then reads the wage off the supply curve at that lower quantity. Because MFC sits above supply, the profit-maximizing hire count is below the competitive level. Fewer workers on the supply curve means a lower wage. Both employment and wages fall relative to competition. Option A and B both claim a higher wage — but the whole point of monopsony power is that the employer restricts hiring to keep wages down. Option D gets the wage direction right but the employment direction wrong; fewer hires, not more, is how the monopsonist suppresses wages.",
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
      "This is the monopsony twist that contradicts the standard textbook story. A minimum wage in the right range flattens the supply curve, which collapses MFC down to equal the minimum wage. The gap that let the monopsonist underpay disappears, so hiring becomes profitable at higher quantities. Both wages and employment rise toward competitive levels. Option A uses competitive-market logic (price floor = surplus), but that reasoning fails here — the minimum wage is correcting a market distortion, not creating one. Option B is absurd; employers do not ignore wage laws. Option D overstates the effect — the firm still earns profit, just less monopsony rent.",
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
      "Derived demand in action: product demand rises, so the product price (or quantity sold) increases, MRP goes up at every employment level, and labor demand shifts right. Both wages and employment rise. Option A confuses the curves — product demand changes hit labor demand, not labor supply. Option C has the direction backwards; higher product demand raises MRP, shifting demand right, not left. Option D claims the two markets are independent, which ignores the entire mechanism of derived demand — MRP = P x MPL directly ties the product market to the labor market.",
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
      "Calculate MRP for each worker: 3rd worker MRP = $15 × 10 = $150 (exceeds $90 wage, hire). 4th worker MRP = $15 × 7 = $105 (exceeds $90 wage, hire). 5th worker MRP = $15 × 3 = $45 (below $90 wage, do not hire). The firm hires until MRP falls below the wage, so it hires 4 workers. Option A stops too early — the 4th worker still generates $105 versus a $90 cost, adding $15 in profit. Option C goes too far — the 5th worker costs $90 but only brings in $45, a $45 loss. Option D stops far too early, leaving profitable hires on the table.",
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
      "Derived demand means labor demand depends on the demand for the product labor produces. If consumers shift away from coal, coal prices fall, coal firms' revenue drops, and the MRP of coal miners declines at every employment level. Labor demand shifts left, reducing both wages and employment in coal mining. Option A confuses the direction — reduced product demand decreases labor demand, it does not increase it. Option B describes a labor supply change, but the shock originates in the product market and hits labor demand. Option D is incorrect because even unionized wages ultimately depend on employer willingness to pay, which is driven by MRP.",
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
      "Higher MPL means higher MRP at every level of employment (MRP = P × MPL). This shifts labor demand to the right. With an upward-sloping labor supply curve, the new equilibrium has both a higher wage and greater employment. Option A reverses the effect — more productive workers are more valuable, which increases demand, not decreases it. Option C would only be true if labor supply were perfectly elastic (horizontal), which is not the typical case. Option D could only occur with a simultaneous leftward shift in labor supply, which the question does not describe.",
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
      "MFC includes the new worker's wage plus the additional cost of raising wages for all existing workers. The 51st worker earns $20.50, and the $0.50 raise applies to all 50 existing workers: 50 × $0.50 = $25. Total MFC = $20.50 + $25.00 = $45.50. Option A only counts the new worker's wage and ignores the wage increase for all existing employees — this is the most common error on monopsony problems. Option C appears to add $5 instead of $25 for the existing workers. Option D uses the old wage, which is irrelevant once the firm decides to hire an additional worker.",
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
      "MPL of the 4th worker = Total output with 4 workers minus total output with 3 workers = 36 − 30 = 6 units. MRP = P × MPL = $10 × 6 = $60. Option B ($36) confuses total output with marginal product — 36 is the total output at 4 workers, not the additional output of the 4th worker. Option C ($100) likely uses the MPL of the 2nd worker (10 units × $10) instead of the 4th. Option D ($360) multiplies total output (36) by the price, which gives total revenue at 4 workers, not the marginal revenue product of the 4th worker.",
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
      "A binding minimum wage above equilibrium acts as a price floor. At the higher wage, firms demand fewer workers (moving up along the labor demand curve) while more workers want to work (moving up along the labor supply curve). The gap between quantity supplied and quantity demanded creates a labor surplus — unemployment. Option A is the monopsony result, not the competitive market result. In a competitive market, a price floor always creates a surplus. Option C confuses surplus with shortage — a shortage would occur if the wage were set below equilibrium. Option D oversimplifies — while some cost may be passed forward, the immediate labor market effect is still a surplus of workers.",
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
      "Human capital investments (education, training, certifications) make workers more productive — they produce more output per hour. Higher MPL translates directly into higher MRP (MRP = P × MPL), making each worker more valuable to the firm and justifying a higher wage. Option A has a plausible mechanism (restricting supply raises price), but the primary economic rationale for education's wage premium is productivity, not supply restriction. Option C confuses correlation with causation — credentialing requirements may exist, but the economic argument centers on productivity gains, not legal mandates. Option D describes an indirect effect on a different labor market and does not explain why the educated worker specifically earns more.",
  },
];
