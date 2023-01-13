import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement(
  "h1",
  {className:"title"},
  "Hello React"
);
  

const heading = (
  <h1 className="title" key="myheading">
    Hello world
  </h1>
);

const age = 24;
const element = <h1>Rahul is now, {age}!,year old</h1>;

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading1);
