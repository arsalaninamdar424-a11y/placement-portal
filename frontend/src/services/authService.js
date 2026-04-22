import API from "./api";

// ✅ REGISTER
export const registerUser = async (userData) => {
  const res = await API.post("/auth/register", userData);
  return res.data;
};

// ✅ LOGIN
export const loginUser = async (userData) => {
  const res = await API.post("/auth/login", userData);
  localStorage.setItem("token", res.data.token);
  return res.data;
};

// ✅ LOGOUT
export const logoutUser = () => {
  localStorage.removeItem("token");
};