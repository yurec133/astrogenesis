"use client";
import React from "react";
import Slider from "react-slick";
import FeatureItem from "@/components/featureSlider/FeatureItem";
import useIsMobile from "@/hooks/useIsMobile";
import { features } from "@/components/featureSlider/features";

const FeatureSlider = () => {
  const isMobile = useIsMobile();

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1.5,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    swipeToSlide: false,
    touchMove: true,
    swipe: true,
  };

  return (
    <section className="slider-container mb-6 md:mb-10 xl:mb-20">
      {isMobile ? (
        <Slider {...settings}>
          {features.map((feature, index) => (
            <FeatureItem {...feature} key={index} />
          ))}
        </Slider>
      ) : (
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
          <div className="opacity-0"></div>
          {features.map((feature, index) => (
            <FeatureItem key={index} {...feature} />
          ))}
        </div>
      )}
    </section>
  );
};

export default FeatureSlider;
