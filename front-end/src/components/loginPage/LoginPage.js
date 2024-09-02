// src/components/pages/loginpage/LoginPage.js

import React, { useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./LoginPage.css";


const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,24}$/;

const LoginPage = () => {
  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [validName, setValidName] = useState(false);
  const [validPwd, setValidPwd] = useState(false);

  // Validate username and password
  useEffect(() => {
    setValidName(USER_REGEX.test(user));
    setValidPwd(PWD_REGEX.test(pwd));
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your login logic here
  };

  return (
    <section className="login-section">
      <form onSubmit={handleSubmit} className="login-form">
        <h1>Login</h1>

        <label htmlFor="username">
          Username:
          <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
          <FontAwesomeIcon icon={faTimes} className={validName || !user ? "hide" : "invalid"} />
        </label>
        <input
          type="text"
          id="username"
          onChange={(e) => setUser(e.target.value)}
          value={user}
          required
          aria-invalid={validName ? "false" : "true"}
          aria-describedby="uidnote"
        />
        <p id="uidnote" className={user && !validName ? "instructions" : "offscreen"}>
          <FontAwesomeIcon icon={faInfoCircle} />&nbsp;
          4 to 24 characters.<br />
          Must begin with a letter.<br />
          Letters, numbers, underscores, hyphens allowed.
        </p>

        <label htmlFor="password">
          Password:
          <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
          <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} />
        </label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPwd(e.target.value)}
          value={pwd}
          required
          aria-invalid={validPwd ? "false" : "true"}
          aria-describedby="pwdnote"
        />
        <p id="pwdnote" className={pwd && !validPwd ? "instructions" : "offscreen"}>
          <FontAwesomeIcon icon={faInfoCircle} />&nbsp;
          8 to 24 characters.<br />
          Must include uppercase and lowercase letters, and a number.
        </p>

        <button disabled={!validName || !validPwd}>Login</button>

        <p>Don't have an Account? <Link to="/RegisterPage">Sinup Here </Link></p>
      </form>
    </section>
  );
};

export default LoginPage;
