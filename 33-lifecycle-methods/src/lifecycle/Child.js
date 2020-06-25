import React, { Component } from "react";
import GrandChild from "./GrandChild";

class Child extends Component {
  constructor() {
    super();
    console.log("%c Child CONSTRUCTOR", "color: red");

    this.state = {
      buttonText: "Child",
    };
  }

  componentDidMount() {
    console.log("%c Child DID MOUNT", "color: red");
  }

  componentDidUpdate() {
    console.log("%c Child DID UPDATE", "color: red");
  }

  render() {
    console.log("%c Child RENDER", "color: red");

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
