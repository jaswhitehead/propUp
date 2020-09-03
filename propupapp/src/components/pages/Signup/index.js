import React from "react";
import './styles.css';

const Signup = () => {
  return(
    <div className="signup-container">    
      <div className="field">          
        <div className="control">
          <label className="label">Name</label>
          <input className="input" type="text" placeholder="Your Name" />
        </div>
      </div>

    <div className="field"> 
      <label className="label">Username</label>       
      <div className="control has-icons-left has-icons-right">        
        <input className="input" type="text" placeholder="Username" />
        <span className="icon is-small is-left">
          <i className="fas fa-user"></i>
        </span>
      </div>
    </div>
    
    <div className="field">
      <label className="label">Password</label>
      <div className="control has-icons-left has-icons-right">
          <input className="input" type="text" placeholder="Password" />
          <span className="icon is-small is-left">
            <i className="fas fa-key"></i>
          </span>
      </div>
    </div>

    <div className="field">
      <label className="label">Email</label>
      <div className="control has-icons-left has-icons-right">
          <input className="input" type="email" placeholder="Email Address" />
          <span className="icon is-small is-left">
            <i className="fas fa-envelope"></i>
          </span>
      </div>
    </div>
  
    <div className="field">
      <div className="control">
        <div className="select">
            <select>
              <option>Select dropdown</option>
              <option>I am a Renter</option>
              <option>I am an Owner</option>
            </select>
          </div>
      </div>
    </div>

      <div className="field">
        <label className="label">Message</label>
        <div className="control">
          <textarea className="textarea" placeholder="Your Message Goes Here"></textarea>
        </div>
      </div>

      <div className="field">
        <div className="control">
          <label className="checkbox">
            <input type="checkbox" />
            I agree to the <a href="/">terms and conditions</a>
          </label>
        </div>
      </div>

      <div className="field">
        <div className="control">
          <label className="label">Please E-Mail Me Updates</label>
          <label className="radio">
            <input type="radio" name="question" />
            Yes
          </label>
          <label className="radio">
            <input type="radio" name="question" />
            No
          </label>
        </div>
      </div>

      <div className="field is-grouped">
        <div className="control">
          <button className="button is-link">Submit</button>
        </div>
        <div className="control">
          <button className="button is-link is-light">Cancel</button>
        </div>
      </div>
    </div>
  )
};

export default Signup;
