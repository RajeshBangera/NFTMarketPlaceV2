import { color } from "@mui/system";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import nftService from "../../../services/nftService";
import "./modal.css";

const BuyNFT = ({ setShowModal }) => {
  return (
    <div className="modal__wrapper">
      <div className="single__modal" style={{}}>
        <span className="close__modal">
          <i class="ri-close-line" onClick={() => setShowModal(false)}></i>
        </span>
        <h6 className="text-center text-light">Buy NomuCoins</h6>
        <div className=" d-flex align-items-center justify-content-between">
          <p>Exchange rate: 1 USD = 1 NomuCoins</p>
        </div>
        <div className=" d-flex align-items-center justify-content-between">
          <p>Coins to Buy</p>
        </div>

        <div className="input__item mb-3">
          <input
            type="number"
            name="amount"
            id="amount"
            placeholder="Enter amount to buy"
          />
        </div>
        <br />

        <button className="place__bid-btn">Buy Coins</button>
        <div style={{ color: "white" }}></div>
      </div>
    </div>
  );
};
export default BuyNFT;
