import React from "react";
import "./Footer.css";

const footer = () => {

return(
<footer className="footer">
<div class="columns is-mobile">
        <div class="column"><h5 class="white-text"><u><strong>Team Bio</strong></u></h5>
          <p class="grey-text text-lighten-4">We are a team of students from Vanderbilt Bootcamp working on
            this project like it's our full time job. We love to code and are always looking for better and 
            more innovatie ways to improve our applications.</p>
        </div>
  
        <div class="column"> <h5 class="white-text"><u><strong>Site Map</strong></u></h5>
          <ul>
            <li><a class="white-text" href="/Signup.js">Login / Sign Up</a></li>
            <li><a class="white-text" href="/owner.js">Property Owner</a></li>
            <li><a class="white-text" href="/renter.js">Renter</a></li>
            <li><a class="white-text" href="/">Who we are</a></li>               
          </ul>
        </div>
        <div class="column"> 
          <h5 class="white-text"><u><strong>Connect</strong></u></h5>
          <ul>
            <li><a class="white-text" target="blank" href="mailto:jaswhitehead@gmail.com">Email Us</a></li>
            <li><a class="white-text" target="blank"
                href="https://github.com/jaswhitehead/propUp">GitHub Repo</a></li>
            <li><a class="white-text" target="blank"
                href="https://bootcamps.vanderbilt.edu/coding/">Vanderbilt Bootcamp</a></li>
          </ul>
        </div>
      </div><hr></hr>
  <div className="content has-text-centered">
    <p>
      <strong>PropUp</strong> by <a href="https://github.com/jaswhitehead">JSON Whitehead, </a>
      <a href="https://github.com/jaswhitehead">Micah Lea, </a>
      <a href="https://github.com/jaswhitehead">Mason Shadrick &amp;</a>
      <a href="https://github.com/jaswhitehead">Chip Johnson</a>. The PropUp website content is &#169; 2020
    </p>
  </div>
</footer>

);
}
export default footer;