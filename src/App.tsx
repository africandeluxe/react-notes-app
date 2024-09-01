import React from 'react';
import NoteApp from './components/NoteApp';
import '../src/styles/App.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <NoteApp />
    </div>
  );
};

export default App;