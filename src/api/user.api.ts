import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "./axiosinstance";
import axios from "axios";

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
