import { doc, getDoc, setDoc } from 'firebase/firestore';
import { FolderType, SubFolderType } from '../Types/Flashcards';
import { removeSpecialCharacters } from './DataFormatting';
import database from './firebase';

export const getFoldersFromDB = async (email: string) => {
  const docRef = doc(database, 'users', email);
  const docSnap = await getDoc(docRef);

  const data: FolderType | undefined = docSnap.data();

  return data?.folders;
};

export const extractFolders = (folders: any) => {
  const folderNames: string[] = [];

  for (const folder in folders) {
    folderNames.push(folder);
  }

  return folderNames;
};

export const extractSubFolders = (folders: any) => {
  const subFolderNames: string[] = [];

  for (const folder in folders) {
    for (const subFolder in folders[folder]) {
      subFolderNames.push(subFolder);
    }
  }

  return subFolderNames;
};

export const extractFlashcards = (
  folders: any,
  folder: string,
  subFolder: string
) => {
  const flashcards: any[] = [];

  const folderData = folders[folder];

  subFolder && flashcards.push(...folderData[subFolder]?.flashcards);

  return flashcards;
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

export const createNewFolderToDatabase = async (
  email: string,
  folderName: string
) => {
  const folders = await getFoldersFromDB(email);

  await setDoc(doc(database, 'users', email), {
    folders: { ...folders, [removeSpecialCharacters(folderName)]: {} },
  });

  console.log(folders);
};

export const createNewSubFolder = async (
  email: string,
  folderToAddTo: string,
  isImportant: boolean,
  subFolderName: string
) => {
  const folders = await getFoldersFromDB(email);

  await setDoc(
    doc(database, 'users', email),
    {
      folders: {
        ...folders,
        [removeSpecialCharacters(folderToAddTo)]: {
          [removeSpecialCharacters(subFolderName)]: {
            timeSpent: 0,
            successPercentage: 0,
            isImportant: isImportant,
            title: subFolderName,
          },
        },
      },
    },
    { merge: true }
  );
};

export const createNewFlashcard = async (
  email: string,
  folderToAddTo: string,
  subFolderName: string,
  flashcardFront: string,
  flashcardBack: string
) => {
  const folders = await getFoldersFromDB(email);

  const subFolder: any =
    folders && folders[removeSpecialCharacters(folderToAddTo)];

  const flashcards: any =
    subFolder && subFolder[removeSpecialCharacters(subFolderName)].flashcards;

  await setDoc(
    doc(database, 'users', email),
    {
      folders: {
        ...folders,
        [removeSpecialCharacters(folderToAddTo)]: {
          [removeSpecialCharacters(subFolderName)]: {
            ...[removeSpecialCharacters(subFolderName)],
            flashcards: [
              ...flashcards,
              {
                front: flashcardFront,
                back: flashcardBack,
                number: flashcards.length + 1,
              },
            ],
          },
        },
      },
    },
    { merge: true }
  );
};
