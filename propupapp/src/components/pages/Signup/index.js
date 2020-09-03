import React from "react";
import './styles.css';

const Signup = () => {
  return(
    <div className="signup-container">    
      <div class="field">          
        <div class="control">
          <label class="label">Name</label>
          <input class="input" type="text" placeholder="Your Name" />
        </div>
      </div>

    <div class="field"> 
      <label class="label">Username</label>       
      <div class="control has-icons-left has-icons-right">        
        <input class="input" type="text" placeholder="Username" />
        <span class="icon is-small is-left">
          <i class="fas fa-user"></i>
        </span>
      </div>
    </div>
    
    <div class="field">
      <label class="label">Password</label>
      <div class="control has-icons-left has-icons-right">
          <input class="input" type="text" placeholder="Password" />
          <span class="icon is-small is-left">
            <i class="fas fa-key"></i>
          </span>
      </div>
    </div>

    <div class="field">
      <label class="label">Email</label>
      <div class="control has-icons-left has-icons-right">
          <input class="input" type="email" placeholder="Email Address" />
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
      </div>
    </div>
  
    <div class="field">
      <div class="control">
        <div class="select">
            <select>
              <option>Select dropdown</option>
              <option>I am a Renter</option>
              <option>I am an Owner</option>
            </select>
          </div>
      </div>
    </div>

      <div class="field">
        <label class="label">Message</label>
        <div class="control">
          <textarea class="textarea" placeholder="Your Message Goes Here"></textarea>
        </div>
      </div>

      <div class="field">
        <div class="control">
          <label class="checkbox">
            <input type="checkbox" />
            I agree to the <a href="/">terms and conditions</a>
          </label>
        </div>
      </div>

      <div class="field">
        <div class="control">
          <label class="label">Please E-Mail Me Updates</label>
          <label class="radio">
            <input type="radio" name="question" />
            Yes
          </label>
          <label class="radio">
            <input type="radio" name="question" />
            No
          </label>
        </div>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link">Submit</button>
        </div>
        <div class="control">
          <button class="button is-link is-light">Cancel</button>
        </div>
      </div>
    </div>
  )
};

export default Signup;
