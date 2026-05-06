import { createContext, useContext, useState, useEffect } from "react";

// 🔥 CREATE CONTEXT
const AuthContext = createContext();

// 🔥 PROVIDER
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // ✅ Load user from localStorage on refresh
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // 🔥 LOGIN
  const login = (userData) => {
    setUser(userData);
  };

  // 🔥 LOGOUT
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// 🔥 CUSTOM HOOK (easy use)
export const useAuth = () => {
  return useContext(AuthContext);
};