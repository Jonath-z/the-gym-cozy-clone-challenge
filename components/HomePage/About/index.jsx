import React, { useEffect, useRef } from "react";
import Image from "next/image";
import DeskWraper from "../../modules/Layouts/DeskWrapper";

const About = () => {
  return (
    <div className="relative">
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover -z-10"
      >
        <source src="/video/about.mp4" />
      </video>

      <div className="bg-black/80">
        <DeskWraper>
          <div className="py-20 lg:flex lg:justify-center xl:justify-around lg:px-16 lg:py-36">
            <div className="xl:w-4/5">
              <div className="relative w-60 h-50 md:w-140 md:h-120 xl:w-120 xl:h-101 mx-auto">
                <Image src="/vectors/sdd-logo.svg" alt="sdd logo" fill={true} />
              </div>
            </div>
            <div className="pl-10 md:max-w-408 md:mx-auto lg:max-w-xl lg:mx-0 lg:pl-0 xl:max-w-full ">
              <h1 className="text-40 md:text-5xl font-fraunces font-bold text-hero-text leading-1.1 py-8 lg:pt-0">
                <span className="italic">Psst… </span>
                <br /> are you a <br className="md:hidden lg:hidden" />
                designer?
              </h1>

              <p className="text-hero-text font-fraunces text-18 xl:text-20 pr-5 xl:mr-0">
                Consider joining our
                <span className="text-primary-red">
                  San Diego Design Designers
                </span>
                group. More than 700 people, we meet online via Slack and in
                person at social events around the city. It’s a great
                opportunity to share ideas, get inspired, find support, and
                celebrate great design.
              </p>
            </div>
          </div>
        </DeskWraper>
      </div>
    </div>
  );
};

export default About;
