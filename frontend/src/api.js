import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://url-shortner-851m.onrender.com";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export { API_BASE_URL };
export default api;
