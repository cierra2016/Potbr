import React from "react";

import {
  HeroContainer,
  HeroBg,
  // VideoBg,
  VideoGif,
} from "./HeroElements";

// import Video from "../../videos/video.mp4";
import Video1 from "../../videos/video.gif";

function HeroSection() {

  return (
    <>
      <HeroContainer id="home">
        <HeroBg>
          {/* <VideoBg autoPlay loop muted src={Video} type="video/mp4" /> */}
          <VideoGif src={Video1} />
        </HeroBg>
      </HeroContainer>
    </>
  );
}

export default HeroSection;
