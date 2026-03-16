import type { Metadata } from "next";
import { macroCourse } from "@/data/courses";
import ClientPage from "./ClientPage";

const MODULE_ID = "fiscal-policy";

const mod = macroCourse.modules.find((m) => m.id === MODULE_ID)!;

export const metadata: Metadata = {
  title: `${mod.title} - AP Macroeconomics | EconLearn`,
  description: `${mod.description} Free interactive lesson with practice questions, graphs, and flashcards.`,
  alternates: { canonical: `https://econlearn.org${mod.href}` },
  openGraph: {
    title: `${mod.title} - AP Macro | EconLearn`,
    description: mod.description,
    url: `https://econlearn.org${mod.href}`,
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://econlearn.org" },
    { "@type": "ListItem", position: 2, name: "AP Macroeconomics", item: "https://econlearn.org/macro" },
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
