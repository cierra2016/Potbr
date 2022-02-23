import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  // NavBtnLink,
  NavLink,
  NavIcon,
  NavLogoIcon,
} from "./NavbarElements";
import POTBR from '../../images/POTBR.png'
import discord from '../../images/discord.png'
import twitter from '../../images/twitter.png'
import { Wallet } from "../Connect";

function Navbar({ toggle }) {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const scrollProps = {
    // activeClass: "border-solid border-b-4 border-green-500",
    smooth: true,
    duration: 1000,
    spy: true,
    exact: "true",
    offset: -80,
  };

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            <NavLogoIcon src={POTBR} />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="mint" {...scrollProps}>
                MINT
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="origins" {...scrollProps}>
                ORIGINS
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="ourvision" {...scrollProps}>
                OUR VISION
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="roadmap" {...scrollProps}>
                ROADMAP
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="team" {...scrollProps}>
                TEAM
              </NavLinks>
            </NavItem>
            {/* <NavBtn>
              <NavBtnLink to="/faq">
                FAQ
              </NavBtnLink>
            </NavBtn> */}
          </NavMenu>
          <NavMenu>
            <NavBtn>
              <Wallet />
            </NavBtn>
            <NavBtn>
              <NavLink href="https://twitter.com/POTBRNFT">
                <NavIcon src={twitter} alt="twitter" />
              </NavLink>
            </NavBtn>
              <NavLink href="https://discord.gg/kEgDsS5a2z">
                <NavIcon src={discord} alt="discord" />
              </NavLink>
            <NavBtn>
            </NavBtn>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default Navbar;
