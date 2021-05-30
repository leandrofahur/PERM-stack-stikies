import React, { useState } from "react";

const NoteInput = () => {
  const [content, setContent] = useState("");

  const onSubmitForm = async (evt) => {
    evt.preventDefault();
    const body = { content };
    console.log(body);
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

  return (
    <>
      <div className="ui inverted segment" style={{ marginTop: "40px" }}>
        <h1 style={{ textAlign: "center", paddingTop: "15px" }}>
          Stiky Notes App
        </h1>
        <form className="ui inverted form" style={{ padding: "30px" }}>
          <div className="ui fluid action input">
            <input
              placeholder="Write yourself a note"
              type="text"
              value={content}
              onChange={(evt) => setContent(evt.target.value)}
            ></input>
            <button
              className="ui positive button"
              onClick={(evt) => onSubmitForm(evt)}
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default NoteInput;
