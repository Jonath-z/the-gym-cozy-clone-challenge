import React from "react";
import useDetectScroll from "../modules/hooks/useDetectScroll";
import ArrowUp from "../modules/Icons/ArrowUp";

import Person from "../modules/Icons/Person";
import Page from "../modules/Layouts/Page";
import Prefooter from "../modules/Prefooter";
import About from "./About";
import AwardSecton from "./AwardSection";
import ClientSection from "./ClientSection";
import HappyClient from "./HappyClient";
import HomeHero from "./HomeHero";

const HomePage = () => {
  const { isOverMiddle } = useDetectScroll();

  return (
    <Page>
      <div className="fixed right-2 top-[50%] xl:top-[unset] xl:right-[unset]  xl:bottom-10 xl:left-10 z-30 bg-icon-chocolate p-2 rounded-full cursor-pointer hover:scale-110 transition-all duration-300">
        <Person className="w-6 h-6 fill-white" />
      </div>

      <div
        className={`${
          isOverMiddle
            ? "translate-y-0 transition-all duration-500 delay-150"
            : "translate-y-20 transition-all duration-500 delay-150"
        } hidden xl:block fixed bottom-10 right-10 z-30 bg-arrow-gray p-2 rounded-full cursor-pointer hover:bg-slate-500 transition-all duration-300`}
      >
        <ArrowUp />
      </div>
      <HomeHero />
      <AwardSecton />
      <ClientSection />
      <HappyClient />
      <About />
      <Prefooter />
    </Page>
  );
};

export default HomePage;
