import React from "react";

import NoteInput from "./components/NoteInput";
import NoteList from "./components/NoteList";
import NoteEdit from "./components/NoteEdit";

const App = () => {
  return (
    <>
      <div className="ui container">
        <NoteInput />
        <NoteList />
        {/* <NoteEdit /> */}
      </div>
    </>
  );
};

export default App;
