import React from "react";
import "../css/Editor.css";

function Editor() {
  return (
    <div className="Editor">
      <input type="text" placeholder="새로운 Todo..." />
      <button>추가</button>
    </div>
  );
}

export default Editor;
