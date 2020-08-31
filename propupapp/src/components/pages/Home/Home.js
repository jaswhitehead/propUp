import React from "react";
import "../Home/Home.css";
import pic1 from '../Home/pool.jpg';
import pic2 from '../Home/events2.jpg';
import pic3 from '../Home/property.jpg';
import Typical from 'react-typical';

const Home = () => {
  return(
    <div className="search">
      <div className="container is-centered">
        
        <p className="typed"><strong>PropUp Allows Me To:&nbsp;</strong> 
          <Typical
          loop={Infinity}
          wrapper="i"
          steps={[
            'Find the perfect vacation spot 🏄‍♂️',
            500,
            'Get the price I am willing to pay 💵',
            500,
            'Watch amazing events during my stay 👀',          
            500, 
            'Get fair market value from my listings 💰',
            500,                   
          ]}
          />
        </p>
      
      </div>
     
      <div className="container is-fluid is-mobile">
        <div className="notification">
        This container is <strong>fluid</strong> it will have a 32px gap on either side, on any
        viewport size.
        </div>
      </div>
      <div className="content-blocks is-mobile">
        <div className="columns is-mobile">
          <div className="column"><a href="/Renter">
            <h2 clasName="center"><u>Find Your Dream Vacation</u></h2>
            <img src={ pic1 } alt="" /></a>
          </div>
    
          <div className="column is-mobile"><a href="/Events">
            <h2 className="white-text"><u>Discover Things To Do</u></h2>
            <img src={ pic2 } alt="" /></a>
          </div>
          <div className="column is-mobile"><a href="/Owner">
            <h2 className="white-text"><u>List Your Property</u></h2>
            <img src={ pic3 } alt="" /></a>
          </div>
        </div>
      </div>
    </div>
  )
};



export default Home;