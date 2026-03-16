import type { Metadata } from "next";
import Link from "next/link";
import { macroCourse } from "@/data/courses";

export const dynamicParams = true;

export function generateMetadata({
  params,
}: {
  params: { moduleId: string };
}): Metadata {
  const mod = macroCourse.modules.find((m) => m.id === params.moduleId);
  if (!mod) return { title: "Module Not Found" };
  return {
    title: `${mod.title} - AP Macroeconomics Study Guide`,
    description: `${mod.description} Free interactive lesson with practice questions and detailed explanations.`,
    alternates: { canonical: `https://econlearn.org${mod.href}` },
    openGraph: {
      title: `${mod.title} - AP Macro | EconLearn`,
      description: mod.description,
      url: `https://econlearn.org${mod.href}`,
    },
  };
}

// Modules that have dedicated pages (not handled by this dynamic route)
const DEDICATED_MODULES = ["aggregate-demand", "fiscal-policy", "monetary-policy", "international-trade", "unemployment-inflation", "exchange-rates", "basic-macro-concepts", "gdp", "aggregate-supply", "economic-growth", "loanable-funds", "business-cycle"];

export default function MacroModulePage({
  params,
}: {
  params: { moduleId: string };
}) {
  const mod = macroCourse.modules.find((m) => m.id === params.moduleId);

  if (!mod) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-16 text-center">
        <h1 className="text-xl font-bold text-gray-900 mb-4">Module Not Found</h1>
        <Link href="/macro" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
          Back to Macroeconomics
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-14">
      <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
        <Link href="/macro" className="hover:text-gray-600 transition-colors">
          Macro
        </Link>
        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <span className="text-gray-900 font-medium">{mod.title}</span>
      </div>

      <div className="mb-10">
        <h1 className="text-2xl font-bold text-gray-900 tracking-tight mb-2">
          {mod.title}
        </h1>
        <p className="text-[15px] text-gray-500">{mod.description}</p>
      </div>

      <div className="py-12 text-center">
        <p className="text-sm text-gray-400 mb-6">
          This module is under development.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/macro/aggregate-demand" className="btn-primary text-sm">
            AD/AS Model
          </Link>
          <Link href="/micro/supply-and-demand" className="btn-secondary text-sm">
            Supply & Demand
          </Link>
        </div>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return macroCourse.modules
    .filter((m) => !DEDICATED_MODULES.includes(m.id))
    .map((m) => ({ moduleId: m.id }));
}
