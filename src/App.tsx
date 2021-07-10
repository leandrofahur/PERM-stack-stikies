import React from 'react';
import { Note } from './components/Note';
// import { NoteList } from './components/NoteList';
import GlobalStyles from './styles/GlobalStyles';

const App: React.FC = () => {
  return (
    <div>
      <Note />
      <GlobalStyles />
    </div>
  );
};

export default App;
