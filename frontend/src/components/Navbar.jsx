import { Link } from "react-router-dom";

function Navbar() {
  const token = localStorage.getItem("token");

  return (
    <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">

      {/* 🔷 Logo */}
      <h1 className="text-xl font-bold text-blue-600">
        Placement Portal
      </h1>

      {/* 🔷 Links */}
      <div className="space-x-6">

        <Link to="/" className="hover:text-blue-600">Home</Link>
        <Link to="/about" className="hover:text-blue-600">About</Link>
        <Link to="/contact" className="hover:text-blue-600">Contact</Link>

        {!token ? (
          <>
            <Link to="/login" className="text-blue-600">Login</Link>
            <Link to="/register" className="bg-blue-600 text-white px-3 py-1 rounded">
              Signup
            </Link>
          </>
        ) : (
          <Link to="/student" className="bg-blue-600 text-white px-3 py-1 rounded">
            Dashboard
          </Link>
        )}

      </div>
    </nav>
  );
}

export default Navbar;