import axios from "axios";
import axiosInstance from "./axiosinstance";

// Get Media Ratings
export const getMediaRatings = async (
  tmdbID: string,
  mediaType: "movie" | "tv"
) => {
  try {
    const response = await axiosInstance.get(
      `rating/get-media-ratings?tmdbID=${tmdbID}&mediaType=${mediaType}`
    );
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return Promise.reject(error.response?.data);
    }
    return Promise.reject(error);
  }
};

// Rate Media
export const rateMedia = async (
  tmdbID: string,
  mediaType: "movie" | "tv",
  rating: number
) => {
  try {
    const response = await axiosInstance.post(
      `rating/create-or-update-rating?tmdbID=${tmdbID}&mediaType=${mediaType}&rating=${rating}`
    );
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return Promise.reject(error.response?.data);
    }
    return Promise.reject(error);
  }
};

// Delete Rating
export const deleteRating = async (
  tmdbID: string,
) => {
  try {
    const response = await axiosInstance.delete(
      `rating/delete-rating?tmdbID=${tmdbID}`
    );
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return Promise.reject(error.response?.data);
    }
    return Promise.reject(error);
  }
};
