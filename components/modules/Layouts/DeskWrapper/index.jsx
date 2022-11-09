import React from "react";

const DeskWraper = ({ children, maxWidth = "xl:max-w-1200" }) => {
  return <div className={`${maxWidth} mx-auto`}>{children}</div>;
};

export default DeskWraper;
