import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <img src={props.img} alt="Avatar" />
      <p>{props.tel} </p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts </h1>
    <Card
      name="Beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tel="+123 5555555"
      email="abs@gmail.com"
    />
    <Card
      name="Beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tel="+123 5555555"
      email="abs@gmail.com"
    />
    <Card
      name="Beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tel="+123 5555555"
      email="abs@gmail.com"
    />
  </div>,

  document.getElementById("root")
);
tById("root")
);
