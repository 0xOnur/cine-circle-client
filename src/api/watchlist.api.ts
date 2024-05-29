import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "./axiosinstance";

// Get User Watchlist
export const getWatchlist = async (username: string) => {
  try {
    const response = await axiosInstance.get(
      `/watchlist/get-watchlist?username=${username}`
    );
    return response.data;
  } catch (error: any) {
    return Promise.reject(error.response.data);
  }
};

// Add media to watchlist
export const addToWatchlist = createAsyncThunk(
  "watchlist/addToWatchlist",
  async (media: { tmdbID: number; mediaType: string }, thunkAPI) => {
    try {
      const response = await axiosInstance.post(
        `/watchlist/add-watchlist?tmdbID=${media.tmdbID}&mediaType=${media.mediaType}`
      );
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Remove media from watchlist
export const removeFromWatchlist = createAsyncThunk(
  "watchlist/removeFromWatchlist",
  async (media: { tmdbID: number; mediaType: string }, thunkAPI) => {
    try {
      const response = await axiosInstance.delete(
        `/watchlist/remove-watchlist?tmdbID=${media.tmdbID}&mediaType=${media.mediaType}`
      );
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
