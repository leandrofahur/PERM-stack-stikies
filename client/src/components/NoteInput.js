import React, { useState } from "react";

const NoteInput = () => {
  const [content, setContent] = useState("");

  const onSubmitAdd = async (evt) => {
    evt.preventDefault();
    const body = { content };

    try {
      const response = await fetch("http://localhost:5000/notes", {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify(body),
      });
      setContent("");
      window.location = "/";
    } catch (error) {
      console.error(error.message);
    }
  };

  const onSubmitDeleteAll = async (evt) => {
    evt.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/notes/all", {
        method: "DELETE",
      });
      setContent("");
      window.location = "/";
    } catch (error) {
      console.error(error.message);
    }
  };

  const onSubmitClear = async (evt) => {
    evt.preventDefault();
    setContent("");
  };

  return (
    <>
      <div className="ui inverted segment" style={{ marginTop: "40px" }}>
        <h1 style={{ textAlign: "center", paddingTop: "15px" }}>
          Stiky Notes App
        </h1>
        <form className="ui inverted form" style={{ padding: "30px" }}>
          <div className="field">
            <textarea
              rows="2"
              placeholder="Write yourself a note"
              type="text"
              value={content}
              onChange={(evt) => setContent(evt.target.value)}
            ></textarea>
          </div>
          {/* <div className="field">
            <input />
          </div> */}
          <div style={{ textAlign: "end", paddingTop: "5px" }}>
            <div
              className="ui compact labeled green icon button"
              onClick={(evt) => onSubmitAdd(evt)}
              style={{ marginRight: "7px" }}
            >
              {" "}
              <i className="check circle outline icon"></i>
              Add
            </div>
            <div
              className="ui compact labeled yellow icon button"
              onClick={(evt) => onSubmitClear(evt)}
              style={{ marginRight: "7px" }}
            >
              <i className="eraser icon"></i>
              Clear
            </div>
            <div
              className="ui compact labeled red icon button"
              onClick={(evt) => onSubmitDeleteAll(evt)}
              style={{ marginRight: "7px" }}
            >
              <i className="trash alternate outline icon"></i>
              Delete All
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default NoteInput;
