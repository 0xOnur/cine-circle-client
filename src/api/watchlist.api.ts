import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "./axiosinstance";

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
