import axiosInstance from "./axiosinstance";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { setWatchlist } from "@redux/slices/watchlist.slice";

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

// Get user watchlist
export const getUserWatchlist = createAsyncThunk(
  "user/getWatchlist",
  async (username: string, thunkAPI) => {
    try {
      const response = await axiosInstance.get(
        `/user/get-watchlist?username=${username}`
      );
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Add media to watchlist
export const addToWatchlist = createAsyncThunk(
  "user/addToWatchlist",
  async (media: { tmdbID: number; mediaType: string }, thunkAPI) => {
    try {
      const response = await axiosInstance.post(
        `/user/add-watchlist?tmdbID=${media.tmdbID}&mediaType=${media.mediaType}`
      );
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Remove media from watchlist
export const removeFromWatchlist = createAsyncThunk(
  "user/removeFromWatchlist",
  async (media: { tmdbID: number; mediaType: string }, thunkAPI) => {
    try {
      const response = await axiosInstance.delete(
        `/user/remove-watchlist?tmdbID=${media.tmdbID}&mediaType=${media.mediaType}`
      );
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
