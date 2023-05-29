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
<<<<<<< HEAD
=======
    <h1> Hello </h1>
>>>>>>> ce8f0b8 ("Initial commit")
    <p> Created by {`${fName} ${lName}!`} </p>
    <p> Copyright {year}</p>
  </div>,
  document.getElementById("root")
);
