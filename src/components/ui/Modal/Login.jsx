import React, { useState } from "react";
import nftService from "../../../services/nftService";
import { useDispatch, useSelector } from "react-redux";

import "./modal.css";

const Login = ({ setShowLoginModal }) => {
  const initialFormData = Object.freeze({
    email: "",
    password: "",
  });
  const [formData, updateFormData] = useState(initialFormData);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Register event triggered");
    nftService.loginUser(dispatch, formData);
  };

  return (
    <div className="modal__wrapper">
      <div className="single__modal">
        <span className="close__modal">
          <i class="ri-close-line" onClick={() => setShowLoginModal(false)}></i>
        </span>
        <h6 className="text-center text-light">Login</h6>

        <div className="input__item mb-4">
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email ID"
            onChange={handleChange}
          />
        </div>
        <div className="input__item mb-4">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter Password"
            onChange={handleChange}
          />
        </div>
        <button className="place__bid-btn" onClick={handleSubmit}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
