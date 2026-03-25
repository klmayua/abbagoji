import { Sidebar } from "@/components/layout/Sidebar";
import { TopNav } from "@/components/layout/TopNav";
import { AnimatedPage } from "@/components/layout/AnimatedPage";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-surface">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <TopNav />
        <main className="flex-1 overflow-y-auto bg-surface">
          <div className="p-6 lg:p-8">
            <AnimatedPage>{children}</AnimatedPage>
          </div>
        </main>
      </div>
    </div>
  );
}
