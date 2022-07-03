import { configureStore } from '@reduxjs/toolkit';

import themeReducer from './theme/themeSlice';
import userReducer from './user/UserSlice';
import folderReducer from './foldersFlashcards/foldersFlashcards';
import activeFolderReducer from './create/create';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    user: userReducer,
    folders: folderReducer,
    activeFolder: activeFolderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
