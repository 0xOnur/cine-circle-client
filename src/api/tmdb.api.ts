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

// Get Credits
export const getCredits = async (
  mediaType: "movie" | "tv",
  mediaId: string
) => {
  try {
    const response = await tmdbInstance.get(`/${mediaType}/${mediaId}/credits`);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return Promise.reject(error.response?.data);
    }
    return Promise.reject(error);
  }
};

// Search Multi
export const searchMulti = async (query: string) => {
  try {
    const response = await tmdbInstance.get(`/search/multi?query=${query}`);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return Promise.reject(error.response?.data);
    }
    return Promise.reject(error);
  }
};

// Search Movies
export const searchMovies = async (query: string, page: number) => {
  try {
    const response = await tmdbInstance.get(
      `/search/movie?query=${query}&page=${page}`
    );
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return Promise.reject(error.response?.data);
    }
    return Promise.reject(error);
  }
};

// Search TV Shows
export const searchTVShows = async (query: string, page: number) => {
  try {
    const response = await tmdbInstance.get(
      `/search/tv?query=${query}&page=${page}`
    );
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return Promise.reject(error.response?.data);
    }
    return Promise.reject(error);
  }
};

// Search People
export const searchPeople = async (query: string, page: number) => {
  try {
    const response = await tmdbInstance.get(
      `/search/person?query=${query}&page=${page}`
    );
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return Promise.reject(error.response?.data);
    }
    return Promise.reject(error);
  }
};

// Get Media Videos
export const getMediaVideos = async (
  mediaType: "movie" | "tv",
  mediaId: string
) => {
  try {
    const response = await tmdbInstance.get(`/${mediaType}/${mediaId}/videos`);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return Promise.reject(error.response?.data);
    }
    return Promise.reject(error);
  }
};

// Get Top Rated Movies
export type getTopMediasType = {
  mediaType: "movie" | "tv";
  page: number;
  with_genres?: string;
  with_runtime_lte?: number;
  vote_average_lte?: number;
  sort_by?:
    | "vote_average.desc"
    | "vote_average.asc"
    | "popularity.desc"
    | "popularity.asc";
  vote_count_gte?: number;
  primary_release_date_gte?: string;
  primary_release_date_lte?: string;
  release_date_gte?: string;
  release_date_lte?: string;
  first_air_date_gte?: string;
  first_air_date_lte?: string;
  air_date_lte?: string;
  air_date_gte?: string;
  watch_region?: string;
};

export const getTopMedias = async (props: getTopMediasType) => {
  try {
    const response = await tmdbInstance.get(`/discover/${props.mediaType}`, {
      params: {
        with_genres: props.with_genres,
        "with_runtime.lte": props.with_runtime_lte,
        "vote_average.lte": props.vote_average_lte,
        sort_by: props.sort_by,
        "vote_count.gte": props.vote_count_gte,
        "primary_release_date.gte": props.primary_release_date_gte,
        "primary_release_date.lte": props.primary_release_date_lte,
        "release_date.gte": props.release_date_gte,
        "release_date.lte": props.release_date_lte,
        "air_date.gte": props.air_date_gte,
        "air_date.lte": props.air_date_lte,
        "first_air_date.gte": props.first_air_date_gte,
        "first_air_date.lte": props.first_air_date_lte,
        with_watch_monetization_types: `"flatrate|free|ads|rent|buy"`,
        watch_region: props.watch_region || "US",
        language: "en-US",
        page: props.page,
      },
    });
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return Promise.reject(error.response?.data);
    }
    return Promise.reject(error);
  }
};
