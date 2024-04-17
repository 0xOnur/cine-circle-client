import { PayloadAction, createSlice } from "@reduxjs/toolkit";
// import * as userApi from "@api/userApi";

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
  isAuth: true,
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
      state.isAuth = true;
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;
      state.isPending = false;
      state.error = {
        message: null,
      };
    },
  },
});


export const { logoutUser } = userSlice.actions;

export default userSlice.reducer;