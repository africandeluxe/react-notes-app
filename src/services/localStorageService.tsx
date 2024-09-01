import { Note } from '../types/Note';

export const loadNotes = (): Note[] => {
  const savedNotes = localStorage.getItem('notes');
  if (savedNotes) {
    try {
      return JSON.parse(savedNotes) as Note[];
    } catch (error) {
      console.error("Failed to parse notes from local storage:", error);
    }
  }
  return [];
};

export const saveNotes = (notes: Note[]): void => {
  localStorage.setItem('notes', JSON.stringify(notes));
};