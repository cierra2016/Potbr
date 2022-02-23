// import React from "react";
import {
  ServicesContainer,
  // ServicesStep,
  // ServicesCard,
  // ServicesInCardHeader,
  // ServicesInCardContent,
  ServicesH1,
  // ServicesH2,
  // ServicesP,
  // ServicesInLine,
  HeroContainer,
  HeroBg,
  // VideoBg,
  VideoGif,
} from "./ServicesElements";
// import LoadmapVid from '../../videos/loadmap.mp4'
import LoadmapVid from '../../videos/loadmap.gif'

function RoadMap() {
  return (
    <ServicesContainer id="roadmap">
      <ServicesH1>ROADMAP</ServicesH1>
      <HeroContainer>
        <HeroBg>
          <VideoGif src={LoadmapVid} />
        </HeroBg>
      </HeroContainer>
    </ServicesContainer>
    // <ServicesContainer id="roadmap">
    //   <ServicesStep>
    //     <ServicesInLine />
    //     <ServicesCard>
    //       <ServicesInCardHeader>
    //         <ServicesH1>01</ServicesH1>
    //       </ServicesInCardHeader>
    //       <ServicesInCardContent>
    //         <ServicesH2>Insert: text</ServicesH2>
    //         <ServicesP>INSERT: TEXT</ServicesP>
    //       </ServicesInCardContent>
    //     </ServicesCard>
    //   </ServicesStep>
    //   <ServicesStep>
    //     <ServicesInLine />
    //     <ServicesCard>
    //       <ServicesInCardHeader>
    //         <ServicesH1>02</ServicesH1>
    //       </ServicesInCardHeader>
    //       <ServicesInCardContent>
    //         <ServicesH2>Insert: text</ServicesH2>
    //         <ServicesP>INSERT: TEXT</ServicesP>
    //       </ServicesInCardContent>
    //     </ServicesCard>
    //   </ServicesStep>
    //   <ServicesStep>
    //     <ServicesInLine />
    //     <ServicesCard>
    //       <ServicesInCardHeader>
    //         <ServicesH1>03</ServicesH1>
    //       </ServicesInCardHeader>
    //       <ServicesInCardContent>
    //         <ServicesH2>Insert: text</ServicesH2>
    //         <ServicesP>INSERT: TEXT</ServicesP>
    //       </ServicesInCardContent>
    //     </ServicesCard>
    //   </ServicesStep>
    // </ServicesContainer>
  );
}

export default RoadMap;
