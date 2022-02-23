import React from "react";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

export const Nav = ({ children, scrollNav }) => {
  const background = "bg-black";
  // const background = scrollNav ? "bg-black" : "bg-transparent";
  return (
    <nav
      className={`${background} h-20 -mt-20 flex justify-center items-center text-base sticky top-0 z-10 md:transition-all md:duration-500 md:ease-linear`}
    >
      {children}
    </nav>
  );
};

export const NavbarContainer = ({ children }) => (
  <div className="flex justify-between h-20 z-10 w-full py-0 px-24 lg:px-10 max-w-screen-lg">
    {children}
  </div>
);

export const NavLogo = ({ children, ...rest }) => (
  <LinkRouter
    {...rest}
    className="text-white justify-self-start cursor-pointer text-2xl flex items-center ml-0.5 font-bold no-underline"
  >
    {children}
  </LinkRouter>
);

export const MobileIcon = ({ children, ...rest }) => (
  <div
    {...rest}
    className="hidden md:block md:absolute md:top-0 md:right-0 md:transform md:-translate-x-full md:translate-y-2/3 md:text-3xl md:cursor-pointer md:text-white"
  >
    {children}
  </div>
);

export const NavMenu = ({ children }) => (
  <ul className="flex items-center list-none text-center md:hidden">
    {children}
  </ul>
);

export const NavItem = ({ children }) => <li className="h-20">{children}</li>;

export const NavLinks = ({ children, ...rest }) => (
  <LinkScroll
    {...rest}
    className="text-white flex items-center py-0 px-2 h-full cursor-pointer"
  >
    {children}
  </LinkScroll>
);

export const NavBtn = ({ children }) => (
  <nav className="flex text-white items-center md:hidden">{children}</nav>
);

export const NavBtnLink = ({ children, ...rest }) => (
  <LinkRouter {...rest} >
    {children}
  </LinkRouter>
);

export const NavLink = ({children, ...rest }) => (
  <a {...rest} target="_blank" className="ml-3">{children}</a>
);

export const NavIcon = ({children, ...rest }) => (
  <img {...rest} className="w-6">{children}</img>
);

export const NavLogoIcon = ({children, ...rest }) => (
  <img {...rest} className="w-20">{children}</img>
);

export const VideoBg = (props) => (
  <video {...props} className="object-cover bg-gray-900 w-14" />
);
