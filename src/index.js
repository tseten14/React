//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

let sample = new Date(2019, 2, 3, 14);
let currentTime = sample.getHours();

let period;
const heading = {
  color: "red",
  fontSize: "50px",
  fontWeight: "bold",
  border: "5px solid black"
};
//Morning time
if (currentTime < 12) {
  heading.color = "red";
  period = "Good Morning";
}

//Afternoon Time
else if (currentTime < 18) {
  heading.color = "green";
  period = "Good Afternoon";
}

//Evening Time
else {
  heading.color = "blue";
  period = "Good Evening";
}

ReactDOM.render(
  <div>
    <h1 style={heading}>{period}</h1>
  </div>,

  document.getElementById("root")
);
