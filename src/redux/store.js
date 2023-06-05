import { configureStore } from '@reduxjs/toolkit';
import { usersReducer } from './usersSlice';

import storage from 'redux-persist/lib/storage';

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

const persistConfig = {
  key: ' users',
  storage,
  whitelist: ['followed'],
};

const persistedFollowed = persistReducer(persistConfig, usersReducer);

// export const store = configureStore({
//   reducer: {
//     users: usersReducer,
//     // filters: filtersReducer,
//   },
// });
export const store = configureStore({
  reducer: {
    users: persistedFollowed,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
