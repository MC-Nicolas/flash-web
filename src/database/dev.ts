import { doc, getDoc, setDoc } from 'firebase/firestore';
import { FolderType, SubFolderType } from '../Types/Flashcards';

import database from './firebase';

export const addSuggestionToDB = async (text: string) => {
  const docRef = doc(database, 'dev', 'suggestions');
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    const { suggestions } = docSnap.data();
    suggestions.push(text);
    setDoc(docRef, { suggestions });
  } else {
    setDoc(docRef, { suggestions: [text] });
  }
};

export const getSuggestionsFromDB = async () => {
  const docRef = doc(database, 'dev', 'suggestions');
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    const { suggestions } = docSnap.data();
    return suggestions;
  }
  return [];
};

export const removeSuggestionFromDB = async (text: string) => {
  const docRef = doc(database, 'dev', 'suggestions');
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    const { suggestions } = docSnap.data();
    const newSuggestions = suggestions.filter((s: any) => s !== text);
    setDoc(docRef, { suggestions: newSuggestions });
  }
};
