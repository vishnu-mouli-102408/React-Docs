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

ReactDom.render(
  <div>
    <p> Created by {`${fName} ${lName}!`} </p>
    <p> Copyright {year}</p>
  </div>,
  document.getElementById("root")
);
