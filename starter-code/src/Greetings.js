import React from "react";

const Greetings = props => {
  let greeting = "";
  let input = props.lang;
  if (input === "de") {
    greeting = "Hallo";
  } else if (input === "en") {
    greeting = "Hello";
  }else if (input === "fr") {
    greeting = "Bonjour";
  }else if (input === "es") {
    greeting = "Hola";
  }

  return (
    <div>
      <h3>
        {greeting} {props.children}
      </h3>
    </div>
  );
};

export default Greetings;
