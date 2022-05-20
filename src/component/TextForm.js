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
  const changeLower = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const copyText = () => {
    navigator.clipboard.writeText(text);
  };

  const removeSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  return (
    <>
      <div>
        <></>
      </div>
      <div children="container">
        <h1 style={{ color: props.mode === "light" ? "#041336" : "white" }}>
          {props.heading}
        </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="textMessage"
            rows="8"
            value={text}
            onChange={handelOnChange}
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn btn-sm btn-primary mx-1"
          onClick={clearText}
        >
          Clear Text
        </button>
        <button
          className="btn btn-sm btn-primary mx-1 my-1"
          onClick={handelUpClick}
        >
          Make Upper
        </button>
        <button
          className="btn btn-sm btn-primary mx-1 my-1"
          onClick={changeLower}
        >
          Make Lower
        </button>
        <button className="btn btn-sm btn-primary mx-1 my-1" onClick={copyText}>
          Copy Text
        </button>
        <button
          className="btn btn-sm btn-primary mx-1 my-1"
          onClick={removeSpace}
        >
          Remove ExtraSpace
        </button>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "#041336" : "white" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          It contains {text ? text.split(" ").length : 0} words and{" "}
          {text.length} characters
        </p>
        <p>{0.008 * (text ? text.split(" ").length : 0)} minutes to read.</p>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "#041336" : "white" }}
      >
        <h2>Preview</h2>
        <p>{!text ? "Enter some text to preview here" : text}</p>
      </div>
    </>
  );
}
