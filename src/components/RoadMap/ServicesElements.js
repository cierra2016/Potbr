import React from "react";
import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";

export const ServicesContainer = ({ children, ...rest }) => (
  <div
    {...rest}
    className="pb-20 md:pb-10 flex flex-col justify-center items-center bg-black"
  >
    {children}
  </div>
);

export const ServicesWrapper = ({ children }) => (
  <div className="max-w-5xl my-0 mx-auto grid grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-4 items-center py-0 px-12 md:py-0 md:px-6">
    {children}
  </div>
);

export const ServicesCard = ({ children }) => (
  <div className="bg-white flex flex-col justify-start items-center rounded-xl max-h-80 p-8 shadow-lg transition-all ease-in-out duration-200 hover:transform-gpu hover:scale-105 hover:transition-all hover:ease-in-out hover:duration-200">
    {children}
  </div>
);

export const ServicesIcon = ({ src, alt, ...rest }) => (
  <img src={src} alt={alt} {...rest} className="h-40 w-40 mb-3" />
);

export const ServicesH1 = ({ children }) => (
  <h1 className="font-black mb-10">
    {children}
  </h1>
);

export const ServicesH2 = ({ children }) => (
  <h2 className="text-base font-black mb-3">{children}</h2>
);

export const ServicesP = ({ children }) => (
  <p className="text-base text-center">{children}</p>
);

export const HeroContainer = ({ children }) => (
  <div className="flex flex-wrap justify-center bg-black items-center max-w-2xl px-4">
    {children}
  </div>
);

export const TeamWrapper = ({ children }) => (
  <div className="max-w-5xl w-4/5 my-0 mx-auto grid xl:grid-cols-2 md:grid-cols-1 items-center py-0 px-12 md:py-0 md:px-6">
    {children}
  </div>
);

export const TeamCard = ({ children }) => (
  <div className="flex flex-col justify-start items-center rounded-xl max-h-80 p-4 shadow-lg">
    {children}
  </div>
);
export const HeroBg = ({ children }) => (
  <div className="flex flex-row min-w-md">
    {children}
  </div>
);

export const VideoBg = (props) => (
  <video {...props} className="object-cover bg-gray-900 " />
);
export const VideoGif = (props) => (
  <img {...props} className="object-cover bg-gray-900 " />
);

export const HeroContent = ({ children }) => (
  <div className="z-3 max-w-screen-xl absolute py-2 px-6 flex flex-col items-center">
    {children}
  </div>
);

export const ArrowForward = () => <MdArrowForward className="ml-2 text-xl" />;

export const ArrowRight = () => (
  <MdKeyboardArrowRight className="ml-2 text-xl" />
);
