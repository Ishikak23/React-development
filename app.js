import React from "react";
import ReactDOM from "react-dom/client";
// React element
const reactElm = <span>React Element </span>;
const jsxHeading = <h1 id="heading1">{reactElm}Heading 1 from jsx </h1>;
// React functional component
const Title2 = function () {
  return <h2>Function component 2</h2>;
};
const Title = () => <h1>Title component</h1>;
//  Component composition
const HeaderComponent = () => {
  return (
    <div>
      {jsxHeading}
      <Title />
      <Title2 />
      {Title()}
      <h1 id="heading1">React Functional component</h1>
    </div>
  );
};

const header3 = React.createElement("h3", { key: "1" }, "Header 3");
const header2 = React.createElement("h2", { key: "2" }, "Header 2");
const header1 = React.createElement("h1", { key: "3" }, "header 1");
const divContiner = React.createElement("div", { class: "title" }, [
  header1,
  header2,
  header3,
]);

const jsxHeader3 = <h3>JSX Header3</h3>;
const jsxHeader2 = <h2>JSX Header2</h2>;
const jsxHeader1 = <h1>JSX Header1</h1>;
const jsxDiv = (
  <div className="title">
    {jsxHeader1}
    {jsxHeader2}
    {jsxHeader3}
  </div>
);

const FCHeader3 = () => <h3>FC Header3</h3>;
const FCHeader2 = () => <h2>FC Header2</h2>;
const FCHeader1 = () => <h1>FC Header1</h1>;
const FCDiv = () => (
  <div className="title">
    <FCHeader1 />
    <FCHeader2 />
    <FCHeader3 />
  </div>
);

const Logo = () => {
  return (
    <img
      width={"40px"}
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"
    />
  );
};

const SearchBar = () => {
  return (
    <div id="searchBarContainer">
      <input type="search" id="searchbar" style={{ width: "400px" }}></input>
    </div>
  );
};
const UserIcon = () => {
  return (
    <img
      width={"40px"}
      src="https://i.pinimg.com/564x/e2/7c/87/e27c8735da98ec6ccdcf12e258b26475.jpg"
    />
  );
};
const HeaderContainer = () => {
  return (
    <div id="container">
      <Logo />
      <SearchBar />
      <UserIcon />
    </div>
  );
};
const rootElement = ReactDOM.createRoot(document.getElementById("root"));

rootElement.render(<HeaderContainer />);
