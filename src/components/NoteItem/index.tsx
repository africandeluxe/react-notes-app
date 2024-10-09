import React from 'react';
import noteItemStyles from './NoteItem.module.scss';

interface NoteProps {
  id: string;
  text: string;
  onDelete: (id: string) => void;
}

const NoteItem: React.FC<NoteProps> = ({ id, text, onDelete }) => {
  return (
    <li className={noteItemStyles['note-item']}>
      <span>{text}</span>
      <button onClick={() => onDelete(id)}>Delete</button>
    </li>
  );
};

export default NoteItem;