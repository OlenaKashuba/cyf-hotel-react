import React, { Component } from "react";
import Search from "../components/Search.js";
import Results from "../components/Results.js";

export default class Bookings extends Component {
  search = () => {
    console.info("to do!");
  };
  
  render() {
    return (
      <div className="App-content">
        <div className="container">
          <Search search={this.search} />
          <Results />
        </div>
      </div>
    );
  }
}
