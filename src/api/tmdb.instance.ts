import axios from "axios";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const tmdbInstance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        "Content-Type": "application/json",
    },
});

tmdbInstance.interceptors.request.use((config) => {
    config.params = {
        ...config.params,
        language: "en-US",
        api_key: API_KEY
    };
    return config;
});

export default tmdbInstance;