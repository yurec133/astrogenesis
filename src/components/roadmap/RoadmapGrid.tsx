import React from "react";
import RoadmapItem from "@/components/roadmap/RoadmapItem";

const roadmapData = [
  {
    title: "2024",
    label: "q4",
    desc: "Token Generation Event (TGE)—$ASTRO token launch and liquidity pools available",
  },
  {
    title: "2025",
    label: "q1",
    desc: "Airdrop Snapshot for $SUI holders",
  },
  {
    title: "2025",
    label: "q2",
    desc: "Airdrop claims and game mechanics reveal",
  },
  {
    title: "2025",
    label: "q3",
    desc: "Testnet launch for AstroNFT",
  },
  { title: "2025", label: "q4", desc: "Mainnet game launch" },
  {
    title: "2026",
    label: "q1",
    desc: "New features, seasonal events, and community-driven updates",
  },
];

const RoadmapGrid = () => {
  return (
    <div className="relative">
      <div className="absolute z-10 left-5 right-0 top-[72px] h-[10vw] max-w-full w-[calc(100%-70px)] bg-[url('/images/bg-timeline-bar.svg')] bg-no-repeat bg-contain hidden lg:block">
        <div className="absolute left-[-58px] top-[-130px] w-[69px] h-[113px] bg-[url('/images/img-rocket-in.svg')] bg-no-repeat"></div>
        <div className="absolute right-[-110px] top-[24%] w-[106px] h-[64px] bg-[url('/images/img-rocket-out.svg')] bg-no-repeat"></div>
      </div>

      <div className="absolute z-10 right-[40px] top-[-40px] h-[812px] w-[103px] bg-[url('/images/bg-timeline-bar-vertical.svg')] bg-no-repeat lg:hidden">
        <div className="absolute left-[-105px] top-[-68px] w-[69px] h-[113px] bg-[url('/images/img-rocket-in.svg')] bg-no-repeat rotate-[83deg] scale-y-[-1]"></div>
        <div className="absolute bottom-[-60px] left-[-20px] w-[106px] h-[64px] bg-[url('/images/img-rocket-out.svg')] bg-no-repeat rotate-[170deg]"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-6 gap-4">
        {roadmapData.map((item, index) => (
          <RoadmapItem
            key={index}
            index={index}
            label={item.label}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default RoadmapGrid;
