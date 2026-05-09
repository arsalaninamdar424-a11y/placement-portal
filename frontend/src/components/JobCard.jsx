// import { useState } from "react";
// import { applyJob } from "../services/jobService";

// function JobCard({ job }) {
//   const [loading, setLoading] = useState(false);
//   const [applied, setApplied] = useState(false);

//   const handleApply = async () => {
//     const token = localStorage.getItem("token");

//     // 🔒 Prevent unauthenticated access
//     if (!token) {
//       alert("Please login first ❌");
//       return;
//     }

//     try {
//       setLoading(true);

//       await applyJob(job._id);

//       setApplied(true);
//       alert("Applied Successfully ✅");

//     } catch (err) {
//       console.error(err);
//       alert("Apply Failed ❌");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition border">

//       {/* 🔷 JOB TITLE */}
//       <h3 className="text-xl font-bold text-gray-800">
//         {job.title}
//       </h3>

//       {/* 🔷 COMPANY */}
//       <p className="text-blue-600 font-medium mt-1">
//         {job.company}
//       </p>

//       {/* 🔷 DESCRIPTION */}
//       <p className="text-sm text-gray-500 mt-3 line-clamp-3">
//         {job.description}
//       </p>

//       {/* 🔷 APPLY BUTTON */}
//       <button
//         onClick={handleApply}
//         disabled={loading || applied}
//         className={`mt-5 w-full py-2 rounded-lg text-white font-medium transition 
//         ${
//           applied
//             ? "bg-green-500 cursor-not-allowed"
//             : "bg-blue-600 hover:bg-blue-700"
//         }`}
//       >
//         {loading ? "Applying..." : applied ? "Applied ✅" : "Apply Now"}
//       </button>

//     </div>
//   );
// }

// export default JobCard;

import { useState } from "react";
import { applyJob } from "../services/jobService";

function JobCard({ job }) {
  const [loading, setLoading] = useState(false);
  const [applied, setApplied] = useState(false);

  const handleApply = async () => {
    const token = localStorage.getItem("token");

    // 🔒 Login check
    if (!token) {
      alert("Please login first ❌");
      return;
    }

    try {
      setLoading(true);

      await applyJob(job._id);

      setApplied(true);

      alert("Application Submitted Successfully ✅");

    } catch (err) {
      console.error(err);

      if (err.response?.data?.message) {
        alert(err.response.data.message);
      } else {
        alert("Apply Failed ❌");
      }

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden border border-gray-100">

      {/* TOP BANNER */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">

        <div className="flex justify-between items-start">

          <div>
            <h2 className="text-2xl font-bold">
              {job.title}
            </h2>

            <p className="text-blue-100 mt-1">
              {job.company}
            </p>
          </div>

          <div className="bg-white/20 px-3 py-1 rounded-full text-sm">
            Hiring
          </div>

        </div>

      </div>

      {/* CONTENT */}
      <div className="p-6">

        {/* DESCRIPTION */}
        <p className="text-gray-600 leading-relaxed min-h-[80px]">
          {job.description}
        </p>

        {/* JOB DETAILS */}
        <div className="grid grid-cols-2 gap-4 mt-6">

          <div className="bg-gray-50 p-3 rounded-xl">
            <p className="text-gray-500 text-sm">
              Location
            </p>

            <h3 className="font-semibold text-gray-800">
              Remote
            </h3>
          </div>

          <div className="bg-gray-50 p-3 rounded-xl">
            <p className="text-gray-500 text-sm">
              Type
            </p>

            <h3 className="font-semibold text-gray-800">
              Full Time
            </h3>
          </div>

        </div>

        {/* APPLY BUTTON */}
        <button
          onClick={handleApply}
          disabled={loading || applied}
          className={`mt-8 w-full py-3 rounded-2xl text-white font-semibold transition duration-300 shadow-lg
          ${
            applied
              ? "bg-green-500 cursor-not-allowed"
              : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:scale-105"
          }`}
        >
          {loading
            ? "Applying..."
            : applied
            ? "Applied Successfully ✅"
            : "Apply Now 🚀"}
        </button>

      </div>

    </div>
  );
}

export default JobCard;