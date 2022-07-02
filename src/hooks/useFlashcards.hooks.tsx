import { useState } from 'react';
import { useAppSelector } from '../redux/redux.hooks';

const useFlashcards = (folder: string, subFolder: string) => {
  const { folders } = useAppSelector((state) => state.folders);
  const [flashcards, setFlashcards] = useState();
  const subFolderData = folders[folder][subFolder];

  return { flashcards };
};
export default useFlashcards;
