import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from '../store';

const initialState: {
  activeFolder: string;
  activeSubFolder: string;
  foldersOptions: any[];
  flashcard: { front: any; back: any } | { front: any; back: any[] };
} = {
  activeFolder: '',
  activeSubFolder: '',
  foldersOptions: [],
  flashcard: { front: '', back: [{ isCorrect: false, text: '' }] },
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
    setFlashcardFront: (state, action) => {
      state.flashcard.front = action.payload;
    },
    setFlashcardBack: (state, action) => {
      state.flashcard.back[action.payload.index] = action.payload.value;
    },
  },
});

export const {
  setActiveFolder,
  setActiveSubFolder,
  setFoldersOptions,
  setFlashcardFront,
  setFlashcardBack,
} = activeFolder.actions;
export const selectActiveFolder = (state: RootState) =>
  state.activeFolder.activeFolder;
export const selectActiveSubFolder = (state: RootState) =>
  state.activeFolder.activeSubFolder;
export const selectFoldersOptions = (state: RootState) =>
  state.activeFolder.foldersOptions;

export default activeFolder.reducer;
