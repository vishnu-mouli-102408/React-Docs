import React from "react";

import "../styles.css";
import Emoji from "./Emoji";
import emojipedia from "../empjipedia";

function me(item) {
  return (
    <Emoji
      key={item.id}
      emoji={item.emoji}
      text={item.name}
      content={item.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(me)}</dl>
    </div>
  );
}

export default App;
