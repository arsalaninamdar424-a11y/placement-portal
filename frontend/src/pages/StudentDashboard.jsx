// import { useEffect, useState } from "react";

// import { getAllJobs, uploadResume } from "../services/jobService";
// import JobCard from "../components/JobCard";
// import Navbar from "../components/Navbar";

// function StudentDashboard() {
//   const [jobs, setJobs] = useState([]);
//   const [resume, setResume] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const user = JSON.parse(localStorage.getItem("user"));

//   useEffect(() => {
//     fetchJobs();
//   }, []);

//   const fetchJobs = async () => {
//     try {
//       const data = await getAllJobs();
//       setJobs(data);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   // 🔥 Resume Upload
//   const handleUpload = async () => {
//     if (!resume) {
//       alert("Please select a file ❌");
//       return;
//     }

//     try {
//       setLoading(true);
//       await uploadResume(resume);
//       alert("Resume uploaded successfully ✅");
//     } catch (err) {
//       alert("Upload failed ❌");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <Navbar />

//       <div className="min-h-screen bg-gray-100 p-8">

//         {/* 🔷 HEADER */}
//         <div className="mb-6">
//           <h1 className="text-3xl font-bold">
//             Welcome, {user?.role === "student" ? "Student 🎓" : ""}
//           </h1>
//           <p className="text-gray-600">
//             Explore jobs and apply easily
//           </p>
//         </div>

//         {/* 🔥 TOP CARDS */}
//         <div className="grid md:grid-cols-3 gap-6 mb-8">

//           <div className="bg-white p-5 rounded-xl shadow">
//             <h2 className="text-lg font-semibold">Total Jobs</h2>
//             <p className="text-2xl font-bold text-blue-600">
//               {jobs.length}
//             </p>
//           </div>

//           <div className="bg-white p-5 rounded-xl shadow">
//             <h2 className="text-lg font-semibold">Applications</h2>
//             <p className="text-2xl font-bold text-green-600">
//               Coming Soon
//             </p>
//           </div>

//           <div className="bg-white p-5 rounded-xl shadow">
//             <h2 className="text-lg font-semibold">Profile</h2>
//             <p className="text-sm text-gray-500">
//               Update your resume
//             </p>
//           </div>

//         </div>

//         {/* 🔥 RESUME UPLOAD */}
//         <div className="bg-white p-6 rounded-xl shadow mb-8">
//           <h2 className="text-xl font-semibold mb-4">
//             Upload Resume
//           </h2>

//           <div className="flex gap-4 items-center">
//             <input
//               type="file"
//               onChange={(e) => setResume(e.target.files[0])}
//               className="border p-2 rounded"
//             />

//             <button
//               onClick={handleUpload}
//               className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//             >
//               {loading ? "Uploading..." : "Upload"}
//             </button>
//           </div>
//         </div>

//         {/* 🔥 JOB LIST */}
//         <h2 className="text-2xl font-semibold mb-4">
//           Available Jobs
//         </h2>

//         <div className="grid md:grid-cols-3 gap-6">
//           {jobs.length > 0 ? (
//             jobs.map((job) => (
//               <JobCard key={job._id} job={job} />
//             ))
//           ) : (
//             <p>No Jobs Available</p>
//           )}
//         </div>

//       </div>
//     </>
//   );
// }

// export default StudentDashboard;


import { useEffect, useState } from "react";
import { getAllJobs, uploadResume } from "../services/jobService";
import JobCard from "../components/JobCard";
import Navbar from "../components/Navbar";

function StudentDashboard() {
  const [jobs, setJobs] = useState([]);
  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const data = await getAllJobs();
      setJobs(data);
    } catch (err) {
      console.error(err);
    }
  };

  // 🔥 Resume Upload
  const handleUpload = async () => {
    if (!resume) {
      alert("Please select a file ❌");
      return;
    }

    try {
      setLoading(true);
      await uploadResume(resume);
      alert("Resume uploaded successfully ✅");
    } catch (err) {
      console.error(err);
      alert("Upload failed ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-50 p-8">

        {/* HERO HEADER */}
        <div className="bg-white rounded-3xl shadow-lg p-8 mb-8 border border-gray-100">

          <div className="flex flex-col md:flex-row justify-between items-center gap-6">

            <div>
              <h1 className="text-3xl font-extrabold text-gray-800 mb-2">
                Welcome Back 🎓
              </h1>

              <p className="text-gray-600 text-lg">
                Explore opportunities and grow your career journey.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-5 rounded-2xl shadow-lg">
              <h2 className="text-sm uppercase tracking-wider">
                Logged in as
              </h2>

              <p className="text-2xl font-bold capitalize">
                {user?.role}
              </p>
            </div>

          </div>

        </div>

        {/* TOP STATS */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-gray-700">
                  Total Jobs
                </h2>

                <p className="text-4xl font-extrabold text-blue-600 mt-2">
                  {jobs.length}
                </p>
              </div>

              <div className="text-5xl">
                💼
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-gray-700">
                  Applications
                </h2>

                <p className="text-4xl font-extrabold text-green-600 mt-2">
                  Active
                </p>
              </div>

              <div className="text-5xl">
                📊
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-gray-700">
                  Resume
                </h2>

                <p className="text-sm text-gray-500 mt-2">
                  Keep your profile updated
                </p>
              </div>

              <div className="text-5xl">
                📄
              </div>
            </div>
          </div>

        </div>

        {/* RESUME UPLOAD */}
        <div className="bg-white p-8 rounded-3xl shadow-lg mb-10 border border-gray-100">

          <div className="flex flex-col md:flex-row justify-between items-center gap-6">

            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Upload Your Resume
              </h2>

              <p className="text-gray-600">
                Upload your latest resume for recruiters.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 items-center">

              <input
                type="file"
                onChange={(e) => setResume(e.target.files[0])}
                className="border border-gray-300 p-3 rounded-xl bg-gray-50"
              />

              <button
                onClick={handleUpload}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl hover:scale-105 transition duration-300 shadow-lg"
              >
                {loading ? "Uploading..." : "Upload Resume"}
              </button>

            </div>

          </div>

        </div>

        {/* JOB SECTION */}
        <div className="flex justify-between items-center mb-6">

          <h2 className="text-3xl font-bold text-gray-800">
            Available Opportunities 🚀
          </h2>

          <div className="text-gray-600 font-medium">
            {jobs.length} Jobs Available
          </div>

        </div>

        {/* JOB LIST */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {jobs.length > 0 ? (
            jobs.map((job) => (
              <JobCard key={job._id} job={job} />
            ))
          ) : (
            <div className="bg-white p-10 rounded-2xl shadow-lg text-center col-span-full">
              <h2 className="text-2xl font-bold text-gray-700 mb-2">
                No Jobs Available 😔
              </h2>

              <p className="text-gray-500">
                New opportunities will appear here soon.
              </p>
            </div>
          )}
        </div>

      </div>
    </>
  );
}

export default StudentDashboard;