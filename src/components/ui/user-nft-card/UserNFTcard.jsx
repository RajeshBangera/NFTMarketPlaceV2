import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./user-nft-card.css";

import Modal from "../Modal/Modal";
import BuyNFT from "../Modal/BuyNFT";
import nftService from "../../../services/nftService";
import { SubscriptionsOutlined } from "@material-ui/icons";

const NftCard = (props) => {
  console.log("NFTCard here");
  console.log(props);
  const { title, pid, proposalIntrest, colateral, imgurl, uid, status } =
    props.item;
  const { name } = props.bitem;

  const [showModal, setShowModal] = useState(false);

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
              <p>{proposalIntrest} </p>
            </div>
          </div>
        </div>

        <div className=" mt-3 d-flex align-items-center justify-content-between">
          <button
            className="bid__btn d-flex align-items-center gap-1"
            onClick={() => setShowModal(true)}
          >
            <i class="ri-shopping-bag-line"></i> Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default NftCard;
