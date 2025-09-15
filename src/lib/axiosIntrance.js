import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL, // ✅ automatically dev/prod
  withCredentials: true, // ✅ send cookies
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
