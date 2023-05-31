import React from "react";
import ReactDOM from "react-dom";
import Card from "./Components/Card"


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
