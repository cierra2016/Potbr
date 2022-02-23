import React from "react";

export const ServicesContainer = ({ children, ...rest }) => (
  <div
    {...rest}
    className="pb-20 md:pb-10 flex flex-col justify-center items-center bg-black"
  >
    {children}
  </div>
);

export const ServicesCard = ({ children }) => (
  <div className="w-4/5 flex flex-col justify-start items-center p-8 shadow-lg">
    {children}
  </div>
);

export const ServicesH1 = ({ children }) => (
  <h1 className="font-black mb-10">
    {children}
  </h1>
);

export const ServicesP = ({ children, ...rest }) => (
  <p {...rest} className="text-base text-white font-bold text-center">{children}</p>
);
