import React, { useEffect, useState, useRef } from "react";
// import NoteEdit from "./NoteEdit";

const NoteList = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [cards, setCards] = useState([]);
  const [editNote, setEditNote] = useState(false);
  const [content, setContent] = useState("");

  const updateContent = async (evt, id) => {
    evt.preventDefault();
    const body = { content };
    try {
      const body = { content };
      console.log(body);
      const response = await fetch(`http://localhost:5000/notes/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      window.location = "/";
    } catch (error) {
      console.error(error.message);
    }
  };

  const getNotes = async () => {
    try {
      const response = await fetch("http://localhost:5000/notes/all");
      const jsonResponse = await response.json();
      setCards(jsonResponse.message);
    } catch (error) {
      console.error(error.message);
    }
  };

  const onEditNote = (content) => {
    setEditNote(!editNote);
    setContent(content);
  };

  // use Effect to keep track of the browser window width:
  useEffect(() => {
    const handleWindowSize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowSize);

    return () => {
      window.removeEventListener("resize", handleWindowSize);
    };
  }, []);

  useEffect(() => {
    getNotes();
  }, []);

  const onDeleteNote = async (evt, id) => {
    evt.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/notes/${id}`, {
        method: "DELETE",
      });
      window.location = "/";
    } catch (error) {
      console.error(error.message);
    }
  };

  const renderCards = cards.map((card) => {
    return (
      <div
        className="ui card"
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
          {editNote ? (
            <div className="ui fluid icon input">
              <input
                type="text"
                value={content}
                onChange={(evt) => setContent(evt.target.value)}
              />
            </div>
          ) : (
            <div
              className="description"
              style={{ paddingTop: "10px", textAlign: "justify" }}
            >
              {card.content}
            </div>
          )}
        </div>
        <div className="extra content">
          {editNote ? (
            <div className="right floated">
              <div
                className="ui compact labeled positive icon button"
                onClick={(evt) => updateContent(evt, card.id)}
              >
                <i className="edit icon"></i>
                Save
              </div>
              <div className="ui compact labeled red icon button">
                <i className="delete icon"></i>
                Cancel
              </div>
            </div>
          ) : (
            <div className="right floated">
              <div
                className="ui compact labeled brown icon button"
                onClick={() => {
                  onEditNote(card.content);
                }}
              >
                <i className="edit icon"></i>
                Edit
              </div>
              <div
                className="ui compact labeled red icon button"
                onClick={(evt) => onDeleteNote(evt, card.id)}
              >
                <i className="delete icon"></i>
                Delete
              </div>
            </div>
          )}
        </div>
      </div>
    );
  });

  return (
    <>
      <div
        className={`ui ${width > 980 ? "three" : "two"} stackable cards`}
        style={{ paddingTop: "10px" }}
      >
        {renderCards}
      </div>
    </>
  );
};

export default NoteList;
