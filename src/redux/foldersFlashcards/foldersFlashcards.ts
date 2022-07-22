import { createSlice } from '@reduxjs/toolkit';
import {
  extractFlashcards,
  extractFolders,
  extractImportantFolders,
  extractSubFolders,
} from '../../database/foldersData';
import { FolderType } from '../../Types/Flashcards';

import type { RootState } from '../store';

const initialState: {
  folders: FolderType;
  importantFolders: any;
  activeFolder: string;
  activeSubFolder: string;
  foldersOptions: any[];
  subFoldersOptions: any[];
  flashcards: any[];
  temporaryFolder: any[];
} = {
  folders: {},
  importantFolders: {},
  activeFolder: '',
  activeSubFolder: '',
  foldersOptions: [],
  subFoldersOptions: [],
  flashcards: [],
  temporaryFolder: [],
};
export const foldersSlice = createSlice({
  name: 'folders',
  initialState,
  reducers: {
    setFolders: (state, action) => {
      const foldersOptions = extractFolders(action.payload);
      const importantFolders = extractImportantFolders(action.payload);
      const subFoldersOptions = extractSubFolders(
        action.payload,
        foldersOptions[0]
      );

      state.folders = action.payload;
      state.foldersOptions = foldersOptions;
      state.activeFolder = foldersOptions[0];
      state.importantFolders = importantFolders;
      state.subFoldersOptions = subFoldersOptions;
      state.activeSubFolder = subFoldersOptions[0];
      state.flashcards = extractFlashcards(
        action.payload,
        foldersOptions[0],
        subFoldersOptions[0]
      );
    },
    setImportantFolders: (state, action) => {
      state.importantFolders = action.payload;
    },
    setActiveFolder: (state, action) => {
      const subFoldersOptions = extractSubFolders(
        state.folders,
        action.payload
      );
      state.activeFolder = action.payload;
      if (subFoldersOptions.length > 0) {
        state.subFoldersOptions = subFoldersOptions;
        state.activeSubFolder = subFoldersOptions[0];
        state.flashcards = extractFlashcards(
          state.folders,
          action.payload,
          subFoldersOptions[0]
        );
      }
    },
    setActiveSubFolder: (state, action) => {
      state.activeSubFolder = action.payload;
      state.flashcards = extractFlashcards(
        state.folders,
        state.activeFolder,
        action.payload
      );
    },
    setFoldersOptions: (state, action) => {
      state.foldersOptions = action.payload;
    },
    setSubFoldersOptions: (state, action) => {
      state.subFoldersOptions = action.payload;
    },
    setFlashcards: (state, action) => {
      state.flashcards = action.payload;
    },
    removeFlashcard: (state, action) => {
      state.flashcards = state.flashcards.filter(
        (flashcard) => flashcard.number !== action.payload
      );
    },
    addFlashcard: (state, action) => {
      state.flashcards = [...state.flashcards, action.payload];
    },
    addElementTotemporaryFolder: (state, action) => {
      state.temporaryFolder = [...state.temporaryFolder, action.payload];
    },
    removeElementFromTemporaryFolder: (state, action) => {
      state.temporaryFolder = state.temporaryFolder.filter(
        (element) => element.number !== action.payload
      );
    },
  },
});

export const {
  setFolders,
  setImportantFolders,
  setActiveFolder,
  setActiveSubFolder,
  setFoldersOptions,
  setSubFoldersOptions,
  removeFlashcard,
  addFlashcard,
  addElementTotemporaryFolder,
  removeElementFromTemporaryFolder,
} = foldersSlice.actions;
export const selectFolders = (state: RootState) => state.folders;
export const selectImportantFolders = (state: RootState) =>
  state.folders.importantFolders;
export const selectActiveFolder = (state: RootState) =>
  state.folders.activeFolder;
export const selectActiveSubFolder = (state: RootState) =>
  state.folders.activeSubFolder;
export const selectFoldersOptions = (state: RootState) =>
  state.folders.foldersOptions;
export const selectSubFoldersOptions = (state: RootState) =>
  state.folders.subFoldersOptions;

export default foldersSlice.reducer;
