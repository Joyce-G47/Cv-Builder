import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="headerpage">
      <header className="header">
        <div className="container">
          <div className="nav-logo">
            <div className="logo">
              <h1>CV Builder</h1>
            </div>
            <nav className="nav">
              <ul>
                <li>
                  <a href="#Home">Home</a>
                </li>
                <li>
                  <a href="#CVLetter">CV Builder</a>
                </li>
                <li>
                  <a href="#CoverLetter">Cover Letter</a>
                </li>
                <li>
                  <a href="#contact-us">Contact</a>
                </li>

                <li className="login-button">
                <button>Login</button>
                </li>
                <li className="signup-button">
                <button>SignUp</button>
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
