import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from '../store';

const initialState: {
  activeFolder: string;
  activeSubFolder: string;
  foldersOptions: any[];
} = {
  activeFolder: '',
  activeSubFolder: '',
  foldersOptions: [],
};
export const activeFolder = createSlice({
  name: 'activeFolder',
  initialState,
  reducers: {
    setActiveFolder: (state, action) => {
      state.activeFolder = action.payload;
    },
    setActiveSubFolder: (state, action) => {
      state.activeSubFolder = action.payload;
    },
    setFoldersOptions: (state, action) => {
      state.foldersOptions = action.payload;
    },
  },
});

export const { setActiveFolder, setActiveSubFolder, setFoldersOptions } =
  activeFolder.actions;
export const selectActiveFolder = (state: RootState) =>
  state.activeFolder.activeFolder;
export const selectActiveSubFolder = (state: RootState) =>
  state.activeFolder.activeSubFolder;
export const selectFoldersOptions = (state: RootState) =>
  state.activeFolder.foldersOptions;

export default activeFolder.reducer;
