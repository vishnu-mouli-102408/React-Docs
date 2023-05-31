import React, { useState } from "react";
import "../styles.css";
// import Emoji from "./Emoji";
// import emojipedia from "../empjipedia";

// import Form from "./Form";

// var userRegistered = true;

function App() {
  // <div>
  //   <h1>
  //     <span>emojipedia</span>
  //   </h1>
  //   <dl className="dictionary">
  //     {emojipedia.map((item) => (
  //       <Emoji
  //         key={item.id}
  //         emoji={item.emoji}
  //         text={item.name}
  //         content={item.meaning}
  //       />
  //     ))}
  //   </dl>
  // </div>

  // <div className="container">
  //   <Form isRegistered={userRegistered} />
  // </div>

  // const [count, setCount] = useState(0);

  // function increase() {
  //   setCount(count + 1);
  // }

  // function decrease() {
  //   setCount(count - 1);
  // }

  const [time, setTime] = useState(new Date().toLocaleTimeString());

  function currentTime() {
    return setTime(new Date().toLocaleTimeString());
  }

  setInterval(currentTime, 1000);

  return (
    // <div style={{ textAlign: "center", margin: "auto" }}>
    //   <h1 style={{ fontSize: "40px" }}>{count}</h1>
    //   <button style={{ fontSize: "40px" }} onClick={decrease}>
    //     -
    //   </button>
    //   <button style={{ fontSize: "40px" }} onClick={increase}>
    //     +
    //   </button>
    // </div>
    <div style={{ textAlign: "center", margin: "auto" }}>
      <h1>{time}</h1>
      <button style={{ fontSize: "40px" }} onClick={currentTime}>
        Get Time
      </button>
    </div>
  );
}

export default App;
