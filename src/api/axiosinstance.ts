import axios from "axios";
import { updateAccessToken } from "./user.api";
import { logoutUser } from "@redux/slices/user.slice";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
axiosInstance.interceptors.request.use(
  async (config) => {
    const store = await import("@redux/config/store").then(
      (module) => module.default
    );
    const state = store.getState();
    const { accessToken, refreshToken } = state;

    // Add accessToken to request header
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    // Add refreshToken to request header for updating accessToken
    if (refreshToken && config.url === "/user/update-token") {
      config.headers["x-refresh-token"] = refreshToken;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    console.log(error);

    const store = await import("@redux/config/store").then(
      (module) => module.default
    );
    const dispatch = store.dispatch;
    const isAuth = store.getState().isAuth;

    const originalRequest = error.config;

    if (
      isAuth &&
      error.response.status === 401 &&
      originalRequest.url === "/user/update-token"
    ) {
      dispatch(logoutUser());
      return Promise.reject(error);
    }

    if (isAuth && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const response = await dispatch(updateAccessToken());
      const accessToken = response.payload;
      if (accessToken) {
        originalRequest.headers["Authorization"] = `Bearer ${accessToken}`;
      }
      return axiosInstance(originalRequest);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
