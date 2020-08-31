import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home/Home";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Owner from "../pages/Owner";
import Renter from "../pages/Renter";
import Book from "../pages/Book";

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
      </Switch>
    );
  }
}

export default Router;
