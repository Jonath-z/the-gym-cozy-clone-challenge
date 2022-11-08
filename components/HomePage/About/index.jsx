import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="relative">
      <video
        autoPlay={true}
        loop={true}
        className="absolute inset-0 w-full h-full object-cover -z-10"
      >
        <source src="/video/about.mp4" />
      </video>

      <div className="bg-black/80 py-20">
        <div className="relative w-60 h-50 md:w-140 md:h-120 mx-auto">
          <Image
            src="/vectors/sdd-logo.svg"
            alt="sdd logo"
            fill={true}
            objectFit="cover"
          />
        </div>

        <div className="pl-10 md:max-w-408 md:mx-auto">
          <h1 className="text-40 md:text-5xl font-fraunces font-bold text-hero-text leading-1.1 py-8">
            <span className="italic">Psst… </span>
            <br /> are you a <br /> designer?
          </h1>

          <p className="text-hero-text font-fraunces text-18 pr-5">
            Consider joining our{" "}
            <span className="text-primary-red">
              {" "}
              San Diego Design Designers{" "}
            </span>{" "}
            group. More than 700 people, we meet online via Slack and in person
            at social events around the city. It’s a great opportunity to share
            ideas, get inspired, find support, and celebrate great design.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
