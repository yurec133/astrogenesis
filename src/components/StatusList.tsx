import React from "react";

interface StatusItem {
  color: string;
  label: string;
}

const data: StatusItem[] = [
  {
    color: "#5DA4EE",
    label: "35%  -  Claimable through game mechanics over 10 years.",
  },
  { color: "#01D9F7", label: "15%  -  Game Development." },
  { color: "#2E78F6", label: "10%  -  Strategic Reserve." },
  { color: "#DC0F8D", label: "10%  -  Liquidity Pool." },
  { color: "#5643B8", label: "10%  -  Testnet Rewards." },
  { color: "#17A494", label: "10%  -  Airdrop to $SUI Holders." },
  { color: "#E2971E", label: "10%  -  Community Rewards." },
];

const StatusList: React.FC = () => {
  return (
    <div className="space-y-2 md:space-y-3">
      {data.map((item, index) => (
        <div key={index} className="flex items-center gap-6">
          <span
            className="w-[26px] h-[16px] rounded-full block flex-shrink-0"
            style={{ backgroundColor: item.color }}
          />
          <span className="text-custom-lg">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default StatusList;
