import React from "react";
import RoadmapGrid from "@/components/roadmap/RoadmapGrid";

const RoadmapSection = () => {
  return (
    <section className={"mb-24 px-[20px] lg:px-[40px] xl:px-[40px] 2xl:px-[0]"}>
      <h2
        className={
          "text-yellow-300 uppercase font-black text-5xl md:text-6xl xl:text-custom-6xl mb-28 md:mb-28 xl:mb-36 text-center"
        }
      >
        Roadmap
      </h2>
      <RoadmapGrid />
    </section>
  );
};

export default RoadmapSection;
