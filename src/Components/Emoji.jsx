import React from "react";
import Span from "./Span";

function Emoji(props) {
  return (
    <div className="term">
      <dt>
        <Span spanEmoji={props.emoji} />
        <Span spanText={props.text} />
      </dt>
      <dd>{props.content}</dd>
    </div>
  );
}

export default Emoji;
