import React from "react";
import { useState, useRef } from "react";

import "../css/Editor.css";

function Editor({ onCreate }) {
  const [content, setContent] = useState("");

  const onchangeContent = (e) => {
    setContent(e.target.value);
  };

  const contentRef = useRef();

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  const onSubmit = () => {
    if (content === "") {
      contentRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");
  };
  return (
    <div className="Editor">
      <input
        ref={contentRef}
        value={content}
        onChange={onchangeContent}
        onKeyDown={onKeyDown}
        type="text"
        placeholder="새로운 Todo..."
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
}

export default Editor;
