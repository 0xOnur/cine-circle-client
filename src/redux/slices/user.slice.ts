import { SerializedError, createSlice } from "@reduxjs/toolkit";
import * as userApi from "../../api/user.api";

interface errorPayload extends SerializedError {
  message: string;
}

export interface UserState {
  isAuth: boolean;
  user: IUser | null;
  accessToken: string | null;
  refreshToken: string | null;
  isPending: boolean;
  error: {
    message: string | null;
  };
}

const initialState: UserState = {
  isAuth: false,
  user: null,
  accessToken: null,
  refreshToken: null,
  isPending: false,
  error: {
    message: null,
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logoutUser: (state) => {
      Object.assign(state, initialState);
    },
  },
  extraReducers: (builder) => {
    // Create user
    builder
      .addCase(userApi.createUser.pending, (state) => {
        state.isPending = true;
      })
      .addCase(userApi.createUser.fulfilled, (state, action) => {
        state.isPending = false;
        state.user = action.payload.user;
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.isAuth = true;
      })
      .addCase(userApi.createUser.rejected, (state, action) => {
        state.isPending = false;
        state.error = {
          message: action.error?.message || "An unexpected error occurred",
        };
      });
    // Login user
    builder
      .addCase(userApi.loginUser.pending, (state) => {
        state.isPending = true;
      })
      .addCase(userApi.loginUser.fulfilled, (state, action) => {
        state.isPending = false;
        state.user = action.payload.user;
        state.accessToken = action.payload.tokens.accessToken;
        state.refreshToken = action.payload.tokens.refreshToken;
        state.isAuth = true;
      })
      .addCase(userApi.loginUser.rejected, (state, action) => {
        state.isPending = false;
        state.error = {
          message: (action.payload as errorPayload)?.message || "Login failed due to server error",
        };
      });
    // Get new accessToken
    builder
      .addCase(userApi.updateAccessToken.pending, (state) => {
        state.isPending = true;
      })
      .addCase(userApi.updateAccessToken.fulfilled, (state, action) => {
        state.isPending = false;
        state.accessToken = action.payload;
      })
      .addCase(userApi.updateAccessToken.rejected, (state, action) => {
        state.isPending = false;
        state.error = {
          message: action.error?.message || "An unexpected error occurred",
        };
      });
  },
});

const {actions, reducer} = userSlice;

export const {logoutUser} = actions;

export default reducer;
