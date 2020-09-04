import React from "react";
import firebase from "../../auth";

const SignedInLinks = () => {
  const logout = () => {
    firebase.auth().signOut();
    // this.props.history.push("/Home");
    localStorage.clear();
  };
  return (
    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <a className="button is-light logged-in" href="/" onClick={logout}>
            Log out
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignedInLinks;
