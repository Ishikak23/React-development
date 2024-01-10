const heading = React.createElement(
  "h1",
  { id: "heading1", key: "1" },
  "Hello"
);
const heading2 = React.createElement(
  "h2",
  { id: "heading1", key: "2" },
  "Hello"
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
