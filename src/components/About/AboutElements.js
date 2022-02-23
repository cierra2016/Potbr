import React from "react";

export const AboutContainer = ({ children, ...rest }) => (
  <div
    {...rest}
    className="pb-20 md:pb-10 flex flex-col justify-center items-center bg-black"
  >
    {children}
  </div>
);

export const AboutWrapper = ({ children }) => (
  <div className="grid grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 items-center py-0 px-12 md:py-0 md:px-6">
    {children}
  </div>
);

export const AboutCard = ({ children }) => (
  <div className="flex flex-col justify-start items-center p-4 shadow-lg">
    {children}
  </div>
);

export const AboutHeaderIcon = ({ src, alt, ...rest }) => (
  <img src={src} alt={alt} {...rest} className="h-80 mb-3" />
);

export const AboutIcon = ({ src, alt, ...rest }) => (
  <img src={src} alt={alt} {...rest} className="object-cover mb-3" />
);

export const AboutH1 = ({ children }) => (
  <h1 className="font-black mb-10">
    {children}
  </h1>
);

export const AboutH2 = ({ children }) => (
  <h2 className="text-base text-white font-black mb-3 text-center">{children}</h2>
);
