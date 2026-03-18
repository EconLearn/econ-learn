// Maps module IDs to their content (sections) for lesson-type assignments

import { supplyDemandExplanation } from "./supply-demand-content";
import { basicConceptsContent } from "./basic-concepts-content";
import { elasticityContent } from "./elasticity-content";
import { consumerChoiceContent } from "./consumer-choice-content";
import { productionCostsContent } from "./production-costs-content";
import { perfectCompetitionContent } from "./perfect-competition-content";
import { monopolyContent } from "./monopoly-content";
import { monopolisticCompContent } from "./monopolistic-competition-content";
import { oligopolyContent } from "./oligopoly-content";
import { factorMarketsContent } from "./factor-markets-content";
import { marketFailureContent } from "./market-failure-content";
import { publicGoodsContent } from "./public-goods-content";
import { basicMacroContent } from "./basic-macro-content";
import { gdpContent } from "./gdp-content";
import { businessCycleContent } from "./business-cycle-content";
import { unemploymentInflationContent } from "./unemployment-inflation-content";
import { adasContent } from "./adas-content";
import { aggregateSupplyContent } from "./aggregate-supply-content";
import { fiscalPolicyContent } from "./fiscal-policy-content";
import { monetaryPolicyContent } from "./monetary-policy-content";
import { loanableFundsContent } from "./loanable-funds-content";
import { economicGrowthContent } from "./economic-growth-content";
import { internationalTradeContent } from "./international-trade-content";
import { exchangeRatesContent } from "./exchange-rates-content";

export interface ContentSection {
  heading: string;
  content: string;
}

export interface ModuleContent {
  title: string;
  subtitle?: string;
  sections: ContentSection[];
}

export const contentMap: Record<string, ModuleContent> = {
  "basic-concepts": basicConceptsContent as ModuleContent,
  "supply-and-demand": supplyDemandExplanation as ModuleContent,
  "elasticity": elasticityContent as ModuleContent,
  "consumer-choice": consumerChoiceContent as ModuleContent,
  "production-costs": productionCostsContent as ModuleContent,
  "perfect-competition": perfectCompetitionContent as ModuleContent,
  "monopoly": monopolyContent as ModuleContent,
  "monopolistic-competition": monopolisticCompContent as ModuleContent,
  "oligopoly": oligopolyContent as ModuleContent,
  "factor-markets": factorMarketsContent as ModuleContent,
  "market-failure": marketFailureContent as ModuleContent,
  "public-goods-externalities": publicGoodsContent as ModuleContent,
  "basic-macro-concepts": basicMacroContent as ModuleContent,
  "gdp": gdpContent as ModuleContent,
  "business-cycle": businessCycleContent as ModuleContent,
  "unemployment-inflation": unemploymentInflationContent as ModuleContent,
  "aggregate-demand": adasContent as ModuleContent,
  "aggregate-supply": aggregateSupplyContent as ModuleContent,
  "fiscal-policy": fiscalPolicyContent as ModuleContent,
  "monetary-policy": monetaryPolicyContent as ModuleContent,
  "loanable-funds": loanableFundsContent as ModuleContent,
  "economic-growth": economicGrowthContent as ModuleContent,
  "international-trade": internationalTradeContent as ModuleContent,
  "exchange-rates": exchangeRatesContent as ModuleContent,
};

export function getContentForModules(moduleIds: string[]): { moduleId: string; content: ModuleContent }[] {
  return moduleIds
    .map((id) => ({ moduleId: id, content: contentMap[id] }))
    .filter((entry) => entry.content != null);
}
