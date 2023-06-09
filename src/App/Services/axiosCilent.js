import axios from "axios";

export const api = axios.create({
  baseURL: process.env.REACT_APP_PROD_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": process.env.REACT_APP_ORIGIN_PROD_URL,
    "Access-Control-Allow-Methods": "GET, POST,PATCH, PUT, DELETE",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  },
});
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("mandapalli_token");

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
