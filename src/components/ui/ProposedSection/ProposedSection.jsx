import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import UserNFTcard from "../user-nft-card/UserNFTcard";
import { NFT__DATA } from "../../../assets/data/data.js";

import "./Proposed-section.css";

const LiveAuction = () => {
  return (
    <section>
      <Container >
        <Row>
          <Col lg="12" className="mb-5">
            <div className="live__auction__top d-flex align-items-center justify-content-between ">
              <h3>Proposed Loan</h3>
            </div>
          </Col>

          {NFT__DATA.slice(0, 4).map((item) => (
            <Col lg="3" md="4" sm="6">
              <UserNFTcard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>

      <Container >
        <Row >
          <Col lg="12" className="mb-5">
            <div className="live__auction__top d-flex align-items-center justify-content-between ">
              <h3>Accepted Loan</h3>
            </div>
          </Col>

          {NFT__DATA.slice(0, 4).map((item) => (
            <Col lg="3" md="4" sm="6">
              <UserNFTcard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default LiveAuction;
