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
          <div
            className="description"
            style={{ paddingTop: "10px", textAlign: "justify" }}
          >
            {card.content}
          </div>
        </div>
        <div className="extra content">
          <div className="right floated">
            <div className="ui compact labeled brown icon button">
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

// const renderCards = cards.map((card) => {
//   return (
//     <div className="ui card" key={card.id}>
//       <div className="content">
//         <div className="header">Note to self</div>
//         <div className="meta">
//           <span className="category">
//             {Date(card.createdAt).substr(4, 11)}
//           </span>
//         </div>
//         <div
//           className="description"
//           style={{ textAlign: "justify", padding: "7px" }}
//         >
//           {card.content}
//         </div>
//       </div>
//       <div className="extra content">
//         <div className="right floated author">
//           <img className="ui avatar image" src="/images/profile.png" />{" "}
//           Leandro
//         </div>
//         <div className="left floated author">Badge</div>
//       </div>
//       <div className="ui bottom attached button">Edit</div>
//     </div>
//   );
// });
