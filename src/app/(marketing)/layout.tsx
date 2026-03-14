import MarketingNav from "@/components/layout/MarketingNav";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <MarketingNav />
      <main id="main-content" className="flex-1">
        {children}
      </main>
    </div>
  );
}
