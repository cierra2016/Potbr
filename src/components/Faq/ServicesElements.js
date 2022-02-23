import React from "react";
import { Link as LinkRouter } from "react-router-dom";

export const ServicesContainer = ({ children, ...rest }) => (
  <div
    {...rest}
    className="flex flex-col my-4 justify-center items-center bg-black"
  >
    {children}
  </div>
);

export const ServicesH1 = ({ children }) => (
  <h1 className="font-black mb-10">
    {children}
  </h1>
);

export const ServicesP = ({ children }) => (
  <p className="text-base text-center text-white">{children}</p>
);

export const NavBtn = ({ children }) => (
  <div className="flex text-indigo-600 text-xl  items-center">{children}</div>
);

export const NavBtnLink = ({ children, ...rest }) => (
  <LinkRouter {...rest} >
    {children}
  </LinkRouter>
);
