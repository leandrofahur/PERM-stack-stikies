import React, { useEffect, useState } from "react";

const NoteList = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [cards, setCards] = useState([]);

  const getNotes = async () => {
    try {
      const response = await fetch("http://localhost:5000/notes/all");
      const jsonResponse = await response.json();
      setCards(jsonResponse.message);
    } catch (error) {
      console.error(error.message);
    }
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

  const renderCards = cards.map((card) => {
    return (
      <div className="ui card" key={card.id}>
        <div className="content">
          <div
            className="description"
            style={{ paddding: "10px", textAlign: "justify" }}
          >
            {card.content}
          </div>
        </div>
        <div className="extra content">
          <div className="right floated author">
            <img className="ui avatar image" src="/images/profile.png" />{" "}
            Leandro
          </div>
          <div className="left floated author">{card.createdAt}</div>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className={`ui ${width > 980 ? "three" : "two"} stackable cards`}>
        {renderCards}
      </div>
    </>
  );
};

export default NoteList;
