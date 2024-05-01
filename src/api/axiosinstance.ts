import axios from "axios";
import { updateAccessToken } from "./user.api";
import { AppDispatch, RootState } from "@redux/config/store";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "@redux/slices/user.slice";
// import { logoutUser } from "@redux/slices/user.slice";
// import store from "@redux/config/store";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Add accessToken to request header
    const accessToken = useSelector((state: RootState) => state.accessToken);
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    // Add refreshToken to request header for updating accessToken
    const refreshToken = useSelector((state: RootState) => state.refreshToken);
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
    const originalRequest = error.config;
    const dispatch = useDispatch<AppDispatch>();

    if (
      error.response.status === 401 &&
      originalRequest.url === "/user/update-token"
    ) {
      dispatch(logoutUser());
      return Promise.reject(error);
    }

    if (error.response.status === 401 && !originalRequest._retry) {
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
