import React, { useState, useEffect } from 'react';
import '../styles/App.scss';

const NoteApp: React.FC = () => {
  const [note, setNote] = useState<string>('');
  const [notes, setNotes] = useState<string[]>([]);

  useEffect(() => {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    if (note) {
      setNotes([...notes, note]);
      setNote('');
    }
  };

  const removeNote = (index: number) => {
    const newNotes = notes.filter((_, i) => i !== index);
    setNotes(newNotes);
  };

  return (
    <div className="container">
      <h1>Notes</h1>
      <div className="input-container">
        <input
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Enter a new note"
        />
        <button onClick={addNote}>Add Note</button>
      </div>
      <ul className="note-list">
        {notes.map((n, index) => (
          <li key={index} className="note-item">
            {n}
            <button onClick={() => removeNote(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NoteApp;