import React from "react";
import Image from "next/image";

interface FeatureItemProps {
  imgSrc: string;
  title: string;
  desc: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ imgSrc, title, desc }) => {
  return (
    <div className="bg-card-soft-purple-gradient-item text-center h-full rounded-2xl">
      <Image
        className="m-auto mb-5"
        src={imgSrc}
        width={0}
        height={101}
        alt={title}
        style={{ width: "auto", height: "100px" }}
      />
      <h3 className="text-blue-400 font-bold text-custom-lg md:text-custom-xl mb-4">
        {title}
      </h3>
      <div className="text-tiny">{desc}</div>
    </div>
  );
};

export default FeatureItem;
