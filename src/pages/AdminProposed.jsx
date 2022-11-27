import React, { useState, useEffect } from "react";

import CommonSection from "../components/ui/Common-section/CommonSection";

import NftCard from "../components/ui/admin-proposed-card/proposed-card";

import { Container, Row, Col } from "reactstrap";
import { NFT__DATA } from "../assets/data/data.js";
import "../styles/market.css";
import nftService from "../services/nftService";

const admin = () => {
  return (
    <>
      <CommonSection title={"Submitted and Passed Proposals"} />

      <section>
        <Container>
          <Row>
            {/* {nft.nftData?.map((item) => (
              <Col lg="3" md="4" sm="6" className="mb-4" key={item.pid}>
                <NftCard item={item} />
              </Col>
            ))} */}

            <h3>All Submitted Proposals</h3>
            {NFT__DATA.slice(0, 4).map((item) => (
              <Col lg="3" md="4" sm="6" className="mb-4">
                <NftCard key={item.id} item={item} />
              </Col>
            ))}
          </Row>
          <Row>
            {/* {nft.nftData?.map((item) => (
              <Col lg="3" md="4" sm="6" className="mb-4" key={item.pid}>
                <NftCard item={item} />
              </Col>
            ))} */}

            <h3>All onGoing Loans</h3>
            {NFT__DATA.slice(0, 8).map((item) => (
              <Col lg="3" md="4" sm="6" className="mb-4">
                <NftCard key={item.id} item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default admin;
