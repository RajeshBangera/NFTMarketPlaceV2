import React from "react";

import "./modal.css";

const Register = ({ setShowRegisterModal }) => {
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
            type="text"
            name="userid"
            id="userid"
            placeholder="Enter User ID"
          />
        </div>
        <div className="input__item mb-4">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter Password"
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
        <button className="place__bid-btn">Register</button>
      </div>
    </div>
  );
};

export default Register;
