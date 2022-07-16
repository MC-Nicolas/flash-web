import { doc, getDoc, setDoc } from 'firebase/firestore';
import { FolderType, SubFolderType } from '../Types/Flashcards';
import {
  formatDateToDDMMYYYY,
  removeSpecialCharacters,
} from './DataFormatting';
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

export const extractSubFolders = (folders: any, activeFolder: string) => {
  const subFolderNames: string[] = [];
  for (const folder in folders) {
    if (activeFolder === folder) {
      for (const subFolder in folders[folder]) {
        subFolderNames.push(subFolder);
      }
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

  if (folderData[subFolder]) {
    subFolder && flashcards.push(...folderData[subFolder].flashcards);
  }

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

export const createNewFolderToDatabase = async (
  email: string,
  folderName: string
) => {
  await setDoc(
    doc(database, 'users', email),
    {
      folders: {
        [removeSpecialCharacters(folderName)]: {},
      },
    },
    { merge: true }
  );
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
        [removeSpecialCharacters(folderToAddTo)]: {
          [removeSpecialCharacters(subFolderName)]: {
            timeSpent: 0,
            successPercentages: [
              {
                date: formatDateToDDMMYYYY(new Date()),
                totalAnswers: 0,
                success: 0,
              },
            ],
            isImportant: isImportant,
            title: subFolderName,
            flashcards: [],
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
  flashcardBack: string | {}
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
        [removeSpecialCharacters(folderToAddTo)]: {
          [removeSpecialCharacters(subFolderName)]: {
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

export const removeFlashcardFromDB = async (
  email: string,
  folderToRemoveFrom: string,
  subFolderToRemoveFrom: string,
  cardNumber: number
) => {
  const folders = await getFoldersFromDB(email);

  const subFolder: any =
    folders && folders[removeSpecialCharacters(folderToRemoveFrom)];

  const flashcards: any =
    subFolder &&
    subFolder[removeSpecialCharacters(subFolderToRemoveFrom)].flashcards;

  const newFlashcards = flashcards.filter(
    (flashcard: any) => flashcard.number !== cardNumber
  );

  for (let i = 0; i < newFlashcards.length; i++) {
    newFlashcards[i].number = i + 1;
  }

  await setDoc(
    doc(database, 'users', email),
    {
      folders: {
        [removeSpecialCharacters(folderToRemoveFrom)]: {
          [removeSpecialCharacters(subFolderToRemoveFrom)]: {
            flashcards: newFlashcards,
          },
        },
      },
    },
    { merge: true }
  );
};

export const updateSubFolderOnFlashcardResult = async (
  email: string,
  folder: string,
  subFolder: string,
  isSuccess: boolean
) => {
  const folders = await getFoldersFromDB(email);

  // get doc data

  const folderToUpdate: any =
    folders && folders[removeSpecialCharacters(folder)];
  const subFolderToUpdate: any =
    folderToUpdate && folderToUpdate[removeSpecialCharacters(subFolder)];

  const subFolderSuccessPercentages: SuccessPercentagesType[] =
    await subFolderToUpdate.successPercentages;

  if (subFolderSuccessPercentages) {
    const percentagesIdx = extractSuccessPercentagesForDate(
      formatDateToDDMMYYYY(new Date()),
      subFolderSuccessPercentages
    );

    if (percentagesIdx !== -1) {
      let newPercentageData = subFolderSuccessPercentages;
      newPercentageData[percentagesIdx].totalAnswers += 1;
      newPercentageData[percentagesIdx].success += isSuccess ? 1 : 0;

      await updateSuccessPercentage(
        email,
        folders,
        folder,
        subFolder,
        newPercentageData
      );
    } else {
      const newPercentageData = [
        {
          date: formatDateToDDMMYYYY(new Date()),
          totalAnswers: 1,
          success: isSuccess ? 1 : 0,
        },
      ];
      await updateSuccessPercentage(
        email,
        folders,
        folder,
        subFolder,
        newPercentageData
      );
    }
  } else {
    console.log('no subFolder');
  }
};

interface SuccessPercentagesType {
  date: string;
  success: number;
  totalAnswers: number;
}

export const extractSuccessPercentagesForDate = (
  date: string,
  successPercentages: SuccessPercentagesType[]
): number => {
  const idx = successPercentages.findIndex(
    (obj: SuccessPercentagesType) => obj.date === date
  );

  return idx;
};

export const updateSuccessPercentage = async (
  email: string,
  folders: any,
  folder: string,
  subFolder: string,
  updatedSuccessPercentages: SuccessPercentagesType[]
) => {
  const formattedFolder = removeSpecialCharacters(folder);
  const formattedSubFolder = removeSpecialCharacters(subFolder);

  await setDoc(
    doc(database, 'users', email),
    {
      folders: {
        ...folders,
        [formattedFolder]: {
          [formattedSubFolder]: {
            ...[formattedSubFolder],
            successPercentages: updatedSuccessPercentages,
          },
        },
      },
    },
    { merge: true }
  );
};
