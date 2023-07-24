const { Schema, default: mongoose } = require("mongoose");

const categorySchema = new Schema({
    name:{
        type:String,
        required: true
    },
    keywords: {
        type: [String],
        required: true
    },
    job:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Job"
    }
})

export default mongoose.models.Category || mongoose.model("Category", categorySchema)