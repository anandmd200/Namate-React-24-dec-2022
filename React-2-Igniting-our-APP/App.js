import React from "react";
import ReactDOM from "react-dom/client";

/**
 * HMR = HOT Module Replacement
 *
 */

const heading1 = React.createElement(
  "h1",
  {
    id: "title",
    hello: "world",
  },
  "Hello React from Ignite"
);

const heading2 = React.createElement(
  "h1",
  {
    id: "heading2",
    className: "hello",
  },
  "Hello React"
);

const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading1, heading2]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
