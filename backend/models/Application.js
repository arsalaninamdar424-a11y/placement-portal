const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  job: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Job"
  },
  status: {
    type: String,
    enum: ["Applied", "Shortlisted", "Rejected"],
    default: "Applied"
  }
});

module.exports = mongoose.model("Application", applicationSchema);