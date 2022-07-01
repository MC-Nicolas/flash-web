import { doc, getDoc } from 'firebase/firestore';
import { FolderType, SubFolderType } from '../Types/Flashcards';
import database from './firebase';

export const getFoldersFromDB = async (email: string) => {
  const docRef = doc(database, 'users', email);
  const docSnap = await getDoc(docRef);

  const data: FolderType | undefined = docSnap.data();

  return data?.folders;
};

export const extractImportantFolders = (folders: any) => {
  const importantFolders: SubFolderType[] = [];

  Object.keys(folders).forEach((key, index) => {
    Object.keys(folders[key]).forEach((subKey) => {
      if (folders[key][subKey].isImportant) {
        importantFolders.push(folders[key][subKey]);
      }
    });
  });

  return importantFolders;
};
export const extractPercentageFromImportantFoldersSuccess = (folders: any) => {
  if (folders.length > 0) {
    const total = folders.reduce(
      (acc: number, curr: SubFolderType) => acc + curr.successPercentage,
      0
    );
    return total / folders.length;
  } else return 0;
};
