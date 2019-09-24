import React from "react";

const CreditCard = props => {
  let imageUrl = "";
  if (props.type === "Visa") {
    imageUrl = "img/visa.png";
  } else if (props.type === "Master Card") {
    imageUrl = "img/master-card.svg";
  }

let cardStyle={
    backgroundColor: props.bgColor,
    color:props.color
}

  return (
    <div style={cardStyle}>
      <img src={imageUrl} alt="" />
      <p>
      **** **** **** {props.number.slice(-4)}
      </p>
      <p>Expires {props.expirationMonth}/{props.expirationYear}</p>
      <p>{props.bank}</p>
      <p>{props.owner}</p>
    </div>
  );
};

export default CreditCard;
