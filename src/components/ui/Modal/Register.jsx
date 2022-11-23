import React, { useState } from "react";
import nftService from "../../../services/nftService";
import { useDispatch, useSelector } from "react-redux";

import "./modal.css";

const Register = ({ setShowRegisterModal }) => {
  const initialFormData = Object.freeze({
    email: "",
    password: "",
    name: "",
    address: "",
  });
  const [formData, updateFormData] = useState(initialFormData);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Register event triggered");
    nftService.registerUser(dispatch, formData);
    console.log("Register event ended");
  };

  return (
    <div className="modal__wrapper">
      <div className="single__modal">
        <span className="close__modal">
          <i
            class="ri-close-line"
            onClick={() => setShowRegisterModal(false)}
          ></i>
        </span>
        <h6 className="text-center text-light">Register</h6>
        <div className="input__item mb-4">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
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
        <div className="input__item mb-4">
          <input
            type="password"
            name="repassword"
            id="repassword"
            placeholder="Repeat Password"
          />
        </div>
        <div className="input__item mb-4">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="User Name"
            onChange={handleChange}
          />
        </div>
        <div className="input__item mb-4">
          <input
            type="text"
            name="address"
            id="address"
            placeholder="Address"
            onChange={handleChange}
          />
        </div>

        <button className="place__bid-btn" onClick={handleSubmit}>
          Register
        </button>
        <div style={{ color: "white" }}>{user.registerMsg}</div>
      </div>
    </div>
  );
};

export default Register;
