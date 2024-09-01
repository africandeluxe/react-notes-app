import React, { useState, useEffect } from 'react';
import styles from './NoteApp.module.scss';
import { Note } from '../../types/Note';
import { loadNotes, saveNotes } from '../../services/localStorageService';

const NoteApp: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>(loadNotes());
  const [input, setInput] = useState<string>('');

  useEffect(() => {
    saveNotes(notes);
  }, [notes]);

  const addNote = () => {
    if (input.trim()) {
      setNotes([...notes, { id: Date.now().toString(), text: input }]);
      setInput('');
    }
  };

  const removeNote = (id: string) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <div className={styles.container}>
      <h1>Notes</h1>
      <div className={styles['input-container']}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a note"
        />
        <button onClick={addNote}>Add Note</button>
      </div>
      <ul className={styles['note-list']}>
        {notes.map(note => (
          <li key={note.id} className={styles['note-item']}>
            {note.text}
            <button onClick={() => removeNote(note.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NoteApp;