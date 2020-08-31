import React from "react";
import "../Home/Home.css";
import pic1 from '../Home/pool.jpg';
import pic2 from '../Home/events2.jpg';
import pic3 from '../Home/property.jpg';

const Home = () => {
  return(
    <div className="Search">
      <h1>Content for the home page goes right here.</h1>
      <h1>Content for the home page goes right here.</h1>
      <h1>Content for the home page goes right here.</h1>
      <h1>Content for the home page goes right here.</h1>
      <h1>Content for the home page goes right here.</h1>
      <h1>Content for the home page goes right here.</h1>
      <h1>Content for the home page goes right here.</h1>
    <div className="container is-fluid">
      <div className="notification">
      This container is <strong>fluid</strong>: it will have a 32px gap on either side, on any
      viewport size.
      </div>
    </div>
    <div className="columns is-mobile">
        <div className="column"><a href="/Renter">
          <h2 clasName="center"><u>Find Your Dream Vacation</u></h2>
          <img src={ pic1 } alt="" /></a>
        </div>
  
        <div className="column"><a href="/Events">
          <h2 className="white-text"><u>Discover Things To Do</u></h2>
          <img src={ pic2 } alt="" /></a>
        </div>
        <div className="column"><a href="/Owner">
          <h2 className="white-text"><u>List Your Property</u></h2>
          <img src={ pic3 } alt="" /></a>
        </div>
      </div>

    </div>
  )
};

export default Home;