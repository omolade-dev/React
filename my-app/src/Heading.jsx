import React from "react";

const date = new Date();
const currentHour = date.getHours();

let greeting;
const customStyle = {};

if (currentHour < 12) {
  greeting = "Good Morning";
  customStyle.color = "red";
} else if (currentHour < 18) {
  greeting = "Good Afternoon";
  customStyle.color = "green";
} else {
  greeting = "Good Night";
}

function Heading() {
  return (
    <h1 className="heading" style={customStyle}>
      {greeting}
    </h1>
  );
}

export default Heading;
