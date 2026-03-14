import Sidebar from "@/components/layout/Sidebar";
import MobileNav from "@/components/layout/MobileNav";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MobileNav />
      <div className="flex min-h-screen">
        <div className="hidden lg:block">
          <Sidebar />
        </div>
        <main id="main-content" className="flex-1 lg:pt-0 pt-14 min-w-0">
          {children}
        </main>
      </div>
    </>
  );
}
