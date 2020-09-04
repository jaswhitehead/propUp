import React, { Component } from "react";
import "./styles.css";
import LoginString from "./LoginStrings";
import firebase from "../../../auth/";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      error: "",
      email: "",
      password: "",
      selector: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  componentDidMount() {
    if (localStorage.getItem(LoginString.ID)) {
      this.setState({ isLoading: false }, () => {
        this.setState({ isLoading: false });
        // this.props.showToast(1, "Login success");
        if (localStorage.getItem(LoginString.Selector) === "renter") {
          this.props.history.push("./Renter");
        }
        if (localStorage.getItem(LoginString.Selector) === "owner") {
          this.props.history.push("./Owner");
        }
      });
    } else {
      this.setState({ isLoading: false });
    }
  }

  async handleSubmit(event) {
    event.preventDefault();
    this.setState({ error: "" });

    await firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(async (result) => {
        let user = result.user;
        if (user) {
          await firebase
            .firestore()
            .collection("users")
            .where("id", "==", user.uid)
            .get()
            .then(function (querySnapshot) {
              querySnapshot.forEach(function (doc) {
                const currentdata = doc.data();
                localStorage.setItem(LoginString.FirebaseDocumentId, doc.id);
                localStorage.setItem(LoginString.ID, currentdata.id);
                localStorage.setItem(LoginString.Name, currentdata.name);
                localStorage.setItem(
                  LoginString.Selector,
                  currentdata.selector
                );
                localStorage.setItem(
                  LoginString.Password,
                  currentdata.password
                );
                localStorage.setItem(LoginString.PhotoURL, currentdata.URL);
                localStorage.setItem(
                  LoginString.Description,
                  currentdata.description
                );
              });
            });
        }
        if (localStorage.getItem(LoginString.Selector) === "renter") {
          this.props.history.push("./Renter");
        }
        if (localStorage.getItem(LoginString.Selector) === "owner") {
          this.props.history.push("./Owner");
        }
      })
      .catch(function (error) {
        this.setState({
          error: "Error while signing in. Please try again.",
        });
      });
  }

  render() {
    return (
      <>
        <div className="hero">
          <div className="level-center">
            <div className="login-container">
              <h1>
                <strong>
                  Welcome Back! <br></br>Please Sign in Below:
                </strong>
              </h1>
            </div>

            <form className="form" onSubmit={this.handleSubmit.bind(this)}>
              <div className="field">
                <p class="control has-icons-left has-icons-right">
                  <input
                    className="input"
                    type="email"
                    placeholder="Email"
                    name="email"
                    autoComplete="email"
                    onChange={this.handleChange}
                    value={this.state.email}
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-envelope"></i>
                  </span>
                  <span className="icon is-small is-right">
                    <i className="fas fa-check"></i>
                  </span>
                </p>
              </div>
              <div className="field is-right">
                <p class="control has-icons-left">
                  <input
                    className="input"
                    type="password"
                    placeholder="Password"
                    name="password"
                    autoComplete="password"
                    onChange={this.handleChange}
                    value={this.state.password}
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-lock"></i>
                  </span>
                </p>
              </div>
              <div className="field">
                <p className="control">
                  <button className="button" type="submit">
                    Login
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
