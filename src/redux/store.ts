import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import themeReducer from './theme/themeSlice';
import userReducer from './user/UserSlice';
import folderReducer from './foldersFlashcards/foldersFlashcards';
import activeFolderReducer from './create/create';
import newFlashcardReducer from './newFlashcard/newFlashcard';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    user: userReducer,
    folders: folderReducer,
    activeFolder: activeFolderReducer,
    newFlashcard: newFlashcardReducer,
  },
  middleware: [logger],
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
