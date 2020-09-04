import React, { Component } from "react";
import axios from "axios";

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "Nashville",
      dateTo: "2021-10-01T20%3A30%3A00%2B08%3A00",
      dateFrom: "2019-09-02T20%3A30%3A00",
      items: [],
    };
  }
  componentDidMount() {
    axios({
      method: "GET",
      url: `http://api.eventful.com/json/events/search?app_key=fX6xVb555X8fwctZ&l=${this.state.city}&page_size=25`,
    }).then(
      (result) => {
        this.setState({
          items: result,
        });
        console.log(this.state.items);
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        console.log(error);
      }
    );
  }

  render() {
    return <div>Events</div>;
  }
}
export default Events;
