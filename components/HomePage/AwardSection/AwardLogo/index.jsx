import Image from "next/image";
import React from "react";

const awardSet1 = [
  "/images/Clutch-Global.webp",
  "/images/ca_san-diego_user-experience.webp",
  "/images/superbCompanies-Leader-Award-2021-Digital-Marketing.webp",
  "/images/Best-Web-Design-Companies-Badge-2.webp",
];

const awardSet2 = [
  "/images/Web-Design-Services-San-Diego-California.webp",
  "/images/verified-agency-vista-badge.png",
  "/images/new-badge.png",
  "/images/Design-Rush-Accredited-Badge.webp",
];

const AwardLogo = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center md:space-x-32 items-center mt-24 relative">
      <div className="flex flex-col gap-10">
        {awardSet1.map((src, index) => {
          return (
            <Image
              key={index}
              src={src}
              alt={`award${index}`}
              width={140}
              height={140}
            />
          );
        })}
      </div>
      <div className="flex flex-col gap-10 mt-10">
        <div className="w-fit">
          <Image
            src="/vectors/AccreditedBusiness .svg"
            width={140}
            height={52}
            alt="accredited business logo"
          />
          <p className="text-BBB-slate font-bold text-sm font-open-sans text-center mt-1">
            BBB rating: A+
          </p>
        </div>

        {awardSet2.map((src, index) => {
          return (
            <Image
              key={index}
              src={src}
              alt={`award${index}`}
              width={140}
              height={140}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AwardLogo;
