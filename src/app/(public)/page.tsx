import SmoothScroll from "@/components/SmoothScroll";
import OpeningAnimation from "@/components/OpeningAnimation";
import Hero from "@/components/Hero";
import ImpactStats from "@/components/ImpactStats";
import Programs from "@/components/Programs";
import Stories from "@/components/Stories";
import Documentary from "@/components/Documentary";
import Events from "@/components/Events";
import EmotionalBreak from "@/components/EmotionalBreak";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="w-full bg-[#050505] flex flex-col">
        <OpeningAnimation />
        <Hero />
        <ImpactStats />
        <Programs />
        <Stories />
        <Documentary />
        <Events />
        <EmotionalBreak />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
