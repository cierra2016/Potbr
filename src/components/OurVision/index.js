import React from "react";
import { data } from "./Data";
import {
  ServicesCard,
  ServicesContainer,
  ServicesH1,
  ServicesP
} from "./ServicesElements";

function OurVision() {
  return (
    <ServicesContainer id="ourvision">
      <ServicesH1>OUR VISION</ServicesH1>
      <ServicesCard>
        {
          data.map((origin, i) => origin? (<ServicesP key={i}>{origin}</ServicesP>):(<br key={i}/>))
        }
      </ServicesCard>
    </ServicesContainer>
  );
}

export default OurVision;
