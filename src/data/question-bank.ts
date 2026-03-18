import type { PracticeQuestion } from "./supply-demand-content";

// Micro modules
import { basicConceptsQuestions } from "./basic-concepts-content";
import { practiceQuestions as supplyDemandQuestions } from "./supply-demand-content";
import { elasticityQuestions } from "./elasticity-content";
import { consumerChoiceQuestions } from "./consumer-choice-content";
import { productionCostsQuestions } from "./production-costs-content";
import { perfectCompetitionQuestions } from "./perfect-competition-content";
import { monopolyQuestions } from "./monopoly-content";
import { monopolisticCompQuestions } from "./monopolistic-competition-content";
import { oligopolyQuestions } from "./oligopoly-content";
import { factorMarketsQuestions } from "./factor-markets-content";
import { marketFailureQuestions } from "./market-failure-content";
import { publicGoodsQuestions } from "./public-goods-content";

// Macro modules
import { basicMacroQuestions } from "./basic-macro-content";
import { gdpQuestions } from "./gdp-content";
import { businessCycleQuestions } from "./business-cycle-content";
import { unemploymentInflationQuestions } from "./unemployment-inflation-content";
import { adasQuestions } from "./adas-content";
import { aggregateSupplyQuestions } from "./aggregate-supply-content";
import { fiscalPolicyQuestions } from "./fiscal-policy-content";
import { monetaryPolicyQuestions } from "./monetary-policy-content";
import { loanableFundsQuestions } from "./loanable-funds-content";
import { economicGrowthQuestions } from "./economic-growth-content";
import { internationalTradeQuestions } from "./international-trade-content";
import { exchangeRatesQuestions } from "./exchange-rates-content";

export type { PracticeQuestion };

export interface QuestionBankEntry {
  question: PracticeQuestion;
  moduleId: string;
  moduleName: string;
  course: "micro" | "macro";
}

export interface ModuleInfo {
  moduleId: string;
  moduleName: string;
  course: "micro" | "macro";
  questionCount: number;
}

function mapQuestions(
  questions: PracticeQuestion[],
  moduleId: string,
  moduleName: string,
  course: "micro" | "macro"
): QuestionBankEntry[] {
  return questions.map((q) => ({
    question: q,
    moduleId,
    moduleName,
    course,
  }));
}

export const questionBank: QuestionBankEntry[] = [
  // Micro
  ...mapQuestions(basicConceptsQuestions, "basic-concepts", "Basic Economic Concepts", "micro"),
  ...mapQuestions(supplyDemandQuestions, "supply-and-demand", "Supply and Demand", "micro"),
  ...mapQuestions(elasticityQuestions, "elasticity", "Elasticity", "micro"),
  ...mapQuestions(consumerChoiceQuestions, "consumer-choice", "Consumer Choice", "micro"),
  ...mapQuestions(productionCostsQuestions, "production-costs", "Production and Costs", "micro"),
  ...mapQuestions(perfectCompetitionQuestions, "perfect-competition", "Perfect Competition", "micro"),
  ...mapQuestions(monopolyQuestions as PracticeQuestion[], "monopoly", "Monopoly", "micro"),
  ...mapQuestions(monopolisticCompQuestions as PracticeQuestion[], "monopolistic-competition", "Monopolistic Competition", "micro"),
  ...mapQuestions(oligopolyQuestions, "oligopoly", "Oligopoly", "micro"),
  ...mapQuestions(factorMarketsQuestions, "factor-markets", "Factor Markets", "micro"),
  ...mapQuestions(marketFailureQuestions, "market-failure", "Market Failure", "micro"),
  ...mapQuestions(publicGoodsQuestions, "public-goods-externalities", "Public Goods & Externalities", "micro"),

  // Macro
  ...mapQuestions(basicMacroQuestions, "basic-macro-concepts", "Basic Macroeconomic Concepts", "macro"),
  ...mapQuestions(gdpQuestions, "gdp", "GDP", "macro"),
  ...mapQuestions(businessCycleQuestions, "business-cycle", "The Business Cycle", "macro"),
  ...mapQuestions(unemploymentInflationQuestions, "unemployment-inflation", "Unemployment & Inflation", "macro"),
  ...mapQuestions(adasQuestions as PracticeQuestion[], "aggregate-demand", "Aggregate Demand & Supply", "macro"),
  ...mapQuestions(aggregateSupplyQuestions, "aggregate-supply", "Aggregate Supply", "macro"),
  ...mapQuestions(fiscalPolicyQuestions, "fiscal-policy", "Fiscal Policy", "macro"),
  ...mapQuestions(monetaryPolicyQuestions, "monetary-policy", "Monetary Policy", "macro"),
  ...mapQuestions(loanableFundsQuestions, "loanable-funds", "The Loanable Funds Market", "macro"),
  ...mapQuestions(economicGrowthQuestions, "economic-growth", "Economic Growth", "macro"),
  ...mapQuestions(internationalTradeQuestions, "international-trade", "International Trade", "macro"),
  ...mapQuestions(exchangeRatesQuestions, "exchange-rates", "Exchange Rates", "macro"),
];

// Pre-computed module info for the configuration UI
export const moduleInfo: ModuleInfo[] = (() => {
  const map = new Map<string, ModuleInfo>();
  for (const entry of questionBank) {
    const existing = map.get(entry.moduleId);
    if (existing) {
      existing.questionCount++;
    } else {
      map.set(entry.moduleId, {
        moduleId: entry.moduleId,
        moduleName: entry.moduleName,
        course: entry.course,
        questionCount: 1,
      });
    }
  }
  return Array.from(map.values());
})();

export function getQuestionsByModules(moduleIds: string[]): QuestionBankEntry[] {
  const idSet = new Set(moduleIds);
  return questionBank.filter((e) => idSet.has(e.moduleId));
}

export function getQuestionsByCourse(course: "micro" | "macro" | "both"): QuestionBankEntry[] {
  if (course === "both") return questionBank;
  return questionBank.filter((e) => e.course === course);
}
