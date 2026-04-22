import { useEffect, useState } from "react";
import { getJobs, applyJob } from "../services/jobService";

function StudentDashboard() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Fetch jobs from backend
  const fetchJobs = async () => {
    try {
      const data = await getJobs();
      setJobs(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  // ✅ Apply to job
  const handleApply = async (jobId) => {
    try {
      await applyJob({
        job: jobId,
        studentName: "Arsalan", // later we use logged-in user
      });

      alert("Applied Successfully");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* 🔷 Heading */}
      <h1 className="text-2xl font-bold mb-6">🎓 Student Dashboard</h1>

      {/* 🔷 Loading */}
      {loading ? (
        <p>Loading jobs...</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">

          {/* 🔷 Job Cards */}
          {jobs.map((job) => (
            <div
              key={job._id}
              className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
            >
              <h2 className="text-lg font-bold">{job.title}</h2>
              <p className="text-gray-600">{job.company}</p>
              <p className="text-sm mt-2">{job.description}</p>

              <button
                onClick={() => handleApply(job._id)}
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Apply
              </button>
            </div>
          ))}

        </div>
      )}
    </div>
  );
}

export default StudentDashboard;