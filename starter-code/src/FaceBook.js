import React from "react";
import profiles from "./data/berlin.json";

const FaceBook = () => {
  console.log(profiles);

  const user = profiles.map(data => {
    let occupation;
    data.isStudent === true
      ? (occupation = "Student")
      : (occupation = "Teacher");
    return (
      <div>
        <img src={data.img} alt="" />
        <p>First name: {data.firstName}</p>
        <p>Last name: {data.lastName}</p>
        <p>Country: {data.country}</p>
        <p>Type: {occupation}</p>
      </div>
    );
  });

  return <div>{user}</div>;
};

export default FaceBook;
