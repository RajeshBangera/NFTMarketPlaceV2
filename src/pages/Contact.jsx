import React, { useState, useEffect } from "react";

import CommonSection from "../components/ui/Common-section/CommonSection";

import NftCard from "../components/ui/user-nft-card/UserNFTcard";

import { Container, Row, Col } from "reactstrap";
import { NFT__DATA } from "../assets/data/data.js";
import "../styles/market.css";
import { useDispatch, useSelector } from "react-redux";
import nftService from "../services/nftService";

const Admin = () => {
  const dispatch = useDispatch();
  const nft = useSelector((state) => state.nft);
  const user = useSelector((state) => state.user);
  const borrower = useSelector((state) => state.borrower);

  useEffect(() => {
    console.log("constructor called. Nft is loaded = :" + nft.isLoaded);
    console.log(user);
    console.log(borrower);
    if (!nft.isLoaded) {
      console.log(nft.nftData);
      console.log(user);
      nftService.loadAllNft(dispatch, user.uid);
    }
  });

  return (
    <>
      <CommonSection title={"Holdings And Proposed Loan"} />

      <section>
        <Container>
          <Row>
            {/* {nft.nftData?.map((item) => (
              <Col lg="3" md="4" sm="6" className="mb-4" key={item.pid}>
                <NftCard item={item} />
              </Col>
            ))} */}

            <h3 style={{ color: "white" }}>Holdings</h3>

            {nft.nftData
              .filter((item) => item.status === 0)
              .map((nitem) =>
                borrower.map(
                  (bitem) =>
                    nitem.uid === bitem.uid && (
                      <Col
                        lg="3"
                        md="4"
                        sm="6"
                        className="mb-4"
                        key={nitem.pid}
                      >
                        <NftCard key={nitem.pid} item={nitem} bitem={bitem} />
                      </Col>
                    )
                )
              )}
          </Row>
          <br></br>
          <Row>
            <h3 style={{ color: "white" }}>My Proposed Loans</h3>

            {nft.nftData
              .filter((item) => item.status === 0)
              .map((nitem) =>
                borrower.map(
                  (bitem) =>
                    nitem.uid === bitem.uid && (
                      <Col
                        lg="3"
                        md="4"
                        sm="6"
                        className="mb-4"
                        key={nitem.pid}
                      >
                        <NftCard key={nitem.pid} item={nitem} bitem={bitem} />
                      </Col>
                    )
                )
              )}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Admin;
