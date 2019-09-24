import React from "react";

const IdCard = props => {
  return (
    <div className="profile">
      <div className="picture">
        <img src={props.picture} alt="" />
      </div>
      <div className="profile-info">
        <p>First name: {props.firstName}</p>
        <p>Last name: {props.lastName}</p>
        <p>Gender: {props.gender}</p>
        <p>Height: {props.height}</p>
        <p>Birth: {props.birth.toLocalDateString}</p>
      </div>
    </div>
  );
};

export default IdCard;
