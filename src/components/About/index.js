// import React from "react";

// import Icon0 from "../../images/about.png";
import Icon0 from "../../images/logo.png";
import Banner from "../../images/banner.png";
// import Icon1 from "../../images/info1.png";
// import Icon2 from "../../images/info2.png";
// import Icon3 from "../../images/info3.png";
// import Icon4 from "../../images/info4.png";

import {
  AboutContainer,
  // AboutH1,
  // AboutWrapper,
  AboutCard,
  AboutHeaderIcon,
  AboutIcon,
  AboutH2,
} from "./AboutElements";

function About() {
  return (
    <AboutContainer id="about">
      <AboutCard>
        <AboutHeaderIcon src={Icon0} />
      </AboutCard>
      <AboutCard>
        <AboutH2> Phantom of the Bank Rats are 4,444 randomly generated unique Phantom Rats on the Solana blockchain.</AboutH2>
        <AboutH2>This will be a stealth launch announced on our Discord. </AboutH2>
      </AboutCard>
      <AboutCard>
        <AboutIcon src={Banner} />
      </AboutCard>
      {/* <AboutWrapper>
        <AboutCard>
          <AboutIcon src={Icon1} />
        </AboutCard>
        <AboutCard>
          <AboutIcon src={Icon2} />
        </AboutCard>
        <AboutCard>
          <AboutIcon src={Icon3} />
        </AboutCard>
        <AboutCard>
          <AboutIcon src={Icon4} />
        </AboutCard>
      </AboutWrapper> */}
    </AboutContainer>
  );
}

export default About;
