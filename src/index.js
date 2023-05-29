import React from "react";
import ReactDom from "react-dom";

const fName = "Mouli";
const lName = "Ganivada";

ReactDom.render(
  <div>
    <h1>Hello {fName + " " + lName}!</h1>
    <h1>
      Hello {fName} {lName}!
    </h1>
    <h1> Hello {`${fName} ${lName}`}!</h1>
  </div>,
  document.getElementById("root")
);
