import React from "react";

function Recipe(props) {
  console.log(props);
  return <li>{props.recipeName}</li>;
}

export default Recipe;
