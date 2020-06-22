import React from "react";

import RecipeList from "./RecipeList";

function App(props) {
  const recipes = ["Pizza", "Pasta with Prosciutto", "Eggs and Bacon"];

  return (
    <div>
      <h1>{props.titleText}</h1>
      <RecipeList recipeNames={recipes} />
    </div>
  );
}

export default App;
