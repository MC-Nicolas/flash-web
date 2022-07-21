import { createSlice } from '@reduxjs/toolkit';

const initialState: {
  flashcard: { front: any; back: any } | { front: any; back: any[] };
} = {
  flashcard: { front: '', back: [{ isCorrect: false, text: '' }] },
};

export const create = createSlice({
  name: 'create',
  initialState,
  reducers: {
    setFlashcardFront: (state, action) => {
      state.flashcard.front = action.payload;
    },
    setFlashcardBack: (state, action) => {
      if (action.payload.typeOfFlashcard.toLowerCase() === 'qcm') {
        if (action.payload.type === 'add') {
          state.flashcard.back.push({ isCorrect: false, text: '' });
        } else if (action.payload.type === 'update') {
          state.flashcard.back[action.payload.index] = action.payload.value;
        } else if (action.payload.type === 'reset') {
          state.flashcard.back = [{ isCorrect: false, text: '' }];
        }
      } else state.flashcard.back = action.payload.value;
    },
    removeFlashcardBack: (state, action) => {
      state.flashcard.back = state.flashcard.back.filter(
        (back: { text: string; isCorrect: false }) =>
          back.text !== action.payload
      );
    },
  },
});

export const { setFlashcardFront, setFlashcardBack, removeFlashcardBack } =
  create.actions;

export default create.reducer;
