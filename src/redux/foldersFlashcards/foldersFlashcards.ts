import { createSlice } from '@reduxjs/toolkit';
import { extractImportantFolders } from '../../database/foldersData';
import { FolderType } from '../../Types/Flashcards';

import type { RootState } from '../store';

const initialState: { folders: FolderType; importantFolders: any } = {
  folders: {},
  importantFolders: {},
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
  },
});

export const { setFolders, setImportantFolders } = foldersSlice.actions;
export const selectFolders = (state: RootState) => state.folders;

export default foldersSlice.reducer;
