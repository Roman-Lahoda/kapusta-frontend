import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './auth/auth-slice';
import transactionsReducer from './transactions/transactions-slice';
// import contactsReducer from './reducers'; // (boilerplate)

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const transactionPersistConfig = {
  key: 'transactions',
  storage,
  blacklist: [],
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);
const persistedTransactionsReducer = persistReducer(transactionPersistConfig, transactionsReducer);

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    transactions: persistedTransactionsReducer,
    // contacts: contactsReducer, // (boilerplate)
  },
  middleware: middleware,
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export { store, persistor };
