import Link from "next/link";
import { microCourse } from "@/data/courses";

export const dynamicParams = true;

// Modules that have dedicated pages (not handled by this dynamic route)
const DEDICATED_MODULES = ["supply-and-demand", "monopoly", "elasticity", "perfect-competition", "production-costs", "factor-markets", "basic-concepts", "consumer-choice", "monopolistic-competition", "oligopoly", "market-failure", "public-goods-externalities"];

export default function ModulePage({
  params,
}: {
  params: { moduleId: string };
}) {
  const mod = microCourse.modules.find((m) => m.id === params.moduleId);

  if (!mod) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-16 text-center">
        <h1 className="text-xl font-bold text-gray-900 mb-4">Module Not Found</h1>
        <Link href="/micro" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
          Back to Microeconomics
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-14">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
        <Link href="/micro" className="hover:text-gray-600 transition-colors">
          Micro
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

      {/* Coming soon */}
      <div className="py-12 text-center">
        <p className="text-sm text-gray-400 mb-6">
          This module is under development.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/micro/supply-and-demand" className="btn-primary text-sm">
            Supply & Demand
          </Link>
          <Link href="/micro/monopoly" className="btn-secondary text-sm">
            Monopoly
          </Link>
        </div>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return microCourse.modules
    .filter((m) => !DEDICATED_MODULES.includes(m.id))
    .map((m) => ({ moduleId: m.id }));
}
