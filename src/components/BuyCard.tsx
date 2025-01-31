import React, { FC } from "react";
import ButtonYellow from "@/components/ButtonYellow";

interface BuyCardProps {
  title: string;
  desc: string;
  btnName: string;
  href: string;
}

const BuyCard: FC<BuyCardProps> = ({ title, desc, btnName, href }) => {
  return (
    <div className="text-center bg-misty-purple-gradient py-[30px] px-[10px] h-full flex flex-col rounded-[1.875rem]">
      <div className={"flex-1 flex flex-col"}>
        <h3 className="text-blue-400 uppercase font-extrabold text-2xl mb-5">
          {title}
        </h3>
        <div className="font-bold text-lg lg:text-xl mb-10 truncate overflow-hidden whitespace-nowrap">
          {desc}
        </div>
      </div>
      <div className="mt-auto">
        <ButtonYellow href={href}>{btnName}</ButtonYellow>
      </div>
    </div>
  );
};

export default BuyCard;
