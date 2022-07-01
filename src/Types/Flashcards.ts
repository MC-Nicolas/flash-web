export interface FlashcardType {
  back: string;
  front: string;
  number: number;
}

export interface FolderType {
  [key: string]: {
    [key: string]: {
      flashcards: FlashcardType[];
      successPercentage: number;
      title: string;
      timeSpent: number;
    };
  };
}
export interface SubFolderType {
  title: string;
  flashcards: any[];
  timeSpent: number;
  isImportant: boolean;
  successPercentage: number;
}
