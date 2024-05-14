import axios from "axios";
import tmdbInstance from "./tmdb.instance";

//  Trending Movies
export const getTrendingMovies = async (time_window: "day" | "week") => {
  try {
    const response = await tmdbInstance.get(`/trending/movie/${time_window}`);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return Promise.reject(error.response?.data);
    }
    return Promise.reject(error);
  }
};

//  Trending TV Shows
export const getTrendingTVShows = async (time_window: "day" | "week") => {
  try {
    const response = await tmdbInstance.get(`/trending/tv/${time_window}`);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return Promise.reject(error.response?.data);
    }
    return Promise.reject(error);
  }
};

// Movie Details
export const getMovieDetails = async (movieId: string) => {
  try {
    const response = await tmdbInstance.get(`/movie/${movieId}`);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return Promise.reject(error.response?.data);
    }
    return Promise.reject(error);
  }
};

// TV Show Details
export const getTVShowDetails = async (tvShowId: string) => {
  try {
    const response = await tmdbInstance.get(`/tv/${tvShowId}`);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return Promise.reject(error.response?.data);
    }
    return Promise.reject(error);
  }
};