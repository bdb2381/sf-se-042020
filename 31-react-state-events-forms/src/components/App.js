import React, { Component } from "react";

import RecipeList from "./RecipeList";
import RecipeForm from "./RecipeForm";

class App extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = [props.text, "Pasta", "Tacos"];
  //   // this is where we would bind the this keyword
  // }

  state = { recipes: ["Pizza", "Pasta", "Tacos"] };

  updateState = () => {
    // Do not do this!
    // this.state = ["hello"]

    // Instead to this:
    // console.log("state before update", this.state);
    // this.setState({ recipes: [...this.state.recipes, "Potatoes"] });

    this.setState((prevState) => {
      return { recipes: [...prevState.recipes, "Potatoes"] };
    });

    // this.setState(function (prevState) {
    //   return { recipes: [...prevState.recipes, "Potatoes"] };
    // });
    // console.log("state after update", this.state);
  };

  addRecipe = (newRecipe) => {
    this.setState({ recipes: [newRecipe, ...this.state.recipes] });
  };

  render() {
    // const recipes = ["Pizza", "Pasta", "Tacos"];

    return (
      <div>
        <h1>Recipe List</h1>
        {/* <button onClick={this.updateState}>Click me</button> */}
        <RecipeList recipes={this.state.recipes} />
        <RecipeForm addRecipe={this.addRecipe} />
      </div>
    );
  }
}

export default App;

// function MyOtherComp() {
//   return "hello";
// }

// function MyOtherComp2() {
//   return "hello";
// }

// export { MyOtherComp, MyOtherComp2 };
