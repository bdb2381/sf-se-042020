import React, { Component } from "react";

class GrandChild extends Component {
  constructor() {
    super();

    this.state = {
      buttonText: "Grandchild",
    };
  }

  render() {
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
