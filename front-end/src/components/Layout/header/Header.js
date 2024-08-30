import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
              <i className="fas fa-bars"></i>
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
                  <button>
                    <i className="fas fa-sign-in-alt"></i> Login
                  </button>
                </li>
                <li className="signup-button">
                  <button>
                    <i className="fas fa-user-plus"></i> SignUp
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
