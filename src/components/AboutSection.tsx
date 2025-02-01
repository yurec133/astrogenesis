import React from "react";
import AboutAstro from "@/components/AboutAstro";
import AboutInfo from "@/components/AboutInfo";

const AboutSection = () => {
  return (
    <section id={'about'} className="items-end grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-9 mb-10 lg:mb-20">
      <div>
        <AboutAstro />
      </div>
      <div>
        <AboutInfo />
      </div>
    </section>
  );
};

export default AboutSection;
