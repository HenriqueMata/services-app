import axios, { AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
  baseURL: "https://freetestapi.com/api/v1/movies",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
