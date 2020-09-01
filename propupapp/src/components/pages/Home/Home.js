import React from "react";
import "../Home/Home.css";
import pic1 from '../Home/pool.jpg';
import pic2 from '../Home/events2.jpg';
import pic3 from '../Home/property.jpg';
import Typical from 'react-typical';
import Book from '../Book/Book';
import Location from '../../location/Location'

const Home = () => {
  return(
    <>
    <div className="hero is-mobile">     
      <div className="container is-fluid is-mobile">
        <div className="notification is-mobile">
          <div className="columns is-mobile">
            <div className="column is-mobile">
            <label className="label">Choose a Location:</label>
              <Location />
            </div>
            <div className="column is-mobile">
            <label className="label">Pick your Departure and Arrival Dates:</label>
              <Book />
            </div>
            <div className="column is-mobile">
                <div className="field">
                  <label className="label">Add Guests:</label>
                  <div className="control">                    
                    <select className="box">
                      <option>Select #</option>
                      <option>1 Guest</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9+ Guests</option>
                    </select>                    
                  </div>
                </div>
              
            </div>
          </div>
        </div>
      </div>
    </div> 
    
    <div className="content-blocks is-mobile">
      <div className="columns is-mobile">
        <div className="column"><a href="/Renter">
          <h2 className="center"><u>Find Your Dream Vacation</u></h2>
          <img src={ pic1 } alt="Rent Me" /></a>
        </div>
  
        <div className="column is-mobile"><a href="/Events">
          <h2 className="white-text"><u>Discover Things To Do</u></h2>
          <img src={ pic2 } alt="Find Events" /></a>
        </div>
        <div className="column is-mobile"><a href="/Owner">
          <h2 className="white-text"><u>List Your Property</u></h2>
          <img src={ pic3 } alt="List a property" /></a>
        </div>
      </div>
    </div>
    

    <div className="container is-centered">        
      <p className="typed"><strong>PropUp Allows Me To:&nbsp;</strong> 
        <Typical
        loop={Infinity}
        wrapper="b"
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
  </>
  )
};



export default Home;