import React from "react";

interface MechanicsInfoProps {
  title: string;
  desc: string;
}

const MechanicsInfo: React.FC<MechanicsInfoProps> = ({ title, desc }) => {
  return (
    <div className="rounded-[1.25rem] py-[25px] px-[30px] min-h-full bg-dark-purple-gradient">
      <h3 className="font-bold text-red-400 text-lg mb-2">{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default MechanicsInfo;
