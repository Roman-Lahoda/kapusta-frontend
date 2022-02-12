import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import authReduser from './auth/authSlices';
// import transactionsReducer from './transactions/transactionsSlices';
// import categoriesReducer from './categories/categoriesSlices';
// import reportReducer from './report/reportSlices';
// import balanceReducer from './balance/balanceSlices';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: false,
  }),
];

const rootReducer = combineReducers({
  // auth: persistReducer(persistConfig, authReduser),
  // transactions: transactionsReducer,
  // categories: categoriesReducer,
  // report: reportReducer,
  // userBalance: balanceReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
