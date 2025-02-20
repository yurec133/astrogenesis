import React from "react";
import Image from "next/image";
import SubscribeForm from "@/components/SubscribeForm";

const SubscribeSection = () => {
  return (
    <section id={'airdrop'} className={"mb-16 lg:mb-36 xl:mx-[40px] text-center"}>
      <Image
        className={"inline-block mb-4 lg:mb-7"}
        src={process.env.NEXT_PUBLIC_BASE_PATH + "/images/img-astr-on-ship.svg"}
        alt="Rocket"
        width={184}
        height={101}
      />
      <h2
        className={
          "text-yellow-300 uppercase font-black text-5xl md:text-6xl xl:text-custom-6xl mb-6 lg:mb-8 xl:mb-12"
        }
      >
        Join the Community
      </h2>
      <SubscribeForm />
    </section>
  );
};

export default SubscribeSection;
