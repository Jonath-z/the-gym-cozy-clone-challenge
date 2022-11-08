import Image from "next/image";
import React from "react";
import Button from "../../modules/Button";
import Hero from "../../modules/Layouts/Hero";
import Wrapper from "../../modules/Layouts/Wrapper";

const HomeHero = () => {
  return (
    <Hero>
      <div className="pb-10 md:pr-20 md:pl-2 relative md:max-w-8/10 mx-auto">
        <div className="py-6 flex flex-col gap-9">
          <h1 className="text-white bg-clip-text text-transparent bg-primary-chocolate md:leading-1.1 bg-grain font-fraunces text-6xl md:text-80 font-black mb-5">
            Your design <br className="hidden md:block" /> team for
            <br className="hidden md:block" /> the cost of a salary.
          </h1>
          <h4 className="text-30 font-fraunces font-semibold bg-clip-text text-transparent bg-grain bg-grain-size bg-hero-text mr-3 md:text-39">
            Full-service design support that growing B2B and non-profit
            organizations need. Are you strained because you should have a
            design team but you don&apos;t?
          </h4>
        </div>

        <div className="py-10">
          <Button fit={true}>
            See how we <br className="md:hidden" /> work & what we can
            <br className="md:hidden" /> do
          </Button>
        </div>
      </div>
      <div className="relative w-358 h-364 mx-auto md:w-593 md:h-603 bottom-0 -mb-20">
        <Image
          src="/images/hero-image.png"
          objectFit="cover"
          fill={true}
          alt="hero image"
        />
      </div>
    </Hero>
  );
};

export default HomeHero;
