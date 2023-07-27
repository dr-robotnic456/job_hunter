import mongoose, {Schema} from "mongoose";

const JobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  requirements: {
    type: [String],
  },
  employmentType: {
    type: String,
    enum: ["fulltime", "parttime", "remote"],
    default: "fulltime",
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true
  }
});

const Job = mongoose.models.Job || mongoose.model("Job", JobSchema);

export default Job;
