import { createSlice } from '@reduxjs/toolkit';
import { theme } from '../../theme/theme';

import type { RootState } from '../store';

interface ThemeState {
  theme: any;
}

const initialState: ThemeState = {
  theme: theme,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {},
});

export const selectTheme = (state: RootState) => state.theme;

export default themeSlice.reducer;
