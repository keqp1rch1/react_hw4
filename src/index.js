import React from "react";
import ReactDOM from "react-dom";


const li1 = React.createElement("li", {}, "afsdsd");

const li2 = React.createElement("li", {}, "asdfsdda");

const li3 = React.createElement("li", {}, "asdaasd");

const li4 = React.createElement("li", {}, "asdadas");


const ul = React.createElement("ul", {}, li1, li2, li3, li4);


const nav = React.createElement("nav", {}, ul);


ReactDOM.render(nav, document.getElementById("root"));