import React from "react";

const BoxColor = props => {
  const boxStyle = {
    height: "50px",
    backgroundColor: `rgb(${props.r},${props.g}, ${props.b})`
  };
  return <div style={boxStyle}>
      <p>rgb({props.r}, {props.g}, {props.b})</p>
  </div>;
};

export default BoxColor;
