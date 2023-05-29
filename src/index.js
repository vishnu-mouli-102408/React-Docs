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



    <h1 className="heading">{greeting}</h1>

    <p> Created by {`${fName} ${lName}!`} </p>
    <p> Copyright {year}</p>

    <h1> Hello </h1>
    <p> Created by {`${fName} ${lName}!`} </p>
    <p> Copyright {year}</p>

  </div>,
  document.getElementById("root")
);
