import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from '../store';

import { UserType } from '../../Types/UserTypes';

const initialState: UserType = {
  email: '',
  isUserAuthenticated: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserEmail: (state, action) => {
      state.email = action.payload;
      state.isUserAuthenticated = true;
    },
  },
});

export const { setUserEmail } = userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
