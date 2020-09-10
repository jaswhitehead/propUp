import React from "react";
import "react-bulma-components/dist/react-bulma-components.min.css";
import Typed from "./typed";
import "./styles.css";

const Feedback = () => {
    return (
    <div className="hero">
        <div className="notification feedback">
            <div className="field">
                <label class="label"><i class="fas fa-user"></i> Your Name:</label>
                <div className="control">
                    <input 
                        className="input" 
                        type="text" 
                        placeholder="John Doe..." 
                    />
                </div>
            </div>

            <div className="field">
                <label className="label"><i class="fas fa-envelope"></i> Email Address:</label>
                <div className="control">                        
                    <input 
                        className="input" 
                        type="email" 
                        placeholder="joesomebody@email.net" 
                    />
                </div>
            </div>

            <div className="field">
                <label className="label">Subject</label>
                <div className="control">
                    <div className="select">
                        <select>
                            <option>Select dropdown</option>
                            <option>General Inquiry</option>
                            <option>Issue with the Website</option>
                            <option>Employment Opportunities</option>
                            <option>Other</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="field">
                <label className="label"><i class="fas fa-pencil-alt"></i> Message:</label>
                <div className="control">                    
                    <textarea class="textarea" placeholder=""></textarea>                    
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
    </div>
    )
};

export default Feedback;