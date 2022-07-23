import { createSlice } from '@reduxjs/toolkit';
import { shuffleArray } from '../../utils/dataFormatting';

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
        id: number;
      }[] = [];
      action.payload.answers.forEach(
        (answer: { text: string; isCorrect: boolean }) => {
          answers.push({
            ...answer,
            isFirstInit: true,
            id: Math.floor(Math.random() * 10000),
          });
        }
      );
      state.QCMAnswers = action.payload.shuffle
        ? shuffleArray(answers)
        : answers;
    },
    changeQCMAnswer: (state, action) => {
      const newAnswers = [...state.QCMAnswers];
      const foundAnswer = newAnswers.find(
        (answer) => answer.id === action.payload
      );
      if (foundAnswer) {
        foundAnswer.isCorrect = !foundAnswer.isCorrect;
      }
      state.QCMAnswers = newAnswers;
    },
    setIsFirstInit: (state, action) => {
      const newAnswers = [...state.QCMAnswers];
      const foundAnswer = newAnswers.find(
        (answer) => answer.id === action.payload.id
      );
      if (foundAnswer) {
        foundAnswer.isFirstInit = action.payload.isFirstInit;
      }
      state.QCMAnswers = newAnswers;
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
