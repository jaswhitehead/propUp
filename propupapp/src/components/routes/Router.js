import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Owner from "../pages/Owner";
import Renter from "../pages/Renter";
import Events from "../pages/Events/Events";
import Who from "../pages/Who";
import Weather from "../pages/Weather";
import Chat from "../pages/ChatPages/chat/Chat";
import Feedback from "../pages/Feedback";

class Router extends Component {
  render() {
    return (
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Signup} exact path="/Signup" />
        <Route component={Login} exact path="/Login" />
        <Route component={Owner} exact path="/Owner" />
        <Route component={Renter} exact path="/Renter" />
        <Route component={Events} exact path="/Events" />
        <Route component={Who} exact path="/Who" />
        <Route component={Weather} exact path="/Weather" />
        <Route component={Chat} exact path="/Chat" />
        <Route component={Feedback} exact path="/Feedback" />
      </Switch>
    );
  }
}

export default Router;
