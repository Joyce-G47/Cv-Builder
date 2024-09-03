import React, { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./RegisterPage.css";
import axios from 'axios';

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const RegisterPage = ({ onSwitchToLogin }) => {
  const nameRef = useRef();
  const errRef = useRef();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  
  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg('');
  }, [name, email, pwd, matchPwd]);

  const handleRegister = async (e) => {
    e.preventDefault();
    setErrMsg('');

    
    try {
      const response = await axios.post('/register', {
        name, 
        email,
        password: pwd,
      });

      if (response.data.token){
        localStorage.setItem('token', response.data.token);
        alert('Signup successful!');
      }
      else{
        setErrMsg('Register failed')
      }
    } catch (error) {
      setErrMsg('Server error: ' + (error.response?.data?.msg || error.message));
    }
  };

  return (
    <section className="register-section">
      {success ? (
        <h1>Registration successful!</h1>
      ) : (
        <form onSubmit={handleRegister} className="register-form">
          <h1>Register</h1>

          <label htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            id="name"
            ref={nameRef}
            autoComplete="off"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />

          <label htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            id="email"
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />

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
            onFocus={() => setPwdFocus(true)}
            onBlur={() => setPwdFocus(false)}
          />
          <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
            <FontAwesomeIcon icon={faInfoCircle} />&nbsp;
            8 to 24 characters.<br />
            Must include uppercase and lowercase letters, a number, and a special character.<br />
            Allowed special characters: <span aria-label="exclamation mark">!</span>
            <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span>
            <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
          </p>

          <label htmlFor="confirm_pwd">
            Confirm Password:
            <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "valid" : "hide"} />
            <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hide" : "invalid"} />
          </label>
          <input
            type="password"
            id="confirm_pwd"
            onChange={(e) => setMatchPwd(e.target.value)}
            value={matchPwd}
            required
            aria-invalid={validMatch ? "false" : "true"}
            aria-describedby="confirmnote"
            onFocus={() => setMatchFocus(true)}
            onBlur={() => setMatchFocus(false)}
          />
          <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
            <FontAwesomeIcon icon={faInfoCircle} />&nbsp;
            Must match the first password input field.
          </p>

          <button disabled={!name || !email || !validPwd || !validMatch ? true : false}>Sign Up</button>
          <p>
            Already have an Account?{" "}
            <span onClick={onSwitchToLogin} className="login-link">
              Login Here
            </span>
          </p>
        </form>
      )}
    </section>
  );
};

export default RegisterPage;
