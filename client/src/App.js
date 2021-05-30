import React from "react";

import NoteInput from "./components/NoteInput";
import NoteList from "./components/NoteList";

const App = () => {
  return (
    <>
      <div className="ui container">
        <NoteInput />
        <NoteList />
      </div>
    </>
  );
};

export default App;
