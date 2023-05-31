import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <Avatar image={props.img} />
      <Detail details={props.tel} />
      <Detail details={props.email} />
    </div>
  );
}

export default Card;
