import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="bg-primary flex justify-center items-center py-5 gap-8">
      <Image src="/vectors/logo.svg" width={100} height={68.66} alt="logo" />
      <button className="flex flex-col gap-1 p-4">
        <span className="h-smaller w-6 bg-hero-text rounded" />
        <span className="h-smaller w-6 bg-hero-text rounded" />
        <span className="h-smaller w-6 bg-hero-text rounded" />
      </button>
    </div>
  );
};

export default Header;
