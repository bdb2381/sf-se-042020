// Vanilla JS
// const siteTitle = document.createElement("h1");
// siteTitle.innerText = "Recipe List";

// const rootDiv = document.getElementById("root");
// rootDiv.appendChild(siteTitle);

// React
const siteTitle = React.createElement("h1", {}, "Another Recipe List");
const rootDiv = document.getElementById("root");

ReactDOM.render(siteTitle, rootDiv);
