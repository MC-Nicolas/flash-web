import { useEffect, useState } from 'react';
import { useAppSelector } from '../redux/redux.hooks';
import { FlashcardType } from '../Types/Flashcards';

const useFlashcards = (folder: string, subFolder: string) => {
  const { folders } = useAppSelector((state) => state.folders);
  const [flashcards, setFlashcards] = useState<FlashcardType[]>([
    { front: '', back: '', number: 1 },
  ]);

  useEffect(() => {
    if (folder && subFolder) {
      const flashcardsData: any = folders[folder][subFolder]?.flashcards;
      if (flashcardsData) setFlashcards(flashcardsData);
    }
  }, [folders, folder, subFolder]);

  return { flashcards };
};
export default useFlashcards;
