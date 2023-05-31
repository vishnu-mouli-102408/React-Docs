import React from "react";

function Span(props) {
  return (
    <div>
      <span className="emoji" role="img" aria-label="Tense Biceps">
        {props.spanEmoji}
      </span>
      <span>{props.spanText}</span>
    </div>
  );
}

export default Span;
