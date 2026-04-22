import { useEffect, useState } from "react";
import { getJobs } from "../services/jobService";
import JobCard from "../components/JobCard";

function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    getJobs().then(res => setJobs(res.data));
  }, []);

  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold mb-6">Available Jobs</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {jobs.map(job => (
          <JobCard key={job._id} job={job} />
        ))}
      </div>

    </div>
  );
}

export default Jobs;