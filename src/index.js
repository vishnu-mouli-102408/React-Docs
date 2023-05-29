import React from "react";
import ReactDom from "react-dom";

// var today = new Date();
// var time =
//   today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

var currentTime = new Date().getHours();

let customStyle = {
  color: "",
};

let greeting;

if (currentTime < 12) {
  greeting = "Good Morning";
  customStyle.color = "red";
} else if (currentTime < 18) {
  greeting = "Good Afternoon";
  customStyle.color = "green";
} else {
  greeting = "Good Night";
  customStyle.color = "blue";
}

const d = new Date();
let year = d.getFullYear();

// ReactDom.render(
//   <div>
//     <h1>Hello {fName + " " + lName}!</h1>
//     <h1>
//       Hello {fName} {lName}!
//     </h1>
//     <h1> Hello {`${fName} ${lName}`}!</h1>
//   </div>,
//   document.getElementById("root")
// );

ReactDom.render(
  <div>
<<<<<<< HEAD
    <h1 className="heading">{greeting}</h1>
=======
    <p> Created by {`${fName} ${lName}!`} </p>
    <p> Copyright {year}</p>
>>>>>>> e4543fa50268fc5d2cf7339ab332ea1c84b116d9
  </div>,
  document.getElementById("root")
);
