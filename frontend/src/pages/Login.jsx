import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../services/authService";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      console.log("Sending Data:", { email, password });

      const res = await loginUser({ email, password });

      console.log("FULL RESPONSE:", res);

      // 🔥 UNIVERSAL USER EXTRACTION (handles all backend cases)
      const user =
        res.user ||           // case 1: { user: {...} }
        res.data?.user ||     // case 2: { data: { user: {...} } }
        res;                  // case 3: { role: "admin", ... }

      console.log("USER:", user);

      // ❌ safety check
      if (!user || !user.role) {
        alert("Login success but role missing ❌");
        return;
      }

      // ✅ store user
      localStorage.setItem("user", JSON.stringify(user));

      alert("Login Success ✅");

      // 🔥 ROLE BASED REDIRECT
      if (user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/student");
      }

    } catch (err) {
      console.error("LOGIN ERROR:", err.response?.data || err.message);
      alert(err.response?.data?.message || "Login Failed ❌");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-xl shadow w-96">

        <h2 className="text-2xl font-bold mb-6 text-center">
          Login
        </h2>

        {/* EMAIL */}
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 border rounded"
          placeholder="Email"
        />

        {/* PASSWORD */}
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-4 border rounded"
          placeholder="Password"
        />

        {/* BUTTON */}
        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>

        {/* LINK */}
        <p className="text-center mt-4">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-600">
            Signup
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Login;