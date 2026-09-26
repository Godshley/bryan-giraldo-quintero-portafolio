import MobileNavigation from "@/components/organisms/MobileNavigation";
import LeftSidebar from "@/components/organisms/LeftSidebar";
import ProfileSection from "@/components/organisms/ProfileSection";
import KnowledgeSection from "@/components/organisms/KnowledgeSection";
import EducationSection from "@/components/organisms/EducationSection";
import PortfolioSection from "@/components/organisms/PortfolioSection";
import RightSidebar from "@/components/organisms/RightSidebar";
import Footer from "@/components/organisms/Footer";

export default function PortfolioLayout() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <MobileNavigation />

      <div className="mx-auto flex min-h-screen max-w-7xl">
        <aside className="hidden lg:block lg:w-80 lg:shrink-0">
          <div className="sticky top-0 h-screen overflow-y-auto">
            <LeftSidebar />
          </div>
        </aside>

        <main className="min-w-0 flex-1 space-y-6 p-4 sm:p-6">
          <ProfileSection />
          <KnowledgeSection />
          <EducationSection />
          <PortfolioSection />
          <Footer />
        </main>

        <aside className="hidden lg:block lg:w-20 lg:shrink-0">
          <div className="sticky top-0 h-screen">
            <RightSidebar />
          </div>
        </aside>
      </div>
    </div>
  );
}