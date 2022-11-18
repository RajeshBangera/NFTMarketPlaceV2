import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "./hero-section.css";

import heroImg from "../../assets/images/hero.jpg";
import Register from "./Modal/Register";
import Login from "./Modal/Login";

const HeroSection = () => {
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  return (
    <section className="hero__section">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2>
                Create and Mortgage your NFTs
                <span>Invest</span> in rare digital art
              </h2>
              <p>
                Nomura Brings you a Platform where you can Create your NFTs,
                Mortgage it and Invest in Others NFTs
              </p>

              <div className="hero__btns d-flex align-items-center gap-4">
                <button
                  className=" create__btn d-flex align-items-center gap-2"
                  onClick={() => setShowRegisterModal(true)}
                  value="Register"
                >
                  <i class="ri-ball-pen-line"></i>
                  <Link to="#">Register</Link>
                </button>
                <button
                  className=" create__btn d-flex align-items-center gap-2"
                  onClick={() => setShowLoginModal(true)}
                  value="Login"
                >
                  <i class="ri-ball-pen-line"></i>
                  <Link to="#">Login</Link>
                </button>
                {showRegisterModal && (
                  <Register setShowRegisterModal={setShowRegisterModal} />
                )}
                {showLoginModal && (
                  <Login setShowLoginModal={setShowLoginModal} />
                )}
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="hero__img">
              <img src={heroImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
