import React from "react";
import './Events.css';
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
              <div className="dropdown-menu" id="dropdown-menu3" role="menu">
                <div className="dropdown-content">
                  <a href="#" className="dropdown-item">
                    Overview
                  </a>
                  <a href="#" className="dropdown-item">
                    Overview
                  </a>
                  <a href="#" className="dropdown-item">
                    Overview
                  </a>
                  <div className="dropdown-item">
                    1 Guest
                  </div>
                  <div className="dropdown-item">
                    2
                  </div>
                  <div className="dropdown-item">
                    3
                  </div>
                  <div className="dropdown-item">
                    4
                  </div>
                  <div className="dropdown-item">
                    5
                  </div>
                  <div className="dropdown-item">
                    6
                  </div>
                  <div className="dropdown-item">
                    7
                  </div>
                  <hr className="dropdown-divider" />
                  <div className="dropdown-item">
                    8 or more guests
                  </div>
                </div>
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