import React from "react";

const Hero = ({ children }) => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-primary -z-10 rotate-180" />
      <div className="w-full h-full px-5">{children}</div>
    </div>
  );
};

export default Hero;
