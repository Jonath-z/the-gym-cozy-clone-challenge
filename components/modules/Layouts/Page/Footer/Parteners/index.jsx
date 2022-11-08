import React from "react";
import Image from "next/image";
import Star from "../../../../Icons/Star";

const Parteners = () => {
  return (
    <div className="justify-center items-center">
      <div className="grid grid-cols-2 grid-rows-2 gap-5 space-x-3 justify-center items-center w-fit max-w-max px-5">
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
        <div>
          <Image
            src="/images/bod-new_shield-logo.png"
            width={140}
            height={73}
            alt="accredited business logo"
          />
        </div>
        <div className="col-span-2 mt-2">
          <div className="bg-white flex gap-2 h-[43px] rounded-bl-3xl rounded-tr-3xl w-fit">
            <div className="h-full w-50 bg-clutch-dark-blue flex justify-center items-center rounded-tr-3xl rounded-bl-3xl border-b border-gray-600">
              <Image
                src="/vectors/clutch.svg"
                alt="tweeter icon"
                width={23}
                height={25}
              />
            </div>
            <div className="flex flex-col pt-1 pr-4">
              <div className="flex gap-2 items-center">
                <span className="text-[15px]">5.0</span>
                <span className="flex ">
                  {[...Array(5).keys()].map((_, index) => {
                    return (
                      <Star key={index} className="w-4 h-4 fill-start-red" />
                    );
                  })}
                </span>
              </div>
              <p className="text-[8.5px]">Based on 16 Clutch reviews</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parteners;
