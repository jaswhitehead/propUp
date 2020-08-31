import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home/Home";
import Signup from "../pages/Signup/Signup";
import Login from "../pages/Login/Login";
import Owner from "../pages/Owner/Owner";
import Renter from "../pages/Renter/Renter";
import Book from "../pages/Book/Book";
import Events from "../pages/Events/Events";
import Who from "../pages/Who/Who";

class Router extends Component {
  render() {
    return (
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Signup} exact path="/Signup" />
        <Route component={Login} exact path="/Login" />
        <Route component={Owner} exact path="/Owner" />
        <Route component={Renter} exact path="/Renter" />
        <Route component={Book} exact path="/Book" />
        <Route component={Events} exact path="/Events" />
        <Route component={Who} exact path="/Who" />
      </Switch>
    );
  }
}

export default Router;
