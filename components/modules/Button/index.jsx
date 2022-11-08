import React from "react";

const Button = ({ children, containsGrain = true, fit = false }) => {
  return (
    <button
      className={`uppercase font-poppins ${
        containsGrain && "bg-grain"
      } bg-dark-chocolate ${
        fit ? "w-fit px-10" : "w-full"
      } py-4 rounded-md text-hero-text bg-grain-size text-18 md:text-20 font-bold`}
    >
      {children}
    </button>
  );
};

export default Button;
