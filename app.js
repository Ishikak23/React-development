import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement(
  "h1",
  { id: "heading1", key: "1" },
  "Heading 1"
);
const heading2 = React.createElement(
  "h2",
  { id: "heading2", key: "2" },
  "Heading 2"
);
const child = React.createElement("div", { id: "heading1" }, [
  heading,
  heading2,
]);
const parent = React.createElement("div", { id: "heading1" }, child);
// heading is an object
const root = ReactDOM.createRoot(document.getElementById("root"));
// render method takes the heading object, create the h1 tag and displys it on the browser
root.render(parent);
