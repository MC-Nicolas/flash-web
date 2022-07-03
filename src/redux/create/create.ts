import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from '../store';

const initialState: { activeFolder: any; activeSubFolder: any } = {
  activeFolder: '',
  activeSubFolder: '',
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
  },
});

export const { setActiveFolder, setActiveSubFolder } = activeFolder.actions;
export const selectActiveFolder = (state: RootState) =>
  state.activeFolder.activeFolder;
export const selectActiveSubFolder = (state: RootState) =>
  state.activeFolder.activeSubFolder;

export default activeFolder.reducer;
