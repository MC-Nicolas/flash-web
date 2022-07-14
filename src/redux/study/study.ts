import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from '../store';

const initialState: {
  QCMAnswers: any[];
} = {
  QCMAnswers: [],
};

export const studySlice = createSlice({
  name: 'study',
  initialState,
  reducers: {
    setQCMAnswers: (state, action) => {
      state.QCMAnswers = action.payload;
    },
    changeQCMAnswer: (state, action) => {
      state.QCMAnswers[action.payload].isCorrect =
        !state.QCMAnswers[action.payload].isCorrect;
    },
  },
});

export const { setQCMAnswers, changeQCMAnswer } = studySlice.actions;

export default studySlice.reducer;
