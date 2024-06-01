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

// Get Movie reviews
export const getMediaReviews = async (tmdbID: string) => {
  try {
    const response = await axiosInstance.get(
      `review/get-media-reviews?tmdbID=${tmdbID}`
    );
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return Promise.reject(error.response?.data);
    }
    return Promise.reject(error);
  }
};

// Get User Media Review
export const getUserMediaReview = async (username: string, tmdbID: string) => {
  try {
    const response = await axiosInstance.get(
      `review/get-user-media-review?username=${username}&tmdbID=${tmdbID}`
    );
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return Promise.reject(error.response?.data);
    }
    return Promise.reject(error);
  }
};

// Create Review
export const createReview = async (
  tmdbID: string,
  mediaType: "movie" | "tv",
  title: string,
  comment: string,
  spoiler: boolean
) => {
  try {
    const response = await axiosInstance.post(
      `review/create-review?tmdbID=${tmdbID}`,
      { mediaType, title, comment, spoiler }
    );
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return Promise.reject(error.response?.data);
    }
    return Promise.reject(error);
  }
};

// Update Review
export const updateReview = async (
  tmdbID: string,
  title: string,
  comment: string,
  spoiler: boolean
) => {
  try {
    const response = await axiosInstance.put(
      `review/update-review?tmdbID=${tmdbID}`,
      { title, comment, spoiler }
    );
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return Promise.reject(error.response?.data);
    }
    return Promise.reject(error);
  }
};

// Delete Review
export const deleteReview = async (tmdbID: string) => {
  try {
    const response = await axiosInstance.delete(
      `review/delete-review?tmdbID=${tmdbID}`
    );
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return Promise.reject(error.response?.data);
    }
    return Promise.reject(error);
  }
};
