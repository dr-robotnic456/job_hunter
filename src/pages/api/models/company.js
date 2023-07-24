import mongoose, {Schema} from "mongoose"

const companySchema = new Schema({
    name: {
        type:String,
        required:true
    },
    slug: {
        type:String
    },
    logo: {
        type: String
    },
    city: {
        type:String,
        required:true
    },
    website: {
        type:String
    },
    slogan: {
        type:String
    }
})

export default mongoose.models.Company || mongoose.model("Company", companySchema)