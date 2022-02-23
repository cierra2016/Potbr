import React from "react";

export const TeamContainer = ({ children, ...rest }) => (
  <div
    {...rest}
    className="pb-20 md:pb-10 flex flex-col justify-center items-center bg-black"
  >
    {children}
  </div>
);

export const TeamWrapper = ({ children }) => (
  <div className="max-w-5xl w-4/5 my-0 mx-auto grid grid-cols-3 lg:grid-cols-2 md:grid-cols-1 items-center py-0 px-12 md:py-0 md:px-6">
    {children}
  </div>
);

export const TeamCard = ({ children }) => (
  <div className="flex flex-col justify-start items-center rounded-xl max-h-80 p-4 shadow-lg">
    {children}
  </div>
);

export const TeamIcon = ({ src, alt, ...rest }) => (
  <img src={src} alt={alt} {...rest} className="object-cover h-60 mb-3" />
);

export const TeamH1 = ({ children }) => (
  <h1 className="font-black">
    {children}
  </h1>
);

export const TeamH3 = ({ children }) => (
  <h3 className="text-base text-white font-black mb-3">{children}</h3>
);

export const TeamP = ({ children }) => (
  <p className="text-base text-white text-center">{children}</p>
);
