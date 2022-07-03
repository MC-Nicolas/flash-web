import { createSlice } from '@reduxjs/toolkit';
import { extractImportantFolders } from '../../database/foldersData';
import { FolderType } from '../../Types/Flashcards';

import type { RootState } from '../store';

const initialState: {
  folders: FolderType;
  importantFolders: any;
  activeFolder: string;
  activeSubFolder: string;
  foldersOptions: any[];
  subFoldersOptions: any[];
} = {
  folders: {},
  importantFolders: {},
  activeFolder: '',
  activeSubFolder: '',
  foldersOptions: [],
  subFoldersOptions: [],
};
export const foldersSlice = createSlice({
  name: 'folders',
  initialState,
  reducers: {
    setFolders: (state, action) => {
      state.folders = action.payload;
    },
    setImportantFolders: (state, action) => {
      state.importantFolders = action.payload;
    },
    setActiveFolder: (state, action) => {
      state.activeFolder = action.payload;
    },
    setActiveSubFolder: (state, action) => {
      state.activeSubFolder = action.payload;
    },
    setFoldersOptions: (state, action) => {
      state.foldersOptions = action.payload;
    },
    setSubFoldersOptions: (state, action) => {
      state.subFoldersOptions = action.payload;
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
