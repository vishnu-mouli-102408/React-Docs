import React from "react";
import Heading from "./Heading";
import Unlist from "./Unlist";
import "../styles.css";

import Add, { subtract, divide, multiply } from '../calculator'

export default function App() {
  return (
    <div className="App">
      <Heading />
      <Unlist />

      <ul>
        <li>{Add(4, 6)}</li>
        <li>{subtract(20, 10)}</li>
        <li>{divide(100, 10)}</li>
        <li>{multiply(5, 2)}</li>
      </ul>

    </div>
  );
}
