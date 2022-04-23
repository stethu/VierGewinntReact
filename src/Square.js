import React from "react";
import "./index.css";

function Square(props) {
  return (
    <button className="square" id={"square" + props.id}>
      {props.value}
    </button>
  );
}

export default Square;