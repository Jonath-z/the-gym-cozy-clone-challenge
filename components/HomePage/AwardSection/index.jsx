import React from "react";
import Button from "../../modules/Button";
import DeskWraper from "../../modules/Layouts/DeskWrapper";
import AwardLogo from "./AwardLogo";

const AwardSecton = () => {
  return (
    <div className="bg-body-bg bg-body-bg-size py-100 relative overflow-hidden">
      <div className="bg-dot w-36 lg:w-56 lg:h-56 h-36 absolute -top-10 -right-10 lg:right-20 rotate-45 rounded-full opacity-20" />
      <div className="bg-dot w-20 lg:w-56 lg:h-44 h-20 absolute top-[50%] left-0 opacity-20 rotate-4" />
      <DeskWraper>
        <div className="max-w-300 md:max-w-710 mx-auto lg:max-w-full lg:grid lg:grid-cols-2 xl:flex xl:flex-row xl:pl-10 xl:max-w-1200">
          <div className="flex flex-col gap-3 md:pr-8 md:pl-76 lg:pl-28 lg:pr-2 xl:mr-20 xl:mt-16">
            <div className="text-30 pb-8">🌴🐻🇺🇸</div>
            <div>
              <h1 className="font-fraunces text-70 font-semibold text-primary-blue">
                Get Cozy
              </h1>
              <h4 className="text-37 font-fraunces text-secondary-chocolate font-normal">
                Design & digital marketing
                <br className="hidden md:block" /> in San Diego, California
              </h4>

              <div className="text-22 font-fraunces leading-1.6 text-primary-blue flex flex-col gap-5 mt-10">
                <p className="md:pr-20 lg:pr-0">
                  We’re an award-winning design shop based in South Park, San
                  Diego. We efficiently combine the best parts of user
                  experience (UX) with creative design and execution to create
                  effective collateral that connects with the human beings who
                  interact with them. 🤯
                </p>
                <p>
                  No epic quests for inspiration. Just pragmatic
                  <br className="hidden md:block lg:hidden" /> collaboration and
                  efficient results from big-agency
                  <br className="hidden md:block lg:hidden" />
                  graduates with decades of experience.
                </p>

                <div className="mt-5 md:w-80">
                  <Button containsGrain={false}>
                    Why we do what
                    <br className="md:hidden" /> we do
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-full ">
            <AwardLogo />
          </div>
        </div>
      </DeskWraper>
    </div>
  );
};

export default AwardSecton;
