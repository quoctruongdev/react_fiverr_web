import React from "react";
import AccordionsComponent from "../../_components/Accordion/Accordions";

export default function FAQ() {
  return (
    <div id="faq" className="faq__collapsable section">
      <h2 style={{ paddingBottom: " 25px" }} className="faq__title ">
        FAQ
      </h2>
      <AccordionsComponent />  
    </div>
  );
}
