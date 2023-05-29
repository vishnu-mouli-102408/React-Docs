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
    <h1 className="heading"> My Favourite Foods </h1>
    <img className="r-image" src="https://picsum.photos/100" alt="xxx" />
    <img className="r-image" src="https://picsum.photos/100" alt="xxx" />
    <img className="r-image" src="https://picsum.photos/100" alt="xxx" />
  </div>,
  document.getElementById("root")
);
