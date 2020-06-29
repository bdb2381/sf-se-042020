import React, { Component } from "react";
import Todo from "../components/Todo";

class TodosContainer extends Component {
  render() {
    return (
      <table>
        <tbody>
          <tr>
            <th>Item</th>
            <th>Undo Complete</th>
          </tr>

          {/* Render your todos here */}

          {this.props.todos.map((todo) => (
            <Todo
              key={todo.id}
              // {...todo}
              todo={todo}
              handleClick={this.props.markTodoComplete}
            />
          ))}
        </tbody>
      </table>
    );
  }
}

export default TodosContainer;
