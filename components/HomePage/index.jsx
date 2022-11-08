import React from "react";
import Page from "../modules/Layouts/Page";
import Prefooter from "../modules/Prefooter";
import About from "./About";
import AwardSecton from "./AwardSection";
import ClientSection from "./ClientSection";
import HappyClient from "./HappyClient";
import HomeHero from "./HomeHero";

const HomePage = () => {
  return (
    <Page>
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
