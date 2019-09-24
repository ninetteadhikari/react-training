import React from "react";

const Rating = props => {
  let filledStarCount = Math.round(props.children);
  let emptyStarCount = 5 - filledStarCount;

  let star = "";
  for (let i = 0; i <= filledStarCount; i++) {
    star += "★";
  }
  for (let i = 0; i <= emptyStarCount; i++) {
    star += "☆";
  }

  return <div>{star}</div>;
};

export default Rating;
