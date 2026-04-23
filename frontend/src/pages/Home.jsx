import Navbar from "../components/Navbar";

function Home() {
  return (
    <div>

      <Navbar />

      {/* 🔷 HERO */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-24 text-center">
        <h1 className="text-5xl font-bold mb-4">
          Build Your Career 🚀
        </h1>
        <p className="text-lg mb-6">
          Connect students with top companies and unlock opportunities
        </p>

        <a
          href="/register"
          className="bg-white text-blue-600 px-6 py-3 rounded font-semibold hover:bg-gray-200"
        >
          Get Started
        </a>
      </section>

      {/* 🔷 ABOUT */}
      <section className="py-16 px-10 bg-gray-100">
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* Image */}
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt="about"
            className="rounded-xl shadow-lg"
          />

          {/* Content */}
          <div>
            <h2 className="text-3xl font-bold mb-4">
              About Our Platform
            </h2>
            <p className="text-gray-700 mb-4">
              Our placement portal connects students with top recruiters,
              making the hiring process simple, transparent, and efficient.
            </p>
            <p className="text-gray-700">
              Students can apply to jobs, track applications, and build
              their careers while companies find the best talent.
            </p>
          </div>

        </div>
      </section>

      {/* 🔷 FEATURES */}
      <section className="py-16 px-10">
        <h2 className="text-3xl font-bold text-center mb-10">
          Features
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
            <h3 className="font-bold text-lg mb-2">🎯 Easy Apply</h3>
            <p>Apply to jobs quickly with one click.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
            <h3 className="font-bold text-lg mb-2">📊 Track Status</h3>
            <p>Monitor your application progress.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
            <h3 className="font-bold text-lg mb-2">🏢 Company Access</h3>
            <p>Companies can post jobs and hire easily.</p>
          </div>

        </div>
      </section>

      {/* 🔷 CONTACT */}
      <section className="bg-gray-100 py-16 px-10">
        <h2 className="text-3xl font-bold text-center mb-8">
          Contact Us
        </h2>

        <div className="max-w-xl mx-auto">
          <input
            className="w-full p-3 mb-4 border rounded"
            placeholder="Your Name"
          />
          <input
            className="w-full p-3 mb-4 border rounded"
            placeholder="Email"
          />
          <textarea
            className="w-full p-3 mb-4 border rounded"
            placeholder="Message"
          />
          <button className="bg-blue-600 text-white px-6 py-2 rounded w-full">
            Send Message
          </button>
        </div>
      </section>

      {/* 🔷 FOOTER */}
      <footer className="bg-gray-900 text-white py-10 px-10">
        <div className="grid md:grid-cols-3 gap-8">

          {/* Left */}
          <div>
            <h3 className="text-xl font-bold mb-2">Placement Portal</h3>
            <p className="text-gray-400">
              A modern platform connecting students and companies for better career opportunities.
            </p>
          </div>

          {/* Middle */}
          <div>
            <h3 className="font-bold mb-2">Navigate</h3>
            <p>Home</p>
            <p>About</p>
            <p>Contact</p>
          </div>

          {/* Right */}
          <div>
            <h3 className="font-bold mb-2">Office Hours</h3>
            <p>Mon - Fri: 9 AM - 6 PM</p>
            <p>Sat: 10 AM - 4 PM</p>
          </div>

        </div>

        <p className="text-center text-gray-500 mt-6">
          © 2026 Placement Portal
        </p>
      </footer>

    </div>
  );
}

export default Home;