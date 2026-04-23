import { Link } from "react-router-dom";

function Navbar() {
  const token = localStorage.getItem("token");

  return (
    <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center sticky top-0 z-50">

      {/* 🔷 Logo */}
      <h1 className="text-2xl font-bold text-blue-600">
        Placement Portal
      </h1>

      {/* 🔷 Links */}
      <div className="flex items-center gap-6">

        <Link to="/" className="hover:text-blue-600">Home</Link>
        <Link to="/about" className="hover:text-blue-600">About</Link>
        <Link to="/contact" className="hover:text-blue-600">Contact</Link>

        {!token ? (
          <>
            <Link
              to="/login"
              className="px-4 py-1 border border-blue-600 text-blue-600 rounded hover:bg-blue-50"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Signup
            </Link>
          </>
        ) : (
          <Link
            to="/student"
            className="px-4 py-1 bg-blue-600 text-white rounded"
          >
            Dashboard
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;