import React from "react";

export const HeroContainer = ({ children }) => (
  <div className="flex justify-center bg-black items-center px-4 h-800 h-screen relative">
    {children}
  </div>
);

export const HeroBg = ({ children }) => (
  <div className="absolute inset-0 w-full h-full overflow-hidden">
    {children}
  </div>
);

export const VideoBg = (props) => (
  <video {...props} className="w-full h-full object-cover bg-gray-900" />
);
export const VideoGif = (props) => (
  <img {...props} className="w-full h-full object-cover bg-gray-900" />
);
