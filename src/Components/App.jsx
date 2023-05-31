import React from "react";
import "../styles.css";
import Emoji from "./Emoji";
import emojipedia from "../empjipedia";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map((item) => (
          <Emoji
            key={item.id}
            emoji={item.emoji}
            text={item.name}
            content={item.meaning}
          />
        ))}
      </dl>
    </div>
  );
}

export default App;
