import React, { useRef } from "react";

import CommonSection from "../components/ui/Common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import ProposedSection from "../components/ui/ProposedSection/ProposedSection";
// import InvestmentSection from "../components/ui/InvestmentSection/InvestmentSection";

const Contact = () => {
  return (
    <>
      <CommonSection title="Proposed and Accepted Loan" />
      <section>
        <Container>
          <ProposedSection />
  
         </Container>
      </section>
    </>
  );
};

export default Contact;
