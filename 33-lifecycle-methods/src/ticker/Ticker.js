import React, { Component } from "react";

class Ticker extends Component {
  state = {
    color: "black",
    interval: null,
    value: 0,
  };

  render() {
    return (
      <div className="box" style={{ color: this.state.color }}>
        {this.state.value}
      </div>
    );
  }
}

export default Ticker;
