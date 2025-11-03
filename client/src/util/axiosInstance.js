import axios from "axios";
let url = import.meta.env.VITE_BASE_URL || "http://localhost:5000";
export const axiosInstance = axios.create({
  baseURL: url,
});
export default axiosInstance;