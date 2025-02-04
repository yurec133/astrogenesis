import FeatureSlider from "@/components/featureSlider";
import GetAstroSection from "@/components/GetAstroSection";
import TokenomicsSection from "@/components/TokenomicsSection";
import RoadmapSection from "@/components/roadmap";
import SubscribeSection from "@/components/SubscribeSection";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import Menu from "@/components/Menu";
import Hero from "@/components/Hero";
import SolarSystemSection from "@/components/SolarSystemSection";
import Stars from "@/components/Stars";
import Particles from "@/components/Particles";

export default function Home() {
  return (
    <>
      <Stars />
      <Particles />
      <Menu />
      <Hero />
      <SolarSystemSection />
      <div className="container mx-auto px-5 lg:px-[50px]">
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
