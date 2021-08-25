import React from "react";

const Todo = ({ todos, deleteData, enableEdit }) => {
  return (
    <div>
      {todos.map((todo, idx) => (
        <p key={idx}>
          {todo}
          <button onClick={() => enableEdit(idx, todo)}>Edit</button>{" "}
          <button onClick={() => deleteData(idx)}>x</button>
        </p>
      ))}
    </div>
  );
};

export default Todo;
