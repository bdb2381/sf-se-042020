import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";

const siteTitle = React.createElement("h1", {}, "Recipe List");
const rootDiv = document.getElementById("root");
const titleText = "Recipe Application";

// JSX (<h1>Recipe List</h1>)

ReactDOM.render(<App titleText={titleText} someOtherText="hello" />, rootDiv);
