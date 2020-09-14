import React, { Component } from "react";
import firebase from "../../auth";
import "react-bulma-components/dist/react-bulma-components.min.css";

class SignedInLinks extends Component {
  logout() {
    firebase.auth().signOut();
    // this.props.history.push("/Home");
    localStorage.clear();
  }
  render() {
    return (
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <a
              className="button is-light logged-in"
              href="/"
              onClick={this.logout}
            >
              Log out
            </a>

            <img
              className="ProfilePicture is-rounded"
              src={this.props.currentUserPhoto}
              alt=""
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SignedInLinks;
