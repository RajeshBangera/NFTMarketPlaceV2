import React from "react";

import "./modal.css";

const Login = ({ setShowLoginModal }) => {
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
        <button className="place__bid-btn">Login</button>
      </div>
    </div>
  );
};

export default Login;
