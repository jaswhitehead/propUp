import React from "react";
import "./Navbar.css";
import logo from '../toolbar/favicon.png';

const navbar = props => (

  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img src={ logo } alt="" />
        </a>

        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true">
            <a className="navbar-item" href="/Renter">Start Your Vacation</a>
          </span>
          <span aria-hidden="true">
            <a className="navbar-item" href="/Owner">List a Property </a>
          </span>          
          <span aria-hidden="true"></span>
        </a>
    </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
      <a className="navbar-item" href="/Renter">
        Start Your Vacation
      </a>
      <a className="navbar-item" href="/Owner">
        List a Property
      </a>
      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link" href="">
          More
        </a>
      <div className="navbar-dropdown">
          <a className="navbar-item" href="/Book">
            Events
          </a>
          <a className="navbar-item" href="/Signup">
            Get Started
          </a>
          <a className="navbar-item" href="/Chat">
            Chat
          </a>
          <hr className="navbar-divider" />
          <a className="navbar-item">
            Report an issue
          </a>
        </div>
      </div>
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <a className="button" href="/Signup">
            <strong>Sign up</strong>
          </a>
          <a className="button is-light" href="/Login">
            Log in
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>




);

export default navbar;