import React from "react";
import ReactDOM from "react-dom/client";

// React Element => Object => HTML element once it render (root.render)

const heading = React.createElement("h1", { id: "heading" }, "Namaste React"); //object //react elemt

const jsxHeading = <h1 id="heading">Namaste React using JSX</h1>; //this is not HTML
//class attribute is used in html but className is used in JSX
//camelCase is used for attributes in JSX

//React Component
const Title = () => <h1>Namaste React using Javascript</h1>; //functional component
const HeadingComponent = () => (
  <div>
    <Title />
    {Title()}
    <Title></Title>
    {heading} react element inside component using curly braces
    <h1>Namaste React Functional Component</h1>
  </div>
); //functional component
// we can call the Title function as well and it will behave totally same {Title()}
console.log(jsxHeading);
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);
root.render(<HeadingComponent />);
