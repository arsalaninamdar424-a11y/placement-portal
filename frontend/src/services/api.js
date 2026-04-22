import axios from "axios";

// ✅ Create axios instance
const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// ✅ Attach token to every request
API.interceptors.request.use(
  (req) => {
    const token = localStorage.getItem("token");

    if (token) {
      req.headers.Authorization = `Bearer ${token}`;
    }

    return req;
  },
  (error) => Promise.reject(error)
);

// ✅ Handle global errors (optional but best practice)
API.interceptors.response.use(
  (response) => response,
  (error) => {
    // 🔴 If token expired or unauthorized
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("token");
      window.location.href = "/login"; // redirect
    }

    return Promise.reject(error);
  }
);

export default API;