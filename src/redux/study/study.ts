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
      const answers: {
        text: string;
        isCorrect: boolean;
        isFirstInit: boolean;
      }[] = [];
      action.payload.forEach((answer: { text: string; isCorrect: boolean }) => {
        answers.push({ ...answer, isFirstInit: true });
      });
      state.QCMAnswers = answers;
    },
    changeQCMAnswer: (state, action) => {
      state.QCMAnswers[action.payload].isCorrect =
        !state.QCMAnswers[action.payload].isCorrect;
    },
    setIsFirstInit: (state, action) => {
      state.QCMAnswers[action.payload.index].isFirstInit =
        action.payload.isFirstInit;
    },
    setFirstInitToAll: (state, action) => {
      state.QCMAnswers.forEach((answer) => {
        answer.isFirstInit = action.payload;
      });
    },
  },
});

export const {
  setQCMAnswers,
  changeQCMAnswer,
  setIsFirstInit,
  setFirstInitToAll,
} = studySlice.actions;

export default studySlice.reducer;
