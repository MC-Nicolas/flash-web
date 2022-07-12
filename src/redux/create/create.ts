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
      state.flashcard.back[action.payload.index] = action.payload.value;
    },
  },
});

export const { setFlashcardFront, setFlashcardBack } = create.actions;

export default create.reducer;
