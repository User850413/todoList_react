import React from "react";
import "../css/TodoItem.css";

function TodoItem({ id, isDone, content, date }) {
  return (
    <div className="TodoItem">
      <input readOnly checked={isDone} type="checkbox" />
      <span className="content">{content}</span>
      <span className="date">{new Date(date).toLocaleDateString()}</span>
      <button>삭제</button>
    </div>
  );
}

export default TodoItem;
