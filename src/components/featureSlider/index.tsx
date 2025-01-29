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
    swipeToSlide: true,
  };

  return (
    <div className="slider-container mb-6 lg:mb-20 md:mb-10">
      {isMobile ? (
        <Slider {...settings}>
          {features.map((feature, index) => (
            <FeatureItem {...feature} key={index} />
          ))}
        </Slider>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="opacity-0"></div>
          {features.map((feature, index) => (
            <FeatureItem key={index} {...feature} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FeatureSlider;
