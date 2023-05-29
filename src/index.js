import React from "react";
import ReactDom from "react-dom";

const fName = "Mouli";
const lName = "Ganivada";

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

const customStyling = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black",
};

customStyling.color = "blue";

ReactDom.render(
  <div>
    <h1 style={customStyling}> Hello Mouli </h1>
  </div>,
  document.getElementById("root")
);
