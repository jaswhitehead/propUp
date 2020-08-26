import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Owner from "../pages/Owner";
import Renter from "../pages/Renter";

class Router extends Component {
  render() {
    return (
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Signup} exact path="/Signup" />
        <Route component={Owner} exact path="/Owner" />
        <Route component={Renter} exact path="/Renter" />
      </Switch>
    );
  }
}

export default Router;
