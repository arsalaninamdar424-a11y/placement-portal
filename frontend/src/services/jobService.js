import API from "./api";

// ✅ GET ALL JOBS
export const getJobs = async () => {
  const res = await API.get("/jobs");
  return res.data;
};

// ✅ APPLY TO JOB
export const applyJob = async (data) => {
  const res = await API.post("/applications", data);
  return res.data;
};

// ✅ GET APPLICATIONS (Admin)
export const getApplications = async () => {
  const res = await API.get("/applications");
  return res.data;
};

// ✅ UPDATE STATUS
export const updateStatus = async (id, status) => {
  const res = await API.put(`/applications/${id}`, { status });
  return res.data;
};

// ✅ ADMIN STATS
export const getStats = async () => {
  const res = await API.get("/admin/stats");
  return res.data;
};