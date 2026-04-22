import { useEffect, useState } from "react";
import { getStats, getApplications, updateStatus } from "../services/jobService";

function AdminDashboard() {
  const [stats, setStats] = useState({});
  const [apps, setApps] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const s = await getStats();
    const a = await getApplications();
    setStats(s.data);
    setApps(a.data);
  };

  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      {/* STATS */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-blue-500 text-white p-4 rounded">
          Total Jobs: {stats.totalJobs}
        </div>
        <div className="bg-green-500 text-white p-4 rounded">
          Total Applications: {stats.totalApplications}
        </div>
      </div>

      {/* APPLICATIONS */}
      <h2 className="text-xl font-semibold mb-4">Applications</h2>

      {apps.map((a) => (
        <div key={a._id} className="bg-white p-4 mb-3 rounded shadow">

          <p><b>{a.studentName}</b></p>
          <p>{a.job?.title}</p>
          <p>Status: <span className="font-semibold">{a.status}</span></p>

          <div className="mt-2 space-x-2">
            <button
              onClick={()=>updateStatus(a._id,"Selected")}
              className="bg-green-500 text-white px-3 py-1 rounded"
            >
              Select
            </button>

            <button
              onClick={()=>updateStatus(a._id,"Rejected")}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Reject
            </button>
          </div>

        </div>
      ))}

    </div>
  );
}

export default AdminDashboard;