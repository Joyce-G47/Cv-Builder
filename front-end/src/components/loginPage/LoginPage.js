// src/components/pages/loginpage/LoginPage.js
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import {useLogin} from '../../api/auth';
import "./LoginPage.css";
import axios from 'axios';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for email validation
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,24}$/;

const LoginPage = ({ onSwitchToRegister }) => {
  

  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [validPwd, setValidPwd] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState('');

  // Validate email and password
  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
    setValidPwd(PWD_REGEX.test(pwd));
  }, [email, pwd]);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validEmail || !validPwd) {
      setErrMsg("Invalid Entry");
      return;
    }

    try {
      const response = await axios.post('http://192.168.12.193:5000/api/login', {
        email: email,
        password: pwd,
      });
      if(response.data.token){
        localStorage.setItem("token", response.data.token);
        navigate("home");
      }
      else{
        setErrMsg("Login failed");
      }
    } catch (error) {
      setError("Server error: " + (error.response?.data?.msg || error.message));
    }
  };

  return (
    <section className="login-section">
      <form onSubmit={handleLogin} className="login-form">
        <h1>Login</h1>

        <label htmlFor="email">
          Email:
          <FontAwesomeIcon icon={faCheck} className={validEmail ? "valid" : "hide"} />
          <FontAwesomeIcon icon={faTimes} className={validEmail || !email ? "hide" : "invalid"} />
        </label>
        <input
          type="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
          aria-invalid={validEmail ? "false" : "true"}
          aria-describedby="emailnote"
        />
        <p id="emailnote" className={email && !validEmail ? "instructions" : "offscreen"}>
          <FontAwesomeIcon icon={faInfoCircle} />&nbsp;
          Please enter a valid email address.
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

        <button disabled={!validEmail || !validPwd}>Login</button>

        <p>
          Don't have an Account?{" "}
          <span onClick={onSwitchToRegister} className="register-link">
            Signup Here
          </span>
        </p>
      </form>
    </section>
  );
};

export default LoginPage;
