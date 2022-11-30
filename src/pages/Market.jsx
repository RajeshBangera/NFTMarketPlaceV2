import React, { useState, useEffect } from "react";

import CommonSection from "../components/ui/Common-section/CommonSection";

import NftCard from "../components/ui/Nft-card/NftCard";

import { Container, Row, Col } from "reactstrap";

import "../styles/market.css";

import { useDispatch, useSelector } from "react-redux";
import nftService from "../services/nftService";

const Market = () => {
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

  const [data, setData] = useState(nft.nftData);

  const handleCategory = () => {};

  const handleItems = () => {};

  // ====== SORTING DATA BY HIGH, MID, LOW RATE =========
  const handleSort = (e) => {
    const filterValue = e.target.value;

    if (filterValue === "high") {
      const filterData = nft.nftData.filter((item) => item.currentBid >= 6);

      setData(filterData);
    }

    if (filterValue === "mid") {
      const filterData = nft.nftData.filter(
        (item) => item.currentBid >= 5.5 && item.currentBid < 6
      );

      setData(filterData);
    }

    if (filterValue === "low") {
      const filterData = nft.nftData.filter(
        (item) => item.currentBid >= 4.89 && item.currentBid < 5.5
      );

      setData(filterData);
    }
  };

  return (
    <>
      <CommonSection title={"MarketPlace"} />

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <div className="market__product__filter d-flex align-items-center justify-content-between">
                <div className="filter__left d-flex align-items-center gap-5">
                  <div className="all__category__filter">
                    <select onChange={handleCategory}>
                      <option>All Categories</option>
                      <option value="art">Art</option>
                      <option value="music">Music</option>
                      <option value="domain-name">Domain Name</option>
                      <option value="virtual-world">Virtual World</option>
                      <option value="trending-card">Trending Cards</option>
                    </select>
                  </div>

                  <div className="all__items__filter">
                    <select onChange={handleItems}>
                      <option>All Items</option>
                      <option value="single-item">Single Item</option>
                      <option value="bundle">Bundle</option>
                    </select>
                  </div>
                </div>

                <div className="filter__right">
                  <select onChange={handleSort}>
                    <option>Sort By</option>
                    <option value="high">High Rate</option>
                    <option value="mid">Mid Rate</option>
                    <option value="low">Low Rate</option>
                  </select>
                </div>
              </div>
            </Col>
            {console.log(typeof borrower)}
            {console.log(borrower)}
            {nft.nftData
              .filter((item) => item.status === 1)
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

export default Market;
