import React, { useEffect, useState } from "react";

const NoteEdit = ({ card, active }) => {
  const [content, setContent] = useState(card.content);

  const updateContent = async (evt) => {
    evt.preventDefault();
    const body = { content };
    try {
      const body = { content };
      console.log(body);
      const response = await fetch(`http://localhost:5000/notes/${card.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      window.location = "/";
    } catch (error) {
      console.error(error.message);
    }
  };

  // console.log(active);

  return (
    <>
      <div
        className={`ui ${active ? "active" : null} card`}
        key={card.id}
        style={{ backgroundColor: "beige" }}
      >
        <div className="content">
          <img
            className="right floated mini circular ui image"
            src="/images/profile.png"
          />{" "}
          <div className="header">Lê</div>
          <div className="meta">{Date(card.createdAt).substr(4, 11)}</div>
          <div
            className="description"
            style={{ paddingTop: "10px", textAlign: "justify" }}
          >
            <div className="ui fluid icon input">
              <input
                type="text"
                value={content}
                onChange={(evt) => setContent(evt.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="extra content">
          <div className="right floated">
            <div
              className="ui compact labeled positive icon button"
              onClick={(evt) => updateContent(evt)}
            >
              <i className="edit icon"></i>
              Save
            </div>
            <div className="ui compact labeled red icon button">
              <i className="delete icon"></i>
              Cancel
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoteEdit;
