import React, { Component } from "react";
import Child from "./Child";

class Parent extends Component {
  constructor() {
    super();

    this.state = {
      buttonText: "Parent",
    };
  }

  render() {
    return (
      <div className="box">
        <button
          onClick={() => {
            this.setState((prevState) => ({
              buttonText: prevState.buttonText + ".",
            }));
          }}
        >
          {this.state.buttonText}
        </button>
        <Child />
      </div>
    );
  }
}

export default Parent;
