import React, { Component } from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";

import "./index.css";
import "./App.css";
import logo from "./logo.svg";

const initialState = { count: 0 };

const reducer = (oldState, action) => {
  // if our action is to deposit $10, add 10 to state and return new state

  switch (action.type) {
    case "UPDATE":
      return { ...oldState, count: oldState.count + action.amount };
    default:
      return oldState;
  }

  // if (action.type === "INCREMENT") {
  //   return { ...oldState, count: oldState.count + 1 };
  // }
  // if (action.type === "DECREMENT") {
  //   return { ...oldState, count: oldState.count - 1 };
  // }

  // return oldState;
};

const store = createStore(reducer, initialState);

class App extends Component {
  componentDidMount() {
    store.subscribe(() => this.forceUpdate());
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Counter />
      </div>
    );
  }
}

class Header extends Component {
  renderDescription = () => {
    const remainder = store.getState().count % 5;
    const upToNext = 5 - remainder;
    return `The current count is less than ${
      store.getState().count + upToNext
    }`;
  };

  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">{this.renderDescription()}</h1>
      </header>
    );
  }
}

class Counter extends Component {
  increment = () => {
    // this.setState((prevState) => ({ count: prevState.count + 1 }));
    store.dispatch({ type: "UPDATE", amount: 1 });
  };

  decrement = () => {
    // this.setState((prevState) => ({ count: prevState.count - 1 }));
    store.dispatch({ type: "UPDATE", amount: -1 });
  };

  render() {
    return (
      <div className="Counter">
        <h1>{store.getState().count}</h1>
        <button onClick={this.decrement}> - </button>
        <button onClick={this.increment}> + </button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
