import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from '../store';

import { UserType } from '../../Types/UserTypes';

const initialState: UserType = {
  email: 'mace_nicolas@icloud.com',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
