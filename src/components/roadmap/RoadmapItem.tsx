import React from "react";

interface RoadmapItemProps {
  title: string;
  desc: string;
  label: string;
  index: number;
}

const roadmapMargins = [38, 55, 15, 5, 50, 28];
const roadmapMarginsBottom = [20, 12, 31, 38, 16, 32];

const RoadmapItem: React.FC<RoadmapItemProps> = ({
  title,
  label,
  desc,
  index,
}) => {
  return (
    <div className="bg-card-light-purple-gradient lg:text-center pl-[30px] pt-6 pb-6 pr-3 lg:px-4 lg:pt-8 lg:pb-6 rounded-[24px] xl:rounded-xl relative">
      <div className="grid grid-cols-[1.3fr_0.7fr] gap-2 lg:gap-0 lg:grid-cols-1 items-center">
        <div>
          <h3
            style={{ marginBottom: `${roadmapMarginsBottom[index]}%` }}
            className="max-lg:!mb-1 text-custom-xl md:text-lg xl:text-2xl text-blue-400 font-extrabold"
          >
            {title}
          </h3>
          <div className="hidden lg:block relative z-10 leading-[59px] w-[59px] h-[59px] rounded-full bg-red-400 font-bold m-auto mb-4 uppercase text-indigo-900 text-center">
            {label}
          </div>
          <div className="text-sm xl:text-tiny leading-[1.2] text-gray-200 font-medium xl:font-semibold">
            {desc}
          </div>
        </div>
        <div className="lg:hidden text-right">
          <div
            className="inline-block relative z-10 leading-[59px] w-[59px] h-[59px] rounded-full bg-red-400 font-bold uppercase text-indigo-900 text-center"
            style={{ marginRight: `${roadmapMargins[index]}px` }}
          >
            {label}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapItem;
