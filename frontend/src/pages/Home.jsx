import Navbar from "../components/Navbar";

function Home() {
  return (
    <div>

      {/* 🔷 NAVBAR */}
      <Navbar />

      {/* 🔷 HERO SECTION */}
      <section className="bg-linear-to-r from-blue-600 to-indigo-700 text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Find Your Dream Job 🚀
        </h1>
        <p className="text-lg mb-6">
          A professional placement portal for students and companies
        </p>

        <button className="bg-white text-blue-600 px-6 py-2 rounded font-semibold hover:bg-gray-200">
          Get Started
        </button>
      </section>

      {/* 🔷 FEATURES */}
      <section className="py-16 px-6 bg-gray-100">
        <h2 className="text-2xl font-bold text-center mb-10">
          Why Choose Us?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold text-lg mb-2">🎯 Easy Job Apply</h3>
            <p>Apply to jobs in one click with real-time tracking.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold text-lg mb-2">📊 Track Applications</h3>
            <p>Monitor your job applications status easily.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold text-lg mb-2">🏢 Company Access</h3>
            <p>Companies can post jobs and hire students quickly.</p>
          </div>

        </div>
      </section>

      {/* 🔷 FOOTER */}
      <footer className="bg-gray-900 text-white text-center py-6">
        <p>© 2026 Placement Portal. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default Home;