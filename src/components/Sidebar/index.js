import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
  SideBarAnchor,
  SideBarIcon,
} from "./SidebarElements";
import discord from '../../images/discord.png'
import twitter from '../../images/twitter.png'
import { Wallet } from '../Connect'

function Sidebar({ isOpen, toggle }) {
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="mint" onClick={toggle}>
            MINT
          </SidebarLink>
          <SidebarLink to="origins" onClick={toggle}>
            ORIGINS
          </SidebarLink>
          <SidebarLink to="ourvision" onClick={toggle}>
            OUR VISION
          </SidebarLink>
          <SidebarLink to="roadmap" onClick={toggle}>
            ROADMAP
          </SidebarLink>
          <SidebarLink to="team" onClick={toggle}>
            TEAM
          </SidebarLink>
          <SidebarRoute to="/faq" onClick={toggle}>
            FAQ
          </SidebarRoute>
        </SidebarMenu>
        <SideBtnWrap>
          {/* <SideBtnWrap> */}
            <Wallet />
          {/* </SideBtnWrap> */}
          <SideBarAnchor href="https://twitter.com/POTBRNFT">
            <SideBarIcon src={twitter} alt="twitter" />
          </SideBarAnchor>
          <SideBarAnchor href="https://discord.gg/kEgDsS5a2z">
            <SideBarIcon src={discord} alt="discord" />
          </SideBarAnchor>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
}

export default Sidebar;
