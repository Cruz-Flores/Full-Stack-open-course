import React from 'react';
import NewNote from './components/NewNote';
import Notes from './components/Notes.js';
import { VisibilityFilter } from './components/VisibilityFilter.js';

const App = () => {
  return (
    <div>
      <NewNote />
      <VisibilityFilter />
      <Notes />
    </div>
  );
};

export default App;
