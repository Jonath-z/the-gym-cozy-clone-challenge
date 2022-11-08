import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Page = ({ children }) => {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default Page;
