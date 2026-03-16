import type { Metadata } from "next";
import { microCourse } from "@/data/courses";
import ClientPage from "./ClientPage";

const MODULE_ID = "public-goods-externalities";

const mod = microCourse.modules.find((m) => m.id === MODULE_ID)!;

export const metadata: Metadata = {
  title: `${mod.title} - AP Microeconomics | EconLearn`,
  description: `${mod.description} Free interactive lesson with practice questions, graphs, and flashcards.`,
  alternates: { canonical: `https://econlearn.org${mod.href}` },
  openGraph: {
    title: `${mod.title} - AP Micro | EconLearn`,
    description: mod.description,
    url: `https://econlearn.org${mod.href}`,
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://econlearn.org" },
    { "@type": "ListItem", position: 2, name: "AP Microeconomics", item: "https://econlearn.org/micro" },
    { "@type": "ListItem", position: 3, name: mod.title, item: `https://econlearn.org${mod.href}` },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ClientPage />
    </>
  );
}
