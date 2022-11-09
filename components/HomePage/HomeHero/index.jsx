import Image from "next/image";
import React from "react";
import Button from "../../modules/Button";
import DeskWraper from "../../modules/Layouts/DeskWrapper";
import Hero from "../../modules/Layouts/Hero";

const HomeHero = () => {
  return (
    <Hero>
      <DeskWraper maxWidth="xl:max-w-1400">
        <div className="lg:flex lg:justify-between mt-28">
          <div className="pb-10 md:pr-20 md:pl-2 relative md:max-w-8/10 lg:max-w-lg xl:max-w-3xl xl:pr-20 lg:pr-3 mx-auto lg:mx-0 lg:pb xl:pb-16">
            <div className="py-6 flex flex-col gap-9">
              <h1 className="text-white bg-clip-text text-transparent bg-primary-chocolate md:leading-1.1 bg-grain font-fraunces text-6xl md:text-80 font-black mb-5">
                Your design <br className="hidden md:block" /> team for
                <br className="hidden md:block lg:hidden" /> the cost of a
                salary.
              </h1>
              <h4 className="text-30 font-fraunces font-semibold bg-clip-text text-transparent bg-grain bg-grain-size bg-hero-text mr-3 md:text-39">
                Full-service design support that growing B2B and non-profit
                organizations need. Are you strained because you should have a
                design team but you don&apos;t?
              </h4>
            </div>

            <div className="py-10 lg:pb-0">
              <Button fit={true} allowTextShadow={true}>
                See how we <br className="md:hidden" /> work & what we can
                <br className="md:hidden lg:block xl:hidden" /> do
              </Button>
            </div>
          </div>
          <div className="relative w-358 h-364 mx-auto md:w-593 lg:w-641 lg:h-804 xl:w-846 xl:h-860 md:h-603 bottom-0 -mb-20 lg:mt-auto lg:-mr-48 lg:-mb-32">
            <Image src="/images/hero-image.png" fill={true} alt="hero image" />
          </div>
        </div>
      </DeskWraper>
    </Hero>
  );
};

export default HomeHero;
