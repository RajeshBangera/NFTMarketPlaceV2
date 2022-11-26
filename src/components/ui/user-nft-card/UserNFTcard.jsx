import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./user-nft-card.css";

import Modal from "../Modal/Modal";

const NftCard = (props) => {
  const { title, id, currbid, creatorimg, imgurl, creator, expiryDate } =
    props.item;

  const [showModal, setShowModal] = useState(false);

  return (
    <div className="single__nft__card">
      <div className="nft__img">
        <img src={imgurl} alt="" className="w-100" />
      </div>

      <div className="nft__content">
        <h5 className="nft__title">
          <Link to={`/market/${id}`}>{title}</Link>
        </h5>

        <div className="creator__info-wrapper d-flex gap-3">
          <div className="creator__info w-100 d-flex align-items-center justify-content-between">
            <div>
              <h6>Expiry Date By</h6>
              <p>{expiryDate}</p>
            </div>

            <div>
              <h6>Interest rate</h6>
              <p>{currbid} %</p>
            </div>
          </div>
        </div>

        <div className=" mt-3 d-flex align-items-center justify-content-between">
          <button
            className="bid__btn d-flex align-items-center gap-1"
            onClick={() => setShowModal(true)}
          >
            Proposed
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
