import React, { FC } from "react";

interface BuyCardProps {
  title: string;
  desc: string;
  btnName: string;
}

const BuyCard: FC<BuyCardProps> = ({ title, desc, btnName }) => {
  return (
    <div className="text-center card-misty-purple-gradient h-full">
      <h3 className="text-blue-400 uppercase font-extrabold text-2xl mb-3">
        {title}
      </h3>
      <div className="font-bold text-xl mb-3">{desc}</div>
      <button>{btnName}</button>
    </div>
  );
};

export default BuyCard;
