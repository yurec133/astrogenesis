"use client";
import FeatureSlider from "@/components/featureSlider";
import GetAstroSection from "@/components/GetAstroSection";
import TokenomicsSection from "@/components/TokenomicsSection";
import RoadmapSection from "@/components/roadmap";
import SubscribeSection from "@/components/SubscribeSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  return (
    <>
      <Header />
      <div className="container mx-auto px-5 lg:px-12">
        <section id={"top"} />
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
