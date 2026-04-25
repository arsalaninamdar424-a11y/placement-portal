import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../services/authService";

function Register() {
  const [role, setRole] = useState("student");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await registerUser({
        name,
        email,
        password,
        role,
      });

      alert("Registered Successfully");
      navigate("/login");

    } catch (err) {
      alert("Error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-xl shadow w-96">

        <h2 className="text-2xl font-bold mb-6 text-center">
          Signup
        </h2>

        {/* 🔥 ROLE TOGGLE */}
        <div className="flex mb-4 border rounded overflow-hidden">
          <button
            onClick={() => setRole("student")}
            className={`w-1/2 py-2 ${
              role === "student" ? "bg-blue-600 text-white" : ""
            }`}
          >
            Student
          </button>

          <button
            onClick={() => setRole("admin")}
            className={`w-1/2 py-2 ${
              role === "admin" ? "bg-blue-600 text-white" : ""
            }`}
          >
            Admin
          </button>
        </div>

        <input
          className="w-full p-3 mb-4 border rounded"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="w-full p-3 mb-4 border rounded"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full p-3 mb-4 border rounded"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleRegister}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Signup
        </button>

        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Register;