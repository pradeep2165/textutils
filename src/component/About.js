import React from "react";

export default function About(props) {
  let myStyle = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "dark" ? "#608eab" : "white",
  };

  return (
    <>
      <div className="p-2">
        <h2 style={{ color: props.mode === "dark" ? "white" : "#204359" }}>
          About Us{" "}
        </h2>
        <div className="accordion border-dark" id="accordionExample">
          <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingOne">
              <button
                style={myStyle}
                className="accordion-button "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Defination
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body border-bottom">
                <strong>text Utilities </strong>
                The original words of something written or printed, as opposed
                to a paraphrase, translation, revision, or condensation. The
                words of a speech appearing in print. Words, as of a libretto,
                that are set to music in a composition. Words treated as data by
                a computer. A text message.
              </div>
            </div>
          </div>
          <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingTwo">
              <button
                style={myStyle}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Use Me
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body border-bottom">
                <strong>Use me</strong> for convert to any formart as you wish
                as for requirment and save time compare to doing it manually, it
                is also free to use.
              </div>
            </div>
          </div>
          <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingThree">
              <button
                style={myStyle}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Platform Compatable
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body border-bottom">
                <strong>Platform Compatable.</strong> It is build in a such way
                that all device can access smoothly.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
