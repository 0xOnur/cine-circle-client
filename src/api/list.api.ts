import axios from "axios";
import axiosInstance from "./axiosinstance";

// Get user lists
export const getUserLists = async (username: string) => {
  try {
    const response = await axiosInstance.get(
      `list/get-lists?username=${username}`
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
  listType: "movie" | "tv",
  description: string
) => {
  try {
    const response = await axiosInstance.post(
      `list/create-list?listName=${listName}&listType=${listType}`,
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

// Add media to list
export const addMediaToList = async (
  listId: string,
  tmdbID: number,
  mediaType: "movie" | "tv"
) => {
  try {
    const response = await axiosInstance.put(
      `list/add-to-list?listId=${listId}&tmdbID=${tmdbID}`,
      { mediaType }
    );

    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return Promise.reject(error.response?.data);
    }
    return Promise.reject(error);
  }
};

// Remove media from list
export const removeMediaFromList = async (listId: string, tmdbID: number) => {
  try {
    const response = await axiosInstance.delete(
      `list/remove-from-list?listId=${listId}&tmdbID=${tmdbID}`
    );

    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return Promise.reject(error.response?.data);
    }
    return Promise.reject(error);
  }
};
