import React, { Component } from "react";

class GrandChild extends Component {
  constructor() {
    super();
    console.log("%c GradChild CONSTRUCTOR", "color: purple");

    this.state = {
      buttonText: "Grandchild",
    };
  }

  componentDidMount() {
    console.log("%c GradChild DID MOUNT", "color: purple");
  }

  componentDidUpdate() {
    console.log("%c GradChild DID UPDATE", "color: purple");
  }

  render() {
    console.log("%c GradChild RENDER", "color: purple");

    return (
      <div className="box">
        <button
          onClick={() => {
            this.setState((prevState) => ({
              buttonText: prevState.buttonText + "!",
            }));
          }}
        >
          {this.state.buttonText}
        </button>
      </div>
    );
  }
}

export default GrandChild;
