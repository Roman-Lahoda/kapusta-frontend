import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
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

import transactionReducer from './transaction/transaction-slice';
import authReducer from './auth/auth-slice';

const middleware = [
  ...getDefaultMiddleware({
    // serializableCheck: {
    //   ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    // },
    serializableCheck: false,
  }),
];

const authPersistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

const persistedReducer = persistReducer(authPersistConfig, authReducer);

const store = configureStore({
  reducer: {
    auth: persistedReducer,
    transactions: transactionReducer,
  },
  devtools: true,
  // devtools: process.env.NODE_ENV === 'development' ? true : false,
  middleware,
});
const persistor = persistStore(store);

export default { store, persistor };
