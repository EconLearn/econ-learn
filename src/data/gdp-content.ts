import type { PracticeQuestion } from "@/data/supply-demand-content";

export const gdpContent = {
  title: "GDP",
  subtitle:
    "From Simon Kuznets' 1934 report to Congress to the $27.4 trillion U.S. economy of 2024. How the world learned to measure national output, and what the number still misses",
  sections: [
    {
      heading: "What GDP Actually Measures (and What It Misses)",
      content: `Before 1934, nobody had a reliable way to measure an entire country's economic output. The Great Depression was tearing through the United States and policymakers were basically guessing about how bad things were. Congress hired an economist named Simon Kuznets to build a system of national income accounts, and by 1937 the framework we now call **Gross Domestic Product** was starting to take shape.

**GDP** is the total market value of all *final* goods and services produced *within a country's borders* during a specific time period, usually a year or a quarter. Every loaf of bread from a bakery, every haircut, every Toyota Camry rolling off the assembly line in Georgetown, Kentucky, every hour of legal advice, it all counts. U.S. GDP hit roughly $27.4 trillion in 2023.

The word "final" does a lot of work in that definition. Tires that Goodyear sells to Ford are an *intermediate good*, meaning their value is already baked into the price of the finished car. If you counted both the tires and the car, you'd be **double counting**, and GDP would look bigger than actual output. Only the finished product reaching the end buyer gets tallied.

"Domestic" matters just as much. A Honda factory in Marysville, Ohio (Japanese-owned) counts toward *U.S.* GDP because the production happens on American soil. An Apple supplier factory in Shenzhen counts toward *Chinese* GDP. It's about where the output is produced, not who owns the company. The United Nations System of National Accounts formalized this boundary rule in 1953, and it's been the international standard ever since.`,
    },
    {
      heading: "The Expenditure Approach: C + I + G + NX",
      content: `The most common way to measure GDP is to add up all spending on final goods and services. The **expenditure approach** sorts that spending into four buckets, and this framework became standard in U.S. national accounting by the late 1940s.

**Consumption (C)** is the big one, making up roughly 68-70% of U.S. GDP in recent years. Groceries, rent, your Netflix subscription, a trip to the dentist. Basically anything households buy.

**Investment (I)** means business spending on capital goods (factories, machines, software), new residential construction, and changes in business inventories. This trips people up on exams constantly: "investment" in GDP accounting has nothing to do with buying shares of Apple stock. It means real productive assets. When Intel broke ground on a $20 billion chip fabrication plant in Ohio in 2022, that was investment. When your uncle bought 100 shares of Intel, that's not investment in the GDP sense.

**Government purchases (G)** covers federal, state, and local spending on actual goods and services: paying teachers, buying military equipment, building highways. Transfer payments like Social Security are excluded because the government isn't getting a new good or service in return for those checks.

**Net exports (NX)** equals exports minus imports (X − M). Boeing selling a 787 Dreamliner to a Japanese airline adds to U.S. GDP. An American buying a Samsung TV subtracts. The U.S. has run a trade deficit in almost every year since 1976, so NX is typically a negative number.

**GDP = C + I + G + NX**

This is an accounting identity, not a theory or a prediction. Every dollar of final output gets bought by somebody, and that buyer falls into one of these four categories.`,
    },
    {
      heading: "Nominal vs Real GDP and the GDP Deflator",
      content: `GDP goes from $20 trillion to $21 trillion. Great news? Maybe. Or maybe prices just went up 5% and the economy barely grew at all. Separating real growth from price increases was a problem from the start of national income accounting. The nominal-vs.-real distinction is how economists solved it.

**Nominal GDP** uses current-year prices. If both the quantity of stuff produced and the prices of that stuff go up, nominal GDP rises, but you can't tell which effect is doing the heavy lifting.

**Real GDP** uses constant base-year prices, which strips out inflation so you can see whether the economy actually produced more. Real GDP is the number that matters for growth calculations and for determining whether the economy is in a recession. When the NBER called the 2008 recession, they were tracking real GDP.

The **GDP deflator** connects the two:

GDP Deflator = (Nominal GDP / Real GDP) x 100

It's different from the Consumer Price Index (which the BLS has been publishing since 1913 and which tracks a fixed basket of consumer goods). The deflator covers the price level of *everything* produced domestically: consumer goods, business equipment, government purchases, all of it. A deflator that moves from 100 to 105 means the domestic price level rose 5%.

The 2021-2022 recovery from COVID made this distinction painfully obvious. Nominal U.S. GDP surged, but a big chunk of that was just prices climbing. Annual inflation topped 9% in June 2022. Real GDP growth was much weaker than the headline numbers suggested.`,
    },
    {
      heading: "Worked Example: Calculating Real GDP",
      content: `An economy produces only two goods: tacos and textbooks.

**Base Year:**
Tacos: 100 units at $2 each = $200
Textbooks: 20 units at $50 each = $1,000
**Nominal GDP (base year) = $1,200**

**Current Year:**
Tacos: 120 units at $3 each = $360
Textbooks: 25 units at $60 each = $1,500
**Nominal GDP (current year) = $1,860**

That's a 55% nominal increase. Sounds impressive, but how much is real growth versus prices going up?

**Calculate Real GDP** by applying base-year prices to current-year quantities:
Tacos: 120 x $2 = $240
Textbooks: 25 x $50 = $1,250
**Real GDP (current year) = $1,490**

**GDP Deflator** = ($1,860 / $1,490) x 100 = **124.8**

So real output went from $1,200 to $1,490, which is a **24.2% increase**. The deflator tells us prices rose about **24.8%**. The 55% nominal gain splits roughly in half between actual growth and inflation. Without doing the real GDP calculation, you'd overstate how much the economy actually grew by more than double. Kuznets warned Congress about exactly this kind of thing back in the 1930s, because raw dollar figures without price adjustments are misleading.`,
    },
    {
      heading: "Limitations of GDP",
      content: `GDP became the go-to economic statistic after WWII, when the Bretton Woods institutions adopted it as the standard measure of national economic performance. Kuznets himself said it had blind spots. He was right, and the blind spots haven't gone away.

**Unpaid work doesn't show up.** A parent raising kids at home is doing real economic work, but GDP counts none of it. If that same parent hires a nanny and goes back to a paid job, GDP goes up, even though the total amount of productive work happening may not have changed at all. Volunteering, caregiving, household chores are all invisible to GDP. Some economists have estimated that unpaid household labor in the U.S. would add trillions to GDP if it were measured.

**The underground economy is missing.** Off-the-books labor, unreported income, and illegal transactions don't get counted. In some developing countries the informal economy might be 30-40% of real economic activity, which means GDP seriously understates what's actually going on.

**GDP says nothing about who gets what.** A country with $10 trillion GDP could have most of that income concentrated in a handful of families while the median person struggles to get by. **GDP per capita** is just an average, so averages can hide enormous disparities. The Gini coefficient exists to measure inequality, but it rarely gets the same attention GDP does.

**Destruction can raise GDP.** The Deepwater Horizon oil spill in 2010 generated billions of dollars in cleanup spending (crews, equipment, lawyers), and all of it counted as GDP. The ecological devastation in the Gulf of Mexico? Never subtracted. Logging a rainforest adds to GDP when you sell the timber. The lost ecosystem doesn't register as a cost anywhere in the national accounts.

**Quality of life is unmeasured.** Leisure time, mental health, how safe people feel walking around at night, political freedom, life satisfaction. GDP ignores all of it. The U.S. has the largest GDP on earth but falls behind a number of smaller countries on life expectancy and self-reported happiness.

GDP is still probably the best single number we have for measuring market production. But it measures *output*, not *well-being*, and Kuznets was saying that in 1934. Ninety years later, the warning still applies.`,
    },
  ],
};

export const gdpQuestions: PracticeQuestion[] = [
  {
    id: "gdp-1",
    question:
      "A U.S. citizen owns a factory in Mexico. The output of that factory is included in:",
    options: [
      "U.S. GDP only",
      "Mexico's GDP only",
      "Both U.S. GDP and Mexico's GDP",
      "Neither country's GDP",
    ],
    correctIndex: 1,
    explanation:
      "GDP measures production within a country's borders, regardless of ownership. The factory is in Mexico, so its output counts toward Mexico's GDP. Ownership would matter for GNP (Gross National Product), which tracks output by a country's citizens. Option A confuses GDP with GNP, a distinction formalized in national accounting standards after World War II.",
  },
  {
    id: "gdp-2",
    question:
      "Which of the following would be counted in U.S. GDP for this year?",
    options: [
      "A family selling their used car to a neighbor",
      "The federal government paying Social Security benefits",
      "A restaurant purchasing flour from a wholesale supplier",
      "A homebuilder constructing and selling a new house",
    ],
    correctIndex: 3,
    explanation:
      "A new house is a final good produced in the current period. Option A fails because used goods were already counted when first produced. Option B is a transfer payment, so no new production occurs in exchange. Option C is an intermediate good whose value will be captured in the final product sold to consumers.",
  },
  {
    id: "gdp-3",
    question:
      "If nominal GDP increased by 8% and the GDP deflator increased by 5%, real GDP growth was approximately:",
    options: ["13%", "8%", "5%", "3%"],
    correctIndex: 3,
    explanation:
      "Real GDP growth approximately equals nominal growth minus inflation: 8% − 5% = 3%. The precise formula ((1.08 / 1.05) − 1) yields about 2.86%, which rounds to 3%. Option A incorrectly adds the two figures. Option B ignores inflation entirely. Option C mistakes the inflation rate for the growth rate.",
  },
  {
    id: "gdp-4",
    question:
      "Which component of GDP (expenditure approach) is typically the largest in the United States?",
    options: [
      "Investment (I)",
      "Government purchases (G)",
      "Net exports (NX)",
      "Consumption (C)",
    ],
    correctIndex: 3,
    explanation:
      "Consumer spending has dominated U.S. GDP since national income accounting began, making up roughly 68-70% of the total in recent decades. Investment runs around 17-18%, government purchases around 17%, and net exports are typically negative because the U.S. has run a trade deficit almost continuously since 1976.",
  },
  {
    id: "gdp-5",
    question:
      "A parent quits a $60,000 job to stay home and care for their children full-time. What happens to GDP?",
    options: [
      "GDP is unaffected because childcare is always excluded",
      "GDP decreases because the parent's paid output is lost, while unpaid caregiving is not counted",
      "GDP increases because the family saves on daycare costs",
      "GDP increases because the parent is now more productive",
    ],
    correctIndex: 1,
    explanation:
      "GDP only captures market transactions. The $60,000 salary was counted; unpaid caregiving at home is not, even though it has real economic value. This is one of the limitations Kuznets identified in the 1930s. Option A is wrong because paid childcare (daycare services) IS counted in GDP. Option C confuses saving money with producing output.",
  },
  {
    id: "gdp-6",
    question:
      "Why does GDP exclude intermediate goods from its calculation?",
    options: [
      "Intermediate goods have no economic value",
      "Including them would result in double counting",
      "Only services are counted in GDP, not goods",
      "Intermediate goods are only counted in GNP",
    ],
    correctIndex: 1,
    explanation:
      "The value of intermediate goods is already embedded in the final good's price. Counting the steel sold to General Motors AND the finished Chevrolet would count the steel twice, inflating GDP beyond the true value of final production. Option A is wrong because intermediate goods absolutely have value; their value is simply captured downstream in the final product.",
  },
  {
    id: "gdp-7",
    question:
      "In a year when the GDP deflator equals 100, which of the following must be true?",
    options: [
      "The economy is experiencing no inflation",
      "Nominal GDP and real GDP are equal because this is the base year",
      "The economy is in a recession",
      "Consumer prices have not changed since last year",
    ],
    correctIndex: 1,
    explanation:
      "A GDP deflator of 100 means nominal GDP equals real GDP, which is the definition of the base year, since current prices match base-year prices. Option A is misleading; the deflator being 100 just means the price level matches the base year, not that there is zero year-over-year inflation. Option D confuses the GDP deflator with the CPI; they measure different baskets of goods.",
  },
  {
    id: "gdp-8",
    question:
      "An economy produces only shoes and shirts. In the base year, 100 shoes sell at $50 and 200 shirts sell at $20. In the current year, 120 shoes sell at $60 and 220 shirts sell at $25. What is the current-year real GDP?",
    options: [
      "$12,700",
      "$10,400",
      "$12,200",
      "$9,000",
    ],
    correctIndex: 1,
    explanation:
      "Real GDP applies base-year prices to current-year quantities: shoes at 120 × $50 = $6,000; shirts at 220 × $20 = $4,400. Total: $10,400. Option A ($12,700) is nominal GDP for the current year (120 × $60 + 220 × $25), which fails to strip out price increases. Option D ($9,000) is base-year nominal GDP (100 × $50 + 200 × $20). Option C does not correspond to any correct calculation with the given data.",
  },
  {
    id: "gdp-9",
    question:
      "Nominal GDP is $800 billion and real GDP is $640 billion. What is the GDP deflator, and what does it indicate?",
    options: [
      "80; the price level has fallen 20% since the base year",
      "125; the price level has risen 25% since the base year",
      "160; the economy is in a recession",
      "1.25; nominal GDP exceeds real GDP by 25 percentage points",
    ],
    correctIndex: 1,
    explanation:
      "GDP deflator = (Nominal / Real) × 100 = ($800B / $640B) × 100 = 125. A deflator of 125 means the overall price level is 25% higher than in the base year. Option A reverses the formula (divides real by nominal). Option C produces an arithmetic error and incorrectly connects a price index to a recession call. Option D omits the multiplication by 100, which is not the standard format.",
  },
  {
    id: "gdp-10",
    question:
      "Which of the following transactions would NOT be included in the calculation of GDP?",
    options: [
      "A law firm billing a client $5,000 for legal services",
      "The federal government purchasing $2 million in new military equipment",
      "A homeowner selling her house, built in 2005, for $350,000 in the current year",
      "A car manufacturer producing 1,000 vehicles that remain unsold in inventory at year-end",
    ],
    correctIndex: 2,
    explanation:
      "Reselling an existing home does not represent new production, because that house was already counted when it was built in 2005. The real estate agent's commission would count as a current service, but the home itself does not re-enter GDP. Option A is a current final service. Option B is government purchases (G). Option D counts because unsold inventory is classified as investment (I) in GDP accounting, and the vehicles were produced in the current period.",
  },
  {
    id: "gdp-11",
    question:
      "Country X has a GDP of $2 trillion and a population of 50 million. Country Y has a GDP of $500 billion and a population of 10 million. A student concludes that citizens in both countries enjoy the same standard of living because GDP per capita is equal. What is the most significant flaw in this reasoning?",
    options: [
      "The student failed to adjust for inflation using real GDP",
      "GDP per capita is an average that ignores income distribution; Country X could have extreme inequality while Country Y distributes income more evenly",
      "GDP per capita does not account for differences in population growth rates",
      "The student should have used GNP per capita instead of GDP per capita",
    ],
    correctIndex: 1,
    explanation:
      "Both countries show $40,000 per capita, but that average reveals nothing about distribution. Country X might have a small elite earning millions while most citizens live in poverty, whereas Country Y might have a broad middle class. Measures like the Gini coefficient exist precisely to capture what per-capita averages obscure. Option A raises a valid concern, but the question's core flaw is distributional. Option C is irrelevant to a point-in-time calculation. Option D suffers from the same distributional blindness.",
  },
  {
    id: "gdp-12",
    question:
      "A steel company sells $10 million worth of steel to an automobile manufacturer, which then produces cars sold to consumers for $25 million. What is the contribution to GDP from these transactions?",
    options: [
      "$35 million, because both the steel and cars are productive output",
      "$25 million, because only the final goods sold to consumers are counted",
      "$15 million, because GDP only counts the value added at each stage",
      "$10 million, because only the intermediate good represents real production",
    ],
    correctIndex: 1,
    explanation:
      "GDP counts only final goods to avoid double counting. The $10 million in steel is embedded in the $25 million car price. Option A commits that double-counting error. Option C ($15 million) represents only the auto manufacturer's value added, but the value-added approach sums all stages ($10M + $15M = $25M), reaching the same answer. Option D incorrectly excludes the final product.",
  },
  {
    id: "gdp-13",
    question:
      "A massive earthquake destroys infrastructure across a region. In the following year, GDP rises significantly due to reconstruction spending. Which of the following best explains why this GDP increase is misleading as a measure of welfare?",
    options: [
      "The reconstruction spending should be excluded from GDP because it is government expenditure",
      "GDP measures market production, not net welfare; the reconstruction merely restores destroyed capital rather than creating new wealth, and the loss of the original infrastructure is never subtracted",
      "The GDP increase is misleading because the earthquake reduced the labor force permanently",
      "GDP should have fallen because natural disasters always reduce economic output",
    ],
    correctIndex: 1,
    explanation:
      "Reconstruction spending genuinely counts as new production (government purchases and private investment). But the destroyed capital (roads, buildings, homes) is never subtracted from GDP. Society spends billions to return to where it started, yet GDP registers a gain. After the 2011 Tohoku earthquake, Japan's reconstruction spending boosted GDP figures even though the country had suffered catastrophic losses. Option A is wrong because government expenditure on goods and services is included in GDP. Option C makes an unsupported assumption. Option D is incorrect because reconstruction activity does increase measured output.",
  },
  {
    id: "gdp-14",
    question:
      "Using the expenditure approach, if consumption is $10 trillion, investment is $3 trillion, government purchases are $3.5 trillion, exports are $2 trillion, and imports are $2.8 trillion, what is GDP?",
    options: [
      "$21.3 trillion",
      "$15.7 trillion",
      "$16.5 trillion",
      "$14.9 trillion",
    ],
    correctIndex: 1,
    explanation:
      "GDP = C + I + G + NX = $10T + $3T + $3.5T + ($2T − $2.8T) = $15.7 trillion. Net exports are −$0.8T because imports exceed exports, reflecting the kind of trade deficit the U.S. has run since the mid-1970s. Option A adds imports instead of subtracting them. Option C likely ignores the net export calculation. Option D results from an additional arithmetic error.",
  },
];
