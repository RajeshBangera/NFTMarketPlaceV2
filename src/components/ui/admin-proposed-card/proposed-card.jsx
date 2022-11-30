import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./proposed-card.css";

import Modal from "../Modal/Modal";
import nftService from "../../../services/nftService";

const NftCard = (props) => {
  const { title, pid, proposalIntrest, colateral, imgurl } = props.item;
  const { name } = props.bitem;
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Approve NFT event triggered");
    console.log(e.target.id);
    if (e.target.name === "approve") {
      nftService.approveProposal(dispatch, pid, user.uid);
    }
  };
  return (
    <div className="single__nft__card">
      <div className="nft__img">
        <img src={colateral} alt="" className="w-100" />
      </div>

      <div className="nft__content">
        <h5 className="nft__title">
          <Link to={`/market/${pid}`}>{title}</Link>
        </h5>

        <div className="creator__info-wrapper d-flex gap-3">
          <div className="creator__img">
            <img src={colateral} alt="" className="w-100" />
          </div>

          <div className="creator__info w-100 d-flex align-items-center justify-content-between">
            <div>
              <h6>Created By</h6>
              <p>{name}</p>
            </div>

            <div>
              <h6>Interest rate</h6>
              <p>{proposalIntrest} NomuCoins</p>
            </div>
          </div>
        </div>

        <div className=" mt-3 d-flex align-items-center justify-content-between">
          <button
            className="bid__btn d-flex align-items-center gap-1"
            name="approve"
            id={pid}
            onClick={handleSubmit}
          >
            <i class="ri-shopping-bag-line"></i> Approve
          </button>
        </div>

        <div className=" mt-3 d-flex align-items-center justify-content-between">
          <button
            className="bid__btn d-flex align-items-center gap-1"
            onClick={() => setShowModal(false)}
          >
            <i class="ri-shopping-bag-line"></i> Reject
          </button>

          <span className="history__link">
            <Link to="#">Details</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default NftCard;
