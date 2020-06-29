import React from "react";

const Todo = (props) => (
  <tr>
    <td>{props.todo.content}</td>
    <td>
      <input
        type="checkbox"
        checked={props.todo.completed}
        onChange={() => props.handleClick(props.todo)}
      />
    </td>
  </tr>
);

export default Todo;
