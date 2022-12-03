import { color } from "@mui/system";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import nftService from "../../../services/nftService";
import "./modal.css";

const BuyNFT = ({ setShowModal, item, bitem }) => {
  const dispatch = useDispatch();
  const nft = useSelector((state) => state.nft);
  const user = useSelector((state) => state.user);
  const {
    title,
    pid,
    proposalIntrest,
    colateral,
    imgurl,
    uid,
    proposalAmount,
  } = item;
  const initialFormData = Object.freeze({
    amount: 0,
    pid: pid,
  });
  const [formData, updateFormData] = useState(initialFormData);
  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Buy NFT triggered");
    nftService.buyNft(dispatch, formData, user.uid);
  };
  console.log("test" + title);
  console.log(item);
  console.log(bitem);
  console.log(user);
  return (
    <div className="modal__wrapper">
      <div className="single__modal">
        <span className="close__modal">
          <i class="ri-close-line" onClick={() => setShowModal(false)}></i>
        </span>
        <h6 className="text-center text-light">Buy : {title}</h6>
        <div className=" d-flex align-items-center justify-content-between">
          <p>Proposal ID</p>
          <span className="money">{pid}</span>
        </div>
        <div className=" d-flex align-items-center justify-content-between">
          <p>Proposal Amt</p>
          <span className="money">{proposalAmount}</span>
        </div>

        <div className=" d-flex align-items-center justify-content-between">
          <p>Service Fee</p>
          <span className="money">1</span>
        </div>

        <div className="input__item mb-3">
          <input
            type="number"
            name="amount"
            id="amount"
            placeholder="Enter amount ot buy"
            onChange={handleChange}
          />
        </div>

        <button className="place__bid-btn" onClick={handleSubmit}>
          Buy NFT
        </button>
        <div style={{ color: "white" }}>{user.buyNftMsg}</div>
      </div>
    </div>
  );
};
export default BuyNFT;
