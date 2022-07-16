import { createSlice } from '@reduxjs/toolkit';

const initialState: { isLoading: boolean } = {
  isLoading: false,
};

export const loader = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setIsLoading } = loader.actions;

export default loader.reducer;
