import React, { Component } from "react";
import "./Navbar.css";
import logo from "../toolbar/favicon.png";
import "react-bulma-components/dist/react-bulma-components.min.css";
import firebase from "../../auth/";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

// const links = firebase.auth().onAuthStateChanged(function (user) {
//   return user ? <SignedInLinks /> : <SignedOutLinks />;
// });

class navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      loggedOut: false,
    };
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(
      function (user) {
        if (user) {
          console.log("user signed in");
          this.setState({
            loggedIn: true,
          });
        } else {
          console.log("user signed out");
          this.setState({
            loggedOut: true,
          });
        }
      }.bind(this)
    );
  };

  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src={logo} width="35" height="28" alt="" />
          </a>

          <a
            role="button"
            class="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item" href="/Renter">
              Start Your Vacation&nbsp;&nbsp;
              <i class="fas fa-map-marked-alt"></i>
            </a>
            <a className="navbar-item" href="/Owner">
              List a Property&nbsp;&nbsp;<i class="fas fa-home"></i>
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
                <a className="navbar-item">Report an issue</a>
              </div>
            </div>
          </div>
          {this.state.loggedIn ? <SignedInLinks /> : <SignedOutLinks />}
        </div>
      </nav>
    );
  }
}

export default navbar;
