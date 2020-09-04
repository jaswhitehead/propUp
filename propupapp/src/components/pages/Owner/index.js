import React, { Component } from "react";
import "./styles.css";
import LoginString from "../Login/LoginStrings";

class Owner extends Component {
  componentDidMount() {
    if (!localStorage.getItem(LoginString.ID)) {
      this.props.history.push("/");
    }
  }

  render() {
    return (
      <div className="hero">
        <div className="columns is-mobile">
          <div className="column">
            <div className="field">
              <div className="control">
                <label className="label">Property Name</label>
                <input
                  className="input"
                  type="text"
                  placeholder="Sherwood Forest Getaway"
                />
              </div>
            </div>
          </div>

          <div className="column">
            <div className="field">
              <div className="control">
                <label className="label">Street Address</label>
                <input
                  className="input"
                  type="text"
                  placeholder="e.g 123 Spooner St."
                />
              </div>
            </div>
          </div>

          <div className="column">
            <div className="field">
              <div className="control">
                <label className="label">State Drop Down Will Go Here</label>
                <input
                  className="input"
                  type="email"
                  placeholder="Please Choose Your State"
                />
              </div>
            </div>
          </div>

          <div className="column">
            <div className="field">
              <div className="control">
                <label className="label">Zip Code</label>
                <input className="input" type="email" placeholder="37129" />
              </div>
            </div>
          </div>
        </div>

        <div className="columns is-mobile">
          <div className="column">
            <div className="field">
              <div className="control">
                <label className="label">
                  Desired Starting Bid (per night)
                </label>
                <input className="input" type="text" placeholder="$300" />
              </div>
            </div>
          </div>

          <div className="column">
            <div className="field">
              <div className="control">
                <label className="label">Picture Upload Will Go Here</label>
                <input
                  className="input"
                  type="text"
                  placeholder="Upload my images"
                />
                <button className="button">Upload Images</button>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="field">
              <div className="control">
                <label className="label">Property Description</label>
                <textarea
                  className="textarea"
                  placeholder="Textarea"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Owner;
