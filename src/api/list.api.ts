import axios from "axios";
import axiosInstance from "./axiosinstance";

// Get user lists
export const getUserLists = async (username: string) => {
  try {
    const response = await axiosInstance.get(
      `/user/get-lists?username=${username}`
    );
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return Promise.reject(error.response?.data);
    }
    return Promise.reject(error);
  }
};

// Create list
export const createList = async (
  listName: string,
  listType: string,
  description: string
) => {
  try {
    const response = await axiosInstance.post(
      `/user/create-list?listName=${listName}&listType=${listType}`,
      { description }
    );
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return Promise.reject(error.response?.data);
    }
    return Promise.reject(error);
  }
};
