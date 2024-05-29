import axiosInstance from "./axiosinstance";
import axios from "axios";

// Get user reviews
export const getUserReviews = async (username: string) => {
  try {
    const response = await axiosInstance.get(
      `review/get-user-reviews?username=${username}`
    );
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return Promise.reject(error.response?.data);
    }
    return Promise.reject(error);
  }
};