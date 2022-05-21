import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handelUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted To Upper Case", "success");
  };
  const handelOnChange = (event) => {
    setText(event.target.value);
  };
  const clearText = () => {
    setText("");
    props.showAlert("Text Cleared", "success");
  };
  const changeLower = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted To Lower Case", "success");
  };
  const copyText = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied", "info");
  };

  const removeSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed", "success");
  };
  return (
    <>
      <div>
        <></>
      </div>
      <div className="container">
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
          Convert to Upper
        </button>
        <button
          className="btn btn-sm btn-primary mx-1 my-1"
          onClick={changeLower}
        >
          Convert to Lower
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
          It contains {text ? text.split(/\s+/).length : 0} words and{" "}
          {/* this also work */}
          {/* It contains{" "}{text ? text.split(" ").filter((element) => {return element.length !== 0;}).length: 0}{" "} */}
          words and {text.length} characters
        </p>
        <p>{0.008 * (text ? text.split(" ").length : 0)} minutes to read.</p>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "#041336" : "white" }}
      >
        <h2>Preview</h2>
        <p>{!text ? "Nothing to preview" : text}</p>
      </div>
    </>
  );
}
