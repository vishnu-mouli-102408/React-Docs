// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";

// import App from "./App";

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );

import React from "react";
import ReactDom from "react-dom";

// const React = require("react");
// const ReactDom = require("react-dom");

ReactDom.render(
  <div>
    <h1> Hello Mouli </h1>
    <p> This is a JSX Element </p>
  </div>,
  document.getElementById("root")
);
