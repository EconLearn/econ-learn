import type { PracticeQuestion } from "@/data/supply-demand-content";

export const gdpContent = {
  title: "GDP",
  subtitle:
    "Measuring the total value of everything an economy produces -- and understanding what that number misses",
  sections: [
    {
      heading: "What GDP Actually Measures (and What It Misses)",
      content: `How rich is a country? You cannot just count factories or acres of farmland. You need a single number that captures total economic activity across an entire nation. That number is **Gross Domestic Product**.

**GDP** is the total market value of all *final* goods and services produced *within a country's borders* during a specific time period, usually a year or a quarter. Every bakery loaf, every haircut, every new car off the assembly line, every hour of legal counsel counts.

The word "final" carries weight. Tires sold to Ford are an *intermediate good*, and their value is already embedded in the car's price. Counting both the tires and the car would be **double counting**. GDP only captures the finished product reaching the end user.

"Domestic" is equally important. A Japanese-owned Honda factory in Ohio contributes to *U.S.* GDP because the production happens on American soil. An American-owned Apple factory in China contributes to *Chinese* GDP. Location of production, not ownership, determines which country claims the output.`,
    },
    {
      heading: "The Expenditure Approach: C + I + G + NX",
      content: `The most common way to measure GDP is to add up all spending on final goods and services. The **expenditure approach** sorts this spending into four buckets:

**Consumption (C)** accounts for roughly 68-70% of U.S. GDP. Groceries, rent, Netflix, dentist visits. Anything households buy.

**Investment (I)** covers business spending on capital goods (factories, machinery, software), residential construction, and changes in inventories. A common misconception: this is *not* financial investment like buying stocks. In GDP accounting, "investment" means physical or productive assets.

**Government purchases (G)** includes federal, state, and local spending on goods and services. Teacher salaries, military equipment, highway construction all count. Transfer payments like Social Security are excluded because the government receives no new good or service in return.

**Net exports (NX)** equals exports minus imports (X - M). Boeing selling a jet to a foreign airline adds to GDP. An American buying a Korean-made TV subtracts from it. The U.S. typically runs a trade deficit, so NX is negative.

**GDP = C + I + G + NX**

This is an accounting identity, not a theory. Every dollar of final output gets purchased by someone, and that buyer falls into one of these four categories.`,
    },
    {
      heading: "Nominal vs Real GDP and the GDP Deflator",
      content: `GDP rises from $20 trillion to $21 trillion. Did the economy actually produce more, or did prices just climb? That question is the entire reason we distinguish nominal from real GDP.

**Nominal GDP** uses *current-year prices*. If both quantities and prices rise, nominal GDP rises, but you have no way to separate the two effects.

**Real GDP** uses *constant base-year prices*, stripping out inflation. It answers a cleaner question: did the economy produce more goods and services? Real GDP is the number that matters for growth calculations and recession calls.

The **GDP deflator** connects them:

GDP Deflator = (Nominal GDP / Real GDP) x 100

Unlike the CPI, which tracks a basket of consumer goods, the deflator covers the price level of *everything* produced domestically. A deflator moving from 100 to 105 means the overall price level rose 5%.

The 2021-2022 COVID recovery exposed this distinction sharply. Nominal GDP surged, partly on the back of rapid price increases. Real GDP growth was considerably weaker. The economy was producing more, but not nearly as much as the headline numbers implied.`,
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

That is a 55% nominal increase. How much reflects real growth versus inflation?

**Calculate Real GDP** using base-year prices for current-year quantities:
Tacos: 120 x $2 = $240
Textbooks: 25 x $50 = $1,250
**Real GDP (current year) = $1,490**

**GDP Deflator** = ($1,860 / $1,490) x 100 = **124.8**

So real output grew from $1,200 to $1,490, a **24.2% increase**. The deflator tells us prices rose **24.8%**. The 55% nominal gain splits into roughly equal parts real growth and inflation. Skipping the real GDP calculation would have overstated actual output gains by more than double.`,
    },
    {
      heading: "Limitations of GDP",
      content: `GDP is the most cited economic statistic on Earth, but it has blind spots that matter.

**Unpaid work is invisible.** A parent raising children at home produces real value, but GDP records none of it. If that parent hires a nanny and takes a paid job, GDP rises even though total productive activity may be unchanged. Household production, volunteering, and caregiving all fall outside the count.

**The underground economy is missing.** Cash-paid labor, unreported income, and illegal transactions never appear. In some developing countries the informal economy may reach 30-40% of total output, which means GDP systematically understates their economic activity.

**GDP ignores inequality.** A country with $10 trillion in GDP could have most of that income concentrated among a handful of billionaires while the median citizen struggles. **GDP per capita** helps, but it is still just an average that says nothing about distribution.

**Environmental destruction can boost GDP.** An oil spill generates paid economic activity: cleanup crews, equipment manufacturers, lawyers. Clear-cutting a rainforest and selling the timber adds to GDP. The natural capital destroyed never subtracts from it.

**Quality of life goes unmeasured.** Leisure time, mental health, safety, political freedom, life satisfaction. None of it shows up. The U.S. has an enormous GDP but ranks below many smaller economies on life expectancy and self-reported happiness.

GDP remains the best single measure of economic output. But it measures *production*, not *well-being*. Confusing the two is one of the most common errors in public economic debate.`,
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
      "GDP measures production within a country's borders, regardless of who owns the factory. Since the factory is located in Mexico, its output counts toward Mexico's GDP. The nationality of the owner does not matter for GDP -- it would matter for GNP (Gross National Product), which tracks output by a country's citizens. Option A confuses GDP with GNP.",
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
      "GDP counts new final goods and services produced in the current period. A new house is a new final good. Option A is a used good (already counted when first produced). Option B is a transfer payment -- no new good or service is produced in exchange. Option C is an intermediate good -- the flour's value will be captured in the final product (bread, pastries) sold to consumers.",
  },
  {
    id: "gdp-3",
    question:
      "If nominal GDP increased by 8% and the GDP deflator increased by 5%, real GDP growth was approximately:",
    options: ["13%", "8%", "5%", "3%"],
    correctIndex: 3,
    explanation:
      "Real GDP growth roughly equals nominal GDP growth minus inflation. If nominal GDP rose 8% and prices rose 5%, the actual increase in output was about 3%. Option A incorrectly adds the two. Option B ignores inflation entirely. Option C confuses the inflation rate with the growth rate. The precise calculation uses the formula: Real GDP growth = ((1 + nominal growth) / (1 + inflation)) - 1, which gives approximately 2.86%, rounded to 3%.",
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
      "Consumer spending (C) accounts for roughly 68-70% of U.S. GDP, making it by far the largest component. Investment (I) is typically around 17-18%, government purchases (G) around 17%, and net exports (NX) are actually negative since the U.S. imports more than it exports. Option C is wrong not only because NX is not the largest, but because it is typically negative for the U.S.",
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
      "GDP only counts market transactions. The parent's $60,000 salary was counted in GDP; their unpaid childcare at home is not. Even though the caregiving has real economic value, GDP cannot capture it because no market transaction occurs. This is one of GDP's well-known limitations. Option A is wrong because paid childcare (like daycare) IS counted in GDP -- it is only unpaid caregiving that is excluded. Option C is wrong because saving money is not the same as producing output.",
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
      "The value of intermediate goods is already embedded in the price of the final good. If you count the steel sold to a car manufacturer AND the finished car, you are counting the steel twice -- once on its own and once as part of the car. This double counting would inflate GDP beyond the true value of final production. Option A is wrong because intermediate goods absolutely have economic value; they are just captured in the final product's price.",
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
      "A GDP deflator of 100 means nominal GDP equals real GDP, which happens in the base year by definition (since current-year prices equal base-year prices). Option A is misleading because the deflator being 100 just means the price level matches the base year -- it does not mean there is zero inflation in that year. Option D confuses the GDP deflator with the CPI; the deflator covers all domestically produced goods, not just a consumer basket.",
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
      "Real GDP uses base-year prices applied to current-year quantities. Shoes: 120 x $50 = $6,000. Shirts: 220 x $20 = $4,400. Real GDP = $6,000 + $4,400 = $10,400. Option A ($12,700) is nominal GDP for the current year (120 x $60 + 220 x $25 = $7,200 + $5,500), which fails to strip out price increases. Option C ($12,200) is not derivable from the given data and likely results from mixing base-year and current-year prices inconsistently. Option D ($9,000) is base-year nominal GDP (100 x $50 + 200 x $20), not the current-year real GDP.",
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
      "GDP deflator = (Nominal GDP / Real GDP) x 100 = ($800B / $640B) x 100 = 125. A deflator of 125 means the overall price level is 25% higher than in the base year (when the deflator was 100). Option A (80) reverses the formula, dividing real by nominal. Option C (160) results from an arithmetic error and incorrectly claims a recession based on a price index, when the deflator measures prices, not output levels. Option D expresses the ratio without multiplying by 100, which is not the standard GDP deflator format.",
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
      "The sale of an existing home is not counted in current GDP because the house was already counted when it was originally built in 2005. Reselling it does not represent new production. However, the real estate agent's commission on the sale would count as a current service. Option A is included because legal services are a final service produced in the current period. Option B is included as government purchases (G). Option D is included because unsold inventory counts as investment (I) in GDP accounting -- the goods were produced in the current period even though they were not yet sold to a final buyer.",
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
      "Both countries have a GDP per capita of $40,000, but per capita figures are averages that reveal nothing about how income is distributed. Country X might have a small elite earning millions while most citizens live in poverty, whereas Country Y might have a broad middle class. Standard of living comparisons require looking beyond averages to measures of inequality like the Gini coefficient. Option A raises a valid concern about nominal versus real comparisons, but the question's core flaw is about distribution, not inflation adjustment. Option C is irrelevant because population growth rates do not affect a point-in-time per capita calculation. Option D is incorrect because GNP per capita suffers from the same distributional blindness as GDP per capita.",
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
      "GDP counts only final goods to avoid double counting. The $10 million in steel is an intermediate good whose value is already embedded in the $25 million price of the finished cars. Counting both would inflate GDP to $35 million, overstating actual production. Option A commits this exact double-counting error. Option C ($15 million) represents the value added by the auto manufacturer alone, but the value-added approach should sum value added at all stages ($10M by the steel company + $15M by the auto manufacturer = $25M), yielding the same $25 million. Option D incorrectly excludes the final good and counts only the intermediate input.",
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
      "GDP records all market production regardless of whether it improves welfare. Reconstruction spending counts as new production (government purchases and private investment), but the destruction of existing capital -- roads, buildings, homes -- is never subtracted. Society is merely returning to where it started, yet GDP registers a gain. This is a classic illustration of GDP's failure as a welfare measure. Option A is wrong because government expenditure on goods and services is absolutely included in GDP as the G component. Option C makes an unsupported assumption; natural disasters do not necessarily reduce the labor force permanently. Option D is incorrect because GDP measures production, and the reconstruction activity genuinely increases measured output even if net welfare has not improved.",
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
      "GDP = C + I + G + NX = $10T + $3T + $3.5T + ($2T - $2.8T) = $10T + $3T + $3.5T + (-$0.8T) = $15.7 trillion. Net exports are negative because imports exceed exports, so NX subtracts from the total. Option A ($21.3T) adds imports instead of subtracting them, treating all flows as positive. Option C ($16.5T) likely ignores the net export calculation and adds exports without subtracting imports. Option D ($14.9T) subtracts both exports and imports or makes another arithmetic error. The key is remembering that NX = exports minus imports, and when a country runs a trade deficit, NX is negative.",
  },
];
