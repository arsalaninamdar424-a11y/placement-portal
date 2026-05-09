// import { useEffect, useState } from "react";
// import {
//   getStats,
//   getApplications,
//   updateStatus,
// } from "../services/jobService";
// import Navbar from "../components/Navbar";

// function AdminDashboard() {
//   const [stats, setStats] = useState({});
//   const [apps, setApps] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     loadData();
//   }, []);

//   const loadData = async () => {
//     try {
//       const s = await getStats();
//       const a = await getApplications();

//       setStats(s);
//       setApps(a);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   // 🔥 UPDATE STATUS + AUTO REFRESH
//   const handleStatus = async (id, status) => {
//     try {
//       setLoading(true);
//       await updateStatus(id, status);
//       await loadData(); // refresh UI
//     } catch (err) {
//       console.error(err);
//       alert("Update Failed ❌");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <Navbar />

//       <div className="p-8 bg-gray-100 min-h-screen">

//         {/* 🔷 HEADER */}
//         <h1 className="text-3xl font-bold mb-6">
//           Admin Dashboard 🧑‍💼
//         </h1>

//         {/* 🔥 STATS */}
//         <div className="grid md:grid-cols-3 gap-6 mb-8">

//           <div className="bg-white p-6 rounded-xl shadow">
//             <h2 className="text-gray-500">Total Jobs</h2>
//             <p className="text-2xl font-bold text-blue-600">
//               {stats.totalJobs || 0}
//             </p>
//           </div>

//           <div className="bg-white p-6 rounded-xl shadow">
//             <h2 className="text-gray-500">Applications</h2>
//             <p className="text-2xl font-bold text-green-600">
//               {stats.totalApplications || 0}
//             </p>
//           </div>

//           <div className="bg-white p-6 rounded-xl shadow">
//             <h2 className="text-gray-500">Status</h2>
//             <p className="text-sm text-gray-600">
//               Manage hiring process
//             </p>
//           </div>

//         </div>

//         {/* 🔥 APPLICATION TABLE */}
//         <div className="bg-white rounded-xl shadow overflow-x-auto">

//           <table className="w-full text-left">
//             <thead className="bg-gray-100">
//               <tr>
//                 <th className="p-4">Student</th>
//                 <th className="p-4">Job</th>
//                 <th className="p-4">Status</th>
//                 <th className="p-4">Actions</th>
//               </tr>
//             </thead>

//             <tbody>
//               {apps.length > 0 ? (
//                 apps.map((a) => (
//                   <tr key={a._id} className="border-t">

//                     <td className="p-4 font-medium">
//                       {a.studentName}
//                     </td>

//                     <td className="p-4">
//                       {a.job?.title}
//                     </td>

//                     <td className="p-4">
//                       <span className="px-2 py-1 rounded text-sm bg-gray-200">
//                         {a.status}
//                       </span>
//                     </td>

//                     <td className="p-4 space-x-2">

//                       <button
//                         disabled={loading}
//                         onClick={() =>
//                           handleStatus(a._id, "Selected")
//                         }
//                         className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
//                       >
//                         Select
//                       </button>

//                       <button
//                         disabled={loading}
//                         onClick={() =>
//                           handleStatus(a._id, "Rejected")
//                         }
//                         className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
//                       >
//                         Reject
//                       </button>

//                     </td>

//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="4" className="p-4 text-center">
//                     No Applications Found
//                   </td>
//                 </tr>
//               )}
//             </tbody>

//           </table>

//         </div>

//       </div>
//     </>
//   );
// }

// export default AdminDashboard;

import { useEffect, useState } from "react";
import {
  getStats,
  getApplications,
  updateStatus,
  createJob,
} from "../services/jobService";

import Navbar from "../components/Navbar";

function AdminDashboard() {

  const [stats, setStats] = useState({});
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(false);

  // 🔥 JOB FORM STATES
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [description, setDescription] = useState("");
  const [eligibility, setEligibility] = useState("");
  const [deadline, setDeadline] = useState("");

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const s = await getStats();
      const a = await getApplications();

      setStats(s);
      setApps(a);

    } catch (err) {
      console.error(err);
    }
  };

  // 🔥 UPDATE STATUS
  const handleStatus = async (id, status) => {
    try {

      setLoading(true);

      await updateStatus(id, status);

      await loadData();

    } catch (err) {
      console.error(err);
      alert("Update Failed ❌");

    } finally {
      setLoading(false);
    }
  };

  // 🔥 CREATE JOB
  const handleCreateJob = async () => {
    try {

      if (!title || !company) {
        return alert("Title and Company required ❌");
      }

      setLoading(true);

      await createJob({
        title,
        company,
        description,
        eligibility,
        deadline,
      });

      alert("Opportunity Added Successfully ✅");

      // CLEAR FORM
      setTitle("");
      setCompany("");
      setDescription("");
      setEligibility("");
      setDeadline("");

    } catch (err) {
      console.error(err);
      alert("Failed to create job ❌");

    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-50 p-8">

        {/* HEADER */}
        <div className="bg-white p-8 rounded-3xl shadow-lg mb-8">

          <div className="flex flex-col md:flex-row justify-between items-center">

            <div>
              <h1 className="text-4xl font-extrabold text-gray-800">
                Admin Dashboard 🧑‍💼
              </h1>

              <p className="text-gray-500 mt-2">
                Manage jobs, applications and hiring process.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-4 rounded-2xl mt-4 md:mt-0 shadow-lg">
              <h2 className="text-sm uppercase tracking-wide">
                Portal Status
              </h2>

              <p className="text-2xl font-bold">
                Active 🚀
              </p>
            </div>

          </div>

        </div>

        {/* STATS */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">

            <div className="flex justify-between items-center">

              <div>
                <h2 className="text-gray-500 font-medium">
                  Total Jobs
                </h2>

                <p className="text-4xl font-extrabold text-blue-600 mt-2">
                  {stats.totalJobs || 0}
                </p>
              </div>

              <div className="text-5xl">
                💼
              </div>

            </div>

          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">

            <div className="flex justify-between items-center">

              <div>
                <h2 className="text-gray-500 font-medium">
                  Applications
                </h2>

                <p className="text-4xl font-extrabold text-green-600 mt-2">
                  {stats.totalApplications || 0}
                </p>
              </div>

              <div className="text-5xl">
                📊
              </div>

            </div>

          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">

            <div className="flex justify-between items-center">

              <div>
                <h2 className="text-gray-500 font-medium">
                  Hiring
                </h2>

                <p className="text-xl font-bold text-purple-600 mt-2">
                  Ongoing
                </p>
              </div>

              <div className="text-5xl">
                🚀
              </div>

            </div>

          </div>

        </div>

        {/* ADD OPPORTUNITY */}
        <div className="bg-white p-8 rounded-3xl shadow-lg mb-10">

          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            Add New Opportunity 🚀
          </h2>

          <div className="grid md:grid-cols-2 gap-5">

            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Job Title"
              className="border p-3 rounded-xl"
            />

            <input
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Company Name"
              className="border p-3 rounded-xl"
            />

            <input
              value={eligibility}
              onChange={(e) => setEligibility(e.target.value)}
              placeholder="Eligibility"
              className="border p-3 rounded-xl"
            />

            <input
              type="date"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              className="border p-3 rounded-xl"
            />

          </div>

          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Job Description"
            rows="5"
            className="border p-3 rounded-xl w-full mt-5"
          />

          <button
            onClick={handleCreateJob}
            disabled={loading}
            className="mt-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-2xl hover:scale-105 transition duration-300 shadow-lg"
          >
            {loading ? "Creating..." : "Add Opportunity"}
          </button>

        </div>

        {/* APPLICATION TABLE */}
        <div className="bg-white rounded-3xl shadow-lg overflow-x-auto">

          <div className="p-6 border-b">
            <h2 className="text-2xl font-bold text-gray-800">
              Student Applications 📋
            </h2>
          </div>

          <table className="w-full text-left">

            <thead className="bg-gray-100">

              <tr>
                <th className="p-4">Student</th>
                <th className="p-4">Job</th>
                <th className="p-4">Status</th>
                <th className="p-4">Actions</th>
              </tr>

            </thead>

            <tbody>

              {apps.length > 0 ? (
                apps.map((a) => (

                  <tr
                    key={a._id}
                    className="border-t hover:bg-gray-50 transition"
                  >

                    <td className="p-4 font-medium">
                      {a.student?.name || "Student"}
                    </td>

                    <td className="p-4">
                      {a.job?.title}
                    </td>

                    <td className="p-4">

                      <span className={`px-3 py-1 rounded-full text-sm font-medium
                      ${
                        a.status === "Selected"
                          ? "bg-green-100 text-green-700"
                          : a.status === "Rejected"
                          ? "bg-red-100 text-red-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}>

                        {a.status}

                      </span>

                    </td>

                    <td className="p-4 space-x-2">

                      <button
                        disabled={loading}
                        onClick={() =>
                          handleStatus(a._id, "Selected")
                        }
                        className="bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-600 transition"
                      >
                        Select
                      </button>

                      <button
                        disabled={loading}
                        onClick={() =>
                          handleStatus(a._id, "Rejected")
                        }
                        className="bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600 transition"
                      >
                        Reject
                      </button>

                    </td>

                  </tr>

                ))
              ) : (

                <tr>

                  <td
                    colSpan="4"
                    className="p-8 text-center text-gray-500"
                  >
                    No Applications Found
                  </td>

                </tr>

              )}

            </tbody>

          </table>

        </div>

      </div>
    </>
  );
}

export default AdminDashboard;