import { Hero } from "@/components/sections/Hero";
import { Introduction } from "@/components/sections/Introduction";
import { FourPillars } from "@/components/sections/FourPillars";
import { ImpactStats } from "@/components/sections/ImpactStats";
import { GetInvolvedCTA } from "@/components/sections/GetInvolvedCTA";
import { LatestNews } from "@/components/sections/LatestNews";
import { GlassNavbar } from "@/components/layout/GlassNavbar";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <GlassNavbar />
      <main className="flex-1">
        <Hero />
        <Introduction />
        <FourPillars />
        <ImpactStats />
        <GetInvolvedCTA />
        <LatestNews />
      </main>
      <Footer />
    </>
  );
}
