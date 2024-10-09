import React, { useState } from 'react';
import noteAppStyles from './NoteApp.module.scss';
import NoteItem from '../NoteItem';
interface Note {
  id: string;
  text: string;
}

const NoteApp: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [newNote, setNewNote] = useState<string>('');

  const addNote = () => {
    if (newNote.trim() === '') return;
    const note: Note = {
      id: Date.now().toString(),
      text: newNote,
    };
    setNotes([...notes, note]);
    setNewNote('');
  };

  const deleteNote = (id: string) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <div className="container">
      <div className="note-section">
        <div className={noteAppStyles['input-container']}>
          <input type="text" value={newNote} placeholder="Add a new note" onChange={(e) => setNewNote(e.target.value)} />
          <button onClick={addNote} className={noteAppStyles['note-button']}>Add Note</button>
        </div>

        <ul className={noteAppStyles['note-list']}>
          {notes.map((note) => (
            <NoteItem key={note.id} id={note.id} text={note.text} onDelete={deleteNote} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NoteApp;