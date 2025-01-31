"use client";
import AboutAstro from "@/components/AboutAstro";
import AboutInfo from "@/components/AboutInfo";
import FeatureSlider from "@/components/featureSlider";
import GetAstroSection from "@/components/GetAstroSection";
import TokenomicsSection from "@/components/TokenomicsSection";
import RoadmapSection from "@/components/roadmap";
import SubscribeSection from "@/components/SubscribeSection";

export default function Home() {
  return (
    <div className="container mx-auto px-5 lg:px-12">
      <section className="items-end grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-9 mb-10 lg:mb-20">
        <div>
          <AboutAstro />
        </div>
        <div>
          <AboutInfo />
        </div>
      </section>
      <FeatureSlider />
      <GetAstroSection />
      <TokenomicsSection />
      <RoadmapSection />
      <SubscribeSection />
    </div>
  );
}
