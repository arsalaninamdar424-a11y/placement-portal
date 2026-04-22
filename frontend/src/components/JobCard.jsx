import { useNavigate } from "react-router-dom";
import { applyJob } from "../services/jobService";

function JobCard({ job }) {
  const navigate = useNavigate();

  const handleApply = async () => {
    await applyJob({
      job: job._id,
      studentName: "Arsalan",
    });

    alert("Applied Successfully");
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="text-lg font-bold">{job.title}</h3>
      <p className="text-gray-600">{job.company}</p>

      <button
        onClick={handleApply}
        className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Apply
      </button>
    </div>
  );
}

export default JobCard;