import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
    // dob: {
    //     type: Date,
    // },
    // phone: {
    //     type: Number,
    //     required: true
    // },
    //     required: true
    // },
    // country: {
    //     type: String,
    //     required: true
    // },
    // skills: {
    //     type: [String]
    // },
    // experience: {
    //     type: String,
    //     required: true
    // },
    // resume: {
    //     type: String,
    //     required: true
    // },
    // appliedJobs: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "jobs"
    // }],
    // savedJobs: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //   ref: "jobs",
    // }]
})

export default mongoose.models.User || mongoose.model("User", UserSchema)