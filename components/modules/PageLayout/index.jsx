import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const PageLayout = ({ children }) => {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default PageLayout;
