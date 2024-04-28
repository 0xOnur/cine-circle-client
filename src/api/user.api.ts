import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "./axiosinstance";

// Login user
export const loginUser = createAsyncThunk(
  "loginUser",
  async (userData: { email: string; password: string }, thunkAPI) => {
    try {
      const response = await axiosInstance.post("/user/login", userData);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Create new user
export const createUser = createAsyncThunk(
  "createUser",
  async (userData: FormData, thunkAPI) => {
    try {
      const response = await axiosInstance.post("/user/register", userData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
)

// Get new accessToken
export const updateAccessToken = createAsyncThunk(
  "getNewToken",
  async (userId: any, thunkAPI) => {
    try {
      const response = await axiosInstance.post("/user/update-token", {
        userId,
      });
      const accessToken = response.data;
      return accessToken;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
