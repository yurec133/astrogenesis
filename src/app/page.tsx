"use client";
import AboutAstro from "@/components/AboutAstro";
import AboutInfo from "@/components/AboutInfo";
import FeatureSlider from "@/components/featureSlider";
import GetAstro from "@/components/GetAstro";

export default function Home() {
  return (
    <div className="container mx-auto px-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-9 mb-20">
        <div>
          <AboutAstro />
        </div>
        <div>
          <AboutInfo />
        </div>
      </div>
      <FeatureSlider />
      <GetAstro />
    </div>
  );
}
