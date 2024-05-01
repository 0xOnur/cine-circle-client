import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import userReducer from "@redux/slices/user.slice";

const persistConfig = {
  key: "user",
  storage: storage,
  whitelist: ["user", "accessToken", "refreshToken", "isAuth"],
  blacklist: ["error", "isPending"],
};

const store = configureStore({
  reducer: persistReducer(persistConfig, userReducer),
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
