import React from "react";
import {
  NavBtn,
  NavBtnLink,
  ServicesContainer,
  ServicesH1,
  ServicesP,
} from "./ServicesElements";
import { faqObj } from './Data';

function Faq() {
  return (
    <ServicesContainer id="faq">
      <ServicesH1>FAQ</ServicesH1>
      {
        faqObj.map(faq => faq? (<ServicesP>{faq}</ServicesP>):(<br />))
      }
      <NavBtn>
        <NavBtnLink to="/">
          Back
        </NavBtnLink>
      </NavBtn>
    </ServicesContainer>
  );
}

export default Faq;
