import React, { Component } from "react";
import "./App.css";
import TodosContainer from "./containers/TodosContainer";
import CompletedTodosContainer from "./containers/CompletedTodosContainer";

class App extends Component {
  state = {
    todos: [],
    completed: [],
  };

  componentDidMount() {
    fetch("http://localhost:6001/todos")
      .then((resp) => resp.json())
      .then((data) => this.setState({ todos: data }));
  }

  filterTodos = () => {
    return this.state.todos.filter((todo) => !todo.completed);
  };

  markTodoComplete = (todo) => {
    if (this.state.completed.indexOf(todo) === -1) {
      const filteredCompleted = this.state.todos.filter(
        (t) => t.id !== todo.id
      );

      this.setState({ completed: [...this.state.completed, todo] });
      this.setState({ todos: filteredCompleted });
    }
  };

  undoCompleted = (todo) => {
    const filteredCompleted = this.state.completed.filter(
      (t) => t.id !== todo.id
    );

    this.setState({ completed: filteredCompleted });

    // fetch DELETE request
    fetch(`http://localhost:6001/todos/${todo.id}`, { method: "DELETE" });
  };

  render() {
    return (
      <div className="App">
        <h1 className="title">To Do List</h1>
        <h4>Let's be Productive!</h4>

        <TodosContainer
          todos={this.filterTodos()}
          markTodoComplete={this.markTodoComplete}
        />
        <CompletedTodosContainer
          todos={this.state.completed}
          undoCompleted={this.undoCompleted}
        />
      </div>
    );
  }
}

export default App;
