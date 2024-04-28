import { createSlice } from "@reduxjs/toolkit";
import * as userApi from "@api/user.api";

type erroryPayload = {
  message: string;
};

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
      state.isAuth = false;
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;
      state.isPending = false;
      state.error = {
        message: null,
      };
    },
  },
  extraReducers: (builder) => {
    // Create user
    builder.addCase(userApi.createUser.pending, (state) => {
      state.isPending = true;
    });
    builder.addCase(userApi.createUser.fulfilled, (state, action) => {
      state.isPending = false;
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.isAuth = true;
    });
    builder.addCase(userApi.createUser.rejected, (state, action) => {
      state.isPending = false;
      state.error = action.payload as erroryPayload || {
        message: "Something went wrong",
      };
    });
  }
});


export const { logoutUser } = userSlice.actions;

export default userSlice.reducer;