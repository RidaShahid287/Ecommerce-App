import cartReducer from "./cartReducer";
import { configureStore } from "@reduxjs/toolkit";
/* const stripe = require('stripe')('sk_test_51MZOTMJ7micGfO1qjHYmzcb5v3fDteId3S9uIRB2P0CjiSDrIe9r4xFZAKyLlNOiuGst0xjJeYTrJ8JH99gC9Zsg00Xnjkn04x');
 */import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, cartReducer);

export const store = configureStore({
  reducer: {
    cart: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);