"use client";
import FeatureSlider from "@/components/featureSlider";
import GetAstroSection from "@/components/GetAstroSection";
import TokenomicsSection from "@/components/TokenomicsSection";
import RoadmapSection from "@/components/roadmap";
import SubscribeSection from "@/components/SubscribeSection";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import Menu from "@/components/Menu";

export default function Home() {
  return (
    <>
      <Menu />
      <div className="container mx-auto px-5 lg:px-[50px] pt-[800px]">
        <AboutSection />
        <FeatureSlider />
        <GetAstroSection />
        <TokenomicsSection />
        <RoadmapSection />
        <SubscribeSection />
        <Footer />
      </div>
    </>
  );
}
