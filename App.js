import React from "react";
import ReactDOM from "react-dom/client"

const parent=React.createElement(
    "div",
    {id:"parent"},
    React.createElement(
        "div",
        {id:"child"},
        [React.createElement("h1",{},"I'm H1 Tag"),React.createElement("h2",{},"I'm H2 Tag")]//for sibling you can create array like this
    ));
const heading = React.createElement(
    "h1", 
    { id: "heading", xyz: "abc" }, 
    "Hello World from React !"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
