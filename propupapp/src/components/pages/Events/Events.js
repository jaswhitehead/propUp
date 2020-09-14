import React from "react";
import './Events.css';
import "react-bulma-components/dist/react-bulma-components.min.css";
import Book from "../Book";

const Events = () => {
  return(
    <div className="hero">     
    <div className="container is-fluid is-mobile">
      <div className="notification">
        <div className="columns">
          <div className="column">
            <input className="input is-rounded" type="text" placeholder="Location" />
          </div>
          <div className="column">
            <Book />
          </div>
          <div className="column">
            <div className="dropdown">
              <div className="dropdown-trigger">
                <button className="button" aria-haspopup="true" aria-controls="dropdown-menu3">
                  <span>Add Guests</span>
                  <span className="icon is-small">
                    <i className="fas fa-angle-down" aria-hidden="true"></i>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> 
    )
};

export default Events;