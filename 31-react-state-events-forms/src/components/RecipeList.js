import React from 'react';

import Recipe from './Recipe';

function RecipeList(props) {
  return (
    <ul>
      {props.recipes.map((recipe, i) => (
        <Recipe key={i} recipe={recipe} />
      ))}
    </ul>
  );
}

export default RecipeList;
