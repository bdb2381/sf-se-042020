import React, { Component } from "react";
import Todo from "../components/Todo";

class CompletedTodosContainer extends Component {
  render() {
    return (
      <div>
        <h2>Completed Todos</h2>

        <table>
          <tbody>
            <tr>
              <th>Item</th>
              <th>Undo Complete</th>
            </tr>

            {/* Render your completed todos here */}

            {this.props.todos.map((todo) => (
              <Todo
                key={todo.id}
                todo={todo}
                handleClick={this.props.undoCompleted}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default CompletedTodosContainer;
