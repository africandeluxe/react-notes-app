import React from 'react';
import styles from './NoteItem.module.scss';

interface NoteItemProps {
  id: string;
  text: string;
  onDelete: (id: string) => void;
}

const NoteItem: React.FC<NoteItemProps> = ({ id, text, onDelete }) => {
  return (
    <li className={styles['note-item']}>
      {text}
      <button onClick={() => onDelete(id)}>Delete</button>
    </li>
  );
};

export default NoteItem;