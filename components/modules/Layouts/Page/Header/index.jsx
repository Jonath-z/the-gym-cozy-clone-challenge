import Image from "next/image";
import React, { useEffect } from "react";
import useDetectScroll from "../../../hooks/useDetectScroll";

const Header = () => {
  const { isScrollingToBottom } = useDetectScroll();

  return (
    <div
      className={`bg-primary flex justify-center items-center py-5 gap-8  lg:justify-between lg:px-6 fixed top-0 z-20 left-0 right-0 w-full h-fit ${
        isScrollingToBottom
          ? "-translate-y-60 transition-all duration-1000 ease-in-out delay-200"
          : "translate-y-0 transition-all duration-1000 ease-in-out delay-200"
      }`}
    >
      <Image src="/vectors/logo.svg" width={100} height={68.66} alt="logo" />

      <nav className="hidden lg:block">
        <ul className="text-hero-text flex items-center gap-7 text-25 font-fraunces font-semibold">
          <li className="cursor-pointer hover:text-primary-chocolate hover:-translate-y-2 transition-all duration-500">
            Get Cozy
          </li>
          <li className="cursor-pointer hover:text-primary-chocolate hover:-translate-y-2 transition-all duration-500">
            What we do
          </li>
          <li className="cursor-pointer hover:text-primary-chocolate hover:-translate-y-2 transition-all duration-500">
            Our work
          </li>
          <li className="cursor-pointer hover:text-primary-chocolate hover:-translate-y-2 transition-all duration-500">
            The blog
          </li>
          <li className="cursor-pointer hover:text-primary-chocolate hover:-translate-y-2 transition-all duration-500">
            Say hi
          </li>
        </ul>
      </nav>
      <button className="flex flex-col gap-1 p-4 lg:hidden">
        <span className="h-smaller w-6 bg-hero-text rounded" />
        <span className="h-smaller w-6 bg-hero-text rounded" />
        <span className="h-smaller w-6 bg-hero-text rounded" />
      </button>
    </div>
  );
};

export default Header;
