import React from "react";

import Icon1 from "../../images/team-1.png";
import Icon2 from "../../images/team-2.png";
import Icon3 from "../../images/team-3.png";
import {
  TeamContainer,
  TeamH1,
  TeamH3,
  TeamWrapper,
  TeamCard,
  TeamIcon,
  TeamP,
} from "./TeamElements";

function Team() {
  return (
    <TeamContainer id="team">
      <TeamH1>TEAM</TeamH1>
      <TeamWrapper>
        <TeamCard>
          <TeamP>CO-FOUNDER</TeamP>
          <TeamH3>MAPLE SYRUP GIANT</TeamH3>
          <TeamIcon src={Icon1} />
        </TeamCard>
        <TeamCard>
          <TeamP>CO-FOUNDER</TeamP>
          <TeamH3>PHANTOM</TeamH3>
          <TeamIcon src={Icon2} />
        </TeamCard>
        <TeamCard>
          <TeamP>LEAD ARTIST</TeamP>
          <TeamH3>PINK CUPCAKE</TeamH3>
          <TeamIcon src={Icon3} />
        </TeamCard>
      </TeamWrapper>
    </TeamContainer>
  );
}

export default Team;
