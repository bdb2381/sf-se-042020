import React, { Component } from 'react';

import RecipeList from './RecipeList';

class App extends Component {
  render() {
    const recipes = ['Pizza', 'Pasta', 'Tacos'];

    return (
      <div>
        <h1>Recipe List</h1>
        <RecipeList recipes={recipes} />
      </div>
    );
  }
}

export default App;
