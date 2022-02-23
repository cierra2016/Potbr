import React from "react";
import { data } from "./Data";
import {
  ServicesCard,
  ServicesContainer,
  ServicesH1,
  ServicesP
} from "./ServicesElements";

function Origins() {
  return (
    <ServicesContainer id="origins">
      <ServicesH1>ORIGINS</ServicesH1>
      <ServicesCard>
        {
          data.map((origin, i) => origin? (<ServicesP key={i}>{origin}</ServicesP>):(<br key={i}/>))
        }
      </ServicesCard>
    </ServicesContainer>
  );
}

export default Origins;
