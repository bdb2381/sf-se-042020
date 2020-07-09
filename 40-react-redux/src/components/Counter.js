import React, { Component } from "react";
import { connect } from "react-redux";

class Counter extends Component {
  increment = () => {
    // store.dispatch({ type: "UPDATE", amount: 1 });
    this.props.update(1);
  };

  decrement = () => {
    // store.dispatch({ type: "UPDATE", amount: -1 });
    this.props.update(-1);
  };

  render() {
    console.log(this.props);
    return (
      <div className="Counter">
        <h1>{this.props.count}</h1>
        <button onClick={this.decrement}> - </button>
        <button onClick={this.increment}> + </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { count: state.count };
};

const mapDispatchToProps = (dispatch) => {
  return { update: (amount) => dispatch({ type: "UPDATE", amount: amount }) };
  // return {
  //   update: function () {
  //     return dispatch({ type: "UPDATE", amount: 1 });
  //   },
  // };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
