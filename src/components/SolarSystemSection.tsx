import React from "react";
import Image from "next/image";

const SolarSystemSection = () => {
  return (
    <div className={"h-[100vh] relative"}>
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[1629px] max-w-full">
        <Image
          src={"/images/bg-solar-system.svg"}
          alt={"Solar System"}
          width={1629}
          height={874}
        />
      </div>
      <Image
        className={
          "absolute left-1/2 -translate-x-1/2 bottom-[25%] md:bottom-[1%] z-[1] ml-[-5%] w-[35vw] xl:w-[18vw] h-auto"
        }
        src={"/images/img-rocket-universe.svg"}
        alt={"Rocket"}
        width={353}
        height={420}
        layout="intrinsic"
      />
    </div>
  );
};

export default SolarSystemSection;
