import React from "react";

const DriverCard = props => {
  let filledStarCount = Math.round(props.rating);
  let emptyStarCount = 5 - filledStarCount;

  let star = "";
  for (let i = 0; i <= filledStarCount; i++) {
    star += "★";
  }
  for (let i = 0; i <= emptyStarCount; i++) {
    star += "☆";
  }

  return (
    <div>
      <img src={props.img} alt="" />
      <p>{props.name}</p>
      <p>{star}</p>
      <p>{props.car.model}</p>
      <p>{props.car.licensePlate}</p>
    </div>
  );
};

export default DriverCard;
