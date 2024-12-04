import React from "react";

const TodoItem = ({ item, toggleCompletion, deleteItem, editItem }) => (
  <div>
    <span
      style={{
        textDecoration: item.completed ? "line-through" : "none",
      }}
    >
      {item.value}
    </span>
    <button onClick={() => toggleCompletion(item.id)}>Toggle</button>
    <button onClick={() => deleteItem(item.id)}>Delete</button>
    <button onClick={() => editItem()}>Edit</button>
  </div>
);

export default TodoItem;
