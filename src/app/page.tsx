import FeatureSlider from "@/components/featureSlider";
import GetAstroSection from "@/components/GetAstroSection";
import TokenomicsSection from "@/components/TokenomicsSection";
import RoadmapSection from "@/components/roadmap";
import SubscribeSection from "@/components/SubscribeSection";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import SolarSystemSection from "@/components/SolarSystemSection";
import Stars from "@/components/Stars";
import Particles from "@/components/Particles";
import Menu from "@/components/nav";
import BackgroundScroll from "@/components/BackgroundScroll";

export default function Home() {
  return (
    <div className={'overflow-x-hidden'}>
      <BackgroundScroll />
      <Stars />
      <Particles />
      <Menu />
      <HeroSection />
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
    </div>
  );
}
