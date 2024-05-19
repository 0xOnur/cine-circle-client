import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "@redux/slices/user.slice";
import watchlistReducer from "@redux/slices/watchlist.slice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "watchlist"], // Persisted reducers
  blacklist: ["error", "isPending"], // Non-persisted reducers
};

const rootReducer = combineReducers({
  user: userReducer,
  watchlist: watchlistReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
