import React, { Component } from "react";
import GrandChild from "./GrandChild";

class Child extends Component {
  constructor() {
    super();

    this.state = {
      buttonText: "Child",
    };
  }

  render() {
    return (
      <div className="box">
        <button
          onClick={() => {
            this.setState((prevState) => ({
              buttonText: prevState.buttonText + "?",
            }));
          }}
        >
          {this.state.buttonText}
        </button>
        <GrandChild />
      </div>
    );
  }
}

export default Child;
