import React, { Component } from "react";

class RecipeForm extends Component {
  state = { inputValue: "" };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.addRecipe(this.state.inputValue);
    this.setState({ inputValue: "" });
  };

  handleChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  render() {
    return (
      <div>
        {this.state.inputValue === "potato" ? "YAY" : "NAY"}

        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="New Recipe Name"
            value={this.state.inputValue}
            onChange={this.handleChange}
            // onBlur={this.handleChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default RecipeForm;
