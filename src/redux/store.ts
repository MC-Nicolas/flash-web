import { combineReducers, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import themeReducer from './theme/themeSlice';
import userReducer from './user/UserSlice';
import folderReducer from './foldersFlashcards/foldersFlashcards';
import createReducer from './create/create';
import newFlashcardReducer from './newFlashcard/newFlashcard';
import studyReducer from './study/study';

const rootReducer = combineReducers({
  theme: themeReducer,
  user: userReducer,
  folders: folderReducer,
  create: createReducer,
  newFlashcard: newFlashcardReducer,
  study: studyReducer,
});

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist: ['create'],
};

const persitedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persitedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
});

let persistor = persistStore(store);

export { persistor };

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
