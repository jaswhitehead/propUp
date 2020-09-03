import React from "react";
import './styles.css';

const Owner = () => {
  return (
    <div className='hero'>
      <div className="columns is-mobile">
        <div className="column">
          <div class="field">            
            <div class="control">
              <label class="label">Property Name</label>
              <input class="input" type="text" placeholder="Sherwood Forest Getaway" />
            </div>
          </div>
        </div>
     
      <div className="column">
        <div class="field">          
          <div class="control">
            <label class="label">Street Address</label>
            <input class="input" type="text" placeholder="e.g 123 Spooner St." />
          </div>
        </div>
      </div>

      <div className="column">
        <div class="field">          
          <div class="control">
            <label class="label">State Drop Down Will Go Here</label>
            <input class="input" type="email" placeholder="Please Choose Your State" />
          </div>
        </div>        
      </div>

      <div className="column">
        <div class="field">
          <div class="control">
            <label class="label">Zip Code</label>
            <input class="input" type="email" placeholder="37129" />
          </div>
        </div>        
      </div>

    </div>  

    <div className="columns is-mobile">
        <div className="column">
          <div class="field">            
            <div class="control">
              <label class="label">Desired Starting Bid (per night)</label>
              <input class="input" type="text" placeholder="$300" />
            </div>
          </div>
        </div>
     
      <div className="column">
        <div class="field">
          <div class="control">
            <label class="label">Picture Upload Will Go Here</label>
            <input class="input" type="text" placeholder="Upload my images" />
            <button class="button">Upload Images</button>
          </div>
        </div>
      </div>

      <div className="column">
        <div class="field">          
          <div class="control">
            <label class="label">Property Description</label>
            <textarea class="textarea" placeholder="Textarea"></textarea>
          </div>
        </div>
      </div>
    </div>  

    </div>
  )
};

export default Owner;
