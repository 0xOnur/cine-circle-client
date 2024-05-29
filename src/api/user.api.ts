import axiosInstance from "./axiosinstance";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { setWatchlist } from "@redux/slices/watchlist.slice";
import axios from "axios";

// Login user
export const loginUser = createAsyncThunk(
  "user/login",
  async (user: { email: string; password: string }, thunkAPI) => {
    try {
      const response = await axiosInstance.post("/user/login", user);
      thunkAPI.dispatch(setWatchlist(response.data.watchlist));
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Create new user
export const createUser = createAsyncThunk(
  "user/register",
  async (
    userData: {
      username: string;
      name: string;
      surname: string;
      email: string;
      password: string;
    },
    thunkAPI
  ) => {
    try {
      const response = await axiosInstance.post("/user/register", userData);
      thunkAPI.dispatch(setWatchlist(response.data.watchlist));
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Get new accessToken
export const updateAccessToken = createAsyncThunk(
  "user/updateAccessToken",
  async (_, thunkAPI) => {
    try {
      const response = await axiosInstance.post("/user/update-token");
      const accessToken = response.data;
      return accessToken;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Update local redux user
export const updateReduxUser = createAsyncThunk(
  "user/reduxUpdate",
  async (username: string, thunkAPI) => {
    try {
      const response = await axiosInstance.get(
        `/user/get-user?username=${username}`
      );
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Get User Info
export const getUserInfo = async (username: string) => {
  try {
    const response = await axiosInstance.get(
      `/user/get-user?username=${username}`
    );
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return Promise.reject(error.response?.data);
    }
    return Promise.reject(error);
  }
};

// Edit Profile
export const editProfile = async (formData: FormData) => {
  try {
    const response = await axiosInstance.post("/user/edit-profile", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return Promise.reject(error.response?.data);
    }
    return Promise.reject(error);
  }
};
