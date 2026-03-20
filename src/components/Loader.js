import React, { Component } from "react";
import spinner from "./spinner.gif";

export default class Loader extends Component {
  path = "";
  render() {
    return (
      <center>
        <img className="my-3" src={spinner} alt="Loading..." />
      </center>
    );
  }
}
