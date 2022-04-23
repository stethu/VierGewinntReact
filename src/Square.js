import React from "react";
import "./index.css";

function Square(props) {
  return (
    <button className="square">
      {props.value}
    </button>
  );
}

export default Square;