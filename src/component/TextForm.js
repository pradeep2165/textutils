import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handelUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handelOnChange = (event) => {
    setText(event.target.value);
  };
  const clearText = () => {
    setText("");
  };
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id=""
          rows="8"
          value={text}
          onChange={handelOnChange}
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary" onClick={clearText}>
        Clear
      </button>
      <button className="btn btn-primary mx-2" onClick={handelUpClick}>
        Convert To Upper
      </button>
    </div>
  );
}
