import React, { Component } from "react";
import "./styles.css";
import "react-bulma-components/dist/react-bulma-components.min.css";
import Modal from 'react-modal';
import LoginString from "../Login/LoginStrings";
import { Link } from "react-router-dom";
import firebase from "../../../auth/";

{/*
Modal.setAppElement('#Signup')
const [modalIsOpen, setModalIsOpen] = React.useState(false)*/}


class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: "",
      error: null,
      username: "",
      selector: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
    console.log(event.target.value);
  }

  async handleSubmit(event) {
    const { name, password, email, username, selector } = this.state;
    event.preventDefault();
    try {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(async (result) => {
          firebase
            .firestore()
            .collection("users")
            .add({
              name,
              id: result.user.uid,
              email,
              password,
              username,
              selector,
              URL: "",
              description: "",
              messages: [{ notificationId: "", number: 0 }],
            })
            .then((docRef) => {
              localStorage.setItem(LoginString.ID, result.user.uid);
              localStorage.setItem(LoginString.Name, name);
              localStorage.setItem(LoginString.Email, email);
              localStorage.setItem(LoginString.Password, password);
              localStorage.setItem(LoginString.PhotoURL);
              localStorage.setItem(LoginString.Username, username);
              localStorage.setItem(LoginString.UPLOAD_CHANGED, "state_changed");
              localStorage.setItem(LoginString.Selector, selector);
              localStorage.setItem(LoginString.Description, "");
              localStorage.setItem(LoginString.FirebaseDocumentId, docRef.id);

              if (this.state.selector === "renter") {
                this.props.history.push("/Renter");
              }
              if (this.state.selector === "owner") {
                this.props.history.push("/Owner");
              }

              this.setState({
                email: "",
                password: "",
                name: "",
                error: null,
                username: "",
                selector: "",
                URL: "",
              });
            })
            .catch((error) => {
              console.error("Error adding document");
            });
        });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
    <div className="hero">
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className="notification signup is-desktop">        
          <div className="field2">
            <label className="label"><i className="fas fa-user"></i> Name:</label>
            <div className="control">
              <input
                className="input"
                type="text"
                name="name"
                placeholder="Joe Somebody"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="field2">
            <label className="label"><i className="fas fa-envelope"></i> Email:</label>
            <div className="control ">
              <input
                className="input"
                type="email"
                placeholder="Email Address"
                name="email"
                onChange={this.handleChange}
                value={this.state.email}
              />
            </div>
          </div>

          <div className="field2">
            <label className="label"><i className="fas fa-key"></i> Password:</label>
            <div className="control has-icons-left has-icons-right">
              <input
                className="input"
                type="password"
                placeholder="Password"
                name="password"
                onChange={this.handleChange}
                value={this.state.password}
              />
            </div>
          </div><br></br>          

          <div className="field2">
            <div className="control">
              <div className="select">
                <select
                  name="selector"
                  value={this.state.selector}
                  onChange={this.handleChange}
                >
                  <option>Select dropdown</option>
                  <option name="renter" value="renter">
                    I am a Renter
                  </option>
                  <option name="owner" value="owner">
                    I am an Owner
                  </option>
                  <option name="both" value="both">
                    I am Both
                  </option>
                </select>
              </div>
            </div>
          </div><br></br>

          {/* <div className="field">
          <label className="label">Message</label>
          <div className="control">
            <textarea
              className="textarea"
              placeholder="Your Message Goes Here"
            ></textarea>
          </div>
        </div> */}

          <div className="field2">
            <div className="control">
              <label className="checkbox">
                <input type="checkbox" />I agree to the{" "}
                
                <a href="/">terms and conditions</a>
              </label>
            </div>
          </div>
          
      {/*  Modal Code Block

          <div className="columns">
            <button onClick={() => setModalIsOpen(true)}>Open Modal</button>
              <Modal
                isOpen={modalIsOpen}
                CloseOnOverlayClick={false}
                onRequestClose={() => setModalIsOpen(false)}
              >
      
                <h2>Hello</h2>
                <button onClick={() => setModalIsOpen(false)}>Close</button>
                <div>I am a modal</div>
                <form>
                  <input />
                  <button>tab navigation</button>
                  <button>stays</button>
                  <button>inside</button>
                  <button>the modal</button>
                </form>
              </Modal>
      </div> */}

          <div className="field2">
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
          <div className="columns is-desktop">
            <div className="column is-one-fifth">
              <div className="field">
                <div className="control">
                  <button className="button is-link" type="submit">
                    Submit
                  </button>
                </div>
              </div>
            </div>
            <div className="column">
                <div className="control">
                  <Link to="/" className="button is-link is-light">
                    Cancel
                  </Link>
                </div>
            </div>
          </div>
        </div>
      </form>
    </div>
    );
  }
}

export default Signup;
