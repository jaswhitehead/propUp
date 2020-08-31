import React from "react";
import './Login.css';

const Login = () => {
  return(
    <>
    <div className="login-container">
      <h3>Welcome Back! Please Sign in Below</h3>
    </div>

    <div className="form">
    <div className="field">
    <p class="control has-icons-left has-icons-right">
      <input className="input" type="email" placeholder="Email" />
      <span className="icon is-small is-left">
        <i className="fas fa-envelope"></i>
      </span>
      <span className="icon is-small is-right">
        <i className="fas fa-check"></i>
      </span>
    </p>
  </div>
  <div className="field">
    <p class="control has-icons-left">
      <input className="input" type="password" placeholder="Password" />
      <span className="icon is-small is-left">
        <i className="fas fa-lock"></i>
      </span>
    </p>
  </div>
  <div className="field">
    <p className="control">
      <button className="button">
        Login
      </button>
    </p>
  </div>
  </div>
  </>
  )
};

export default Login;