import axiosInstance from "./axiosinstance";
import { createAsyncThunk } from "@reduxjs/toolkit";

// Login user
export const loginUser = createAsyncThunk(
  "user/login",
  async (user: { email: string; password: string }, thunkAPI) => {
    try {
      const response = await axiosInstance.post("/user/login", user);
      console.log(response.data);

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
