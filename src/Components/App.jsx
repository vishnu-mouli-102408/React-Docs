import React, { useState } from "react";
import "../styles.css";
import List from "./List";
// import cars from "../data.js";
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

  // const [time, setTime] = useState(new Date().toLocaleTimeString());

  // function currentTime() {
  //   return setTime(new Date().toLocaleTimeString());
  // }

  // setInterval(currentTime, 1000);

  // const [honda, tesla] = cars;

  // const {
  //   coloursByPopularity: [hondaTopColour],
  // } = honda;
  // const {
  //   coloursByPopularity: [teslaTopColour],
  // } = tesla;

  // const {
  //   speedStats: { topSpeed: hondaTopSpeed },
  // } = honda;
  // const {
  //   speedStats: { topSpeed: teslaTopSpeed },
  // } = tesla;

  // <div style={{ textAlign: "center", margin: "auto" }}>
  //   <h1 style={{ fontSize: "40px" }}>{count}</h1>
  //   <button style={{ fontSize: "40px" }} onClick={decrease}>
  //     -
  //   </button>
  //   <button style={{ fontSize: "40px" }} onClick={increase}>
  //     +
  //   </button>
  // </div>
  // <div style={{ textAlign: "center", margin: "auto" }}>
  //   <h1>{time}</h1>
  //   <button style={{ fontSize: "40px" }} onClick={currentTime}>
  //     Get Time
  //   </button>
  // </div>

  // <table>
  //   <tr>
  //     <th>Brand</th>
  //     <th>Top Speed</th>
  //   </tr>
  //   <tr>
  //     <td>{tesla.model}</td>
  //     <td>{teslaTopSpeed}</td>
  //     <td>{teslaTopColour}</td>
  //   </tr>
  //   <tr>
  //     <td>{honda.model}</td>
  //     <td>{hondaTopSpeed}</td>
  //     <td>{hondaTopColour}</td>
  //   </tr>
  // </table>

  // const [color, setColor] = useState(false);
  // const [heading, setHeading] = useState("Hello");

  // function handleClick() {
  //   console.log("Clicked");
  //   setHeading("Submitted");
  // }
  // function handleMouseOver() {
  //   setColor(true);
  // }

  // function handleMouseOut() {
  //   setColor(false);
  // }

  // const [fullName, setFullName] = useState({
  //   fName: "",
  //   lName: "",
  // });

  // function handleChange(event) {
  //   const { name, value } = event.target;

  //   setFullName((prev) => {
  // console.log(prev);
  // if (name === "fName") {
  //   return {
  //     fName: value,
  //     lName: prev.lName,
  //   };
  // } else if (name === "lName") {
  //   return {
  //     fName: prev.fName,
  //     lName: value,
  //   };
  // }

  // return {
  //   ...prev,
  //   [name]: value,
  //   // };
  // });
  // }

  // return (
  //   <div className="container">
  //     <h1>
  //       Hello {fullName.fName} {fullName.lName}
  //     </h1>
  //     <input
  //       name="fName"
  //       onChange={handleChange}
  //       type="text"
  //       placeholder="First Name"
  //       value={fullName.fName}
  //     />
  //     <input
  //       name="lName"
  //       onChange={handleChange}
  //       type="text"
  //       placeholder="Last Name"
  //       value={fullName.lName}
  //     />
  //     <button
  // style={{ backgroundColor: color ? "black" : "white" }}
  // onMouseOut={handleMouseOut}
  // onMouseOver={handleMouseOver}
  // onClick={handleClick}
  //     >
  //       Submit
  //     </button>
  //   </div>
  // );

  // ToDo App

  const [text, setText] = useState("");
  const [Aitems, setAitems] = useState([]);

  function handleChange(event) {
    const x = event.target.value;
    setText(x);
  }

  function handleClick() {
    setAitems((prev) => {
      return [...prev, text];
    });
    // console.log(Aitems);
    setText("");
  }

  function deleteItem(id) {
    console.log(id);
    setAitems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={text} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {Aitems.map((item, index) => {
            return (
              <List key={index} id={index} onChecked={deleteItem} text={item} />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
