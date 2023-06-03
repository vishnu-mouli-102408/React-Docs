import React, { useState } from "react";

function InputArea(props) {
  const [text, setText] = useState("");

  function handleChange(event) {
    const x = event.target.value;
    setText(x);
  }

  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={text} />
      <button
        onClick={() => {
          props.AddClick(text);
          setText("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
