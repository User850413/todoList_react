import React from "react";
import "../css/TodoItem.css";

function TodoItem() {
  return (
    <div className="TodoItem">
      <input type="checkbox" />
      <span className="content">Todo...</span>
      <span className="date">Date</span>
      <button>삭제</button>
    </div>
  );
}

export default TodoItem;
