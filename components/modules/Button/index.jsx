import React from "react";

const Button = ({
  children,
  containsGrain = true,
  fit = false,
  allowTextShadow = false,
}) => {
  return (
    <button
      className={`uppercase font-poppins 
        cursor-pointer relative after:content-[' ']
        after:absolute after:inset-0 after:bg-white
        after:opacity-0 hover:after:opacity-10
        bg-dark-chocolate after:rounded-lg after:transition-all after:duration-500
        py-6 rounded-lg text-hero-text
        bg-grain-size text-18 md:text-20 font-bold
        ${allowTextShadow && " drop-shadow"}
        ${containsGrain && "bg-grain"} 
        ${fit ? "w-fit px-10" : "w-full"} 
        `}
    >
      {children}
    </button>
  );
};

export default Button;
