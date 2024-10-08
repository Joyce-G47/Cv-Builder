import React, { useState } from "react";
import LoginPage from "../../loginPage/LoginPage";
import RegisterPage from "../../registerpage/RegisterPage";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleRegister = () => {
    setShowRegister(!showRegister);
    setShowLogin(false);
  };

  const toggleLogin = () => {
    setShowLogin(!showLogin);
    setShowRegister(false);
  };

  return (
    <div className="headerpage">
      <header className="header">
        <div className="container">
          <div className="nav-logo">
            <div className="logo">
              <h1>CV Builder</h1>
            </div>
            <div className="menu-icon" onClick={toggleMenu}>
              <FontAwesomeIcon icon={faBars} />
            </div>
            
            <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
              <ul>
                <li>
                  <a href="#Home">
                    <i className="fas fa-home"></i> Home
                  </a>
                </li>
                <li>
                  <a href="#CVLetter">
                    <i className="fas fa-file-alt"></i> CV Builder
                  </a>
                </li>
                <li>
                  <a href="#CoverLetter">
                    <i className="fas fa-envelope"></i> Cover Letter
                  </a>
                </li>
                <li>
                  <a href="#contact-us">
                    <i className="fas fa-phone"></i> Contact
                  </a>
                </li>
                <li className="login-button">
                  <button onClick={toggleLogin}>
                    <i className="fas fa-sign-in-alt"></i> Login
                  </button>
                </li>
                <li className="signup-button">
                  <button onClick={toggleRegister}>
                    <i className="fas fa-user-plus"></i> Sign Up
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Render the Registration and Login pop-ups conditionally */}
      {showRegister && (
        <div className="popup">
          <div className="popup-content">
            <button className="close-popup" onClick={toggleRegister}>
              <FontAwesomeIcon icon={faXmark} />
            </button>
            <RegisterPage onSwitchToLogin={toggleLogin} />
          </div>
        </div>
      )}

      {showLogin && (
        <div className="popup">
          <div className="popup-content">
            <button className="close-popup" onClick={toggleLogin}>
              <FontAwesomeIcon icon={faXmark} />
            </button>
            <LoginPage onSwitchToRegister={toggleRegister} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
