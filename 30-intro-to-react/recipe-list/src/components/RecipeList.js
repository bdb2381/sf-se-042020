import React from "react";

import Recipe from "./Recipe";

function RecipeList(props) {
  console.log(props.recipeNames);
  return (
    <div>
      <h2>Recipe List</h2>

      <ul>
        {props.recipeNames.map((recipeName) => (
          <Recipe key={recipeName} recipeName={recipeName} />
        ))}
      </ul>
    </div>
  );
}

export default RecipeList;
