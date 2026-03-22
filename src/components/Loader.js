import React from "react";
import spinner from "./spinner.gif";

export default function Loader() {
  return (
    <center>
      <img className="my-3" src={spinner} alt="Loading..." />
    </center>
  );
}
