import Navbar from "../components/Navbar";

function About() {
  return (
    <div>
      <Navbar />

      <div className="py-16 px-10 bg-gray-100 min-h-screen">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          {/* Image */}
          <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692"
            alt="about"
            className="rounded-xl shadow-lg"
          />

          {/* Content */}
          <div>
            <h1 className="text-3xl font-bold mb-4">
              About Placement Portal
            </h1>

            <p className="text-gray-700 mb-4">
              Placement Portal is a modern web platform designed to connect
              students with top companies. Our goal is to simplify the
              recruitment process and provide better opportunities.
            </p>

            <p className="text-gray-700">
              Students can explore jobs, apply easily, and track their
              application status. Companies can post jobs and hire the
              best talent efficiently.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default About;