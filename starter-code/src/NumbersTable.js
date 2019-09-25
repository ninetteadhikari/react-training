import React from "react";

const NumbersTable = props => {
  let array = [];
  let bgColor;
  for (let i = 1; i <= props.limit; i++) {
      i%2===0 ? bgColor="red" : bgColor="white"
    array.push(<div style={{backgroundColor:bgColor}}>{i}</div>);
  }

  return <div>{array}</div>;
};

export default NumbersTable;
